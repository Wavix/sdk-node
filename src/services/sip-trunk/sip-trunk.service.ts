import ServiceBase from "../service.base"
import {
  CreateSipTrunkPayload,
  DeleteSipTrunkResponse,
  GetAccountSipTrunksQueryParameters,
  SipTrunkConfigurationItem,
  SipTrunkListItem,
  UpdateSipTrunkPayload
} from "./sip-trunk.interface"

class SipTrunk extends ServiceBase {
  public async getAccountSipTrunks(queryParameters?: GetAccountSipTrunksQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return this.http.get<PaginatedResponse<SipTrunkListItem, "sip_trunks">>(`/v1/trunks${queryString ? `?${queryString}` : ""}`)
  }

  public async getSipTrunkConfiguration(sipTrunkId: number) {
    return this.http.get<SipTrunkConfigurationItem>(`/v1/trunks/${sipTrunkId}`)
  }

  public async createSipTrunk(payload: CreateSipTrunkPayload) {
    return this.http.post<SipTrunkConfigurationItem, CreateSipTrunkPayload>("/v1/trunks", payload)
  }

  public async updateSipTrunk(sipTrunkId: number, payload: UpdateSipTrunkPayload) {
    return this.http.put<SipTrunkConfigurationItem, UpdateSipTrunkPayload>(`/v1/trunks/${sipTrunkId}`, payload)
  }

  public async deleteSipTrunk(sipTrunkId: number) {
    return this.http.delete<DeleteSipTrunkResponse>(`/v1/trunks/${sipTrunkId}`)
  }
}

export { SipTrunk }
