"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_wallet_recharge_recharge_module_ts"],{

/***/ 66875:
/*!******************************************************************!*\
  !*** ./src/app/pages/wallet/recharge/recharge-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RechargePageRoutingModule": () => (/* binding */ RechargePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _recharge_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recharge.page */ 95374);




const routes = [
    {
        path: '',
        component: _recharge_page__WEBPACK_IMPORTED_MODULE_0__.RechargePage
    }
];
let RechargePageRoutingModule = class RechargePageRoutingModule {
};
RechargePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RechargePageRoutingModule);



/***/ }),

/***/ 41466:
/*!**********************************************************!*\
  !*** ./src/app/pages/wallet/recharge/recharge.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RechargePageModule": () => (/* binding */ RechargePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _recharge_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recharge-routing.module */ 66875);
/* harmony import */ var _recharge_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recharge.page */ 95374);







let RechargePageModule = class RechargePageModule {
};
RechargePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recharge_routing_module__WEBPACK_IMPORTED_MODULE_0__.RechargePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_recharge_page__WEBPACK_IMPORTED_MODULE_1__.RechargePage]
    })
], RechargePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_wallet_recharge_recharge_module_ts.js.map