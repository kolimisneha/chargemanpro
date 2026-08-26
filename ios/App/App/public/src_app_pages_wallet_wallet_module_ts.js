"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_wallet_wallet_module_ts"],{

/***/ 23187:
/*!*****************************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 49837:
/*!***********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.Checkout),
/* harmony export */   "CheckoutWeb": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.CheckoutWeb)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 23187);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 88495);




/***/ }),

/***/ 88495:
/*!*********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/web.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutWeb": () => (/* binding */ CheckoutWeb),
/* harmony export */   "Checkout": () => (/* binding */ Checkout)
/* harmony export */ });
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 23187);


class CheckoutWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
  }

  echo(options) {
    return (0,_home_snehakolimi_workspaces_chargemanpro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ECHO', options);
      return options;
    })();
  }

  open(options) {
    return (0,_home_snehakolimi_workspaces_chargemanpro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(options);
      return new Promise((resolve, reject) => {
        var _a;

        var razorpay; //add handlers to options to get the success response

        var finalOps = options;

        finalOps['handler'] = function (res) {
          console.log(res.razorpay_payment_id);
          resolve({
            response: res
          });
        };

        finalOps['modal.ondismiss'] = function () {
          reject(JSON.stringify({
            code: 2,
            description: 'Payment Canceled by User'
          }));
        };

        var retryCount = 0;

        if (finalOps.hasOwnProperty('retry')) {
          if (finalOps.retry.enabled === true) {
            retryCount = finalOps.retry.max_count;
          }
        } //get the first script tag in the document


        var rjs = document.getElementsByTagName('script')[0]; //create a HTMLScriptElement object for rzp script injection

        var rzpjs = document.createElement('script');
        rzpjs.id = 'rzp-jssdk';
        rzpjs.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
        (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(rzpjs);
        rzpjs.addEventListener('load', () => {
          try {
            razorpay = new window.Razorpay(finalOps);
            razorpay.open();
            razorpay.on('payment.failed', res => {
              var _a;

              retryCount = retryCount - 1;

              if (retryCount < 0) {
                console.log(res);
                (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(rzpjs);
                reject(res.error);
              }
            });
          } catch (err) {
            reject({
              response: err
            });
          }
        });
      }); // var rjs = document.getElementsByTagName('script')[0]
      // var razorpay;
      // var js:HTMLScriptElement = document.createElement('script')
      // js.id = 'rzp-jssdk'
      // js.setAttribute('src','https://checkout.razorpay.com/v1/checkout.js')
      // document.body.appendChild(js);
      // document.body.appendChild(js);
      // rjs.parentNode?.appendChild(js)
      // rjs.addEventListener('load',()=>{
      //   try{
      //     razorpay = new (window as any).Razorpay(options)
      //     razorpay.open()
      //     razorpay.on('payment.failed',function(response:any){
      //         console.log('payment failed')
      //         console.log(response)
      //     })
      //   }catch(err){
      //     document.body.removeChild(js)
      //     return{
      //       response: "Problem opening checkouts"
      //     }
      //   }
      // })
      // return {
      //   response:options.key
      // }
    })();
  }

}
const Checkout = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('Checkout', {
  web: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 88495)).then(m => new m.CheckoutWeb())
});



/***/ }),

/***/ 95374:
/*!********************************************************!*\
  !*** ./src/app/pages/wallet/recharge/recharge.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RechargePage": () => (/* binding */ RechargePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recharge_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recharge.page.html */ 88984);
/* harmony import */ var _recharge_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recharge.page.scss */ 53761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ 425);








let RechargePage = class RechargePage {
    constructor(utils, formBuilder, modalCtrl) {
        this.utils = utils;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.quickAmounts = [{ amount: 500 }, { amount: 750 }, { amount: 1000 }, { amount: 2000 }];
        this.enteredAmount = '';
        this.rupeeIcon = '../../../assets/icon/rupee.svg';
    }
    ngOnInit() {
        this.rechargeForm = this.formBuilder.group({
            'rechargeAmount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_3__.REGEX.WALLET_AMOUNT_REGEX), this.minAmount])]
        });
    }
    selectMoney(amount) {
        this.rechargeForm.get('rechargeAmount').setValue(amount.amount);
    }
    recharge() {
        this.modalCtrl.dismiss({
            amount: this.rechargeForm.get('rechargeAmount').value
        });
    }
    minAmount(control) {
        const amount = control.value;
        if (amount === "" || parseInt(amount) >= 250 && parseInt(amount) <= 5000) {
            return null;
        }
        else {
            return { 'minamount': true };
        }
    }
    handleKeyupEnter(event) {
        if (event.key == "Enter") {
            if (this.rechargeForm.get('rechargeAmount').value < 100 || this.rechargeForm.get('rechargeAmount').value > 5000) {
                event.preventDefault();
            }
        }
    }
};
RechargePage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.Utils },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
RechargePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-recharge',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recharge_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recharge_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RechargePage);



/***/ }),

/***/ 96656:
/*!*******************************************************!*\
  !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageRoutingModule": () => (/* binding */ WalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.page */ 94278);




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
    },
    {
        path: 'withdraw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_withdraw_withdraw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../withdraw/withdraw.module */ 17613)).then(m => m.WithdrawPageModule)
    },
    {
        path: 'recharge',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wallet_recharge_recharge_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recharge/recharge.module */ 41466)).then(m => m.RechargePageModule)
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ 90106:
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageModule": () => (/* binding */ WalletPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-routing.module */ 96656);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page */ 94278);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let WalletPageModule = class WalletPageModule {
};
WalletPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], WalletPageModule);



/***/ }),

/***/ 94278:
/*!*********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPage": () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wallet.page.html */ 65242);
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page.scss */ 14458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _recharge_recharge_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recharge/recharge.page */ 95374);
/* harmony import */ var capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-razorpay */ 49837);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);











let WalletPage = class WalletPage {
    constructor(modalCtrl, utils, chargemanReq) {
        this.modalCtrl = modalCtrl;
        this.utils = utils;
        this.chargemanReq = chargemanReq;
        this.walletBalance = 0;
        this.isLoading = true;
        this.statusText = '';
        this.walletBalanceIcon = '../../assets/icon/wallet-balance.svg';
        this.rechargeIcon = '../../assets/icon/recharge_icon.svg';
        this.withdrawIcon = '../../assets/icon/withdrawn_icon.svg';
        this.consumeIcon = '../../assets/icon/consume_icon.svg';
        this.transactions = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.statusText = 'Loading...';
            this.walletSubscription = this.utils.walletObs.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (res === '') {
                    this.walletBalance = (_a = parseFloat(yield (yield this.utils.getStoredDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.WALLET_BALANCE)).value).toFixed(2)) !== null && _a !== void 0 ? _a : '0';
                }
                else {
                    this.walletBalance = parseFloat(res).toFixed(2);
                }
            }));
            this.loadTransactions(false);
        });
    }
    ionViewDidLeave() {
        // if(this.walletSubscription || !this.walletSubscription.complete()) {
        //   this.walletSubscription.unsubscribe();
        // }
    }
    loadTransactions(isRefresher, event) {
        this.transactions = [];
        this.utils.getStoredUserDetails().then((res) => {
            const body = {
                "mobile": res.mobile
            };
            this.chargemanReq.postRequestDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.RELATIVE_URLS.GET_TRANSACTIONS_HISTORY, body).subscribe((res) => {
                this.isLoading = false;
                if (res && res.length > 0) {
                    this.transactions = res;
                    this.transactions.map((item) => {
                        item.transactiondate = this.utils.convertDateTimeFormat(item.transactiondate, "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm A");
                        item.type = item.type[0].toUpperCase() + item.type.slice(1);
                        item.walletamount = parseFloat(item.walletamount).toFixed(3).slice(0, -1);
                    });
                }
                else {
                    this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.NO_TRANSACTION_HIS_FOUND;
                }
            }, (err) => {
                this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.TRANSACTIONS_ERR;
            });
        });
        if (isRefresher) {
            event.target.complete();
        }
    }
    openRecharge() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _recharge_recharge_page__WEBPACK_IMPORTED_MODULE_2__.RechargePage,
                breakpoints: [0, 0.3, 0.4],
                initialBreakpoint: 0.4,
                presentingElement: yield this.modalCtrl.getTop()
            });
            yield modal.present();
            const { data } = (yield modal.onWillDismiss());
            if (data !== undefined) {
                if ((data === null || data === void 0 ? void 0 : data.amount) === '0' || (data === null || data === void 0 ? void 0 : data.amount) === '00.00' || (data === null || data === void 0 ? void 0 : data.amount) === '0.00' || (data === null || data === void 0 ? void 0 : data.amount) === '00.0') {
                    this.utils.presentToast(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.ENTER_VALID_AMT_ERR, [], 3000);
                }
                else {
                    let rechargeamount = data.amount;
                    const razorpay_opt = {
                        key: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.razorpay_key,
                        amount: rechargeamount + '00',
                        description: src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.RAZR_PAY_DESC,
                        image: '',
                        currency: 'INR',
                        name: 'EV-Gracias',
                        prefill: {
                            email: this.userDetails.email,
                            contact: this.userDetails.mobile,
                            name: this.userDetails.name
                        },
                        theme: {
                            color: '#8EBA47'
                        }
                    };
                    try {
                        let data = yield capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__.Checkout.open(razorpay_opt);
                        this.utils.presentToast(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.RAZR_PAY_SUCCESS + rechargeamount, [], 5000);
                        const walletBody = {
                            "mobile": this.userDetails.mobile,
                            "wallet": this.walletBalance,
                            "walletamount": rechargeamount,
                            "type": "Recharge",
                            "transactionid": data.response.razorpay_payment_id,
                            "bankname": "-",
                            "createdby": this.userDetails.name
                        };
                        this.chargemanReq.postRequestDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.RELATIVE_URLS.INSERT_WALLET_HIS, walletBody).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            if (res && res.status === 'success') {
                                this.walletBalance = res.wallet;
                                this.utils.storeDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.WALLET_BALANCE, this.walletBalance);
                                this.utils.updateValues(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.UPDATE_WALLET_TYPE, this.walletBalance);
                                // this.loadTransactions(false);
                            }
                            else {
                                const res = yield this.utils.displayDialog(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.DIALOG_TYPE_ALERT, src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.PAYMENT_STORE_FAILURE, [src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.CONTACT_SUPPORT, src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
                                if (res === 1) {
                                    const contactNum = (src_app_constants__WEBPACK_IMPORTED_MODULE_5__.GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[1] + src_app_constants__WEBPACK_IMPORTED_MODULE_5__.GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[2] + src_app_constants__WEBPACK_IMPORTED_MODULE_5__.GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[3]);
                                    this.utils.callNumber(contactNum);
                                }
                            }
                        }));
                    }
                    catch (e) {
                        this.utils.displayDialog(src_app_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.DIALOG_TYPE_ALERT, src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.RAZR_PAY_ERR, [src_app_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    }
                }
            }
        });
    }
    ngOnInit() {
        this.utils.getStoredUserDetails().then((res) => {
            this.userDetails = res;
        });
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_7__.ChargemanRequestService }
];
WalletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-wallet',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletPage);



/***/ }),

/***/ 88984:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/wallet/recharge/recharge.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div recharge-container>\n    <form [formGroup]=\"rechargeForm\" (ngSubmit)=\"recharge()\" (keydown)=\"handleKeyupEnter($event)\">\n    <ion-item>\n      <ion-label recharge-label position=\"stacked\">Enter Amount</ion-label>\n      <ion-input formControlName=\"rechargeAmount\" type=\"tel\" recharge-input></ion-input>\n      <ion-icon slot=\"end\" [src]=\"rupeeIcon\"></ion-icon>\n    </ion-item>\n    <div error-container>\n      <span *ngIf=\"(rechargeForm.controls.rechargeAmount.touched || submitted) && rechargeForm.controls.rechargeAmount.errors?.required\">Amount required </span>\n      <span *ngIf=\"(rechargeForm.controls.rechargeAmount.touched || submitted) && rechargeForm.controls.rechargeAmount.errors?.pattern\">Invalid amount</span>\n      <span *ngIf=\"(rechargeForm.controls.rechargeAmount.touched || submitted) && rechargeForm.controls.rechargeAmount.errors?.minamount\">Amount range must be in ₹250 - ₹5000</span>\n      </div>\n    <div quick-money-selection-container>\n      <div *ngFor=\"let money of quickAmounts\" money-selection-box (click)=\"selectMoney(money)\">\n        ₹ {{money.amount}}\n      </div>\n      \n    </div>\n      <div button-container>\n        <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!rechargeForm.valid\" button-regular>Recharge</ion-button>\n      </div>\n\n    </form>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 65242:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/wallet/wallet.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"../../../assets/icon/back_icon.svg\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Wallet</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header title=\"Wallet\" redirectTo='dashboard' iconPath=\"../../../assets/icon/back_icon.svg\"></app-header>\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"loadTransactions(true, $event)\">\n  <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n<ion-content content-color>\n  <div wallet-parent-container>\n  <ion-label wallet-page-heading>Available Balance in wallet</ion-label>\n  <div wallet-display-container>\n    <ion-icon wallet-icon [src]=\"walletBalanceIcon\"></ion-icon>\n    <ion-label wallet-amount>Rs {{walletBalance}}</ion-label>\n  </div>\n\n\n  <div>\n    <div wallet-buttons-container>\n      <ion-button  expand=\"block\" fill=\"outline\" recharge-button (click)=\"openRecharge()\">Recharge</ion-button>\n      <!-- <ion-button  expand=\"block\" withdraw-button fill=\"outline\" (click)=\"openWithDraw()\">Withdraw</ion-button> -->\n    </div>\n  </div>\n\n  <div transactions-container>\n    <ion-label>Transactions</ion-label>\n    <div *ngIf=\"(transactions.length > 0)\">\n      <div *ngFor=\"let transaction of transactions\" transactions-parent-container>\n        <div transaction-details>\n          <ion-icon slot=\"start\" [src]=\"transaction.type === 'Withdraw' ? consumeIcon : transaction.type === 'Consume' ? withdrawIcon : rechargeIcon\"></ion-icon>\n          <div>\n          <ion-label transaction-type>{{transaction.type}}</ion-label>\n          <div>\n            <ion-label transaction-date>{{transaction.transactiondate}}</ion-label>\n          </div>\n          </div>\n        </div>\n        <ion-label [ngClass]=\"transaction.type === 'Withdraw' ? 'consume-style' : transaction.type === 'Consume' ? 'withdraw-style' :'recharge-style'\">₹ {{transaction.walletamount}}</ion-label>\n      </div>\n    </div>\n    <div transactions-empty-container *ngIf=\"(transactions.length == 0)\">\n      <ion-label>{{statusText}}</ion-label>\n    </div>\n  </div>\n</div>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <div class=\"\" style=\"color:gray;font-size: small;font-weight: 600;margin-bottom: 10px;\">Available Balance in Wallet</div>\n          <ion-item lines=\"none\"  style=\"font-size: larger;color:#8eba47;font-weight: 800;\">\n            <ion-icon slot=\"start\" name=\"folder\" id=\"foldericon\"></ion-icon>\n            <ion-label>Rs.45</ion-label>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div><ion-button  color=\"success\" expand=\"block\" fill=\"outline\" (click)=\"openRecharge()\">Recharge</ion-button></div>\n      </ion-col>\n      <ion-col>\n        <div><ion-button  color=\"danger\" expand=\"block\" fill=\"outline\" routerLink=\"../wallet/withdraw\">Withdraw</ion-button></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"\" style=\"color:rgb(0, 0, 0);font-size: medium;font-weight: 600;\">Transactions</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-row>\n            <ion-col size=\"2\">\n              <div><ion-icon name=\"arrow-back\" style=\"border:2px solid rgb(172, 0, 0);padding:4px;border-radius: 50%;color:rgb(172, 0, 0)\"></ion-icon></div>\n            </ion-col>\n            <ion-col>\n              <div>\n                <div class=\"\" style=\"color:rgb(0, 0, 0);font-size: small;font-weight: 600;\">Withdrawn</div>\n                <div class=\"\" style=\"color:rgb(161, 161, 161);font-size: x-small;font-weight: 400;\">12 SEP 03:45 PM</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\" style=\"text-align: right;\">\n              <div class=\"\" style=\"color:rgb(172, 0, 0);font-size: medium;font-weight: 600;margin-top: 8px;\">Rs.35</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\">\n              <div><ion-icon name=\"arrow-forward\" style=\"border:2px solid rgb(0, 109, 0);padding:4px;border-radius: 50%;color:rgb(0, 109, 0)\"></ion-icon></div>\n            </ion-col>\n            <ion-col>\n              <div>\n                <div class=\"\" style=\"color:rgb(0, 0, 0);font-size: small;font-weight: 600;\">Recharge</div>\n                <div class=\"\" style=\"color:rgb(161, 161, 161);font-size: x-small;font-weight: 400;\">Today 07:00 PM</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\" style=\"text-align: right;\">\n              <div class=\"\" style=\"color:rgb(0, 109, 0);font-size: medium;font-weight: 600;margin-top: 8px;\">Rs.42</div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n");

/***/ }),

/***/ 53761:
/*!**********************************************************!*\
  !*** ./src/app/pages/wallet/recharge/recharge.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNoYXJnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 14458:
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-col > div {\n  background-color: #ffffff;\n  padding: 10px;\n}\n\n#foldericon {\n  color: #8eba47;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jZm9sZGVyaWNvbntcbiAgY29sb3I6IzhlYmE0N1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wallet_wallet_module_ts.js.map