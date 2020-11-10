(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-produto-detail-produto-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/pages/produto-detail/produto-detail.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/produto-detail/produto-detail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcPagesProdutoDetailProdutoDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Produto Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"item$ | async as item\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button routerLink=\"/cart\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-card class=\"md hydrated\">\n    <img [src]=\"item.imageUrl || 'assets/imgs/prod.jpg'\">\n\n    <ion-card-header class=\"ion-inherit-color md hydrated\">\n      <ion-card-title>{{item.nome}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content> {{item.preco | currency}} </ion-card-content>\n\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"addToCart(item)\">Adicionar ao carrinho</ion-button>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/pages/produto-detail/produto-detail-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/pages/produto-detail/produto-detail-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProdutoDetailPageRoutingModule */

    /***/
    function srcPagesProdutoDetailProdutoDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoDetailPageRoutingModule", function () {
        return ProdutoDetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _produto_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produto-detail.page */
      "./src/pages/produto-detail/produto-detail.page.ts");

      var routes = [{
        path: '',
        component: _produto_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProdutoDetailPage"]
      }, {
        path: ':produtoId',
        component: _produto_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProdutoDetailPage"]
      }];

      var ProdutoDetailPageRoutingModule = function ProdutoDetailPageRoutingModule() {
        _classCallCheck(this, ProdutoDetailPageRoutingModule);
      };

      ProdutoDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProdutoDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/pages/produto-detail/produto-detail.module.ts":
    /*!***********************************************************!*\
      !*** ./src/pages/produto-detail/produto-detail.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProdutoDetailPageModule */

    /***/
    function srcPagesProdutoDetailProdutoDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoDetailPageModule", function () {
        return ProdutoDetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _produto_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./produto-detail-routing.module */
      "./src/pages/produto-detail/produto-detail-routing.module.ts");
      /* harmony import */


      var _produto_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./produto-detail.page */
      "./src/pages/produto-detail/produto-detail.page.ts");

      var ProdutoDetailPageModule = function ProdutoDetailPageModule() {
        _classCallCheck(this, ProdutoDetailPageModule);
      };

      ProdutoDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _produto_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutoDetailPageRoutingModule"]],
        declarations: [_produto_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoDetailPage"]]
      })], ProdutoDetailPageModule);
      /***/
    },

    /***/
    "./src/pages/produto-detail/produto-detail.page.scss":
    /*!***********************************************************!*\
      !*** ./src/pages/produto-detail/produto-detail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcPagesProdutoDetailProdutoDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZHV0by1kZXRhaWwvcHJvZHV0by1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/pages/produto-detail/produto-detail.page.ts":
    /*!*********************************************************!*\
      !*** ./src/pages/produto-detail/produto-detail.page.ts ***!
      \*********************************************************/

    /*! exports provided: ProdutoDetailPage */

    /***/
    function srcPagesProdutoDetailProdutoDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoDetailPage", function () {
        return ProdutoDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/cart.service */
      "./src/services/cart.service.ts");
      /* harmony import */


      var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/domain/produto.service */
      "./src/services/domain/produto.service.ts");

      var ProdutoDetailPage = /*#__PURE__*/function () {
        function ProdutoDetailPage(router, activatedRoute, service, cartService) {
          var _this = this;

          _classCallCheck(this, ProdutoDetailPage);

          this.router = router;
          this.service = service;
          this.cartService = cartService;
          var id = activatedRoute.snapshot.params.produtoId;
          this.item$ = this.service.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (produtoDto) {
            return _this.loadImageUrls(produtoDto);
          }));
        }

        _createClass(ProdutoDetailPage, [{
          key: "loadImageUrls",
          value: function loadImageUrls(items) {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (item) {
              return _this2.service.getImageFromBucket(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return Object.assign(Object.assign({}, item), {
                  imageUrl: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BUCKET_URL, "/prod").concat(item.id, ".jpg")
                });
              }));
            }));
          }
        }, {
          key: "addToCart",
          value: function addToCart(produto) {
            this.cartService.addProduto(produto);
            this.router.navigateByUrl('/cart');
          }
        }]);

        return ProdutoDetailPage;
      }();

      ProdutoDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_7__["ProdutoService"]
        }, {
          type: src_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }];
      };

      ProdutoDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./produto-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/pages/produto-detail/produto-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./produto-detail.page.scss */
        "./src/pages/produto-detail/produto-detail.page.scss"))["default"]]
      })], ProdutoDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-produto-detail-produto-detail-module-es5.js.map