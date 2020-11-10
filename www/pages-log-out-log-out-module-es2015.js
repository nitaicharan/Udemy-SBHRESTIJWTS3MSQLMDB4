(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-log-out-log-out-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/log-out/log-out.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/log-out/log-out.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>log-out</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/log-out/log-out-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/log-out/log-out-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LogOutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPageRoutingModule", function() { return LogOutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _log_out_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-out.page */ "./src/pages/log-out/log-out.page.ts");




const routes = [
    {
        path: '',
        component: _log_out_page__WEBPACK_IMPORTED_MODULE_3__["LogOutPage"]
    }
];
let LogOutPageRoutingModule = class LogOutPageRoutingModule {
};
LogOutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogOutPageRoutingModule);



/***/ }),

/***/ "./src/pages/log-out/log-out.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/log-out/log-out.module.ts ***!
  \*********************************************/
/*! exports provided: LogOutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPageModule", function() { return LogOutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _log_out_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-out-routing.module */ "./src/pages/log-out/log-out-routing.module.ts");
/* harmony import */ var _log_out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-out.page */ "./src/pages/log-out/log-out.page.ts");







let LogOutPageModule = class LogOutPageModule {
};
LogOutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _log_out_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogOutPageRoutingModule"]
        ],
        declarations: [_log_out_page__WEBPACK_IMPORTED_MODULE_6__["LogOutPage"]]
    })
], LogOutPageModule);



/***/ }),

/***/ "./src/pages/log-out/log-out.page.scss":
/*!*********************************************!*\
  !*** ./src/pages/log-out/log-out.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbG9nLW91dC9sb2ctb3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/log-out/log-out.page.ts":
/*!*******************************************!*\
  !*** ./src/pages/log-out/log-out.page.ts ***!
  \*******************************************/
/*! exports provided: LogOutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPage", function() { return LogOutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");




let LogOutPage = class LogOutPage {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.service.logout();
        this.router.navigateByUrl('/');
    }
};
LogOutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LogOutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-out',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./log-out.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/log-out/log-out.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./log-out.page.scss */ "./src/pages/log-out/log-out.page.scss")).default]
    })
], LogOutPage);



/***/ })

}]);
//# sourceMappingURL=pages-log-out-log-out-module-es2015.js.map