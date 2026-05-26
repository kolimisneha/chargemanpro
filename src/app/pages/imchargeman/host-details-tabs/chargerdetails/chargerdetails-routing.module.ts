import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargerdetailsPage } from './chargerdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChargerdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargerdetailsPageRoutingModule {}
