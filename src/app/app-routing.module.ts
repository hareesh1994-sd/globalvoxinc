import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  }, // default route
  {
    path: 'list', loadChildren: () => import('./meeting-list/meeting-list.module').then(m => m.MeetingListModule), 
  }, // lazy loading
   {
     path: 'add', loadChildren:() => import('./addmeeting/addmeeting.module').then(m => m.AddmeetingModule),
   },
  {
    path: '**', redirectTo: 'list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
