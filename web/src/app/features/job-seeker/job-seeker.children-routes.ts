import { JobSearchRoutes } from "./job-search/job-search.routes"
import { SeekerDashboardRoutes } from "./seeker-dashboard/seeker-dashboard.routes"

export const JobSeekerChildrenRoutes = [
  { path: "", redirectTo: "/job-seeker/job-search", pathMatch: "full" },
  {
    path: "job-search",
    loadChildren: "./job-search/job-search.module#JobSearchModule",
    data: JobSearchRoutes[0].data,
  },
  {
    path: "seeker-dashboard",
    loadChildren:
      "./seeker-dashboard/seeker-dashboard.module#SeekerDashboardModule",
    data: SeekerDashboardRoutes[0].data,
  },
]
