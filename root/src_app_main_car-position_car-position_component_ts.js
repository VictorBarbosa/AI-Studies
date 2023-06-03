"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_car-position_car-position_component_ts"],{

/***/ 98900:
/*!**************************************************!*\
  !*** ./src/app/Services/car-position.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarPositionService": () => (/* binding */ CarPositionService)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59442);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ 47167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90390);




class CarPositionService {
  /*
  * Model getter
  */
  get model() {
    return this._model.getValue();
  }
  /*
   * Model setter
   */
  set model(value) {
    if (this._model.getValue() !== value) {
      this._model.next(value);
    }
  }
  /**
   *
   */
  constructor() {
    /*
     * Model
     */
    this._model = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.model$ = this._model.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.loadGraphModel('assets/car_position/model.json').then(model => {
      this._model.next(model);
    });
  }
  predict(img, imageShapeX = 224, imageShapeY = 224) {
    const model = this.model;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(o => {
      let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([imageShapeX, imageShapeY]).toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.scalar(255.0)).expandDims();
      if (model) {
        model.execute(pre_image).data().then(predictions => {
          var res = this.getPredictedClass(predictions);
          o.next(res);
        });
      }
    });
  }
  /**
    */
  predictBase64(base64, imageShapeX = 224, imageShapeY = 224) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(o => {
      const model = this.model;
      const img = new Image(imageShapeX, imageShapeY);
      img.onload = () => {
        let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([imageShapeX, imageShapeY]).toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.scalar(255.0)).expandDims();
        if (model) {
          model.execute(pre_image).data().then(predictions => {
            let rss = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.softmax(predictions).dataSync();
            var res = this.getPredictedClass(predictions);
            o.next(res);
          });
        }
      };
      img.src = base64;
    });
  }
  /**
  *
  Get predicted class
  */
  getPredictedClass(res) {
    if (!res || res.length === 0) {
      const empty = [];
      for (let i = 0; i < 5; i++) {
        empty.push({
          name: "-",
          probability: 0,
          index: 0
        });
      }
      return empty;
    }
    const arr = Array.prototype.slice.call(res);
    const output = (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.softmax)(arr);
    // const output =  tf.softmax(res).dataSync();
    return (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.getClass)(arr, 5, _common_common__WEBPACK_IMPORTED_MODULE_1__.CarDirection);
  }
}
CarPositionService.ɵfac = function CarPositionService_Factory(t) {
  return new (t || CarPositionService)();
};
CarPositionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: CarPositionService,
  factory: CarPositionService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 19108:
/*!*************************************************************!*\
  !*** ./src/app/main/car-position/car-position.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarPositionComponent": () => (/* binding */ CarPositionComponent)
/* harmony export */ });
/* harmony import */ var _Services_car_position_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/car-position.service */ 98900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90390);








const _c0 = ["img"];
const _c1 = ["file"];
function CarPositionComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.probability, "");
  }
}
class CarPositionComponent {
  /*
  * SrcImage getter
  */
  get srcImage() {
    return this._srcImage.getValue();
  }
  /*
   * SrcImage setter
   */
  set srcImage(value) {
    if (this._srcImage.getValue() !== value) {
      this._srcImage.next(value);
    }
  }
  /*
  * Position getter
  */
  get position() {
    return this._position.getValue();
  }
  /*
   * Position setter
   */
  set position(value) {
    if (this._position.getValue() !== value) {
      this._position.next(value);
    }
  }
  constructor(carPosition) {
    this.carPosition = carPosition;
    /**
     * img
     */
    this.img = null;
    /**
     * video
     */
    this.file = null;
    /*
     * SrcImage
     */
    this._srcImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.srcImage$ = this._srcImage.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Position
     */
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.position$ = this._position.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
  }
  ngOnInit() {
    this._srcImage.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(img => {
      this.img?.nativeElement.setAttribute('src', img);
      this.carPosition.predictBase64(img).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(ret => {
        this._position.next(ret);
      })).subscribe();
    })).subscribe();
  }
  pictureUpload(ev) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = e => {
      let image = new Image();
      image.src = e.target.result;
      this._srcImage.next(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  /**
  * clickFileUpload
  */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }
}
CarPositionComponent.ɵfac = function CarPositionComponent_Factory(t) {
  return new (t || CarPositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_car_position_service__WEBPACK_IMPORTED_MODULE_0__.CarPositionService));
};
CarPositionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CarPositionComponent,
  selectors: [["app-car-position"]],
  viewQuery: function CarPositionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_Services_car_position_service__WEBPACK_IMPORTED_MODULE_0__.CarPositionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 1,
  consts: [["id", "container"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["img", ""], [4, "ngFor", "ngForOf"], [1, "buttons"], ["hidden", "", "accept", ".jpg,.jpeg", "type", "file", 3, "change"], ["file", ""], [3, "click"]],
  template: function CarPositionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "table");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarPositionComponent_tr_6_Template, 5, 2, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CarPositionComponent_Template_input_change_8_listener($event) {
        return ctx.pictureUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarPositionComponent_Template_ion_button_click_10_listener() {
        return ctx.clickFileUpload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Upload Car Picture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.position);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  styles: ["img[_ngcontent-%COMP%] {\n  max-width: 224px;\n  max-height: 224px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jYXItcG9zaXRpb24vY2FyLXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIFxuICAgIG1heC13aWR0aDogMjI0cHg7XG4gICAgbWF4LWhlaWdodDogMjI0cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_main_car-position_car-position_component_ts.js.map