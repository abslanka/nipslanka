import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ApiRestGateway } from "./api-rest-gateway.service"
import { ApiService } from "./api.service"

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ApiRestGateway, ApiService],
})
export class ApiModule {}
