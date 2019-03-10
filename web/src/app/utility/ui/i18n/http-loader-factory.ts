import { HttpClient } from "@angular/common/http"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"

export function HttpLoaderFactory(http: HttpClient, path?) {
  if (!path) return new TranslateHttpLoader(http)

  return new TranslateHttpLoader(http, `${path}`, ".json")
}
