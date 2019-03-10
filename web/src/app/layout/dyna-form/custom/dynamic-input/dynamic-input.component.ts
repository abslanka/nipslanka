import { Component, TemplateRef } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "dyna-input",
  styleUrls: ["./dynamic-input.component.scss"],
  templateUrl: "./dynamic-input.component.html",
})
export class DynaInputComponent {
  control: FormControl

  label: string = ""

  hint: string = ""

  type: string = undefined

  required: boolean = undefined

  name: string = ""

  min: number = undefined

  max: number = undefined

  minLength: number = undefined

  maxLength: number = undefined

  errorMessageTemplate: TemplateRef<any> = undefined
}
