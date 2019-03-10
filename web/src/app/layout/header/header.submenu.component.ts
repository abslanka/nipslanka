import { Component, OnInit } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"

@Component({
  selector: "app-header-submenu",
  templateUrl: "./header.submenu.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderSubMenuComponent implements OnInit {
  navigation = [
    { link: "about", label: "nips.menu.about" },
    { link: "features", label: "nips.menu.features" },
    { link: "examples", label: "nips.menu.examples" },
  ]

  routes: Object[] = [
    {
      icon: "youtube_searched_for",
      route: "jobseeker/find-jobs",
      title: "nips.submenu.job-seeker.find",
    },
    {
      icon: "work",
      route: "jobprovider",
      title: "nips.menu.employer",
    },
  ]

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
