"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 85257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 43278);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_maptab_maptab_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../maptab/maptab.module */ 5443)).then(m => m.MaptabPageModule)
            },
            {
                path: 'history',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/history/history.module */ 15635)).then(m => m.HistoryPageModule)
            },
            {
                path: 'support',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/support/support.module */ 24034)).then(m => m.SupportPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/map',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 85257);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 43278);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 43278:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 68758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _manual_charge_entry_manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manual-charge-entry/manual-charge-entry.page */ 30628);












let TabsPage = class TabsPage {
    constructor(router, modalCtrl, barcodeScanner, utils, chargemanReq) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.barcodeScanner = barcodeScanner;
        this.utils = utils;
        this.chargemanReq = chargemanReq;
        this.searchEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.enableSearch = false;
        this.searchIcon = "../../assets/icon/search_icon.svg";
        this.appIconSrc = "../../assets/icon/menu_icon.svg";
        this.cartIconSrc = "../../assets/icon/cart.svg";
        this.chargeEnergy = '../../assets/icon/charging_energy.svg';
        this.qr_scanner = '../../assets/icon/qr_scanner.svg';
        this.showCharger = false;
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetails = yield this.utils.getStoredUserDetails();
            this.utils.chargeStatusObs.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                let status = yield this.utils.getStoredUserDetails();
                let chargeCount = (_a = status.chargeCount) !== null && _a !== void 0 ? _a : '0';
                chargeCount === '0' ? this.showCharger = false : this.showCharger = true;
            }));
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    openScanner() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetails = yield this.utils.getStoredUserDetails();
            if (parseInt(this.userDetails.chargeCount) > 0) {
                let rph = (_a = yield (yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DEVICE_DETAILS)).value) !== null && _a !== void 0 ? _a : this.userDetails.rph;
                this.userDetails.rph = (_b = JSON.parse(rph).rph) !== null && _b !== void 0 ? _b : rph;
                // let chargeDurationTimer = await (await this.utils.getStoredDetails(KEYS.LAST_TRANSACTION_TIME)).value;
                // this.userDetails.transactionTimer = this.utils.convertSecondsToTime(chargeDurationTimer);
                this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 4000);
                const extras = {
                    state: {
                        charge_details: this.userDetails
                    }
                };
                this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', extras);
            }
            else {
                //     let cd = {
                //       "mobile": "7893670519",
                //       "deviceid": "123456",
                //       "hostname": "EVCM",
                //       "hostaddress": "Madhapuroffice",
                //       "latlong": "17.4429074,78.3967687",
                //       "chargettype": "commercial",
                //       "rph": "25",
                //       "startime": "09:00:00",
                //       "endtime": "12:28:00",
                //       "active": "1",
                //       "capacity": "3.3",
                //       "createdby": "Ramesh",
                //       "createddate": "2022-02-04 23:58:15",
                //       "modifiedby": null,
                //       "modifieddate": null,
                //       "fullday": "0",
                //       "chargeStatus": 'Available',
                //       "self": false,
                //       "chargeCount": 0
                //           }
                //   const extras:NavigationExtras = {
                //     state: {
                //       // charge_details: res[0],
                //        charge_details: cd
                //   }
                // }
                //   if(cd.chargeStatus.toLowerCase() === 'available') {
                //   this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT,'/charge-start-stop', extras)
                //   } else {
                //     console.log('Charge station busy');
                //   }
                const barcodeOptions = {
                    formats: 'QR_CODE',
                    disableSuccessBeep: true,
                    prompt: _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.QR_SCANNER_HINT,
                };
                this.barcodeScanner.scan(barcodeOptions).then((scanData) => {
                    if (scanData.cancelled == false) {
                        this.validateDeviceId(scanData.text);
                    }
                }).catch((err) => {
                    if (err === 'Illegal access') {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                            if (res === 1) {
                                this.utils.openNativeSettings('application_details');
                            }
                        });
                    }
                    else {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.SCAN_ERR, [_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    }
                });
            }
        });
    }
    onTabChange(event) {
        if (this.tabs.getSelected() === 'map') {
            this.enableSearch = true;
        }
        else {
            this.enableSearch = false;
        }
    }
    openShop() {
        this.utils.openWebSite('evchargeman.com', _constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.URL_TYPE_EXTERNAL);
    }
    validateDeviceId(deviceId) {
        const barcode_details = {
            "deviceid": deviceId
        };
        this.chargemanReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.RELATIVE_URLS.GET_SCANNED_QR_STATION_DETAILS, barcode_details).subscribe((res) => {
            if (res.length > 0) {
                res[0].mobile === this.userDetails.mobile ? res[0].self = true : res[0].self = false;
                if (res[0].chargeStatus.toLowerCase() === 'available') {
                    const extras = {
                        state: {
                            charge_details: res[0]
                        }
                    };
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DEVICE_DETAILS, JSON.stringify(res[0]));
                    this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', extras);
                }
                else {
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.CHARGE_STATION_BUSY, [_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
                }
            }
            else {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.CHARGE_STATION_NOT_REGISTERED, [_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
            }
        }, (err) => {
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000);
        });
    }
    openManualEntrySheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetails = yield this.utils.getStoredUserDetails();
            if (parseInt(this.userDetails.chargeCount) > 0) {
                this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 3000);
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: _manual_charge_entry_manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_6__.ManualChargeEntryPage,
                    breakpoints: [0, 0.5, 1],
                    initialBreakpoint: 0.5,
                    presentingElement: yield this.modalCtrl.getTop()
                });
                yield modal.present();
                const { data } = (yield modal.onWillDismiss());
                if (data !== undefined) {
                    this.validateDeviceId(data.id);
                }
            }
        });
    }
    filterItems(event) {
        event.target.value.length > 0 ? this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.SEARCH_FILTER, event.target.value) : '';
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__.Utils },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__.ChargemanRequestService }
];
TabsPage.propDecorators = {
    toolBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['toolbar',] }],
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['tabs',] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tabs',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar id=\"toolbar\" chargemen-toolbar-style>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <ion-icon sidemenuIcon [src]=\"appIconSrc\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-searchbar (ionChange)=\"filterItems($event)\" [search-icon]=\"\" searchbar-style *ngIf=\"enableSearch\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <div chargemen-button-container>\n        <!-- <ion-icon [src]=\"cartIconSrc\"></ion-icon> -->\n        <img (click)=\"openManualEntrySheet()\" icon-hand src=\"../../assets/icon/manual_entry.png\"/>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-tabs #tabs class=\"home-tabs\" (ionTabsWillChange)=\"onTabChange($event)\">\n  <ion-tab-bar home-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"map\" home-tab-buttons>\n      <ion-icon home-tab-icon src=\"../../assets/icon/tab-home.svg\"></ion-icon>\n      <ion-label home-tab-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"history\" home-tab-buttons>\n      <ion-icon home-tab-icon src=\"../../assets/icon/history.svg\"></ion-icon>\n      <ion-label home-tab-label>History</ion-label>\n    </ion-tab-button>\n\n    <div tab-spacer></div>\n\n    <ion-tab-button tab=\"support\" home-tab-buttons>\n      <ion-icon home-tab-icon src=\"../../assets/icon/support.svg\"></ion-icon>\n      <ion-label home-tab-label>Support</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button home-tab-buttons (click)=\"openShop()\">\n      <ion-icon home-tab-icon src=\"../../assets/icon/shop.svg\"></ion-icon>\n      <ion-label home-tab-label>Shop</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n<ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button home-fab-button (click)=\"openScanner()\">\n    <!-- <ion-icon class=\"qr-style\" src=\"../../assets/icon/qr_scanner.svg\"></ion-icon> -->\n    <ion-icon [ngClass]=\"!showCharger ? 'qr-style' : 'charger-style'\" [src]=\"!showCharger ?  qr_scanner : chargeEnergy\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n");

/***/ }),

/***/ 68758:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#basket {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jhc2tldHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map