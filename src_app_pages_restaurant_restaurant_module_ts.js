(self["webpackChunkeasyeat"] = self["webpackChunkeasyeat"] || []).push([["src_app_pages_restaurant_restaurant_module_ts"],{

/***/ 2329:
/*!***************************************************************!*\
  !*** ./src/app/pages/restaurant/restaurant-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantPageRoutingModule": () => (/* binding */ RestaurantPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _restaurant_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.page */ 1731);




const routes = [
    {
        path: '',
        component: _restaurant_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantPage
    }
];
let RestaurantPageRoutingModule = class RestaurantPageRoutingModule {
};
RestaurantPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantPageRoutingModule);



/***/ }),

/***/ 3885:
/*!*******************************************************!*\
  !*** ./src/app/pages/restaurant/restaurant.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantPageModule": () => (/* binding */ RestaurantPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-routing.module */ 2329);
/* harmony import */ var _restaurant_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.page */ 1731);







let RestaurantPageModule = class RestaurantPageModule {
};
RestaurantPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestaurantPageRoutingModule
        ],
        declarations: [_restaurant_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantPage]
    })
], RestaurantPageModule);



/***/ }),

/***/ 1731:
/*!*****************************************************!*\
  !*** ./src/app/pages/restaurant/restaurant.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantPage": () => (/* binding */ RestaurantPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_restaurant_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./restaurant.page.html */ 7874);
/* harmony import */ var _restaurant_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.page.scss */ 9434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/fake-data.service */ 2753);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let RestaurantPage = class RestaurantPage {
    constructor(fds, route) {
        this.fds = fds;
        this.route = route;
        this.categories = [];
        this.plates = [];
        this.platesCopy = [];
        this.backgroundImage = "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        this.avatarImage = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        this.id = null;
        this.selectedCategory = 1;
        this.id = this.route.snapshot.paramMap.get('id');
        const { categories, plates, avatarImage, backgroundImage } = this.fds.getRestaurant(this.id);
        this.categories = categories;
        this.plates = plates;
        this.platesCopy = this.plates;
        if (avatarImage && backgroundImage) {
            this.avatarImage = avatarImage;
            this.backgroundImage = backgroundImage;
        }
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        const { detail: { value } } = ev;
        this.selectedCategory = value;
        if (value != 1) {
            this.platesCopy = this.plates.filter((plate) => plate.categoryId == this.selectedCategory);
        }
        else {
            this.platesCopy = this.plates;
        }
    }
};
RestaurantPage.ctorParameters = () => [
    { type: _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__.FakeDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
RestaurantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-restaurant',
        template: _raw_loader_restaurant_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_restaurant_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RestaurantPage);



/***/ }),

/***/ 9434:
/*!*******************************************************!*\
  !*** ./src/app/pages/restaurant/restaurant.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header {\n  height: 15%;\n}\n.header__user-container {\n  position: absolute;\n  width: 100%;\n  bottom: 5px;\n  flex-direction: row;\n  flex: 1;\n}\n.header .avatar {\n  border: 1px solid white;\n}\n.header .name {\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n.header .name span {\n  font-weight: bolder;\n}\nion-item {\n  --background: transparent;\n  --color: white;\n}\nion-avatar {\n  height: 50px;\n  width: 50px;\n  border: 2px solid white;\n}\n.title {\n  font-weight: bolder;\n  font-size: 1.5rem;\n}\nion-button.reset {\n  margin: 0;\n}\nion-item.separate {\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n.border {\n  border-radius: 7px;\n}\nion-input {\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBS0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFGRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUxGO0FBUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBTEY7QUFPQTtFQUNFLFNBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7QUFIRiIsImZpbGUiOiJyZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGhlaWdodDogMTUlO1xyXG5cclxuICAmX191c2VyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ucXVhbnRpdHkge1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5pb24tYnV0dG9uLnJlc2V0IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlcGFyYXRlIHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLWNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7874:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restaurant/restaurant.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <section class=\"header\" style=\"background: url('{{backgroundImage}}'); background-position: center; background-size: cover; filter: blur(0.5px);\">\r\n    <div class=\"header__user-container\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img\r\n            [src]=\"avatarImage\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h1 class=\"name\">\r\n            Hi <span>Guest</span>\r\n          </h1>\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"cards\">\r\n    <ion-card mode=\"md\">\r\n      <ion-item lines=\"none\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"./../../assets/ZERO.svg\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <p class=\"title\">Zero</p>\r\n          <p>Use it everyday</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-card mode=\"md\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label text-wrap>\r\n          <p style=\"font-weight: bolder\">Welcome to Zero Diners Loyalty Program</p>\r\n          <p>Get exciting rewards on you frequent visits to Zero</p>\r\n        </ion-label>\r\n        <ion-avatar slot=\"end\">\r\n          <img\r\n            src=\"https://img2.freepng.es/20180627/coq/kisspng-vegetarian-cuisine-indian-cuisine-food-recipe-side-nasi-lemak-5b33652e9fdc59.8859384915300948946548.jpg\">\r\n        </ion-avatar>\r\n      </ion-item>\r\n      <ion-button class=\"reset\" mode=\"ios\" expand=\"full\" size=\"small\" color=\"warning\">\r\n        Join Now\r\n        <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card>\r\n  </section>\r\n\r\n\r\n  <section class=\"delivery\">\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img\r\n          src=\"https://play-lh.googleusercontent.com/ltHTtAH-Ls6eEiWVRE1WhpRh2xDteVk9GPbYKCJkMR67S8Su7Qgtc0rMEGxm5yyCHg\">\r\n      </ion-avatar>\r\n      <ion-label text-wrap>\r\n        <p style=\"color: black\">Delivery</p>\r\n        <p>Delivery ASAP</p>\r\n      </ion-label>\r\n      <ion-button mode=\"ios\" fill=\"clear\" slot=\"end\">\r\n        Change\r\n      </ion-button>\r\n    </ion-item>\r\n  </section>\r\n\r\n  <section class=\"search-header\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label color=\"dark\">Veg. Only</ion-label>\r\n            <ion-toggle mode=\"md\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-segment mode=\"md\" scrollable (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"selectedCategory\" >\r\n      <ion-segment-button *ngFor=\"let cat of categories\" [value]=\"cat.id\">\r\n        <ion-label>{{cat.title}}</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </section>\r\n\r\n  <section class=\"plates\">\r\n    <ion-list>\r\n      <ion-item class=\"separate\" *ngFor=\"let plate of platesCopy\" lines=\"inset\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img class=\"border\" [src]=\"plate.image\">\r\n        </ion-thumbnail>\r\n        <ion-label text-wrap>\r\n          <p style=\"color: black\">{{plate.name}}</p>\r\n          <p>${{plate.price}}</p>\r\n        </ion-label>\r\n        <ion-button mode=\"ios\" size=\"small\" fill=\"outline\" slot=\"end\" color=\"warning\">\r\n          Add\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n  </section>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-button color=\"primary\" expand=\"block\" size=\"small\">\r\n      <ion-icon name=\"restaurant-outline\" slot=\"start\"></ion-icon>\r\n      Open Menu\r\n    </ion-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_restaurant_restaurant_module_ts.js.map