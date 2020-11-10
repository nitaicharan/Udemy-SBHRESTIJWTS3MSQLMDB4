(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pick-address-pick-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/pick-address/pick-address.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/pick-address/pick-address.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Fechamento de pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item button *ngFor=\"let item of items$ | async\" (click)=\"nextPage(item)\">\n      <ion-label>\n        <h2>{{item.logradouro}}, {{item.numero}}</h2>\n        <h3>{{item.complemento}} {{item.bairro}} CEP {{item.cep}}</h3>\n        <p>{{item.cidade.nome}}, {{item.cidade.estado.nome}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/pages/pick-address/pick-address-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/pages/pick-address/pick-address-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PickAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPageRoutingModule", function() { return PickAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pick_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick-address.page */ "./src/pages/pick-address/pick-address.page.ts");




const routes = [
    {
        path: '',
        component: _pick_address_page__WEBPACK_IMPORTED_MODULE_3__["PickAddressPage"]
    }
];
let PickAddressPageRoutingModule = class PickAddressPageRoutingModule {
};
PickAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PickAddressPageRoutingModule);



/***/ }),

/***/ "./src/pages/pick-address/pick-address.module.ts":
/*!*******************************************************!*\
  !*** ./src/pages/pick-address/pick-address.module.ts ***!
  \*******************************************************/
/*! exports provided: PickAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPageModule", function() { return PickAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pick_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pick-address-routing.module */ "./src/pages/pick-address/pick-address-routing.module.ts");
/* harmony import */ var _pick_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick-address.page */ "./src/pages/pick-address/pick-address.page.ts");







let PickAddressPageModule = class PickAddressPageModule {
};
PickAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pick_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickAddressPageRoutingModule"]
        ],
        declarations: [_pick_address_page__WEBPACK_IMPORTED_MODULE_6__["PickAddressPage"]]
    })
], PickAddressPageModule);



/***/ }),

/***/ "./src/pages/pick-address/pick-address.page.scss":
/*!*******************************************************!*\
  !*** ./src/pages/pick-address/pick-address.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcGljay1hZGRyZXNzL3BpY2stYWRkcmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/pages/pick-address/pick-address.page.ts":
/*!*****************************************************!*\
  !*** ./src/pages/pick-address/pick-address.page.ts ***!
  \*****************************************************/
/*! exports provided: PickAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPage", function() { return PickAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/domain/cliente.service */ "./src/services/domain/cliente.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/services/storage.service.ts");







let PickAddressPage = class PickAddressPage {
    constructor(router, cartService, storageService, clienteService) {
        this.router = router;
        const localUser = storageService.getLocalUser();
        if (!localUser || !(localUser === null || localUser === void 0 ? void 0 : localUser.email))
            router.navigateByUrl('/');
        this.items$ = clienteService.findByEmail(localUser.email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((cliente) => {
            const cart = cartService.getCart();
            this.pedido = {
                pagamento: null,
                enderecoDeEntrega: null,
                cliente: { id: cliente.id },
                itens: cart.items.map(i => ({ quantidade: i.quantidade, produto: { id: i.produto.id } }))
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((cliente) => cliente['enderecos']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    nextPage(item) {
        const navigationExtras = { state: { pedido: this.pedido } };
        this.pedido.enderecoDeEntrega = { id: item.id };
        this.router.navigate(['/payment'], navigationExtras);
    }
};
PickAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] }
];
PickAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/pick-address/pick-address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pick-address.page.scss */ "./src/pages/pick-address/pick-address.page.scss")).default]
    })
], PickAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-pick-address-pick-address-module-es2015.js.map