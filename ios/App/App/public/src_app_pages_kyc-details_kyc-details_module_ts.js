"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_kyc-details_kyc-details_module_ts"],{

/***/ 31028:
/*!*****************************************************************!*\
  !*** ./src/app/pages/kyc-details/kyc-details-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycDetailsPageRoutingModule": () => (/* binding */ KycDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _kyc_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-details.page */ 70709);




const routes = [
    {
        path: '',
        component: _kyc_details_page__WEBPACK_IMPORTED_MODULE_0__.KycDetailsPage
    }
];
let KycDetailsPageRoutingModule = class KycDetailsPageRoutingModule {
};
KycDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KycDetailsPageRoutingModule);



/***/ }),

/***/ 95553:
/*!*********************************************************!*\
  !*** ./src/app/pages/kyc-details/kyc-details.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycDetailsPageModule": () => (/* binding */ KycDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _kyc_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-details-routing.module */ 31028);
/* harmony import */ var _kyc_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-details.page */ 70709);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let KycDetailsPageModule = class KycDetailsPageModule {
};
KycDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _kyc_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.KycDetailsPageRoutingModule
        ],
        declarations: [_kyc_details_page__WEBPACK_IMPORTED_MODULE_1__.KycDetailsPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], KycDetailsPageModule);



/***/ }),

/***/ 70709:
/*!*******************************************************!*\
  !*** ./src/app/pages/kyc-details/kyc-details.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycDetailsPage": () => (/* binding */ KycDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_kyc_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./kyc-details.page.html */ 8516);
/* harmony import */ var _kyc_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-details.page.scss */ 55568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chargeman-request.service */ 94273);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 18260);








let KycDetailsPage = class KycDetailsPage {
    constructor(utils, chargeManReq) {
        this.utils = utils;
        this.chargeManReq = chargeManReq;
        this.aadharPicURL = '';
        this.panPicURL = '';
        this.isPanSelected = false;
        this.isAadharSelected = false;
        this.aadharStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.AADHAR_STATUS_TEXT;
        this.panStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.PAN_STATUS_TEXT;
        this.isAadharLoading = false;
        this.isPanLoading = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetails = yield this.utils.getStoredUserDetails();
            this.aadharPicURL = (this.userDetails.aadhar !== '') ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.SERVER_URL + src_app_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.APPEND_UPLOAD_URL + this.userDetails.aadhar : '';
            if (this.aadharPicURL !== '') {
                this.isAadharLoading = false;
                this.isAadharSelected = true;
                const fileName = this.aadharPicURL.substring(this.aadharPicURL.lastIndexOf('/') + 1);
                this.aadharPicName = fileName;
            }
            this.panPicURL = (this.userDetails.pancard !== '') ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.SERVER_URL + src_app_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.APPEND_UPLOAD_URL + this.userDetails.pancard : '';
            if (this.panPicURL !== '') {
                this.isPanLoading = false;
                this.isPanSelected = true;
                const fileName = this.panPicURL.substring(this.panPicURL.lastIndexOf('/') + 1);
                this.panPicName = fileName;
            }
        });
    }
    openUploadOptions(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isPanLoading && !this.isAadharLoading) {
                const button_menu = [
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        data: {
                            action_type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.ACTION_SHEET_TYPE,
                            type: 'camera'
                        },
                    },
                    {
                        text: 'Storage',
                        icon: 'file-tray-full-outline',
                        data: {
                            action_type: src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.ACTION_SHEET_TYPE,
                            type: 'storage'
                        },
                    }
                ];
                const sheetCallback = yield this.utils.getActionSheetMenu(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.ACTION_SHEET_KYC_TITLE, button_menu);
                const cameraPermission = yield this.utils.getCameraPermissions();
                if (cameraPermission === 'yes') {
                    const photoPath = yield this.utils.getPhoto(sheetCallback.type);
                    if (type === 'aadhar') {
                        this.isAadharLoading = true;
                        this.isAadharSelected = false;
                        this.aadharStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.UPLOADING;
                        this.uploadImageToServer(photoPath, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPLOAD_TYPE_AADHAR);
                    }
                    else {
                        this.isPanLoading = true;
                        this.isPanSelected = false;
                        this.panStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.UPLOADING;
                        this.uploadImageToServer(photoPath, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPLOAD_TYPE_PAN);
                    }
                }
                else if (cameraPermission === 'hardware not found') {
                    this.utils.displayDialog(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.DIALOG_TYPE_ALERT, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.HARDWARE_ERR, src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.NO_CAM_HARDWARE_FOUND, [src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
                }
            }
            else {
                this.utils.presentToast(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.FILE_UPLOAD_PROGRESS, [], 3000);
            }
        });
    }
    uploadImageToServer(photoDetails, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const fileName = type === src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPLOAD_TYPE_AADHAR ? 'aadhar.jpeg' : 'pan.jpeg';
            const formData = new FormData();
            formData.append("image", photoDetails.blob, fileName);
            formData.append("code", this.userDetails.mobile);
            formData.append("filename", type);
            this.chargeManReq.postRequestDetails(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.RELATIVE_URLS.UPLOAD_FILES, formData).subscribe((res) => {
                if (res && res.imgPath) {
                    if (type === src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPLOAD_TYPE_AADHAR) {
                        this.isAadharLoading = false;
                        this.isAadharSelected = true;
                        this.aadharPicURL = photoDetails.path;
                        this.aadharPicName = 'aadhar_' + this.aadharPicURL.substring(this.aadharPicURL.lastIndexOf('/') + 1);
                    }
                    else {
                        this.isPanSelected = true;
                        this.isPanLoading = false;
                        this.panPicURL = photoDetails.path;
                        this.panPicName = 'pan_' + this.panPicURL.substring(this.panPicURL.lastIndexOf('/') + 1);
                    }
                }
            }, (err) => {
                if (type === src_app_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.UPLOAD_TYPE_AADHAR) {
                    this.isAadharSelected = false;
                    this.isAadharLoading = false;
                    this.aadharStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.UPLOAD_ERR;
                }
                else {
                    this.isPanSelected = false;
                    this.isPanLoading = false;
                    this.panStatusText = src_app_constants__WEBPACK_IMPORTED_MODULE_2__.DISPLAY_MESSAGES.UPLOAD_ERR;
                }
            });
        });
    }
};
KycDetailsPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: src_app_services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_3__.ChargemanRequestService }
];
KycDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-kyc-details',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_kyc_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kyc_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], KycDetailsPage);



/***/ }),

/***/ 8516:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/kyc-details/kyc-details.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"KYC\"\n  redirectTo=\"dashboard\"\n  iconPath=\"../../../assets/icon/back_icon.svg\"\n></app-header>\n\n<ion-content content-color>\n  <div kyc-parent-container>\n    <div upload-container (click)=\"openUploadOptions('aadhar')\">\n      <div image-hint *ngIf=\"!isAadharSelected\">\n        <ion-icon *ngIf=\"!isAadharLoading\" name=\"image-outline\"></ion-icon>\n        <ion-spinner *ngIf=\"isAadharLoading\"></ion-spinner>\n        <ion-label>{{aadharStatusText}}</ion-label>\n      </div>\n      <div image-display *ngIf=\"isAadharSelected\">\n        <img [src]=\"aadharPicURL\" />\n        <div check-container>\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n        </div>\n        <div name-container>\n          <ion-label>{{aadharPicName}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div upload-container (click)=\"openUploadOptions('pan')\">\n      <div image-hint *ngIf=\"!isPanSelected\">\n        <ion-icon *ngIf=\"!isPanLoading\" name=\"image-outline\"></ion-icon>\n        <ion-spinner *ngIf=\"isPanLoading\"></ion-spinner>\n        <ion-label>{{panStatusText}}</ion-label>\n      </div>\n      <div image-display *ngIf=\"isPanSelected\">\n        <img [src]=\"panPicURL\" />\n        <div check-container>\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n        </div>\n        <div name-container>\n          <ion-label>{{panPicName}}</ion-label>\n        </div>\n      </div>\n     \n    </div>\n\n    <div hint-container>\n      <span>Note: Supports JPEG, PNG image format only. Try using landscape mode for better image view</span>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 55568:
/*!*********************************************************!*\
  !*** ./src/app/pages/kyc-details/kyc-details.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJreWMtZGV0YWlscy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_kyc-details_kyc-details_module_ts.js.map