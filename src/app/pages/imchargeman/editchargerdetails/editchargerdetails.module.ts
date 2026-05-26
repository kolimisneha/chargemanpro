import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditchargerdetailsPageRoutingModule } from './editchargerdetails-routing.module';

import { EditchargerdetailsPage } from './editchargerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditchargerdetailsPageRoutingModule
  ],
  declarations: [EditchargerdetailsPage]
})
export class EditchargerdetailsPageModule {}
