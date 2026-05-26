import { Component, OnInit } from '@angular/core';
import { DATEFORMAT_STRINGS, DISPLAY_MESSAGES, KEYS, RELATIVE_URLS } from 'src/app/constants';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
  selector: 'app-host-history',
  templateUrl: './host-history.page.html',
  styleUrls: ['./host-history.page.scss'],
})
export class HostHistoryPage implements OnInit {
  hostChargerHistory: any = [];
  statusText: string = '';
  isLoading: boolean = true;
  showProgress: boolean;
  constructor(private utils: Utils, private chargemanReq: ChargemanRequestService) { }

  ngOnInit() {
    this.loadChargerHistory(false);
  }
  
  loadChargerHistory(isRefresher, event?) {
    this.statusText = DISPLAY_MESSAGES.LOADING_MESSAGE_2;
    this.showProgress = true;
    this.isLoading = true;
    this.utils.getStoredDetails(KEYS.HOST_ID).then((device) => {
      if(device && device.value) {
        const details = {
          deviceid: device.value
        }
        this.chargemanReq.postRequestDetails(RELATIVE_URLS.GET_HOST_CHARGER_HISTORY, details).subscribe((res: any) => {
          if(res && res.length > 0) {
            this.isLoading = false;
            this.hostChargerHistory = res;
            this.hostChargerHistory.map((item) => {
              let startTime = item.starttime !== null ? this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "hh:mm a") : '';
              let endTime = item.endtime !== null ? this.utils.convertDateTimeFormat(item.endtime,"YYYY-MM-DD HH:mm:ss" ,"hh:mm a") : '';
              let chargeDate = this.utils.convertDateTimeFormat(item.chargedate,"YYYY-MM-DD", "Do MMM YYYY") ?? '-';
              let chargeDuration = startTime !== '' && endTime !== '' ? this.utils.getDifferenceDuration(item.endtime, item.starttime, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss', DATEFORMAT_STRINGS.MINUTES) : '';
              
              item.starttime = startTime;
              item.endtime = endTime;
              item.chargedate = chargeDate;
              item.kwh = parseFloat(item.kwh).toFixed(2);
              item.chargevalue = parseFloat(item.chargevalue).toFixed(2);
              chargeDuration = chargeDuration !== '' ?  this.utils.minutes_to_hhmm(chargeDuration) : 'NA'; 
              item.duration = chargeDuration
              item.consumewallet = parseFloat(item.consumewallet).toFixed(2) ?? '-';
            })
          } else {
            this.showProgress = false;
            this.statusText = DISPLAY_MESSAGES.CHARGER_HISTORY_NO_DETAILS+ device.value
          }
        }, (err) => {
          this.statusText = DISPLAY_MESSAGES.CHARGER_HISTORY_1+device.value+'\'s '+DISPLAY_MESSAGES.CHARGER_HISTORY_2;
          this.isLoading = true;
          this.showProgress = false;
        })
      }
    })

    if(isRefresher) {
      event.target.complete();
    }
   
  }

}
