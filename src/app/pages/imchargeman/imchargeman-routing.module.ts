import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImchargemanPage } from './imchargeman.page';

const routes: Routes = [
  {
    path: '',
    component: ImchargemanPage
  },
  {
    path: 'host-details-tabs',
    loadChildren: () => import('./host-details-tabs/host-details-tabs.module').then( m => m.HostDetailsTabsPageModule)
  },
  {
    path: 'editchargerdetails',
    loadChildren: () => import('./editchargerdetails/editchargerdetails.module').then( m => m.EditchargerdetailsPageModule)
  },
  {
    path: 'addchargerdetails',
    loadChildren: () => import('./addchargerdetails/addchargerdetails.module').then( m => m.AddchargerdetailsPageModule)
  },
  {
    path: 'chargingstationdetails',
    loadChildren: () => import('./chargingstationdetails/chargingstationdetails.module').then( m => m.ChargingstationdetailsPageModule)
  },
  {
    path: 'chargingdetails',
    loadChildren: () => import('./chargingdetails/chargingdetails.module').then( m => m.ChargingdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImchargemanPageRoutingModule {}
