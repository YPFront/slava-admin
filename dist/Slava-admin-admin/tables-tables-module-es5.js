(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "./src/app/tables/basic/basic.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/tables/basic/basic.component.ts ***!
      \*************************************************/

    /*! exports provided: BasicComponent */

    /***/
    function srcAppTablesBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
        return BasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var BasicComponent = /*#__PURE__*/function () {
        function BasicComponent() {
          _classCallCheck(this, BasicComponent);
        }

        _createClass(BasicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicComponent;
      }();

      BasicComponent.??fac = function BasicComponent_Factory(t) {
        return new (t || BasicComponent)();
      };

      BasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BasicComponent,
        selectors: [["app-basic"]],
        decls: 345,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "table", "table-bordered"], ["colspan", "2"], [1, "table", "table-striped"], [1, "table", "table-hover"], [1, "table", "table-sm"]],
        template: function BasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Basic");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Bordered Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Striped Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Hover Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "table", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Small Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "table", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Responsive Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Cell");

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
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9iYXNpYy9iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-basic',
            templateUrl: './basic.component.html',
            styleUrls: ['./basic.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/tables/responsive/responsive.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/tables/responsive/responsive.component.ts ***!
      \***********************************************************/

    /*! exports provided: ResponsiveComponent */

    /***/
    function srcAppTablesResponsiveResponsiveComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponsiveComponent", function () {
        return ResponsiveComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var ResponsiveComponent = /*#__PURE__*/function () {
        function ResponsiveComponent() {
          _classCallCheck(this, ResponsiveComponent);
        }

        _createClass(ResponsiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ResponsiveComponent;
      }();

      ResponsiveComponent.??fac = function ResponsiveComponent_Factory(t) {
        return new (t || ResponsiveComponent)();
      };

      ResponsiveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ResponsiveComponent,
        selectors: [["app-responsive"]],
        decls: 124,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"]],
        template: function ResponsiveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Responsive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Responsive");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Responsive Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Cell");

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
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResponsiveComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-responsive',
            templateUrl: './responsive.component.html',
            styleUrls: ['./responsive.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/tables/tables-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/tables/tables-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TablesRoutingModule */

    /***/
    function srcAppTablesTablesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () {
        return TablesRoutingModule;
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


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/tables/basic/basic.component.ts");
      /* harmony import */


      var _responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./responsive/responsive.component */
      "./src/app/tables/responsive/responsive.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'basic',
          component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"],
          data: {
            title: 'Basic'
          }
        }, {
          path: 'responsive',
          component: _responsive_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"],
          data: {
            title: 'Responsive'
          }
        }]
      }];

      var TablesRoutingModule = function TablesRoutingModule() {
        _classCallCheck(this, TablesRoutingModule);
      };

      TablesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TablesRoutingModule
      });
      TablesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TablesRoutingModule_Factory(t) {
          return new (t || TablesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesRoutingModule, [{
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
    "./src/app/tables/tables.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppTablesTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tables-routing.module */
      "./src/app/tables/tables-routing.module.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/tables/basic/basic.component.ts");
      /* harmony import */


      var _responsive_responsive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./responsive/responsive.component */
      "./src/app/tables/responsive/responsive.component.ts");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TablesModule
      });
      TablesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__["TablesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TablesModule, {
          declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"], _responsive_responsive_component__WEBPACK_IMPORTED_MODULE_5__["ResponsiveComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__["TablesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"], _responsive_responsive_component__WEBPACK_IMPORTED_MODULE_5__["ResponsiveComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__["TablesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map