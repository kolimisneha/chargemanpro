"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 64205:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageRoutingModule": () => (/* binding */ PagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page */ 80624);




const routes = [
    {
        path: 'sidemenu',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_0__.PagesPage,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
            },
            {
                path: 'imchargeman',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_imchargeman_imchargeman_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./imchargeman/imchargeman.module */ 15928)).then(m => m.ImchargemanPageModule)
            },
            {
                path: 'kyc-details',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_kyc-details_kyc-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kyc-details/kyc-details.module */ 95553)).then(m => m.KycDetailsPageModule)
            },
            {
                path: 'wallet',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_wallet_wallet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/wallet.module */ 90106)).then(m => m.WalletPageModule)
            },
            {
                path: 'withdraw',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_withdraw_withdraw_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./withdraw/withdraw.module */ 17613)).then(m => m.WithdrawPageModule)
            },
            {
                path: 'history',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./history/history.module */ 15635)).then(m => m.HistoryPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.module */ 54928)).then(m => m.OrdersPageModule)
            },
            {
                path: 'blogs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blogs_blogs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blogs/blogs.module */ 53250)).then(m => m.BlogsPageModule)
            },
            {
                path: 'support',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 24034)).then(m => m.SupportPageModule)
            },
            {
                path: 'reports',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 62834)).then(m => m.ReportsPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: 'sidemenu/dashboard',
        pathMatch: 'full'
    },
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ 22302:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageModule": () => (/* binding */ PagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 64205);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page */ 80624);







let PagesPageModule = class PagesPageModule {
};
PagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesPageRoutingModule
        ],
        declarations: [_pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage]
    })
], PagesPageModule);



/***/ }),

/***/ 80624:
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPage": () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pages.page.html */ 74620);
/* harmony import */ var _pages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page.scss */ 28308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 89270);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 6381);









let PagesPage = class PagesPage {
    constructor(navCtrl, auth, navController, utils, appVersion) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navController = navController;
        this.utils = utils;
        this.appVersion = appVersion;
        this.userName = '';
        this.menuAvatarIcon = '../../assets/icon/menu_item_avatar.svg';
        this.profileIcon = '../../assets/icon/profile_short_icon.svg';
        this.logoutIcon = '../../assets/icon/logout.svg';
        this.menuItems = [
            {
                title: 'Business host',
                url: 'imchargeman',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            {
                title: 'KYC',
                url: 'kyc-details',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            {
                title: 'Wallet',
                url: 'wallet',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            {
                title: 'Withdraw',
                url: 'withdraw',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            {
                title: 'Charge Transactions',
                url: 'history',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            {
                title: 'Reports',
                url: 'reports',
                icon: '../../assets/icon/menu-arrow.svg'
            },
            // {
            //   title: 'Blogs',
            //   url: 'blogs',
            //   icon: '../../assets/icon/blogs.svg'
            // },
            {
                title: 'Support',
                url: 'support',
                icon: '../../assets/icon/support_mic.svg'
            }
        ];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.appVersionNumber = yield this.appVersion.getVersionNumber();
        });
    }
    ionViewDidEnter() {
        this.utils.getStoredUserDetails().then((res) => {
            if (res && res !== false) {
                const userDetails = res;
                this.userName = userDetails.name;
                if (parseInt(userDetails.chargeCount) > 0) {
                    this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.CHARGE_STATUS, true);
                }
                else {
                    this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.CHARGE_STATUS, false);
                }
            }
        });
    }
    routeTo(url) {
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.NAV_FORWARD, '/pages/sidemenu/' + url);
    }
    openProfile() {
        this.navCtrl.navigateForward(['/profile'], { state: { 'pageName': 'dashboard' } });
    }
    logout() {
        // this.utils.updateValues(constants.KEYS.CLEAR_SUB, true);
        this.auth.setLogout();
        this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.USER_DETAILS);
        this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.WALLET_BALANCE);
        this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.NEARBY_CHARGE_STATIONS);
        this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.IS_CHARGING);
        this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.DEVICE_DETAILS);
        this.utils.ChargeStatusSubject.next('');
        this.navController.navigateRoot(['']);
    }
};
PagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.Authentication },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__.Utils },
    { type: _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__.AppVersion }
];
PagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pages',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pages_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagesPage);



/***/ }),

/***/ 74620:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/pages.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content menu-content>\n        <ion-list id=\"inbox-list\" menu-list>\n          <ion-menu-toggle auto-hide=\"false\">\n            <div profile-container>\n              <img [src]=\"menuAvatarIcon\"/>\n\n              <div profile-name-container (click)=\"openProfile()\">\n                <ion-label>Profile</ion-label>\n                <ion-icon [src]=\"profileIcon\"></ion-icon>\n                <div>\n                <ion-label>{{userName}}</ion-label>\n              </div>\n              </div>\n            </div>\n           \n            <ion-item *ngFor=\"let item of menuItems\" lines=\"none\" (click)=\"routeTo(item.url)\">\n              <ion-label>{{item.title}}</ion-label>\n              <ion-icon [src]=\"item.icon\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <ion-item lines=\"none\" (click)=\"logout()\">\n              <ion-label>Logout</ion-label>\n              <ion-icon [src]=\"logoutIcon\" slot=\"end\"></ion-icon>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <div menu-footer-image-container>\n      <img src=\"../../assets/icon/menu_bottom_logo.svg\"/>\n    </div>\n    <div version-container>\n      <ion-label>V {{appVersionNumber}}</ion-label>\n    </div>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n");

/***/ }),

/***/ 28308:
/*!***************************************!*\
  !*** ./src/app/pages/pages.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map