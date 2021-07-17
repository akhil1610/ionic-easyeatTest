(self["webpackChunkeasyeat"] = self["webpackChunkeasyeat"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/fake-data.service */ 2753);





let HomePage = class HomePage {
    constructor(fds) {
        this.fds = fds;
        this.categories = [];
        this.plates = [];
    }
    segmentChanged(ev) {
        console.log(ev);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__.FakeDataService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header {\n  height: 15%;\n  background: url(\"https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\");\n  background-position: center;\n  background-size: cover;\n  filter: blur(0.5px);\n}\n.header__user-container {\n  position: absolute;\n  width: 100%;\n  bottom: 5px;\n  flex-direction: row;\n  flex: 1;\n}\n.header .avatar {\n  border: 1px solid white;\n}\n.header .name {\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n.header .name span {\n  font-weight: bolder;\n}\nion-item {\n  --background: transparent;\n  --color: white;\n}\nion-avatar {\n  height: 50px;\n  width: 50px;\n  border: 2px solid white;\n}\n.title {\n  font-weight: bolder;\n  font-size: 1.5rem;\n}\nion-button.reset {\n  margin: 0;\n}\nion-item.separate {\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n.border {\n  border-radius: 7px;\n}\nion-input {\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlIQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFDSjtBQUVFO0VBQ0UsdUJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFLQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUZGO0FBUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBTEY7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQU9BO0VBQ0UsU0FBQTtBQUpGO0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1BO0VBQ0Usa0JBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtBQUhGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDYxNDI4L3BleGVscy1waG90by00NjE0MjguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZpbHRlcjogYmx1cigwLjVweCk7XHJcblxyXG4gICZfX3VzZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbS5xdWFudGl0eSB7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmlvbi1idXR0b24ucmVzZXQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VwYXJhdGUge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <section class=\"header\">\r\n    <div class=\"header__user-container\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h1 class=\"name\">\r\n            Hi <span>Guest</span>\r\n          </h1>\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n  <section class=\"cards\">\r\n    <ion-card mode=\"md\">\r\n      <ion-item lines=\"none\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"./../../assets/ZERO.svg\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <p class=\"title\">Zero</p>\r\n          <p>Use it everyday</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-card mode=\"md\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label text-wrap>\r\n          <p style=\"font-weight: bolder\">Welcome to Zero Diners Loyalty Program</p>\r\n          <p>Get exciting rewards on you frequent visits to Zero</p>\r\n        </ion-label>\r\n        <ion-avatar slot=\"end\">\r\n          <img src=\"https://img2.freepng.es/20180627/coq/kisspng-vegetarian-cuisine-indian-cuisine-food-recipe-side-nasi-lemak-5b33652e9fdc59.8859384915300948946548.jpg\">\r\n        </ion-avatar>\r\n      </ion-item>\r\n      <ion-button  class=\"reset\" mode=\"ios\" expand=\"full\" size=\"small\" color=\"warning\">\r\n        Join Now\r\n        <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card>\r\n  </section>\r\n\r\n\r\n  <section class=\"delivery\">\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img\r\n          src=\"https://play-lh.googleusercontent.com/ltHTtAH-Ls6eEiWVRE1WhpRh2xDteVk9GPbYKCJkMR67S8Su7Qgtc0rMEGxm5yyCHg\">\r\n      </ion-avatar>\r\n      <ion-label text-wrap>\r\n        <p style=\"color: black\">Delivery</p>\r\n        <p>Delivery ASAP</p>\r\n      </ion-label>\r\n      <ion-button  mode=\"ios\" fill=\"clear\" slot=\"end\">\r\n        Change\r\n      </ion-button>\r\n    </ion-item>\r\n  </section>\r\n\r\n  <section class=\"search-header\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label color=\"dark\">Veg. Only</ion-label>\r\n            <ion-toggle mode=\"md\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-segment mode=\"md\" scrollable (ionChange)=\"segmentChanged($event)\">\r\n      <ion-segment-button *ngFor=\"let cat of categories\" [value]=\"cat.id\">\r\n        <ion-label>{{cat.title}}</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </section>\r\n\r\n  <section class=\"plates\">\r\n    <ion-list>\r\n      <ion-item class=\"separate\" *ngFor=\"let plate of plates\" lines=\"inset\">\r\n        <ion-thumbnail  slot=\"start\">\r\n          <img class=\"border\" [src]=\"plate.image\">\r\n        </ion-thumbnail>\r\n        <ion-label text-wrap>\r\n          <p style=\"color: black\">{{plate.name}}</p>\r\n          <p>${{plate.price}}</p>\r\n        </ion-label>\r\n        <ion-button  mode=\"ios\" size=\"small\" fill=\"outline\" slot=\"end\" color=\"warning\">\r\n          Add\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n<div>\r\n\r\n</div>\r\n            <ion-item class=\"quantity\" lines=\"none\">\r\n              <ion-button mode=\"ios\" size=\"small\" slot=\"start\">\r\n                <ion-icon name=\"remove-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input></ion-input>\r\n              <ion-button mode=\"ios\" size=\"small\" slot=\"end\">\r\n                <ion-icon name=\"add-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n  </section>\r\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-button color=\"primary\" expand=\"block\" size=\"small\">\r\n      <ion-icon name=\"restaurant-outline\" slot=\"start\"></ion-icon>\r\n      Open Menu\r\n    </ion-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map