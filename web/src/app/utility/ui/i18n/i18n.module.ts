import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslateModule, TranslateLoader } from "@ngx-translate/core"
import { HttpLoaderFactory } from "./http-loader-factory"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import {I18NService} from "./i18n.service"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, 
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }, 
    }), 
  ],
   providers:[I18NService],
  exports: [TranslateModule] // ,I18NService
})
export class I18nModule {}
