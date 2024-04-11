import { Did } from "services/cart/cart.interface"
import ServiceBase from "../service.base"
import {
  GetAvailableToPurchaseDidsQueryParameters,
  GetCountriesListResponse,
  GetCountryCitiesListResponse,
  GetRegionCitiesListResponse,
  GetRegionsListResponse
} from "./buy.interface"

class Buy extends ServiceBase {
  public getCountriesList() {
    return this.http.get<GetCountriesListResponse>("/v1/buy/countries")
  }

  public getRegionsList(countryId: number) {
    return this.http.get<GetRegionsListResponse>(`/v1/buy/countries/${countryId}/regions`)
  }

  public getCountryCitiesList(countryId: number) {
    return this.http.get<GetCountryCitiesListResponse>(`/v1/buy/countries/${countryId}/cities`)
  }

  public getRegionCitiesList(countryId: number, regionId: number) {
    return this.http.get<GetRegionCitiesListResponse>(`/v1/buy/countries/${countryId}/regions/${regionId}/cities`)
  }

  public getAvailableToPurchaseDids(countryId: number, cityId: number, queryParameters?: GetAvailableToPurchaseDidsQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)

    return this.http.get<PaginatedResponse<Did, "dids">>(`/v1/buy/countries/${countryId}/cities/${cityId}/dids${queryString ? `?${queryString}` : ""}`)
  }
}

export { Buy }
