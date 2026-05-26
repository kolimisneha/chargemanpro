import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KycDetailsPageRoutingModule } from './kyc-details-routing.module';

import { KycDetailsPage } from './kyc-details.page';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KycDetailsPageRoutingModule
  ],
  declarations: [KycDetailsPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KycDetailsPageModule {}
