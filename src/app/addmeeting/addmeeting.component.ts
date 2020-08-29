import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.scss']
})
export class AddmeetingComponent implements OnInit {
  
  constructor(public translate: TranslateService) { }

  onSubmit(form: any){
    alert(form.value.name + " \n " + form.value.date + " \n  " + form.value.Starttime + " \n  " + form.value.endtime);

  }

  ngOnInit(): void {
  }

}
