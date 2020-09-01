import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from '../shared/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.scss']
})
export class AddmeetingComponent implements OnInit {

  constructor(
      public router: Router,
      public translate: TranslateService,
      private localService: LocalService) { }

  onSubmit(form: any): void {
    if (!form.value.name || !form.value.date || !form.value.Starttime || !form.value.endtime || !form.value.subject ) {
      alert('Please Enter the all the fields');
      return ;
    }
    let existingMeetings: any = [];
    if (this.localService.getKeyinStorage('meetindDetails')) {
      existingMeetings = this.localService.getJsonValue('meetindDetails');

      const duplicateCount = existingMeetings.filter((rec) => rec.name === form.value.name &&
                  rec.date === form.value.date && rec.Starttime === form.value.Starttime).length;
      if (duplicateCount > 0 && !confirm(`${form.value.name}, will get conflict with meeting time.`)) {
        return ;
      }
      form.value.Starttime  = this.appendMeridian(form.value.Starttime);
      form.value.endtime  = this.appendMeridian(form.value.endtime);
      existingMeetings.splice(0, 0, form.value);
      existingMeetings.push(form.value);
    } else {
      existingMeetings.push(form.value);
    }
    this.localService.setJsonValue('meetindDetails', existingMeetings);
    this.router.navigate(['list']);
  }

  ngOnInit(): void {
  }

  appendMeridian(value): any {
    const timeSplit = value.split(':');
    let  hours;
    let  minutes;
    let  meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    return hours + ':' + minutes + ' ' + meridian;
  }
}
