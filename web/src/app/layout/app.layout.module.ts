import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderModule } from "./header/header.module"
import { FooterModule } from "./footer/footer.module"
import { SubMenuModule } from "./sub-menu/sub-menu.module"
import { SideNavModule } from "./side-nav/side-nav.module"
import { DynaFormModule } from "./dyna-form/dyna-form.module"

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    HeaderModule,
    FooterModule,
    SubMenuModule,
    SideNavModule,
    DynaFormModule,
  ],
})
export class AppLayoutModule {}
