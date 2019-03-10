import { InjectionToken } from "@angular/core"
import { environment } from "src/environments/environment"

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>(
  "BaseURL"
)

export const baseURL = environment.baseURL
