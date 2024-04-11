import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/cdr.ts

const main = async () => {
  const requiredParameters = {
    from: new Date("2023-01-01"),
    to: new Date(),
    type: "placed" as const,
    per_page: 1
  }

  // Get cdr list
  const responseGetCdrList = await wavix.cdr.list(requiredParameters)

  console.log("Cdr list", responseGetCdrList)

  // Get cdr list with pagination filter
  const responseGetCdrListWithPaginationFilter = await wavix.cdr.list({ ...requiredParameters, page: 1, per_page: 5 })

  console.log("Cdr list with pagination filter", responseGetCdrListWithPaginationFilter)

  // Get cdr list with uuid filter
  const responseGetCdrListWithUuidFilter = await wavix.cdr.list({ ...requiredParameters, uuid: "" })

  console.log("Cdr list with uuid filter", responseGetCdrListWithUuidFilter)

  // Get cdr list with sip_trunk filter
  const responseGetCdrListWithSipTrunkFilter = await wavix.cdr.list({ ...requiredParameters, sip_trunk: "11111" })

  console.log("Cdr list with sip_trunk filter", responseGetCdrListWithSipTrunkFilter)

  // Get cdr list with disposition filter
  const responseGetCdrListWithDispositionFilter = await wavix.cdr.list({ ...requiredParameters, disposition: "busy" })

  console.log("Cdr list with disposition filter", responseGetCdrListWithDispositionFilter)

  // Get cdr list with to_search filter
  const responseGetCdrListWithToSearchFilter = await wavix.cdr.list({ ...requiredParameters, to_search: "1231122" })

  console.log("Cdr list with to_search filter", responseGetCdrListWithToSearchFilter)

  // Get cdr list with from_search filter
  const responseGetCdrListWithFromSearchFilter = await wavix.cdr.list({ ...requiredParameters, from_search: "11111111" })

  console.log("Cdr list with from_search filter", responseGetCdrListWithFromSearchFilter)
}

main()
