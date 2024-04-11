type NonEmptyArray<T> = [T, ...Array<T>]

interface GetCustomerInfoResponseDefaultDestinations {
  transport: string
  value: string
}

interface GetAccountSettingsResponseGlobalLimits {
  max_call_duration: number
  max_sip_channels: number
  max_call_rate: string
}

interface UpdateCustomerInfoPayloadDefaultDestinations {
  transport: "sms"
  value: string
}

export interface GetCustomerInfoResponse {
  id: number
  additional_info: string
  attn_contact_name: string
  billing_address: string
  company_name: string
  contact_email: string
  default_destinations: Array<GetCustomerInfoResponseDefaultDestinations>
  email: string
  first_name: string
  last_name: string
  phone: string
  timezone: string
}

export interface GetAccountSettingsResponse {
  balance: string
  global_limits: GetAccountSettingsResponseGlobalLimits
}

export interface UpdateCustomerInfoPayload {
  additional_info: string
  attn_contact_name: string
  billing_address: string
  company_name: string
  contact_email: string
  default_destinations?: NonEmptyArray<UpdateCustomerInfoPayloadDefaultDestinations>
  first_name: string
  last_name: string
  phone: string
  timezone: string
}

export type UpdateCustomerInfoResponse = GetCustomerInfoResponse
