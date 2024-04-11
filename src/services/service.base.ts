import Http from "../http"

abstract class ServiceBase {
  static baseURL = "https://api.wavix.com"

  readonly options: Options
  readonly http: Http

  constructor(options: Options) {
    this.options = options
    this.http = new Http(ServiceBase.baseURL, options.appid)
  }
}

export default ServiceBase
