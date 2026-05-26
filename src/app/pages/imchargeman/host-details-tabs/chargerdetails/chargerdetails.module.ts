import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargerdetailsPageRoutingModule } from './chargerdetails-routing.module';

import { ChargerdetailsPage } from './chargerdetails.page';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargerdetailsPageRoutingModule
  ],
  declarations: [ChargerdetailsPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargerdetailsPageModule {}
