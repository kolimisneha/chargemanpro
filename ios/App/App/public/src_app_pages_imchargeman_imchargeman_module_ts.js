"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_imchargeman_imchargeman_module_ts"],{

/***/ 42571:
/*!*****************************************************************!*\
  !*** ./src/app/pages/imchargeman/imchargeman-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImchargemanPageRoutingModule": () => (/* binding */ ImchargemanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _imchargeman_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imchargeman.page */ 25276);




const routes = [
    {
        path: '',
        component: _imchargeman_page__WEBPACK_IMPORTED_MODULE_0__.ImchargemanPage
    },
    {
        path: 'host-details-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./host-details-tabs/host-details-tabs.module */ 85223)).then(m => m.HostDetailsTabsPageModule)
    },
    {
        path: 'editchargerdetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_imchargeman_editchargerdetails_editchargerdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editchargerdetails/editchargerdetails.module */ 65240)).then(m => m.EditchargerdetailsPageModule)
    },
    {
        path: 'addchargerdetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_imchargeman_addchargerdetails_addchargerdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./addchargerdetails/addchargerdetails.module */ 28006)).then(m => m.AddchargerdetailsPageModule)
    },
    {
        path: 'chargingstationdetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_imchargeman_chargingstationdetails_chargingstationdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chargingstationdetails/chargingstationdetails.module */ 94012)).then(m => m.ChargingstationdetailsPageModule)
    },
    {
        path: 'chargingdetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_imchargeman_chargingdetails_chargingdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chargingdetails/chargingdetails.module */ 52234)).then(m => m.ChargingdetailsPageModule)
    }
];
let ImchargemanPageRoutingModule = class ImchargemanPageRoutingModule {
};
ImchargemanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImchargemanPageRoutingModule);



/***/ }),

/***/ 15928:
/*!*********************************************************!*\
  !*** ./src/app/pages/imchargeman/imchargeman.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImchargemanPageModule": () => (/* binding */ ImchargemanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _imchargeman_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imchargeman-routing.module */ 42571);
/* harmony import */ var _imchargeman_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imchargeman.page */ 25276);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);









let ImchargemanPageModule = class ImchargemanPageModule {
};
ImchargemanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _imchargeman_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImchargemanPageRoutingModule,
        ],
        declarations: [_imchargeman_page__WEBPACK_IMPORTED_MODULE_1__.ImchargemanPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ImchargemanPageModule);



/***/ }),

/***/ 25276:
/*!*******************************************************!*\
  !*** ./src/app/pages/imchargeman/imchargeman.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImchargemanPage": () => (/* binding */ ImchargemanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imchargeman_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./imchargeman.page.html */ 832);
/* harmony import */ var _imchargeman_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imchargeman.page.scss */ 5652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ 425);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);








let ImchargemanPage = class ImchargemanPage {
    constructor(navCtrl, utils, chargemenreq) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.chargemenreq = chargemenreq;
        this.redDotIcon = "../../assets/icon/red_dot.svg";
        this.greenDotIcon = "../../../assets/icon/green_dot.svg";
        this.addIcon = '../../../assets/icon/add_icon.svg';
        this.chargeStations = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.isLoading = true;
        this.showProgress = true;
        this.statusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.LOADING_TEXT_CHARGE_STATIONS;
        this.utils.getStoredUserDetails().then((res) => {
            const details = {
                "mobile": res.mobile,
            };
            this.chargemenreq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.GET_CHARGEMAN, details).subscribe((res) => {
                if (res.length > 0) {
                    this.isLoading = false;
                    this.chargeStations = res;
                }
                else {
                    this.isLoading = true;
                    this.showProgress = false;
                    this.statusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.NO_CHARGE_STATIONS_FOUND_1 + ' ' + details.mobile + ' ' + _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.NO_CHARGE_STATIONS_FOUND_2;
                }
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.REGISTERED_CHARGER_DETAILS, JSON.stringify(res));
            }, (err) => {
                this.isLoading = true;
                this.showProgress = false;
                this.statusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.REGISTERED_CHARGER_DETAILS, []);
            });
        });
    }
    openChargerRegistrationForm() {
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD, '/pages/sidemenu/imchargeman/addchargerdetails');
    }
    openChargemanDetails(stationDetails) {
        let navExtras = {
            state: {
                type: stationDetails
            }
        };
        this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.HOST_ID, stationDetails.deviceid);
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD_WITH_OPT, '/pages/sidemenu/imchargeman/host-details-tabs', navExtras);
    }
};
ImchargemanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService }
];
ImchargemanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-imchargeman',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imchargeman_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_imchargeman_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImchargemanPage);



/***/ }),

/***/ 832:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/imchargeman/imchargeman.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"My Stations\"\n  redirectTo=\"dashboard\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n  ionicIconName =\"add-circle\"\n  (onSecondaryIconClick) = \"openChargerRegistrationForm()\"\n></app-header>\n\n<ion-content content-color>\n  \n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n  <div *ngIf=\"!isLoading\">\n    <div (click)=\"openChargemanDetails(station)\" chargeman-details-container *ngFor=\"let station of chargeStations\">\n      <div image-container>\n        <div name-container>\n          <ion-label station-name>{{station.hostname}}</ion-label>\n          <ion-icon *ngIf=\"station.active === '1'\" [src]=\"station.chargeCount === '0' ? greenDotIcon : redDotIcon\"></ion-icon>\n        </div>\n        <ion-label device-id>{{station.deviceid}}</ion-label>\n        <div charge-active-container>\n          <ion-label charger-type>{{station.chargettype}}</ion-label>\n          <ion-label charger-type>{{station.active === '1' ? 'Active' : 'Disabled'}}</ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button chargeman-fab-button (click)=\"openChargerRegistrationForm()\">\n      <ion-icon [src]=\"addIcon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n</ion-content>\n");

/***/ }),

/***/ 5652:
/*!*********************************************************!*\
  !*** ./src/app/pages/imchargeman/imchargeman.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".background {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.397), rgba(0, 0, 0, 0.397)), url('bgcar.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\nion-icon {\n  font-size: 50px;\n  color: #8eba47;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltY2hhcmdlbWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFHQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRiIsImZpbGUiOiJpbWNoYXJnZW1hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjM5NyksIHJnYmEoMCwgMCwgMCwgMC4zOTcpKSwgIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb24vYmdjYXIucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuaW9uLWljb257XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IzhlYmE0N1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_imchargeman_imchargeman_module_ts.js.map