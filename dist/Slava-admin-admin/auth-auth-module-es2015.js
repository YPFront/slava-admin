(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signin1_signin1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin1/signin1.component */ "./src/app/auth/signin1/signin1.component.ts");
/* harmony import */ var _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup1/signup1.component */ "./src/app/auth/signup1/signup1.component.ts");
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin2/signin2.component */ "./src/app/auth/signin2/signin2.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/auth/signup2/signup2.component.ts");
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ "./src/app/auth/lock-screen/lock-screen.component.ts");
/* harmony import */ var _reset_password1_reset_password1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password1/reset-password1.component */ "./src/app/auth/reset-password1/reset-password1.component.ts");
/* harmony import */ var _reset_password2_reset_password2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password2/reset-password2.component */ "./src/app/auth/reset-password2/reset-password2.component.ts");











const routes = [
    {
        path: '',
        children: [
            {
                path: 'signin1',
                component: _signin1_signin1_component__WEBPACK_IMPORTED_MODULE_2__["Signin1Component"],
                data: {
                    title: 'SignIn 1'
                }
            },
            {
                path: 'signup1',
                component: _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_3__["Signup1Component"],
                data: {
                    title: 'SignUp 1'
                }
            },
            {
                path: 'signin2',
                component: _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_4__["Signin2Component"],
                data: {
                    title: 'SignIn 2'
                }
            },
            {
                path: 'signup2',
                component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__["Signup2Component"],
                data: {
                    title: 'SignUp 2'
                }
            },
            {
                path: 'lock-screen',
                component: _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_6__["LockScreenComponent"],
                data: {
                    title: 'Lock Screen'
                }
            },
            {
                path: 'reset-password1',
                component: _reset_password1_reset_password1_component__WEBPACK_IMPORTED_MODULE_7__["ResetPassword1Component"],
                data: {
                    title: 'Reset Password 1'
                }
            },
            {
                path: 'reset-password2',
                component: _reset_password2_reset_password2_component__WEBPACK_IMPORTED_MODULE_8__["ResetPassword2Component"],
                data: {
                    title: 'Reset Password 2'
                }
            },
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _signin1_signin1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin1/signin1.component */ "./src/app/auth/signin1/signin1.component.ts");
/* harmony import */ var _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup1/signup1.component */ "./src/app/auth/signup1/signup1.component.ts");
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin2/signin2.component */ "./src/app/auth/signin2/signin2.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/auth/signup2/signup2.component.ts");
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ "./src/app/auth/lock-screen/lock-screen.component.ts");
/* harmony import */ var _reset_password1_reset_password1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password1/reset-password1.component */ "./src/app/auth/reset-password1/reset-password1.component.ts");
/* harmony import */ var _reset_password2_reset_password2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password2/reset-password2.component */ "./src/app/auth/reset-password2/reset-password2.component.ts");












class AuthModule {
}
AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuthModule });
AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, { declarations: [_signin1_signin1_component__WEBPACK_IMPORTED_MODULE_4__["Signin1Component"],
        _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_5__["Signup1Component"],
        _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_6__["Signin2Component"],
        _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_7__["Signup2Component"],
        _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_8__["LockScreenComponent"],
        _reset_password1_reset_password1_component__WEBPACK_IMPORTED_MODULE_9__["ResetPassword1Component"],
        _reset_password2_reset_password2_component__WEBPACK_IMPORTED_MODULE_10__["ResetPassword2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _signin1_signin1_component__WEBPACK_IMPORTED_MODULE_4__["Signin1Component"],
                    _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_5__["Signup1Component"],
                    _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_6__["Signin2Component"],
                    _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_7__["Signup2Component"],
                    _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_8__["LockScreenComponent"],
                    _reset_password1_reset_password1_component__WEBPACK_IMPORTED_MODULE_9__["ResetPassword1Component"],
                    _reset_password2_reset_password2_component__WEBPACK_IMPORTED_MODULE_10__["ResetPassword2Component"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/lock-screen/lock-screen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.ts ***!
  \***********************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



const _c0 = ["f"];
class LockScreenComponent {
    constructor() { }
    onSubmit() {
        this.lockScreenForm.reset();
    }
    ngOnInit() {
    }
}
LockScreenComponent.??fac = function LockScreenComponent_Factory(t) { return new (t || LockScreenComponent)(); };
LockScreenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LockScreenComponent, selectors: [["app-lock-screen"]], viewQuery: function LockScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.lockScreenForm = _t.first);
    } }, decls: 18, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-authentication1", "mx-auto", "my-5", "animated", "bounceInDown"], [1, "user-lock", "rounded-top", "bg-dark-light"], [1, "user-lock-img"], ["src", "assets/images/avatars/avatar-18.png", "alt", "user avatar"], [1, "card-body"], [1, "text-center", "mt-5", "py-2"], ["novalidate", "", 1, "mt-3", "mb-1", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "exampleInputpassword", 1, "sr-only"], ["type", "password", "id", "exampleInputpassword", "placeholder", "Enter your password", "ngModel", "", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-light", "btn-block", "waves-effect", "waves-light", "mt-2"], [1, "icon-lock-open"]], template: function LockScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Mark Jhonsan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LockScreenComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9jay1zY3JlZW4vbG9jay1zY3JlZW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LockScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lock-screen',
                templateUrl: './lock-screen.component.html',
                styleUrls: ['./lock-screen.component.scss']
            }]
    }], function () { return []; }, { lockScreenForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/reset-password1/reset-password1.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password1/reset-password1.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPassword1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword1Component", function() { return ResetPassword1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class ResetPassword1Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    onSubmit() {
        this.resetpassword1.reset();
    }
    // On Signin1 link click
    onSignin1() {
        this.router.navigate(['signin1'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
ResetPassword1Component.??fac = function ResetPassword1Component_Factory(t) { return new (t || ResetPassword1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ResetPassword1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ResetPassword1Component, selectors: [["app-reset-password1"]], viewQuery: function ResetPassword1Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.resetpassword1 = _t.first);
    } }, decls: 25, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-authentication1", "mx-auto", "my-5"], [1, "card-body"], [1, "card-content", "p-2"], [1, "card-title", "text-uppercase", "pb-2"], [1, "pb-2"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "exampleInputEmailAddress", 1, ""], [1, "position-relative", "has-icon-right"], ["type", "text", "id", "exampleInputEmailAddress", "placeholder", "Email Address", "ngModel", "", 1, "form-control", "input-shadow"], [1, "form-control-position"], [1, "icon-envelope-open"], ["type", "button", 1, "btn", "btn-light", "btn-block", "mt-3"], [1, "card-footer", "text-center", "py-3"], [1, "text-warning", "mb-0"], ["href", "javascript:;", 3, "click"]], template: function ResetPassword1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Please enter your email address. You will receive a link to create a new password via email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ResetPassword1Component_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Return to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetPassword1Component_Template_a_click_23_listener() { return ctx.onSignin1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQxL3Jlc2V0LXBhc3N3b3JkMS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResetPassword1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password1',
                templateUrl: './reset-password1.component.html',
                styleUrls: ['./reset-password1.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { resetpassword1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/reset-password2/reset-password2.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password2/reset-password2.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword2Component", function() { return ResetPassword2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class ResetPassword2Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    onSubmit() {
        this.resetpassword2.reset();
    }
    // On Signin2 link click
    onSignin2() {
        this.router.navigate(['signin2'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
ResetPassword2Component.??fac = function ResetPassword2Component_Factory(t) { return new (t || ResetPassword2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ResetPassword2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ResetPassword2Component, selectors: [["app-reset-password2"]], viewQuery: function ResetPassword2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.resetpassword2 = _t.first);
    } }, decls: 38, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card-authentication2", "mx-auto", "my-5"], [1, "card-group"], [1, "card", "mb-0"], [1, "bg-reset-password2"], [1, "card-img-overlay", "rounded-left", "my-5"], [1, "text-white"], [1, "card-text", "text-white", "pt-3"], [1, "card-body"], [1, "card-content", "p-3"], [1, "card-title", "text-uppercase", "text-center", "pb-3"], [1, "text-center", "pb-2"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], [1, "position-relative", "has-icon-left"], ["for", "exampleInputEmailAddress", 1, "sr-only"], ["type", "text", "id", "exampleInputEmailAddress", "placeholder", "Email Address", 1, "form-control"], [1, "form-control-position"], [1, "icon-envelope-open"], ["type", "button", 1, "btn", "btn-light", "btn-block", "mt-3"], [1, "clearfix"], [1, "text-center", "pt-3"], [1, "text-warning"], ["href", "javascript:;", 3, "click"]], template: function ResetPassword2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ipsum Dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Please enter your email address. You will receive a link to create a new password via email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ResetPassword2Component_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Return to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetPassword2Component_Template_a_click_36_listener() { return ctx.onSignin2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Sign In");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQyL3Jlc2V0LXBhc3N3b3JkMi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResetPassword2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password2',
                templateUrl: './reset-password2.component.html',
                styleUrls: ['./reset-password2.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { resetpassword2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/signin1/signin1.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signin1/signin1.component.ts ***!
  \***************************************************/
/*! exports provided: Signin1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin1Component", function() { return Signin1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class Signin1Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    //  On submit click, reset field value
    onSubmit() {
        this.signin1.reset();
    }
    // On ResetPassword link click
    onResetpassword1() {
        this.router.navigate(['reset-password1'], { relativeTo: this.route.parent });
    }
    // On Signup1 link click
    onSignup1() {
        this.router.navigate(['signup1'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
Signin1Component.??fac = function Signin1Component_Factory(t) { return new (t || Signin1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
Signin1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Signin1Component, selectors: [["app-signin1"]], viewQuery: function Signin1Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.signin1 = _t.first);
    } }, decls: 54, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "loader-wrapper"], [1, "lds-ring"], [1, "card", "card-authentication1", "mx-auto", "my-5"], [1, "card-body"], [1, "card-content", "p-2"], [1, "text-center"], ["src", "assets/images/logo-icon.png", "alt", "logo icon"], [1, "card-title", "text-uppercase", "text-center", "py-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "exampleInputUsername", 1, "sr-only"], [1, "position-relative", "has-icon-right"], ["type", "text", "id", "exampleInputUsername", "placeholder", "Enter Username", "ngModel", "", "required", "", 1, "form-control", "input-shadow"], [1, "form-control-position"], [1, "icon-user"], ["for", "exampleInputPassword", 1, "sr-only"], ["type", "password", "id", "exampleInputPassword", "placeholder", "Enter Password", "ngModel", "", "required", "", 1, "form-control", "input-shadow"], [1, "icon-lock"], [1, "form-row"], [1, "form-group", "col-6"], [1, "icheck-material-white"], ["type", "checkbox", "id", "user-checkbox", "checked", ""], ["for", "user-checkbox"], [1, "form-group", "col-6", "text-right"], ["href", "JavaScript:;", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-block"], [1, "text-center", "mt-3"], [1, "form-row", "mt-4"], [1, "form-group", "mb-0", "col-6"], [1, "fa", "fa-facebook-square"], [1, "form-group", "mb-0", "col-6", "text-right"], [1, "fa", "fa-twitter-square"], [1, "card-footer", "text-center", "py-3"], [1, "text-warning", "mb-0"]], template: function Signin1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function Signin1Component_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signin1Component_Template_a_click_34_listener() { return ctx.onResetpassword1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Sign In With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Do not have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signin1Component_Template_a_click_52_listener() { return ctx.onSignup1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Sign Up here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluMS9zaWduaW4xLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Signin1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin1',
                templateUrl: './signin1.component.html',
                styleUrls: ['./signin1.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { signin1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/signin2/signin2.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signin2/signin2.component.ts ***!
  \***************************************************/
/*! exports provided: Signin2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin2Component", function() { return Signin2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class Signin2Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    //  On submit click, reset field value
    onSubmit() {
        this.signin2.reset();
    }
    // On ResetPassword link click
    onResetpassword2() {
        this.router.navigate(['reset-password2'], { relativeTo: this.route.parent });
    }
    // On Signup link click
    onSignup2() {
        this.router.navigate(['signup2'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
Signin2Component.??fac = function Signin2Component_Factory(t) { return new (t || Signin2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
Signin2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Signin2Component, selectors: [["app-signin2"]], viewQuery: function Signin2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.signin2 = _t.first);
    } }, decls: 64, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card-authentication2", "mx-auto", "my-5"], [1, "card-group"], [1, "card", "mb-0"], [1, "bg-signin2"], [1, "card-img-overlay", "rounded-left", "my-5"], [1, "text-white"], [1, "card-text", "text-white", "pt-3"], [1, "card-body"], [1, "card-content", "p-3"], [1, "text-center"], ["src", "assets/images/logo-icon.png", "alt", "logo icon"], [1, "card-title", "text-uppercase", "text-center", "py-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], [1, "position-relative", "has-icon-left"], ["for", "exampleInputUsername", 1, "sr-only"], ["type", "text", "id", "exampleInputUsername", "placeholder", "Username", "ngModel", "", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "icon-user"], ["for", "exampleInputPassword", 1, "sr-only"], ["type", "password", "id", "exampleInputPassword", "placeholder", "Password", "ngModel", "", "required", "", 1, "form-control"], [1, "icon-lock"], [1, "form-row", "mr-0", "ml-0"], [1, "form-group", "col-6"], [1, "icheck-material-white"], ["type", "checkbox", "id", "user-checkbox", "checked", ""], ["for", "user-checkbox"], [1, "form-group", "col-6", "text-right"], ["href", "JavaScript:;", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-block", "waves-effect", "waves-light"], [1, "text-center", "pt-3"], [1, "form-row", "mt-4"], [1, "form-group", "mb-0", "col-6"], ["type", "button", 1, "btn", "btn-light", "btn-block"], [1, "fa", "fa-facebook-square"], [1, "form-group", "mb-0", "col-6", "text-right"], [1, "fa", "fa-twitter-square"], [1, "text-warning"]], template: function Signin2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ipsum Dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function Signin2Component_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signin2Component_Template_a_click_43_listener() { return ctx.onResetpassword2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "or Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Do not have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signin2Component_Template_a_click_62_listener() { return ctx.onSignup2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Sign Up here");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluMi9zaWduaW4yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Signin2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin2',
                templateUrl: './signin2.component.html',
                styleUrls: ['./signin2.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { signin2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/signup1/signup1.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signup1/signup1.component.ts ***!
  \***************************************************/
/*! exports provided: Signup1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup1Component", function() { return Signup1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class Signup1Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    //  On submit click, reset field value
    onSubmit() {
        this.signup1.reset();
    }
    // On Signin link click
    onSignin1() {
        this.router.navigate(['signin1'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
Signup1Component.??fac = function Signup1Component_Factory(t) { return new (t || Signup1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
Signup1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Signup1Component, selectors: [["app-signup1"]], viewQuery: function Signup1Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.signup1 = _t.first);
    } }, decls: 55, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-authentication1", "mx-auto", "my-4"], [1, "card-body"], [1, "card-content", "p-2"], [1, "text-center"], ["src", "assets/images/logo-icon.png", "alt", "logo icon"], [1, "card-title", "text-uppercase", "text-center", "py-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "exampleInputName", 1, "sr-only"], [1, "position-relative", "has-icon-right"], ["type", "text", "id", "exampleInputName", "placeholder", "Enter Your Name", "ngModel", "", "required", "", 1, "form-control", "input-shadow"], [1, "form-control-position"], [1, "icon-user"], ["for", "exampleInputEmailId", 1, "sr-only"], ["type", "text", "id", "exampleInputEmailId", "placeholder", "Enter Your Email ID", "ngModel", "", "required", "", 1, "form-control", "input-shadow"], [1, "icon-envelope-open"], ["for", "exampleInputPassword", 1, "sr-only"], ["type", "text", "id", "exampleInputPassword", "placeholder", "Choose Password", "ngModel", "", "required", "", 1, "form-control", "input-shadow"], [1, "icon-lock"], [1, "icheck-material-white"], ["type", "checkbox", "id", "user-checkbox", "checked", ""], ["for", "user-checkbox"], ["type", "button", 1, "btn", "btn-light", "btn-block", "waves-effect", "waves-light"], [1, "text-center", "mt-3"], [1, "form-row", "mt-4"], [1, "form-group", "mb-0", "col-6"], ["type", "button", 1, "btn", "btn-light", "btn-block"], [1, "fa", "fa-facebook-square"], [1, "form-group", "mb-0", "col-6", "text-right"], [1, "fa", "fa-twitter-square"], [1, "card-footer", "text-center", "py-3"], [1, "text-warning", "mb-0"], ["href", "JavaScript:;", 3, "click"]], template: function Signup1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function Signup1Component_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "I Agree With Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Sign Up With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signup1Component_Template_a_click_53_listener() { return ctx.onSignin1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Sign In here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwMS9zaWdudXAxLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Signup1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup1',
                templateUrl: './signup1.component.html',
                styleUrls: ['./signup1.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { signup1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/signup2/signup2.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signup2/signup2.component.ts ***!
  \***************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["f"];
class Signup2Component {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    //  On submit click, reset field value
    onSubmit() {
        this.signup2.reset();
    }
    // On Signin link click
    onSignin2() {
        this.router.navigate(['signin2'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
Signup2Component.??fac = function Signup2Component_Factory(t) { return new (t || Signup2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
Signup2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Signup2Component, selectors: [["app-signup2"]], viewQuery: function Signup2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.signup2 = _t.first);
    } }, decls: 74, vars: 0, consts: [["id", "wrapper"], [1, "height-100v", "d-flex", "align-items-center", "justify-content-center"], [1, "card-authentication2", "mx-auto", "my-3"], [1, "card-group"], [1, "card", "mb-0"], [1, "bg-signup2"], [1, "card-img-overlay", "rounded-left", "my-5"], [1, "text-white"], [1, "card-text", "text-white", "pt-3"], [1, "card-body"], [1, "card-content", "p-3"], [1, "text-center"], ["src", "assets/images/logo-icon.png", "alt", "logo icon"], [1, "card-title", "text-uppercase", "text-center", "py-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], [1, "position-relative", "has-icon-left"], ["for", "exampleInputName", 1, "sr-only"], ["type", "text", "id", "exampleInputName", "placeholder", "Name", "ngModel", "", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "icon-user"], ["for", "exampleInputEmailId", 1, "sr-only"], ["type", "text", "id", "exampleInputEmailId", "placeholder", "Email ID", "ngModel", "", "required", "", 1, "form-control"], [1, "icon-envelope-open"], ["for", "exampleInputPassword", 1, "sr-only"], ["type", "text", "id", "exampleInputPassword", "placeholder", "Password", "ngModel", "", "required", "", 1, "form-control"], [1, "icon-lock"], ["for", "exampleInputRetryPassword", 1, "sr-only"], ["type", "password", "id", "exampleInputRetryPassword", "placeholder", "Retry Password", "ngModel", "", "required", "", 1, "form-control"], [1, "icheck-material-white"], ["type", "checkbox", "id", "user-checkbox", "checked", ""], ["for", "user-checkbox"], ["type", "button", 1, "btn", "btn-light", "btn-block", "waves-effect", "waves-light"], [1, "text-center", "pt-3"], [1, "form-row", "mt-4"], [1, "form-group", "mb-0", "col-6"], ["type", "button", 1, "btn", "btn-light", "btn-block"], [1, "fa", "fa-facebook-square"], [1, "form-group", "mb-0", "col-6", "text-right"], [1, "fa", "fa-twitter-square"], [1, "text-warning"], ["href", "JavaScript:;", 3, "click"]], template: function Signup2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ipsum Dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function Signup2Component_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Retry Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "I Accept terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "or Sign up with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Signup2Component_Template_a_click_72_listener() { return ctx.onSignin2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Sign In here");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwMi9zaWdudXAyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Signup2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup2',
                templateUrl: './signup2.component.html',
                styleUrls: ['./signup2.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { signup2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map