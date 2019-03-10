import { NgModule, Type } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DynaFormComponent } from "./dyna-form.component"
import { AppUtilityModule } from "src/app/utility/app.utility.module"
import { RouterModule } from "@angular/router"
import { DynaFormService } from "./dyna-form.service"
//import { DynaCustomFileComponent } from "./custom/dyna-custom-file/dyna-custom-file.component"
import { ReactiveFormsModule } from "@angular/forms"

import { DynaButtonComponent } from "./custom/dynamic-button/dynamic-button.component"
import { DynaTextareaComponent } from "./custom/dynamic-textarea/dynamic-textarea.component"
import { DynaInputComponent } from "./custom/dynamic-input/dynamic-input.component"
import { DynaFileInputComponent } from "./custom/dynamic-file-input/dynamic-file-input.component"
import { DynaSelectComponent } from "./custom/dynamic-select/dynamic-select.component"
import { DynaSpacerComponent } from "./custom/dynamic-spacer/dynamic-button.component"

const TD_DYNAMIC_FORMS_ENTRY_COMPONENTS: Type<any>[] = [
  DynaInputComponent,
  //DynaFileInputComponent,
  DynaTextareaComponent,
  DynaSelectComponent,
  DynaButtonComponent,
  DynaSpacerComponent,
]

@NgModule({
  declarations: [DynaFormComponent, TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
  imports: [CommonModule, AppUtilityModule, RouterModule, ReactiveFormsModule],
  //providers: [DynaFormService],
  exports: [DynaFormComponent, TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
  entryComponents: [TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
})
export class DynaFormModule {}
