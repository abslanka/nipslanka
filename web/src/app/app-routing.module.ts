import { NgModule } from "@angular/core"
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"

import { AppRoutes } from "./app.routes"

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
    /*  RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: "enabled",
    }), */
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
