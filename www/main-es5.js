(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ../pages/home/home.module */
          "./src/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'categorias',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-categorias-categorias-module */
          "pages-categorias-categorias-module").then(__webpack_require__.bind(null,
          /*! ../pages/categorias/categorias.module */
          "./src/pages/categorias/categorias.module.ts")).then(function (m) {
            return m.CategoriasPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../pages/profile/profile.module */
          "./src/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'sign-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-sign-up-sign-up-module */
          "pages-sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ../pages/sign-up/sign-up.module */
          "./src/pages/sign-up/sign-up.module.ts")).then(function (m) {
            return m.SignUpPageModule;
          });
        }
      }, {
        path: 'log-out',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-log-out-log-out-module */
          "pages-log-out-log-out-module").then(__webpack_require__.bind(null,
          /*! ../pages/log-out/log-out.module */
          "./src/pages/log-out/log-out.module.ts")).then(function (m) {
            return m.LogOutPageModule;
          });
        }
      }, {
        path: 'produto-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-produto-detail-produto-detail-module */
          "pages-produto-detail-produto-detail-module").then(__webpack_require__.bind(null,
          /*! ../pages/produto-detail/produto-detail.module */
          "./src/pages/produto-detail/produto-detail.module.ts")).then(function (m) {
            return m.ProdutoDetailPageModule;
          });
        }
      }, {
        path: 'produtos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-produtos-produtos-module */
          "pages-produtos-produtos-module").then(__webpack_require__.bind(null,
          /*! ../pages/produtos/produtos.module */
          "./src/pages/produtos/produtos.module.ts")).then(function (m) {
            return m.ProdutosPageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "pages-cart-cart-module").then(__webpack_require__.bind(null,
          /*! ../pages/cart/cart.module */
          "./src/pages/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'pick-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pick-address-pick-address-module */
          "pages-pick-address-pick-address-module").then(__webpack_require__.bind(null,
          /*! ../pages/pick-address/pick-address.module */
          "./src/pages/pick-address/pick-address.module.ts")).then(function (m) {
            return m.PickAddressPageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-payment-module */
          "pages-payment-payment-module").then(__webpack_require__.bind(null,
          /*! ../pages/payment/payment.module */
          "./src/pages/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'order-confirmation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-confirmation-order-confirmation-module */
          "pages-order-confirmation-order-confirmation-module").then(__webpack_require__.bind(null,
          /*! ../pages/order-confirmation/order-confirmation.module */
          "./src/pages/order-confirmation/order-confirmation.module.ts")).then(function (m) {
            return m.OrderConfirmationPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.selectedIndex = 0;
          this.appPages = [{
            title: 'Profile',
            url: '/profile',
            icon: 'person-circle'
          }, {
            title: 'Categoria',
            url: '/categorias',
            icon: 'pricetags'
          }, {
            title: 'Carinho',
            url: '/cart',
            icon: 'cart'
          }, {
            title: 'Log Out',
            url: '/log-out',
            icon: 'log-out'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/services/auth.service */
      "./src/services/auth.service.ts");
      /* harmony import */


      var src_services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/services/cart.service */
      "./src/services/cart.service.ts");
      /* harmony import */


      var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/services/domain/produto.service */
      "./src/services/domain/produto.service.ts");
      /* harmony import */


      var src_services_image_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/services/image-util.service */
      "./src/services/image-util.service.ts");
      /* harmony import */


      var src_services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/services/storage.service */
      "./src/services/storage.service.ts");
      /* harmony import */


      var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../interceptors/auth-interceptor */
      "./src/interceptors/auth-interceptor.ts");
      /* harmony import */


      var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../interceptors/error-interceptor */
      "./src/interceptors/error-interceptor.ts");
      /* harmony import */


      var _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../services/domain/categoria.service */
      "./src/services/domain/categoria.service.ts");
      /* harmony import */


      var _services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../services/domain/cliente.service */
      "./src/services/domain/cliente.service.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], src_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], src_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], src_services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"], src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_10__["ProdutoService"], _services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_16__["ClienteService"], _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], src_services_image_util_service__WEBPACK_IMPORTED_MODULE_11__["ImageUtilService"], _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_15__["CategoriaService"], _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptorProvider"], _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptorProvider"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API_URL: 'http://localhost:8080',
        BUCKET_URL: 'https://s3-sa-east-1.amazonaws.com/curso-spring-ionic'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/interceptors/auth-interceptor.ts":
    /*!**********************************************!*\
      !*** ./src/interceptors/auth-interceptor.ts ***!
      \**********************************************/

    /*! exports provided: AuthInterceptor, AuthInterceptorProvider */

    /***/
    function srcInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorProvider", function () {
        return AuthInterceptorProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/storage.service */
      "./src/services/storage.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../environments/environment */
      "./src/environments/environment.ts");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(storage) {
          _classCallCheck(this, AuthInterceptor);

          this.storage = storage;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var localUser = this.storage.getLocalUser();
            var length = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL.length;

            var requestToAPI = req.url.substring(0, length) === _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;

            if (localUser && requestToAPI) {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)
              });
              return next.handle(authReq);
            } else {
              return next.handle(req);
            }
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
      var AuthInterceptorProvider = {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "./src/interceptors/error-interceptor.ts":
    /*!***********************************************!*\
      !*** ./src/interceptors/error-interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */

    /***/
    function srcInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function () {
        return ErrorInterceptorProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/storage.service */
      "./src/services/storage.service.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(storage, alertController) {
          _classCallCheck(this, ErrorInterceptor);

          this.storage = storage;
          this.alertController = alertController;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              switch (error.status) {
                case 401:
                  _this2.handle401();

                  break;

                case 403:
                  _this2.handle403();

                  break;

                case 422:
                  _this2.handle422(error);

                  break;

                default:
                  _this2.handleDefaultEror(error);

              }

              console.log('Erro detectado pelo interceptor:', error.error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
          }
        }, {
          key: "handle401",
          value: function handle401() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Erro 401: falha de autenticação',
                        message: 'Email ou senha incorretos!',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handle403",
          value: function handle403() {
            this.storage.setLocalUser(null);
          }
        }, {
          key: "handle422",
          value: function handle422(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: "Erro 422: Valida\xE7\xE3o!",
                        message: this.listErrors(error.errors),
                        buttons: ['Ok']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleDefaultEror",
          value: function handleDefaultEror(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: "Erro ".concat(error.status, ": ").concat(error.error),
                        message: error.message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "listErrors",
          value: function listErrors(messages) {
            return messages.reduce(function (p, message) {
              return p.concat('<p><strong>' + message.fieldName + '</strong>: ' + message.message + '</p>');
            }, '');
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ErrorInterceptor);
      var ErrorInterceptorProvider = {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: ErrorInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "./src/services/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/services/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart.service */
      "./src/services/cart.service.ts");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage.service */
      "./src/services/storage.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, service, cartService) {
          var _this3 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.service = service;
          this.cartService = cartService;
          this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();

          this.logout = function () {
            return _this3.service.setLocalUser(null);
          };
        }

        _createClass(AuthService, [{
          key: "authenticate",
          value: function authenticate(creds) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL, "/login");
            return this.http.post(url, creds, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL, "/auth/refresh_token");
            return this.http.post(url, {}, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "successfulLogin",
          value: function successfulLogin(authorizationValue) {
            var tok = authorizationValue.substring('Berrer '.length);
            var user = {
              token: tok,
              email: this.jwtHelper.decodeToken(tok).sub
            };
            this.service.setLocalUser(user);
            this.cartService.createOrClearCart();
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthService);
      /***/
    },

    /***/
    "./src/services/cart.service.ts":
    /*!**************************************!*\
      !*** ./src/services/cart.service.ts ***!
      \**************************************/

    /*! exports provided: CartService */

    /***/
    function srcServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
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


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      "./src/services/storage.service.ts");

      var CartService = /*#__PURE__*/function () {
        function CartService(storage) {
          _classCallCheck(this, CartService);

          this.storage = storage;
        }

        _createClass(CartService, [{
          key: "createOrClearCart",
          value: function createOrClearCart() {
            var cart = {
              items: []
            };
            this.storage.setCart(cart);
            return cart;
          }
        }, {
          key: "getCart",
          value: function getCart() {
            var cart = this.storage.getCart();

            if (cart == null) {
              cart = this.createOrClearCart();
            }

            return cart;
          }
        }, {
          key: "addProduto",
          value: function addProduto(produto) {
            var cart = this.getCart();
            var position = cart.items.findIndex(function (x) {
              return x.produto.id === produto.id;
            });

            if (position === -1) {
              cart.items.push({
                quantidade: 1,
                produto: produto
              });
            }

            this.storage.setCart(cart);
            return cart;
          }
        }, {
          key: "removeProduto",
          value: function removeProduto(produto) {
            var cart = this.getCart();
            var position = cart.items.findIndex(function (x) {
              return x.produto.id === produto.id;
            });

            if (position !== -1) {
              cart.items.splice(position, 1);
            }

            this.storage.setCart(cart);
            return cart;
          }
        }, {
          key: "increaseQuantity",
          value: function increaseQuantity(produto) {
            var cart = this.getCart();
            var position = cart.items.findIndex(function (x) {
              return x.produto.id === produto.id;
            });

            if (position !== -1) {
              cart.items[position].quantidade++;
            }

            this.storage.setCart(cart);
            return cart;
          }
        }, {
          key: "decreaseQuantity",
          value: function decreaseQuantity(produto) {
            var cart = this.getCart();
            var position = cart.items.findIndex(function (x) {
              return x.produto.id == produto.id;
            });

            if (position !== -1) {
              cart.items[position].quantidade--;

              if (cart.items[position].quantidade < 1) {
                cart = this.removeProduto(produto);
              }
            }

            this.storage.setCart(cart);
            return cart;
          }
        }, {
          key: "total",
          value: function total() {
            var cart = this.getCart();
            return cart.items.reduce(function (total, item) {
              return item.produto.preco * item.quantidade + total;
            }, 0);
          }
        }]);

        return CartService;
      }();

      CartService.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }];
      };

      CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CartService);
      /***/
    },

    /***/
    "./src/services/domain/categoria.service.ts":
    /*!**************************************************!*\
      !*** ./src/services/domain/categoria.service.ts ***!
      \**************************************************/

    /*! exports provided: CategoriaService */

    /***/
    function srcServicesDomainCategoriaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaService", function () {
        return CategoriaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var CategoriaService = /*#__PURE__*/function () {
        function CategoriaService(httpClient) {
          _classCallCheck(this, CategoriaService);

          this.httpClient = httpClient;
        }

        _createClass(CategoriaService, [{
          key: "findAll",
          value: function findAll() {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/categorias"), {
              observe: 'response'
            });
          }
        }]);

        return CategoriaService;
      }();

      CategoriaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CategoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CategoriaService);
      /***/
    },

    /***/
    "./src/services/domain/cliente.service.ts":
    /*!************************************************!*\
      !*** ./src/services/domain/cliente.service.ts ***!
      \************************************************/

    /*! exports provided: ClienteService */

    /***/
    function srcServicesDomainClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
        return ClienteService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _image_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../image-util.service */
      "./src/services/image-util.service.ts");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../storage.service */
      "./src/services/storage.service.ts");

      var ClienteService = /*#__PURE__*/function () {
        function ClienteService(httpClient, imageUtilService, storageService) {
          _classCallCheck(this, ClienteService);

          this.httpClient = httpClient;
          this.imageUtilService = imageUtilService;
          this.storageService = storageService;
        }

        _createClass(ClienteService, [{
          key: "findByEmail",
          value: function findByEmail(value) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: {
                value: value
              }
            });
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/clientes/email"), {
              params: params
            });
          }
        }, {
          key: "findById",
          value: function findById(id) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/clientes/").concat(id));
          }
        }, {
          key: "getImageFromBucket",
          value: function getImageFromBucket(id) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BUCKET_URL, "/cp").concat(id, ".jpg");
            return this.httpClient.get(url, {
              responseType: 'blob'
            });
          }
        }, {
          key: "insert",
          value: function insert(obj) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/clientes"), obj, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "uploadPicture",
          value: function uploadPicture(picture) {
            var pictureBlob = this.imageUtilService.dataUriToBlob(picture);
            var formData = new FormData();
            formData.set('file', pictureBlob, 'file.png');
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/clientes/picture"), formData, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }]);

        return ClienteService;
      }();

      ClienteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _image_util_service__WEBPACK_IMPORTED_MODULE_4__["ImageUtilService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      ClienteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ClienteService);
      /***/
    },

    /***/
    "./src/services/domain/produto.service.ts":
    /*!************************************************!*\
      !*** ./src/services/domain/produto.service.ts ***!
      \************************************************/

    /*! exports provided: ProdutoService */

    /***/
    function srcServicesDomainProdutoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoService", function () {
        return ProdutoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");

      var ProdutoService = function ProdutoService(httpClient) {
        var _this4 = this;

        _classCallCheck(this, ProdutoService);

        this.httpClient = httpClient;

        this.findById = function (productId) {
          return _this4.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/produtos/").concat(productId));
        };

        this.getSmallImageFromBucket = function (id) {
          return _this4.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BUCKET_URL, "/prod").concat(id, "-small.jpg"), {
            responseType: 'blob'
          });
        };

        this.getImageFromBucket = function (id) {
          return _this4.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BUCKET_URL, "/prod").concat(id, ".jpg"), {
            responseType: 'blob'
          });
        };

        this.findByCategoria = function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            categorias: '',
            page: '0',
            linesPerPage: '24'
          };
          return _this4.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, "/produtos/"), {
            params: params
          });
        };
      };

      ProdutoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ProdutoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProdutoService);
      /***/
    },

    /***/
    "./src/services/image-util.service.ts":
    /*!********************************************!*\
      !*** ./src/services/image-util.service.ts ***!
      \********************************************/

    /*! exports provided: ImageUtilService */

    /***/
    function srcServicesImageUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUtilService", function () {
        return ImageUtilService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ImageUtilService = /*#__PURE__*/function () {
        function ImageUtilService() {
          _classCallCheck(this, ImageUtilService);
        }

        _createClass(ImageUtilService, [{
          key: "dataUriToBlob",
          value: function dataUriToBlob(dataURI) {
            var byteString = atob(dataURI.changingThisBreaksApplicationSecurity.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var mimeString = dataURI.changingThisBreaksApplicationSecurity.split(',')[0].split(':')[1].split(';')[0];
            return new Blob([ab], {
              type: mimeString
            });
          }
        }]);

        return ImageUtilService;
      }();

      ImageUtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ImageUtilService);
      /***/
    },

    /***/
    "./src/services/storage.service.ts":
    /*!*****************************************!*\
      !*** ./src/services/storage.service.ts ***!
      \*****************************************/

    /*! exports provided: StorageService */

    /***/
    function srcServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this.STORAGE_KEYS = {
            localUser: 'UDEMY-SBHRESTIJWTS3MSQLMDB4_LOCALUSER',
            cart: 'UDEMY-SBHRESTIJWTS3MSQLMDB4_CART'
          };
        }

        _createClass(StorageService, [{
          key: "getCart",
          value: function getCart() {
            var cart = localStorage.getItem(this.STORAGE_KEYS.cart);

            if (cart === null) {
              return null;
            } else {
              return JSON.parse(cart);
            }
          }
        }, {
          key: "setCart",
          value: function setCart(obj) {
            if (obj != null) {
              localStorage.setItem(this.STORAGE_KEYS.cart, JSON.stringify(obj));
            } else {
              localStorage.removeItem(this.STORAGE_KEYS.cart);
            }
          }
        }, {
          key: "getLocalUser",
          value: function getLocalUser() {
            var usr = localStorage.getItem(this.STORAGE_KEYS.localUser);

            if (usr == null) {
              return null;
            } else {
              return JSON.parse(usr);
            }
          }
        }, {
          key: "setLocalUser",
          value: function setLocalUser(obj) {
            if (obj == null) {
              localStorage.removeItem(this.STORAGE_KEYS.localUser);
            } else {
              localStorage.setItem(this.STORAGE_KEYS.localUser, JSON.stringify(obj));
            }
          }
        }]);

        return StorageService;
      }();

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StorageService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/acdan/Git/Udemy-SBHRESTIJWTS3MSQLMDB4/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map