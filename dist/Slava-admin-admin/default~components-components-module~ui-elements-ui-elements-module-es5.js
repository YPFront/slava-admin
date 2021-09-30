(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-components-module~ui-elements-ui-elements-module"], {
    /***/
    "./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js ***!
      \*******************************************************************************************/

    /*! exports provided: DropdownStateService, Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2DropdownModule, Ng2MenuItem */

    /***/
    function node_modulesNg2MaterialDropdown__ivy_ngcc__Fesm2015Ng2MaterialDropdownJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _ACTIONS;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownStateService", function () {
        return DropdownStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function () {
        return Ng2Dropdown;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function () {
        return Ng2DropdownButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function () {
        return Ng2DropdownMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function () {
        return Ng2DropdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function () {
        return Ng2MenuItem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function Ng2DropdownButton_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["*"];

      function Ng2DropdownMenu_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2DropdownMenu_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = [[["ng2-dropdown-button"]], [["ng2-dropdown-menu"]]];
      var _c2 = ["ng2-dropdown-button", "ng2-dropdown-menu"];

      var Ng2DropdownButton = /*#__PURE__*/function () {
        function Ng2DropdownButton(element) {
          _classCallCheck(this, Ng2DropdownButton);

          this.element = element;
          this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.showCaret = true;
        }
        /**
         * @name toggleMenu
         * @desc emits event to toggle menu
         */


        _createClass(Ng2DropdownButton, [{
          key: "toggleMenu",
          value: function toggleMenu() {
            this.onMenuToggled.emit(true);
          }
          /**
           * @name getPosition
           * @desc returns position of the button
           */

        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.element.nativeElement.getBoundingClientRect();
          }
        }]);

        return Ng2DropdownButton;
      }();

      Ng2DropdownButton.ɵfac = function Ng2DropdownButton_Factory(t) {
        return new (t || Ng2DropdownButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      Ng2DropdownButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2DropdownButton,
        selectors: [["ng2-dropdown-button"]],
        inputs: {
          showCaret: "showCaret"
        },
        outputs: {
          onMenuToggled: "onMenuToggled"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [["type", "button", "tabindex", "0s", 1, "ng2-dropdown-button", 3, "click"], [1, "ng2-dropdown-button__label"], ["class", "ng2-dropdown-button__caret", 4, "ngIf"], [1, "ng2-dropdown-button__caret"], ["enable-background", "new 0 0 32 32", "height", "16px", "id", "\u0421\u043B\u043E\u0439_1", "version", "1.1", "viewBox", "0 0 32 32", "width", "16px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z", "fill", "#121313", "id", "Expand_More"]],
        template: function Ng2DropdownButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2DropdownButton_Template_button_click_0_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2DropdownButton_span_3_Template, 9, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCaret);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".ng2-dropdown-button[_ngcontent-%COMP%]{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button[_ngcontent-%COMP%]:hover{color:#222}.ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button[_ngcontent-%COMP%]:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label[_ngcontent-%COMP%]{flex:1 1 95%}.ng2-dropdown-button__caret[_ngcontent-%COMP%]{width:12px;height:12px;display:flex;flex:1 1 6%}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%], .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.2)}"]
      });

      Ng2DropdownButton.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownButton.prototype, "showCaret", void 0);
      var KEYS = {
        BACKSPACE: 9,
        PREV: 38,
        NEXT: 40,
        ENTER: 13,
        ESCAPE: 27
      };
      /**
       * @name onSwitchNext
       * @param index
       * @param items
       * @param state
       */

      var onSwitchNext = function onSwitchNext(index, items, state) {
        if (index < items.length - 1) {
          state.select(items[index + 1], true);
        }
      };

      var ɵ0 = onSwitchNext;
      /**
       * @name onSwitchPrev
       * @param index
       * @param items
       * @param state
       */

      var onSwitchPrev = function onSwitchPrev(index, items, state) {
        if (index > 0) {
          state.select(items[index - 1], true);
        }
      };

      var ɵ1 = onSwitchPrev;
      /**
       * @name onBackspace
       * @param index
       * @param items
       * @param state
       */

      var onBackspace = function onBackspace(index, items, state) {
        if (index < items.length - 1) {
          state.select(items[index + 1], true);
        } else {
          state.select(items[0], true);
        }
      };

      var ɵ2 = onBackspace;

      function onEscape() {
        this.hide();
      }

      ;
      /**
       * @name onItemClicked
       * @param index
       * @param items
       * @param state
       */

      var onItemClicked = function onItemClicked(index, items, state) {
        return state.selectedItem ? state.selectedItem.click() : undefined;
      };

      var ɵ3 = onItemClicked;
      var ACTIONS = (_ACTIONS = {}, _defineProperty(_ACTIONS, KEYS.BACKSPACE, onBackspace), _defineProperty(_ACTIONS, KEYS.PREV, onSwitchPrev), _defineProperty(_ACTIONS, KEYS.NEXT, onSwitchNext), _defineProperty(_ACTIONS, KEYS.ENTER, onItemClicked), _defineProperty(_ACTIONS, KEYS.ESCAPE, onEscape), _ACTIONS);

      function arrowKeysHandler(event) {
        if ([38, 40].indexOf(event.keyCode) > -1) {
          event.preventDefault();
        }
      }

      var Ng2DropdownState = /*#__PURE__*/function () {
        function Ng2DropdownState() {
          _classCallCheck(this, Ng2DropdownState);

          this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @name selectedItem
         * @desc getter for _selectedItem
         */


        _createClass(Ng2DropdownState, [{
          key: "select",

          /**
           * @name selects a menu item and emits event
           * @param item
           */
          value: function select(item) {
            var dispatchEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this._selectedItem = item;

            if (!dispatchEvent || !item) {
              return;
            }

            item.focus();
            this.onItemSelected.emit(item);
          }
          /**
           * @name unselect
           * @desc sets _selectedItem as undefined
           */

        }, {
          key: "unselect",
          value: function unselect() {
            this._selectedItem = undefined;
          }
        }, {
          key: "selectedItem",
          get: function get() {
            return this._selectedItem;
          }
        }]);

        return Ng2DropdownState;
      }();

      var DropdownStateService = function DropdownStateService() {
        _classCallCheck(this, DropdownStateService);

        this.menuState = {
          isVisible: false,
          toString: function toString() {
            return this.isVisible === true ? 'visible' : 'hidden';
          }
        };
        this.dropdownState = new Ng2DropdownState();
      };

      DropdownStateService.ɵfac = function DropdownStateService_Factory(t) {
        return new (t || DropdownStateService)();
      };

      DropdownStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DropdownStateService,
        factory: function factory(t) {
          return DropdownStateService.ɵfac(t);
        }
      });

      var Ng2MenuItem = /*#__PURE__*/function () {
        function Ng2MenuItem(state, element) {
          _classCallCheck(this, Ng2MenuItem);

          this.state = state;
          this.element = element;
          /**
           * @preventClose
           * @desc if true, clicking on the item won't close the dropdown
           */

          this.preventClose = false;
        }

        _createClass(Ng2MenuItem, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.state.dropdownState.onItemDestroyed.emit(this);
          }
          /**
           * @name isSelected
           * @desc returns current selected item
           */

        }, {
          key: "select",

          /**
           * @name click
           * @desc emits select event
           */
          value: function select($event) {
            this.state.dropdownState.select(this, true);

            if ($event) {
              $event.stopPropagation();
              $event.preventDefault();
            }
          }
          /**
           * @name click
           * @desc emits click event
           */

        }, {
          key: "click",
          value: function click() {
            this.state.dropdownState.onItemClicked.emit(this);
          }
          /**
           * @name focus
           */

        }, {
          key: "focus",
          value: function focus() {
            this.element.nativeElement.children[0].focus();
          }
        }, {
          key: "isSelected",
          get: function get() {
            return this === this.state.dropdownState.selectedItem;
          }
        }]);

        return Ng2MenuItem;
      }();

      Ng2MenuItem.ɵfac = function Ng2MenuItem_Factory(t) {
        return new (t || Ng2MenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      Ng2MenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2MenuItem,
        selectors: [["ng2-menu-item"]],
        inputs: {
          preventClose: "preventClose",
          value: "value"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [["role", "button", "tabindex", "0", 1, "ng2-menu-item", 3, "keydown.enter", "click", "mouseover"]],
        template: function Ng2MenuItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function Ng2MenuItem_Template_div_keydown_enter_0_listener() {
              return ctx.click();
            })("click", function Ng2MenuItem_Template_div_click_0_listener() {
              return ctx.click();
            })("mouseover", function Ng2MenuItem_Template_div_mouseover_0_listener() {
              return ctx.select();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-menu-item--selected", ctx.isSelected);
          }
        },
        styles: [".ng2-menu-item[_ngcontent-%COMP%]{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected[_ngcontent-%COMP%]{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item[_ngcontent-%COMP%]:focus{outline:0}.ng2-menu-item[_ngcontent-%COMP%]:active{background:rgba(158,158,158,.4)}ng2-menu-item[_nghost-%COMP%]     [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"]
      });

      Ng2MenuItem.ctorParameters = function () {
        return [{
          type: DropdownStateService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2MenuItem.prototype, "preventClose", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2MenuItem.prototype, "value", void 0);

      var Ng2DropdownMenu = /*#__PURE__*/function () {
        function Ng2DropdownMenu(dropdownState, element, renderer) {
          _classCallCheck(this, Ng2DropdownMenu);

          this.dropdownState = dropdownState;
          this.element = element;
          this.renderer = renderer;
          /**
           * @name width
           */

          this.width = 4;
          /**
           * @description if set to true, the first element of the dropdown will be automatically focused
           * @name focusFirstElement
           */

          this.focusFirstElement = true;
          /**
           * @name appendToBody
           */

          this.appendToBody = true;
          /**
           * @name zIndex
           */

          this.zIndex = 1000;
          this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
          };
        }
        /**
         * @name show
         * @shows menu and selects first item
         */


        _createClass(Ng2DropdownMenu, [{
          key: "show",
          value: function show(position) {
            var dynamic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var dc = typeof document !== 'undefined' ? document : undefined;
            var wd = typeof window !== 'undefined' ? window : undefined;

            if (!this.dropdownState.menuState.isVisible) {
              // setting handlers
              this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
              this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
            } // update state


            this.dropdownState.menuState.isVisible = true;

            if (position) {
              this.updatePosition(position, dynamic);
            }
          }
          /**
           * @name hide
           * @desc hides menu
           */

        }, {
          key: "hide",
          value: function hide() {
            this.dropdownState.menuState.isVisible = false; // reset selected item state

            this.dropdownState.dropdownState.unselect(); // call function to unlisten

            this.listeners.arrowHandler && this.listeners.arrowHandler();
            this.listeners.handleKeypress && this.listeners.handleKeypress();
          }
          /**
           * @name updatePosition
           * @desc updates the menu position every time it is toggled
           * @param position {ClientRect}
           * @param dynamic {boolean}
           */

        }, {
          key: "updatePosition",
          value: function updatePosition(position, dynamic) {
            this.position = position;
            this.updateOnChange(dynamic);
          }
          /**
           * @name handleKeypress
           * @desc executes functions on keyPress based on the key pressed
           * @param $event
           */

        }, {
          key: "handleKeypress",
          value: function handleKeypress($event) {
            var key = $event.keyCode;
            var items = this.items.toArray();
            var index = items.indexOf(this.dropdownState.dropdownState.selectedItem);

            if (!ACTIONS.hasOwnProperty(key)) {
              return;
            }

            ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
          }
          /**
           * @name getMenuElement
           */

        }, {
          key: "getMenuElement",
          value: function getMenuElement() {
            return this.element.nativeElement.children[0];
          }
          /**
           * @name calcPositionOffset
           * @param position
           */

        }, {
          key: "calcPositionOffset",
          value: function calcPositionOffset(position) {
            var wd = typeof window !== 'undefined' ? window : undefined;
            var dc = typeof document !== 'undefined' ? document : undefined;

            if (!wd || !dc || !position) {
              return;
            }

            var element = this.getMenuElement();
            var supportPageOffset = wd.pageXOffset !== undefined;
            var isCSS1Compat = (dc.compatMode || '') === 'CSS1Compat';
            var x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ? dc.documentElement.scrollLeft : dc.body.scrollLeft;
            var y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ? dc.documentElement.scrollTop : dc.body.scrollTop;

            var _this$applyOffset = this.applyOffset("".concat(position.top + (this.appendToBody ? y - 15 : 0), "px"), "".concat(position.left + x - 5, "px")),
                top = _this$applyOffset.top,
                left = _this$applyOffset.left;

            var clientWidth = element.clientWidth;
            var clientHeight = element.clientHeight;
            var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
            var marginFromRight = parseInt(left) + clientWidth;
            var windowScrollHeight = wd.innerHeight + wd.scrollY;
            var windowScrollWidth = wd.innerWidth + wd.scrollX;

            if (marginFromBottom >= windowScrollHeight) {
              top = "".concat(parseInt(top.replace('px', '')) - clientHeight, "px");
            }

            if (marginFromRight >= windowScrollWidth) {
              var marginRight = marginFromRight - windowScrollWidth + 30;
              left = "".concat(parseInt(left.replace('px', '')) - marginRight, "px");
            }

            return {
              top: top,
              left: left
            };
          }
        }, {
          key: "applyOffset",
          value: function applyOffset(top, left) {
            if (!this.offset) {
              return {
                top: top,
                left: left
              };
            }

            var offset = this.offset.split(' ');

            if (!offset[1]) {
              offset[1] = '0';
            }

            top = "".concat(parseInt(top.replace('px', '')) + parseInt(offset[0]), "px");
            left = "".concat(parseInt(left.replace('px', '')) + parseInt(offset[1]), "px");
            return {
              top: top,
              left: left
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var dc = typeof document !== 'undefined' ? document : undefined;

            if (this.appendToBody) {
              // append menu element to the body
              dc.body.appendChild(this.element.nativeElement);
            }
          }
        }, {
          key: "updateOnChange",
          value: function updateOnChange() {
            var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var element = this.getMenuElement();
            var position = this.calcPositionOffset(this.position);

            if (position) {
              this.renderer.setStyle(element, 'top', position.top.toString());
              this.renderer.setStyle(element, 'left', position.left.toString());
            } // select first item unless user disabled this option


            if (this.focusFirstElement && this.items.first && !this.dropdownState.dropdownState.selectedItem) {
              this.dropdownState.dropdownState.select(this.items.first, false);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var elem = this.element.nativeElement;
            elem.parentNode.removeChild(elem);

            if (this.listeners.handleKeypress) {
              this.listeners.handleKeypress();
            }
          }
        }]);

        return Ng2DropdownMenu;
      }();

      Ng2DropdownMenu.ɵfac = function Ng2DropdownMenu_Factory(t) {
        return new (t || Ng2DropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      Ng2DropdownMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2DropdownMenu,
        selectors: [["ng2-dropdown-menu"]],
        contentQueries: function Ng2DropdownMenu_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, Ng2MenuItem, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        inputs: {
          width: "width",
          focusFirstElement: "focusFirstElement",
          appendToBody: "appendToBody",
          zIndex: "zIndex",
          offset: "offset"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 12,
        consts: [[1, "ng2-dropdown-menu__options-container"], ["class", "ng2-dropdown-backdrop", 3, "click", 4, "ngIf"], [1, "ng2-dropdown-backdrop", 3, "click"]],
        template: function Ng2DropdownMenu_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2DropdownMenu_div_3_Template, 1, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ng2-dropdown-menu ng2-dropdown-menu---width--", ctx.width, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.zIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-dropdown-menu--inside-element", !ctx.appendToBody)("ng2-dropdown-menu--open", ctx.dropdownState.menuState.isVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", ctx.dropdownState.menuState.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@opacity", ctx.dropdownState.menuState.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dropdownState.menuState.isVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display:block}.ng2-dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element[_ngcontent-%COMP%]{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2[_ngcontent-%COMP%]{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4[_ngcontent-%COMP%]{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6[_ngcontent-%COMP%]{width:320px}.ng2-dropdown-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}[_nghost-%COMP%]     .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            height: '*',
            width: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            overflow: 'hidden',
            height: 0,
            width: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            height: '*',
            width: '*'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            width: 0,
            height: 0
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            offset: 1
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0.5,
            offset: 0.3
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            offset: 1
          })]))])])]
        }
      });

      Ng2DropdownMenu.ctorParameters = function () {
        return [{
          type: DropdownStateService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "width", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "offset", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "appendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Ng2MenuItem, {
        descendants: true
      })], Ng2DropdownMenu.prototype, "items", void 0);

      var Ng2Dropdown = /*#__PURE__*/function () {
        function Ng2Dropdown(state) {
          _classCallCheck(this, Ng2Dropdown);

          this.state = state;
          this.dynamicUpdate = true; // outputs

          this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(Ng2Dropdown, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.state.dropdownState.onItemClicked.subscribe(function (item) {
              _this.onItemClicked.emit(item);

              if (item.preventClose) {
                return;
              }

              _this.hide.call(_this);
            });

            if (this.button) {
              this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
              });
            }

            this.state.dropdownState.onItemSelected.subscribe(function (item) {
              _this.onItemSelected.emit(item);
            });
            this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
              var newSelectedItem;

              var items = _this.menu.items.toArray();

              if (item !== _this.state.dropdownState.selectedItem) {
                return;
              }

              if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
              }

              _this.state.dropdownState.select(newSelectedItem);
            });
          }
          /**
           * @name toggleMenu
           * @desc toggles menu visibility
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
            this.state.menuState.isVisible ? this.hide() : this.show(position);
          }
          /**
           * - hides dropdown
           * @name hide
           */

        }, {
          key: "hide",
          value: function hide() {
            this.menu.hide();
            this.onHide.emit(this);
          }
          /**
           * - shows dropdown
           * @name show
           * @param position
           */

        }, {
          key: "show",
          value: function show() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
            this.menu.show(position, this.dynamicUpdate);
            this.onShow.emit(this);
          }
          /**
           * @name scrollListener
           */

        }, {
          key: "scrollListener",
          value: function scrollListener() {
            if (this.button && this.dynamicUpdate) {
              this.menu.updatePosition(this.button.getPosition(), true);
            }
          }
        }]);

        return Ng2Dropdown;
      }();

      Ng2Dropdown.ɵfac = function Ng2Dropdown_Factory(t) {
        return new (t || Ng2Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService));
      };

      Ng2Dropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2Dropdown,
        selectors: [["ng2-dropdown"]],
        contentQueries: function Ng2Dropdown_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, Ng2DropdownButton, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, Ng2DropdownMenu, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
          }
        },
        hostBindings: function Ng2Dropdown_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function Ng2Dropdown_scroll_HostBindingHandler() {
              return ctx.scrollListener();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          dynamicUpdate: "dynamicUpdate"
        },
        outputs: {
          onItemClicked: "onItemClicked",
          onItemSelected: "onItemSelected",
          onShow: "onShow",
          onHide: "onHide"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DropdownStateService])],
        ngContentSelectors: _c2,
        decls: 3,
        vars: 0,
        consts: [[1, "ng2-dropdown-container"]],
        template: function Ng2Dropdown_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      Ng2Dropdown.ctorParameters = function () {
        return [{
          type: DropdownStateService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownButton, {
        "static": true
      })], Ng2Dropdown.prototype, "button", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownMenu, {
        "static": true
      })], Ng2Dropdown.prototype, "menu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onItemClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onItemSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onShow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onHide", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')], Ng2Dropdown.prototype, "scrollListener", null);

      var Ng2DropdownModule = function Ng2DropdownModule() {
        _classCallCheck(this, Ng2DropdownModule);
      };

      Ng2DropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: Ng2DropdownModule
      });
      Ng2DropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function Ng2DropdownModule_Factory(t) {
          return new (t || Ng2DropdownModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-dropdown-button',
            template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n",
            styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          onMenuToggled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          showCaret: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2MenuItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-menu-item',
            template: "\n        <div\n            class=\"ng2-menu-item\"\n            role=\"button\"\n            tabindex=\"0\"\n            [class.ng2-menu-item--selected]=\"isSelected\"\n            (keydown.enter)=\"click()\"\n            (click)=\"click()\"\n            (mouseover)=\"select()\"\n        >\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"]
          }]
        }], function () {
          return [{
            type: DropdownStateService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          preventClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownMenu, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-dropdown-menu',
            template: "\n        <!-- MENU -->\n        <div\n            class=\"ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}\"\n            [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n            [class.ng2-dropdown-menu--open]=\"dropdownState.menuState.isVisible\"\n            [style.z-index]=\"zIndex\"\n            [@fade]=\"dropdownState.menuState.toString()\"\n        >\n            <div\n                class=\"ng2-dropdown-menu__options-container\"\n                [@opacity]=\"dropdownState.menuState.toString()\"\n            >\n                <ng-content></ng-content>\n            </div>\n        </div>\n\n        <!-- BACKDROP -->\n        <div\n            class=\"ng2-dropdown-backdrop\"\n            *ngIf=\"dropdownState.menuState.isVisible\"\n            (click)=\"hide()\"\n        ></div>\n    ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1,
              height: '*',
              width: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              overflow: 'hidden',
              height: 0,
              width: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1,
              height: '*',
              width: '*'
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              width: 0,
              height: 0
            }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              offset: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1,
              offset: 1
            })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1,
              offset: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0.5,
              offset: 0.3
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              offset: 1
            })]))])])],
            styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"]
          }]
        }], function () {
          return [{
            type: DropdownStateService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          focusFirstElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Ng2MenuItem, {
              descendants: true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2Dropdown, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-dropdown',
            template: "\n        <div class=\"ng2-dropdown-container\">\n            <ng-content select=\"ng2-dropdown-button\"></ng-content>\n            <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n        </div>\n    ",
            providers: [DropdownStateService]
          }]
        }], function () {
          return [{
            type: DropdownStateService
          }];
        }, {
          dynamicUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onItemClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onItemSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
          }],
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Ng2DropdownButton, {
              "static": true
            }]
          }],
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Ng2DropdownMenu, {
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2DropdownModule, {
          declarations: function declarations() {
            return [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
          },
          exports: function exports() {
            return [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown],
            declarations: [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-material-dropdown.js.map

      /***/

    },

    /***/
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js ***!
      \*******************************************************************/

    /*! exports provided: DeleteIconComponent, TagComponent, TagInputComponent, TagInputDropdown, TagInputForm, TagInputModule, TagRipple, ɵa, ɵb, ɵc, ɵd */

    /***/
    function node_modulesNgxChips__ivy_ngcc__Fesm2015NgxChipsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
        return DeleteIconComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
        return TagComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
        return TagInputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
        return TagInputDropdown;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
        return TagInputForm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputModule", function () {
        return TagInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
        return TagRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return TagInputAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return animations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return DragProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return HighlightPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-material-dropdown */
      "./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var _c0 = ["input"];

      function TagComponent_div_1_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1) {
        return {
          item: a0,
          index: a1
        };
      };

      function TagComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("contenteditable", ctx_r0.editing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r0.model, ctx_r0.index))("ngTemplateOutlet", ctx_r0.template);
        }
      }

      function TagComponent_div_2_delete_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "delete-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagComponent_div_2_delete_icon_3_Template_delete_icon_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TagComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function TagComponent_div_2_Template_div_keydown_enter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.disableEditMode($event);
          })("keydown.escape", function TagComponent_div_2_Template_div_keydown_escape_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.disableEditMode($event);
          })("click", function TagComponent_div_2_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.editing ? $event.stopPropagation() : undefined;
          })("blur", function TagComponent_div_2_Template_div_blur_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.onBlurred($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_div_2_delete_icon_3_Template, 1, 0, "delete-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("contenteditable", ctx_r1.editing)("title", ctx_r1.getDisplayValue(ctx_r1.model));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getDisplayValue(ctx_r1.model), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isDeleteIconVisible());
        }
      }

      function TagComponent_tag_ripple_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tag-ripple", 9);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r2.rippleState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0 - 1);
        }
      }

      function TagInputDropdown_ng2_menu_item_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "highlight");
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, item_r1[ctx_r4.displayBy], ctx_r4.tagInput.inputForm.value.value), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template(rf, ctx) {}

      var _c2 = function _c2(a0, a1, a2) {
        return {
          item: a0,
          index: a1,
          last: a2
        };
      };

      function TagInputDropdown_ng2_menu_item_2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var item_r1 = ctx_r8.$implicit;
          var index_r2 = ctx_r8.index;
          var last_r3 = ctx_r8.last;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.templates.first)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c2, item_r1, index_r2, last_r3));
        }
      }

      function TagInputDropdown_ng2_menu_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-menu-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputDropdown_ng2_menu_item_2_span_1_Template, 2, 4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_2_Template, 1, 6, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1)("ngSwitch", !!ctx_r0.templates.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);
        }
      }

      function TagInputComponent_tag_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tag", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function TagInputComponent_tag_2_Template_tag_onSelect_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var item_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.selectItem(item_r3);
          })("onRemove", function TagInputComponent_tag_2_Template_tag_onRemove_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var item_r3 = ctx.$implicit;
            var i_r4 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onRemoveRequested(item_r3, i_r4);
          })("onKeyDown", function TagInputComponent_tag_2_Template_tag_onKeyDown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.handleKeydown($event);
          })("onTagEdited", function TagInputComponent_tag_2_Template_tag_onTagEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.updateEditedTag($event);
          })("onBlur", function TagInputComponent_tag_2_Template_tag_onBlur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.onTagBlurred($event, i_r4);
          })("dragstart", function TagInputComponent_tag_2_Template_tag_dragstart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var item_r3 = ctx.$implicit;
            var i_r4 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.dragZone ? ctx_r11.onDragStarted($event, item_r3, i_r4) : undefined;
          })("drop", function TagInputComponent_tag_2_Template_tag_drop_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.dragZone ? ctx_r12.onTagDropped($event, i_r4) : undefined;
          })("dragenter", function TagInputComponent_tag_2_Template_tag_dragenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.dragZone ? ctx_r13.onDragOver($event) : undefined;
          })("dragover", function TagInputComponent_tag_2_Template_tag_dragover_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.dragZone ? ctx_r14.onDragOver($event, i_r4) : undefined;
          })("dragleave", function TagInputComponent_tag_2_Template_tag_dragleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.dragZone ? ctx_r15.dragProvider.onDragEnd() : undefined;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("draggable", ctx_r0.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("canAddTag", ctx_r0.isTagValid)("disabled", ctx_r0.disable)("@animation", ctx_r0.animationMetadata)("hasRipple", ctx_r0.ripple)("index", i_r4)("removable", ctx_r0.removable)("editable", ctx_r0.editable)("displayBy", ctx_r0.displayBy)("identifyBy", ctx_r0.identifyBy)("template", !!ctx_r0.hasCustomTemplate() ? ctx_r0.templates.first : undefined)("draggable", ctx_r0.dragZone)("model", item_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0);
        }
      }

      function TagInputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
        }
      }

      function TagInputComponent_div_6_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r17);
        }
      }

      function TagInputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputComponent_div_6_p_1_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.theme);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.errors);
        }
      }

      var _c3 = ["*"];

      var escape = function escape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      };

      var HighlightPipe = /*#__PURE__*/function () {
        function HighlightPipe() {
          _classCallCheck(this, HighlightPipe);
        }

        _createClass(HighlightPipe, [{
          key: "transform",

          /**
           * @name transform
           * @param value {string}
           * @param arg {string}
           */
          value: function transform(value, arg) {
            if (!arg.trim()) {
              return value;
            }

            try {
              var regex = new RegExp("(".concat(escape(arg), ")"), 'i');
              return value.replace(regex, '<b>$1</b>');
            } catch (e) {
              return value;
            }
          }
        }]);

        return HighlightPipe;
      }();

      HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
        return new (t || HighlightPipe)();
      };

      HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "highlight",
        type: HighlightPipe,
        pure: true
      });
      /*
      ** constants and default values for <tag-input>
       */

      var PLACEHOLDER = '+ Tag';
      var SECONDARY_PLACEHOLDER = 'Enter a new tag';
      var KEYDOWN = 'keydown';
      var KEYUP = 'keyup';
      var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
      var ACTIONS_KEYS = {
        DELETE: 'DELETE',
        SWITCH_PREV: 'SWITCH_PREV',
        SWITCH_NEXT: 'SWITCH_NEXT',
        TAB: 'TAB'
      };
      var KEY_PRESS_ACTIONS = {
        8: ACTIONS_KEYS.DELETE,
        37: ACTIONS_KEYS.SWITCH_PREV,
        39: ACTIONS_KEYS.SWITCH_NEXT,
        9: ACTIONS_KEYS.TAB
      };
      var DRAG_AND_DROP_KEY = 'Text';
      var NEXT = 'NEXT';
      var PREV = 'PREV';

      var DragProvider = /*#__PURE__*/function () {
        function DragProvider() {
          _classCallCheck(this, DragProvider);

          this.state = {
            dragging: false,
            dropping: false,
            index: undefined
          };
        }
        /**
         * @name setDraggedItem
         * @param event
         * @param tag
         */


        _createClass(DragProvider, [{
          key: "setDraggedItem",
          value: function setDraggedItem(event, tag) {
            if (event && event.dataTransfer) {
              event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
            }
          }
          /**
           * @name getDraggedItem
           * @param event
           */

        }, {
          key: "getDraggedItem",
          value: function getDraggedItem(event) {
            if (event && event.dataTransfer) {
              var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);

              try {
                return JSON.parse(data);
              } catch (_a) {
                return;
              }
            }
          }
          /**
           * @name setSender
           * @param sender
           */

        }, {
          key: "setSender",
          value: function setSender(sender) {
            this.sender = sender;
          }
          /**
           * @name setReceiver
           * @param receiver
           */

        }, {
          key: "setReceiver",
          value: function setReceiver(receiver) {
            this.receiver = receiver;
          }
          /**
           * @name onTagDropped
           * @param tag
           * @param indexDragged
           * @param indexDropped
           */

        }, {
          key: "onTagDropped",
          value: function onTagDropped(tag, indexDragged, indexDropped) {
            this.onDragEnd();
            this.sender.onRemoveRequested(tag, indexDragged);
            this.receiver.onAddingRequested(false, tag, indexDropped);
          }
          /**
           * @name setState
           * @param state
           */

        }, {
          key: "setState",
          value: function setState(state) {
            this.state = Object.assign({}, this.state, state);
          }
          /**
           * @name getState
           * @param key
           */

        }, {
          key: "getState",
          value: function getState(key) {
            return key ? this.state[key] : this.state;
          }
          /**
           * @name onDragEnd
           */

        }, {
          key: "onDragEnd",
          value: function onDragEnd() {
            this.setState({
              dragging: false,
              dropping: false,
              index: undefined
            });
          }
        }]);

        return DragProvider;
      }();

      DragProvider.ɵfac = function DragProvider_Factory(t) {
        return new (t || DragProvider)();
      };

      DragProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DragProvider,
        factory: function factory(t) {
          return DragProvider.ɵfac(t);
        }
      });
      var defaults = {
        tagInput: {
          separatorKeys: [],
          separatorKeyCodes: [],
          maxItems: Infinity,
          placeholder: PLACEHOLDER,
          secondaryPlaceholder: SECONDARY_PLACEHOLDER,
          validators: [],
          asyncValidators: [],
          onlyFromAutocomplete: false,
          errorMessages: {},
          theme: '',
          onTextChangeDebounce: 250,
          inputId: null,
          inputClass: '',
          clearOnBlur: false,
          hideForm: false,
          addOnBlur: false,
          addOnPaste: false,
          pasteSplitPattern: ',',
          blinkIfDupe: true,
          removable: true,
          editable: false,
          allowDupes: false,
          modelAsStrings: false,
          trimTags: true,
          ripple: true,
          tabIndex: '',
          disable: false,
          dragZone: '',
          onRemoving: undefined,
          onAdding: undefined,
          displayBy: 'display',
          identifyBy: 'value',
          animationDuration: {
            enter: '250ms',
            leave: '150ms'
          }
        },
        dropdown: {
          displayBy: 'display',
          identifyBy: 'value',
          appendToBody: true,
          offset: '50 0',
          focusFirstElement: false,
          showDropdownIfEmpty: false,
          minimumTextLength: 1,
          limitItemsTo: Infinity,
          keepOpen: true,
          dynamicUpdate: true,
          zIndex: 1000,
          matchingFn: matchingFn
        }
      };
      /**
       * @name matchingFn
       * @param this
       * @param value
       * @param target
       */

      function matchingFn(value, target) {
        var targetValue = target[this.displayBy].toString();
        return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      }

      var OptionsProvider = /*#__PURE__*/function () {
        function OptionsProvider() {
          _classCallCheck(this, OptionsProvider);
        }

        _createClass(OptionsProvider, [{
          key: "setOptions",
          value: function setOptions(options) {
            OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
            OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
          }
        }]);

        return OptionsProvider;
      }();

      OptionsProvider.defaults = defaults;

      function isObject(obj) {
        return obj === Object(obj);
      }

      var TagInputAccessor = /*#__PURE__*/function () {
        function TagInputAccessor() {
          _classCallCheck(this, TagInputAccessor);

          this._items = [];
          /**
           * @name displayBy
           */

          this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
          /**
           * @name identifyBy
           */

          this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
        }

        _createClass(TagInputAccessor, [{
          key: "onTouched",
          value: function onTouched() {
            this._onTouchedCallback();
          }
        }, {
          key: "writeValue",
          value: function writeValue(items) {
            this._items = items || [];
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouchedCallback = fn;
          }
          /**
           * @name getItemValue
           * @param item
           * @param fromDropdown
           */

        }, {
          key: "getItemValue",
          value: function getItemValue(item) {
            var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
            return isObject(item) ? item[property] : item;
          }
          /**
           * @name getItemDisplay
           * @param item
           * @param fromDropdown
           */

        }, {
          key: "getItemDisplay",
          value: function getItemDisplay(item) {
            var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
            return isObject(item) ? item[property] : item;
          }
          /**
           * @name getItemsWithout
           * @param index
           */

        }, {
          key: "getItemsWithout",
          value: function getItemsWithout(index) {
            return this.items.filter(function (item, position) {
              return position !== index;
            });
          }
        }, {
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(items) {
            this._items = items;

            this._onChangeCallback(this._items);
          }
        }]);

        return TagInputAccessor;
      }();

      TagInputAccessor.ɵfac = function TagInputAccessor_Factory(t) {
        return new (t || TagInputAccessor)();
      };

      TagInputAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: TagInputAccessor,
        inputs: {
          displayBy: "displayBy",
          identifyBy: "identifyBy"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputAccessor.prototype, "displayBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputAccessor.prototype, "identifyBy", void 0);
      /**
       * @name listen
       * @param listenerType
       * @param action
       * @param condition
       */

      function listen(listenerType, action) {
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        // if the event provided does not exist, throw an error
        if (!this.listeners.hasOwnProperty(listenerType)) {
          throw new Error('The event entered may be wrong');
        } // if a condition is present and is false, exit early


        if (!condition) {
          return;
        } // fire listener


        this.listeners[listenerType].push(action);
      }

      var TagInputForm = /*#__PURE__*/function () {
        function TagInputForm() {
          _classCallCheck(this, TagInputForm);

          /**
           * @name onSubmit
           */
          this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onBlur
           */

          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onFocus
           */

          this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onKeyup
           */

          this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onKeydown
           */

          this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name inputTextChange
           */

          this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name validators
           */

          this.validators = [];
          /**
           * @name asyncValidators
           * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
           */

          this.asyncValidators = [];
          /**
           * @name tabindex
           * @desc pass through the specified tabindex to the input
           */

          this.tabindex = '';
          /**
           * @name disabled
           */

          this.disabled = false;
          this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: this.disabled
          });
        }
        /**
         * @name inputText
         */


        _createClass(TagInputForm, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.item.setValidators(this.validators);
            this.item.setAsyncValidators(this.asyncValidators); // creating form

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              item: this.item
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.disabled && !changes.disabled.firstChange) {
              if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
              } else {
                this.form.controls['item'].enable();
              }
            }
          }
          /**
           * @name value
           */

        }, {
          key: "isInputFocused",

          /**
           * @name isInputFocused
           */
          value: function isInputFocused() {
            var doc = typeof document !== 'undefined' ? document : undefined;
            return doc ? doc.activeElement === this.input.nativeElement : false;
          }
          /**
           * @name getErrorMessages
           * @param messages
           */

        }, {
          key: "getErrorMessages",
          value: function getErrorMessages(messages) {
            var _this2 = this;

            return Object.keys(messages).filter(function (err) {
              return _this2.value.hasError(err);
            }).map(function (err) {
              return messages[err];
            });
          }
          /**
           * @name hasErrors
           */

        }, {
          key: "hasErrors",
          value: function hasErrors() {
            var _this$form = this.form,
                dirty = _this$form.dirty,
                value = _this$form.value,
                valid = _this$form.valid;
            return dirty && value.item && !valid;
          }
          /**
           * @name focus
           */

        }, {
          key: "focus",
          value: function focus() {
            this.input.nativeElement.focus();
          }
          /**
           * @name blur
           */

        }, {
          key: "blur",
          value: function blur() {
            this.input.nativeElement.blur();
          }
          /**
           * @name getElementPosition
           */

        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.input.nativeElement.getBoundingClientRect();
          }
          /**
           * - removes input from the component
           * @name destroy
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var input = this.input.nativeElement;
            input.parentElement.removeChild(input);
          }
          /**
           * @name onKeyDown
           * @param $event
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            this.inputText = this.value.value;

            if ($event.key === 'Enter') {
              this.submit($event);
            } else {
              return this.onKeydown.emit($event);
            }
          }
          /**
           * @name onKeyUp
           * @param $event
           */

        }, {
          key: "onKeyUp",
          value: function onKeyUp($event) {
            this.inputText = this.value.value;
            return this.onKeyup.emit($event);
          }
          /**
           * @name submit
           */

        }, {
          key: "submit",
          value: function submit($event) {
            $event.preventDefault();
            this.onSubmit.emit($event);
          }
        }, {
          key: "inputText",
          get: function get() {
            return this.item.value;
          }
          /**
           * @name inputText
           * @param text {string}
           */
          ,
          set: function set(text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
          }
        }, {
          key: "value",
          get: function get() {
            return this.form.get('item');
          }
        }]);

        return TagInputForm;
      }();

      TagInputForm.ɵfac = function TagInputForm_Factory(t) {
        return new (t || TagInputForm)();
      };

      TagInputForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagInputForm,
        selectors: [["tag-input-form"]],
        viewQuery: function TagInputForm_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        inputs: {
          validators: "validators",
          asyncValidators: "asyncValidators",
          tabindex: "tabindex",
          disabled: "disabled",
          inputText: "inputText",
          placeholder: "placeholder",
          inputId: "inputId",
          inputClass: "inputClass"
        },
        outputs: {
          onSubmit: "onSubmit",
          onBlur: "onBlur",
          onFocus: "onFocus",
          onKeyup: "onKeyup",
          onKeydown: "onKeydown",
          inputTextChange: "inputTextChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 8,
        consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "autocomplete", "off", "minlength", "1", "formControlName", "item", 1, "ng2-tag-input__text-input", 3, "tabindex", "ngClass", "focus", "blur", "keydown", "keyup"], ["input", ""]],
        template: function TagInputForm_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TagInputForm_Template_form_ngSubmit_0_listener($event) {
              return ctx.submit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function TagInputForm_Template_input_focus_1_listener($event) {
              return ctx.onFocus.emit($event);
            })("blur", function TagInputForm_Template_input_blur_1_listener($event) {
              return ctx.onBlur.emit($event);
            })("keydown", function TagInputForm_Template_input_keydown_1_listener($event) {
              return ctx.onKeyDown($event);
            })("keyup", function TagInputForm_Template_input_keyup_1_listener($event) {
              return ctx.onKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabindex ? ctx.tabindex : 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.placeholder)("tabindex", ctx.tabindex)("disabled", ctx.disabled ? ctx.disabled : null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.ng2-tag-input__text-input[_ngcontent-%COMP%]{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input__text-input[disabled=true][_ngcontent-%COMP%]{opacity:.5;background:#fff}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onSubmit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onBlur", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onKeyup", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onKeydown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "inputTextChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "placeholder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputForm.prototype, "validators", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputForm.prototype, "asyncValidators", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "inputId", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "tabindex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "input", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TagInputForm.prototype, "inputText", null);

      var TagRipple = function TagRipple() {
        _classCallCheck(this, TagRipple);

        this.state = 'none';
      };

      TagRipple.ɵfac = function TagRipple_Factory(t) {
        return new (t || TagRipple)();
      };

      TagRipple.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagRipple,
        selectors: [["tag-ripple"]],
        inputs: {
          state: "state"
        },
        decls: 1,
        vars: 1,
        consts: [[1, "tag-ripple"]],
        template: function TagRipple_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@ink", ctx.state);
          }
        },
        styles: ["[_nghost-%COMP%] {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple[_ngcontent-%COMP%] {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            width: 0,
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1,
            offset: 0,
            width: '30%',
            borderRadius: '100%'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1,
            offset: 0.5,
            width: '50%'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0.5,
            offset: 1,
            width: '100%',
            borderRadius: '16px'
          })]))])])]
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagRipple.prototype, "state", void 0); // mocking navigator

      var navigator = typeof window !== 'undefined' ? window.navigator : {
        userAgent: 'Chrome',
        vendor: 'Google Inc'
      };
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

      var TagComponent = /*#__PURE__*/function () {
        function TagComponent(element, renderer, cdRef) {
          _classCallCheck(this, TagComponent);

          this.element = element;
          this.renderer = renderer;
          this.cdRef = cdRef;
          /**
           * @name disabled
           */

          this.disabled = false;
          /**
           * @name onSelect
           */

          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onRemove
           */

          this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onBlur
           */

          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onKeyDown
           */

          this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onTagEdited
           */

          this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name editing
           */

          this.editing = false;
          /**
           * @name rippleState
           */

          this.rippleState = 'none';
        }
        /**
         * @name readonly {boolean}
         */


        _createClass(TagComponent, [{
          key: "select",

          /**
           * @name select
           */
          value: function select($event) {
            if (this.readonly || this.disabled) {
              return;
            }

            if ($event) {
              $event.stopPropagation();
            }

            this.focus();
            this.onSelect.emit(this.model);
          }
          /**
           * @name remove
           */

        }, {
          key: "remove",
          value: function remove($event) {
            $event.stopPropagation();
            this.onRemove.emit(this);
          }
          /**
           * @name focus
           */

        }, {
          key: "focus",
          value: function focus() {
            this.element.nativeElement.focus();
          }
        }, {
          key: "move",
          value: function move() {
            this.moving = true;
          }
          /**
           * @name keydown
           * @param event
           */

        }, {
          key: "keydown",
          value: function keydown(event) {
            if (this.editing) {
              if (event.keyCode === 13) {
                return this.disableEditMode(event);
              }
            } else {
              this.onKeyDown.emit({
                event: event,
                model: this.model
              });
            }
          }
          /**
           * @name blink
           */

        }, {
          key: "blink",
          value: function blink() {
            var classList = this.element.nativeElement.classList;
            classList.add('blink');
            setTimeout(function () {
              return classList.remove('blink');
            }, 50);
          }
          /**
           * @name toggleEditMode
           */

        }, {
          key: "toggleEditMode",
          value: function toggleEditMode() {
            if (this.editable) {
              return this.editing ? undefined : this.activateEditMode();
            }
          }
          /**
           * @name onBlurred
           * @param event
           */

        }, {
          key: "onBlurred",
          value: function onBlurred(event) {
            // Checks if it is editable first before handeling the onBlurred event in order to prevent
            // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
            if (!this.editable) {
              return;
            }

            this.disableEditMode();
            var value = event.target.innerText;
            var result = typeof this.model === 'string' ? value : Object.assign({}, this.model, _defineProperty({}, this.displayBy, value));
            this.onBlur.emit(result);
          }
          /**
           * @name getDisplayValue
           * @param item
           */

        }, {
          key: "getDisplayValue",
          value: function getDisplayValue(item) {
            return typeof item === 'string' ? item : item[this.displayBy];
          }
          /**
           * @desc returns whether the ripple is visible or not
           * only works in Chrome
           * @name isRippleVisible
           */

        }, {
          key: "disableEditMode",

          /**
           * @name disableEditMode
           * @param $event
           */
          value: function disableEditMode($event) {
            var classList = this.element.nativeElement.classList;
            var input = this.getContentEditableText();
            this.editing = false;
            classList.remove('tag--editing');

            if (!input) {
              this.setContentEditableText(this.model);
              return;
            }

            this.storeNewValue(input);
            this.cdRef.detectChanges();

            if ($event) {
              $event.preventDefault();
            }
          }
          /**
           * @name isDeleteIconVisible
           */

        }, {
          key: "isDeleteIconVisible",
          value: function isDeleteIconVisible() {
            return !this.readonly && !this.disabled && this.removable && !this.editing;
          }
          /**
           * @name getContentEditableText
           */

        }, {
          key: "getContentEditableText",
          value: function getContentEditableText() {
            var input = this.getContentEditable();
            return input ? input.innerText.trim() : '';
          }
          /**
           * @name setContentEditableText
           * @param model
           */

        }, {
          key: "setContentEditableText",
          value: function setContentEditableText(model) {
            var input = this.getContentEditable();
            var value = this.getDisplayValue(model);
            input.innerText = value;
          }
          /**
           * @name
           */

        }, {
          key: "activateEditMode",
          value: function activateEditMode() {
            var classList = this.element.nativeElement.classList;
            classList.add('tag--editing');
            this.editing = true;
          }
          /**
           * @name storeNewValue
           * @param input
           */

        }, {
          key: "storeNewValue",
          value: function storeNewValue(input) {
            var _this3 = this,
                _ref;

            var exists = function exists(tag) {
              return typeof tag === 'string' ? tag === input : tag[_this3.displayBy] === input;
            };

            var hasId = function hasId() {
              return _this3.model[_this3.identifyBy] !== _this3.model[_this3.displayBy];
            }; // if the value changed, replace the value in the model


            if (exists(this.model)) {
              return;
            }

            var model = typeof this.model === 'string' ? input : (_ref = {
              index: this.index
            }, _defineProperty(_ref, this.identifyBy, hasId() ? this.model[this.identifyBy] : input), _defineProperty(_ref, this.displayBy, input), _ref);

            if (this.canAddTag(model)) {
              this.onTagEdited.emit({
                tag: model,
                index: this.index
              });
            } else {
              this.setContentEditableText(this.model);
            }
          }
          /**
           * @name getContentEditable
           */

        }, {
          key: "getContentEditable",
          value: function getContentEditable() {
            return this.element.nativeElement.querySelector('[contenteditable]');
          }
        }, {
          key: "readonly",
          get: function get() {
            return typeof this.model !== 'string' && this.model.readonly === true;
          }
        }, {
          key: "isRippleVisible",
          get: function get() {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
          }
        }]);

        return TagComponent;
      }();

      TagComponent.ɵfac = function TagComponent_Factory(t) {
        return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagComponent,
        selectors: [["tag"]],
        viewQuery: function TagComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagRipple, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function TagComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function TagComponent_keydown_HostBindingHandler($event) {
              return ctx.keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("moving", ctx.moving);
          }
        },
        inputs: {
          disabled: "disabled",
          model: "model",
          removable: "removable",
          editable: "editable",
          template: "template",
          displayBy: "displayBy",
          identifyBy: "identifyBy",
          index: "index",
          hasRipple: "hasRipple",
          canAddTag: "canAddTag"
        },
        outputs: {
          onSelect: "onSelect",
          onRemove: "onRemove",
          onBlur: "onBlur",
          onKeyDown: "onKeyDown",
          onTagEdited: "onTagEdited"
        },
        decls: 4,
        vars: 8,
        consts: [[3, "ngSwitch", "click", "dblclick", "mousedown", "mouseup"], [4, "ngSwitchCase"], ["class", "tag-wrapper", 4, "ngSwitchCase"], [3, "state", 4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [1, "tag-wrapper"], ["spellcheck", "false", 1, "tag__text", "inline", 3, "keydown.enter", "keydown.escape", "click", "blur"], ["aria-label", "Remove tag", "role", "button", 3, "click", 4, "ngIf"], ["aria-label", "Remove tag", "role", "button", 3, "click"], [3, "state"]],
        template: function TagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagComponent_Template_div_click_0_listener($event) {
              return ctx.select($event);
            })("dblclick", function TagComponent_Template_div_dblclick_0_listener() {
              return ctx.toggleEditMode();
            })("mousedown", function TagComponent_Template_div_mousedown_0_listener() {
              return ctx.rippleState = "clicked";
            })("mouseup", function TagComponent_Template_div_mouseup_0_listener() {
              return ctx.rippleState = "none";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_div_1_Template, 2, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagComponent_div_2_Template, 4, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_tag_ripple_3_Template, 1, 2, "tag-ripple", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", !!ctx.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0 - 1)("aria-label", ctx.getDisplayValue(ctx.model));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRippleVisible);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], DeleteIconComponent, TagRipple];
        },
        styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}[_nghost-%COMP%]{max-width:400px}.blink[_nghost-%COMP%]{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   [contenteditable=true][_ngcontent-%COMP%]{outline:0}.tag-wrapper[_ngcontent-%COMP%]{flex-direction:row;display:flex}.tag__text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagComponent.prototype, "model", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "removable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], TagComponent.prototype, "template", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagComponent.prototype, "displayBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagComponent.prototype, "identifyBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagComponent.prototype, "index", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "hasRipple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagComponent.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagComponent.prototype, "canAddTag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onRemove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onBlur", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onKeyDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onTagEdited", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.moving'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "moving", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagRipple, {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagRipple)], TagComponent.prototype, "ripple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagComponent.prototype, "keydown", null);
      TagComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], TagComponent);
      /**
       * @name animations
       */

      var animations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        offset: 0,
        transform: 'translate(0px, 20px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0.3,
        offset: 0.3,
        transform: 'translate(0px, -10px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0.5,
        offset: 0.5,
        transform: 'translate(0px, 0px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0.75,
        offset: 0.75,
        transform: 'translate(0px, 5px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        offset: 1,
        transform: 'translate(0px, 0px)'
      })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        transform: 'translateX(-15px)',
        offset: 0.7
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: 'translateX(100%)',
        offset: 1.0
      })]))])])];

      var TagInputDropdown = /*#__PURE__*/function () {
        function TagInputDropdown(injector) {
          var _this4 = this;

          _classCallCheck(this, TagInputDropdown);

          this.injector = injector;
          /**
           * @name offset
           */

          this.offset = defaults.dropdown.offset;
          /**
           * @name focusFirstElement
           */

          this.focusFirstElement = defaults.dropdown.focusFirstElement;
          /**
           * - show autocomplete dropdown if the value of input is empty
           * @name showDropdownIfEmpty
           */

          this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
          /**
           * - desc minimum text length in order to display the autocomplete dropdown
           * @name minimumTextLength
           */

          this.minimumTextLength = defaults.dropdown.minimumTextLength;
          /**
           * - number of items to display in the autocomplete dropdown
           * @name limitItemsTo
           */

          this.limitItemsTo = defaults.dropdown.limitItemsTo;
          /**
           * @name displayBy
           */

          this.displayBy = defaults.dropdown.displayBy;
          /**
           * @name identifyBy
           */

          this.identifyBy = defaults.dropdown.identifyBy;
          /**
           * @description a function a developer can use to implement custom matching for the autocomplete
           * @name matchingFn
           */

          this.matchingFn = defaults.dropdown.matchingFn;
          /**
           * @name appendToBody
           */

          this.appendToBody = defaults.dropdown.appendToBody;
          /**
           * @name keepOpen
           * @description option to leave dropdown open when adding a new item
           */

          this.keepOpen = defaults.dropdown.keepOpen;
          /**
           * @name dynamicUpdate
           */

          this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
          /**
           * @name zIndex
           */

          this.zIndex = defaults.dropdown.zIndex;
          /**
           * list of items that match the current value of the input (for autocomplete)
           * @name items
           */

          this.items = [];
          /**
           * @name tagInput
           */

          this.tagInput = this.injector.get(TagInputComponent);
          /**
           * @name _autocompleteItems
           */

          this._autocompleteItems = [];
          /**
           *
           * @name show
           */

          this.show = function () {
            var maxItemsReached = _this4.tagInput.items.length === _this4.tagInput.maxItems;

            var value = _this4.getFormValue();

            var hasMinimumText = value.trim().length >= _this4.minimumTextLength;

            var position = _this4.calculatePosition();

            var items = _this4.getMatchingItems(value);

            var hasItems = items.length > 0;
            var isHidden = _this4.isVisible === false;
            var showDropdownIfEmpty = _this4.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this4.tagInput.disable;
            var shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
            var shouldHide = _this4.isVisible && !hasItems;

            if (_this4.autocompleteObservable && hasMinimumText) {
              return _this4.getItemsFromObservable(value);
            }

            if (!_this4.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
              return _this4.dropdown.hide();
            }

            _this4.setItems(items);

            if (shouldShow) {
              _this4.dropdown.show(position);
            } else if (shouldHide) {
              _this4.hide();
            }
          };
          /**
           * @name requestAdding
           * @param item {Ng2MenuItem}
           */


          this.requestAdding = function (item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var tag;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      tag = this.createTagModel(item);
                      _context.next = 3;
                      return this.tagInput.onAddingRequested(true, tag)["catch"](function () {});

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };
          /**
           * @name resetItems
           */


          this.resetItems = function () {
            _this4.items = [];
          };
          /**
           * @name getItemsFromObservable
           * @param text
           */


          this.getItemsFromObservable = function (text) {
            _this4.setLoadingState(true);

            var subscribeFn = function subscribeFn(data) {
              // hide loading animation
              _this4.setLoadingState(false) // add items
              .populateItems(data);

              _this4.setItems(_this4.getMatchingItems(text));

              if (_this4.items.length) {
                _this4.dropdown.show(_this4.calculatePosition());
              } else {
                _this4.dropdown.hide();
              }
            };

            _this4.autocompleteObservable(text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn, function () {
              return _this4.setLoadingState(false);
            });
          };
        }
        /**
         * @name autocompleteItems
         * @param items
         */


        _createClass(TagInputDropdown, [{
          key: "ngAfterViewInit",

          /**
           * @name ngAfterviewInit
           */
          value: function ngAfterViewInit() {
            var _this5 = this;

            this.onItemClicked().subscribe(function (item) {
              _this5.requestAdding(item);
            }); // reset itemsMatching array when the dropdown is hidden

            this.onHide().subscribe(this.resetItems);
            var DEBOUNCE_TIME = 200;
            var KEEP_OPEN = this.keepOpen;
            this.tagInput.onTextChange.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (value) {
              if (KEEP_OPEN === false) {
                return value.length > 0;
              }

              return true;
            })).subscribe(this.show);
          }
          /**
           * @name updatePosition
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            var position = this.tagInput.inputForm.getElementPosition();
            this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
          }
          /**
           * @name isVisible
           */

        }, {
          key: "onHide",

          /**
           * @name onHide
           */
          value: function onHide() {
            return this.dropdown.onHide;
          }
          /**
           * @name onItemClicked
           */

        }, {
          key: "onItemClicked",
          value: function onItemClicked() {
            return this.dropdown.onItemClicked;
          }
          /**
           * @name selectedItem
           */

        }, {
          key: "hide",

          /**
           * @name hide
           */
          value: function hide() {
            this.resetItems();
            this.dropdown.hide();
          }
          /**
           * @name scrollListener
           */

        }, {
          key: "scrollListener",
          value: function scrollListener() {
            if (!this.isVisible || !this.dynamicUpdate) {
              return;
            }

            this.updatePosition();
          }
          /**
           * @name onWindowBlur
           */

        }, {
          key: "onWindowBlur",
          value: function onWindowBlur() {
            this.dropdown.hide();
          }
          /**
           * @name getFormValue
           */

        }, {
          key: "getFormValue",
          value: function getFormValue() {
            var formValue = this.tagInput.formValue;
            return formValue ? formValue.toString().trim() : '';
          }
          /**
           * @name calculatePosition
           */

        }, {
          key: "calculatePosition",
          value: function calculatePosition() {
            return this.tagInput.inputForm.getElementPosition();
          }
          /**
           * @name createTagModel
           * @param item
           */

        }, {
          key: "createTagModel",
          value: function createTagModel(item) {
            var _Object$assign2;

            var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
            var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
            return Object.assign({}, item.value, (_Object$assign2 = {}, _defineProperty(_Object$assign2, this.tagInput.displayBy, display), _defineProperty(_Object$assign2, this.tagInput.identifyBy, value), _Object$assign2));
          }
          /**
           *
           * @param value {string}
           */

        }, {
          key: "getMatchingItems",
          value: function getMatchingItems(value) {
            var _this6 = this;

            if (!value && !this.showDropdownIfEmpty) {
              return [];
            }

            var dupesAllowed = this.tagInput.allowDupes;
            return this.autocompleteItems.filter(function (item) {
              var hasValue = dupesAllowed ? false : _this6.tagInput.tags.some(function (tag) {
                var identifyBy = _this6.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this6.identifyBy];
              });
              return _this6.matchingFn(value, item) && hasValue === false;
            });
          }
          /**
           * @name setItems
           */

        }, {
          key: "setItems",
          value: function setItems(items) {
            this.items = items.slice(0, this.limitItemsTo || items.length);
          }
          /**
           * @name populateItems
           * @param data
           */

        }, {
          key: "populateItems",
          value: function populateItems(data) {
            var _this7 = this;

            this.autocompleteItems = data.map(function (item) {
              var _ref2;

              return typeof item === 'string' ? (_ref2 = {}, _defineProperty(_ref2, _this7.displayBy, item), _defineProperty(_ref2, _this7.identifyBy, item), _ref2) : item;
            });
            return this;
          }
          /**
           * @name setLoadingState
           * @param state
           */

        }, {
          key: "setLoadingState",
          value: function setLoadingState(state) {
            this.tagInput.isLoading = state;
            return this;
          }
        }, {
          key: "autocompleteItems",
          set: function set(items) {
            this._autocompleteItems = items;
          }
          /**
           * @name autocompleteItems
           * @desc array of items that will populate the autocomplete
           */
          ,
          get: function get() {
            var _this8 = this;

            var items = this._autocompleteItems;

            if (!items) {
              return [];
            }

            return items.map(function (item) {
              var _ref3;

              return typeof item === 'string' ? (_ref3 = {}, _defineProperty(_ref3, _this8.displayBy, item), _defineProperty(_ref3, _this8.identifyBy, item), _ref3) : item;
            });
          }
        }, {
          key: "isVisible",
          get: function get() {
            return this.dropdown.menu.dropdownState.menuState.isVisible;
          }
        }, {
          key: "selectedItem",
          get: function get() {
            return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
          }
          /**
           * @name state
           */

        }, {
          key: "state",
          get: function get() {
            return this.dropdown.menu.dropdownState;
          }
        }]);

        return TagInputDropdown;
      }();

      TagInputDropdown.ɵfac = function TagInputDropdown_Factory(t) {
        return new (t || TagInputDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
      };

      TagInputDropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagInputDropdown,
        selectors: [["tag-input-dropdown"]],
        contentQueries: function TagInputDropdown_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
          }
        },
        viewQuery: function TagInputDropdown_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
          }
        },
        hostBindings: function TagInputDropdown_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TagInputDropdown_scroll_HostBindingHandler() {
              return ctx.scrollListener();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("blur", function TagInputDropdown_blur_HostBindingHandler() {
              return ctx.onWindowBlur();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          offset: "offset",
          focusFirstElement: "focusFirstElement",
          showDropdownIfEmpty: "showDropdownIfEmpty",
          minimumTextLength: "minimumTextLength",
          limitItemsTo: "limitItemsTo",
          displayBy: "displayBy",
          identifyBy: "identifyBy",
          matchingFn: "matchingFn",
          appendToBody: "appendToBody",
          keepOpen: "keepOpen",
          dynamicUpdate: "dynamicUpdate",
          zIndex: "zIndex",
          autocompleteItems: "autocompleteItems",
          autocompleteObservable: "autocompleteObservable"
        },
        decls: 3,
        vars: 6,
        consts: [[3, "dynamicUpdate"], [3, "focusFirstElement", "zIndex", "appendToBody", "offset"], [3, "value", "ngSwitch", 4, "ngFor", "ngForOf"], [3, "value", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function TagInputDropdown_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-dropdown", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-dropdown-menu", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_Template, 3, 3, "ng2-menu-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dynamicUpdate", ctx.dynamicUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("focusFirstElement", ctx.focusFirstElement)("zIndex", ctx.zIndex)("appendToBody", ctx.appendToBody)("offset", ctx.offset);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2MenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        pipes: [HighlightPipe],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"])], TagInputDropdown.prototype, "dropdown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputDropdown.prototype, "templates", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputDropdown.prototype, "offset", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "focusFirstElement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagInputDropdown.prototype, "autocompleteObservable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "minimumTextLength", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagInputDropdown.prototype, "limitItemsTo", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "displayBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "identifyBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagInputDropdown.prototype, "matchingFn", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "appendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "keepOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "dynamicUpdate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TagInputDropdown.prototype, "autocompleteItems", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagInputDropdown.prototype, "scrollListener", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:blur'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagInputDropdown.prototype, "onWindowBlur", null);
      TagInputDropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], TagInputDropdown); // angular universal hacks

      /* tslint:disable-next-line */

      var DragEvent = window.DragEvent;
      var CUSTOM_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return TagInputComponent;
        }),
        multi: true
      };

      var TagInputComponent = /*#__PURE__*/function (_TagInputAccessor) {
        _inherits(TagInputComponent, _TagInputAccessor);

        var _super = _createSuper(TagInputComponent);

        function TagInputComponent(renderer, dragProvider) {
          var _this9$listeners;

          var _this9;

          _classCallCheck(this, TagInputComponent);

          _this9 = _super.call(this);
          _this9.renderer = renderer;
          _this9.dragProvider = dragProvider;
          /**
           * @name separatorKeys
           * @desc keyboard keys with which a user can separate items
           */

          _this9.separatorKeys = defaults.tagInput.separatorKeys;
          /**
           * @name separatorKeyCodes
           * @desc keyboard key codes with which a user can separate items
           */

          _this9.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
          /**
           * @name placeholder
           * @desc the placeholder of the input text
           */

          _this9.placeholder = defaults.tagInput.placeholder;
          /**
           * @name secondaryPlaceholder
           * @desc placeholder to appear when the input is empty
           */

          _this9.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
          /**
           * @name maxItems
           * @desc maximum number of items that can be added
           */

          _this9.maxItems = defaults.tagInput.maxItems;
          /**
           * @name validators
           * @desc array of Validators that are used to validate the tag before it gets appended to the list
           */

          _this9.validators = defaults.tagInput.validators;
          /**
           * @name asyncValidators
           * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
           */

          _this9.asyncValidators = defaults.tagInput.asyncValidators;
          /**
          * - if set to true, it will only possible to add items from the autocomplete
          * @name onlyFromAutocomplete
          */

          _this9.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
          /**
           * @name errorMessages
           */

          _this9.errorMessages = defaults.tagInput.errorMessages;
          /**
           * @name theme
           */

          _this9.theme = defaults.tagInput.theme;
          /**
           * @name onTextChangeDebounce
           */

          _this9.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
          /**
           * - custom id assigned to the input
           * @name id
           */

          _this9.inputId = defaults.tagInput.inputId;
          /**
           * - custom class assigned to the input
           */

          _this9.inputClass = defaults.tagInput.inputClass;
          /**
           * - option to clear text input when the form is blurred
           * @name clearOnBlur
           */

          _this9.clearOnBlur = defaults.tagInput.clearOnBlur;
          /**
           * - hideForm
           * @name clearOnBlur
           */

          _this9.hideForm = defaults.tagInput.hideForm;
          /**
           * @name addOnBlur
           */

          _this9.addOnBlur = defaults.tagInput.addOnBlur;
          /**
           * @name addOnPaste
           */

          _this9.addOnPaste = defaults.tagInput.addOnPaste;
          /**
           * - pattern used with the native method split() to separate patterns in the string pasted
           * @name pasteSplitPattern
           */

          _this9.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
          /**
           * @name blinkIfDupe
           */

          _this9.blinkIfDupe = defaults.tagInput.blinkIfDupe;
          /**
           * @name removable
           */

          _this9.removable = defaults.tagInput.removable;
          /**
           * @name editable
           */

          _this9.editable = defaults.tagInput.editable;
          /**
           * @name allowDupes
           */

          _this9.allowDupes = defaults.tagInput.allowDupes;
          /**
           * @description if set to true, the newly added tags will be added as strings, and not objects
           * @name modelAsStrings
           */

          _this9.modelAsStrings = defaults.tagInput.modelAsStrings;
          /**
           * @name trimTags
           */

          _this9.trimTags = defaults.tagInput.trimTags;
          /**
           * @name ripple
           */

          _this9.ripple = defaults.tagInput.ripple;
          /**
           * @name tabindex
           * @desc pass through the specified tabindex to the input
           */

          _this9.tabindex = defaults.tagInput.tabIndex;
          /**
           * @name disable
           */

          _this9.disable = defaults.tagInput.disable;
          /**
           * @name dragZone
           */

          _this9.dragZone = defaults.tagInput.dragZone;
          /**
           * @name onRemoving
           */

          _this9.onRemoving = defaults.tagInput.onRemoving;
          /**
           * @name onAdding
           */

          _this9.onAdding = defaults.tagInput.onAdding;
          /**
           * @name animationDuration
           */

          _this9.animationDuration = defaults.tagInput.animationDuration;
          /**
           * @name onAdd
           * @desc event emitted when adding a new item
           */

          _this9.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onRemove
           * @desc event emitted when removing an existing item
           */

          _this9.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onSelect
           * @desc event emitted when selecting an item
           */

          _this9.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onFocus
           * @desc event emitted when the input is focused
           */

          _this9.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onFocus
           * @desc event emitted when the input is blurred
           */

          _this9.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name onTextChange
           * @desc event emitted when the input value changes
           */

          _this9.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * - output triggered when text is pasted in the form
           * @name onPaste
           */

          _this9.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * - output triggered when tag entered is not valid
           * @name onValidationError
           */

          _this9.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * - output triggered when tag is edited
           * @name onTagEdited
           */

          _this9.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @name isLoading
           */

          _this9.isLoading = false;
          /**
           * @name listeners
           * @desc array of events that get fired using @fireEvents
           */

          _this9.listeners = (_this9$listeners = {}, _defineProperty(_this9$listeners, KEYDOWN, []), _defineProperty(_this9$listeners, KEYUP, []), _this9$listeners);
          /**
           * @description emitter for the 2-way data binding inputText value
           * @name inputTextChange
           */

          _this9.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @description private variable to bind get/set
           * @name inputTextValue
           */

          _this9.inputTextValue = '';
          _this9.errors = [];
          /**
           * @name appendTag
           * @param tag {TagModel}
           */

          _this9.appendTag = function (tag) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this9.items.length;
            var items = _this9.items;
            var model = _this9.modelAsStrings ? tag[_this9.identifyBy] : tag;
            _this9.items = [].concat(_toConsumableArray(items.slice(0, index)), [model], _toConsumableArray(items.slice(index, items.length)));
          };
          /**
           * @name createTag
           * @param model
           */


          _this9.createTag = function (model) {
            var _Object$assign3;

            var trim = function trim(val, key) {
              return typeof val === 'string' ? val.trim() : val[key];
            };

            return Object.assign({}, typeof model !== 'string' ? model : {}, (_Object$assign3 = {}, _defineProperty(_Object$assign3, _this9.displayBy, _this9.trimTags ? trim(model, _this9.displayBy) : model), _defineProperty(_Object$assign3, _this9.identifyBy, _this9.trimTags ? trim(model, _this9.identifyBy) : model), _Object$assign3));
          };
          /**
           *
           * @param tag
           * @param isFromAutocomplete
           */


          _this9.isTagValid = function (tag) {
            var fromAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var selectedItem = _this9.dropdown ? _this9.dropdown.selectedItem : undefined;

            var value = _this9.getItemDisplay(tag).trim();

            if (selectedItem && !fromAutocomplete || !value) {
              return false;
            }

            var dupe = _this9.findDupe(tag, fromAutocomplete); // if so, give a visual cue and return false


            if (!_this9.allowDupes && dupe && _this9.blinkIfDupe) {
              var model = _this9.tags.find(function (item) {
                return _this9.getItemValue(item.model) === _this9.getItemValue(dupe);
              });

              if (model) {
                model.blink();
              }
            }

            var isFromAutocomplete = fromAutocomplete && _this9.onlyFromAutocomplete;
            var assertions = [// 1. there must be no dupe OR dupes are allowed
            !dupe || _this9.allowDupes, // 2. check max items has not been reached
            !_this9.maxItemsReached, // 3. check item comes from autocomplete or onlyFromAutocomplete is false
            isFromAutocomplete || !_this9.onlyFromAutocomplete];
            return assertions.filter(Boolean).length === assertions.length;
          };
          /**
           * @name onPasteCallback
           * @param data
           */


          _this9.onPasteCallback = function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this9), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var getText, text, requests, resetInput;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      getText = function getText() {
                        var isIE = Boolean(window.clipboardData);
                        var clipboardData = isIE ? window.clipboardData : data.clipboardData;
                        var type = isIE ? 'Text' : 'text/plain';
                        return clipboardData === null ? '' : clipboardData.getData(type) || '';
                      };

                      text = getText();
                      requests = text.split(this.pasteSplitPattern).map(function (item) {
                        var tag = _this10.createTag(item);

                        _this10.setInputValue(tag[_this10.displayBy]);

                        return _this10.onAddingRequested(false, tag);
                      });

                      resetInput = function resetInput() {
                        return setTimeout(function () {
                          return _this10.setInputValue('');
                        }, 50);
                      };

                      Promise.all(requests).then(function () {
                        _this10.onPaste.emit(text);

                        resetInput();
                      })["catch"](resetInput);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          };

          return _this9;
        }
        /**
         * @name inputText
         */


        _createClass(TagInputComponent, [{
          key: "ngAfterViewInit",

          /**
           * @name ngAfterViewInit
           */
          value: function ngAfterViewInit() {
            var _this11 = this;

            // set up listeners
            this.setUpKeypressListeners();
            this.setupSeparatorKeysListener();
            this.setUpInputKeydownListeners();

            if (this.onTextChange.observers.length) {
              this.setUpTextChangeSubscriber();
            } // if clear on blur is set to true, subscribe to the event and clear the text's form


            if (this.clearOnBlur || this.addOnBlur) {
              this.setUpOnBlurSubscriber();
            } // if addOnPaste is set to true, register the handler and add items


            if (this.addOnPaste) {
              this.setUpOnPasteListener();
            }

            var statusChanges$ = this.inputForm.form.statusChanges;
            statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) {
              return status !== 'PENDING';
            })).subscribe(function () {
              _this11.errors = _this11.inputForm.getErrorMessages(_this11.errorMessages);
            });
            this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (status) {
              return status === 'PENDING' || _this11.isLoading;
            })); // if hideForm is set to true, remove the input

            if (this.hideForm) {
              this.inputForm.destroy();
            }
          }
          /**
           * @name ngOnInit
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // if the number of items specified in the model is > of the value of maxItems
            // degrade gracefully and let the max number of items to be the number of items in the model
            // though, warn the user.
            var hasReachedMaxItems = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;

            if (hasReachedMaxItems) {
              this.maxItems = this.items.length;
              console.warn(MAX_ITEMS_WARNING);
            } // Setting editable to false to fix problem with tags in IE still being editable when
            // onlyFromAutocomplete is true


            this.editable = this.onlyFromAutocomplete ? false : this.editable;
            this.setAnimationMetadata();
          }
          /**
           * @name onRemoveRequested
           * @param tag
           * @param index
           */

        }, {
          key: "onRemoveRequested",
          value: function onRemoveRequested(tag, index) {
            var _this12 = this;

            return new Promise(function (resolve) {
              var subscribeFn = function subscribeFn(model) {
                _this12.removeItem(model, index);

                resolve(tag);
              };

              _this12.onRemoving ? _this12.onRemoving(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn) : subscribeFn(tag);
            });
          }
          /**
           * @name onAddingRequested
           * @param fromAutocomplete {boolean}
           * @param tag {TagModel}
           * @param index? {number}
           * @param giveupFocus? {boolean}
           */

        }, {
          key: "onAddingRequested",
          value: function onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              var subscribeFn = function subscribeFn(model) {
                return _this13.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve)["catch"](reject);
              };

              return _this13.onAdding ? _this13.onAdding(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn, reject) : subscribeFn(tag);
            });
          }
          /**
           * @name selectItem
           * @desc selects item passed as parameter as the selected tag
           * @param item
           * @param emit
           */

        }, {
          key: "selectItem",
          value: function selectItem(item) {
            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var isReadonly = item && typeof item !== 'string' && item.readonly;

            if (isReadonly || this.selectedTag === item) {
              return;
            }

            this.selectedTag = item;

            if (emit) {
              this.onSelect.emit(item);
            }
          }
          /**
           * @name fireEvents
           * @desc goes through the list of the events for a given eventName, and fires each of them
           * @param eventName
           * @param $event
           */

        }, {
          key: "fireEvents",
          value: function fireEvents(eventName, $event) {
            var _this14 = this;

            this.listeners[eventName].forEach(function (listener) {
              return listener.call(_this14, $event);
            });
          }
          /**
           * @name handleKeydown
           * @desc handles action when the user hits a keyboard key
           * @param data
           */

        }, {
          key: "handleKeydown",
          value: function handleKeydown(data) {
            var event = data.event;
            var key = event.keyCode || event.which;
            var shiftKey = event.shiftKey || false;

            switch (KEY_PRESS_ACTIONS[key]) {
              case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                  var index = this.items.indexOf(this.selectedTag);
                  this.onRemoveRequested(this.selectedTag, index);
                }

                break;

              case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;

              case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;

              case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                  if (this.isFirstTag(data.model)) {
                    return;
                  }

                  this.moveToTag(data.model, PREV);
                } else {
                  if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                    return;
                  }

                  this.moveToTag(data.model, NEXT);
                }

                break;

              default:
                return;
            } // prevent default behaviour


            event.preventDefault();
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.onAddingRequested(false, this.formValue);

                    case 3:
                      _context3.next = 8;
                      break;

                    case 5:
                      _context3.prev = 5;
                      _context3.t0 = _context3["catch"](0);
                      return _context3.abrupt("return");

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 5]]);
            }));
          }
          /**
           * @name setInputValue
           * @param value
           */

        }, {
          key: "setInputValue",
          value: function setInputValue(value) {
            var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var control = this.getControl(); // update form value with the transformed item

            control.setValue(value, {
              emitEvent: emitEvent
            });
          }
          /**
           * @name getControl
           */

        }, {
          key: "getControl",
          value: function getControl() {
            return this.inputForm.value;
          }
          /**
           * @name focus
           * @param applyFocus
           * @param displayAutocomplete
           */

        }, {
          key: "focus",
          value: function focus() {
            var applyFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var displayAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.dragProvider.getState('dragging')) {
              return;
            }

            this.selectItem(undefined, false);

            if (applyFocus) {
              this.inputForm.focus();
              this.onFocus.emit(this.formValue);
            }
          }
          /**
           * @name blur
           */

        }, {
          key: "blur",
          value: function blur() {
            this.onTouched();
            this.onBlur.emit(this.formValue);
          }
          /**
           * @name hasErrors
           */

        }, {
          key: "hasErrors",
          value: function hasErrors() {
            return !!this.inputForm && this.inputForm.hasErrors();
          }
          /**
           * @name isInputFocused
           */

        }, {
          key: "isInputFocused",
          value: function isInputFocused() {
            return !!this.inputForm && this.inputForm.isInputFocused();
          }
          /**
           * - this is the one way I found to tell if the template has been passed and it is not
           * the template for the menu item
           * @name hasCustomTemplate
           */

        }, {
          key: "hasCustomTemplate",
          value: function hasCustomTemplate() {
            var template = this.templates ? this.templates.first : undefined;
            var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
            return Boolean(template && template !== menuTemplate);
          }
          /**
           * @name maxItemsReached
           */

        }, {
          key: "onDragStarted",

          /**3
           * @name onDragStarted
           * @param event
           * @param index
           */
          value: function onDragStarted(event, tag, index) {
            event.stopPropagation();
            var item = {
              zone: this.dragZone,
              tag: tag,
              index: index
            };
            this.dragProvider.setSender(this);
            this.dragProvider.setDraggedItem(event, item);
            this.dragProvider.setState({
              dragging: true,
              index: index
            });
          }
          /**
           * @name onDragOver
           * @param event
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event, index) {
            this.dragProvider.setState({
              dropping: true
            });
            this.dragProvider.setReceiver(this);
            event.preventDefault();
          }
          /**
           * @name onTagDropped
           * @param event
           * @param index
           */

        }, {
          key: "onTagDropped",
          value: function onTagDropped(event, index) {
            var item = this.dragProvider.getDraggedItem(event);

            if (!item || item.zone !== this.dragZone) {
              return;
            }

            this.dragProvider.onTagDropped(item.tag, item.index, index);
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * @name isDropping
           */

        }, {
          key: "isDropping",
          value: function isDropping() {
            var isReceiver = this.dragProvider.receiver === this;
            var isDropping = this.dragProvider.getState('dropping');
            return Boolean(isReceiver && isDropping);
          }
          /**
           * @name onTagBlurred
           * @param changedElement {TagModel}
           * @param index {number}
           */

        }, {
          key: "onTagBlurred",
          value: function onTagBlurred(changedElement, index) {
            this.items[index] = changedElement;
            this.blur();
          }
          /**
           * @name trackBy
           * @param items
           */

        }, {
          key: "trackBy",
          value: function trackBy(index, item) {
            return item[this.identifyBy];
          }
          /**
           * @name updateEditedTag
           * @param tag
           */

        }, {
          key: "updateEditedTag",
          value: function updateEditedTag(_ref4) {
            var tag = _ref4.tag,
                index = _ref4.index;
            this.onTagEdited.emit(tag);
          }
          /**
           * @name moveToTag
           * @param item
           * @param direction
           */

        }, {
          key: "moveToTag",
          value: function moveToTag(item, direction) {
            var isLast = this.isLastTag(item);
            var isFirst = this.isFirstTag(item);
            var stopSwitch = direction === NEXT && isLast || direction === PREV && isFirst;

            if (stopSwitch) {
              this.focus(true);
              return;
            }

            var offset = direction === NEXT ? 1 : -1;
            var index = this.getTagIndex(item) + offset;
            var tag = this.getTagAtIndex(index);
            return tag.select.call(tag);
          }
          /**
           * @name isFirstTag
           * @param item {TagModel}
           */

        }, {
          key: "isFirstTag",
          value: function isFirstTag(item) {
            return this.tags.first.model === item;
          }
          /**
           * @name isLastTag
           * @param item {TagModel}
           */

        }, {
          key: "isLastTag",
          value: function isLastTag(item) {
            return this.tags.last.model === item;
          }
          /**
           * @name getTagIndex
           * @param item
           */

        }, {
          key: "getTagIndex",
          value: function getTagIndex(item) {
            var tags = this.tags.toArray();
            return tags.findIndex(function (tag) {
              return tag.model === item;
            });
          }
          /**
           * @name getTagAtIndex
           * @param index
           */

        }, {
          key: "getTagAtIndex",
          value: function getTagAtIndex(index) {
            var tags = this.tags.toArray();
            return tags[index];
          }
          /**
           * @name removeItem
           * @desc removes an item from the array of the model
           * @param tag {TagModel}
           * @param index {number}
           */

        }, {
          key: "removeItem",
          value: function removeItem(tag, index) {
            this.items = this.getItemsWithout(index); // if the removed tag was selected, set it as undefined

            if (this.selectedTag === tag) {
              this.selectItem(undefined, false);
            } // focus input


            this.focus(true, false); // emit remove event

            this.onRemove.emit(tag);
          }
          /**
           * @name addItem
           * @desc adds the current text model to the items array
           * @param fromAutocomplete {boolean}
           * @param item {TagModel}
           * @param index? {number}
           * @param giveupFocus? {boolean}
           */

        }, {
          key: "addItem",
          value: function addItem() {
            var _this15 = this;

            var fromAutocomplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var item = arguments.length > 1 ? arguments[1] : undefined;
            var index = arguments.length > 2 ? arguments[2] : undefined;
            var giveupFocus = arguments.length > 3 ? arguments[3] : undefined;
            var display = this.getItemDisplay(item);
            var tag = this.createTag(item);

            if (fromAutocomplete) {
              this.setInputValue(this.getItemValue(item, true));
            }

            return new Promise(function (resolve, reject) {
              /**
               * @name reset
               */
              var reset = function reset() {
                // reset control and focus input
                _this15.setInputValue('');

                if (giveupFocus) {
                  _this15.focus(false, false);
                } else {
                  // focus input
                  _this15.focus(true, false);
                }

                resolve(display);
              };

              var appendItem = function appendItem() {
                _this15.appendTag(tag, index); // emit event


                _this15.onAdd.emit(tag);

                if (!_this15.dropdown) {
                  return;
                }

                _this15.dropdown.hide();

                if (_this15.dropdown.showDropdownIfEmpty) {
                  _this15.dropdown.show();
                }
              };

              var status = _this15.inputForm.form.status;

              var isTagValid = _this15.isTagValid(tag, fromAutocomplete);

              var onValidationError = function onValidationError() {
                _this15.onValidationError.emit(tag);

                return reject();
              };

              if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
              }

              if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
              }

              if (status === 'PENDING') {
                var statusUpdate$ = _this15.inputForm.form.statusChanges;
                return statusUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (statusUpdate) {
                  return statusUpdate !== 'PENDING';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (statusUpdate) {
                  if (statusUpdate === 'VALID' && isTagValid) {
                    appendItem();
                    return reset();
                  } else {
                    reset();
                    return onValidationError();
                  }
                });
              }
            });
          }
          /**
           * @name setupSeparatorKeysListener
           */

        }, {
          key: "setupSeparatorKeysListener",
          value: function setupSeparatorKeysListener() {
            var _this16 = this;

            var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;

            var listener = function listener($event) {
              var hasKeyCode = _this16.separatorKeyCodes.indexOf($event.keyCode) >= 0;
              var hasKey = _this16.separatorKeys.indexOf($event.key) >= 0; // the keyCode of keydown event is 229 when IME is processing the key event.

              var isIMEProcessing = $event.keyCode === 229;

              if (hasKeyCode || hasKey && !isIMEProcessing) {
                $event.preventDefault();

                _this16.onAddingRequested(false, _this16.formValue)["catch"](function () {});
              }
            };

            listen.call(this, KEYDOWN, listener, useSeparatorKeys);
          }
          /**
           * @name setUpKeypressListeners
           */

        }, {
          key: "setUpKeypressListeners",
          value: function setUpKeypressListeners() {
            var _this17 = this;

            var listener = function listener($event) {
              var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;

              if (isCorrectKey && !_this17.formValue && _this17.items.length) {
                _this17.tags.last.select.call(_this17.tags.last);
              }
            }; // setting up the keypress listeners


            listen.call(this, KEYDOWN, listener);
          }
          /**
           * @name setUpKeydownListeners
           */

        }, {
          key: "setUpInputKeydownListeners",
          value: function setUpInputKeydownListeners() {
            var _this18 = this;

            this.inputForm.onKeydown.subscribe(function (event) {
              if (event.key === 'Backspace' && _this18.formValue.trim() === '') {
                event.preventDefault();
              }
            });
          }
          /**
           * @name setUpOnPasteListener
           */

        }, {
          key: "setUpOnPasteListener",
          value: function setUpOnPasteListener() {
            var _this19 = this;

            var input = this.inputForm.input.nativeElement; // attach listener to input

            this.renderer.listen(input, 'paste', function (event) {
              _this19.onPasteCallback(event);

              event.preventDefault();
              return true;
            });
          }
          /**
           * @name setUpTextChangeSubscriber
           */

        }, {
          key: "setUpTextChangeSubscriber",
          value: function setUpTextChangeSubscriber() {
            var _this20 = this;

            this.inputForm.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.onTextChangeDebounce)).subscribe(function (value) {
              _this20.onTextChange.emit(value.item);
            });
          }
          /**
           * @name setUpOnBlurSubscriber
           */

        }, {
          key: "setUpOnBlurSubscriber",
          value: function setUpOnBlurSubscriber() {
            var _this21 = this;

            var filterFn = function filterFn() {
              var isVisible = _this21.dropdown && _this21.dropdown.isVisible;
              return !isVisible && !!_this21.formValue;
            };

            this.inputForm.onBlur.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFn)).subscribe(function () {
              var reset = function reset() {
                return _this21.setInputValue('');
              };

              if (_this21.addOnBlur) {
                return _this21.onAddingRequested(false, _this21.formValue, undefined, true).then(reset)["catch"](reset);
              }

              reset();
            });
          }
          /**
           * @name findDupe
           * @param tag
           * @param isFromAutocomplete
           */

        }, {
          key: "findDupe",
          value: function findDupe(tag, isFromAutocomplete) {
            var _this22 = this;

            var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
            var id = tag[identifyBy];
            return this.items.find(function (item) {
              return _this22.getItemValue(item) === id;
            });
          }
          /**
           * @name setAnimationMetadata
           */

        }, {
          key: "setAnimationMetadata",
          value: function setAnimationMetadata() {
            this.animationMetadata = {
              value: 'in',
              params: Object.assign({}, this.animationDuration)
            };
          }
        }, {
          key: "inputText",
          get: function get() {
            return this.inputTextValue;
          }
          /**
           * @name inputText
           * @param text
           */
          ,
          set: function set(text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
          }
          /**
           * @desc removes the tab index if it is set - it will be passed through to the input
           * @name tabindexAttr
           */

        }, {
          key: "tabindexAttr",
          get: function get() {
            return this.tabindex !== '' ? '-1' : '';
          }
        }, {
          key: "maxItemsReached",
          get: function get() {
            return this.maxItems !== undefined && this.items.length >= this.maxItems;
          }
          /**
           * @name formValue
           */

        }, {
          key: "formValue",
          get: function get() {
            var form = this.inputForm.value;
            return form ? form.value : '';
          }
        }]);

        return TagInputComponent;
      }(TagInputAccessor);

      TagInputComponent.ɵfac = function TagInputComponent_Factory(t) {
        return new (t || TagInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragProvider));
      };

      TagInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagInputComponent,
        selectors: [["tag-input"]],
        contentQueries: function TagInputComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TagInputDropdown, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
          }
        },
        viewQuery: function TagInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagInputForm, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputForm = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tags = _t);
          }
        },
        hostVars: 1,
        hostBindings: function TagInputComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.tabindexAttr);
          }
        },
        inputs: {
          separatorKeys: "separatorKeys",
          separatorKeyCodes: "separatorKeyCodes",
          placeholder: "placeholder",
          secondaryPlaceholder: "secondaryPlaceholder",
          maxItems: "maxItems",
          validators: "validators",
          asyncValidators: "asyncValidators",
          onlyFromAutocomplete: "onlyFromAutocomplete",
          errorMessages: "errorMessages",
          theme: "theme",
          onTextChangeDebounce: "onTextChangeDebounce",
          inputId: "inputId",
          inputClass: "inputClass",
          clearOnBlur: "clearOnBlur",
          hideForm: "hideForm",
          addOnBlur: "addOnBlur",
          addOnPaste: "addOnPaste",
          pasteSplitPattern: "pasteSplitPattern",
          blinkIfDupe: "blinkIfDupe",
          removable: "removable",
          editable: "editable",
          allowDupes: "allowDupes",
          modelAsStrings: "modelAsStrings",
          trimTags: "trimTags",
          ripple: "ripple",
          tabindex: "tabindex",
          disable: "disable",
          dragZone: "dragZone",
          onRemoving: "onRemoving",
          onAdding: "onAdding",
          animationDuration: "animationDuration",
          inputText: "inputText"
        },
        outputs: {
          onAdd: "onAdd",
          onRemove: "onRemove",
          onSelect: "onSelect",
          onFocus: "onFocus",
          onBlur: "onBlur",
          onTextChange: "onTextChange",
          onPaste: "onPaste",
          onValidationError: "onValidationError",
          onTagEdited: "onTagEdited",
          inputTextChange: "inputTextChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CUSTOM_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c3,
        decls: 8,
        vars: 27,
        consts: [[1, "ng2-tag-input", 3, "ngClass", "click", "drop", "dragenter", "dragover", "dragend"], [1, "ng2-tags-container"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inputText", "disabled", "validators", "asyncValidators", "hidden", "placeholder", "inputClass", "inputId", "tabindex", "onSubmit", "onBlur", "click", "onKeydown", "onKeyup", "inputTextChange"], ["class", "progress-bar", 4, "ngIf"], ["class", "error-messages", 3, "ngClass", 4, "ngIf"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave"], [1, "progress-bar"], [1, "error-messages", 3, "ngClass"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"]],
        template: function TagInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagInputComponent_Template_div_click_0_listener() {
              return ctx.focus(true, false);
            })("drop", function TagInputComponent_Template_div_drop_0_listener($event) {
              return ctx.dragZone ? ctx.onTagDropped($event, undefined) : undefined;
            })("dragenter", function TagInputComponent_Template_div_dragenter_0_listener($event) {
              return ctx.dragZone ? ctx.onDragOver($event) : undefined;
            })("dragover", function TagInputComponent_Template_div_dragover_0_listener($event) {
              return ctx.dragZone ? ctx.onDragOver($event) : undefined;
            })("dragend", function TagInputComponent_Template_div_dragend_0_listener() {
              return ctx.dragZone ? ctx.dragProvider.onDragEnd() : undefined;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputComponent_tag_2_Template, 1, 14, "tag", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tag-input-form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSubmit", function TagInputComponent_Template_tag_input_form_onSubmit_3_listener() {
              return ctx.onFormSubmit();
            })("onBlur", function TagInputComponent_Template_tag_input_form_onBlur_3_listener() {
              return ctx.blur();
            })("click", function TagInputComponent_Template_tag_input_form_click_3_listener() {
              return ctx.dropdown ? ctx.dropdown.show() : undefined;
            })("onKeydown", function TagInputComponent_Template_tag_input_form_onKeydown_3_listener($event) {
              return ctx.fireEvents("keydown", $event);
            })("onKeyup", function TagInputComponent_Template_tag_input_form_onKeyup_3_listener($event) {
              return ctx.fireEvents("keyup", $event);
            })("inputTextChange", function TagInputComponent_Template_tag_input_form_inputTextChange_3_listener($event) {
              return ctx.inputText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TagInputComponent_div_4_Template, 1, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TagInputComponent_div_6_Template, 2, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-tag-input--dropping", ctx.isDropping())("ng2-tag-input--disabled", ctx.disable)("ng2-tag-input--loading", ctx.isLoading)("ng2-tag-input--invalid", ctx.hasErrors())("ng2-tag-input--focused", ctx.isInputFocused());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.theme);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputText", ctx.inputText)("disabled", ctx.disable)("validators", ctx.validators)("asyncValidators", ctx.asyncValidators)("hidden", ctx.maxItemsReached)("placeholder", ctx.items.length ? ctx.placeholder : ctx.secondaryPlaceholder)("inputClass", ctx.inputClass)("inputId", ctx.inputId)("tabindex", ctx.tabindex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 25, ctx.isProgressBarVisible$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasErrors());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], TagInputForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], TagComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.progress-bar[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]:before{height:2px;width:100%;margin:0}.progress-bar[_ngcontent-%COMP%]{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar[_ngcontent-%COMP%]:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly[_ngcontent-%COMP%]{cursor:default}tag.readonly[_ngcontent-%COMP%]:focus, tag[_ngcontent-%COMP%]:focus{outline:0}tag.tag--editing[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.minimal[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.dark[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}[_nghost-%COMP%]{display:block}"],
        data: {
          animation: animations
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "separatorKeys", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "separatorKeyCodes", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "placeholder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagInputComponent.prototype, "maxItems", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "validators", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "asyncValidators", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "errorMessages", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "theme", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "inputId", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "clearOnBlur", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "hideForm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "addOnBlur", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "addOnPaste", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "pasteSplitPattern", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "blinkIfDupe", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "removable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "allowDupes", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "modelAsStrings", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "trimTags", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TagInputComponent.prototype, "inputText", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "ripple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "tabindex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "disable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "dragZone", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onRemoving", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onAdding", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "animationDuration", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onAdd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onRemove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onBlur", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTextChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onPaste", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onValidationError", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTagEdited", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TagInputDropdown, {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputDropdown)], TagInputComponent.prototype, "dropdown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
        descendants: false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputComponent.prototype, "templates", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagInputForm, {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputForm)], TagInputComponent.prototype, "inputForm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(TagComponent), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputComponent.prototype, "tags", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputComponent.prototype, "inputTextChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TagInputComponent.prototype, "tabindexAttr", null);
      TagInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DragProvider])], TagInputComponent);

      var DeleteIconComponent = function DeleteIconComponent() {
        _classCallCheck(this, DeleteIconComponent);
      };

      DeleteIconComponent.ɵfac = function DeleteIconComponent_Factory(t) {
        return new (t || DeleteIconComponent)();
      };

      DeleteIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteIconComponent,
        selectors: [["delete-icon"]],
        decls: 3,
        vars: 0,
        consts: [["height", "16px", "viewBox", "0 0 32 32", "width", "16px"], ["d", "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z", "fill", "#121313"]],
        template: function DeleteIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}delete-icon[_nghost-%COMP%]{width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}delete-icon[_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}delete-icon[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}delete-icon[_nghost-%COMP%]:hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%]{text-align:right}.dark[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.dark[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.minimal[_nghost-%COMP%], .minimal   [_nghost-%COMP%]{text-align:right}.minimal[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}.minimal[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.bootstrap[_nghost-%COMP%], .bootstrap   [_nghost-%COMP%]{text-align:right}.bootstrap[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}tag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], tag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.darktag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .darktag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .darktag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .darktag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.minimaltag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .minimaltag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimaltag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .minimaltag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.bootstraptag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .bootstraptag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstraptag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .bootstraptag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap3-info[_nghost-%COMP%], .bootstrap3-info   [_nghost-%COMP%]{height:inherit}.bootstrap3-info[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap3-info   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}"]
      });
      var optionsProvider = new OptionsProvider();

      var TagInputModule = /*#__PURE__*/function () {
        function TagInputModule() {
          _classCallCheck(this, TagInputModule);
        }

        _createClass(TagInputModule, null, [{
          key: "withDefaults",

          /**
           * @name withDefaults
           * @param options {Options}
           */
          value: function withDefaults(options) {
            optionsProvider.setOptions(options);
          }
        }]);

        return TagInputModule;
      }();

      TagInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TagInputModule
      });
      TagInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TagInputModule_Factory(t) {
          return new (t || TagInputModule)();
        },
        providers: [DragProvider, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"],
          useValue: false
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighlightPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
          args: [{
            name: 'highlight'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragProvider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tag-input-form',
            template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
          }]
        }], function () {
          return [];
        }, {
          onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          inputTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          validators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          asyncValidators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input', {
              "static": false
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tag-ripple',
            template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              width: 0,
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              opacity: 1,
              offset: 0,
              width: '30%',
              borderRadius: '100%'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              opacity: 1,
              offset: 0.5,
              width: '50%'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              opacity: 0.5,
              offset: 1,
              width: '100%',
              borderRadius: '16px'
            })]))])])],
            styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
          }]
        }], function () {
          return [];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tag',
            template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
            styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onTagEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          moving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.moving']
          }],
          keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          identifyBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hasRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          canAddTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [TagRipple, {
              "static": false
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputDropdown, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tag-input-dropdown',
            template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }];
        }, {
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          focusFirstElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showDropdownIfEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minimumTextLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          limitItemsTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          identifyBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matchingFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          keepOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dynamicUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          autocompleteItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
          }],
          onWindowBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:blur']
          }],
          dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], {
              "static": false
            }]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
          }],
          autocompleteObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tag-input',
            providers: [CUSTOM_ACCESSOR],
            template: "<div\n    [ngClass]=\"theme\"\n    class=\"ng2-tag-input\"\n    (click)=\"focus(true, false)\"\n    [attr.tabindex]=\"-1\"\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\n    [class.ng2-tag-input--disabled]=\"disable\"\n    [class.ng2-tag-input--loading]=\"isLoading\"\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\n>\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n            (onSelect)=\"selectItem(item)\"\n            (onRemove)=\"onRemoveRequested(item, i)\"\n            (onKeyDown)=\"handleKeydown($event)\"\n            (onTagEdited)=\"updateEditedTag($event)\"\n            (onBlur)=\"onTagBlurred($event, i)\"\n            draggable=\"{{ editable }}\"\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n            [canAddTag]=\"isTagValid\"\n            [attr.tabindex]=\"0\"\n            [disabled]=\"disable\"\n            [@animation]=\"animationMetadata\"\n            [hasRipple]=\"ripple\"\n            [index]=\"i\"\n            [removable]=\"removable\"\n            [editable]=\"editable\"\n            [displayBy]=\"displayBy\"\n            [identifyBy]=\"identifyBy\"\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n            [draggable]=\"dragZone\"\n            [model]=\"item\"\n        >\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\"\n        >\n        </tag-input-form>\n    </div>\n\n    <div\n        class=\"progress-bar\"\n        *ngIf=\"isProgressBarVisible$ | async\"\n    ></div>\n</div>\n\n<!-- ERRORS -->\n<div\n    *ngIf=\"hasErrors()\"\n    [ngClass]=\"theme\"\n    class=\"error-messages\"\n>\n    <p\n        *ngFor=\"let error of errors\"\n        class=\"error-message\"\n    >\n        <span>{{ error }}</span>\n    </p>\n</div>\n<ng-content></ng-content>",
            animations: animations,
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: DragProvider
          }];
        }, {
          separatorKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          secondaryPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          validators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          asyncValidators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onlyFromAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onTextChangeDebounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          clearOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hideForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          addOnPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pasteSplitPattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          blinkIfDupe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          allowDupes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          modelAsStrings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trimTags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onRemoving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onAdding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onValidationError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onTagEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          inputTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          inputText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabindexAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.tabindex']
          }],
          dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [TagInputDropdown, {
              "static": false
            }]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
              descendants: false
            }]
          }],
          inputForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [TagInputForm, {
              "static": false
            }]
          }],
          tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [TagComponent]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteIconComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'delete-icon',
            template: "<span>\n    <svg\n        height=\"16px\"\n        viewBox=\"0 0 32 32\"\n        width=\"16px\"\n    >\n        <path\n            d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n            fill=\"#121313\"\n        />\n    </svg>\n</span>",
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TagInputModule, {
          declarations: function declarations() {
            return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]];
          },
          exports: function exports() {
            return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]],
            declarations: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
            exports: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
            providers: [DragProvider, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"],
              useValue: false
            }]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-chips.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~components-components-module~ui-elements-ui-elements-module-es5.js.map