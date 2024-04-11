import ServiceBase from "../service.base"
import { TriggerScenarioPayload, TriggerScenarioResponse } from "./voice-campaigns.interface"

class VoiceCampaigns extends ServiceBase {
  public async triggerScenario(payload: TriggerScenarioPayload) {
    return this.http.post<TriggerScenarioResponse, TriggerScenarioPayload>(`/v1/voice-campaigns`, payload)
  }
}

export { VoiceCampaigns }
