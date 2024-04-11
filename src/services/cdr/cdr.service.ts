import ServiceBase from "../service.base"
import { CdrResponse, QueryParameters } from "./cdr.interface"

class Cdr extends ServiceBase {
  public async list(queryParameters: QueryParameters): Promise<PaginatedResponse<CdrResponse>> {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return await this.http.get<PaginatedResponse<CdrResponse>>(`/v1/cdr?${queryString}`)
  }
}

export { Cdr }
