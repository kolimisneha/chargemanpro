import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KycDetailsPage } from './kyc-details.page';

const routes: Routes = [
  {
    path: '',
    component: KycDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycDetailsPageRoutingModule {}
