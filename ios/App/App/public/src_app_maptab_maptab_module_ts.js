(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_maptab_maptab_module_ts"],{

/***/ 16049:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/capacitor-googlemaps-native/dist/esm/definitions.js ***!
  \***********************************************************************************************/
/***/ (() => {



/***/ }),

/***/ 24810:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/capacitor-googlemaps-native/dist/esm/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 16049);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_definitions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _definitions__WEBPACK_IMPORTED_MODULE_1__) if(["default","CapacitorGoogleMaps"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _definitions__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("CapacitorGoogleMaps", {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_capacitor-googlemaps-native_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 78888)).then((m) => new m.CapacitorGoogleMapsWeb()),
});




/***/ }),

/***/ 9820:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 22117:
/*!*************************************************!*\
  !*** ./src/app/maptab/maptab-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaptabPageRoutingModule": () => (/* binding */ MaptabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _maptab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maptab.page */ 80133);




const routes = [
    {
        path: '',
        component: _maptab_page__WEBPACK_IMPORTED_MODULE_0__.MaptabPage
    }
];
let MaptabPageRoutingModule = class MaptabPageRoutingModule {
};
MaptabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaptabPageRoutingModule);



/***/ }),

/***/ 5443:
/*!*****************************************!*\
  !*** ./src/app/maptab/maptab.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaptabPageModule": () => (/* binding */ MaptabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _maptab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maptab-routing.module */ 22117);
/* harmony import */ var _maptab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maptab.page */ 80133);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);









let MaptabPageModule = class MaptabPageModule {
};
MaptabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _maptab_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaptabPageRoutingModule,
        ],
        declarations: [_maptab_page__WEBPACK_IMPORTED_MODULE_1__.MaptabPage, _agm_core__WEBPACK_IMPORTED_MODULE_8__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_8__.AgmMarker, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], MaptabPageModule);



/***/ }),

/***/ 80133:
/*!***************************************!*\
  !*** ./src/app/maptab/maptab.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaptabPage": () => (/* binding */ MaptabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_maptab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./maptab.page.html */ 2299);
/* harmony import */ var _maptab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maptab.page.scss */ 95264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/capacitor-googlemaps-native */ 24810);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/launch-navigator/ngx */ 7271);
/* harmony import */ var src_components_charger_details_charger_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/charger-details/charger-details.component */ 99434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 18260);















let MaptabPage = class MaptabPage {
    constructor(utils, chargemanReq, launchNavigator, modalCtrl, ngZone) {
        this.utils = utils;
        this.chargemanReq = chargemanReq;
        this.launchNavigator = launchNavigator;
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        this.title = 'My first AGM project';
        this.lat = 0;
        this.lng = 0;
        this.charger_locations = [];
        this.location_details = [];
        this.charger_details = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            spaceBetween: 0
        };
        this.redDotIcon = "../../assets/icon/red_dot.svg";
        this.greenDotIcon = "../../assets/icon/green_dot.svg";
        this.callIcon = "../../assets/icon/call_icon.svg";
        this.markerUrl = "../../assets/icon/maps_marker.svg";
        this.busyMarker = "../../assets/icon/map_busy_icon.png";
        this.availableMarker = '../../assets/icon/map_available_icon.png';
        this.disabledMarker = '../../assets/icon/map_disabled_icon.png';
        this.googleMarker = '../../assets/icon/map_google_marker.svg';
        // Wallet properties
        this.walletBalance = '0';
        this.walletIconSrc = '../../assets/icon/wallet.svg';
        this.isChargingActive = false;
        this.mapStyles = [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.business',
                elementType: 'all',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.medical',
                elementType: 'all',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.place_of_worship',
                elementType: 'all',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{ visibility: 'simplified' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#d4e8f0' }]
            }
        ];
        this.isLoading = true;
        this.showProgress = true;
        this.statusText = '';
        this.isMapDataLoaded = false;
        this.recenterMap = (lat, lng) => {
            this.mapview.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
        };
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl();
    }
    addMarkersToMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            for (const place of this.charger_locations) {
                yield _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarker({
                    latitude: parseFloat(place.latitude),
                    longitude: parseFloat(place.longitude),
                    title: place.hostname,
                    snippet: place.hostaddress
                });
            }
        });
    }
    ionViewDidEnter() {
        // Update charging status on every entry (matching hometab logic)
        this.utils.getStoredUserDetails().then((details) => {
            var _a;
            const chargeCount = String((_a = details === null || details === void 0 ? void 0 : details.chargeCount) !== null && _a !== void 0 ? _a : '0');
            this.isChargingActive = chargeCount !== '0';
        });
        this.utils.chargeStatusObs.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var _a;
            const details = yield this.utils.getStoredUserDetails();
            const chargeCount = String((_a = details === null || details === void 0 ? void 0 : details.chargeCount) !== null && _a !== void 0 ? _a : '0');
            this.isChargingActive = chargeCount !== '0' || res === true;
        }));
        // Fetch wallet balance from API
        this.utils.getStoredUserDetails().then((details) => {
            if (!details) {
                this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.WALLET_BALANCE).then((res) => {
                    const balance = parseFloat(res === null || res === void 0 ? void 0 : res.value);
                    this.walletBalance = isNaN(balance) ? '0' : balance.toFixed(2);
                });
                return;
            }
            const walletBody = { "mobile": details.mobile };
            this.chargemanReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.RELATIVE_URLS.GET_WALLET_BALANCE, walletBody).subscribe((res) => {
                var _a;
                this.walletBalance = (_a = parseFloat(res.balance).toFixed(2)) !== null && _a !== void 0 ? _a : '0';
                this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.UPDATE_WALLET_TYPE, this.walletBalance);
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.WALLET_BALANCE, this.walletBalance);
            }, (err) => {
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.WALLET_BALANCE, '0');
            });
        });
        if (!this.walletSubscription) {
            this.walletSubscription = this.utils.walletObs.subscribe((sub) => {
                if (sub === '') {
                    this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.WALLET_BALANCE).then((res) => {
                        const balance = parseFloat(res === null || res === void 0 ? void 0 : res.value);
                        this.walletBalance = isNaN(balance) ? '0' : balance.toFixed(2);
                    });
                }
                else {
                    this.walletBalance = sub;
                }
            });
        }
        if (this.isMapDataLoaded) {
            return;
        }
        this.isMapDataLoaded = true;
        this.zoomRadius = 13.8;
        this.mapRadius = 30;
        this.mapObservable = this.utils.mapOptObs.subscribe((res) => {
            if (res.type === 'widget') {
                this.zoomRadius = res.zoom;
                this.mapRadius = res.radius;
            }
            else {
                this.zoomRadius = 13.8;
                this.mapRadius = 30;
            }
        });
        this.statusText = _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.LOADING_MAPS_TEXT1;
        this.isLoading = true;
        this.showProgress = true;
        this.showCurrentPosition().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('=== MAP LOAD STARTED ===');
            console.log('Current position:', this.lat, this.lng);
            if (this.lat === 0 || this.lng === 0) {
                this.isLoading = false;
                this.statusText = '';
                this.showProgress = false;
                const dialog = yield this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS, [_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
                if (dialog === 1)
                    this.utils.openNativeSettings('location');
                return;
            }
            // Load Google EV stations
            this.loadGoogleEVStations();
            this.chargemanReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.RELATIVE_URLS.GET_NEAR_CHARGE_STATIONS, {}).subscribe((res) => {
                console.log('Backend response:', res === null || res === void 0 ? void 0 : res.length, 'stations');
                if (res && res.length > 0) {
                    const currentPosLat = parseFloat(this.lat);
                    const currentPosLng = parseFloat(this.lng);
                    let nearChargerLocationDetails = this.utils.getNearestChargeStations(currentPosLat, currentPosLng, res, this.mapRadius);
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NEARBY_CHARGE_STATIONS, JSON.stringify(res));
                    if (nearChargerLocationDetails.length > 0) {
                        this.location_details = nearChargerLocationDetails;
                        for (const val of nearChargerLocationDetails) {
                            const isDuplicate = this.charger_locations.some((loc) => {
                                const existingLat = parseFloat(loc.latitude);
                                const existingLng = parseFloat(loc.longitude);
                                const newLat = parseFloat(val.latlong.split(',')[0].trim());
                                const newLng = parseFloat(val.latlong.split(',')[1].trim());
                                return Math.abs(existingLat - newLat) < 0.0001 && Math.abs(existingLng - newLng) < 0.0001;
                            });
                            if (isDuplicate)
                                continue;
                            let lat = val.latlong.split(',')[0].trim();
                            let long = val.latlong.split(',')[1].trim();
                            let chargerStatus;
                            if (val.active === '0') {
                                chargerStatus = 'disabled';
                            }
                            else {
                                chargerStatus = val.chargeCount === '1' ? 'inuse' : 'available';
                            }
                            this.charger_locations.push({
                                "status": chargerStatus,
                                "hostaddress": val.hostaddress,
                                "hostname": val.hostname,
                                "latitude": lat,
                                "longitude": long,
                                "animation": false,
                                "source": "backend"
                            });
                        }
                    }
                }
            }, (err) => {
                console.error('Backend stations fetch error:', err);
            });
        }));
    }
    loadGoogleEVStations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.mapsKey;
            const radiusMeters = Math.min(this.mapRadius * 1000, 50000);
            const searchKeywords = [
                'electric vehicle charging',
                'EV charging station',
                'car charger',
                'Tata Power',
                'Jio-bp',
                'Tesla',
                'charge point'
            ];
            console.log('=== GOOGLE PLACES API CALL ===');
            console.log('Location:', this.lat, this.lng);
            console.log('Radius (meters):', radiusMeters);
            this.loadGooglePlacesWithKeywords(apiKey, radiusMeters, searchKeywords);
        });
    }
    loadGooglePlacesWithKeywords(apiKey, radiusMeters, keywords) {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let allResults = [];
            let totalPagesLoaded = 0;
            const maxPagesPerKeyword = 3;
            const processResults = (data) => {
                var _a;
                if (data.status === 'OK' && ((_a = data.results) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    allResults = allResults.concat(data.results);
                }
                return data;
            };
            for (const keyword of keywords) {
                console.log(`Searching keyword: "${keyword}"`);
                try {
                    const firstPage = yield new Promise((resolve, reject) => {
                        this.chargemanReq.getGooglePlaces(this.lat, this.lng, radiusMeters, 'electric_vehicle_charging_station', apiKey, keyword).subscribe(resolve, reject);
                    });
                    processResults(firstPage);
                    let pageToken = firstPage.next_page_token;
                    let page = 1;
                    while (pageToken && page < maxPagesPerKeyword) {
                        yield new Promise(res => setTimeout(res, 2000));
                        const nextPage = yield new Promise((resolve, reject) => {
                            this.chargemanReq.getGooglePlaces(this.lat, this.lng, radiusMeters, 'electric_vehicle_charging_station', apiKey, '', pageToken).subscribe(resolve, reject);
                        });
                        processResults(nextPage);
                        pageToken = nextPage.next_page_token;
                        page++;
                    }
                }
                catch (err) {
                    console.error(`Error searching keyword "${keyword}":`, err);
                }
                yield new Promise(res => setTimeout(res, 1000));
            }
            console.log(`Total raw results: ${allResults.length}`);
            let googleCount = 0;
            let duplicateCount = 0;
            for (const place of allResults) {
                if (!((_b = (_a = place.geometry) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.lat) || !((_d = (_c = place.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lng))
                    continue;
                const lat = place.geometry.location.lat;
                const lng = place.geometry.location.lng;
                const isDuplicate = this.charger_locations.some((loc) => Math.abs(parseFloat(loc.latitude) - lat) < 0.0001 &&
                    Math.abs(parseFloat(loc.longitude) - lng) < 0.0001);
                if (isDuplicate) {
                    duplicateCount++;
                    continue;
                }
                const name = place.name || 'EV Charging Station';
                const vicinity = place.vicinity || place.formatted_address || '';
                const isOpen = ((_e = place.opening_hours) === null || _e === void 0 ? void 0 : _e.open_now) !== false;
                this.charger_locations.push({
                    status: isOpen ? 'available' : 'disabled',
                    hostaddress: vicinity,
                    hostname: name,
                    latitude: lat.toString(),
                    longitude: lng.toString(),
                    animation: false,
                    source: 'google'
                });
                this.location_details.push({
                    hostname: name,
                    hostaddress: vicinity,
                    latlong: `${lat},${lng}`,
                    chargeStatus: isOpen ? 'Available' : 'Unknown',
                    source: 'google',
                    rph: 'N/A',
                    devicetype: 'N/A',
                    deviceid: null,
                    connectorid: null,
                    mobile: null,
                    active: isOpen ? '1' : '0',
                    chargeCount: '0',
                    transactionid: null
                });
                googleCount++;
            }
            // Trigger Angular change detection
            this.charger_locations = [...this.charger_locations];
            this.location_details = [...this.location_details];
            console.log(`Google EV stations added: ${googleCount}, Duplicates skipped: ${duplicateCount}`);
            console.log(`Total stations on map: ${this.charger_locations.length}`);
            if (this.charger_locations.length === 0 && googleCount === 0) {
                this.utils.presentToast('No charging stations found nearby', [], 3000);
            }
            if (this.isLoading) {
                this.isLoading = false;
                this.statusText = '';
                this.showProgress = false;
            }
        });
    }
    ionViewDidLeave() {
        const mapoptions = { type: 'exit' };
        this.utils.MapOptSubject.next(mapoptions);
        if (this.mapObservable && !this.mapObservable.closed) {
            this.mapObservable.unsubscribe();
        }
        if (this.walletSubscription) {
            this.walletSubscription.unsubscribe();
        }
    }
    rechargeHandler() {
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD, '/pages/sidemenu/wallet');
    }
    openChargeStartStopPage() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let updatedDetails = yield this.utils.getStoredUserDetails();
            let deviceDetails = (_a = yield (yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DEVICE_DETAILS)).value) !== null && _a !== void 0 ? _a : updatedDetails.rph;
            let chargeCount = updatedDetails.chargeCount;
            let transactionid = updatedDetails.transactionid;
            let deviceid = updatedDetails.deviceid;
            let devicetype = (_b = yield (yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DEVICE_DETAILS)).value) !== null && _b !== void 0 ? _b : updatedDetails.devicetype;
            const chargerDetails = {
                chargeCount: chargeCount,
                transactionid: transactionid,
                rph: (_c = JSON.parse(deviceDetails).rph) !== null && _c !== void 0 ? _c : deviceDetails,
                deviceid: deviceid,
                devicetype: (_d = JSON.parse(devicetype).devicetype) !== null && _d !== void 0 ? _d : devicetype
            };
            const chargeDetails = {
                state: {
                    charge_details: chargerDetails
                }
            };
            this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', chargeDetails);
        });
    }
    openMarkerInfo(index) {
        this.ionSlides.slideTo(index);
    }
    slideChanged() {
        this.ionSlides.getActiveIndex().then((res) => {
            this.charger_details = [];
            let index = parseInt(res);
            let selectedDetails = this.location_details[index];
            this.lat = selectedDetails.latlong.split(',')[0];
            this.lng = selectedDetails.latlong.split(',')[1];
            // this.charger_details.push({"latitude":selectedDetails.latlong.split(',')[0],"longitude":selectedDetails.latlong.split(',')[1],"animation":false})
        });
    }
    ngOnInit() {
        this.utils.filterObs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(700)).subscribe(res => {
            let values = this.filterItems(this.location_details, res);
            if (values.length > 0) {
                let filteredCoordinates = this.filterItems(this.charger_locations, res);
                filteredCoordinates[0].animation = true;
                setTimeout(() => {
                    filteredCoordinates[0].animation = false;
                }, 5000);
                let filteredIndex = this.location_details.findIndex(obj => obj.hostname === values[0].hostname);
                const lat = this.charger_locations[filteredIndex].latitude;
                const longi = this.charger_locations[filteredIndex].longitude;
                this.recenterMap(lat, longi);
                this.ionSlides.slideTo(filteredIndex);
            }
        });
    }
    mapReady(map) {
        console.log('mapReady called');
        this.mapview = map;
        // Apply styles to hide ALL default POIs
        if (this.mapview && this.mapview.setOptions) {
            this.mapview.setOptions({
                styles: this.mapStyles,
                disableDefaultUI: true
            });
        }
    }
    showCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.utils.getCoordinates(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.DIALOG_TEXT_TYPE_LOAD);
            this.lat = res.coords.latitude,
                this.lng = res.coords.longitude;
        });
    }
    /**
     * To dail a number of charger station
     * @param mobileNumber Mobile number to pass to the dailer
     */
    openDailer(mobileNumber) {
        this.utils.callNumber(mobileNumber);
    }
    openDirections(loc_details) {
        this.utils.launchMaps(loc_details.latlong.split(',')[0], loc_details.latlong.split(',')[1]);
    }
    openDetails(loc_details) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (loc_details.source === 'google') {
                this.utils.presentToast('Charging not available for this station. Use directions to navigate.', [], 3000);
                return;
            }
            const modal = yield this.modalCtrl.create({
                component: src_components_charger_details_charger_details_component__WEBPACK_IMPORTED_MODULE_7__.ChargerDetailsComponent,
                initialBreakpoint: 0.5,
                breakpoints: [0, 0.5, 0.5],
                componentProps: { loc_details }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data.type === 'call') {
                this.openDailer(loc_details.mobile);
            }
            else if (data.type === 'directions') {
                this.openDirections(loc_details);
            }
            else {
                const extras = {
                    state: {
                        charge_details: loc_details,
                        from: 'dashboard'
                    }
                };
                this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', extras);
            }
        });
    }
    filterItems(_items, searchTerm) {
        return _items.filter((item) => {
            return (item.hostname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.hostaddress.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
    }
};
MaptabPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__.Utils },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__.ChargemanRequestService },
    { type: _awesome_cordova_plugins_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__.LaunchNavigator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone }
];
MaptabPage.propDecorators = {
    mapView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['map',] }],
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['slides', { static: false },] }],
    agmMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['AgmMap',] }]
};
MaptabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-maptab',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_maptab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_maptab_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaptabPage);



/***/ }),

/***/ 99434:
/*!*********************************************************************!*\
  !*** ./src/components/charger-details/charger-details.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargerDetailsComponent": () => (/* binding */ ChargerDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charger_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./charger-details.component.html */ 1782);
/* harmony import */ var _charger_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charger-details.component.scss */ 18275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);







let ChargerDetailsComponent = class ChargerDetailsComponent {
    constructor(modalControl, navParams, utils) {
        this.modalControl = modalControl;
        this.navParams = navParams;
        this.utils = utils;
        this.callIconBlack = "../../assets/icon/call_icon_black.svg";
        this.chargerPlugIcon = '../../assets/icon/charger_plug.svg';
        this.chargerWalletIcon = '../../assets/icon/charger_wallet.svg';
        this.chargerPowerIcon = '../../assets/icon/charger_power.svg';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.chargerDetails = this.navParams.data.loc_details;
            const res = yield this.utils.getCoordinates(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TEXT_TYPE_LOAD);
            if (res.status === 'granted') {
                this.currentLat = res.coords.latitude;
                this.currentLong = res.coords.longitude;
                this.distance = (this.utils.getDistance(this.currentLat, this.chargerDetails.latlong.split(',')[0], this.currentLong, this.chargerDetails.latlong.split(',')[1])).toFixed();
                this.chargerDetails.distance = this.distance + ' Kms away';
            }
            else {
                this.distance = 'NA';
                this.chargerDetails.distance = this.distance;
            }
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    doAction(type) {
        this.modalControl.dismiss({
            'type': type
        });
    }
};
ChargerDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.Utils }
];
ChargerDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-charger-details',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charger_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_charger_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChargerDetailsComponent);



/***/ }),

/***/ 2299:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/maptab/maptab.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n\n  <div *ngIf=\"isChargingActive\" charging-status-container (click)=\"openChargeStartStopPage()\">\n    <ion-icon name=\"battery-charging\"></ion-icon>\n    <div charging-info>\n      <ion-label>Charging in progress</ion-label>\n      <ion-label charging-tap>Tap to open</ion-label>\n    </div>\n    <ion-icon name=\"chevron-forward\"></ion-icon>\n  </div>\n\n  <div *ngIf=\"!isChargingActive\" wallet-balance-container (click)=\"rechargeHandler()\">\n    <ion-icon [src]=\"walletIconSrc\"></ion-icon>\n    <ion-label wallet-label>{{walletBalance === '0' || walletBalance === '0.00' ? 'Your wallet is empty' : 'Wallet Balance'}}</ion-label>\n    <ion-label wallet-value *ngIf=\"walletBalance !== '0' && walletBalance !== '0.00'\">{{'₹ '+walletBalance}}</ion-label>\n    <ion-label wallet-action *ngIf=\"walletBalance === '0' || walletBalance === '0.00'\">Recharge</ion-label>\n  </div>\n  \n  <agm-map *ngIf=\"!isLoading\" #AgmMap (mapReady)=\"mapReady($event)\"[latitude]=\"lat\" [longitude]=\"lng\" disableDefaultUI=\"true\" [zoom]=\"zoomRadius\">\n    <agm-marker [animation]=\"location.animation ? 'BOUNCE' : '' \" (markerClick)=\"openMarkerInfo(i)\" [iconUrl]=\"location.source === 'google' ? googleMarker : (location.status === 'inuse' ? busyMarker : location.status === 'available' ? availableMarker : disabledMarker)\" *ngFor=\"let location of charger_locations; let i = index\" [latitude]=\"location.latitude\" [longitude]=\"location.longitude\"></agm-marker>\n  </agm-map>\n    \n  <div *ngIf=\"!isLoading\" pointer-info-container>\n    <ion-slides  pager=\"false\" [options]=\"slideOpts\" (ionSlideDidChange)=\"slideChanged($event)\" #slides>\n      <ion-slide *ngFor=\"let loc of location_details\">\n    <ion-card location-card>\n      <div location-name-details>\n          <div location-availability>\n            <ion-label>{{loc.hostname}}</ion-label> \n           <div *ngIf=\"loc.active === '1'\" [ngClass]=\"loc.chargeCount === '1' ? 'busy-container-style' : 'available-container-style'\">\n            <ion-label label-style>{{loc.chargeCount === '1' ? 'Busy' : 'Available'}}</ion-label>\n          </div>\n          </div>\n      </div>\n      <div active-status-text>\n      <ion-label >{{loc.active === '1' ? 'Active' : 'Disabled'}}</ion-label>\n    </div>\n      <div address-container>\n        <ion-label address>{{loc.hostaddress}}</ion-label>\n      </div>\n      \n      <div location-buttons-container>\n        <ion-button  expand=\"block\" fill=\"outline\" pointer-buttons (click)=\"openDetails(loc)\">Details</ion-button>\n        <ion-button  expand=\"block\" fill=\"outline\" pointer-buttons (click)=\"openDirections(loc)\">Directions</ion-button>\n      </div>\n    </ion-card>\n    </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 1782:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/components/charger-details/charger-details.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div station-detail-parent>\n<div charge-name-container>\n  <ion-label name-style>{{chargerDetails.hostname}}</ion-label>\n  <ion-icon (click)=\"doAction('call')\" [src]=\"callIconBlack\"></ion-icon>\n</div>\n<div charge-address-container>\n  <ion-label charge-id>{{chargerDetails.deviceid}}</ion-label>\n  <ion-label charge-address>{{chargerDetails.hostaddress}}</ion-label>\n  <div chargerstatus-container-child>\n    <ion-label>{{chargerDetails.active === '1' ? 'Active' : 'Disabled'}}</ion-label>\n    <ion-label [ngClass]=\"chargerDetails.chargeCount === '1' ? 'charger-busy' : 'charger-available'\">{{chargerDetails.active === '1' ? chargerDetails.chargeCount === '1' ? 'Busy' : 'Available': ''}}</ion-label>  \n  </div>\n  <div charge-type>\n    <ion-label >{{chargerDetails.chargettype}}</ion-label>\n    <ion-label>{{chargerDetails.distance}}</ion-label>\n  </div>\n</div>\n\n<div button-container>\n  <!-- <ion-button button-regular charge-button expand=\"block\" (click)=\"doAction('navigateToCharge')\">Charge</ion-button> -->\n  <ion-button  fill=\"outline\" direction-button expand=\"block\" (click)=\"doAction('directions')\">Directions</ion-button>\n</div>\n\n<div power-details-container>\n  <div power-details>\n    <ion-icon [src]=\"chargerPlugIcon\"></ion-icon>\n    <ion-label type-style>{{chargerDetails.capacity === '3.3' || chargerDetails.capacity === '7.2' ? 'AC' : 'DC'}}</ion-label>\n    <ion-label heading-style>Charger Type</ion-label>\n  </div>\n  <div power-details>\n    <ion-icon [src]=\"chargerWalletIcon\"></ion-icon>\n    <ion-label type-style>Rs {{chargerDetails.rph}}/Kw</ion-label>\n    <ion-label heading-style>Price</ion-label>\n  </div>\n  <div power-details>\n    <ion-icon [src]=\"chargerPowerIcon\"></ion-icon>\n    <ion-label type-style>{{chargerDetails.capacity}} Kw</ion-label>\n    <ion-label heading-style>Power</ion-label>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ 95264:
/*!*****************************************!*\
  !*** ./src/app/maptab/maptab.page.scss ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "agm-map {\n  width: 100%;\n  height: 100%;\n}\n\n[charging-status-container] {\n  position: fixed;\n  top: 88px;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  background: var(--ion-color-primary);\n  color: #fff;\n  margin-top: 14px;\n  padding: 12px 16px;\n  cursor: pointer;\n}\n\n[charging-status-container] ion-icon:first-child {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n[charging-status-container] ion-icon:last-child {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-left: auto;\n}\n\n[charging-info] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 2px;\n  gap: 2px;\n  min-width: 0;\n  overflow: hidden;\n}\n\n[charging-info] ion-label:first-child {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n[charging-tap] {\n  font-size: 11px;\n  opacity: 0.85;\n  white-space: nowrap;\n}\n\n[wallet-balance-container] {\n  position: fixed;\n  top: 95px;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n  margin: 8px 16px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n[wallet-balance-container] ion-icon {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n[wallet-label] {\n  flex: 1;\n  text-align: left;\n  font-size: 14px;\n  opacity: 0.9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[wallet-value] {\n  font-size: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n  text-align: right;\n}\n\n[wallet-action] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6Im1hcHRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuW2NoYXJnaW5nLXN0YXR1cy1jb250YWluZXJdIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDg4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5bY2hhcmdpbmctc3RhdHVzLWNvbnRhaW5lcl0gaW9uLWljb246Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5bY2hhcmdpbmctc3RhdHVzLWNvbnRhaW5lcl0gaW9uLWljb246bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbltjaGFyZ2luZy1pbmZvXSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbltjaGFyZ2luZy1pbmZvXSBpb24tbGFiZWw6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbltjaGFyZ2luZy10YXBdIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBvcGFjaXR5OiAwLjg1O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5bd2FsbGV0LWJhbGFuY2UtY29udGFpbmVyXSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA5NXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3dhbGxldC1iYWxhbmNlLWNvbnRhaW5lcl0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5bd2FsbGV0LWxhYmVsXSB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3BhY2l0eTogMC45O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuW3dhbGxldC12YWx1ZV0ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5bd2FsbGV0LWFjdGlvbl0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuIl19 */";

/***/ }),

/***/ 18275:
/*!***********************************************************************!*\
  !*** ./src/components/charger-details/charger-details.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyZ2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_maptab_maptab_module_ts.js.map