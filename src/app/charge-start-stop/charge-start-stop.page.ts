import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { flatMap, map, mergeMap } from 'rxjs/operators';
import { CHARGE_STATUS_TYPES, DISPLAY_MESSAGES, KEYS, RELATIVE_URLS } from '../constants';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';
import { IChargeStartStop } from './charge-start-stop-interface';
import { DEVICE_SOCKET_OCPP_URL, DEVICE_SOCKET_URL } from 'src/environments/environment';

@Component({
  selector: 'app-charge-start-stop',
  templateUrl: './charge-start-stop.page.html',
  styleUrls: ['./charge-start-stop.page.scss'],
})
export class ChargeStartStopPage implements OnInit {

  constructor(private navCtrl: NavController,  public modalController: ModalController, private A_route: ActivatedRoute, private router: Router, private utils: Utils, private chargeReq: ChargemanRequestService) { }
  deviceProtocolDetails = {
    deviceId:"",
    deviceProtocol: "",
    url:"",
    suburl:""
  }
  startChargeTransactionId:string = "";
  chargerBackIcon:string  = '../../assets/icon/back_icon.svg';
  chargerPlugIcon:string  = '../../assets/icon/charger_plug.svg';
  chargerWalletIcon:string  = '../../assets/icon/charger_wallet.svg';
  chargerPowerIcon:string  = '../../assets/icon/charger_power.svg';
  chargeDatePickerIcon: string = '../../assets/icon/charge_date_picker.svg';
  calendarIcon: string = '../../assets/icon/calendar_icon.svg';
  timerIncrementIcon: string = '../../assets/icon/timer_increment.svg';
  timerDecrementIcon: string = '../../assets/icon/timer_decrement.svg';
  chargeVehicleIcon: string = '../../assets/icon/charge_station.png';
  timeElapsedIcon: string = '../../assets/icon/time_elapsed_icon.svg';
  energyIcon: string = '../../assets/icon/energy.svg';
  chargeCarIcon: string
  isChargeStarted: boolean = false;
  isModalOpen = true;
  pageParams: any;
  isDurationSkipped: boolean = false;
  timerVal: any = 5;
  storedDetails;
  walletBalance:any;
  initialWalletBalance:any;
  isChargeStopped: boolean = true;
  chargingTimer: any;
  walletConsumed: any = '0';
  chargeVal: any = '0';
  powerVal: any = '0';
  startBlink: boolean;
  chargeStoppedAutomatically:boolean = false;
  deviceDetails: any;
  chargeStatusText: string = '';
  chargingStatus: any = false;
  isStartButtonDisabled: boolean = false;
  isStopButtonDisabled: boolean = true;
  startChargeReq: Subscription;
  timeout;
  isTimedout = false;
  isSelfCharge: boolean;
  timer_req: any
  chargeDurationTimerValue = '00:00';
  chargeDurationTimerInterval: any;
  chargeStartTime: number = 0;
  isAutoCharge: boolean;
  hourVal: any = '00';
  minVal: any = '00';
  requestedDuration: string = '-'
  selectedGun: number = null;
  guns: number[] = [1, 2, 3, 4];
  async ngOnInit() {
     this.pageParams = this.utils.getPageParams()?.charge_details; 

     if (!this.pageParams || !this.pageParams.devicetype || !this.pageParams.deviceid) {
       console.error('Invalid charge details - missing devicetype or deviceid');
       this.utils.presentToast('Unable to start charge. Invalid station details.', [], 3000);
       this.utils.navigateTo(KEYS.NAV_BACKWARD, '/tabs/map');
       return;
     }

     this.deviceProtocolDetails.deviceId = this.pageParams.deviceid;
     this.deviceProtocolDetails.deviceProtocol = this.pageParams.devicetype;
     
     this.storedDetails = await this.utils.getStoredUserDetails();
     this.walletBalance = await this.utils.getStoredDetails(KEYS.WALLET_BALANCE);
     this.initialWalletBalance = this.walletBalance.value;
     this.isSelfCharge = this.pageParams?.self
    
    if(parseInt(this.pageParams?.chargeCount) > 0) {
      this.isChargeStarted = true;
      this.isStartButtonDisabled = true;
      this.isStopButtonDisabled = false;
      this.isChargeStopped = false;
      this.startBlink = true;
      this.isAutoCharge = this.storedDetails.autostart.toString() === '1' ? true : false;
      
      this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
      const transaction_details = {
        transactionid: this.pageParams.transactionid
      }
      this.chargeReq.postRequestDetails(RELATIVE_URLS.CHARGING_SUMMARY, transaction_details).subscribe(async (res) => {
        // let selectedDuration = await (await this.utils.getStoredDetails(KEYS.SELECTED_DURATION)).value;
        // selectedDuration = this.utils.getDurationInHours(selectedDuration);
        // this.startChargeDurationInterval(this.pageParams.transactionTimer, selectedDuration);
        this.walletConsumed = parseFloat(res[0].consumewallet).toFixed(2);
        this.chargeVal = parseFloat(res[0].chargevalue).toFixed(2);
        this.powerVal = parseFloat(res[0].kwh).toFixed(2);
        this.pageParams.capacity = res[0].capacity;
        this.chargeDurationTimerValue = this.utils.convertDateTimeFormat(res[0].minuteago.split('.')[0], "HH:mm:ss", "HH:mm");
        this.hourVal = this.chargeDurationTimerValue.split(':')[0];
        this.minVal = this.chargeDurationTimerValue.split(':')[1];
        const reqDurationHrs = this.utils.getDurationInHours(res[0].duration).split(":")[0];
        const reqDurationMin = this.utils.getDurationInHours(res[0].duration).split(":")[1];
        const totalDuration = reqDurationHrs+":"+reqDurationMin
        this.requestedDuration =  totalDuration === '00:00' ? 'Skipped' : reqDurationHrs+':'+reqDurationMin;
        this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_CHARGING;
        // this.utils.storeDetails(KEYS.TRANSACTION_ID, this.pageParams.transactionid);
        // this.utils.storeDetails(KEYS.IS_CHARGING, 1);
        if(this.pageParams.transactionid !== undefined) {
          if(this.chargingTimer == undefined)  {
            this.chargeStartTime = Date.now();
            this.startChargeInterval(this.pageParams.transactionid);
          }
        } else {
            this.startChargeProcess();
          }
        })
      
    } 
  }

  navigateBack() {
    this.navCtrl.navigateBack(['/pages/sidemenu'])
  }

  selectGun(gun: number) {
    this.selectedGun = gun;
  }

  startCharging() {
    this.isChargeStarted = true;
  }

  async manualStopCharge() {
    this.chargeStoppedAutomatically = false;
    this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
    const user_sel = await this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT,DISPLAY_MESSAGES.DIALOG_TITLE_INFO,DISPLAY_MESSAGES.CHARGE_STOP_INFO,[DISPLAY_MESSAGES.DIALOG_TEXT_YES, DISPLAY_MESSAGES.DIALOG_TEXT_NO])
    if(user_sel === 1) {
     this.stopCharging(CHARGE_STATUS_TYPES.STATUS_SUCCESS);
    }
  }


  async stopCharging(type) {
    this.isChargeStopped = true;
    this.isStopButtonDisabled = true;
    this.chargeStatusText = CHARGE_STATUS_TYPES.STATUS_TERMINATING;
    const transactionID = await this.utils.getStoredUserDetails();
    
    const deviceType = this.pageParams?.devicetype || this.deviceProtocolDetails?.deviceProtocol || 'evcm';
    this.deviceProtocolDetails.url = deviceType.toLowerCase() === 'ocpp' 
      ? DEVICE_SOCKET_OCPP_URL + this.pageParams.deviceid.split("-")[0].toUpperCase() + "/" + RELATIVE_URLS.OCPP_STOP_CHARGE 
      : DEVICE_SOCKET_URL + RELATIVE_URLS.START_STOP_CHARGE_DEVICE;

    const stop_body = {
      "transactionid": this.pageParams.transactionid || transactionID.transactionid,
      "deviceid": this.pageParams.deviceid,
      "endtime": this.utils.getCurrentTimeStamp(),
      "consumewallet": this.walletBalance?.value || 0,
      "modifiedby": this.storedDetails?.name || ''
    };
    
    console.log('Stop charging request:', JSON.stringify(stop_body));
    console.log('Stop URL:', this.deviceProtocolDetails.url);
    
    const relativeUrl = this.isSelfCharge ? RELATIVE_URLS.STOP_SELF_CHARGE : RELATIVE_URLS.STOP_CHARGE;
    
    this.chargeReq.postRequestDetails(relativeUrl, stop_body).pipe(
      map((res: any) => {
        console.log('Stop response:', res);
        let device_command_body = {};
        if (res && res.status && (res.status.toLowerCase() === 'accepted' || res.status.toLowerCase() === 'success')) {
          if (deviceType.toLowerCase() === 'ocpp') {
            device_command_body = {
              "transactionId": transactionID.transactionid
            };
          } else {
            device_command_body = {
              "type": "STOP_CHARGING_APP",
              "payload": {
                "idTag": this.pageParams.deviceid,
                "Timestamp": this.utils.getCurrentTimeStamp(),
                "transactionId": transactionID.transactionid
              }
            };
          }
        }
        return device_command_body;
      }),
      mergeMap((stopChargeRes) => {
        console.log('Device command body:', stopChargeRes);
        return this.chargeReq.postDeviceCommand(this.deviceProtocolDetails.url, stopChargeRes);
      })
    ).subscribe({
      next: async (res: any) => {
        console.log('Device command response:', res);
        this.startBlink = false;
        if (this.chargingTimer) {
          clearInterval(this.chargingTimer);
        }
        if (deviceType.toLowerCase() === 'ocpp') {
          if (!res.success) {
            this.isChargeStopped = false;
            this.isStopButtonDisabled = false;
            this.startBlink = true;
            this.chargeStatusText = `${DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR} (${res.message?.toUpperCase() || 'UNKNOWN'})`;
            this.utils.storeDetails(KEYS.IS_CHARGING, 0);
            this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.STOP_CHARGE_ERR_OCPP + " (" + (res.message?.toUpperCase() || 'UNKNOWN') + ")", [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            return;
          }
        }
        this.utils.storeDetails(KEYS.CHARGE_STATUS, KEYS.CHARGE_DONE);
        this.storedDetails.chargeCount = '0';
        this.storedDetails.transactionid = null;
        this.storedDetails.autostart = '0';
        this.storedDetails.deviceid = null;
        this.storedDetails.devicetype = deviceType;
        this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
        this.utils.updateValues(KEYS.CHARGE_STATUS, false);
        
        if (type === CHARGE_STATUS_TYPES.DEVICE_ERR) {
          this.chargeStatusText = CHARGE_STATUS_TYPES.DEVICE_ERR;
        } else if (type === CHARGE_STATUS_TYPES.INSUFF_FUNDS) {
          this.chargeStatusText = CHARGE_STATUS_TYPES.INSUFF_FUNDS;
        } else if (type === CHARGE_STATUS_TYPES.TIMEOUT_ERR) {
          this.chargeStatusText = CHARGE_STATUS_TYPES.TIMEOUT_ERR;
        } else {
          this.chargeStatusText = CHARGE_STATUS_TYPES.STATUS_SUCCESS_STOPPED;
        }

        this.isChargeStopped = true;
        this.isStopButtonDisabled = false;
        const transaction_details: NavigationExtras = {
          state: {
            transactionid: transactionID.transactionid
          }
        };
        this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);

        if (!this.chargeStoppedAutomatically) {
          this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.SUCCESS_DIALOG_TITLE, DISPLAY_MESSAGES.CHARGE_STOP_ALERT, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        }
      },
      error: (err) => {
        console.error('Stop charging error:', err);
        this.isChargeStopped = false;
        this.isStopButtonDisabled = false;
        this.startBlink = true;
        this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
        this.utils.storeDetails(KEYS.IS_CHARGING, 0);
        this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.STOP_CHARGE_ERR + ' (' + (err?.message || err) + ')', [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
      }
    });
    
  } 

  
/**
 * To start charge
 */
  async startChargeProcess() {
    const deviceType = this.pageParams?.devicetype || this.deviceProtocolDetails?.deviceProtocol || 'evcm';
    this.deviceProtocolDetails.url = deviceType.toLowerCase() === 'ocpp' 
      ? DEVICE_SOCKET_OCPP_URL + this.pageParams.deviceid.split("-")[0].toUpperCase() + "/" + RELATIVE_URLS.OCPP_START_CHARGE 
      : DEVICE_SOCKET_URL + RELATIVE_URLS.START_STOP_CHARGE_DEVICE;
    
    if(parseFloat(this.walletBalance?.value) > 0 || this.isSelfCharge) {
    this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
    this.storedDetails.chargeCount = '1';
    this.storedDetails.autostart = this.isAutoCharge ? 1 : 0;
    this.storedDetails.deviceid = this.pageParams.deviceid;
    this.storedDetails.devicetype = deviceType;
    this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails)); 
    this.utils.updateValues(KEYS.CHARGE_STATUS, true);
    
    const user_sel = this.isSelfCharge ? 1 : await this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT,DISPLAY_MESSAGES.DIALOG_TITLE_INFO,DISPLAY_MESSAGES.CHARGE_START_ALERT,[DISPLAY_MESSAGES.BUTTON_TEXT_CONTINUE, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
    if(user_sel == 1) {
      this.isStartButtonDisabled = true;
      const start_body = {
        "mobile": this.storedDetails.mobile,
        "deviceid": this.pageParams.deviceid,
        "chargedate": "2022-02-01",
        "starttime": "12:00:00",
        "duration": this.isDurationSkipped ? 0 : this.timerVal,
        "kwh": this.pageParams.rph,
        "createdby": this.storedDetails.name,
        "autostart": this.isAutoCharge ? 1 : 0 
      };
      
      console.log('Start charging request:', JSON.stringify(start_body));
      
      this.chargeReq.postRequestDetails(RELATIVE_URLS.START_CHARGE,start_body).pipe(
        map((res: any) => {
          console.log('Start charge response:', res);
          let device_command_body = {};
          this.startChargeTransactionId = res.status;
          
          if(deviceType.toLowerCase() === "ocpp") {
            device_command_body = {
                "connectorId": this.selectedGun,
                "chargingProfileId": 1,
                "transactionId": parseInt(res.status),
                "stackLevel": 1,
                "chargingProfilePurpose": "TxProfile",
                "chargingProfileKind": "Absolute",
                "duration": this.isDurationSkipped ? 0 : parseInt(this.timerVal)*60
            };
          } else {
            device_command_body = {
                "type": "START_CHARGING",
                "payload": {
                  "connectorId": this.selectedGun,
                  "idTag": this.pageParams.deviceid,
                  "reservationId": "0",
                  "Timestamp": this.utils.getCurrentTimeStamp(),
                  "duration": this.isDurationSkipped ? 0 : this.timerVal,
                  "transactionId": res.status
              }
          };
        }
        return device_command_body;
      }), 
      mergeMap((startChargeRes) => {
        console.log('Start device command body:', startChargeRes);
        return this.chargeReq.postDeviceCommand(this.deviceProtocolDetails.url,startChargeRes);
      })).subscribe({
        next: (res: any) => {
          console.log('Start device command response:', res);
          if(deviceType.toLowerCase() === 'ocpp') { 
            if(!res.success) {
              this.chargeStatusText = `${DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR} (${(res.message || 'UNKNOWN').toUpperCase()})`;
              this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.START_CHARGE_ERR+" ("+(res.message || 'UNKNOWN')+")", [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
              this.isChargeStarted = false;
              this.isChargeStopped = false;
              this.startBlink = false;
              this.requestedDuration = '-';
              this.isStartButtonDisabled = false;
              return;
            }
          }
          let _tran_id = "";
          _tran_id = deviceType.toLowerCase() === 'ocpp' ? this.startChargeTransactionId : res.payload?.transactionId || res.transactionId;
          this.utils.storeDetails(KEYS.TRANSACTION_ID, _tran_id);
          this.storedDetails.transactionid = _tran_id;
          this.storedDetails.autostart = this.isAutoCharge ? 1 : 0;
          this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
          const reqDurationHrs = this.isDurationSkipped ? "00" : this.utils.getDurationInHours(this.timerVal).split(":")[0];
          const reqDurationMin = this.isDurationSkipped ? "00" : this.utils.getDurationInHours(this.timerVal).split(":")[1];
          const totalDuration = reqDurationHrs+":"+reqDurationMin;
          this.requestedDuration = totalDuration === '00:00' ? 'Skipped' : totalDuration;
          this.utils.storeDetails(KEYS.CHARGE_STATUS, KEYS.CHARGE_REQ);
          this.getChargingStatus(_tran_id);
        }, 
        error: (err) => {
          console.error('Start charging error:', err);
          this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
          this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.START_CHARGE_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
          this.isChargeStarted = false;
          this.isChargeStopped = false;
          this.startBlink = false;
          this.requestedDuration = '-';
          this.isStartButtonDisabled = false;
        }
      });
   }
    } else {
      this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_INSUFFICIENT;
      const choice = await this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.WALLET_BALANCE_ERROR_2, [DISPLAY_MESSAGES.WALLET_DIALOG_TEXT_NAVIGATE, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
      if(choice == 1) {
        this.utils.navigateTo(KEYS.NAV_FORWARD, '/pages/sidemenu/wallet')
      }
    }
  }

   startChargeInterval(response) {
    this.isChargeStopped = false;
    this.isStartButtonDisabled = false;
    const interval_body = {
      transactionid: response
    };
    this.timer_req = this.chargeReq.postRequestDetails(RELATIVE_URLS.CHECK_CHARGE, interval_body);
    let values = [];
    let counter = 0;
    
    if(this.chargeDurationTimerInterval === undefined) {
      const selectedDuration = this.isDurationSkipped ? 60 : this.timerVal;
      this.utils.storeDetails(KEYS.SELECTED_DURATION, selectedDuration);
      let selectedDurationInHrs = this.utils.getDurationInHours(selectedDuration);
    }
    
    this.chargingTimer = setInterval(async () => {
      this.isChargeStopped = false;
      this.storedDetails.chargeCount = '1';
      this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
      
      this.timer_req.subscribe((res: any) => {
        if(res && res.length > 0 && res[0]) {
          console.log('Charge interval response:', res[0]);

          if (!this.isDurationSkipped && this.chargeStartTime > 0) {
            const elapsedSec = (Date.now() - this.chargeStartTime) / 1000;
            const durationSec = this.timerVal * 60;
            if (elapsedSec >= durationSec) {
              clearInterval(this.chargingTimer);
              this.chargeStoppedAutomatically = true;
              this.startBlink = false;
              this.stopCharging(CHARGE_STATUS_TYPES.TIMEOUT_ERR);
              return;
            }
          }
          
          this.walletConsumed = parseFloat(res[0].consumewallet || 0).toFixed(2);
          this.chargeVal = parseFloat(res[0].chargevalue || 0).toFixed(2);
          this.powerVal = res[0].kwh || '0';
          const device_status = (res[0].status || '').toLowerCase();
          
          let duration = this.utils.convertDateTimeFormat((res[0].minuteago || '0.0').split('.')[0], "HH:mm:ss", "HH:mm");
          this.hourVal = duration.split(':')[0];
          this.minVal = duration.split(':')[1];
          
          const deviceProtocol = this.deviceProtocolDetails.deviceProtocol || this.pageParams?.devicetype || 'evcm';
          
          if(!this.isAutoCharge) {
            if(device_status === 'stopped' && deviceProtocol.toLowerCase() === "evcm") {
              clearInterval(this.chargingTimer);
              const transaction_details: NavigationExtras = {
                state: {
                  transactionid: response
                }
              };
              this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);
              this.storedDetails.chargeCount = '0';
              this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
              const reason = res[0].reason || '';
              this.utils.updateValues(KEYS.CHARGE_STATUS, false);
              let displayMessage = (reason.toLowerCase() === 'timeout' || reason.toLowerCase() === 'expired') 
                ? DISPLAY_MESSAGES.DEVICE_DURATION_LIMIT_REACHED 
                : DISPLAY_MESSAGES.DEVICE_COMM_ERR;
              this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.DIALOG_TITLE_INFO, displayMessage, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            }
            
            if(!this.isAutoCharge) {
              if(values.length === 0) { 
                values[0] = this.chargeVal;
              } else {
                values[1] = this.chargeVal;
                let res = this.compareValues(values);
                if(res) {
                  counter++;
                  if(counter == 9) {
                    clearInterval(this.chargingTimer);
                    values = [];
                    counter = 0;
                    this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE,DISPLAY_MESSAGES.DEVICE_INTERRUPTION_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    this.stopCharging(CHARGE_STATUS_TYPES.TIMEOUT_ERR);
                  }
                } else {
                  counter = 0;
                  values[0] = this.chargeVal;
                }
              }
            }
          }
          
          if(!this.isSelfCharge) {
            let remainingBalance: any = parseFloat(this.initialWalletBalance || 0) - parseFloat(this.walletConsumed || 0);
            remainingBalance = (parseFloat(remainingBalance)).toFixed(2);
            if(remainingBalance <= 0 ) {
              remainingBalance = 0;
              this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_INSUFFICIENT;
              clearInterval(this.chargingTimer);
              this.chargeStoppedAutomatically = true;
              this.startBlink = false;
              this.stopCharging(CHARGE_STATUS_TYPES.INSUFF_FUNDS);
              this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.WALLET_BALANCE_ERROR_3, [DISPLAY_MESSAGES.WALLET_DIALOG_TEXT_NAVIGATE, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                if(res == 1) {
                  this.utils.navigateTo(KEYS.NAV_FORWARD, '/pages/sidemenu/wallet');
                } else {
                  this.utils.navigateTo(KEYS.NAV_FORWARD, '/charge-glance');
                }
              });
            } else {
              this.utils.updateValues(KEYS.UPDATE_WALLET_TYPE, remainingBalance);
              this.utils.storeDetails(KEYS.WALLET_BALANCE, remainingBalance);
              this.walletBalance = { value: remainingBalance };
            }
          }
          
          if(device_status === 'stopped' && deviceProtocol.toLowerCase() === "ocpp") {
            clearInterval(this.chargingTimer);
            const transaction_details: NavigationExtras = {
              state: {
                transactionid: response
              }
            };
            this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);
            this.storedDetails.chargeCount = '0';
            this.utils.storeDetails(KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
            const reason = res[0].reason || '';
            this.utils.updateValues(KEYS.CHARGE_STATUS, false);
            let displayMessage = (reason.toLowerCase() === 'timeout' || reason.toLowerCase() === 'expired') 
              ? DISPLAY_MESSAGES.DEVICE_DURATION_LIMIT_REACHED 
              : DISPLAY_MESSAGES.DEVICE_COMM_ERR;
            this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.DIALOG_TITLE_INFO, displayMessage, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
          }
        } else {
          console.warn('Invalid response in charge interval:', res);
        }
      }, (err) => {
        console.error('Charge interval error:', err);
      });
    }, 10000);
  }

  ionViewWillLeave() {
    this.timeout = null;
    this.startChargeReq = null;
    this.timer_req = null;
    clearInterval(this.chargingTimer)
    clearInterval(this.chargeDurationTimerInterval)
    
  }


  compareValues(arrayValues) {
    if(parseFloat(arrayValues[0]) === parseFloat(arrayValues[1])) {
      return true;
    } 
    return false;
  }


  onSkipDurationHandler(event) {
    this.isDurationSkipped = event.target.checked;
  }

  incrementTimer() {
    if(this.timerVal >= 5 && this.timerVal < 120) {
      this.timerVal= parseInt(this.timerVal)+5;
    }
  }
  decrementTimer() {
    if(this.timerVal <= 120 && this.timerVal > 5) {
      this.timerVal = parseInt(this.timerVal)-5;
    }
  }

  getChargingStatus(transactionId) {
    const details = {
      transactionid: transactionId,
    }
    this.startChargeReq = this.chargeReq.postRequestDetails(RELATIVE_URLS.CHARGING_STATUS,details).subscribe((res: any) => {
      if(res[0].status.toUpperCase() === 'REQUESTED') {
        this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
        this.getChargingStatus(transactionId);
        this.isChargeStarted = true;
        this.isChargeStopped = false;
        this.chargingStatus = false;
        this.isStartButtonDisabled = false;
        this.isStopButtonDisabled = true;
        if(this.timeout == null || this.timeout == undefined) { 
        this.timeout = setTimeout(() => {
          this.isTimedout = true;
        }, 60000)
        }
        if(this.isTimedout) {
          this.timeout = null;
          this.startChargeReq.unsubscribe();
          this.isChargeStarted = false;
          this.isChargeStopped = true;
          this.chargingStatus = false;
          this.isStartButtonDisabled = false;
          this.isStopButtonDisabled = true;
          this.isTimedout = false;
          this.stopCharging(CHARGE_STATUS_TYPES.TIMEOUT_ERR);
          this.chargeStoppedAutomatically = true;
          this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.DEVICE_TIME_OUT_ERR, DISPLAY_MESSAGES.DEVICE_TIME_OUT_ERR_TEXT, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        }
      } else {
        this.chargingStatus = true;
        if(res[0].status.toUpperCase() === 'ACCEPTED') {
          this.isChargeStarted = true;
          this.isChargeStopped = false;
          this.startBlink = true;
          this.chargingStatus = true;
          this.isStopButtonDisabled = false;
          this.isTimedout = false;
          this.timeout = null;
          this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_CHARGING;
          this.utils.presentToast(DISPLAY_MESSAGES.START_CHARGE_SUCCESS,[], 4000);
          this.utils.storeDetails(KEYS.CHARGE_STATUS, KEYS.CHARGE_CHARGING);
          this.chargeStartTime = Date.now();
          this.startChargeInterval(res[0].transactionid);
        } else {
          this.chargingStatus = false;
          this.isChargeStarted = false;
          this.isChargeStopped = true;
          this.isStartButtonDisabled = false;
          this.timeout = null;
          this.chargeStatusText = DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
          this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.DEVICE_COMM_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
          this.stopCharging(CHARGE_STATUS_TYPES.DEVICE_ERR);
          this.utils.navigateTo(KEYS.NAV_FORWARD, '/charge-glance')
        }
      }
    }, (err) => {
        this.isChargeStarted = false;
        this.isChargeStopped = true;
        this.chargingStatus = false;
        this.isStartButtonDisabled = false;
        this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.STOP_CHARGE_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK])
    })
  }


  // startChargeDurationInterval(startDuration, stopDuration) {
  //  let seconds = startDuration.split(':')[2];
  //  let min = startDuration.split(':')[1];
  //  let hours = startDuration.split(':')[0];
  //  let updatedTime;
  //  this.chargeDurationTimerInterval = setInterval(() => {
  //   if(seconds > 59) {
  //     seconds = 0;
  //     min++  
  //     if(min > 59) {
  //       min = 0;
  //       hours++ 
  //     }
  //  }
  //  updatedTime = this.utils.getFormattedTime(hours+':'+min+':'+seconds);
  //  const comparisionRes = this.utils.validateTime(updatedTime, stopDuration, 'HH:mm:ss')
  //  if(!comparisionRes) {
  //    clearInterval(this.chargeDurationTimerInterval);
  //  }
  //  seconds++;
  //  this.chargeDurationTimerValue = updatedTime;
  //  }, 1000)

  // }


  /**
   * When user checks/unchecks the AutoStart option
   * @param event auto charge event handler
   */
   onAutoChargeHandler(event: any) {
    this.isAutoCharge = event.target.checked;
  }
  
}
