webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <app-dashboard></app-dashboard> -->\n<!-- <app-invoices></app-invoices> -->\n<!-- <app-invoice-detail></app-invoice-detail> -->\n<!-- <app-profile></app-profile> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_detail_invoice_detail_component__ = __webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoices_invoices_component__ = __webpack_require__("../../../../../src/app/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__route_router__ = __webpack_require__("../../../../../src/app/route/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_auto_complete__ = __webpack_require__("../../../../ng4-auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular4_fusioncharts__ = __webpack_require__("../../../../angular4-fusioncharts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__invoice_detail_invoice_detail_component__["a" /* InvoiceDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__invoices_invoices_component__["a" /* InvoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng4_auto_complete__["a" /* AutoCompleteModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular4_fusioncharts__["a" /* FusionChartsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15_fusioncharts__, __WEBPACK_IMPORTED_MODULE_16_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_17_fusioncharts_themes_fusioncharts_theme_fint__),
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__route_router__["a" /* AppRoutes */], { useHash: true })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container-fluid.dashboardBcg{\r\n    background-color: #f8f8f8;\r\n}\r\nhtml,body{background-color:#ffffff;}\r\n#dashboardLabel{\r\n    margin-top: 3%;\r\n    font-size: 18px;\r\n    margin-bottom: 2%;\r\n}\r\n\r\nhr.headerLine{\r\n\tborder-top: 1px solid #b6b6b6;\r\n}\r\n\r\nhr.headerLine2{\r\n\tborder-bottom: 1px solid #eff1f2;\r\n}\r\nhr {\r\n    margin-top: 12px;\r\n    margin-bottom: 12px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n\r\n.chartLabel{\r\n    color : #4c4c4c;\r\n}\r\n\r\n#ddcircle1{\r\n   \r\n    display: block;\r\n    background: #b2d5f0;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#ddcircle2{\r\n   \r\n        display: block;\r\n        background: #f4c945;\r\n        border-radius: 100%;\r\n        height: 18px;\r\n        width: 18px;\r\n        margin: 0;      \r\n}\r\n\r\n#ddcircle3{\r\n   \r\n    display: block;\r\n    background: #8bb50d;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#ddcircle4{\r\n   \r\n    display: block;\r\n    background: #f89b60;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#ddcircle5{\r\n   \r\n    display: block;\r\n    background: #2b9c9c;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle1{\r\n   \r\n    display: block;\r\n    background: #b2d5f0;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle2{\r\n   \r\n    display: block;\r\n    background: #f4c945;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle3{\r\n   \r\n    display: block;\r\n    background: #8bb50d  ;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle4{\r\n   \r\n    display: block;\r\n    background: #f69557;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle5{\r\n   \r\n    display: block;\r\n    background: #1a9393;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle6{\r\n   \r\n    display: block;\r\n    background: #d55e5e;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n#tadcircle7{\r\n   \r\n    display: block;\r\n    background: #9c639c;\r\n    border-radius: 100%;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin: 0;      \r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboardBcg\">\n  <div class=\"container-fluid detailPageSpacing\">\n      <label id=\"dashboardLabel\">Dashboard</label>\n      <br>\n  \n      <div class=\"row\">\n  \n          <div class=\"col-sm-6\">\n              <form>\n                  <div class=\"form-group\">\n                      <label for=\"email\">View by Due Date</label>\n                  </div>\n                  \n                  <div class=\"form-group\">\n                          <fusioncharts\n                          [width]=\"width\"\n                          [height]=\"height\"\n                          [type]=\"type\"\n                          [dataFormat]=\"dataFormat\"\n                          [dataSource]=\"dataSource1\">\n                      </fusioncharts>\n                      \n                  </div>\n  \n                  <br>\n                  <div class=\"form-group\">\n  \n                      <label>Legend</label>\n                      <hr class=\"headerLine\">\n                       <div class=\"row\">\n                          <div class=\"col-sm-7\">\n                              <p class=\"chartLabel\">Invoices due Today:</p>\n                          </div>\n                          <div class=\"col-sm-2\">\n                              <p class=\"chartLabel\"> 146</p>\n                          </div>\n                          <div class=\"col-sm-2\">\n                              <p class=\"chartLabel\"> 29.58% </p>\n                          </div>\n                          <div class=\"col-sm-1\">\n                              <figure id=\"ddcircle1\"></figure>\n                          </div>\n                          \n                      </div> \n                      <hr class=\"headerLine2\">\n  \n                      <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <p class=\"chartLabel\">Date View by Turn Around Time Invoices past due:</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 125</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 25.28%</p>\n                              </div>\n                              <div class=\"col-sm-1\">\n                                      <figure id=\"ddcircle2\"></figure>\n                              </div>\n                              \n                          </div> \n                          <hr class=\"headerLine2\">\n  \n                          <div class=\"row\">\n                                  <div class=\"col-sm-7\">\n                                      <p class=\"chartLabel\">Invoices due in 1 day</p>\n                                  </div>\n                                  <div class=\"col-sm-2\">\n                                      <p class=\"chartLabel\"> 105</p>\n                                  </div>\n                                  <div class=\"col-sm-2\">\n                                      <p class=\"chartLabel\"> 9.93%</p>\n                                  </div>\n                                  <div class=\"col-sm-1\">\n                                          <figure id=\"ddcircle3\"></figure>\n                                  </div>\n                                  \n                              </div>\n                              <hr class=\"headerLine2\"> \n  \n                              <div class=\"row\">\n                                      <div class=\"col-sm-7\">\n                                          <p class=\"chartLabel\">Invoices due in 2 to 5 days:</p>\n                                      </div>\n                                      <div class=\"col-sm-2\">\n                                          <p class=\"chartLabel\"> 69</p>\n                                      </div>\n                                      <div class=\"col-sm-2\">\n                                          <p class=\"chartLabel\"> 13.97%</p>\n                                      </div>\n                                      <div class=\"col-sm-1\">\n                                              <figure id=\"ddcircle4\"></figure>\n                                      </div>\n                                     \n                                  </div> \n                                  <hr class=\"headerLine2\">\n  \n                                  <div class=\"row\">\n                                          <div class=\"col-sm-7\">\n                                              <p class=\"chartLabel\">Invoices due in >5 days:</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 49</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 21.24%</p>\n                                          </div>\n                                          <div class=\"col-sm-1\">\n                                                  <figure id=\"ddcircle5\"></figure>\n                                          </div>\n                                          \n                                      </div> \n                                      <hr class=\"headerLine2\">\n  \n                              </div> \n                  \n              </form>\n  \n          </div>\n  \n          <div class=\"col-sm-6\">\n              <form>\n                      <div class=\"form-group\">\n                          <label for=\"email\">View by Turn Around Date</label>\n                      </div>\n                      <div class=\"form-group\">\n                              <fusioncharts\n                              [width]=\"width\"\n                              [height]=\"height\"\n                              [type]=\"type\"\n                              [dataFormat]=\"dataFormat\"\n                              [dataSource]=\"dataSource2\">\n                          </fusioncharts>\n                      </div>\n  \n                      <br>\n                      <div class=\"form-group\">\n                      <label>Legend</label>\n                      <hr class=\"headerLine\"> \n  \n                      <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <p class=\"chartLabel\">Invoices missed TAT 3 days and above:</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 69</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 31.9% </p>\n                              </div>\n                              <div class=\"col-sm-1\">\n                                      <figure id=\"tadcircle1\"></figure>\n                              </div>\n                              \n                          </div> \n                          <hr class=\"headerLine2\">\n      \n                      <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <p class=\"chartLabel\">Invoices missed TAT 2 days:</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 10</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 4.85%</p>\n                              </div>\n                              <div class=\"col-sm-1\">\n                                      <figure id=\"tadcircle2\"></figure>\n                              </div>\n                              \n                          </div> \n                          <hr class=\"headerLine2\">\n      \n                      <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <p class=\"chartLabel\">Invoices missed TAT 1 days</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 11</p>\n                              </div>\n                              <div class=\"col-sm-2\">\n                                  <p class=\"chartLabel\"> 4.85%</p>\n                              </div>\n                              <div class=\"col-sm-1\">\n                                      <figure id=\"tadcircle3\"></figure>\n                              </div>\n                             \n                          </div>\n                          <hr class=\"headerLine2\"> \n      \n                          <div class=\"row\">\n                                  <div class=\"col-sm-7\">\n                                      <p class=\"chartLabel\">Invoices TAT today:</p>\n                                  </div>\n                                  <div class=\"col-sm-2\">\n                                      <p class=\"chartLabel\"> 10</p>\n                                  </div>\n                                  <div class=\"col-sm-2\">\n                                      <p class=\"chartLabel\"> 5.37%</p>\n                                  </div>\n                                  <div class=\"col-sm-1\">\n                                          <figure id=\"tadcircle4\"></figure>\n                                  </div>\n                                 \n                              </div> \n                              <hr class=\"headerLine2\">\n      \n                              <div class=\"row\">\n                                      <div class=\"col-sm-7\">\n                                          <p class=\"chartLabel\">Invoices TAT 1 day:</p>\n                                      </div>\n                                      <div class=\"col-sm-2\">\n                                          <p class=\"chartLabel\"> 79</p>\n                                      </div>\n                                      <div class=\"col-sm-2\">\n                                          <p class=\"chartLabel\"> 36.51%</p>\n                                      </div>\n                                      <div class=\"col-sm-1\">\n                                              <figure id=\"tadcircle5\"></figure>\n                                      </div>\n                                      \n                                  </div>\n                                  <hr class=\"headerLine2\">\n                                          \n                                  <div class=\"row\">\n                                          <div class=\"col-sm-7\">\n                                              <p class=\"chartLabel\">Invoices TAT 2 days:</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 24</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 6.97%</p>\n                                          </div>\n                                          <div class=\"col-sm-1\">\n                                                  <figure id=\"tadcircle6\"></figure>\n                                          </div>\n                                          \n                                      </div> \n                                      <hr class=\"headerLine2\">\n  \n                                  <div class=\"row\">\n                                          <div class=\"col-sm-7\">\n                                              <p class=\"chartLabel\">Invoices TAT 3 days and above:</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 13</p>\n                                          </div>\n                                          <div class=\"col-sm-2\">\n                                              <p class=\"chartLabel\"> 6.97%</p>\n                                          </div>\n                                          <div class=\"col-sm-1\">\n                                                  <figure id=\"tadcircle7\"></figure>\n                                          </div>\n                                          \n                                      </div>\n                                      <hr class=\"headerLine2\"> \n      \n                          \n                      </div>\n                     \n              </form>\n              \n          </div>\n  \n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_invoice__ = __webpack_require__("../../../../../src/app/service/invoice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.width = 640;
        this.height = 400;
        this.type = 'pie3d';
        this.dataFormat = 'json';
        this.dataSource1 = this.dataSource1;
        this.dataSource2 = this.dataSource2;
        this.dataSource1 = {
            "chart": {
                "startingangle": "120",
                "showlabels": "0",
                "showlegend": "0",
                "enablemultislicing": "0",
                "slicingdistance": "15",
                "showpercentvalues": "1",
                "showpercentintooltip": "0",
                "plottooltext": "Invoices : $label Total visit : $datavalue",
                "theme": "ocean"
            },
            "data": [
                {
                    "label": "Invoices due Today:",
                    "value": "1250400"
                },
                {
                    "label": "Date View by Turn Around Time Invoices past due:",
                    "value": "1463300"
                },
                {
                    "label": "Invoices due in 1 day",
                    "value": "1050700"
                },
                {
                    "label": "Invoices due in 2 to 5 days:",
                    "value": "491000"
                },
                {
                    "label": "Invoices due in >5 days:",
                    "value": "491000"
                }
            ]
        };
        this.dataSource2 = {
            "chart": {
                "startingangle": "120",
                "showlabels": "0",
                "showlegend": "0",
                "enablemultislicing": "0",
                "slicingdistance": "15",
                "showpercentvalues": "1",
                "showpercentintooltip": "0",
                "plottooltext": "Invoices : $label Count : $datavalue",
                "theme": "ocean"
            },
            "data": [
                {
                    "label": "Invoices missed TAT 3 days and above:",
                    "value": "1250400"
                },
                {
                    "label": "Invoices missed TAT 2 days:",
                    "value": "1463300"
                },
                {
                    "label": "Invoices missed TAT 1 days:",
                    "value": "1050700"
                },
                {
                    "label": "Invoices TAT today:",
                    "value": "491000"
                },
                {
                    "label": "Invoices TAT 1 day:",
                    "value": "1463300"
                },
                {
                    "label": "Invoices TAT 2 days:",
                    "value": "1050700"
                },
                {
                    "label": "Invoices TAT 3 days and above:",
                    "value": "491000"
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gatewayName{\r\n    font-size: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid detailPageSpacing\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" id=\"gatewayName\"><strong>Accounts Payable</strong> Gateway</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#/Dashboard\"><span class=\"glyphicon glyphicon-dashboard\"></span> Dashboard</a></li>\n      <li><a href=\"#/Invoice\"><span class=\"glyphicon glyphicon-list-alt\"></span> Invoices</a></li>\n      <li><a href=\"#/Profile\"><span class=\"glyphicon glyphicon-user\"></span> Profile</a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_invoice__ = __webpack_require__("../../../../../src/app/service/invoice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(invoiceService) {
        this.invoiceService = invoiceService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#downloadInvIcon{\r\n    font-size: 75px;\r\n}\r\n\r\n.glyphicon-thumbs-up {\r\n    font-size: 50px;\r\n}\r\n\r\n.glyphicon-share{\r\n    font-size: 50px;\r\n}\r\n\r\n.action_alert{\r\n    text-align: center;\r\n}\r\n\r\n.actionIconInLineDetail{\r\n    font-size: 18px;\r\n}\r\n\r\n.subTotalInLineLevel{\r\n    text-align: right;\r\n}\r\n\r\n.panel-footer{\r\n    text-align: right;\r\n}\r\n\r\n.glyphicon-user{\r\n    font-size: 40px;\r\n}\r\n\r\n.errorMsg{\r\n    text-align: center;\r\n}\r\n\r\n.historyScroll {\r\n    overflow-y:scroll;\r\n    height:150px;   \r\n}\r\n\r\n#lineScroll {\r\n    overflow-y:scroll;\r\n    height:230px;   \r\n}\r\n\r\n#addLineScroll {\r\n    overflow-y:scroll;\r\n    height:150px;   \r\n}\r\n\r\nhr.headerLine{\r\n\tborder-top: 1px solid #000;\r\n}\r\n\r\n.well#headerWell{\r\n    background-color: #E9F9FF;\r\n    padding-left: 0px;\r\n}\r\n\r\n.headerFont{\r\n    font-size: 14px;\r\n}\r\n\r\n#inVNumber{\r\n   font-size: 18px;\r\n   text-align: center;\r\n}\r\n\r\n#back2Inv{\r\n    font-size: 18px;\r\n    color: #000;\r\n    cursor:pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.showDetails{\r\n    color: #000;\r\n    cursor:pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.well.actionWell{\r\n    background-color: #fff;\r\n}\r\n\r\n.form-control#polist4alternatePo{\r\n    background-color: #EBF0F7;\r\n}\r\n\r\n.input-group-addon{\r\n    background-color: #337AB7;\r\n    cursor:pointer;\r\n    color: #fff;\r\n}\r\n\r\n.actionLabel{\r\n    color: #152935;\r\n}\r\n\r\n.form-control.boxBCG{\r\n    background-color: #EBF0F7;\r\n}\r\n\r\nth {\r\n    margin:5px;\r\n    color: #fff;\r\n    background-color: #004266;\r\n    font-size: 14px;\r\n}\r\n\r\ntr{\r\n    background: #fff;\r\n}\r\n\r\ntr:nth-child(odd) {\r\n    background-color: #fff; \r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #E9F9Ff;\r\n}\r\n\r\n.btn#dropBtn{\r\n    padding: 0px;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n    color: #333;\r\n    background-color: #E9F9Ff;\r\n    border-color: #ddd;\r\n}\r\n\r\n.panel-footer{\r\n    text-align: center;\r\n    background-color: #E9F9Ff;\r\n}\r\n\r\n.btn.main4btn{\r\n    margin-right: 10px;\r\n}\r\n\r\ninput{\r\n    background-color: #EBF0F7;\r\n}\r\nlabel{\r\n    font-size: 16px;\r\n}\r\n.col-lg-4{\r\n    padding-top:1%;\r\n    padding-bottom:1%;\r\n}\r\n.heading{\r\n    padding-left:1%;\r\n}\r\n.heading1{\r\n    font-size:16px;\r\n}\r\n.boxBCG1{\r\n    width:27%;\r\n    background-color: #EBF0F7;\r\n}\r\n\r\n.file_upload_div\r\n{\r\n  border: 2px dashed rgb(28, 100, 124);\r\n  border-radius: 0px;\r\n  text-align: center !important;\r\n  width:50%;\r\n}\r\n#bb{\r\n    padding: 10px;\r\n    background: #115f88; \r\n    display: table center;\r\n    color: #fff;\r\n    \r\n     }\r\n\r\n\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n#viewPo_btn{\r\n    margin-left: 1%;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Invoice Detail Header Part Starts from Here -->\n<div class=\"container-fluid well\" id=\"headerWell\">\n  <div class=\"container-fluid detailPageSpacing\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"><label><a href=\"#\" id=\"back2Inv\"><span class=\"glyphicon glyphicon-chevron-left\"></span> &nbsp; Back to Invoice</a></label></div>\n      <div class=\"col-sm-4\"><label id=\"inVNumber\">Invoice Number - {{InvoiceData.Invoice.DCDocumentData.DC_Header.Invoice_Num}} </label></div>\n      <div class=\"col-sm-4\"></div>\n    </div> \n    </div>\n    <hr class=\"headerLine\"> \n    <div class=\"container-fluid detailPageSpacing\">\n      \n      <div class=\"row\">\n          <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Invoice Date</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Doc_Date}}</label>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-3\" >\n                <form>\n                  <div class=\"form-group\">\n                    <p for=\"usr\" class=\"headerFont\">Due Date</p>\n                    <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Due_Date}} </label>\n                  </div>\n                </form>\n              </div>\n        <div class=\"col-sm-3\" >\n          <form>\n            <div class=\"form-group\">\n              <p for=\"usr\" class=\"headerFont\">BCI ID</p>\n              <label class=\"headerFont\">{{InvoiceData.Invoice.BciId}}</label>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-3\" >\n            <form>\n              <div class=\"form-group\">\n                <p for=\"usr\" class=\"headerFont\">BCI Date</p>\n                <label class=\"headerFont\"></label>\n              </div>\n            </form>\n          </div> \n            \n      </div>\n      <br>\n  \n      <div class=\"row\">\n          <div class=\"col-sm-3\">\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Vendor Name</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Swiss_Header.Supplier_Name}}</label>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Vendor ID</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Vendor_ID}} </label>\n                </div>\n              </form>\n            </div>\n          <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">PO Number</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.PO_Number}}  </label>\n                </div>\n              </form>\n            </div> \n        <div class=\"col-sm-3\" >\n          <form>\n            <div class=\"form-group\">\n              <p for=\"usr\" class=\"headerFont\">Company Code</p>\n              <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Company_Code}}</label>\n            </div>\n          </form>\n        </div>\n        \n            \n      </div>\n      <br>\n  \n      <div class=\"row\">\n          <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Source Document</p>\n                  <label class=\"headerFont\"></label>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-3\" >\n                <form>\n                  <div class=\"form-group\">\n                    <p for=\"usr\" class=\"headerFont\">Source Doc date</p>\n                    <label class=\"headerFont\"></label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"col-sm-3\" >\n                  <form>\n                    <div class=\"form-group\">\n                      <p for=\"usr\" class=\"headerFont\">Reference Number</p>\n                      <label class=\"headerFont\"></label>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"col-sm-3\" >\n                    <form>\n                      <div class=\"form-group\">\n                        <p for=\"usr\" class=\"headerFont\">Delivery Note</p>\n                        <label class=\"headerFont\"></label>\n                      </div>\n                    </form>\n                  </div>             \n      </div>\n      <br>\n      <div class=\"row\">\n          <div class=\"col-sm-3\">\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Payment Vendor ID</p>\n                  <label class=\"headerFont\"></label>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-3\" >\n                <form>\n                  <div class=\"form-group\">\n                    <p for=\"usr\" class=\"headerFont\">Payment Vendor Name</p>\n                    <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Swiss_Header.Supplier_Fiscal_Name}}</label>\n                  </div>\n                </form>\n              </div> \n              <div class=\"col-sm-3\">\n                  <form>\n                    <div class=\"form-group\">\n                      <p for=\"usr\" class=\"headerFont\">Tax ID</p>\n                      <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Tax_Code}}</label>\n                      <!-- <label class=\"headerFont\"></label> -->\n                    </div>\n                  </form>\n                </div>\n            <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Tax Amount</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Tax_Amount}}</label>\n                </div>\n              </form>\n            </div> \n            \n        \n      </div>\n      <br>\n      <div class=\"row\">\n          <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Sub Total</p>\n                  <label class=\"headerFont\"></label>\n                </div>\n              </form>\n            </div>\n            \n            <div class=\"col-sm-3\" >\n              <form>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Total Amount</p>\n                  <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Total_Amount}}</label>\n                </div>\n              </form>\n            </div> \n              <div class=\"col-sm-3\" >\n                  <form>\n                    <div class=\"form-group\">\n                      <p for=\"usr\" class=\"headerFont\">GR/RC no.</p>\n                      <label class=\"headerFont\"></label>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"col-sm-3\" >\n                    <form>\n                      <div class=\"form-group\">\n                        <p for=\"usr\" class=\"headerFont\">Tax Code</p>\n                        <label class=\"headerFont\">{{InvoiceData.Invoice.DCDocumentData.DC_Header.Tax_Code}}</label>\n                        <!-- <label class=\"headerFont\"></label> -->\n                      </div>\n                    </form>\n                  </div>\n             \n      </div>\n      <br>\n  \n      <div class=\"row\">\n        \n          \n        <div class=\"col-sm-3\" >\n          <form>\n            <div class=\"form-group\">\n              <p for=\"usr\" class=\"headerFont\">Status</p>\n              <label class=\"headerFont\">{{InvoiceData.InvoiceStatus[InvoiceData.InvoiceStatus.length - 1].Status}}</label>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-3\">\n          <form>\n            <div class=\"form-group\">\n              <p for=\"usr\" class=\"headerFont\">Reason</p>\n              <label class=\"headerFont\">{{InvoiceData.InvoiceStatus[InvoiceData.InvoiceStatus.length - 1].ReasonCode}}</label>\n            </div>\n          </form>\n        </div>\n      \n        <div class=\"col-sm-3\" >\n            <form>\n              <div class=\"form-group\">\n                <p for=\"usr\" class=\"headerFont\">Additional Information</p>\n                <label class=\"headerFont\">{{InvoiceData.InvoiceStatus[InvoiceData.InvoiceStatus.length - 1].AdditionalInfo.Type}}</label>\n              </div>\n            </form>\n          </div>\n          <div class=\"col-sm-3\">\n\n          </div>\n      </div>\n  </div>\n  </div>\n  <!-- Invoice Detail Header Part ends Here -->\n  \n  <!-- Main Div for Spacing, margin and style Starts From Here -->\n  <div class=\"detailPageSpacing\">\n    <!-- Select Vendor Tab Starts From Here -->\n\n    <div class=\"container-fluid\">\n        <div class=\"panel-group\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title text-right\">\n                <!-- <a class=\"showDetails\" data-toggle=\"collapse\" href=\"#collapse1\">Select Vendor</a> -->\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapse1\">Select Vendor</button>\n              </h4>\n            </div>\n            <div id=\"collapse1\" class=\"panel-collapse collapse\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                  <div class=\"container-fluid\">\n                    <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                      <label>Search &amp; Select Vendor</label>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <span class=\"glyphicon glyphicon-info-sign\"></span> \n                        Input all the fields you know. At least one field has to be filled for searching the vendor\n                    </div>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"container-fluid\">\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-4\">\n                        <form>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_name\">Vendor Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_id\">Bank Account</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"vendor_name\">PO Box</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"vendor_id\">Postal Code</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                            </div>\n                        </form>\n                    </div>\n\n                    <div class=\"col-sm-4\">\n                        <form>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_name\">Vendor ID</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_id\">Payment Method</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"vendor_name\">House &amp; Street Number</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"vendor_id\">Region</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                            </div>\n                        </form>\n                    </div>\n\n                    <div class=\"col-sm-4\">\n                        <form>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_name\">Tax Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"vendor_id\">Sort Code</label>\n                            <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"vendor_name\">City</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_name\">\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"vendor_id\">Country</label>\n                              <input type=\"text\" class=\"form-control\" id=\"vendor_id\">\n                            </div>\n                        </form>\n                    </div>\n\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-sm-10\">\n\n                      </div>\n                      <div class=\"col-sm-2\">\n                          \n                          <form>\n                            <div class=\"form-group\">\n                                <button type=\"button\" class=\"btn btn-default\">Reset</button>\n                                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#select_Vendor\">Search</button>\n                            </div>\n\n                          </form>\n                          \n                      </div>\n                    </div>\n                    <br>\n                    <div class=\"container-fluid\">\n                        <div id=\"select_Vendor\" class=\"collapse\">\n                           \n                            <table class=\"table\">\n                                <thead>\n                                  <tr>\n                                    <th></th>\n                                    <th>Vendor Name</th>\n                                    <th>Email ID</th>\n                                    <th>Tax ID</th>\n                                    <th>PO Box</th>\n                                    <th>City</th>\n                                    <th>Postal Code</th>\n                                    <th>Region</th>\n                                    <th>Country</th>\n                                    <th>Bank Account</th>\n                                    <th>Payment Method</th>\n                                    <th>Currency</th>\n                                    <th>Vendor status</th>\n                                    <th>Bank key</th>\n                                    <th>Adobe Scan Date</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td><input type=\"radio\" name=\"optradio\"></td>\n                                    <td>0050022059</td>\n                                    <td>patil_sachin@in.ibmcom</td>\n                                    <td></td>\n                                    <td>676673</td>\n                                    <td>Dallas</td>\n                                    <td>75267-6673</td>\n                                    <td>TX</td>\n                                    <td>US</td>\n                                    <td></td>\n                                    <td>C</td>\n                                    <td>USD</td>\n                                    <td>Active</td>\n                                    <td></td>\n                                    <td></td>\n                                  </tr>\n                                  <tr>\n                                    <td><input type=\"radio\" name=\"optradio\"></td>\n                                    <td>0050001997</td>\n                                    <td>patil_sachin@in.ibmcom</td>\n                                    <td></td>\n                                    <td>534151</td>\n                                    <td>Atlanta</td>\n                                    <td>30353</td>\n                                    <td>GA</td>\n                                    <td>US</td>\n                                    <td>1017305737</td>\n                                    <td>A</td>\n                                    <td>USD</td>\n                                    <td>Active</td>\n                                    <td>043000096</td>\n                                    <td></td>\n                                  </tr>   \n                                </tbody>\n                              </table>\n                          \n                              <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"rejectInv_go2alert()\">Confirm Vendor</button>\n                          </div>\n                          <br>\n                          \n                    </div>\n\n                </div>\n\n\n                </li>\n              </ul>\n              <div class=\"panel-footer\">Success message would display here. Like : You have successfully added 0050001997 as the vendor</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- Select Vendor Tab Ends Here -->\n\n    \n\n    <!-- Buyer Action Tab Starts From Here -->\n    <div class=\"container-fluid\">\n      <h3>IBM AP Actions</h3>\n      <ul class=\"nav nav-pills\">\n        <li class=\"active\" id=\"vmdProcessMain\"><a data-toggle=\"pill\" href=\"#vmdProcess\">VMD Process</a></li>\n        <li id=\"rejectInvMain\"><a data-toggle=\"pill\" href=\"#rejectInv\">Reject Invoice</a></li>\n        <!-- <li><a data-toggle=\"pill\" href=\"#return2Ap\">Return to AP Team</a></li> -->\n        <li id=\"fwd2BuyerMain\"><a data-toggle=\"pill\" href=\"#fwd2Buyer\">Forward to Buyer</a></li>\n        <li id=\"updateCompCodeMain\"><a data-toggle=\"pill\" href=\"#updateCompCode\">Update Company Code</a></li>\n        <li id=\"remitTovalidationMain\"><a data-toggle=\"pill\" href=\"#remitTovalidation\">Remit to Validation</a></li>\n        <!-- <li><a data-toggle=\"pill\" href=\"#reportability\">Reportability</a></li> -->\n        <li id=\"npnpListAdditionMain\"><a data-toggle=\"pill\" href=\"#npnpListAddition\">Awaiting NPNP list Additions</a></li>\n        <li id=\"submitAsNonPOMain\"><a data-toggle=\"pill\" href=\"#submitAsNonPO\">Submit as Non PO</a></li>\n        <li id=\"processOutsideBCMain\"><a data-toggle=\"pill\" href=\"#processOutsideBC\">Process outside Block Chain</a></li>\n        <li id=\"buyerDelegationMain\"><a data-toggle=\"pill\" href=\"#buyerDelegation\">Buyer Delegation</a></li>\n        <!-- <li><a data-toggle=\"pill\" href=\"#invAction\">Invoice Action</a></li> -->\n      </ul>\n      \n      <div class=\"tab-content\">\n  \n        <!-- Alternate PO Tab Starts From Here -->\n         <div id=\"vmdProcess\" class=\"tab-pane fade in active well well-lg actionWell\">\n            <div class=\"container\" [hidden]=\"vmdProcess_mainTab_hidden\">\n                <form >\n                    <div class=\"form-group\">\n                      <p class=\"actionLabel\" for=\"vmdProcess_rejectReason\">Please provide a reason for VMD Process</p>\n                      <select class=\"form-control boxBCG\" id=\"vmdProcess_rejectReason\" required>\n                        <option disabled>Select Reason</option>\n                        <option>Vendor not found</option>\n                        <option>Vendor blocked for posting</option>\n                        <option>Vendor marked for Deletion</option>\n                        <option>Vendor extension to a different company code</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <textarea class=\"form-control boxBCG\" id=\"vmdProcess_commentText\" rows=\"3\" placeholder=\"Enter your comments here\" required></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"vmdProcess_go2alert()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"vmdProcess_alertTab_hidden\">\n              <p class=\"actionLabel\"> You have been chosen PO Number DO12345 as the alternate Purchase Order.</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"vmdProcess_back2mainTab()\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"vmdProcess_go2success()\">Submit</button>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"vmdProcess_successTab_hidden\">\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              <p class=\"actionLabel\"> PO Number DO12345 has been updated as the alternate Purchase Order.</p>\n            </div>\n        </div> \n        <!-- Alternate PO Tab ends Here -->\n  \n        <!-- Reject Invoice Tab Starts From Here -->\n        <div id=\"rejectInv\" class=\"tab-pane fade well well-lg actionWell\">\n          <div class=\"container\" [hidden]=\"rejectInv_mainTab_hidden\">\n              <form>\n                  <div class=\"form-group\">\n                    <p class=\"actionLabel\" for=\"rejectInv_rejectReason\">Please provide a reason for rejecting this invoice</p>\n                    <select class=\"form-control boxBCG\" id=\"rejectInv_rejectReason\">\n                      <option disabled>Select Reason</option>\n                      <option>PO number not provided on Invoice</option>\n                      <option>PO Number Invalid or Does Not Exist</option>\n\n                      <!-- for company code selection\n                      <option>Invalid Vendor ID – Vendor ID do not exist in VMD</option>\n                      <option>PO Number Invalid or Does Not Exist</option> -->\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control boxBCG\" id=\"rejectInv_commentText\" rows=\"3\" placeholder=\"Enter your comments here\"></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"rejectInv_go2alert()\">Reject</button>\n                  </div>\n              </form>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"rejectInv_alertTab_hidden\">\n            <p class=\"actionLabel\"> Are you sure want to reject this invoice ?</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"rejectInv_back2mainTab()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"rejectInv_go2success()\">Confirm</button>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"rejectInv_successTab_hidden\">\n            <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n            <p class=\"actionLabel\"> Success</p>\n          </div>\n        </div>\n        <!-- Reject Invoice Tab Ends Here -->\n\n\n\n\n        <!-- Update Company Code Buyer Tab Starts From Here -->\n        <div id=\"updateCompCode\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container\" [hidden]=\"updateCompCode_mainTab_hidden\">\n                <form>\n                    <div class=\"form-group\">\n                      <div>Please search the company code</div><br>\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control boxBCG\" placeholder=\"Search the company code\"\n                        id=\"updateCompCodelist\" [ng4-auto-complete]=\"updateCompCodeList\" \n                        [word-trigger]=\"2\" [list-length]=\"10\"filterName=\"name\" no-record-text=\"No Records Found!\" >\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></span>   \n                      </div>\n                    </div>\n                 \n                  <div class=\"form-group\">\n                      <div class=\"btn btn-primary pull-right\" (click)=\"updateCompCode_go2alert()\">Update</div>\n                     \n                    </div>\n                  \n                </form>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"updateCompCode_alertTab_hidden\">\n                <p class=\"actionLabel\"> Are you sure want to update this company code ?</p>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"updateCompCode_back2mainTab()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateCompCode_go2success()\">Confirm</button>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"updateCompCode_successTab_hidden\">\n                <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n                <p class=\"actionLabel\"> Invoice has been forwarded to Buyer Name (Buyer ID).</p>\n            </div>\n        </div>\n        <!-- Update Company Code Tab Ends Here -->\n\n\n        \n\n        \n        <!-- Remit to Validation  Buyer Tab Starts From Here -->\n        <div id=\"remitTovalidation\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container\" [hidden]=\"remitTovalidation_mainTab_hidden\">\n                <form>\n                    <div class=\"form-group\">\n                      <div>Please search the Vendor ID</div><br>\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control boxBCG\" placeholder=\"Search the Vendor ID\"\n                        id=\"remitTovalidationlist\" [ng4-auto-complete]=\"remitTovalidationList\" \n                        [word-trigger]=\"2\" [list-length]=\"10\"filterName=\"name\" no-record-text=\"No Records Found!\" >\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></span>   \n                      </div>\n                    </div>\n                 \n                  <div class=\"form-group\">\n                      <div class=\"btn btn-primary pull-right\" (click)=\"remitTovalidation_go2alert()\">Update</div>\n                     \n                    </div>\n                  \n                </form>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"remitTovalidation_alertTab_hidden\">\n                <p class=\"actionLabel\"> Are you sure want to update this vendor ?</p>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"remitTovalidation_back2mainTab()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"remitTovalidation_go2success()\">Confirm</button>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"remitTovalidation_successTab_hidden\">\n                <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n                <p class=\"actionLabel\"> Vendor has been updated to Vendor Name (Vendor ID).</p>\n            </div>\n        </div>\n        <!-- Remit to Validation  Tab Ends Here -->\n\n\n\n  \n        <!-- Return to AP Team Tab Starts From Here -->\n        <!-- <div id=\"return2Ap\" class=\"tab-pane fade well well-lg actionWell\"> \n            <div class=\"container\" [hidden]=\"return2Ap_mainTab_hidden\">\n              <form>\n                  <div class=\"form-group\">\n                    <label class=\"actionLabel\" for=\"return2Ap_reason2return\">Please provide a reason for returning this invoice to the AP Team</label>\n                    <textarea class=\"form-control boxBCG\" id=\"return2Ap_reason2return\" rows=\"3\" placeholder=\"Enter your comments here\"></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"return2Ap_go2alert()\">Return to AP Team</button>\n                  </div>\n              </form>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"return2Ap_alertTab_hidden\">\n              <p class=\"actionLabel\"> Are you sure want to return this invoice to the AP Team ?</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"return2Ap_back2mainTab()\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"return2Ap_go2success()\">Confirm</button>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"return2Ap_successTab_hidden\">\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              <p class=\"actionLabel\"> Invoice No. ABC1234 has been returned to the AP Team.</p>\n            </div>\n        </div>-->\n        <!-- Return to AP Team Tab Ends Here -->\n  \n        <!-- Invoice Action Tab Starts From Here -->\n        <!-- <div id=\"invAction\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container action_alert\" [hidden]=\"invAction_mainTab_hidden\">\n                <form>\n                    <div class=\"form-group\">\n                      <label class=\"actionLabel\" for=\"invAction_reason2return\">There is a price mismatch. Do you want to approve or reject this invoive?\n                      </label>\n                    </div>\n                    <div class=\"form-group\">\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"invAction_back2mainTab()\">Reject</button>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"invAction_go2alert()\">Approve</button>\n                    </div>\n                </form>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"invAction_alertTab_hidden\">\n                <p class=\"actionLabel\"> Are you sure want to approve this invoice?</p>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"invAction_back2mainTab()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"invAction_go2success()\">Confirm</button>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"invAction_successTab_hidden\">\n                <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n                <p class=\"actionLabel\">Success.</p>\n              </div>\n        </div> -->\n        <!-- Invoice Action Tab Ends Here -->\n  \n        <!-- Forward to Other Buyer Tab Starts From Here -->\n        <div id=\"fwd2Buyer\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container\" [hidden]=\"fwd2Buyer_mainTab_hidden\">\n                <form>\n                  <div class=\"form-group\">\n                    <div>Please search and select the buyer you want to forward this invoice to</div><br>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control boxBCG\" placeholder=\"Search with Buyer Name or Buyer Email or Employee ID\"\n                      id=\"emaillist4fwd2Buyer\" [ng4-auto-complete]=\"emailList4fwd2Buyer\" \n                      [word-trigger]=\"2\" [list-length]=\"10\"filterName=\"name\" no-record-text=\"No Records Found!\" >\n                      <span class=\"input-group-addon\" (click)=\"fwd2Buyer_go2alert()\"><i class=\"glyphicon glyphicon-search\"></i></span>   \n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <select class=\"form-control boxBCG\" id=\"rejectInv_rejectReason\">\n                        <option disabled>Please provide a reason for forwarding this invoice</option>\n                        <option> Invalid Vendor ID – Vendor ID do not exist in VMD</option>\n                        <option> Vendor is marked for deletion </option>\n                        <option>  Vendor is blocked for posting</option>\n                      </select>\n                    </div>\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control boxBCG\" id=\"fwd2Buyer_reason2return\" rows=\"3\" placeholder=\"Type your comments here\"></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                      <div class=\"btn btn-primary pull-right\" (click)=\"fwd2Buyer_go2alert()\">Forward</div>\n                     <!--  <div class=\"pointer c-w btn  cmn-btn bg-color pull-right\" >Cancel</div> -->\n                    </div>\n                  <!-- <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"fwd2Buyer_go2alert()\">Forward to Buyer</button>\n                  </div> -->\n                </form>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"fwd2Buyer_alertTab_hidden\">\n                <p class=\"actionLabel\"> Are you sure want to forward this invoice to Buyer Name (Buyer ID) ?</p>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"fwd2Buyer_back2mainTab()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"fwd2Buyer_go2success()\">Confirm</button>\n              </div>\n              <div class=\"container action_alert\" [hidden]=\"fwd2Buyer_successTab_hidden\">\n                <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n                <p class=\"actionLabel\"> Invoice has been forwarded to Buyer Name (Buyer ID).</p>\n            </div>\n        </div>\n        <!-- Forward to Other Buyer Tab Ends Here -->\n  \n        <!-- Reportability Tab Starts From Here -->\n        <!-- <div id=\"reportability\" class=\"tab-pane fade well well-lg actionWell\">\n          <div class=\"container action_alert\" [hidden]=\"reportability_mainTab_hidden\">\n            <form>\n                <div class=\"form-group\">\n                  <label class=\"actionLabel\" for=\"reportability_reason2return\">Has anyone travelled from supplier country to the country of \n                    the company code to provide service ?\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"reportability_back2mainTab()\">No</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reportability_go2alert()\">Yes</button>\n                </div>\n            </form>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"reportability_alertTab_hidden\">\n            <p class=\"actionLabel\"> Are you sure want to proceed ?</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"reportability_back2mainTab()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"reportability_go2success()\">Confirm</button>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"reportability_successTab_hidden\">\n            <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n            <p class=\"actionLabel\">Success.</p>\n          </div>\n        </div> -->\n         <!-- Reportability Tab Ends Here -->\n  \n        <!-- Awaiting NPNP list Additions Tab Starts From Here -->\n         <div id=\"npnpListAddition\" class=\"tab-pane fade well well-lg actionWell\">\n          <div class=\"container action_alert\" [hidden]=\"npnpListAddition_mainTab_hidden\">\n            <form>\n                <div class=\"form-group\">\n                  <label class=\"actionLabel\" for=\"npnpListAddition_reason2return\"> Have you initiated addition to NPNP exception list ?</label>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"npnpListAddition_go2alert()\">Proceed</button>\n                </div>\n            </form>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"npnpListAddition_alertTab_hidden\">\n            <p class=\"actionLabel\"> Are you sure want to proceed ?</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"npnpListAddition_back2mainTab()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"npnpListAddition_go2success()\">Confirm</button>\n          </div>\n          <div class=\"container action_alert\" [hidden]=\"npnpListAddition_successTab_hidden\">\n            <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n            <p class=\"actionLabel\">Success.</p>\n          </div>\n        </div> \n        <!-- Awaiting NPNP list Additions Tab Ends Here -->\n\n\n        <!-- Submit as Non PO Tab Starts From Here -->\n        <div id=\"submitAsNonPO\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container action_alert\" [hidden]=\"submitAsNonPO_mainTab_hidden\">\n              <form>\n                  <div class=\"form-group\">\n                    <label class=\"actionLabel\" for=\"submitAsNonPO_reason2return\"> Submit Purchase Order DO1230001 as Non PO </label>\n                  </div>\n                  <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitAsNonPO_go2alert()\">Submit as Non PO</button>\n                  </div>\n              </form>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"submitAsNonPO_alertTab_hidden\">\n              <p class=\"actionLabel\"> Are you sure want to Submit as Non PO ?</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"submitAsNonPO_back2mainTab()\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitAsNonPO_go2success()\">Confirm</button>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"submitAsNonPO_successTab_hidden\">\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              <p class=\"actionLabel\">Success.</p>\n            </div>\n          </div> \n          <!--Submit as Non PO Tab Ends Here -->\n\n          \n\n\n          <!-- Process outside Block Chain Tab Starts From Here -->\n        <div id=\"processOutsideBC\" class=\"tab-pane fade well well-lg actionWell\">\n            <div class=\"container action_alert\" [hidden]=\"processOutsideBC_mainTab_hidden\">\n              <form>\n                  <div class=\"form-group\">\n                    <label class=\"actionLabel\" for=\"processOutsideBC_reason2return\"> Process outside Block Chain </label>\n                  </div>\n                  <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"processOutsideBC_go2alert()\">Submit</button>\n                  </div>\n              </form>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"processOutsideBC_alertTab_hidden\">\n              <p class=\"actionLabel\"> Are you sure want to process outside Block Chain ?</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"processOutsideBC_back2mainTab()\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"processOutsideBC_go2success()\">Confirm</button>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"processOutsideBC_successTab_hidden\">\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              <p class=\"actionLabel\">Success.</p>\n            </div>\n          </div> \n          <!--Process outside Block Chain Tab Ends Here -->\n\n\n\n  \n        <!-- Buyer Delegation Tab Starts From Here -->\n        <div id=\"buyerDelegation\" class=\"tab-pane fade well well-lg actionWell\">\n          <div class=\"container\" [hidden]=\"buyerDelegation_mainTab_hidden\">\n            <form>\n              <div class=\"form-group\">\n                <div>Please search and select the buyer you want to delegate this invoice to</div><br>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control boxBCG\" placeholder=\"Info\"\n                  id=\"emaillist4buyerDelegation\" [ng4-auto-complete]=\"emailList4buyerDelegation\" \n                  [word-trigger]=\"2\" [list-length]=\"10\"filterName=\"name\" no-record-text=\"No Records Found!\" >\n                  <span class=\"input-group-addon\" (click)=\"buyerDelegation_go2alert()\"><i class=\"glyphicon glyphicon-search\"></i></span>   \n                </div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control boxBCG\" id=\"buyerDelegation_reason2return\" rows=\"3\" placeholder=\"Type your comments here\"></textarea>\n              </div>\n              <div class=\"row buttons2\">\n                  <div class=\"btn btn-primary border-0 pointer mr-1 pull-right\" (click)=\"buyerDelegation_go2alert()\">Delegate to Buyer </div>\n                  <div class=\"pointer c-w btn  cmn-btn bg-color pull-right\" >Cancel</div>\n                </div>\n              <!-- <div class=\"form-group\">\n                <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"buyerDelegation_go2alert()\">Delegate to Buyer</button>\n              </div> -->\n            </form>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"buyerDelegation_alertTab_hidden\">\n              <p class=\"actionLabel\"> Are you sure want to delegate this invoice to Buyer Name (Buyer ID) ?</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"buyerDelegation_back2mainTab()\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"buyerDelegation_go2success()\">Confirm</button>\n            </div>\n            <div class=\"container action_alert\" [hidden]=\"buyerDelegation_successTab_hidden\">\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              <p class=\"actionLabel\"> Invoice has been forwarded to Buyer Name (Buyer ID).</p>\n            </div>\n        </div>\n        <!-- Buyer Delegation Tab Ends Here -->\n  \n      </div>\n    </div>\n    <!-- Buyer Action Tab Ends Here -->\n  \n    <br>\n    <div class=\"container-fluid\">\n        <button type=\"button\" class=\"btn btn-primary pull-right\" id=\"viewPo_btn\">View PO</button>\n        <button type=\"button\" class=\"btn btn-primary pull-right\">View GRN</button>\n    </div>\n\n\n    <!-- Line Details Tab Starts From Here -->\n    <div class=\"container-fluid\">\n      <h3>Line Items</h3>    \n      <p>Error Message would come here</p> \n      <!-- <span>\n          <button type=\"button\" class=\"btn btn-primary\">View PO</button>\n          <button type=\"button\" class=\"btn btn-primary\">View GRN</button>\n      </span> -->\n      <div class=\"panel-group\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a class=\"showDetails\" data-toggle=\"collapse\" href=\"#lineDetail_collapse\" (click)=\"changeCollapseSign_LD()\"> <span class=\"glyphicon glyphicon-{{sign_LD_collapse}}\"></span> &nbsp;&nbsp;{{this.showHideLabelinLD}} </a>\n            </h4>\n          </div>\n          <div id=\"lineDetail_collapse\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              <div class=\"container-fluid\" id=\"lineScroll\">           \n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Invoice Line No</th>\n                    <th>PO Line No</th>\n                    <th>PO No</th>\n                    <th>Description</th>\n                    <th>Quantity</th>\n                    <th>Unit Price</th>\n                    <th>Total Price</th>\n                    <th>GRN Number</th>\n                    <th>Tax Code</th>\n                    <th>Actions</th> \n                    </tr>\n                  </thead>\n                  <tbody>\n                    \n                    <tr *ngFor=\"let lineitems of InvoiceData.Invoice.DCDocumentData.DC_Lines;let i=index\" id=\"lineDetail{{i}}\" contenteditable=\"false\">\n                      <td style=\"width:7%\"><input type=\"text\"   disabled class=\"Invoice_Line{{i}}\"  [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\"  style=\"width:95%;border:0px solid\" [(ngModel)]=\"lineitems.Invoice_Line\"></td>\n                      <td style=\"width:7%\"><input type=\"text\" disabled class=\"POLine{{i}}\"  [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\" style=\"width:95%;border:0px solid\" [(ngModel)]=\"lineitems.POLine\"></td>\n                      <td style=\"width:10%\"><input type=\"text\" disabled class=\"PO_Number{{i}}\"  [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\" style=\"width:95%;border:0px solid\" [(ngModel)]=\"lineitems.PO_Number\"></td>\n                      <td style=\"width:22%\"><input type=\"text\" disabled class=\"Description{{i}}\" [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\"  style=\"width:95%;border:0px solid\" [(ngModel)]=\"lineitems.Description\"></td>\n                      <td style=\"width:7%\"><input class=\"Quantity{{i}}\" OnlyNumber=\"true\" disabled type=\"text\" [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\"  style=\"width:95%;border:0px solid\"  [(ngModel)]=\"lineitems.Quantity\"></td>\n                      <td style=\"width:7%\"><input class=\"Unit_Price{{i}}\" OnlyNumber=\"true\" disabled type=\"text\" [style.background-color]=\"(i%2)==0 ? '#ffffff' : '#f3f2f1'\" style=\"width:95%;border:0px solid\" [(ngModel)]=\"lineitems.Unit_Price\"></td>\n                      <td style=\"width:9%\" contenteditable=\"false\">{{(lineitems.Quantity)*(lineitems.Unit_Price)}}</td>\n                      <td style=\"width:10%\" contenteditable=\"false\">DO00031</td> \n                      <td style=\"width:7%\" contenteditable=\"false\">Tax code</td>\n                        <td style=\"width:14%\">\n                            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\"  (click)=\"editOnLineDetail(i)\">\n                                <span class=\"glyphicon glyphicon-edit actionIconInLineDetail\"></span>\n                            </a>&nbsp;\n                            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save\" \n                            (click)=\"saveOnLineDetail(lineitems.Invoice_Line,lineitems.POLine,lineitems.PO_Number,lineitems.Description,lineitems.Quantity,lineitems.Unit_Price,(lineitems.Quantity * lineitems.Unit_Price),i)\">\n                                <span class=\"glyphicon glyphicon-save-file\"></span>\n                            </a>&nbsp;\n                            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add\" (click)=\"addOnLineDetail(i)\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </a>&nbsp;\n                            <a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" (click)=\"deleteOnLineDetail(i)\">\n                                <span class=\"glyphicon glyphicon-trash\"></span>\n                            </a>&nbsp; \n                            <a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"View PO\" (click)=\"viewpoOnLineDetail(i)\">\n                              <span class=\"glyphicon glyphicon-list-alt\"></span>\n                          </a>&nbsp;\n                          <a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"View GRN\" (click)=\"viewgrnOnLineDetail(i)\">\n                            <span class=\"glyphicon glyphicon-th-list\"></span>\n                        </a>&nbsp;\n                          \n\n                          </td>\n                    </tr>\n                   \n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div class=\"panel-footer\">Sub Total : 3600</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Line Details Tab Ends Here -->\n\n  \n    <!-- Additional Line Details Tab Starts From Here -->\n    <div class=\"container-fluid\">\n      <h3>Additional Line Items\n      </h3>\n      <p>Error Message would come here</p>\n      <div class=\"panel-group\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a class=\"showDetails\" data-toggle=\"collapse\" href=\"#add_lineDetail_collapse\" (click)=\"changeCollapseSign_ALD()\"> <span class=\"glyphicon glyphicon-{{sign_ALD_collapse}}\">  </span> &nbsp;&nbsp;{{this.showHideLabelinALD}} </a>\n            </h4>\n          </div>\n          <div id=\"add_lineDetail_collapse\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n                <div class=\"container-fluid\" id=\"addLineScroll\">           \n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>Invoice Line Number</th>\n                        <th>PO Line Number</th>\n                        <th>Description</th>\n                        <th>Quantity</th>\n                        <th>Unit Price</th>\n                        <th>Total Price</th>\n                        <th>GRN Number</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>INVI_1</td>\n                        <td>01</td>\n                        <td>Monthly SKU Processing Charges</td>\n                        <td>100.00</td>\n                        <td>12.00</td>\n                        <td>1200.00</td>\n                        <td>123456</td>\n                        <!-- <td>\n                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\">\n                              <span class=\"glyphicon glyphicon-edit actionIconInLineDetail\"></span>\n                          </a>&nbsp;\n                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save\">\n                              <span class=\"glyphicon glyphicon-save-file\"></span>\n                          </a>&nbsp;\n                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add\">\n                              <span class=\"glyphicon glyphicon-plus\"></span>\n                          </a>&nbsp;\n                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\">\n                              <span class=\"glyphicon glyphicon-trash\"></span>\n                          </a>&nbsp;      \n                        </td> -->\n                      </tr>\n                      <tr>\n                          <td>INVI_1</td>\n                          <td>01</td>\n                          <td>Monthly SKU Processing Charges</td>\n                          <td>100.00</td>\n                          <td>12.00</td>\n                          <td>1200.00</td>\n                          <td>123456</td>\n                          <td></td>\n                      </tr>\n                      <tr>\n                          <td>INVI_1</td>\n                          <td>01</td>\n                          <td>Monthly SKU Processing Charges</td>\n                          <td>100.00</td>\n                          <td>12.00</td>\n                          <td>1200.00</td>\n                          <td>123456</td>\n                          <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n            </div>\n            <div class=\"panel-footer\">Sub Total : 3600 </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Additional Line Details Tab Ends Here -->\n  \n    <!-- History Tab Starts From Here -->\n    <div class=\"container-fluid\">\n      <h3>History</h3>\n      <ul class=\"nav nav-pills\">\n        <li class=\"active\"><a data-toggle=\"pill\" href=\"#invHistory\">Invoice History</a></li>\n        <li><a data-toggle=\"pill\" href=\"#lineItemHistory\">Line Item History</a></li>\n        <li><a data-toggle=\"pill\" href=\"#addlineItemHistory\">Comments</a></li>\n      </ul>\n      \n      <div class=\"tab-content\">\n  \n        <!-- Invoice History Tab Starts From Here -->\n        <div id=\"invHistory\" class=\"tab-pane fade in active well actionWell\">\n          <div class=\"container-fluid historyScroll\">            \n              <table class=\"table\">\n                <thead>\n                  <tr> \n                    <th>Status</th>\n                    <th>Date &amp; Time Stamp </th>\n                    <th>User ID</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let invHistory of InvoiceData.InvoiceStatus\">\n                    <td>{{invHistory.Status}}</td>\n                    <td>{{invHistory.Time}}</td>\n                    <td>{{invHistory.UserId}}</td>\n                  </tr> \n                </tbody>\n              </table>\n            </div>\n        </div>\n        <!-- Invoice History Tab Ends Here -->\n  \n        <!-- Line Item History Tab Starts From Here -->\n        <div id=\"lineItemHistory\" class=\"tab-pane fade well actionWell\">\n            <div class=\"container-fluid historyScroll\">            \n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Description</th>\n                      <th>Date &amp; Time Stamp </th>\n                      <th>User ID</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>Deleted LineItem with Quantity 100.00 ~ Unit Price 12.00 ~ Total Price 1200.00</td>\n                      <td>2018-03-26 12:37:22.786476 +0000 UTC</td>\n                      <td>test_user9</td>\n                    </tr>\n                    <tr>\n                      <td>Added LineItem with Quantity 100.00 ~ Unit Price 12.00 ~ Total Price 1200.00</td>\n                      <td>2018-03-26 12:37:22.786476 +0000 UTC</td>\n                      <td>test_user9</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n        <!-- Line Item History Tab Ends Here -->\n  \n        <!-- Comments Tab Starts From Here -->\n        <div id=\"addlineItemHistory\" class=\"tab-pane fade well actionWell\">\n          <div class=\"container-fluid historyScroll\"> \n            <table class=\"table table-hover\">\n                <tbody>\n                  <tr>\n                      <div class=\"media\">\n                          <div class=\"media-left\">\n                            <!-- <img src=\"img_avatar1.png\" class=\"media-object\" style=\"width:60px\"> -->\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h4 class=\"media-heading\">test_user9</h4>\n                            <p>com1# Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                          </div>\n                        </div> \n                  </tr>\n                  <tr>\n                      <div class=\"media\">\n                          <div class=\"media-left\">\n                            <!-- <img src=\"img_avatar1.png\" class=\"media-object\" style=\"width:60px\"> -->\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h4 class=\"media-heading\">test_user5</h4>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                          </div>\n                        </div> \n                  </tr>\n                  <tr>\n                      <div class=\"media\">\n                          <div class=\"media-left\">\n                            <!-- <img src=\"img_avatar1.png\" class=\"media-object\" style=\"width:60px\"> -->\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h4 class=\"media-heading\">test_user9</h4>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                          </div>\n                        </div> \n                  </tr>\n                  <tr>\n                      <div class=\"media\">\n                          <div class=\"media-left\">\n                            <!-- <img src=\"img_avatar1.png\" class=\"media-object\" style=\"width:60px\"> -->\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h4 class=\"media-heading\">test_user9</h4>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                          </div>\n                        </div> \n                  </tr>\n                  <tr>\n                      <div class=\"media\">\n                          <div class=\"media-left\">\n                            <!-- <img src=\"img_avatar1.png\" class=\"media-object\" style=\"width:60px\"> -->\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h4 class=\"media-heading\">test_user9</h4>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                          </div>\n                        </div> \n                  </tr>\n                </tbody>\n              </table>\n            </div>\n        </div>\n        <!-- Comments Tab Ends Here -->\n  \n      </div>\n    </div>\n    <!-- History Tab Ends Here -->\n  \n    <!-- Download Invoice Tab Starts From Here -->\n    <div class=\"container-fluid\">\n        <h3>Download Invoice</h3>\n        <div class=\"well actionWell\">\n          <a href=\"#\">\n              <span class=\"glyphicon glyphicon-save-file\" id=\"downloadInvIcon\"></span>\n          </a>\n          <label>Q2226MP.tif</label>\n        </div>\n      </div>\n    <!-- Download Invoice Tab Ends Here -->\n  \n     \n  </div>\n  <!-- Main Div for Spacing, margin and style Starts From Here -->\n  \n  "

/***/ }),

/***/ "../../../../../src/app/invoice-detail/invoice-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_invoice__ = __webpack_require__("../../../../../src/app/service/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceDetailComponent = (function () {
    function InvoiceDetailComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.sign_LD_collapse = 'plus';
        this.sign_ALD_collapse = 'plus';
        this.showHideLabelinLD = 'Show Details';
        this.showHideLabelinALD = 'Show Details';
        this.showHideVendorTab = 'Hide';
        this.showHideInvoiceTable = 'Hide';
        this.vmdProcess_mainTab_hidden = false;
        this.vmdProcess_alertTab_hidden = true;
        this.vmdProcess_successTab_hidden = true;
        this.rejectInv_mainTab_hidden = false;
        this.rejectInv_alertTab_hidden = true;
        this.rejectInv_successTab_hidden = true;
        this.return2Ap_mainTab_hidden = false;
        this.return2Ap_alertTab_hidden = true;
        this.return2Ap_successTab_hidden = true;
        this.invAction_mainTab_hidden = false;
        this.invAction_alertTab_hidden = true;
        this.invAction_successTab_hidden = true;
        this.fwd2Buyer_mainTab_hidden = false;
        this.fwd2Buyer_alertTab_hidden = true;
        this.fwd2Buyer_successTab_hidden = true;
        this.updateCompCode_mainTab_hidden = false;
        this.updateCompCode_alertTab_hidden = true;
        this.updateCompCode_successTab_hidden = true;
        this.remitTovalidation_mainTab_hidden = false;
        this.remitTovalidation_alertTab_hidden = true;
        this.remitTovalidation_successTab_hidden = true;
        this.reportability_mainTab_hidden = false;
        this.reportability_alertTab_hidden = true;
        this.reportability_successTab_hidden = true;
        this.npnpListAddition_mainTab_hidden = false;
        this.npnpListAddition_alertTab_hidden = true;
        this.npnpListAddition_successTab_hidden = true;
        this.submitAsNonPO_mainTab_hidden = false;
        this.submitAsNonPO_alertTab_hidden = true;
        this.submitAsNonPO_successTab_hidden = true;
        this.processOutsideBC_mainTab_hidden = false;
        this.processOutsideBC_alertTab_hidden = true;
        this.processOutsideBC_successTab_hidden = true;
        this.buyerDelegation_mainTab_hidden = false;
        this.buyerDelegation_alertTab_hidden = true;
        this.buyerDelegation_successTab_hidden = true;
        this.status = "AWAITING IBM AP ACTION";
        this.reason = "Vendor not found / Modification";
    }
    InvoiceDetailComponent.prototype.ngOnInit = function () {
        // Dynamically to load actions
        this.enableActiontabs();
        this.getInvoice();
    };
    InvoiceDetailComponent.prototype.getInvoice = function () {
        var _this = this;
        this.invoiceService.Getinvoice().subscribe(function (result) {
            _this.InvoiceData = result.json().Transaction.Result;
            _this.InvoiceLineDetails = result.json().Transaction.Result.Invoice.DCDocumentData.DC_Lines;
            console.log("invoice data");
            console.log(_this.InvoiceData);
            console.log(_this.InvoiceLineDetails);
        }, function (error) { return console.error(error); });
    };
    InvoiceDetailComponent.prototype.enableActiontabs = function () {
        var _this = this;
        this.invoiceService.Findactionfilename().subscribe(function (result) {
            _this.Mappingactions = result.json().CONFIG.RECORDS;
            var filterRecords = _this.findActionfilename(_this.Mappingactions, _this.status, _this.reason);
            if (filterRecords.length > 0)
                _this.findActiontabs(filterRecords[0].FILENAME);
        }, function (error) { return console.error(error); });
    };
    InvoiceDetailComponent.prototype.findActiontabs = function (fileName) {
        var _this = this;
        this.invoiceService.Dynamictabdetails(fileName).subscribe(function (result) {
            _this.mappedTabs = result.json().CONFIG.ENABLE;
            console.log(_this.mappedTabs);
            for (var i = 0; i < _this.mappedTabs.length; i++) {
                document.getElementById(_this.mappedTabs[i].id).style.display = _this.mappedTabs[i].style;
                document.getElementById(_this.mappedTabs[i].id + 'Main').style.display = _this.mappedTabs[i].style;
                if (_this.mappedTabs[i].activeclass.length > 0) {
                    var elementLI = document.getElementById(_this.mappedTabs[i].id + 'Main');
                    var elementDiv = document.getElementById(_this.mappedTabs[i].id);
                    elementLI.className = _this.mappedTabs[i].activeclass;
                    elementDiv.className = _this.mappedTabs[i].displayclass;
                }
            }
        }, function (error) { return console.error(error); });
    };
    InvoiceDetailComponent.prototype.findActionfilename = function (data, Status, Reason) {
        return data.filter(function (e) { return e.STATUS === Status && e.REASON === Reason; });
    };
    InvoiceDetailComponent.prototype.vmdProcess_go2alert = function () {
        this.vmdProcess_mainTab_hidden = true;
        this.vmdProcess_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.vmdProcess_back2mainTab = function () {
        this.vmdProcess_mainTab_hidden = false;
        this.vmdProcess_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.vmdProcess_go2success = function () {
        this.vmdProcess_mainTab_hidden = true;
        this.vmdProcess_alertTab_hidden = true;
        this.vmdProcess_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.rejectInv_go2alert = function () {
        this.rejectInv_mainTab_hidden = true;
        this.rejectInv_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.rejectInv_back2mainTab = function () {
        this.rejectInv_mainTab_hidden = false;
        this.rejectInv_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.rejectInv_go2success = function () {
        this.rejectInv_mainTab_hidden = true;
        this.rejectInv_alertTab_hidden = true;
        this.rejectInv_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.return2Ap_go2alert = function () {
        this.return2Ap_mainTab_hidden = true;
        this.return2Ap_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.return2Ap_back2mainTab = function () {
        this.return2Ap_mainTab_hidden = false;
        this.return2Ap_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.return2Ap_go2success = function () {
        this.return2Ap_mainTab_hidden = true;
        this.return2Ap_alertTab_hidden = true;
        this.return2Ap_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.reportability_go2alert = function () {
        this.reportability_mainTab_hidden = true;
        this.reportability_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.reportability_back2mainTab = function () {
        this.reportability_mainTab_hidden = false;
        this.reportability_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.reportability_go2success = function () {
        this.reportability_mainTab_hidden = true;
        this.reportability_alertTab_hidden = true;
        this.reportability_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.invAction_go2alert = function () {
        this.invAction_mainTab_hidden = true;
        this.invAction_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.invAction_back2mainTab = function () {
        this.invAction_mainTab_hidden = false;
        this.invAction_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.invAction_go2success = function () {
        this.invAction_mainTab_hidden = true;
        this.invAction_alertTab_hidden = true;
        this.invAction_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.fwd2Buyer_go2alert = function () {
        this.fwd2Buyer_mainTab_hidden = true;
        this.fwd2Buyer_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.fwd2Buyer_back2mainTab = function () {
        this.fwd2Buyer_mainTab_hidden = false;
        this.fwd2Buyer_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.fwd2Buyer_go2success = function () {
        this.fwd2Buyer_mainTab_hidden = true;
        this.fwd2Buyer_alertTab_hidden = true;
        this.fwd2Buyer_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.updateCompCode_go2alert = function () {
        this.updateCompCode_mainTab_hidden = true;
        this.updateCompCode_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.updateCompCode_back2mainTab = function () {
        this.updateCompCode_mainTab_hidden = false;
        this.updateCompCode_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.updateCompCode_go2success = function () {
        this.updateCompCode_mainTab_hidden = true;
        this.updateCompCode_alertTab_hidden = true;
        this.updateCompCode_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.remitTovalidation_go2alert = function () {
        this.remitTovalidation_mainTab_hidden = true;
        this.remitTovalidation_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.remitTovalidation_back2mainTab = function () {
        this.remitTovalidation_mainTab_hidden = false;
        this.remitTovalidation_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.remitTovalidation_go2success = function () {
        this.remitTovalidation_mainTab_hidden = true;
        this.remitTovalidation_alertTab_hidden = true;
        this.remitTovalidation_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.npnpListAddition_go2alert = function () {
        this.npnpListAddition_mainTab_hidden = true;
        this.npnpListAddition_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.npnpListAddition_back2mainTab = function () {
        this.npnpListAddition_mainTab_hidden = false;
        this.npnpListAddition_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.npnpListAddition_go2success = function () {
        this.npnpListAddition_mainTab_hidden = true;
        this.npnpListAddition_alertTab_hidden = true;
        this.npnpListAddition_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.submitAsNonPO_go2alert = function () {
        this.submitAsNonPO_mainTab_hidden = true;
        this.submitAsNonPO_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.submitAsNonPO_back2mainTab = function () {
        this.submitAsNonPO_mainTab_hidden = false;
        this.submitAsNonPO_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.submitAsNonPO_go2success = function () {
        this.submitAsNonPO_mainTab_hidden = true;
        this.submitAsNonPO_alertTab_hidden = true;
        this.submitAsNonPO_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.processOutsideBC_go2alert = function () {
        this.processOutsideBC_mainTab_hidden = true;
        this.processOutsideBC_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.processOutsideBC_back2mainTab = function () {
        this.processOutsideBC_mainTab_hidden = false;
        this.processOutsideBC_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.processOutsideBC_go2success = function () {
        this.processOutsideBC_mainTab_hidden = true;
        this.processOutsideBC_alertTab_hidden = true;
        this.processOutsideBC_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.buyerDelegation_go2alert = function () {
        this.buyerDelegation_mainTab_hidden = true;
        this.buyerDelegation_alertTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.buyerDelegation_back2mainTab = function () {
        this.buyerDelegation_mainTab_hidden = false;
        this.buyerDelegation_alertTab_hidden = true;
    };
    InvoiceDetailComponent.prototype.buyerDelegation_go2success = function () {
        this.buyerDelegation_mainTab_hidden = true;
        this.buyerDelegation_alertTab_hidden = true;
        this.buyerDelegation_successTab_hidden = false;
    };
    InvoiceDetailComponent.prototype.changeCollapseSign_LD = function () {
        if (this.sign_LD_collapse == 'plus') {
            this.sign_LD_collapse = 'minus';
            this.showHideLabelinLD = "Hide Details";
        }
        else {
            this.sign_LD_collapse = 'plus';
            this.showHideLabelinLD = "Show Details";
        }
    };
    InvoiceDetailComponent.prototype.changeCollapseSign_ALD = function () {
        if (this.sign_ALD_collapse == 'plus') {
            this.sign_ALD_collapse = 'minus';
            this.showHideLabelinALD = "Hide Details";
        }
        else {
            this.sign_ALD_collapse = 'plus';
            this.showHideLabelinALD = "Show Details";
        }
    };
    InvoiceDetailComponent.prototype.selectVendor = function () {
        this.showHideVendorTab = 'Show';
    };
    InvoiceDetailComponent.prototype.invoice_search = function () {
        this.showHideInvoiceTable = 'Show';
    };
    InvoiceDetailComponent.prototype.editOnLineDetail = function (index) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Invoice_Line" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".POLine" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".PO_Number" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Description" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Quantity" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Unit_Price" + index + "").prop('disabled', false);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Invoice_Line" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".POLine" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".PO_Number" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Description" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Quantity" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Unit_Price" + index + "").css("border", "1px solid #004266");
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#lineDetail' + index + '').prop('contenteditable', true);
    };
    InvoiceDetailComponent.prototype.saveOnLineDetail = function (inv_line, po_line, po_no, desc, qty, unit_prc, total_amt, index) {
        //this.addrowLineItem=[];
        console.log("checking  edited data=======================>");
        console.log(inv_line, po_line, po_no, desc, qty, unit_prc, total_amt, index);
        var totalAmount = String(+qty * +unit_prc);
        var totalAmount1 = parseInt.apply(totalAmount);
        console.log("invoice structure");
        console.log(this.InvoiceData.Invoice.DCDocumentData.DC_Lines);
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.Invoice_Line = inv_line;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.POLine = po_line;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.PO_Number = po_no;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.Description = desc;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.Quantity = qty;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.Unit_Price = unit_prc;
        this.InvoiceData.Invoice.DCDocumentData.DC_Lines.Amount = totalAmount;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Invoice_Line" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".POLine" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".PO_Number" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Description" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Quantity" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Unit_Price" + index + "").prop('disabled', true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Invoice_Line" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".POLine" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".PO_Number" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Description" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Quantity" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".Unit_Price" + index + "").css("border", "0px solid");
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#lineDetail').prop('contenteditable', false);
        console.log("after save invoice structure");
        console.log(this.InvoiceData.Invoice.DCDocumentData.DC_Lines);
    };
    InvoiceDetailComponent.prototype.addOnLineDetail = function () {
    };
    return InvoiceDetailComponent;
}());
InvoiceDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invoice-detail',
        template: __webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]) === "function" && _a || Object])
], InvoiceDetailComponent);

var _a;
//# sourceMappingURL=invoice-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoices/invoices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr:nth-child(even) {background-color: #e7faff;}\r\n/* tr:nth-child(2n+1) {background-color: white;} */\r\ntr:nth-child(1) {\r\n    background-color: #1a4360;\r\n    color:white;\r\n}\r\n.table-striped tbody tr:nth-of-type(2n+1) {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.row.rowLabel1{\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.row.rowLabel2{\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.row.rowLabel3{\r\n    margin-bottom: 8%;\r\n}\r\n\r\n.btn.exportDropdown{\r\n    width: 100%;\r\n    text-align: left;\r\n    background-color : #e4e9f0;\r\n    color : #5f6d77;\r\n}\r\n\r\n.btn .caret {\r\n    margin-left: 20%;\r\n}\r\n\r\n.open>.dropdown-toggle.btn-default.focus, .open>.dropdown-toggle.btn-default:focus, .open>.dropdown-toggle.btn-default:hover {\r\n    background-color : #e4e9f0;\r\n    color : #5f6d77;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoices/invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid detailPageSpacing\">\n  \n  <h3>Invoices</h3>\n\n  <div class=\"row rowLabel1\">\n      <div class=\"col-sm-9\">\n          <form>\n              <div class=\"form-group\">\n                <input class=\"form-control input-lg\" id=\"inputlg\" type=\"text\" placeholder=\"Search anything\" name=\"search\" [(ngModel)]=\"filter\">\n              </div>\n            </form>\n      </div>\n      <!-- <div class=\"col-sm-2\">\n          <div class=\"dropdown\">\n              <button class=\"btn btn-primary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Dropdown Example\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">HTML</a></li>\n                <li><a href=\"#\">CSS</a></li>\n                <li><a href=\"#\">JavaScript</a></li>\n              </ul>\n            </div>\n      </div> -->\n      <div class=\"col-sm-3\">\n          <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Advance Search</button>\n      </div>\n    </div>\n  \n\n      <div class=\"row rowLabel2\">\n              <div class=\"col-sm-12\">\n\n                      <table class=\"table table-striped\">\n                              <thead>\n                                <tr>\n                                  <th (click)=\"sort('Invoice_No')\">Invoice No.\n                                    <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Invoice_No'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                  </th>\n                                  <th (click)=\"sort('BCI_ID')\">BCI ID\n                                      <span class=\"glyphicon sort-icon\" *ngIf=\"key =='BCI_ID'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                    </th>\n                                    <th (click)=\"sort('Invoice_Amount')\">Invoice Amount\n                                        <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Invoice_Amount'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                      </th>\n                                  <th (click)=\"sort('Invoice_Date')\">Invoice date\n                                    <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Invoice_Date'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                  </th>\n                                  <th (click)=\"sort('Vendor')\">Vendor\n                                        <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Vendor'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                      </th>\n                                      <th (click)=\"sort('Vendor_ID')\">Vendor ID\n                                        <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Vendor_ID'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                      </th>\n                                          <th (click)=\"sort('PO_Number')\">PO Number\n                                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='PO_Number'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                          </th>\n                                          <th (click)=\"sort('Due_Date')\">Due Date\n                                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Due_Date'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                              </th>\n                                              <th (click)=\"sort('Amount')\">Amount\n                                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Amount'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                              </th>\n                                              <th (click)=\"sort('TA_Time')\">TA Time\n                                                  <span class=\"glyphicon sort-icon\" *ngIf=\"key =='TA_Time'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                                </th>\n                                              <th (click)=\"sort('Status')\">Status\n                                                    <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                                  </th>\n                                                  <th (click)=\"sort('Reason')\">Reason\n                                                    <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Reason'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                                  </th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let invoice of AllInvoices | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n                                  <td><a id=\"invNo\" (click)=\"routeToInvDetail(invoice.InvoiceNo,invoice.BCID)\"> {{invoice.InvoiceNo}}</a></td>\n                                  <td>{{invoice.BCID}}</td>\n                                    <td>{{invoice.Inoviceamount}}</td>\n                                    <td>{{invoice.Invoicedate}}</td>\n                                    <td>{{invoice.Vendor}}</td>\n                                    <td>{{invoice.VendorID}}</td>\n                                    <td>{{invoice.PO_Number}}</td>\n                                    <td>{{invoice.Duedate}}</td>\n                                    <td>{{invoice.Amount}}</td>\n                                    <td>{{invoice.TATime}}</td>\n                                    <td>{{invoice.Status}}</td>\n                                    <td>{{invoice.Reasoncode}}</td>\n                                </tr>\n                              </tbody>\n                              \n                            </table>\n\n                      \n              </div>\n      </div>\n\n      <div class=\"row rowLabel3\">\n          <div class=\"col-sm-4\">\n              <div class=\"row\">\n                      <div class=\"col-sm-9\">\n                              <div class=\"dropdown\">\n                                      <button class=\"btn btn-default dropdown-toggle exportDropdown\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\" >Export the above page as \n                                      <span class=\"caret\"></span></button>\n                                      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n                                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">CSV</a></li>\n                                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Excel</a></li>\n                                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">PDF</a></li>\n                                      </ul>\n                              </div>\n          \n                      </div>\n                      <div class=\"col-sm-3\">\n                          <button type=\"button\" class=\"btn btn-primary btn-block\">Export</button>\n                      </div>\n              </div>\n                 \n          </div>\n          <div class=\"col-sm-4\">\n\n          </div>\n          <div class=\"col-sm-4\">\n                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n      </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/invoices/invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_invoice__ = __webpack_require__("../../../../../src/app/service/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoicesComponent = (function () {
    function InvoicesComponent(invoiceService, router) {
        var _this = this;
        this.invoiceService = invoiceService;
        this.router = router;
        this.key = 'Invoice_No';
        this.reverse = false;
        this.p = 1;
        this.invoiceService.Allinvoices().subscribe(function (result) {
            _this.AllInvoices = result.json().Transaction.Result;
            console.log(_this.AllInvoices);
        }, function (error) { return console.error(error); });
    }
    InvoicesComponent.prototype.ngOnInit = function () {
    };
    InvoicesComponent.prototype.routeToInvDetail = function (invNo, bciID) {
        this.router.navigateByUrl('Invoicedetails');
    };
    InvoicesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return InvoicesComponent;
}());
InvoicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invoices',
        template: __webpack_require__("../../../../../src/app/invoices/invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoices/invoices.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], InvoicesComponent);

var _a, _b;
//# sourceMappingURL=invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileCenter{\r\n    text-align: center;\r\n}\r\n\r\n.profileLabel{\r\n    font-size: 20px;\r\n    margin-top:2%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.leftAlign{\r\n    text-align: left;\r\n    color:#989898;\r\n}\r\n\r\n.rightAlign{\r\n    text-align: right;\r\n}\r\n\r\n.centerAlign{\r\n    text-align: center;\r\n}\r\n\r\n.well.profileWell{\r\n    background-color: #fff;\r\n    margin:3%;\r\n    \r\n}\r\n\r\n.well.profileWell2{\r\n    background-color: #fff;\r\n    margin-left:3%;\r\n    margin-right:3%;\r\n    \r\n}\r\n\r\n.well.bluecolor{\r\n    height: 813px;\r\n    background-color: #285f8b;\r\n}\r\n\r\n.profileRightWell{\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n .col-sm-3, .col-sm-9{\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.headerFont{\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n.inputLabel{\r\n    background-color : #e8f0f7\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"container-fluid well centerAlign bluecolor\">\n            <form>\n              <br>\n              <div class=\"form-group\">\n                  <img src=\"https://www.ibm.com/standards/web/images/circleimage_2.png\" class=\"rounded-circle img\" alt=\"Cinque Terre\"><br>\n                </div>\n                <br>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">User ID</p>\n                  <label class=\"headerFont\">[B@71803f971649414288</label>\n                </div>\n                <br>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">User Name</p>\n                  <label class=\"headerFont\">[B@71803f971649414288</label>\n                </div>\n                <br>\n                <div class=\"form-group\">\n                  <p for=\"usr\" class=\"headerFont\">Email</p>\n                  <label class=\"headerFont\">[B@71803f971649414288</label>\n                </div>\n            </form>\n          </div>\n  \n    </div>\n    <div class=\"col-sm-9 profileRightWell\">\n      <div class=\"container-fluid\">\n          <div class=\"well profileCenter profileWell\">\n              \n              <form>\n                <div class=\"form-group\">\n                  <label for=\"usr\" class=\"profileLabel\">Notification Email:</label>\n                  <!-- <input type=\"text\" class=\"form-control\" id=\"notificationEmail\"> -->\n                  <div class=\"row\">\n                    <div class=\"col-sm-3\" >\n                      \n                    </div>\n                    <div class=\"col-sm-6\" >\n                      <input type=\"text\" class=\"form-control inputLabel\" placeholder=\"Enter Email here\">\n                    </div>\n                    <div class=\"col-sm-6\" >\n                      \n                    </div>\n                    </div>\n                </div>\n        \n  \n                <div class=\"form-group\">\n                  <label for=\"pwd\" class=\"profileLabel\">Select Notification Option</label>\n  \n                  <div class=\"row\">\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                    <div class=\"col-sm-3\" >\n                      <p class=\"leftAlign\">Invoice received in BCI</p>\n                    </div>\n                    <div class=\"col-sm-1\" >\n                      <input type=\"checkbox\" name=\"vehicle\" value=\"Bike\">\n                    </div>\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                  </div>\n  \n                  <div class=\"row\">\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                    <div class=\"col-sm-3\" >\n                      <p class=\"leftAlign\">Invoice in Progress</p>\n                    </div>\n                    <div class=\"col-sm-1\" >\n                      <input type=\"checkbox\" name=\"vehicle\" value=\"Bike\">\n                    </div>\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                  </div>\n  \n                  <div class=\"row\">\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                    <div class=\"col-sm-3\" >\n                      <p class=\"leftAlign\">Invoices Complete</p>\n                    </div>\n                    <div class=\"col-sm-1\" >\n                      <input type=\"checkbox\" name=\"vehicle\" value=\"Bike\">\n                    </div>\n                    <div class=\"col-sm-4\" >\n                      \n                    </div>\n                  </div>\n                  </div>\n  \n                  <div class=\"form-group\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6\" >\n                        \n                      </div>\n                      <div class=\"col-sm-3\" >\n                          <button type=\"button\" class=\"btn btn-default\" >Reset</button>\n                          <button type=\"button\" class=\"btn btn-primary\">Update</button>\n                      </div>\n                      \n                      <div class=\"col-sm-3\" >\n                        \n                      </div>\n                    </div>\n                                   \n                </div>\n              </form>\n            </div>\n        \n      </div>\n  \n      <div class=\"container-fluid\">\n          <div class=\"well  profileCenter profileWell2\">\n            \n              <form>\n                <div class=\"form-group\">\n                  <label for=\"usr\" class=\"profileLabel\">Reset Password</label>\n                  <!-- <input type=\"text\" class=\"form-control\" id=\"notificationEmail\"> -->\n                  <div class=\"row\">\n                    <div class=\"col-sm-3\" >\n                      \n                    </div>\n                    <div class=\"col-sm-6\" >\n                      <input type=\"text\" class=\"form-control inputLabel\" placeholder=\"New Password\">\n                    </div>\n                    <div class=\"col-sm-6\" >\n                      \n                    </div>\n                    </div>\n                    </div>\n                    <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3\" >\n                          \n                        </div>\n                        <div class=\"col-sm-6\" >\n                          <input type=\"text\" class=\"form-control inputLabel\" placeholder=\"Confirm Password\">\n                        </div>\n                        <div class=\"col-sm-6\" >\n                          \n                        </div>\n                        </div>\n                     </div>\n  \n                     <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\" >\n                              \n                            </div>\n                            <div class=\"col-sm-6\" >\n                              <p class=\"leftAlign\">! Your password must contain atleast 8 characters, \n                                one uppercase, one lowercase, one number, and one symbol. \n                                The total length of the password cannot exceed 17 characters</p>\n                            </div>\n                            <div class=\"col-sm-6\" >\n                              \n                            </div>\n                            </div>\n                         </div>\n  \n                         <div class=\"form-group\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-5\" >\n                                  \n                                </div>\n                                <div class=\"col-sm-4\" >\n                                    <button type=\"button\" class=\"btn btn-default\" >Cancel</button>\n                                    <button type=\"button\" class=\"btn btn-primary\">Update Password</button>\n                                </div>\n                                <div class=\"col-sm-3\" >\n                                  \n                                </div>\n                                </div>\n                             </div>\n        \n              </form>\n            </div>\n          </div>\n      \n  \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_invoice__ = __webpack_require__("../../../../../src/app/service/invoice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(invoiceService) {
        this.invoiceService = invoiceService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_invoice__["a" /* Invoiceservices */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/route/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_detail_invoice_detail_component__ = __webpack_require__("../../../../../src/app/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices_invoices_component__ = __webpack_require__("../../../../../src/app/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");




var AppRoutes = [
    {
        path: 'Dashboard',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'Profile',
        component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'Invoice',
        component: __WEBPACK_IMPORTED_MODULE_2__invoices_invoices_component__["a" /* InvoicesComponent */]
    },
    {
        path: 'Invoicedetails',
        component: __WEBPACK_IMPORTED_MODULE_1__invoice_detail_invoice_detail_component__["a" /* InvoiceDetailComponent */]
    }
];
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../../../../src/app/service/invoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoiceservices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Invoiceservices = (function () {
    function Invoiceservices(http) {
        this.http = http;
        this.headerElements = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({
            headers: this.headerElements
        });
        // URL has to be defined in the config file
        this.baseURL = "http://localhost:8000/api/";
    }
    Invoiceservices.prototype.Findactionfilename = function () {
        return this.http.get('../assets/config/ap_dynamic_actions.json');
    };
    Invoiceservices.prototype.Dynamictabdetails = function (fileName) {
        return this.http.get('../assets/config/' + fileName);
    };
    Invoiceservices.prototype.Allinvoices = function () {
        // return this.http.post(this.baseURL + "Allinvoices", bodyRequest, this.headerOptions);
        return this.http.get(this.baseURL + "Allinvoices");
    };
    Invoiceservices.prototype.Getinvoice = function () {
        // return this.http.post(this.baseURL + "Getinvoice", bodyRequest, this.headerOptions);
        return this.http.get(this.baseURL + "Getinvoice");
    };
    Invoiceservices.prototype.Submitinvoice = function (bodyRequest) {
        return this.http.post(this.baseURL + "Submitinvoice", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Searchinvoices = function (bodyRequest) {
        return this.http.post(this.baseURL + "Searchinvoices", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Goodreciptnotes = function (bodyRequest) {
        return this.http.post(this.baseURL + "Goodreciptnotes", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.PurchaseOrders = function (bodyRequest) {
        return this.http.post(this.baseURL + "PurchaseOrders", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Dashboard = function (bodyRequest) {
        return this.http.post(this.baseURL + "Dashboard", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Profileemail = function (bodyRequest) {
        return this.http.post(this.baseURL + "Profileemail", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Submitprofileemail = function (bodyRequest) {
        return this.http.post(this.baseURL + "Submitprofileemail", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Notification = function (bodyRequest) {
        return this.http.post(this.baseURL + "Notification", bodyRequest, this.headerOptions);
    };
    Invoiceservices.prototype.Submitnotification = function (bodyRequest) {
        return this.http.post(this.baseURL + "Notification", bodyRequest, this.headerOptions);
    };
    return Invoiceservices;
}());
Invoiceservices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Invoiceservices);

var _a;
//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map