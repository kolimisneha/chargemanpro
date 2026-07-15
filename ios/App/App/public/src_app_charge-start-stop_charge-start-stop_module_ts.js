"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_charge-start-stop_charge-start-stop_module_ts"],{

/***/ 91384:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 51590);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 87184);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 27726);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 88986:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exhaustMap": () => (/* binding */ exhaustMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 88377);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/from */ 4126);
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ 26042);



function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return (source) => source.pipe(exhaustMap((a, i) => (0,_observable_from__WEBPACK_IMPORTED_MODULE_0__.from)(project(a, i)).pipe((0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new ExhaustMapOperator(project));
}
class ExhaustMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    }
}
class ExhaustMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__.SimpleOuterSubscriber {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    }
    tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    }
    _innerSub(result) {
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__.SimpleInnerSubscriber(this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__.innerSubscribe)(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}


/***/ }),

/***/ 6815:
/*!***********************************************************************!*\
  !*** ./src/app/charge-start-stop/charge-start-stop-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeStartStopPageRoutingModule": () => (/* binding */ ChargeStartStopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _charge_start_stop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charge-start-stop.page */ 78911);




const routes = [
    {
        path: '',
        component: _charge_start_stop_page__WEBPACK_IMPORTED_MODULE_0__.ChargeStartStopPage
    }
];
let ChargeStartStopPageRoutingModule = class ChargeStartStopPageRoutingModule {
};
ChargeStartStopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChargeStartStopPageRoutingModule);



/***/ }),

/***/ 79368:
/*!***************************************************************!*\
  !*** ./src/app/charge-start-stop/charge-start-stop.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeStartStopPageModule": () => (/* binding */ ChargeStartStopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _charge_start_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charge-start-stop-routing.module */ 6815);
/* harmony import */ var _charge_start_stop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charge-start-stop.page */ 78911);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








// import { ModalPageModule } from '../modal/modal.module';
let ChargeStartStopPageModule = class ChargeStartStopPageModule {
};
ChargeStartStopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _charge_start_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargeStartStopPageRoutingModule,
        ],
        declarations: [_charge_start_stop_page__WEBPACK_IMPORTED_MODULE_1__.ChargeStartStopPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ChargeStartStopPageModule);



/***/ }),

/***/ 78911:
/*!*************************************************************!*\
  !*** ./src/app/charge-start-stop/charge-start-stop.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargeStartStopPage": () => (/* binding */ ChargeStartStopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charge_start_stop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./charge-start-stop.page.html */ 93249);
/* harmony import */ var _charge_start_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charge-start-stop.page.scss */ 4028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 90758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88986);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 18260);












let ChargeStartStopPage = class ChargeStartStopPage {
    constructor(navCtrl, modalController, A_route, router, utils, chargeReq) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.A_route = A_route;
        this.router = router;
        this.utils = utils;
        this.chargeReq = chargeReq;
        this.deviceProtocolDetails = {
            deviceId: "",
            deviceProtocol: "",
            url: "",
            suburl: ""
        };
        this.startChargeTransactionId = "";
        this.chargerBackIcon = '../../assets/icon/back_icon.svg';
        this.chargerPlugIcon = '../../assets/icon/charger_plug.svg';
        this.chargerWalletIcon = '../../assets/icon/charger_wallet.svg';
        this.chargerPowerIcon = '../../assets/icon/charger_power.svg';
        this.chargeDatePickerIcon = '../../assets/icon/charge_date_picker.svg';
        this.calendarIcon = '../../assets/icon/calendar_icon.svg';
        this.timerIncrementIcon = '../../assets/icon/timer_increment.svg';
        this.timerDecrementIcon = '../../assets/icon/timer_decrement.svg';
        this.chargeVehicleIcon = '../../assets/icon/charge_station.png';
        this.timeElapsedIcon = '../../assets/icon/time_elapsed_icon.svg';
        this.energyIcon = '../../assets/icon/energy.svg';
        this.isChargeStarted = false;
        this.isModalOpen = true;
        this.isDurationSkipped = false;
        this.timerVal = 5;
        this.isChargeStopped = true;
        this.walletConsumed = '0';
        this.chargeVal = '0';
        this.powerVal = '0';
        this.chargeStoppedAutomatically = false;
        this.chargeStatusText = '';
        this.chargingStatus = false;
        this.isStartButtonDisabled = false;
        this.isStopButtonDisabled = true;
        this.isTimedout = false;
        this.chargeDurationTimerValue = '00:00';
        this.chargeStartTime = 0;
        this.isPollingStatus = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.hourVal = '00';
        this.minVal = '00';
        this.requestedDuration = '-';
        this.selectedGun = null;
        this.guns = [1, 2, 3, 4];
    }
    ngOnInit() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.pageParams = (_a = this.utils.getPageParams()) === null || _a === void 0 ? void 0 : _a.charge_details;
            if (!this.pageParams || !this.pageParams.devicetype || !this.pageParams.deviceid) {
                console.error('Invalid charge details - missing devicetype or deviceid');
                this.utils.presentToast('Unable to start charge. Invalid station details.', [], 3000);
                this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_BACKWARD, '/tabs/map');
                return;
            }
            this.deviceProtocolDetails.deviceId = this.pageParams.deviceid;
            this.deviceProtocolDetails.deviceProtocol = this.pageParams.devicetype;
            this.storedDetails = yield this.utils.getStoredUserDetails();
            this.walletBalance = yield this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.WALLET_BALANCE);
            this.initialWalletBalance = this.walletBalance.value;
            this.isSelfCharge = (_b = this.pageParams) === null || _b === void 0 ? void 0 : _b.self;
            if (parseInt((_c = this.pageParams) === null || _c === void 0 ? void 0 : _c.chargeCount) > 0) {
                this.isChargeStarted = true;
                this.isStartButtonDisabled = true;
                this.isStopButtonDisabled = false;
                this.isChargeStopped = false;
                this.startBlink = true;
                this.isAutoCharge = this.storedDetails.autostart.toString() === '1' ? true : false;
                this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
                const transaction_details = {
                    transactionid: this.pageParams.transactionid
                };
                this.chargeReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.CHARGING_SUMMARY, transaction_details).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    // let selectedDuration = await (await this.utils.getStoredDetails(KEYS.SELECTED_DURATION)).value;
                    // selectedDuration = this.utils.getDurationInHours(selectedDuration);
                    // this.startChargeDurationInterval(this.pageParams.transactionTimer, selectedDuration);
                    this.walletConsumed = parseFloat(res[0].consumewallet).toFixed(2);
                    this.chargeVal = parseFloat(res[0].chargevalue).toFixed(2);
                    this.powerVal = parseFloat(res[0].kwh).toFixed(2);
                    this.pageParams.capacity = res[0].capacity;
                    this.chargeDurationTimerValue = this.utils.convertDateTimeFormat(res[0].minuteago.split('.')[0], "HH:mm:ss", "HH:mm");
                    this.hourVal = this.chargeDurationTimerValue.split(':')[0];
                    this.minVal = this.chargeDurationTimerValue.split(':')[1];
                    const reqDurationHrs = this.utils.getDurationInHours(res[0].duration).split(":")[0];
                    const reqDurationMin = this.utils.getDurationInHours(res[0].duration).split(":")[1];
                    const totalDuration = reqDurationHrs + ":" + reqDurationMin;
                    this.requestedDuration = totalDuration === '00:00' ? 'Skipped' : reqDurationHrs + ':' + reqDurationMin;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_CHARGING;
                    // this.utils.storeDetails(KEYS.TRANSACTION_ID, this.pageParams.transactionid);
                    // this.utils.storeDetails(KEYS.IS_CHARGING, 1);
                    if (this.pageParams.transactionid !== undefined) {
                        if (this.chargingTimer == undefined) {
                            this.chargeStartTime = Date.now();
                            this.startChargeInterval(this.pageParams.transactionid);
                        }
                    }
                    else {
                        this.startChargeProcess();
                    }
                }));
            }
        });
    }
    navigateBack() {
        this.navCtrl.navigateBack(['/pages/sidemenu']);
    }
    selectGun(gun) {
        this.selectedGun = gun;
    }
    startCharging() {
        this.isChargeStarted = true;
    }
    manualStopCharge() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.chargeStoppedAutomatically = false;
            this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
            const user_sel = yield this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_STOP_INFO, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TEXT_YES, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TEXT_NO]);
            if (user_sel === 1) {
                this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.STATUS_SUCCESS);
            }
        });
    }
    stopCharging(type) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isChargeStopped = true;
            this.isStopButtonDisabled = true;
            this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.STATUS_TERMINATING;
            const transactionID = yield this.utils.getStoredUserDetails();
            const deviceType = ((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.devicetype) || ((_b = this.deviceProtocolDetails) === null || _b === void 0 ? void 0 : _b.deviceProtocol) || 'evcm';
            this.deviceProtocolDetails.url = deviceType.toLowerCase() === 'ocpp'
                ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.DEVICE_SOCKET_OCPP_URL + this.pageParams.deviceid.split("-")[0].toUpperCase() + "/" + _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.OCPP_STOP_CHARGE
                : src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.DEVICE_SOCKET_URL + _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.START_STOP_CHARGE_DEVICE;
            const stop_body = {
                "transactionid": this.pageParams.transactionid || transactionID.transactionid,
                "deviceid": this.pageParams.deviceid,
                "endtime": this.utils.getCurrentTimeStamp(),
                "consumewallet": ((_c = this.walletBalance) === null || _c === void 0 ? void 0 : _c.value) || 0,
                "modifiedby": ((_d = this.storedDetails) === null || _d === void 0 ? void 0 : _d.name) || ''
            };
            console.log('Stop charging request:', JSON.stringify(stop_body));
            console.log('Stop URL:', this.deviceProtocolDetails.url);
            const relativeUrl = this.isSelfCharge ? _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.STOP_SELF_CHARGE : _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.STOP_CHARGE;
            this.chargeReq.postRequestDetails(relativeUrl, stop_body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((res) => {
                console.log('Stop response:', res);
                let device_command_body = {};
                if (res && res.status && (res.status.toLowerCase() === 'accepted' || res.status.toLowerCase() === 'success')) {
                    if (deviceType.toLowerCase() === 'ocpp') {
                        device_command_body = {
                            "transactionId": transactionID.transactionid
                        };
                    }
                    else {
                        device_command_body = {
                            "type": "STOP_CHARGING_APP",
                            "payload": {
                                "idTag": this.pageParams.deviceid,
                                "Timestamp": this.utils.getCurrentTimeStamp(),
                                "transactionId": transactionID.transactionid
                            }
                        };
                    }
                }
                return device_command_body;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((stopChargeRes) => {
                console.log('Device command body:', stopChargeRes);
                return this.chargeReq.postDeviceCommand(this.deviceProtocolDetails.url, stopChargeRes);
            })).subscribe({
                next: (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    var _e, _f;
                    console.log('Device command response:', res);
                    this.startBlink = false;
                    this.destroy$.next();
                    if (deviceType.toLowerCase() === 'ocpp') {
                        if (!res.success) {
                            this.isChargeStopped = false;
                            this.isStopButtonDisabled = false;
                            this.startBlink = true;
                            this.chargeStatusText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR} (${((_e = res.message) === null || _e === void 0 ? void 0 : _e.toUpperCase()) || 'UNKNOWN'})`;
                            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.IS_CHARGING, 0);
                            this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.STOP_CHARGE_ERR_OCPP + " (" + (((_f = res.message) === null || _f === void 0 ? void 0 : _f.toUpperCase()) || 'UNKNOWN') + ")", [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                            return;
                        }
                    }
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, _constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_DONE);
                    this.storedDetails.chargeCount = '0';
                    this.storedDetails.transactionid = null;
                    this.storedDetails.autostart = '0';
                    this.storedDetails.deviceid = null;
                    this.storedDetails.devicetype = deviceType;
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
                    this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, false);
                    if (type === _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.DEVICE_ERR) {
                        this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.DEVICE_ERR;
                    }
                    else if (type === _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.INSUFF_FUNDS) {
                        this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.INSUFF_FUNDS;
                    }
                    else if (type === _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR) {
                        this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR;
                    }
                    else {
                        this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.STATUS_SUCCESS_STOPPED;
                    }
                    this.isChargeStopped = true;
                    this.isStopButtonDisabled = false;
                    const transaction_details = {
                        state: {
                            transactionid: transactionID.transactionid
                        }
                    };
                    this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);
                    if (!this.chargeStoppedAutomatically) {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.SUCCESS_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_STOP_ALERT, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    }
                }),
                error: (err) => {
                    console.error('Stop charging error:', err);
                    this.isChargeStopped = false;
                    this.isStopButtonDisabled = false;
                    this.startBlink = true;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.IS_CHARGING, 0);
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.STOP_CHARGE_ERR + ' (' + ((err === null || err === void 0 ? void 0 : err.message) || err) + ')', [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                }
            });
        });
    }
    /**
     * To start charge
     */
    startChargeProcess() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const deviceType = ((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.devicetype) || ((_b = this.deviceProtocolDetails) === null || _b === void 0 ? void 0 : _b.deviceProtocol) || 'evcm';
            this.deviceProtocolDetails.url = deviceType.toLowerCase() === 'ocpp'
                ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.DEVICE_SOCKET_OCPP_URL + this.pageParams.deviceid.split("-")[0].toUpperCase() + "/" + _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.OCPP_START_CHARGE
                : src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.DEVICE_SOCKET_URL + _constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.START_STOP_CHARGE_DEVICE;
            if (parseFloat((_c = this.walletBalance) === null || _c === void 0 ? void 0 : _c.value) > 0 || this.isSelfCharge) {
                this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
                this.storedDetails.chargeCount = '1';
                this.storedDetails.autostart = this.isAutoCharge ? 1 : 0;
                this.storedDetails.deviceid = this.pageParams.deviceid;
                this.storedDetails.devicetype = deviceType;
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
                this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, true);
                const user_sel = this.isSelfCharge ? 1 : yield this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_ALERT, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_CONTINUE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
                if (user_sel == 1) {
                    this.isStartButtonDisabled = true;
                    const start_body = {
                        "mobile": this.storedDetails.mobile,
                        "deviceid": this.pageParams.deviceid,
                        "chargedate": "2022-02-01",
                        "starttime": "12:00:00",
                        "duration": this.isDurationSkipped ? 0 : this.timerVal,
                        "kwh": this.pageParams.rph,
                        "createdby": this.storedDetails.name,
                        "autostart": this.isAutoCharge ? 1 : 0
                    };
                    console.log('Start charging request:', JSON.stringify(start_body));
                    this.chargeReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.START_CHARGE, start_body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((res) => {
                        console.log('Start charge response:', res);
                        let device_command_body = {};
                        this.startChargeTransactionId = res.status;
                        if (deviceType.toLowerCase() === "ocpp") {
                            device_command_body = {
                                "connectorId": this.selectedGun,
                                "chargingProfileId": 1,
                                "transactionId": parseInt(res.status),
                                "stackLevel": 1,
                                "chargingProfilePurpose": "TxProfile",
                                "chargingProfileKind": "Absolute",
                                "duration": this.isDurationSkipped ? 0 : parseInt(this.timerVal) * 60
                            };
                        }
                        else {
                            device_command_body = {
                                "type": "START_CHARGING",
                                "payload": {
                                    "connectorId": this.selectedGun,
                                    "idTag": this.pageParams.deviceid,
                                    "reservationId": "0",
                                    "Timestamp": this.utils.getCurrentTimeStamp(),
                                    "duration": this.isDurationSkipped ? 0 : this.timerVal,
                                    "transactionId": res.status
                                }
                            };
                        }
                        return device_command_body;
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((startChargeRes) => {
                        console.log('Start device command body:', startChargeRes);
                        return this.chargeReq.postDeviceCommand(this.deviceProtocolDetails.url, startChargeRes);
                    })).subscribe({
                        next: (res) => {
                            var _a;
                            console.log('Start device command response:', res);
                            if (deviceType.toLowerCase() === 'ocpp') {
                                if (!res.success) {
                                    this.chargeStatusText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR} (${(res.message || 'UNKNOWN').toUpperCase()})`;
                                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.START_CHARGE_ERR + " (" + (res.message || 'UNKNOWN') + ")", [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                                    this.isChargeStarted = false;
                                    this.isChargeStopped = false;
                                    this.startBlink = false;
                                    this.requestedDuration = '-';
                                    this.isStartButtonDisabled = false;
                                    return;
                                }
                            }
                            let _tran_id = "";
                            _tran_id = deviceType.toLowerCase() === 'ocpp' ? this.startChargeTransactionId : ((_a = res.payload) === null || _a === void 0 ? void 0 : _a.transactionId) || res.transactionId;
                            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.TRANSACTION_ID, _tran_id);
                            this.storedDetails.transactionid = _tran_id;
                            this.storedDetails.autostart = this.isAutoCharge ? 1 : 0;
                            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
                            const reqDurationHrs = this.isDurationSkipped ? "00" : this.utils.getDurationInHours(this.timerVal).split(":")[0];
                            const reqDurationMin = this.isDurationSkipped ? "00" : this.utils.getDurationInHours(this.timerVal).split(":")[1];
                            const totalDuration = reqDurationHrs + ":" + reqDurationMin;
                            this.requestedDuration = totalDuration === '00:00' ? 'Skipped' : totalDuration;
                            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, _constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_REQ);
                            this.getChargingStatus(_tran_id);
                        },
                        error: (err) => {
                            console.error('Start charging error:', err);
                            this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
                            this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.START_CHARGE_ERR, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                            this.isChargeStarted = false;
                            this.isChargeStopped = false;
                            this.startBlink = false;
                            this.requestedDuration = '-';
                            this.isStartButtonDisabled = false;
                        }
                    });
                }
            }
            else {
                this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_INSUFFICIENT;
                const choice = yield this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.WALLET_BALANCE_ERROR_2, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.WALLET_DIALOG_TEXT_NAVIGATE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]);
                if (choice == 1) {
                    this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD, '/pages/sidemenu/wallet');
                }
            }
        });
    }
    startChargeInterval(response) {
        this.chargeStartTime = Date.now();
        this.isChargeStopped = false;
        this.isStartButtonDisabled = false;
        const interval_body = {
            transactionid: response
        };
        let values = [];
        let counter = 0;
        if (this.chargeDurationTimerInterval === undefined) {
            const selectedDuration = this.isDurationSkipped ? 60 : this.timerVal;
            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.SELECTED_DURATION, selectedDuration);
        }
        this.chargingTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(10000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.exhaustMap)(() => this.chargeReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.CHECK_CHARGE, interval_body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
            console.error('Charge interval error:', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe((res) => {
            var _a;
            if (!res || !(res.length > 0) || !res[0]) {
                console.warn('Invalid response in charge interval:', res);
                return;
            }
            this.isChargeStopped = false;
            this.storedDetails.chargeCount = '1';
            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
            console.log('Charge interval response:', res[0]);
            this.walletConsumed = parseFloat(res[0].consumewallet || 0).toFixed(2);
            this.chargeVal = parseFloat(res[0].chargevalue || 0).toFixed(2);
            this.powerVal = res[0].kwh || '0';
            const device_status = (res[0].status || '').toLowerCase();
            let duration = this.utils.convertDateTimeFormat((res[0].minuteago || '0.0').split('.')[0], "HH:mm:ss", "HH:mm");
            this.hourVal = duration.split(':')[0];
            this.minVal = duration.split(':')[1];
            const deviceProtocol = this.deviceProtocolDetails.deviceProtocol || ((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.devicetype) || 'evcm';
            if (!this.isAutoCharge) {
                if (device_status === 'stopped' && deviceProtocol.toLowerCase() === "evcm") {
                    this.destroy$.next();
                    const transaction_details = { state: { transactionid: response } };
                    this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);
                    this.storedDetails.chargeCount = '0';
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
                    const reason = res[0].reason || '';
                    this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, false);
                    let displayMessage = (reason.toLowerCase() === 'timeout' || reason.toLowerCase() === 'expired')
                        ? _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_DURATION_LIMIT_REACHED
                        : _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_COMM_ERR;
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, displayMessage, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    return;
                }
                if (!this.isAutoCharge) {
                    if (values.length === 0) {
                        values[0] = this.chargeVal;
                    }
                    else {
                        values[1] = this.chargeVal;
                        if (this.compareValues(values)) {
                            counter++;
                            if (counter == 30) {
                                this.destroy$.next();
                                values = [];
                                counter = 0;
                                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_INTERRUPTION_ERR, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                                this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR);
                            }
                        }
                        else {
                            counter = 0;
                            values[0] = this.chargeVal;
                        }
                    }
                }
            }
            if (!this.isSelfCharge) {
                let remainingBalance = parseFloat(this.initialWalletBalance || 0) - parseFloat(this.walletConsumed || 0);
                remainingBalance = parseFloat(remainingBalance).toFixed(2);
                if (remainingBalance <= 0) {
                    remainingBalance = 0;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_INSUFFICIENT;
                    this.destroy$.next();
                    this.chargeStoppedAutomatically = true;
                    this.startBlink = false;
                    this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.INSUFF_FUNDS);
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.WALLET_BALANCE_ERROR_3, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.WALLET_DIALOG_TEXT_NAVIGATE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((r) => {
                        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD, r == 1 ? '/pages/sidemenu/wallet' : '/charge-glance');
                    });
                    return;
                }
                else {
                    this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPDATE_WALLET_TYPE, remainingBalance);
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.WALLET_BALANCE, remainingBalance);
                    this.walletBalance = { value: remainingBalance };
                }
            }
            if (!this.isDurationSkipped && this.chargeStartTime > 0) {
                const elapsedSec = (Date.now() - this.chargeStartTime) / 1000;
                const durationSec = this.timerVal * 60;
                if (elapsedSec >= durationSec) {
                    this.destroy$.next();
                    this.chargeStoppedAutomatically = true;
                    this.startBlink = false;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR;
                    this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR);
                    return;
                }
            }
            if (device_status === 'stopped' && deviceProtocol.toLowerCase() === "ocpp") {
                this.destroy$.next();
                const transaction_details = { state: { transactionid: response } };
                this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD_WITH_OPT, '/charge-glance', transaction_details);
                this.storedDetails.chargeCount = '0';
                this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.USER_DETAILS, JSON.stringify(this.storedDetails));
                const reason = res[0].reason || '';
                this.utils.updateValues(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, false);
                let displayMessage = (reason.toLowerCase() === 'timeout' || reason.toLowerCase() === 'expired')
                    ? _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_DURATION_LIMIT_REACHED
                    : _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_COMM_ERR;
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DIALOG_TITLE_INFO, displayMessage, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            }
        });
    }
    ionViewWillLeave() {
        this.timeout = null;
        this.destroy$.next();
        this.destroy$.complete();
        clearInterval(this.chargeDurationTimerInterval);
    }
    compareValues(arrayValues) {
        if (parseFloat(arrayValues[0]) === parseFloat(arrayValues[1])) {
            return true;
        }
        return false;
    }
    onSkipDurationHandler(event) {
        this.isDurationSkipped = event.target.checked;
    }
    incrementTimer() {
        if (this.timerVal >= 5 && this.timerVal < 120) {
            this.timerVal = parseInt(this.timerVal) + 5;
        }
    }
    decrementTimer() {
        if (this.timerVal <= 120 && this.timerVal > 5) {
            this.timerVal = parseInt(this.timerVal) - 5;
        }
    }
    getChargingStatus(transactionId) {
        if (this.isPollingStatus)
            return;
        this.isPollingStatus = true;
        if (this.startChargeReq) {
            this.startChargeReq.unsubscribe();
        }
        const details = {
            transactionid: transactionId,
        };
        this.startChargeReq = this.chargeReq.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.CHARGING_STATUS, details).subscribe((res) => {
            if (res[0].status.toUpperCase() === 'REQUESTED') {
                this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_PROCESSING;
                this.isPollingStatus = false;
                this.getChargingStatus(transactionId);
                this.isChargeStarted = true;
                this.isChargeStopped = false;
                this.startBlink = true;
                this.chargingStatus = false;
                this.isStartButtonDisabled = false;
                this.isStopButtonDisabled = true;
                if (this.timeout == null || this.timeout == undefined) {
                    this.timeout = setTimeout(() => {
                        this.isTimedout = true;
                    }, this.timerVal * 60000);
                }
                if (this.isTimedout) {
                    this.timeout = null;
                    this.startChargeReq.unsubscribe();
                    this.isChargeStarted = false;
                    this.isChargeStopped = true;
                    this.chargingStatus = false;
                    this.isStartButtonDisabled = false;
                    this.isStopButtonDisabled = true;
                    this.isTimedout = false;
                    this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.TIMEOUT_ERR);
                    this.chargeStoppedAutomatically = true;
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_TIME_OUT_ERR, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_TIME_OUT_ERR_TEXT, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                }
            }
            else {
                this.chargingStatus = true;
                if (res[0].status.toUpperCase() === 'ACCEPTED') {
                    this.isChargeStarted = true;
                    this.isChargeStopped = false;
                    this.startBlink = true;
                    this.chargingStatus = true;
                    this.isStopButtonDisabled = false;
                    this.isTimedout = false;
                    this.timeout = null;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_CHARGING;
                    this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.START_CHARGE_SUCCESS, [], 4000);
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_STATUS, _constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.CHARGE_CHARGING);
                    if (!this.chargingTimer || this.chargingTimer.closed) {
                        this.chargeStartTime = Date.now();
                        this.startChargeInterval(res[0].transactionid);
                    }
                }
                else {
                    this.chargingStatus = false;
                    this.isChargeStarted = false;
                    this.isChargeStopped = true;
                    this.isStartButtonDisabled = false;
                    this.timeout = null;
                    this.chargeStatusText = _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.CHARGE_START_STOP_STATUS_ERR;
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.DEVICE_COMM_ERR, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    this.stopCharging(_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_STATUS_TYPES.DEVICE_ERR);
                    this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.NAV_FORWARD, '/charge-glance');
                }
                this.isPollingStatus = false;
            }
        }, (err) => {
            this.isPollingStatus = false;
            this.isChargeStarted = false;
            this.isChargeStopped = true;
            this.chargingStatus = false;
            this.isStartButtonDisabled = false;
            this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.STOP_CHARGE_ERR, [_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        });
    }
    // startChargeDurationInterval(startDuration, stopDuration) {
    //  let seconds = startDuration.split(':')[2];
    //  let min = startDuration.split(':')[1];
    //  let hours = startDuration.split(':')[0];
    //  let updatedTime;
    //  this.chargeDurationTimerInterval = setInterval(() => {
    //   if(seconds > 59) {
    //     seconds = 0;
    //     min++  
    //     if(min > 59) {
    //       min = 0;
    //       hours++ 
    //     }
    //  }
    //  updatedTime = this.utils.getFormattedTime(hours+':'+min+':'+seconds);
    //  const comparisionRes = this.utils.validateTime(updatedTime, stopDuration, 'HH:mm:ss')
    //  if(!comparisionRes) {
    //    clearInterval(this.chargeDurationTimerInterval);
    //  }
    //  seconds++;
    //  this.chargeDurationTimerValue = updatedTime;
    //  }, 1000)
    // }
    /**
     * When user checks/unchecks the AutoStart option
     * @param event auto charge event handler
     */
    onAutoChargeHandler(event) {
        this.isAutoCharge = event.target.checked;
    }
};
ChargeStartStopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService }
];
ChargeStartStopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-charge-start-stop',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charge_start_stop_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_charge_start_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChargeStartStopPage);



/***/ }),

/***/ 93249:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charge-start-stop/charge-start-stop.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <app-header title=\"\" iconPath=\"../../../assets/icon/back_icon.svg\"></app-header> -->\n<ion-content content-color>\n  <!--Header-->\n  <div charge-header-container>\n    <ion-icon\n      (click)=\"navigateBack()\"\n      charge-back-button\n      [src]=\"chargerBackIcon\"\n    ></ion-icon>\n    <img charge-image src=\"../../assets/icon/charge-process-bg.svg\" />\n  </div>\n  <!--Charge details-->\n  <div charge-details-container>\n    <!--Initial charge start screen-->\n    <div *ngIf=\"!isChargeStarted\">\n    <div charge-address-container>\n      <ion-label name-style>{{pageParams.hostname}}</ion-label>\n      <ion-label desc-style>{{pageParams.hostaddress}}</ion-label>\n    </div>\n\n    <div power-details-container>\n      <div power-details>\n        <ion-icon [src]=\"chargerPlugIcon\"></ion-icon>\n        <ion-label type-style>{{pageParams.capacity}}</ion-label>\n        <ion-label heading-style>Charger Type</ion-label>\n      </div>\n      <div power-details>\n        <ion-icon [src]=\"chargerWalletIcon\"></ion-icon>\n        <ion-label type-style>Rs {{pageParams.rph}}/Kw</ion-label>\n        <ion-label heading-style>Price</ion-label>\n      </div>\n      <div power-details>\n        <ion-icon [src]=\"chargerPowerIcon\"></ion-icon>\n        <ion-label type-style>{{pageParams.capacity}} KW</ion-label>\n        <ion-label heading-style>Capacity</ion-label>\n      </div>\n    </div>\n\n    <div slot-booking-container>\n      \n      <div slot-details-container>\n          <ion-label slot-label>Skip duration</ion-label>\n          <ion-checkbox (ionChange)=\"onSkipDurationHandler($event)\"></ion-checkbox>\n      </div>\n\n      <div slot-details-container>\n        <ion-label slot-label>Auto Re-Start</ion-label>\n        <ion-checkbox (ionChange)=\"onAutoChargeHandler($event)\" [(ngModel)]=\"isAutoCharge\" [disabled]=\"isDurationSkipped\"></ion-checkbox>\n    </div>\n    <div resume-hint-container>\n      <ion-label>Avail this option during night time charge or to resume charge automatically when charge stops due to interruption</ion-label>\n    </div>\n\n      <div slot-details-container *ngIf=\"!isDurationSkipped\">\n       \n        <ion-label slot-label>Select Duration<span>*</span></ion-label>\n        <div timer-parent-container>\n          <ion-icon (click)=\"decrementTimer()\" [src]=\"timerDecrementIcon\"></ion-icon>\n          <div timer-text>\n            <ion-label>{{timerVal}}</ion-label>\n            <ion-label timer-value>Min</ion-label>\n          </div>\n          <ion-icon (click)=\"incrementTimer()\" [src]=\"timerIncrementIcon\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div gun-selection-container>\n      <ion-label slot-label>Select Gun<span>*</span></ion-label>\n      <div gun-options>\n        <div\n          class=\"gun-option\"\n          *ngFor=\"let gun of guns\"\n          [class.gun-selected]=\"selectedGun === gun\"\n          (click)=\"selectGun(gun)\"\n        >\n          <img src=\"../../assets/icon/gun.jpg\" alt=\"Gun {{ gun }}\" />\n          <ion-label>Gun {{ gun }}</ion-label>\n        </div>\n      </div>\n    </div>\n    <div class=\"\" style=\"margin-top: 20px;\">\n      <ion-button button-regular start-charge expand=\"block\" [disabled]=\"isStartButtonDisabled || !selectedGun\" (click)=\"startChargeProcess()\">Start Charging</ion-button>\n    </div>\n     <!-- home.page.html --> \n  </div>\n  <!--End of initial start charge screen-->\n\n  <!--Charge process screen-->\n  <div *ngIf=\"isChargeStarted\">\n    <div charge-status-container>\n      <img vehicle-icon [src]=\"chargeVehicleIcon\"/>\n      <!--Charging text-->\n      <div charging-text-container> \n        <ion-label status-heading>Status</ion-label>\n          <div battery-container>\n            <ion-icon [ngClass]=\"startBlink ? 'blink' : 'no-blink'\" name=\"battery-charging-outline\"></ion-icon>\n            <ion-label charging-status-text>{{chargeStatusText}}</ion-label>\n          </div>\n          <div timer-display-container>\n            <ion-label timer-text>{{hourVal}} Hr {{minVal}} Min ago</ion-label>\n            <!-- <ion-label timer-text>Requested dur.: {{requestedDuration}}</ion-label> -->\n          </div>\n      </div>\n     \n  \n    </div>\n     <!--Station-details-->\n     <div power-details-container>\n      <div power-details>\n        <ion-icon [src]=\"chargerWalletIcon\"></ion-icon>\n        <ion-label type-style>₹ {{pageParams.rph}}/Kw</ion-label>\n        <ion-label heading-style>Price</ion-label>\n      </div>\n      <div power-details>\n        <ion-icon [src]=\"energyIcon\"></ion-icon>\n        <ion-label type-style>{{chargeVal ?? 0}} WH</ion-label>\n        <ion-label heading-style>Energy</ion-label>\n      </div>\n      <div power-details>\n        <ion-icon [src]=\"chargerPowerIcon\"></ion-icon>\n        <ion-label type-style>{{pageParams.capacity}} Kw</ion-label>\n        <ion-label heading-style>Capacity</ion-label>\n      </div>\n    </div>\n\n    <!--Charge fare-->\n    <div slot-charge-fare-container>\n      <ion-label fare-heading>Requested Duration(HH:MM)</ion-label>\n      <ion-label fare-value>{{requestedDuration}}</ion-label>\n    </div>\n    <div slot-charge-fare-container>\n      <ion-label fare-heading>Charging Fee</ion-label>\n      <ion-label fare-value>₹ {{walletConsumed ?? 0}}</ion-label>\n    </div>\n    <ion-button button-regular expand=\"block\" [disabled]=\"isStopButtonDisabled\" (click)=\"manualStopCharge()\">Stop Charging</ion-button>\n  </div>  \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 4028:
/*!***************************************************************!*\
  !*** ./src/app/charge-start-stop/charge-start-stop.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "[gun-selection-container] {\n  padding: 16px;\n}\n\n[gun-options] {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 8px;\n  justify-content: center;\n}\n\n.gun-option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  padding: 12px;\n  border: 2px solid #ccc;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex: 1;\n  max-width: 80px;\n}\n\n.gun-option img {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n\n.gun-option ion-label {\n  color: #666;\n  font-size: 12px;\n}\n\n.gun-option.gun-selected {\n  border-color: var(--ion-color-primary);\n  border-width: 3px;\n  background: rgba(var(--ion-color-primary-rgb), 0.18);\n  box-shadow: 0 0 8px rgba(var(--ion-color-primary-rgb), 0.25);\n}\n\n.gun-option.gun-selected ion-label {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZS1zdGFydC1zdG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0REFBQTtBQURGOztBQUdFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6ImNoYXJnZS1zdGFydC1zdG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltndW4tc2VsZWN0aW9uLWNvbnRhaW5lcl0ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5bZ3VuLW9wdGlvbnNdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3VuLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDgwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5ndW4tb3B0aW9uLmd1bi1zZWxlY3RlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE4KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMjUpO1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_charge-start-stop_charge-start-stop_module_ts.js.map