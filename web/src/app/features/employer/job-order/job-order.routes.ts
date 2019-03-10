//import { translate, PermissionsGuard } from '@abs/core';
import { JobOrderComponent } from "./job-order.component"
//import { MetaGuard } from '@ngx-meta/core';

export const JobOrderRoutes = [
  {
    path: "",
    component: JobOrderComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "employer/job-order",
      permissions: {
        only: "read_employer-job-order",
        redirectTo: "/home",
      },
      meta: {
        title: "nips.submenu.employer.post",
        titleMini: "nips.submenu.employer.post.short",
        description: "Job Order Form",
      },
    },
  },
]
