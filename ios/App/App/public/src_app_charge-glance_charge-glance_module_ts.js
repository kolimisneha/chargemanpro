"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_charge-glance_charge-glance_module_ts"],{

/***/ 33859:
/*!***************************************************************!*\
  !*** ./src/app/charge-glance/charge-glance-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeGlancePageRoutingModule": () => (/* binding */ ChargeGlancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _charge_glance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charge-glance.page */ 11158);




const routes = [
    {
        path: '',
        component: _charge_glance_page__WEBPACK_IMPORTED_MODULE_0__.ChargeGlancePage
    }
];
let ChargeGlancePageRoutingModule = class ChargeGlancePageRoutingModule {
};
ChargeGlancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChargeGlancePageRoutingModule);



/***/ }),

/***/ 95066:
/*!*******************************************************!*\
  !*** ./src/app/charge-glance/charge-glance.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeGlancePageModule": () => (/* binding */ ChargeGlancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _charge_glance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charge-glance-routing.module */ 33859);
/* harmony import */ var _charge_glance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charge-glance.page */ 11158);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let ChargeGlancePageModule = class ChargeGlancePageModule {
};
ChargeGlancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _charge_glance_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargeGlancePageRoutingModule
        ],
        declarations: [_charge_glance_page__WEBPACK_IMPORTED_MODULE_1__.ChargeGlancePage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ChargeGlancePageModule);



/***/ }),

/***/ 11158:
/*!*****************************************************!*\
  !*** ./src/app/charge-glance/charge-glance.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeGlancePage": () => (/* binding */ ChargeGlancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charge_glance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./charge-glance.page.html */ 56789);
/* harmony import */ var _charge_glance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charge-glance.page.scss */ 77240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils.service */ 44516);







let ChargeGlancePage = class ChargeGlancePage {
    constructor(utils, chargeReq) {
        this.utils = utils;
        this.chargeReq = chargeReq;
        this.vehicleIcon = '../../assets/icon/charge_station.png';
        this.timeElapsedIcon = '../../assets/icon/time_elapsed_icon.svg';
        this.energyIcon = '../../assets/icon/energy.svg';
        this.chargerPowerIcon = '../../assets/icon/charger_power.svg';
        this.details = [];
        this.walletBalance = '0';
        this.isLoading = false;
        this.statusText = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.transactionId = this.utils.getPageParams().transactionid;
            this.isLoading = true;
            this.showProgress = true;
            this.statusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.LOADING_CHARGE_DETAILS;
            this.walletBalance = yield (yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.WALLET_BALANCE)).value;
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getChargeSummary();
        });
    }
    getChargeSummary() {
        const transaction_details = {
            transactionid: this.transactionId
        };
        this.chargeReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.CHARGING_SUMMARY, transaction_details).subscribe((res) => {
            if (res && res.length > 0) {
                this.isLoading = false;
                res.map((item) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    item.chargedate = (_a = this.utils.convertDateTimeFormat(item.chargedate, "YYYY-MM-DD", "Do MMM YYYY")) !== null && _a !== void 0 ? _a : 'NA';
                    item.starttime = (_b = this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "hh:mm:ss A")) !== null && _b !== void 0 ? _b : 'NA';
                    item.endtime = (_c = this.utils.convertDateTimeFormat(item.endtime, "YYYY-MM-DD HH:mm:ss", "hh:mm:ss A")) !== null && _c !== void 0 ? _c : 'NA';
                    item.status = (_d = item.status.toLowerCase()) !== null && _d !== void 0 ? _d : '-',
                        item.consumewallet = (_e = parseFloat(item.consumewallet).toFixed(2)) !== null && _e !== void 0 ? _e : '0';
                    item.total = (_f = parseFloat(item.consumewallet).toFixed(2)) !== null && _f !== void 0 ? _f : '0';
                    item.chargevalue = (_g = parseFloat(item.chargevalue).toFixed(2)) !== null && _g !== void 0 ? _g : '0';
                    item.kwh = (_h = parseFloat(item.kwh).toFixed()) !== null && _h !== void 0 ? _h : '0';
                    item.capacity = (_j = parseFloat(item.capacity)) !== null && _j !== void 0 ? _j : '0';
                    item.status = item.status.toLowerCase() === 'stopped' || item.status.toLowerCase() === 'accepted' || item.status.toLowerCase() === 'closed' ? 'Success' : 'Error';
                });
                this.details = res[0];
            }
        }, (err) => {
            this.isLoading = true;
            this.showProgress = false;
            this.statusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.LOADING_CHARGE_ERR;
        });
    }
};
ChargeGlancePage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService }
];
ChargeGlancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-charge-glance',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charge_glance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_charge_glance_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChargeGlancePage);



/***/ }),

/***/ 56789:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charge-glance/charge-glance.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Charge Summary\" iconPath=\"../../../assets/icon/back_icon.svg\"></app-header>\n<ion-content content-color>\n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n  <div *ngIf=\"!isLoading\" charge-glance-parent-container>\n    <div charge-address-container>\n      <ion-label charger-name>{{details.hostname ?? 'Unavailable'}}</ion-label>\n      <ion-label desc-style>{{details.hostaddress ?? '-'}}</ion-label>\n    </div>\n\n\n    <div vehicle-status-container>\n      <img vehicle-icon [src]=\"vehicleIcon\"/>\n      <div vehicle-status-text-container>\n        <ion-label status-heading>status</ion-label>\n        <ion-label charging-status-text>{{details.status}}</ion-label>\n        <ion-label date-text>Date: {{details.chargedate}}</ion-label>\n      </div>\n    </div>\n\n\n    <div charger-details-container>\n      <div charger-details>\n        <ion-icon [src]=\"timeElapsedIcon\"></ion-icon>\n        <ion-label type-style>{{details.timeduration ?? '-'}}</ion-label>\n        <ion-label heading-style>Time Elapsed</ion-label>\n      </div>\n      <div charger-details>\n        <ion-icon [src]=\"energyIcon\"></ion-icon>\n        <ion-label type-style>{{details.chargevalue ?? '-'}} KWh</ion-label>\n        <ion-label heading-style>Energy</ion-label>\n      </div>\n      <div charger-details>\n        <ion-icon [src]=\"chargerPowerIcon\"></ion-icon>\n        <ion-label type-style>{{details.capacity ?? '-'}} KW</ion-label>\n        <ion-label heading-style>Capacity</ion-label>\n      </div>\n    </div>\n\n\n    <div charger-fare-container>\n      <div details-container>\n        <ion-label fare-heading>Start time</ion-label>\n        <ion-label fare-value>{{details.starttime}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading>End time</ion-label>\n        <ion-label fare-value>{{details.endtime}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading>Charging Fee</ion-label>\n        <ion-label fare-value>₹ {{details.consumewallet}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading>CGST({{details.cgst}}%)</ion-label>\n        <ion-label fare-value>₹ {{details.cgstvalue}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading>SGST({{details.sgst}}%)</ion-label>\n        <ion-label fare-value>₹ {{details.sgstvalue}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading>Charging Fee</ion-label>\n        <ion-label fare-value>₹ {{details.consumewallet}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading-total>Total</ion-label>\n        <ion-label fare-total-value>₹ {{details.total}}</ion-label>\n      </div>\n\n      <div details-container>\n        <ion-label fare-heading-total>Wallet Remaining</ion-label>\n        <ion-label fare-total-value>₹ {{walletBalance}}</ion-label>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 77240:
/*!*******************************************************!*\
  !*** ./src/app/charge-glance/charge-glance.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyZ2UtZ2xhbmNlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_charge-glance_charge-glance_module_ts.js.map