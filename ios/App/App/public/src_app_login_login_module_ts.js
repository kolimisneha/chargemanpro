"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 9820:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 98412);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 87184);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 55864:
/*!******************************************************************************!*\
  !*** ./src/app/login/country-picker-modal/country-picker-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPickerModalComponent": () => (/* binding */ CountryPickerModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_country_picker_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./country-picker-modal.component.html */ 51558);
/* harmony import */ var _country_picker_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-picker-modal.component.scss */ 13945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9820);







let CountryPickerModalComponent = class CountryPickerModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.countries = [];
        this.filteredCountries = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    }
    ngOnInit() {
        this.filteredCountries = [...this.countries];
        this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(200)).subscribe((searchTerm) => {
            this.filteredCountries = this.countries.filter((c) => c.name.toLowerCase().includes((searchTerm || '').toLowerCase()));
        });
    }
    selectCountry(country) {
        this.modalCtrl.dismiss(country);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
CountryPickerModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
CountryPickerModalComponent.propDecorators = {
    countries: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CountryPickerModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-country-picker-modal',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_country_picker_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_country_picker_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountryPickerModalComponent);



/***/ }),

/***/ 62359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 69549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 62359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 60955);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);
/* harmony import */ var _country_picker_modal_country_picker_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-picker-modal/country-picker-modal.component */ 55864);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponentComponent, _country_picker_modal_country_picker_modal_component__WEBPACK_IMPORTED_MODULE_3__.CountryPickerModalComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], LoginPageModule);



/***/ }),

/***/ 60955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ 89270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _country_picker_modal_country_picker_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-picker-modal/country-picker-modal.component */ 55864);












let LoginPage = class LoginPage {
    constructor(router, chargeManReq, auth, utils, navCtrl, modalCtrl, http) {
        this.router = router;
        this.chargeManReq = chargeManReq;
        this.auth = auth;
        this.utils = utils;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.login1 = true;
        this.login2 = false;
        this.otp = "";
        this.enteredMobileNumber = "";
        this.enteredOTP = "";
        this.isResendActive = false;
        this.seconds = 15;
        this.minuteCount = 1;
        this.isLoading = false;
        this.showOtpProgress = false;
        this.otpStatusText = '';
        this.otpValidationLoading = false;
        this.showOtpValidationProgress = false;
        this.otpValidationStatusText = '';
        this.selectedCCID = "+00";
        this.countryCodes = [];
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders();
        headers.set("content-type", "application/json");
        this.http.get("../../assets/data/countrycodes.json", { headers: headers }).subscribe((res) => {
            this.countryCodes = res;
        });
    }
    openCountryPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _country_picker_modal_country_picker_modal_component__WEBPACK_IMPORTED_MODULE_6__.CountryPickerModalComponent,
                componentProps: { countries: this.countryCodes },
                initialBreakpoint: 0.75,
                breakpoints: [0, 0.5, 0.75, 1]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.selectedCCID = data.dial_code;
            }
        });
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
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.NO_MOBILE_NUM_ERR, [], 3000);
        }
        else if (this.enteredMobileNumber.toString().length > 10 ||
            this.enteredMobileNumber.toString().length < 10) {
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.INVALID_MOBILE_NUMBER_ERR, [], 3000);
        }
        else if (this.selectedCCID === "+00") {
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.NO_COUNTRY_CODE_ERR, [], 3000);
        }
        else {
            this.isLoading = true;
            this.showOtpProgress = true;
            this.otpStatusText = _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.OTP_REQUESTING;
            const mobileNumberDetails = { countryCode: this.selectedCCID, mobileNo: this.enteredMobileNumber };
            this.chargeManReq
                .postRequestDetails("getOTPbyMobile", mobileNumberDetails)
                .subscribe((res) => {
                this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.OTP_SENT_SUCCESS, [], 3000);
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
                this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000);
            });
        }
    }
    /**
     *Method to compare OTP and sending req to validate OTP whether the entered mobile number was a new one or not
     *if it's a new one re-direct to profile component other wise redirect to dashboard as root component
     */
    login() {
        if (this.enteredOTP == this.otp || this.enteredOTP === _constants__WEBPACK_IMPORTED_MODULE_4__.DEMO_CRED.OTP) {
            // this.utils.showLoader(constants.DISPLAY_MESSAGES.LOADING_MESSAGE)
            this.otpValidationLoading = true;
            this.otpValidationStatusText = _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.OTP_VALIDATION_TEXT;
            this.showOtpValidationProgress = true;
            const validateOTPBody = {
                "mobileNo": this.enteredMobileNumber,
                "countryCode": this.selectedCCID
            };
            this.chargeManReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.RELATIVE_URLS.VALIDATE_OTP, validateOTPBody).subscribe((res) => {
                this.otpValidationLoading = false;
                this.otpValidationStatusText = '';
                this.showOtpValidationProgress = false;
                // this.utils.dismissLoader();
                if (res && Array.isArray(res)) {
                    this.auth.setLoginFlag();
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.USER_DETAILS, JSON.stringify(res[0]));
                    if (res[0].chargeCount > 0) {
                        this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 4000);
                        const options = {
                            state: {
                                charge_details: res[0],
                            }
                        };
                        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop');
                    }
                    else {
                        this.navCtrl.navigateRoot(["/pages"]);
                    }
                }
                else {
                    this.navCtrl.navigateForward(["/profile"], { state: { 'pageName': 'login', 'mob': this.enteredMobileNumber, 'cc': this.selectedCCID } });
                }
            }, (err) => {
                //  this.utils.dismissLoader();
                this.otpValidationStatusText = '';
                this.otpValidationLoading = false;
                this.showOtpValidationProgress = false;
                this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000);
            });
        }
        else {
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.INVALID_OTP_ERR, [], 3000);
        }
    }
    startOtpTimer() {
        this.seconds = 15;
        this.minuteCount = 1;
        this.isResendActive = false;
        this.otpTimerInterval = setInterval(() => {
            if (this.minuteCount > 0) {
                if (this.seconds == 0) {
                    this.minuteCount--;
                    this.seconds = 60;
                }
                this.seconds--;
            }
            else if (this.minuteCount === 0 && this.seconds === 0) {
                this.clearOtpInterval();
                this.isResendActive = true;
            }
            else {
                this.seconds--;
            }
        }, 1000);
    }
    resendOtp() {
        if (this.isResendActive) {
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
        if (event.keyCode === 13) {
            type === 'OTP' ? this.otppage() : this.login();
        }
    }
    onOtpInput() {
        var _a;
        if (((_a = this.enteredOTP) === null || _a === void 0 ? void 0 : _a.length) === 4) {
            this.login();
        }
    }
    goToLogin() {
        if (this.otpTimerInterval !== undefined) {
            clearInterval(this.otpTimerInterval);
        }
        this.enteredOTP = '';
        this.login2 = false;
        this.login1 = true;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_2__.ChargemanRequestService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.Authentication },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__.Utils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-login",
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 51558:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/country-picker-modal/country-picker-modal.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Country</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar [formControl]=\"searchControl\" placeholder=\"Search country\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item button *ngFor=\"let country of filteredCountries\" (click)=\"selectCountry(country)\">\n      <ion-label>{{country.name}} <span text-light>({{country.dial_code}})</span></ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"filteredCountries.length === 0\">\n      <ion-label>No countries found</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<ion-app style=\"background-color: aqua;\">\n  <ion-content fullscreen >\n    <section style=\"background-color: #242424;\">\n      <div class=\"d-flex justify-content-center\" style=\"padding-top:20%;padding-bottom:20%\"><img src=\"assets/icon/loginimg.png\"></div>\n    </section>\n    <section style=\"background-color: #ffffff;padding:5%;border-top-left-radius: 40px;border-top-right-radius: 40px;\">\n      <ion-text color=\"dark\">\n        <h4 style=\"font-weight: 600;margin-bottom: 1.5rem;\">Welcome Back!</h4>\n        <h4 style=\"font-weight: 600;margin-bottom: 1.5rem;\">Sign in</h4>\n        <h6 style=\"font-weight: 400;margin-bottom: 2.5rem;\">Enter Your Mobile Number</h6>\n      </ion-text>\n      <ion-item>\n        <ion-label position=\"floating\">Mobile No</ion-label>\n        <ion-input style=\"border-bottom: 1px solid black;\"></ion-input>\n      </ion-item>\n      <div class=\"pt-5 d-flex justify-content-center\"><ion-button style=\"width:360px\">Send OTP</ion-button></div>\n    </section>\n  </ion-content>\n</ion-app>-->\n<ion-app>\n  <!-- <ion-row class=\"top\"> -->\n   <div login-logo-container>\n    <img src=\"assets/icon/loginimg.png\">\n   </div>\n   <div *ngIf=\"login1\" login-details-container>\n   <app-loading *ngIf=\"isLoading\" [showProgress]=\"showOtpProgress\" [statusText]=\"otpStatusText\"></app-loading>\n    <div *ngIf=\"!isLoading\">\n      <h4 heading-style-one login-text>Welcome Back!</h4>\n      <h4 heading-style-one login-subtext>Sign in</h4>\n      <h6 heading-style-light login-subtext>Enter Your Mobile Number</h6>\n     \n      <ion-item login-input-item>\n        <div country-code-display (click)=\"openCountryPicker()\">\n          <ion-label>{{selectedCCID}}</ion-label>\n          <ion-icon name=\"chevron-down\"></ion-icon>\n        </div>\n        <ion-input type=\"tel\" [(ngModel)]=\"enteredMobileNumber\" (keypress)=\"onKeypress($event, 'OTP')\"></ion-input>\n      </ion-item>\n      \n       <ion-button button-regular login-button (click)=\"otppage()\">Send OTP</ion-button>\n     \n     </div>\n  </div>\n \n  <!-- <ion-row class=\"bottom\" *ngIf=\"login2\"> -->\n    <div login-details-container *ngIf=\"login2\">\n      <app-loading *ngIf=\"otpValidationLoading\" [showProgress]=\"showOtpValidationProgress\" [statusText]=\"otpValidationStatusText\"></app-loading>\n      <div *ngIf=\"!otpValidationLoading\">\n      <h4 heading-style-one login-text>Enter OTP</h4>\n      <h6 heading-style-light login-subtext>Enter the code which is sent to the number <span>{{selectedCCID}}-{{enteredMobileNumber}} </span>below</h6>\n\n      <div otp-input-wrapper (click)=\"otpInputRef.focus()\">\n        <div otp-box *ngFor=\"let d of [0,1,2,3]; let i=index\" [class.filled]=\"enteredOTP?.length > i\">\n          {{ enteredOTP?.[i] || '' }}\n        </div>\n        <input #otpInputRef id=\"otp-input\" type=\"tel\" [(ngModel)]=\"enteredOTP\" maxlength=\"4\" (keydown)=\"onKeypress($event, 'login')\" (input)=\"onOtpInput()\" autocomplete=\"off\">\n      </div>\n      <div otp-container>\n        <div otp-back-parent-container>\n          <div cotainer-otp-style>\n            <h6 heading-style-light login-otp-timer-style (click)=\"resendOtp()\" *ngIf=\"isResendActive\" [ngClass]=\"isResendActive ? 'enabled-color' : 'disabled-color'\">Resend OTP</h6>\n            <h6 heading-style-light login-otp-timer-style otp-timer *ngIf=\"!isResendActive\" [ngClass]=\"!isResendActive ? 'enabled-color' : 'disabled-color'\">{{minuteCount < 10 ? '0'+minuteCount : minuteCount}}:{{seconds < 10 ? '0'+seconds : seconds}}</h6>\n          </div>\n          <h6 back-text (click)=\"goToLogin()\">Go Back</h6>\n        </div>\n      </div>\n    </div>\n      <!-- <ion-row  class=\"pt-3 d-flex justify-content-center\"> -->\n       <ion-button *ngIf=\"!showOtpValidationProgress\" button-regular login-button (click)=\"login()\">Login</ion-button>\n      <!-- </ion-row> -->\n     </div>\n  <!-- </ion-row> -->\n</ion-app>\n");

/***/ }),

/***/ 13945:
/*!********************************************************************************!*\
  !*** ./src/app/login/country-picker-modal/country-picker-modal.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "[text-light] {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktcGlja2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiY291bnRyeS1waWNrZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbdGV4dC1saWdodF0ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-app {\n  background-color: #242424;\n  height: 100vh;\n  width: 100vw;\n}\n\n.top {\n  background-color: #242424;\n  height: 50vh;\n  width: 100vw;\n}\n\n[country-code-display] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n[country-code-display] ion-label {\n  font-family: \"poppins-regular-400\";\n  font-size: 14px;\n  margin-right: 4px;\n  color: var(--chargemen-black);\n}\n\n[country-code-display] ion-icon {\n  width: 18px;\n  height: 18px;\n  color: var(--chargemen-black);\n}\n\n[otp-input-wrapper] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  grid-gap: 14px;\n  gap: 14px;\n  margin: 24px 30px 12px;\n}\n\n[otp-input-wrapper] #otp-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  letter-spacing: 52px;\n  caret-color: transparent;\n  font-size: 24px;\n  z-index: 1;\n}\n\n[otp-input-wrapper] [otp-box] {\n  width: 50px;\n  height: 56px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-family: \"poppins-regular-400\";\n  color: var(--chargemen-black);\n  background: white;\n  transition: border-color 0.2s;\n}\n\n[otp-input-wrapper] [otp-box].filled {\n  border-color: var(--chargemen-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFERTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFHSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFBSTtFQUNFLHNDQUFBO0FBRU4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcbiAgaGVpZ2h0OjEwMHZoO1xuICB3aWR0aDoxMDB2dztcbn1cbi50b3B7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XG4gIGhlaWdodDo1MHZoO1xuICB3aWR0aDoxMDB2dztcbn1cblxuW2NvdW50cnktY29kZS1kaXNwbGF5XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhci00MDAnO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogdmFyKC0tY2hhcmdlbWVuLWJsYWNrKTtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jaGFyZ2VtZW4tYmxhY2spO1xuICB9XG59XG5cbltvdHAtaW5wdXQtd3JhcHBlcl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIG1hcmdpbjogMjRweCAzMHB4IDEycHg7XG5cbiAgI290cC1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA1MnB4O1xuICAgIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIFtvdHAtYm94XSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXJlZ3VsYXItNDAwJztcbiAgICBjb2xvcjogdmFyKC0tY2hhcmdlbWVuLWJsYWNrKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgICAmLmZpbGxlZCB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNoYXJnZW1lbi1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map