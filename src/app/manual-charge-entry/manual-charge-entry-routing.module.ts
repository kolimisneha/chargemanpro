import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualChargeEntryPage } from './manual-charge-entry.page';

const routes: Routes = [
  {
    path: '',
    component: ManualChargeEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualChargeEntryPageRoutingModule {}
