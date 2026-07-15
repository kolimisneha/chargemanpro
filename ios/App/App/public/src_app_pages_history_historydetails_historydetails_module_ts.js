"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_historydetails_historydetails_module_ts"],{

/***/ 21930:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/history/historydetails/historydetails-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorydetailsPageRoutingModule": () => (/* binding */ HistorydetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _historydetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historydetails.page */ 63417);




const routes = [
    {
        path: '',
        component: _historydetails_page__WEBPACK_IMPORTED_MODULE_0__.HistorydetailsPage
    }
];
let HistorydetailsPageRoutingModule = class HistorydetailsPageRoutingModule {
};
HistorydetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistorydetailsPageRoutingModule);



/***/ }),

/***/ 41003:
/*!***********************************************************************!*\
  !*** ./src/app/pages/history/historydetails/historydetails.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorydetailsPageModule": () => (/* binding */ HistorydetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _historydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historydetails-routing.module */ 21930);
/* harmony import */ var _historydetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historydetails.page */ 63417);







let HistorydetailsPageModule = class HistorydetailsPageModule {
};
HistorydetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _historydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistorydetailsPageRoutingModule
        ],
        declarations: [_historydetails_page__WEBPACK_IMPORTED_MODULE_1__.HistorydetailsPage]
    })
], HistorydetailsPageModule);



/***/ }),

/***/ 63417:
/*!*********************************************************************!*\
  !*** ./src/app/pages/history/historydetails/historydetails.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorydetailsPage": () => (/* binding */ HistorydetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_historydetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./historydetails.page.html */ 93414);
/* harmony import */ var _historydetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historydetails.page.scss */ 55483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let HistorydetailsPage = class HistorydetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
HistorydetailsPage.ctorParameters = () => [];
HistorydetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-historydetails',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_historydetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_historydetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistorydetailsPage);



/***/ }),

/***/ 93414:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/history/historydetails/historydetails.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: 600;\">Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div style=\"font-size: larger;color:#8eba47;font-weight: 800;\">Cyber Port 1</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style=\"text-align:left;\">\n          <div style=\"font-size: small;color:gray;margin-top:5px\">Electric Vehicle Charging Station</div>\n          <div style=\"font-size: small;color:gray;margin-top:10px\">Kothuru, Andra Pradesh</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <div  style=\"text-align: center;\">\n            <img style=\"height:100px;width:100px;border-radius: 50px;\" src=\"https://x305.com/wp-content/uploads/2019/06/bmw-i8-av38-forged-wheels-alex-vega-auto-firm-1-320x202.jpg\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style=\"text-align:left;\">\n            <div style=\"font-size: x-small;color:gray;font-weight: 600;margin-top:10px\">Status</div>\n            <div style=\"font-size: large;color:rgb(0, 0, 0);font-weight: 600;margin-top:10px\">Success</div>\n            <div style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px\">Date : 23 Dec 2021</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: 2px solid gainsboro;\">\n      <ion-col >\n        <div style=\"text-align: center;\">\n        <div class=\"\"><ion-icon name=\"timer\"></ion-icon></div>\n        <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">00:01:00</div>\n        <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Time Elapsed</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div style=\"text-align: center;\">\n          <div class=\"\"><ion-icon name=\"flash\"></ion-icon></div>\n          <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">3.32 kwh</div>\n          <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Energy</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div style=\"text-align: center;\">\n          <div class=\"\"><ion-icon name=\"battery-charging\"></ion-icon></div>\n          <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">21kw</div>\n          <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Power</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">Start Time</div>\n      </ion-col>\n      <ion-col style=\"text-align: right;\">\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">11:55 AM</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">End Time</div>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">12:55 PM</div>\n      </ion-col>\n    </ion-row>\n    <ion-row  style=\"border-bottom: 2px solid gainsboro;\">\n      <ion-col>\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">Charging Fee</div>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);\">RS 33.0</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);font-weight: 600;\">Total</div>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);font-weight: 600;\">RS 33.0</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);font-weight: 600;\">Wallet Remaining</div>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <div style=\"font-size: x-small;color:rgb(0, 0, 0);font-weight: 600;\">RS 12.0</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 55483:
/*!***********************************************************************!*\
  !*** ./src/app/pages/history/historydetails/historydetails.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-col > div {\n  background-color: #ffffff;\n  padding: 10px;\n}\n\nion-icon {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnlkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Imhpc3RvcnlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_historydetails_historydetails_module_ts.js.map