import { Component, TemplateRef } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "dyna-spacer",
  styleUrls: ["./dynamic-button.component.scss"],
  templateUrl: "./dynamic-button.component.html",
})
export class DynaSpacerComponent {
  constructor() {}

  ngOnInit() {}

  /* control property needed to properly bind the underlying element */
  control: FormControl

  /* map any of the properties you passed in the config */
  label: string

  /* map the error message template and use it anywhere you need to */
  errorMessageTemplate: TemplateRef<any>
}
