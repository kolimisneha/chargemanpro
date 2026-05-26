import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargingstationdetailsPageRoutingModule } from './chargingstationdetails-routing.module';

import { ChargingstationdetailsPage } from './chargingstationdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargingstationdetailsPageRoutingModule
  ],
  declarations: [ChargingstationdetailsPage]
})
export class ChargingstationdetailsPageModule {}
