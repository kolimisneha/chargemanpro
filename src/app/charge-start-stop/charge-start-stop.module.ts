import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargeStartStopPageRoutingModule } from './charge-start-stop-routing.module';

import { ChargeStartStopPage } from './charge-start-stop.page';
import { HeaderComponent } from 'src/components/header/header.component';
// import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargeStartStopPageRoutingModule,
    
  ],
  declarations: [ChargeStartStopPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargeStartStopPageModule {}
