import Http from "../http"

abstract class ServiceBase {
  readonly options: Options
  readonly http: Http

  protected baseURL = "https://api.wavix.com"

  constructor(options: Options) {
    this.options = options

    if (options.baseURL) {
      this.baseURL = options.baseURL
    }

    this.http = new Http(this.baseURL, options.appid)
  }
}

export default ServiceBase
