import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { EmployerComponent } from "./employer.component"
import { AppUtilityModule } from "../../utility/app.utility.module"
import { RouterModule } from "@angular/router"
import { EmployerRoutes } from "./employer.routes"
import { AppLayoutModule } from "../../layout/app.layout.module"
//import { HeaderModule } from "../../layout/header/header.module"
import { TranslateModule } from "@ngx-translate/core"
import { CompanyComponent } from "./company/company.component"
import { CompanyModule } from "./company/company.module"

@NgModule({
  declarations: [EmployerComponent],
  imports: [
    CommonModule,
    AppUtilityModule,
    AppLayoutModule,
    CompanyModule,
    RouterModule.forChild(EmployerRoutes),
    //TranslateModule.forChild(),
  ],
})
export class EmployerModule {}
