"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 54615:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2663);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    },
    {
        path: 'historydetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_history_historydetails_historydetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./historydetails/historydetails.module */ 41003)).then(m => m.HistorydetailsPageModule)
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 15635:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 54615);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2663);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);









let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], HistoryPageModule);



/***/ }),

/***/ 2663:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./history.page.html */ 30744);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 54091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);







let HistoryPage = class HistoryPage {
    constructor(chargemanReq, utils) {
        this.chargemanReq = chargemanReq;
        this.utils = utils;
        this.chargerHistory = [];
    }
    ngOnInit() {
        this.loadChargeHistory(false);
    }
    loadChargeHistory(isRefresher, event) {
        this.chargerHistory = [];
        this.isLoading = true;
        this.showProgress = true;
        this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.LOADING_MESSAGE;
        this.utils.getStoredUserDetails().then((res) => {
            const details = {
                'mobile': res.mobile
            };
            this.chargemanReq.postRequestDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.GET_CHARGE_HISTORY, details).subscribe((res) => {
                if (res.length > 0) {
                    this.isLoading = false;
                    this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.LOADING_HISTORY;
                    res.map((item) => {
                        var _a, _b;
                        let startTime = item.starttime !== null ? this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "hh:mm a") : '';
                        let endTime = item.endtime !== null ? this.utils.convertDateTimeFormat(item.endtime, "YYYY-MM-DD HH:mm:ss", "hh:mm a") : '';
                        let chargeDate = (_a = this.utils.convertDateTimeFormat(item.chargedate, "YYYY-MM-DD", "Do MMM YYYY")) !== null && _a !== void 0 ? _a : '-';
                        let chargeDuration = startTime !== '' && endTime !== '' ? this.utils.getDifferenceDuration(item.endtime, item.starttime, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss', src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DATEFORMAT_STRINGS.MINUTES) : '';
                        item.starttime = startTime;
                        item.endtime = endTime;
                        ;
                        item.chargedate = chargeDate;
                        item.kwh = parseFloat(item.kwh).toFixed(2);
                        item.chargevalue = parseFloat(item.chargevalue).toFixed(2);
                        chargeDuration = chargeDuration !== '' ? this.utils.minutes_to_hhmm(chargeDuration) : 'NA';
                        item.duration = chargeDuration;
                        item.consumewallet = (_b = parseFloat(item.consumewallet).toFixed(2)) !== null && _b !== void 0 ? _b : '-';
                        item.cgstvalue = parseFloat(item.cgstvalue).toFixed(2);
                        item.sgstvalue = parseFloat(item.sgstvalue).toFixed(2);
                    });
                    this.chargerHistory = res;
                }
                else {
                    this.showProgress = false;
                    this.isLoading = true;
                    this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.NO_CHARGER_DETAILS;
                }
            }, (err) => {
                this.showProgress = false;
                this.isLoading = true;
                this.statusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
            });
        });
        if (isRefresher) {
            event.target.complete();
        }
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils }
];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-history',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryPage);



/***/ }),

/***/ 30744:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/history/history.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"Transactions\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n></app-header>\n<ion-content content-color>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadChargeHistory(true,$event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n  <div history-parent-container *ngIf=\"!isLoading\">\n    <div history-details-container *ngFor=\"let history of chargerHistory\">\n      <!--Name and date-->\n      <div>\n      <div name-date-container>\n        <ion-label>{{history.deviceid}}</ion-label>\n        <ion-label>{{history.chargedate}}</ion-label>\n      </div>\n      <div device-label-container>\n      <ion-label deviceid-label>{{history.hostname}}</ion-label>\n      </div>\n      </div>\n\n      <!--Address-->\n      <div address-container>\n        <ion-label>{{history.hostaddress}}</ion-label>\n      </div>\n      <div address-container>\n        <ion-label>Rate: ₹ {{history.rph}}/KW</ion-label>\n      </div>\n      <!--Time-->\n      <div time-container>\n        <ion-label>Time: {{history.starttime}} - {{history.endtime}}</ion-label>\n      </div>\n\n      <div time-container>\n        <ion-label>Duration: {{history.duration}}</ion-label>\n      </div>\n      <div time-container>\n        <ion-label>Invoice ID : {{history.invoiceid}}</ion-label>\n      </div>\n\n      <div separator></div>\n\n      <div other-details-container>\n        <div detail-container>\n          <ion-label>{{history.chargevalue}}Kw</ion-label>\n          <ion-label>(consumed)</ion-label>\n        </div>\n        <div detail-container>\n          <ion-label>₹ {{history.cgstvalue}}</ion-label>\n          <ion-label>(CGST-{{history.cgst}}%)</ion-label>\n        </div>\n        <div detail-container>\n          <ion-label>₹ {{history.sgstvalue}}</ion-label>\n          <ion-label>(SGST-{{history.sgst}}%)</ion-label>\n        </div>\n        <div detail-container>\n          <ion-label>₹ {{history.consumewallet}}</ion-label>\n          <ion-label>(Spent)</ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 54091:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map