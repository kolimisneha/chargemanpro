"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_imchargeman_chargingdetails_chargingdetails_module_ts"],{

/***/ 31887:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/chargingdetails/chargingdetails-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargingdetailsPageRoutingModule": () => (/* binding */ ChargingdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _chargingdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chargingdetails.page */ 7466);




const routes = [
    {
        path: '',
        component: _chargingdetails_page__WEBPACK_IMPORTED_MODULE_0__.ChargingdetailsPage
    }
];
let ChargingdetailsPageRoutingModule = class ChargingdetailsPageRoutingModule {
};
ChargingdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChargingdetailsPageRoutingModule);



/***/ }),

/***/ 52234:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/imchargeman/chargingdetails/chargingdetails.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargingdetailsPageModule": () => (/* binding */ ChargingdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _chargingdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chargingdetails-routing.module */ 31887);
/* harmony import */ var _chargingdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chargingdetails.page */ 7466);







let ChargingdetailsPageModule = class ChargingdetailsPageModule {
};
ChargingdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chargingdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargingdetailsPageRoutingModule
        ],
        declarations: [_chargingdetails_page__WEBPACK_IMPORTED_MODULE_1__.ChargingdetailsPage]
    })
], ChargingdetailsPageModule);



/***/ }),

/***/ 7466:
/*!***************************************************************************!*\
  !*** ./src/app/pages/imchargeman/chargingdetails/chargingdetails.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargingdetailsPage": () => (/* binding */ ChargingdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chargingdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chargingdetails.page.html */ 79065);
/* harmony import */ var _chargingdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chargingdetails.page.scss */ 70834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let ChargingdetailsPage = class ChargingdetailsPage {
    constructor(router) {
        this.router = router;
        this.start = true;
        this.stop = false;
    }
    ngOnInit() {
    }
    startcharging() {
        this.start = false;
        this.stop = true;
    }
};
ChargingdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ChargingdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chargingdetails',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chargingdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chargingdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChargingdetailsPage);



/***/ }),

/***/ 79065:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/imchargeman/chargingdetails/chargingdetails.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row >\n    <ion-col>\n    <ion-img src=\"https://www.constructionweekonline.in/cloud/2021/11/24/oI96oT6C-Story-2-104.jpg\"></ion-img>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"start\">\n    <ion-col>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div style=\"font-size: larger;color:#8eba47;font-weight: 800;\">Cyber Port 1</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div style=\"text-align:left;\">\n              <div style=\"font-size: small;color:gray;margin-top:5px\">Electric Vehicle Charging Station</div>\n              <div style=\"font-size: small;color:gray;margin-top:10px\">Kothuru, Andra Pradesh</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-bottom: 2px solid gainsboro;\">\n          <ion-col >\n            <div style=\"text-align: center;\">\n            <div class=\"\"><ion-icon  style=\"font-size: 25px;\" name=\"flash\"></ion-icon></div>\n            <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">Type 2</div>\n            <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Charger Type</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style=\"text-align: center;\">\n              <div class=\"\"><ion-icon  style=\"font-size: 25px;\" name=\"folder\"></ion-icon></div>\n              <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">RS.33/h</div>\n              <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Price</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style=\"text-align: center;\">\n              <div class=\"\"><ion-icon  style=\"font-size: 25px;\" name=\"battery-charging\"></ion-icon></div>\n              <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">21kw</div>\n              <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Power</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row><ion-col><div style=\"font-size: small;font-weight: 700;\">Slot Booking</div></ion-col></ion-row>\n        <ion-item>\n          <ion-label><div style=\"font-size: small;font-weight: 400;\">Select Start Time</div></ion-label>\n          <ion-select interface=\"popover\"  style=\"font-size: small;font-weight: 400;\">\n            <ion-select-option value=\"nes\">03:45 AM</ion-select-option>\n            <ion-select-option value=\"n64\">option 2</ion-select-option>\n            <ion-select-option value=\"ps\">option 3</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label><div style=\"font-size: small;font-weight: 400;\">Select End Time</div></ion-label>\n          <ion-select interface=\"popover\"  style=\"font-size: small;font-weight: 400;\">\n            <ion-select-option value=\"nes\">03:45 AM</ion-select-option>\n            <ion-select-option value=\"n64\">option 2</ion-select-option>\n            <ion-select-option value=\"ps\">option 3</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label><div style=\"font-size: small;font-weight: 400;\">Select Date</div></ion-label>\n          <input style=\"border:0;font-size: small;font-weight: 400;\" type=\"date\"><ion-icon name=\"calendar\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-label><div style=\"font-size: small;font-weight: 400;\">Set Duration (Minutes)</div></ion-label>\n          <ion-input style=\"border:0;font-size: small;font-weight: 400;text-align: right;\" type=\"number\"></ion-input>\n        </ion-item>\n        </ion-grid>\n        <div style=\"text-align: center;margin-top: 20px;\">\n          <ion-button style=\"width:300px;color:white;font-weight: 600;\" (click)=\"startcharging()\">Start Charging</ion-button>\n        </div>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"stop\">\n    <ion-col>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div  style=\"text-align: center;\">\n                <img style=\"height:100px;width:100px;border-radius: 50px;\" src=\"https://x305.com/wp-content/uploads/2019/06/bmw-i8-av38-forged-wheels-alex-vega-auto-firm-1-320x202.jpg\">\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <div style=\"text-align:left;\">\n                <div style=\"font-size: x-small;color:gray;font-weight: 600;margin-top:10px\">Status</div>\n                <div style=\"font-size: large;color:rgb(0, 0, 0);font-weight: 600;margin-top:10px\">Charging</div>\n                <div style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px\">5 min ago</div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-bottom: 2px solid gainsboro;\">\n          <ion-col >\n            <div style=\"text-align: center;\">\n            <div class=\"\"><ion-icon name=\"timer\" style=\"font-size: 25px;\"></ion-icon></div>\n            <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">00:01:00</div>\n            <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Time Elapsed</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style=\"text-align: center;\">\n              <div class=\"\"><ion-icon name=\"flash\" style=\"font-size: 25px;\"></ion-icon></div>\n              <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">3.32 kwh</div>\n              <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Energy</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style=\"text-align: center;\">\n              <div class=\"\"><ion-icon name=\"battery-charging\" style=\"font-size: 25px;\"></ion-icon></div>\n              <div class=\"\" style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">21kw</div>\n              <div class=\"\" style=\"font-size: xx-small;color:rgb(155, 155, 155);margin-top:10px\">Power</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col><div class=\"\"  style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;\">Charging Fee</div></ion-col>\n          <ion-col><div class=\"\"  style=\"font-size: x-small;color:rgb(0, 0, 0);margin-top:10px;font-weight: 600;text-align: right;\">Rs.33.0</div></ion-col>\n        </ion-row>\n        </ion-grid>\n        <div style=\"text-align: center;margin-top: 30px;\">\n          <ion-button color=\"danger\" style=\"width:300px;color:white;font-weight: 600;\" routerLink=\"../../history/historydetails\">Stop Charging</ion-button>\n        </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 70834:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/imchargeman/chargingdetails/chargingdetails.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "ion-col > div {\n  background-color: #ffffff;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnaW5nZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJjaGFyZ2luZ2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_imchargeman_chargingdetails_chargingdetails_module_ts.js.map