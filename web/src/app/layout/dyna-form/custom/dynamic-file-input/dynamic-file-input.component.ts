import { Component, TemplateRef } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "dyna-file-input",
  styleUrls: ["./dynamic-file-input.component.scss"],
  templateUrl: "./dynamic-file-input.component.html",
})
export class DynaFileInputComponent {
  control: FormControl

  required: boolean = undefined

  label: string = ""

  name: string = ""

  hint: string = ""

  errorMessageTemplate: TemplateRef<any> = undefined

  _handlefileDrop(value: File): void {
    this.control.setValue(value)
  }
}
