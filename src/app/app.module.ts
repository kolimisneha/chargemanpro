import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { AgmCoreModule } from '@agm/core'
import { environment } from 'src/environments/environment';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
  AgmCoreModule.forRoot({
    apiKey: environment.mapsKey,
    libraries: ['places']
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Diagnostic, OpenNativeSettings, Dialogs, CallNumber, LaunchNavigator, 
     BarcodeScanner,
     Insomnia,EmailComposer, File, ScreenOrientation, AppVersion, InAppBrowser, PDFGenerator],
  bootstrap: [AppComponent],
})
export class AppModule {}
