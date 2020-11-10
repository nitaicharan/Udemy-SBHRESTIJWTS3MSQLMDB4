(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/payment/payment.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/payment/payment.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"formGroup\">\n\n\n    <ion-list>\n      <ion-radio-group value=\"pagamentoComCartao\" formControlName=\"@type\">\n        <ion-list-header>\n          <ion-label>Tipo de pagamento</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Pagamento com cartão</ion-label>\n          <ion-radio slot=\"start\" value=\"pagamentoComCartao\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Pagamento com boleto</ion-label>\n          <ion-radio slot=\"start\" value=\"pagamentoComBoleto\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item *ngIf=\"formGroup.value['@type'] == 'pagamentoComCartao'\">\n      <ion-label>Parcelas no boleto</ion-label>\n      <ion-select formControlName=\"numeroDeParcelas\">\n        <ion-select-option *ngFor=\"let n of parcelas; first as f\" [value]=\"n\">\n          {{n}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button [disabled]=\"formGroup.invalid\" (click)=\"nextPage()\" expand=\"block\">Próximo</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/pages/payment/payment-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/payment/payment-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/pages/payment/payment.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/payment/payment.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/pages/payment/payment.page.scss":
/*!*********************************************!*\
  !*** ./src/pages/payment/payment.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/payment/payment.page.ts":
/*!*******************************************!*\
  !*** ./src/pages/payment/payment.page.ts ***!
  \*******************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let PaymentPage = class PaymentPage {
    constructor(router, formBuilder) {
        this.router = router;
        this.parcelas = [...Array(10).keys()];
        this.pedido = this.router.getCurrentNavigation().extras.state.pedido;
        this.formGroup = formBuilder.group({
            numeroDeParcelas: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            '@type': ['pagamentoComCartao', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    nextPage() {
        this.pedido.pagamento = this.formGroup.value;
        const navigationExtras = { state: { pedido: this.pedido } };
        this.router.navigate(['/order-confirmation'], navigationExtras);
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map