import { Injectable } from "@angular/core"

import { Observable, of } from "rxjs"
import { IRestResponse } from "src/app/models/interfaces"
import { ApiService, ApiRestGateway } from "src/app/core"
import { map, catchError } from "rxjs/operators"
import { VacancyDto } from "src/app/models/dto"
import { plainToClass } from "class-transformer"
import * as moment from "moment"

@Injectable()
export class JobSearchService {
  path = "/job-seeker/job-listing"
  constructor(private apiService: ApiService<VacancyDto>) {
    this.resetEnpoint()
  }
  /* 
  getJobListing(): Observable<any[]> {
    return this._http.get<any[]>(INTERNAL_DOCS_URL + "/data.json").pipe(
      catchError(() => {
        return new Observable((subscriber: Subscriber<any[]>) => {
          subscriber.next([])
        })
      })
    )
  } */

  getJobListing(term: string): Observable<IRestResponse<VacancyDto[]>> {
    this.resetEnpoint()

    let options: { [key: string]: any } = {}
    options["filter"] = "" //`name||starts||${term}` //term.toLowerCase()
    options["join"] = `jobPosition`
    options["join"] = `jobPosition&join=jobOrder`

    let res = this.apiService.getJobListing(options).pipe(
      // if required transform the data value of companyDto[] recieved from api response
      map(results => results), // this.transform(results)
      // catch errors
      catchError(err => {
        console.log("error while getting vacancy list :", err)
        return of(null)
      })
    )
    console.log("res transformed:", res)
    return res
  }

  /*   transform(results: IRestResponse<VacancyDto[]>): IRestResponse<VacancyDto[]> {
    let jobListingList = results.data.map(obj => {
      let v = plainToClass(VacancyDto, obj)
      v.createdAt = moment(moment(v.createdAt).format("DD/MM/YYYY")).toDate()
      return v
    })
    console.log("jobListingList transformed:", jobListingList)
    return { data: jobListingList, error: undefined }
  } */

  setEnpointPath(path: string) {
    this.path = path
  }

  resetEnpoint() {
    this.apiService.createRestEndpoint(this.path)
  }
}
