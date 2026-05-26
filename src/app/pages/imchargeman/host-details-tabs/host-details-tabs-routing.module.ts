import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostDetailsTabsPage } from './host-details-tabs.page';

const routes: Routes = [
  {
    path: 'host-details',
    component: HostDetailsTabsPage,
    children: [
      {
        path: 'charger-details',
        loadChildren: () => import('./chargerdetails/chargerdetails.module').then(m => m.ChargerdetailsPageModule)
      },
      {
        path: 'charger-history',
        loadChildren: () => import('./host-history/host-history.module').then(m => m.HostHistoryPageModule)
      }
    ]
  },
   {
     path:'',
     redirectTo: 'host-details/charger-details',
     pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostDetailsTabsPageRoutingModule {}
