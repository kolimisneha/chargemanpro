import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargeGlancePageRoutingModule } from './charge-glance-routing.module';

import { ChargeGlancePage } from './charge-glance.page';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargeGlancePageRoutingModule
  ],
  declarations: [ChargeGlancePage, HeaderComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargeGlancePageModule {}
