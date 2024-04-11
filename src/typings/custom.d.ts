interface Options {
  appid: string
}

interface ErrorResponse {
  success: boolean
  message: string
}

interface BasicSuccess {
  success: boolean
}

interface Pagination {
  current_page: number
  per_page: number
  total: number
  total_pages: number
}

type PaginatedResponse<T, ItemsKey extends string = "items"> = {
  [key in ItemsKey]: Array<T>
} & { pagination: Pagination }
