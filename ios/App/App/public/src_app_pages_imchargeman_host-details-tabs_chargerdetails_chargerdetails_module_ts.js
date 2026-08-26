"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_imchargeman_host-details-tabs_chargerdetails_chargerdetails_module_ts"],{

/***/ 65683:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/host-details-tabs/chargerdetails/chargerdetails-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargerdetailsPageRoutingModule": () => (/* binding */ ChargerdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _chargerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chargerdetails.page */ 47667);




const routes = [
    {
        path: '',
        component: _chargerdetails_page__WEBPACK_IMPORTED_MODULE_0__.ChargerdetailsPage
    }
];
let ChargerdetailsPageRoutingModule = class ChargerdetailsPageRoutingModule {
};
ChargerdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChargerdetailsPageRoutingModule);



/***/ }),

/***/ 50198:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/host-details-tabs/chargerdetails/chargerdetails.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargerdetailsPageModule": () => (/* binding */ ChargerdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _chargerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chargerdetails-routing.module */ 65683);
/* harmony import */ var _chargerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chargerdetails.page */ 47667);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let ChargerdetailsPageModule = class ChargerdetailsPageModule {
};
ChargerdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chargerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargerdetailsPageRoutingModule
        ],
        declarations: [_chargerdetails_page__WEBPACK_IMPORTED_MODULE_1__.ChargerdetailsPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ChargerdetailsPageModule);



/***/ }),

/***/ 47667:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/host-details-tabs/chargerdetails/chargerdetails.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargerdetailsPage": () => (/* binding */ ChargerdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chargerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chargerdetails.page.html */ 52617);
/* harmony import */ var _chargerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chargerdetails.page.scss */ 72955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ 425);






let ChargerdetailsPage = class ChargerdetailsPage {
    constructor(utils) {
        this.utils = utils;
        this.redDotIcon = '../../../../assets/icon/red_dot.svg';
        this.greenDotIcon = '../../../../assets/icon/green_dot.svg';
        this.pageParams = '';
        this.chargerDetails = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.pageParams = this.utils.getPageParams().type;
            this.pageParams.startime = this.utils.convertDateTimeFormat(this.pageParams.startime, "HH:mm:ss", "hh:mm A");
            this.pageParams.endtime = this.utils.convertDateTimeFormat(this.pageParams.endtime, "HH:mm:ss", "hh:mm A");
            this.storedStations = yield (yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.REGISTERED_CHARGER_DETAILS)).value;
            this.storedStations = JSON.parse(this.storedStations);
            if (this.storedStations.length > 0) {
                this.chargerDetails = this.storedStations.find((station) => {
                    return station.deviceid === this.pageParams.deviceid;
                });
            }
        });
    }
    editClickHandler() {
        const navExtras = {
            state: {
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.TYPE_EDIT_VAL,
                chargerDetails: this.pageParams
            }
        };
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, '/pages/sidemenu/imchargeman/addchargerdetails', navExtras);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
ChargerdetailsPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.Utils }
];
ChargerdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chargerdetails',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chargerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chargerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChargerdetailsPage);



/***/ }),

/***/ 52617:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/imchargeman/host-details-tabs/chargerdetails/chargerdetails.page.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header details-header title=\"Station Details\"\nredirectTo=\"chargemen-list\"\niconPath=\"../../../../assets/icon/back_icon.svg\"\nsecondaryIconPath =\"../../../../assets/icon/edit_icon.svg\"\n(onSecondaryIconClick)=\"editClickHandler()\">\n</app-header>\n<ion-content content-color>\n  <div>\n    <img src=\"../../../../../assets/icon/bgcar.png\"/>\n\n    <div charge-station-details-parent>\n      <div station-details> \n          <div station-name>\n            <ion-label>{{chargerDetails.hostname}}</ion-label>\n            <ion-icon [src]=\"pageParams.chargeCount === '1' ? redDotIcon : greenDotIcon\"></ion-icon>\n          </div>\n          <ion-label station-price>₹ {{chargerDetails.rph}}/Unit</ion-label>\n      </div>\n     \n      <ion-label station-other-details>{{chargerDetails.deviceid}}</ion-label><br>\n      <ion-label station-other-details>Registered as {{chargerDetails.chargettype}} charger</ion-label><br>\n     \n      <ion-label station-other-details>{{chargerDetails.hostaddress}}</ion-label><br>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">Protocol</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.devicetype ?? \"NA\"}}</ion-label>\n      </div>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">Capacity</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.capacity}} KW</ion-label>\n      </div>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">Start Time</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.startime}}</ion-label>\n      </div>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">End Time</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.endtime}}</ion-label>\n      </div>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">Active</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.active === '1' ? 'Yes' : 'No'}}</ion-label>\n      </div>\n\n      <div station-start-end-details>\n        <ion-label station-heading-details position=\"stacked\">24/7 Available</ion-label><br>\n        <ion-label station-other-details>{{chargerDetails.fullday === '1' ? 'Yes' : 'No'}}</ion-label>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 72955:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/host-details-tabs/chargerdetails/chargerdetails.page.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  font-size: xx-large;\n}\n\n.content {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\nion-item {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZXJkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRiIsImZpbGUiOiJjaGFyZ2VyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbi5jb250ZW50e1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW9uLWl0ZW17XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_imchargeman_host-details-tabs_chargerdetails_chargerdetails_module_ts.js.map