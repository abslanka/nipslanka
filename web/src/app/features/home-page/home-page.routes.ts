import { HomePageComponent } from "./home-page.component"

export const HomePageRoutes = [
  {
    path: "",
    component: HomePageComponent,
    //canActivate: [MetaGuard],
    data: {
      name: "home",
      visible: false,
      meta: {
        title: "Home",
      },
    },
  },
]
