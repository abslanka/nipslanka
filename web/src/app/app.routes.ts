import { Routes } from "@angular/router"

//import { HomePageComponent } from "./home-page/home-page.component"

import { HomePageRoutes } from "./features/home-page/home-page.routes"
import { EmployerRoutes } from "./features/employer/employer.routes"
import { JobSeekerRoutes } from "./features/job-seeker/job-seeker.routes"

//export const AppRouteComponents = [HomePageComponent]

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: "./features/home-page/home-page.module#HomePageModule",
    data: HomePageRoutes[0].data,
  },

  {
    path: "employer",
    loadChildren:
      "./features/employer/employer.module#EmployerModule",
    data: EmployerRoutes[0].data,
  },

  {
    path: "job-seeker",
    loadChildren: "./features/job-seeker/job-seeker.module#JobSeekerModule",
    data: JobSeekerRoutes[0].data,
  },

  /*
  {
    path: "admin",
    loadChildren: "./pages/admin-page/admin-page.module#AdminPageModule",
    data: AdminPageRoutes[0].data,
  }, */
  {
    path: "**",
    redirectTo: "home",
  },
]
