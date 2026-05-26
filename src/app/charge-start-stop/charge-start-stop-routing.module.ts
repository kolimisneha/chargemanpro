import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeStartStopPage } from './charge-start-stop.page';

const routes: Routes = [
  {
    path: '',
    component: ChargeStartStopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargeStartStopPageRoutingModule {}
