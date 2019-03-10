import { Component, OnInit, Input, Inject } from "@angular/core"
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material"
import { VacancyDto, JobOrderDto } from "src/app/models/dto"
import { JobDetailService } from "./job-detail.service"
import { IRestResponse } from "src/app/models/interfaces"

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.scss"],
})
export class JobDetailComponent implements OnInit {
  vacancyDto: VacancyDto
  jobDetail: JobOrderDto

  constructor(
    //private bottomSheetRef: MatBottomSheetRef<JobDetailComponent>,
    //@Inject(MAT_BOTTOM_SHEET_DATA) vacancyDto: VacancyDto,
    private dialogRef: MatDialogRef<JobDetailComponent>,
    @Inject(MAT_DIALOG_DATA) vacancyDto: VacancyDto,
    private service: JobDetailService
  ) {
    this.vacancyDto = vacancyDto
    this.getJobOrderDetail(this.vacancyDto.jobOrder.id)
    //this.vacancyDto.jobOrder = this.jobDetail.data
  }

  ngOnInit() {}

  async getJobOrderDetail(jobOrderId: number) {
    //console.log("getting joborder detail for id:", jobOrderId)
    this.jobDetail = await this.service
      .getJobOrderDetail(jobOrderId)
      .toPromise()

    //console.log("recieved response for getJobOrderDetail", this.jobDetail)
    this.vacancyDto.jobOrder = this.jobDetail

    this.vacancyDto.jobPosition.skills =
      this.vacancyDto.jobPosition.skills || "-"
    this.vacancyDto.jobPosition.experience =
      this.vacancyDto.jobPosition.experience || "-"
  }

  @Input()
  set data(v: VacancyDto) {}

  close() {
    this.dialogRef.close(false)
  }

  applyForThisJob() {
    this.dialogRef.close({ vacancyDto: this.vacancyDto })
  }
}
