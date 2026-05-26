import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { MaptabPageRoutingModule } from './maptab-routing.module';

import { MaptabPage } from './maptab.page';
import { AgmMap, AgmMarker } from '@agm/core';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaptabPageRoutingModule,
  ],
  declarations: [MaptabPage, AgmMap, AgmMarker, LoadingComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaptabPageModule {}
