interface HostRequest {
  host: string
  status: string
}

export interface SipTrunkListItem {
  id: number
  auth_method: string
  call_recording_enabled: boolean
  callerid: string
  charge: string
  host_request: HostRequest | null
  label: string
  machine_detection_enabled: boolean
  multiple_numbers: boolean
  name: string
  status: string
  talk_time: number
  passthrough?: boolean
  transcription_enabled: boolean
  transcription_threshold: number
}

export interface GetAccountSipTrunksQueryParameters {
  page?: number
  per_page?: number
}

export interface CreateSipTrunkPayload {
  label: string
  password: string
  callerid: string
  ip_restrict: boolean
  allowed_ips?: Array<string>
  host: string
  channels_restrict: boolean
  max_channels: number
  cost_limit: boolean
  max_call_cost: string
  call_restrict: boolean
  call_limit: number
  didinfo_enabled: boolean
  rewrite_enabled: boolean
  rewrite_prefix: string
  rewrite_cond: string
  call_recording_enabled?: boolean
  machine_detection_enabled?: boolean
  transcription_enabled: boolean
  transcription_threshold: number
}

export interface UpdateSipTrunkPayload extends CreateSipTrunkPayload {}

export interface SipTrunkConfigurationItem {
  id: number
  name: string
  callerid: string
  label: string
  ip_restrict: boolean
  allowed_ips: {
    id: number
    ip: string
  }
  auth_method: string
  host: string
  channels_restrict: boolean
  max_channels: number
  call_restrict: boolean
  call_limit: number
  cost_limit: boolean
  max_call_cost: string
  rewrite_enabled: boolean
  rewrite_cond: string
  rewrite_prefix: string
  call_recording_enabled: boolean
  machine_detection_enabled: boolean
  didinfo_enabled: boolean
  transcription_enabled: boolean
  transcription_threshold: number
  created_at: string
}

export interface DeleteSipTrunkResponse {
  success: boolean
}
