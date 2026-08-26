"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privacy-policy_privacy-policy_module_ts"],{

/***/ 50092:
/*!*****************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageRoutingModule": () => (/* binding */ PrivacyPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page */ 80533);




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPolicyPageRoutingModule);



/***/ }),

/***/ 99162:
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageModule": () => (/* binding */ PrivacyPolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 50092);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page */ 80533);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPageRoutingModule
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ 80533:
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./privacy-policy.page.html */ 44742);
/* harmony import */ var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss */ 65150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 425);






let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor(utils) {
        this.utils = utils;
        this.policyPoints = [];
        this.policyPoints2 = [];
        this.policyPoints3 = [];
        this.policyPoints4 = [];
        this.policyPoints5 = [];
        this.policyPoints6 = [];
    }
    ngOnInit() {
        this.policyPoints = [];
        this.policyPoint2Heading = '';
        this.policyPoints2 = [];
        this.policyPoint3Heading = '';
        this.policyPoints3 = [];
        this.policyPoint4Heading = '';
        this.policyPoints4 = [];
        this.policyPoint5Heading = '';
        this.policyPoints5 = [];
        this.policyPoint6Heading = '';
        this.policyPoints6 = [];
        this.sourcePage = this.utils.getPageParams().sourcePage;
    }
    ionViewDidEnter() {
        this.policyPoints = _constants__WEBPACK_IMPORTED_MODULE_3__.PRIVACY_POLICY_POINTS;
    }
};
PrivacyPolicyPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.Utils }
];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-privacy-policy',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ 44742:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/privacy-policy/privacy-policy.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Privacy Policy\" [redirectTo]='sourcePage' iconPath=\"../../assets/icon/back_icon.svg\"></app-header>\n\n<ion-content content-color>\n  <div terms-image-container>\n      <img src=\"../../assets/icon/loginimg.png\">\n  </div>\n  \n  <div terms-content>\n  <div heading-container>Privacy Policy</div>\n  \n  <div terms-points-heading>\n    <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>\n  </div>\n  <div terms-points>\n    <li *ngFor=\"let point of policyPoints\">{{point}}</li>\n  </div>\n \n\n  <div terms-points>\n    <p heading-text>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <span email-url>contact@evchargeman.com</span></p>\n  </div>\n  </div>\n  \n  </ion-content>\n  \n");

/***/ }),

/***/ 65150:
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_privacy-policy_privacy-policy_module_ts.js.map