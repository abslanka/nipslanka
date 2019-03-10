import { Component, OnInit, Input, ViewChild } from "@angular/core"
import { Router } from "@angular/router"
import { TranslateService } from "@ngx-translate/core"
import { BehaviorSubject, Subscription } from "rxjs"
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatSidenavContainer, MatSidenav } from "@angular/material"
import { ObservableMedia, MediaChange } from "@angular/flex-layout"
import { TdMediaService } from "@covalent/core"

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  constructor(
    public router: Router,
    private translate: TranslateService,
    public media: TdMediaService //media: ObservableMedia
  ) {
    /* this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === "sm" || change.mqAlias === "xs") {
        this.opened = false
        this.over = "over"
      } else {
        this.opened = true
        this.over = "side"
      }
    }) */
  }
  ngOnInit() {}

  /*  //opened = true
  over = "side"
  expandHeight = "42px"
  collapseHeight = "42px"
  displayMode = "flat"
  // overlap = false;
  watcher: Subscription */

  //mode = new FormControl("side")
  mode = "side"
  opened = true
  position = "start" // content postion on the  start=left,  end=right
  topGap = 100
  @ViewChild("sidenav") public sidenav: MatSidenav

  changeNavPostion() {
    this.sidenav.toggle()
    this.isNavPositionLeft()
      ? (this.position = "end")
      : (this.position = "start")

    setTimeout(() => this.sidenav.toggle(), 200)
  }

  isNavPositionLeft() {
    return this.position == "start"
  }

  getMode() {}

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
}
