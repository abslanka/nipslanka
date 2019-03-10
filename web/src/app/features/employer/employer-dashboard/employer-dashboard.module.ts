import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { EmployerDashboardComponent } from "./employer-dashboard.component"
import { EmployerDashboardRoutes } from "./employer-dashboard.routes"
import { RouterModule } from "@angular/router"

@NgModule({
  declarations: [EmployerDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(EmployerDashboardRoutes)],
})
export class EmployerDashboardModule {}
