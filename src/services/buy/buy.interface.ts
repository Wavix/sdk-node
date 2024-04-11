export interface Country {
  id: number
  has_provinces_or_states: boolean
  name: string
}

export interface Region {
  id: number
  name: string
}

export interface City {
  id: number
  area_code: number
  name: string
}

export interface GetCountriesListResponse {
  countries: Array<Country>
}

export interface GetCountryCitiesListResponse {
  cities: Array<City>
}

export interface GetRegionCitiesListResponse {
  cities: Array<City>
}

export interface GetRegionsListResponse {
  regions: Array<Region>
}

export interface GetAvailableToPurchaseDidsQueryParameters {
  text_enabled_only?: boolean
  type_filter?: string
  page?: number
  per_page?: number
}
