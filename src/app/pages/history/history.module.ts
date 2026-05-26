import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { HeaderComponent } from 'src/components/header/header.component';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage, HeaderComponent, LoadingComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HistoryPageModule {}
