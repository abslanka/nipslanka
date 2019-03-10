import { Injectable, Inject } from "@angular/core"
import { BASE_URL } from "../../app.config"
import { HttpInterceptorService, RESTService } from "@covalent/http"
import { CustomRESTService } from "../../utility/transport/http/custom.rest.service"
import { ICustomRestOptions } from "../../utility/transport/http/custom-http.rest.options"
import { Observable, of } from "rxjs"
import { Response } from "@angular/http"
import { IRestResponse } from "../../models/interfaces"

@Injectable()
export class ApiRestGateway<T> {
  public rest: CustomRESTService<any> //: RESTService<any> ;
  public endpoint = { path: undefined }
  config: ICustomRestOptions

  constructor(
    @Inject(BASE_URL) private baseURL: string,
    private http: HttpInterceptorService /* Http */
  ) {
    this.config = {
      baseUrl: baseURL,
    }
  }

  createRestEndpoint(path: string, resrc?: any) {
    this.endpoint.path = path
    this.config.path = this.endpoint.path

    this.rest = new CustomRESTService<T | typeof resrc>(this.http, this.config)
  }

  createOrValidateRestEndpoint(endpoint: { path?: string }, resrc?: any) {
    if (!!!endpoint.path) {
      if (!this.rest)
        throw "Endpoint is not valid : " + JSON.stringify(endpoint)
    }

    this.createRestEndpoint(endpoint.path, resrc)

    return true
  }

  validateApiGateway() {
    if (!this.rest)
      throw "ApiGateway is not valid, endpoint config: " +
        JSON.stringify(this.config)

    return true
  }

  //query(query?: IRestQuery, transform?: IRestTransform): Observable<any>;
  query(
    //endpoint: { path?: string },
    query?: IQuery,
    transform?: ITransform
  ): Observable<IRestResponse<T[]>> {
    if (this.validateApiGateway()) {
      return this.rest.query(query, transform)
    }
  }

  detailQuery(
    //endpoint: { path?: string },
    query?: IQuery,
    transform?: ITransform
  ): Observable<IRestResponse<T[]>> {
    if (this.validateApiGateway()) {
      return this.rest.query(query, transform)
    }
  }

  //get(id: string | number, transform?: IRestTransform): Observable<any>;
  get(
    //endpoint: { path?: string },
    id: string | number,
    transform?: ITransform
  ): /* Observable<any> {
    if (this.createOrValidateRestEndpoint(endpoint)) {
      return this.rest.get(id, transform)
    } */

  Observable<IRestResponse<T>> {
    if (this.validateApiGateway()) {
      return this.rest.get(id, transform)
    }
  }

  create(
    //endpoint: { path?: string },
    obj: T,
    transform?: ITransform
  ): Observable<IRestResponse<T>> {
    if (this.validateApiGateway()) {
      return this.rest.create(obj, transform)
    }
  }

  update(
    endpoint: { path?: string },
    id: string | number,
    obj: T,
    transform?: ITransform
  ): Observable<any> {
    if (this.createOrValidateRestEndpoint(endpoint)) {
      return this.rest.update(id, obj, transform)
    }
  }

  delete(
    endpoint: { path?: string },
    id: string | number,
    transform?: ITransform
  ): Observable<any> {
    if (this.createOrValidateRestEndpoint(endpoint)) {
      return this.rest.delete(id, transform)
    }
  }
}

export interface ITransform {
  (response: Response): any
}

export interface IQuery {
  [key: string]: any
}
