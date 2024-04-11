import ServiceBase from "../service.base"
import {
  DidListItem,
  GetAccountDidsQueryParameters,
  ReturnDidsToStockResponse,
  UpdateDidDestinationsPayload,
  UpdateDidDestinationsResponse,
  UploadDidDocumentPayload,
  UploadDidDocumentResponse
} from "./did.interface"
import FormData from "form-data"

class Did extends ServiceBase {
  public async getAccountDids(queryParameters?: GetAccountDidsQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)
    return this.http.get<PaginatedResponse<DidListItem>>(`/v1/mydids${queryString ? `?${queryString}` : ""}`)
  }

  public async updateDidDestinations(payload: UpdateDidDestinationsPayload) {
    return this.http.post<UpdateDidDestinationsResponse, UpdateDidDestinationsPayload>("/v1/mydids/update-destinations", payload)
  }

  public async uploadDidDocument(payload: UploadDidDocumentPayload) {
    const { did_ids, doc_id, file } = payload
    const formData = new FormData()

    formData.append("did_ids", did_ids.join(","))
    formData.append("doc_id", String(doc_id))
    formData.append("doc_attachment", file.data, file.name)

    return this.http.post<UploadDidDocumentResponse, FormData>("/v1/mydids/papers", formData, {
      headers: formData.getHeaders()
    })
  }

  public async returnDidsToStock(ids: Array<number>) {
    const queryString = ids.map((id, index) => `ids[${index}]=${id}`).join("&")

    return this.http.delete<ReturnDidsToStockResponse>(`/v1/mydids?${queryString}`)
  }
}

export { Did }
