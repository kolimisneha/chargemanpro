import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostHistoryPageRoutingModule } from './host-history-routing.module';

import { HostHistoryPage } from './host-history.page';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostHistoryPageRoutingModule
  ],
  declarations: [HostHistoryPage, LoadingComponentComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HostHistoryPageModule {}
