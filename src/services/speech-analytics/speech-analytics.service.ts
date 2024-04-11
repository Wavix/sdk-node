import ServiceBase from "../service.base"
import {
  RequestTranscriptionByCallIdResponse,
  SearchCallsBySpecificKeywordsOrPhrasesRequestBody,
  SearchCallsBySpecificKeywordsOrPhrasesResponseItem,
  TranscribeCallByIdPayload
} from "./speech-analytics.interface"

class SpeechAnalytics extends ServiceBase {
  public requestTranscriptionByCallId(id: string) {
    return this.http.get<RequestTranscriptionByCallIdResponse>(`/v1/cdr/${id}/transcription`)
  }

  public transcribeCallById(id: string, payload: TranscribeCallByIdPayload) {
    return this.http.put(`/v1/cdr/${id}/retranscribe`, payload)
  }

  public searchCallsBySpecificKeywordsOrPhrases(body: SearchCallsBySpecificKeywordsOrPhrasesRequestBody) {
    return this.http.post<PaginatedResponse<SearchCallsBySpecificKeywordsOrPhrasesResponseItem>, SearchCallsBySpecificKeywordsOrPhrasesRequestBody>(
      `/v1/cdr`,
      body
    )
  }
}

export { SpeechAnalytics }
