import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderMenuComponent } from "./header.menu.component"
import { HeaderSubMenuComponent } from "./header.submenu.component"
import { TranslateModule } from "@ngx-translate/core"
//import { MaterialModule } from "../../utility/ui/material/material.module"
import { RouterModule } from "@angular/router"
import { AppUtilityModule } from "src/app/utility/app.utility.module"
//import { AppRoutingModule } from "../../app-routing.module"

@NgModule({
  declarations: [HeaderMenuComponent, HeaderSubMenuComponent],
  imports: [CommonModule, TranslateModule, AppUtilityModule, RouterModule],
  exports: [HeaderMenuComponent, HeaderSubMenuComponent],
})
export class HeaderModule {}
