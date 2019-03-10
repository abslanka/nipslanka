import { Component, OnInit } from "@angular/core"
import { TdMediaService } from "@covalent/core"

@Component({
  selector: "app-header-menu",
  templateUrl: "./header.menu.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderMenuComponent implements OnInit {
  appTitleShort = "nips.title.short"
  appTitleLong = "nips.title.long"

  navigation = [
    { link: "about", label: "nips.menu.about" },
    { link: "features", label: "nips.menu.features" },
    { link: "examples", label: "nips.menu.examples" },
  ]

  routes: Object[] = [
    {
      icon: "youtube_searched_for",
      route: "job-seeker",
      title: "nips.menu.job-seeker",
    },
    {
      icon: "work",
      route: "employer",
      title: "nips.menu.employer",
    },
  ]

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
