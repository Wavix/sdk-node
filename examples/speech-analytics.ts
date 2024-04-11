import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/speech-analytics.ts

const main = async () => {
  // Search calls
  const searchCallsResponse = await wavix.speechAnalytics.searchCallsBySpecificKeywordsOrPhrases({
    from: "2020-01-01",
    to: "2023-12-31",
    page: 1,
    per_page: 15,
    type: "received"
  })

  console.log("Search calls response", searchCallsResponse.items)

  // Transcribe call
  const callTranscribeCallResponse = async () => {
    const res = await wavix.speechAnalytics.transcribeCallById("", { language: "es", webhook_url: "" })

    console.log("Transcribe call response", res)
  }

  // Request transcription
  const requestTranscriptionResponse = await wavix.speechAnalytics.requestTranscriptionByCallId("")

  console.log("Request transcription response", requestTranscriptionResponse)

  process.exit()
}

main()
