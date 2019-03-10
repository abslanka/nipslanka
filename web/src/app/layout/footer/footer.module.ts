import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslateModule } from "@ngx-translate/core"

import { FooterComponent } from "./footer.component"
import { MaterialModule } from "../../utility/ui/material/material.module"

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TranslateModule, MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
