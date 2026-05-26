import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostHistoryPage } from './host-history.page';

const routes: Routes = [
  {
    path: '',
    component: HostHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostHistoryPageRoutingModule {}
