import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ScreeningComponent } from "./screening.component"
import { ScreeningRoutes } from "./screening.routes"
import { RouterModule } from "@angular/router"

@NgModule({
  declarations: [ScreeningComponent],
  imports: [CommonModule, RouterModule.forChild(ScreeningRoutes)],
})
export class ScreeningModule {}
