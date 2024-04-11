import ServiceBase from "../service.base"
import {
  CreateE911Payload,
  CreateE911Response,
  DeleteE911QueryParameters,
  DeleteE911Response,
  E911ListItem,
  GetListQueryParameters,
  ValidateAddressPayload,
  ValidateAddressResponse
} from "./e911.interface"

class E911 extends ServiceBase {
  public async getList(params?: GetListQueryParameters) {
    const queryString = this.http.paramsToQueryString(params)
    return this.http.get<PaginatedResponse<E911ListItem>>(`/v1/e911-records${queryString ? `?${queryString}` : ""}`)
  }

  public async validateAddress(payload: ValidateAddressPayload) {
    return this.http.post<ValidateAddressResponse, ValidateAddressPayload>(`/v1/e911-records/validate-address`, payload)
  }

  public async create(payload: CreateE911Payload) {
    return this.http.post<CreateE911Response, CreateE911Payload>("/v1/e911-records", payload)
  }

  public async delete(params: DeleteE911QueryParameters) {
    const queryString = this.http.paramsToQueryString(params)
    return this.http.delete<DeleteE911Response>(`/v1/e911-records?${queryString}`)
  }
}

export { E911 }
