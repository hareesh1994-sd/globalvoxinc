import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MeetingListRoutingModule } from './meeting-list-routing.module';
import { MeetingListComponent } from './meeting-list.component';


@NgModule({
  declarations: [
    MeetingListComponent
  ],
  imports: [
    CommonModule,
    MeetingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  providers: [TranslateService]
})
export class MeetingListModule { }
