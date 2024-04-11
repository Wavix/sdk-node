export interface Did {
  activation_fee: string
  channels: number
  city: string
  cnam: boolean
  country: string
  country_short_name: string
  free_min: number
  id: number
  monthly_fee: string
  number: string
  per_min: string
  require_docs: []
  sms_enabled: boolean
  sms_price: string
}

export interface CartContentDocType {
  id: number
  name: string
  title: string
}

export interface GetCartContentResponse {
  dids: Array<Did>
  doc_types: Array<CartContentDocType>
}

export interface CheckoutPayload {
  ids: Array<string>
}

export interface CheckoutResponse {
  success: boolean
}

export type AddDidNumbersToCartResponse = Array<Did>

export interface AddDidNumbersToCartPayload {
  ids: Array<string>
}
