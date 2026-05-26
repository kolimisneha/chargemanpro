import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImchargemanPageRoutingModule } from './imchargeman-routing.module';

import { ImchargemanPage } from './imchargeman.page';
import { HeaderComponent } from 'src/components/header/header.component';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImchargemanPageRoutingModule,
  ],
  declarations: [ImchargemanPage, HeaderComponent, LoadingComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImchargemanPageModule {}
