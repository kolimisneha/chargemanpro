import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, MenuController, NavController, Platform } from '@ionic/angular';
import { Authentication } from './services/authentication.service';
import { Network } from '@capacitor/network';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from 'src/environments/environment';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { Utils } from './services/utils.service';
import { DISPLAY_MESSAGES, KEYS, RELATIVE_URLS } from './constants';
import { App } from '@capacitor/app'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
import { SplashScreen } from '@capacitor/splash-screen';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { ChargemanRequestService } from './services/chargeman-request.service';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true}) routerOutlet: IonRouterOutlet;

  constructor(private authService: Authentication, private navController: NavController, private platform: Platform, private menuCtrl: MenuController, 
              private utils: Utils, private chargeReq: ChargemanRequestService ,private location: Location, private insomnia: Insomnia, private router: Router, private screenOrientation: ScreenOrientation, private appVersion: AppVersion) {
  this.platform.ready().then(async () => {
      let appversion = await this.appVersion.getVersionNumber();
      
      this.chargeReq.getRequestDetails(RELATIVE_URLS.GET_APP_VERSION).subscribe((res: any) => {
        
        if(res && res.updatedversion) {
     
          if(parseFloat(res.updatedversion) > parseFloat(appversion)) {
            const platform = Capacitor.getPlatform();
            const platfromText = platform === 'android' ? DISPLAY_MESSAGES.VERSION_TEXT_PLAYSTORE : platform === 'ios' ? DISPLAY_MESSAGES.VERSION_TEXT_APPSTORE : '';
            const buttonOkText = platform === 'android' ? DISPLAY_MESSAGES.GO_TO_PLAYSTORE : platform === 'ios' ? DISPLAY_MESSAGES.GO_TO_APPSTORE : '';
            this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.DIALOG_TITLE_INFO, DISPLAY_MESSAGES.APP_VERSION_UPDATE_TEXT+' '+platfromText,[buttonOkText, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
              if(res === 1) {
                if(platform === 'android') {
                  this.utils.openWebSite('play.google.com/store/apps/details?id=com.chargeman.app', KEYS.URL_TYPE_EXTERNAL)
                } else {
                 this.utils.openWebSite('itms-apps://itunes.apple.com/app/', KEYS.URL_TYPE_INTERNAL);
                }
              } else {
                this.initializeApp();
                this.registerBackButton();
                this.insomnia.keepAwake();
              }
            })
          } else {
              this.initializeApp();
              this.registerBackButton();
              this.insomnia.keepAwake();
          }
        } else {
              this.initializeApp();
              this.registerBackButton();
              this.insomnia.keepAwake();
        }
      }, () => {
          this.initializeApp();
          this.registerBackButton();
          this.insomnia.keepAwake();
      })
      
  })
}

registerBackButton() {
  this.platform.backButton.subscribeWithPriority(99, () => {
    this.menuCtrl.isOpen().then((res) => {
        if(res) {
          this.menuCtrl.toggle();
        } else {
          if(this.router.url === '/charge-glance' || this.router.url === '/charge-start-stop') {
            this.utils.navigateTo(KEYS.SET_ROOT,'pages')
          } 
          // else if(this.routerOutlet && this.routerOutlet.canGoBack()) {
          //   this.location.back();
          // }
           else {
              this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.DIALOG_TITLE_INFO, DISPLAY_MESSAGES.EXIT_DIALOG_WARNING, [DISPLAY_MESSAGES.DIALOG_TEXT_NO, DISPLAY_MESSAGES.DIALOG_TEXT_YES]).then((res) => {
                if(res === 2) {
                  App.exitApp();
                }
              })
          }
        }
    })
   
  })
}

  async initializeApp() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    this.screenOrientation.lock('portrait')
    // CapacitorGoogleMaps.initialize({
    //   key: environment.mapsKey
    // })
    // Environment.setEnv({
    //   // api key for server
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA_gSzPNC40ioDPHIb7kMkYFClDihdhhx4',

    //   // api key for local development
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA_gSzPNC40ioDPHIb7kMkYFClDihdhhx4'
    // });
    await this.authService.authReady;
    this.authService.authState.subscribe((res) => {
      if(res) {
        this.navController.navigateRoot(['/pages'])
      } else {
        this.navController.navigateRoot(['']);
      }
    })

    Network.addListener('networkStatusChange', status => {
      if(status.connected === false) {
       // alert('Network disconnected');
       this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE,DISPLAY_MESSAGES.NETWORK_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
         if(res === 1) {
           this.utils.openNativeSettings('network');
         }
       })
      } else if(status.connected === true) {
       // alert('You are back in online');
      }
    });
  
  }


}
