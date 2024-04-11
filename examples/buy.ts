import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/buy.ts

const main = async () => {
  // Get countries list
  const getCountriesListResponse = await wavix.buy.getCountriesList()

  console.log("Get countries list response", getCountriesListResponse)

  // Get regions list
  const getRegionsListResponse = await wavix.buy.getRegionsList(8652)

  console.log("Get regions list response", getRegionsListResponse)

  // Get country cities list
  const getCountryCitiesListResponse = await wavix.buy.getCountryCitiesList(8693)

  console.log("Get country cities list response", getCountryCitiesListResponse)

  // Get region cities list
  const getRegionCitiesListResponse = await wavix.buy.getRegionCitiesList(8652, 356)

  console.log("Get region cities list response", getRegionCitiesListResponse)

  // Get available to purchase dids
  const getAvailableToPurchaseDidsResponse = await wavix.buy.getAvailableToPurchaseDids(8652, 120555)

  console.log("Get available to purchase dids response", getAvailableToPurchaseDidsResponse)

  process.exit()
}

main()
