type CdrType = "placed" | "received"
type CdrCallDisposition = "answered" | "noanswer" | "busy" | "failed" | "all"

export interface CdrResponse {
  charge: string
  date: string
  destination: string
  disposition: string
  duration: number
  forward_fee: string
  from: string
  per_minute: string
  to: string
  uuid: string
}

export interface CdrResponseDetails {
  uuid: string
  charge: string
  date: Date
  destination: string
  disposition: string
  duration: number
  from: string
  per_minute: string
  recording_url: string | null
  sip_trunk: string
  to: string
}

export interface QueryParameters {
  from: Date
  to: Date
  type: CdrType
  disposition?: CdrCallDisposition
  from_search?: string
  to_search?: string
  page?: number
  per_page?: number
  sip_trunk?: string
  uuid?: string
}
