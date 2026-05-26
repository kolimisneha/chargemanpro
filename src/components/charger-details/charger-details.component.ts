import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { KEYS } from 'src/app/constants';
import { Utils } from 'src/app/services/utils.service';

@Component({
  selector: 'app-charger-details',
  templateUrl: './charger-details.component.html',
  styleUrls: ['./charger-details.component.scss'],
})
export class ChargerDetailsComponent implements OnInit {
  chargerDetails: any;
  callIconBlack="../../assets/icon/call_icon_black.svg";
  chargerPlugIcon:string  = '../../assets/icon/charger_plug.svg';
  chargerWalletIcon:string  = '../../assets/icon/charger_wallet.svg';
  chargerPowerIcon:string  = '../../assets/icon/charger_power.svg';
  currentLat: string;
  currentLong: string;
  distance: any
  constructor(private modalControl: ModalController, private navParams: NavParams, private utils: Utils) { }

  async ngOnInit() {
    this.chargerDetails = this.navParams.data.loc_details;
    const res = await this.utils.getCoordinates(KEYS.DIALOG_TEXT_TYPE_LOAD)
    if(res.status === 'granted') {
      this.currentLat = res.coords.latitude;
      this.currentLong = res.coords.longitude;
      this.distance = (this.utils.getDistance(this.currentLat, this.chargerDetails.latlong.split(',')[0], this.currentLong, this.chargerDetails.latlong.split(',')[1])).toFixed()
      this.chargerDetails.distance = this.distance+' Kms away';
    } else {
      this.distance = 'NA'
      this.chargerDetails.distance = this.distance;
    }
  }

  async ionViewDidEnter() {
   
      
      
  
  }

  doAction(type) {
    this.modalControl.dismiss({
      'type': type
    })
  }



}
