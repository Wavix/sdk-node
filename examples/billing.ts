import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/billing.ts

const main = async () => {
  // Get account transactions
  const getAccountTransactionsResponse = await wavix.billing.getAccountTransactions({
    from_date: new Date("2023-09-01"),
    to_date: new Date(),
    per_page: 10,
    page: 1
  })

  console.log("Get account transactions response", getAccountTransactionsResponse)

  // Get account invoices
  const getAccountInvoicesResponse = await wavix.billing.getAccountInvoices()

  console.log("Get account invoices response", getAccountInvoicesResponse)

  // Download invoice by id
  const downloadInvoiceResponse = await wavix.billing.downloadInvoiceById(61)

  console.log("Download invoice by id response", downloadInvoiceResponse)

  process.exit()
}

main()
