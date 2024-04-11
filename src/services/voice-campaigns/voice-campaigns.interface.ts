export interface TriggerScenarioPayload {
  voice_campaign: { callflow_id: number; caller_id: string; contact: string }
}

export interface TriggerScenarioResponse {
  voice_campaign: { id: number; status: string; timestamp: string; caller_id: string; contact: string }
}
