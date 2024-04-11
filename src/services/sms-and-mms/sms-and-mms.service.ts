import ServiceBase from "../service.base"
import {
  AccountMessageListItem,
  CreateSenderIdPayload,
  DeleteSenderIdResponse,
  GetAccountMessagesQueryParameters,
  GetAccountSenderIdsResponse,
  GetSenderIdRestrictionsQueryParameters,
  GetSenderIdRestrictionsResponse,
  OptOutSmsMessagesPhoneNumberPayload,
  OptOutSmsMessagesPhoneNumberResponse,
  SendHighVolumeTrafficMessagePayload,
  SendHighVolumeTrafficMessageResponse,
  SendMessagePayload,
  SendMessageResponse,
  SenderIdListItem
} from "./sms-and-mms.interface"

class SmsAndMms extends ServiceBase {
  public async getAccountSenderIds() {
    return this.http.get<GetAccountSenderIdsResponse>("/v2/messages/sender_ids")
  }

  public async getSenderIdRestrictions(queryParameters: GetSenderIdRestrictionsQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return this.http.get<GetSenderIdRestrictionsResponse>(`/v2/messages/sender_ids/restrictions?${queryString}`)
  }

  public async getAccountMessages(queryParameters: GetAccountMessagesQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return this.http.get<PaginatedResponse<AccountMessageListItem>>(`/v2/messages?${queryString}`)
  }

  public async createSenderId(payload: CreateSenderIdPayload) {
    return this.http.post<SenderIdListItem, CreateSenderIdPayload>(`/v2/messages/sender_ids`, payload)
  }

  public async deleteSenderId(id: string) {
    return this.http.delete<DeleteSenderIdResponse>(`/v2/messages/sender_ids/${id}`)
  }

  public async sendMessage(payload: SendMessagePayload) {
    return this.http.post<SendMessageResponse, SendMessagePayload>(`/v2/messages`, payload)
  }

  public async sendHighVolumeTrafficMessage(payload: SendHighVolumeTrafficMessagePayload) {
    return this.http.post<SendHighVolumeTrafficMessageResponse, SendHighVolumeTrafficMessagePayload>("/v2/messages/async", payload)
  }

  public async optOutSmsMessagesPhoneNumber(payload: OptOutSmsMessagesPhoneNumberPayload) {
    return this.http.post<OptOutSmsMessagesPhoneNumberResponse, OptOutSmsMessagesPhoneNumberPayload>("/v2/messages/opt_outs", payload)
  }
}

export { SmsAndMms }
