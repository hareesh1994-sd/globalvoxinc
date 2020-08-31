import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AddmeetingRoutingModule } from './addmeeting-routing.module';
import { AddmeetingComponent } from './addmeeting.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddmeetingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddmeetingRoutingModule,
    FormsModule,
    TranslateModule
  ],
  providers: [TranslateService]
})
export class AddmeetingModule { }
