import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostDetailsTabsPageRoutingModule } from './host-details-tabs-routing.module';

import { HostDetailsTabsPage } from './host-details-tabs.page';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostDetailsTabsPageRoutingModule
  ],
  declarations: [HostDetailsTabsPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HostDetailsTabsPageModule {}
