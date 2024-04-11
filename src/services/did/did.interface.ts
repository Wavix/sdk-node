export enum DidDestinationTransport {
  SipURI = 1,
  PSTN = 4,
  SIPTrunk = 5
}

export enum DidDocumentId {
  Id = 1,
  Address = 2,
  LocalAddress = 3
}

export interface GetAccountDidsQueryParameters {
  city_id?: number
  search?: string
  label?: string
  label_present?: string
  page?: number
  per_page?: number
}

interface DidListItemDocument {
  id: number
  allow_replace: boolean
  did_number: string
  doc_content_type: string
  doc_file_name: string
  doc_type_id: number
  status: string
  url: string
}

interface DidListItemDestination {
  id: number
  destination: string
  priority: number
  transport: number
  trunk_id: number
  trunk_label: string
}

export interface DidListItem {
  id: number
  activation_fee: string
  added: string
  call_recording_enabled: boolean
  channels: number
  city: string
  cnam: boolean
  country: string
  country_short_name: string
  destination: Array<DidListItemDestination>
  documents: Array<DidListItemDocument>
  label: string | null
  monthly_fee: string
  number: string
  paid_until: string
  per_min: string
  require_docs: Array<string>
  seconds: string
  sms_enabled: boolean
  sms_relay_url: string | null
  status: string
  transcription_enabled: boolean
  transcription_threshold: number
}

interface DidDestination {
  destination: string
  priority: number
  transport: DidDestinationTransport
  trunk_id?: number
}

export interface UpdateDidDestinationsPayload {
  ids: Array<number>
  sms_relay_url: string | null
  destinations: Array<DidDestination>
}

export interface UpdateDidDestinationsResponse {
  success: boolean
}

export interface UploadDidDocumentPayload {
  did_ids: Array<string>
  file: { data: Buffer; name: string }
  doc_id: DidDocumentId
}

export interface UploadDidDocumentResponse {
  success: boolean
}

export interface ReturnDidsToStockResponse {
  success: boolean
}
