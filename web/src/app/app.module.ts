import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppUtilityModule } from "./utility/app.utility.module"
import { AppLayoutModule } from "./layout/app.layout.module"
import { BASE_URL, baseURL } from "./app.config"
import { Connect } from "./models/test.model"
import { ApiModule, ApiRestGateway } from "./core"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppUtilityModule,
    AppRoutingModule,
    AppLayoutModule,
    BrowserAnimationsModule,
    ApiModule,
  ],
  providers: [{ provide: BASE_URL, useValue: baseURL }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private apiGateway: ApiRestGateway<Connect>) {
    apiGateway.createRestEndpoint("/")
    this.connect()
  }

  async connect(): Promise<void> {
    /* try {
      let resp = await this.apiGateway.rest.query().toPromise()
      console.log(
        "[ApiRestGateway] - Connection status with backend : ",
        resp.data.connected
      )
    } catch (error) {
      console.log(error)
    } finally {
    } */
  }
}
