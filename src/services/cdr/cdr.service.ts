import ServiceBase from "../service.base"
import { CdrResponse, QueryParameters, CdrResponseDetails } from "./cdr.interface"

class Cdr extends ServiceBase {
  public async list(queryParameters: QueryParameters): Promise<PaginatedResponse<CdrResponse> | ErrorResponse> {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return await this.http.get<PaginatedResponse<CdrResponse>>(`/v1/cdr?${queryString}`)
  }

  public async get(uuid: string): Promise<CdrResponseDetails | ErrorResponse> {
    return await this.http.get<CdrResponseDetails>(`/v1/cdr/${uuid}`)
  }

  public async downloadRecording(uuid: string): Promise<ArrayBuffer | ErrorResponse> {
    return await this.http.get(`/v1/recordings/${uuid}`)
  }
}

export { Cdr }
