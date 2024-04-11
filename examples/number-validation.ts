import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/number-validation.ts

const main = async () => {
  // Single sync validation
  const response = await wavix.numberValidation.validateSingle("", "analysis")
  console.log("Single number", response.phone_number)

  // Batch sync validation
  const responseBatchSync = await wavix.numberValidation.validateBatchSync(["", "", ""], "validation")
  console.log("responseBatchSync", responseBatchSync)

  // Batch async validation
  const responseBatchAsync = await wavix.numberValidation.validateBatchAsync(["", "", ""], "validation")
  console.log("responseBatchAsync:", responseBatchAsync.request_uuid)

  // Get async validation result
  setTimeout(async () => {
    const validationResult = await wavix.numberValidation.getValidationResult(responseBatchAsync.request_uuid)
    console.log("validationResult", validationResult)

    process.exit()
  }, 2000)
}

main()
