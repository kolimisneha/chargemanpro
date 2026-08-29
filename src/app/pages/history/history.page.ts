import { Component, OnInit } from '@angular/core';
import { DATEFORMAT_STRINGS, DISPLAY_MESSAGES, RELATIVE_URLS } from 'src/app/constants';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  chargerHistory= [];
  isLoading:boolean;
  showProgress:boolean;
  statusText: string;
  constructor(private chargemanReq: ChargemanRequestService, private utils: Utils) { }

  ngOnInit() {
    
    this.loadChargeHistory(false);
  }

  loadChargeHistory(isRefresher, event?: any) {
    this.chargerHistory = [];
    this.isLoading = true;
    this.showProgress = true;
    this.statusText = DISPLAY_MESSAGES.LOADING_MESSAGE
    this.utils.getStoredUserDetails().then((res) => {
      const details = {
        'mobile': res.mobile
      }
      this.chargemanReq.postRequestDetails(RELATIVE_URLS.GET_CHARGE_HISTORY, details).subscribe((res: any) => {
        if(res.length > 0) {
          this.isLoading = false;
          this.statusText = DISPLAY_MESSAGES.LOADING_HISTORY;          
          res.map((item) => {
            let startTime = item.starttime !== null ? this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "hh:mm a") : '';
            let endTime = item.endtime !== null ? this.utils.convertDateTimeFormat(item.endtime,"YYYY-MM-DD HH:mm:ss" ,"hh:mm a") : '';
            let chargeDate = this.utils.convertDateTimeFormat(item.chargedate,"YYYY-MM-DD", "Do MMM YYYY") ?? '-';
            let chargeDuration = startTime !== '' && endTime !== '' ? this.utils.getDifferenceDuration(item.endtime, item.starttime, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss', DATEFORMAT_STRINGS.MINUTES) : '';
            item.starttime = startTime;
            item.endtime = endTime;
            ;
            item.chargedate = chargeDate;
            item.kwh = parseFloat(item.kwh).toFixed(2);
            item.chargevalue = parseFloat(item.chargevalue).toFixed(2);
            chargeDuration = chargeDuration !== '' ?  this.utils.minutes_to_hhmm(chargeDuration) : 'NA'; 
            item.duration = chargeDuration
            
            
            const cgstVal = parseFloat(item.cgstvalue || 0);
            const sgstVal = parseFloat(item.sgstvalue || 0);
            const consumeVal = parseFloat(item.consumewallet || 0);
            item.cgstvalue = cgstVal.toFixed(2);
            item.sgstvalue = sgstVal.toFixed(2);
            item.consumewallet = consumeVal.toFixed(2);
            item.total = (consumeVal + cgstVal + sgstVal).toFixed(2);
          })
          this.chargerHistory = res;
        }else {
          this.showProgress = false
          this.isLoading = true;
          this.statusText = DISPLAY_MESSAGES.NO_CHARGER_DETAILS;

        }
      },(err) => {
        this.showProgress = false;
        this.isLoading = true;
        this.statusText = DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR
      })  
    })
    if(isRefresher) {
      event.target.complete();
    }
  }


}
