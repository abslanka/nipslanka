import { ModuleWithProviders, NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { AppUtilityModule } from "../../utility/app.utility.module"
import { HomePageComponent } from "./home-page.component"
import { HomePageRoutes } from "./home-page.routes"

@NgModule({
  imports: [AppUtilityModule, RouterModule.forChild(HomePageRoutes)],
  declarations: [HomePageComponent],
})
export class HomePageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomePageModule,
      providers: [],
    }
  }
}
