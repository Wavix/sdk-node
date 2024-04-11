export enum TransactionType {
  Adjustments = 0,
  Deal = 1,
  Activation = 2,
  Month = 3,
  ActivationFee = 4,
  MonthFee = 5,
  Call = 6,
  CallFee = 7,
  CallFixFee = 11,
  PaypalIn = 8,
  PaypalOut = 9,
  Tax = 10,
  Webcall = 12,
  Sip = 14,
  Sms = 15,
  Channel = 16,
  ChannelFee = 17,
  CallSkypeFee = 18,
  CcIn = 19,
  PaymentFee = 20,
  Connection = 21,
  ConnectionFee = 22,
  Porting = 23,
  InboundSms = 24,
  WireTransfer = 25,
  Subscription = 26,
  Surcharge = 27,
  Hlr = 28,
  NumberValidation = 29,
  CallRecording = 30,
  CallRecordingStorage = 31,
  CampaignBuilderRun = 32,
  VoicemailDetection = 33,
  SenderIdDestinationRegistration = 34,
  SenderIdDestinationFee = 35,
  TwoFaService = 36,
  Ivr = 37,
  E911Activation = 38,
  Mms = 39,
  InboundMms = 40,
  CallTranscription = 41,
  TendlcBrands = 42,
  TendlcCampaignFee = 43,
  DidOrder = 44,
  AdjustmentsIn = 45
}

export interface GetAccountTransactionsQueryParameters {
  from_date: string
  to_date: string
  type?: TransactionType
  details_contains?: string
  payments?: boolean
  page?: number
  per_page?: number
}

export interface GetAccountInvoicesQueryParameters {
  page?: number
  per_page?: number
}

export interface AccountTransactionsItem {
  amount: string
  balance_after: string
  date: string
  details: string
  id: number
  show_invoice: boolean
  status: string
  type: number
}

export interface AccountInvoicesItem {
  id: number
  amount: string
  from_date: string
  to_date: string
}
