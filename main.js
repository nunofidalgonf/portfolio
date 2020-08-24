(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"row\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"row\">\n    <ul>\n      <li><a href=\"https://github.com/nunofidalgonf\" target=\"_blank\"><fa-icon [icon]=\"faGithub\"></fa-icon> github</a></li>\n      <li><a href=\"https://codepen.io/nunofidalgo\" target=\"_blank\"><fa-icon [icon]=\"faCodepen\"></fa-icon> codepen</a></li>\n      <li><a href=\"https://www.instagram.com/nunofidalgonf/\" target=\"_blank\"><fa-icon [icon]=\"faInstagram\"></fa-icon> instagram</a></li>\n    </ul>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"row\">\n    <div class=\"columns large-3\">\n      <a id=\"logo\" [routerLink]=\"['/']\">IAMF</a>\n    </div>\n    <div class=\"columns large-9\">\n      <ul>\n        <li><a [routerLink]=\"['/']\" routerLinkActive=\"router-active\">Home</a></li>\n        <li><a [routerLink]=\"['/about']\" routerLinkActive=\"router-active\">About</a></li>\n        <li><a [routerLink]=\"['/portfolio']\" routerLinkActive=\"router-active\">Projects</a></li>\n      </ul>\n    </div>\n  </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-page page\">\n  <div class=\"left-content flex-mid\">\n    <h1>About</h1>\n    <p>More than 5 years in web development, the last 2 years was only in frontend.\n      I worked mostly with Angular and did some projects in ReactJS and Ionic.\n      I also managed a team in the last year.</p>\n    <ul>\n      <li (click)=\"this.goToCard(0)\" [ngClass]=\"{'active': this.aboutIndex === 0}\">01.Experience</li>\n      <li (click)=\"this.goToCard(1)\" [ngClass]=\"{'active': this.aboutIndex === 1}\">02.School and Formations</li>\n    </ul>\n  </div>\n\n  <div class=\"right-content flex-mid\">\n    <div class=\"content-box\">\n      <h3>{{this.getTitle()}}</h3>\n      <div *ngFor=\"let item of this.cardContent\">\n        <ul>\n          <li>{{item.date}}</li>\n          <li>{{item.company}}</li>\n          <li>{{item.skills}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepage page\">\n  <div class=\"left-content flex-mid\">\n    <h1>I am Fidalgo</h1>\n    <p>I'm a frontend developer based near Lisbon, Portugal.\n      Inside the frontend world I'm an Angular, React and CSS entusiast\n      and I love to see things happening.</p>\n  </div>\n\n  <div class=\"right-content flex-mid\">\n    <div class=\"animated-figure\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\">\n  <p-card>\n    <p-header>\n        <img src=\"https://via.placeholder.com/400x200\" alt=\"\">\n        <h1>Login here</h1>\n    </p-header>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" name=\"email\" pInputText formControlName=\"email\"/>\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" pInputText formControlName=\"password\"/>\n      <p-footer>\n        <button type=\"submit\">Login</button>\n      </p-footer>\n    </form>\n    </p-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"portfolio-page page\">\n  <div class=\"left-content flex-mid\">\n    <h1>Projects</h1>\n    <p>Sometimes I get ideas for a small or big thing to work on. \n      Sometimes I fail, sometimes I get it done, but I always end\n      learning something new.</p>\n  </div>\n\n  <div class=\"right-content flex-mid\">\n    <ul>\n      <li><a href=\"https://github.com/nunofidalgonf/tennis-center-front\" target=\"_blank\">01.Tennis CRM</a></li>\n      <li><a href=\"https://github.com/nunofidalgonf/linha-net-theme\" target=\"_blank\">02.VS Code Theme</a></li>\n      <li></li>\n    </ul>\n  </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"columns large-12\">\n    <h1>Coming Soon</h1>\n  </div>\n</div>\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // TODO: animate the lines
    AppComponent.prototype.ngOnInit = function () {
        console.log('teste');
        this.renderSetup();
        this.cameraSetup();
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.lineSetup();
        this.animate();
    };
    AppComponent.prototype.renderSetup = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000511);
        document.body.appendChild(this.renderer.domElement);
    };
    AppComponent.prototype.cameraSetup = function () {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 10;
    };
    AppComponent.prototype.lineSetup = function () {
        this.curve = [];
        for (var index = 0; index < 3; index++) {
            // create curve mesh
            this.curve[index] = new three__WEBPACK_IMPORTED_MODULE_1__["CubicBezierCurve3"](new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-10 - index, -5 - index, 0), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-5, 0, 0), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -8 + index, 0), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](10, 0, 0));
            var points = this.curve[index].getPoints(100);
            var lineGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]().setFromPoints(points);
            var material = new three__WEBPACK_IMPORTED_MODULE_1__["LineBasicMaterial"]({ color: 0x6b7687 });
            this.curveObject = new three__WEBPACK_IMPORTED_MODULE_1__["Line"](lineGeometry, material);
            this.scene.add(this.curveObject);
        }
        // // visualize spaced points
        // const sphereGeomtry = new THREE.SphereBufferGeometry( 0.1 );
        // const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        // const spacedPoints = curve.getPoints( 4 );
        // // Helper to see points in line
        // for ( let point of spacedPoints ) {
        //   const helper = new THREE.Mesh( sphereGeomtry, sphereMaterial );
        //   helper.position.copy( point );
        //   this.scene.add( helper );
        // }
    };
    AppComponent.prototype.animate = function () {
        console.log('animate called');
        requestAnimationFrame(this.animate.bind(this));
        this.updateCurve();
        this.renderer.render(this.scene, this.camera);
    };
    AppComponent.prototype.updateCurve = function () {
        var testPoint = 1 + 1;
        for (var i = 0, l = this.curve.length; i < l; i++) {
            var curveLine = this.curve[i];
            // Update x value of v0 vector
            curveLine.v0.x = testPoint;
            // Update vertices
            // curveLine.geometry.vertices = curveLine.getPoints( 50 );
            // // Let's three.js know that vertices are changed
            // curveLine.geometry.verticesNeedUpdate = true;
        }
    };
    AppComponent.ctorParameters = function () { return []; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__["AuthenticationModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_16__["CardModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // CLI imports router




var routes = [
    {
        path: '',
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'products',
        component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
    },
    {
        path: 'portfolio',
        component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    }
];
// configures NgModule imports and exports
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 24px;\n}\nfooter ul {\n  margin: 0 0;\n}\nfooter ul li {\n  display: inline;\n  margin-right: 70px;\n  display: inline;\n}\nfooter ul li::after {\n  display: inline;\n}\nfooter ul li a {\n  color: white;\n}\nfooter ul li a fa-icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUVRO0VBQ0Usa0JBQUE7QUFBViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMCAwO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faCodepen = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCodepen"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background: transparent;\n  font-size: 20px;\n}\nheader #logo {\n  color: white;\n  font-weight: 400;\n  padding: 15px 0;\n  display: block;\n}\nheader ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  float: right;\n}\nheader ul li {\n  display: inline;\n  float: left;\n}\nheader ul a {\n  color: white;\n  padding: 15px 30px;\n  display: block;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47QUFHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcblxuICAjbG9nbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgLy8gJi5yb3V0ZXItbGluay1hY3RpdmUsICY6aG92ZXIge1xuICAgICAgLy8gICBjb2xvcjogd2hpdGU7XG4gICAgICAvLyAgIHRleHQtZGVjb3JhdGlvbjogd2hpdGU7XG4gICAgICAvLyB9XG5cbiAgICB9XG5cblxuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/files/experience.json":
/*!***************************************!*\
  !*** ./src/app/files/experience.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2018-2020\",\"company\":\"Everis\",\"skills\":\"AngularJS, Angular 5+, ReactJS, Ionic, Agile, Team leading\"},{\"date\":\"2018-2017\",\"company\":\"Madde\",\"skills\":\"Ionic, PHP\"},{\"date\":\"2016-2015\",\"company\":\"MediaScreen\",\"skills\":\"PHP\"}]");

/***/ }),

/***/ "./src/app/files/formation.json":
/*!**************************************!*\
  !*** ./src/app/files/formation.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2018\",\"company\":\"Rumos\",\"skills\":\"M20486 - Developing ASP.NET MVC 5 Web Applications\"},{\"date\":\"2015\",\"company\":\"Flag\",\"skills\":\"Android Applications\"},{\"date\":\"2012-2013\",\"company\":\"Citeforma\",\"skills\":\"Multimedia\"},{\"date\":\"2011-2012\",\"company\":\"Flag\",\"skills\":\"Web Development\"}]");

/***/ }),

/***/ "./src/app/modules/authentication/authentication-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/modules/authentication/authentication-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"]
            ],
            declarations: []
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-page {\n  color: white;\n}\n.about-page ul {\n  margin: 0 0;\n  padding: 0 0;\n}\n.about-page ul li {\n  list-style: none;\n  padding: 0 0;\n  margin: 0 0;\n  cursor: pointer;\n}\n.about-page .left-content p {\n  margin-bottom: 56px;\n}\n.about-page .left-content li {\n  font-size: 30px;\n}\n.about-page .left-content li.active {\n  text-decoration: underline;\n}\n.about-page .content-box {\n  width: 580px;\n  min-height: 550px;\n  background-color: #00091E;\n  border-radius: 10px;\n  text-align: left;\n  padding: 25px 30px;\n}\n.about-page .content-box h3 {\n  margin-bottom: 45px;\n}\n.about-page .content-box div {\n  margin-bottom: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ047QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJSTtFQUNFLGVBQUE7QUFGTjtBQUlNO0VBQ0UsMEJBQUE7QUFGUjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUFMSjtBQU9JO0VBQ0UsbUJBQUE7QUFMTjtBQVFJO0VBQ0UsbUJBQUE7QUFOTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMCAwO1xuICAgIHBhZGRpbmc6IDAgMDtcblxuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwIDA7XG4gICAgICBtYXJnaW46IDAgMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAubGVmdC1jb250ZW50IHtcbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbnQtYm94IHtcbiAgICB3aWR0aDogNTgwcHg7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDkxRTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_experience_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../files/experience.json */ "./src/app/files/experience.json");
var _files_experience_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../files/experience.json */ "./src/app/files/experience.json", 1);
/* harmony import */ var _files_formation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../files/formation.json */ "./src/app/files/formation.json");
var _files_formation_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../files/formation.json */ "./src/app/files/formation.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.cardTitle = ['01.Experience', '02.School and Formations', '03.Skills'];
        this.setCardContent();
        console.log(this.cardContent);
        this.aboutIndex = 0;
    };
    AboutComponent.prototype.setCardContent = function () {
        switch (this.aboutIndex) {
            case 0:
                this.cardContent = _files_experience_json__WEBPACK_IMPORTED_MODULE_1__;
                break;
            case 1:
                this.cardContent = _files_formation_json__WEBPACK_IMPORTED_MODULE_2__;
                break;
            case 2:
                this.cardContent = '2';
                break;
            default:
                this.cardContent = _files_experience_json__WEBPACK_IMPORTED_MODULE_1__;
                break;
        }
    };
    AboutComponent.prototype.getTitle = function () {
        return this.cardTitle[this.aboutIndex];
    };
    AboutComponent.prototype.goToCard = function (index) {
        this.aboutIndex = index;
        this.setCardContent();
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homepage .right-content .animated-figure {\n  float: right;\n  width: 200px;\n  height: 200px;\n  background-color: white;\n  -webkit-animation: second-square 3s 1s infinite alternate;\n          animation: second-square 3s 1s infinite alternate;\n}\n@-webkit-keyframes second-square {\n  0% {\n    border-radius: 0 0 0 0;\n    background-color: #a8a8a8;\n    transform: rotate(0deg);\n  }\n  25% {\n    border-radius: 50% 0 0 0;\n    background-color: #9183a3;\n    transform: rotate(25deg);\n  }\n  50% {\n    border-radius: 50% 50% 0 0;\n    background-color: #744f4f;\n    transform: rotate(50deg);\n  }\n  75% {\n    border-radius: 50% 50% 50% 0;\n    background-color: #322a52;\n    transform: rotate(75deg);\n  }\n  100% {\n    border-radius: 50%;\n    background-color: #271f3a;\n    transform: rotate(100deg);\n  }\n}\n@keyframes second-square {\n  0% {\n    border-radius: 0 0 0 0;\n    background-color: #a8a8a8;\n    transform: rotate(0deg);\n  }\n  25% {\n    border-radius: 50% 0 0 0;\n    background-color: #9183a3;\n    transform: rotate(25deg);\n  }\n  50% {\n    border-radius: 50% 50% 0 0;\n    background-color: #744f4f;\n    transform: rotate(50deg);\n  }\n  75% {\n    border-radius: 50% 50% 50% 0;\n    background-color: #322a52;\n    transform: rotate(75deg);\n  }\n  100% {\n    border-radius: 50%;\n    background-color: #271f3a;\n    transform: rotate(100deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUFKTjtBQU9JO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0EsdUJBQUE7RUFMTjtFQU9JO0lBQ0Usd0JBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0VBTE47RUFPSTtJQUNFLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtFQUxOO0VBT0k7SUFDRSw0QkFBQTtJQUNBLHlCQUFBO0lBQ0Esd0JBQUE7RUFMTjtFQU9JO0lBQ0Usa0JBQUE7SUFDQSx5QkFBQTtJQUNBLHlCQUFBO0VBTE47QUFDRjtBQXBCSTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0VBTE47RUFPSTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtFQUxOO0VBT0k7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0Esd0JBQUE7RUFMTjtFQU9JO0lBQ0UsNEJBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0VBTE47RUFPSTtJQUNFLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lcGFnZSB7XG4gIC8vcGFkZGluZy10b3A6IDE1MHB4O1xuXG4gIC5yaWdodC1jb250ZW50IHtcblxuICAgIC5hbmltYXRlZC1maWd1cmUge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzZWNvbmQtc3F1YXJlIDNzIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNlY29uZC1zcXVhcmUge1xuICAgICAgMCUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgMjUlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxMzEsIDE2Myk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCA3OSwgNzkpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XG4gICAgICB9XG4gICAgICA3NSUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDQyLCA4Mik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzEsIDU4KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.ctorParameters = function () { return []; };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./homepage.component.scss */ "./src/app/pages/homepage/homepage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\n    width: 100%;\n    position: relative;\n    float: left;\n}\n\n#login .ui-card {\n    width: 400px;\n    margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNsb2dpbiAudWktY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    LoginComponent.prototype.onLogin = function () {
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then(function (user) {
            // const userId: string = user.id;
            // this.getUserInfo(userId);
            console.log(user);
        });
    };
    LoginComponent.prototype.getUserInfo = function (userId) {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".portfolio-page {\n  color: white;\n}\n.portfolio-page a {\n  color: white;\n}\n.portfolio-page .right-content {\n  padding-left: 50px;\n  text-align: left;\n  font-size: 50px;\n  line-height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpby1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucmlnaHQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.ctorParameters = function () { return []; };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __importDefault(__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/pages/portfolio/portfolio.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.ctorParameters = function () { return []; };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.signup = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.login = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthenticationService);
    return AuthenticationService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCt7ikoI0iy2b3mVm0p2qPIZge2fYK6GjI',
        authDomain: 'portfolio-linha.firebaseapp.com',
        databaseURL: 'https://portfolio-linha.firebaseio.com',
        projectId: 'portfolio-linha',
        storageBucket: '',
        messagingSenderId: '140319284499',
        appId: '1:140319284499:web:2cec5065a55bffb1'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/portfolio/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map