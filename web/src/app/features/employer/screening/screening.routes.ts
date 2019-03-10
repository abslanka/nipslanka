//import { translate, PermissionsGuard } from '@abs/core';
import { ScreeningComponent } from "./screening.component"
//import { MetaGuard } from '@ngx-meta/core';

export const ScreeningRoutes = [
  {
    path: "",
    component: ScreeningComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "employer-screening",
      permissions: {
        only: "read_job-provider-screening",
        redirectTo: "/home",
      },
      visible: false,
      meta: {
        title: "nips.submenu.employer.screening",
        titleMini: "nips.submenu.employer.screening.short",
        description: "Job Applications Screening",
      },
    },
  },
]
