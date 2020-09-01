import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from '../shared/local.service';


@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  meetindList: any;

  constructor(public translate: TranslateService, private localService: LocalService) { }

  ngOnInit(): void {
    if (this.localService.getKeyinStorage('meetindDetails')) {
      this.meetindList = this.localService.getJsonValue('meetindDetails');
    }
  }

}
