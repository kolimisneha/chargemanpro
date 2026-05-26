import { Injectable } from "@angular/core";
import { ActionSheetController, AlertController, LoadingController, NavController, ToastController } from "@ionic/angular";
import { Storage } from "@capacitor/storage";
import * as constants from '../constants';
import { BehaviorSubject, Subject } from "rxjs";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Capacitor, Plugin, } from "@capacitor/core";
import { Geolocation } from "@capacitor/geolocation";
import { Diagnostic } from "@awesome-cordova-plugins/diagnostic/ngx";
import { OpenNativeSettings } from "@awesome-cordova-plugins/open-native-settings/ngx";
import { Dialogs } from "@awesome-cordova-plugins/dialogs/ngx";
import { DatePicker } from '@capacitor-community/date-picker';
import * as moment from 'moment';
import { CallNumber } from "@awesome-cordova-plugins/call-number/ngx";
import { LaunchNavigator } from "@awesome-cordova-plugins/launch-navigator/ngx";
import { Browser } from '@capacitor/browser';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory, Encoding, FilesystemDirectory } from '@capacitor/filesystem';
import { File } from "@awesome-cordova-plugins/file/ngx";
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({providedIn:'root'}) 

export class Utils {
    constructor(private toastController: ToastController,private loaderCtrl: LoadingController, private navCtrl: NavController,
      private router:Router, private activatedRoute: ActivatedRoute, private diagnostic: Diagnostic, private dialog: Dialogs,
      private openSettings: OpenNativeSettings, private call: CallNumber, private launchNavigator: LaunchNavigator, private actionSheet: ActionSheetController, private filePlugin: File,
      private inAppBrowser: InAppBrowser) {
     
    }
   
    walletSubject:BehaviorSubject<any> = new BehaviorSubject<any>('');
    timerSubject:BehaviorSubject<any> = new BehaviorSubject<any>('');
    FilterSubject: Subject<any> = new Subject;
    MapOptSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
    walletObs = this.walletSubject.asObservable();
    timerObs = this.timerSubject.asObservable();
    filterObs = this.FilterSubject.asObservable();
    ChargeStatusSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
    chargeStatusObs = this.ChargeStatusSubject.asObservable();
    mapOptObs = this.MapOptSubject.asObservable();
    _actionSheet: any;
/**
 * Displays toast message
 * @param toastMessage - Message displayed in the toast
 * @param buttons - buttons to be displayed in the toast which is an array of objects contains handlers too
 * @param duration - number which represents how many millisec the toast should be displayed
 * @returns a toast message
 */
    async presentToast(toastMessage: string,  buttons: any[], duration?: number) {
        const toast = await this.toastController.create({
          message: toastMessage,
          duration: duration,
          buttons: buttons,
        });
        return await toast.present();
      }

/**
 * To store the details in the internal storage using capacitor Storage plugin
 * @param KEY_NAME - Key name to store the value
 * @param VALUE - value to be stored 
 */
      storeDetails = async (KEY_NAME, VALUE) => {
        await Storage.set({key:KEY_NAME, value: VALUE})
      }
/**
 * To get the value of the requested key name from internal storage using capacitor Storage plugin
 * @param KEY_NAME - Key name to get the value
 * @returns value of the requested key 
 */

      getStoredDetails = async (KEY_NAME) => {
        const val = await Storage.get({key: KEY_NAME})
        return val;
      }
 /**
  * To remove the value from the internal storage
  * @param KEY_NAME - Key name to remove the stored value
  */     
    
      removeStoredDetails = async (KEY_NAME) => {
        await Storage.remove({key:KEY_NAME});
      }


  isFirstTimeUser(enterdMobileNumber) {
    return this.getStoredDetails(
      constants.KEYS.IS_FIRST_TIME_USER
    ).then((res) => {
      if (res.value === null || res.value === "" || res.value !== enterdMobileNumber ) {
        return true;
      } else {
        return false;
      }
    });
  }

/**
 * To get the user details from the internal storage of the mobile 
 * @returns JSON data contains user details like name, mobile, email other wise false
 */
  getStoredUserDetails() {
    const details =  this.getStoredDetails(constants.KEYS.USER_DETAILS).then((res) => {
      if(res && res.value) {
        return JSON.parse(res.value)
      } else {
        return false;
      }
    })
    return details;
  }

/**
 * To display loading alert while API or internal request processing
 * @param loadingMessage Message to display in the loading alert
 */
  async showLoader(loadingMessage: string) {
    const loading = await this.loaderCtrl.create({
      cssClass: 'loading-custom-class',
      message: loadingMessage,
      backdropDismiss: false,
      keyboardClose: true
    });
    this.loaderCtrl.getTop();
    await loading.present();
  }

  /**
   * Dismissing loader
   */
  dismissLoader() {
    this.loaderCtrl.getTop();
    this.loaderCtrl.dismiss();
  }

/**
 * To navigate from one page to another page with specific type and options
 * 
 * @param type type of navigation Forward, Backward or ROOT
 * @param pageUrl page url to be navigated from current page
 * @param extras Data to be sent from one page to another page 
 */
  navigateTo(type:string, pageUrl:string, extras?:NavigationExtras) {
    switch (type) {
      case constants.KEYS.NAV_FORWARD:
        this.navCtrl.navigateForward(pageUrl);
        break;
      case constants.KEYS.NAV_BACKWARD:
        this.navCtrl.navigateBack(pageUrl);
        break;
      case constants.KEYS.SET_ROOT:
        this.navCtrl.navigateRoot(pageUrl);
        break;
      case constants.KEYS.NAV_FORWARD_WITH_OPT:
        this.navCtrl.navigateForward(pageUrl, extras);
        break;
      default:
        this.navCtrl.navigateForward(pageUrl);
    } 
  }

  /**
   * Gets the page related parameters
   * @returns object of page specific parameters
   */
  getPageParams() {
    return this.router.getCurrentNavigation()?.extras.state;
  }


  ionViewWillLeave() {
   // console.log('View will leave called');
  }

   
  /**
   * 
   * @param type Type of hardware to check eg: Bluetooth, GPS, Camera
   */
   async checkStatus(type) {
    let status = false;
      if(type === constants.KEYS.GEO_LOC_PERMISSION) {
        await this.diagnostic.isLocationEnabled().then((res) => {
          if(res) {
           status = true
          }
        })
      } else if (type === constants.KEYS.CAMERA_PERMISSION) {
        status = await this.diagnostic.isCameraPresent();
      }
      return status
    }


    checkLocationAuthorizationStatus() {
      
       return this.diagnostic.getLocationAuthorizationStatus().then((status) => {
        switch(status) {
          case this.diagnostic.permissionStatus.NOT_REQUESTED:
             return constants.KEYS.STATUS_KEY_NOT_REQ;
                        
          case this.diagnostic.permissionStatus.DENIED_ALWAYS:
             return constants.KEYS.STATUS_KEY_DENIED_ALW;
           
          case this.diagnostic.permissionStatus.DENIED_ONCE:
              return constants.KEYS.STATUS_KEY_DENIED_ONCE;
          
          case this.diagnostic.permissionStatus.GRANTED:
              return constants.KEYS.STATUS_KEY_GRANTED;
 
          case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
             return constants.KEYS.STATUS_KEY_GRANTED_IN_USE;
          
          default:
             return constants.KEYS.STATUS_KEY_NOT_REQ;
            
        }
        
      })
    }

    requestLocationAccess() {
     return this.diagnostic.requestLocationAuthorization().then((status) => {
        switch(status){
          case this.diagnostic.permissionStatus.DENIED_ALWAYS:
              return "DENIED_ALWAYS";
              break;
          case this.diagnostic.permissionStatus.DENIED_ONCE:
              return "DENIED_ONCE";
              break;
          case this.diagnostic.permissionStatus.GRANTED:
              return "GRANTED";
              break;
          case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
              return "GRANTED_IN_USE";
              break;
      }
      })
    }

    requestCameraAccess() {
      return this.diagnostic.requestCameraAuthorization().then((status) => {
         switch(status){
           case this.diagnostic.permissionStatus.DENIED_ALWAYS:
               return "DENIED_ALWAYS";
               break;
           case this.diagnostic.permissionStatus.DENIED_ONCE:
               return "DENIED_ONCE";
               break;
           case this.diagnostic.permissionStatus.GRANTED:
               return "GRANTED";
               break;
           case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
               return "GRANTED_IN_USE";
               break;
       }
       })
     }

    checkCameraAuthorization() {
      
      return this.diagnostic.getCameraAuthorizationStatus().then((status) => {
       switch(status) {
         case this.diagnostic.permissionStatus.NOT_REQUESTED:
            return constants.KEYS.STATUS_KEY_NOT_REQ;
                       
         case this.diagnostic.permissionStatus.DENIED_ALWAYS:
            return constants.KEYS.STATUS_KEY_DENIED_ALW;
          
         case this.diagnostic.permissionStatus.DENIED_ONCE:
             return constants.KEYS.STATUS_KEY_DENIED_ONCE;
         
         case this.diagnostic.permissionStatus.GRANTED:
             return constants.KEYS.STATUS_KEY_GRANTED;

         case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
            return constants.KEYS.STATUS_KEY_GRANTED_IN_USE;
         
         default:
            return constants.KEYS.STATUS_KEY_NOT_REQ;
           
       }
       
     })
   }


    getCameraPermissions() {
     return this.checkStatus(constants.KEYS.CAMERA_PERMISSION).then((res) => {
        if(res) {
          return this.checkCameraAuthorization().then((status) => {
            if(status === constants.KEYS.STATUS_KEY_GRANTED || status === constants.KEYS.STATUS_KEY_GRANTED_IN_USE) { 
              return 'yes';
            } else if (status === constants.KEYS.STATUS_KEY_DENIED_ONCE || status === constants.KEYS.STATUS_KEY_NOT_REQ){
              return this.requestCameraAccess().then((req_stat: any) => {
                if(req_stat === 'GRANTED' || req_stat === 'GRANTED_IN_USE') {
                  return 'yes'
                } else {
                  this.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                    if(res === 1) {
                      this.openSettings.open('application_details')
                    }
                    return 'no';
                  })
                }
              })
            } else if(status === constants.KEYS.STATUS_KEY_DENIED_ALW) {
              this.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                if(res === 1) {
                  this.openSettings.open('application_details')
                }
                return 'no';
              })
            }
          })
        } else {
          return 'hardware not found';
        }
      })
    }

    getCoordinates(type) {
      let coords:any = { coords:'', status: ''};
      let dialogTitle = '';
      let dialogMessage = ''
      
      if(type === constants.KEYS.DIALOG_TEXT_TYPE_LOAD) {
        dialogTitle = constants.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_TITLE;
        dialogMessage = constants.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_MESSAGE;
      } else if(type === constants.KEYS.DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT) {
        dialogTitle = constants.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_TITLE
        dialogMessage = constants.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_CHARGE_STATION_ERR;
      }
      return this.checkStatus(constants.KEYS.GEO_LOC_PERMISSION).then((res) => {
          if(res) {
              return this.checkLocationAuthorizationStatus().then((status) => {
              if(status === constants.KEYS.STATUS_KEY_GRANTED || status === constants.KEYS.STATUS_KEY_GRANTED_IN_USE) {
                return Geolocation.getCurrentPosition().then((pos) => {
                  coords.coords = pos.coords;
                  coords.status = 'granted'
                  return coords
                })
              } else if (status === constants.KEYS.STATUS_KEY_DENIED_ONCE || status === constants.KEYS.STATUS_KEY_NOT_REQ) {
                 // coords.status = 'denied once & requesting';
                  return this.requestLocationAccess().then((req_stat) => {
                    if(req_stat === 'GRANTED' || req_stat === 'GRANTED_IN_USE') {
                      return Geolocation.getCurrentPosition().then((pos) => {
                        coords.coords = pos.coords;
                        coords.status = 'granted';
                        return coords;
                      })
                    } else {
                      
                      return this.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,dialogTitle, dialogMessage, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                        if(res === 1) {
                          this.openSettings.open('application_details')
                        }
                        return coords.status = "permission_err";
                      })
                    }
                  })
              } else {
                // coords.status =  'Denied always';
                return this.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,dialogTitle, dialogMessage, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                  if(res === 1) {
                    this.openSettings.open('application_details')
                  }
                  return coords.status = 'permission_err'
                })
              }
            })
          } else {
            return this.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,constants.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE, constants.DISPLAY_MESSAGES.ALERT_LOCATION_ENABLE_ERR_MESSAGE, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
              if(res === 1) {
                this.openSettings.open('location')
              }
              return coords.status = 'location_disable_err';
            })
          }
      })
    }

    openNativeSettings(settingType) {
        this.openSettings.open(settingType);
    }
    
    displayDialog(type: string, title:string, message: string, buttons:any) {
      if(type === constants.KEYS.DIALOG_TYPE_PROMPT) {
      return this.dialog.confirm(message, title, buttons).then((res) => {
        return res;
      })
    } else {
      return this.dialog.alert(message,title,buttons).then((res) => {
        return res;
      })
    } 
    }

    presentDateTimePicker(mode, is24Hour, format) {
      return DatePicker.present({
        mode: mode,
        is24h: is24Hour,
        format: format
      }).then((date) => {
        if(date.value !== undefined) {
        return date.value
        } 
      })
    }

    validateTime(timeone, timetwo, format) {  
        let time_one = moment(timeone, format);
        let time_two = moment(timetwo, format)
        if(time_one.isBefore(time_two)) {
          return true;
        } else {
          return false;
        }
    }

    convertDateTimeFormat(dateTime,existingFormat,desiredFormat) {
      return moment(dateTime, existingFormat).format(desiredFormat);
    }

    callNumber(mobileNumber:string){
      this.call.callNumber(mobileNumber, false);
    }

    launchMaps(lat,long) {
      if(Capacitor.getPlatform() === 'android') {
      this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS).then((maps) => {
        let app;
        if(maps) {
          app = this.launchNavigator.APP.GOOGLE_MAPS;
          this.launchNavigator.navigate([lat, long], {app: app})
        } else {
          this.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.MAPS_ERR,[constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        }
      })
    } else if(Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'web'){
      this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS || this.launchNavigator.APP.APPLE_MAPS).then((maps) => {
        let app;
        if(maps) {
          app = this.launchNavigator.APP.APPLE_MAPS || this.launchNavigator.APP.GOOGLE_MAPS;
          this.launchNavigator.navigate([lat, long], {app: app})
        } else {
          this.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.MAPS_ERR,[constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        }
      })
    }
    }
    
    updateValues(type:string, value: any) {
      if(type === constants.KEYS.UPDATE_WALLET_TYPE) {
        this.walletSubject.next(value);
        // this.walletSubject.complete();  
      } else if(type === constants.KEYS.CLEAR_SUB) {
        this.timerSubject.next(value)
      } else if(type === constants.KEYS.SEARCH_FILTER) {
        this.FilterSubject.next(value);
      } else if(type === constants.KEYS.CHARGE_STATUS){
        this.ChargeStatusSubject.next(value);
      } else if(type === constants.KEYS.MAP_OPT) {
        this.MapOptSubject.next(value);
      }
    }

    unSubscribe(type) {
      if(type === constants.KEYS.CHARGE_STATUS) {
        this.ChargeStatusSubject.complete()
      } else if(type === constants.KEYS.MAP_OPT) {
        this.MapOptSubject.complete();
      } 
    }
 
    async openWebSite(url: string, type: string) {
     // await Browser.open({url: 'https://'+url})
     let target = "_system"
     const browserOptions: InAppBrowserOptions = {
      hardwareback : 'yes',
     }
     if(type === constants.KEYS.URL_TYPE_EXTERNAL)
     this.inAppBrowser.create("https://"+url, target, browserOptions)
     else 
     this.inAppBrowser.create(url, target, browserOptions);
    }

    minutes_to_hhmm (numberOfMinutes) {
      //create duration object from moment.duration  
      var duration = moment.duration(numberOfMinutes, 'minutes');
      
      //calculate hours
      var hh = (duration.years()*(365*24)) + (duration.months()*(30*24)) + (duration.days()*24) + (duration.hours());
      
      //get minutes
      var mm = duration.minutes();

      var sec = duration.seconds();
      
      //return total time in hh:mm format
      return hh+'Hrs '+mm+'Min '+ sec+'Sec';
  }

  getCurrentTimeStamp() {
    return moment().format()
  }
    

  async getActionSheetMenu(headerTitle, buttons: any[]) {
    this._actionSheet = await this.actionSheet.create({
      header: headerTitle,
      buttons: buttons
    })
    await this._actionSheet.present();
    let {data} = await this._actionSheet.onDidDismiss();
    return data;
  }

  async isCameraPermissionAvailable() {
    let camera_values = {status:''}
    const cameraAvailable = await this.diagnostic.isCameraPresent();
    if(cameraAvailable){
    const permissionAvailable = await Camera.checkPermissions();

    if(permissionAvailable.camera === 'granted' && permissionAvailable.photos === 'granted') {
     camera_values.status = constants.KEYS.CAMERA_PERMISSION_SUCCESS;
    } else if((permissionAvailable.camera === 'prompt' || permissionAvailable.camera === 'prompt-with-rationale' || permissionAvailable.camera === 'denied') ||
    permissionAvailable.photos === 'prompt' || permissionAvailable.photos === 'prompt-with-rationale' || permissionAvailable.photos === 'denied'){
      const permissionState = await Camera.requestPermissions();
      if(permissionState.camera === 'granted') {
      camera_values.status = constants.KEYS.CAMERA_PERMISSION_SUCCESS
      } else {
       camera_values.status = constants.KEYS.CAMERA_PERMISSION_ERR
      }
    }
  } else {
    camera_values.status = constants.KEYS.CAMERA_NOT_FOUND
  }
  return camera_values
  }

  async getPhoto(type) {
    const source = type === 'camera' ? CameraSource.Camera : CameraSource.Photos;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      correctOrientation: true,
      source: source // Camera, Photos or Prompt!
  });
    // const imageStorage:any= await Filesystem.readFile({path: image.path});
    // const base64Image = 'data:image/jpeg;base64,'+imageStorage.data;
    const base64Image = image.dataUrl;
    let image_blob = this.getBlob(base64Image.split(',')[1], '.jpeg');
    let date = new Date(),
    time = date.getTime(),
    fileName = time + ".jpeg";

    await Filesystem.writeFile({
      data: base64Image,
      path: fileName,
      directory: Directory.External
    });
    const finalPhotoUri = await Filesystem.getUri({
      directory: Directory.External,
      path: fileName
    });
    let photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);
    
    return {path: photoPath, blob:image_blob};
  }

  getBlob(b64Data:string, contentType:string, sliceSize:number= 512) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

getDistance(lat1, lat2, lon1, lon2) {
  
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
               
        let c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;
   
        // calculate the result
        return(c * r);
}

getNearestChargeStations(currentLat, currentLong, details, radius) {
  const currentLatitude = currentLat;
  const currentLongitude =  currentLong;
  details.map((item) => {
    let chargerLatitude = parseFloat(item.latlong.split(',')[0]);
    let chargerLongitude = parseFloat(item.latlong.split(',')[1]);
    item.distance = this.getDistance(currentLatitude, chargerLatitude, currentLongitude, chargerLongitude).toFixed();
  })
  let nearChargePoints =  details.filter((item) => {
    return parseFloat(item.distance) <= radius;
  })

  return nearChargePoints;
}

  getDurationInHours(duration) {
    return moment.utc(moment.duration(duration, "minutes").asMilliseconds()).format("HH:mm:ss")
  }


  getFormattedTime(time) {
    let hours = parseInt(time.split(':')[0]);
    let min = parseInt(time.split(':')[1]);
    let sec = parseInt(time.split(':')[2]);

    let updatedhours = hours < 10 ? '0'+hours : hours;
    let updatedMin = min < 10 ? '0'+min : min;
    let updatedSec = sec < 10 ? '0'+sec : sec;
    let finalTime = updatedhours+':'+updatedMin+':'+updatedSec;
    
    return finalTime;

  }
   convertTimetoSeconds(value) {
     return moment.duration(value).asSeconds;
   }
  
   convertSecondsToTime(value) {
     let duration: any = moment.duration(value, 'seconds');
     return moment(duration).format('HH:mm:ss').toString();
   }

   getDifferenceDuration(end, start, endFormat, startFormat, returnFormat) {
     let _start = moment(start, startFormat);
     let _end = moment(end, endFormat);
     let duration = moment.duration(_end.diff(_start));
     let durationVal;
     switch(returnFormat) {
       case constants.DATEFORMAT_STRINGS.MINUTES:
        durationVal = duration.asMinutes();
        break;
       case constants.DATEFORMAT_STRINGS.HOURS:
        durationVal = duration.asHours();
        break;

     }
     return durationVal;
   } 
getTodayDate() {
let today: any = new Date();
let dd: any = today.getDate();
let mm: any = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
return today;
}


getCurrentDate(format:string) {
  return moment(new Date()).format(format)
}
}

