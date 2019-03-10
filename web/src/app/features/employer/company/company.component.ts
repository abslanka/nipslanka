import { Component, OnInit, Inject, ViewChild } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { CompanyDto, ContactDto } from "src/app/models/dto"
import { ActivatedRoute } from "@angular/router"
import { Observable } from "rxjs"
import { CompanyService } from "./company.service"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material"
import {
  ITdDynamicElementConfig,
  TdDynamicFormsComponent,
} from "@covalent/dynamic-forms"
import { DynaFormComponent } from "src/app/layout/dyna-form/dyna-form.component"
import { IUploadOptions, TdFileService } from "@covalent/core"
import { BASE_URL } from "src/app/app.config"

@Component({
  selector: "employer-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  @ViewChild("companyDynamicForm")
  companyDynamicForm: DynaFormComponent
  companyDynamicFormFields: ITdDynamicElementConfig[] = null
  company: CompanyDto = null

  companyList: Observable<CompanyDto>

  @ViewChild("contactPersonDynamicForm")
  contactPersonDynamicForm: DynaFormComponent
  contactPersonDynamicFormFields: ITdDynamicElementConfig[] = null
  contactPerson: ContactDto = null

  constructor(
    public route: ActivatedRoute,
    private fileUploadService: TdFileService,
    @Inject(BASE_URL) private baseURL: string,
    private service: CompanyService,
    private dialogRef: MatDialogRef<CompanyComponent>,
    @Inject(MAT_DIALOG_DATA) company: CompanyDto
  ) {
    this.company = company
    //this.service.setEnpoint("/employer/company")
  }

  ngOnInit() {
    this.companyDynamicFormFields = this.service.buildDynamicForm(this.company)
    this.contactPersonDynamicFormFields = this.service.buildContactDynamicForm()
  }

  getCompanyDynamicForm(): TdDynamicFormsComponent {
    return this.companyDynamicForm.dynamicForm
  }

  getCompanyForm(): FormGroup {
    return this.getCompanyDynamicForm().form
  }

  getContactPersonDynamicForm(): TdDynamicFormsComponent {
    return this.contactPersonDynamicForm.dynamicForm
  }

  getContactPersonForm(): FormGroup {
    return this.getContactPersonDynamicForm().form
  }

  save() {
    let contactDto: ContactDto = this.getContactPersonForm().value
    let companyDto: CompanyDto = this.getCompanyForm().value
    companyDto.contactPerson = contactDto
    let companySavedResp = this.service.createCompany(companyDto)
    this.dialogRef.close({ dto: companyDto, resp: companySavedResp })
  }

  close() {
    this.dialogRef.close(false)
  }

  // company logo upload events
  fileUploadStatusMsg: string = "No file selected yet."
  disabled: boolean = false

  selectEvent(file: File): void {
    this.fileUploadStatusMsg = "File: " + file.name + " selected for uploading."
  }

  uploadEvent(file: File): void {
    let options: IUploadOptions = {
      url: this.baseURL + "image-file/upload",
      method: "post",
      file: file,
    }
    this.fileUploadService.upload(options).subscribe(response => {
      // ...
    })

    this.fileUploadStatusMsg = "File: " + file.name + " uploaded successfully."
  }

  cancelEvent(): void {
    this.fileUploadStatusMsg = "No file selected yet."
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled
  }
}
