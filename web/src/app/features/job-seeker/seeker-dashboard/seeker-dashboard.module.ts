import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SeekerDashboardComponent } from "./seeker-dashboard.component"
import { SeekerDashboardRoutes } from "./seeker-dashboard.routes"
import { RouterModule } from "@angular/router"

@NgModule({
  declarations: [SeekerDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(SeekerDashboardRoutes)],
})
export class SeekerDashboardModule {}
