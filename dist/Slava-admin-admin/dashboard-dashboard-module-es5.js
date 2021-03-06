(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "./src/app/dashboard/dashboard-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ecommerce_v1_ecommerce_v1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ecommerce-v1/ecommerce-v1.component */
      "./src/app/dashboard/ecommerce-v1/ecommerce-v1.component.ts");
      /* harmony import */


      var _ecommerce_v2_ecommerce_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ecommerce-v2/ecommerce-v2.component */
      "./src/app/dashboard/ecommerce-v2/ecommerce-v2.component.ts");
      /* harmony import */


      var _human_resources_human_resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./human-resources/human-resources.component */
      "./src/app/dashboard/human-resources/human-resources.component.ts");
      /* harmony import */


      var _digital_marketing_digital_marketing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./digital-marketing/digital-marketing.component */
      "./src/app/dashboard/digital-marketing/digital-marketing.component.ts");
      /* harmony import */


      var _property_listing_property_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./property-listing/property-listing.component */
      "./src/app/dashboard/property-listing/property-listing.component.ts");
      /* harmony import */


      var _service_support_service_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service-support/service-support.component */
      "./src/app/dashboard/service-support/service-support.component.ts");
      /* harmony import */


      var _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./healthcare/healthcare.component */
      "./src/app/dashboard/healthcare/healthcare.component.ts");
      /* harmony import */


      var _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./logistics/logistics.component */
      "./src/app/dashboard/logistics/logistics.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'ecommerce-v1',
          component: _ecommerce_v1_ecommerce_v1_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceV1Component"],
          data: {
            title: 'E-Commerce V1'
          }
        }, {
          path: 'ecommerce-v2',
          component: _ecommerce_v2_ecommerce_v2_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceV2Component"],
          data: {
            title: 'E-Commerce V2'
          }
        }, {
          path: 'human-resources',
          component: _human_resources_human_resources_component__WEBPACK_IMPORTED_MODULE_4__["HumanResourcesComponent"],
          data: {
            title: 'Human Resources'
          }
        }, {
          path: 'digital-marketing',
          component: _digital_marketing_digital_marketing_component__WEBPACK_IMPORTED_MODULE_5__["DigitalMarketingComponent"],
          data: {
            title: 'Digital Marketing'
          }
        }, {
          path: 'property-listing',
          component: _property_listing_property_listing_component__WEBPACK_IMPORTED_MODULE_6__["PropertyListingComponent"],
          data: {
            title: 'Property Listing'
          }
        }, {
          path: 'service-support',
          component: _service_support_service_support_component__WEBPACK_IMPORTED_MODULE_7__["ServiceSupportComponent"],
          data: {
            title: 'Service Support'
          }
        }, {
          path: 'healthcare',
          component: _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_8__["HealthcareComponent"],
          data: {
            title: 'healthcare'
          }
        }, {
          path: 'logistics',
          component: _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_9__["LogisticsComponent"],
          data: {
            title: 'Logistics'
          }
        }]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/dashboard.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var _ecommerce_v1_ecommerce_v1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ecommerce-v1/ecommerce-v1.component */
      "./src/app/dashboard/ecommerce-v1/ecommerce-v1.component.ts");
      /* harmony import */


      var _ecommerce_v2_ecommerce_v2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ecommerce-v2/ecommerce-v2.component */
      "./src/app/dashboard/ecommerce-v2/ecommerce-v2.component.ts");
      /* harmony import */


      var _human_resources_human_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./human-resources/human-resources.component */
      "./src/app/dashboard/human-resources/human-resources.component.ts");
      /* harmony import */


      var _digital_marketing_digital_marketing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./digital-marketing/digital-marketing.component */
      "./src/app/dashboard/digital-marketing/digital-marketing.component.ts");
      /* harmony import */


      var _property_listing_property_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./property-listing/property-listing.component */
      "./src/app/dashboard/property-listing/property-listing.component.ts");
      /* harmony import */


      var _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./logistics/logistics.component */
      "./src/app/dashboard/logistics/logistics.component.ts");
      /* harmony import */


      var _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./healthcare/healthcare.component */
      "./src/app/dashboard/healthcare/healthcare.component.ts");
      /* harmony import */


      var _service_support_service_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./service-support/service-support.component */
      "./src/app/dashboard/service-support/service-support.component.ts");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, {
          declarations: [_ecommerce_v1_ecommerce_v1_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceV1Component"], _ecommerce_v2_ecommerce_v2_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceV2Component"], _human_resources_human_resources_component__WEBPACK_IMPORTED_MODULE_8__["HumanResourcesComponent"], _digital_marketing_digital_marketing_component__WEBPACK_IMPORTED_MODULE_9__["DigitalMarketingComponent"], _property_listing_property_listing_component__WEBPACK_IMPORTED_MODULE_10__["PropertyListingComponent"], _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_11__["LogisticsComponent"], _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_12__["HealthcareComponent"], _service_support_service_support_component__WEBPACK_IMPORTED_MODULE_13__["ServiceSupportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]],
            exports: [],
            declarations: [_ecommerce_v1_ecommerce_v1_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceV1Component"], _ecommerce_v2_ecommerce_v2_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceV2Component"], _human_resources_human_resources_component__WEBPACK_IMPORTED_MODULE_8__["HumanResourcesComponent"], _digital_marketing_digital_marketing_component__WEBPACK_IMPORTED_MODULE_9__["DigitalMarketingComponent"], _property_listing_property_listing_component__WEBPACK_IMPORTED_MODULE_10__["PropertyListingComponent"], _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_11__["LogisticsComponent"], _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_12__["HealthcareComponent"], _service_support_service_support_component__WEBPACK_IMPORTED_MODULE_13__["ServiceSupportComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/digital-marketing/digital-marketing.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/digital-marketing/digital-marketing.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DigitalMarketingComponent */

    /***/
    function srcAppDashboardDigitalMarketingDigitalMarketingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DigitalMarketingComponent", function () {
        return DigitalMarketingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var DigitalMarketingComponent = /*#__PURE__*/function () {
        function DigitalMarketingComponent() {
          _classCallCheck(this, DigitalMarketingComponent);
        }

        _createClass(DigitalMarketingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript("./assets/js/dashboard-digital-marketing.js");
          }
        }]);

        return DigitalMarketingComponent;
      }();

      DigitalMarketingComponent.??fac = function DigitalMarketingComponent_Factory(t) {
        return new (t || DigitalMarketingComponent)();
      };

      DigitalMarketingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DigitalMarketingComponent,
        selectors: [["app-digital-marketing"]],
        decls: 96,
        vars: 1,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-lg-6", "col-xl-6"], [1, "row"], [1, "card"], [1, "card-body"], [1, "mb-0"], [1, "float-right"], [1, "progress-wrapper"], ["type", "white", "height", "7px", 3, "value"], ["id", "twitter-followers"], [1, "card-body", "text-center", "px-0"], [1, ""], [1, "chart-container-10", "d-flex", "align-items-center", "justify-content-center"], ["id", "total-visitors"], [1, "card-footer", "border-0"], [1, "row", "align-items-center", "text-center"], [1, "col", "border-right", "border-light"], [1, "extra-small-font"], [1, "col"], ["id", "facebook-pageviews"], ["id", "bounce-rate"], [1, "col-12", "col-lg-12", "col-xl-12"], [1, "sr-only"], ["id", "list-subscribers"], [1, "mb-3"], [1, "mt-1"], ["id", "direct"], ["id", "organic-search"], ["id", "referral"], ["id", "social"], [1, "card-group", "flex-column", "flex-md-row"], [1, "card", "border-right", "border-light", "mb-0"], [1, "card-body", "text-center"], ["id", "newsletter-open-rate"], [1, "card", "mb-0"], ["id", "click-through-rate"]],
        template: function DigitalMarketingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Website Sessions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "652.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "72% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "500k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "ngb-progressbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Twitter Followers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "8,256K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "2.5% Increase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Total Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "563");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "small", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Last Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "985");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "small", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Facebook Pageviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "35.7K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "82.3%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "List Subscribers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Goal Completion by channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Newsletter Open Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Click Through Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kaWdpdGFsLW1hcmtldGluZy9kaWdpdGFsLW1hcmtldGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DigitalMarketingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-digital-marketing',
            templateUrl: './digital-marketing.component.html',
            styleUrls: ['./digital-marketing.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/ecommerce-v1/ecommerce-v1.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/dashboard/ecommerce-v1/ecommerce-v1.component.ts ***!
      \******************************************************************/

    /*! exports provided: EcommerceV1Component */

    /***/
    function srcAppDashboardEcommerceV1EcommerceV1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EcommerceV1Component", function () {
        return EcommerceV1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/ecommerce1 */
      "./src/app/shared/data/ecommerce1.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

      var _c0 = ["chart-1"];

      var EcommerceV1Component = /*#__PURE__*/function () {
        function EcommerceV1Component() {
          _classCallCheck(this, EcommerceV1Component);

          // line -Chart 1
          this.lineChartData = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // Doughnut -Chart 2

          this.doughnutChartLabels = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["doughnutChartLabels"];
          this.doughnutChartData = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["doughnutChartData"];
          this.doughnutChartType = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["doughnutChartType"];
          this.doughnutChartColors = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["doughnutChartColors"];
          this.doughnutChartOptions = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["doughnutChartOptions"]; // line -Chart 3

          this.lineChart3Data = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Data"];
          this.lineChart3Labels = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Labels"];
          this.lineChart3Options = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Options"];
          this.lineChart3Colors = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Colors"];
          this.lineChart3Legend = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Legend"];
          this.lineChart3Type = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["lineChart3Type"]; // bar -Chart 4

          this.barChartOptions = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartOptions"];
          this.barChartLabels = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartLabels"];
          this.barChartType = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartType"];
          this.barChartLegend = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartLegend"];
          this.barChartData = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartData"];
          this.barChartColors = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChartColors"]; // bar -Chart 6

          this.barChart6Options = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Options"];
          this.barChart6Labels = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Labels"];
          this.barChart6Type = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Type"];
          this.barChart6Legend = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Legend"];
          this.barChart6Data = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Data"];
          this.barChart6Colors = _shared_data_ecommerce1__WEBPACK_IMPORTED_MODULE_1__["barChart6Colors"]; // Chart 5 Options

          this.chartOptions = {
            chart: {
              height: 250,
              type: 'radialBar',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                //startAngle: -135,
                //endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '70%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: 'rgba(255, 255, 255, 0.12)',
                  strokeWidth: '67%',
                  margin: 0,
                  dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    color: 'rgba(254, 197, 7, 0.55)',
                    opacity: 0.55
                  }
                },
                dataLabels: {
                  name: {
                    offsetY: -5,
                    show: true,
                    color: '#fff',
                    fontSize: '14px'
                  },
                  value: {
                    formatter: function formatter(val) {
                      return val + "%";
                    },
                    color: '#fff',
                    fontSize: '20px',
                    show: true,
                    offsetY: 10
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#fff'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            colors: ["#fff"],
            series: [65],
            stroke: {
              lineCap: 'round'
            },
            labels: ['Total']
          };
        } // events


        _createClass(EcommerceV1Component, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/ecommerce1.js');
          }
        }]);

        return EcommerceV1Component;
      }();

      EcommerceV1Component.??fac = function EcommerceV1Component_Factory(t) {
        return new (t || EcommerceV1Component)();
      };

      EcommerceV1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EcommerceV1Component,
        selectors: [["app-ecommerce-v1"]],
        viewQuery: function EcommerceV1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 606,
        vars: 49,
        consts: [[1, "card", "mt-3"], [1, "card-content"], [1, "row", "row-group", "m-0"], [1, "col-12", "col-lg-6", "col-xl-3", "border-light"], [1, "card-body"], [1, "text-white", "mb-0"], [1, "float-right"], [1, "fa", "fa-shopping-cart"], [1, "my-3"], ["type", "white", "height", "3px", 3, "value"], [1, "mb-0", "text-white", "small-font"], [1, "zmdi", "zmdi-long-arrow-up"], [1, "fa", "fa-usd"], [1, "fa", "fa-eye"], [1, "fa", "fa-envira"], [1, "row"], [1, "col-12", "col-lg-8", "col-xl-8"], [1, "card"], [1, "card-header"], [1, "card-action"], ["ngbDropdown", ""], ["href", "javascript:;", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], [1, "icon-options"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javascript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "list-inline"], [1, "list-inline-item"], [1, "fa", "fa-circle", "mr-2", "text-white"], [1, "fa", "fa-circle", "mr-2", "text-light"], [1, "chart-container-1"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "row", "m-0", "row-group", "text-center", "border-top", "border-light-3"], [1, "col-12", "col-lg-4"], [1, "p-3"], [1, "mb-0"], [1, "fa", "fa-arrow-up"], [1, "col-12", "col-lg-4", "col-xl-4"], ["href", "javascript:;", "id", "dropdownBasic6", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic6"], [1, "chart-container-2"], ["baseChart", "", 3, "data", "labels", "options", "chartType", "colors", "chartHover", "chartClick"], [1, "table-responsive"], [1, "table", "align-items-center"], [1, "fa", "fa-circle", "text-white", "mr-2"], [1, "fa", "fa-circle", "text-light-1", "mr-2"], [1, "fa", "fa-circle", "text-light-2", "mr-2"], [1, "fa", "fa-circle", "text-light-3", "mr-2"], [1, "col-12", "col-lg-6", "col-xl-4"], [1, "media", "align-items-center"], ["data-percent", "60", 1, "w_chart", "easy-dash-chart"], [1, "w_percent"], [1, "media-body", "ml-3"], [1, "fa", "fa-facebook", "text-white", "text-right", "fa-2x"], ["data-percent", "65", 1, "w_chart", "easy-dash-chart"], [1, "fa", "fa-twitter", "text-white", "text-right", "fa-2x"], [1, "col-12", "col-lg-12", "col-xl-4"], ["data-percent", "75", 1, "w_chart", "easy-dash-chart"], [1, "fa", "fa-youtube", "text-white", "fa-2x"], [1, "col-12", "col-lg-12", "col-xl-6"], ["href", "javascript:;", "id", "dropdownBasic7", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic7"], ["id", "dashboard-map", 2, "height", "275px"], [1, "table", "table-hover", "align-items-center"], [1, "flag-icon", "flag-icon-ca", "mr-2"], ["id", "trendchart1"], [1, "flag-icon", "flag-icon-us", "mr-2"], ["id", "trendchart2"], [1, "flag-icon", "flag-icon-in", "mr-2"], ["id", "trendchart3"], [1, "flag-icon", "flag-icon-gb", "mr-2"], ["id", "trendchart4"], [1, "flag-icon", "flag-icon-de", "mr-2"], ["id", "trendchart5"], [1, "col-12", "col-lg-6"], [1, "small-font"], [1, "chart-container-3"], [1, "card-body", "text-center"], [1, "mb-4"], ["id", "chart-1", 1, "chart-container-15", "d-flex", "align-items-center", "justify-content-center"], [3, "chart", "plotOptions", "fill", "colors", "series", "stroke", "labels"], [1, "mb-0", "small-font", "text-center"], [1, "mb-3"], [1, "progress-wrapper", "mb-4"], ["type", "white", "height", "5px", 3, "value"], [1, "mt-5"], [1, "chart-container-4"], [1, "col-12", "col-lg-6", "col-xl-8"], ["href", "javascript:;", "id", "dropdownBasic8", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic8"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "bg-transparent"], ["src", "assets/images/avatars/avatar-13.png", "alt", "user avatar", 1, "customer-img", "rounded-circle"], [1, "ml-4"], [1, "mb-0", "small-font"], [1, "star"], [1, "zmdi", "zmdi-star"], [1, "zmdi", "zmdi-star", "text-light"], ["src", "assets/images/avatars/avatar-15.png", "alt", "user avatar", 1, "customer-img", "rounded-circle"], ["src", "assets/images/avatars/avatar-14.png", "alt", "user avatar", 1, "customer-img", "rounded-circle"], ["src", "assets/images/avatars/avatar-16.png", "alt", "user avatar", 1, "customer-img", "rounded-circle"], ["src", "assets/images/avatars/avatar-17.png", "alt", "user avatar", 1, "customer-img", "rounded-circle"], [1, "col-12", "col-lg-12"], ["href", "javascript:;", "id", "dropdownBasic9", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic9"], [1, "table", "align-items-center", "table-flush", "table-borderless"], ["src", "assets/images/products/01.png", "alt", "product img", 1, "product-img"], [1, "shadow"], ["src", "assets/images/products/02.png", "alt", "product img", 1, "product-img"], ["src", "assets/images/products/03.png", "alt", "product img", 1, "product-img"], ["src", "assets/images/products/04.png", "alt", "product img", 1, "product-img"], ["src", "assets/images/products/05.png", "alt", "product img", 1, "product-img"], ["src", "assets/images/products/06.png", "alt", "product img", 1, "product-img"]],
        template: function EcommerceV1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "9526 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Total Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "+4.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "8323 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Total Revenue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "+1.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "6200 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Visitors ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "+5.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "5630 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Messages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "+2.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Site Traffic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "New Visitor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Old Visitor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "canvas", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV1Component_Template_canvas_chartHover_87_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV1Component_Template_canvas_chartClick_87_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h5", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "45.87M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Overall Visitor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " 2.43%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h5", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "15:48");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Visitor Duration ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " 12.65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h5", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "245.65");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Pages/Visit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " 5.62%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Weekly sales ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "canvas", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV1Component_Template_canvas_chartHover_136_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV1Component_Template_canvas_chartClick_136_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " Direct");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "$5856");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "+55%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Affiliate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "$2602");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "+25%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "$1802");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "+15%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "$1105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "+5%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Facebook Followers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "22.14% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " Since Last Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Twitter Tweets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "32.15% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " Since Last Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Youtube Subscribers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "small", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "58.24% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " Since Last Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "World Selling Region ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "table", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Trend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, " USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "4,586$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Canada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "2,089$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "3,039$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "2,309$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](278, "span", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "7,209$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Page Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "8,293 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "small", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "5.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "canvas", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV1Component_Template_canvas_chartHover_300_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV1Component_Template_canvas_chartClick_300_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Total Clicks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "7,493 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "small", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "1.4% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "canvas", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV1Component_Template_canvas_chartHover_312_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV1Component_Template_canvas_chartClick_312_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "Total Downloads");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](319, "apx-chart", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "p", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "3.4% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, " since yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Device Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "h4", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "42620/50000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Documents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "12GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "ngb-progressbar", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Images ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "10GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](348, "ngb-progressbar", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Mails ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "5GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](356, "ngb-progressbar", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Total Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "287,493$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "1.4% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](367, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, " Since Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](369, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "Total Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "87,493");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "5.43% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, " Since Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "canvas", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV1Component_Template_canvas_chartHover_380_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV1Component_Template_canvas_chartClick_380_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Customer Review ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "a", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](388, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](396, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "ul", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "li", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "img", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "iPhone X ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "small", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "08.34 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Sara Jhon : This i svery Nice phone in low budget.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](412, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](414, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](418, "img", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "Air Pod ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "small", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "05.26 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "Danish Josh : The brand apple is original !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](427, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](428, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](430, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](431, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "li", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](434, "img", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Mackbook Pro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "small", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "06.45 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "Jhon Doe : Excllent product and awsome quality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](443, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](444, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](446, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "li", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](450, "img", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "Air Pod ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "small", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "08.34 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "Christine : The brand apple is original !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](459, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](461, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](462, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](463, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "li", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](466, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "Mackbook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "small", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "08.34 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Michle : The brand apple is original !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](475, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](476, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](477, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](478, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](479, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "Recent Order Tables ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](496, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "table", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "Photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "Product ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "Iphone 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](520, "img", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, "#9405822");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "$ 1250.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](530, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "Earphone GL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](535, "img", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, "#9405820");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "$ 1500.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](545, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "HD Hand Camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](550, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "#9405830");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "$ 1400.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](556, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](560, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "Clasic Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](565, "img", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "#9405825");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "$ 1200.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](575, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "Hand Watch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](580, "img", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "#9405840");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "$ 1800.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](586, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](590, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "Clasic Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](595, "img", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "#9405825");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, "$ 1200.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, "03 Aug 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](605, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](164);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChart3Data)("labels", ctx.lineChart3Labels)("options", ctx.lineChart3Options)("colors", ctx.lineChart3Colors)("legend", ctx.lineChart3Legend)("chartType", ctx.lineChart3Type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("fill", ctx.chartOptions.fill)("colors", ctx.chartOptions.colors)("series", ctx.chartOptions.series)("stroke", ctx.chartOptions.stroke)("labels", ctx.chartOptions.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChart6Data)("labels", ctx.barChart6Labels)("options", ctx.barChart6Options)("colors", ctx.barChart6Colors)("legend", ctx.barChart6Legend)("chartType", ctx.barChart6Type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lY29tbWVyY2UtdjEvZWNvbW1lcmNlLXYxLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EcommerceV1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ecommerce-v1',
            templateUrl: './ecommerce-v1.component.html',
            styleUrls: ['./ecommerce-v1.component.scss']
          }]
        }], function () {
          return [];
        }, {
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-1"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/ecommerce-v2/ecommerce-v2.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/dashboard/ecommerce-v2/ecommerce-v2.component.ts ***!
      \******************************************************************/

    /*! exports provided: EcommerceV2Component */

    /***/
    function srcAppDashboardEcommerceV2EcommerceV2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EcommerceV2Component", function () {
        return EcommerceV2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/ecommerce2 */
      "./src/app/shared/data/ecommerce2.ts");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var EcommerceV2Component = /*#__PURE__*/function () {
        function EcommerceV2Component() {
          _classCallCheck(this, EcommerceV2Component);

          // Chart 5
          this.lineChartData = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // Chart 8

          this.doughnutChartData = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["doughnutChartData"];
          this.doughnutChartLabels = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["doughnutChartLabels"];
          this.doughnutChartOptions = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["doughnutChartOptions"];
          this.doughnutChartColors = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["doughnutChartColors"];
          this.doughnutChartType = _shared_data_ecommerce2__WEBPACK_IMPORTED_MODULE_1__["doughnutChartType"];
        } // events


        _createClass(EcommerceV2Component, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/Chart.extension.js');
            $.getScript('./assets/js/ecommerce2.js');
          }
        }]);

        return EcommerceV2Component;
      }();

      EcommerceV2Component.??fac = function EcommerceV2Component_Factory(t) {
        return new (t || EcommerceV2Component)();
      };

      EcommerceV2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EcommerceV2Component,
        selectors: [["app-ecommerce-v2"]],
        decls: 525,
        vars: 16,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-md-6", "col-lg-3", "col-xl-3"], [1, "card"], [1, "card-body", "card-block", "p-3"], [1, "media", "align-items-center"], [1, "media-body", "text-left"], [1, "text-white", "mb-0"], [1, "w-icon"], [1, "zmdi", "zmdi-shopping-basket", "text-white"], [1, "mt-1"], ["id", "chart1", 1, "mt-1"], [1, "zmdi", "zmdi-accounts-alt", "text-white"], ["id", "chart2", 1, "mt-1"], [1, "zmdi", "zmdi-balance-wallet", "text-white"], ["id", "chart3", 1, "mt-1"], [1, "zmdi", "zmdi-chart-donut", "text-white"], ["id", "chart4", 1, "mt-1"], [1, "row"], [1, "col-12", "col-lg-8", "col-xl-8"], [1, "card-header"], [1, "card-body"], [1, ""], [1, "chart-container"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "col-12", "col-lg-4", "col-xl-4"], ["id", "chart6"], [1, "card-deck", "flex-column", "flex-lg-row"], [1, "product-div", "mr-2"], ["src", "assets/images/products/07.png", "alt", "product img"], [1, "media-body"], [1, "progress-wrapper"], [1, "my-2"], [1, "float-right"], ["type", "white", "height", "4px", 3, "value"], ["src", "assets/images/products/08.png", "alt", "product img"], ["src", "assets/images/products/09.png", "alt", "product img"], ["src", "assets/images/products/10.png", "alt", "product img"], ["src", "assets/images/products/11.png", "alt", "product img"], ["src", "assets/images/avatars/avatar-1.png", "alt", "user avatar", 1, "rounded-circle", "customer-img"], [1, "media-body", "ml-3"], [1, "mb-0"], [1, "mb-0", "extra-small-font"], [1, "btn", "btn-sm", "btn-round", "btn-light"], ["src", "assets/images/avatars/avatar-2.png", "alt", "user avatar", 1, "rounded-circle", "customer-img"], ["src", "assets/images/avatars/avatar-3.png", "alt", "user avatar", 1, "rounded-circle", "customer-img"], [1, "btn", "btn-sm", "btn-round", "btn-white"], ["src", "assets/images/avatars/avatar-4.png", "alt", "user avatar", 1, "rounded-circle", "customer-img"], ["src", "assets/images/avatars/avatar-5.png", "alt", "user avatar", 1, "rounded-circle", "customer-img"], [1, "card-header", "text-uppercase", "border-0", "text-center", "sr-only"], [1, "nav", "nav-pills", "nav-pills-custom", "nav-justified"], [1, "nav-item"], [1, "btn", "btn-link", "btn", "btn-round"], [1, "btn", "btn-white", "btn", "btn-round"], [1, "pt-0"], [1, "chart-container-10", "d-flex", "align-items-center", "justify-content-center"], ["id", "chart7"], [1, "text-center", "mb-0"], [1, "text-center", "extra-small-font", "mb-3"], [1, "chart-container-13", "d-flex", "align-items-center", "justify-content-center"], ["baseChart", "", 3, "data", "labels", "options", "chartType", "colors", "chartHover", "chartClick"], [1, "list-group", "list-group-flush", "mb-0", "shadow-none"], [1, "list-group-item", "bg-transparent"], [1, "fa", "fa-chrome", "mr-2", "text-white", "font-weight-bold"], [1, "fa", "fa-opera", "mr-2", "font-weight-bold", 2, "color", "rgba(255, 255, 255, 0.50)"], [1, "fa", "fa-firefox", "mr-2", "font-weight-bold", 2, "color", "rgba(255, 255, 255, 0.25)"], ["id", "world-map", 2, "height", "280px"], [1, "table-responsive", "mt-2"], [1, "table", "table-borderless", "align-items-center"], [1, "fa", "fa-circle", "mr-2", 2, "color", "#fff"], [1, "col-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "align-items-center"], [1, "product-div", "mr-2", "d-flex", "align-items-between"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "30%"], ["type", "button", 1, "btn", "btn-sm", "btn-round", "btn-white"], ["src", "assets/images/products/12.png", "alt", "product img"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "100%"], ["src", "assets/images/products/13.png", "alt", "product img"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "75%"], ["src", "assets/images/products/14.png", "alt", "product img"], ["src", "assets/images/products/15.png", "alt", "product img"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "60%"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "card-content"], [1, "row", "row-group", "m-0"], [1, "col-12", "col-md-4", "col-lg-4", "col-xl-4"], [1, "card-body", "text-center", "px-0"], ["id", "chart9"], ["id", "chart10"], ["id", "chart11"], ["id", "chart12"], ["id", "chart13"], ["id", "chart14"], [1, "zmdi", "zmdi-long-arrow-up", "ml-3", "text-white"], [1, "zmdi", "zmdi-long-arrow-down", "ml-3", "text-white"]],
        template: function EcommerceV2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "8,643");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "72,854");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "$86,374");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Growth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "41.86%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Monthly Sales & Visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "canvas", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV2Component_Template_canvas_chartHover_61_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV2Component_Template_canvas_chartClick_61_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Monthly Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "canvas", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Top Selling Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Mobiles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "450");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "ngb-progressbar", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Laptops ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "280");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "ngb-progressbar", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Headphones ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "150");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "ngb-progressbar", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Shoes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "230");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "ngb-progressbar", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "T-Shirts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "760");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "ngb-progressbar", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "New User List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Benji Harper ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "UI Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "John Michael ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Project Manger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Justine Myranda ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Php Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Janet Lucas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Team Leader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Alex Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Graphic Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "ul", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "li", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "li", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "li", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h4", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "$ 9845.43 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "+3% Since Last Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Browser Statistics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "canvas", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function EcommerceV2Component_Template_canvas_chartHover_211_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function EcommerceV2Component_Template_canvas_chartClick_211_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " Google Chrome ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "90");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, " Opera ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " Firefox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Top Selling Countries");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "table", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](239, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " Russia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "18 %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](244, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, " Australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "14.2 %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "15 %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " United States");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "11.6 %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Latest Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "table", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Completion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](288, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Earphone GL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "885462");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "12:00, 15-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "$140");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](303, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](311, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Clasic Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "235862");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "12:00, 22-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "$163");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "img", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Hand Watch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "685422");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "12:00, 23-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "$133");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](357, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "HD Hand Camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "975432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "12:00, 25-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "$175");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](372, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](380, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "Iphone 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "965422");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "12:00, 29-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "$189");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](406, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "New Visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](416, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](425, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "Used RAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](430, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Web Traffic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](435, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Page Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "Traffic Referrals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "table", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "Referral");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "Unique Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "8,584");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "263");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "12.5% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](464, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "7,682");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "563");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "32.2% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](474, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "5,524");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "274");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "14.7% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "LinkedIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "5,574");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, "863");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "14.7% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](494, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "9,834");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "963");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "14.7% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](504, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "Dribbble");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "6,572");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "897");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "12.7% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](514, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "Behance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "7,634");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "863");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "11.3% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lY29tbWVyY2UtdjIvZWNvbW1lcmNlLXYyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EcommerceV2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ecommerce-v2',
            templateUrl: './ecommerce-v2.component.html',
            styleUrls: ['./ecommerce-v2.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/healthcare/healthcare.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/dashboard/healthcare/healthcare.component.ts ***!
      \**************************************************************/

    /*! exports provided: HealthcareComponent */

    /***/
    function srcAppDashboardHealthcareHealthcareComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthcareComponent", function () {
        return HealthcareComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/healthcare */
      "./src/app/shared/data/healthcare.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

      var _c0 = ["chart-2"];
      var _c1 = ["chart-3"];
      var _c2 = ["chart-4"];
      var _c3 = ["chart-5"];
      var _c4 = ["chart-6"];

      var HealthcareComponent = /*#__PURE__*/function () {
        function HealthcareComponent() {
          _classCallCheck(this, HealthcareComponent);

          // Chart 1
          this.lineChartData = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_healthcare__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // Chart 2 Options

          this.chart2Options = {
            chart: {
              height: 350,
              type: 'bar',
              toolbar: {
                show: false
              },
              foreColor: 'rgba(255, 255, 255, 0.65)'
            },
            plotOptions: {
              bar: {
                endingShape: 'rounded',
                distributed: true,
                horizontal: true
              }
            },
            dataLabels: {
              enabled: true
            },
            series: [{
              name: 'Time',
              data: [20, 35, 30, 15, 28, 36, 42]
            }],
            xaxis: {
              categories: ['Cardiology', 'Dermatology', 'Gynaecology', 'Neurology', 'Oncology', 'Orthopaedics', 'Surgery']
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                gradientToColors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityTo: 0.9,
                opacityFrom: 0.2,
                stops: [0, 100, 100, 100]
              }
            },
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            grid: {
              show: true,
              borderColor: 'rgba(255, 255, 255, 0.15)'
            },
            tooltip: {
              theme: 'dark',
              x: {
                show: true
              },
              y: {
                formatter: function formatter(val) {
                  return "20Min";
                }
              }
            },
            legend: {
              show: false
            }
          }; // Chart 3 Options

          this.chart3Options = {
            chart: {
              height: 240,
              type: 'radialBar',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                //startAngle: -135,
                //endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '85%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(246, 181, 49, 0.65)',
                    opacity: 0.12
                  }
                },
                track: {
                  background: 'rgba(255, 255, 255, 0.15)',
                  strokeWidth: '30%',
                  margin: 0,
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(246, 181, 49, 0.65)',
                    opacity: 0.12
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -20,
                    show: true,
                    color: '#fff',
                    fontSize: '15px'
                  },
                  value: {
                    formatter: function formatter(val) {
                      return val + "%";
                    },
                    color: '#fff',
                    fontSize: '35px',
                    show: true,
                    offsetY: 10
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#fff'],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            colors: ["#fff"],
            series: [64],
            stroke: {
              //lineCap: 'round',
              dashArray: 4
            },
            labels: ['Excellent']
          }; // Chart 4 Options

          this.chart4Options = {
            chart: {
              height: 240,
              type: 'radialBar',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                //startAngle: -135,
                //endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '85%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(209, 58, 223, 0.65)',
                    opacity: 0.12
                  }
                },
                track: {
                  background: 'rgba(255, 255, 255, 0.15)',
                  strokeWidth: '30%',
                  margin: 0,
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(209, 58, 223, 0.65)',
                    opacity: 0.12
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -20,
                    show: true,
                    color: '#fff',
                    fontSize: '15px'
                  },
                  value: {
                    formatter: function formatter(val) {
                      return val + "%";
                    },
                    color: '#fff',
                    fontSize: '35px',
                    show: true,
                    offsetY: 10
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#fff'],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            colors: ["#fff"],
            series: [68],
            stroke: {
              //lineCap: 'round',
              dashArray: 4
            },
            labels: ['Good']
          }; // Chart 5 Options

          this.chart5Options = {
            chart: {
              height: 240,
              type: 'radialBar',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                //startAngle: -135,
                //endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '85%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(209, 58, 223, 0.65)',
                    opacity: 0.12
                  }
                },
                track: {
                  background: 'rgba(255, 255, 255, 0.15)',
                  strokeWidth: '30%',
                  margin: 0,
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(209, 58, 223, 0.65)',
                    opacity: 0.12
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -20,
                    show: true,
                    color: '#fff',
                    fontSize: '15px'
                  },
                  value: {
                    formatter: function formatter(val) {
                      return val + "%";
                    },
                    color: '#fff',
                    fontSize: '35px',
                    show: true,
                    offsetY: 10
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#fff'],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            colors: ["#fff"],
            series: [82],
            stroke: {
              //lineCap: 'round',
              dashArray: 4
            },
            labels: ['Positive']
          }; // Chart 6 Options

          this.chart6Options = {
            chart: {
              height: 240,
              type: 'radialBar',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                //startAngle: -135,
                //endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '85%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(8, 165, 14, 0.65)',
                    opacity: 0.12
                  }
                },
                track: {
                  background: 'rgba(255, 255, 255, 0.15)',
                  strokeWidth: '30%',
                  margin: 0,
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    //color: 'rgba(8, 165, 14, 0.65)',
                    opacity: 0.12
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -20,
                    show: true,
                    color: '#fff',
                    fontSize: '15px'
                  },
                  value: {
                    formatter: function formatter(val) {
                      return val + "%";
                    },
                    color: '#fff',
                    fontSize: '35px',
                    show: true,
                    offsetY: 10
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#fff'],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            colors: ["#fff"],
            series: [74],
            stroke: {
              //lineCap: 'round',
              dashArray: 4
            },
            labels: ['Negative']
          };
        } // events


        _createClass(HealthcareComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HealthcareComponent;
      }();

      HealthcareComponent.??fac = function HealthcareComponent_Factory(t) {
        return new (t || HealthcareComponent)();
      };

      HealthcareComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HealthcareComponent,
        selectors: [["app-healthcare"]],
        viewQuery: function HealthcareComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c3, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c4, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart3 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart4 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart5 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart6 = _t.first);
          }
        },
        decls: 156,
        vars: 48,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-md-6", "col-lg-3", "col-xl-3"], [1, "card"], [1, "card-body"], [1, "media", "align-items-center"], [1, "media-body"], [1, "mb-0"], [1, "w-icon"], [1, "zmdi", "zmdi-face", "text-white"], [1, "progress-wrapper", "mt-3"], ["type", "white", "height", "5px", 3, "value"], [1, "zmdi", "zmdi-accounts-alt", "text-white"], [1, "zmdi", "zmdi-balance-wallet", "text-white"], [1, "zmdi", "zmdi-male-female", "text-white"], [1, "card-header"], [1, "chart-container"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "card-deck"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "zmdi", "zmdi-long-arrow-up", "mr-1", "text-white", "font-weight-bold"], [1, "zmdi", "zmdi-long-arrow-down", "mr-1", "text-white", "font-weight-bold"], [1, "card-header", "text-uppercase"], [1, "card-body", "p-0"], ["id", "chart-2"], [3, "chart", "plotOptions", "dataLabels", "series", "xaxis", "fill", "colors", "grid", "tooltip", "legend"], [1, "row", "row-group"], [1, "d-flex", "align-items-center", "justify-content-center"], ["id", "excellent-satisfaction"], ["id", "chart-3"], [3, "chart", "plotOptions", "fill", "colors", "series", "stroke", "labels"], ["id", "good-satisfaction"], ["id", "chart-4"], ["id", "positive-satisfaction"], ["id", "chart-5"], ["id", "negative-satisfaction"], ["id", "chart-6"]],
        template: function HealthcareComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "7543");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Total Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "$8967");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Admitted Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "$8,569");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Treatment Costs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "689");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Available Staff");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Outpatients vs Inpatients Trend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "canvas", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function HealthcareComponent_Template_canvas_chartHover_58_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function HealthcareComponent_Template_canvas_chartClick_58_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Patients By Division");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Division");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Inpatient");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Outpatient");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Surgery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "6869");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "13025");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Dermatology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "5328");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "65987");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Neurology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "2369");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "1245");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Oncology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "6589");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "4621");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Orthopaedics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "3659");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "4789");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Cardiology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "8956");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "7456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Avg Waiting Time By Division");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "apx-chart", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Overall Patient Satisfaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "apx-chart", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "apx-chart", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "apx-chart", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "apx-chart", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chart2Options.chart)("plotOptions", ctx.chart2Options.plotOptions)("dataLabels", ctx.chart2Options.dataLabels)("series", ctx.chart2Options.series)("xaxis", ctx.chart2Options.xaxis)("fill", ctx.chart2Options.fill)("colors", ctx.chart2Options.colors)("grid", ctx.chart2Options.grid)("tooltip", ctx.chart2Options.tooltip)("legend", ctx.chart2Options.legend);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chart3Options.chart)("plotOptions", ctx.chart3Options.plotOptions)("fill", ctx.chart3Options.fill)("colors", ctx.chart3Options.colors)("series", ctx.chart3Options.series)("stroke", ctx.chart3Options.stroke)("labels", ctx.chart3Options.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chart4Options.chart)("plotOptions", ctx.chart4Options.plotOptions)("fill", ctx.chart4Options.fill)("colors", ctx.chart4Options.colors)("series", ctx.chart4Options.series)("stroke", ctx.chart4Options.stroke)("labels", ctx.chart4Options.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chart5Options.chart)("plotOptions", ctx.chart5Options.plotOptions)("fill", ctx.chart5Options.fill)("colors", ctx.chart5Options.colors)("series", ctx.chart5Options.series)("stroke", ctx.chart5Options.stroke)("labels", ctx.chart5Options.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.chart6Options.chart)("plotOptions", ctx.chart6Options.plotOptions)("fill", ctx.chart6Options.fill)("colors", ctx.chart6Options.colors)("series", ctx.chart6Options.series)("stroke", ctx.chart6Options.stroke)("labels", ctx.chart6Options.labels);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9oZWFsdGhjYXJlL2hlYWx0aGNhcmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HealthcareComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-healthcare',
            templateUrl: './healthcare.component.html',
            styleUrls: ['./healthcare.component.scss']
          }]
        }], function () {
          return [];
        }, {
          chart2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-2"]
          }],
          chart3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-3"]
          }],
          chart4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-4"]
          }],
          chart5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-5"]
          }],
          chart6: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-6"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/human-resources/human-resources.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/dashboard/human-resources/human-resources.component.ts ***!
      \************************************************************************/

    /*! exports provided: HumanResourcesComponent */

    /***/
    function srcAppDashboardHumanResourcesHumanResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HumanResourcesComponent", function () {
        return HumanResourcesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HumanResourcesComponent = /*#__PURE__*/function () {
        function HumanResourcesComponent() {
          _classCallCheck(this, HumanResourcesComponent);
        }

        _createClass(HumanResourcesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript("./assets/js/dashboard-human-resources.js");
          }
        }]);

        return HumanResourcesComponent;
      }();

      HumanResourcesComponent.??fac = function HumanResourcesComponent_Factory(t) {
        return new (t || HumanResourcesComponent)();
      };

      HumanResourcesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HumanResourcesComponent,
        selectors: [["app-human-resources"]],
        decls: 129,
        vars: 0,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "card-deck", "flex-column", "flex-xl-row"], [1, "card"], [1, "card-body"], [1, ""], [1, "zmdi", "zmdi-accounts-alt", "text-white", "font-33"], [1, "mb-0", "mt-2"], [1, "mb-0"], ["id", "emp-nps"], [1, "zmdi", "zmdi-money", "text-white", "font-33"], [1, "mb-0", "mt-1"], ["id", "training-expenses"], [1, "zmdi", "zmdi-camera", "text-white", "font-33"], ["id", "csr-activities"], [1, "zmdi", "zmdi-face", "text-white", "font-33"], [1, "mb-1"], ["id", "starter-this-month"], [1, "media", "align-items-center"], [1, "media-body"], [1, "text-right"], ["id", "bounce-rate"], ["id", "submitted-application"], ["id", "users-status"], [1, "row"], [1, "col-12", "col-lg-8", "col-xl-8"], [1, "card-header"], [1, "chart-container"], ["id", "recruitment-cost"], [1, "col-12", "col-lg-4", "col-xl-4"], [1, "chart-container", "d-flex", "align-items-center", "justify-content-center"], ["id", "application-by-source"], [1, "mt-3", "mb-0"], [1, "card-content", "dash-array-chart-box"], ["id", "screening-calls"], ["id", "assignments"], ["id", "interviews"], [1, "card-header", "text-center"], [1, "text-center", "chart-container-9", "d-flex", "align-items-center", "justify-content-center"], ["id", "vacancies-status"], [1, "card-footer"], [1, "row", "align-items-center", "text-center"], [1, "col", "border-right", "border-light"], [1, "extra-small-font"], [1, "col"], [1, "card-body", "p-0"], ["id", "top-referrers"]],
        template: function HumanResourcesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "928");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Employee NPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "$20.2K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Training Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "32");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "CSR Activities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Starter This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "78.49%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Recruitment Costs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Applications By Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "54");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Screening Calls");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "82");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Assignments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "92");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Interviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Vacancies Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "452");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "small", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Filled Vacancies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "680");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "small", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Total Vacancies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Top Referrers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9odW1hbi1yZXNvdXJjZXMvaHVtYW4tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HumanResourcesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-human-resources',
            templateUrl: './human-resources.component.html',
            styleUrls: ['./human-resources.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/logistics/logistics.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/dashboard/logistics/logistics.component.ts ***!
      \************************************************************/

    /*! exports provided: LogisticsComponent */

    /***/
    function srcAppDashboardLogisticsLogisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticsComponent", function () {
        return LogisticsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/logistics */
      "./src/app/shared/data/logistics.ts");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var LogisticsComponent = /*#__PURE__*/function () {
        function LogisticsComponent() {
          _classCallCheck(this, LogisticsComponent);

          // Doughnut -Chart 1
          this.doughnutChartLabels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["doughnutChartLabels"];
          this.doughnutChartData = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["doughnutChartData"];
          this.doughnutChartType = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["doughnutChartType"];
          this.doughnutChartColors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["doughnutChartColors"];
          this.doughnutChartOptions = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["doughnutChartOptions"]; // Pie -chart 2

          this.pieChartLabels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["pieChartLabels"];
          this.pieChartData = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["pieChartData"];
          this.pieChartType = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["pieChartType"];
          this.pieChartColors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["pieChartColors"];
          this.pieChartOptions = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["pieChartOptions"]; // lineChart -Chart 3

          this.lineChartData = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // lineChart -Chart 4

          this.lineChart2Data = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Data"];
          this.lineChart2Labels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Labels"];
          this.lineChart2Options = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Options"];
          this.lineChart2Colors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Colors"];
          this.lineChart2Legend = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Legend"];
          this.lineChart2Type = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart2Type"]; // lineChart -Chart 5

          this.lineChart3Data = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Data"];
          this.lineChart3Labels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Labels"];
          this.lineChart3Options = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Options"];
          this.lineChart3Colors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Colors"];
          this.lineChart3Legend = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Legend"];
          this.lineChart3Type = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["lineChart3Type"]; // barChart -Chart 6

          this.barChartOptions = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartOptions"];
          this.barChartLabels = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartLabels"];
          this.barChartType = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartType"];
          this.barChartLegend = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartLegend"];
          this.barChartData = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartData"];
          this.barChartColors = _shared_data_logistics__WEBPACK_IMPORTED_MODULE_1__["barChartColors"];
        } // events


        _createClass(LogisticsComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // chart 1
            $('.fleet-chart').easyPieChart({
              easing: 'easeOutBounce',
              barColor: '#ffffff',
              lineWidth: 10,
              trackColor: 'rgba(255, 255, 255, 0.12)',
              scaleColor: false,
              onStep: function onStep(from, to, percent) {
                $(this.el).find('.fleet-status-percent').text(Math.round(percent));
              }
            });
          }
        }]);

        return LogisticsComponent;
      }();

      LogisticsComponent.??fac = function LogisticsComponent_Factory(t) {
        return new (t || LogisticsComponent)();
      };

      LogisticsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LogisticsComponent,
        selectors: [["app-logistics"]],
        decls: 133,
        vars: 34,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "card"], [1, "card-body"], [1, "row", "row-group", "align-items-center"], [1, "col-12", "col-lg-3", "text-center", "p-3"], ["data-percent", "65", 1, "fleet-status", "fleet-chart"], [1, "fleet-status-percent"], [1, "col-12", "col-lg-4", "text-center", "p-3"], [1, "mb-0"], [1, "mb-0", "small-font"], [1, "col-12", "col-lg-5", "p-3"], [1, "card-deck"], [1, "media", "align-items-center"], [1, "media-body", "text-left"], [1, "text-white", "mb-0"], [1, "text-white", "small-font"], [1, "w-circle-icon", "rounded", "border", "border-light"], [1, "fa", "fa-clock-o", "text-white"], [1, "fa", "fa-tasks", "text-white"], [1, "col-12", "col-lg-6", "col-xl-3"], [1, "card-header"], [1, "chart-container-5"], ["baseChart", "", 3, "data", "labels", "options", "chartType", "colors", "chartHover", "chartClick"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "bg-transparent"], [1, "badge", "badge-light", "float-right"], [1, "chart-container-6"], [1, "row"], [1, "col-12", "col-lg-6", "col-xl-4"], [1, "w-icon", "pr-3"], [1, "fa", "fa-money", "text-white"], [1, "media-body", "pl-3", "border-left", "border-light-3"], [1, "small-font"], [1, "chart-container-7"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "fa", "fa-usd", "text-white"], [1, "col-12", "col-lg-12", "col-xl-4"], [1, "fa", "fa-truck", "text-white"], [1, "col-12", "col-lg-12", "col-xl-12"], [1, "card-action"], ["ngbDropdown", ""], ["href", "javascript:;", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], [1, "icon-options"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javascript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "chart-container-11"]],
        template: function LogisticsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Fleet Efficiency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Total fleet : 63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "On the move : 60");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "In Maintenence : 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "28min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Avg Loading Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "15 tons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Avg Loading Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Delivery Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "canvas", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_48_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_48_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Within Time Limit : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "325");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Out of Time Limit : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Deliveries by Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "canvas", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_64_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_64_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "$876,524 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "small", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "(-1%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Total Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_80_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_80_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "$976,324 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "small", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "(-28%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Total Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_95_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_95_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "8245 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "small", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "(+11%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Total Shipments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_110_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_110_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Avg Delivery Time (hours) & Route (km) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LogisticsComponent_Template_canvas_chartHover_132_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function LogisticsComponent_Template_canvas_chartClick_132_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("options", ctx.pieChartOptions)("chartType", ctx.pieChartType)("colors", ctx.pieChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChart2Data)("labels", ctx.lineChart2Labels)("options", ctx.lineChart2Options)("colors", ctx.lineChart2Colors)("legend", ctx.lineChart2Legend)("chartType", ctx.lineChart2Type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChart3Data)("labels", ctx.lineChart3Labels)("options", ctx.lineChart3Options)("colors", ctx.lineChart3Colors)("legend", ctx.lineChart3Legend)("chartType", ctx.lineChart3Type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2dpc3RpY3MvbG9naXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogisticsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logistics',
            templateUrl: './logistics.component.html',
            styleUrls: ['./logistics.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/property-listing/property-listing.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/property-listing/property-listing.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PropertyListingComponent */

    /***/
    function srcAppDashboardPropertyListingPropertyListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyListingComponent", function () {
        return PropertyListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var PropertyListingComponent = /*#__PURE__*/function () {
        function PropertyListingComponent() {
          _classCallCheck(this, PropertyListingComponent);
        } // events


        _createClass(PropertyListingComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/property-listing.js');
          }
        }]);

        return PropertyListingComponent;
      }();

      PropertyListingComponent.??fac = function PropertyListingComponent_Factory(t) {
        return new (t || PropertyListingComponent)();
      };

      PropertyListingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PropertyListingComponent,
        selectors: [["app-property-listing"]],
        decls: 233,
        vars: 3,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-lg-4", "col-xl-4"], [1, "card"], [1, "card-body"], [1, "text-white", "mb-0"], [1, "float-right", "badge", "badge-light"], [1, ""], [1, "mb-0", "py-3"], [1, "float-right"], [1, "fa", "fa-home"], [1, "progress-wrapper"], ["type", "white", "height", "5px", 3, "value"], [1, "mb-0", "mt-2", "text-white", "small-font"], [1, "fa", "fa-long-arrow-up"], [1, "fa", "fa-search"], [1, "fa", "fa-usd"], [1, "card-header"], [1, "btn-group", "group-round", "btn-group-sm", "float-right"], ["type", "button", 1, "btn", "btn-white", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-light", "waves-effect", "waves-light"], [1, "row", "align-items-center"], [1, "col-12", "col-lg-3", "text-center"], [1, "mt-4"], [1, "mb-0"], [1, "col-12", "col-lg-9"], [1, "chart-container-11"], ["id", "dash2-chart1"], [1, "row"], [1, "col-lg-6"], [1, "card-action"], ["ngbDropdown", ""], ["href", "javascript:;", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], [1, "icon-options"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javascript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "media", "align-items-center"], ["src", "assets/images/products/property01.jpg", "alt", "user avatar", 1, "customer-img", "rounded"], [1, "media-body", "ml-3"], [1, "small-font"], ["src", "assets/images/products/property02.jpg", "alt", "user avatar", 1, "customer-img", "rounded"], ["src", "assets/images/products/property03.jpg", "alt", "user avatar", 1, "customer-img", "rounded"], ["src", "assets/images/products/property04.jpg", "alt", "user avatar", 1, "customer-img", "rounded"], ["src", "assets/images/products/property05.jpg", "alt", "user avatar", 1, "customer-img", "rounded"], [1, "card-footer", "text-center", "bg-transparent", "border-0"], ["href", "javascript:;"], ["href", "javascript:;", "id", "dropdownBasic6", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic6"], [1, "icon-box", "border", "border-white"], [1, "fa", "fa-cutlery"], [1, "date"], [1, "fa", "fa-bed"], [1, "fa", "fa-glass"], [1, "fa", "fa-video-camera"], [1, "fa", "fa-shopping-bag"], [1, "fa", "fa-lightbulb-o"], [1, "card-footer", "text-center", "border-0"]],
        template: function PropertyListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Listings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "92,403 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Compare to last month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "+15% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "5,70,803 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Compare to yesterday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "+43% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Earnings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "$8,456 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Compare to last week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "+32% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Property Order Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Total Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "4,350");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Total Payments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "$80,520");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "canvas", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Popular Listings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "ul", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "$810,000 . 04 Beds . 03 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "$2,560,000 . 08 Beds . 07 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "$910,300 . 03 Beds . 02 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "$1,140,650 . 06 Beds . 03 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "$1,140,650 . 06 Beds . 03 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Lorem ipsum dolor sitamet consectetur adipiscing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "$910,300 . 03 Beds . 02 Baths");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "View all listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Popular Categories ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "ul", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Restaurants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Submited List: 250");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Hotels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Submited List: 90");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Nightclubs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Submited List: 260");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Movie Theaters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Submited List: 150");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Shopping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Submited List: 300");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Museums");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Submited List: 150");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "View all Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 45);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9wZXJ0eS1saXN0aW5nL3Byb3BlcnR5LWxpc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PropertyListingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-property-listing',
            templateUrl: './property-listing.component.html',
            styleUrls: ['./property-listing.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/service-support/service-support.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/dashboard/service-support/service-support.component.ts ***!
      \************************************************************************/

    /*! exports provided: ServiceSupportComponent */

    /***/
    function srcAppDashboardServiceSupportServiceSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceSupportComponent", function () {
        return ServiceSupportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/service-support */
      "./src/app/shared/data/service-support.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

      var ServiceSupportComponent = /*#__PURE__*/function () {
        function ServiceSupportComponent() {
          _classCallCheck(this, ServiceSupportComponent);

          // lineChart -Chart 2
          this.lineChartData = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_service_support__WEBPACK_IMPORTED_MODULE_1__["lineChartType"];
        } // events


        _createClass(ServiceSupportComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {//your code here
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {//your code here
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/service-support.js');
          }
        }]);

        return ServiceSupportComponent;
      }();

      ServiceSupportComponent.??fac = function ServiceSupportComponent_Factory(t) {
        return new (t || ServiceSupportComponent)();
      };

      ServiceSupportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ServiceSupportComponent,
        selectors: [["app-service-support"]],
        decls: 189,
        vars: 10,
        consts: [[1, "row", "mt-3"], [1, "col-12", "col-lg-6", "col-xl-3"], [1, "card"], [1, "card-body"], [1, "media", "align-items-center"], [1, "w-icon"], [1, "fa", "fa-comments-o", "text-white"], [1, "media-body", "ml-3", "border-left-xs", "border-light-3"], [1, "mb-0", "ml-3"], [1, "mb-0", "ml-3", "extra-small-font"], [1, "fa", "fa-question-circle-o", "text-white"], [1, "fa", "fa-bar-chart", "text-white"], [1, "fa", "fa-money", "text-white"], [1, "row"], [1, "col-12", "col-lg-6", "col-xl-6"], [1, "card-header"], [1, "card-action"], ["ngbDropdown", ""], ["href", "javascript:;", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], [1, "icon-options"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javascript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "chart-container-8"], ["id", "chart1"], ["href", "javascript:;", "id", "dropdownBasic6", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic6"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "col-12", "col-lg-12", "col-xl-8"], ["href", "javascript:;", "id", "dropdownBasic7", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic7"], [1, "row", "row-group", "m-0"], [1, "col-12", "col-xl-6"], [1, "text-center"], ["data-peity", "{ \"fill\": [\"#ffffff\", \"rgba(255, 255, 255, 0.14)\"]}", 1, "pie"], [1, "mb-0"], [1, "fa", "fa-circle", "text-white"], [1, "badge", "badge-pill", "badge-light", "float-right"], [1, "fa", "fa-circle", "text-light-3"], ["data-peity", "{ \"fill\": [\"#ffffff\", \"rgba(255, 255, 255, 0.14)\"]}", 1, "donut"], [1, "col-12", "col-lg-12", "col-xl-4"], ["href", "javascript:;", "id", "dropdownBasic8", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic8"], [1, "progress-wrapper", "mb-4"], [1, "float-right"], ["type", "white", "height", "7px", 3, "value"], [1, "progress-wrapper"]],
        template: function ServiceSupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "85.2%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Requests Answered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "87254");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Total Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "$9,856");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Total Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "23.5%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Support Costs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Revenue And % of Support Costs To Revenue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "canvas", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Request Volume Vs. Service Level ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "canvas", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ServiceSupportComponent_Template_canvas_chartHover_87_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ServiceSupportComponent_Template_canvas_chartClick_87_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Customer Satisfaction 2018 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "3/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Satisfied : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Unsatisfied : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "35%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "3/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " Very Satisfied : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " Very Unsatisfied : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "35%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Avg Time To Solve An Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Less than 1 Hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "ngb-progressbar", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "1-2 Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "ngb-progressbar", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "More Then 2 Hours ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](181, "ngb-progressbar", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "More Then 5 Hours ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "20%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "ngb-progressbar", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 20);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXJ2aWNlLXN1cHBvcnQvc2VydmljZS1zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceSupportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-service-support',
            templateUrl: './service-support.component.html',
            styleUrls: ['./service-support.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/data/ecommerce1.ts":
    /*!*******************************************!*\
      !*** ./src/app/shared/data/ecommerce1.ts ***!
      \*******************************************/

    /*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType, doughnutChartLabels, doughnutChartData, doughnutChartColors, doughnutChartType, doughnutChartOptions, lineChart3Data, lineChart3Labels, lineChart3Options, lineChart3Colors, lineChart3Legend, lineChart3Type, barChartOptions, barChartLabels, barChartType, barChartLegend, barChartData, barChartColors, barChart6Options, barChart6Labels, barChart6Type, barChart6Legend, barChart6Data, barChart6Colors */

    /***/
    function srcAppSharedDataEcommerce1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartLabels", function () {
        return doughnutChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartData", function () {
        return doughnutChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartColors", function () {
        return doughnutChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartType", function () {
        return doughnutChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartOptions", function () {
        return doughnutChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Data", function () {
        return lineChart3Data;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Labels", function () {
        return lineChart3Labels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Options", function () {
        return lineChart3Options;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Colors", function () {
        return lineChart3Colors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Legend", function () {
        return lineChart3Legend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Type", function () {
        return lineChart3Type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartOptions", function () {
        return barChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartLabels", function () {
        return barChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartType", function () {
        return barChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartLegend", function () {
        return barChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartData", function () {
        return barChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartColors", function () {
        return barChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Options", function () {
        return barChart6Options;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Labels", function () {
        return barChart6Labels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Type", function () {
        return barChart6Type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Legend", function () {
        return barChart6Legend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Data", function () {
        return barChart6Data;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart6Colors", function () {
        return barChart6Colors;
      }); //line -chart 1


      var lineChartData = [{
        data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
        label: 'New Visitor'
      }, {
        data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
        label: 'Old Visitor'
      }];
      var lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
      var lineChartOptions = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          }
        },
        tooltips: {
          displayColors: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }]
        }
      };
      var lineChartColors = [{
        fill: true,
        backgroundColor: '#fff',
        borderColor: "transparent",
        pointRadius: "0",
        borderWidth: 3
      }, {
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderColor: "transparent",
        pointRadius: "0",
        borderWidth: 1
      }];
      var lineChartLegend = false;
      var lineChartType = 'line'; // Doughnut -chart 2

      var doughnutChartLabels = ["Direct", "Affiliate", "E-mail", "Other"];
      var doughnutChartData = [5856, 2602, 1802, 1105];
      var doughnutChartColors = [{
        backgroundColor: ["#ffffff", "rgba(255, 255, 255, 0.70)", "rgba(255, 255, 255, 0.50)", "rgba(255, 255, 255, 0.20)"],
        borderWidth: [0, 0, 0, 0]
      }];
      var doughnutChartType = 'doughnut';
      var doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        //cutoutPercentage: 80,
        legend: {
          position: 'bottom',
          display: false,
          labels: {
            boxWidth: 8
          }
        },
        tooltips: {
          displayColors: false
        }
      }; //line -chart 3

      var lineChart3Data = [{
        data: [0, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10, 30],
        label: 'Page Views'
      }];
      var lineChart3Labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var lineChart3Options = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: false,
          display: true
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false
          }],
          yAxes: [{
            display: false,
            gridLines: false
          }]
        }
      };
      var lineChart3Colors = [{
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 3
      }];
      var lineChart3Legend = false;
      var lineChart3Type = 'line'; // bar -Chart 4

      var barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false
          }],
          yAxes: [{
            display: false,
            gridLines: false
          }]
        }
      };
      var barChartLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var barChartType = 'bar';
      var barChartLegend = false;
      var barChartData = [{
        barPercentage: .3,
        data: [0, 10, 14, 18, 12, 8, 16, 25, 15, 10, 20, 10, 30],
        label: 'Total Clicks'
      }];
      var barChartColors = [{
        backgroundColor: "#fff"
      }]; // bar -Chart 6

      var barChart6Options = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontColor: '#ddd',
            boxWidth: 13
          }
        },
        tooltips: {
          enabled: true,
          displayColors: false
        },
        scales: {
          xAxes: [{
            stacked: true,
            display: false,
            gridLines: false
          }],
          yAxes: [{
            stacked: true,
            display: false,
            gridLines: false
          }]
        }
      };
      var barChart6Labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var barChart6Type = 'bar';
      var barChart6Legend = false;
      var barChart6Data = [{
        barPercentage: .4,
        data: [39, 19, 25, 16, 31, 39, 23, 20, 23, 18, 15, 20],
        label: 'Total Earning'
      }, {
        barPercentage: .4,
        data: [27, 12, 26, 15, 21, 27, 13, 19, 32, 22, 18, 30],
        label: 'Total Sales'
      }];
      var barChart6Colors = [{
        backgroundColor: "#fff"
      }, {
        backgroundColor: "rgba(255, 255, 255, 0.12)"
      }];
      /***/
    },

    /***/
    "./src/app/shared/data/ecommerce2.ts":
    /*!*******************************************!*\
      !*** ./src/app/shared/data/ecommerce2.ts ***!
      \*******************************************/

    /*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType, doughnutChartLabels, doughnutChartData, doughnutChartColors, doughnutChartType, doughnutChartOptions */

    /***/
    function srcAppSharedDataEcommerce2Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartLabels", function () {
        return doughnutChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartData", function () {
        return doughnutChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartColors", function () {
        return doughnutChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartType", function () {
        return doughnutChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartOptions", function () {
        return doughnutChartOptions;
      }); //chart 5


      var lineChartData = [{
        data: [33, 43, 43, 63, 53, 76, 63],
        label: 'Visits'
      }, {
        data: [43, 59, 67, 91, 83, 106, 93],
        label: 'Sales'
      }];
      var lineChartLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      var lineChartOptions = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 20
          }
        },
        tooltips: {
          enabled: false,
          displayColors: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(225, 225, 225, 0.08)"
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.08)"
            }
          }]
        }
      };
      var lineChartColors = [{
        backgroundColor: '#fff',
        borderColor: 'transparent',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
      }, {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'transparent',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
      }];
      var lineChartLegend = true;
      var lineChartType = 'line'; // Chart 8

      var doughnutChartLabels = ["Google Chrome", "Opera", "Firefox"];
      var doughnutChartData = [5856, 2602, 1802];
      var doughnutChartColors = [{
        backgroundColor: ["#ffffff", "rgba(255, 255, 255, 0.50)", "rgba(255, 255, 255, 0.25)"],
        borderWidth: [0, 0, 0]
      }];
      var doughnutChartType = 'doughnut';
      var doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 60,
        legend: {
          position: "bottom",
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 15
          }
        },
        tooltips: {
          displayColors: false
        }
      };
      /***/
    },

    /***/
    "./src/app/shared/data/healthcare.ts":
    /*!*******************************************!*\
      !*** ./src/app/shared/data/healthcare.ts ***!
      \*******************************************/

    /*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType */

    /***/
    function srcAppSharedDataHealthcareTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      }); //chart 1


      var lineChartData = [{
        data: [20, 41, 26, 46, 30, 50, 52, 53, 41, 30, 40, 25],
        label: 'Inpatients'
      }, {
        data: [4, 75, 37, 56, 61, 58, 83, 60, 66, 70, 55, 60],
        label: 'Outpatients'
      }];
      var lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var lineChartOptions = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 20
          }
        },
        tooltips: {
          enabled: false,
          displayColors: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.08)"
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.08)"
            }
          }]
        }
      };
      var lineChartColors = [{
        backgroundColor: '#fff',
        borderColor: 'transparent',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
      }, {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'transparent',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
      }];
      var lineChartLegend = true;
      var lineChartType = 'line';
      /***/
    },

    /***/
    "./src/app/shared/data/logistics.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/data/logistics.ts ***!
      \******************************************/

    /*! exports provided: doughnutChartLabels, doughnutChartData, doughnutChartColors, doughnutChartType, doughnutChartOptions, pieChartLabels, pieChartData, pieChartType, pieChartColors, pieChartOptions, lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType, lineChart2Data, lineChart2Labels, lineChart2Options, lineChart2Colors, lineChart2Legend, lineChart2Type, lineChart3Data, lineChart3Labels, lineChart3Options, lineChart3Colors, lineChart3Legend, lineChart3Type, barChartOptions, barChartLabels, barChartType, barChartLegend, barChartData, barChartColors */

    /***/
    function srcAppSharedDataLogisticsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartLabels", function () {
        return doughnutChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartData", function () {
        return doughnutChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartColors", function () {
        return doughnutChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartType", function () {
        return doughnutChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartOptions", function () {
        return doughnutChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieChartLabels", function () {
        return pieChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieChartData", function () {
        return pieChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieChartType", function () {
        return pieChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieChartColors", function () {
        return pieChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieChartOptions", function () {
        return pieChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Data", function () {
        return lineChart2Data;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Labels", function () {
        return lineChart2Labels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Options", function () {
        return lineChart2Options;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Colors", function () {
        return lineChart2Colors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Legend", function () {
        return lineChart2Legend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart2Type", function () {
        return lineChart2Type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Data", function () {
        return lineChart3Data;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Labels", function () {
        return lineChart3Labels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Options", function () {
        return lineChart3Options;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Colors", function () {
        return lineChart3Colors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Legend", function () {
        return lineChart3Legend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart3Type", function () {
        return lineChart3Type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartOptions", function () {
        return barChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartLabels", function () {
        return barChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartType", function () {
        return barChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartLegend", function () {
        return barChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartData", function () {
        return barChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChartColors", function () {
        return barChartColors;
      }); // Doughnut -chart 1


      var doughnutChartLabels = ["Within Time Limit", "Out of Time Limit"];
      var doughnutChartData = [325, 145];
      var doughnutChartColors = [{
        backgroundColor: ["#ffffff", "rgba(255, 255, 255, 0.30)"],
        borderWidth: [0, 0]
      }];
      var doughnutChartType = 'doughnut';
      var doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        //cutoutPercentage: 80,
        legend: {
          position: "bottom",
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 15
          }
        },
        tooltips: {
          displayColors: false
        }
      }; // Pie -Chart 2

      var pieChartLabels = ["Germany", "France", "Switzerland", "Australia"];
      var pieChartData = [55, 220, 40, 40];
      var pieChartType = 'pie';
      var pieChartColors = [{
        backgroundColor: ["rgba(255, 255, 255, 0.35)", "#ffffff", "rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 0.71)"],
        borderWidth: [0, 0, 0, 0]
      }];
      var pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 10
          }
        }
      }; //line -chart 3

      var lineChartData = [{
        data: [10, 18, 12, 8, 15, 10],
        label: 'Total Revenue'
      }];
      var lineChartLabels = ['01', '02', '03', '04', '05', '06'];
      var lineChartOptions = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          },
          tooltips: {
            enabled: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false
          }],
          yAxes: [{
            display: false,
            gridLines: false
          }]
        }
      };
      var lineChartColors = [{
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2
      }];
      var lineChartLegend = true;
      var lineChartType = 'line'; //line -chart 4

      var lineChart2Data = [{
        data: [10, 18, 12, 8, 15, 10],
        label: 'Total Revenue'
      }];
      var lineChart2Labels = ['01', '02', '03', '04', '05', '06'];
      var lineChart2Options = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          },
          tooltips: {
            enabled: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false
          }],
          yAxes: [{
            display: false,
            gridLines: false
          }]
        }
      };
      var lineChart2Colors = [{
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2
      }];
      var lineChart2Legend = true;
      var lineChart2Type = 'line'; //line -chart 5

      var lineChart3Data = [{
        data: [10, 18, 12, 8, 15, 10],
        label: 'Total Revenue'
      }];
      var lineChart3Labels = ['01', '02', '03', '04', '05', '06'];
      var lineChart3Options = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          },
          tooltips: {
            enabled: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false
          }],
          yAxes: [{
            display: false,
            gridLines: false
          }]
        }
      };
      var lineChart3Colors = [{
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2
      }];
      var lineChart3Legend = true;
      var lineChart3Type = 'line'; // bar -Chart 6

      var barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }]
        }
      };
      var barChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var barChartType = 'bar';
      var barChartLegend = true;
      var barChartData = [{
        categoryPercentage: 0.3,
        data: [15, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10],
        label: 'Route'
      }, {
        categoryPercentage: 0.3,
        data: [25, 18, 22, 15, 22, 18, 26, 35, 25, 20, 30, 20],
        label: 'Time'
      }];
      var barChartColors = [{
        backgroundColor: "rgba(255, 255, 255, 0.25)"
      }, {
        backgroundColor: "#fff"
      }];
      /***/
    },

    /***/
    "./src/app/shared/data/service-support.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/data/service-support.ts ***!
      \************************************************/

    /*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType */

    /***/
    function srcAppSharedDataServiceSupportTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      }); //line -chart 2


      var lineChartData = [{
        data: [10, 40, 20, 40, 40, 60, 40, 80, 40, 70, 40, 70],
        label: 'Request Volume'
      }, {
        data: [30, 60, 50, 60, 60, 80, 60, 120, 60, 100, 60, 100],
        label: 'Service Level'
      }];
      var lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var lineChartOptions = {
        animation: {
          duration: 1000,
          easing: 'easeOutBack'
        },
        hover: {
          animationDuration: 1000,
          mode: 'label'
        },
        responsiveAnimationDuration: 1000,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 40
          }
        },
        tooltips: {
          displayColors: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd'
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)"
            }
          }]
        }
      };
      var lineChartColors = [{
        fill: true,
        backgroundColor: '#fff',
        borderColor: "transparent",
        pointRadius: "0",
        lineTension: '0',
        borderWidth: 3
      }, {
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderColor: "transparent",
        pointRadius: "0",
        lineTension: '0',
        borderWidth: 1
      }];
      var lineChartLegend = true;
      var lineChartType = 'line';
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map