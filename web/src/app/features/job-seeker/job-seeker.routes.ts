import { JobSeekerChildrenRoutes } from "./job-seeker.children-routes"

//import { MetaGuard } from "@ngx-meta/core"
import { JobSeekerComponent } from "./job-seeker.component"

export const JobSeekerRoutes = [
  {
    path: "",
    component: JobSeekerComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    //canActivateChild: [PermissionsGuard, MetaGuard],
    data: {
      name: "job-seeker",
      permissions: {
        only: "read_job-seeker",
        redirectTo: "/home",
      },
      meta: {
        title: "nips.menu.job-seeker",
        description: "nips.menu.job-seeker",
      },
    },
    children: JobSeekerChildrenRoutes,
  },
]
