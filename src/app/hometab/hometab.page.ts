import { Component, OnInit } from '@angular/core';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { forkJoin, from, Subscription } from 'rxjs';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  constructor(private utils: Utils, private chargemanReq: ChargemanRequestService) {}
  cartIconSrc = '../../assets/icon/shop.svg';
  walletIconSrc = '../../assets/icon/wallet.svg';
  historyIconSrc = '../../assets/icon/history.svg';
  supportIconSrc = '../../assets/icon/support.svg';
  userDetails: any;
  walletBalance: any = 0;
  nearestChargeStationsCount: string;
  isApiCalled: boolean = false;
  walletSubscription: Subscription;
  products = [];
  coordinates: any;
  chargeCount: any;
  chargeStatus: boolean = false;
  walletBalanceSubscriber: Subscription;
  chargeCountSubscriber: Subscription;
  mapsStatusText: string;
  isChargeStationsLoading:boolean = true;
  isLoading: boolean = false;
  settingsError: boolean = false;

  ngOnInit() {
    this.isApiCalled = true;
    this.fetchDashboardDetails(false);
   // this.products = constants.PRODUCT_DETAILS;

  }

  onViewClickHandler(type) { 
    let mapsOptions = {zoom:15, radius: 10, type:'widget'}
    this.utils.updateValues(constants.KEYS.MAP_OPT, mapsOptions)
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD, '/pages/sidemenu/dashboard/tabs/map')
  }

  onProductItemClickHandler(prod) {
    this.utils.openWebSite(prod.url, constants.KEYS.URL_TYPE_EXTERNAL);
  }

  openProductWebStore() {
    this.utils.openWebSite(constants.GRACIAS_DETAILS.GRACIAS_WEBSITE+constants.GRACIAS_DETAILS.CHARGERS_SUBPAGE_SITE, constants.KEYS.URL_TYPE_EXTERNAL);
  }

  /**
   * API call to get the wallet balance & nearest charge locations using forkjoin
   */

  async fetchDashboardDetails(isRefresher: boolean, event?: any) {
    this.isChargeStationsLoading = true;
    this.isLoading = true;
    this.settingsError = false;
    this.mapsStatusText = constants.DISPLAY_MESSAGES.LOADING_GPS
    this.utils.getStoredUserDetails().then(async (res) => {
      this.userDetails = res;
      const details = {
        "mobile": this.userDetails.mobile
      }
      const positions = await this.utils.getCoordinates(constants.KEYS.DIALOG_TEXT_TYPE_LOAD)
      if(positions.status === 'granted') {
        this.coordinates = {latitude: positions.coords.latitude, longitude: positions.coords.longitude}
      } else {
        this.coordinates = ''
      }
     
      this.walletBalanceSubscriber = this.chargemanReq.postRequestDetails(constants.RELATIVE_URLS.GET_WALLET_BALANCE, details).subscribe((res: any) => {
        this.walletBalance = parseFloat(res.balance).toFixed(2) ?? 0;
        this.utils.updateValues(constants.KEYS.UPDATE_WALLET_TYPE, this.walletBalance);
        this.utils.storeDetails(constants.KEYS.WALLET_BALANCE, this.walletBalance)
      }, (err) => {
        this.utils.presentToast(constants.DISPLAY_MESSAGES.BALANCE_FETCH_ERR, [], 3000);
        this.utils.storeDetails(constants.KEYS.WALLET_BALANCE, 0);
      });

      const nearChargeStationsDetails = {}
      this.chargeCountSubscriber = this.chargemanReq.postRequestDetails(constants.RELATIVE_URLS.GET_NEAR_CHARGE_STATIONS, nearChargeStationsDetails).subscribe((res: any) => {
        let chargeStations = [];
        this.mapsStatusText = constants.DISPLAY_MESSAGES.LOADING_NEARBY;
        if(res.length > 0 && this.coordinates !== '') {
          const currentPosLat = parseFloat(this.coordinates.latitude);
          const currentPosLong = parseFloat(this.coordinates.longitude)
          chargeStations = this.utils.getNearestChargeStations(currentPosLat, currentPosLong,res, 10);
          this.nearestChargeStationsCount = chargeStations.length < 10 ? '0'+chargeStations.length.toString() : chargeStations.length.toString();
          this.isLoading = false;
          this.isChargeStationsLoading = false;
          this.settingsError = false;
          this.mapsStatusText = '';
        this.utils.storeDetails(constants.KEYS.NEARBY_CHARGE_STATIONS, JSON.stringify(res));
        } else if(this.coordinates === ''){
          this.nearestChargeStationsCount = '0';
          this.isLoading = false;
          this.isChargeStationsLoading = true;
          this.settingsError = true;
          this.mapsStatusText = constants.DISPLAY_MESSAGES.PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS;
          // this.utils.presentToast(constants.DISPLAY_MESSAGES.PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS,[], 4000);
          this.utils.storeDetails(constants.KEYS.NEARBY_CHARGE_STATIONS, []);
        } else if(res.length === 0 || chargeStations.length === 0) {
          this.nearestChargeStationsCount = '0';
          this.isLoading = false;
          this.isChargeStationsLoading = true;
          this.settingsError = false;
          this.mapsStatusText = constants.DISPLAY_MESSAGES.NO_NEARRBY_STATIONS_FOUND;
          // this.utils.presentToast(constants.DISPLAY_MESSAGES.NO_NEARRBY_STATIONS_FOUND,[], 4000);
          this.utils.storeDetails(constants.KEYS.NEARBY_CHARGE_STATIONS, []);
        }
      }, (err) => {
        this.isLoading = false;
        this.isChargeStationsLoading = true;
        this.settingsError = false;
        this.mapsStatusText = constants.DISPLAY_MESSAGES.POSITION_FETCH_ERR;
        // this.utils.presentToast(constants.DISPLAY_MESSAGES.POSITION_FETCH_ERR,[], 3000);
        this.utils.storeDetails(constants.KEYS.NEARBY_CHARGE_STATIONS, []);
      });
     
      if(isRefresher) {
        event.target.complete();
      }
    })
  }

  openSettings() {
    this.utils.openNativeSettings('location');
  }

  async ionViewDidEnter() {
    
    //  if(!this.isApiCalled) {
      const details = await this.utils.getStoredUserDetails();
      this.chargeCount = details.chargeCount ?? '0';
      this.walletSubscription = this.utils.walletObs.subscribe((sub) => {
        if(sub === '') {
          // this.walletBalance = '0';
          this.utils.getStoredDetails(constants.KEYS.WALLET_BALANCE).then((res) => {

            this.walletBalance = parseFloat(res.value).toFixed(2) ?? '0';
          })
        } else {
        this.walletBalance = sub;
        }
      })
      this.utils.chargeStatusObs.subscribe(async (res) => {
        
              const count = await this.utils.getStoredUserDetails();
              this.chargeCount = count.chargeCount ?? '0';
              this.chargeStatus = res;
      })
    //  }
    //  this.isApiCalled = false;
    
  }


  async openChargeStartStopPage() {
    let updatedDetails = await this.utils.getStoredUserDetails();
    let deviceDetails = await (await this.utils.getStoredDetails(constants.KEYS.DEVICE_DETAILS)).value ?? updatedDetails.rph;
    let chargeCount = updatedDetails.chargeCount;
    let transactionid = updatedDetails.transactionid;
    let deviceid = updatedDetails.deviceid
    let devicetype = await (await this.utils.getStoredDetails(constants.KEYS.DEVICE_DETAILS)).value ?? updatedDetails.devicetype;
    
    const chargerDetails = {
      chargeCount: chargeCount,
      transactionid: transactionid,
      rph: JSON.parse(deviceDetails).rph ?? deviceDetails,
      deviceid: deviceid,
      devicetype: JSON.parse(devicetype).devicetype ?? devicetype
      //devicetype: "ocpp"
    }
    const chargeDetails: NavigationExtras = {
      state: {
        charge_details: chargerDetails
      }
    }
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', chargeDetails)
  }

  ionViewDidLeave() {
    // if(this.walletSubscription && !this.walletSubscription.closed)
    //   this.walletSubscription.unsubscribe();
  }

    
  rechargeHandler() {
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD,'/pages/sidemenu/wallet');
  }

  openQuickAction(page) {
    if(page === 'shop') {
      this.openProductWebStore();
    } else {
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD, '/pages/sidemenu/'+page);
    }
  }


  onBannerClick() {
    this.utils.openWebSite(constants.GRACIAS_DETAILS.WEBSITE, constants.KEYS.URL_TYPE_EXTERNAL);
  }



}
 