"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_imchargeman_addchargerdetails_addchargerdetails_module_ts"],{

/***/ 99870:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/imchargeman/addchargerdetails/addchargerdetails-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddchargerdetailsPageRoutingModule": () => (/* binding */ AddchargerdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _addchargerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addchargerdetails.page */ 32822);




const routes = [
    {
        path: '',
        component: _addchargerdetails_page__WEBPACK_IMPORTED_MODULE_0__.AddchargerdetailsPage
    }
];
let AddchargerdetailsPageRoutingModule = class AddchargerdetailsPageRoutingModule {
};
AddchargerdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddchargerdetailsPageRoutingModule);



/***/ }),

/***/ 28006:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/imchargeman/addchargerdetails/addchargerdetails.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddchargerdetailsPageModule": () => (/* binding */ AddchargerdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _addchargerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addchargerdetails-routing.module */ 99870);
/* harmony import */ var _addchargerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addchargerdetails.page */ 32822);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);









let AddchargerdetailsPageModule = class AddchargerdetailsPageModule {
};
AddchargerdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _addchargerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddchargerdetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ],
        declarations: [_addchargerdetails_page__WEBPACK_IMPORTED_MODULE_1__.AddchargerdetailsPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AddchargerdetailsPageModule);



/***/ }),

/***/ 32822:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/imchargeman/addchargerdetails/addchargerdetails.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddchargerdetailsPage": () => (/* binding */ AddchargerdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addchargerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./addchargerdetails.page.html */ 57505);
/* harmony import */ var _addchargerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addchargerdetails.page.scss */ 71370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ 425);










let AddchargerdetailsPage = class AddchargerdetailsPage {
    constructor(utils, diagnostics, formBuilder, chargemanreq, scanner) {
        this.utils = utils;
        this.diagnostics = diagnostics;
        this.formBuilder = formBuilder;
        this.chargemanreq = chargemanreq;
        this.scanner = scanner;
        this.mapPinIcon = '../../../assets/icon/map_pin.svg';
        this.rupeeIcon = '../../../assets/icon/rupee.svg';
        this.chargeDatePickerIcon = '../../../assets/icon/charge_date_picker.svg';
        this.coordinates = '';
        this.isDetailsSubmitting = false;
        this.statusText = '';
        this.isReadOnly = false;
        this.isFullDay = false;
        this.selectedStartTime = '';
        this.selectedEndTime = '';
        this.isTimesValid = false;
        this.showProgress = true;
        this.setFormReset = false;
        this.isCommercial = true;
        this.isRateReadOnly = false;
        this.protocolType = "";
        this.powerType = "";
        this.selectedCapacityType = "";
        this.selectedCapacityCountryList = [];
        this.selectedCountryCapacities = [];
        this.selectedCapacity = "";
        this.capacityCountry = "";
        this.connectorcountval = "0";
        this.chargerTypesResponse = [];
        this.action_sheet_options = {
            header: 'Connectors Count',
            subHeader: 'Please select atleast one value',
        };
        this.action_sheet_capacity_types = {
            header: 'Type of charger',
            subHeader: 'Please select atleast one value'
        };
        this.connectorCount = [
            {
                val: 1,
                connector_id: 1
            },
            {
                val: 2,
                connector_id: 2
            },
            {
                val: 3,
                connector_id: 3
            },
            {
                val: 4,
                connector_id: 4
            }
        ];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        this.pageParams = this.utils.getPageParams() || '';
        // fetching capacity types json array
        this.isLoading = true;
        this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.LOADING_CHARGER_TYPE_DETAILS;
        this.showProgress = true;
        this.chargemanreq.getRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_6__.RELATIVE_URLS.GET_CHARGER_TYPES).subscribe((res) => {
            this.showProgress = false;
            console.dir(res);
            this.chargerTypesResponse = res.chargerTypes;
        }, (err) => {
            this.showProgress = false;
            this.isLoading = true;
            this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
        });
        this.utils.getStoredUserDetails().then((res) => {
            this.userDetails = res;
        });
        console.dir(this.pageParams);
        if (((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.type) === _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.TYPE_EDIT_VAL) {
            this.title = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_EDIT_TITLE;
            this.navigateBackTo = 'chargemen-details';
            this.buttonText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_EDIT_BUTTON_TEXT;
            this.type = _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.OPERATION_TYPE_EDIT;
            this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGE_STATION_LOADING_TEXT;
            this.pageDetails = this.pageParams.chargerDetails;
            this.isRateReadOnly = this.pageDetails.chargeCount === '1' ? true : false;
            this.isLoading = false;
            this.isReadOnly = true;
            this.isTimesValid = true;
        }
        else {
            this.title = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_ADD_TITLE;
            this.navigateBackTo = 'chargemen-list';
            this.buttonText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_ADD_BUTTON_TEXT;
            this.type = _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.OPERATION_TYPE_ADD;
            this.isLoading = false;
            this.pageDetails = '';
            this.isReadOnly = false;
        }
        this.chargeStationForm = this.formBuilder.group({
            deviceid: [(_b = this.pageDetails) === null || _b === void 0 ? void 0 : _b.deviceid, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_6__.REGEX.CHAR_NUM_PATTERN)])],
            devicename: [(_c = this.pageDetails) === null || _c === void 0 ? void 0 : _c.hostname, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_6__.REGEX.CHAR_NUM_PATTERN_SPACE)])],
            locationname: [(_d = this.pageDetails) === null || _d === void 0 ? void 0 : _d.hostaddress, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_6__.REGEX.ADDRESS_REGEX_PATTERN)])],
            registerType: [(_e = this.pageDetails) === null || _e === void 0 ? void 0 : _e.chargettype, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            protocolType: [(_f = this.pageDetails) === null || _f === void 0 ? void 0 : _f.devicetype, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            noofconnectors: [(_g = this.pageDetails) === null || _g === void 0 ? void 0 : _g.connectorid, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            capacity_type: [(_h = this.pageDetails) === null || _h === void 0 ? void 0 : _h.capacity, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            capacity_country: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            capacity_value: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            rate: [(_j = this.pageDetails) === null || _j === void 0 ? void 0 : _j.rph, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_6__.REGEX.AMOUNT_REGEX_PATTERN)])],
            starttime: [(_k = this.pageDetails) === null || _k === void 0 ? void 0 : _k.startime, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            endtime: [(_l = this.pageDetails) === null || _l === void 0 ? void 0 : _l.endtime, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            active: [((_m = this.pageDetails) === null || _m === void 0 ? void 0 : _m.active) === '1' ? true : false],
            fullday: [((_o = this.pageDetails) === null || _o === void 0 ? void 0 : _o.fullday) === '1' ? true : false]
        });
        if (((_p = this.pageDetails) === null || _p === void 0 ? void 0 : _p.chargettype) && ((_q = this.pageDetails) === null || _q === void 0 ? void 0 : _q.chargettype) !== 'commercial') {
            this.isCommercial = false;
            this.isFullDay = true;
        }
    }
    ionViewDidEnter() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.type) === _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.TYPE_EDIT_VAL) {
            this.chargeStationForm.get('protocolType').clearValidators();
            this.chargeStationForm.get('protocolType').updateValueAndValidity();
            this.chargeStationForm.get('noofconnectors').clearValidators();
            this.chargeStationForm.get('noofconnectors').updateValueAndValidity();
            this.chargeStationForm.get('capacity_type').clearValidators();
            this.chargeStationForm.get('capacity_type').updateValueAndValidity();
            this.chargeStationForm.get('capacity_country').clearValidators();
            this.chargeStationForm.get('capacity_country').updateValueAndValidity();
            this.chargeStationForm.get('capacity_value').clearValidators();
            this.chargeStationForm.get('capacity_value').updateValueAndValidity();
            this.protocolType = (_c = (_b = this.pageDetails) === null || _b === void 0 ? void 0 : _b.devicetype) !== null && _c !== void 0 ? _c : "";
            this.connectorcountval = (_e = (_d = this.pageDetails) === null || _d === void 0 ? void 0 : _d.connectorid) !== null && _e !== void 0 ? _e : "0";
            this.selectedCapacityType = (_f = this.pageDetails) === null || _f === void 0 ? void 0 : _f.capacity;
            this.capacityCountry = (_h = (_g = this.pageDetails) === null || _g === void 0 ? void 0 : _g.country) !== null && _h !== void 0 ? _h : "india";
            this.selectedCapacity = (_j = this.pageDetails) === null || _j === void 0 ? void 0 : _j.devicekw;
            this.chargeStationForm.get('protocolType').patchValue(this.protocolType);
            this.chargeStationForm.get('noofconnectors').patchValue(this.connectorcountval);
            this.chargeStationForm.get('capacity_type').patchValue(this.selectedCapacityType);
            this.chargeStationForm.get('capacity_country').patchValue(this.capacityCountry);
            this.chargeStationForm.get('capacity_value').patchValue(this.selectedCapacity);
        }
        this.utils.getCoordinates(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TEXT_TYPE_LOAD).then((res) => {
            if (res.status === 'granted') {
                this.coordinates = { latitude: res.coords.latitude, longitude: res.coords.longitude };
            }
            else {
                this.coordinates = '';
            }
        });
        this.diagnostics.registerLocationStateChangeHandler((status) => {
            if (status !== this.diagnostics.locationMode.LOCATION_OFF) {
                if (this.isDetailsSubmitting) {
                    this.addEditChargerHandler();
                }
            }
            else {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ALERT_LOCATION_ENABLE_ERR_MESSAGE, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL])
                    .then((res) => {
                    if (res === 1) {
                        this.utils.openNativeSettings('location');
                    }
                });
            }
        });
    }
    onCapacityTypeChange(event) {
        let data = [...this.chargerTypesResponse];
        let selected_type_children = data.filter((_data) => {
            return _data.name.toLowerCase() === this.selectedCapacityType.toLowerCase();
        });
        this.selectedCapacityCountryList = selected_type_children[0].children;
        this.capacityCountry = "";
        this.selectedCapacity = "";
    }
    onCapacityCountryChange(event) {
        // if(event.target.value !== this.capacityCountry) {
        let data = [...this.selectedCapacityCountryList];
        let selected_capacities_ = data.filter((_data) => {
            return _data.type.toLowerCase() === this.capacityCountry.toLowerCase();
        });
        this.selectedCountryCapacities = selected_capacities_[0].kw;
        //}
    }
    onCapacityValChange(event) {
        // console.log("selected capacity "+this.selectedCapacity);
        // console.log("Selected type "+this.selectedCapacityType);
        // console.log("Selected capacity country "+this.capacityCountry);
        // console.log("Selected capacity val "+this.selectedCapacity);
    }
    ionViewWillEnter() {
    }
    onProtocolChangeEvent(event) {
    }
    onPowerTypeChange(event) {
        this.powerType = event.target.value;
    }
    addEditChargerHandler() {
        if (this.coordinates === '') {
            this.utils.getCoordinates(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT).then((res) => {
                if (res.status === 'granted') {
                    this.isDetailsSubmitting = true;
                    this.coordinates = { latitude: res.coords.latitude, longitude: res.coords.longitude };
                    this.submitChargeStationDetails();
                }
            });
        }
        else {
            this.isDetailsSubmitting = true;
            this.submitChargeStationDetails();
        }
    }
    submitChargeStationDetails() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let relativeUrl = '';
            let chargeStationFormDetails = {
                "mobile": this.userDetails.mobile,
                "deviceid": this.chargeStationForm.value.deviceid,
                "deviceparent": this.chargeStationForm.value.deviceid,
                "hostname": this.chargeStationForm.value.devicename,
                "connectorid": this.chargeStationForm.value.noofconnectors,
                "hostaddress": this.chargeStationForm.value.locationname,
                "latlong": this.coordinates.latitude.toString() + "," + this.coordinates.longitude.toString(),
                "chargettype": this.chargeStationForm.value.registerType,
                "devicetype": this.chargeStationForm.value.protocolType,
                "rph": this.isCommercial ? this.chargeStationForm.value.rate : '0',
                "startime": this.isFullDay ? '' : this.chargeStationForm.value.starttime,
                "endtime": this.isFullDay ? '' : this.chargeStationForm.value.endtime,
                "capacity": this.chargeStationForm.value.capacity_type,
                "country": this.chargeStationForm.value.capacity_country,
                "devicekw": this.chargeStationForm.value.capacity_value,
                "active": this.chargeStationForm.value.active == true ? '1' : '0',
                "fullday": this.chargeStationForm.value.fullday == true ? '1' : '0'
            };
            this.isLoading = true;
            let successMessage = '';
            if (((_a = this.pageParams) === null || _a === void 0 ? void 0 : _a.type) === _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.TYPE_EDIT_VAL) {
                this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGE_STATION_UPDATE_REQ;
                const json_details = { "modifiedby": this.userDetails.name };
                chargeStationFormDetails = Object.assign(Object.assign({}, chargeStationFormDetails), json_details);
                relativeUrl = 'updateChargeMan';
                successMessage = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGE_STATION_UPDATE_SUC;
                this.setFormReset = false;
            }
            else {
                this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGE_STATION_ADD_REQ;
                this.setFormReset = true;
                const json_details = { "createdby": this.userDetails.name };
                chargeStationFormDetails = Object.assign(Object.assign({}, chargeStationFormDetails), json_details);
                relativeUrl = 'insertChargeMan';
                successMessage = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_ADD_SUCCESS;
            }
            // changes on 22/02/2024 regarding looping on connectors
            let conn_count = parseInt(this.chargeStationForm.value.noofconnectors);
            console.log(conn_count);
            let count = 1;
            for (let i = 0; i < conn_count; i++) {
                if (conn_count > 1) {
                    chargeStationFormDetails = Object.assign(Object.assign({}, chargeStationFormDetails), { "deviceid": `${this.chargeStationForm.value.deviceid}-${i + 1}`, "connectorid": `${i + 1}` });
                }
                this.chargemanreq.postRequestDetails(relativeUrl, chargeStationFormDetails).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    this.isLoading = false;
                    this.isDetailsSubmitting = false;
                    this.coordinates = '';
                    if (res.status === _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.CHARGER_ADD_SUCCESS_STATUS && conn_count == i + 1) {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.SUCCESS_DIALOG_TITLE, successMessage, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]).then((res) => {
                        });
                        this.setFormReset ? this.chargeStationForm.reset() : '';
                        if (!this.setFormReset) {
                            this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.NAV_FORWARD, "/pages/sidemenu/imchargeman");
                        }
                    }
                    else if (res.status === _constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.CHARGER_ERR_STATUS_ALRDY_EXISTS) {
                        this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_ALREADY_EXISTS_1 + ' ' + this.chargeStationForm.value.deviceid + ' ' + _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CHARGER_ALREADY_EXISTS_2, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                        this.chargeStationForm.get('deviceid').setValue(null);
                        return;
                    }
                }), (err) => {
                    this.isLoading = false;
                    this.isDetailsSubmitting = false;
                    this.coordinates = '';
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                    return;
                });
            }
        });
    }
    onFullDayChangeHandler(event) {
        this.isFullDay = event.target.checked;
        if (this.isFullDay) {
            this.isTimesValid = true;
            this.chargeStationForm.get('starttime').clearValidators();
            this.chargeStationForm.get('endtime').clearValidators();
            this.chargeStationForm.get('starttime').updateValueAndValidity();
            this.chargeStationForm.get('endtime').updateValueAndValidity();
        }
        else {
            this.chargeStationForm.get('starttime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.chargeStationForm.get('endtime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.chargeStationForm.get('starttime').updateValueAndValidity();
            this.chargeStationForm.get('endtime').updateValueAndValidity();
        }
    }
    onConnectorValChange(event) {
    }
    openTimePicker(type) {
        this.utils.presentDateTimePicker('time', true, 'HH:mm').then((val) => {
            if (type === 'start') {
                this.selectedStartTime = val;
                this.chargeStationForm.get('starttime').setValue(this.selectedStartTime);
            }
            else {
                this.selectedEndTime = val;
                this.chargeStationForm.get('endtime').setValue(this.selectedEndTime);
            }
            if (this.getTimeValidityStatus()) {
                this.isTimesValid = true;
            }
            else {
                this.isTimesValid = false;
                if (this.chargeStationForm.get('starttime').value !== null && this.chargeStationForm.get('endtime').value !== null) {
                    this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.DATE_ERROR, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                }
            }
        });
    }
    onChargeTypeChangeHandler(eve) {
        if (eve.target.value === 'commercial') {
            this.isCommercial = true;
            this.isFullDay = false;
            this.chargeStationForm.get('starttime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.chargeStationForm.get('endtime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.chargeStationForm.get('rate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_6__.REGEX.AMOUNT_REGEX_PATTERN)]);
            this.chargeStationForm.get('starttime').updateValueAndValidity();
            this.chargeStationForm.get('endtime').updateValueAndValidity();
            this.chargeStationForm.get('rate').updateValueAndValidity();
        }
        else {
            this.isCommercial = false;
            this.isFullDay = true;
            this.isTimesValid = true;
            this.chargeStationForm.get('starttime').clearValidators();
            this.chargeStationForm.get('endtime').clearValidators();
            this.chargeStationForm.get('rate').clearValidators();
            this.chargeStationForm.get('starttime').updateValueAndValidity();
            this.chargeStationForm.get('endtime').updateValueAndValidity();
            this.chargeStationForm.get('rate').updateValueAndValidity();
        }
    }
    getTimeValidityStatus() {
        if (this.chargeStationForm.get('starttime').value !== null && this.chargeStationForm.get('endtime').value !== null) {
            return this.utils.validateTime(this.chargeStationForm.get('starttime').value, this.chargeStationForm.get('endtime').value, 'HH:mm');
        }
    }
    openQRScanner() {
        const barcodeOptions = {
            formats: 'QR_CODE',
            disableSuccessBeep: true,
        };
        this.scanner.scan(barcodeOptions).then((scanData) => {
            if (!scanData.cancelled) {
                this.chargeStationForm.get('deviceid').setValue(scanData.text);
            }
        }).catch((err) => {
            if (err === 'Illegal access') {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                    if (res === 1) {
                        this.utils.openNativeSettings('application_details');
                    }
                });
            }
            else {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_6__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.SCAN_ERR, [_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            }
        });
    }
};
AddchargerdetailsPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__.Utils },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__.ChargemanRequestService },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner }
];
AddchargerdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-addchargerdetails',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addchargerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addchargerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddchargerdetailsPage);



/***/ }),

/***/ 57505:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/imchargeman/addchargerdetails/addchargerdetails.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"title\"\n  [redirectTo]=\"navigateBackTo\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n></app-header>\n\n<ion-content content-color>\n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n  <form *ngIf=\"!isLoading\" [formGroup]=\"chargeStationForm\" (ngSubmit)=\"addEditChargerHandler()\">\n  <div add-charger-parent-container>\n      <ion-item>\n        <ion-label charger-details-label position=\"stacked\">Device ID</ion-label>\n        <ion-input [readonly]=\"isReadOnly\" formControlName=\"deviceid\" charger-details-input></ion-input>\n        <ion-icon *ngIf=\"!isReadOnly\" (click)=\"openQRScanner()\" charger-details-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.deviceid.touched || submitted) && chargeStationForm.controls.deviceid.errors?.required\"> Device ID required </span>\n        <span *ngIf=\"(chargeStationForm.controls.deviceid.touched || submitted) && chargeStationForm.controls.deviceid.errors?.pattern\"> Invalid Characters entered </span>\n        <span *ngIf=\"(chargeStationForm.controls.deviceid.touched || submitted) && chargeStationForm.controls.deviceid.errors?.minlength\"> ID must be 10 characters length</span>\n        <span *ngIf=\"(chargeStationForm.controls.deviceid.touched || submitted) && chargeStationForm.controls.deviceid.errors?.maxlength\"> ID must be 10 characters length</span>\n      </div>\n\n      <ion-item>\n        <ion-label charger-details-label position=\"stacked\">Device Name</ion-label>\n        <ion-input formControlName=\"devicename\" charger-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.devicename.touched || submitted) && chargeStationForm.controls.devicename.errors?.required\"> Device Name required </span>\n        <span *ngIf=\"(chargeStationForm.controls.devicename.touched || submitted) && chargeStationForm.controls.devicename.errors?.pattern\"> Invalid Characters entered </span>\n        <span *ngIf=\"(chargeStationForm.controls.devicename.touched || submitted) && chargeStationForm.controls.devicename.errors?.minlength\"> Requires atleast 3 characters</span>\n        <span *ngIf=\"(chargeStationForm.controls.devicename.touched || submitted) && chargeStationForm.controls.devicename.errors?.maxlength\"> Does not exceeds 25 characters</span>\n      </div>\n\n      <ion-item>\n        <ion-label charger-details-label position=\"stacked\">Location Name</ion-label>\n        <ion-input formControlName=\"locationname\" charger-details-input></ion-input>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.locationname.touched || submitted) && chargeStationForm.controls.locationname.errors?.required\"> Location Name required </span>\n        <span *ngIf=\"(chargeStationForm.controls.locationname.touched || submitted) && chargeStationForm.controls.locationname.errors?.pattern\"> Invalid Characters entered </span>\n        <span *ngIf=\"(chargeStationForm.controls.locationname.touched || submitted) && chargeStationForm.controls.locationname.errors?.minlength\"> Requires atleast 10 characters</span>\n      </div>\n       \n      <ion-item lines=\"none\">\n        <ion-label charger-details-label position=\"stacked\">Register as</ion-label>\n        <ion-radio-group formControlName=\"registerType\" (ionChange)=\"onChargeTypeChangeHandler($event)\">\n        <div radio-container register-type>\n            <ion-item charger-details-radio lines=\"none\">\n              <ion-radio value=\"private\" mode=\"md\"></ion-radio>\n              <ion-label>Private</ion-label>\n            </ion-item>\n\n            <ion-item  charger-details-radio lines=\"none\">\n              <ion-radio value=\"commercial\" mode=\"md\"></ion-radio>\n              <ion-label>Commercial</ion-label>\n            </ion-item>\n          </div>\n        </ion-radio-group>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.registerType.touched || submitted) && chargeStationForm.controls.registerType.errors?.required\"> Register type required </span>\n      </div>\n\n      <ion-item lines=\"none\" *ngIf=\"pageParams?.type !== 'EDIT'\">\n        <ion-label charger-details-label position=\"stacked\">Protocol Type</ion-label>\n        <ion-radio-group formControlName=\"protocolType\" (ionChange)=\"onProtocolChangeEvent($event)\">\n        <div radio-container register-type>\n            <ion-item charger-details-radio lines=\"none\">\n              <ion-radio value=\"OCPP\" mode=\"md\"></ion-radio>\n              <ion-label>OCPP</ion-label>\n            </ion-item>\n\n            <ion-item  charger-details-radio lines=\"none\">\n              <ion-radio value=\"EVCM\" mode=\"md\"></ion-radio>\n              <ion-label>EVCM</ion-label>\n            </ion-item>\n          </div>\n        </ion-radio-group>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.protocolType.touched || submitted) && chargeStationForm.controls.protocolType.errors?.required\"> Protocol type required </span>\n      </div>\n<!-- capacity input-->\n      <!-- <ion-item lines=\"none\">\n          <ion-label charger-details-label position=\"stacked\">Capacity</ion-label>\n          <ion-radio-group formControlName=\"capacity\">\n          <div radio-container>\n            <div multi-container>\n              <ion-item charger-details-radio lines=\"none\">\n                <ion-radio [disabled]= \"isReadOnly\" value=\"3.3\" mode=\"md\"></ion-radio>\n                <ion-label>3.3 KW</ion-label>\n              </ion-item>\n  \n              <ion-item  charger-details-radio lines=\"none\">\n                <ion-radio [disabled]= \"isReadOnly\" value=\"7.2\" mode=\"md\"></ion-radio>\n                <ion-label>7.2 KW</ion-label>\n              </ion-item> \n            </div>\n              <div multi-container>\n              <ion-item  charger-details-radio lines=\"none\">\n                <ion-radio [disabled]= \"isReadOnly\" value=\"11\" mode=\"md\"></ion-radio>\n                <ion-label>11 KW</ion-label>\n              </ion-item>\n              <ion-item  charger-details-radio lines=\"none\">\n                <ion-radio [disabled]= \"isReadOnly\" value=\"22\" mode=\"md\"></ion-radio>\n                <ion-label>22 KW</ion-label>\n              </ion-item>\n            </div>\n            </div>\n          </ion-radio-group>\n      </ion-item>\n      <div error-container>\n          <span *ngIf=\"(chargeStationForm.controls.capacity.touched || submitted) && chargeStationForm.controls.capacity.errors?.required\">Capacity required </span>\n      </div> -->\n      <!--Capacity Types-->\n      <ion-item lines=\"none\" *ngIf=\"pageParams?.type !== 'EDIT'\">\n        <ion-label charger-details-label position=\"stacked\">Type</ion-label>\n        <ion-select (ionChange)=\"onCapacityTypeChange($event)\" formControlName=\"capacity_type\" [interfaceOptions]=\"action_sheet_capacity_types\" [(ngModel)]=\"selectedCapacityType\" interface=\"action-sheet\" placeholder=\"Select type\">\n          <ion-select-option *ngFor=\"let types of chargerTypesResponse\" [value]=\"types.name\">{{types.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>  \n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.capacity_type.touched || submitted) && chargeStationForm.controls.capacity_type.errors?.required\">Type Required </span>\n      </div>\n    <!--Country selection-->\n    <!--country and capacity selection-->\n    <div country-capacity-selection-container *ngIf=\"pageParams?.type !== 'EDIT'\">\n      <ion-item lines=\"none\">\n        <ion-label charger-details-label position=\"stacked\">Country</ion-label>\n        <ion-select (ionChange)=\"onCapacityCountryChange($event)\" formControlName=\"capacity_country\" [interfaceOptions]=\"action_sheet_capacity_types\" [(ngModel)]=\"capacityCountry\" interface=\"action-sheet\" placeholder=\"Select country\">\n          <ion-select-option *ngFor=\"let types of selectedCapacityCountryList\" [value]=\"types.type\">{{types.type}}</ion-select-option>\n        </ion-select>\n      </ion-item>  \n      <ion-item lines=\"none\">\n        <ion-label charger-details-label position=\"stacked\">Capacity</ion-label>\n        <ion-select (ionChange)=\"onCapacityValChange($event)\" formControlName=\"capacity_value\" [interfaceOptions]=\"action_sheet_capacity_types\" [(ngModel)]=\"selectedCapacity\" interface=\"action-sheet\" placeholder=\"Select capacity\">\n          <ion-select-option *ngFor=\"let capval of selectedCountryCapacities\" [value]=\"capval\">{{capval}}</ion-select-option>\n        </ion-select>\n      </ion-item> \n    </div>\n    <div error-container>\n      <span *ngIf=\"((chargeStationForm.controls.capacity_country.touched || submitted) && chargeStationForm.controls.capacity_country.errors?.required) && ((chargeStationForm.controls.capacity_value.touched || submitted) && chargeStationForm.controls.capacity_value.errors?.required)\">Please select all fields </span>\n    </div>\n<!--No of connectors input-->\n      <ion-item lines=\"none\" *ngIf=\"pageParams?.type !== 'EDIT'\">\n        <ion-label charger-details-label position=\"stacked\">Connector Count</ion-label>\n        <ion-select (ionChange)=\"onConnectorValChange($event)\" formControlName=\"noofconnectors\" [interfaceOptions]=\"action_sheet_options\" [(ngModel)]=\"connectorcountval\" interface=\"action-sheet\" placeholder=\"Select no of connectors\">\n          <ion-select-option *ngFor=\"let connector of connectorCount\" [value]=\"connector.val\">{{connector.connector_id}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.noofconnectors.touched || submitted) && chargeStationForm.controls.noofconnectors.errors?.required\">Select connectors count </span>\n    </div>\n    \n<!--Rate selection-->\n      <ion-item *ngIf=\"isCommercial\">\n        <ion-label charger-details-label position=\"stacked\">Rate of charge(Kwh)</ion-label>\n        <ion-input type=\"tel\" [readonly]=\"isRateReadOnly\" formControlName=\"rate\" charger-details-input></ion-input>\n        <ion-icon  charger-details-icon-small [src]=\"rupeeIcon\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.rate.touched || submitted) && chargeStationForm.controls.rate.errors?.required\"> Charge rate required </span>\n        <span *ngIf=\"(chargeStationForm.controls.rate.touched || submitted) && chargeStationForm.controls.rate.errors?.pattern\"> Invalid Characters entered </span>\n        <span *ngIf=\"(chargeStationForm.controls.rate.touched || submitted) && chargeStationForm.controls.rate.errors?.maxlength\"> Rate must be in 1-99 range </span>\n      </div>\n\n      <div time-container *ngIf=\"!isFullDay\">\n        <ion-item (click)=\"openTimePicker('start')\">\n          <ion-label charger-details-label position=\"stacked\">Start Time</ion-label>\n          <ion-input readonly formControlName=\"starttime\" charger-details-input></ion-input>\n          <ion-icon  charger-details-icon-small [src]=\"chargeDatePickerIcon\" slot=\"end\"></ion-icon>\n        </ion-item>\n        \n\n        <ion-item (click)=\"openTimePicker('end')\">\n          <ion-label charger-details-label position=\"stacked\">End Time</ion-label>\n          <ion-input readonly formControlName=\"endtime\" charger-details-input></ion-input>\n          <ion-icon  charger-details-icon-small [src]=\"chargeDatePickerIcon\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </div>\n      <div timer-error-container>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.starttime.touched || submitted) && chargeStationForm.controls.starttime.errors?.required\"> Required </span>\n      </div>\n      <div error-container>\n        <span *ngIf=\"(chargeStationForm.controls.endtime.touched || submitted) && chargeStationForm.controls.endtime.errors?.required\"> Required </span>\n      </div>\n      </div>\n\n      <div toggle-selector-container>\n         <ion-label charger-details-label>Active</ion-label>\n         <ion-toggle formControlName=\"active\"></ion-toggle>\n      </div>\n\n      <div toggle-selector-container>\n        <ion-label charger-details-label>24/7 Available</ion-label>\n        <ion-toggle formControlName=\"fullday\" [checked]=\"isFullDay\" (ionChange)=\"onFullDayChangeHandler($event)\"></ion-toggle>\n     </div>\n\n     <ion-button button-regular expand=\"block\" [disabled]=\"!(chargeStationForm.valid && isTimesValid)\" type=\"submit\">{{buttonText}}</ion-button>\n  </div>\n</form>\n\n\n</ion-content>");

/***/ }),

/***/ 71370:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/imchargeman/addchargerdetails/addchargerdetails.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjaGFyZ2VyZGV0YWlscy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_imchargeman_addchargerdetails_addchargerdetails_module_ts.js.map