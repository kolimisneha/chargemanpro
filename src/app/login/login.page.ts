import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { ModalController, NavController } from '@ionic/angular';
import { Authentication } from '../services/authentication.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CountryPickerModalComponent } from './country-picker-modal/country-picker-modal.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  login1 = true;
  login2 = false;
  otp: string = "";
  enteredMobileNumber: string = "";
  enteredOTP: string = "";
  userDetails: any;
  isResendActive: boolean = false;
  seconds: number = 15;
  minuteCount: number = 1;
  otpTimerInterval;
  isLoading: boolean = false;
  showOtpProgress: boolean = false;
  otpStatusText: string = '';
  otpValidationLoading: boolean = false;
  showOtpValidationProgress: boolean = false;
  otpValidationStatusText: string = '';
  selectedCCID: string = "+00";
  countryCodes: any = [];
  constructor(
    private router: Router,
    private chargeManReq: ChargemanRequestService,
    private auth:Authentication,
    private utils: Utils,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private http: HttpClient
    
    
  ) {}

  ngOnInit() {
    let headers = new HttpHeaders();
    headers.set("content-type","application/json")
    this.http.get("../../assets/data/countrycodes.json", {headers:headers}).subscribe((res) => {
      
      this.countryCodes = res;
    })
    
  }
  async openCountryPicker() {
    const modal = await this.modalCtrl.create({
      component: CountryPickerModalComponent,
      componentProps: { countries: this.countryCodes },
      initialBreakpoint: 0.75,
      breakpoints: [0, 0.5, 0.75, 1]
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.selectedCCID = data.dial_code;
    }
  }

  clearOtpInterval() {
    clearInterval(this.otpTimerInterval);
  }
  ngOnDestroy() {
    clearInterval(this.otpTimerInterval);

  }

  /**
   * To request OTP to the entered mobile number and view the OTP enter screen based on login1 and login 2 variables
   */
  otppage() {
    
    if (this.enteredMobileNumber.toString() === "") {
      this.utils.presentToast(
        constants.DISPLAY_MESSAGES.NO_MOBILE_NUM_ERR,
        [],
        3000
      );
    } else if (
      this.enteredMobileNumber.toString().length > 10 ||
      this.enteredMobileNumber.toString().length < 10
    ) {
      this.utils.presentToast(
        constants.DISPLAY_MESSAGES.INVALID_MOBILE_NUMBER_ERR,
        [],
        3000
      );
    } else if(this.selectedCCID === "+00") {
      this.utils.presentToast(
        constants.DISPLAY_MESSAGES.NO_COUNTRY_CODE_ERR,
        [],
        3000
      );
    }else {
      this.isLoading = true;
      this.showOtpProgress = true;
      this.otpStatusText = constants.DISPLAY_MESSAGES.OTP_REQUESTING;
      const mobileNumberDetails = { countryCode:this.selectedCCID, mobileNo: this.enteredMobileNumber };
      this.chargeManReq
        .postRequestDetails("getOTPbyMobile", mobileNumberDetails)
        .subscribe((res: any) => {
          this.utils.presentToast(constants.DISPLAY_MESSAGES.OTP_SENT_SUCCESS, [], 3000);
          this.isLoading = false;
          this.showOtpProgress = false;
          this.otpStatusText = '';
           if (res && res.otp) {
            this.login1 = false;
            this.login2 = true;
            this.startOtpTimer();   
            this.otp = res.otp;
            if (res.otp.toString().length === 4) {
              setTimeout(() => {
                this.enteredOTP = res.otp.toString();
                setTimeout(() => {
                  this.login();
                }, 1000);
              }, 3000);
            }
          }
        }, (err) => {
          this.isLoading = false;
          this.showOtpProgress = false;
          this.utils.presentToast(constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000); 
        });
    }
  }
  /**
   *Method to compare OTP and sending req to validate OTP whether the entered mobile number was a new one or not
   *if it's a new one re-direct to profile component other wise redirect to dashboard as root component
   */

  login() {
  
    if (this.enteredOTP == this.otp || this.enteredOTP === constants.DEMO_CRED.OTP) {
      // this.utils.showLoader(constants.DISPLAY_MESSAGES.LOADING_MESSAGE)
      this.otpValidationLoading = true;
      this.otpValidationStatusText = constants.DISPLAY_MESSAGES.OTP_VALIDATION_TEXT;
      this.showOtpValidationProgress = true;
        const validateOTPBody = {
          "mobileNo": this.enteredMobileNumber,
          "countryCode": this.selectedCCID
        }
        this.chargeManReq.postRequestDetails(constants.RELATIVE_URLS.VALIDATE_OTP,validateOTPBody).subscribe((res) => {
          this.otpValidationLoading = false;
          this.otpValidationStatusText = '';
          this.showOtpValidationProgress = false;
          // this.utils.dismissLoader();
          if(res && Array.isArray(res)) {
            this.auth.setLoginFlag();
  
            this.utils.storeDetails(constants.KEYS.USER_DETAILS, JSON.stringify(res[0]));
            
            if(res[0].chargeCount > 0) {
              this.utils.presentToast(constants.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 4000);
              const options: NavigationExtras = {
                state: {
                  charge_details: res[0],
                }
              }
              this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop')
            } else {
              this.navCtrl.navigateRoot(["/pages"]);
            }
          } else {
             this.navCtrl.navigateForward(["/profile"],{state: {'pageName': 'login', 'mob':this.enteredMobileNumber, 'cc':this.selectedCCID}} );
          }
        }, (err) => {
        //  this.utils.dismissLoader();
        this.otpValidationStatusText = '';
        this.otpValidationLoading = false;
        this.showOtpValidationProgress = false;
          this.utils.presentToast(constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000); 
        });
    } else {
      this.utils.presentToast(
        constants.DISPLAY_MESSAGES.INVALID_OTP_ERR,
        [],
        3000
      );
    }
  }


  startOtpTimer() {
    this.seconds = 15;
    this.minuteCount = 1;
    this.isResendActive = false;
    this.otpTimerInterval = setInterval(() => {
      
      if (this.minuteCount > 0) {
        if(this.seconds == 0) {
          this.minuteCount--;
          this.seconds = 60;
        }
        this.seconds--;
        
      } else if (this.minuteCount === 0 && this.seconds === 0) {
       this.clearOtpInterval();
       this.isResendActive = true
      }else {
        this.seconds--;
      } 
    }, 1000);
  }

  resendOtp() {
    
    if(this.isResendActive) {
      this.otppage();
    }
  }

/**
 * Resetting values
 */
  ionViewWillEnter() {
    this.login1 = true;
    this.login2 = false;
    this.enteredMobileNumber = '';
    this.enteredOTP = '';
  }

  onKeypress(event, type) {
    if(event.keyCode === 13) {
      type === 'OTP' ? this.otppage() : this.login();
    }
  }

  onOtpInput() {
    if (this.enteredOTP?.length === 4) {
      this.login();
    }
  }

  goToLogin() {
    if(this.otpTimerInterval !== undefined) {
      clearInterval(this.otpTimerInterval);
    }
    this.enteredOTP = '';
    this.login2 = false;
    this.login1 = true;
  }

  
  
}
