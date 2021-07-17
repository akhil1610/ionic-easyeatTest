(self["webpackChunkeasyeat"] = self["webpackChunkeasyeat"] || []).push([["default-src_app_services_fake-data_service_ts"],{

/***/ 2753:
/*!***********************************************!*\
  !*** ./src/app/services/fake-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeDataService": () => (/* binding */ FakeDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FakeDataService = class FakeDataService {
    constructor() {
        this.restaurants = [];
        this.restaurants = this.getData();
    }
    getRestaurant(restaurantId) {
        return this.restaurants.find((r) => r.id == restaurantId);
    }
    getData() {
        return [
            {
                id: 1,
                name: 'Mr FishHead Noodle (Damen)',
                reviewsCount: 6,
                qualification: 5,
                openingHour: 10,
                backgroundImage: '',
                avatarImage: '',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png',
                categories: [
                    {
                        id: 1,
                        title: "Main",
                    },
                    {
                        id: 2,
                        title: "Nasi",
                    },
                    {
                        id: 3,
                        title: "Wraps",
                    },
                    {
                        id: 4,
                        title: "Burgers",
                    },
                    {
                        id: 5,
                        title: "Snacks",
                    },
                    {
                        id: 6,
                        title: "Drinks",
                    },
                ],
                plates: [
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                ],
            },
            {
                id: 2,
                name: 'Burger King',
                reviewsCount: 3,
                qualification: 5,
                openingHour: 10,
                backgroundImage: '',
                avatarImage: '',
                image: 'http://1000marcas.net/wp-content/uploads/2019/12/Logo-Burger-King.png',
                categories: [
                    {
                        id: 1,
                        title: "Main",
                        active: true,
                    },
                    {
                        id: 2,
                        title: "Nasi",
                    },
                    {
                        id: 3,
                        title: "Past",
                    },
                    {
                        id: 4,
                        title: "Wraps",
                    },
                    {
                        id: 5,
                        title: "Burgers",
                    },
                    {
                        id: 6,
                        title: "Snacks",
                    },
                    {
                        id: 7,
                        title: "Drinks",
                    },
                ],
                plates: [
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                ],
            },
            {
                id: 3,
                name: 'Gatto Cafe',
                reviewsCount: 4,
                qualification: 5,
                openingHour: 10,
                backgroundImage: '',
                avatarImage: '',
                image: 'https://e7.pngegg.com/pngimages/726/694/png-clipart-cat-cafe-whiskers-cafe-catfe-creative-cat-logo-white-mammal.png',
                categories: [
                    {
                        id: 1,
                        title: "Main",
                        active: true,
                    },
                    {
                        id: 2,
                        title: "Nasi",
                    },
                    {
                        id: 3,
                        title: "Past",
                    },
                    {
                        id: 4,
                        title: "Wraps",
                    },
                    {
                        id: 5,
                        title: "Burgers",
                    },
                    {
                        id: 6,
                        title: "Snacks",
                    },
                    {
                        id: 7,
                        title: "Drinks",
                    },
                ],
                plates: [
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                ],
            },
            {
                id: 4,
                name: 'Groceries Store',
                reviewsCount: 4,
                qualification: 5,
                openingHour: 10,
                backgroundImage: '',
                avatarImage: '',
                image: 'https://e7.pngegg.com/pngimages/726/694/png-clipart-cat-cafe-whiskers-cafe-catfe-creative-cat-logo-white-mammal.png',
                categories: [
                    {
                        id: 1,
                        title: "Main",
                        active: true,
                    },
                    {
                        id: 2,
                        title: "Nasi",
                    },
                    {
                        id: 3,
                        title: "Past",
                    },
                    {
                        id: 4,
                        title: "Wraps",
                    },
                    {
                        id: 5,
                        title: "Burgers",
                    },
                    {
                        id: 6,
                        title: "Snacks",
                    },
                    {
                        id: 7,
                        title: "Drinks",
                    },
                ],
                plates: [
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                    {
                        id: 1,
                        categoryId: 1,
                        name: "Chiken Chops",
                        description: "this is just example",
                        price: 13.44,
                        image: "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        name: "Nasi goreng indonesia",
                        description: "this is just example",
                        price: 10.44,
                        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        name: "Wrap",
                        description: "this is just example",
                        price: 9.44,
                        image: "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        name: "Burger",
                        description: "this is just example",
                        price: 13.44,
                        image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
                    },
                ]
            }
        ];
    }
};
FakeDataService.ctorParameters = () => [];
FakeDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FakeDataService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_fake-data_service_ts.js.map