"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_terms-and-conditions_terms-and-conditions_module_ts"],{

/***/ 88626:
/*!*****************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsPageRoutingModule": () => (/* binding */ TermsAndConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.page */ 62207);




const routes = [
    {
        path: '',
        component: _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsPage
    }
];
let TermsAndConditionsPageRoutingModule = class TermsAndConditionsPageRoutingModule {
};
TermsAndConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndConditionsPageRoutingModule);



/***/ }),

/***/ 13433:
/*!*********************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsPageModule": () => (/* binding */ TermsAndConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions-routing.module */ 88626);
/* harmony import */ var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-conditions.page */ 62207);
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/header/header.component */ 53124);








let TermsAndConditionsPageModule = class TermsAndConditionsPageModule {
};
TermsAndConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsPageRoutingModule,
        ],
        declarations: [_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionsPage, src_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], TermsAndConditionsPageModule);



/***/ }),

/***/ 62207:
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsPage": () => (/* binding */ TermsAndConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_and_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./terms-and-conditions.page.html */ 9381);
/* harmony import */ var _terms_and_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-conditions.page.scss */ 74280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 425);






let TermsAndConditionsPage = class TermsAndConditionsPage {
    constructor(utils) {
        this.utils = utils;
        this.termsPoints = [];
    }
    ngOnInit() {
        this.sourcePage = this.utils.getPageParams().sourcePage;
    }
    ionViewDidEnter() {
        this.termsPoints = _constants__WEBPACK_IMPORTED_MODULE_3__.TERMS_AND_CONDITIONS;
    }
};
TermsAndConditionsPage.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.Utils }
];
TermsAndConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-terms-and-conditions',
        template: _home_snehakolimi_workspaces_chargemanpro_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_and_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_terms_and_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsAndConditionsPage);



/***/ }),

/***/ 9381:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/terms-and-conditions/terms-and-conditions.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Terms & Conditions\" [redirectTo]='sourcePage' iconPath=\"../../assets/icon/back_icon.svg\"></app-header>\n\n<ion-content content-color>\n<div terms-image-container>\n    <img src=\"../../assets/icon/loginimg.png\">\n</div>\n\n<div terms-content>\n<div heading-container>Terms & Conditions</div>\n\n<div terms-points-heading>\n  <p>By downloading or using the app, these terms will automatically apply to you</p> <p>you should make sure therefore that you read them carefully before using the app.</p>\n</div>\n<div terms-points>\n  <li *ngFor=\"let point of termsPoints\">{{point}}</li>\n</div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ 74280:
/*!*********************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hbmQtY29uZGl0aW9ucy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_terms-and-conditions_terms-and-conditions_module_ts.js.map