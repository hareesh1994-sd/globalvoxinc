import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
// import { TimezonePickerModule} from 'ng2-timezone-selector'

export const createTranslateLoader: any = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // TimezonePickerModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: createTranslateLoader,
        deps:[HttpClient]
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
