(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"], {
    /***/
    "./src/app/components/carousel/carousel.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/carousel/carousel.component.ts ***!
      \***********************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function srcAppComponentsCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var _c0 = ["carousel"];

      function CarouselComponent_ngb_carousel_34_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r4.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_34_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r5.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_34_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r6.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CarouselComponent_ngb_carousel_34_ng_template_1_Template, 7, 1, "ng-template", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CarouselComponent_ngb_carousel_34_ng_template_2_Template, 7, 1, "ng-template", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CarouselComponent_ngb_carousel_34_ng_template_3_Template, 7, 1, "ng-template", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CarouselComponent_ngb_carousel_39_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "No mouse navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "This carousel hides navigation arrows and indicators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", image_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_39_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CarouselComponent_ngb_carousel_39_1_ng_template_0_Template, 7, 1, "ng-template", 33);
        }
      }

      function CarouselComponent_ngb_carousel_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-carousel", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CarouselComponent_ngb_carousel_39_1_Template, 1, 0, undefined, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.images);
        }
      }

      function CarouselComponent_52_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var i_r12 = ctx_r14.index;
          var img_r11 = ctx_r14.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("My slide ", i_r12 + 1, " title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "https://www.google.fr/?q=Number+", i_r12 + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "My image ", i_r12 + 1, " description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CarouselComponent_52_ng_template_0_Template, 6, 4, "ng-template", 33);
        }
      }

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent(config) {
          _classCallCheck(this, CarouselComponent);

          this.images = [1, 2, 3].map(function () {
            return "https://picsum.photos/1200/500?random&t=".concat(Math.random());
          });
          this.images2 = [1, 2, 3, 4, 5, 6, 7].map(function () {
            return "https://picsum.photos/1200/500?random&t=".concat(Math.random());
          });
          this.showNavigationArrows = false;
          this.showNavigationIndicators = false;
          this.paused = false;
          this.unpauseOnArrow = false;
          this.pauseOnIndicator = false;
          this.pauseOnHover = true; // customize default values of carousels used by this component tree

          config.showNavigationArrows = true;
          config.showNavigationIndicators = true;
        }

        _createClass(CarouselComponent, [{
          key: "togglePaused",
          value: function togglePaused() {
            if (this.paused) {
              this.carousel.cycle();
            } else {
              this.carousel.pause();
            }

            this.paused = !this.paused;
          }
        }, {
          key: "onSlide",
          value: function onSlide(slideEvent) {
            if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
              this.togglePaused();
            }

            if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
              this.togglePaused();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.??fac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
      };

      CarouselComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CarouselComponent,
        selectors: [["app-carousel"]],
        viewQuery: function CarouselComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.carousel = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])],
        decls: 68,
        vars: 8,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], [4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["role", "group", "aria-label", "Carousel toggle controls", 1, "btn-group"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["interval", "1000", 3, "pauseOnHover", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "form-check", "icheck-material-white"], ["type", "checkbox", "id", "pauseOnHover", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnHover", 1, "form-check-label"], ["type", "checkbox", "id", "unpauseOnArrow", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "unpauseOnArrow", 1, "form-check-label"], ["type", "checkbox", "id", "pauseOnIndicator", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnIndicator", 1, "form-check-label"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 1, "img-fluid", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 1, "img-fluid", 3, "src"], ["alt", "Random third slide", 1, "img-fluid", 3, "src"], [3, "showNavigationArrows", "showNavigationIndicators"], ["alt", "Random slide", 1, "img-fluid", 3, "src"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 3, "href"], [1, "img-fluid", 3, "src", "alt"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Carousel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, CarouselComponent_ngb_carousel_34_Template, 4, 0, "ngb-carousel", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Navigation arrows and indicators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, CarouselComponent_ngb_carousel_39_Template, 2, 3, "ngb-carousel", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarouselComponent_Template_button_click_42_listener() {
              return ctx.showNavigationArrows = !ctx.showNavigationArrows;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Toggle navigation arrows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarouselComponent_Template_button_click_44_listener() {
              return ctx.showNavigationIndicators = !ctx.showNavigationIndicators;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Toggle navigation indicators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Pause/cycle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ngb-carousel", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("slide", function CarouselComponent_Template_ngb_carousel_slide_50_listener($event) {
              return ctx.onSlide($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, CarouselComponent_52_Template, 1, 0, undefined, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.pauseOnHover = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Pause on hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.unpauseOnArrow = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Unpause when clicking on arrows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.pauseOnIndicator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Pause when clicking on navigation indicator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarouselComponent_Template_button_click_66_listener() {
              return ctx.togglePaused();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pauseOnHover", ctx.pauseOnHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.images2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pauseOnHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.unpauseOnArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pauseOnIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.paused ? "Cycle" : "Pause");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
          }];
        }, {
          carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/collapse/collapse.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/collapse/collapse.component.ts ***!
      \***********************************************************/

    /*! exports provided: CollapseComponent */

    /***/
    function srcAppComponentsCollapseCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapseComponent", function () {
        return CollapseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var CollapseComponent = /*#__PURE__*/function () {
        function CollapseComponent() {
          _classCallCheck(this, CollapseComponent);

          this.isCollapsed = false;
        }

        _createClass(CollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CollapseComponent;
      }();

      CollapseComponent.??fac = function CollapseComponent_Factory(t) {
        return new (t || CollapseComponent)();
      };

      CollapseComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CollapseComponent,
        selectors: [["app-collapse"]],
        decls: 41,
        vars: 2,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "col-12"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-light", 3, "click"], ["id", "collapseExample", 3, "ngbCollapse"], [1, "card"], [1, "card-body"]],
        template: function CollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Collapse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Collapse");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CollapseComponent_Template_button_click_32_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "You can collapse this card by clicking Toggle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CollapseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-collapse',
            templateUrl: './collapse.component.html',
            styleUrls: ['./collapse.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/color-palette/color-palette.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/color-palette/color-palette.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ColorPaletteComponent */

    /***/
    function srcAppComponentsColorPaletteColorPaletteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPaletteComponent", function () {
        return ColorPaletteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var ColorPaletteComponent = /*#__PURE__*/function () {
        function ColorPaletteComponent() {
          _classCallCheck(this, ColorPaletteComponent);
        }

        _createClass(ColorPaletteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ColorPaletteComponent;
      }();

      ColorPaletteComponent.??fac = function ColorPaletteComponent_Factory(t) {
        return new (t || ColorPaletteComponent)();
      };

      ColorPaletteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ColorPaletteComponent,
        selectors: [["app-color-palette"]],
        decls: 174,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-content"], [1, "card-body"], [1, "row", "row-group", "text-center", "m-0"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-primary"], [1, "text-white"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-info"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-danger"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-success"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-warning"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-secondary"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-dark"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "bg-white"], [1, "text-dark"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-primary"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-info"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-danger"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-success"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-warning"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-secondary"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-dusk"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-ibiza"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-meridian"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-violet"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-titanium"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-shifter"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-army"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-orange"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-yoda"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-royal"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-knight"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-forest"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-redmist"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-steelgray"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-influenza"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-ohhappiness"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-branding"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-deepblue"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-sylvia"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-jshine"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-lovekiss"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-hossein"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-rainbow"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-veer"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-multiple-colors"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-worldcup"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-pinki"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-esinto"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-dunada"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-linga"], [1, "col-12", "col-lg-3", "col-xl-3", "p-5", "gradient-blkw"]],
        template: function ColorPaletteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Color Palette");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Color Palette");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Background Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, ".bg-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, ".bg-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, ".bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ".bg-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ".bg-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, ".bg-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, ".bg-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, ".bg-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, ".gradient-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, ".gradient-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, ".gradient-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ".gradient-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, ".gradient-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ".gradient-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ".gradient-dusk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, ".gradient-ibiza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ".gradient-meridian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, ".gradient-violet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ".gradient-titanium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, ".gradient-shifter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, ".gradient-army");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, ".gradient-orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, ".gradient-yoda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ".gradient-royal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ".gradient-knight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, ".gradient-forest");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, ".gradient-redmist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ".gradient-steelgray");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, ".gradient-influenza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, ".gradient-influenza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ".gradient-ohhappiness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, ".gradient-branding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, ".gradient-deepblue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, ".gradient-sylvia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, ".gradient-jshine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, ".gradient-lovekiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, ".gradient-hossein");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, ".gradient-rainbow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, ".gradient-veer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ".gradient-multiple-colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, ".gradient-worldcup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, ".gradient-pinki");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, ".gradient-esinto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, ".gradient-dunada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, ".gradient-linga");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, ".gradient-blkw");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3ItcGFsZXR0ZS9jb2xvci1wYWxldHRlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorPaletteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-color-palette',
            templateUrl: './color-palette.component.html',
            styleUrls: ['./color-palette.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/components-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/components-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ComponentsRoutingModule */

    /***/
    function srcAppComponentsComponentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function () {
        return ComponentsRoutingModule;
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


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/components/carousel/carousel.component.ts");
      /* harmony import */


      var _grid_layouts_grid_layouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./grid-layouts/grid-layouts.component */
      "./src/app/components/grid-layouts/grid-layouts.component.ts");
      /* harmony import */


      var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./switch/switch.component */
      "./src/app/components/switch/switch.component.ts");
      /* harmony import */


      var _pricing_table_pricing_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pricing-table/pricing-table.component */
      "./src/app/components/pricing-table/pricing-table.component.ts");
      /* harmony import */


      var _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vertical-timeline/vertical-timeline.component */
      "./src/app/components/vertical-timeline/vertical-timeline.component.ts");
      /* harmony import */


      var _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./horizontal-timeline/horizontal-timeline.component */
      "./src/app/components/horizontal-timeline/horizontal-timeline.component.ts");
      /* harmony import */


      var _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./color-palette/color-palette.component */
      "./src/app/components/color-palette/color-palette.component.ts");
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      "./src/app/components/collapse/collapse.component.ts");
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      "./src/app/components/dropdown/dropdown.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'carousel',
          component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"],
          data: {
            title: 'Carousel'
          }
        }, {
          path: 'grid-layouts',
          component: _grid_layouts_grid_layouts_component__WEBPACK_IMPORTED_MODULE_3__["GridLayoutsComponent"],
          data: {
            title: 'Grid Layouts'
          }
        }, {
          path: 'switch',
          component: _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"],
          data: {
            title: 'switch'
          }
        }, {
          path: 'pricing-table',
          component: _pricing_table_pricing_table_component__WEBPACK_IMPORTED_MODULE_5__["PricingTableComponent"],
          data: {
            title: 'Pricing Table'
          }
        }, {
          path: 'vertical-timeline',
          component: _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_6__["VerticalTimelineComponent"],
          data: {
            title: 'Vertical Timeline'
          }
        }, {
          path: 'horizontal-timeline',
          component: _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_7__["HorizontalTimelineComponent"],
          data: {
            title: 'Horizontal Timeline'
          }
        }, {
          path: 'color-palette',
          component: _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_8__["ColorPaletteComponent"],
          data: {
            title: 'Color Palette'
          }
        }, {
          path: 'collapse',
          component: _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_9__["CollapseComponent"],
          data: {
            title: 'Collapse'
          }
        }, {
          path: 'dropdown',
          component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"],
          data: {
            title: 'dropdown'
          }
        }]
      }];

      var ComponentsRoutingModule = function ComponentsRoutingModule() {
        _classCallCheck(this, ComponentsRoutingModule);
      };

      ComponentsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ComponentsRoutingModule
      });
      ComponentsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ComponentsRoutingModule_Factory(t) {
          return new (t || ComponentsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComponentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentsRoutingModule, [{
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
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-ui-switch */
      "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js");
      /* harmony import */


      var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-chips */
      "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
      /* harmony import */


      var _components_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components-routing.module */
      "./src/app/components/components-routing.module.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/components/carousel/carousel.component.ts");
      /* harmony import */


      var _grid_layouts_grid_layouts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./grid-layouts/grid-layouts.component */
      "./src/app/components/grid-layouts/grid-layouts.component.ts");
      /* harmony import */


      var _switch_switch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./switch/switch.component */
      "./src/app/components/switch/switch.component.ts");
      /* harmony import */


      var _pricing_table_pricing_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pricing-table/pricing-table.component */
      "./src/app/components/pricing-table/pricing-table.component.ts");
      /* harmony import */


      var _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./vertical-timeline/vertical-timeline.component */
      "./src/app/components/vertical-timeline/vertical-timeline.component.ts");
      /* harmony import */


      var _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./horizontal-timeline/horizontal-timeline.component */
      "./src/app/components/horizontal-timeline/horizontal-timeline.component.ts");
      /* harmony import */


      var _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./color-palette/color-palette.component */
      "./src/app/components/color-palette/color-palette.component.ts");
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      "./src/app/components/collapse/collapse.component.ts");
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      "./src/app/components/dropdown/dropdown.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComponentsModule, {
          declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _grid_layouts_grid_layouts_component__WEBPACK_IMPORTED_MODULE_9__["GridLayoutsComponent"], _switch_switch_component__WEBPACK_IMPORTED_MODULE_10__["SwitchComponent"], _pricing_table_pricing_table_component__WEBPACK_IMPORTED_MODULE_11__["PricingTableComponent"], _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_12__["VerticalTimelineComponent"], _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalTimelineComponent"], _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_14__["ColorPaletteComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__["CollapseComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["DropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _grid_layouts_grid_layouts_component__WEBPACK_IMPORTED_MODULE_9__["GridLayoutsComponent"], _switch_switch_component__WEBPACK_IMPORTED_MODULE_10__["SwitchComponent"], _pricing_table_pricing_table_component__WEBPACK_IMPORTED_MODULE_11__["PricingTableComponent"], _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_12__["VerticalTimelineComponent"], _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalTimelineComponent"], _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_14__["ColorPaletteComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__["CollapseComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["DropdownComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/dropdown/dropdown.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/dropdown/dropdown.component.ts ***!
      \***********************************************************/

    /*! exports provided: DropdownComponent */

    /***/
    function srcAppComponentsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
        return DropdownComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent() {
          _classCallCheck(this, DropdownComponent);
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownComponent;
      }();

      DropdownComponent.??fac = function DropdownComponent_Factory(t) {
        return new (t || DropdownComponent)();
      };

      DropdownComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DropdownComponent,
        selectors: [["app-dropdown"]],
        decls: 154,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], [1, "row"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic6", "ngbDropdownToggle", "", 1, "btn", "btn-light"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic6"], ["ngbDropdownItem", ""], [1, "col", "text-right"], ["ngbDropdown", "", "placement", "top-right", 1, "d-inline-block"], ["id", "dropdownBasic7", "ngbDropdownToggle", "", 1, "btn", "btn-light"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic7"], [1, "text-uppercase", "mt-4"], ["myDrop", "ngbDropdown"], ["id", "dropdownManual", "ngbDropdownAnchor", "", 1, "btn", "btn-light", "mr-2", 3, "focus"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], [1, "btn", "btn-light", "mr-2", 3, "click"], [1, "btn-group", "mr-3"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-light"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle-split"], [1, "text-uppercase", "mt-4", "mb-4"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "btn", "btn-light"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "px-4", "py-3"], [1, "form-group"], ["for", "exampleDropdownFormEmail1"], ["type", "email", "id", "exampleDropdownFormEmail1", "placeholder", "email@example.com", 1, "form-control"], ["for", "exampleDropdownFormPassword1"], ["type", "password", "id", "exampleDropdownFormPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "dropdownCheck", 1, "form-check-input"], ["for", "dropdownCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"]],
        template: function DropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Dropdown");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Toggle dropup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h6", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Manual and custom triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "You can easily control dropdowns programmatically using the exported dropdown instance.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 21, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function DropdownComponent_Template_button_focus_63_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DropdownComponent_Template_button_click_72_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62);

              $event.stopPropagation();
              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Open from outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DropdownComponent_Template_button_click_74_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62);

              $event.stopPropagation();
              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Close from outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h6", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Button groups and split buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Plain ol' button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Drop me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Split me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Select me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Or me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h6", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Mixed menu items and form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Remember me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "New around here? Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/grid-layouts/grid-layouts.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/grid-layouts/grid-layouts.component.ts ***!
      \*******************************************************************/

    /*! exports provided: GridLayoutsComponent */

    /***/
    function srcAppComponentsGridLayoutsGridLayoutsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridLayoutsComponent", function () {
        return GridLayoutsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var GridLayoutsComponent = /*#__PURE__*/function () {
        function GridLayoutsComponent() {
          _classCallCheck(this, GridLayoutsComponent);
        }

        _createClass(GridLayoutsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GridLayoutsComponent;
      }();

      GridLayoutsComponent.??fac = function GridLayoutsComponent_Factory(t) {
        return new (t || GridLayoutsComponent)();
      };

      GridLayoutsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GridLayoutsComponent,
        selectors: [["app-grid-layouts"]],
        decls: 237,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "notranslate"], [2, "width", "20%"], [2, "width", "17%"], [2, "width", "16%"], [1, "w3-codespan"], [1, "grid"], ["colspan", "4"], ["colspan", "8"], ["colspan", "6"], ["colspan", "12"]],
        template: function GridLayoutsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Grid Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Grid Layout");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Grid Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Extra small (<576px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Small (>=576px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Medium (>=768px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Large (>=992px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Extra Large (>=1200px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Class prefix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, ".col-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, ".col-sm-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, ".col-md-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, ".col-lg-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, ".col-xl-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Grid behaviour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Horizontal at all times");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Collapsed to start, horizontal above breakpoints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Collapsed to start, horizontal above breakpoints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Collapsed to start, horizontal above breakpoints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Collapsed to start, horizontal above breakpoints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Container width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "None (auto)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "540px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "720px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "960px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "1140px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Suitable for");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Portrait phones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Landscape phones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Tablets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Laptops");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Laptops and Desktops");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "# of columns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Gutter width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "30px (15px on each side of a column)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "30px (15px on each side of a column)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "30px (15px on each side of a column)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "30px (15px on each side of a column)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "30px (15px on each side of a column)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Nestable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Offsets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Column ordering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Grid Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "col-lg-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "\xA0col-lg-4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\xA0col-lg-4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "\xA0col-lg-4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "col-lg-4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "col-lg-8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "col-lg-6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "col-lg-6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "col-lg-12");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1sYXlvdXRzL2dyaWQtbGF5b3V0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GridLayoutsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-grid-layouts',
            templateUrl: './grid-layouts.component.html',
            styleUrls: ['./grid-layouts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/horizontal-timeline/horizontal-timeline.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/horizontal-timeline/horizontal-timeline.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: HorizontalTimelineComponent */

    /***/
    function srcAppComponentsHorizontalTimelineHorizontalTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalTimelineComponent", function () {
        return HorizontalTimelineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var HorizontalTimelineComponent = /*#__PURE__*/function () {
        function HorizontalTimelineComponent() {
          _classCallCheck(this, HorizontalTimelineComponent);
        }

        _createClass(HorizontalTimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Horizontal timeline js
            $.getScript('./assets/js/horizontal-timeline.js');
          }
        }]);

        return HorizontalTimelineComponent;
      }();

      HorizontalTimelineComponent.??fac = function HorizontalTimelineComponent_Factory(t) {
        return new (t || HorizontalTimelineComponent)();
      };

      HorizontalTimelineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HorizontalTimelineComponent,
        selectors: [["app-horizontal-timeline"]],
        decls: 162,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "text-uppercase"], [1, "card"], [1, "card-body"], [1, "card-block"], [1, "cd-horizontal-timeline"], [1, "timeline"], [1, "events-wrapper"], [1, "events"], ["data-date", "16/01/2014", 1, "selected"], ["data-date", "28/02/2014"], ["data-date", "20/04/2014"], ["data-date", "20/05/2014"], ["data-date", "09/07/2014"], ["data-date", "30/08/2014"], ["data-date", "15/09/2014"], ["data-date", "01/11/2014"], ["data-date", "10/12/2014"], ["data-date", "19/01/2015"], ["data-date", "03/03/2015"], ["aria-hidden", "true", 1, "filling-line"], [1, "cd-timeline-navigation"], ["href", "#0", 1, "prev", "inactive"], ["href", "#0", 1, "next"], [1, "events-content"], [1, "text-bold-500"]],
        template: function HorizontalTimelineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Horizontal Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Horizontal Timeline");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Horizontal Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "This horizontal timeline contain date based post timeline.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "16 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "28 Feb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "20 Mar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "20 May");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "09 Jul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "30 Aug");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "15 Sep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "01 Nov");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "10 Dec");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "29 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "3 Mar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Horizontal Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "January 16th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "February 28th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "March 20th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "May 20th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "July 9th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "August 30th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "September 15th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "November 1st, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "December 10th, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "January 19th, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Event title here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "March 3rd, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9yaXpvbnRhbC10aW1lbGluZS9ob3Jpem9udGFsLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HorizontalTimelineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-horizontal-timeline',
            templateUrl: './horizontal-timeline.component.html',
            styleUrls: ['./horizontal-timeline.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/pricing-table/pricing-table.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/pricing-table/pricing-table.component.ts ***!
      \*********************************************************************/

    /*! exports provided: PricingTableComponent */

    /***/
    function srcAppComponentsPricingTablePricingTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingTableComponent", function () {
        return PricingTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var PricingTableComponent = /*#__PURE__*/function () {
        function PricingTableComponent() {
          _classCallCheck(this, PricingTableComponent);
        }

        _createClass(PricingTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PricingTableComponent;
      }();

      PricingTableComponent.??fac = function PricingTableComponent_Factory(t) {
        return new (t || PricingTableComponent)();
      };

      PricingTableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PricingTableComponent,
        selectors: [["app-pricing-table"]],
        decls: 276,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-4"], [1, "pricing-table"], [1, "card"], [1, "card-body", "text-center"], [1, "price-title"], [1, "price"], [1, "currency"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], ["href", "javascript:;", 1, "btn", "btn-primary", "my-3", "btn-round"], ["href", "javascript:;", 1, "btn", "btn-danger", "my-3", "btn-round"], ["href", "javascript:;", 1, "btn", "btn-success", "my-3", "btn-round"], [1, "pricing-table", "pricing-table-color"], [1, "card", "bg-primary"], [1, "price-title", "text-white"], [1, "price", "text-white"], ["href", "javascript:;", 1, "btn", "btn-link", "text-primary", "bg-white", "my-3", "btn-round"], [1, "card", "bg-danger"], ["href", "javascript:;", 1, "btn", "btn-link", "text-danger", "bg-white", "my-3", "btn-round"], [1, "card", "bg-success"], ["href", "javascript:;", 1, "btn", "btn-link", "text-success", "bg-white", "my-3", "btn-round"], [1, "card", "gradient-branding"], [1, "card", "gradient-sylvia"], [1, "card", "gradient-ohhappiness"]],
        template: function PricingTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Pricing Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Pricing Table");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "PERSONAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "199");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "BUSINESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "299");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "CORPORATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "399");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "PERSONAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "199");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "BUSINESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "299");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "CORPORATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "399");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "PERSONAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "199");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "BUSINESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "299");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "CORPORATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "399");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "4 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " Ram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "80 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, " Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Email Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "24X7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "View More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpY2luZy10YWJsZS9wcmljaW5nLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PricingTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pricing-table',
            templateUrl: './pricing-table.component.html',
            styleUrls: ['./pricing-table.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/switch/switch.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/switch/switch.component.ts ***!
      \*******************************************************/

    /*! exports provided: SwitchComponent */

    /***/
    function srcAppComponentsSwitchSwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchComponent", function () {
        return SwitchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ui-switch */
      "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SwitchComponent_i_152_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 48);
        }
      }

      function SwitchComponent_i_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 54);
        }
      }

      function SwitchComponent_i_154_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 55);
        }
      }

      var SwitchComponent = /*#__PURE__*/function () {
        function SwitchComponent() {
          var _this = this;

          _classCallCheck(this, SwitchComponent);

          this.enable = true;
          this.count = 0;
          this.change = false;
          this.valueChange = false;
          this.isLoading = false;
          this.fakeAsync = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.isLoading = true;
            var timeout = setTimeout(function () {
              _this.isLoading = false;
              observer.next(true);
            }, 2000);
            return function () {
              return clearTimeout(timeout);
            };
          });
        }

        _createClass(SwitchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }, {
          key: "onChange",
          value: function onChange(value) {
            this.count++;
            this.change = value;
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(event) {
            console.log(event, event.toString(), JSON.stringify(event));
            this.changeEvent = event;
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.valueChange = value;
          }
        }]);

        return SwitchComponent;
      }();

      SwitchComponent.??fac = function SwitchComponent_Factory(t) {
        return new (t || SwitchComponent)();
      };

      SwitchComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SwitchComponent,
        selectors: [["app-switch"]],
        decls: 155,
        vars: 14,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "text-uppercase"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6", "col-xl-3"], [1, "card"], [1, "card-header", "text-uppercase"], [1, "card-body"], ["checked", ""], [3, "checked"], ["disabled", ""], ["checked", "", 3, "disabled"], ["size", "small"], ["size", "large"], ["switchColor", "red"], ["switchColor", "blue"], [1, "col-lg-4"], [3, "change"], [3, "valueChange"], [3, "changeEvent"], [1, "col-lg-6"], ["reverse", ""], ["color", "blue"], ["color", "red"], [1, "col-12", "col-lg-6"], [3, "ngModel", "ngModelChange"], ["uncheckedLabel", "off", "checkedLabel", "on", "size", "small"], ["uncheckedLabel", "off", "checkedLabel", "on"], ["uncheckedLabel", "off", "checkedLabel", "on", "size", "large"], ["checkedLabel", "SUPERDUPERLONGLABEL", "uncheckedLabel", "SUPERDUPERLONGLABEL", "size", "small"], ["checkedLabel", "SUPERDUPERLONGLABEL", "uncheckedLabel", "SUPERDUPERLONGLABEL"], ["checkedLabel", "SUPERDUPERLONGLABEL", "uncheckedLabel", "SUPERDUPERLONGLABEL", "size", "large"], [1, "col-12", "col-lg-12"], [1, "custom-icons"], [1, "fa", "fa-check"], [1, "fa", "fa-check", "fa-2x"], [3, "loading", "beforeChange", "ngModel", "ngModelChange"], ["class", "fa fa-check", 4, "ngIf"], ["class", "fa fa-times", 4, "ngIf"], ["class", "fa fa-spinner fa-pulse", 4, "ngIf"], [1, "fa", "fa-times"], [1, "fa", "fa-spinner", "fa-pulse"]],
        template: function SwitchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Switch");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "ui-switch", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "ui-switch", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "ui-switch", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "ui-switch", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "ui-switch", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "ui-switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "ui-switch", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "SwitchColor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "ui-switch", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "ui-switch", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "ui-switch", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function SwitchComponent_Template_ui_switch_change_73_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Value Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "ui-switch", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("valueChange", function SwitchComponent_Template_ui_switch_valueChange_83_listener($event) {
              return ctx.onValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Change Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "ui-switch", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("changeEvent", function SwitchComponent_Template_ui_switch_changeEvent_91_listener($event) {
              return ctx.onChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Reverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "ui-switch", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "ui-switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "ui-switch", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "ui-switch", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "ng-Model Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Two way binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "ui-switch", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwitchComponent_Template_ui_switch_ngModelChange_119_listener($event) {
              return ctx.enable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Custom labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "ui-switch", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "ui-switch", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "ui-switch", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "ui-switch", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "ui-switch", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "ui-switch", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Custom Switch Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "ui-switch", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "ui-switch", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "ui-switch", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Before Change handling + Loading Icon Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "ui-switch", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwitchComponent_Template_ui_switch_ngModelChange_151_listener($event) {
              return ctx.enable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](152, SwitchComponent_i_152_Template, 1, 0, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](153, SwitchComponent_i_153_Template, 1, 0, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](154, SwitchComponent_i_154_Template, 1, 0, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("change count ", ctx.count, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("value ", ctx.change, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("value ", ctx.valueChange, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("event ", ctx.changeEvent, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.enable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current Value: ", ctx.enable, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.isLoading)("beforeChange", ctx.fakeAsync)("ngModel", ctx.enable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.enable && !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.enable && !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SwitchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-switch',
            templateUrl: './switch.component.html',
            styleUrls: ['./switch.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/vertical-timeline/vertical-timeline.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/vertical-timeline/vertical-timeline.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: VerticalTimelineComponent */

    /***/
    function srcAppComponentsVerticalTimelineVerticalTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalTimelineComponent", function () {
        return VerticalTimelineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var VerticalTimelineComponent = /*#__PURE__*/function () {
        function VerticalTimelineComponent() {
          _classCallCheck(this, VerticalTimelineComponent);
        }

        _createClass(VerticalTimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Vertical Timeline JS
            $.getScript('./assets/js/vertical-timeline.js');
          }
        }]);

        return VerticalTimelineComponent;
      }();

      VerticalTimelineComponent.??fac = function VerticalTimelineComponent_Factory(t) {
        return new (t || VerticalTimelineComponent)();
      };

      VerticalTimelineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: VerticalTimelineComponent,
        selectors: [["app-vertical-timeline"]],
        decls: 104,
        vars: 0,
        consts: [[1, "row", "pt-2", "pb-2"], [1, "col-sm-9"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javaScript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-sm-3"], ["ngbDropdown", "", 1, "btn-group", "float-sm-right"], ["type", "button", 1, "btn", "btn-light"], [1, "fa", "fa-cog", "mr-1"], ["type", "button", "id", "dropdownBasic5", "ngbDropdownToggle", "", 1, "btn", "btn-light"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic5"], ["href", "javaScript:;", "ngbDropdownItem", ""], [1, "dropdown-divider"], [1, "row"], [1, "col-lg-12"], [1, "cd-timeline", "js-cd-timeline"], [1, "cd-timeline__container"], [1, "cd-timeline__block", "js-cd-block"], [1, "cd-timeline__img", "cd-timeline__img--picture", "js-cd-img"], ["src", "assets/images/timeline/cd-icon-picture.svg", "alt", "Picture"], [1, "cd-timeline__content", "js-cd-content"], ["href", "javascript:;", 1, "cd-timeline__read-more"], [1, "cd-timeline__date"], [1, "cd-timeline__img", "cd-timeline__img--movie", "js-cd-img"], ["src", "assets/images/timeline/cd-icon-movie.svg", "alt", "Movie"], [1, "cd-timeline__img", "cd-timeline__img--location", "js-cd-img"], ["src", "assets/images/timeline/cd-icon-location.svg", "alt", "Location"]],
        template: function VerticalTimelineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Vertical Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Slava-admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Componenets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Vertical Timeline");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Title of section 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Jan 14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Title of section 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Jan 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Title of section 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Jan 24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Title of section 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Feb 14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Title of section 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Feb 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Final Section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "This is the content of the last section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Feb 26");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVydGljYWwtdGltZWxpbmUvdmVydGljYWwtdGltZWxpbmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VerticalTimelineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vertical-timeline',
            templateUrl: './vertical-timeline.component.html',
            styleUrls: ['./vertical-timeline.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-components-module-es5.js.map