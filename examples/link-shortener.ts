import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/link-shortener.ts

const main = async () => {
  // Get short links metrics
  const getShortLinksMetricsResponse = await wavix.linkShortener.getShortLinksMetrics({
    from: new Date("2023-01-01"),
    to: new Date()
  })

  console.log("Get short links metrics response", getShortLinksMetricsResponse)

  // Create short link
  const callCreateShortLinkResponse = async () => {
    const res = await wavix.linkShortener.createShortLink({
      phone: "",
      expiration_time: "",
      fallback_url: "",
      link: "",
      utm_campaign: ""
    })

    console.log("Create short link response", res)
  }

  process.exit()
}

main()
