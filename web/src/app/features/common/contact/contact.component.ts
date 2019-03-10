import { Component, OnInit } from "@angular/core"
import { Validators, FormBuilder } from "@angular/forms"
import { ContactDto } from "src/app/models/dto"
import { ActivatedRoute } from "@angular/router"
import { ApiService } from "src/app/core"

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService<ContactDto>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  companyForm: any

  buildForm(item: ContactDto) {
    this.companyForm = this.fb.group(
      {
        name: [item.name || "", Validators.required],
        email: [item.email || "", [Validators.email, Validators.required]],
        phone: [item.phone || "", Validators.minLength(10)],
      },
      { updateOn: "blur" }
    )
  }
}
