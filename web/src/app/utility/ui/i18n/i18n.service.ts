import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class I18NService { //extends TranslateService{
    public translate:TranslateService ;
  constructor(
   private _translate: TranslateService
  ) {
     //super(); // call to default constructor added implicitly  
     this.translate = _translate ;
     this.translate.addLangs(['en']);
     this.translate.setDefaultLang("en");
     this.translate.use('en'); 
  }


}
