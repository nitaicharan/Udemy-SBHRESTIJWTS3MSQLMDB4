(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/categorias/categorias.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/categorias/categorias.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button routerLink=\"/cart\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let item of items$ | async\" routerLink=\"/produtos/{{item.id}}\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{bucketUrl}}/cat{{item.id}}.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2> {{ item.nome }} </h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/pages/categorias/categorias-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/categorias/categorias-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function() { return CategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias.page */ "./src/pages/categorias/categorias.page.ts");




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ "./src/pages/categorias/categorias.module.ts":
/*!***************************************************!*\
  !*** ./src/pages/categorias/categorias.module.ts ***!
  \***************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/pages/categorias/categorias-routing.module.ts");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "./src/pages/categorias/categorias.page.ts");







let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "./src/pages/categorias/categorias.page.scss":
/*!***************************************************!*\
  !*** ./src/pages/categorias/categorias.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/categorias/categorias.page.ts":
/*!*************************************************!*\
  !*** ./src/pages/categorias/categorias.page.ts ***!
  \*************************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domain/categoria.service */ "./src/services/domain/categoria.service.ts");





let CategoriasPage = class CategoriasPage {
    constructor(categoriaService) {
        this.bucketUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BUCKET_URL;
        this.items$ = categoriaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response.body));
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] }
];
CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/categorias/categorias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias.page.scss */ "./src/pages/categorias/categorias.page.scss")).default]
    })
], CategoriasPage);



/***/ })

}]);
//# sourceMappingURL=pages-categorias-categorias-module-es2015.js.map