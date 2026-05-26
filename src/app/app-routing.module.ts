import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule),
    canActivate: [LoginAuthGuard]
  },
  {
    path: 'charge-start-stop',
    loadChildren: () => import('./charge-start-stop/charge-start-stop.module').then( m => m.ChargeStartStopPageModule)
  },
  {
    path: 'charge-glance',
    loadChildren: () => import('./charge-glance/charge-glance.module').then( m => m.ChargeGlancePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'host-details-tabs',
    loadChildren: () => import('./pages/imchargeman/host-details-tabs/host-details-tabs.module').then( m => m.HostDetailsTabsPageModule)
  },
  {
    path: 'host-history',
    loadChildren: () => import('./pages/imchargeman/host-details-tabs/host-history/host-history.module').then( m => m.HostHistoryPageModule)
  },
  {
    path: 'manual-charge-entry',
    loadChildren: () => import('./manual-charge-entry/manual-charge-entry.module').then( m => m.ManualChargeEntryPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },

 
  // {
  //   path: 'modal',
  //   loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  // }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
