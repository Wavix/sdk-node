import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/voice-campaigns.ts

const main = async () => {
  // Trigger a scenario
  const callTriggerScenarioResponse = async () => {
    const res = await wavix.voiceCampaigns.triggerScenario({
      voice_campaign: {
        caller_id: "",
        callflow_id: 123,
        contact: ""
      }
    })

    console.log("Trigger scenario response", res)
  }

  process.exit()
}

main()
