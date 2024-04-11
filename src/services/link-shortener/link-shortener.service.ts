import ServiceBase from "../service.base"
import { CreateShortLinkPayload, CreateShortLinkResponse, GetShortLinksMetricsQueryParameters, GetShortLinksMetricsResponse } from "./link-shortener.interface"

class LinkShortener extends ServiceBase {
  public async getShortLinksMetrics(params: GetShortLinksMetricsQueryParameters) {
    const queryString = this.http.paramsToQueryString(params)
    return this.http.get<GetShortLinksMetricsResponse>(`/v1/short-links/metrics?${queryString}`)
  }

  public async createShortLink(payload: CreateShortLinkPayload) {
    return this.http.post<CreateShortLinkResponse, CreateShortLinkPayload>("/v1/short-links", payload)
  }
}

export { LinkShortener }
