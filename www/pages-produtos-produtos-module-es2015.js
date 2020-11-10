(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-produtos-produtos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/produtos/produtos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/produtos/produtos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Produtos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"items$ | async as items\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button routerLink=\"/cart\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let item of items\" routerLink=\"/produto-detail/{{item.id}}\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.imageUrl || 'assets/imgs/prod.jpg'\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{item.nome}}</h2>\n        <p>{{item.preco | currency}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event, items)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Aguarde...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/pages/produtos/produtos-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/pages/produtos/produtos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProdutosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageRoutingModule", function() { return ProdutosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos.page */ "./src/pages/produtos/produtos.page.ts");




const routes = [
    { path: ':categoriaId', component: _produtos_page__WEBPACK_IMPORTED_MODULE_3__["ProdutosPage"] }
];
let ProdutosPageRoutingModule = class ProdutosPageRoutingModule {
};
ProdutosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdutosPageRoutingModule);



/***/ }),

/***/ "./src/pages/produtos/produtos.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/produtos/produtos.module.ts ***!
  \***********************************************/
/*! exports provided: ProdutosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produtos-routing.module */ "./src/pages/produtos/produtos-routing.module.ts");
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtos.page */ "./src/pages/produtos/produtos.page.ts");







let ProdutosPageModule = class ProdutosPageModule {
};
ProdutosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutosPageRoutingModule"]
        ],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]]
    })
], ProdutosPageModule);



/***/ }),

/***/ "./src/pages/produtos/produtos.page.scss":
/*!***********************************************!*\
  !*** ./src/pages/produtos/produtos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/pages/produtos/produtos.page.ts":
/*!*********************************************!*\
  !*** ./src/pages/produtos/produtos.page.ts ***!
  \*********************************************/
/*! exports provided: ProdutosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPage", function() { return ProdutosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/domain/produto.service */ "./src/services/domain/produto.service.ts");







let ProdutosPage = class ProdutosPage {
    constructor(activatedRoute, service) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.page = 0;
        this.items$ = this.loadData();
    }
    loadData(produtoDtos) {
        const categoriaId = this.activatedRoute.snapshot.params.categoriaId;
        return this.service.findByCategoria({ categorias: `${categoriaId}`, page: `${this.page}`, linesPerPage: `${10}` }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(p => {
            if (produtoDtos)
                return [...p, ...produtoDtos];
            return p;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(p => this.loadImageUrls(p)));
    }
    loadImageUrls(items) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(item => {
            return this.service.getSmallImageFromBucket(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => (Object.assign(Object.assign({}, item), { imageUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BUCKET_URL}/prod${item.id}-small.jpg` }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])((lista, produto) => [...lista, produto], []));
    }
    doRefresh(event) {
        this.items$ = this.loadData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.page = 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => setTimeout(() => event.target.complete(), 500)));
    }
    doInfinite(event, items) {
        this.items$ = this.loadData(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.page++), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => setTimeout(() => event.target.complete(), 500)));
    }
};
ProdutosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"] }
];
ProdutosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produtos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./produtos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/produtos/produtos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./produtos.page.scss */ "./src/pages/produtos/produtos.page.scss")).default]
    })
], ProdutosPage);



/***/ })

}]);
//# sourceMappingURL=pages-produtos-produtos-module-es2015.js.map