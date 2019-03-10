import { EmployerChildrenRoutes } from "./employer.children-routes"

//import { MetaGuard } from "@ngx-meta/core"
import { EmployerComponent } from "./employer.component"

export const EmployerRoutes = [
  {
    path: "",
    component: EmployerComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    //canActivateChild: [PermissionsGuard, MetaGuard],
    data: {
      name: "employer",
      permissions: {
        only: "read_job-provider",
        redirectTo: "/home",
      },
      meta: {
        title: "nips.menu.employer",
        //titleMini: "nips.menu.employer.sm",
        description: "nips.menu.employer",
      },
    },
    children: EmployerChildrenRoutes,
  },
]
