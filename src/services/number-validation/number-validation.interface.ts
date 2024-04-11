type ValidationStatus = "success" | "progress"
export type NumberValidationType = "format" | "analysis" | "validation"

export interface NumberValidationBody {
  phone_number: string
  is_valid: boolean
  country_code: string
  e164_format: string
  national_format: string
  ported: boolean
  mcc: string
  mnc: string
  phone_type: string
  carrier_name: string
  risky_destination: boolean
  unallocated_range: boolean
  reachable: boolean
  roaming: boolean
  timezone: string
  cost: string
  error_code: string
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
