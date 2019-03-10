import { Component } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { TdMediaService } from "@covalent/core"
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from "@angular/platform-browser"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  /* routes: Object[] = [
    {
      icon: "youtube_searched_for",
      route: "jobseeker",
      title: "nips.menu.jobseeker",
    },
    {
      icon: "work",
      route: "jobprovider",
      title: "nips.menu.jobprovider",
    },
  ]

  routes2: Object[] = [
    {
      icon: "home",
      route: ".",
      title: "Home",
    },
    {
      icon: "library_books",
      route: ".",
      title: "Documentation",
    },
    {
      icon: "color_lens",
      route: ".",
      title: "Style Guide",
    },
    {
      icon: "view_quilt",
      route: ".",
      title: "Layouts",
    },
    {
      icon: "picture_in_picture",
      route: ".",
      title: "Components & Addons",
    },
  ]
  usermenu: Object[] = [
    {
      icon: "swap_horiz",
      route: ".",
      title: "Switch account",
    },
    {
      icon: "tune",
      route: ".",
      title: "Account settings",
    },
    {
      icon: "exit_to_app",
      route: ".",
      title: "Sign out",
    },
  ] */

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    translate.addLangs(["en"])
    translate.setDefaultLang("en")
    translate.use("en")

    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg"
      )
    )
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "nips",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/logo-mini.svg"
      )
    )
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }
}
