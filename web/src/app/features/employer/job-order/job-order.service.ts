import { Injectable } from "@angular/core"
import {
  JobOrderDto,
  CompanyDto,
  VacancyDto,
  JobPositionDto,
} from "src/app/models/dto"
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
} from "@angular/forms"
import { CompanyService } from "../company/company.service"
import { startWith, debounceTime, switchMap } from "rxjs/operators"
import { of, Observable } from "rxjs"
import { ApiService } from "src/app/core"
import { IRestResponse } from "src/app/models/interfaces"
import { JobPositionService } from "../../common/job-position/job-position.service"

@Injectable()
export class JobOrderService {
  path: string = ""
  constructor(
    private apiService: ApiService<JobOrderDto>,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private jobPositionService: JobPositionService
  ) {
    //this.dataService.createRestEndpoint(this.endpoint)
  }

  buildForm(): FormGroup {
    let jobOrderForm: FormGroup = this.fb.group(
      {
        company: [""],
        vacancies: this.fb.array([]), // ["", Validators.required],
        standardEmploymentContract: [""],
        closingDate: [""],
        status: ["n"],
      },
      { updateOn: "blur" }
    )

    //console.log("service.buildForm.jobOrderForm", jobOrderForm)
    return jobOrderForm
  }

  buildCompanyForm(): FormGroup {
    let item: CompanyDto = new CompanyDto()
    return this.companyService.buildForm(item)
  }

  buildVacanciesFormArrayItem(vacancy?: VacancyDto): FormGroup {
    return this.fb.group({
      id: [0],
      jobPosition: ["", [Validators.required]], // , this.jobPositionValidator
      noOfOpenings: ["", [Validators.required, this.numberValidator]],
      salary: [0, this.numberValidator],
      benefits: [""],
      location: [""],
      status: ["n"],
      jobsOffered: [{ value: 0, disabled: true }],
      jobsAvailable: [0],
    })
  }

  // used this for populating vacancies of an existing job order
  buildVacanciesFormArrayItems(
    jobOrderForm: FormGroup,
    vacancies: VacancyDto[]
  ) {
    //One Form Group for one country
    const vacanciesFormArrayItem = vacancies.map(vacancy => {
      return this.buildVacanciesFormArrayItem(vacancy)
    })

    const vacancyFormArray = this.fb.array(vacanciesFormArrayItem)
    jobOrderForm.setControl("vacancies", vacancyFormArray)
  }

  jobPositionValidator(formControl: FormGroup | FormControl) {
    console.log("jobPositionValidator::formControl.value", formControl.value)

    const condition = formControl.value && formControl.value.length >= 1
    //form.get("name").value !== form.get("name").value
    const resp = condition ? { invalidJobPosition: false } : true
    console.log("jobPositionValidator::condition", condition, "resp", resp)

    return resp
  }

  /*   nameValidator2(name: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isNameValid = control.value && control.value.length >= 1
      return isNameValid ? { invalidName: { value: control.value } } : null
    }
  }

  numberValidator(num: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = false // num.test(control.value)
      return forbidden ? { forbiddenName: { value: control.value } } : null
    }
  } */

  // Validates numbers
  numberValidator(number): any {
    if (number.pristine) {
      return null
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/
    number.markAsTouched()
    if (NUMBER_REGEXP.test(number.value)) {
      return null
    }
    return {
      invalidNumber: true,
    }
  }

  registerForCompanyList(autoCompleteControl: AbstractControl): any {
    return autoCompleteControl.valueChanges.pipe(
      startWith(""),
      // delay emits
      debounceTime(200),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== "") {
          // lookup from api server
          return this.autoCompleteCompanySearch({ name: value })
        } else {
          // if no value is pressent, return null
          return of(null)
        }
      })
    )
  }

  autoCompleteCompanySearch(filter: { name: string } = { name: "" }): any {
    return this.companyService.autoCompleteSearch(filter.name)
  }

  registerForJobPositionList(autoCompleteControl: AbstractControl): any {
    return autoCompleteControl.valueChanges.pipe(
      startWith(""),
      // delay emits
      debounceTime(200),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== "") {
          // lookup from api server
          return this.autoCompleteJobPositionSearch({ name: value })
        } else {
          // if no value is pressent, return null
          return of(null)
        }
      })
    )
  }

  autoCompleteJobPositionSearch(filter: { name: string } = { name: "" }): any {
    return this.jobPositionService.autoCompleteSearch(filter.name)
  }

  setEnpointPath(path: string) {
    this.path = path
    //this.apiService.createRestEndpoint(path)
  }

  resetEnpoint() {
    this.apiService.createRestEndpoint(this.path)
  }
  /* extendEndpoint(extPath: string) {
    let ep = { path: this.endpoint.path }
    ep.path = `${ep.path}${extPath}`
    return ep
  } */

  async createJobOrder(item: JobOrderDto) {
    this.resetEnpoint()
    //this.apiService.appendCustomPathToEndpoint("/create")
    let resp = await this.apiService.createJobOrder(item).toPromise()
    console.log("Company create resp:", resp)
    return resp
  }
}
