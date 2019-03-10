import { JobOrderRoutes } from "./job-order/job-order.routes"
import { EmployerDashboardRoutes } from "./employer-dashboard/employer-dashboard.routes"
import { ScreeningRoutes } from "./screening/screening.routes"
import { CompanyRoutes } from "./company/company.routes"

export const EmployerChildrenRoutes = [
  { path: "", redirectTo: "/employer/job-order", pathMatch: "full" },
  {
    path: "job-order",
    loadChildren: "./job-order/job-order.module#JobOrderModule",
    data: JobOrderRoutes[0].data,
  },
  {
    path: "employer-dashboard",
    loadChildren:
      "./employer-dashboard/employer-dashboard.module#EmployerDashboardModule",
    data: EmployerDashboardRoutes[0].data,
  },
  {
    path: "screening",
    loadChildren: "./screening/screening.module#ScreeningModule",
    data: ScreeningRoutes[0].data,
  },
  {
    path: "company",
    loadChildren: "./company/company.module#CompanyModule",
    data: CompanyRoutes[0].data,
  },
]
