(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"], {
    /***/
    "./src/app/charts/apex-charts/apex-charts.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/charts/apex-charts/apex-charts.component.ts ***!
      \*************************************************************/

    /*! exports provided: ApexChartsComponent */

    /***/
    function srcAppChartsApexChartsApexChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexChartsComponent", function () {
        return ApexChartsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var ApexChartsComponent = /*#__PURE__*/function () {
        function ApexChartsComponent() {
          _classCallCheck(this, ApexChartsComponent);
        }

        _createClass(ApexChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript("./assets/js/apex-custom-script.js");
          }
        }]);

        return ApexChartsComponent;
      }();

      ApexChartsComponent.??fac = function ApexChartsComponent_Factory(t) {
        return new (t || ApexChartsComponent)();
      };

      ApexChartsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ApexChartsComponent,
        selectors: [["app-apex-charts"]],
        decls: 86,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-12", "col-lg-12", "col-xl-12"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], ["id", "chart1"], ["id", "chart2"], ["id", "chart3"], [1, "col-12", "col-lg-6", "col-xl-6"], ["id", "chart4"], ["id", "chart5"], ["id", "chart6"], ["id", "chart7"], ["id", "chart8"], ["id", "chart9"]],
        template: function ApexChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Apex Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Apex Chart");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Line Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Area Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Column Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Donut Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Pie Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Radar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Radialbar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Circle Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Stroked Gauge Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hcGV4LWNoYXJ0cy9hcGV4LWNoYXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApexChartsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apex-charts',
            templateUrl: './apex-charts.component.html',
            styleUrls: ['./apex-charts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/charts/chartjs/chartjs.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/charts/chartjs/chartjs.component.ts ***!
      \*****************************************************/

    /*! exports provided: ChartjsComponent */

    /***/
    function srcAppChartsChartjsChartjsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function () {
        return ChartjsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/chartjs */
      "./src/app/shared/data/chartjs.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

      var ChartjsComponent = /*#__PURE__*/function () {
        function ChartjsComponent() {
          _classCallCheck(this, ChartjsComponent);

          // lineChart
          this.lineChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // barChart

          this.barChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartOptions"];
          this.barChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartLabels"];
          this.barChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartType"];
          this.barChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartLegend"];
          this.barChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartData"];
          this.barChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["barChartColors"]; // Polor

          this.polorChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["polorChartLabels"];
          this.polorChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["polorChartData"];
          this.polorChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["polorChartType"];
          this.polorChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["polorChartColors"];
          this.polorChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["polorChartOptions"]; // Pie

          this.pieChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["pieChartLabels"];
          this.pieChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["pieChartData"];
          this.pieChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["pieChartType"];
          this.pieChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["pieChartColors"];
          this.pieChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["pieChartOptions"]; // Doughnut

          this.doughnutChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["doughnutChartLabels"];
          this.doughnutChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["doughnutChartData"];
          this.doughnutChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["doughnutChartType"];
          this.doughnutChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["doughnutChartColors"];
          this.doughnutChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_1__["doughnutChartOptions"];
        } // events


        _createClass(ChartjsComponent, [{
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

        return ChartjsComponent;
      }();

      ChartjsComponent.??fac = function ChartjsComponent_Factory(t) {
        return new (t || ChartjsComponent)();
      };

      ChartjsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChartjsComponent,
        selectors: [["app-chartjs"]],
        decls: 67,
        vars: 27,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-6", "col-xl-6"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], [1, "height-240"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "col-lg-6", "col-xl-4"], ["baseChart", "", 3, "data", "labels", "options", "chartType", "colors", "chartHover", "chartClick"]],
        template: function ChartjsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Chart JS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Fobia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Chart JS");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Line chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_37_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ChartjsComponent_Template_canvas_chartClick_37_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Bar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_44_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ChartjsComponent_Template_canvas_chartClick_44_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Polar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "canvas", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_52_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ChartjsComponent_Template_canvas_chartClick_52_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Pie Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "canvas", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_59_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ChartjsComponent_Template_canvas_chartClick_59_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Doughnut Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "canvas", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_66_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function ChartjsComponent_Template_canvas_chartClick_66_listener($event) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.polorChartData)("labels", ctx.polorChartLabels)("options", ctx.polorChartOptions)("chartType", ctx.polorChartType)("colors", ctx.polorChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("options", ctx.pieChartOptions)("chartType", ctx.pieChartType)("colors", ctx.pieChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jaGFydGpzL2NoYXJ0anMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartjsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chartjs',
            templateUrl: './chartjs.component.html',
            styleUrls: ['./chartjs.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/charts/charts-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/charts/charts-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ChartsRoutingModule */

    /***/
    function srcAppChartsChartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function () {
        return ChartsRoutingModule;
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


      var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chartjs/chartjs.component */
      "./src/app/charts/chartjs/chartjs.component.ts");
      /* harmony import */


      var _apex_charts_apex_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apex-charts/apex-charts.component */
      "./src/app/charts/apex-charts/apex-charts.component.ts");
      /* harmony import */


      var _sparkline_charts_sparkline_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sparkline-charts/sparkline-charts.component */
      "./src/app/charts/sparkline-charts/sparkline-charts.component.ts");
      /* harmony import */


      var _other_charts_other_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./other-charts/other-charts.component */
      "./src/app/charts/other-charts/other-charts.component.ts");
      /* harmony import */


      var _peity_charts_peity_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./peity-charts/peity-charts.component */
      "./src/app/charts/peity-charts/peity-charts.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'chartjs',
          component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartjsComponent"],
          data: {
            title: 'Chart JS'
          }
        }, {
          path: 'apex-charts',
          component: _apex_charts_apex_charts_component__WEBPACK_IMPORTED_MODULE_3__["ApexChartsComponent"],
          data: {
            title: 'Apex Charts'
          }
        }, {
          path: 'sparkline-charts',
          component: _sparkline_charts_sparkline_charts_component__WEBPACK_IMPORTED_MODULE_4__["SparklineChartsComponent"],
          data: {
            title: 'Sparkline Charts'
          }
        }, {
          path: 'peity-charts',
          component: _peity_charts_peity_charts_component__WEBPACK_IMPORTED_MODULE_6__["PeityChartsComponent"],
          data: {
            title: 'Peity Charts'
          }
        }, {
          path: 'other-charts',
          component: _other_charts_other_charts_component__WEBPACK_IMPORTED_MODULE_5__["OtherChartsComponent"],
          data: {
            title: 'Other Charts'
          }
        }]
      }];

      var ChartsRoutingModule = function ChartsRoutingModule() {
        _classCallCheck(this, ChartsRoutingModule);
      };

      ChartsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ChartsRoutingModule
      });
      ChartsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ChartsRoutingModule_Factory(t) {
          return new (t || ChartsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ChartsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartsRoutingModule, [{
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
    "./src/app/charts/charts.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/charts/charts.module.ts ***!
      \*****************************************/

    /*! exports provided: ChartsNg2Module */

    /***/
    function srcAppChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsNg2Module", function () {
        return ChartsNg2Module;
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
      /* harmony import */


      var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./charts-routing.module */
      "./src/app/charts/charts-routing.module.ts");
      /* harmony import */


      var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chartjs/chartjs.component */
      "./src/app/charts/chartjs/chartjs.component.ts");
      /* harmony import */


      var _apex_charts_apex_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./apex-charts/apex-charts.component */
      "./src/app/charts/apex-charts/apex-charts.component.ts");
      /* harmony import */


      var _sparkline_charts_sparkline_charts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sparkline-charts/sparkline-charts.component */
      "./src/app/charts/sparkline-charts/sparkline-charts.component.ts");
      /* harmony import */


      var _other_charts_other_charts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./other-charts/other-charts.component */
      "./src/app/charts/other-charts/other-charts.component.ts");
      /* harmony import */


      var _peity_charts_peity_charts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./peity-charts/peity-charts.component */
      "./src/app/charts/peity-charts/peity-charts.component.ts");

      var ChartsNg2Module = function ChartsNg2Module() {
        _classCallCheck(this, ChartsNg2Module);
      };

      ChartsNg2Module.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ChartsNg2Module
      });
      ChartsNg2Module.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ChartsNg2Module_Factory(t) {
          return new (t || ChartsNg2Module)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ChartsNg2Module, {
          declarations: [_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_6__["ChartjsComponent"], _apex_charts_apex_charts_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartsComponent"], _sparkline_charts_sparkline_charts_component__WEBPACK_IMPORTED_MODULE_8__["SparklineChartsComponent"], _other_charts_other_charts_component__WEBPACK_IMPORTED_MODULE_9__["OtherChartsComponent"], _peity_charts_peity_charts_component__WEBPACK_IMPORTED_MODULE_10__["PeityChartsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartsNg2Module, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_6__["ChartjsComponent"], _apex_charts_apex_charts_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartsComponent"], _sparkline_charts_sparkline_charts_component__WEBPACK_IMPORTED_MODULE_8__["SparklineChartsComponent"], _other_charts_other_charts_component__WEBPACK_IMPORTED_MODULE_9__["OtherChartsComponent"], _peity_charts_peity_charts_component__WEBPACK_IMPORTED_MODULE_10__["PeityChartsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/charts/other-charts/other-charts.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/charts/other-charts/other-charts.component.ts ***!
      \***************************************************************/

    /*! exports provided: OtherChartsComponent */

    /***/
    function srcAppChartsOtherChartsOtherChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherChartsComponent", function () {
        return OtherChartsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var OtherChartsComponent = /*#__PURE__*/function () {
        function OtherChartsComponent() {
          _classCallCheck(this, OtherChartsComponent);
        }

        _createClass(OtherChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/jquery.easy-pie-chart/easy-pie-chart.init.js');
          }
        }]);

        return OtherChartsComponent;
      }();

      OtherChartsComponent.??fac = function OtherChartsComponent_Factory(t) {
        return new (t || OtherChartsComponent)();
      };

      OtherChartsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OtherChartsComponent,
        selectors: [["app-other-charts"]],
        decls: 94,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-content"], [1, "row", "row-group", "m-0", "text-center"], [1, "col-12", "col-lg-6", "col-xl-3"], [1, "card-body"], ["data-percent", "55", 1, "chart", "easy-pie-chart-1"], [1, "percent"], [1, "font-weight-bold"], ["data-percent", "46", 1, "chart", "easy-pie-chart-2"], ["data-percent", "92", 1, "chart", "easy-pie-chart-3"], ["data-percent", "65", 1, "chart", "easy-pie-chart-4"], ["data-percent", "55", 1, "chart", "easy-pie-chart-5"], ["data-percent", "46", 1, "chart", "easy-pie-chart-6"], ["data-percent", "92", 1, "chart", "easy-pie-chart-7"], ["data-percent", "65", 1, "chart", "easy-pie-chart-8"]],
        template: function OtherChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Other Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Other Chart");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Jquery Easy Pie Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "New Visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Used RAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "New Visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Used RAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9vdGhlci1jaGFydHMvb3RoZXItY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OtherChartsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-other-charts',
            templateUrl: './other-charts.component.html',
            styleUrls: ['./other-charts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/charts/peity-charts/peity-charts.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/charts/peity-charts/peity-charts.component.ts ***!
      \***************************************************************/

    /*! exports provided: PeityChartsComponent */

    /***/
    function srcAppChartsPeityChartsPeityChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeityChartsComponent", function () {
        return PeityChartsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var PeityChartsComponent = /*#__PURE__*/function () {
        function PeityChartsComponent() {
          _classCallCheck(this, PeityChartsComponent);
        }

        _createClass(PeityChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/peity-charts.js');
          }
        }]);

        return PeityChartsComponent;
      }();

      PeityChartsComponent.??fac = function PeityChartsComponent_Factory(t) {
        return new (t || PeityChartsComponent)();
      };

      PeityChartsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PeityChartsComponent,
        selectors: [["app-peity-charts"]],
        decls: 164,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], [1, "row", "text-center", "row-group", "m-0"], [1, "col-12", "col-lg-4", "col-xl-4"], [1, "card", "shadow-none", "bg-transparent"], ["data-peity", "{ \"fill\": [\"#ffffff\", \"rgba(255, 255, 255, 0.14)\"]}", 1, "pie"], [1, "my-2"], ["data-peity", "{ \"fill\": [\"#ffffff\", \"rgba(255, 255, 255, 0.14)\"]}", 1, "donut"], [1, "row", "row-group", "m-0"], [1, "card", "shadow-none", "bg-transparent", "mb-0"], ["data-peity", "{ \"fill\": [\"#ffffff\", \"rgba(255, 255, 255, 0.14)\"]}", "data-width", "100%", "data-height", "100", 1, "peity-bar"], ["data-peity", "{ \"fill\":\"rgba(255, 255, 255, 0.54)\", \"stroke\": \"#ffffff\", \"strokeWidth\": \"0\" }", "data-width", "100%", "data-height", "100", 1, "peity-line"], ["data-peity", "{ \"fill\":\"rgba(255, 255, 255, 0.54)\", \"stroke\": \"#ffffff\", \"strokeWidth\": \"0\" }", "data-width", "100%", "bg-color", "#fff", "data-height", "100", 1, "peity-line"]],
        template: function PeityChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Peity Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Peity Chart");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Pie Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "1/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Data : 1/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "226/360");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Data : 226/360");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "0.52/1.561");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Data : 0.52/1.561");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "1,4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Data : 1,4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "226,134");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Data : 226,134");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "0.52,1.041");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Data : 0.52, 1.041");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Donut Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "1/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Data : 1/5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "226/360");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Data : 226/360");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "0.52/1.561");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Data : 0.52/1.561");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "1,4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Data : 1,4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "226,134");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Data : 226,134");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "0.52,1.041");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Data : 0.52, 1.041");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Bar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "10,12,8,10,13,18,11,13,16,15,19,12,18,11,14,18,9,18,12,11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "6,2,8,4,-3,8,1,-3,6,-5,9,2,-8,1,4,8,9,8,2,1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Line Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "6,2,8,4,-3,8,1,-3,6,-5,9,2,-8,1,4,8,9,8,2,1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wZWl0eS1jaGFydHMvcGVpdHktY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PeityChartsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-peity-charts',
            templateUrl: './peity-charts.component.html',
            styleUrls: ['./peity-charts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/charts/sparkline-charts/sparkline-charts.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/charts/sparkline-charts/sparkline-charts.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SparklineChartsComponent */

    /***/
    function srcAppChartsSparklineChartsSparklineChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparklineChartsComponent", function () {
        return SparklineChartsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var SparklineChartsComponent = /*#__PURE__*/function () {
        function SparklineChartsComponent() {
          _classCallCheck(this, SparklineChartsComponent);
        }

        _createClass(SparklineChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $.getScript('./assets/js/apex-sparkline-charts-script.js');
            $.getScript('./assets/js/sparkline-chart-script.js');
          }
        }]);

        return SparklineChartsComponent;
      }();

      SparklineChartsComponent.??fac = function SparklineChartsComponent_Factory(t) {
        return new (t || SparklineChartsComponent)();
      };

      SparklineChartsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SparklineChartsComponent,
        selectors: [["app-sparkline-charts"]],
        decls: 150,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "mb-0", "text-uppercase"], [1, "card-deck", "flex-column", "flex-lg-row"], [1, "card"], [1, "card-body"], ["id", "spark1"], ["id", "spark2"], ["id", "spark3"], [1, "mb-0"], ["id", "chart1"], ["id", "chart2"], ["id", "chart3"], ["id", "chart4"], ["id", "chart5"], ["id", "chart6"], [1, "row"], [1, "col-12", "col-lg-6", "col-xl-6"], [1, "media"], ["id", "sparklinechart1", 1, "align-self-center"], [1, "media-body", "text-right"], ["id", "sparklinechart2", 1, "align-self-center"], ["id", "sparklinechart3", 1, "align-self-center"], ["id", "sparklinechart4", 1, "align-self-center"], [1, "col-12", "col-lg-12", "col-xl-4"], [1, "card-header", "text-uppercase"], ["id", "sparklinechart5", 1, "text-center"], ["id", "sparklinechart6", 1, "text-center"], ["id", "sparklinechart7", 1, "text-center"]],
        template: function SparklineChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Sparkline Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Sparkline Chart");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Apex Sparkline Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "$85,246");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "$97,826");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "$64,976");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Profits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "$95,345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "$68,846");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "$54,376");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Profits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Jquery Sparkline Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "New Posts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "12050");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "43250");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Total Likes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "55126");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Total Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "2550");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Pie charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Pie charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Bar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zcGFya2xpbmUtY2hhcnRzL3NwYXJrbGluZS1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SparklineChartsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sparkline-charts',
            templateUrl: './sparkline-charts.component.html',
            styleUrls: ['./sparkline-charts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/data/chartjs.ts":
    /*!****************************************!*\
      !*** ./src/app/shared/data/chartjs.ts ***!
      \****************************************/

    /*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType, barChartOptions, barChartLabels, barChartType, barChartLegend, barChartData, barChartColors, polorChartLabels, polorChartData, polorChartType, polorChartColors, polorChartOptions, pieChartLabels, pieChartData, pieChartType, pieChartColors, pieChartOptions, doughnutChartLabels, doughnutChartData, doughnutChartColors, doughnutChartType, doughnutChartOptions */

    /***/
    function srcAppSharedDataChartjsTs(module, __webpack_exports__, __webpack_require__) {
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


      __webpack_require__.d(__webpack_exports__, "polorChartLabels", function () {
        return polorChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polorChartData", function () {
        return polorChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polorChartType", function () {
        return polorChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polorChartColors", function () {
        return polorChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polorChartOptions", function () {
        return polorChartOptions;
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
      }); //line chart


      var lineChartData = [{
        data: [13, 20, 4, 18, 7, 4, 8],
        label: 'Google'
      }, {
        data: [3, 30, 6, 6, 3, 4, 11],
        label: 'Facebook'
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
            boxWidth: 40
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd',
              padding: 10
            },
            display: true,
            gridLines: {
              color: "rgba(221, 221, 221, 0.08)",
              drawTicks: false
            },
            scaleLabel: {
              display: false,
              labelString: 'week'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#ddd',
              padding: 10
            },
            display: true,
            gridLines: {
              color: "rgba(221, 221, 221, 0.08)",
              drawTicks: false
            },
            scaleLabel: {
              display: false,
              labelString: 'Value'
            }
          }]
        }
      };
      var lineChartColors = [{
        fill: true,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "transparent",
        pointRadius: "0",
        borderWidth: 1
      }, {
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderColor: "transparent",
        pointRadius: "0",
        borderWidth: 1
      }];
      var lineChartLegend = true;
      var lineChartType = 'line'; // barChart

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
      var barChartLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      var barChartType = 'bar';
      var barChartLegend = true;
      var barChartData = [{
        barPercentage: .5,
        data: [13, 20, 4, 18, 29, 25, 8],
        label: 'Google'
      }, {
        barPercentage: .5,
        data: [31, 30, 6, 6, 21, 4, 11],
        label: 'Facebook'
      }];
      var barChartColors = [{
        backgroundColor: "rgba(255, 255, 255, 0.25)"
      }, {
        backgroundColor: "rgb(255, 255, 255)"
      }]; // Polor

      var polorChartLabels = ["Lable1", "Lable2", "Lable3", "Lable4"];
      var polorChartData = [13, 20, 11, 18];
      var polorChartType = 'polarArea';
      var polorChartColors = [{
        backgroundColor: ["rgba(255, 255, 255, 0.35)", "#ffffff", "rgba(255, 255, 255, 0.12)", "rgba(255, 255, 255, 0.71)"],
        borderWidth: [0, 0, 0, 0]
      }];
      var polorChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 15
          }
        },
        scale: {
          gridLines: {
            color: "rgba(221, 221, 221, 0.12)"
          }
        }
      }; // Pie

      var pieChartLabels = ["Lable1", "Lable2", "Lable3", "Lable4"];
      var pieChartData = [13, 120, 11, 20];
      var pieChartType = 'pie';
      var pieChartColors = [{
        backgroundColor: ["rgba(255, 255, 255, 0.35)", "#ffffff", "rgba(255, 255, 255, 0.12)", "rgba(255, 255, 255, 0.71)"],
        borderWidth: [0, 0, 0, 0]
      }];
      var pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 15
          }
        }
      }; // Doughnut

      var doughnutChartLabels = ["Lable1", "Lable2", "Lable3", "Lable4"];
      var doughnutChartData = [13, 120, 11, 20];
      var doughnutChartColors = [{
        backgroundColor: ["rgba(255, 255, 255, 0.35)", "#ffffff", "rgba(255, 255, 255, 0.12)", "rgba(255, 255, 255, 0.71)"],
        borderWidth: [0, 0, 0, 0]
      }];
      var doughnutChartType = 'doughnut';
      var doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          display: true,
          labels: {
            fontColor: '#ddd',
            boxWidth: 15
          }
        }
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=charts-charts-module-es5.js.map