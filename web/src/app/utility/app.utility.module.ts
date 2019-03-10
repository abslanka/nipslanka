import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MaterialModule } from "./ui/material/material.module"
import { I18nModule } from "./ui/i18n/i18n.module"
import { CustomHttpModule } from "./transport/http/custom.http.module"
import { BrowserStorage } from "./storage/browser.storage"
import { STORAGE_CONFIG_TOKEN } from "./storage/configs/storage.config"

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CustomHttpModule, MaterialModule, I18nModule],
  providers: [{ provide: STORAGE_CONFIG_TOKEN, useClass: BrowserStorage }],
})
export class AppUtilityModule {}
