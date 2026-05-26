import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as constants from '../../constants';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-imchargeman',
  templateUrl: './imchargeman.page.html',
  styleUrls: ['./imchargeman.page.scss'],
})
export class ImchargemanPage implements OnInit {

  redDotIcon = "../../assets/icon/red_dot.svg";
  greenDotIcon = "../../../assets/icon/green_dot.svg";
  addIcon = '../../../assets/icon/add_icon.svg';
  chargeStations: any = [];
  isLoading: boolean;
  showProgress: boolean;
  statusText: string;
  constructor(private navCtrl: NavController, private utils: Utils, private chargemenreq: ChargemanRequestService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    
    this.isLoading = true;
    this.showProgress = true;
    this.statusText = constants.DISPLAY_MESSAGES.LOADING_TEXT_CHARGE_STATIONS
    this.utils.getStoredUserDetails().then((res) => {
      const details = {
        "mobile": res.mobile,
      }
      this.chargemenreq.postRequestDetails(constants.RELATIVE_URLS.GET_CHARGEMAN,details).subscribe((res: any) => {
        if(res.length > 0) {
          this.isLoading = false;
          this.chargeStations = res;
        } else {
          this.isLoading = true;
          this.showProgress = false;
          this.statusText = constants.DISPLAY_MESSAGES.NO_CHARGE_STATIONS_FOUND_1+ ' ' +details.mobile+' '+constants.DISPLAY_MESSAGES.NO_CHARGE_STATIONS_FOUND_2
        }
        this.utils.storeDetails(constants.KEYS.REGISTERED_CHARGER_DETAILS, JSON.stringify(res))
      },(err) => {
        this.isLoading = true;
        this.showProgress = false;
        this.statusText = constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
        this.utils.storeDetails(constants.KEYS.REGISTERED_CHARGER_DETAILS, [])
        
      })
    })
    
  }
  openChargerRegistrationForm() {
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD, '/pages/sidemenu/imchargeman/addchargerdetails');
  }

  openChargemanDetails(stationDetails) {
    let navExtras: NavigationExtras = {
      state: {
        type: stationDetails
      }
    }
    this.utils.storeDetails(constants.KEYS.HOST_ID,stationDetails.deviceid);
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, '/pages/sidemenu/imchargeman/host-details-tabs', navExtras);
  }

}
