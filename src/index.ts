import {
  Billing,
  Buy,
  Call,
  Cart,
  Cdr,
  Did,
  LinkShortener,
  NumberValidation,
  Profile,
  SpeechAnalytics,
  E911,
  TwoFa,
  SipTrunk,
  SmsAndMms,
  VoiceCampaigns
} from "./services"

import type { Options } from "./interface"

export type { CallEvent } from "./services"

export default class Wavix {
  public call: Call
  public numberValidation: NumberValidation
  public cdr: Cdr
  public profile: Profile
  public speechAnalytics: SpeechAnalytics
  public billing: Billing
  public cart: Cart
  public buy: Buy
  public did: Did
  public voiceCampaigns: VoiceCampaigns
  public sipTrunk: SipTrunk
  public smsAndMms: SmsAndMms
  public twoFa: TwoFa
  public linkShortener: LinkShortener
  public e911: E911

  constructor(options: Options) {
    this.call = new Call(options)
    this.numberValidation = new NumberValidation(options)
    this.cdr = new Cdr(options)
    this.profile = new Profile(options)
    this.speechAnalytics = new SpeechAnalytics(options)
    this.billing = new Billing(options)
    this.cart = new Cart(options)
    this.buy = new Buy(options)
    this.did = new Did(options)
    this.voiceCampaigns = new VoiceCampaigns(options)
    this.sipTrunk = new SipTrunk(options)
    this.smsAndMms = new SmsAndMms(options)
    this.twoFa = new TwoFa(options)
    this.linkShortener = new LinkShortener(options)
    this.e911 = new E911(options)
  }

  public get version(): string {
    return process.env.npm_package_version || "0.0.0"
  }
}
