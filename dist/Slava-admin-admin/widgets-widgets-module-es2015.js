(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "./src/app/shared/data/widgets-data.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/data/widgets-data.ts ***!
  \*********************************************/
/*! exports provided: dwChart1Options, dwChart1Labels, dwChart1Type, dwChart1Legend, dwChart1Data, dwChart1Colors, dwChart2Data, dwChart2Labels, dwChart2Options, dwChart2Colors, dwChart2Legend, dwChart2Type, dwChart3Options, dwChart3Labels, dwChart3Type, dwChart3Legend, dwChart3Data, dwChart3Colors, dwChart4Data, dwChart4Labels, dwChart4Options, dwChart4Colors, dwChart4Legend, dwChart4Type, dwChart5Data, dwChart5Labels, dwChart5Options, dwChart5Colors, dwChart5Legend, dwChart5Type, dwChart9Data, dwChart9Labels, dwChart9Options, dwChart9Colors, dwChart9Legend, dwChart9Type, dwChart10Data, dwChart10Labels, dwChart10Options, dwChart10Colors, dwChart10Legend, dwChart10Type, dwChart11Data, dwChart11Labels, dwChart11Options, dwChart11Colors, dwChart11Legend, dwChart11Type, dwChart12Data, dwChart12Labels, dwChart12Options, dwChart12Colors, dwChart12Legend, dwChart12Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Options", function() { return dwChart1Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Labels", function() { return dwChart1Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Type", function() { return dwChart1Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Legend", function() { return dwChart1Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Data", function() { return dwChart1Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart1Colors", function() { return dwChart1Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Data", function() { return dwChart2Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Labels", function() { return dwChart2Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Options", function() { return dwChart2Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Colors", function() { return dwChart2Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Legend", function() { return dwChart2Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart2Type", function() { return dwChart2Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Options", function() { return dwChart3Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Labels", function() { return dwChart3Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Type", function() { return dwChart3Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Legend", function() { return dwChart3Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Data", function() { return dwChart3Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart3Colors", function() { return dwChart3Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Data", function() { return dwChart4Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Labels", function() { return dwChart4Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Options", function() { return dwChart4Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Colors", function() { return dwChart4Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Legend", function() { return dwChart4Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart4Type", function() { return dwChart4Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Data", function() { return dwChart5Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Labels", function() { return dwChart5Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Options", function() { return dwChart5Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Colors", function() { return dwChart5Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Legend", function() { return dwChart5Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart5Type", function() { return dwChart5Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Data", function() { return dwChart9Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Labels", function() { return dwChart9Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Options", function() { return dwChart9Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Colors", function() { return dwChart9Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Legend", function() { return dwChart9Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart9Type", function() { return dwChart9Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Data", function() { return dwChart10Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Labels", function() { return dwChart10Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Options", function() { return dwChart10Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Colors", function() { return dwChart10Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Legend", function() { return dwChart10Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart10Type", function() { return dwChart10Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Data", function() { return dwChart11Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Labels", function() { return dwChart11Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Options", function() { return dwChart11Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Colors", function() { return dwChart11Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Legend", function() { return dwChart11Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart11Type", function() { return dwChart11Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Data", function() { return dwChart12Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Labels", function() { return dwChart12Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Options", function() { return dwChart12Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Colors", function() { return dwChart12Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Legend", function() { return dwChart12Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwChart12Type", function() { return dwChart12Type; });
// Data-weidgets-Chart 1
var dwChart1Options = {
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
        enabled: false,
        displayColors: false,
    },
    scales: {
        xAxes: [{
                display: false,
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontColor: '#ddd'
                },
                gridLines: {
                    display: false,
                    color: "rgba(221, 221, 221, 0.08)"
                },
            }],
        yAxes: [{
                stacked: true,
                display: false,
                ticks: {
                    beginAtZero: true,
                    fontColor: '#ddd'
                },
                gridLines: {
                    display: false,
                    color: "rgba(221, 221, 221, 0.08)"
                },
            }]
    }
};
var dwChart1Labels = ['01', '02', '03', '04', '05', '06', '07', '08'];
var dwChart1Type = 'bar';
var dwChart1Legend = false;
var dwChart1Data = [
    { barPercentage: .4, data: [39, 19, 25, 16, 31, 39, 23, 20], label: 'Google' },
    { barPercentage: .4, data: [27, 12, 26, 15, 21, 27, 13, 25], label: 'Facebook' }
];
var dwChart1Colors = [
    {
        backgroundColor: "#fff",
    },
    {
        backgroundColor: "rgba(255, 255, 255, 0.20)",
    },
];
// Data-weidgets-Chart 2
var dwChart2Data = [
    { data: [39, 19, 25, 16, 31, 39, 23, 20], label: 'Total Orders' },
];
var dwChart2Labels = ['01', '02', '03', '04', '05', '06', '07', '08'];
var dwChart2Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart2Colors = [
    {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
    },
];
var dwChart2Legend = false;
var dwChart2Type = 'line';
// Data-weidgets-Chart 3
var dwChart3Options = {
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
        enabled: false,
        displayColors: false,
    },
    scales: {
        xAxes: [{
                display: false,
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontColor: '#ddd'
                },
                gridLines: {
                    display: false,
                    color: "rgba(221, 221, 221, 0.08)"
                },
            }],
        yAxes: [{
                stacked: true,
                display: false,
                ticks: {
                    beginAtZero: true,
                    fontColor: '#ddd'
                },
                gridLines: {
                    display: false,
                    color: "rgba(221, 221, 221, 0.08)"
                },
            }]
    }
};
var dwChart3Labels = ['01', '02', '03', '04', '05', '06', '07', '08'];
var dwChart3Type = 'bar';
var dwChart3Legend = false;
var dwChart3Data = [
    { barPercentage: .4, data: [27, 12, 26, 15, 21, 27, 13, 25], label: 'Facebook' }
];
var dwChart3Colors = [
    {
        backgroundColor: "rgba(255, 255, 255, 0.20)",
    },
];
// Data-weidgets-Chart 4
var dwChart4Data = [
    { data: [39, 19, 35, 25, 31, 45], label: 'Total Orders' },
];
var dwChart4Labels = ['01', '02', '03', '04', '05', '06'];
var dwChart4Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart4Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.2',
        borderColor: '#fff',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
    },
];
var dwChart4Legend = false;
var dwChart4Type = 'line';
// Data-weidgets-Chart 5
var dwChart5Data = [
    { data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630], label: 'Total Orders' },
];
var dwChart5Labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var dwChart5Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart5Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#fff',
        pointRadius: "0",
        pointHoverRadius: "0",
        borderWidth: 5
    },
];
var dwChart5Legend = false;
var dwChart5Type = 'line';
// Data-weidgets-Chart 9
var dwChart9Data = [
    { data: [50, 150, 100, 190, 130, 90, 100, 190, 120, 140], label: 'Total Orders' },
];
var dwChart9Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
var dwChart9Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart9Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#fff',
        pointBackgroundColor: '#000',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        //lineTension: "5",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
    },
];
var dwChart9Legend = false;
var dwChart9Type = 'line';
// Data-weidgets-Chart 10
var dwChart10Data = [
    { data: [50, 150, 100, 190, 130, 90, 100, 190, 120, 140], label: 'Total Orders' },
];
var dwChart10Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
var dwChart10Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart10Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#fff',
        pointBackgroundColor: '#000',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        //lineTension: "5",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
    },
];
var dwChart10Legend = false;
var dwChart10Type = 'line';
// Data-weidgets-Chart 11
var dwChart11Data = [
    { data: [50, 150, 100, 190, 130, 90, 100, 190, 120, 140], label: 'Total Orders' },
];
var dwChart11Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
var dwChart11Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart11Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#fff',
        pointBackgroundColor: '#000',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        //lineTension: "5",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
    },
];
var dwChart11Legend = false;
var dwChart11Type = 'line';
// Data-weidgets-Chart 12
var dwChart12Data = [
    { data: [50, 150, 100, 190, 130, 90, 100, 190, 120, 140], label: 'Total Orders' },
];
var dwChart12Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
var dwChart12Options = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    tooltips: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#4e4e4e'
                },
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
    },
};
var dwChart12Colors = [
    {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#fff',
        pointBackgroundColor: '#000',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        //lineTension: "5",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
    },
];
var dwChart12Legend = false;
var dwChart12Type = 'line';


/***/ }),

/***/ "./src/app/widgets/data-widgets/data-widgets.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/widgets/data-widgets/data-widgets.component.ts ***!
  \****************************************************************/
/*! exports provided: DataWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetsComponent", function() { return DataWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/widgets-data */ "./src/app/shared/data/widgets-data.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");





const _c0 = ["chart-8"];
const _c1 = ["chart-13"];
const _c2 = ["chart-14"];
const _c3 = ["chart-15"];
const _c4 = ["chart-16"];
const _c5 = ["chart-17"];
const _c6 = ["chart-18"];
const _c7 = ["chart-19"];
const _c8 = ["chart-20"];
const _c9 = ["chart-21"];
const _c10 = ["chart-22"];
const _c11 = ["chart-23"];
class DataWidgetsComponent {
    constructor() {
        // Data-weidgets-Chart 1
        this.dwChart1Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Data"];
        this.dwChart1Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Labels"];
        this.dwChart1Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Options"];
        this.dwChart1Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Colors"];
        this.dwChart1Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Legend"];
        this.dwChart1Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart1Type"];
        // Data-weidgets-Chart 2
        this.dwChart2Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Data"];
        this.dwChart2Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Labels"];
        this.dwChart2Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Options"];
        this.dwChart2Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Colors"];
        this.dwChart2Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Legend"];
        this.dwChart2Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart2Type"];
        // Data-weidgets-Chart 4
        this.dwChart4Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Data"];
        this.dwChart4Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Labels"];
        this.dwChart4Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Options"];
        this.dwChart4Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Colors"];
        this.dwChart4Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Legend"];
        this.dwChart4Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart4Type"];
        // Data-weidgets-Chart 5
        this.dwChart5Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Data"];
        this.dwChart5Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Labels"];
        this.dwChart5Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Options"];
        this.dwChart5Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Colors"];
        this.dwChart5Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Legend"];
        this.dwChart5Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart5Type"];
        // Data-weidgets-Chart 9
        this.dwChart9Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Data"];
        this.dwChart9Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Labels"];
        this.dwChart9Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Options"];
        this.dwChart9Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Colors"];
        this.dwChart9Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Legend"];
        this.dwChart9Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart9Type"];
        // Data-weidgets-Chart 10
        this.dwChart10Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Data"];
        this.dwChart10Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Labels"];
        this.dwChart10Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Options"];
        this.dwChart10Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Colors"];
        this.dwChart10Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Legend"];
        this.dwChart10Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart10Type"];
        // Data-weidgets-Chart 11
        this.dwChart11Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Data"];
        this.dwChart11Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Labels"];
        this.dwChart11Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Options"];
        this.dwChart11Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Colors"];
        this.dwChart11Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Legend"];
        this.dwChart11Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart11Type"];
        // Data-weidgets-Chart 12
        this.dwChart12Data = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Data"];
        this.dwChart12Labels = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Labels"];
        this.dwChart12Options = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Options"];
        this.dwChart12Colors = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Colors"];
        this.dwChart12Legend = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Legend"];
        this.dwChart12Type = _shared_data_widgets_data__WEBPACK_IMPORTED_MODULE_1__["dwChart12Type"];
        // Chart 8 Options
        this.chart8Options = {
            chart: {
                width: 300,
                type: 'pie',
                foreColor: 'rgba(255, 255, 255, 0.85)',
            },
            dataLabels: {
                enabled: true
            },
            series: [90, 85, 70, 65],
            tooltip: {
                enabled: false,
                theme: 'dark',
            },
            colors: ["#ffffff", "rgba(255, 255, 255, 0.55)", 'rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.15)'],
            legend: {
                show: false,
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex];
                }
            },
            responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 280
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
        };
        // Chart 13 Options
        this.chart13Options = {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: 'rgba(255, 255, 255, 0.0)',
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
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#fff',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return "75";
                            },
                            color: '#fff',
                            fontSize: '36px',
                            show: true,
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
            series: [75],
            stroke: {
                lineCap: 'round'
            },
            labels: ['Percent'],
        };
        // Chart 14 Options
        this.chart14Options = {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -240,
                    endAngle: 120,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        //background: '#000',
                        image: 'assets/images/products/clock.png',
                        imageWidth: 64,
                        imageHeight: 64,
                        imageClipped: false
                    },
                    track: {
                        background: 'rgba(255, 255, 255, 0.12)',
                        strokeWidth: '67%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: false,
                            color: '#fff',
                            fontSize: '17px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '36px',
                            show: false,
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#fff'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            colors: ["#fff"],
            series: [75],
            stroke: {
                lineCap: 'round'
            },
            labels: ['Percent'],
        };
        // Chart 15 Options
        this.chart15Options = {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 10,
                        size: '50%',
                        background: 'rgba(0, 0, 0, 0.0)'
                    },
                    startAngle: -225,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -10
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '22px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '0%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                },
            },
            stroke: {
                dashArray: 4
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#fff'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                }
            }, colors: ["#fff"],
            series: [87],
            labels: ['Median Ratio'],
        };
        // Chart 16 Options
        this.chart16Options = {
            chart: {
                height: 220,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    //startAngle: -100,
                    //endAngle: 260,
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
                            color: 'rgba(242, 14, 108, 0.65)',
                            opacity: 0.5
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -5,
                            show: true,
                            color: '#fff',
                            fontSize: '14px'
                        },
                        value: {
                            formatter: function (val) {
                                return val + "%";
                            },
                            color: '#fff',
                            fontSize: '20px',
                            show: true,
                            offsetY: 10,
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
            series: [80],
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total'],
        };
        // Chart 17 Options
        this.chart17Options = {
            chart: {
                height: 220,
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
                            color: 'rgba(0, 169, 255, 0.65)',
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -5,
                            show: true,
                            color: '#fff',
                            fontSize: '14px'
                        },
                        value: {
                            formatter: function (val) {
                                return val + "%";
                            },
                            color: '#fff',
                            fontSize: '20px',
                            show: true,
                            offsetY: 10,
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
            series: [55],
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total'],
        };
        // Chart 18 Options
        this.chart18Options = {
            chart: {
                height: 220,
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
                        show: true,
                        name: {
                            offsetY: -5,
                            show: true,
                            color: '#fff',
                            fontSize: '14px'
                        },
                        value: {
                            formatter: function (val) {
                                return val + "%";
                            },
                            color: '#fff',
                            fontSize: '20px',
                            show: true,
                            offsetY: 10,
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
            labels: ['Total'],
        };
        // Chart 19 Options
        this.chart19Options = {
            chart: {
                height: 220,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    // startAngle: -135,
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
                            color: 'rgba(0, 128, 0, 0.56)',
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -5,
                            show: true,
                            color: '#fff',
                            fontSize: '14px'
                        },
                        value: {
                            formatter: function (val) {
                                return val + "%";
                            },
                            color: '#fff',
                            fontSize: '20px',
                            show: true,
                            offsetY: 10,
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
            series: [75],
            stroke: {
                lineCap: 'round'
            },
            labels: ['Total'],
        };
        // Chart 20 Options
        this.chart20Options = {
            chart: {
                height: 250,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    //startAngle: -135,
                    //endAngle: 135,
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
                        strokeWidth: '0%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -5
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '20px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    gradientToColors: ['#fff'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            colors: ["#fff"],
            series: [82],
            labels: ['Total'],
        };
        // Chart 21 Options
        this.chart21Options = {
            chart: {
                height: 250,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    //startAngle: -135,
                    //endAngle: 135,
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
                        strokeWidth: '0%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -10
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '20px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    gradientToColors: ['#fff'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            colors: ["#fff"],
            series: [85],
            labels: ['Total'],
        };
        // Chart 22 Options
        this.chart22Options = {
            chart: {
                height: 250,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    //startAngle: -135,
                    //endAngle: 135,
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
                        strokeWidth: '0%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -10
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '20px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    gradientToColors: ['#fff'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            colors: ["#fff"],
            series: [79],
            labels: ['Total'],
        };
        // Chart 23 Options
        this.chart23Options = {
            chart: {
                height: 250,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    //startAngle: -135,
                    //endAngle: 135,
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
                        strokeWidth: '0%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -10
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '20px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    gradientToColors: ['#fff'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            colors: ["#fff"],
            series: [90],
            labels: ['Total'],
        };
    }
    // events
    chartClicked(e) {
        //your code here
    }
    chartHovered(e) {
        //your code here
    }
    ngOnInit() {
        $.getScript('./assets/js/data-widgets.js');
    }
}
DataWidgetsComponent.??fac = function DataWidgetsComponent_Factory(t) { return new (t || DataWidgetsComponent)(); };
DataWidgetsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DataWidgetsComponent, selectors: [["app-data-widgets"]], viewQuery: function DataWidgetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c9, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c10, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c11, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart8 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart13 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart14 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart15 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart16 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart17 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart18 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart19 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart20 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart21 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart22 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart23 = _t.first);
    } }, decls: 517, vars: 49, consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-12", "col-lg-3", "col-xl-3"], [1, "card"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col"], [1, "mb-0", "text-white"], [1, "icon-box", "float-right", "rounded-circle", "bg-light"], [1, "zmdi", "zmdi-money", "text-white"], [1, "mt-4", "mb-0", "text-white"], [1, "mb-0", "extra-small-font", "text-white"], [1, "chart-container-12", "mt-4"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "card", 2, "border", "4px solid #fff", "border-radius", "25px"], [1, "zmdi", "zmdi-balance-wallet", "text-white"], [1, "zmdi", "zmdi-accounts-alt", "text-white"], ["id", "data-chart3"], [1, "card", 2, "border", "4px solid #fff", "border-radius", "0px"], [1, "zmdi", "zmdi-shopping-basket", "text-white"], [1, "col-12", "col-lg-4", "col-xl-4"], [1, "card-header", "text-center", "border-0", "text-uppercase", "text-white"], [1, "chart-container-13", "mt-4"], [1, "list-group", "list-group-flush", "shadow-none"], [1, "list-group-item", "bg-transparent"], [1, "media", "align-items-center"], [1, "zmdi", "zmdi-facebook-box", "text-white", "fa-2x", "mr-2"], [1, "media-body", "ml-3"], [1, "px-2", "py-1", "rounded", "bg-light", "text-white"], [1, "zmdi", "zmdi-long-arrow-up", "text-white"], [1, "zmdi", "zmdi-twitter-box", "text-white", "fa-2x", "mr-2"], [1, "zmdi", "zmdi-youtube", "text-white", "fa-2x", "mr-2"], [1, "zmdi", "zmdi-linkedin-box", "text-white", "fa-2x", "mr-2"], [1, "media-body"], [1, "mb-0", "font-weight-bold", "text-white", "text-uppercase"], [1, "extra-small-font", "text-white"], [1, "card-action"], ["ngbDropdown", ""], ["href", "javascript:;", "id", "dropdownBasic6", "ngbDropdownToggle", "", 1, "dropdown-toggle-nocaret"], [1, "zmdi", "zmdi-more-vert", "fa-2x", "text-white"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic6", 1, "animated", "fadeIn", "dropdown-menu-right"], ["ngbDropdownItem", "", "href", "javascript:;"], [1, "media", "align-items-center", "mt-5"], [1, "zmdi", "zmdi-caret-up", "ml-2"], ["id", "data-chart6"], [1, "zmdi", "zmdi-long-arrow-up", "mr-2", "fa-2x", "text-white"], [1, "mt-2"], ["type", "white", "height", "4px", 3, "value"], ["data-percent", "60", 1, "w_chart", "easy-dash-chart-7"], [1, "w_percent"], [1, "card", 2, "border", "3px solid #fff"], [1, "card-header", "text-uppercase", "text-center"], [1, "chart-container-13"], [1, "d-flex", "justify-content-center"], ["id", "data-chart8"], [1, "progress-wrapper"], [1, "my-3"], [1, "float-right"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "90%"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "60%"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "45%"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "35%"], [1, "col-12", "col-lg-6", "col-xl-3"], [1, "extra-small-font", "bg-light", "py-1", "px-2", "rounded", "mb-0"], [1, "w-icon"], [1, "zmdi", "zmdi-shopping-cart", "text-white"], [1, "chart-container-14"], [1, "extra-small-font", "bg-light", "py-1", "px-2", "rounded"], [1, "zmdi", "zmdi-pin-help", "text-white"], [1, "zmdi", "zmdi-email-open", "text-white"], [1, "text-center"], [1, "mb-0", "text-uppercase"], [1, ""], ["id", "data-chart13"], [1, "card-footer", "border-0"], [1, "row", "align-items-center", "text-center"], [1, "col", "border-right", "border-light"], [1, "mb-0"], [1, "extra-small-font"], ["id", "data-chart14"], ["id", "data-chart15"], [1, "mb-3", "text-uppercase"], ["id", "data-chart-16"], ["id", "data-chart-17"], ["id", "data-chart-18"], ["id", "data-chart-19"], ["id", "data-chart-20"], ["id", "data-chart-21"], ["id", "data-chart-22"], ["id", "data-chart-23"]], template: function DataWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Widgets Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Widgets Data");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Incomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "$45,263");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "2.5% Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_46_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_46_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "$87,263");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "6.3% Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_62_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_62_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "97,283");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "4.2% Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "canvas", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "28,153");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "3.1% Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_94_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_94_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Social Analytcs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_101_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_101_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "8456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "2.5% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "7368");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Tweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "1.3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "6482");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "4.7% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "9426");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "3.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "small", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Oct 23 - Nov 23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "$89,532.12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Daily Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "$349.82");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "small", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "77%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "ngb-progressbar", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Monthely Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "$349.82");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Top Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Mobiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "320");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Laptops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Headphones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Shoes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "95");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "452 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "small", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "-1.2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_258_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_258_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "$656 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "small", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "+2.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_273_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_273_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Support Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "854 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "small", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "+1.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_288_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_288_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "230 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "small", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "-1.2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function DataWidgetsComponent_Template_canvas_chartHover_303_listener($event) { return ctx.chartHovered($event); })("chartClick", function DataWidgetsComponent_Template_canvas_chartClick_303_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Total Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "h2", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "3,2247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "4875.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "Average Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "75.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Average Unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Upcoming Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "h2", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "856");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "124");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "Nothing Yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "h2", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "$98,452");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](350, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "$5879.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "$3642.21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "563");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "985");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](389, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "$1,2035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "$2,859");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](408, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "674");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "968");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](427, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "814");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "975");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "563");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "985");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](466, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "$1,2035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "$2,859");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](485, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "674");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "968");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](504, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "814");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "h5", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "975");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart1Data)("labels", ctx.dwChart1Labels)("options", ctx.dwChart1Options)("colors", ctx.dwChart1Colors)("legend", ctx.dwChart1Legend)("chartType", ctx.dwChart1Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart2Data)("labels", ctx.dwChart2Labels)("options", ctx.dwChart2Options)("colors", ctx.dwChart2Colors)("legend", ctx.dwChart2Legend)("chartType", ctx.dwChart2Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart4Data)("labels", ctx.dwChart4Labels)("options", ctx.dwChart4Options)("colors", ctx.dwChart4Colors)("legend", ctx.dwChart4Legend)("chartType", ctx.dwChart4Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart5Data)("labels", ctx.dwChart5Labels)("options", ctx.dwChart5Options)("colors", ctx.dwChart5Colors)("legend", ctx.dwChart5Legend)("chartType", ctx.dwChart5Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart9Data)("labels", ctx.dwChart9Labels)("options", ctx.dwChart9Options)("colors", ctx.dwChart9Colors)("legend", ctx.dwChart9Legend)("chartType", ctx.dwChart9Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart10Data)("labels", ctx.dwChart10Labels)("options", ctx.dwChart10Options)("colors", ctx.dwChart10Colors)("legend", ctx.dwChart10Legend)("chartType", ctx.dwChart10Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart11Data)("labels", ctx.dwChart11Labels)("options", ctx.dwChart11Options)("colors", ctx.dwChart11Colors)("legend", ctx.dwChart11Legend)("chartType", ctx.dwChart11Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.dwChart12Data)("labels", ctx.dwChart12Labels)("options", ctx.dwChart12Options)("colors", ctx.dwChart12Colors)("legend", ctx.dwChart12Legend)("chartType", ctx.dwChart12Type);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZGF0YS13aWRnZXRzL2RhdGEtd2lkZ2V0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataWidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-widgets',
                templateUrl: './data-widgets.component.html',
                styleUrls: ['./data-widgets.component.scss']
            }]
    }], function () { return []; }, { chart8: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-8"]
        }], chart13: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-13"]
        }], chart14: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-14"]
        }], chart15: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-15"]
        }], chart16: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-16"]
        }], chart17: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-17"]
        }], chart18: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-18"]
        }], chart19: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-19"]
        }], chart20: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-20"]
        }], chart21: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-21"]
        }], chart22: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-22"]
        }], chart23: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart-23"]
        }] }); })();


/***/ }),

/***/ "./src/app/widgets/static-widgets/static-widgets.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/widgets/static-widgets/static-widgets.component.ts ***!
  \********************************************************************/
/*! exports provided: StaticWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticWidgetsComponent", function() { return StaticWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class StaticWidgetsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StaticWidgetsComponent.??fac = function StaticWidgetsComponent_Factory(t) { return new (t || StaticWidgetsComponent)(); };
StaticWidgetsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StaticWidgetsComponent, selectors: [["app-static-widgets"]], decls: 649, vars: 10, consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "text-uppercase"], [1, "row"], [1, "col-12", "col-lg-3", "col-xl-3"], [1, "card"], [1, "card-body"], [1, "media", "align-items-center"], [1, "media-body"], [1, "mb-0", "text-white"], [1, "w-icon"], [1, "zmdi", "zmdi-shopping-cart-plus", "text-white"], [1, "zmdi", "zmdi-balance-wallet", "text-white"], [1, "zmdi", "zmdi-accounts-alt", "text-white"], [1, "zmdi", "zmdi-email", "text-white"], [1, "col-12", "col-lg-6", "col-xl-3"], [1, "card", "gradient-transparent"], [1, "zmdi", "zmdi-thumb-up", "text-white"], [1, "zmdi", "zmdi-comment-text", "text-white"], [1, "zmdi", "zmdi-share", "text-white"], [1, "zmdi", "zmdi-notifications-none", "text-white"], [1, "col-12", "col-lg-4", "col-xl-4"], [1, "text-white", "mb-0"], [1, "float-right"], [1, "zmdi", "zmdi-facebook"], [1, "my-3"], ["type", "white", "height", "3px", 3, "value"], [1, "mb-0", "text-white", "small-font"], [1, "fa", "fa-arrow-up"], [1, "zmdi", "zmdi-twitter"], [1, "zmdi", "zmdi-youtube"], [1, "col-12", "col-md-6", "col-lg-3", "col-xl-3"], [1, "mb-0"], [1, "zmdi", "zmdi-face", "text-white"], [1, "mt-3"], ["type", "white", "height", "5px", 3, "value"], [1, "zmdi", "zmdi-male-female", "text-white"], [1, "media"], [1, "mt-2", "mb-0", "extra-small-font", "text-white"], [1, "zmdi", "zmdi-comment-alt-text", "text-white"], [1, "card", "border-white", "border-sm"], [1, "card-body", "p-1"], [1, "media", "align-items-center", "bg-white", "p-4", "rounded"], [1, "mb-0", "text-dark"], [1, "zmdi", "zmdi-eye", "text-dark"], [1, "zmdi", "zmdi-graduation-cap", "text-dark"], [1, "zmdi", "zmdi-notifications-none", "text-dark"], [1, "card", "border-sm", "border-white"], [1, "media", "align-items-center", "bg-white", "p-3", "rounded"], [1, "text-dark", "text-uppercase", "extra-small-font", "font-weight-bold"], [1, "circle-1", "bg-success-light1"], [1, "circle-2", "bg-success-light2"], [1, "circle-3", "gradient-success-light"], [1, "circle-1", "bg-primary-light1"], [1, "circle-2", "bg-primary-light2"], [1, "circle-3", "gradient-primary-light"], [1, "circle-1", "bg-info-light1"], [1, "circle-2", "bg-info-light2"], [1, "circle-3", "gradient-info-light"], [1, "zmdi", "zmdi-layers", "text-white"], [1, "card", "border-sm", "border-white", "rounded-0"], [1, "media", "align-items-center", "bg-dark", "p-3"], [1, "text-white", "text-uppercase", "extra-small-font", "font-weight-bold"], [1, "circle-1", "bg-white-light1"], [1, "circle-2", "bg-white-light2"], [1, "circle-3", "gradient-white-light"], [1, "zmdi", "zmdi-money", "text-white"], [1, "zmdi", "zmdi-fire", "text-white"], [1, "col-12", "col-lg-6", "col-xl-6"], [1, "media", "align-items-center", "p-3"], [1, "zmdi", "zmdi-flower-alt", "text-dark"], [1, "card", "bubble"], [1, "card-body", "card-block"], [1, "extra-small-font", "mt-3", "mb-0", "text-white"], [1, "position-relative"], [1, "zmdi", "zmdi-card-travel", "fa-5x", "text-white"], [1, "zmdi", "zmdi-case-download", "fa-5x", "text-white"], [1, "zmdi", "zmdi-cocktail", "fa-5x", "text-white"], [1, "text-uppercase", "mb-0", "text-center", "text-white"], [1, "text-uppercase", "text-center", "text-white"], [1, "media", "align-items-center", "mt-5"], [1, "w-circle-icon", "rounded-circle", "bg-light"], [1, "zmdi", "zmdi-edit", "text-white"], [1, "media-body", "ml-3"], [1, "mb-0", "extra-small-font", "text-white"], [1, "media", "align-items-center", "mt-3"], [1, "zmdi", "zmdi-settings", "text-white"], [1, "media", "align-items-center", "mt-3", "mb-5"], [1, "zmdi", "zmdi-delete", "text-white"], [1, "card-footer", "bg-transparent"], [1, "row", "align-items-center"], [1, "col"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "zmdi", "zmdi-home", "text-white"], [1, "zmdi", "zmdi-brightness-7", "text-white"], [1, "w-circle-icon", "rounded-circle", "bg-light", "float-right"], [1, "zmdi", "zmdi-notifications-active", "text-white"], [1, "card-body", "text-center"], [1, "text-uppercase", "text-white"], [1, "icon-box", "bg-light", "my-5", "mx-auto"], [1, "my-5", "text-white"], ["href", "javascript:;", 1, "btn", "btn-light", "btn-round"]], template: function StaticWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Widgets Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "widgets Static");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Simple Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "7543");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "$8967");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "2540");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "7543");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "8975");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Total Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "8531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "9756");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Total Shares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "3267");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Progress Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "45,260 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "ngb-progressbar", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, ".5rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Facebook Likes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "+42% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "85,430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "ngb-progressbar", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, ".5rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Twitter Followers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "+35% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "95,360 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "ngb-progressbar", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Youtube Subscribers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "+22% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "7543");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Total Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "$8967");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Admitted Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "$8,569");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Treatment Costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](213, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "689");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "Available Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "986");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Total Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "+2.6% Since Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "856");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "New Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "+2.6% Since Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "356");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Total Shares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "+2.6% Since Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Bubble Border Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "9856");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Total Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](297, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "$75642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](308, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h5", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "3562");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](319, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "+8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](333, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "+5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](346, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "+7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](359, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "+3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "Vouchers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "+2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](386, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "+6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](399, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "+9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "+9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](426, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "Side Bubble Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Payment Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "$8645.57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "Lorem Ipsum Dollar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](442, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "Itacha luliya noneta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "Payment Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "$8645.57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, "Lorem Ipsum Dollar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](457, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, "Itacha luliya noneta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Payment Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "$8645.57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Lorem Ipsum Dollar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](472, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Itacha luliya noneta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](475, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "Large Content Cards with textures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](478, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "h6", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "Your Alarm time is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "05:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](489, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "Edit Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](497, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](505, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "Delete Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](516, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](518, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](520, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](523, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "h6", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "Your Alarm time is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "05:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](533, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "Edit Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](541, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](549, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "Delete Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](560, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](562, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](564, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](567, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "h6", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, "Your Alarm time is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "05:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](577, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](580, "Edit Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](585, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](588, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](593, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, "Delete Alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "Lorem ipsum dolor sit amet consectetur adipiscing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](604, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](606, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](608, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](611, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Theme gradient cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](614, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "h5", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](622, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "p", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "h5", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](631, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](633, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "p", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](637, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "h5", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](643, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](644, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "p", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](648, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvc3RhdGljLXdpZGdldHMvc3RhdGljLXdpZGdldHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StaticWidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-static-widgets',
                templateUrl: './static-widgets.component.html',
                styleUrls: ['./static-widgets.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/widgets/widgets-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/widgets/widgets-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WidgetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function() { return WidgetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _static_widgets_static_widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-widgets/static-widgets.component */ "./src/app/widgets/static-widgets/static-widgets.component.ts");
/* harmony import */ var _data_widgets_data_widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-widgets/data-widgets.component */ "./src/app/widgets/data-widgets/data-widgets.component.ts");






const routes = [
    {
        path: '',
        children: [
            {
                path: 'static-widgets',
                component: _static_widgets_static_widgets_component__WEBPACK_IMPORTED_MODULE_2__["StaticWidgetsComponent"],
                data: {
                    title: 'Static Widgets'
                }
            },
            {
                path: 'data-widgets',
                component: _data_widgets_data_widgets_component__WEBPACK_IMPORTED_MODULE_3__["DataWidgetsComponent"],
                data: {
                    title: 'Data Widgets'
                }
            },
        ]
    }
];
class WidgetsRoutingModule {
}
WidgetsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: WidgetsRoutingModule });
WidgetsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function WidgetsRoutingModule_Factory(t) { return new (t || WidgetsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WidgetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WidgetsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets-routing.module */ "./src/app/widgets/widgets-routing.module.ts");
/* harmony import */ var _static_widgets_static_widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-widgets/static-widgets.component */ "./src/app/widgets/static-widgets/static-widgets.component.ts");
/* harmony import */ var _data_widgets_data_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-widgets/data-widgets.component */ "./src/app/widgets/data-widgets/data-widgets.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");









class WidgetsModule {
}
WidgetsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: WidgetsModule });
WidgetsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WidgetsModule, { declarations: [_static_widgets_static_widgets_component__WEBPACK_IMPORTED_MODULE_3__["StaticWidgetsComponent"], _data_widgets_data_widgets_component__WEBPACK_IMPORTED_MODULE_4__["DataWidgetsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_static_widgets_static_widgets_component__WEBPACK_IMPORTED_MODULE_3__["StaticWidgetsComponent"], _data_widgets_data_widgets_component__WEBPACK_IMPORTED_MODULE_4__["DataWidgetsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module-es2015.js.map