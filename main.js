(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accessorise-page/accessorise-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/accessorise-page/accessorise-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container container_padding text-center\">\n  <h2>Аксессуары - все, что пригодится в прогулке</h2>\n\n  <div class=\"row text-center justify-content-center\">\n    <div *ngFor='let accesorise of accessorises' class=\"col-xs-12 col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <img src=\"{{accesorise.img}}\" class=\"card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{accesorise.h1}}</h4>\n          <p>{{accesorise.price}} грн.</p>\n          <button (click)='addToCartAccessorise()'>Добавить в корзину</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/accessorise-page/accessorise-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/accessorise-page/accessorise-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\nh1, h2 {\n  padding-top: 20px;\n  padding-bottom: 40px; }\n\n.card {\n  border: none;\n  margin-bottom: 30px; }\n\n.card img {\n    border: 2px solid #f85969;\n    border-radius: 5px;\n    padding: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzb3Jpc2UtcGFnZS9EOlxcV0VCIERldmVsb3BlclxcUHJvamVjdEVhc3l3YWxrZXJHaXRodWJcXEFsaW5hRGVteWRvdmEuZ2l0aHViLmlvL3NyY1xcYXBwXFxhY2Nlc3NvcmlzZS1wYWdlXFxhY2Nlc3NvcmlzZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQU5XO0VBT1gseUJBUmtCO0VBU2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFGdkI7SUFLUSx5QkEzQmM7SUE0QmQsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzc29yaXNlLXBhZ2UvYWNjZXNzb3Jpc2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbWFpbkNvbG9yUmVkOiAjZjg1OTY5O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRmb250U2l6ZTogMTZweDtcclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTYzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbmgxLCBoMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgIH1cclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/accessorise-page/accessorise-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/accessorise-page/accessorise-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AccessorisePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessorisePageComponent", function() { return AccessorisePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mock_accessorise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-accessorise */ "./src/app/accessorise-page/mock-accessorise.ts");
/* harmony import */ var _accessorise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorise.service */ "./src/app/accessorise-page/accessorise.service.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");






var AccessorisePageComponent = /** @class */ (function () {
    function AccessorisePageComponent(route, accessoriseService, router, productPageComponent) {
        this.route = route;
        this.accessoriseService = accessoriseService;
        this.router = router;
        this.productPageComponent = productPageComponent;
        this.accessorises = _mock_accessorise__WEBPACK_IMPORTED_MODULE_3__["ACCESSORISE"];
    }
    AccessorisePageComponent.prototype.ngOnInit = function () {
    };
    AccessorisePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductPageComponent"]],
            selector: 'app-accessorise-page',
            template: __webpack_require__(/*! ./accessorise-page.component.html */ "./src/app/accessorise-page/accessorise-page.component.html"),
            styles: [__webpack_require__(/*! ./accessorise-page.component.scss */ "./src/app/accessorise-page/accessorise-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _accessorise_service__WEBPACK_IMPORTED_MODULE_4__["accessoriseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductPageComponent"]])
    ], AccessorisePageComponent);
    return AccessorisePageComponent;
}());



/***/ }),

/***/ "./src/app/accessorise-page/accessorise.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/accessorise-page/accessorise.service.ts ***!
  \*********************************************************/
/*! exports provided: accessoriseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessoriseService", function() { return accessoriseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_accessorise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-accessorise */ "./src/app/accessorise-page/mock-accessorise.ts");




var accessoriseService = /** @class */ (function () {
    function accessoriseService() {
    }
    accessoriseService.prototype.constuctor = function () { };
    accessoriseService.prototype.getAccessorise = function (id) {
        //   if (id < 200) {
        //     return of(ACCESSORISE.filter(forBuggyXs == true).find(accessorise => accessorise.id === id));
        //   }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_accessorise__WEBPACK_IMPORTED_MODULE_3__["ACCESSORISE"].find(function (accessorise) { return accessorise.id === id; }));
    };
    accessoriseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], accessoriseService);
    return accessoriseService;
}());



/***/ }),

/***/ "./src/app/accessorise-page/mock-accessorise.ts":
/*!******************************************************!*\
  !*** ./src/app/accessorise-page/mock-accessorise.ts ***!
  \******************************************************/
/*! exports provided: ACCESSORISE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESSORISE", function() { return ACCESSORISE; });
var ACCESSORISE = [
    { id: 2001,
        h1: 'Дождевик оригинальный Easy Walker',
        img: '../../assets/img/img_accessorise/raincoverXS.jpg',
        price: 1020,
        forHarvey: true,
        forCharley: true,
        forCharleyMini: true,
        forBuggyXs: true,
        forBuggyEw: true,
        forBuggyMini: true,
        quantity: 1
    },
    { id: 2002,
        h1: 'Подстаканник оригинальный Easy Walker',
        img: '../../assets/img/img_accessorise/cup_holder.jpg',
        price: 720,
        forHarvey: true,
        forCharley: true,
        forCharleyMini: true,
        forBuggyXs: true,
        forBuggyEw: true,
        forBuggyMini: true,
        quantity: 1
    },
    { id: 2003,
        h1: '2в1: подстаканник + держатель для снеков',
        img: '../../assets/img/img_accessorise/snaskTray.jpg',
        price: 900,
        forHarvey: true,
        forCharley: true,
        forCharleyMini: true,
        forBuggyXs: true,
        forBuggyEw: true,
        forBuggyMini: true,
        quantity: 1
    },
    { id: 2004,
        h1: 'Москитная сетка для линейки MINI buggy',
        img: '../../assets/img/img_accessorise/mosquito_netMINI.jpg',
        price: 540,
        forHarvey: false,
        forCharley: false,
        forCharleyMini: false,
        forBuggyXs: false,
        forBuggyEw: false,
        forBuggyMini: true,
        quantity: 1
    },
    { id: 2005,
        h1: 'Москитная сетка белого цвета для люльки',
        img: '../../assets/img/img_accessorise/mosquitoNetHarvey.jpg',
        price: 540,
        forHarvey: true,
        forCharley: true,
        forCharleyMini: true,
        forBuggyXs: false,
        forBuggyEw: false,
        forBuggyMini: false,
        quantity: 1
    },
    { id: 2006,
        h1: 'Москитная сетка для линейки XS Buggy',
        img: '../../assets/img/img_accessorise/mosquito_netXS.jpg',
        price: 918,
        forHarvey: false,
        forCharley: false,
        forCharleyMini: false,
        forBuggyXs: true,
        forBuggyEw: false,
        forBuggyMini: false,
        quantity: 1
    },
    { id: 2007,
        h1: 'Сумка для переноски EW Buggy XS',
        img: '../../assets/img/img_accessorise/transportBagXS.jpg',
        price: 1200,
        forHarvey: false,
        forCharley: false,
        forCharleyMini: false,
        forBuggyXs: true,
        forBuggyEw: false,
        forBuggyMini: false,
        quantity: 1
    },
    { id: 2008,
        h1: 'Сумка для переноски Easywalker',
        img: '../../assets/img/img_accessorise/transportBagEW.jpg',
        price: 1080,
        forHarvey: false,
        forCharley: false,
        forCharleyMini: false,
        forBuggyXs: false,
        forBuggyEw: true,
        forBuggyMini: true,
        quantity: 1
    },
    { id: 2009,
        h1: 'Увеличительный блок для линейки Harvey',
        img: '../../assets/img/img_accessorise/extension_set.jpg',
        price: 3690,
        forHarvey: true,
        forCharley: false,
        forCharleyMini: false,
        forBuggyXs: false,
        forBuggyEw: false,
        forBuggyMini: false,
        quantity: 1
    },
    { id: 2010,
        h1: 'Органайзер оригинальный Easy Walker',
        img: '../../assets/img/img_accessorise/organizer.jpg',
        price: 840,
        forHarvey: true,
        forCharley: true,
        forCharleyMini: true,
        forBuggyXs: false,
        forBuggyEw: false,
        forBuggyMini: false,
        quantity: 1
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _section_page_section_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-page/section-page.component */ "./src/app/section-page/section-page.component.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");
/* harmony import */ var _accessorise_page_accessorise_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accessorise-page/accessorise-page.component */ "./src/app/accessorise-page/accessorise-page.component.ts");
/* harmony import */ var _choose_buggy_choose_buggy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose-buggy/choose-buggy.component */ "./src/app/choose-buggy/choose-buggy.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");











var routes = [
    { path: 'cart', component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"] },
    { path: 'disneyXs', component: _section_page_section_page_component__WEBPACK_IMPORTED_MODULE_6__["SectionPageComponent"] },
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"] },
    { path: 'section/:id', component: _section_page_section_page_component__WEBPACK_IMPORTED_MODULE_6__["SectionPageComponent"] },
    { path: 'product/:id', component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_7__["ProductPageComponent"] },
    { path: 'accessorise', component: _accessorise_page_accessorise_page_component__WEBPACK_IMPORTED_MODULE_8__["AccessorisePageComponent"] },
    { path: 'choose', component: _choose_buggy_choose_buggy_component__WEBPACK_IMPORTED_MODULE_9__["ChooseBuggyComponent"] },
    { path: 'compare', component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_10__["CompareComponent"] }
    // { path: 'accessorise/:id'}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--=========Contacts=========-->\r\n<div class=\"container head\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-xs-12 col-sm-12 col-lg-2\"><a class=\"navbar-brand\"><img alt=\"logo\" src=\"../assets/img/logo.png\"></a></div>\r\n      <div class=\"col-xs-12 col-sm-12 col-lg-5 description\">Официальный дилер Easywalker в Украине</div>\r\n      <div class=\"col-xs-12 col-sm-12 col-lg-3 quickOrder\">Быстрый заказ и вопросы по телефону\r\n        <div class=\"w-100\"></div>\r\n        <span>(000)0000000</span>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-lg-2\"><button type=\"button\" (click)=\"openModal(template)\">ПЕРЕЗВОНИТЕ МНЕ</button></div>\r\n    </div>\r\n  </div>\r\n  <!--=========/Contacts=========-->\r\n\r\n  <!--=========ModalWindow=========-->\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Заказать обратный звонок</h4>\r\n      <button type=\"button\" class=\"close pull-right\" style='width: 30px;' aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n      Имя <input type=\"text\" /><br>\r\n      Телефон <input type=\"text\" />\r\n     <button type=\"submit\" style=\"margin-top: 15px;\">Перезвоните мне</button>\r\n    </div>\r\n  </ng-template>\r\n  <!--=========/ModalWindow=========-->\r\n  <!--=========Menu=========-->\r\n  <nav class=\"navbar navbar-expand-lg navbar-light sticky-top\">\r\n    <div class=\"container\">\r\n      \r\n      <button aria-controls=\"navbarSupportedContent\" aria-label=\r\n      \"Toggle navigation\" class=\"navbar-toggler\" data-target=\r\n      \"#navbarSupportedContent\" data-toggle=\"collapse\" type=\"button\"><span class=\r\n      \"navbar-toggler-icon\"></span></button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" id='main'> <!-- active -->\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"\" [class.active]=\"currentPage === 'main'\">Главная</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\" id='stroller'> <!-- active -->\r\n            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\r\n            \"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\r\n            \"navbarDropdown\" role=\"button\" [class.active]=\"currentPage === 'stroller'\">Коляски 2в1</a>\r\n            <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu\">\r\n\r\n                <ul style=\"padding-left: 0;\">\r\n                    <li *ngFor= 'let stroller of strollerSection' style=\"margin-right: 0;\">\r\n                        <a class=\"dropdown-item\" routerLink=\"/section/{{stroller.id}}\">{{stroller.titleMenu}}</a>\r\n                        <hr>\r\n                    </li>\r\n                    <li style=\"margin-right: 0;\"><a class=\"dropdown-item text-center\" routerLink=\"/choose\">Показать все</a></li>\r\n                  </ul>\r\n            \r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item dropdown\" id=\"buggy\"> <!-- active -->\r\n            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\r\n            \"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\r\n            \"navbarDropdown\" role=\"button\" [class.active]=\"currentPage === 'buggy'\">Прогулочные коляски</a>\r\n            <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu\">\r\n\r\n            <ul style=\"padding-left: 0;\">\r\n              <li *ngFor= 'let buggy of buggySection' style=\"list-style-type: none; margin-right: 0;\">\r\n                  <a class=\"dropdown-item\" routerLink=\"/section/{{buggy.id}}\">{{buggy.titleMenu}}</a>\r\n                  <hr>\r\n              </li>\r\n              <li style=\"margin-right: 0;\"><a class=\"dropdown-item text-center\" routerLink=\"/choose\">Показать все</a></li>\r\n            </ul>\r\n\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\"><!-- active -->\r\n            <a class=\"nav-link\" href=\"#\" routerLink='/accessorise' [class.active]=\"currentPage === 'accessorise'\">Аксессуары</a>\r\n          </li>\r\n          <li class=\"nav-item\"><!-- active -->\r\n            <a class=\"nav-link\" routerLink=\"/cart\" [class.active]=\"currentPage === 'cart'\"><i class=\"material-icons\">shopping_cart</i></a>\r\n          </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input aria-label=\"Поиск\" class=\"form-control mr-sm-2\" placeholder=\r\n          \"Поиск...\" type=\"text\"> <button class='button_find'><i class=\"material-icons\">arrow_right_alt</i></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </nav><!--========/Menu=========-->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"footer\">\r\n  <hr>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4 col-sm-4 col-lg-4\">\r\n          <p>Адрес</p>\r\n      </div>\r\n      <div class=\"col-xs-4 col-sm-4 col-lg-4\">\r\n          <p>Телефон</p>\r\n      </div>\r\n      <div class=\"col-xs-4 col-sm-4 col-lg-4\">\r\n          <p>Соцсети</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: OpenSans, sans-serif; }\nbutton, input[type='submit'] {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n.container_padding {\n  padding: 30px; }\n.selector-for-some-widget {\n  box-sizing: content-box; }\nli {\n  list-style-type: none; }\n.head button {\n  margin-top: 6px; }\n.head .description {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 52px; }\n.head .quickOrder {\n  font-size: 12px;\n  font-weight: 700;\n  margin-top: 6px; }\n.head .quickOrder span {\n    font-size: 16px;\n    font-weight: 700; }\n.navbar {\n  background-color: #f85969; }\n.navbar li {\n    margin-right: 20px; }\n.navbar li hr {\n      margin: 3px;\n      padding: 0; }\n.navbar .dropdown-menu {\n    padding: 3px; }\n.navbar .navbarDropdown {\n    padding: 0;\n    padding: 3px; }\n.navbar .active {\n    color: #ffffff; }\n.navbar .button_find {\n    width: 40px; }\n.navbar .nav-item {\n    line-height: 27px; }\n.navbar .navbar-light .navbar-nav .nav-link {\n    color: #ffffff;\n    font-size: 16px;\n    font-weight: 400; }\n.navbar .dropdown-item:hover {\n    background-color: #f85969; }\n.navbar .navbar-toggler {\n    border: none;\n    width: 60px; }\n.footer {\n  height: 60px; }\n.footer hr {\n    height: 2px;\n    background-color: #f85969; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdFQiBEZXZlbG9wZXJcXFByb2plY3RFYXN5d2Fsa2VyR2l0aHViXFxBbGluYURlbXlkb3ZhLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBS0E7RUFDRSxpQ0FBaUMsRUFBQTtBQUVuQztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FUYTtFQVViLHlCQVhvQjtFQVlwQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsYUFBYSxFQUFBO0FBRWY7RUFDRSx1QkFBdUIsRUFBQTtBQUV6QjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBRUksZUFBZSxFQUFBO0FBRm5CO0VBS0ksZUFoQ1c7RUFpQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBUHJCO0VBVUksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFabkI7SUFjUSxlQXpDTztJQTBDUCxnQkFBZ0IsRUFBQTtBQU14QjtFQUNFLHlCQW5Eb0IsRUFBQTtBQWtEdEI7SUFHSSxrQkFBa0IsRUFBQTtBQUh0QjtNQUtNLFdBQVc7TUFDWCxVQUFVLEVBQUE7QUFOaEI7SUFVSSxZQUFZLEVBQUE7QUFWaEI7SUFhSSxVQUFVO0lBQ1YsWUFBWSxFQUFBO0FBZGhCO0lBaUJJLGNBbEVXLEVBQUE7QUFpRGY7SUFvQkksV0FBVyxFQUFBO0FBcEJmO0lBdUJJLGlCQUFpQixFQUFBO0FBdkJyQjtJQTBCSSxjQTNFVztJQTRFWCxlQTNFVztJQTRFWCxnQkFBZ0IsRUFBQTtBQTVCcEI7SUErQkkseUJBakZrQixFQUFBO0FBa0R0QjtJQWtDSSxZQUFZO0lBQ1osV0FBVyxFQUFBO0FBSWY7RUFFRSxZQUFZLEVBQUE7QUFGZDtJQUlJLFdBQVc7SUFDWCx5QkE5RmtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbiRtYWluQ29sb3JSZWQ6ICNmODU5Njk7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGZvbnRTaXplOiAxNnB4O1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvclJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE2M3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lcl9wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zZWxlY3Rvci1mb3Itc29tZS13aWRnZXQge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgfVxyXG4gIC5xdWlja09yZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yUmVkO1xyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGhyIHtcclxuICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbiAgLm5hdmJhckRyb3Bkb3duIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcbiAgLmJ1dHRvbl9maW5kIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIFxyXG4gIGhlaWdodDogNjBweDtcclxuICBociB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_section_page_mock_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/section-page/mock-section */ "./src/app/section-page/mock-section.ts");
/* harmony import */ var _section_page_section_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-page/section.service */ "./src/app/section-page/section.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _product_page_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-page/product.service */ "./src/app/product-page/product.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(route, router, location, modalService, sectionService, _productService, AppService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.sectionService = sectionService;
        this._productService = _productService;
        this.AppService = AppService;
        this.title = 'NewProjectEasywalker';
        this.buggySection = _app_section_page_mock_section__WEBPACK_IMPORTED_MODULE_5__["SECTION"];
        this.strollerSection = _app_section_page_mock_section__WEBPACK_IMPORTED_MODULE_5__["SECTION"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSectionBuggy();
        this.getSectionStroller();
        // this.getActive();
        // this.route.params.subscribe((params) => {console.log(params['id'])});
        this.activeMenu();
        this.router.events.subscribe(function (val) { _this.activeMenu(); });
    };
    // cal(){
    //   const arr = localStorage.getItem
    //   this.totalChart = 0;
    //   arr.forEach(x=> this.totalChart += x.quantity)
    // }
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.getSectionBuggy = function () {
        var _this = this;
        this.AppService.getSectionBuggy().subscribe(function (buggySection) { return _this.buggySection = buggySection; });
    };
    AppComponent.prototype.getSectionStroller = function () {
        var _this = this;
        this.AppService.getSectionStroller().subscribe(function (strollerSection) { return _this.strollerSection = strollerSection; });
    };
    AppComponent.prototype.activeMenu = function () {
        if (this.router.url.includes('/5')) {
            this.currentPage = 'stroller';
        }
        else if (this.router.url.includes('/6')) {
            this.currentPage = 'stroller';
        }
        else if (this.router.url.includes('/1')) {
            this.currentPage = 'buggy';
        }
        else if (this.router.url.includes('/2')) {
            this.currentPage = 'buggy';
        }
        else if (this.router.url.includes('/3')) {
            this.currentPage = 'buggy';
        }
        else if (this.router.url.includes('/accessorise')) {
            this.currentPage = 'accessorise';
        }
        else if (this.router.url.includes('/cart')) {
            this.currentPage = 'cart';
        }
        else {
            this.currentPage = 'main';
        }
        //console.log(this.router.url)
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _section_page_section_service__WEBPACK_IMPORTED_MODULE_6__["sectionService"],
            _product_page_product_service__WEBPACK_IMPORTED_MODULE_8__["productService"],
            _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _section_page_section_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-page/section-page.component */ "./src/app/section-page/section-page.component.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _modal_call_modal_call_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-call/modal-call.component */ "./src/app/modal-call/modal-call.component.ts");
/* harmony import */ var _accessorise_page_accessorise_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accessorise-page/accessorise-page.component */ "./src/app/accessorise-page/accessorise-page.component.ts");
/* harmony import */ var _choose_buggy_choose_buggy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./choose-buggy/choose-buggy.component */ "./src/app/choose-buggy/choose-buggy.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
                _section_page_section_page_component__WEBPACK_IMPORTED_MODULE_7__["SectionPageComponent"],
                _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductPageComponent"],
                _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__["CartPageComponent"],
                _modal_call_modal_call_component__WEBPACK_IMPORTED_MODULE_12__["ModalCallComponent"],
                _accessorise_page_accessorise_page_component__WEBPACK_IMPORTED_MODULE_13__["AccessorisePageComponent"],
                _choose_buggy_choose_buggy_component__WEBPACK_IMPORTED_MODULE_14__["ChooseBuggyComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_16__["CompareComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot()
            ],
            providers: [
            // Messages
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _section_page_mock_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-page/mock-section */ "./src/app/section-page/mock-section.ts");




var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getSectionBuggy = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_section_page_mock_section__WEBPACK_IMPORTED_MODULE_3__["SECTION"].filter(function (x) { return x.type == 'buggy'; }));
    };
    AppService.prototype.getSectionStroller = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_section_page_mock_section__WEBPACK_IMPORTED_MODULE_3__["SECTION"].filter(function (x) { return x.type == 'stroller'; }));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/cart-page/cart-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"container container_padding\">\n\t\t<h1>Ваша корзина</h1>\n\t\t<h2>Сумма</h2>\n  </div>\n  \n\t<div *ngFor=\"let itemInCart of productsInCart\" class=\"container itemInCart\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-3 text-center\"><img alt=\"\" style=\"max-width: 200px; margin: auto;\" src=\n\t\t\t\t\"{{itemInCart.img1}}\">\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-10 col-sm-7\">\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<h3>{{itemInCart.h1}}</h3>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<!-- <button class=\"minus_btn\"></button>  -->\n\t\t\t\t\t\t<input min=\"1\"  type=\"number\"\tclass=\"text-center\" [(ngModel)]='itemInCart.quantity' (ngModelChange)=\"calculateTotal($event); calculateTotalItem(itemInCart.id)\">\n\t\t\t\t\t\t<!-- <button class=\"plus_btn\" (click)='plusOneItem()'></button> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"price\">\n\t\t\t\t\tЦена <span>{{itemInCart.price}}</span> грн.\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<h4>Краткое описание</h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam\n\t\t\t\t\tdoloribus cum natus aliquam odit perferendis reiciendis autem molestiae\n\t\t\t\t\tenim officiis.<a href=\"#\">Подробнее</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<button class='close_btn' (click)='deleteProduct(itemInCart.id)'></button><br>\n\t\t\t\t<div class=\"price\">\n\t\t\t\t\t<span *ngIf=\"itemInCart.totalItem\">{{itemInCart.totalItem}} грн.</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr>\n  </div>\n  \n\t<div class=\"container\">\n\t\t<div class=\"row text-center\">\n\t\t\t<div class=\"col-xs-0 col-lg-3\"></div>\n\t\t\t<div class=\"col-lg-3 d-flex\">\n\t\t\t\t<img alt=\"\" src=\"../../assets/img/img_cart/delivery.png\">\n\t\t\t\t<p style=\n\t\t\t\t\"color: #f85969; text-transform: uppercase; font-weight: 700; line-height: 40px; margin: 0; padding-left: px;\">\n\t\t\t\tБесплатная доставка</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 price\">\n\t\t\t\tВсего: <span>{{total}}</span> грн.\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3\">\n        <button class=\"btn_make-order\" (click)='openModal(template)'>Оформить заказ</button> \n        <button (click)='clearCart()'>Очистить корзину</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<!--=========ModalWindow=========-->\n\t<ng-template #template>\n\t<div class=\"modal-header text-center\">\n\t\t<h4 class=\"modal-title text-center\">Заполните форму</h4>\n\t\t<button aria-label=\n\t\t\"Close\" class=\"close pull-right\" style='width: 30px; height: 30px; margin: 0;' type=\n\t\t\"button\"><span aria-hidden=\"true\">&times;</span></button>\n\t</div>\n\t<div class=\"modal-body text-right\">\n\t\tИмя и фамилия <input type=\"text\"><br>\n\t\tТелефон <input type=\"text\"><br>\n\t\tГород и область <input type=\"text\"><br>\n\t\t№ отделения Новой почты <input type=\"text\"><br>\n\t\tКомментарий к заказу \n\t\t<textarea></textarea><br>\n\t\t<button type=\"submit\">Оформить заказ</button> \n\t</div>\n</ng-template>\n<!--=========/ModalWindow=========-->\n\t<!-- <form (submit)=\"addOrder(name.value)\">\n    <div class=\"form-group\">\n      <label for=\"option\">Имя и фамилия</label>\n      <input type=\"text\" id=\"option\" #name placeholder=\"Введите имя и фамилию\" class=\"form-control\">\n      <br>\n      <label for=\"option\">Телефон</label>\n      <input type=\"text\" id=\"option\" placeholder=\"Введите имя и фамилию\" class=\"form-control\">\n      <br>\n      <label for=\"option\">Город и область</label>\n      <input type=\"text\" id=\"option\" placeholder=\"Введите имя и фамилию\" class=\"form-control\">\n      <br>\n      <label for=\"option\">№ отделения Новой почты</label>\n      <input type=\"text\" id=\"option\" placeholder=\"Введите имя и фамилию\" class=\"form-control\">\n      <br>\n      <label for=\"option\">Комментарий к заказу</label>\n      <textarea type=\"text\" id=\"option\" placeholder=\"Введите имя и фамилию\" class=\"form-control\">\n      <button type=\"button\">Оформить заказ</button>\n    </div>\n    </form> -->\n\t<!-- <form class=\"form-horizontal\" [formGroup]=\"loginForm\" (ngSubmit)=\"submit_function()\">\n    <div class=\"wrapperFormGroupResponsive\">\n      <span style=\"color:#a94442\" *ngIf=\"error\">{{ error }}</span>\n      <div class=\"form-group\">\n        <label>User Name or Email</label>\n        <input [(ngModel)]=\"USER.name\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" formControlName=\"UserName\">\n      </div>\n    </div>\n    <div class=\"wrapperFormGroupResponsive\">\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input [(ngModel)]=\"USER.sname\" type=\"text\" class=\"form-control\" placeholder=\"type your password\" formControlName=\"Password\">\n      </div>\n    </div>\n    <div>User Name: GlasswizAdmin</div>\n    <div>Password: TestPass123!</div>\n    <div class=\"form-group\" style=\"text-align: center;\">\n      <button type=\"submit\" class=\"btn bg-main-blue sign-in-btn\" style=\"background:#a94442\" [disabled]=\"loginForm.invalid\">Sign in</button>\n    </div>\n  </form> -->\n"

/***/ }),

/***/ "./src/app/cart-page/cart-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff; }\n\n.btn_make-order, button[type='submit'] {\n  background-color: #f85969;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\nbutton[type='submit'] {\n  margin-right: 30px; }\n\n.container_padding {\n  padding: 30px; }\n\ninput[name=\"quantity\"] {\n  margin: 0;\n  width: 64px;\n  height: 41px;\n  border: 2px solid black;\n  border-radius: 5px; }\n\nh1 {\n  display: inline;\n  color: #f85969;\n  text-transform: uppercase;\n  font-size: 18px;\n  width: 30%;\n  padding-left: 20px;\n  font-weight: 700; }\n\nh2 {\n  display: inline;\n  float: right;\n  padding-right: 40px;\n  font-size: 18px;\n  width: 70%;\n  text-align: right;\n  font-weight: 700; }\n\nh3 {\n  width: 70%; }\n\nh3, h4 {\n  font-size: 18px; }\n\np {\n  font-size: 14px; }\n\n.price {\n  font-size: 24px;\n  font-weight: 700; }\n\n.price span {\n    color: #f85969; }\n\nhr {\n  background-color: #f85969;\n  height: 2px; }\n\n.itemInCart img {\n  border: 2px solid #f85969;\n  border-radius: 5px;\n  padding: 1px;\n  width: 100%; }\n\n.itemInCart .close_btn, .itemInCart .minus_btn, .itemInCart .plus_btn {\n  padding: 0;\n  border: none;\n  width: 41px;\n  height: 41px;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.itemInCart .close_btn {\n  background-image: url('close_btn.png');\n  float: right; }\n\n.itemInCart .minus_btn {\n  background-image: url('minus_icon.png'); }\n\n.itemInCart .plus_btn {\n  background-image: url('plus_icon.png'); }\n\n.modal-body input[type=\"text\"], .modal-body textarea {\n  width: 150px;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 5px 30px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1wYWdlL0Q6XFxXRUIgRGV2ZWxvcGVyXFxQcm9qZWN0RWFzeXdhbGtlckdpdGh1YlxcQWxpbmFEZW15ZG92YS5naXRodWIuaW8vc3JjXFxhcHBcXGNhcnQtcGFnZVxcY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBTkksVUFBVTtFQUNWLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUtmLHlCQUF5QjtFQUN6QixjQWJXLEVBQUE7O0FBZVg7RUFDQSx5QkFqQmtCO0VBa0JsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsY0F2Q2tCO0VBd0NsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRnBCO0lBSVEsY0FwRWMsRUFBQTs7QUF1RXRCO0VBQ0kseUJBeEVrQjtFQXlFbEIsV0FBVyxFQUFBOztBQUdmO0VBRVEseUJBOUVjO0VBK0VkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUxuQjtFQVNRLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBZG5DO0VBaUJRLHNDQUE4RDtFQUM5RCxZQUFZLEVBQUE7O0FBbEJwQjtFQXFCUSx1Q0FBK0QsRUFBQTs7QUFyQnZFO0VBd0JRLHNDQUE4RCxFQUFBOztBQUd0RTtFQUVRLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluQ29sb3JSZWQ6ICNmODU5Njk7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGZvbnRTaXplOiAxNnB4O1xyXG5cclxuQG1peGluIGJ1dHRvbi1yZXNldCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b24tcmVzZXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC5idG5fbWFrZS1vcmRlciwgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICB3aWR0aDogMTYzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbi5jb250YWluZXJfcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5pbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5oMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuaDMge1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5oMywgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICB9XHJcbn1cclxuaHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIGhlaWdodDogMnB4O1xyXG59XHJcblxyXG4uaXRlbUluQ2FydCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5jbG9zZV9idG4sIC5taW51c19idG4sIC5wbHVzX2J0biB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDQxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MXB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jbG9zZV9idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ltZ19jYXJ0L2Nsb3NlX2J0bi5wbmcpO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5taW51c19idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ltZ19jYXJ0L21pbnVzX2ljb24ucG5nKTtcclxuICAgIH1cclxuICAgIC5wbHVzX2J0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW1nX2NhcnQvcGx1c19pY29uLnBuZyk7XHJcbiAgICB9XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDMwcHggNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/cart-page/cart-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_page_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-page/product.service */ "./src/app/product-page/product.service.ts");






// import { Location } from '@angular/common';
var CartPageComponent = /** @class */ (function () {
    function CartPageComponent(formBuilder, _productService, modalService, route, router) {
        this.formBuilder = formBuilder;
        this._productService = _productService;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
    }
    CartPageComponent.prototype.ngOnInit = function () {
        this.productsInCart = JSON.parse(localStorage.getItem('obj'));
        this.calculateTotal();
        this.productsInCart.forEach(function (x) {
            x.totalItem = x.price * x.quantity;
        }); // винестив окрему функцію
    };
    CartPageComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.productsInCart.map(function (x) {
            _this.total += x.price * x.quantity;
            console.log(x.price, x.quantity, _this.total);
        });
    };
    CartPageComponent.prototype.calculateTotalItem = function (id) {
        var result = this.productsInCart.find(function (x) { return x.id === id; });
        if (result) {
            result.totalItem = result.price * result.quantity;
            // this.quantity = result.quantity;
        }
        //localStorage.setItem()this.productsInCart
        this._productService.cartSubject.next(true);
    };
    CartPageComponent.prototype.deleteProduct = function (id) {
        // this.productsInCart = this.productsInCart.filter(x => x != itemInCart)
        this.productsInCart = JSON.parse(localStorage.getItem('obj'));
        this.productsInCart = this.productsInCart.filter(function (x) { return x.id !== id; });
        localStorage.setItem('obj', JSON.stringify(this.productsInCart));
        this._productService.cartSubject.next(true);
        this.total = 0;
        //this.calculateTotal();
    };
    // makeOrder(){
    //   //this.router.navigateByUrl('/order');
    // }
    // clearCart() {
    //   this.productsInCart = localStorage.clear();
    // }
    CartPageComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/cart-page/cart-page.component.html"),
            styles: [__webpack_require__(/*! ./cart-page.component.scss */ "./src/app/cart-page/cart-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _product_page_product_service__WEBPACK_IMPORTED_MODULE_5__["productService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartPageComponent);
    return CartPageComponent;
}());



/***/ }),

/***/ "./src/app/choose-buggy/choose-buggy.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-buggy/choose-buggy.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex\">\n  <div class=\"checkBox\">\n    <input type='checkbox' [(ngModel)]=\"sortByStroller\" (ngModelChange)=\"sortedProducts()\">Коляски 2в1\n    <br>\n    <input type='checkbox' [(ngModel)]=\"sortByBuggy\" (ngModelChange)=\"sortedProducts()\">Прогулочные коляски\n    <hr>\n    <input type='checkbox' [(ngModel)]=\"sortByGirl\" (ngModelChange)=\"sortedProducts()\">Для девочек\n    <br>\n    <input type='checkbox' [(ngModel)]=\"sortByBoy\" (ngModelChange)=\"sortedProducts()\">Для мальчиков\n    <br>\n    <input type='checkbox' [(ngModel)]=\"sortByUnisex\" (ngModelChange)=\"sortedProducts()\">Унисекс\n  </div>\n  <div class=\"container\">\n      <div class=\"row text-center justify-content-center\">\n          \n          <div *ngFor='let choose of choosedBuggy' class=\"col-xs-12 col-sm-4\">\n              <div class=\"card\">\n                <img src=\"{{choose.img1}}\" class=\"card-img-top\" alt=\"\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{choose.h1}}</h4>\n                  <p>{{choose.price}} грн.</p>\n                  <button routerLink=\"/product/{{choose.id}}\">Посмотреть</button>\n                </div>\n              </div>\n          </div>\n        \n      </div>\n  </div>\n</div>\n<!-- \n1. При кожному новому кліку на чккбокс перевірка всіх чекбоксів.\n2. Якщо stroller==true, то сортування по \n\nif (stroller == checked) {\n  listStroller = список, відсортований по типу \"stroller\";\n    if(boy==checked || girl==checked || all==checked) {\n      if(boy==checked) {\n        return listStroller, відсортований по типу \"boy\"\n      } else if (girl==checked) {\n        return listStroller, відсортований по типу \"girl\"\n      } else if (all==checked) {\n        return listStroller, відсортований по типу \"all\"\n      } else if (boy==checked && girl==checked) {\n        return listStroller, відсортований по типу \"boy\" і \"girl\"\n      } else if (girl==checked && all==checked) {\n        return listStroller, відсортований по типу \"girl\" і \"all\"\n      } else if (boy==checked && all==checked) {\n        return listStroller, відсортований по типу \"boy\" і \"all\"\n      } else if (boy==checked && girl==checked && all==checked) {\n        return список, відсортований по \"stroller\";\n      }\n    } else {\n      return список, відсортований по \"stroller\";\n    }\n\n} else if (buggy == checked) {\n\n\n\n} else if (stroller == checked && buggy == checked) {\n  return весь список;\n} else {\n  document.write('Виберіть параметри для сотрування');\n} -->\n<!-- \n1. зберігати весь список в одну змінну, фільтрований в іншу\n2. на кожен чекбокс викликається функція сортування за допогою ngModelChange\n3. кожному чебоксу буде відповідати змінна яка записується у ngModel\n4. виводиться відсортований список\n5. при ngOnInit викликати функцію сортування -->\n"

/***/ }),

/***/ "./src/app/choose-buggy/choose-buggy.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/choose-buggy/choose-buggy.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button, input[type='submit'] {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\ninput:first-child {\n  margin-top: 60px; }\n\n.container_padding {\n  padding: 30px; }\n\n.card {\n  margin-top: 60px;\n  border: none; }\n\n.card img {\n    border: 2px solid #f85969;\n    border-radius: 5px;\n    padding: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWJ1Z2d5L0Q6XFxXRUIgRGV2ZWxvcGVyXFxQcm9qZWN0RWFzeXdhbGtlckdpdGh1YlxcQWxpbmFEZW15ZG92YS5naXRodWIuaW8vc3JjXFxhcHBcXGNob29zZS1idWdneVxcY2hvb3NlLWJ1Z2d5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQU5XO0VBT1gseUJBUmtCO0VBU2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFGZDtJQUlJLHlCQTNCZ0I7SUE0QmhCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaG9vc2UtYnVnZ3kvY2hvb3NlLWJ1Z2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5Db2xvclJlZDogI2Y4NTk2OTtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZm9udFNpemU6IDE2cHg7XHJcblxyXG5idXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGlucHV0OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfSBcclxuICAuY29udGFpbmVyX3BhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbkNvbG9yUmVkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/choose-buggy/choose-buggy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/choose-buggy/choose-buggy.component.ts ***!
  \********************************************************/
/*! exports provided: ChooseBuggyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseBuggyComponent", function() { return ChooseBuggyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_page_mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-page/mock-product */ "./src/app/product-page/mock-product.ts");
/* harmony import */ var _choose_buggy_choose_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-buggy/choose.service */ "./src/app/choose-buggy/choose.service.ts");
/* harmony import */ var _product_page_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-page/product.service */ "./src/app/product-page/product.service.ts");





var ChooseBuggyComponent = /** @class */ (function () {
    function ChooseBuggyComponent(chooseService, _productService) {
        this.chooseService = chooseService;
        this._productService = _productService;
        this.choosedBuggy = _product_page_mock_product__WEBPACK_IMPORTED_MODULE_2__["ALLBUGGYS"];
    }
    ChooseBuggyComponent.prototype.ngOnInit = function () {
        this.sortByBuggy = this._productService.checkBuggy ? true : false;
        this.sortByStroller = this._productService.stroller ? true : false;
        this.sortedProducts();
    };
    ChooseBuggyComponent.prototype.sortedProducts = function () {
        var stroller = this.sortByStroller ? 'stroller' : null;
        var buggy = this.sortByBuggy ? 'buggy' : null;
        var boy = this.sortByBoy ? 'boy' : null;
        var girl = this.sortByGirl ? 'girl' : null;
        var all = this.sortByUnisex ? 'all' : null;
        if (stroller || buggy) {
            this.choosedBuggy = _product_page_mock_product__WEBPACK_IMPORTED_MODULE_2__["ALLBUGGYS"].filter(function (x) { return x.type === stroller || x.type === buggy; });
        }
        else {
            this.choosedBuggy = _product_page_mock_product__WEBPACK_IMPORTED_MODULE_2__["ALLBUGGYS"];
        }
        if (boy || girl || all) {
            this.choosedBuggy = this.choosedBuggy.filter(function (x) { return x.sex === girl || x.sex === boy || x.sex === all; });
        }
    };
    ChooseBuggyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-buggy',
            template: __webpack_require__(/*! ./choose-buggy.component.html */ "./src/app/choose-buggy/choose-buggy.component.html"),
            styles: [__webpack_require__(/*! ./choose-buggy.component.scss */ "./src/app/choose-buggy/choose-buggy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_choose_buggy_choose_service__WEBPACK_IMPORTED_MODULE_3__["chooseService"], _product_page_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]])
    ], ChooseBuggyComponent);
    return ChooseBuggyComponent;
}());



/***/ }),

/***/ "./src/app/choose-buggy/choose.service.ts":
/*!************************************************!*\
  !*** ./src/app/choose-buggy/choose.service.ts ***!
  \************************************************/
/*! exports provided: chooseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseService", function() { return chooseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var chooseService = /** @class */ (function () {
    function chooseService() {
    }
    // sortByStroller;
    // sortByBuggy;
    // sortByGirl;
    // sortByBoy;
    // sortByUnisex;
    chooseService.prototype.constuctor = function () { };
    chooseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], chooseService);
    return chooseService;
}());



/***/ }),

/***/ "./src/app/compare/compare.component.html":
/*!************************************************!*\
  !*** ./src/app/compare/compare.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='text-center'>\n    <table class=\"table\">\n      <tr>\n        <td></td>\n        <td *ngFor='let inCompare of productsInCompare'><img src=\"{{inCompare.img1}}\" alt=\"buggy\"></td>\n      </tr>\n      <tr>\n        <td>Название</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.h1}}</td>\n      </tr>\n      <tr>\n        <td>Тип</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.type}}</td>\n      </tr>\n      <tr>\n        <td>Возраст ребенка</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.babyAge}}</td>\n      </tr>\n      <tr>\n        <td>Вес ребенка</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.babyWeight}}</td>\n      </tr>\n      <tr>\n        <td>Ремни безопасности</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.seatBelts}}</td>\n      </tr>\n      <tr>\n        <td>Съемные мягкие части</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.removableSoftParts}}</td>\n      </tr>\n      <tr>\n        <td>Корзина для вещей</td>\n        <td *ngFor='let inCompare of productsInCompare'>{{inCompare.basketForThings}}</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td *ngFor='let inCompare of productsInCompare'>\n          <button class=\"toCurrentPage\" routerLink='/product/{{inCompare.id}}'>Перейти на страницу товара</button>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td *ngFor='let inCompare of productsInCompare'>\n          <button (click)='deleteProduct(inCompare.id)'>Убрать из сравнения</button>\n        </td>\n        </tr>\n    </table>\n </div>"

/***/ }),

/***/ "./src/app/compare/compare.component.scss":
/*!************************************************!*\
  !*** ./src/app/compare/compare.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin: 0;\n  padding: 0; }\n\nbutton {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\n.table {\n  border: 3px solid #f85969;\n  margin: 10px; }\n\n.table img {\n    border-color: #f85969;\n    height: 150px; }\n\n.table td {\n    width: 330px;\n    border-right: 3px solid #f85969; }\n\n.toCurrentPage {\n  width: 230px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyZS9EOlxcV0VCIERldmVsb3BlclxcUHJvamVjdEVhc3l3YWxrZXJHaXRodWJcXEFsaW5hRGVteWRvdmEuZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wYXJlXFxjb21wYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FYVztFQVlYLHlCQWJrQjtFQWNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQXZCa0I7RUF3QmxCLFlBQVksRUFBQTs7QUFGaEI7SUFLUSxxQkEzQmM7SUE0QmQsYUFBYSxFQUFBOztBQU5yQjtJQVVRLFlBQVk7SUFDWiwrQkFqQ2MsRUFBQTs7QUFvQ3RCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5Db2xvclJlZDogI2Y4NTk2OTtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZm9udFNpemU6IDE2cHg7XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICB9XHJcbn1cclxuLnRvQ3VycmVudFBhZ2Uge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compare/compare.component.ts ***!
  \**********************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CompareComponent = /** @class */ (function () {
    function CompareComponent(route) {
        this.route = route;
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.getItemToCompare();
    };
    CompareComponent.prototype.getItemToCompare = function () {
        this.productsInCompare = JSON.parse(localStorage.getItem('objToCompare'));
        //localStorage.removeItem('toCompare');
    };
    CompareComponent.prototype.deleteProduct = function (id) {
        this.productsInCompare = JSON.parse(localStorage.getItem('objToCompare'));
        this.productsInCompare = this.productsInCompare.filter(function (x) { return x.id !== id; });
        localStorage.setItem('objToCompare', JSON.stringify(this.productsInCompare));
    };
    CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/compare/compare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <!--=========Main screen=========-->\n  <div class=\"container-fluid mainScreen\">\n    <div class=\"container container_padding\">\n      <div class=\"row text-center jistify-content-around\">\n        <div class=\"col-12\">\n          <h1>Детские коляски премиум-класса</h1>\n          <h2>Разработано в Нидерландах</h2>\n        </div>\n        <div class='d-flex justify-content-around'>\n          <div class=\"col-3\">\n            <img src=\"../assets/img/img_main/feather-filled-shape.png\" alt=\"buggy\">\n            <h3>Вес прогулочных колясок - от 6 кг, колясок 2в1 - от 10 кг</h3>\n          </div>\n        <div class=\"col-3\">\n          <img src=\"../assets/img/img_main/free_shipping.png\" alt=\"\">\n          <h3>Бесплатная доставка колясок по Украине, оплата при получении!  </h3>\n        </div>\n        <div class=\"col-3\">\n            <img src=\"../assets/img/img_main/guarantee.png\" alt=\"\">\n            <h3>Официальная гарантия в Украине и Европе, собственный СЦ</h3>\n        </div> \n      </div>\n      </div>\n    </div>\n  </div>\n  <!--=========/Main screen=========-->\n  \n  <!--=========Slider1=========-->\n  <div class='container container_padding'>\n      <div class=\"carousel slide\" data-ride='carousel' id='carouselExampleIndicators'>\n        <ol class=\"carousel-indicators\">\n          <li class=\"active\" data-slide-to='0' data-target=\"#carouselExampleIndicators\"></li>\n          <li data-slide-to='1' data-target=\"#carouselExampleIndicators\"></li>\n          <li data-slide-to='2' data-target=\"#carouselExampleIndicators\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\"><img alt=\"img1\" class=\"d-block w-100\"\n          src=\"../assets/img/img_main/png1.jpg\"></div>\n          <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n          \"../assets/img/img_main/png1.jpg\"></div>\n          <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n          \"../assets/img/img_main/png1.jpg\"></div>\n        </div>\n        <a class=\"carousel-control-prev\" \n            data-slide='prev' \n            href=\"#carouselExampleIndicators\" \n            role=\"button\">\n            <span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a> \n        <a class=\"carousel-control-next\" \n            data-slide='next' \n            href=\"#carouselExampleIndicators\" \n            role=\"button\">\n            <span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n  <!--=========/Slider1=========-->\n  \n  <!--=========Products=========-->\n  <div class=\"container-fluid text-center container_padding\">\n    <div class=\"container container_padding\">\n      <h2>Выберите свою коляску Easywalker</h2>\n      <div class=\"row text-center justify-content-center\">\n        <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n          <div class=\"card\">\n            <img src=\"../assets/img/img_main/disney_buggy.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Прогулочные коляски</h4>\n              <button (click)='filterBuggy()'>Перейти в каталог</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n          <div class=\"card\">\n            <img src=\"../assets/img/img_main/2in1.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Коляски 2в1</h4>\n              <button (click)='filterBuggy(true)'>Перейти в каталог</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--=========Products=========-->\n  \n  <!--=========Advantages=========-->\n  <div class=\"container-fluid advantages\">\n    \n    <div class=\"container text-center container_padding\">\n      <h2>Воспользуйтесь самыми выгодными условиями<br>покупки на <span>easywalker.com.ua</span></h2>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-4\">\n          <div class='imgAdvantages d-flex justify-content-center'><img src=\"../assets/img/img_main/new.png\" alt=\"\"></div>\n          <h4>Коляски со склада</h4>\n          <p>Коляски абсолютно новые, полностью в заводской упаковке</p>\n        </div>\n        <div class=\"col-xs-6 col-sm-4\">\n            <div class='imgAdvantages'><img src=\"../assets/img/img_main/time.png\" alt=\"\"></div>\n          <h4>Отправка сегодня</h4>\n          <p> Доставка 1-2 дня - по Украине бесплатно или самовывоз со склада в Киеве</p>\n        </div>\n        <div class=\"col-xs-6 col-sm-4\">\n            <div class='imgAdvantages'><img src=\"../assets/img/img_main/original.png\" alt=\"\"></div>\n          <h4>100% оригинальный товар</h4>\n          <p>Официально ввезенная в Украину, сертифицированная продукция</p>\n        </div>\n        <div class=\"col-xs-6 col-sm-4\">\n            <div class='imgAdvantages'><img src=\"../assets/img/img_main/choice.png\" alt=\"\"></div>\n          <h4>Большой выбор</h4>\n          <p> Коляски для одного ребенка, близнецов и погодок</p>\n        </div>\n        <div class=\"col-xs-6 col-sm-4\">\n            <div class='imgAdvantages'><img src=\"../assets/img/img_main/garantie.png\" alt=\"\"></div>\n          <h4>Официальная гарантия</h4>\n          <p>12 месяцев в Украине и Европе</p>\n        </div>\n        <div class=\"col-xs-6 col-sm-4\">\n          <div class='imgAdvantages'><img src=\"../assets/img/img_main/purse.png\" alt=\"\" style=\"padding-top: 25px;\"></div>\n          <h4>Удобная форма оплаты</h4>\n          <p>Предоплата на карту, р/с, наличные или наложенный платеж</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--=========/Advantages=========-->\n  \n  <!--=========Slider2=========-->\n  <div class='container text-center container_padding'>\n    <h2 class=\"mb-4\">Нидерланды, Великобритания, Германия, Бельгия, Австрия, Монако - родители по всей Европе выбирают Easywalker</h2>\n    <div class=\"container d-flex justify-content-center\">\n    <div class=\"carousel slide carousel_customers\" data-ride='carousel' id='carouselExampleIndicators'>\n      <ol class=\"carousel-indicators\">\n        <li class=\"active\" data-slide-to='0' data-target=\"#carouselExampleIndicators\"></li>\n        <li data-slide-to='1' data-target=\"#carouselExampleIndicators\"></li>\n        <li data-slide-to='2' data-target=\"#carouselExampleIndicators\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\"><img alt=\"img1\" class=\"d-block w-100\"\n        src=\"../assets/img/%D1%81lient_photo/1.jpg\"></div>\n        <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n        \"../assets/img/%D1%81lient_photo/2.jpg\"></div>\n        <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n        \"../assets/img/%D1%81lient_photo/3.jpg\"></div>\n        <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n        \"../assets/img/%D1%81lient_photo/4.jpg\"></div>\n        <div class=\"carousel-item\"><img alt=\"img1\" class=\"d-block w-100\" src=\n        \"../assets/img/%D1%81lient_photo/5.jpg\"></div>\n      </div>\n      <a class=\"carousel-control-prev\" \n          data-slide='prev' \n          href=\"#carouselExampleIndicators\" \n          role=\"button\">\n          <span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span>\n          <span class=\"sr-only\">Previous</span>\n      </a> \n      <a class=\"carousel-control-next\" \n          data-slide='next' \n          href=\"#carouselExampleIndicators\" \n          role=\"button\">\n          <span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  </div><!--=========/Slider2=========-->\n  \n  <!--=========HoeToBye=========-->\n  <div class=\"container-fluid container_padding howToBye\">\n      <h2 class=\"text-center\">5 шагов к комфортным прогулкам с малышом</h2>\n    <div class=\"container d-flex justify-content-around text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-xs-12 col-sm-4 col-lg-2 howToByeStep d-flex justify-content-center\">\n          <div>\n            <div class='howToByeStepNumber'><p>1</p></div>\n            <div class=\"steps\"><img src=\"../assets/img/img_main/5steps1.png\" alt=\"steps\"></div>\n            <p>Выберите коляску, добавьте ее в корзину</p>\n          </div>\n          <div>\n            <img src=\"../assets/img/img_main/arrowRight.png\" alt=\"arrow\">\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-4 col-lg-2 howToByeStep d-flex\">\n          <div>\n            <div class='howToByeStepNumber'><p>2</p></div>\n            <div class=\"steps\"><img src=\"../assets/img/img_main/5steps2.png\" alt=\"steps\"></div>\n            <p>Перейдите в корзину, укажите свои контакты и данные для доставки</p>\n        </div>\n        <div>\n            <img src=\"../assets/img/img_main/arrowRight.png\" alt=\"arrow\">\n            </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-4 col-lg-2 howToByeStep d-flex\">\n              <div>\n                <div class='howToByeStepNumber'><p>3</p></div>\n                <div class=\"steps\"><img src=\"../assets/img/img_main/5steps3.png\" alt=\"steps\"></div>\n                <p>В ближайшее время вам перезвонит менеджер для подтверждения заказа</p>\n              </div>\n              <div>\n                <img src=\"../assets/img/img_main/arrowRight.png\" alt=\"arrow\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 col-lg-2 howToByeStep d-flex\">\n                <div>\n                  <div class='howToByeStepNumber'><p>4</p></div>\n                  <div class=\"steps\"><img src=\"../assets/img/img_main/5steps4.png\" alt=\"steps\"></div>\n                  <p>Вы получаете коляску и оплачиваете покупку любым добным способом</p>\n                </div>\n                <div>\n                  <img src=\"../assets/img/img_main/arrowRight.png\" alt=\"arrow\">\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-sm-4 col-lg-2 howToByeStep d-flex\">\n                  <div style=\"margin-right: 38px;\">\n                    <div class='howToByeStepNumber'><p>5</p></div>\n                    <div class=\"steps\"><img src=\"../assets/img/img_main/5steps5.png\" alt=\"steps\"></div>\n                    <p>Каждый день наслаждаетесь приятными прогулками со своим малышом</p>\n                  </div>\n              </div>\n            </div>\n    </div>\n  </div>\n  <!--=========HoeToBye=========-->\n  \n  <!--=========Form_1_var=========-->\n  <div class=\"container-fluid end\">\n      <div class=\"container text-center container_padding\">\n        <h2>Остались вопросы?<br>\n        Напишите нам.<br>\n        И мы с удовольствием ответим.</h2><br>\n        <form>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-5 col-sm-5 col-lg-2\">\n              <input class=\"form-control\" type=\"hidden\">\n            </div>\n          </div>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-6 col-sm-5 col-lg-2\">\n              <input class=\"form-control\" placeholder=\"Имя\" type=\"text\">\n            </div><br>\n            <div class=\"col-xs-6 col-sm-5 col-lg-2\">\n              <input class=\"form-control\" placeholder=\"Телефон\" type=\"text\">\n            </div>\n          </div><br>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-12 col-sm-10 col-lg-4\">\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\"\n              placeholder=\"Сообщение\" rows=\"3\"></textarea>\n            </div>\n          </div><br>\n          <div class=\"row d-flex justify-content-center\">\n            <input type=\"submit\">\n          </div><br>\n          <br>\n        </form>\n      </div>\n    </div>\n  <!--=========/Form_1_var=========-->\n  \n  <!--=========Form_2_var=========-->\n  <!-- <div class=\"container-fluid end\">\n    <div class=\"container text-center container_padding\">\n      <h2>Остались вопросы? <br>Напишите нам. <br>И мы с удовольствием ответим.</h2>\n      <br>\n        <form>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-5 col-sm-5 col-lg-2\">\n              <input type=\"hidden\" class=\"form-control\" [(ngModel)]=\"date\" value=\"new Date()\"/>\n            </div>\n          </div>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-6 col-sm-5 col-lg-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Имя\" [(ngModel)]=\"name\" />\n            </div>\n            <div class=\"col-xs-6 col-sm-5 col-lg-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Телефон\" [(ngModel)]=\"phone\" />\n            </div>\n          </div>\n          <br>\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-xs-12 col-sm-10 col-lg-4\">\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Сообщение\" [(ngModel)]=\"message\"></textarea>\n            </div>\n          </div>\n          <br>\n          <div class=\"row d-flex justify-content-center\">\n            <input type=\"submit\" (click)=\"addQuestion(date, name, phone, message)\"/>\n          </div>\n          <br>\n          <br>\n        </form>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Дата</th>\n          <th>Имя</th>\n          <th>Телефон</th>\n          <th>Сообщение</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let item of Messages'>\n          <td>{{item.date}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.phone}}</td>\n          <td>{{item.message}}</td>\n        </tr>\n      </tbody>\n    </table>\n  \n    </div>\n  </div> -->\n  <!--=========/Form_2_var=========-->"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: OpenSans, sans-serif; }\nbutton, input[type='submit'] {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n.container_padding {\n  padding: 30px; }\n.selector-for-some-widget {\n  box-sizing: content-box; }\n.head button {\n  margin-top: 6px; }\n.head .description {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 52px; }\n.head .quickOrder {\n  font-size: 12px;\n  font-weight: 700;\n  margin-top: 6px; }\n.head .quickOrder span {\n    font-size: 16px;\n    font-weight: 700; }\n.navbar {\n  background-color: #f85969; }\n.navbar li {\n    margin-right: 20px; }\n.navbar li hr {\n      margin: 3px;\n      padding: 0; }\n.navbar .dropdown-menu {\n    padding: 3px; }\n.navbar .navbarDropdown {\n    padding: 0;\n    padding: 3px; }\n.navbar .active {\n    color: black; }\n.navbar .button_find {\n    width: 40px; }\n.navbar .nav-item {\n    line-height: 27px; }\n.navbar .navbar-light .navbar-nav .nav-link {\n    color: #ffffff;\n    font-size: 16px;\n    font-weight: 400; }\n.navbar .dropdown-item:hover {\n    background-color: #f85969; }\n.navbar .navbar-toggler {\n    border: none;\n    width: 60px; }\n.mainScreen {\n  background-image: url('main_screen2.jpg');\n  background-size: cover;\n  background-repeat: no-repeat; }\n.mainScreen img {\n    padding: 20px; }\n.mainScreen h1 {\n    padding-top: 5%;\n    color: #ffffff;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);\n    font-weight: 700; }\n.mainScreen h2 {\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: 700;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.6); }\n.mainScreen h3 {\n    font-size: 16px;\n    padding-bottom: 5%;\n    font-weight: 700;\n    color: #ffffff; }\n.mainScreen .main_blocks {\n    justify-content: space-between; }\n.carousel {\n  border: 2px solid black;\n  padding: 1px; }\n.carousel .carousel-control-next-icon, .carousel .carousel-control-prev-icon {\n    width: 60px;\n    height: 60px; }\n.carousel .carousel-indicators li {\n    background-color: black; }\n.card {\n  margin-top: 60px;\n  border: none; }\n.card img {\n    border: 2px solid #f85969;\n    border-radius: 5px;\n    padding: 1px; }\n.advantages {\n  /* Set a specific height */\n  min-height: 700px;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/img/img_main/disney_minnie_theme_38_26 (2).png\"); }\n.advantages .imgAdvantages {\n    margin: 90px auto 20px;\n    width: 113px;\n    height: 100px;\n    align-items: center; }\n.advantages img {\n    vertical-align: bottom; }\n.advantages h2, .advantages h4, .advantages p {\n    color: #ffffff; }\n.advantages span {\n    color: #f85969; }\n.carousel_customers {\n  max-width: 700px;\n  padding: 0; }\n.howToBye h2 {\n  padding-bottom: 60px; }\n.howToBye img[alt=\"arrow\"] {\n  width: 13px;\n  height: 22px;\n  margin-right: 5px;\n  margin-left: 20px;\n  margin-top: 15px; }\n.howToBye .howToByeArrow {\n  background-image: url('arrowRight.png');\n  background-size: cover; }\n.howToBye .howToByeStepNumber {\n  width: 41px;\n  height: 41px;\n  color: #f85969;\n  font-size: 30px;\n  border: 2px solid black;\n  border-radius: 20px;\n  margin: auto; }\n.howToBye p:first-child {\n  line-height: 41px; }\n.howToBye img[alt='steps'] {\n  margin: 20px; }\n.howToBye .steps {\n  height: 114px; }\n.end {\n  background-image: url('end.jpg');\n  background-size: cover; }\n.end h2 {\n    color: #ffffff;\n    font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxXRUIgRGV2ZWxvcGVyXFxQcm9qZWN0RWFzeXdhbGtlckdpdGh1YlxcQWxpbmFEZW15ZG92YS5naXRodWIuaW8vc3JjXFxhcHBcXG1haW4tcGFnZVxcbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBS0E7RUFDRSxpQ0FBaUMsRUFBQTtBQUVuQztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FUYTtFQVViLHlCQVhvQjtFQVlwQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsYUFBYSxFQUFBO0FBRWY7RUFDRSx1QkFBdUIsRUFBQTtBQUd6QjtFQUVJLGVBQWUsRUFBQTtBQUZuQjtFQUtJLGVBN0JXO0VBOEJYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtBQVByQjtFQVVJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBWm5CO0lBY1EsZUF0Q087SUF1Q1AsZ0JBQWdCLEVBQUE7QUFNeEI7RUFDRSx5QkFoRG9CLEVBQUE7QUErQ3RCO0lBR0ksa0JBQWtCLEVBQUE7QUFIdEI7TUFLTSxXQUFXO01BQ1gsVUFBVSxFQUFBO0FBTmhCO0lBVUksWUFBWSxFQUFBO0FBVmhCO0lBYUksVUFBVTtJQUNWLFlBQVksRUFBQTtBQWRoQjtJQWlCSSxZQUFZLEVBQUE7QUFqQmhCO0lBb0JJLFdBQVcsRUFBQTtBQXBCZjtJQXVCSSxpQkFBaUIsRUFBQTtBQXZCckI7SUEwQkksY0F4RVc7SUF5RVgsZUF4RVc7SUF5RVgsZ0JBQWdCLEVBQUE7QUE1QnBCO0lBK0JJLHlCQTlFa0IsRUFBQTtBQStDdEI7SUFrQ0ksWUFBWTtJQUNaLFdBQVcsRUFBQTtBQUlmO0VBQ0UseUNBQW1FO0VBQ25FLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtBQUg5QjtJQU1NLGFBQWEsRUFBQTtBQU5uQjtJQVNNLGVBQWU7SUFDZixjQS9GUztJQWdHVCxvSEFBbUg7SUFDbkgsZ0JBQWdCLEVBQUE7QUFadEI7SUFlTSxjQXBHUztJQXFHVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9IQUFtSCxFQUFBO0FBbEJ6SDtJQXFCTSxlQXpHUztJQTBHVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBN0dTLEVBQUE7QUFxRmY7SUEyQk0sOEJBQThCLEVBQUE7QUFJcEM7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBO0FBRmQ7SUFLSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBTmhCO0lBU0ksdUJBQXNCLEVBQUE7QUFJMUI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBRmQ7SUFJSSx5QkF0SWtCO0lBdUlsQixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0FBSWhCO0VBQ0UsMEJBQUE7RUFDQSxpQkFBaUI7RUFFakIseUNBQUE7RUFDQSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsK0VBQStFLEVBQUE7QUFUakY7SUFZSSxzQkFBc0I7SUFHdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtBQWpCdkI7SUFvQk0sc0JBQXNCLEVBQUE7QUFwQjVCO0lBd0JNLGNBbktTLEVBQUE7QUEySWY7SUEyQk0sY0F2S2dCLEVBQUE7QUEyS3RCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtBQUdaO0VBRUksb0JBQW9CLEVBQUE7QUFGeEI7RUFNSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7QUFWcEI7RUFhSSx1Q0FBK0Q7RUFDL0Qsc0JBQXNCLEVBQUE7QUFkMUI7RUFvQkksV0FBVztFQUNYLFlBQVk7RUFDWixjQXRNa0I7RUF1TWxCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQTFCaEI7RUE2QkksaUJBQWlCLEVBQUE7QUE3QnJCO0VBZ0NJLFlBQVksRUFBQTtBQWhDaEI7RUFtQ0ksYUFBYSxFQUFBO0FBS2pCO0VBQ0UsZ0NBQXdEO0VBQ3hELHNCQUFzQixFQUFBO0FBRnhCO0lBSUksY0EzTlc7SUE0TlgsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuJG1haW5Db2xvclJlZDogI2Y4NTk2OTtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZm9udFNpemU6IDE2cHg7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogT3BlblNhbnMsIHNhbnMtc2VyaWY7XHJcbn1cclxuYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yUmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTYzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY29udGFpbmVyX3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnNlbGVjdG9yLWZvci1zb21lLXdpZGdldCB7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgfVxyXG4gIC5xdWlja09yZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yUmVkO1xyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGhyIHtcclxuICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbiAgLm5hdmJhckRyb3Bkb3duIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuYnV0dG9uX2ZpbmQge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICB9XHJcbiAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvclJlZDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW5TY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pbWdfbWFpbi9tYWluX3NjcmVlbjIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzowIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtc2hhZG93OjAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubWFpbl9ibG9ja3Mge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMXB4O1xyXG5cclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBpbWcge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJG1haW5Db2xvclJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbi5hZHZhbnRhZ2VzIHtcclxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cclxuICBtaW4taGVpZ2h0OiA3MDBweDsgXHJcblxyXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltZ19tYWluL2Rpc25leV9taW5uaWVfdGhlbWVfMzhfMjYgKDIpLnBuZycpO1xyXG5cclxuICAuaW1nQWR2YW50YWdlcyB7XHJcbiAgICBtYXJnaW46IDkwcHggYXV0byAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogXHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiBcclxuICAgIHdpZHRoOiAxMTNweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaDIsIGg0LCBwIHtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsX2N1c3RvbWVycyB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaG93VG9CeWUge1xyXG4gIGgyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICBpbWdbYWx0PVwiYXJyb3dcIl0ge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmhvd1RvQnllQXJyb3cge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW1nX21haW4vYXJyb3dSaWdodC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLy8gLmhvd1RvQnllU3RlcCB7XHJcbiAgLy8gICB3aWR0aDogMjAwcHg7XHJcbiAgLy8gfVxyXG4gIC5ob3dUb0J5ZVN0ZXBOdW1iZXIge1xyXG4gICAgd2lkdGg6IDQxcHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBjb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICB9XHJcbiAgaW1nW2FsdD0nc3RlcHMnXSB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIC5zdGVwcyB7XHJcbiAgICBoZWlnaHQ6IDExNHB4O1xyXG4gICAgLy8gd2lkdGg6IDEwNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW1nX21haW4vZW5kLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_page_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-page/product.service */ "./src/app/product-page/product.service.ts");


// import { ModalCallComponent } from '../modal-call/modal-call.component';


// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
var MainPageComponent = /** @class */ (function () {
    // modalRef: BsModalRef;
    function MainPageComponent(router, _productService) {
        this.router = router;
        this._productService = _productService;
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    // openModal(template: TemplateRef<any>) {
    //   this.modalRef = this.modalService.show(template);
    // }
    MainPageComponent.prototype.filterBuggy = function (isStroller) {
        if (isStroller) {
            this._productService.stroller = true;
            this._productService.checkBuggy = false;
        }
        else {
            this._productService.checkBuggy = true;
            this._productService.stroller = false;
        }
        this.router.navigateByUrl('/choose');
        // location.replace('choose');
        //this.choosedBuggy = ALLBUGGYS.filter(x=> x.type === 'buggy');
        //  this.sortByBuggy = true;
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _product_page_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/modal-call/modal-call.component.html":
/*!******************************************************!*\
  !*** ./src/app/modal-call/modal-call.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  modal-call works!\n</p>\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Modal</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    This is a modal.\n  </div>\n</ng-template> -->"

/***/ }),

/***/ "./src/app/modal-call/modal-call.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modal-call/modal-call.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWNhbGwvbW9kYWwtY2FsbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modal-call/modal-call.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modal-call/modal-call.component.ts ***!
  \****************************************************/
/*! exports provided: ModalCallComponent, ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCallComponent", function() { return ModalCallComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var ModalCallComponent = /** @class */ (function () {
    function ModalCallComponent(modalService) {
        this.modalService = modalService;
    }
    ModalCallComponent.prototype.openModalWithComponent = function () {
        var initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    ModalCallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-call',
            template: __webpack_require__(/*! ./modal-call.component.html */ "./src/app/modal-call/modal-call.component.html"),
            styles: [__webpack_require__(/*! ./modal-call.component.scss */ "./src/app/modal-call/modal-call.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ModalCallComponent);
    return ModalCallComponent;
}());

/* This is a component which we pass in modal*/
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        this.list.push('PROFIT!!!');
    };
    ModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ul *ngIf=\"list.length\">\n        <li *ngFor=\"let item of list\">{{item}}</li>\n      </ul>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());



/***/ }),

/***/ "./src/app/product-page/mock-product.ts":
/*!**********************************************!*\
  !*** ./src/app/product-page/mock-product.ts ***!
  \**********************************************/
/*! exports provided: ALLBUGGYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLBUGGYS", function() { return ALLBUGGYS; });
var ALLBUGGYS = [
    { id: 101,
        sectionId: 1,
        type: 'buggy',
        model: 'disneyXS',
        h1: 'Прогулочная коляска-"книжка" Easywalker Disney XS Mickey Ornament',
        price: 8850,
        sex: 'boy',
        img1: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Разработка дизайна и брендирование от компании Disney.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: '2 дополнительные подножки для комфорта малыша, он без усилий сможет со временем сам садиться и спускаться с коляски.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 102,
        sectionId: 1,
        type: 'buggy',
        model: 'disneyXS',
        h1: 'Прогулочная коляска-"книжка" Easywalker Disney XS Minnie Ornament',
        price: 8850,
        sex: 'girl',
        img1: '../../assets/img/img_product_disneyXs/Minnie.jpg',
        img2: '../../assets/img/img_product_disneyXs/Minnie.jpg',
        img3: '../../assets/img/img_product_disneyXs/Minnie.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Разработка дизайна и брендирование от компании Disney.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: '2 дополнительные подножки для комфорта малыша, он без усилий сможет со временем сам садиться и спускаться с коляски.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 103,
        sectionId: 1,
        type: 'buggy',
        model: 'disneyXS',
        h1: 'Прогулочная коляска-"книжка" Easywalker Disney XS Mickey Diamond',
        price: 8850,
        sex: 'all',
        img1: '../../assets/img/img_product_disneyXs/Diamond.jpg',
        img2: '../../assets/img/img_product_disneyXs/Diamond.jpg',
        img3: '../../assets/img/img_product_disneyXs/Diamond.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Разработка дизайна и брендирование от компании Disney.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: '2 дополнительные подножки для комфорта малыша, он без усилий сможет со временем сам садиться и спускаться с коляски.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 201,
        sectionId: 2,
        type: 'buggy',
        model: 'miniXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker MINI Buggy XS Union Jack Classic',
        sex: 'all',
        img1: '../../assets/img/img_product_miniXs/UJ_Classic.jpg',
        img2: '../../assets/img/img_product_miniXs/UJ_Classic.jpg',
        img3: '../../assets/img/img_product_miniXs/UJ_Classic.jpg',
        price: 8670,
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в стиле MINI copper от BMW.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Мягкий матрасик для комфортного сна ребёнка с боковой поддержкой спины и ног.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 202,
        sectionId: 2,
        type: 'buggy',
        model: 'miniXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker MINI Buggy XS Union Jack Vintage',
        sex: 'all',
        img1: '../../assets/img/img_product_miniXs/UJ_Vintage.jpg',
        img2: '../../assets/img/img_product_miniXs/UJ_Vintage.jpg',
        img3: '../../assets/img/img_product_miniXs/UJ_Vintage.jpg',
        price: 8670,
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в стиле MINI copper от BMW.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Мягкий матрасик для комфортного сна ребёнка с боковой поддержкой спины и ног.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 203,
        sectionId: 2,
        type: 'buggy',
        model: 'miniXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker MINI Buggy XS LXRY Black',
        price: 8850,
        sex: 'all',
        img1: '../../assets/img/img_product_miniXs/LXRY_Black.jpg',
        img2: '../../assets/img/img_product_miniXs/LXRY_Black.jpg',
        img3: '../../assets/img/img_product_miniXs/LXRY_Black.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в стиле MINI copper от BMW.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Мягкий матрасик для комфортного сна ребёнка с боковой поддержкой спины и ног.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 204,
        sectionId: 2,
        type: 'buggy',
        model: 'miniXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker MINI Buggy XS Union Jack Vintage B&W',
        price: 8850,
        sex: 'all',
        img1: '../../assets/img/img_product_miniXs/UJ_BW.jpg',
        img2: '../../assets/img/img_product_miniXs/UJ_BW.jpg',
        img3: '../../assets/img/img_product_miniXs/UJ_BW.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в стиле MINI copper от BMW.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Мягкий матрасик для комфортного сна ребёнка с боковой поддержкой спины и ног.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 301,
        sectionId: 3,
        type: 'buggy',
        model: 'easywalkerXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker XS Monaco Apero',
        price: 7950,
        sex: 'girl',
        img1: '../../assets/img/img_product_easywalkerXs/monaco_apero_XS.jpg',
        img2: '../../assets/img/img_product_easywalkerXs/monaco_apero_XS.jpg',
        img3: '../../assets/img/img_product_easywalkerXs/monaco_apero_XS.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в традиционном спокойном нидерландском стиле.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 302,
        sectionId: 3,
        type: 'buggy',
        model: 'easywalkerXs',
        h1: 'Прогулочная коляска-"книжка" Easywalker XS Berlin Breakfast',
        price: 7950,
        sex: 'boy',
        img1: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        img2: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        img3: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн в традиционном спокойном нидерландском стиле.',
        feature2: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature3: 'Складывание и раскладывание коляски происходит одной рукой – максимальный комфорт для путешествий и переноски.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Компактные размеры – подходят под требования ручной клади, поместиться в багажник любого автомобиля или просто на заднем сидении автомобиля.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Вес коляски всего 6 кг., изготовлена из высококачественного и лёгкого алюминия.',
        babyAge: 'С 4 месяцев до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 401,
        sectionId: 4,
        type: 'buggy',
        model: 'miniBuggy',
        h1: 'Прогулочная коляска-"трость" Easywalker MINI Buggy Union Jack Classic',
        price: 8670,
        sex: 'all',
        img1: '../../assets/img/img_product_miniBuggy/uj_classic1.jpg',
        img2: '../../assets/img/img_product_miniBuggy/uj_classic2.jpg',
        img3: '../../assets/img/img_product_miniBuggy/uj_classic3.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн от корпорации BMW в стиле гоночного болида Британии команды MINI cooper.',
        feature2: 'Авторское просторное сиденье от всемирно известной компании BMW с подголовником и боковой поддержкой спины ребёнка.',
        feature3: 'Капор коляски оборудован фиксатором Stay back от случайного закрытия.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Коляска снабжена ручкой для переноски, а также дополнительно ремнём для переноски когда Ваши руки заняты.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Сдвоенные колёса для устойчивости коляски; передние колёса поворотные; фиксация передних колёс.',
        babyAge: 'С 4 месяцев до 4 лет',
        babyWeight: 'До 20 кг',
        foldingType: 'Трость',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 402,
        sectionId: 4,
        type: 'buggy',
        model: 'miniBuggy',
        h1: 'Прогулочная коляска-"трость" Easywalker MINI Buggy Union Jack Vintage',
        price: 8670,
        sex: 'all',
        img1: '../../assets/img/img_product_miniBuggy/uj_vintage1.jpg',
        img2: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        img3: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн от корпорации BMW в стиле гоночного болида Британии команды MINI cooper.',
        feature2: 'Авторское просторное сиденье от всемирно известной компании BMW с подголовником и боковой поддержкой спины ребёнка.',
        feature3: 'Капор коляски оборудован фиксатором Stay back от случайного закрытия.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Коляска снабжена ручкой для переноски, а также дополнительно ремнём для переноски когда Ваши руки заняты.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Сдвоенные колёса для устойчивости коляски; передние колёса поворотные; фиксация передних колёс.',
        babyAge: 'С 4 месяцев до 4 лет',
        babyWeight: 'До 20 кг',
        foldingType: 'Трость',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 403,
        sectionId: 4,
        type: 'buggy',
        model: 'miniBuggy',
        h1: 'Прогулочная коляска-"трость" Easywalker MINI Buggy Milky Jack',
        price: 8670,
        sex: 'all',
        img1: '../../assets/img/img_product_miniBuggy/milky_jack1.jpg',
        img2: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        img3: '../../assets/img/img_product_easywalkerXs/berlin_breakfast_XS.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Дизайн от корпорации BMW в стиле гоночного болида Британии команды MINI cooper.',
        feature2: 'Авторское просторное сиденье от всемирно известной компании BMW с подголовником и боковой поддержкой спины ребёнка.',
        feature3: 'Капор коляски оборудован фиксатором Stay back от случайного закрытия.',
        feature4: 'Аторская амортизация на 4-х колесах от компании BMW, неровности дорог не передаются ребёнку, нет нагрузки на тело и позвоночник.',
        feature5: 'Коляска снабжена ручкой для переноски, а также дополнительно ремнём для переноски когда Ваши руки заняты.',
        feature6: 'Съёмный тент на задней спинке коляски для 100% вентиляции летом и закрытый вариант для прохладной погоды.',
        feature7: 'Сдвоенные колёса для устойчивости коляски; передние колёса поворотные; фиксация передних колёс.',
        babyAge: 'С 4 месяцев до 4 лет',
        babyWeight: 'До 20 кг',
        foldingType: 'Трость',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        removableSoftParts: 'Да',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 501,
        sectionId: 5,
        type: 'stroller',
        model: 'harvey',
        h1: 'Коляска 2в1 Harvey 2.0 голубая',
        price: 25000,
        sex: 'boy',
        img1: '../../assets/img/img_product_harvey/harvey_blue.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Растёт весте с вами и позволяет используя 1 шасси переоборудовать коляску для двух детей (двойни), погодок и снова переоборудовать под 1 ребёнка.',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 502,
        sectionId: 5,
        type: 'stroller',
        model: 'harvey',
        h1: 'Коляска 2в1 Harvey 2.0 розовая',
        price: 25000,
        sex: 'girl',
        img1: '../../assets/img/img_product_harvey/harvey_pink.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Растёт весте с вами и позволяет используя 1 шасси переоборудовать коляску для двух детей (двойни), погодок и снова переоборудовать под 1 ребёнка.',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 503,
        sectionId: 5,
        type: 'stroller',
        model: 'harvey',
        h1: 'Коляска 2в1 Harvey 2.0 черная',
        price: 25000,
        sex: 'all',
        img1: '../../assets/img/img_product_harvey/harvey_black.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Растёт весте с вами и позволяет используя 1 шасси переоборудовать коляску для двух детей (двойни), погодок и снова переоборудовать под 1 ребёнка.',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 601,
        sectionId: 6,
        type: 'stroller',
        model: 'charley',
        h1: 'Коляска 2в1 charley голубая',
        price: 23000,
        sex: 'boy',
        img1: '../../assets/img/img_product_charley/charley_blue.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Самая компактная коляска для новорожденных в мире!',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 602,
        sectionId: 6,
        type: 'stroller',
        model: 'charley',
        h1: 'Коляска 2в1 charley розовая',
        price: 23000,
        sex: 'girl',
        img1: '../../assets/img/img_product_charley/charley_pink.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Самая компактная коляска для новорожденных в мире!',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1
    },
    { id: 603,
        sectionId: 6,
        type: 'stroller',
        model: 'charley',
        h1: 'Коляска 2в1 charley серая',
        price: 23000,
        sex: 'all',
        img1: '../../assets/img/img_product_charley/charley_grey.jpg',
        img2: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        img3: '../../assets/img/img_product_disneyXs/Mickey.jpg',
        seoText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis deleniti cumque rem mollitia similique reprehenderit? Rem deserunt voluptas dicta reprehenderit fugit officia ducimus distinctio inventore similique ipsam praesentium laborum ipsa ullam, temporibus, ex minus aperiam reiciendis aliquam delectus molestias. Inventore esse delectus quas velit veniam distinctio officia neque perferendis placeat recusandae sint fugiat, debitis vel voluptatibus eveniet voluptate nam. Neque cumque iusto quam quo, odio esse ratione architecto ut veniam! Nostrum temporibus tenetur porro commodi odit dicta consequatur sequi, ducimus dignissimos rem molestias labore dolorem voluptate quos reprehenderit quas placeat voluptatem ratione amet optio dolor ex a. Suscipit commodi quod perspiciatis reprehenderit nulla asperiores, sint optio. Laborum ex eius excepturi nesciunt quis. Voluptate vero ducimus ratione. Expedita, magni quidem! Veniam laboriosam nulla excepturi architecto modi nisi deleniti quas? Quidem nulla beatae id voluptas recusandae consequuntur repudiandae neque facere atque qui labore, temporibus sit deleniti reprehenderit a tempora maiores fuga.',
        feature1: 'Самая компактная коляска для новорожденных в мире!',
        feature2: 'Колёса заполнены твёрдой пеной, что позволяет им оставаться прочными в любую погоду и делает коляски максимально устойчивой.',
        feature3: 'Коляска складывается и раскладывается одной рукой, при этом шасси снабжено удобной ручкой для переноски. Сидение для прогулки снимать не обязательно, коляска сложиться вместе с ним.',
        feature4: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки, регулировкой подножки в 4-х положениях.',
        feature5: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        feature6: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        feature7: 'Коляска Harvey прошла тестирование согласно Европейских стандартов качества и безопасности по системе EN1888.',
        babyAge: 'С 0 до 3 лет',
        babyWeight: 'До 15 кг',
        foldingType: 'Книжка',
        backrestAdjustment: 'Есть',
        seatBelts: 'Есть, 5-ти точечные',
        basketForThings: 'Да, до 5 кг.',
        quantity: 1,
    },
];


/***/ }),

/***/ "./src/app/product-page/product-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-page/product-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"container\">\n\t\t<h1>{{currentBuggy.h1}}</h1>\n\t</div>\n</div>\n<div class=\"container-fluid\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-sm-6 text-center\">\n\t\t\t\t<img src=\"{{currentBuggy.img1}}\" alt=\"\" height=\"300\">\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t<div class=\"d-flex price text-center\">\t\t\n\t\t\t\t\t<div><span>{{currentBuggy.price}} </span> грн.</div>\n\t\t\t\t\t<div style=\"width: 120px; margin-right: 0; margin-left: auto;\">\n\t\t\t\t\t\t<button class=\"btn_buy\" (click)='addToCart()'>\n\t\t\t\t\t\t\t<img src=\"../../assets/img/img-product/cart.png\" style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\tКупить\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li>Бесплатная доставка</li>\n\t\t\t\t\t<li>Оплата при получении</li>\n\t\t\t\t\t<li>Гарантия 12 месяцев</li>\n\t\t\t\t</ul>\n\t\t<div style=\"width: 237px; margin: auto;\"><button class=\"add_to_compare\" (click)='addToCompare(this.currentBuggy)' ng-disabled=\"this.buttonDisabled == true\"><img src=\"../../assets/img/img-product/shape.png\" style=\"margin-right: 10px;\">Добавить в сравнение</button></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid container_padding\">\n\t<div class=\"container mock_product\">\n\t\t<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link active\"\n\t\t\tdata-toggle=\"tab\" href=\"#home\" id=\"home-tab\" role=\"tab\">Описание</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n\t\t\t<a aria-controls=\"profile\" aria-selected=\"false\" class=\"nav-link\"\n\t\t\tdata-toggle=\"tab\" href=\"#profile\" id=\"profile-tab\" role=\"tab\">Особенности</a>\n\t\t</li>\n\t\t<li class=\"nav-item\" style=\"width: 34%\">\n\t\t\t<a aria-controls=\"contact\" aria-selected=\"false\" class=\"nav-link\"\n\t\t\tdata-toggle=\"tab\" href=\"#contact\" id=\"contact-tab\" role=\"tab\">Технические характеристики</a>\n\t\t</li>\n\t</ul>\n\t<div class=\"tab-content\" id=\"myTabContent\">\n\t\t<div aria-labelledby=\"home-tab\" class=\"tab-pane fade show active\" id=\"home\"\n\t\trole=\"tabpanel\">\n\t\tSEO-text\n\t\t\t<br>\n\t\t\t{{currentBuggy.seoText}}\t\n\t\t</div>\n\n\t\t<div aria-labelledby=\"profile-tab\" class=\"tab-pane fade\" id=\"profile\" role=\n\t\t\"tabpanel\">\n\t\t\t<ul>\n\t\t\t\t<li>{{currentBuggy.feature1}}</li>\n\t\t\t\t<li>{{currentBuggy.feature2}}</li>\n\t\t\t\t<li>{{currentBuggy.feature3}}</li>\n\t\t\t\t<li>{{currentBuggy.feature4}}</li>\n\t\t\t\t<li>{{currentBuggy.feature5}}</li>\n\t\t\t\t<li>{{currentBuggy.feature6}}</li>\n\t\t\t\t<li>{{currentBuggy.feature7}}</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div aria-labelledby=\"contact-tab\" class=\"tab-pane fade\" id=\"contact\" role=\n\t\t\"tabpanel\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.babyAge\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Возраст ребёнка</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.babyAge}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.babyWeight\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Вес ребёнка</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.babyWeight}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.foldingType\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Тип складывания</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.foldingType}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.backrestAdjustment\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Регулировка спинки</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.backrestAdjustment}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.seatBelts\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Внутренние ремни</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.seatBelts}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.removableSoftParts\" class=\"tr tr_border\">\n\t\t\t\t\t\t<td><p>Съёмные мягкие части</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.removableSoftParts}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"currentBuggy.basketForThings\" class=\"tr\">\n\t\t\t\t\t\t<td><p>Корзина для вещей</p></td>\n\t\t\t\t\t\t<td><p>{{currentBuggy.basketForThings}}</p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\n\t\t\t</table>\n\t\t\n\t\t</div>\n\t</div>\n\t</div>\n</div>\n\t\n<div class=\"container container_padding text-center\">\n\t<h2>С этим товаром обычно покупают</h2>\n\t\n\t<div class='text-center container_padding'>\n\t  <carousel>\n\t\t\n\t\t\t<slide *ngFor='let slide of accessorises'>\n\t\t\t\t<div><img src=\"{{slide.img}}\" alt=\"accessorise\" style=\"max-width: 200px;\"></div>\n\t\t\t\t<div>{{slide.h1}}</div>\n\t\t\t\t<div><b>{{slide.price}} грн.</b></div>\n\t\t\t\t<div style=\"margin-bottom: 40px;\"><button class=\"btn_buy\"><img src=\"../../assets/img/img-product/cart.png\" style=\"margin-right: 10px;\">Купить</button></div>\n\t\t\t</slide>\n\n\t  </carousel>\n\t</div>\n</div>\n\t\n\n\n"

/***/ }),

/***/ "./src/app/product-page/product-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-page/product-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff;\n  background-color: #f85969;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\nbutton:disabled {\n  background-color: grey; }\n\n.container_padding {\n  padding: 30px; }\n\nh1 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 40px 0 30px 0;\n  padding: 0 50px 0 50px; }\n\n.list {\n  padding: 20px;\n  list-style: none;\n  list-style-image: url('check.png'); }\n\n.list li {\n    padding: 4px 0 4px 15px; }\n\n.btn_buy {\n  width: 120px; }\n\n.add_to_compare {\n  width: 237px; }\n\n.price {\n  font-size: 24px;\n  font-weight: 700;\n  width: 70%; }\n\n.price div span {\n    color: #f85969; }\n\n.mock_product {\n  padding: 0;\n  border-bottom: 2px solid #f85969;\n  border-left: 2px solid #f85969;\n  border-right: 2px solid #f85969;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.nav-tabs .nav-link {\n  border: 2px solid #f85969;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  text-align: center; }\n\n.nav-item {\n  width: 33%; }\n\n.nav-item a {\n    color: black;\n    text-transform: uppercase;\n    font-weight: 700; }\n\n.nav-link.active {\n  color: #ffffff;\n  background-color: #f85969;\n  text-transform: uppercase;\n  font-weight: 700; }\n\n#home, #profile {\n  padding: 20px 20px 20px 30px; }\n\n.table {\n  width: 100%;\n  margin-bottom: 0; }\n\n.table td {\n    border-bottom: 2px solid #f85969; }\n\n.table .tr {\n    height: 50px; }\n\n.table .tr td:first-child {\n      border-right: 2px solid #f85969; }\n\n.table .tr td p {\n      margin-left: 20px;\n      margin-bottom: 0; }\n\n.jcarousel img {\n  display: block;\n  max-width: 100%;\n  height: auto !important; }\n\n/*\r\nThis is the visible area of you carousel.\r\nSet a width here to define how much items are visible.\r\nThe width can be either fixed in px or flexible in %.\r\nPosition must be relative!\r\n*/\n\n.jcarousel {\n  position: relative;\n  overflow: hidden; }\n\n/*\r\nThis is the container of the carousel items.\r\nYou must ensure that the position is relative or absolute and\r\nthat the width is big enough to contain all items.\r\n*/\n\n.jcarousel ul {\n  position: relative;\n  /* Optional, required in this case since it's a <ul> element */\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n/*\r\nThese are the item elements. jCarousel works best, if the items\r\nhave a fixed width and height (but it's not required).\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1wYWdlL0Q6XFxXRUIgRGV2ZWxvcGVyXFxQcm9qZWN0RWFzeXdhbGtlckdpdGh1YlxcQWxpbmFEZW15ZG92YS5naXRodWIuaW8vc3JjXFxhcHBcXHByb2R1Y3QtcGFnZVxccHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBTkksVUFBVTtFQUNWLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUtmLHlCQUF5QjtFQUN6QixjQWJXO0VBY1gseUJBZmtCO0VBZ0JsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ1EsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQ0FBK0QsRUFBQTs7QUFIdkU7SUFLSSx1QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUhkO0lBS1EsY0F4RGMsRUFBQTs7QUEyRHRCO0VBQ0ksVUFBVTtFQUVWLGdDQTlEa0I7RUErRGxCLDhCQS9Ea0I7RUFnRWxCLCtCQWhFa0I7RUFpRWxCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVuQztFQUNJLHlCQXZFa0I7RUF3RWxCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxjQXBGVztFQXFGWCx5QkF0RmtCO0VBdUZsQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLGdDQWpHYyxFQUFBOztBQTZGdEI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO01BU1ksK0JBdEdVLEVBQUE7O0FBNkZ0QjtNQWFZLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTs7QUFPNUI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUczQjs7Ozs7Q0NqQkM7O0FEdUJEO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjs7OztDQ25CQzs7QUR3QkQ7RUFFSSxrQkFBa0I7RUFFbEIsOERBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDs7O0NDdkJDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluQ29sb3JSZWQ6ICNmODU5Njk7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGZvbnRTaXplOiAxNnB4O1xyXG5cclxuQG1peGluIGJ1dHRvbi1yZXNldCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b24tcmVzZXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICB3aWR0aDogMTYzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbi5jb250YWluZXJfcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDQwcHggMCAzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHggMCA1MHB4O1xyXG5cclxufVxyXG4ubGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pbWctcHJvZHVjdC9jaGVjay5wbmcnKTtcclxuICAgbGkge1xyXG4gICAgcGFkZGluZzo0cHggMCA0cHggMTVweDtcclxuICAgfVxyXG59XHJcbi5idG5fYnV5IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG4uYWRkX3RvX2NvbXBhcmUge1xyXG4gICAgd2lkdGg6IDIzN3B4OyAgIFxyXG59XHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGRpdiBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJG1haW5Db2xvclJlZDtcclxuICAgIH0gICAgXHJcbn1cclxuLm1vY2tfcHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy8gbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbWFpbkNvbG9yUmVkO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufVxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yUmVkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG59XHJcbiNob21lLCAjcHJvZmlsZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAzMHB4O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICB9XHJcbiAgICAudHIge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluQ29sb3JSZWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5qY2Fyb3VzZWwgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qXHJcblRoaXMgaXMgdGhlIHZpc2libGUgYXJlYSBvZiB5b3UgY2Fyb3VzZWwuXHJcblNldCBhIHdpZHRoIGhlcmUgdG8gZGVmaW5lIGhvdyBtdWNoIGl0ZW1zIGFyZSB2aXNpYmxlLlxyXG5UaGUgd2lkdGggY2FuIGJlIGVpdGhlciBmaXhlZCBpbiBweCBvciBmbGV4aWJsZSBpbiAlLlxyXG5Qb3NpdGlvbiBtdXN0IGJlIHJlbGF0aXZlIVxyXG4qL1xyXG4uamNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qXHJcblRoaXMgaXMgdGhlIGNvbnRhaW5lciBvZiB0aGUgY2Fyb3VzZWwgaXRlbXMuXHJcbllvdSBtdXN0IGVuc3VyZSB0aGF0IHRoZSBwb3NpdGlvbiBpcyByZWxhdGl2ZSBvciBhYnNvbHV0ZSBhbmRcclxudGhhdCB0aGUgd2lkdGggaXMgYmlnIGVub3VnaCB0byBjb250YWluIGFsbCBpdGVtcy5cclxuKi9cclxuLmpjYXJvdXNlbCB1bCB7XHJcbiAgICAvLyB3aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLyogT3B0aW9uYWwsIHJlcXVpcmVkIGluIHRoaXMgY2FzZSBzaW5jZSBpdCdzIGEgPHVsPiBlbGVtZW50ICovXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLypcclxuVGhlc2UgYXJlIHRoZSBpdGVtIGVsZW1lbnRzLiBqQ2Fyb3VzZWwgd29ya3MgYmVzdCwgaWYgdGhlIGl0ZW1zXHJcbmhhdmUgYSBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0IChidXQgaXQncyBub3QgcmVxdWlyZWQpLlxyXG4qL1xyXG4iLCJidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg1OTY5O1xuICB3aWR0aDogMTYzcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxuXG4uY29udGFpbmVyX3BhZGRpbmcge1xuICBwYWRkaW5nOiAzMHB4OyB9XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogNDBweCAwIDMwcHggMDtcbiAgcGFkZGluZzogMCA1MHB4IDAgNTBweDsgfVxuXG4ubGlzdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaW1nLXByb2R1Y3QvY2hlY2sucG5nXCIpOyB9XG4gIC5saXN0IGxpIHtcbiAgICBwYWRkaW5nOiA0cHggMCA0cHggMTVweDsgfVxuXG4uYnRuX2J1eSB7XG4gIHdpZHRoOiAxMjBweDsgfVxuXG4uYWRkX3RvX2NvbXBhcmUge1xuICB3aWR0aDogMjM3cHg7IH1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogNzAlOyB9XG4gIC5wcmljZSBkaXYgc3BhbiB7XG4gICAgY29sb3I6ICNmODU5Njk7IH1cblxuLm1vY2tfcHJvZHVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjg1OTY5O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmODU5Njk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmODU5Njk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cblxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmODU5Njk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5uYXYtaXRlbSB7XG4gIHdpZHRoOiAzMyU7IH1cbiAgLm5hdi1pdGVtIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg1OTY5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbiNob21lLCAjcHJvZmlsZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDMwcHg7IH1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgLnRhYmxlIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4NTk2OTsgfVxuICAudGFibGUgLnRyIHtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cbiAgICAudGFibGUgLnRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmODU5Njk7IH1cbiAgICAudGFibGUgLnRyIHRkIHAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5qY2Fyb3VzZWwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuVGhpcyBpcyB0aGUgdmlzaWJsZSBhcmVhIG9mIHlvdSBjYXJvdXNlbC5cclxuU2V0IGEgd2lkdGggaGVyZSB0byBkZWZpbmUgaG93IG11Y2ggaXRlbXMgYXJlIHZpc2libGUuXHJcblRoZSB3aWR0aCBjYW4gYmUgZWl0aGVyIGZpeGVkIGluIHB4IG9yIGZsZXhpYmxlIGluICUuXHJcblBvc2l0aW9uIG11c3QgYmUgcmVsYXRpdmUhXHJcbiovXG4uamNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi8qXHJcblRoaXMgaXMgdGhlIGNvbnRhaW5lciBvZiB0aGUgY2Fyb3VzZWwgaXRlbXMuXHJcbllvdSBtdXN0IGVuc3VyZSB0aGF0IHRoZSBwb3NpdGlvbiBpcyByZWxhdGl2ZSBvciBhYnNvbHV0ZSBhbmRcclxudGhhdCB0aGUgd2lkdGggaXMgYmlnIGVub3VnaCB0byBjb250YWluIGFsbCBpdGVtcy5cclxuKi9cbi5qY2Fyb3VzZWwgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIE9wdGlvbmFsLCByZXF1aXJlZCBpbiB0aGlzIGNhc2Ugc2luY2UgaXQncyBhIDx1bD4gZWxlbWVudCAqL1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLypcclxuVGhlc2UgYXJlIHRoZSBpdGVtIGVsZW1lbnRzLiBqQ2Fyb3VzZWwgd29ya3MgYmVzdCwgaWYgdGhlIGl0ZW1zXHJcbmhhdmUgYSBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0IChidXQgaXQncyBub3QgcmVxdWlyZWQpLlxyXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/product-page/product-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-page/product-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/product-page/product.service.ts");
/* harmony import */ var _accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accessorise-page/mock-accessorise */ "./src/app/accessorise-page/mock-accessorise.ts");





var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(_productService, route, router) {
        this._productService = _productService;
        this.route = route;
        this.router = router;
        this.accessorises = _accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__["ACCESSORISE"];
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonDisabled = false;
        this.getProduct();
        this.getAccessorise();
        //localStorage.clear();
        this.route.params.subscribe(function (params) {
            _this.getProduct(params['id']);
        });
    };
    ProductPageComponent.prototype.getProduct = function (idParam) {
        var _this = this;
        var id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
        this._productService.getProduct(id).subscribe(function (product) { return _this.currentBuggy = product; });
    };
    ProductPageComponent.prototype.addToCart = function () {
        var arr = JSON.parse(localStorage.getItem('obj'));
        if (arr) {
            arr.push(this.currentBuggy);
            localStorage.setItem('obj', JSON.stringify(arr));
        }
        else {
            localStorage.setItem('obj', JSON.stringify([this.currentBuggy]));
        }
        this._productService.cartSubject.next(true);
        this.router.navigateByUrl('/cart');
        // console.log(localStorage.getItem('obj'));
    };
    ProductPageComponent.prototype.addToCompare = function () {
        var arrCompare = JSON.parse(localStorage.getItem('objToCompare'));
        if (arrCompare) {
            arrCompare.push(this.currentBuggy);
            localStorage.setItem('objToCompare', JSON.stringify(arrCompare));
        }
        else {
            localStorage.setItem('objToCompare', JSON.stringify([this.currentBuggy]));
        }
        this.router.navigateByUrl('/compare');
        this.buttonDisabled = true;
    };
    // getAccessorise(): void {
    //   // const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
    //   // console.log(id);
    //   // console.log(this.currentBuggy.sectionId);
    //   this.productService.getAccessorise().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    // }
    ProductPageComponent.prototype.getAccessorise = function () {
        var _this = this;
        if (this.currentBuggy.sectionId == 1 || this.currentBuggy.sectionId == 2 || this.currentBuggy.sectionId == 3) {
            this._productService.getAccessoriseXS().subscribe(function (accessorises) { _this.accessorises = accessorises; });
        }
        else if (this.currentBuggy.sectionId == 4) {
            this._productService.getAccessoriseBuggyMini().subscribe(function (accessorises) { _this.accessorises = accessorises; });
        }
        else if (this.currentBuggy.sectionId == 5) {
            this._productService.getAccessoriseHarvey().subscribe(function (accessorises) { _this.accessorises = accessorises; });
        }
        else if (this.currentBuggy.sectionId == 6) {
            this._productService.getAccessoriseCharley().subscribe(function (accessorises) { _this.accessorises = accessorises; });
        }
        else {
            this._productService.getAccessoriseBuggyMini().subscribe(function (accessorises) { _this.accessorises = accessorises; });
        }
    };
    ProductPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__(/*! ./product-page.component.html */ "./src/app/product-page/product-page.component.html"),
            styles: [__webpack_require__(/*! ./product-page.component.scss */ "./src/app/product-page/product-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/product-page/product.service.ts":
/*!*************************************************!*\
  !*** ./src/app/product-page/product.service.ts ***!
  \*************************************************/
/*! exports provided: productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-product */ "./src/app/product-page/mock-product.ts");
/* harmony import */ var _accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accessorise-page/mock-accessorise */ "./src/app/accessorise-page/mock-accessorise.ts");





var productService = /** @class */ (function () {
    function productService() {
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // getAccessoriseForAll(): Observable<AccessoriseTemplate[]> {
        //   if (this.currentBuggy.sectionId == 1) {
        //     return of(ACCESSORISE.filter(x=> x.forBuggyXs));
        //   } else {
        //     return of(ACCESSORISE.filter(x=> x.forHarvey));
        //   }
        // }
    }
    productService.prototype.constuctor = function () { };
    productService.prototype.getProduct = function (id) {
        //console.log(id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_product__WEBPACK_IMPORTED_MODULE_3__["ALLBUGGYS"].find(function (x) { return x.id === id; }));
    };
    productService.prototype.getAccessoriseXS = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__["ACCESSORISE"].filter(function (x) { return x.forBuggyXs; }));
    };
    productService.prototype.getAccessoriseHarvey = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__["ACCESSORISE"].filter(function (x) { return x.forHarvey; }));
    };
    productService.prototype.getAccessoriseBuggyMini = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__["ACCESSORISE"].filter(function (x) { return x.forBuggyMini; }));
    };
    productService.prototype.getAccessoriseCharley = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_accessorise_page_mock_accessorise__WEBPACK_IMPORTED_MODULE_4__["ACCESSORISE"].filter(function (x) { return x.forCharleyMini; }));
    };
    productService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], productService);
    return productService;
}());



/***/ }),

/***/ "./src/app/section-page/mock-section.ts":
/*!**********************************************!*\
  !*** ./src/app/section-page/mock-section.ts ***!
  \**********************************************/
/*! exports provided: SECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION", function() { return SECTION; });
var SECTION = [
    {
        id: 1,
        titleMenu: '"Книжки" Disney',
        type: 'buggy',
        model: 'disneyXS',
        backgroundImageMainScreen: 'assets/img/img_section/section_disney.PNG',
        h1: 'Прогулочные коляски-книжки Easywalker Disney XS',
        iframeSrc: 'https://www.youtube.com/embed/97L8dk44uJs',
        ulLi1: 'Складываются и раскладываются одним движением.',
        ulLi2: 'Вес 6 кг.',
        ulLi3: 'Сответствуют параметрам ручной клади.',
        ulLi4: 'Дизайн и брендирование от всемирно известной компании Disney.',
        ulLi5: 'В комплект входят: шасси, сидение + тент, дождевик, бампер, корзина для покупок. ',
        h2: 'Выберите свою Easywalker Disney XS'
    },
    {
        id: 2,
        titleMenu: '"Книжки" Mini',
        type: 'buggy',
        model: 'miniXs',
        backgroundImageMainScreen: '../../assets/img/img_section/section_mini.PNG',
        h1: 'Прогулочные коляски-книжки Easywalker MINI XS',
        iframeSrc: 'https://www.youtube.com/embed/y3FTyX2OyEw',
        ulLi1: 'Складываются и раскладываются одним движением.',
        ulLi2: 'Вес 6 кг.',
        ulLi3: 'Сответствуют параметрам ручной клади.',
        ulLi4: 'Дизайн и брендирование в стиле MINI Cooper.',
        ulLi5: 'В комплект входят: шасси, сидение + тент, дождевик, бампер, корзина для покупок. ',
        h2: 'Выберите свою Easywalker MINI XS'
    },
    {
        id: 3,
        titleMenu: '"Книжки" Easywalker',
        type: 'buggy',
        model: 'easywalkerXs',
        backgroundImageMainScreen: '../../assets/img/img_section/section_ew.PNG',
        h1: 'Прогулочные коляски-книжки Easywalker XS',
        iframeSrc: 'https://www.youtube.com/embed/gSz8z3_WA5E',
        ulLi1: 'Складываются и раскладываются одним движением.',
        ulLi2: 'Вес 6 кг.',
        ulLi3: 'Сответствуют параметрам ручной клади.',
        ulLi4: 'Дизайн и брендирование от Easywalker.',
        ulLi5: 'В комплект входят: шасси, сидение + тент, дождевик, бампер, корзина для покупок. ',
        h2: 'Выберите свою Easywalker XS'
    },
    {
        id: 4,
        titleMenu: '"Трости" Mini',
        type: 'buggy',
        model: 'miniBuggy',
        backgroundImageMainScreen: '../../assets/img/img_section/section_mini.PNG',
        h1: 'Прогулочные коляски-трости MINI',
        iframeSrc: 'https://www.youtube.com/embed/o7aWuCG_qso',
        ulLi1: 'Складываются и раскладываются одним движением.',
        ulLi2: 'Вес 6 кг.',
        ulLi3: 'Сответствуют параметрам ручной клади.',
        ulLi4: 'Дизайн и брендирование от Easywalker.',
        ulLi5: 'В комплект входят: шасси, сидение + тент, дождевик, бампер, корзина для покупок. ',
        h2: 'Выберите свою Easywalker XS'
    },
    {
        id: 5,
        titleMenu: 'Harvey 2.0',
        type: 'stroller',
        model: 'harvey',
        backgroundImageMainScreen: '../../assets/img/img_section/section_harvey.PNG',
        h1: 'Коляски 2в1 для новорожденных Harvey 2.0',
        iframeSrc: 'https://www.youtube.com/embed/LBwIQjZFs_w',
        ulLi1: 'Растёт весте с Вами и позволяет используя 1 шасси переоборудовать коляску для двух детей (двойни), погодок и снова переоборудовать под 1 ребёнка.',
        ulLi2: 'Сидение прогулочного блока устанавливается по ходу движения и против хода движения, снабжено 4-х вариантами наклона спинки.',
        ulLi3: ' Прогулочный блок может использоваться с полугода и выдерживает 15 кг. нагрузку.',
        ulLi4: 'Вес шасси коляски всего 8 кг., при таком функционале и возможностях это лучшее решение на рынке колясок для новорожденных.',
        ulLi5: 'Шасси, люлька, полноценный матрасик в люльку, дождевик для люльки, прогулочный блок с двойным капором, бампер прогулочного блока, адаптеры высоты, корзина для покупок.',
        h2: 'Выберите свою Harvey 2.0'
    },
    {
        id: 6,
        titleMenu: 'Charley',
        type: 'stroller',
        model: 'charley',
        backgroundImageMainScreen: '../../assets/img/img_section/section_charley.PNG',
        h1: 'Коляски 2в1 для новорожденных Charley',
        iframeSrc: 'https://www.youtube.com/embed/giMv5KhdxF8',
        ulLi1: 'Самая компактная коляска для новорожденных в мире!',
        ulLi2: 'Все материалы высочайшего качества, очень мягкие и нежные, отталкивают влагу и легко чистятся. Допустима ручная стирка.',
        ulLi3: 'Капор прогулочного двойной на 2 секции, снабжён смотровым окошком и москитными вставками для проветривания в жаркую погоду.',
        ulLi4: 'Прогулочный блок может использоваться с полугода и выдерживает 15 кг. нагрузку.',
        ulLi5: 'Шасси, люлька, полноценный матрасик в люльку, дождевик для люльки, прогулочный блок с двойным капором, бампер прогулочного блока, адаптеры высоты, корзина для покупок.',
        h2: 'Выберите свою Charley'
    }
];


/***/ }),

/***/ "./src/app/section-page/section-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-page/section-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  \n  <div class=\"container-fluid section_main_screen\" \n  [ngStyle]=\"{'background-image': 'url(' + section.backgroundImageMainScreen + ')'}\"> \n\n    </div>\n    <div class=\"container\">\n        <h1 class=\"text-center\">{{section.h1}}</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n          <iframe width=\"560\" height=\"315\" [src]=\"getUrl()\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n          allowfullscreen></iframe>\n        </div>\n        <div class=\"col-xs-12 col-sm-6\">\n          <ul>\n            <li>{{section.ulLi1}}</li>\n            <li>{{section.ulLi2}}</li>\n            <li>{{section.ulLi3}}</li>\n            <li>{{section.ulLi4}}</li>\n            <li>{{section.ulLi5}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n     <!--=========Advantages=========-->\n    <!-- <div class=\"container-fluid\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 d-flex\">\n            <img src=\"../../assets/img/img_section/1DisneyAdvantages.jpg\" alt=\"\">\n            <div>\n              <h5>САМЫЙ СЛАДКИЙ СОН</h5>\n              <p>Единственная коляска- \"книжка\" на рынке, которая раскладывается на 1800! (раскладывается на 1750, а под весом ребенка полностью на 1800)</p>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6\">\n            <img src=\"../../assets/img/img_section/2DisneyAdvantages.png\" alt=\"\">\n            <div>\n              <h5>ПОМЕСТИТСЯ ВЕЗДЕ</h5>\n              <p>Компактная “книжка” в сложенном виде соответствует параметрам ручной клади. (размеры в сложенном виде Д52*Ш44*В23 см)</p>\n            </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6\">\n            <img src=\"../../assets/img/img_section/3DisneyAdvantages.png\" alt=\"\">\n            <div>\n            <h5>ПРИЯТНАЯ ПРОГУЛКА   В ЛЮБУЮ ПОГОДУ</h5>\n            <p>Дополнительное отделение капюшона со смотровым окном и москитной вставкой (на замочке).</p>\n          </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6\">\n            <img src=\"../../assets/img/img_section/4DisneyAdvantages.jpg\" alt=\"\">\n          <div>\n              <h5>КАЧЕСТВЕННЫЙ ТЕКСТИЛЬ</h5>\n              <p>В колясках премиум-сегмента Easywalker использован качественный, приятный на ощупь текстиль, который не парит.</p>\n            </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6\">\n            <img src=\"../../assets/img/img_section/5DisneyAdvantages.jpg\" alt=\"\">\n          <div>\n              <h5>ПРИЯТНАЯ ПРОГУЛКА В ЛЮБУЮ ПОГОДУ</h5>\n              <p>Дополнительное отделение капюшона со смотровым окном и москитной вставкой (на замочке).</p>\n            </div>\n            </div>\n          <div class=\"col-xs-12 col-sm-6\">\n            <img src=\"../../assets/img/img_section/6DisneyAdvantages.jpg\" alt=\"\">\n          <div>\n              <h5>КАЧЕСТВЕННЫЙ ТЕКСТИЛЬ</h5>\n              <p>В колясках премиум-сегмента Easywalker использован качественный, приятный на ощупь текстиль, который не парит.</p>\n            </div>\n            </div>\n        </div>\n      </div>\n    </div> -->\n    <!--=========/Advantages=========-->\n    <!--=========Products=========-->\n  <div class=\"container-fluid text-center\">\n    <div class=\"container container_padding\">\n      <h2>{{section.h2}}</h2>\n     \n        <div class=\"row text-center justify-content-center\">\n            <div *ngFor='let buggy of buggys' class=\"col-xs-12 col-sm-4\">\n                <div class=\"card\">\n                  <img src=\"{{buggy.img1}}\" class=\"card-img-top\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{buggy.h1}}</h4>\n                    <p>{{buggy.price}} грн.</p>\n                    <button routerLink=\"/product/{{buggy.id}}\">Посмотреть</button>\n                  </div>\n                </div>\n            </div>\n        </div>\n            \n    </div>\n  </div>\n  <!--=========Products=========-->\n  \n  "

/***/ }),

/***/ "./src/app/section-page/section-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/section-page/section-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  border: none;\n  color: #ffffff;\n  background-color: #f85969;\n  cursor: pointer;\n  width: 163px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 5px; }\n\n.section_main_screen {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 250px;\n  color: black; }\n\nh1, h2 {\n  padding-top: 20px;\n  padding-bottom: 40px; }\n\n.card {\n  border: none;\n  margin-bottom: 30px; }\n\n.card img {\n    border: 2px solid #f85969;\n    border-radius: 5px;\n    padding: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1wYWdlL0Q6XFxXRUIgRGV2ZWxvcGVyXFxQcm9qZWN0RWFzeXdhbGtlckdpdGh1YlxcQWxpbmFEZW15ZG92YS5naXRodWIuaW8vc3JjXFxhcHBcXHNlY3Rpb24tcGFnZVxcc2VjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQU5XO0VBT1gseUJBUmtCO0VBU2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUksc0JBQXNCO0VBQ3hCLDRCQUE0QjtFQUM3QixhQUFhO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEseUJBbENjO0lBbUNsQixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi1wYWdlL3NlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbWFpbkNvbG9yUmVkOiAjZjg1OTY5O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRmb250U2l6ZTogMTZweDtcclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3JSZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTYzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbi5zZWN0aW9uX21haW5fc2NyZWVuIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGhlaWdodDogMjUwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufVxyXG5oMSwgaDIge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1haW5Db2xvclJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIH1cclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/section-page/section-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-page/section-page.component.ts ***!
  \********************************************************/
/*! exports provided: SectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageComponent", function() { return SectionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.service */ "./src/app/section-page/section.service.ts");
/* harmony import */ var _product_page_mock_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-page/mock-product */ "./src/app/product-page/mock-product.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SectionPageComponent = /** @class */ (function () {
    function SectionPageComponent(sectionService, route, sanitizer) {
        this.sectionService = sectionService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.buggys = _product_page_mock_product__WEBPACK_IMPORTED_MODULE_4__["ALLBUGGYS"];
    }
    SectionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSection();
        this.getBuggys();
        this.route.params.subscribe(function (params) {
            // console.log(params['id']);
            _this.getSection(params['id']);
            _this.getBuggys(params['model']);
        });
    };
    SectionPageComponent.prototype.getUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.section.iframeSrc);
    };
    SectionPageComponent.prototype.getSection = function (idParam) {
        var _this = this;
        //const id = idParam ? +idParam : this.section.id;
        var id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
        this.sectionService.getSection(id).subscribe(function (section) { return _this.section = section; });
    };
    SectionPageComponent.prototype.getBuggys = function (modelll) {
        var _this = this;
        var models = modelll ? modelll : this.section.model;
        // console.log(models);
        // console.log(this.section.model);
        this.sectionService.getBuggys(models).subscribe(function (buggys) { return _this.buggys = buggys; });
    };
    SectionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-page',
            template: __webpack_require__(/*! ./section-page.component.html */ "./src/app/section-page/section-page.component.html"),
            styles: [__webpack_require__(/*! ./section-page.component.scss */ "./src/app/section-page/section-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_section_service__WEBPACK_IMPORTED_MODULE_3__["sectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SectionPageComponent);
    return SectionPageComponent;
}());



/***/ }),

/***/ "./src/app/section-page/section.service.ts":
/*!*************************************************!*\
  !*** ./src/app/section-page/section.service.ts ***!
  \*************************************************/
/*! exports provided: sectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionService", function() { return sectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-section */ "./src/app/section-page/mock-section.ts");
/* harmony import */ var _product_page_mock_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-page/mock-product */ "./src/app/product-page/mock-product.ts");





var sectionService = /** @class */ (function () {
    function sectionService() {
    }
    sectionService.prototype.constuctor = function () { };
    sectionService.prototype.getSection = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_section__WEBPACK_IMPORTED_MODULE_3__["SECTION"].find(function (section) { return section.id === id; }));
    };
    sectionService.prototype.getBuggys = function (model) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_product_page_mock_product__WEBPACK_IMPORTED_MODULE_4__["ALLBUGGYS"].filter(function (x) { return x.model === model; }));
    };
    sectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], sectionService);
    return sectionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WEB Developer\ProjectEasywalkerGithub\AlinaDemydova.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map