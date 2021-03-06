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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/full/full-layout.component */
      "./src/app/layouts/full/full-layout.component.ts");
      /* harmony import */


      var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/content/content-layout.component */
      "./src/app/layouts/content/content-layout.component.ts");
      /* harmony import */


      var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/routes/full-layout.routes */
      "./src/app/shared/routes/full-layout.routes.ts");
      /* harmony import */


      var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/routes/content-layout.routes */
      "./src/app/shared/routes/content-layout.routes.ts");

      var routes = [{
        path: '',
        redirectTo: 'dashboard/ecommerce-v1',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        data: {
          title: 'full Views'
        },
        children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"]
      }, {
        path: '',
        component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        data: {
          title: 'content Views'
        },
        children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"]
      }, {
        path: '**',
        redirectTo: 'dashboard/ecommerce-v1'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layouts/content/content-layout.component */
      "./src/app/layouts/content/content-layout.component.ts");
      /* harmony import */


      var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layouts/full/full-layout.component */
      "./src/app/layouts/full/full-layout.component.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-ui-switch */
      "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_10__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_9__["ContentLayoutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_10__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_9__["ContentLayoutComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'
            }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/content/content-layout.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/layouts/content/content-layout.component.ts ***!
      \*************************************************************/

    /*! exports provided: ContentLayoutComponent */

    /***/
    function srcAppLayoutsContentContentLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function () {
        return ContentLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ContentLayoutComponent = function ContentLayoutComponent() {
        _classCallCheck(this, ContentLayoutComponent);
      };

      ContentLayoutComponent.??fac = function ContentLayoutComponent_Factory(t) {
        return new (t || ContentLayoutComponent)();
      };

      ContentLayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContentLayoutComponent,
        selectors: [["app-content-layout"]],
        decls: 1,
        vars: 0,
        template: function ContentLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContentLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-content-layout',
            templateUrl: './content-layout.component.html',
            styleUrls: ['./content-layout.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/full/full-layout.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/layouts/full/full-layout.component.ts ***!
      \*******************************************************/

    /*! exports provided: FullLayoutComponent */

    /***/
    function srcAppLayoutsFullFullLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function () {
        return FullLayoutComponent;
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


      var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.service */
      "./src/app/shared/sidebar/sidebar.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/navbar/navbar.component */
      "./src/app/shared/navbar/navbar.component.ts");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "./src/app/shared/footer/footer.component.ts");
      /* harmony import */


      var _shared_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/color-switcher/color-switcher.component */
      "./src/app/shared/color-switcher/color-switcher.component.ts");

      var _c0 = function _c0(a0) {
        return {
          "nav-collapsed": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "show": a0
        };
      };

      var FullLayoutComponent = /*#__PURE__*/function () {
        function FullLayoutComponent(sidebarservice, router) {
          _classCallCheck(this, FullLayoutComponent);

          this.sidebarservice = sidebarservice;
          this.router = router;
        }

        _createClass(FullLayoutComponent, [{
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
          }
        }, {
          key: "getSideBarState",
          value: function getSideBarState() {
            return this.sidebarservice.getSidebarState();
          }
        }, {
          key: "hideSidebar",
          value: function hideSidebar() {
            this.sidebarservice.setSidebarState(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return FullLayoutComponent;
      }();

      FullLayoutComponent.??fac = function FullLayoutComponent_Factory(t) {
        return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FullLayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FullLayoutComponent,
        selectors: [["app-full-layout"]],
        decls: 10,
        vars: 6,
        consts: [["id", "wrapper", 3, "ngClass"], [1, "clearfix"], [1, "content-wrapper"], [1, "container-fluid"], [1, "overlay", 3, "ngClass", "click"]],
        template: function FullLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullLayoutComponent_Template_div_click_7_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-color-switcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx.getSideBarState()));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c1, ctx.getSideBarState()));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_7__["ColorSwitcherComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full-layout.component.html',
            styleUrls: ['./full-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/color-switcher/color-switcher.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/color-switcher/color-switcher.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ColorSwitcherComponent */

    /***/
    function srcAppSharedColorSwitcherColorSwitcherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorSwitcherComponent", function () {
        return ColorSwitcherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ColorSwitcherComponent = /*#__PURE__*/function () {
        function ColorSwitcherComponent() {
          _classCallCheck(this, ColorSwitcherComponent);
        }

        _createClass(ColorSwitcherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // theme setting
            $(".switcher-icon").on("click", function (e) {
              e.preventDefault();
              $(".right-sidebar").toggleClass("right-toggled");
            });
            $('#theme1').click(theme1);
            $('#theme2').click(theme2);
            $('#theme3').click(theme3);
            $('#theme4').click(theme4);
            $('#theme5').click(theme5);
            $('#theme6').click(theme6);
            $('#theme7').click(theme7);
            $('#theme8').click(theme8);
            $('#theme9').click(theme9);
            $('#theme10').click(theme10);
            $('#theme11').click(theme11);
            $('#theme12').click(theme12);
            $('#theme13').click(theme13);
            $('#theme14').click(theme14);
            $('#theme15').click(theme15);

            function theme1() {
              $('body').attr('class', 'bg-theme bg-theme1');
            }

            function theme2() {
              $('body').attr('class', 'bg-theme bg-theme2');
            }

            function theme3() {
              $('body').attr('class', 'bg-theme bg-theme3');
            }

            function theme4() {
              $('body').attr('class', 'bg-theme bg-theme4');
            }

            function theme5() {
              $('body').attr('class', 'bg-theme bg-theme5');
            }

            function theme6() {
              $('body').attr('class', 'bg-theme bg-theme6');
            }

            function theme7() {
              $('body').attr('class', 'bg-theme bg-theme7');
            }

            function theme8() {
              $('body').attr('class', 'bg-theme bg-theme8');
            }

            function theme9() {
              $('body').attr('class', 'bg-theme bg-theme9');
            }

            function theme10() {
              $('body').attr('class', 'bg-theme bg-theme10');
            }

            function theme11() {
              $('body').attr('class', 'bg-theme bg-theme11');
            }

            function theme12() {
              $('body').attr('class', 'bg-theme bg-theme12');
            }

            function theme13() {
              $('body').attr('class', 'bg-theme bg-theme13');
            }

            function theme14() {
              $('body').attr('class', 'bg-theme bg-theme14');
            }

            function theme15() {
              $('body').attr('class', 'bg-theme bg-theme15');
            }
          }
        }]);

        return ColorSwitcherComponent;
      }();

      ColorSwitcherComponent.??fac = function ColorSwitcherComponent_Factory(t) {
        return new (t || ColorSwitcherComponent)();
      };

      ColorSwitcherComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ColorSwitcherComponent,
        selectors: [["app-color-switcher"]],
        decls: 27,
        vars: 0,
        consts: [[1, "right-sidebar"], [1, "switcher-icon"], [1, "zmdi", "zmdi-settings", "zmdi-hc-spin"], [1, "right-sidebar-content"], [1, "mb-0"], [1, "switcher"], ["id", "theme1"], ["id", "theme2"], ["id", "theme3"], ["id", "theme4"], ["id", "theme5"], ["id", "theme6"], ["id", "theme7"], ["id", "theme8"], ["id", "theme9"], ["id", "theme10"], ["id", "theme11"], ["id", "theme12"], ["id", "theme13"], ["id", "theme14"], ["id", "theme15"]],
        template: function ColorSwitcherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Gaussion Texture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Gradient Background");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb2xvci1zd2l0Y2hlci9jb2xvci1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorSwitcherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-color-switcher',
            templateUrl: './color-switcher.component.html',
            styleUrls: ['./color-switcher.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/footer/footer.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /* Back To Top */
            $(document).ready(function () {
              $(window).on("scroll", function () {
                if ($(this).scrollTop() > 300) {
                  $('.back-to-top').fadeIn();
                } else {
                  $('.back-to-top').fadeOut();
                }
              });
              $('.back-to-top').on("click", function () {
                $("html, body").animate({
                  scrollTop: 0
                }, 600);
                return false;
              });
            });
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 0,
        consts: [["href", "javaScript:;", 1, "back-to-top"], [1, "fa", "fa-angle-double-up"], [1, "footer"], [1, "container"], [1, "text-center"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "footer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Copyright \xA9 2020 Slava-admin Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/navbar/navbar.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidebar/sidebar.service */
      "./src/app/shared/sidebar/sidebar.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(sidebarservice) {
          _classCallCheck(this, NavbarComponent);

          this.sidebarservice = sidebarservice;
        }

        _createClass(NavbarComponent, [{
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

            if ($("#wrapper").hasClass("nav-collapsed")) {
              // unpin sidebar when hovered
              $("#wrapper").removeClass("nav-collapsed");
              $("#sidebar-wrapper").unbind("hover");
            } else {
              $("#wrapper").addClass("nav-collapsed");
              $("#sidebar-wrapper").hover(function () {
                $("#wrapper").addClass("sidebar-hovered");
              }, function () {
                $("#wrapper").removeClass("sidebar-hovered");
              });
            }
          }
        }, {
          key: "getSideBarState",
          value: function getSideBarState() {
            return this.sidebarservice.getSidebarState();
          }
        }, {
          key: "hideSidebar",
          value: function hideSidebar() {
            this.sidebarservice.setSidebarState(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            /* Search Bar */
            $(document).ready(function () {
              $(".search-btn-mobile").on("click", function () {
                $(".search-bar").addClass("full-search-bar");
              });
              $(".search-arrow-back").on("click", function () {
                $(".search-bar").removeClass("full-search-bar");
              });
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]));
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 167,
        vars: 0,
        consts: [[1, "topbar-nav"], [1, "navbar", "navbar-expand", "fixed-top"], [1, "toggle-menu", 3, "click"], [1, "zmdi", "zmdi-menu"], [1, "search-bar", "flex-grow-1"], [1, "input-group"], [1, "input-group-prepend", "search-arrow-back"], ["type", "button", 1, "btn", "btn-search-back"], [1, "zmdi", "zmdi-long-arrow-left"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-search"], [1, "zmdi", "zmdi-search"], [1, "navbar-nav", "align-items-center", "right-nav-link", "ml-auto"], [1, "nav-item", "dropdown", "search-btn-mobile"], ["href", "javascript:;", 1, "nav-link", "position-relative"], [1, "zmdi", "zmdi-search", "align-middle"], ["ngbDropdown", "", 1, "nav-item", "dropdown-lg"], ["href", "javascript:;", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle-nocaret", "position-relative"], [1, "zmdi", "zmdi-comment-outline", "align-middle"], [1, "bg-danger", "text-white", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "dropdown-menu-right"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["href", "javascript:;", 1, "extra-small-font"], [1, "list-group-item"], ["href", "javaScript:;"], [1, "media"], [1, "avatar"], ["src", "assets/images/avatars/avatar-5.png", "alt", "user avatar", 1, "align-self-start", "mr-3"], [1, "media-body"], [1, "mt-0", "msg-title"], [1, "msg-info"], ["src", "assets/images/avatars/avatar-6.png", "alt", "user avatar", 1, "align-self-start", "mr-3"], ["src", "assets/images/avatars/avatar-7.png", "alt", "user avatar", 1, "align-self-start", "mr-3"], ["src", "assets/images/avatars/avatar-8.png", "alt", "user avatar", 1, "align-self-start", "mr-3"], [1, "list-group-item", "text-center"], ["href", "javascript:;", "id", "dropdownBasic2", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle-nocaret", "position-relative"], [1, "zmdi", "zmdi-notifications-active", "align-middle"], [1, "bg-info", "text-white", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic2", 1, "dropdown-menu-right"], [1, "zmdi", "zmdi-accounts", "fa-2x", "mr-3", "text-info"], [1, "zmdi", "zmdi-coffee", "fa-2x", "mr-3", "text-warning"], [1, "zmdi", "zmdi-notifications-active", "fa-2x", "mr-3", "text-danger"], ["ngbDropdown", "", 1, "nav-item", "language"], ["href", "javascript:;", "id", "dropdownBasic3", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle-nocaret", "position-relative"], [1, "flag-icon", "flag-icon-gb", "align-middle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic3", 1, "dropdown-menu-right"], ["ngbDropdownItem", ""], [1, "flag-icon", "flag-icon-gb", "mr-3"], [1, "flag-icon", "flag-icon-fr", "mr-3"], [1, "flag-icon", "flag-icon-cn", "mr-3"], [1, "flag-icon", "flag-icon-de", "mr-3"], ["ngbDropdown", "", 1, "nav-item"], ["href", "javascript:;", "id", "dropdownBasic4", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle-nocaret", "position-relative"], [1, "user-profile"], ["src", "assets/images/avatars/avatar-13.png", "alt", "user avatar", 1, "img-circle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic4", 1, "dropdown-menu-right"], [1, "dropdown-item", "user-details"], ["src", "assets/images/avatars/avatar-13.png", "alt", "user avatar", 1, "align-self-start", "mr-3"], [1, "mt-2", "user-title"], [1, "user-subtitle"], [1, "dropdown-divider"], [1, "zmdi", "zmdi-comments", "mr-3"], [1, "zmdi", "zmdi-balance-wallet", "mr-3"], [1, "zmdi", "zmdi-settings", "mr-3"], [1, "zmdi", "zmdi-power", "mr-3"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_div_click_2_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "New Messages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Clear All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Jhon Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Today, 4:10 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Sara Jen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Yesterday, 8:30 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Dannish Josh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "5/11/2018, 2:50 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Katrina Mccoy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Lorem ipsum dolor sit amet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "1/11/2018, 2:50 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "See All Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "New Notifications ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Clear All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "New Registered Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "New Received Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "New Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Lorem ipsum dolor sit amet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "See All Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "ul", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "French");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Chinese");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "German");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "h6", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Sarajhon Mccoy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "mccoy@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/routes/content-layout.routes.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/routes/content-layout.routes.ts ***!
      \********************************************************/

    /*! exports provided: CONTENT_ROUTES */

    /***/
    function srcAppSharedRoutesContentLayoutRoutesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function () {
        return CONTENT_ROUTES;
      }); //Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...


      var CONTENT_ROUTES = [{
        path: 'pages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-content-pages-content-pages-module */
          "pages-content-pages-content-pages-module").then(__webpack_require__.bind(null,
          /*! ../../pages/content-pages/content-pages.module */
          "./src/app/pages/content-pages/content-pages.module.ts")).then(function (m) {
            return m.ContentPagesModule;
          });
        }
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ../../auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }];
      /***/
    },

    /***/
    "./src/app/shared/routes/full-layout.routes.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/routes/full-layout.routes.ts ***!
      \*****************************************************/

    /*! exports provided: Full_ROUTES */

    /***/
    function srcAppSharedRoutesFullLayoutRoutesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function () {
        return Full_ROUTES;
      }); //Route for content layout with sidebar, navbar and footer.


      var Full_ROUTES = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~widgets-widgets-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ../../dashboard/dashboard.module */
          "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'components',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-components-module */
          [__webpack_require__.e("default~components-components-module~ui-elements-ui-elements-module"), __webpack_require__.e("components-components-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/components.module */
          "./src/app/components/components.module.ts")).then(function (m) {
            return m.ComponentsModule;
          });
        }
      }, {
        path: 'ui-elements',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ui-elements-ui-elements-module */
          [__webpack_require__.e("default~components-components-module~ui-elements-ui-elements-module"), __webpack_require__.e("ui-elements-ui-elements-module")]).then(__webpack_require__.bind(null,
          /*! ../../ui-elements/ui-elements.module */
          "./src/app/ui-elements/ui-elements.module.ts")).then(function (m) {
            return m.UIElementsModule;
          });
        }
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | charts-charts-module */
          [__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~widgets-widgets-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
          /*! ../../charts/charts.module */
          "./src/app/charts/charts.module.ts")).then(function (m) {
            return m.ChartsNg2Module;
          });
        }
      }, {
        path: 'widgets',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | widgets-widgets-module */
          [__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~widgets-widgets-module"), __webpack_require__.e("widgets-widgets-module")]).then(__webpack_require__.bind(null,
          /*! ../../widgets/widgets.module */
          "./src/app/widgets/widgets.module.ts")).then(function (m) {
            return m.WidgetsModule;
          });
        }
      }, {
        path: 'form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | form-form-module */
          "form-form-module").then(__webpack_require__.bind(null,
          /*! ../../form/form.module */
          "./src/app/form/form.module.ts")).then(function (m) {
            return m.FormModule;
          });
        }
      }, {
        path: 'calendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | fullcalendar-fullcalendar-module */
          "fullcalendar-fullcalendar-module").then(__webpack_require__.bind(null,
          /*! ../../fullcalendar/fullcalendar.module */
          "./src/app/fullcalendar/fullcalendar.module.ts")).then(function (m) {
            return m.FullcalendarModule;
          });
        }
      }, {
        path: 'table',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tables-tables-module */
          "tables-tables-module").then(__webpack_require__.bind(null,
          /*! ../../tables/tables.module */
          "./src/app/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }, {
        path: 'datatable',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | datatable-datatable-module */
          "datatable-datatable-module").then(__webpack_require__.bind(null,
          /*! ../../datatable/datatable.module */
          "./src/app/datatable/datatable.module.ts")).then(function (m) {
            return m.DatatableModule;
          });
        }
      }, {
        path: 'ui-icons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ui-icons-ui-icons-module */
          "ui-icons-ui-icons-module").then(__webpack_require__.bind(null,
          /*! ../../ui-icons/ui-icons.module */
          "./src/app/ui-icons/ui-icons.module.ts")).then(function (m) {
            return m.UiIconsModule;
          });
        }
      }, {
        path: 'maps',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | maps-maps-module */
          "maps-maps-module").then(__webpack_require__.bind(null,
          /*! ../../maps/maps.module */
          "./src/app/maps/maps.module.ts")).then(function (m) {
            return m.MapsModule;
          });
        }
      }, {
        path: 'pages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-full-pages-full-pages-module */
          "pages-full-pages-full-pages-module").then(__webpack_require__.bind(null,
          /*! ../../pages/full-pages/full-pages.module */
          "./src/app/pages/full-pages/full-pages.module.ts")).then(function (m) {
            return m.FullPagesModule;
          });
        }
      }];
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/shared/footer/footer.component.ts");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "./src/app/shared/navbar/navbar.component.ts");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./color-switcher/color-switcher.component */
      "./src/app/shared/color-switcher/color-switcher.component.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/sidebar/sidebar-routes.config.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
      \*********************************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedSidebarSidebarRoutesConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      }); //Sidebar menu Routes and data


      var ROUTES = [{
        path: '',
        title: 'Dashboard',
        icon: 'zmdi zmdi-view-dashboard',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/dashboard/ecommerce-v1',
          title: 'eCommerce v1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/ecommerce-v2',
          title: 'eCommerce v2',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/human-resources',
          title: 'Human Resources',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/digital-marketing',
          title: 'Digital Marketing',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/property-listing',
          title: 'Property Listings',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/service-support',
          title: 'Services & Support',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/healthcare',
          title: 'Healthcare',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/dashboard/logistics',
          title: 'Logistics',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'UI Elements',
        icon: 'zmdi zmdi-layers',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/ui-elements/typography',
          title: 'Typography',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/cards',
          title: 'Cards',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/buttons',
          title: 'Buttons',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/nav-tabs',
          title: 'Nav Tabs',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/tabset',
          title: 'Tabset',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/accordion',
          title: 'Accordion',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/modals',
          title: 'Modals',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/list-groups',
          title: 'List Groups',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/bs-elements',
          title: 'BS Elements',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/tag-input',
          title: 'Tag Input',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/pagination',
          title: 'Pagination',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/alerts',
          title: 'Alerts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/progress-bar',
          title: 'Progress Bars',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/toastr',
          title: 'Toastr',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-elements/sweet-alerts',
          title: 'Sweet Alert',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Components',
        icon: 'zmdi zmdi-card-travel',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/components/carousel',
          title: 'Carousel',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/grid-layouts',
          title: 'Grid Layouts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/switch',
          title: 'Switch',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/pricing-table',
          title: 'Pricing Table',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/vertical-timeline',
          title: 'Vertical Timeline',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/horizontal-timeline',
          title: 'Horizontal Timeline',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/color-palette',
          title: 'Color Palette',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/collapse',
          title: 'Collapse',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/components/dropdown',
          title: 'Dropdown',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Charts',
        icon: 'zmdi zmdi-chart',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/charts/chartjs',
          title: 'ChartJs',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/charts/apex-charts',
          title: 'Apex Charts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/charts/sparkline-charts',
          title: 'Sparkline Charts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/charts/peity-charts',
          title: 'Peity Charts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/charts/other-charts',
          title: 'Other Charts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Widgets',
        icon: 'zmdi zmdi-widgets',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/widgets/static-widgets',
          title: 'Static Widgets',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/widgets/data-widgets',
          title: 'Data Widgets',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Authentication',
        icon: 'zmdi zmdi-lock',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/auth/signin1',
          title: 'SignIn 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/signup1',
          title: 'SignUp 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/signin2',
          title: 'SignIn 2',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/signup2',
          title: 'SignUp 2',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/lock-screen',
          title: 'Lock Screen',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/reset-password1',
          title: 'Reset Password 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/auth/reset-password2',
          title: 'Reset Password 2',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Form',
        icon: 'zmdi zmdi-format-list-bulleted',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/form/basic-inputs',
          title: 'Basic Inputs',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/input-group',
          title: 'Input Group',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/form-layouts',
          title: 'Form Iayouts',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/masks',
          title: 'Masks',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/editor',
          title: 'Editor',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/validation',
          title: 'Validation',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/timepicker',
          title: 'Timepicker',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/form/datepicker',
          title: 'Datepicker',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '/calendar',
        title: 'Calendar',
        icon: 'zmdi zmdi-calendar-check',
        "class": '',
        badge: 'New',
        badgeClass: 'badge badge-light ml-auto',
        isExternalLink: false,
        submenu: []
      }, {
        path: '',
        title: 'Tables',
        icon: 'zmdi zmdi-grid',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/table/basic',
          title: 'Basic',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/table/responsive',
          title: 'Responsive',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Data Tables',
        icon: 'fa fa-database',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/datatable/basic',
          title: 'Basic',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/fullscreen',
          title: 'Fullscreen',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/editing',
          title: 'Editing',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/filter',
          title: 'Filter',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/paging',
          title: 'Paging',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/pinning',
          title: 'Pinning',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/selection',
          title: 'Selection',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/datatable/sorting',
          title: 'Sorting',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'UI Icons',
        icon: 'zmdi zmdi-invert-colors',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/ui-icons/font-awesome-icon',
          title: 'Font Awesome icon',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-icons/material-design',
          title: 'Material Design',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-icons/themify',
          title: 'Themify',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/ui-icons/line-icons',
          title: 'Line Icons',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Maps',
        icon: 'zmdi zmdi-map',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/maps/google',
          title: 'Google Maps',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/maps/fullscreen',
          title: 'Full Screen Map',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: '',
        title: 'Pages',
        icon: 'zmdi zmdi-collection-folder-image',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: '/pages/invoice',
          title: 'Invoice',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/pages/user-profile',
          title: 'User Profile',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/pages/blank-page',
          title: 'Blank Page',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: '/pages/coming-soon',
          title: 'Coming Soon',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/pages/error-403',
          title: 'Error 403',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/pages/error-404',
          title: 'Error 404',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }, {
          path: '/pages/error-500',
          title: 'Error 500',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: true,
          submenu: []
        }]
      }, {
        path: 'javascript:;',
        title: 'Menu Levels',
        icon: 'fa fa-share',
        "class": 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [{
          path: 'javascript:;',
          title: 'Level 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }, {
          path: 'javascript:;',
          title: 'Level 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": 'sub',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: [{
            path: 'javascript:;',
            title: 'level 2',
            icon: 'zmdi zmdi-dot-circle-alt',
            "class": '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }, {
            path: 'javascript:;',
            title: 'level 2',
            icon: 'zmdi zmdi-dot-circle-alt',
            "class": '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }, {
            path: 'javascript:;',
            title: 'level 2',
            icon: 'zmdi zmdi-dot-circle-alt',
            "class": '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }]
        }, {
          path: 'javascript:;',
          title: 'Level 1',
          icon: 'zmdi zmdi-dot-circle-alt',
          "class": '',
          badge: '',
          badgeClass: '',
          isExternalLink: false,
          submenu: []
        }]
      }, {
        path: 'https://codervent.com/Slava-admin-angular/docs/',
        title: 'Documentation',
        icon: 'fa fa-address-book',
        "class": '',
        badge: '',
        badgeClass: '',
        isExternalLink: true,
        submenu: []
      }, {
        path: 'https://themeforest.net/user/codervent/portfolio',
        title: 'Support',
        icon: 'zmdi zmdi-help-outline',
        "class": '',
        badge: '',
        badgeClass: '',
        isExternalLink: true,
        submenu: []
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar-routes.config */
      "./src/app/shared/sidebar/sidebar-routes.config.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sidebar/sidebar.service */
      "./src/app/shared/sidebar/sidebar.service.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_7_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuItem_r1.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r1.badge);
        }
      }

      function SidebarComponent_li_7_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", menuItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuItem_r1.path) : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r1.badge != "");
        }
      }

      function SidebarComponent_li_7_ng_template_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuItem_r1.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r1.badge);
        }
      }

      function SidebarComponent_li_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ng_template_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r1.badge != "");
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuSubItem_r13.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubItem_r13.badge);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_li_1_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", menuSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuSubItem_r13.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuSubItem_r13.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubItem_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuSubItem_r13.badge != "");
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ng_template_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuSubItem_r13.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubItem_r13.badge);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_li_1_ng_template_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuSubItem_r13.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuSubItem_r13.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubItem_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuSubItem_r13.badge != "");
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubsubItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuSubsubItem_r25.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubsubItem_r25.badge);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubsubItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuSubsubItem_r25.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuSubsubItem_r25.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubsubItem_r25.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuSubsubItem_r25.badge != "");
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_ng_template_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubsubItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, menuSubsubItem_r25.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubsubItem_r25.badge);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_ng_template_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubsubItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuSubsubItem_r25.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuSubsubItem_r25.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuSubsubItem_r25.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuSubsubItem_r25.badge != "");
        }
      }

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_a_1_Template, 5, 8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 5, 8, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubsubItem_r25 = ctx.$implicit;

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, menuSubsubItem_r25["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !menuSubsubItem_r25.isExternalLink)("ngIfElse", _r27);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_7_ul_4_li_1_ul_4_li_1_Template, 4, 7, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", menuSubItem_r13.submenu);
        }
      }

      function SidebarComponent_li_7_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_7_ul_4_li_1_a_1_Template, 5, 8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_7_ul_4_li_1_ng_template_2_Template, 5, 8, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_li_1_ul_4_Template, 2, 1, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuSubItem_r13 = ctx.$implicit;

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", menuSubItem_r13.submenu.length > 0 ? "" : "active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, menuSubItem_r13["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !menuSubItem_r13.isExternalLink)("ngIfElse", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuSubItem_r13.submenu.length > 0);
        }
      }

      function SidebarComponent_li_7_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_7_ul_4_li_1_Template, 5, 7, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", menuItem_r1.submenu);
        }
      }

      function SidebarComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_7_a_1_Template, 5, 8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_7_ng_template_2_Template, 5, 8, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_7_ul_4_Template, 2, 1, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, menuItem_r1["class"]))("routerLinkActive", menuItem_r1.submenu.length != 0 ? "" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !menuItem_r1.isExternalLink)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r1.submenu.length > 0);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(sidebarservice, router) {
          var _this = this;

          _classCallCheck(this, SidebarComponent);

          this.sidebarservice = sidebarservice;
          this.router = router;
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {// Show loading indicator
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && jquery__WEBPACK_IMPORTED_MODULE_3__(window).width() < 1025 && (document.readyState == 'complete' || false)) {
              _this.toggleSidebar(); // Hide loading indicator

            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
              // Hide loading indicator
              // Present error to user
              console.log(event.error);
            }
          });
        }

        _createClass(SidebarComponent, [{
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
          }
        }, {
          key: "getSideBarState",
          value: function getSideBarState() {
            return this.sidebarservice.getSidebarState();
          }
        }, {
          key: "hideSidebar",
          value: function hideSidebar() {
            this.sidebarservice.setSidebarState(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) {
              return menuItem;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__["getScript"]('./assets/js/app-sidebar.js');
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 8,
        vars: 1,
        consts: [["id", "sidebar-wrapper", 1, "sidebar"], [1, "brand-logo"], ["src", "assets/images/logo-icon.png", "alt", "logo icon", 1, "logo-icon"], [1, "logo-text"], [1, "sidebar-content", 3, "perfectScrollbar"], [1, "navigation"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalLinkBlock", ""], ["class", "menu-content", 4, "ngIf"], [3, "routerLink"], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "menu-content"], [3, "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLinkActive", "ngClass"], ["externalSubLinkBlock", ""], [1, "sub-menu-title"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "ngClass"], ["externalSubSubLinkBlock", ""]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Slava-admin ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, SidebarComponent_li_7_Template, 5, 9, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/sidebar/sidebar.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.service.ts ***!
      \***************************************************/

    /*! exports provided: SidebarService */

    /***/
    function srcAppSharedSidebarSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
        return SidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SidebarService = /*#__PURE__*/function () {
        function SidebarService() {
          _classCallCheck(this, SidebarService);

          this.toggled = false;
        }

        _createClass(SidebarService, [{
          key: "toggle",
          value: function toggle() {
            this.toggled = !this.toggled;
          }
        }, {
          key: "getSidebarState",
          value: function getSidebarState() {
            return this.toggled;
          }
        }, {
          key: "setSidebarState",
          value: function setSidebarState(state) {
            this.toggled = state;
          }
        }]);

        return SidebarService;
      }();

      SidebarService.??fac = function SidebarService_Factory(t) {
        return new (t || SidebarService)();
      };

      SidebarService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: SidebarService,
        factory: SidebarService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
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
      /*! E:\SAMPLE\templates\slava-admin\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map