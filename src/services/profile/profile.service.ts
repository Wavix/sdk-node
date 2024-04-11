import ServiceBase from "../service.base"
import { GetAccountSettingsResponse, GetCustomerInfoResponse, UpdateCustomerInfoPayload, UpdateCustomerInfoResponse } from "./profile.interface"

class Profile extends ServiceBase {
  public getCustomerInfo() {
    return this.http.get<GetCustomerInfoResponse>("/v1/profile")
  }

  public getAccountSettings() {
    return this.http.get<GetAccountSettingsResponse>("/v1/profile/config")
  }

  public updateCustomerInfo(payload: UpdateCustomerInfoPayload) {
    return this.http.put<UpdateCustomerInfoResponse, UpdateCustomerInfoPayload>("/v1/profile", payload)
  }
}

export { Profile }
