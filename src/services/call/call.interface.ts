export type CallContext = "outbound" | "inbound"
export type EventType = "call_setup" | "ringing" | "answered" | "completed" | "in_call_event"

export interface Call {
  id: string
  context: CallContext
  from: string
  to: string
  started_at: Date
  answered_at: Date | null
  is_recording: boolean
}

export interface CallResponse {
  calls: Array<Call>
}

export interface TerminateResponse {
  success: boolean
}

export interface StartCall {
  from: string
  to: string
  status_callback?: string
  call_recording?: boolean
  machine_detection?: boolean
  max_duration?: number
}

export interface CallEvent {
  uuid: string
  event_type: EventType
  event_time: Date
  event_payload: CallEventPayload | null
  from: string
  to: string
  call_started: Date
  call_answered: null
  machine_detected: boolean
  tag: string
}

type CallEventPayload = CallEventDTMF

interface CallEventDTMF {
  in_call_event: "collect_completed"
  in_call_event_data: { digits: string; reason: string }
}

export interface StartCallErrorResponse {
  success: boolean
  message: string
  error?: {
    [field: string]: string
  }
}

export type SocketEventType = "connect" | "event" | "disconnect"

export interface PlayAudioOptions {
  timeout_before_playing: number
  timeout_between_playing: number
}

export interface CollectDTMFOptions {
  min_digits?: number
  max_digits?: number
  timeout?: number
  termination_character?: string
  audio: {
    url: string
    stop_on_keypress?: boolean
  }
  callback_url?: string
}

export interface PlayAudioPayload extends PlayAudioOptions {
  audio_file: string
}

export interface TTSOptions {
  delay_before_playing?: number
  max_repeat_count?: number
  voice?: string
}

export interface TTSPayload extends TTSOptions {
  text: string
}

export interface TransferOptions {
  from: string
  to: string
  call_recording?: boolean
  dual_channel_recording?: boolean
  machine_detection?: boolean
  a_playback_audio?: string
  b_playback_audio?: string
}
