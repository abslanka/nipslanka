import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SubMenuComponent } from "./sub-menu.component"
import { AppUtilityModule } from "../../utility/app.utility.module"
import { RouterModule } from "@angular/router"

@NgModule({
  declarations: [SubMenuComponent],
  imports: [CommonModule, AppUtilityModule, RouterModule],
  exports: [SubMenuComponent],
})
export class SubMenuModule {}
