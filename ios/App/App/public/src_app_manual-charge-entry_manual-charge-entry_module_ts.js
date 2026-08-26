"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_manual-charge-entry_manual-charge-entry_module_ts"],{

/***/ 60694:
/*!***************************************************************************!*\
  !*** ./src/app/manual-charge-entry/manual-charge-entry-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualChargeEntryPageRoutingModule": () => (/* binding */ ManualChargeEntryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-charge-entry.page */ 30628);




const routes = [
    {
        path: '',
        component: _manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_0__.ManualChargeEntryPage
    }
];
let ManualChargeEntryPageRoutingModule = class ManualChargeEntryPageRoutingModule {
};
ManualChargeEntryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManualChargeEntryPageRoutingModule);



/***/ }),

/***/ 20752:
/*!*******************************************************************!*\
  !*** ./src/app/manual-charge-entry/manual-charge-entry.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualChargeEntryPageModule": () => (/* binding */ ManualChargeEntryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _manual_charge_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-charge-entry-routing.module */ 60694);
/* harmony import */ var _manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-charge-entry.page */ 30628);







let ManualChargeEntryPageModule = class ManualChargeEntryPageModule {
};
ManualChargeEntryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _manual_charge_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManualChargeEntryPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        declarations: [_manual_charge_entry_page__WEBPACK_IMPORTED_MODULE_1__.ManualChargeEntryPage]
    })
], ManualChargeEntryPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_manual-charge-entry_manual-charge-entry_module_ts.js.map