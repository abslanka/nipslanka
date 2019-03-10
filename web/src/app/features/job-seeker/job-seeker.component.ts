import { Component, OnInit } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { ActivatedRoute } from "@angular/router"

import { JobSeekerChildrenRoutes } from "./job-seeker.children-routes"

@Component({
  selector: "job-seeker",
  templateUrl: "./job-seeker.component.html",
  styleUrls: ["./job-seeker.component.scss"],
})
export class JobSeekerComponent implements OnInit {
  public routes = JobSeekerChildrenRoutes

  constructor(
    public activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.setDefaultLang("en")
  }

  ngOnInit() {}
}
