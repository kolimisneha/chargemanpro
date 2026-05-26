import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditchargerdetailsPage } from './editchargerdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EditchargerdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditchargerdetailsPageRoutingModule {}
