//import { translate, PermissionsGuard } from '@abs/core';
import { CompanyComponent } from "./company.component"
//import { MetaGuard } from '@ngx-meta/core';

export const CompanyRoutes = [
  {
    path: "",
    component: CompanyComponent,
    //canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "employer/company",
      permissions: {
        only: "read_company",
        redirectTo: "/home",
      },
      visible: false,
      meta: {
        title: "nips.submenu.employer.company",
        titleMini: "nips.submenu.employer.company.short",
        description: "Company - Employer",
      },
    },
  },
]
