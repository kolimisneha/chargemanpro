"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 94084:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 14434);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 44404:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 94084);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 14434);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ProfilePageModule);



/***/ }),

/***/ 14434:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 30259);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 80430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 425);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ 89270);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chargeman-request.service */ 94273);











let ProfilePage = class ProfilePage {
    constructor(router, activatedRoute, utils, navCtrl, auth, fb, chargemanReq) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.utils = utils;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fb = fb;
        this.chargemanReq = chargemanReq;
        this.redirectTo = '';
        this.mobileNumber = '';
        this.isReadonly = true;
        this.isTermsChecked = false;
        this.isTermsVisible = true;
    }
    ngOnInit() {
        let storedMobileNumber = '';
        let storedUserName = '';
        let storedEmail = '';
        this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.USER_DETAILS).then((res) => {
            if (res.value !== null && res.value !== '') {
                const storedDetails = JSON.parse(res.value);
                storedMobileNumber = storedDetails.mobile;
                storedUserName = storedDetails.name;
                storedEmail = storedDetails.email;
                this.isTermsChecked = true;
                this.isTermsVisible = false;
                this.profileForm.controls['mobileNumber'].setValue(storedMobileNumber);
                this.profileForm.controls['username'].setValue(storedUserName);
                this.profileForm.controls['emailAddress'].setValue(storedEmail);
            }
        });
        this.activatedRoute.queryParams.subscribe(params => {
            const _params = this.router.getCurrentNavigation().extras.state;
            this.redirectTo = _params.pageName;
            this.mobileNumber = _params === null || _params === void 0 ? void 0 : _params.mob;
            if (this.redirectTo === 'dashboard') {
                this.isReadonly = true;
            }
            else {
                this.isReadonly = true;
                storedMobileNumber = this.mobileNumber;
            }
        });
        this.profileForm = this.fb.group({
            mobileNumber: [storedMobileNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_3__.REGEX.MOB_NUM_REGEX)])],
            username: [storedUserName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_3__.REGEX.USER_NAME_REGEX), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)])],
            emailAddress: [storedEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_3__.REGEX.EMAIL_PATTERN)])]
        });
    }
    ionViewWillEnter() {
    }
    onSubmit() {
        this.utils.showLoader(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.LOADING_MESSAGE);
        const profile_details = {
            "mobileNo": this.profileForm.value.mobileNumber,
            "name": this.profileForm.value.username,
            "email": this.profileForm.value.emailAddress
        };
        this.chargemanReq.postRequestDetails('updateProfile', profile_details).subscribe((res) => {
            if (res && res.message === 'success') {
                this.utils.dismissLoader();
                if (this.redirectTo === 'login') {
                    this.auth.setLoginFlag();
                    const userDetails = { "name": this.profileForm.value.username, "email": this.profileForm.value.emailAddress, "mobile": this.profileForm.value.mobileNumber };
                    this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.USER_DETAILS, JSON.stringify(userDetails));
                    this.navCtrl.navigateRoot('/pages/sidemenu');
                    this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.PROFILE_SAVED_SUCCESSFULLY, [], 3000);
                }
                else {
                    this.utils.getStoredDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.USER_DETAILS).then((res) => {
                        if (res.value) {
                            let existingDetails = JSON.parse(res.value);
                            existingDetails.email = this.profileForm.value.emailAddress;
                            existingDetails.mobile = this.profileForm.value.mobileNumber;
                            existingDetails.name = this.profileForm.value.username;
                            this.utils.storeDetails(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.USER_DETAILS, JSON.stringify(existingDetails));
                            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.PROFILE_DETAILS_UPDATED, [], 3000);
                        }
                    });
                    this.navCtrl.navigateBack('/pages/sidemenu');
                }
            }
            else {
                this.utils.dismissLoader();
                this.utils.presentToast('Some error occured while updating profile', [], 3000);
            }
        }, (err) => {
            this.utils.dismissLoader();
            this.utils.presentToast(_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000);
        });
    }
    openPage(type) {
        const pageroute = type === 'terms' ? '/terms-and-conditions' : '/privacy-policy';
        const extras = {
            state: {
                sourcePage: 'profile-terms-privacy'
            }
        };
        this.utils.navigateTo(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, pageroute, extras);
    }
    onTermsAgreeHandler(event) {
        this.isTermsChecked = event.target.checked;
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.Utils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.Authentication },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_chargeman_request_service__WEBPACK_IMPORTED_MODULE_5__.ChargemanRequestService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _home_snehakolimi_workspaces_ev_chargeman_main_1_ev_chargeman_main_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 30259:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"My Profile\" [redirectTo]='redirectTo' iconPath=\"../../assets/icon/back_icon.svg\"></app-header>\n\n<ion-content content-color>\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  <div profile-parent-container>\n      <ion-item profile-item>\n        <ion-label position=\"stacked\">Mobile Number<span>*</span></ion-label>\n        <ion-input [readonly]=\"isReadonly\" formControlName=\"mobileNumber\"></ion-input>\n      </ion-item>\n      <div error-container>\n      <span *ngIf=\"(profileForm.controls.mobileNumber.touched || submitted) && profileForm.controls.mobileNumber.errors?.required\"> Mobile number is required </span>\n      <span *ngIf=\"(profileForm.controls.mobileNumber.touched || submitted) && profileForm.controls.mobileNumber.errors?.pattern\"> Invalid mobile number </span>\n      </div>\n  </div>\n\n  <div profile-parent-container>\n    <ion-item profile-item>\n      <ion-label position=\"stacked\">Name<span>*</span></ion-label>\n      <ion-input formControlName=\"username\"></ion-input>\n    </ion-item>\n    <div error-container>\n      <span *ngIf=\"(profileForm.controls.username.touched || submitted) && profileForm.controls.username.errors?.required\"> Name is required </span>\n      <span *ngIf=\"(profileForm.controls.username.touched || submitted) && profileForm.controls.username.errors?.pattern\"> Name requires only alphabets</span>\n      <span *ngIf=\"(profileForm.controls.username.touched || submitted) && profileForm.controls.username.errors?.minlength\"> Name requires atleast 3 characters</span>\n      <span *ngIf=\"(profileForm.controls.username.touched || submitted) && profileForm.controls.username.errors?.maxlength\"> Name doesn't exceeds 20 characters</span>\n    </div>\n</div>\n\n<div profile-parent-container>\n  <ion-item profile-item>\n    <ion-label position=\"stacked\">Email ID<span>*</span></ion-label>\n    <ion-input formControlName=\"emailAddress\"></ion-input>\n  </ion-item>\n  <div error-container>\n    <span *ngIf=\"(profileForm.controls.emailAddress.touched || submitted) && profileForm.controls.emailAddress.errors?.required\"> Email address is required </span>\n    <span *ngIf=\"(profileForm.controls.emailAddress.touched || submitted) && profileForm.controls.emailAddress.errors?.pattern\"> Invalid email address </span>\n    </div>\n</div>\n<div profile-parent-container *ngIf=\"isTermsVisible\">\n  <div profile-item-terms>\n    <ion-checkbox (ionChange)=\"onTermsAgreeHandler($event)\" checkbox-terms></ion-checkbox>\n    <ion-label terms-label>I agree to the <span (click)=\"openPage('terms')\">Terms and Conditions</span> & <span (click)=\"openPage('privacy')\">Privacy Policy</span></ion-label>\n  </div>\n</div>\n\n\n<ion-button [disabled]=\"(!profileForm.valid || !isTermsChecked)\" type=\"submit\" profile-submit-button>Submit</ion-button>\n\n</form>\n</ion-content>\n");

/***/ }),

/***/ 80430:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map