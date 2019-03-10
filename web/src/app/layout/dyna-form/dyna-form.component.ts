import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core"
import { AbstractControl } from "@angular/forms"
import { TdDynamicFormsComponent } from "@covalent/dynamic-forms"

@Component({
  selector: "dyna-form",
  templateUrl: "./dyna-form.component.html",
  styleUrls: ["./dyna-form.component.scss"],
})
export class DynaFormComponent implements OnInit {
  @Input()
  elements

  @Output() formSubmit: EventEmitter<any> = new EventEmitter()

  @ViewChild("dynamicForm")
  dynamicForm: TdDynamicFormsComponent

  constructor() {}

  ngOnInit() {}

  submit(form: AbstractControl): void {
    //console.log("form.value", form.value)
    this.formSubmit.emit(form.value)
  }
}
