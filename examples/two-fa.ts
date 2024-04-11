import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/two-fa.ts

const main = async () => {
  // Get 2fa service verifications
  const getServiceVerificationsResponse = await wavix.twoFa.getServiceVerifications("", {
    from: "2023-01-01",
    to: "2023-12-31"
  })

  console.log("Get 2fa service verifications response", getServiceVerificationsResponse)

  // Get 2fa service verification events
  const getServiceVerificationEventsResponse = await wavix.twoFa.getServiceVerificationEvents("")

  console.log("Get 2fa service verification events response", getServiceVerificationEventsResponse)

  // Create 2fa verification
  const callCreateVerificationResponse = async () => {
    const res = await wavix.twoFa.createVerification({
      channel: "sms",
      service_id: "",
      to: ""
    })

    console.log("create 2fa verification response", res)
  }

  // Resend 2fa verification code
  const callResendVerificationCodeResponse = async () => {
    const res = await wavix.twoFa.resendVerificationCode("", { channel: "sms" })

    console.log("Resend 2fa verification code response", res)
  }

  // Validate 2fa verification code
  const callValidateCodeResponse = async () => {
    const res = await wavix.twoFa.validateCode("", { code: "" })

    console.log("Validate 2fa verification code response", res)
  }

  // Cancel 2fa verification
  const callCancelVerificationResponse = async () => {
    const res = await wavix.twoFa.cancelVerification("")

    console.log("Cancel 2fa verification response", res)
  }

  process.exit()
}

main()
