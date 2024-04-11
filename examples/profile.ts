import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/profile.ts

const main = async () => {
  // Get customer info
  const getCustomerInfoResponse = await wavix.profile.getCustomerInfo()

  console.log("Get customer info", getCustomerInfoResponse)

  // Get account settings
  const getAccountSettingsResponse = await wavix.profile.getAccountSettings()

  console.log("Get account settings", getAccountSettingsResponse)

  // Update account settings
  const callUpdateAccountSettingsResponse = async () => {
    const res = await wavix.profile.updateCustomerInfo({
      additional_info: "",
      attn_contact_name: "",
      contact_email: "",
      company_name: "",
      billing_address: "",
      default_destinations: [{ transport: "sms", value: "123" }],
      first_name: "",
      last_name: "",
      phone: "",
      timezone: ""
    })

    console.log("Update account settings", res)
  }

  process.exit()
}

main()
