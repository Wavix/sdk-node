import ServiceBase from "../service.base"
import type {
  NumberValidationType,
  NumberValidationBody,
  NumberValidationBatchPayload,
  NumberValidationResponse,
  NumberValidationAsyncResponse
} from "./number-validation.interface"

class NumberValidation extends ServiceBase {
  public validateSingle(number: string, type: NumberValidationType): Promise<NumberValidationBody> {
    return this.http.get<NumberValidationBody>(`/v1/validation?phone_number=${number}&type=${type}`)
  }

  public validateBatchSync(numbers: Array<string>, type: NumberValidationType): Promise<NumberValidationResponse> {
    return this.http.post<NumberValidationResponse, NumberValidationBatchPayload>("/v1/validation", {
      phone_numbers: numbers,
      async: false,
      type
    })
  }

  public validateBatchAsync(numbers: Array<string>, type: NumberValidationType): Promise<NumberValidationAsyncResponse> {
    return this.http.post<NumberValidationAsyncResponse, NumberValidationBatchPayload>("/v1/validation", {
      phone_numbers: numbers,
      async: true,
      type
    })
  }

  public getValidationResult(uuid: string): Promise<NumberValidationResponse> {
    return this.http.get<NumberValidationResponse>(`/v1/validation/${uuid}`)
  }
}

export { NumberValidation }
