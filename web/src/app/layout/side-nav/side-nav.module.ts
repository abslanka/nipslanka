import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SideNavComponent } from "./side-nav.component"
import { AppUtilityModule } from "../../utility/app.utility.module"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { SubMenuModule } from "../sub-menu/sub-menu.module"

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    AppUtilityModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SubMenuModule,
  ],
  exports: [SideNavComponent],
})
export class SideNavModule {}
