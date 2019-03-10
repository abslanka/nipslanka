import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { JobSeekerComponent } from "./job-seeker.component"
import { JobSeekerRoutes } from "./job-seeker.routes"
import { RouterModule } from "@angular/router"
import { AppUtilityModule } from "../../utility/app.utility.module"
import { AppLayoutModule } from "../../layout/app.layout.module"
import { JobDetailComponent } from "./job-detail/job-detail.component"

@NgModule({
  declarations: [JobSeekerComponent, JobDetailComponent],
  imports: [
    CommonModule,
    AppUtilityModule,
    AppLayoutModule,
    RouterModule.forChild(JobSeekerRoutes),
  ],
  entryComponents: [JobDetailComponent],
})
export class JobSeekerModule {}
