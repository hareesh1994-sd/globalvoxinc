import { Component } from '@angular/core';  
import { TranslateService } from '@ngx-translate/core';  
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent {
  [x: string]: any;  
  
  // title = 'में आपका स्वागत है!';
  constructor(
    private router: Router,
    public translate: TranslateService) {  
    translate.addLangs(['english', 'hindi']);  
    if (sessionStorage.getItem('locale')) {  
      const browserLang = sessionStorage.getItem('locale');  
      translate.use(browserLang.match(/english|hindi/) ? browserLang : 'english');  
    } else {  
      sessionStorage.setItem('locale', 'english');  
      translate.setDefaultLang('english'); 
    }  
  }  
  changeLang(language: string) {  
    sessionStorage.setItem('locale', language);  
    this.translate.use(language);
  }   
}
