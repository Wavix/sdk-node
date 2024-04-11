import { wavix } from "./wavix"
import type { CallEvent } from "../src/index"

// npx ts-node-dev --transpile-only examples/call.ts

wavix.call.onEvent(event => {
  console.log("Websocket Event", event)

  if (event.event_type === "answered") {
    wavix.call.playAudio(event.uuid, "https://<YOUR AUDIO FILE>")

    setTimeout(() => {
      wavix.call.collectDTMF(event.uuid, {
        min_digits: 0,
        max_digits: 4,
        timeout: 10,
        termination_character: "#",
        audio: {
          url: "https://<YOUR AUDIO FILE>"
        }
      })
    }, 1000)
  }

  if (event.event_payload?.in_call_event === "collect_completed") {
    const digits = event.event_payload.in_call_event_data.digits
    wavix.call.tts(event.uuid, `You pressed: ${digits.split("").join(", ")}`)

    setTimeout(() => wavix.call.hangup(event.uuid), 5000)
  }
})

const main = async () => {
  try {
    await wavix.call.connect()
    const response = await wavix.call.start({ from: "", to: "" })

    if (response.uuid) {
      console.log("Call started!", response)

      const list = await wavix.call.getList()
      console.log("List", list)
    }
  } catch (error) {
    console.error("Error connecting to websocket:", error.message)
  }
}

main()
