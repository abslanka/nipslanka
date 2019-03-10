import { Component, TemplateRef } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "dyna-textarea",
  styleUrls: ["./dynamic-textarea.component.scss"],
  templateUrl: "./dynamic-textarea.component.html",
})
export class DynaTextareaComponent {
  control: FormControl

  label: string = ""

  hint: string = ""

  name: string = ""

  required: boolean = undefined

  //fillLeft: boolean = false
  //fillRight: boolean = false

  errorMessageTemplate: TemplateRef<any> = undefined
}
