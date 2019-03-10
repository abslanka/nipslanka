import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HttpModule } from "@angular/http"
import { CovalentHttpModule } from "@covalent/http"
import {
  CustomHttpInterceptor,
  httpInterceptorProviders,
} from "./custom-http-interceptor"
import { CustomRESTService } from "./custom.rest.service"

@NgModule({
  //declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpModule,
    CovalentHttpModule.forRoot({
      interceptors: [
        {
          interceptor: CustomHttpInterceptor,
          paths: ["**"],
        },
      ],
    }),
  ],
  providers: [httpInterceptorProviders], // CustomRESTService
  exports: [CovalentHttpModule],
})
export class CustomHttpModule {}
