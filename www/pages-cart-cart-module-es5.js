(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/pages/cart/cart.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/cart/cart.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let item of items$ | async\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.produto.imageUrl || 'assets/imgs/prod.jpg'\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{item.produto.nome}}</h2>\n        <p>{{item.produto.preco | currency}}</p>\n      </ion-label>\n\n      <ion-icon name=\"remove-circle\" color=\"primary\" (click)=\"decreaseQuantity(item.produto)\">\n      </ion-icon>\n      <ion-card-content>{{item.quantidade}}</ion-card-content>\n      <ion-icon name=\"add-circle\" color=\"primary\" (click)=\"increaseQuantity(item.produto)\"></ion-icon>\n      <ion-icon name=\"trash\" item-end color=\"danger\" (click)=\"removeItem(item.produto)\"></ion-icon>\n    </ion-item>\n\n    <ng-container *ngIf=\"total() > 0 else empity\">\n      <ion-item>\n        <ion-label>\n          <h1>Total</h1>\n        </ion-label>\n        <h1 slot=\"end\">{{total()}}</h1>\n      </ion-item>\n    </ng-container>\n\n    <ng-template #empity>\n      <ion-item>\n        <ion-label>\n          <h1 align=\"center\">Seu carrinho está vazio</h1>\n        </ion-label>\n      </ion-item>\n    </ng-template>\n\n    <ion-button expand=\"block\" color=\"primary\" routerLink=\"/categorias\">Continuar Comprando</ion-button>\n    <ion-button *ngIf=\"total() > 0\" expand=\"block\" color=\"secondary\" routerLink=\"/pick-address\">Finalizar Pedido</ion-button>\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/pages/cart/cart-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/pages/cart/cart-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function srcPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "./src/pages/cart/cart.page.ts");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "./src/pages/cart/cart.module.ts":
    /*!***************************************!*\
      !*** ./src/pages/cart/cart.module.ts ***!
      \***************************************/

    /*! exports provided: CartPageModule */

    /***/
    function srcPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "./src/pages/cart/cart-routing.module.ts");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "./src/pages/cart/cart.page.ts");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "./src/pages/cart/cart.page.scss":
    /*!***************************************!*\
      !*** ./src/pages/cart/cart.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/pages/cart/cart.page.ts":
    /*!*************************************!*\
      !*** ./src/pages/cart/cart.page.ts ***!
      \*************************************/

    /*! exports provided: CartPage */

    /***/
    function srcPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/cart.service */
      "./src/services/cart.service.ts");
      /* harmony import */


      var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/domain/produto.service */
      "./src/services/domain/produto.service.ts");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(service, produtoService) {
          _classCallCheck(this, CartPage);

          this.service = service;
          this.produtoService = produtoService;
          this.items$ = this.loadImageUrls(this.service.getCart().items);
        }

        _createClass(CartPage, [{
          key: "loadImageUrls",
          value: function loadImageUrls(items) {
            var _this = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (item) {
              return _this.produtoService.getSmallImageFromBucket(item.produto.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) {
                var produto = Object.assign(Object.assign({}, item.produto), {
                  imageUrl: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BUCKET_URL, "/prod").concat(item.produto.id, "-small.jpg")
                });
                return Object.assign(Object.assign({}, item), {
                  produto: produto
                });
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (cartItems, cartItem) {
              return [].concat(_toConsumableArray(cartItems), [cartItem]);
            }, []));
          }
        }, {
          key: "removeItem",
          value: function removeItem(produto) {
            this.items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.service.removeProduto(produto).items);
          }
        }, {
          key: "increaseQuantity",
          value: function increaseQuantity(produto) {
            this.items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.service.increaseQuantity(produto).items);
          }
        }, {
          key: "decreaseQuantity",
          value: function decreaseQuantity(produto) {
            this.items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.service.decreaseQuantity(produto).items);
          }
        }, {
          key: "total",
          value: function total() {
            return this.service.total();
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: src_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
          type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/pages/cart/cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.page.scss */
        "./src/pages/cart/cart.page.scss"))["default"]]
      })], CartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cart-cart-module-es5.js.map