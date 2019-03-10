//import { translate, PermissionsGuard } from '@abs/core';
import { EmployerDashboardComponent } from "./employer-dashboard.component"
//import { MetaGuard } from '@ngx-meta/core';

export const EmployerDashboardRoutes = [
  {
    path: "",
    component: EmployerDashboardComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "employer-dashboard",
      permissions: {
        only: "read_employer-dashboard",
        redirectTo: "/home",
      },
      visible: true,
      meta: {
        title: "nips.submenu.employer.dashboard",
        titleMini: "nips.submenu.employer.dashboard.short",
        description: "Dashboard - Employer",
      },
    },
  },
]
