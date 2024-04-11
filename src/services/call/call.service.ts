import WebSocket from "ws"
import ServiceBase from "../service.base"
import {
  CallResponse,
  TerminateResponse,
  StartCall,
  CallEvent,
  StartCallErrorResponse,
  PlayAudioOptions,
  CollectDTMFOptions,
  TTSOptions,
  TTSPayload,
  PlayAudioPayload,
  TransferOptions
} from "./call.interface"

interface Callback {
  onEvent: Array<(event: string) => void>
}

class Call extends ServiceBase {
  private ws: WebSocket | null = null
  private callback: Callback = {
    onEvent: []
  }

  public connect(): Promise<void | Error> {
    const url = new URL(this.baseURL)

    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(`wss://${url.host}/sip?appid=${this.options.appid}`)

      this.ws.onmessage = event => {
        this.callback.onEvent.forEach(cb => cb(event.data.toString()))
      }

      this.ws.onerror = error => {
        reject(new Error(error?.message || "Calls websocket error"))
      }

      this.ws.onopen = () => {
        resolve()
      }
    })
  }

  public onEvent(callback: (event: CallEvent) => void): void {
    const onEventCallback = (event: string) => {
      try {
        const eventPayload = JSON.parse(event.toString()) as CallEvent
        callback(eventPayload)
      } catch (e) {
        console.error("Error in JSON parse: ", e)
        console.error("Event: ", event.toString())
      }
    }

    this.callback.onEvent.push(onEventCallback)
  }

  public getList(): Promise<CallResponse> {
    return this.http.get<CallResponse>("/v1/call")
  }

  public start(payload: StartCall): Promise<CallEvent & StartCallErrorResponse> {
    return this.http.post<CallEvent & StartCallErrorResponse, StartCall>("/v1/call", {
      ...payload,
      call_recording: payload.call_recording || false,
      machine_detection: payload.machine_detection || false
    })
  }

  public playAudio(callUUID: string, url: string, options?: PlayAudioOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, PlayAudioPayload>(`/v1/call/${callUUID}/play`, {
      audio_file: url,
      timeout_before_playing: options?.timeout_before_playing || 0,
      timeout_between_playing: options?.timeout_between_playing || 0
    })
  }

  /**
   * Voice list
   * https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
   */
  public tts(callUUID: string, text: string, options?: TTSOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, TTSPayload>(`/v1/call/${callUUID}/tts`, {
      text,
      voice: options?.voice || "Joey",
      delay_before_playing: options?.delay_before_playing || 0,
      max_repeat_count: options?.max_repeat_count || 0
    })
  }

  public transfer(callUUID: string, options: TransferOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, TransferOptions>(`/v1/call/${callUUID}/transfer`, {
      from: options.from,
      to: options.to,
      call_recording: options.call_recording || false,
      dual_channel_recording: options.dual_channel_recording,
      machine_detection: options.machine_detection || false,
      ...(options.a_playback_audio && { a_playback_audio: options.a_playback_audio }),
      ...(options.b_playback_audio && { b_playback_audio: options.b_playback_audio })
    })
  }

  public collectDTMF(callUUID: string, options: CollectDTMFOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, CollectDTMFOptions>(`/v1/call/${callUUID}/collect`, options)
  }

  public hangup(callUUID: string): Promise<TerminateResponse> {
    return this.http.delete<TerminateResponse>(`/v1/call/${callUUID}`)
  }
}

export { Call }
