import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios"

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
      const response = await this.instance.post<T>(this.getUrl(path), payload, config)
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async put<T, U>(path: string, payload?: U): Promise<T> {
    try {
      const response = await this.instance.put<T>(this.getUrl(path), payload)
      return response.data
    } catch (error) {
      return this.errorHandler(error as AxiosError) as T
    }
  }

  public async patch<T, U>(path: string, payload?: U): Promise<T> {
    try {
      const response = await this.instance.patch<T>(this.getUrl(path), payload)
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

  public paramsToQueryString(params = {}): string {
    const queryParameterKeys = Object.keys(params) as Array<keyof typeof params>
    return queryParameterKeys.map(queryParameterKey => `${queryParameterKey}=${params[queryParameterKey]}`).join("&")
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
}

export default Http
