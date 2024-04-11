import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/sip-trunk.ts

const main = async () => {
  // Get account sip trunks
  const getAccountSipTrunksResponse = await wavix.sipTrunk.getAccountSipTrunks({ per_page: 10 })

  console.log("Get account sip trunks response", getAccountSipTrunksResponse)

  // Get sip trunk configuration
  const getSipTrunkConfigurationResponse = await wavix.sipTrunk.getSipTrunkConfiguration(488)

  console.log("Get sip trunk configuration response", getSipTrunkConfigurationResponse)

  const callCreateSipTrunkResponse = async () => {
    const res = await wavix.sipTrunk.createSipTrunk({
      call_limit: 3600,
      callerid: "",
      host: "Digest",
      label: "t12345",
      max_call_cost: "0.1",
      max_channels: 2,
      password: "Qwerty1234",
      rewrite_cond: "rewrite_cond8",
      rewrite_prefix: "1",
      ip_restrict: false,
      didinfo_enabled: true,
      call_restrict: true,
      cost_limit: false,
      channels_restrict: false,
      rewrite_enabled: false,
      transcription_enabled: true,
      transcription_threshold: 6
    })

    console.log("Create sip trunk response", res)
  }

  // Delete sip trunk
  const deleteSipTrunkResponse = await wavix.sipTrunk.deleteSipTrunk(1070)

  console.log("Delete sip trunk response", deleteSipTrunkResponse)

  // Update sip trunk
  const callUpdateSipTrunkResponse = async () => {
    const res = await wavix.sipTrunk.updateSipTrunk(0, {
      call_limit: 3600,
      callerid: "",
      host: "Digest",
      label: "t123456",
      max_call_cost: "0.1",
      max_channels: 2,
      password: "Qwerty1234",
      rewrite_cond: "rewrite_cond8",
      rewrite_prefix: "1",
      ip_restrict: false,
      didinfo_enabled: true,
      call_restrict: true,
      cost_limit: false,
      channels_restrict: false,
      rewrite_enabled: false,
      transcription_enabled: true,
      transcription_threshold: 6
    })

    console.log("Update sip trunk response", res)
  }

  process.exit()
}

main()
