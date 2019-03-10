import { Component, OnInit } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { ActivatedRoute } from "@angular/router"

import { EmployerChildrenRoutes } from "./employer.children-routes"

@Component({
  selector: "employer",
  templateUrl: "./employer.component.html",
  styleUrls: ["./employer.component.scss"],
})
export class EmployerComponent implements OnInit {
  public routes = EmployerChildrenRoutes

  constructor(
    public activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.setDefaultLang("en")
  }

  ngOnInit() {}
}
