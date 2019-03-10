//import { translate, PermissionsGuard } from '@abs/core';
import { JobSearchComponent } from "./job-search.component"
//import { MetaGuard } from '@ngx-meta/core';

export const JobSearchRoutes = [
  {
    path: "",
    component: JobSearchComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "job-seeker-job-search",
      permissions: {
        only: "read_job-seeker-job-search",
        redirectTo: "/home",
      },
      meta: {
        title: "nips.submenu.job-seeker.find",
        description: "Job Search View",
      },
    },
  },
]
