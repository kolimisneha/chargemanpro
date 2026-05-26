import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: 'sidemenu',
    component: PagesPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'imchargeman',
        loadChildren: () => import('./imchargeman/imchargeman.module').then( m => m.ImchargemanPageModule)
      },
      {
        path: 'kyc-details',
        loadChildren: () => import('./kyc-details/kyc-details.module').then( m => m.KycDetailsPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
      },
     
      {
        path: 'withdraw',
        loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
      },

      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
      },
      
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
      },
      {
        path: 'support',
        loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'sidemenu/dashboard',
    pathMatch: 'full'
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
