import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/e911.ts

const main = async () => {
  // Get list
  const response = await wavix.e911.getList()

  console.log("Get list response", response)

  // Create e911 record
  const callCreateE911RecordResponse = async () => {
    const res = await wavix.e911.create({
      address: {
        location: "2 floor",
        street_number: "550",
        street: "W Adams St",
        city: "Chicago",
        state: "IL",
        zip_code: "60661",
        zip_plus_four: ""
      },
      name: "Test Address",
      phone_number: ""
    })

    console.log("Create e911 record response", res)
  }

  // Validate address
  const callValidateAddressResponse = async () => {
    const res = await wavix.e911.validateAddress({
      address: {
        street_number: "550",
        street: "W Adams St",
        location: "2 floor",
        city: "Chicago",
        state: "Il",
        zip_code: "60661",
        zip_plus_four: ""
      },
      name: "Test sdk",
      phone_number: ""
    })

    console.log("Validate address response", res)
  }

  // Delete e911 record
  const callDeleteE911RecordResponse = async () => {
    const res = await wavix.e911.delete({ phone_number: "" })

    console.log("Delete e911 record response", res)
  }

  process.exit()
}

main()
