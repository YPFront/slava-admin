(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-pages-full-pages-module"], {
    /***/
    "./src/app/pages/full-pages/blank/blank.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/full-pages/blank/blank.component.ts ***!
      \***********************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function srcAppPagesFullPagesBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var BlankComponent = /*#__PURE__*/function () {
        function BlankComponent() {
          _classCallCheck(this, BlankComponent);
        }

        _createClass(BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankComponent;
      }();

      BlankComponent.??fac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank"]],
        decls: 37,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-12"], [2, "height", "600px"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Blank Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Blank Page");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Blank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "This is an example of a blank page that you can use as a starting point for creating new ones.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvYmxhbmsvYmxhbmsuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank',
            templateUrl: './blank.component.html',
            styleUrls: ['./blank.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/full-pages/full-pages-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/full-pages/full-pages-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: FullPagesRoutingModule */

    /***/
    function srcAppPagesFullPagesFullPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function () {
        return FullPagesRoutingModule;
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


      var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice/invoice.component */
      "./src/app/pages/full-pages/invoice/invoice.component.ts");
      /* harmony import */


      var _blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blank/blank.component */
      "./src/app/pages/full-pages/blank/blank.component.ts");
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "./src/app/pages/full-pages/user-profile/user-profile.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'invoice',
          component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
          data: {
            title: 'Invoice'
          }
        }, {
          path: 'blank-page',
          component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
          data: {
            title: 'Blank Page'
          }
        }, {
          path: 'user-profile',
          component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
          data: {
            title: 'User Profile'
          }
        }]
      }];

      var FullPagesRoutingModule = function FullPagesRoutingModule() {
        _classCallCheck(this, FullPagesRoutingModule);
      };

      FullPagesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: FullPagesRoutingModule
      });
      FullPagesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function FullPagesRoutingModule_Factory(t) {
          return new (t || FullPagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FullPagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullPagesRoutingModule, [{
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
    "./src/app/pages/full-pages/full-pages.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/full-pages/full-pages.module.ts ***!
      \*******************************************************/

    /*! exports provided: FullPagesModule */

    /***/
    function srcAppPagesFullPagesFullPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullPagesModule", function () {
        return FullPagesModule;
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


      var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./full-pages-routing.module */
      "./src/app/pages/full-pages/full-pages-routing.module.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./invoice/invoice.component */
      "./src/app/pages/full-pages/invoice/invoice.component.ts");
      /* harmony import */


      var _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blank/blank.component */
      "./src/app/pages/full-pages/blank/blank.component.ts");
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "./src/app/pages/full-pages/user-profile/user-profile.component.ts");

      var FullPagesModule = function FullPagesModule() {
        _classCallCheck(this, FullPagesModule);
      };

      FullPagesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: FullPagesModule
      });
      FullPagesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function FullPagesModule_Factory(t) {
          return new (t || FullPagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FullPagesModule, {
          declarations: [_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"], _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullPagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"], _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/full-pages/invoice/invoice.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/full-pages/invoice/invoice.component.ts ***!
      \***************************************************************/

    /*! exports provided: InvoiceComponent */

    /***/
    function srcAppPagesFullPagesInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
        return InvoiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var InvoiceComponent = /*#__PURE__*/function () {
        function InvoiceComponent() {
          _classCallCheck(this, InvoiceComponent);
        }

        _createClass(InvoiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvoiceComponent;
      }();

      InvoiceComponent.??fac = function InvoiceComponent_Factory(t) {
        return new (t || InvoiceComponent)();
      };

      InvoiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: InvoiceComponent,
        selectors: [["app-invoice"]],
        decls: 200,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-body"], [1, "content-header"], [1, "invoice"], [1, "row", "mt-3"], [1, "col-lg-6"], [1, "fa", "fa-globe"], [1, "float-sm-right"], [1, "row", "invoice-info"], [1, "col-sm-4", "invoice-col"], [1, "row"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "col-lg-6", "payment-icons"], [1, "lead"], ["src", "assets/images/payment-icons/visa-dark.png", "alt", "Visa"], ["src", "assets/images/payment-icons/mastro-dark.png", "alt", "Mastercard"], ["src", "assets/images/payment-icons/american-dark.png", "alt", "American Express"], ["src", "assets/images/payment-icons/paypal-dark.png", "alt", "Paypal"], [1, "bg-light", "p-2", "mt-3", "rounded"], [1, "table-responsive"], [1, "table"], [2, "width", "50%"], [1, "row", "no-print"], [1, "col-lg-3"], ["href", "javascript:window.print();", "target", "_blank", 1, "btn", "btn-dark", "m-1"], [1, "fa", "fa-print"], [1, "col-lg-9"], [1, "btn", "btn-success", "m-1"], [1, "fa", "fa-credit-card"], [1, "btn", "btn-primary", "m-1"], [1, "fa", "fa-download"]],
        template: function InvoiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Invoice");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Invoice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "#007612");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Company Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Date: 2/10/2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "From ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Kudiland Inc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " 543 suthpark drive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Boston, MA 94107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Phone: (555) 539-1444");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Email: info@example.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "To ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Sandra Mekoya");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " 543 suthpark drive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Boston, MA 94107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " Phone: (555) 539-1444");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Email: support@example.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Invoice #007612");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Order ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " 4F3S8J ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Payment Due:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " 2/22/2014 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Account:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " 968-34567");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "table", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Qty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Serial #");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Call of Duty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "455-981-221");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "El snort testosterone trophy driving gloves handsome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "$64.50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Need for Speed IV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "247-925-726");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Wes Anderson umami biodiesel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "$50.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Monsters DVD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "735-845-642");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Terry Richardson helvetica tousled street art master");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "$10.70");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Grown Ups Blue Ray");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "422-568-642");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Tousled lomo letterpress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "$25.99");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Payment Methods:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Amount Due 2/22/2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "table", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "th", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Subtotal:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "$250.30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Tax (9.3%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "$10.34");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Shipping:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "$5.80");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Total:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "$265.24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " Submit Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " Generate PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoiceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice',
            templateUrl: './invoice.component.html',
            styleUrls: ['./invoice.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/full-pages/user-profile/user-profile.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/full-pages/user-profile/user-profile.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UserProfileComponent */

    /***/
    function srcAppPagesFullPagesUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return UserProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function UserProfileComponent_ng_template_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Web Designer, UI/UX Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Hobbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Indie music, skiing and hiking. I love the great outdoors.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Recent badges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "html5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "react");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "codeply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "angularjs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "css3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "jquery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "responsive-design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " 900 Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " 43 Forks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " 245 Views");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h5", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Recent Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "table", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Abby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " joined ACME Project Team in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "`Collaboration`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Gary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " deleted My Board1 in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "`Discussions`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Kensington");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " deleted MyBoard3 in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "`Discussions`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " deleted My Board1 in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "`Discussions`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Skell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " deleted his post Look at Why this is.. in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "`Discussions`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserProfileComponent_ng_template_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Info!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Better check yourself, you're looking too good.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "3 hrs ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Here is your a link to the latest summary report from the..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Yesterday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " There has been a request on your account since that was..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "9/10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "9/4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Vestibulum tincidunt ullamcorper eros eget luctus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "9/4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", true);
        }
      }

      function UserProfileComponent_ng_template_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Change profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent() {
          _classCallCheck(this, UserProfileComponent);
        }

        _createClass(UserProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserProfileComponent;
      }();

      UserProfileComponent.??fac = function UserProfileComponent_Factory(t) {
        return new (t || UserProfileComponent)();
      };

      UserProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserProfileComponent,
        selectors: [["app-user-profile"]],
        decls: 113,
        vars: 5,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-4"], [1, "card", "profile-card-2"], [1, "card-img-block"], ["src", "assets/images/gallery/31.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "card-body", "pt-5"], ["src", "assets/images/avatars/avatar-15.png", "alt", "profile-image", 1, "profile"], [1, "card-title"], [1, "card-text"], [1, "icon-block"], ["href", "javascript:;"], [1, "fa", "fa-facebook", "bg-facebook", "text-white"], [1, "fa", "fa-twitter", "bg-twitter", "text-white"], [1, "fa", "fa-google-plus", "bg-google-plus", "text-white"], [1, "card-body", "border-top", "border-light"], [1, "media", "align-items-center"], ["src", "assets/images/timeline/html5.svg", "alt", "skill img", 1, "skill-img"], [1, "media-body", "text-left", "ml-3"], [1, "progress-wrapper"], [1, "float-right"], ["type", "white", "height", "5px", 3, "value"], ["src", "assets/images/timeline/bootstrap-4.svg", "alt", "skill img", 1, "skill-img"], ["src", "assets/images/timeline/angular-icon.svg", "alt", "skill img", 1, "skill-img"], ["src", "assets/images/timeline/react.svg", "alt", "skill img", 1, "skill-img"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], ["ngbNav", "", 1, "nav-tabs", "nav-tabs-primary", "top-icon", "nav-justified"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], [1, "icon-user"], ["ngbNavContent", ""], [1, "icon-envelope-open"], [1, "icon-note"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "mb-3"], [1, "col-md-6"], ["href", "javascript:;", 1, "badge", "badge-dark", "badge-pill", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-dark", "badge-pill"], [1, "badge", "badge-primary", "mr-1"], [1, "fa", "fa-user"], [1, "badge", "badge-success", "mr-1"], [1, "fa", "fa-cog"], [1, "badge", "badge-danger"], [1, "fa", "fa-eye"], [1, "col-md-12"], [1, "mt-2", "mb-3"], [1, "fa", "fa-clock-o", "ion-clock", "float-right"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped"], ["type", "info", 3, "dismissible"], [1, "float-right", "font-weight-bold"], [1, "form-group", "row"], [1, "col-lg-3", "col-form-label", "form-control-label"], [1, "col-lg-9"], ["type", "text", "value", "Mark", 1, "form-control"], ["type", "text", "value", "Jhonsan", 1, "form-control"], ["type", "email", "value", "mark@example.com", 1, "form-control"], ["type", "file", 1, "form-control"], ["type", "url", "value", "", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Street", 1, "form-control"], [1, "col-lg-6"], ["type", "text", "value", "", "placeholder", "City", 1, "form-control"], [1, "col-lg-3"], ["type", "text", "value", "", "placeholder", "State", 1, "form-control"], ["type", "text", "value", "jhonsanmark", 1, "form-control"], ["type", "password", "value", "11111122333", 1, "form-control"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "value", "Save Changes", 1, "btn", "btn-primary"]],
        template: function UserProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "User Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "User Profile");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Mark Stern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "HTML5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "ngb-progressbar", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Bootstrap 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "ngb-progressbar", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "AngularJS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "ngb-progressbar", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "React JS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "35%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "ngb-progressbar", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "nav", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](97, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](101, UserProfileComponent_ng_template_101_Template, 83, 0, "ng-template", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](102, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](106, UserProfileComponent_ng_template_106_Template, 32, 1, "ng-template", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](107, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](111, UserProfileComponent_ng_template_111_Template, 57, 0, "ng-template", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavOutlet", _r0);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-full-pages-full-pages-module-es5.js.map