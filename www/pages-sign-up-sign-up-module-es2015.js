(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/sign-up/sign-up.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/sign-up/sign-up.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formGroup\">\n    <ion-item>\n      <ion-label position=\"floating\">Nome*</ion-label>\n      <ion-input formControlName=\"nome\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.nome.dirty && formGroup.controls.nome.errors\" margin-left>Valor inválido\n    </p>\n    <ion-item>\n      <ion-label position=\"floating\">Email*</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.email.dirty && formGroup.controls.email.errors\" margin-left>Valor\n      inválido</p>\n    <ion-list radio-group name=\"tipo\">\n      <ion-list-header> Tipo de cliente </ion-list-header>\n      <ion-radio-group value=\"biff\">\n        <ion-item>\n          <ion-label>Pessoa física</ion-label>\n          <ion-radio slot=\"end\" value=\"1\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Pessoa jurídica</ion-label>\n          <ion-radio slot=\"end\" value=\"2\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item>\n      <ion-label position=\"floating\">CPF ou CNPJ</ion-label>\n      <ion-input formControlName=\"cpfOuCnpj\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.cpfOuCnpj.dirty && formGroup.controls.cpfOuCnpj.errors\" margin-left>\n      Valor inválido</p>\n    <ion-item>\n      <ion-label position=\"floating\">Senha*</ion-label>\n      <ion-input formControlName=\"senha\" type=\"password\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.senha.dirty && formGroup.controls.senha.errors\" margin-left>Valor\n      inválido</p>\n    <ion-item>\n      <ion-label position=\"floating\">Logradouro*</ion-label>\n      <ion-input formControlName=\"logradouro\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.logradouro.dirty && formGroup.controls.logradouro.errors\" margin-left>\n      Valor inválido</p>\n    <ion-item>\n      <ion-label position=\"floating\">Número*</ion-label>\n      <ion-input formControlName=\"numero\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.numero.dirty && formGroup.controls.numero.errors\" margin-left>Valor\n      inválido</p>\n    <ion-item>\n      <ion-label position=\"floating\">Complemento</ion-label>\n      <ion-input formControlName=\"complemento\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Bairro</ion-label>\n      <ion-input formControlName=\"bairro\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">CEP*</ion-label>\n      <ion-input formControlName=\"cep\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.cep.dirty && formGroup.controls.cep.errors\" margin-left>Valor inválido\n    </p>\n    <ion-item>\n      <ion-label position=\"floating\">Telefone 1*</ion-label>\n      <ion-input formControlName=\"telefone1\"></ion-input>\n    </ion-item>\n    <p class=\"danger\" *ngIf=\"formGroup.controls.telefone1.dirty && formGroup.controls.telefone1.errors\" margin-left>\n      Valor inválido</p>\n    <ion-item>\n      <ion-label position=\"floating\">Telefone 2</ion-label>\n      <ion-input formControlName=\"telefone2\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Telefone 3</ion-label>\n      <ion-input formControlName=\"telefone3\"></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label> Endereço </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Estado</ion-label>\n        <ion-select formControlName=\"estadoId\" value=\"1\" (ionChange)=\"updateCidades()\">\n          <ion-select-option *ngFor=\"let estado of estados; first as f\" [value]=\"estado.id\">\n            {{estado.nome}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cidade</ion-label>\n        <ion-select formControlName=\"cidadeId\">\n          <ion-select-option *ngFor=\"let cidade of cidades\" [value]=\"cidade.id\">{{cidade.nome}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-button [disabled]=\"formGroup.invalid\" (click)=\"signupUser()\" expand=\"block\">Criar conta</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/pages/sign-up/sign-up-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/sign-up/sign-up-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/pages/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/pages/sign-up/sign-up.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/sign-up/sign-up.module.ts ***!
  \*********************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/domain/cidade.service */ "./src/services/domain/cidade.service.ts");
/* harmony import */ var src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/domain/estado.service */ "./src/services/domain/estado.service.ts");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/pages/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up.page */ "./src/pages/sign-up/sign-up.page.ts");









let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_7__["SignUpPageRoutingModule"]
        ],
        providers: [
            src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_5__["CidadeService"],
            src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_6__["EstadoService"],
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_8__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/pages/sign-up/sign-up.page.scss":
/*!*********************************************!*\
  !*** ./src/pages/sign-up/sign-up.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".danger {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlciB7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/sign-up/sign-up.page.ts":
/*!*******************************************!*\
  !*** ./src/pages/sign-up/sign-up.page.ts ***!
  \*******************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/domain/cidade.service */ "./src/services/domain/cidade.service.ts");
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/domain/cliente.service */ "./src/services/domain/cliente.service.ts");
/* harmony import */ var src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/domain/estado.service */ "./src/services/domain/estado.service.ts");








let SignUpPage = class SignUpPage {
    constructor(formBuilder, cidadeService, estadoService, clienteService, alertController, navegateControll) {
        this.cidadeService = cidadeService;
        this.estadoService = estadoService;
        this.clienteService = clienteService;
        this.alertController = alertController;
        this.navegateControll = navegateControll;
        this.formGroup = formBuilder.group({
            nome: ['Joaquim', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            email: ['joaquim@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            tipo: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cpfOuCnpj: ['06134596280', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)]],
            senha: ['123', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            logradouro: ['Rua Via', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            numero: ['25', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            complemento: ['Apto 3', []],
            bairro: ['Copacabana', []],
            cep: ['10828333', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            telefone1: ['977261827', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cidadeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.estadoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            this.estados = response;
            this.formGroup.controls.estadoId.setValue(this.estados[0].id);
            this.updateCidades();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe();
    }
    updateCidades() {
        const estadoId = this.formGroup.value.estadoId;
        this.cidadeService.findAll(estadoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            this.cidades = response;
            this.formGroup.controls.cidadeId.setValue(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe();
    }
    signupUser() {
        this.clienteService.insert(this.formGroup.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.showInsertOk())).subscribe();
    }
    showInsertOk() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Sucesso!`,
                message: 'Cadastro efetuado com sucesso',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => this.navegateControll.pop()
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_5__["CidadeService"] },
    { type: src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_7__["EstadoService"] },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/sign-up/sign-up.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-up.page.scss */ "./src/pages/sign-up/sign-up.page.scss")).default]
    })
], SignUpPage);



/***/ }),

/***/ "./src/services/domain/cidade.service.ts":
/*!***********************************************!*\
  !*** ./src/services/domain/cidade.service.ts ***!
  \***********************************************/
/*! exports provided: CidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeService", function() { return CidadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let CidadeService = class CidadeService {
    constructor(http) {
        this.http = http;
    }
    findAll(estadoId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/estados/${estadoId}/cidades`);
    }
};
CidadeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CidadeService);



/***/ }),

/***/ "./src/services/domain/estado.service.ts":
/*!***********************************************!*\
  !*** ./src/services/domain/estado.service.ts ***!
  \***********************************************/
/*! exports provided: EstadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoService", function() { return EstadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let EstadoService = class EstadoService {
    constructor(http) {
        this.http = http;
    }
    findAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/estados`);
    }
};
EstadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EstadoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], EstadoService);



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map