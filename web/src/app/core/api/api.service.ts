import { Injectable } from "@angular/core"
import { ApiRestGateway } from "./api-rest-gateway.service"
import { IRestResponse } from "src/app/models/interfaces"
import { Observable } from "rxjs"
import { restoreView } from "@angular/core/src/render3"

@Injectable()
export class ApiService<T> {
  constructor(private rest: ApiRestGateway<T>) {}

  public get endpoint(): any {
    return this.rest.endpoint
  }

  createRestEndpoint(path: string): any {
    this.rest.createRestEndpoint(path)
  }
  appendCustomPathToEndpoint(extPath: string) {
    this.rest.createRestEndpoint(`${this.rest.endpoint.path}${extPath}`)
  }

  searchCompanyLike(options: {
    filter: string
    join: {}
    page: number
  }): Observable<IRestResponse<T[]>> {
    return this.rest.query(options)
  }

  uploadImage(item: T): Observable<IRestResponse<T>> {
    return this.rest.create(item)
  }

  createCompany(item: T): Observable<IRestResponse<T>> {
    return this.rest.create(item)
  }

  searchJobPositionLike(options: {
    filter: string
    join: {}
    page: number
  }): Observable<IRestResponse<T[]>> {
    return this.rest.query(options)
  }

  createJobOrder(item: T): Observable<IRestResponse<T>> {
    return this.rest.create(item)
  }

  getJobListing(options: {
    [key: string]: any
  }): Observable<IRestResponse<T[]>> {
    return this.rest.query(options)
  }

  getJobOrderDetailById(
    //id: string | number,
    options: Params
  ): Observable<IRestResponse<T[]>> {
    //return this.rest.get(id)
    return this.rest.detailQuery(options)
  }
}

interface Params {
  [key: string]: any
}
