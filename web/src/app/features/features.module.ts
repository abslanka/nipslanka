import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { EmployerModule } from "./employer/employer.module"
import { JobSeekerModule } from "./job-seeker/job-seeker.module"
import { ContactComponent } from "./common/contact/contact.component"

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule],
  exports: [EmployerModule, JobSeekerModule],
})
export class FeaturesModule {}
