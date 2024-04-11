import { DidDestinationTransport, DidDocumentId } from "../src/services/did/did.interface"
import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/did.ts

const main = async () => {
  // Get account dids
  const getAccountDidsResponse = await wavix.did.getAccountDids()

  console.log("Get account dids response", getAccountDidsResponse)

  // Update did destinations
  const callUpdateDidDestinationsResponse = async () => {
    const res = await wavix.did.updateDidDestinations({
      destinations: [{ destination: "11111", priority: 1, transport: DidDestinationTransport.SIPTrunk, trunk_id: 8 }],
      ids: [2],
      sms_relay_url: null
    })

    console.log("Update did destinations response", res)
  }

  // Upload did document
  const callUploadDidDocumentResponse = async () => {
    const res = await wavix.did.uploadDidDocument({
      did_ids: ["1"],
      file: {
        data: Buffer.from("test"),
        name: "image.jpg"
      },
      doc_id: DidDocumentId.Id
    })

    console.log("Upload did document response", res)
  }

  // Return dids to stock
  const returnDidsToStockResponse = await wavix.did.returnDidsToStock([])

  console.log("Return dids to stock response", returnDidsToStockResponse)

  process.exit()
}

main()
