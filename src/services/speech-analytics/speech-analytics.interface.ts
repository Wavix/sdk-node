interface Turn {
  phone_number: string
  s: number
  e: number
  text: string
}

interface TranscriptionFilterItem {
  must?: Array<string>
  match?: Array<string>
  exclude?: Array<string>
}

interface TranscriptionFilter {
  agent?: TranscriptionFilterItem
  client?: TranscriptionFilterItem
  any?: TranscriptionFilterItem
}

export type SpeechAnalyticsLanguageUnion = "en" | "de" | "es"

export interface TranscribeCallByIdPayload {
  language: SpeechAnalyticsLanguageUnion
  webhook_url: string
}

export interface SearchCallsBySpecificKeywordsOrPhrasesRequestBody {
  type: "received" | "placed"
  from: Date
  to: Date
  page: number
  per_page: number
  from_search?: string
  to_search?: string
  sip_trunk?: string
  min_duration?: number
  transcription?: TranscriptionFilter
}

export interface SearchCallsBySpecificKeywordsOrPhrasesResponseItem {
  charge: string
  date: string
  destination: string
  disposition: string
  duration: number
  forward_fee: string
  from: string
  per_minute: string
  to: string
  call_uuid: string
  uuid: string | null
  sip_trunk: string | null
  transcription: {
    uuid: string
    url: string
  } | null
}

export interface RequestTranscriptionByCallIdResponse {
  transcript: {
    [key: string]: string
  }
  turns: Array<Turn>
  uuid: string
  language: SpeechAnalyticsLanguageUnion
  duration: number
  charge: number
  status: string
  transcription_date: string
}
