import ServiceBase from "../service.base"
import { AccountInvoicesItem, AccountTransactionsItem, GetAccountInvoicesQueryParameters, GetAccountTransactionsQueryParameters } from "./billing.interface"

class Billing extends ServiceBase {
  public getAccountTransactions(queryParameters: GetAccountTransactionsQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)

    return this.http.get<PaginatedResponse<AccountTransactionsItem, "transactions">>(`/v1/billing/transactions?${queryString}`)
  }

  public getAccountInvoices(queryParameters?: GetAccountInvoicesQueryParameters) {
    const queryString = this.http.paramsToQueryString(queryParameters)

    return this.http.get<PaginatedResponse<AccountInvoicesItem, "invoices">>(`/v1/billing/invoices${queryString ? `?${queryString}` : ""}`)
  }

  public downloadInvoiceById(id: number) {
    return this.http.get(`/v1/billing/invoices/${id}`)
  }
}

export { Billing }
