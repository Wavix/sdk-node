type TwoFaChannel = "sms" | "voice"

export interface GetServiceVerificationsQueryParameters {
  from: Date
  to: Date
}

export interface CreateTwoFaVerificationPayload {
  service_id: string
  to: string
  channel: TwoFaChannel
}

export interface ResendTwoFaVerificationCodePayload {
  channel: TwoFaChannel
}

export interface ValidateTwoFaCodePayload {
  code: string
}

export interface TwoFaVerificationListItem {
  created_at: string
  session_id: string
  phone_number: string
  destination_country: string
  status: string
  charge: string
  service_id: string
  service_name: string
}

export interface TwoFaVerificationEventListItem {
  created_at: string
  event: string
  status: string
  charge: string
  error: string | null
}

export interface CreateTwoFaVerificationResponse {
  success: boolean
  service_id: string
  session_url: string
  session_id: string
  destination: string
  created_at: string
  lookup: {
    number_type: string
    country: string
    current_carrier: string
  }
}

export interface ValidateTwoFaCodeResponse {
  is_valid: boolean
}

export interface ResendTwoFaVerificationCodeResponse {
  success: boolean
  channel: TwoFaChannel
  destination: string
  created_at: string
}

export type GetServiceVerificationsResponse = Array<TwoFaVerificationListItem>

export type GetServiceVerificationEventsResponse = Array<TwoFaVerificationEventListItem>
