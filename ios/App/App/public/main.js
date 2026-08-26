(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ 35583);




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 22302)).then(m => m.PagesPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginAuthGuard]
    },
    {
        path: 'charge-start-stop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_charge-start-stop_charge-start-stop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charge-start-stop/charge-start-stop.module */ 79368)).then(m => m.ChargeStartStopPageModule)
    },
    {
        path: 'charge-glance',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_charge-glance_charge-glance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charge-glance/charge-glance.module */ 95066)).then(m => m.ChargeGlancePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 44404)).then(m => m.ProfilePageModule)
    },
    {
        path: 'host-details-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/imchargeman/host-details-tabs/host-details-tabs.module */ 85223)).then(m => m.HostDetailsTabsPageModule)
    },
    {
        path: 'host-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/imchargeman/host-details-tabs/host-history/host-history.module */ 61475)).then(m => m.HostHistoryPageModule)
    },
    {
        path: 'manual-charge-entry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_manual-charge-entry_manual-charge-entry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manual-charge-entry/manual-charge-entry.module */ 20752)).then(m => m.ManualChargeEntryPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_privacy-policy_privacy-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./privacy-policy/privacy-policy.module */ 99162)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'terms-and-conditions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_terms-and-conditions_terms-and-conditions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-conditions/terms-and-conditions.module */ 13433)).then(m => m.TermsAndConditionsPageModule)
    },
    // {
    //   path: 'modal',
    //   loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ 89270);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ 35609);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ 425);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 82225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/insomnia/ngx */ 30286);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/splash-screen */ 27567);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 54553);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 6381);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/chargeman-request.service */ 94273);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ 2960);


















let AppComponent = class AppComponent {
    constructor(authService, navController, platform, menuCtrl, utils, chargeReq, location, insomnia, router, screenOrientation, appVersion) {
        this.authService = authService;
        this.navController = navController;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.utils = utils;
        this.chargeReq = chargeReq;
        this.location = location;
        this.insomnia = insomnia;
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.appVersion = appVersion;
        this.platform.ready().then(() => {
            // Initialize the app immediately so navigation works without waiting for network/plugin version calls
            this.initializeApp();
            this.registerBackButton();
            this.insomnia.keepAwake();
            // Check app version asynchronously in the background
            this.checkAppVersion();
        });
    }
    registerBackButton() {
        this.platform.backButton.subscribeWithPriority(99, () => {
            this.menuCtrl.isOpen().then((res) => {
                if (res) {
                    this.menuCtrl.toggle();
                }
                else {
                    if (this.router.url === '/charge-glance' || this.router.url === '/charge-start-stop') {
                        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.SET_ROOT, 'pages');
                    }
                    // else if(this.routerOutlet && this.routerOutlet.canGoBack()) {
                    //   this.location.back();
                    // }
                    else {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.EXIT_DIALOG_WARNING, [_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.DIALOG_TEXT_NO, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.DIALOG_TEXT_YES]).then((res) => {
                            if (res === 2) {
                                _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.exitApp();
                            }
                        });
                    }
                }
            });
        });
    }
    checkAppVersion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let appversion = yield this.appVersion.getVersionNumber();
                this.chargeReq.getRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_5__.RELATIVE_URLS.GET_APP_VERSION).subscribe((res) => {
                    if (res && res.updatedversion) {
                        if (parseFloat(res.updatedversion) > parseFloat(appversion)) {
                            const platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Capacitor.getPlatform();
                            const platfromText = platform === 'android' ? _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.VERSION_TEXT_PLAYSTORE : platform === 'ios' ? _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.VERSION_TEXT_APPSTORE : '';
                            const buttonOkText = platform === 'android' ? _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.GO_TO_PLAYSTORE : platform === 'ios' ? _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.GO_TO_APPSTORE : '';
                            this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.APP_VERSION_UPDATE_TEXT + ' ' + platfromText, [buttonOkText, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                                if (res === 1) {
                                    if (platform === 'android') {
                                        this.utils.openWebSite('play.google.com/store/apps/details?id=com.chargeman.app', _constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.URL_TYPE_EXTERNAL);
                                    }
                                    else {
                                        this.utils.openWebSite('itms-apps://itunes.apple.com/app/', _constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.URL_TYPE_INTERNAL);
                                    }
                                }
                            });
                        }
                    }
                }, (err) => {
                    console.error("App version check request failed:", err);
                });
            }
            catch (e) {
                console.error("Failed to get local app version number:", e);
            }
        });
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_8__.SplashScreen.hide();
            }, 2000);
            this.screenOrientation.lock('portrait');
            // CapacitorGoogleMaps.initialize({
            //   key: environment.mapsKey
            // })
            // Environment.setEnv({
            //   // api key for server
            //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA_gSzPNC40ioDPHIb7kMkYFClDihdhhx4',
            //   // api key for local development
            //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA_gSzPNC40ioDPHIb7kMkYFClDihdhhx4'
            // });
            yield this.authService.authReady;
            // Directly check stored login flag to decide navigation
            const isLoggedIn = yield this.authService.isLoggedIn();
            if (isLoggedIn) {
                this.navController.navigateRoot(['/pages']).catch(err => {
                    console.error('Navigation to /pages failed: ' + err.message);
                });
            }
            else {
                this.navController.navigateRoot(['']).catch(err => {
                    console.error('Navigation to login failed: ' + err.message);
                });
            }
            // Also keep subscription for any future auth state changes
            this.authService.authState.subscribe(res => {
                // If auth state changes after app init, navigate accordingly
                if (res) {
                    this.navController.navigateRoot(['/pages']).catch(err => {
                        console.error('Auth state change navigation to /pages failed: ' + err.message);
                    });
                }
                else {
                    this.navController.navigateRoot(['']).catch(err => {
                        console.error('Auth state change navigation to login failed: ' + err.message);
                    });
                }
            });
            _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.addListener('networkStatusChange', status => {
                if (status.connected === false) {
                    // alert('Network disconnected');
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_5__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.NETWORK_ERR, [_constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                        if (res === 1) {
                            this.utils.openNativeSettings('network');
                        }
                    });
                }
                else if (status.connected === true) {
                    // alert('You are back in online');
                }
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.Authentication },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.MenuController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_11__.ChargemanRequestService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location },
    { type: _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_7__.Insomnia },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__.ScreenOrientation },
    { type: _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__.AppVersion }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRouterOutlet, { static: true },] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-root',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 95179);
/* harmony import */ var _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/dialogs/ngx */ 47778);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/launch-navigator/ngx */ 7271);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/insomnia/ngx */ 30286);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 76097);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 54553);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 6381);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _awesome_cordova_plugins_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/pdf-generator/ngx */ 79305);























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule.forRoot({
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mapsKey,
                libraries: ['places']
            })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy }, _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_2__.Diagnostic, _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_3__.OpenNativeSettings, _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__.Dialogs, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber, _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__.LaunchNavigator,
            _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner,
            _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_9__.Insomnia, _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__.EmailComposer, _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File, _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__.ScreenOrientation, _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__.AppVersion, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__.InAppBrowser, _awesome_cordova_plugins_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_15__.PDFGenerator],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 425:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGEX": () => (/* binding */ REGEX),
/* harmony export */   "DISPLAY_MESSAGES": () => (/* binding */ DISPLAY_MESSAGES),
/* harmony export */   "KEYS": () => (/* binding */ KEYS),
/* harmony export */   "CHARGE_STATUS_TYPES": () => (/* binding */ CHARGE_STATUS_TYPES),
/* harmony export */   "RELATIVE_URLS": () => (/* binding */ RELATIVE_URLS),
/* harmony export */   "DEMO_CRED": () => (/* binding */ DEMO_CRED),
/* harmony export */   "GRACIAS_DETAILS": () => (/* binding */ GRACIAS_DETAILS),
/* harmony export */   "TERMS_AND_CONDITIONS": () => (/* binding */ TERMS_AND_CONDITIONS),
/* harmony export */   "PRIVACY_POLICY_POINTS": () => (/* binding */ PRIVACY_POLICY_POINTS),
/* harmony export */   "DATEFORMAT_STRINGS": () => (/* binding */ DATEFORMAT_STRINGS),
/* harmony export */   "CHARGEMAN_DETAILS": () => (/* binding */ CHARGEMAN_DETAILS)
/* harmony export */ });
const REGEX = {
    MOB_NUM_REGEX: '[0-9]{10}',
    USER_NAME_REGEX: '[a-zA-Z ]{3,30}$',
    EMAIL_PATTERN: '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    CHAR_NUM_PATTERN: '^[a-zA-Z0-9-]*$',
    CHAR_NUM_PATTERN_SPACE: '^[ a-zA-Z0-9]*$',
    ADDRESS_REGEX_PATTERN: '^[ A-Za-z0-9.,: -]*$',
    AMOUNT_REGEX_PATTERN: '^([0-9]{1,5})+(\.[0-9]{1,2})?$',
    WALLET_AMOUNT_REGEX: '^([0-9]{1,4})?$',
    BANK_ACCOUNT_NUMBER_REGEX: '[0-9]{9,18}',
    IFSC_REGEX: '^[A-Z]{4}0[A-Z0-9]{6}$',
    ACCOUNT_NAME_REGEX: '^[a-zA-Z ]*$',
    BRANCH_NAME_REGEX: '^[a-zA-Z0-9._()/@, -]*$'
};
const DISPLAY_MESSAGES = {
    NO_MOBILE_NUM_ERR: 'Enter a mobile number to send OTP',
    NO_COUNTRY_CODE_ERR: 'Invalid country code selection',
    INVALID_MOBILE_NUMBER_ERR: 'Please enter a valid mobile number',
    INVALID_OTP_ERR: 'Invalid OTP. Please try again',
    VALID_OTP_TEXT: 'Your OTP is ',
    PROFILE_SAVED_SUCCESSFULLY: 'Profile details saved',
    PROFILE_DETAILS_UPDATED: 'Profile details updated',
    LOADING_MESSAGE: 'Processing your request',
    DISPLAY_PROCESS_ERR: 'Server error occured while processing your request. Please try again',
    CHARGER_ADD_TITLE: 'Add Station',
    CHARGER_EDIT_TITLE: 'Edit Station',
    CHARGER_EDIT_BUTTON_TEXT: 'Update Details',
    CHARGER_ADD_BUTTON_TEXT: 'Add Station',
    DASHBOARD_REQ_PROCESS_TEXT: 'Fetching user details',
    WALLET_REQ_PROCESS_ERR: 'Error while fetching wallet balance from servers',
    ALERT_LOCATION_ACCESS_ERR_TITLE: 'Enable Location',
    ALERT_LOCATION_ENABLE_ERR_MESSAGE: 'Location settings has been turned off. Please enable it to save your charge station details',
    ALERT_CAMERA_ENABLE_ERR_MESSAGE: 'Camera settings has been turned off. Please enable it to upload your kyc details',
    ALERT_LOCATION_PERMISSION_ERR_TITLE: 'Permission Warning!!',
    ALERT_LOCATION_PERMISSION_ERR_MESSAGE: 'Location access request denied. Please allow location permissions request manually in application settings',
    ALERT_LOCATION_PERMISSION_CHARGE_STATION_ERR: 'Chargeman requires to access location coordinates inorder to save charge station details. Please allow the location permission request to save details',
    ERR_DIALOG_TITLE: 'Error',
    ACCESS_LOCATION_ERR_MAPS_TITLE: 'Location access error',
    ACCESS_LOCATION_ERR_MAPS_TEXT: 'Unable to fetch nearby chargestation details due to location access permission denied',
    LOADING_MAPS_TEXT1: 'Loading nearby charge stations...',
    CHARGE_STATION_SAVE_ERR_TXT: 'Fail to save charge station details due to unable to get location coordinates',
    BUTTON_TEXT_OK: 'OK',
    BUTTON_TEXT_CANCEL: 'CANCEL',
    BUTTON_TEXT_OPEN_SETTINGS: 'OPEN SETTINGS',
    SUCCESS_DIALOG_TITLE: 'Success',
    CHARGER_ADD_SUCCESS: 'New charge station details saved successfully',
    CHARGER_ALREADY_EXISTS_1: 'Device ID ',
    CHARGER_ALREADY_EXISTS_2: 'already registered',
    DIALOG_TITLE_INFO: 'Info',
    NO_CHARGE_STATIONS_FOUND_1: 'No charge stations registered on ',
    NO_CHARGE_STATIONS_FOUND_2: 'number',
    CHARGE_STATION_LOADING_TEXT: 'Fetching details, Please wait...',
    CHARGE_STATION_ADD_REQ: 'Registering new station. Please wait...',
    CHARGE_STATION_UPDATE_REQ: 'Updating station details. Please wait...',
    CHARGE_STATION_UPDATE_SUC: 'Station details updated successfully',
    DATE_ERROR: 'Invalid dates selected. Please select dates again.',
    NEAREST_CHARGE_COUNT_ERR: 'Error occured while fetching nearest charge stations. Please try again',
    MAPS_ERR: 'No navigation app found to navigate to the charge station. Please install it and try again',
    CAMERA_ACCESS_ERR: 'Camera permissions denied to capture the image. Please enable it manually.',
    CHARGE_STATION_NOT_REGISTERED: 'Scanned charger was not registered in our records',
    CHARGE_STATION_BUSY: 'Scanned charger is busy. Try again later',
    SCAN_ERR: 'Scan error occured. Please try again scanning QR code',
    ENTER_VALID_AMT_ERR: 'Please enter valid amount',
    RAZR_PAY_DESC: 'Chargeman wallet recharge',
    RAZR_PAY_ERR: 'Payment error occured.',
    RAZR_PAY_SUCCESS: 'Payment success of Rs.',
    EXIT_DIALOG_WARNING: 'Do you want to exit from app ?',
    DIALOG_TEXT_YES: 'YES',
    DIALOG_TEXT_NO: 'NO',
    LOADING_GPS: 'Fetching GPS coordinates...',
    LOADING_TEXT_CHARGE_STATIONS: 'Loading your charge stations...',
    NETWORK_ERR: 'No internet connection found in the device Please connect to wifi or turn on mobile data to use the application',
    EMAIL_HEADER: 'Support request from  ',
    LOADING_HISTORY: 'Loading charger history details...',
    NO_CHARGER_DETAILS: 'No charge history found',
    NO_TRANSACTION_HIS_FOUND: 'No transaction history found',
    TRANSACTIONS_ERR: 'Srever error occured while getting transactions',
    CHARGER_DETAILS_HEADING: 'Station Details',
    CHARGER_DETAILS_HISTORY: 'Station History',
    CHARGER_HISTORY_NO_DETAILS: 'No previous records found for device ',
    CHARGER_HISTORY_1: 'Error occured while fetching ',
    CHARGER_HISTORY_2: 'history',
    LOADING_MESSAGE_2: 'Loading...',
    CHARGE_START_ALERT: 'Before continuing make sure your charger is connected and your wallet having sufficient funds',
    CHARGE_STOP_ALERT: 'Charging stopped successfully',
    BUTTON_TEXT_CONTINUE: 'Continue',
    WALLET_BALANCE_ERROR_1: 'Error occured while fetching wallet balance. Please try again',
    WALLET_BALANCE_ERROR_2: 'It seems your wallet doesn\'t having sufficient funds to start charge. Please recharge wallet and try again',
    WALLET_DIALOG_TEXT_NAVIGATE: 'Recharge',
    CHARGE_STOP_INFO: 'Do you want to stop charging ?',
    STOP_CHARGE_ERR: 'Server error occured while processing your request. Please try again',
    STOP_CHARGE_ERR_OCPP: 'Error occured while processing your stop request. Please try again',
    STOP_CHARGE_ERR_2: 'Fail to stop charging. Please try again',
    START_CHARGE_SUCCESS: 'Charge start success',
    START_CHARGE_ERR: 'Server error occured while processing your start charge request',
    ALREADY_CHARGING_DEVICE_TEXT: 'A device charging is in progress. Please wait to start charge in another device',
    WALLET_BALANCE_ERROR_3: 'It seems your wallet having insufficient funds. Please recharge your wallet and start charge process',
    STOP_CHARGE_BUTTON: 'Stop Charge',
    LOADING_CHARGE_DETAILS: 'Loading your charge summary. Please wait',
    LOADING_CHARGE_ERR: 'Server error occured while fetching your charge summary. Please try agian later',
    CHARGE_START_STOP_STATUS_PROCESSING: 'Processing...',
    CHARGE_START_STOP_STATUS_CHARGING: 'Charging...',
    CHARGE_START_STOP_STATUS_INSUFFICIENT: 'Insufficient wallet funds',
    CHARGE_START_STOP_STATUS_ERR: 'Error',
    CHARGE_START_STOP_STATUS_SUCCESS_STOP: 'Success',
    IFSC_LOADING_DETAILS: 'Loading bank details...',
    IFSC_ERR: 'Error while fetching bank details. please enter manually',
    WITHDRAW_EMAIL_SUB: 'Re: Chargeman wallet withdraw request from ',
    EMAIL_OPENER_ERR: 'Error while accessing email. No emails configured in your phone',
    EMAIL_OPENER_ERR_2: 'Internal error occured while accessing email. Please try again',
    EMAIL_ACCESS_ERR: 'Error occured while opening email application. Please try again',
    DIALOG_WITHDRAW_NO_BALANCE: 'It seems your wallet having 0 balance to withdraw funds',
    DEVICE_COMM_ERR: 'Unable to communicate with device. Please try again later',
    DEVICE_TIME_OUT_ERR: 'Timeout Error',
    DEVICE_TIME_OUT_ERR_TEXT: 'Looks like the server is taking to long to respond, this can be caused by either poor connectivity or an error with our servers. Please try again in a while',
    DEVICE_INTERRUPTION_ERR: 'Device has stopped responding or has been disconnected',
    ACTION_SHEET_KYC_TITLE: 'Open with',
    ACTION_SHEET_BUTTON_CAMERA: 'Camera',
    ACTION_SHEET_BUTTON_FILES: 'Storage',
    FILE_ACCESS_PERMISSION_ERR: 'Storage access permission denied. Please allow to select files',
    AADHAR_STATUS_TEXT: 'Capture Aadhar Card',
    PAN_STATUS_TEXT: 'Capture PAN Card',
    BALANCE_FETCH_ERR: 'Error occured while fetching wallet balance. Please try again',
    POSITION_FETCH_ERR: 'Error occured while fetching nearby charging stations. Please try again',
    UPLOAD_ERR: 'Upload Error occured. Try again',
    UPLOADING: 'Uploading...',
    FILE_UPLOAD_PROGRESS: 'File upload in progress. Please wait',
    PAYMENT_STORE_FAILURE: 'Due to server issue unable to save & update your last transaction amount in wallet. Please contact our support team',
    CONTACT_SUPPORT: 'Call Suppport',
    CONNECTION_ERR: 'Connection Error',
    DEVICE_DISC_ERR: 'Charge stopped due to charger disconnected from charging device',
    DEVICE_DURATION_LIMIT_REACHED: 'Charge stopped due to duration limit reached',
    NO_NEARRBY_STATIONS_FOUND: 'No nearby charge stations found',
    PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS: 'Unable to get nearby stations due to location access error',
    QR_SCANNER_HINT: 'Place your chargeman QR Code inside scan area',
    APP_VERSION_UPDATE_TEXT: 'New app version available in ',
    VERSION_TEXT_PLAYSTORE: 'Google Playstore',
    VERSION_TEXT_APPSTORE: 'App store',
    GO_TO_PLAYSTORE: 'Open playstore',
    GO_TO_APPSTORE: 'Open App store',
    LOADING_NEARBY: 'Loading nearby stations...',
    OTP_REQUESTING: 'Sending otp request...',
    OTP_VALIDATION_TEXT: 'Processing your request...',
    OTP_SENT_SUCCESS: 'Otp sent successfully',
    NO_CAM_HARDWARE_FOUND: 'Camera hardware not found.',
    FETCHING_REPORTS_1: 'Fetching ',
    FETCHING_REPORTS_2: 'report',
    HARDWARE_ERR: 'Error',
    NO_REPORTS_FOUND_1: 'No reports found for ',
    NO_REPORTS_FOUND_2: 'on selected frequency',
    LOADING_CHARGER_TYPE_DETAILS: "Loading charger types",
};
const KEYS = {
    IS_FIRST_TIME_USER: 'IS_FIRST_TIME_USER',
    IS_USER_LOGGED_IN: 'IS_USER_LOGGEDIN',
    USER_DETAILS: 'USER_DETAILS',
    USER_NAME: 'USER_NAME',
    MOBILE_NUMBER: 'MOBILE_NUMBER',
    NAV_FORWARD: 'FORWARD',
    NAV_BACKWARD: 'BACKWARD',
    SET_ROOT: 'ROOT',
    NAV_FORWARD_WITH_OPT: 'FORWARD_WITH_OPT',
    TYPE_EDIT_VAL: 'EDIT',
    TYPE_CREATE_VAL: 'CREATE',
    OPERATION_TYPE_EDIT: 'EDIT',
    OPERATION_TYPE_ADD: 'ADD',
    WALLET_BALANCE: 'WALLET_BALANCE',
    GEO_LOC_PERMISSION: 'GEO_LOCATION',
    DIALOG_TYPE_PROMPT: 'PROMPT',
    DIALOG_TYPE_ALERT: 'ALERT',
    STATUS_KEY_NOT_REQ: 'NR',
    STATUS_KEY_DENIED_ALW: 'DENIED_ALWAYS',
    STATUS_KEY_DENIED_ONCE: 'DENIED_ONCE',
    STATUS_KEY_GRANTED: 'GRANTED',
    STATUS_KEY_GRANTED_IN_USE: 'GRANTED_WHEN_USE',
    DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT: 'CHARGE_STATION_SUBMIT',
    DIALOG_TEXT_TYPE_LOAD: 'LOAD',
    CHARGER_ERR_STATUS_ALRDY_EXISTS: 'Name Already Exists',
    CHARGER_ADD_SUCCESS_STATUS: 'Success',
    NEARBY_CHARGE_STATIONS: 'NEAR_CHARGE_STATIONS',
    CAMERA_PERMISSION: 'CAMERA_ACCESS',
    UPDATE_WALLET_TYPE: 'WALLET_UPDATE',
    HOST_ID: 'CHARGER_ID',
    TRANSACTION_ID: 'TRANSACTION_ID',
    DEVICE_DETAILS: 'SELECTED_CHARGER_DETAILS',
    CLEAR_SUB: 'CLEAR_SUB',
    IS_CHARGING: 'IS_CHARGING',
    ACTION_SHEET_TYPE: 'KYC',
    CAMERA_NOT_FOUND: 'NO_CAMERA',
    CAMERA_ACCESS_ERR: 'CAMERA_ACCESS_ERROR',
    CAMERA_PERMISSION_SUCCESS: 'PERMISSION_OK',
    CAMERA_PERMISSION_ERR: 'PERMISSION_ERR',
    FILE_PERMISSION_SUCCESS: 'PERMISSION_OK',
    FILE_PERMISSION_ERR: 'PERMISSION_ERR',
    FILE_ACCESS_ERR: 'FILE_ACCESS_ERROR',
    UPLOAD_TYPE_AADHAR: 'aadhar',
    UPLOAD_TYPE_PAN: 'pancard',
    SEARCH_FILTER: 'SEARCH',
    CHARGE_STATUS: 'CHARGE_STATUS',
    CHARGE_REQ: 'REQUESTING',
    CHARGE_CHARGING: 'CHARGING',
    CHARGE_DONE: 'DONE',
    MAP_OPT: 'MAP_OPTIONS',
    LAST_TRANSACTION_TIME: 'LAST_TRANSACTION_TIME',
    SELECTED_DURATION: 'SELECTED_DURATION',
    REGISTERED_CHARGER_DETAILS: 'REGISTERED_STATIONS',
    REQUESTED_DURATION: 'REQUESTED_DURATION',
    URL_TYPE_EXTERNAL: 'EXTERNAL',
    URL_TYPE_INTERNAL: 'INTERNAL',
};
const CHARGE_STATUS_TYPES = {
    TIMEOUT_ERR: 'Timeout Error',
    INSUFF_FUNDS: 'Balance Error',
    DEVICE_ERR: 'Internal start error',
    STATUS_SUCCESS: 'Success',
    STATUS_SUCCESS_STOPPED: 'Stopped',
    STATUS_PROCESSING: 'Processing...',
    STATUS_TERMINATING: 'Terminating..'
};
const RELATIVE_URLS = {
    VALIDATE_OTP: 'validateOTP',
    GET_WALLET_BALANCE: 'getWalletBalance',
    GET_NEAR_CHARGE_STATIONS: 'getNearChargeStation',
    GET_SCANNED_QR_STATION_DETAILS: 'getChargeManByID',
    GET_CHARGER_TYPES: 'chargeTypes',
    GET_CHARGE_HISTORY: 'getUserChargeHistory',
    GET_TRANSACTIONS_HISTORY: 'getWalletHistory',
    GET_HOST_CHARGER_HISTORY: 'getHostChargeHistory',
    GET_CHARGEMAN: 'getChargeMan',
    START_CHARGE: 'startCharging',
    STOP_CHARGE: 'stopCharging',
    START_STOP_CHARGE_DEVICE: 'sendCommand',
    OCPP_START_CHARGE: 'remoteStartTransaction',
    OCPP_STOP_CHARGE: 'remoteStopTransaction',
    CHECK_CHARGE: 'goCharging',
    CHARGING_SUMMARY: 'chargingSummary',
    CHARGING_STATUS: 'getChargingStatus',
    UPLOAD_FILES: 'upload',
    APPEND_UPLOAD_URL: 'uploads/',
    INSERT_WALLET_HIS: 'insertWalletHistory',
    STOP_SELF_CHARGE: 'stopChargingBySelf',
    GET_APP_VERSION: 'getVersionUpdate',
    GET_REPORTS: 'getReportInfo',
    GET_CONNECTORS_BY_PARENT: 'getChargeManByParentID',
};
const DEMO_CRED = {
    mobileNumber: '9999999999',
    OTP: '1111'
};
const GRACIAS_DETAILS = {
    CONTACT_NUMBER: '+91-738-609-2691',
    EMAIL_ADDRESS: 'contact@evchargeman.com',
    WEBSITE: 'evchargeman.com',
    GRACIAS_WEBSITE: 'evgracias.com',
    CHARGERS_SUBPAGE_SITE: '/products/charging-stations/evcm-ac-and-dc-charging-stations'
};
const TERMS_AND_CONDITIONS = [
    'You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. ',
    'You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. ',
    'The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to EVChargeMan.',
    'EVChargeMan is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason.',
    'We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.',
    'The EVChargeMan app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the EVChargeMan app won’t work properly or at all.',
    'The app does use third-party services that declare their Terms and Conditions.',
    // 'Link to Terms and Conditions of third-party service providers used by the app',
    // 'Google Play Services',
    'You should be aware that there are certain things that EVChargeMan will not take responsibility for. ',
    'Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but EVChargeMan cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.',
    'If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. ',
    'In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. ',
    'If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.',
    'Along the same lines, EVChargeMan cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, EVChargeMan cannot accept responsibility.',
    'With respect to EVChargeMan’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. ',
    'EVChargeMan accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.',
    'At some point, we may wish to update the app. The app is currently available on Android – the requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. ',
    'EVChargeMan does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, ',
    'We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.',
    // 'Changes to This Terms and Conditions',
    'We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.',
    'These terms and conditions are effective as of 2022-02-26',
];
const PRIVACY_POLICY_POINTS = [
    'EVChargeMan built the EVChargeMan app as a Free app. This SERVICE is provided by EVChargeMan at no cost and is intended for use as is.',
    'If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.',
    'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at EVChargeMan unless otherwise defined in this Privacy Policy.',
    'Information Collection and Use',
    'For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy',
    'The app does use third-party services that may collect information used to identify you.',
    // Link to the privacy policy of third-party service providers used by the app
    // Google Play Services
    'We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.',
    'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory.',
    'This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.',
    'We may employ third-party companies and individuals due to the following reasons:',
    'To facilitate our Service;',
    'To provide the Service on our behalf;',
    'To perform Service-related services; or',
    'To assist us in analyzing how our Service is used.',
    'We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',
    'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',
    'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
    'These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.',
    'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.',
    'This policy is effective as of 2022-02-26',
];
const DATEFORMAT_STRINGS = {
    MINUTES: 'AS_MINUTES',
    HOURS: 'AS_HOURS'
};
const CHARGEMAN_DETAILS = {
    ADDRESS: '#1-62-/K/36, 1st Floor(Plot No.36),Kavuri Hills Rd,Hyderabad,Telangana 500033, www.evchargeman.com'
};


/***/ }),

/***/ 35583:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuthGuard": () => (/* binding */ LoginAuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 89270);




let LoginAuthGuard = class LoginAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Check persistent login flag directly
            const isLoggedIn = yield this.authService.isLoggedIn();
            if (!isLoggedIn) {
                this.router.navigate(['login']);
            }
            return isLoggedIn;
        });
    }
};
LoginAuthGuard.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_0__.Authentication },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], LoginAuthGuard);



/***/ }),

/***/ 89270:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authentication": () => (/* binding */ Authentication)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 61414);







let Authentication = class Authentication {
    constructor(platform, utils) {
        this.platform = platform;
        this.utils = utils;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.LOGIN_FLAG_KEY = 'IS_USER_LOGGEDIN';
        this.FLAG_FILE = 'login_flag.json';
        this.authReady = new Promise((resolve) => {
            this._resolveAuthReady = resolve;
        });
        this.platform.ready().then(() => {
            this.ifLoggedIn();
            this.platform.resume.subscribe(() => {
                this.ifLoggedIn();
            });
        });
    }
    writeStorageFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.IS_USER_LOGGED_IN, '1');
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    writeLocalFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                localStorage.setItem(this.LOGIN_FLAG_KEY, '1');
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    writeFileFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                    path: this.FLAG_FILE,
                    data: '1',
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                    encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Encoding.UTF8
                });
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    readStorageFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.IS_USER_LOGGED_IN);
                const v = response && response.value !== null && response.value !== undefined ? response.value : null;
                return v;
            }
            catch (e) {
                return null;
            }
        });
    }
    readLocalFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const v = localStorage.getItem(this.LOGIN_FLAG_KEY);
                return v;
            }
            catch (e) {
                return null;
            }
        });
    }
    readFileFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                    path: this.FLAG_FILE,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                    encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Encoding.UTF8
                });
                const v = result && result.data !== null && result.data !== undefined ? result.data : null;
                return v;
            }
            catch (e) {
                return null;
            }
        });
    }
    removeLocalFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                localStorage.removeItem(this.LOGIN_FLAG_KEY);
            }
            catch (e) {
            }
        });
    }
    removeFileFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.deleteFile({ path: this.FLAG_FILE, directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data });
            }
            catch (e) {
            }
        });
    }
    /**
     * Checks whether a persistent login flag exists.
     * The flag is mirrored in three independent stores so that the session
     * survives even if one storage mechanism is cleared or fails on a device:
     *   1. Capacitor Storage (native SharedPreferences on Android/iOS)
     *   2. localStorage (web fallback)
     *   3. A real file in the app data directory (Filesystem plugin)
     * If the flag is found in any store, it is re-synced to the others.
     */
    isLoggedIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const storageVal = yield this.readStorageFlag();
            const localVal = yield this.readLocalFlag();
            const fileVal = yield this.readFileFlag();
            const loggedIn = storageVal !== null || localVal !== null || fileVal !== null;
            if (loggedIn) {
                if (storageVal === null) {
                    yield this.writeStorageFlag();
                }
                if (localVal === null) {
                    yield this.writeLocalFlag();
                }
                if (fileVal === null) {
                    yield this.writeFileFlag();
                }
            }
            return loggedIn;
        });
    }
    setLoginFlag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Write to every store independently so a failure in one
            // cannot lose the session.
            yield this.writeStorageFlag();
            yield this.writeLocalFlag();
            yield this.writeFileFlag();
            this.authState.next(true);
        });
    }
    ifLoggedIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const loggedIn = yield this.isLoggedIn();
                if (this.authState.value !== loggedIn) {
                    this.authState.next(loggedIn);
                }
            }
            catch (e) {
                if (this.authState.value !== false) {
                    this.authState.next(false);
                }
            }
            this._resolveAuthReady();
        });
    }
    setLogout() {
        // Explicit user-initiated logout: wipe the persistent session.
        Promise.all([
            this.utils.removeStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.IS_USER_LOGGED_IN),
            this.removeLocalFlag(),
            this.removeFileFlag(),
        ]).then(() => {
            this.authState.next(false);
        }).catch((e) => {
            this.authState.next(false);
        });
    }
    isAuthenticated() {
        return this.authState.value;
    }
};
Authentication.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils }
];
Authentication = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({ providedIn: 'root' })
], Authentication);



/***/ }),

/***/ 94273:
/*!*******************************************************!*\
  !*** ./src/app/services/chargeman-request.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargemanRequestService": () => (/* binding */ ChargemanRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51590);
/* harmony import */ var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/http */ 47050);







let ChargemanRequestService = class ChargemanRequestService {
    constructor(http) {
        this.http = http;
    }
    getRequestDetails(subUrl) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL + subUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            let errorMessage;
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error ${error.error.message}`;
            }
            else {
                errorMessage = this.getServerErrorMessage(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
        }));
    }
    getBankDetails(subUrl) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.RAZR_PAY_IFSC_URL + subUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            let errorMessage;
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error ${error.error.message}`;
            }
            else {
                errorMessage = this.getServerErrorMessage(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
        }));
    }
    postRequestDetails(subUrl, body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL + subUrl, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            let errorMessage;
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error ${error.error.message}`;
            }
            else {
                errorMessage = this.getServerErrorMessage(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
        }));
    }
    postDeviceCommand(url, body) {
        return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            let errorMessage;
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error ${error.error.message}`;
            }
            else {
                errorMessage = this.getServerErrorMessage(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
        }));
    }
    getGooglePlaces(lat, lng, radius, type, apiKey, keyword = '', pageToken = '') {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
        const params = {
            location: `${lat},${lng}`,
            radius: radius.toString(),
            type: 'electric_vehicle_charging_station',
            key: apiKey
        };
        if (keyword) {
            params.keyword = keyword;
        }
        if (pageToken) {
            params.pagetoken = pageToken;
        }
        const queryString = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join('&');
        const fullUrl = `${url}?${queryString}`;
        console.log('Service calling Google Places Nearby Search:', fullUrl);
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            _capacitor_community_http__WEBPACK_IMPORTED_MODULE_1__.Http.get({
                url: fullUrl,
                headers: {},
                params: {}
            }).then((response) => {
                console.log('Service received response:', response.status, JSON.stringify(response.data).substring(0, 500));
                if (response.status === 200) {
                    observer.next(response.data);
                    observer.complete();
                }
                else {
                    observer.error(`HTTP Error: ${response.status}`);
                }
            }).catch((error) => {
                console.error('Service HTTP error:', error);
                observer.error(error);
            });
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    getServerErrorMessage(error) {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }
        }
    }
};
ChargemanRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
ChargemanRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ChargemanRequestService);



/***/ }),

/***/ 44516:
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 2233);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 95179);
/* harmony import */ var _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/dialogs/ngx */ 47778);
/* harmony import */ var _capacitor_community_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor-community/date-picker */ 25226);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/launch-navigator/ngx */ 7271);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/camera */ 53201);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/filesystem */ 61414);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);




















let Utils = class Utils {
    constructor(toastController, loaderCtrl, navCtrl, router, activatedRoute, diagnostic, dialog, openSettings, call, launchNavigator, actionSheet, filePlugin, inAppBrowser) {
        this.toastController = toastController;
        this.loaderCtrl = loaderCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.diagnostic = diagnostic;
        this.dialog = dialog;
        this.openSettings = openSettings;
        this.call = call;
        this.launchNavigator = launchNavigator;
        this.actionSheet = actionSheet;
        this.filePlugin = filePlugin;
        this.inAppBrowser = inAppBrowser;
        this.walletSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject('');
        this.timerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject('');
        this.FilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject;
        this.MapOptSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject('');
        this.walletObs = this.walletSubject.asObservable();
        this.timerObs = this.timerSubject.asObservable();
        this.filterObs = this.FilterSubject.asObservable();
        this.ChargeStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject('');
        this.chargeStatusObs = this.ChargeStatusSubject.asObservable();
        this.mapOptObs = this.MapOptSubject.asObservable();
        /**
         * To store the details in the internal storage using capacitor Storage plugin
         * @param KEY_NAME - Key name to store the value
         * @param VALUE - value to be stored
         */
        this.storeDetails = (KEY_NAME, VALUE) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: KEY_NAME, value: VALUE });
        });
        /**
         * To get the value of the requested key name from internal storage using capacitor Storage plugin
         * @param KEY_NAME - Key name to get the value
         * @returns value of the requested key
         */
        this.getStoredDetails = (KEY_NAME) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: KEY_NAME });
            return val;
        });
        /**
         * To remove the value from the internal storage
         * @param KEY_NAME - Key name to remove the stored value
         */
        this.removeStoredDetails = (KEY_NAME) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: KEY_NAME });
        });
    }
    /**
     * Displays toast message
     * @param toastMessage - Message displayed in the toast
     * @param buttons - buttons to be displayed in the toast which is an array of objects contains handlers too
     * @param duration - number which represents how many millisec the toast should be displayed
     * @returns a toast message
     */
    presentToast(toastMessage, buttons, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                duration: duration,
                buttons: buttons,
            });
            return yield toast.present();
        });
    }
    isFirstTimeUser(enterdMobileNumber) {
        return this.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.IS_FIRST_TIME_USER).then((res) => {
            if (res.value === null || res.value === "" || res.value !== enterdMobileNumber) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * To get the user details from the internal storage of the mobile
     * @returns JSON data contains user details like name, mobile, email other wise false
     */
    getStoredUserDetails() {
        const details = this.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.USER_DETAILS).then((res) => {
            if (res && res.value) {
                return JSON.parse(res.value);
            }
            else {
                return false;
            }
        });
        return details;
    }
    /**
     * To display loading alert while API or internal request processing
     * @param loadingMessage Message to display in the loading alert
     */
    showLoader(loadingMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loaderCtrl.create({
                cssClass: 'loading-custom-class',
                message: loadingMessage,
                backdropDismiss: false,
                keyboardClose: true
            });
            this.loaderCtrl.getTop();
            yield loading.present();
        });
    }
    /**
     * Dismissing loader
     */
    dismissLoader() {
        this.loaderCtrl.getTop();
        this.loaderCtrl.dismiss();
    }
    /**
     * To navigate from one page to another page with specific type and options
     *
     * @param type type of navigation Forward, Backward or ROOT
     * @param pageUrl page url to be navigated from current page
     * @param extras Data to be sent from one page to another page
     */
    navigateTo(type, pageUrl, extras) {
        switch (type) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.NAV_FORWARD:
                this.navCtrl.navigateForward(pageUrl);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.NAV_BACKWARD:
                this.navCtrl.navigateBack(pageUrl);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.SET_ROOT:
                this.navCtrl.navigateRoot(pageUrl);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.NAV_FORWARD_WITH_OPT:
                this.navCtrl.navigateForward(pageUrl, extras);
                break;
            default:
                this.navCtrl.navigateForward(pageUrl);
        }
    }
    /**
     * Gets the page related parameters
     * @returns object of page specific parameters
     */
    getPageParams() {
        var _a;
        return (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
    }
    ionViewWillLeave() {
        // console.log('View will leave called');
    }
    /**
     *
     * @param type Type of hardware to check eg: Bluetooth, GPS, Camera
     */
    checkStatus(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let status = false;
            if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.GEO_LOC_PERMISSION) {
                yield this.diagnostic.isLocationEnabled().then((res) => {
                    if (res) {
                        status = true;
                    }
                });
            }
            else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_PERMISSION) {
                status = yield this.diagnostic.isCameraPresent();
            }
            return status;
        });
    }
    checkLocationAuthorizationStatus() {
        return this.diagnostic.getLocationAuthorizationStatus().then((status) => {
            switch (status) {
                case this.diagnostic.permissionStatus.NOT_REQUESTED:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ;
                case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ALW;
                case this.diagnostic.permissionStatus.DENIED_ONCE:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ONCE;
                case this.diagnostic.permissionStatus.GRANTED:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED;
                case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED_IN_USE;
                default:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ;
            }
        });
    }
    requestLocationAccess() {
        return this.diagnostic.requestLocationAuthorization().then((status) => {
            switch (status) {
                case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                    return "DENIED_ALWAYS";
                    break;
                case this.diagnostic.permissionStatus.DENIED_ONCE:
                    return "DENIED_ONCE";
                    break;
                case this.diagnostic.permissionStatus.GRANTED:
                    return "GRANTED";
                    break;
                case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    return "GRANTED_IN_USE";
                    break;
            }
        });
    }
    requestCameraAccess() {
        return this.diagnostic.requestCameraAuthorization().then((status) => {
            switch (status) {
                case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                    return "DENIED_ALWAYS";
                    break;
                case this.diagnostic.permissionStatus.DENIED_ONCE:
                    return "DENIED_ONCE";
                    break;
                case this.diagnostic.permissionStatus.GRANTED:
                    return "GRANTED";
                    break;
                case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    return "GRANTED_IN_USE";
                    break;
            }
        });
    }
    checkCameraAuthorization() {
        return this.diagnostic.getCameraAuthorizationStatus().then((status) => {
            switch (status) {
                case this.diagnostic.permissionStatus.NOT_REQUESTED:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ;
                case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ALW;
                case this.diagnostic.permissionStatus.DENIED_ONCE:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ONCE;
                case this.diagnostic.permissionStatus.GRANTED:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED;
                case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED_IN_USE;
                default:
                    return _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ;
            }
        });
    }
    getCameraPermissions() {
        return this.checkStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_PERMISSION).then((res) => {
            if (res) {
                return this.checkCameraAuthorization().then((status) => {
                    if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED || status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED_IN_USE) {
                        return 'yes';
                    }
                    else if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ONCE || status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ) {
                        return this.requestCameraAccess().then((req_stat) => {
                            if (req_stat === 'GRANTED' || req_stat === 'GRANTED_IN_USE') {
                                return 'yes';
                            }
                            else {
                                this.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                                    if (res === 1) {
                                        this.openSettings.open('application_details');
                                    }
                                    return 'no';
                                });
                            }
                        });
                    }
                    else if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ALW) {
                        this.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                            if (res === 1) {
                                this.openSettings.open('application_details');
                            }
                            return 'no';
                        });
                    }
                });
            }
            else {
                return 'hardware not found';
            }
        });
    }
    getCoordinates(type) {
        let coords = { coords: '', status: '' };
        let dialogTitle = '';
        let dialogMessage = '';
        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TEXT_TYPE_LOAD) {
            dialogTitle = _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_TITLE;
            dialogMessage = _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_MESSAGE;
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT) {
            dialogTitle = _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_ERR_TITLE;
            dialogMessage = _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_PERMISSION_CHARGE_STATION_ERR;
        }
        return this.checkStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.GEO_LOC_PERMISSION).then((res) => {
            if (res) {
                return this.checkLocationAuthorizationStatus().then((status) => {
                    if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED || status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_GRANTED_IN_USE) {
                        return _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition().then((pos) => {
                            coords.coords = pos.coords;
                            coords.status = 'granted';
                            return coords;
                        });
                    }
                    else if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_DENIED_ONCE || status === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.STATUS_KEY_NOT_REQ) {
                        // coords.status = 'denied once & requesting';
                        return this.requestLocationAccess().then((req_stat) => {
                            if (req_stat === 'GRANTED' || req_stat === 'GRANTED_IN_USE') {
                                return _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition().then((pos) => {
                                    coords.coords = pos.coords;
                                    coords.status = 'granted';
                                    return coords;
                                });
                            }
                            else {
                                return this.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT, dialogTitle, dialogMessage, [_constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                                    if (res === 1) {
                                        this.openSettings.open('application_details');
                                    }
                                    return coords.status = "permission_err";
                                });
                            }
                        });
                    }
                    else {
                        // coords.status =  'Denied always';
                        return this.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT, dialogTitle, dialogMessage, [_constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                            if (res === 1) {
                                this.openSettings.open('application_details');
                            }
                            return coords.status = 'permission_err';
                        });
                    }
                });
            }
            else {
                return this.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.ALERT_LOCATION_ENABLE_ERR_MESSAGE, [_constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                    if (res === 1) {
                        this.openSettings.open('location');
                    }
                    return coords.status = 'location_disable_err';
                });
            }
        });
    }
    openNativeSettings(settingType) {
        this.openSettings.open(settingType);
    }
    displayDialog(type, title, message, buttons) {
        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.DIALOG_TYPE_PROMPT) {
            return this.dialog.confirm(message, title, buttons).then((res) => {
                return res;
            });
        }
        else {
            return this.dialog.alert(message, title, buttons).then((res) => {
                return res;
            });
        }
    }
    presentDateTimePicker(mode, is24Hour, format) {
        return _capacitor_community_date_picker__WEBPACK_IMPORTED_MODULE_7__.DatePicker.present({
            mode: mode,
            is24h: is24Hour,
            format: format
        }).then((date) => {
            if (date.value !== undefined) {
                return date.value;
            }
        });
    }
    validateTime(timeone, timetwo, format) {
        let time_one = moment__WEBPACK_IMPORTED_MODULE_8__(timeone, format);
        let time_two = moment__WEBPACK_IMPORTED_MODULE_8__(timetwo, format);
        if (time_one.isBefore(time_two)) {
            return true;
        }
        else {
            return false;
        }
    }
    convertDateTimeFormat(dateTime, existingFormat, desiredFormat) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime, existingFormat).format(desiredFormat);
    }
    callNumber(mobileNumber) {
        this.call.callNumber(mobileNumber, false);
    }
    launchMaps(lat, long) {
        const platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
        if (platform === 'android') {
            this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS).then((maps) => {
                if (maps) {
                    this.launchNavigator.navigate([lat, long], { app: this.launchNavigator.APP.GOOGLE_MAPS });
                }
                else {
                    this.openMapsUrl(lat, long);
                }
            }).catch(() => {
                this.openMapsUrl(lat, long);
            });
        }
        else if (platform === 'ios') {
            const appToCheck = this.launchNavigator.APP.APPLE_MAPS || this.launchNavigator.APP.GOOGLE_MAPS;
            this.launchNavigator.isAppAvailable(appToCheck).then((maps) => {
                if (maps) {
                    const app = this.launchNavigator.APP.APPLE_MAPS || this.launchNavigator.APP.GOOGLE_MAPS;
                    this.launchNavigator.navigate([lat, long], { app });
                }
                else {
                    this.openMapsUrl(lat, long);
                }
            }).catch(() => {
                this.openMapsUrl(lat, long);
            });
        }
        else {
            this.openMapsUrl(lat, long);
        }
    }
    openMapsUrl(lat, long) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
        window.open(url, '_blank');
    }
    updateValues(type, value) {
        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.UPDATE_WALLET_TYPE) {
            this.walletSubject.next(value);
            // this.walletSubject.complete();  
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CLEAR_SUB) {
            this.timerSubject.next(value);
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.SEARCH_FILTER) {
            this.FilterSubject.next(value);
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CHARGE_STATUS) {
            this.ChargeStatusSubject.next(value);
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.MAP_OPT) {
            this.MapOptSubject.next(value);
        }
    }
    unSubscribe(type) {
        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CHARGE_STATUS) {
            this.ChargeStatusSubject.complete();
        }
        else if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.MAP_OPT) {
            this.MapOptSubject.complete();
        }
    }
    openWebSite(url, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            // await Browser.open({url: 'https://'+url})
            let target = "_system";
            const browserOptions = {
                hardwareback: 'yes',
            };
            if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.URL_TYPE_EXTERNAL)
                this.inAppBrowser.create("https://" + url, target, browserOptions);
            else
                this.inAppBrowser.create(url, target, browserOptions);
        });
    }
    minutes_to_hhmm(numberOfMinutes) {
        //create duration object from moment.duration  
        var duration = moment__WEBPACK_IMPORTED_MODULE_8__.duration(numberOfMinutes, 'minutes');
        //calculate hours
        var hh = (duration.years() * (365 * 24)) + (duration.months() * (30 * 24)) + (duration.days() * 24) + (duration.hours());
        //get minutes
        var mm = duration.minutes();
        var sec = duration.seconds();
        //return total time in hh:mm format
        return hh + 'Hrs ' + mm + 'Min ' + sec + 'Sec';
    }
    getCurrentTimeStamp() {
        return moment__WEBPACK_IMPORTED_MODULE_8__().format();
    }
    getActionSheetMenu(headerTitle, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this._actionSheet = yield this.actionSheet.create({
                header: headerTitle,
                buttons: buttons
            });
            yield this._actionSheet.present();
            let { data } = yield this._actionSheet.onDidDismiss();
            return data;
        });
    }
    isCameraPermissionAvailable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let camera_values = { status: '' };
            const cameraAvailable = yield this.diagnostic.isCameraPresent();
            if (cameraAvailable) {
                const permissionAvailable = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.Camera.checkPermissions();
                if (permissionAvailable.camera === 'granted' && permissionAvailable.photos === 'granted') {
                    camera_values.status = _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_PERMISSION_SUCCESS;
                }
                else if ((permissionAvailable.camera === 'prompt' || permissionAvailable.camera === 'prompt-with-rationale' || permissionAvailable.camera === 'denied') ||
                    permissionAvailable.photos === 'prompt' || permissionAvailable.photos === 'prompt-with-rationale' || permissionAvailable.photos === 'denied') {
                    const permissionState = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.Camera.requestPermissions();
                    if (permissionState.camera === 'granted') {
                        camera_values.status = _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_PERMISSION_SUCCESS;
                    }
                    else {
                        camera_values.status = _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_PERMISSION_ERR;
                    }
                }
            }
            else {
                camera_values.status = _constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.CAMERA_NOT_FOUND;
            }
            return camera_values;
        });
    }
    getPhoto(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const source = type === 'camera' ? _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.CameraSource.Camera : _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.CameraSource.Photos;
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.CameraResultType.DataUrl,
                correctOrientation: true,
                source: source // Camera, Photos or Prompt!
            });
            // const imageStorage:any= await Filesystem.readFile({path: image.path});
            // const base64Image = 'data:image/jpeg;base64,'+imageStorage.data;
            const base64Image = image.dataUrl;
            let image_blob = this.getBlob(base64Image.split(',')[1], '.jpeg');
            let date = new Date(), time = date.getTime(), fileName = time + ".jpeg";
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_12__.Filesystem.writeFile({
                data: base64Image,
                path: fileName,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_12__.Directory.External
            });
            const finalPhotoUri = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_12__.Filesystem.getUri({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_12__.Directory.External,
                path: fileName
            });
            let photoPath = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.convertFileSrc(finalPhotoUri.uri);
            return { path: photoPath, blob: image_blob };
        });
    }
    getBlob(b64Data, contentType, sliceSize = 512) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    getDistance(lat1, lat2, lon1, lon2) {
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 = lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2), 2);
        let c = 2 * Math.asin(Math.sqrt(a));
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;
        // calculate the result
        return (c * r);
    }
    getNearestChargeStations(currentLat, currentLong, details, radius) {
        const currentLatitude = currentLat;
        const currentLongitude = currentLong;
        details.map((item) => {
            let chargerLatitude = parseFloat(item.latlong.split(',')[0]);
            let chargerLongitude = parseFloat(item.latlong.split(',')[1]);
            item.distance = this.getDistance(currentLatitude, chargerLatitude, currentLongitude, chargerLongitude).toFixed();
        });
        let nearChargePoints = details.filter((item) => {
            return parseFloat(item.distance) <= radius;
        });
        return nearChargePoints;
    }
    getDurationInHours(duration) {
        return moment__WEBPACK_IMPORTED_MODULE_8__.utc(moment__WEBPACK_IMPORTED_MODULE_8__.duration(duration, "minutes").asMilliseconds()).format("HH:mm:ss");
    }
    getFormattedTime(time) {
        let hours = parseInt(time.split(':')[0]);
        let min = parseInt(time.split(':')[1]);
        let sec = parseInt(time.split(':')[2]);
        let updatedhours = hours < 10 ? '0' + hours : hours;
        let updatedMin = min < 10 ? '0' + min : min;
        let updatedSec = sec < 10 ? '0' + sec : sec;
        let finalTime = updatedhours + ':' + updatedMin + ':' + updatedSec;
        return finalTime;
    }
    convertTimetoSeconds(value) {
        return moment__WEBPACK_IMPORTED_MODULE_8__.duration(value).asSeconds;
    }
    convertSecondsToTime(value) {
        let duration = moment__WEBPACK_IMPORTED_MODULE_8__.duration(value, 'seconds');
        return moment__WEBPACK_IMPORTED_MODULE_8__(duration).format('HH:mm:ss').toString();
    }
    getDifferenceDuration(end, start, endFormat, startFormat, returnFormat) {
        let _start = moment__WEBPACK_IMPORTED_MODULE_8__(start, startFormat);
        let _end = moment__WEBPACK_IMPORTED_MODULE_8__(end, endFormat);
        let duration = moment__WEBPACK_IMPORTED_MODULE_8__.duration(_end.diff(_start));
        let durationVal;
        switch (returnFormat) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__.DATEFORMAT_STRINGS.MINUTES:
                durationVal = duration.asMinutes();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__.DATEFORMAT_STRINGS.HOURS:
                durationVal = duration.asHours();
                break;
        }
        return durationVal;
    }
    getTodayDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    getCurrentDate(format) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format(format);
    }
};
Utils.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__.Diagnostic },
    { type: _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__.Dialogs },
    { type: _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_5__.OpenNativeSettings },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__.CallNumber },
    { type: _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_10__.LaunchNavigator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ActionSheetController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__.InAppBrowser }
];
Utils = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Injectable)({ providedIn: 'root' })
], Utils);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "SERVER_URL": () => (/* binding */ SERVER_URL),
/* harmony export */   "DEVICE_SOCKET_URL": () => (/* binding */ DEVICE_SOCKET_URL),
/* harmony export */   "DEVICE_SOCKET_OCPP_URL": () => (/* binding */ DEVICE_SOCKET_OCPP_URL),
/* harmony export */   "RAZR_PAY_IFSC_URL": () => (/* binding */ RAZR_PAY_IFSC_URL),
/* harmony export */   "SMS_URL": () => (/* binding */ SMS_URL)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mapsKey: 'AIzaSyDHEXL-Lz053W9F-3rkjulmcigkfd9GBcE',
    razorpay_key: 'rzp_live_JncRuMt5pzKhOn',
};
const SERVER_URL = 'http://server.evchargeman.com/cs_services/';
// export const SERVER_URL: string = 'https://evchargeman.com/cs_services/';
//export const DEVICE_SOCKET_URL: string = 'http://103.72.79.50:5679/';
const DEVICE_SOCKET_URL = 'http://server.evchargeman.com:5679/';
const DEVICE_SOCKET_OCPP_URL = 'http://server.evchargeman.com:5678/charging-station/';
const RAZR_PAY_IFSC_URL = 'https://ifsc.razorpay.com/';
const SMS_URL = 'https://49.50.67.32/smsapi/jsonapi.jsp';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		70171,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-ps": 99061,
	"./ar-ps.js": 99061,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku-kmr": 11609,
	"./ku-kmr.js": 11609,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map