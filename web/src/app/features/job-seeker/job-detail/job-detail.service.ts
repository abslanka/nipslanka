import { Injectable } from "@angular/core"

import { Observable, of } from "rxjs"
import { IRestResponse } from "src/app/models/interfaces"
import { ApiService } from "src/app/core"
import { map, catchError } from "rxjs/operators"
import { JobOrderDto } from "src/app/models/dto"
import { plainToClass } from "class-transformer"

@Injectable({
  providedIn: "root",
})
export class JobDetailService {
  path = "/employer/job-order"

  constructor(private apiService: ApiService<JobOrderDto>) {}

  getJobOrderDetail(jobOrderId: number): Observable<JobOrderDto> {
    this.resetEnpoint()

    let options: { [key: string]: any } = {}
    options["filter"] = `id||eq||${jobOrderId}` //term.toLowerCase()
    options["join"] = `company`
    //options["join"] = `jobPosition&join=jobOrder`

    let res = this.apiService.getJobOrderDetailById(options).pipe(
      // if required transform the data value of companyDto[] recieved from api response
      map(results => this.transform(results)), // results.data this.transform(results)
      // catch errors
      catchError(err => {
        console.log("error while getting job order detail by Id :", err)
        return of(null)
      })
    )
    //console.log("res getJobOrderDetail:", res)
    return res
  }

  transform(results: IRestResponse<JobOrderDto[]>): JobOrderDto {
    let jobOrderDto: JobOrderDto = plainToClass(JobOrderDto, results.data[0])
    return jobOrderDto
  }

  setEnpointPath(path: string) {
    this.path = path
  }

  resetEnpoint() {
    this.apiService.createRestEndpoint(this.path)
  }
}
