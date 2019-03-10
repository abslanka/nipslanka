import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { IRestResponse } from "src/app/models/interfaces"
import { CompanyDto, ContactDto, Connect } from "src/app/models/dto"
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { ITdDynamicElementConfig } from "@covalent/dynamic-forms"
import {
  DynaFormElementTypesObject,
  DynaFormElementTypes,
} from "../../../../app/layout/dyna-form/dyna-form-elements"
import { ApiService, ApiRestGateway } from "src/app/core"
import { map, catchError } from "rxjs/operators"
import { plainToClass } from "class-transformer"

@Injectable()
export class CompanyService {
  path = "/employer/company"
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService<CompanyDto> //private apiGateway: ApiRestGateway<Connect>
  ) {
    //apiGateway.createRestEndpoint({ path: "/" })
    //this.connectionTest()
    this.resetEnpoint()
  }

  buildForm(item: CompanyDto): FormGroup {
    let companyForm: FormGroup = this.fb.group(
      {
        name: [item.name || "", Validators.required],
        profileDesc: [item.name || "", Validators.maxLength(250)],
        websiteUrl: [item.name || "", Validators.maxLength(100)],

        contactPerson: this.fb.group({
          name: [item.contactPerson.name || "", Validators.required],
          email: [
            item.contactPerson.email || "",
            [Validators.email, Validators.required],
          ],
          phone: [item.contactPerson.phone || "", Validators.minLength(10)],
        }),
      },
      { updateOn: "blur" }
    )

    return companyForm
  }

  buildDynamicForm(item: CompanyDto): ITdDynamicElementConfig[] {
    let formFields: ITdDynamicElementConfig[] = []

    let name = DynaFormElementTypesObject(
      "name",
      "Company Name",
      45,
      DynaFormElementTypes.Text,
      true,
      item.name
    )

    let websiteUrl = DynaFormElementTypesObject(
      "websiteUrl",
      "Website Url",
      45,
      DynaFormElementTypes.TextCustom
    )

    let profileDesc = DynaFormElementTypesObject(
      item.profileDesc,
      "Profile Description",
      80,
      DynaFormElementTypes.Textarea
    )

    formFields.push(name)
    formFields.push(websiteUrl)
    formFields.push(profileDesc)

    return formFields
  }

  buildContactDynamicForm(): ITdDynamicElementConfig[] {
    /*   name: [item.contactPerson.name || "", Validators.required],
      email: [
        item.contactPerson.email || "",
        [Validators.email, Validators.required],
      ],
        phone: [item.contactPerson.phone || "", Validators.minLength(10)],
 */

    let formFields: ITdDynamicElementConfig[] = []

    let contactNme = DynaFormElementTypesObject(
      "name",
      "Contact Name",
      65,
      DynaFormElementTypes.Text,
      true
    )

    let email = DynaFormElementTypesObject(
      "email",
      "Email",
      45,
      DynaFormElementTypes.Text
    )

    let phone = DynaFormElementTypesObject(
      "phone",
      "Phone",
      45,
      DynaFormElementTypes.TextCustom
    )

    formFields.push(contactNme)
    formFields.push(email)
    formFields.push(phone)

    return formFields
  }

  autoCompleteSearch(term: string): Observable<IRestResponse<CompanyDto[]>> {
    /* 
    let res: IRestResponse<CompanyDto> = {
      data: this.mockCompanyList(term),
      error: undefined,
    }

    return of(res) */

    //console.log("autocomplete search- endpoint:", this.apiService.endpoint)
    this.resetEnpoint()

    let filter = `name||starts||${term}` //term.toLowerCase()
    let join = `contactPerson`
    let res = this.apiService.searchCompanyLike({ filter, join, page: 1 }).pipe(
      // if required transform the data value of companyDto[] recieved from api response
      map(results => results), // this.transform(results)
      // catch errors
      catchError(err => {
        console.log("error while getting company list :", err)
        return of(null)
      })
    )
    return res
  }

  transform(results: IRestResponse<CompanyDto[]>): IRestResponse<CompanyDto[]> {
    let companyList = results.data.map(obj => plainToClass(CompanyDto, obj))
    return { data: companyList, error: undefined }
  }

  private mockCompanyList(term: string) {
    let contact: ContactDto = new ContactDto()
    contact.name = "Hisham"
    contact.id = 1
    contact.email = "hisham@abslanka.lk"
    let company: CompanyDto = new CompanyDto()
    company.name = "co:" + term
    company.id = 2
    company.contactPerson = contact
    let company1: any = [company]
    return company1
  }

  /* appServiceSearch(filter: { name: string } = { name: '' }, page = 1): Observable<IUserResponse> {
  return this.http.get<IUserResponse>('/api/users')
    .pipe(
      tap((response: IUserResponse) => {
        response.results = response.results
          .map(user => new User(user.id, user.name))
          // Not filtering in the server since in-memory-web-api has somewhat restricted api
          .filter(user => user.name.includes(filter.name))

        return response;
      })
    );
} */

  /*   async connectionTest(): Promise<void> {
    try {
      let resp = await this.apiGateway.rest.query().toPromise()
      console.log(
        "[CompanyService] - Connection status with backend : ",
        resp.data.connected
      )
    } catch (error) {
      console.log(error)
    } finally {
    }
  } */

  setEnpointPath(path: string) {
    this.path = path
  }

  resetEnpoint() {
    this.apiService.createRestEndpoint(this.path)
  }

  async createCompany(item: CompanyDto) {
    let resp = await this.apiService.createCompany(item).toPromise()
    console.log("Company create resp:", resp)
  }
}
