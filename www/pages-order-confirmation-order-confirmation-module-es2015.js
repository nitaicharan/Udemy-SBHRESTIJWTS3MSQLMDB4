(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-confirmation-order-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"codpedido\">Pedido registrado!</ion-title>\n    <ion-title *ngIf=\"!codpedido\">Confira seu pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header class=\"ion-inherit-color md hydrated\">\n      <ion-card-title> Itens do pedido </ion-card-title>\n    </ion-card-header>\n\n    <ion-item *ngFor=\"let item of cartItems\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.produto.imageUrl || 'assets/imgs/prod.jpg'\">\n      </ion-thumbnail>\n\n      <ion-label>\n        <h2>{{item.produto.nome}}</h2>\n        <p class=\"nolinebreak\">{{item.quantidade}}</p>\n        <p item-end>{{item.produto.preco * item.quantidade | currency}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n\n  <ng-container *ngIf=\"cliente$ | async as cliente\">\n    <div *ngIf=\"codpedido\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> Cliente </ion-card-title>\n        </ion-card-header>\n\n        <ion-item>\n          <h2>{{cliente?.nome}}</h2>\n          <p>{{cliente?.email}}</p>\n        </ion-item>\n      </ion-card>\n\n      <ng-container *ngIf=\"findEndereco(cliente) as endereco\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title> Endereço de entrega </ion-card-title>\n          </ion-card-header>\n\n          <ion-item>\n            <h2>{{endereco?.logradouro}}, {{endereco?.numero}}</h2>\n            <p>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</p>\n            <p>{{endereco?.cidade.nome}}, {{endereco?.cidade.estado.nome}}</p>\n          </ion-item>\n        </ion-card>\n      </ng-container>\n    </div>\n  </ng-container>\n\n\n  <div *ngIf=\"codpedido\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title> Pagamento </ion-card-title>\n      </ion-card-header>\n\n      <ng-container *ngIf=\"pedido.pagamento['@type']=='pagamentoComCartao'\">\n        <ion-item>\n          <ion-label> Pagamento com cartão </ion-label>\n          <p>Parcelas: {{pedido.pagamento.numeroDeParcelas}}</p>\n        </ion-item>\n      </ng-container>\n      <ng-container *ngIf=\"pedido.pagamento['@type']=='pagamentoComBoleto'\">\n        <ion-item>\n          <ion-label> Pagamento com boleto </ion-label>\n        </ion-item>\n      </ng-container>\n\n      <ion-button expand=\"block\" color=\"primary\" (click)=\"checkout()\">Confirmar pedido</ion-button>\n      <ion-button expand=\"block\" color=\"secondary\" routerLink=\"/cart\">Voltar</ion-button>\n    </ion-card>\n\n    <ion-button expand=\"block\" color=\"secondary\" routerLink=\"/cart\">Voltar</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrderConfirmationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageRoutingModule", function() { return OrderConfirmationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/pages/order-confirmation/order-confirmation.page.ts");




const routes = [
    {
        path: '',
        component: _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmationPage"]
    }
];
let OrderConfirmationPageRoutingModule = class OrderConfirmationPageRoutingModule {
};
OrderConfirmationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderConfirmationPageRoutingModule);



/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.module.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/domain/pedido.service */ "./src/services/domain/pedido.service.ts");
/* harmony import */ var _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-confirmation-routing.module */ "./src/pages/order-confirmation/order-confirmation-routing.module.ts");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/pages/order-confirmation/order-confirmation.page.ts");








let OrderConfirmationPageModule = class OrderConfirmationPageModule {
};
OrderConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderConfirmationPageRoutingModule"]
        ],
        declarations: [_order_confirmation_page__WEBPACK_IMPORTED_MODULE_7__["OrderConfirmationPage"]],
        providers: [src_services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"]]
    })
], OrderConfirmationPageModule);



/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.page.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/pages/order-confirmation/order-confirmation.page.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/order-confirmation/order-confirmation.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrderConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPage", function() { return OrderConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/domain/cliente.service */ "./src/services/domain/cliente.service.ts");
/* harmony import */ var src_services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/domain/pedido.service */ "./src/services/domain/pedido.service.ts");







let OrderConfirmationPage = class OrderConfirmationPage {
    constructor(router, clienteService, cartService, pedidoService) {
        this.router = router;
        this.cartService = cartService;
        this.pedidoService = pedidoService;
        this.pedido = this.router.getCurrentNavigation().extras.state.pedido;
        this.cartItems = this.cartService.getCart().items;
        clienteService.findById(this.pedido.cliente.id);
    }
    findEndereco(client) {
        const id = this.pedido.enderecoDeEntrega.id;
        const list = client['enderecos'];
        const position = list.findIndex(x => x.id === id);
        return list[position];
    }
    total() {
        return this.cartService.total();
    }
    checkout() {
        this.pedidoService.insert(this.pedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.cartService.createOrClearCart()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => this.codpedido = this.extractId(response.headers.get('location'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 403) {
                return this.router.navigateByUrl('/');
            }
        })).subscribe();
    }
    extractId(location) {
        const position = location.lastIndexOf('/');
        return location.substring(position + 1);
    }
};
OrderConfirmationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] },
    { type: src_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"] }
];
OrderConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/order-confirmation/order-confirmation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-confirmation.page.scss */ "./src/pages/order-confirmation/order-confirmation.page.scss")).default]
    })
], OrderConfirmationPage);



/***/ }),

/***/ "./src/services/domain/pedido.service.ts":
/*!***********************************************!*\
  !*** ./src/services/domain/pedido.service.ts ***!
  \***********************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




let PedidoService = class PedidoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.insert = (pedidoDTO) => this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/pedidos`, pedidoDTO, {
            observe: 'response',
            responseType: 'text'
        });
    }
};
PedidoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PedidoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], PedidoService);



/***/ })

}]);
//# sourceMappingURL=pages-order-confirmation-order-confirmation-module-es2015.js.map