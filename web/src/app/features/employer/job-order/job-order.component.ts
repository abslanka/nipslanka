import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Observable } from "rxjs"

import { DynaFormComponent } from "../../../layout/dyna-form/dyna-form.component"
import {
  JobOrderDto,
  CompanyDto,
  VacancyDto,
  JobPositionDto,
} from "../../../models/dto"
import { FormGroup, AbstractControl, FormArray } from "@angular/forms"
import {
  MatSelectChange,
  MatAutocompleteSelectedEvent,
  MatDialogConfig,
  MatDialog,
} from "@angular/material"
import { CompanyComponent } from "../company/company.component"
import { JobOrderService } from "./job-order.service"

@Component({
  selector: "employer-job-order",
  templateUrl: "./job-order.component.html",
  styleUrls: ["./job-order.component.scss"],
})
export class JobOrderComponent implements OnInit, AfterViewInit {
  jobOrderForm: FormGroup = null

  companyListAutoComplete$: Observable<CompanyDto> = null
  autoCompleteCompanyControl: AbstractControl = null //this.jobOrderForm.get("company")
  companyNameEntered: string = ""
  company: CompanyDto = new CompanyDto()

  vacanciesArrayGroup: FormArray = null
  displayedColumns: any = {
    jobPosition: "Job Position",
    noOfOpenings: "No. Of Openings",
    salary: "Salary",
    location: "Location",
  }

  // job position
  jobPositionListAutoComplete$: Observable<JobPositionDto[]>[] = []
  //autoCompleteJobPositionControl: AbstractControl = null
  //jobPosition: JobPositionDto

  constructor(
    public route: ActivatedRoute,
    private service: JobOrderService, //private companyService: CompanyService
    private dialog: MatDialog
  ) {
    this.service.setEnpointPath(`/${route.routeConfig.data.name}`)
  }

  ngOnInit(): void {
    //console.log("ngOnInit")
    //this.initializeAutoCompleteSrc();
    this.jobOrderForm = this.service.buildForm()
    //console.log("ngOnInit.jobOrderForm", this.service.buildForm())

    this.autoCompleteCompanyControl = this.jobOrderForm.get("company")
    this.companyListAutoComplete$ = this.service.registerForCompanyList(
      this.autoCompleteCompanyControl
    )
    /*    console.log("value1: ", this.vacanciesArrayGroup.controls)
    for (
      let index = 0;
      index < this.vacanciesArrayGroup.controls.length;
      index++
    ) {
      const element = <FormGroup>this.vacanciesArrayGroup.controls[index]
      console.log("value3: ", element.controls, element.value)
    } */

    this.vacanciesArrayGroup = this.jobOrderForm.get("vacancies") as FormArray

    this.companyChangeEvent()

    //this.filterObjects("")

    this.addVacancy()
    /* this.addVacancy()
    this.addVacancy()
    this.addVacancy() */
  }

  companyChangeEvent() {
    this.jobOrderForm.get("company").valueChanges.subscribe(company => {
      this.company.name = company
      //console.log("onCompanyChange:", company)
      // this.formGroup
      //   .get("vacancies")
      //   .setValidators([Validators.required, Validators.minLength(3)])
      // this.titleAlert = "You need to specify at least 3 characters"
      //this.formGroup.get("vacancies").updateValueAndValidity()
    })
  }

  /* companyList: Observable<IRestResponse<CompanyDto>>

  registerForCompanyList2() {
    this.companyList = this.jobOrderForm.get("company").valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.companyService.autoCompleteSearch(value))
    )
    console.log("my company", this.companyList)
  } */

  displayFn(company: CompanyDto) {
    if (company) {
      return company.name
    }
  }

  displayJobOptionFn(option: JobPositionDto) {
    if (option) {
      return option.name
    }
  }

  onStatusSelection(event: MatSelectChange) {
    console.log("onStatusSelection", event.value)
  }

  onCompanySelection(event: MatAutocompleteSelectedEvent) {
    console.log("onCompanySelection", event.option.value)
  }

  openCompanyWindow() {
    console.log(" openning dialog for company creation...")

    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true

    dialogConfig.data = this.company

    const dialogRef = this.dialog.open(CompanyComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(val => console.log("Dialog output:", val))
  }

  //  Vacancy related behaviour

  get vacancies() {
    return this.vacanciesArrayGroup
  }

  lastVacancyIndex(): number {
    return this.vacancies.controls.length - 1
  }
  getVacancy(i: number) {
    return this.vacanciesArrayGroup.at(i)
  }

  // Job Position auto complete for each field in vacancies table row
  registerForJobPositionList(arrayIndex: number) {
    this.jobPositionListAutoComplete$[
      arrayIndex
    ] = this.service.registerForJobPositionList(
      this.vacancies.at(arrayIndex).get("jobPosition")
    )
  }

  private _filter(name: string): JobPositionDto[] {
    const filterValue = name.toLowerCase()
    return null
    //return this.jobPositionOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  log(v: any) {
    console.log("log:v", v.get("jobPosition"))
  }

  /* 
  last(i: number): boolean {
    return this.lastVacancyIndex() == i
  } */

  /*   lastVacancyStatus: boolean = false
  validateEnteredVacancyFormStatus(i: number) {
    //let lastVacancy = <FormGroup>this.getVacancy(this.lastVacancyIndex())
    //let vacancyDto: VacancyDto = this.getVacancy(this.lastVacancyIndex()).value
    let vacancyDto: VacancyDto = this.getVacancy(i).value

    //if (vacancyDto.jobPosition && vacancyDto.jobPosition.name)
    console.log("last-vacancy3:", vacancyDto)
    this.lastVacancyStatus = true
  } */
  isLastVacancyFormValid(): boolean {
    return this.getVacancy(this.lastVacancyIndex()).valid
    //return !this.lastVacancyStatus
  }

  updateJobsAvailableOnLastVacancy() {
    if (this.vacanciesArrayGroup.length > 0) {
      let prev = this.getVacancy(this.lastVacancyIndex())

      let vacancyDto: VacancyDto = prev.value
      vacancyDto.jobsAvailable = vacancyDto.noOfOpenings

      prev.patchValue(vacancyDto)

      console.log("prev value ", prev.value)
    }
  }

  addVacancy(): void {
    this.updateJobsAvailableOnLastVacancy()

    this.vacanciesArrayGroup.push(this.service.buildVacanciesFormArrayItem())
    // Build the account Auto Complete values
    this.registerForJobPositionList(this.vacanciesArrayGroup.length - 1)
  }

  removeVacancy(i: number) {
    this.vacanciesArrayGroup.removeAt(i)
    // remove from filteredOptions too.
    this.jobPositionListAutoComplete$.splice(i, 1)
  }

  // The main, Job Order Related behaviours

  //jobOrderResp: Observable<JobOrderDto>
  async createJobOrder() {
    this.updateJobsAvailableOnLastVacancy()

    let jobOrderDto: JobOrderDto = this.jobOrderForm.value
    console.log("jobOrderDto", jobOrderDto)

    try {
      let jobOrderResp = await this.service.createJobOrder(jobOrderDto)

      console.log("jobOrderResp", jobOrderResp)
    } catch (error) {
      console.error("Error in createJobOrder", error)
    } finally {
    }

    /*     try {
      let jobProvider: JobProviderDto = this.getJobProviderDyForm().form.value
      let company: CompanyDto = this.getCompanyDyForm().form.value
      //let vacancy: JobVancyDto = this.getVacancyDyForm().form.value
      //vacancies.push(vacancy)

      let jobOrderDTO: JobOrderDto = this.getJobOrderDyForm().form.value
      jobOrderDTO.jobProvider = jobProvider
      jobOrderDTO.company = company
      // jobOrderDTO.vacancies = vacancies

      this.jobOrderResp = await this._dataService //.rest
        .create(this.extendEndpoint("/create"), jobOrderDTO)
        .toPromise()
      //console.log("this.endpoint.path", this.endpoint.path)
      console.log("jobOrderResp", this.jobOrderResp)
    } catch (error) {
      console.error(error, "in createJobOrder")
    } finally {
    } */
  }

  updateJobOrder(jobOrderDto: JobOrderDto) {
    this.jobOrderForm.patchValue(jobOrderDto)
  }

  //
  //
  //

  // 4. Job Order Step
  jobOrderLabel = "Create Job-Order"
  jobOrderSubmitLabel = "Submit Order"

  @ViewChild("jobOrderDyForm")
  jobOrderDyForm: DynaFormComponent

  //jobOrderFormFields: ITdDynamicElementConfig[] = JobOrderFormFields()

  jobOrderDyFormSubmitDisabled() {
    return !this.jobOrderForm.valid // !this.isJobOrderDyFormValid
  }

  jobOrderDyFormContinue() {
    // this.jobOrderDyFormValues = this.getJobOrderDyForm().form.value
  }

  jobOrderDyFormReset() {
    //this.jobOrderDyForm.dynamicForm.refresh()
  }

  // elements: ITdDynamicElementConfig[] = []

  /* endpoint = { path: undefined }

  extendEndpoint(extPath: string) {
    let ep = { path: this.endpoint.path }
    ep.path = `${ep.path}${extPath}`

    return ep
  } */

  isJobOrderDyFormValid: boolean = false

  ngAfterViewInit(): void {
    //console.log("ngAfterViewInit")
    this.isJobOrderDyFormValid = false //this.getJobOrderDyForm().valid
  }

  jobOrderResp2: Observable<JobOrderDto>
  async createJobOrder2(): Promise<void> {
    /*     try {
      let jobProvider: JobProviderDto = this.getJobProviderDyForm().form.value
      let company: CompanyDto = this.getCompanyDyForm().form.value
      //let vacancy: JobVancyDto = this.getVacancyDyForm().form.value
      //vacancies.push(vacancy)

      let jobOrderDTO: JobOrderDto = this.getJobOrderDyForm().form.value
      jobOrderDTO.jobProvider = jobProvider
      jobOrderDTO.company = company
      // jobOrderDTO.vacancies = vacancies

      this.jobOrderResp = await this._dataService //.rest
        .create(this.extendEndpoint("/create"), jobOrderDTO)
        .toPromise()
      //console.log("this.endpoint.path", this.endpoint.path)
      console.log("jobOrderResp", this.jobOrderResp)
    } catch (error) {
      console.error(error, "in createJobOrder")
    } finally {
    } */
  }

  /* 
  
  public jobOrderAutoComplete$: Observable<JobOrderDto> = null
  public autoCompleteControl = new FormControl()
  lookup(value: string): Observable<JobOrderDto> {
    return this._dataService.rest.query({ search: value.toLowerCase() }).pipe(
      // map the joborder property of the api results as the return object
      map(results => results),
      // catch errors
      catchError(_ => {
        return of(null)
      })
    )
  }

 private initializeAutoCompleteSrc() {
    this.jobOrderAutoComplete$ = this.autoCompleteControl.valueChanges.pipe(startWith(""),
      // delay emits
      debounceTime(2000),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== "") {
          // lookup from api server
          return this.lookup(value);
        }
        else {
          // if no value is pressent, return null
          return of(null);
        }
      }));
  } */
}
