type MessageDeliveryStatusUnion = "accepted" | "pending" | "sent" | "delivered" | "undelivered" | "expired" | "rejected" | "dlr_expired"

type MessageDirection = "inbound" | "outbound"
type MessageType = "sms" | "mms"
type SenderIdType = "numeric" | "alphanumeric"

export interface SenderIdListItem {
  id: string
  sender_id: string
  type: string
  allowlisted_in: Array<string>
}

export interface GetAccountSenderIdsResponse {
  items: Array<SenderIdListItem>
}

export interface GetSenderIdRestrictionsResponse {
  self_service: boolean
}

export interface DeleteSenderIdResponse {
  success: boolean
}

export interface OptOutSmsMessagesPhoneNumberResponse {
  success: boolean
}

export interface SendHighVolumeTrafficMessageResponse {
  message_id: string
  status: string
}

export interface SendMessageResponse extends AccountMessageListItem {}

export interface GetSenderIdRestrictionsQueryParameters {
  country: string
  type: SenderIdType
}

export interface GetAccountMessagesQueryParameters {
  sent_after: string
  sent_before: string
  type: MessageDirection
  from?: string
  to?: string
  status?: MessageDeliveryStatusUnion
  tag?: string
  page?: number
  per_page?: number
}

export interface CreateSenderIdPayload {
  sender_id: string
  type: SenderIdType
  countries: Array<string>
}

export interface SendMessagePayload {
  from: string
  to: string
  message_body: {
    text: string
    media?: Array<string>
  }
  callback_url?: string
  validity?: number
  external_id?: string
}

export interface SendHighVolumeTrafficMessagePayload extends SendMessagePayload {}

export interface OptOutSmsMessagesPhoneNumberPayload {
  opt_out: {
    number: string
    sender_id?: string
  }
}

export interface AccountMessageListItem {
  charge: string
  delivered_at: string | null
  direction: MessageDirection
  error_message: string | null
  from: string
  to: string
  mcc: string
  mnc: string
  message_body: {
    text: string
    media: Array<string> | null
  }
  message_id: string
  message_type: MessageType
  segments: number
  sent_at: string | null
  status: MessageDeliveryStatusUnion
  submitted_at: string
  tag: string | null
}
