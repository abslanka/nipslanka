//import { translate, PermissionsGuard } from '@abs/core';
import { SeekerDashboardComponent } from "./seeker-dashboard.component"
//import { MetaGuard } from '@ngx-meta/core';

export const SeekerDashboardRoutes = [
  {
    path: "",
    component: SeekerDashboardComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "job-seeker-dashboard",
      permissions: {
        only: "read_job-seeker-dashboard",
        redirectTo: "/home",
      },
      meta: {
        title: "nips.submenu.job-seeker.dashboard",
        description: "Job Seeker - Dashboard",
      },
    },
  },
]
