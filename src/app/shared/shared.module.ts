import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/components/header/header.component';
import { LoadingComponentComponent } from 'src/components/loading-component/loading-component.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponentComponent,
    CommonModule,
    IonicModule
  ]
})
export class SharedModule {}
