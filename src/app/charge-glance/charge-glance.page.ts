import { Component, OnInit } from '@angular/core';
import { DISPLAY_MESSAGES, KEYS, RELATIVE_URLS } from '../constants';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';

@Component({
  selector: 'app-charge-glance',
  templateUrl: './charge-glance.page.html',
  styleUrls: ['./charge-glance.page.scss'],
})
export class ChargeGlancePage implements OnInit {

  vehicleIcon = '../../assets/icon/charge_station.png';
  timeElapsedIcon: string = '../../assets/icon/time_elapsed_icon.svg';
  energyIcon: string = '../../assets/icon/energy.svg';
  chargerPowerIcon:string  = '../../assets/icon/charger_power.svg';
  pageParams: any;
  deviceDetails: any;
  details: any = [];
  walletBalance: any = '0';
  isLoading: boolean = false;
  showProgress: boolean;
  statusText: string=''
  transactionId: string;
  async ngOnInit() {
    this.transactionId = this.utils.getPageParams().transactionid;
    this.isLoading = true;
    this.showProgress = true;
    this.statusText = DISPLAY_MESSAGES.LOADING_CHARGE_DETAILS
    this.walletBalance = await (await this.utils.getStoredDetails(KEYS.WALLET_BALANCE)).value;
    
  }

  constructor(private utils: Utils, private chargeReq: ChargemanRequestService) {}

  async ionViewDidEnter() {
    this.getChargeSummary()
  }

  getChargeSummary() {
    const transaction_details = {
      transactionid: this.transactionId
    }
    this.chargeReq.postRequestDetails(RELATIVE_URLS.CHARGING_SUMMARY, transaction_details).subscribe((res: any) => {
      if(res && res.length > 0) {
        this.isLoading = false;
       res.map((item) => {
          item.chargedate = this.utils.convertDateTimeFormat(item.chargedate, "YYYY-MM-DD", "Do MMM YYYY") ?? 'NA';
          item.starttime = this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "hh:mm:ss A") ?? 'NA';
          item.endtime = this.utils.convertDateTimeFormat(item.endtime, "YYYY-MM-DD HH:mm:ss", "hh:mm:ss A") ?? 'NA';
          item.status = item.status.toLowerCase() ?? '-';
          const cgstVal = parseFloat(item.cgstvalue || 0);
          const sgstVal = parseFloat(item.sgstvalue || 0);
          const consumeVal = parseFloat(item.consumewallet || 0);
          item.cgstvalue = cgstVal.toFixed(2);
          item.sgstvalue = sgstVal.toFixed(2);
          item.consumewallet = consumeVal.toFixed(2);
          item.basefee = consumeVal.toFixed(2);
          item.total = (consumeVal + cgstVal + sgstVal).toFixed(2);
          item.chargevalue = parseFloat(item.chargevalue).toFixed(2) ?? '0';
          item.kwh = parseFloat(item.kwh).toFixed() ?? '0';
          item.capacity = parseFloat(item.capacity) ?? '0';
          item.status = item.status.toLowerCase() === 'stopped' || item.status.toLowerCase() === 'accepted' || item.status.toLowerCase() === 'closed' ? 'Success' : 'Error'
        });
        this.details = res[0]; 
      }
    }, (err) => {
      this.isLoading = true;
      this.showProgress = false;
      this.statusText = DISPLAY_MESSAGES.LOADING_CHARGE_ERR;
    })
  }

}
