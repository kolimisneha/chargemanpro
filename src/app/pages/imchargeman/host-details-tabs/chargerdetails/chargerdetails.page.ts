  import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Utils } from 'src/app/services/utils.service';
import * as constants from '../../../../constants';
@Component({
  selector: 'app-chargerdetails',
  templateUrl: './chargerdetails.page.html',
  styleUrls: ['./chargerdetails.page.scss'],
})
export class ChargerdetailsPage implements OnInit {
  redDotIcon: string = '../../../../assets/icon/red_dot.svg';
  greenDotIcon: string = '../../../../assets/icon/green_dot.svg';
  pageParams: any = ''
  storedStations: any;
  chargerDetails: any= {} ;
  constructor(private utils: Utils) { }

  async ngOnInit() {
    this.pageParams = this.utils.getPageParams().type;
    this.pageParams.startime = this.utils.convertDateTimeFormat(this.pageParams.startime, "HH:mm:ss", "hh:mm A");
    this.pageParams.endtime = this.utils.convertDateTimeFormat(this.pageParams.endtime, "HH:mm:ss", "hh:mm A");
    this.storedStations = await (await this.utils.getStoredDetails(constants.KEYS.REGISTERED_CHARGER_DETAILS)).value;
    this.storedStations = JSON.parse(this.storedStations);
    if(this.storedStations.length > 0) {
      this.chargerDetails = this.storedStations.find((station) => {
        return station.deviceid === this.pageParams.deviceid
      })
    
    }
  }
  
  editClickHandler() {
    const navExtras: NavigationExtras = {
      state : {
        type: constants.KEYS.TYPE_EDIT_VAL,
        chargerDetails: this.pageParams
      }
    }
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, '/pages/sidemenu/imchargeman/addchargerdetails', navExtras)
  }


  async ionViewDidEnter() {
    
  }

}
