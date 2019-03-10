import { Injectable } from "@angular/core"
import { JobPositionDto } from "src/app/models/dto"
import { ApiService } from "src/app/core"
import { FormBuilder } from "@angular/forms"
import { Observable, of } from "rxjs"
import { IRestResponse } from "src/app/models/interfaces"
import { map, catchError } from "rxjs/operators"
import { plainToClass } from "class-transformer"

@Injectable({
  providedIn: "root",
})
export class JobPositionService {
  path = "/job-position"
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService<JobPositionDto> //private apiGateway: ApiRestGateway<Connect>
  ) {
    //apiGateway.createRestEndpoint({ path: "/" })
    //this.connectionTest()
    this.resetEnpoint()
  }

  autoCompleteSearch(
    term: string
  ): Observable<IRestResponse<JobPositionDto[]>> {
    //console.log("autocomplete search- endpoint:", this.apiService.endpoint)
    this.resetEnpoint()

    let filter = `name||starts||${term}` //term.toLowerCase()
    let join = "" //`contactPerson`
    let res = this.apiService
      .searchJobPositionLike({ filter, join, page: 1 })
      .pipe(
        // if required transform the data value of companyDto[] recieved from api response
        map(results => results), // this.transform(results)
        // catch errors
        catchError(err => {
          console.log("error while getting Job Position list :", err)
          return of(null)
        })
      )
    return res
  }

  transform(
    results: IRestResponse<JobPositionDto[]>
  ): IRestResponse<JobPositionDto[]> {
    let companyList = results.data.map(obj => plainToClass(JobPositionDto, obj))
    return { data: companyList, error: undefined }
  }

  setEnpointPath(path: string) {
    this.path = path
  }

  resetEnpoint() {
    this.apiService.createRestEndpoint(this.path)
  }
}
