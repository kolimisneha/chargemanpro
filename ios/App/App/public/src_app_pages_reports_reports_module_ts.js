"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_reports_module_ts"],{

/***/ 71996:
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageRoutingModule": () => (/* binding */ ReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page */ 14874);




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_0__.ReportsPage
    },
    {
        path: 'reports-view',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./reports-view/reports-view.module */ 26666)).then(m => m.ReportsViewPageModule)
    },
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ 9335:
/*!***************************************************************************!*\
  !*** ./src/app/pages/reports/reports-view/reports-view-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsViewPageRoutingModule": () => (/* binding */ ReportsViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _reports_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-view.page */ 10521);




const routes = [
    {
        path: '',
        component: _reports_view_page__WEBPACK_IMPORTED_MODULE_0__.ReportsViewPage
    }
];
let ReportsViewPageRoutingModule = class ReportsViewPageRoutingModule {
};
ReportsViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsViewPageRoutingModule);



/***/ }),

/***/ 26666:
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/reports-view/reports-view.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsViewPageModule": () => (/* binding */ ReportsViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _reports_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-view-routing.module */ 9335);
/* harmony import */ var _reports_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-view.page */ 10521);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);
/* harmony import */ var src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/loading-component/loading-component.component */ 44919);









let ReportsViewPageModule = class ReportsViewPageModule {
};
ReportsViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _reports_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsViewPageRoutingModule,
        ],
        declarations: [_reports_view_page__WEBPACK_IMPORTED_MODULE_1__.ReportsViewPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_components_loading_component_loading_component_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ReportsViewPageModule);



/***/ }),

/***/ 10521:
/*!*****************************************************************!*\
  !*** ./src/app/pages/reports/reports-view/reports-view.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsViewPage": () => (/* binding */ ReportsViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reports_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reports-view.page.html */ 19485);
/* harmony import */ var _reports_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-view.page.scss */ 19192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/pdf-generator/ngx */ 79305);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 54553);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ 425);









let ReportsViewPage = class ReportsViewPage {
    constructor(screenOrientation, pdfGenerator, utils, chargemanApi) {
        this.screenOrientation = screenOrientation;
        this.pdfGenerator = pdfGenerator;
        this.utils = utils;
        this.chargemanApi = chargemanApi;
        this.deviceId = "1234567890";
        this.totalPower = 0;
        this.totalEarnings = 0;
        this.isDownload = false;
        this.deviceDetails = "EVChargeman one two three four, 1234567890, Dno2 Madhapur Hyderabad Telangana";
        this.reportsHeading = ["Sno", "From", "To", "Pwr", "Earn", "Dur"];
        this.isLoading = false;
        this.showProgress = true;
    }
    ngOnInit() {
        this.selectedDeviceId = this.utils.getPageParams().deviceid;
        this.frequency = this.utils.getPageParams().freq;
        this.frequencyVal = this.utils.getPageParams().freqVal;
        this.startDate = this.utils.getPageParams().from;
        this.endDate = this.utils.getPageParams().to;
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.showProgress = true;
        this.chargemanAddress = _constants__WEBPACK_IMPORTED_MODULE_6__.CHARGEMAN_DETAILS.ADDRESS.split(',');
        this.DeviceName = this.deviceDetails.split(',')[0];
        this.dev_Id = this.deviceDetails.split(',')[1];
        this.DeviceLoc = this.deviceDetails.split(',')[2];
        //  this.screenOrientation.lock('landscape');
    }
    ngAfterViewInit() {
        this.pdfContainer = this.reportsView.nativeElement.innerHTML;
    }
    ionViewDidEnter() {
        // this.reportsData.map((data) => {
        //   this.totalPower += parseInt(data.power);
        //   this.totalEarnings += parseInt(data.earn);
        // })
        this.statusText = `${_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.FETCHING_REPORTS_1} ${this.selectedDeviceId} ${_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.FETCHING_REPORTS_2}`;
        let reportsBody;
        reportsBody = {
            "deviceid": this.selectedDeviceId,
            "type": this.frequencyVal,
        };
        if (this.frequencyVal === 'custom') {
            reportsBody.startdate = this.startDate;
            reportsBody.enddate = this.endDate;
        }
        this.chargemanApi.postRequestDetails(_constants__WEBPACK_IMPORTED_MODULE_6__.RELATIVE_URLS.GET_REPORTS, reportsBody).subscribe((res) => {
            console.dir(res);
            if (res.length > 0) {
                this.isLoading = false;
                this.DeviceName = res[0].hostname;
                this.DeviceLoc = res[0].hostaddress;
                this.reportGenDate = this.utils.convertDateTimeFormat(res[0].currentTime, "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm");
                res.map((item) => {
                    item.consumewallet = parseFloat(item.consumewallet).toFixed(2);
                    item.duration = item.duration !== null ? this.utils.convertDateTimeFormat(item.duration, "HH:mm:ss", "HH:mm") : '-';
                    item.pwr = parseFloat(item.pwr).toFixed(2);
                    item.starttime = item.starttime !== null ? this.utils.convertDateTimeFormat(item.starttime, "YYYY-MM-DD HH:mm:ss", "DD/MM/YYYY hh:mm") : '-';
                    item.endtime = item.endtime !== null ? this.utils.convertDateTimeFormat(item.endtime, "YYYY-MM-DD HH:mm:ss", "DD/MM/YYYY hh:mm") : '-';
                    this.totalPower += parseFloat(item.pwr);
                    this.totalEarnings += parseFloat(item.consumewallet);
                });
                this.totalPower = this.totalPower.toFixed(2);
                this.totalEarnings = this.totalEarnings.toFixed(2);
                this.reportsData = res;
            }
            else {
                this.isLoading = true;
                this.showProgress = false;
                this.statusText = `${_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.NO_REPORTS_FOUND_1} ${this.selectedDeviceId} ${_constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.NO_REPORTS_FOUND_2}`;
            }
        }, (err) => {
            this.isLoading = true;
            this.showProgress = false;
            this.statusText = _constants__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
        });
    }
    ionViewWillLeave() {
        this.screenOrientation.unlock();
    }
    downloadReports() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isDownload = true;
            this.pdfContainer = this.reportsView.nativeElement.innerHTML;
            console.dir(this.pdfContainer);
            let options = {
                documentSize: 'A4',
                type: 'share',
                fileName: 'report_' + this.selectedDeviceId
            };
            let pdfgen = yield this.pdfGenerator.fromData(this.pdfContainer, options);
        });
    }
};
ReportsViewPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _awesome_cordova_plugins_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__.Utils },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_4__.ChargemanRequestService }
];
ReportsViewPage.propDecorators = {
    reportsView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['reportsView',] }]
};
ReportsViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-reports-view',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reports_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reports_view_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsViewPage);



/***/ }),

/***/ 62834:
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageModule": () => (/* binding */ ReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 71996);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page */ 14874);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);
/* harmony import */ var _reports_view_reports_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-view/reports-view.module */ 26666);









let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _reports_view_reports_view_module__WEBPACK_IMPORTED_MODULE_3__.ReportsViewPageModule
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_1__.ReportsPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ReportsPageModule);



/***/ }),

/***/ 14874:
/*!***********************************************!*\
  !*** ./src/app/pages/reports/reports.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPage": () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reports_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reports.page.html */ 17025);
/* harmony import */ var _reports_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page.scss */ 41783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ 425);








let ReportsPage = class ReportsPage {
    constructor(formBuilder, utils, barcodeScanner) {
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.barcodeScanner = barcodeScanner;
        this.scanIcon = "../../assets/icon/scan-circle-outline.svg";
        this.showDates = false;
        this.minFromDate = "2021-01-01";
        this.minToDate = "2021-01-01";
        this.action_sheet_reports = {
            header: 'Report Frequency',
            subHeader: 'Please select atleast one value'
        };
        this.reportsForm = this.formBuilder.group({
            deviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_4__.REGEX.CHAR_NUM_PATTERN)])],
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            fromDate: [],
            toDate: [],
        });
    }
    ngOnInit() {
        this.maxToDate = this.utils.getTodayDate();
        this.maxFromDate = this.utils.getTodayDate();
        this.currentDate = this.utils.getCurrentDate("DD/MM/YYYY");
    }
    /**
     * To open the qr scanner
     */
    openQrScanner() {
        const barcodeOptions = {
            formats: 'QR_CODE',
            disableSuccessBeep: true,
            prompt: _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.QR_SCANNER_HINT,
        };
        this.barcodeScanner.scan(barcodeOptions).then((scanData) => {
            if (scanData.cancelled == false) {
                this.reportsForm.controls['deviceId'].setValue(scanData.text);
            }
        }).catch((err) => {
            if (err === 'Illegal access') {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.DIALOG_TYPE_PROMPT, _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
                    if (res === 1) {
                        this.utils.openNativeSettings('application_details');
                    }
                });
            }
            else {
                this.utils.displayDialog(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.DIALOG_TYPE_ALERT, _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, _constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.SCAN_ERR, [_constants__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
            }
        });
    }
    /**
     * Triggered whenever the frequency value  was changed by user
     */
    onFrequencyChange(event) {
        let selectedVal = event.detail.value;
        if (selectedVal !== "custom") {
            this.showDates = false;
            this.reportsForm.get('fromDate').setValue("");
            this.reportsForm.get('toDate').setValue("");
            this.reportsForm.get('fromDate').clearValidators();
            this.reportsForm.get('toDate').clearValidators();
            this.reportsForm.get('fromDate').updateValueAndValidity();
            this.reportsForm.get('toDate').updateValueAndValidity();
        }
        else {
            this.showDates = true;
            this.reportsForm.get('fromDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.reportsForm.get('toDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.reportsForm.get('fromDate').updateValueAndValidity();
            this.reportsForm.get('toDate').updateValueAndValidity();
        }
    }
    getFromDate(event) {
        this.fromDate = event.target.value;
        if (this.fromDate !== '' || this.fromDate !== undefined) {
            this.minToDate = this.fromDate;
        }
    }
    getToDate(event) {
        this.toDate = event.target.value;
        if (this.toDate !== '' || this.toDate !== undefined) {
            this.maxFromDate = this.toDate;
        }
    }
    ionViewDidLeave() {
        this.reportsForm.reset();
    }
    openReportsView() {
        const frequencyVal = this.reportsForm.controls['frequency'].value;
        let transactionsText;
        switch (frequencyVal) {
            case 'today':
                transactionsText = this.utils.getTodayDate();
                break;
            case 'week':
                transactionsText = '1 Week';
                break;
            case 'month':
                transactionsText = '1 Month';
                break;
            case 'custom':
                transactionsText = this.utils.convertDateTimeFormat(this.reportsForm.controls['fromDate'].value, "YYYY-MM-DD", "DD-MM-YYYY") + " to " + this.utils.convertDateTimeFormat(this.reportsForm.controls['toDate'].value, "YYYY-MM-DD", "DD-MM-YYYY");
                break;
            default:
                break;
        }
        const deviceDetails = {
            state: {
                deviceid: this.reportsForm.controls['deviceId'].value,
                freq: transactionsText,
                freqVal: frequencyVal
            }
        };
        if (frequencyVal === 'custom') {
            deviceDetails.state.from = this.reportsForm.controls['fromDate'].value;
            deviceDetails.state.to = this.reportsForm.controls['toDate'].value;
        }
        //Navigate to -> 1-2 Navigate Navigate + data
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_4__.KEYS.NAV_FORWARD_WITH_OPT, '/pages/sidemenu/reports/reports-view', deviceDetails);
    }
};
ReportsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.Utils },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner }
];
ReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reports',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reports_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsPage);



/***/ }),

/***/ 19485:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/reports/reports-view/reports-view.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"Report View\"\n  redirectTo=\"reports\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n  secondaryIconPath=\"../../../assets/icon/download_pdf.svg\"\n  (onSecondaryIconClick)=\"downloadReports()\"></app-header>\n<ion-content>\n  <app-loading *ngIf=\"isLoading\" [showProgress]=\"showProgress\" [statusText]=\"statusText\"></app-loading>\n  <div *ngIf=\"!isLoading\" reports-view-container #reportsView> \n    <div style=\"display: flex;\n    flex-direction: row;\n    justify-content: space-between;\">\n      <div image-text-container>\n        <div style=\"font-family: 'poppins-bold-600';\n        color: #8EBA47;\n        font-size: 16px;\n        font-weight: bold;\n        margin: 0px 4px;\">EV-Chargeman</div>\n        <div style=\"font-family: 'poppins-regular-400';\n        color: #000000;\n        font-size: 14px;\n        font-weight: bold;\n        margin: 0px 4px;\" *ngFor=\"let add of chargemanAddress\">{{add}},</div>\n      </div>\n     \n    </div>\n    <div>\n      <div style=\"\n      font-family: 'poppins-bold-600';\n      color: #E8981F;\n      text-transform: uppercase;\n      text-align: left;\n      font-weight: bold;\n      font-size: 14px;\n      width: 100%;\n      padding: 3px;\">Frequency : {{frequency}}</div>\n      <table style=\"width: 100%;\">\n        <!-- <tr style=\"border: 1px solid #888888;\n                  font-family: 'poppins-bold-600';\n                  color: #E8981F;\n                  text-transform: uppercase;\n                  text-align: left;\n                  font-weight: bold;\n                  font-size: 14px;\"> -->\n         \n        <!-- </tr> -->\n        <tr device-details>\n          <td style=\" border: 1px solid #888888;\n                      font-family: 'poppins-bold-600';\n                      color: #E8981F;\n                      text-transform: uppercase;\n                      text-align: left;\n                      font-size: 14px;\n                      font-weight: bold;\n                      padding: 4px;\">Name</td>\n          <td style=\" color:#000000;\n                      border: 1px solid #888888;\n                      font-family: 'poppins-bold-600';\n                      text-transform: uppercase;\n                      text-align: left;\n                      font-size: 14px;\n                      font-weight: bold;\n                      padding: 4px;\">{{DeviceName}}</td>\n        </tr>\n        <tr device-details>\n          <td style=\" border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #E8981F;\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">ID</td>\n          <td style=\"color:#000000;\n          border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">{{selectedDeviceId}}</td>\n        </tr>\n        <tr device-details>\n          <td style=\" border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #E8981F;\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">Location</td>\n          <td style=\"color:#000000;\n          border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">{{DeviceLoc}}</td>\n        </tr>\n       \n      </table>\n      <table style=\"width: 100%\">    \n        <tr style=\"border: 1px solid #000000\">\n          <td style=\" font-family: 'poppins-bold-600';\n                      font-size: 14px;\n                      border: 1px solid #888888;\n                      color: #E8981F;\n                      font-weight: bold;\n                      text-transform: uppercase;\n                      \n                      text-align: center;\" *ngFor=\"let data of reportsHeading\">{{data}}</td>\n          \n        </tr>\n        <tr style=\"text-align: center;\" *ngFor=\"let data of reportsData; let i=index\">\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 14px;\">{{i+1}}</td>\n          <!-- <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 14px;\">{{data.date}}</td> -->\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 13px;\">{{data.starttime}}</td>\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 13px;\">{{data.endtime}}</td>\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 13px;\">{{data.pwr}}</td>\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 13px;\">{{data.consumewallet}}</td>\n          <td style=\"border: 1px solid #888888;\n           color: #000000;\n           font-weight: bold;\n           font-family: 'poppins-regular-400';\n           font-size: 13px;\">{{data.duration}}</td>\n        </tr>\n      </table>\n      <table style=\"width: 100%;\">\n        <tr device-details>\n          <td style=\"border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #E8981F;\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">Total Pwr(Kw)</td>\n          <td style=\"border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #000000;\n          text-transform: uppercase;\n          text-align: left;\n          font-weight: bold;\n          font-size: 14px;\n          padding: 4px;\">{{totalPower}}</td>\n        </tr>\n        <tr device-details>\n          <td style=\"border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #E8981F;\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">Total Earnings(₹)</td>\n          <td style=\"border: 1px solid #888888;\n          font-family: 'poppins-bold-600';\n          color: #000000;\n          text-transform: uppercase;\n          text-align: left;\n          font-size: 14px;\n          font-weight: bold;\n          padding: 4px;\">{{totalEarnings}}</td>\n        </tr>\n      </table>\n      <div style=\"\n      font-family: 'poppins-regular-400';\n      color: #000000;\n      text-align: left;\n      font-size: 12px;\n      font-weight: regular;\n      padding: 4px;\">Power(pwr) units in <b>Kw</b>, Earnings in Indian Rupees <b>₹</b></div>\n      <div style=\"\n      font-family: 'poppins-regular-400';\n      color: #000000;\n      text-transform: uppercase;\n      text-align: left;\n      font-size: 12px;\n      font-weight: regular;\n      padding: 4px;\">Report generated on : {{reportGenDate}}</div>\n    </div>\n    \n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 17025:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/reports/reports.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"Reports\"\n  redirectTo=\"dashboard\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n></app-header>\n\n<ion-content content-color>\n    <form [formGroup]=\"reportsForm\" (ngSubmit)=\"openReportsView()\">\n  <div reports-entry-container>\n    <ion-item>\n      <div manual-entry-container>\n        <div>\n          <ion-label deviceid-label position=\"stacked\">Device ID (10 to 15 digit code)</ion-label>\n          <ion-input formControlName=\"deviceId\" type=\"text\" recharge-input></ion-input>\n        </div>\n\n        <div (click)=\"openQrScanner()\">\n          <ion-icon [src]=\"scanIcon\"></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n    <div error-container>\n        <span *ngIf=\"(reportsForm.controls.deviceId.touched || submitted) && reportsForm.controls.deviceId.errors?.required\"> Device ID required </span>\n        <span *ngIf=\"(reportsForm.controls.deviceId.touched || submitted) && reportsForm.controls.deviceId.errors?.pattern\"> Invalid Characters entered </span>\n        <span *ngIf=\"(reportsForm.controls.deviceId.touched || submitted) && reportsForm.controls.deviceId.errors?.minlength\"> ID must be at least 10 characters length</span>\n        <span *ngIf=\"(reportsForm.controls.deviceId.touched || submitted) && reportsForm.controls.deviceId.errors?.maxlength\"> ID must not exceed 15 characters length</span>\n        </div>\n    <ion-item freq-container>\n      <ion-label deviceid-label position=\"stacked\">Frequency</ion-label>\n      <ion-select\n        formControlName=\"frequency\"\n        frequency-selection\n        placeholder=\"Select One\"\n        interface=\"action-sheet\"\n        [interfaceOptions]=\"action_sheet_reports\"\n        (ionChange)=\"onFrequencyChange($event)\">\n        <ion-select-option value=\"today\">Today</ion-select-option>\n        <ion-select-option value=\"week\">1 Week</ion-select-option>\n        <ion-select-option value=\"month\">1 Month</ion-select-option>\n        <ion-select-option value=\"custom\">Custom</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div error-container>\n        <span *ngIf=\"(reportsForm.controls.frequency.touched || submitted) && reportsForm.controls.frequency.errors?.required\"> Invalid Frequency selection </span>\n    </div>\n    <div reports-date-container *ngIf=\"showDates\">\n        <ion-item date-input>\n            <!-- <div manual-entry-container>\n              <div> -->\n                <ion-label deviceid-label  position=\"stacked\">From</ion-label>\n                <ion-input [max]=\"maxFromDate\" [min]=\"minFromDate\" (ionChange)=\"getFromDate($event)\" formControlName=\"fromDate\" type=\"date\" min=\"2022-01-01\" max=\"2022-12-31\" recharge-input></ion-input>\n              <!-- </div>\n            </div> -->\n          </ion-item>\n          <ion-item date-input>\n            <!-- <div manual-entry-container>\n              <div> -->\n                <ion-label deviceid-label position=\"stacked\">To</ion-label>\n                <ion-input (ionChange)=\"getToDate($event)\" [max]=\"maxToDate\" [min]=\"minToDate\" [max]=\"maxToDate\" formControlName=\"toDate\" type=\"date\" recharge-input></ion-input>\n              <!-- </div>\n            </div> -->\n          </ion-item>\n    </div>\n    <div button-container reports-button-container>\n        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!reportsForm.valid\" button-regular>GET REPORTS</ion-button>\n      </div>\n  </div>\n</form>\n</ion-content>\n");

/***/ }),

/***/ 19192:
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/reports-view/reports-view.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "[toolbar-style] [header-secondary-button] {\n  width: 32px !important;\n  height: 32px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicmVwb3J0cy12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlt0b29sYmFyLXN0eWxlXSBbaGVhZGVyLXNlY29uZGFyeS1idXR0b25dIHtcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 41783:
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_reports_module_ts.js.map