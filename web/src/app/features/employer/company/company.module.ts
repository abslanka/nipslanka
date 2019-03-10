import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CompanyComponent } from "./company.component"
import { RouterModule } from "@angular/router"
import { CompanyRoutes } from "./company.routes"
import { CompanyService } from "./company.service"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppUtilityModule } from "src/app/utility/app.utility.module"
import { AppLayoutModule } from "src/app/layout/app.layout.module"

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppUtilityModule,
    AppLayoutModule,
    //RouterModule.forChild(CompanyRoutes),
  ],
  providers: [CompanyService],
  //exports: [CompanyService],
  entryComponents: [CompanyComponent],
})
export class CompanyModule {}
