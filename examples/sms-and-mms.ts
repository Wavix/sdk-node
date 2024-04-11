import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/sms-and-mms.ts

const main = async () => {
  // Get account sender ids
  const getAccountSenderIdsResponse = await wavix.smsAndMms.getAccountSenderIds()

  console.log("Get account sender ids response", getAccountSenderIdsResponse)
  console.log(getAccountSenderIdsResponse.items[1])

  // Get sender id restrictions
  const getSenderIdRestrictionsResponse = await wavix.smsAndMms.getSenderIdRestrictions({ country: "AF", type: "numeric" })

  console.log("Get sender id restrictions response", getSenderIdRestrictionsResponse)

  // Get account messages
  const getAccountMessagesResponse = await wavix.smsAndMms.getAccountMessages({
    sent_after: new Date("2023-01-01"),
    sent_before: new Date(),
    type: "outbound"
  })

  console.log("Get account messages response", getAccountMessagesResponse)

  // Create sender id
  const callCreateSenderIdResponse = async () => {
    const res = await wavix.smsAndMms.createSenderId({ countries: ["DZ"], sender_id: "", type: "numeric" })

    console.log("Create sender id response", res)
  }

  // Delete sender id
  const callDeleteSenderIdResponse = async () => {
    const res = await wavix.smsAndMms.deleteSenderId("")

    console.log("Delete sender id response", res)
  }

  // Send message
  const callSendMessage = async () => {
    const res = await wavix.smsAndMms.sendMessage({
      from: "",
      to: "",
      message_body: {
        text: "Hi there, this is a message from Wavix",
        media: ["media0"]
      }
    })

    console.log("Send message response", res)
  }

  // Opt out sms messages phone number
  const callOptOutSmsMessagesPhoneNumber = async () => {
    const res = await wavix.smsAndMms.optOutSmsMessagesPhoneNumber({ opt_out: { number: "" } })

    console.log("Opt out sms messages phone number response", res)
  }

  // Send high volume traffic message
  const callSendHighVolumeTrafficMessage = async () => {
    const res = await wavix.smsAndMms.sendHighVolumeTrafficMessage({
      from: "",
      to: "",
      message_body: {
        text: "Hi there, this is a message from Wavix",
        media: ["media0"]
      }
    })

    console.log("Send message response", res)
  }

  process.exit()
}

main()
