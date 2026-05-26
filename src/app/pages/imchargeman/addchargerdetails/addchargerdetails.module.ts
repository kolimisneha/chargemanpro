import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchargerdetailsPageRoutingModule } from './addchargerdetails-routing.module';

import { AddchargerdetailsPage } from './addchargerdetails.page';
import { HeaderComponent } from 'src/components/header/header.component';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchargerdetailsPageRoutingModule,
    ReactiveFormsModule,  
    FormsModule
  ],
  declarations: [AddchargerdetailsPage, HeaderComponent, LoadingComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddchargerdetailsPageModule {}
