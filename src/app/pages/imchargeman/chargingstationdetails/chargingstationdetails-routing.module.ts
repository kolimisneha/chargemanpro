import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargingstationdetailsPage } from './chargingstationdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChargingstationdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingstationdetailsPageRoutingModule {}
