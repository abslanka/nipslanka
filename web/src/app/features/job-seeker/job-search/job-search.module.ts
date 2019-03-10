import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { JobSearchComponent } from "./job-search.component"
import { JobSearchRoutes } from "./job-search.routes"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppUtilityModule } from "src/app/utility/app.utility.module"
import { AppLayoutModule } from "src/app/layout/app.layout.module"
import { JobSearchService } from "./job-search.service"
import { JobDetailComponent } from "../job-detail/job-detail.component"

@NgModule({
  declarations: [JobSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppUtilityModule,
    AppLayoutModule,
    RouterModule.forChild(JobSearchRoutes),
  ],
  providers: [JobSearchService],
})
export class JobSearchModule {}
