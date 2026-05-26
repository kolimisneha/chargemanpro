import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualChargeEntryPageRoutingModule } from './manual-charge-entry-routing.module';

import { ManualChargeEntryPage } from './manual-charge-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualChargeEntryPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ManualChargeEntryPage]
})
export class ManualChargeEntryPageModule {}
