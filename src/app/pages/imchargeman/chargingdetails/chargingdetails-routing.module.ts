import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargingdetailsPage } from './chargingdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChargingdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingdetailsPageRoutingModule {}
