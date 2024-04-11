import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios"

interface QueryParams {
  [k: string]: unknown
}

class Http {
  private appid: string
  private instance: AxiosInstance

  constructor(
    private baseURL: string,
    appid: string
  ) {
    this.appid = appid
    this.instance = axios.create({
      baseURL,
      headers: {
        Accept: "application/json"
      }
    })
  }

  public async get<T>(path: string): Promise<T> {
    try {
      const response = await this.instance.get<T>(this.getUrl(path))
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async post<T, U>(path: string, payload?: U, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.post<T>(this.getUrl(path), this.parsePayload<U>(payload), config)
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async put<T, U>(path: string, payload?: U): Promise<T> {
    try {
      const response = await this.instance.put<T>(this.getUrl(path), this.parsePayload<U>(payload))
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async patch<T, U>(path: string, payload?: U): Promise<T> {
    try {
      const response = await this.instance.patch<T>(this.getUrl(path), this.parsePayload<U>(payload))
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async delete<T>(path: string): Promise<T> {
    try {
      const response = await this.instance.delete<T>(this.getUrl(path))
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public paramsToQueryString(params?: object): string {
    if (!params || !Object.keys(params).length) return ""

    const queryPrams = this.parsePayload(params)

    return Object.keys(queryPrams)
      .map(key => `${String(key)}=${queryPrams[key]}`)
      .join("&")
  }

  private parsePayload<T = object>(params?: T): Partial<QueryParams> {
    const queryPrams = { ...params } as Partial<T>

    // Convert Date object to ISO string
    for (const key in queryPrams) {
      if (queryPrams[key] instanceof Date) {
        const date = queryPrams[key] as Date
        queryPrams[key] = this.formatDate(date) as T[Extract<keyof T, string>]
      }
    }

    return queryPrams
  }

  private getUrl(path: string) {
    return `${this.baseURL}${path}${path.includes("?") ? "&" : "?"}appid=${this.appid}`
  }

  private errorHandler(error: AxiosError): unknown {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ErrorResponse>

      if (serverError && serverError.response) {
        return serverError.response.data
      }
    }

    return { success: false, message: "" }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")

    return `${year}-${month}-${day}`
  }
}

export default Http
