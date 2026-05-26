import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DISPLAY_MESSAGES, KEYS } from '../constants';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { IonTabs, ModalController } from '@ionic/angular';
import { ManualChargeEntryPage } from '../manual-charge-entry/manual-charge-entry.page';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
 @ViewChild('toolbar') toolBar: ElementRef;
 @ViewChild('tabs') tabs: IonTabs;
 searchEmitter: EventEmitter<string> = new EventEmitter<string>();
 enableSearch: boolean = false;
 searchIcon = "../../assets/icon/search_icon.svg";
 appIconSrc="../../assets/icon/menu_icon.svg";
 cartIconSrc="../../assets/icon/cart.svg";
 userDetails: any;
 chargeEnergy = '../../assets/icon/charging_energy.svg';
 qr_scanner = '../../assets/icon/qr_scanner.svg';
 chargeCount;
 showCharger: boolean = false;
  constructor(private router: Router, private modalCtrl: ModalController ,private barcodeScanner: BarcodeScanner, private utils: Utils, private chargemanReq: ChargemanRequestService) {
    
  }

  async ionViewDidEnter() {
    this.userDetails = await this.utils.getStoredUserDetails();
    this.utils.chargeStatusObs.subscribe(async (res) => {
      
      let status = await this.utils.getStoredUserDetails();
      let chargeCount = status.chargeCount ?? '0';
      chargeCount === '0' ? this.showCharger = false : this.showCharger = true
    })
  }
  async ngOnInit() {
  }

  async openScanner() { 
    this.userDetails = await this.utils.getStoredUserDetails();
    if(parseInt(this.userDetails.chargeCount) > 0) {
      
      let rph = await (await this.utils.getStoredDetails(KEYS.DEVICE_DETAILS)).value ?? this.userDetails.rph;
      this.userDetails.rph = JSON.parse(rph).rph ?? rph;
      // let chargeDurationTimer = await (await this.utils.getStoredDetails(KEYS.LAST_TRANSACTION_TIME)).value;
      
     // this.userDetails.transactionTimer = this.utils.convertSecondsToTime(chargeDurationTimer);
      this.utils.presentToast(constants.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 4000);
      const extras: NavigationExtras = {
        state: {
          charge_details: this.userDetails
        }
      }
      this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT,'/charge-start-stop', extras)
    } else {
  //     let cd = {

  //       "mobile": "7893670519",
  //       "deviceid": "123456",
  //       "hostname": "EVCM",
  //       "hostaddress": "Madhapuroffice",
  //       "latlong": "17.4429074,78.3967687",
  //       "chargettype": "commercial",
  //       "rph": "25",
  //       "startime": "09:00:00",
  //       "endtime": "12:28:00",
  //       "active": "1",
  //       "capacity": "3.3",
  //       "createdby": "Ramesh",
  //       "createddate": "2022-02-04 23:58:15",
  //       "modifiedby": null,
  //       "modifieddate": null,
  //       "fullday": "0",
  //       "chargeStatus": 'Available',
  //       "self": false,
  //       "chargeCount": 0
  //           }
      
  //   const extras:NavigationExtras = {
  //     state: {
  //       // charge_details: res[0],
  //        charge_details: cd
  //   }
  // }
  //   if(cd.chargeStatus.toLowerCase() === 'available') {
  //   this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT,'/charge-start-stop', extras)
  //   } else {
  //     console.log('Charge station busy');
  //   }
    const barcodeOptions = {
      formats: 'QR_CODE',
      disableSuccessBeep: true,
      prompt: DISPLAY_MESSAGES.QR_SCANNER_HINT,
      
    }
    this.barcodeScanner.scan(barcodeOptions).then((scanData) => {
      if(scanData.cancelled == false) { 
        this.validateDeviceId(scanData.text);
      }

    }).catch((err) => {
      if(err === 'Illegal access') {
        this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT,DISPLAY_MESSAGES.ERR_DIALOG_TITLE,DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
          if(res === 1) {
            this.utils.openNativeSettings('application_details')
          }
        })
      }else {
        this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT,DISPLAY_MESSAGES.ERR_DIALOG_TITLE,DISPLAY_MESSAGES.SCAN_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK])
      }
      
    })
    }
  }
  onTabChange(event) {
   if(this.tabs.getSelected() === 'map') {
    this.enableSearch = true;
   } else {
     this.enableSearch = false;
   }
  }

  openShop() {
    this.utils.openWebSite('evchargeman.com', constants.KEYS.URL_TYPE_EXTERNAL);
  }

  validateDeviceId(deviceId) {
    const barcode_details = {
      "deviceid": deviceId
    }
  this.chargemanReq.postRequestDetails(constants.RELATIVE_URLS.GET_SCANNED_QR_STATION_DETAILS, barcode_details).subscribe((res: any) => {
    if(res.length > 0) {
      res[0].mobile === this.userDetails.mobile ?  res[0].self = true : res[0].self = false;
      if(res[0].chargeStatus.toLowerCase() === 'available') {
      const extras: NavigationExtras = {
        state : {
          charge_details: res[0]
        }
      }
      this.utils.storeDetails(KEYS.DEVICE_DETAILS, JSON.stringify(res[0]));
      this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT,'/charge-start-stop', extras)
    } else {
      this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT,DISPLAY_MESSAGES.DIALOG_TITLE_INFO,DISPLAY_MESSAGES.CHARGE_STATION_BUSY, [DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL])
    }
  } else {
    this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT,DISPLAY_MESSAGES.DIALOG_TITLE_INFO,DISPLAY_MESSAGES.CHARGE_STATION_NOT_REGISTERED, [DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL])
  }
    
  }, (err) => {
    this.utils.presentToast(constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR,[], 3000);
  })
  }

  async openManualEntrySheet() {
    this.userDetails = await this.utils.getStoredUserDetails();
    if(parseInt(this.userDetails.chargeCount) > 0) { 
      this.utils.presentToast(DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 3000);
  } else {
    const modal = await this.modalCtrl.create({
      component: ManualChargeEntryPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      presentingElement: await this.modalCtrl.getTop()
    });
    await modal.present();
    const { data } = (await modal.onWillDismiss());
    if(data !== undefined) { 
  
      this.validateDeviceId(data.id)
    }
  }
  }


  filterItems(event) {
    event.target.value.length > 0 ? this.utils.updateValues(KEYS.SEARCH_FILTER, event.target.value) : ''
  }
}
