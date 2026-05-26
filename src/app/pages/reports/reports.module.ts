import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPageRoutingModule } from './reports-routing.module';

import { ReportsPage } from './reports.page';
import { HeaderComponent } from 'src/components/header/header.component';
import { ReportsViewPageModule } from './reports-view/reports-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsPageRoutingModule,
    ReactiveFormsModule,
    ReportsViewPageModule
  ],
  declarations: [ReportsPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ReportsPageModule {}
