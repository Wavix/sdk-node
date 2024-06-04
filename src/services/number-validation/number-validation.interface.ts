type ValidationStatus = "success" | "progress"
export type NumberValidationType = "format" | "analysis" | "validation"

export interface NumberValidationBody {
  phone_number: string
  valid: boolean
  country_code: string
  e164_format: string
  national_format: string
  charge: number
  mcc: string
  mnc: string
  ported: boolean
  number_type: string
  carrier_name: string
  risky_destination: boolean
  unallocated_range: boolean
  timezone: string
  reachable: boolean | null
  roaming: boolean | null
  error_code: number
}

export interface NumberValidationBatchPayload {
  phone_numbers: Array<string>
  async: boolean
  type: NumberValidationType
}

export interface NumberValidationResponse {
  status: ValidationStatus
  count: number
  pending: number
  items: Array<NumberValidationBody>
}

export interface NumberValidationAsyncResponse {
  request_uuid: string
}
