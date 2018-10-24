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

/***/ "./src/app/api-service/data-fetcher-service.ts":
/*!*****************************************************!*\
  !*** ./src/app/api-service/data-fetcher-service.ts ***!
  \*****************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Recipe */ "./src/app/models/Recipe.ts");
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Tag */ "./src/app/models/Tag.ts");
/* harmony import */ var _models_CloudData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/CloudData */ "./src/app/models/CloudData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FetchDataService = /** @class */ (function () {
    function FetchDataService(http) {
        this.http = http;
        this.myurl = 'api/RecipeApi/GetRecipes';
    }
    FetchDataService.prototype.getRecipies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.myurl).toPromise().then(function (data) {
                            return data.map(function (r) { return new _models_Recipe__WEBPACK_IMPORTED_MODULE_2__["default"](r); });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FetchDataService.prototype.getTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("api/RecipeApi/GetTags").toPromise().then(function (data) {
                            return data.map(function (r) { return new _models_Tag__WEBPACK_IMPORTED_MODULE_3__["default"](r); });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FetchDataService.prototype.getTagsForCloud = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("api/RecipeApi/GetTags").toPromise().then(function (data) {
                            return data.map(function (r) { return new _models_CloudData__WEBPACK_IMPORTED_MODULE_4__["CloudDataModel"](r); });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FetchDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchDataService);
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/api-service/data-fetcher.ts":
/*!*********************************************!*\
  !*** ./src/app/api-service/data-fetcher.ts ***!
  \*********************************************/
/*! exports provided: DataFetcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetcher", function() { return DataFetcher; });
/* harmony import */ var _data_fetcher_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-fetcher-service */ "./src/app/api-service/data-fetcher-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DataFetcher = /** @class */ (function () {
    function DataFetcher(dataFetcherService) {
        this.dataFetcherService = dataFetcherService;
    }
    DataFetcher.prototype.getRecipies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataFetcherService.getRecipies()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataFetcher.prototype.getTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataFetcherService.getTags()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataFetcher.prototype.getTagsForCloud = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataFetcherService.getTagsForCloud()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataFetcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_data_fetcher_service__WEBPACK_IMPORTED_MODULE_0__["FetchDataService"]])
    ], DataFetcher);
    return DataFetcher;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataFetcher);


/***/ }),

/***/ "./src/app/components/main/app.component.html":
/*!****************************************************!*\
  !*** ./src/app/components/main/app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let recipe of recipies | async\" class=\"recipe-container\" style=\"background-color: white; border-radius:15%; border-right: 1px solid black; border-left: 1px solid black; padding-left:120px; padding-right:120px;\">\r\n  <div>\r\n    <h3>\r\n      <strong>{{recipe.name}}</strong>\r\n    </h3>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n    <div class=\"col-md-4\" style=\"border-left:1px solid black; border-radius:50%;\">\r\n      <img src=\"{{recipe.imageUrl}}\" style=\"height:100%; width:100%; border-radius:50%;\" />\r\n      <hr />\r\n    </div>\r\n\r\n    <div class=\"col-md-8\">\r\n      <div *ngFor=\"let tag of recipe.tags\" class=\"btn btn-default btn-md\" style=\"margin:5px;\">\r\n        {{tag.name}}\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h4>\r\n        <strong>Ingridienser</strong>\r\n      </h4>\r\n      <ul *ngFor=\"let ingridient of recipe.ingridients\">\r\n        <li>{{ingridient}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-8\" style=\"border-left:1px solid #eee\">\r\n      <h4>\r\n        <strong>Tillagning</strong>\r\n      </h4>\r\n      <div>\r\n        <p>{{recipe.cooking}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n</div>\r\n\r\n\r\n\r\n<!--<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"6000\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"item active\">\r\n      <img src=\"~/images/banner1.svg\" alt=\"ASP.NET\" class=\"img-responsive\" />\r\n      <div class=\"carousel-caption\" role=\"option\">\r\n        <p>\r\n          Learn how to build ASP.NET apps that can run anywhere.\r\n          <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409\">\r\n            Learn More\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <img src=\"https://www.ica.se//icase.azureedge.net/imagevaultfiles/id_189185/cf_259/pizza-med-salami-och-skinka-familj-724617.jpg\" alt=\"Visual Studio\" class=\"img-responsive\" />\r\n      <div class=\"carousel-caption\" role=\"option\">\r\n        <p>\r\n          There are powerful new features in Visual Studio for building modern web apps.\r\n          <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525030&clcid=0x409\">\r\n            Learn More\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <img src=\"~/images/banner3.svg\" alt=\"Microsoft Azure\" class=\"img-responsive\" />\r\n      <div class=\"carousel-caption\" role=\"option\">\r\n        <p>\r\n          Learn how Microsoft's Azure cloud platform allows you to build, deploy, and scale web apps.\r\n          <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525027&clcid=0x409\">\r\n            Learn More\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/main/app.component.less":
/*!****************************************************!*\
  !*** ./src/app/components/main/app.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hcHAuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/main/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-service/data-fetcher */ "./src/app/api-service/data-fetcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataFetcher) {
        this.dataFetcher = dataFetcher;
        this.title = 'Våra recept';
        this.recipies = this.dataFetcher.getRecipies();
        this.tags = this.dataFetcher.getTags();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/main/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/components/main/app.component.less")],
        }),
        __metadata("design:paramtypes", [_api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/main/app.module.ts":
/*!***********************************************!*\
  !*** ./src/app/components/main/app.module.ts ***!
  \***********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/components/main/app.component.ts");
/* harmony import */ var _api_service_data_fetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-service/data-fetcher-service */ "./src/app/api-service/data-fetcher-service.ts");
/* harmony import */ var _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api-service/data-fetcher */ "./src/app/api-service/data-fetcher.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [
                _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"],
                _api_service_data_fetcher_service__WEBPACK_IMPORTED_MODULE_4__["FetchDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/word-cloud/word-cloud.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/word-cloud/word-cloud.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <angular-tag-cloud [data]=\"data | async\"\r\n                     (clicked)=\"test($event)\"\r\n                     [zoomOnHover]=\"zoomOnHoverOptions\"\r\n                     [width]=\"options.width\"\r\n                     [height]=\"options.height\"\r\n                     [overflow]=\"options.overflow\">\r\n  </angular-tag-cloud>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/word-cloud/word-cloud.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/word-cloud/word-cloud.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#word-cloud {\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JkLWNsb3VkL0M6L0dyZWdlci9yZXBvcy9mb29kLXJlY2lwZS1jb3JlL2Zvb2QtcmVjaXBlLWNvcmUvc3JjL2FwcC9jb21wb25lbnRzL3dvcmQtY2xvdWQvd29yZC1jbG91ZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JkLWNsb3VkL3dvcmQtY2xvdWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7Q0NDRDtBREVEOztFQUNFLFVBQUE7RUFDQSxXQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmQtY2xvdWQvd29yZC1jbG91ZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3b3JkLWNsb3VkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYm9keSwgaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiIsIiN3b3JkLWNsb3VkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmJvZHksXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/word-cloud/word-cloud.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/word-cloud/word-cloud.component.ts ***!
  \***************************************************************/
/*! exports provided: WordCloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCloudComponent", function() { return WordCloudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-service/data-fetcher */ "./src/app/api-service/data-fetcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordCloudComponent = /** @class */ (function () {
    function WordCloudComponent(dataFetcher) {
        this.dataFetcher = dataFetcher;
        this.options = {
            // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
            width: 1000,
            height: 400,
            overflow: false,
        };
        this.zoomOnHoverOptions = {
            scale: 1.3,
            transitionTime: 0.2,
            delay: 0.1 // Zoom will take affect after 0.8 seconds
        };
        this.data = this.dataFetcher.getTagsForCloud();
    }
    WordCloudComponent.prototype.test = function (clicked) {
        debugger;
        console.log(clicked + 'is clicked!');
    };
    WordCloudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'word-cloud',
            template: __webpack_require__(/*! ./word-cloud.component.html */ "./src/app/components/word-cloud/word-cloud.component.html"),
            styles: [__webpack_require__(/*! ./word-cloud.component.less */ "./src/app/components/word-cloud/word-cloud.component.less")],
        }),
        __metadata("design:paramtypes", [_api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]])
    ], WordCloudComponent);
    return WordCloudComponent;
}());



/***/ }),

/***/ "./src/app/components/word-cloud/word-cloud.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/word-cloud/word-cloud.module.ts ***!
  \************************************************************/
/*! exports provided: WordCloudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCloudModule", function() { return WordCloudModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _word_cloud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./word-cloud.component */ "./src/app/components/word-cloud/word-cloud.component.ts");
/* harmony import */ var _api_service_data_fetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-service/data-fetcher-service */ "./src/app/api-service/data-fetcher-service.ts");
/* harmony import */ var _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api-service/data-fetcher */ "./src/app/api-service/data-fetcher.ts");
/* harmony import */ var angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-tag-cloud-module */ "./node_modules/angular-tag-cloud-module/fesm5/angular-tag-cloud-module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WordCloudModule = /** @class */ (function () {
    function WordCloudModule() {
    }
    WordCloudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _word_cloud_component__WEBPACK_IMPORTED_MODULE_3__["WordCloudComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_6__["TagCloudModule"]
            ],
            providers: [
                _api_service_data_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"],
                _api_service_data_fetcher_service__WEBPACK_IMPORTED_MODULE_4__["FetchDataService"]
            ],
            bootstrap: [_word_cloud_component__WEBPACK_IMPORTED_MODULE_3__["WordCloudComponent"]]
        })
    ], WordCloudModule);
    return WordCloudModule;
}());



/***/ }),

/***/ "./src/app/models/CloudData.ts":
/*!*************************************!*\
  !*** ./src/app/models/CloudData.ts ***!
  \*************************************/
/*! exports provided: CloudDataModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDataModel", function() { return CloudDataModel; });
var CloudDataModel = /** @class */ (function () {
    function CloudDataModel(data) {
        this.text = data.name;
        this.weight = data.count;
        this.link = "www.google.se";
    }
    return CloudDataModel;
}());

/* harmony default export */ __webpack_exports__["default"] = (CloudDataModel);


/***/ }),

/***/ "./src/app/models/Recipe.ts":
/*!**********************************!*\
  !*** ./src/app/models/Recipe.ts ***!
  \**********************************/
/*! exports provided: Recipe, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(data) {
        this.id = data.id;
        this.name = data.recipeName;
        this.ingridients = data.ingridients;
        this.cooking = data.cooking;
        this.imageUrl = data.imageUrl;
        this.tags = data.tags;
    }
    return Recipe;
}());

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/app/models/Tag.ts":
/*!*******************************!*\
  !*** ./src/app/models/Tag.ts ***!
  \*******************************/
/*! exports provided: Tag, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag(data) {
        this.id = data.id;
        this.name = data.name;
    }
    return Tag;
}());

/* harmony default export */ __webpack_exports__["default"] = (Tag);


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
/* harmony import */ var _app_components_main_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/main/app.module */ "./src/app/components/main/app.module.ts");
/* harmony import */ var _app_components_word_cloud_word_cloud_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/word-cloud/word-cloud.module */ "./src/app/components/word-cloud/word-cloud.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_main_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_word_cloud_word_cloud_module__WEBPACK_IMPORTED_MODULE_3__["WordCloudModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Greger\repos\food-recipe-core\food-recipe-core\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map