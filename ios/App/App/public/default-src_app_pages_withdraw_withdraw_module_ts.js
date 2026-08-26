"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_withdraw_withdraw_module_ts"],{

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

/***/ 96998:
/*!***********************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawPageRoutingModule": () => (/* binding */ WithdrawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _withdraw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw.page */ 23281);




const routes = [
    {
        path: '',
        component: _withdraw_page__WEBPACK_IMPORTED_MODULE_0__.WithdrawPage
    }
];
let WithdrawPageRoutingModule = class WithdrawPageRoutingModule {
};
WithdrawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WithdrawPageRoutingModule);



/***/ }),

/***/ 17613:
/*!***************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawPageModule": () => (/* binding */ WithdrawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw-routing.module */ 96998);
/* harmony import */ var _withdraw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdraw.page */ 23281);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let WithdrawPageModule = class WithdrawPageModule {
};
WithdrawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_0__.WithdrawPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_withdraw_page__WEBPACK_IMPORTED_MODULE_1__.WithdrawPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], WithdrawPageModule);



/***/ }),

/***/ 23281:
/*!*************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawPage": () => (/* binding */ WithdrawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_withdraw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./withdraw.page.html */ 69185);
/* harmony import */ var _withdraw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdraw.page.scss */ 12800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 76097);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);










let WithdrawPage = class WithdrawPage {
    constructor(formBuilder, chargeReq, utils, emailComposer) {
        this.formBuilder = formBuilder;
        this.chargeReq = chargeReq;
        this.utils = utils;
        this.emailComposer = emailComposer;
        this.isIFSCProcessing = false;
        this.userDetails = '';
        this.isReadOnly = true;
    }
    ngOnInit() {
        this.getUserDetails();
        this.withdrawForm = this.formBuilder.group({
            acno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.REGEX.BANK_ACCOUNT_NUMBER_REGEX)])],
            ifsc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.REGEX.IFSC_REGEX)])],
            bname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.REGEX.CHAR_NUM_PATTERN_SPACE)])],
            baddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)])],
            acname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.REGEX.ACCOUNT_NAME_REGEX)])],
            bbranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.REGEX.BRANCH_NAME_REGEX)])]
        });
    }
    getUserDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetails = yield this.utils.getStoredUserDetails();
            this.walletBalance = yield this.utils.getStoredDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.WALLET_BALANCE);
        });
    }
    getBankDetailsByIFSC(event) {
        if (event.target.value.length >= 11) {
            this.ifscStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.IFSC_LOADING_DETAILS;
            this.isIFSCProcessing = true;
            this.chargeReq.getBankDetails(event.target.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe((res) => {
                this.isIFSCProcessing = false;
                this.isReadOnly = true;
                this.withdrawForm.get('bname').setValue(res.BANK);
                this.withdrawForm.get('baddr').setValue(res.ADDRESS);
                this.withdrawForm.get('bbranch').setValue(res.BRANCH);
            }, (err) => {
                this.isIFSCProcessing = false;
                if (!err.toLowerCase().includes('not found')) {
                    this.ifscStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.IFSC_ERR;
                    this.isReadOnly = false;
                }
                this.withdrawForm.get('bname').setValue('');
                this.withdrawForm.get('baddr').setValue('');
                this.withdrawForm.get('bbranch').setValue('');
            });
        }
        else {
            this.isIFSCProcessing = false;
            this.withdrawForm.get('bname').setValue('');
            this.withdrawForm.get('baddr').setValue('');
            this.withdrawForm.get('bbranch').setValue('');
        }
    }
    subimtReq() {
        if (this.walletBalance.value === '0') {
            this.utils.displayDialog(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_WITHDRAW_NO_BALANCE, [src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        }
        else {
            // const schema = Capacitor.getPlatform().toLowerCase() === 'android' ? 'com.google.android.gm' : Capacitor.getPlatform().toLowerCase() === 'ios' ? 'message://' : '';
            // this.emailComposer.isAvailable(schema).then((res) => {
            // if(res) {
            let email_body = `<h2> Request Details </h2> <br>
                        <p>Name: ${this.userDetails.name} </p> 
                        <p>Contact: +91-${this.userDetails.mobile} </p>
                        <p>Email: ${this.userDetails.email} </p>
                        <p>Account number: ${this.withdrawForm.get('acno').value} </p>
                        <p>IFSC: ${this.withdrawForm.get('ifsc').value} </p>
                        <p>Bank Name: ${this.withdrawForm.get('bname').value} </p>
                        <p>Bank Address: ${this.withdrawForm.get('baddr').value} </p>
                        <p>Account Name: ${this.withdrawForm.get('acname').value} </p>
                        <p>Withdraw amount requested : ${this.walletBalance.value} </p>`;
            let email = {
                app: 'mailto',
                to: src_app_constants__WEBPACK_IMPORTED_MODULE_2__.GRACIAS_DETAILS.EMAIL_ADDRESS,
                subject: src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.WITHDRAW_EMAIL_SUB + ' ' + this.userDetails.name + '(' + this.userDetails.mobile + ')',
                body: email_body,
                isHtml: true
            };
            this.emailComposer.open(email).then((res) => { }).catch((err) => {
                this.utils.displayDialog(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.EMAIL_ACCESS_ERR, [src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            });
            //  } else {
            //   this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.EMAIL_OPENER_ERR,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
            //  }
            // })
            // .catch((err) => {
            //     this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.EMAIL_OPENER_ERR_2,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
            // })
        }
    }
};
WithdrawPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__.Utils },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__.EmailComposer }
];
WithdrawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-withdraw',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_withdraw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_withdraw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WithdrawPage);



/***/ }),

/***/ 69185:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/withdraw/withdraw.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Withdraw\" redirectTo='dashboard' iconPath=\"../../../assets/icon/back_icon.svg\"></app-header>\n<ion-content content-color> \n    <div withdraw-parent-container>\n      <form [formGroup]=\"withdrawForm\" (ngSubmit)=\"subimtReq()\">\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Account Number</ion-label>\n        <ion-input formControlName=\"acno\" withdraw-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.acno.touched || submitted) && withdrawForm.controls.acno.errors?.required\"> Account number required </span>\n        <span *ngIf=\"(withdrawForm.controls.acno.touched || submitted) && withdrawForm.controls.acno.errors?.pattern\"> Invalid account number</span>\n      </div>\n\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Account Name</ion-label>\n        <ion-input formControlName=\"acname\" withdraw-details-input></ion-input>\n      </ion-item>\n\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.acname.touched || submitted) && withdrawForm.controls.acname.errors?.required\"> Account name required </span>\n        <span *ngIf=\"(withdrawForm.controls.acname.touched || submitted) && withdrawForm.controls.acname.minlength?.required\"> Account name must have 3 characters </span>\n        <span *ngIf=\"(withdrawForm.controls.acname.touched || submitted) && withdrawForm.controls.acname.errors?.pattern\"> Invalid Account Name</span>\n      </div>\n\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">IFSC Code</ion-label>\n        <ion-input formControlName=\"ifsc\" withdraw-details-input (ionChange)=\"getBankDetailsByIFSC($event)\"></ion-input>\n      </ion-item>\n      <div loading-container *ngIf=\"isIFSCProcessing\">\n        <span>{{ifscStatusText}}</span>\n      </div>\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.ifsc.touched || submitted) && withdrawForm.controls.ifsc.errors?.required\"> IFSC number required </span>\n        <span *ngIf=\"(withdrawForm.controls.ifsc.touched || submitted) && withdrawForm.controls.ifsc.errors?.pattern\"> Invalid IFSC number</span>\n      </div>\n\n\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Bank Name</ion-label>\n        <ion-input formControlName=\"bname\" [readonly]=\"isReadOnly\"  withdraw-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.bname.touched || submitted) && withdrawForm.controls.bname.errors?.required\"> Bank name required </span>\n        <span *ngIf=\"(withdrawForm.controls.bname.touched || submitted) && withdrawForm.controls.bname.errors?.pattern\"> Invalid bank name</span>\n        <span *ngIf=\"(withdrawForm.controls.bname.touched || submitted) && withdrawForm.controls.bname.errors?.minlength\">Bank name must have min 3 letters</span>\n      </div>\n\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Branch</ion-label>\n        <ion-input formControlName=\"bbranch\" [readonly]=\"isReadOnly\"  withdraw-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.bbranch.touched || submitted) && withdrawForm.controls.bbranch.errors?.required\"> Branch name required </span>\n        <span *ngIf=\"(withdrawForm.controls.bbranch.touched || submitted) && withdrawForm.controls.bbranch.errors?.pattern\"> Invalid branch name</span>\n        <span *ngIf=\"(withdrawForm.controls.bbranch.touched || submitted) && withdrawForm.controls.bbranch.errors?.minlength\">Branch name must have min 3 letters</span>\n      </div>\n\n      <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Bank Address</ion-label>\n        <ion-input formControlName=\"baddr\" withdraw-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.baddr.touched || submitted) && withdrawForm.controls.baddr.errors?.required\"> Bank address required </span>\n        <span *ngIf=\"(withdrawForm.controls.baddr.touched || submitted) && withdrawForm.controls.baddr.errors?.pattern\"> Invalid bank address</span>\n        <span *ngIf=\"(withdrawForm.controls.baddr.touched || submitted) && withdrawForm.controls.baddr.errors?.minlength\"> Bank address must have min of 10 letters </span>\n      </div>\n   \n\n      <!-- <ion-item>\n        <ion-label withdraw-details-label position=\"stacked\">Withdraw Amount</ion-label>\n        <ion-input formControlName=\"amnt\" withdraw-details-input></ion-input>\n      </ion-item> -->\n      <!-- <div error-container>\n        <span *ngIf=\"(withdrawForm.controls.amnt.touched || submitted) && withdrawForm.controls.amnt.errors?.required\"> Amount required </span>\n        <span *ngIf=\"(withdrawForm.controls.amnt.touched || submitted) && withdrawForm.controls.amnt.errors?.pattern\"> Invalid amount</span>\n      </div> -->\n\n      <div hint-container>\n        <span>Note: </span> <span>This request will redirect to your email application with filled details and send your request to our support team via email to initiate the withdraw process. For contact info please select support in menu list</span>\n      </div>\n      <ion-button button-regular withdraw-button expand=\"block\" [disabled]=\"!withdrawForm.valid\" type=\"submit\">Send Request</ion-button>\n    </form>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 12800:
/*!***************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXRoZHJhdy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_withdraw_withdraw_module_ts.js.map