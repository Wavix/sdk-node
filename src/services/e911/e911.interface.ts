export interface GetListQueryParameters {
  phone_number?: string
}

export interface DeleteE911QueryParameters {
  phone_number: string
}

interface E911Address {
  location: string
  street_number: string
  street: string
  city: string
  state: string
  zip_code: string
  zip_plus_four: string
}

export interface CreateE911Payload {
  phone_number: string
  name: string
  address: E911Address
}

export interface ValidateAddressPayload {
  phone_number: string
  name: string
  address: E911Address
}

export interface E911ListItem {
  phone_number: string
  name: string
  address: E911Address
}

export interface CreateE911Response {
  success: boolean
}

export interface DeleteE911Response {
  success: boolean
}

export interface ValidateAddressResponse {
  status: number
  number: string
  corrected_address: E911Address
}
