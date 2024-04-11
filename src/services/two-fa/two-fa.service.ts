import ServiceBase from "../service.base"
import {
  CreateTwoFaVerificationPayload,
  CreateTwoFaVerificationResponse,
  GetServiceVerificationEventsResponse,
  GetServiceVerificationsQueryParameters,
  GetServiceVerificationsResponse,
  ResendTwoFaVerificationCodePayload,
  ResendTwoFaVerificationCodeResponse,
  ValidateTwoFaCodePayload,
  ValidateTwoFaCodeResponse
} from "./two-fa.interface"

class TwoFa extends ServiceBase {
  public async createVerification(payload: CreateTwoFaVerificationPayload) {
    return this.http.post<CreateTwoFaVerificationResponse, CreateTwoFaVerificationPayload>("/v1/two-fa/verification", payload)
  }

  public async resendVerificationCode(sessionId: string, payload: ResendTwoFaVerificationCodePayload) {
    return this.http.post<ResendTwoFaVerificationCodeResponse, ResendTwoFaVerificationCodePayload>(`/v1/two-fa/verification/${sessionId}`, payload)
  }

  public async validateCode(sessionId: string, payload: ValidateTwoFaCodePayload) {
    return this.http.post<ValidateTwoFaCodeResponse, ValidateTwoFaCodePayload>(`/v1/two-fa/verification/${sessionId}/check`, payload)
  }

  public async cancelVerification(sessionId: string) {
    return this.http.patch(`/v1/two-fa/verification/${sessionId}/cancel`, {})
  }

  public async getServiceVerifications(serviceId: string, params: GetServiceVerificationsQueryParameters) {
    const queryString = this.http.paramsToQueryString(params)
    return this.http.get<GetServiceVerificationsResponse>(`/v1/two-fa/service/${serviceId}/sessions?${queryString}`)
  }

  public async getServiceVerificationEvents(sessionId: string) {
    return this.http.get<GetServiceVerificationEventsResponse>(`/v1/two-fa/session/${sessionId}/events`)
  }
}

export { TwoFa }
