(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"], {
    /***/
    "./src/app/maps/fullscreen/fullscreen.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/maps/fullscreen/fullscreen.component.ts ***!
      \*********************************************************/

    /*! exports provided: FullscreenComponent */

    /***/
    function srcAppMapsFullscreenFullscreenComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function () {
        return FullscreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var _c0 = ["map"];

      var FullscreenComponent = /*#__PURE__*/function () {
        function FullscreenComponent() {
          _classCallCheck(this, FullscreenComponent);

          this.lat = -33.4855814;
          this.lng = 146.4032773;
          this.zoom = 8;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -100
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#2ECC71'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
        }

        _createClass(FullscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (entries, observer) {
              _this.map.triggerResize();
            });
            ro.observe(document.querySelector('#sebm-map'));
          }
        }]);

        return FullscreenComponent;
      }();

      FullscreenComponent.??fac = function FullscreenComponent_Factory(t) {
        return new (t || FullscreenComponent)();
      };

      FullscreenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FullscreenComponent,
        selectors: [["app-fullscreen"]],
        viewQuery: function FullscreenComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.map = _t.first);
          }
        },
        decls: 2,
        vars: 4,
        consts: [["id", "sebm-map", 3, "latitude", "longitude", "zoom", "styles"], ["map", ""]],
        template: function FullscreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "agm-map", 0, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("styles", ctx.styles);
          }
        },
        directives: [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]],
        styles: ["[_nghost-%COMP%] {\n  padding: 0 !important;\n  height: 100%;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvbWFwcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmFnbS1tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullscreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-fullscreen',
            templateUrl: './fullscreen.component.html',
            styleUrls: ['./fullscreen.component.scss']
          }]
        }], null, {
          map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/maps/google/google.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/maps/google/google.component.ts ***!
      \*************************************************/

    /*! exports provided: GoogleComponent */

    /***/
    function srcAppMapsGoogleGoogleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleComponent", function () {
        return GoogleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var GoogleComponent = function GoogleComponent() {
        _classCallCheck(this, GoogleComponent);

        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 8;
        this.styles = [{
          featureType: 'all',
          stylers: [{
            saturation: -80
          }]
        }, {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{
            hue: '#00ffee'
          }, {
            saturation: 50
          }]
        }, {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }];
      };

      GoogleComponent.??fac = function GoogleComponent_Factory(t) {
        return new (t || GoogleComponent)();
      };

      GoogleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GoogleComponent,
        selectors: [["app-google"]],
        decls: 64,
        vars: 25,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "card"], [1, "card-header", "no-shadow"], [1, "card-body", "p-0"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "zoom", "styles"], [3, "latitude", "longitude"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl"]],
        template: function GoogleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Google Maps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Maps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Google Maps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Basic Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "agm-map", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Styled Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "agm-map", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Polylines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "agm-map", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "agm-marker", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "agm-marker", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "agm-polyline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "agm-polyline-point", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "agm-polyline-point", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Info Window");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "agm-map", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "agm-marker", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "agm-info-window");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "InfoWindow content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("styles", ctx.styles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.latA)("longitude", ctx.lngA);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.latA)("longitude", ctx.lngA);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false)("zoomControl", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("latitude", ctx.lat)("longitude", ctx.lng);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolyline"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 350px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXBzL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GoogleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-google',
            templateUrl: './google.component.html',
            styleUrls: ['./google.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/maps/maps-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/maps/maps-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: MapsRoutingModule */

    /***/
    function srcAppMapsMapsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function () {
        return MapsRoutingModule;
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


      var _google_google_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./google/google.component */
      "./src/app/maps/google/google.component.ts");
      /* harmony import */


      var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fullscreen/fullscreen.component */
      "./src/app/maps/fullscreen/fullscreen.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'google',
          component: _google_google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"],
          data: {
            title: 'Google Map'
          }
        }, {
          path: 'fullscreen',
          component: _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__["FullscreenComponent"],
          data: {
            title: 'Full Screen Map'
          }
        }]
      }];

      var MapsRoutingModule = function MapsRoutingModule() {
        _classCallCheck(this, MapsRoutingModule);
      };

      MapsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MapsRoutingModule
      });
      MapsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MapsRoutingModule_Factory(t) {
          return new (t || MapsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MapsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MapsRoutingModule, [{
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
    "./src/app/maps/maps.module.ts":
    /*!*************************************!*\
      !*** ./src/app/maps/maps.module.ts ***!
      \*************************************/

    /*! exports provided: MapsModule */

    /***/
    function srcAppMapsMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsModule", function () {
        return MapsModule;
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


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./maps-routing.module */
      "./src/app/maps/maps-routing.module.ts");
      /* harmony import */


      var _google_google_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./google/google.component */
      "./src/app/maps/google/google.component.ts");
      /* harmony import */


      var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fullscreen/fullscreen.component */
      "./src/app/maps/fullscreen/fullscreen.component.ts");

      var MapsModule = function MapsModule() {
        _classCallCheck(this, MapsModule);
      };

      MapsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MapsModule
      });
      MapsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MapsModule_Factory(t) {
          return new (t || MapsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MapsModule, {
          declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_5__["GoogleComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__["FullscreenComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MapsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_5__["GoogleComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__["FullscreenComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=maps-maps-module-es5.js.map