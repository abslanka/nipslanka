import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { JobOrderComponent } from "./job-order.component"
import { RouterModule } from "@angular/router"
import { JobOrderRoutes } from "./job-order.routes"
import { AppUtilityModule } from "../../../utility/app.utility.module"
import { AppLayoutModule } from "../../../layout/app.layout.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
//import { CompanyService } from "../company/company.service"
//import { CompanyComponent } from "../company/company.component"
import { CompanyModule } from "../company/company.module"
import { JobOrderService } from "./job-order.service"

@NgModule({
  declarations: [JobOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppUtilityModule,
    AppLayoutModule,
    RouterModule.forChild(JobOrderRoutes),
    CompanyModule,
  ],
  providers: [JobOrderService],
})
export class JobOrderModule {}
