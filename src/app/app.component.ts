import { Component, OnDestroy, OnInit } from '@angular/core';  
import { TranslateService } from '@ngx-translate/core';  
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent implements OnInit {
  languagesList = [{display: "English", code: "english"}, {display: "Hindi", code: "hindi"}];
  selectedLanguage = {display: "English", code: "english"};
  
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

  ngOnInit() {
    this.setDefaultLang();
  }

  setDefaultLang() {
    sessionStorage.setItem('locale', this.selectedLanguage.code);  
    this.translate.use(this.selectedLanguage.code);
  }

  changeLang(selectedLang: any) { 
    this.selectedLanguage = selectedLang;
    this.setDefaultLang();
  }   
}
