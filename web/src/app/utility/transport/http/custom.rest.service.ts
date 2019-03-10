import { Injectable, Inject } from "@angular/core"
import { Response, Http, Headers } from "@angular/http"
import { RESTService, HttpInterceptorService } from "@covalent/http"
import { BASE_URL } from "src/app/app.config"
import { ICustomRestOptions } from "./custom-http.rest.options"

@Injectable()
export class CustomRESTService<T> extends RESTService<T | any> {
  constructor(
    private _http: Http | HttpInterceptorService,
    private _config: ICustomRestOptions
  ) {
    super(_http, {
      baseUrl: _config.baseUrl,
      path: _config.path,
      baseHeaders: new Headers({
        "Access-Control-Allow-Origin": "*",
      }),
      dynamicHeaders: () => new Headers(),
      transform: (res: Response): any => res.json(),
    })
  }

  /*   constructor(
    private _baseURL: string,
    private _http: Http | HttpInterceptorService,
    
  ) {
    super(_http, {
      baseUrl: _baseURL,
      path: _path,
      baseHeaders: new Headers({
        "Access-Control-Allow-Origin": "*",
      }),
      dynamicHeaders: () => new Headers(),
      transform: (res: Response): any => res.json(),
    })
  } */
}
