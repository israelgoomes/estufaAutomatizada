webpackJsonp([1],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/itens-selecionados/itens-selecionados.module": [
		675,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, modalCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.itemOne = [];
        this.listaAux = [];
        this.next = false;
        this.itenTwo = null;
        this.teste2 = "true";
        this.teste = "../../assets//imgs/icons8-cor-50.png";
        this.listaItens = [
            { item: "Hortelā", icon: "../../assets/imgs/hortela.png" },
            { item: "Salsinha", icon: "../../assets/imgs/salsinha.png" },
            { item: "Cebolinha", icon: "../../assets/imgs/cebolinha.png" },
            { item: "Alecrim", icon: "../../assets/imgs/alecrim.svg" },
            { item: "Manjericāo", icon: "../../assets/imgs/manjericao.png" },
            { item: "Alface", icon: "../../assets/imgs/alface.svg" },
            { item: "Couve", icon: "../../assets/imgs/couve.jpeg" },
            { item: "Brócolis", icon: "../../assets/imgs/brocolis.png" },
            { item: "Espinafre", icon: "../../assets/imgs/espinafre.svg" },
            { item: "Agriāo", icon: "../../assets/imgs/agriao.svg" },
            { item: "Repolho", icon: "../../assets/imgs/repolho.svg" },
            { item: "Tomatinho cereja", icon: "../../assets/imgs/tomatinhocereja.jpg" },
            { item: "Cenoura", icon: "../../assets/imgs/cenoura.png" },
            { item: "Beterraba", icon: "../../assets/imgs/beterraba.png" },
            { item: "Rabanete", icon: "../../assets/imgs/rabanete.jpg" },
            { item: "Morango", icon: "../../assets/imgs/morango.png" },
            { item: "Abóbora", icon: "../../assets/imgs/abobora.svg" },
            { item: "Abobrinha", icon: "../../assets/imgs/abobrinha.svg" },
            { item: "Pepino", icon: "../../assets/imgs/pepino.png" },
            { item: "Batata", icon: "../../assets/imgs/batata.jpeg" }
        ];
        console.log(this.listaItens);
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.getItemSelected = function (item) {
        var _this = this;
        if (this.itemOne.length < 2 && item.isChecked == true) {
            console.log("entrou aqui");
            this.itemOne.push(item);
            // this.listaAux.push(item);
            // c=2;
        }
        else if (item.isChecked == true && this.itemOne.length > 1) {
            item.isChecked = false;
            this.itemOne.forEach(function (i) {
                if (i.item == item.item) {
                    i.isChecked = false;
                }
            });
            console.log(' AQUI!!', item.item);
            console.log(item.isChecked);
            var toast = this.toastCtrl.create({
                message: "Só é possível selecionar até 2 itens para plantaçāo. Por favor desselecione os demais.",
                duration: 5000,
                position: "bottom"
            });
            toast.onDidDismiss(function () {
                item.isChecked = false;
                console.log("Dismissed toast");
            });
            toast.present();
        }
        else {
            console.log('ELse', item.item);
            item.isChecked = false;
        }
        this.itemOne.forEach(function (i) {
            if (i.item == item.item && item.isChecked == false) {
                var index = _this.itemOne.indexOf(item);
                _this.itemOne.splice(index, 1);
            }
        });
        console.log(item.isChecked);
        console.log(this.itemOne.length);
        if (this.itemOne.length > 0) {
            this.next = true;
        }
        else {
            this.next = false;
        }
        console.log(this.itemOne);
    };
    HomePage.prototype.selectedItens = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ItensSelecionadosPage", {
            _itensSelecionados: this.itemOne
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.itemOne.forEach(function (i) {
                //this.appCtrl.getRootNav().setRoot('MyApp');
                i.isChecked = false;
                _this.itemOne = [];
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\estufaAutomatizada\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Estufa Automatizada\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-item class="teste" no-lines>\n\n    Selecione os itens a serem plantados\n\n  </ion-item>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-fab style="padding-left: 85%;">\n\n    <button [disabled]="next == false" [color]="primary" ion-fab (click)="selectedItens()">\n\n      <ion-icon style="font-size: 30px;" name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-card class="itens" *ngFor="let itens of listaItens">\n\n    <ion-grid>\n\n      <ion-card-content>\n\n        <ion-row style="text-align: center;">\n\n          <ion-checkbox\n\n            [(ngModel)]="itens.isChecked"\n\n            (click)="getItemSelected(itens)"\n\n          ></ion-checkbox>\n\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img\n\n            id="icons"\n\n            [src]="itens.icon"\n\n          />\n\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ itens.item }}\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\estufaAutomatizada\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_progress_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/itens-selecionados/itens-selecionados.module#ItensSelecionadosPageModule', name: 'ItensSelecionadosPage', segment: 'itens-selecionados', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic_progress_bar__["a" /* IonicSimpleProgressBarModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_progress_bar__["b" /* SimpleProgressBarProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lsrael\Desktop\estufaAutomatizada\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\estufaAutomatizada\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map