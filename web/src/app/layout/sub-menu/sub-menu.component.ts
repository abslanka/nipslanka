import { Component, OnInit, Input } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { BehaviorSubject } from "rxjs"
import { Router } from "@angular/router"

@Component({
  selector: "app-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.scss"],
})
export class SubMenuComponent implements OnInit {
  /*   routes2: Object[] = [
    {
      icon: "youtube_searched_for",
      route: "job-seeker",
      title: "nips.submenu.job-seeker",
    },
    {
      icon: "work",
      route: "employer",
      title: "nips.menu.employer",
    },
  ] */

  public allowedRoutes$ = new BehaviorSubject([])
  public subMenuRoutes$ = new BehaviorSubject([])

  @Input()
  title: string = ""
  @Input()
  parentUrl = ""
  @Input()
  set routes(routes: any[]) {
    this.allowedRoutes$.next(
      routes
        ? routes.filter((item: any) => item.data && item.data.visible !== false)
        : []
    )
    this.subMenuRoutes$.next(
      this.allowedRoutes$
        .getValue()
        .filter((item: any) => item.data)
        .map((item: any) => {
          let newItem = item.data
          if (newItem.meta) {
            newItem = { ...newItem, ...newItem.meta }
          }
          if (item.path) {
            newItem.path = item.path
          }
          newItem.url = `/${newItem.path}`
          newItem.redirectTo = item.redirectTo
          return newItem
        })
    )
  }

  constructor(public router: Router, private translate: TranslateService) {}

  ngOnInit() {}
}
