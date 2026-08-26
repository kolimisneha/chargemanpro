"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 92717:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 42820);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 24034:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 92717);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 42820);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], SupportPageModule);



/***/ }),

/***/ 42820:
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./support.page.html */ 55239);
/* harmony import */ var _support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss */ 97702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 76097);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ 425);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 44516);







let SupportPage = class SupportPage {
    constructor(utils, emailComposer) {
        this.utils = utils;
        this.emailComposer = emailComposer;
    }
    ngOnInit() {
        this.chargemenEmail = src_app_constants__WEBPACK_IMPORTED_MODULE_3__.GRACIAS_DETAILS.EMAIL_ADDRESS;
        this.chargemenContact = src_app_constants__WEBPACK_IMPORTED_MODULE_3__.GRACIAS_DETAILS.CONTACT_NUMBER;
        this.chargeManWebSite = src_app_constants__WEBPACK_IMPORTED_MODULE_3__.GRACIAS_DETAILS.WEBSITE;
    }
    openSupport(type) {
        if (type === 'call') {
            const mobileNumber = (this.chargemenContact.split('-')[1] + this.chargemenContact.split('-')[2] + this.chargemenContact.split('-')[3]);
            this.utils.callNumber(mobileNumber);
        }
        else if (type === 'website') {
            this.utils.openWebSite(this.chargeManWebSite, src_app_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.URL_TYPE_EXTERNAL);
        }
        else if (type === 'terms' || type === 'privacy') {
            const sourcePage = 'support-terms';
            const pageUrl = type === 'terms' ? '/terms-and-conditions' : '/privacy-policy';
            const extras = {
                state: {
                    sourcePage: sourcePage
                }
            };
            this.utils.navigateTo(src_app_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.NAV_FORWARD_WITH_OPT, pageUrl, extras);
        }
        else {
            this.utils.getStoredUserDetails().then((res) => {
                this.emailComposer.open({
                    app: 'mailto',
                    to: this.chargemenEmail,
                    subject: `${src_app_constants__WEBPACK_IMPORTED_MODULE_3__.DISPLAY_MESSAGES.EMAIL_HEADER} ${res.name} (${res.mobile})`
                });
            });
        }
    }
};
SupportPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__.EmailComposer }
];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-support',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_support_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupportPage);



/***/ }),

/***/ 55239:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/support/support.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Support\" redirectTo='dashboard' iconPath=\"../../../assets/icon/back_icon.svg\"></app-header>\n\n\n<ion-content content-color>\n  \n  <div support-container>\n    <ion-item lines=\"none\" support-item (click)=\"openSupport('email')\">    \n    <ion-label>{{chargemenEmail}}</ion-label>\n    <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\" support-item (click)=\"openSupport('call')\">    \n    <ion-label>{{chargemenContact}}</ion-label>\n    <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\" support-item (click)=\"openSupport('website')\">    \n    <ion-label>{{chargeManWebSite}}</ion-label>\n    <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\" support-item (click)=\"openSupport('terms')\">    \n    <ion-label>Terms & Conditions</ion-label>\n    <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\" support-item (click)=\"openSupport('privacy')\">    \n    <ion-label>Our Privacy Policy</ion-label>\n    <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 97702:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map