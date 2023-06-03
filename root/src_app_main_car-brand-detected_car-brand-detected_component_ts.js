"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_car-brand-detected_car-brand-detected_component_ts"],{

/***/ 44971:
/*!*****************************************************************!*\
  !*** ./src/app/common/model-car-detect-brand-mobile.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasseAndProbability": () => (/* binding */ ClasseAndProbability)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class ClasseAndProbability {
  constructor(classNames) {
    this.classNames = classNames;
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
    const output = this.softmax(arr);
    return this.getClass(output, 5);
  }
  /**
   * Softmax
   */
  softmax(arr) {
    const C = Math.max(...arr);
    const d = arr.map(y => Math.exp(y - C)).reduce((a, b) => a + b);
    const ret = arr.map((value, index) => {
      return Math.exp(value - C) / d;
    });
    return ret;
  }
  /**
   *  This function return Classes and probabilty
   */
  getClass(classProbabilities, k = 10) {
    const probs = lodash__WEBPACK_IMPORTED_MODULE_0___default().isTypedArray(classProbabilities) ? Array.prototype.slice.call(classProbabilities) : classProbabilities;
    const probMap = probs.map((prob, index) => [prob, index]);
    const sorted = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(probMap, probIndex => probIndex[0]);
    const reversed = lodash__WEBPACK_IMPORTED_MODULE_0___default().reverse(sorted);
    const topK = lodash__WEBPACK_IMPORTED_MODULE_0___default().take(reversed, k).map(probIndex => {
      const iClass = this.classNames[probIndex[1]];
      return {
        id: iClass[0],
        index: parseInt(probIndex[1], 10),
        name: iClass,
        probability: Number((probIndex[0] * 100).toFixed(2))
        // probability: (probIndex[0] * 100)
      };
    });

    return topK;
  }
}

/***/ }),

/***/ 79974:
/*!**********************************************************!*\
  !*** ./src/app/common/model-car-detect-brand.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelCarBrand": () => (/* binding */ ModelCarBrand),
/* harmony export */   "ModelType": () => (/* binding */ ModelType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59442);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var _model_car_detect_brand_mobile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-car-detect-brand-mobile.service */ 44971);
/* harmony import */ var _model_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.initialize */ 45159);




var ModelType;
(function (ModelType) {
  ModelType[ModelType["FromYolo"] = 0] = "FromYolo";
  ModelType[ModelType["FromTensorflow"] = 1] = "FromTensorflow";
})(ModelType || (ModelType = {}));
class ModelCarBrand extends _model_initialize__WEBPACK_IMPORTED_MODULE_2__.ModelInitialize {
  /*
  * classAndProbability getter
  */
  get classAndProbability() {
    return this._classAndProbability.getValue();
  }
  /*
   * classAndProbability setter
   */
  set classAndProbability(value) {
    if (this._classAndProbability.getValue() !== value) {
      this._classAndProbability.next(value);
    }
  }
  constructor(modelCarBrandPath, classes, imageShapeX = 224, imageShapeY = 224) {
    super(modelCarBrandPath);
    this.classes = classes;
    this.imageShapeX = imageShapeX;
    this.imageShapeY = imageShapeY;
    /*
     * classAndProbability
     */
    this._classAndProbability = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.classAndProbability$ = this._classAndProbability.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this._classAndProbability.next(new _model_car_detect_brand_mobile_service__WEBPACK_IMPORTED_MODULE_1__.ClasseAndProbability(classes));
  }
  predict(img, modelType) {
    if (modelType === ModelType.FromTensorflow) {
      return this.fromTensorflow(img);
    } else {
      return this.fromYoloConvertedToTensorflow(img);
    }
  }
  predictByBase64(base64, modelType) {
    if (modelType === ModelType.FromTensorflow) {
      return this.fromTensorflowBase64(base64);
    } else {
      return this.fromYoloConvertedToTensorflowBase64(base64);
    }
  }
  /**
   * From Tensorflow Base64
   */
  fromTensorflowBase64(base64) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(o => {
      const model = this.model;
      const img = new Image(this.imageShapeX, this.imageShapeY);
      img.onload = () => {
        let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([this.imageShapeX, this.imageShapeY]).expandDims().toFloat();
        if (model) {
          model.execute(pre_image).data().then(predictions => {
            var res = this.classAndProbability?.getPredictedClass(predictions);
            o.next(res);
          });
        }
      };
      img.src = base64;
    });
  }
  /**
   * From Tensorflow
   */
  fromTensorflow(img) {
    const model = this.model;
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(o => {
      let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([this.imageShapeX, this.imageShapeY]).expandDims().toFloat();
      if (model) {
        model.execute(pre_image).data().then(ret => {
          var res = this.classAndProbability?.getPredictedClass(ret);
          o.next(res);
        });
      }
    });
  }
  /**
   * From Yolo converted to Tensorflow Base64
   */
  fromYoloConvertedToTensorflowBase64(base64) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(o => {
      const model = this.model;
      const img = new Image(this.imageShapeX, this.imageShapeY);
      img.onload = () => {
        let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([this.imageShapeX, this.imageShapeY]).toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.scalar(255.0)).expandDims();
        if (model) {
          model.execute(pre_image).data().then(predictions => {
            var res = this.classAndProbability?.getPredictedClass(predictions);
            o.next(res);
          });
        }
      };
      img.src = base64;
    });
  }
  /**
   * From Yolo converted to Tensorflow
   */
  fromYoloConvertedToTensorflow(img) {
    const model = this.model;
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(o => {
      let pre_image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(img, 3).resizeNearestNeighbor([this.imageShapeX, this.imageShapeY]).expandDims().toFloat();
      if (model) {
        model.execute(pre_image).data().then(ret => {
          var res = this.classAndProbability?.getPredictedClass(ret);
          o.next(res);
        });
      }
    });
  }
}

/***/ }),

/***/ 45159:
/*!********************************************!*\
  !*** ./src/app/common/model.initialize.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelInitialize": () => (/* binding */ ModelInitialize)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98067);


class ModelInitialize {
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
   * Initialize model trained
   * @param modelPath Path where is a model
   */
  constructor(modelPath) {
    /*
     * Model
     */
    this._model = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.model$ = this._model.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.loadGraphModel(modelPath, {
      onProgress: fraction => {
        console.log(fraction);
      }
    }).then(mod => {
      this._model.next(mod);
    }).catch(() => {});
  }
  /**
   * Clear the memory
   */
  dispose() {
    this._model.complete();
    this._model.unsubscribe();
  }
}

/***/ }),

/***/ 34665:
/*!*************************************************************************!*\
  !*** ./src/app/main/car-brand-detected/car-brand-detected.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBrandDetectedComponent": () => (/* binding */ CarBrandDetectedComponent)
/* harmony export */ });
/* harmony import */ var _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/model-car-detect-brand.service */ 79974);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 82426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common */ 47167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90390);







const _c0 = ["img"];
const _c1 = ["file"];
class CarBrandDetectedComponent {
  /*
  * modelPredictCarDirection getter
  */
  get modelPredictCarDirection() {
    return this._modelPredictCarDirection.getValue();
  }
  /*
   * modelPredictCarDirection setter
   */
  set modelPredictCarDirection(value) {
    if (this._modelPredictCarDirection.getValue() !== value) {
      this._modelPredictCarDirection.next(value);
    }
  }
  /*
  * ModelPredictCarBrand getter
  */
  get modelPredictCarBrand() {
    return this._modelPredictCarBrand.getValue();
  }
  /*
   * ModelPredictCarBrand setter
   */
  set modelPredictCarBrand(value) {
    if (this._modelPredictCarBrand.getValue() !== value) {
      this._modelPredictCarBrand.next(value);
    }
  }
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
  * Brand getter
  */
  get brand() {
    return this._brand.getValue();
  }
  /*
   * Brand setter
   */
  set brand(value) {
    if (this._brand.getValue() !== value) {
      this._brand.next(value);
    }
  }
  /**
   * Constructor
   */
  constructor(plataform) {
    this.plataform = plataform;
    this.ret = [];
    /*
     * modelPredictCarDirection
     */
    this._modelPredictCarDirection = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.modelPredictCarDirection$ = this._modelPredictCarDirection.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * ModelPredictCarBrand
     */
    this._modelPredictCarBrand = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.modelPredictCarBrand$ = this._modelPredictCarBrand.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
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
     * Brand
     */
    this._brand = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.brand$ = this._brand.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this._modelPredictCarDirection.next(new _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__.ModelCarBrand('assets/car_position/model.json', _common_common__WEBPACK_IMPORTED_MODULE_1__.CarDirection));
    this._modelPredictCarBrand.next(new _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__.ModelCarBrand('assets/carBrand/model.json', _common_common__WEBPACK_IMPORTED_MODULE_1__.CarsBrands));
  }
  /**
   * On Init
   */
  ngOnInit() {
    this._srcImage.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(img => {
      this.img?.nativeElement.setAttribute('src', img);
      if (this.modelPredictCarDirection && this.modelPredictCarBrand) {
        this.predictSideCar(img);
      }
    })).subscribe();
  }
  /**
   * predictSideCar
   */
  predictSideCar(img64) {
    if (this.modelPredictCarBrand) {
      this.modelPredictCarDirection?.predictByBase64(img64, _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__.ModelType.FromYolo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(retDir => {
        if (retDir[0].name === "Front" && this.modelPredictCarBrand) {
          this.predictCarBrand(img64);
        } else {
          if (retDir[0].name !== 'Could not identify as a car') {
            this._brand.next(`The car is on "${retDir[0].name}" and must be Front`);
          } else {
            this._brand.next(retDir[0].name);
          }
        }
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
        return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
      })).subscribe();
    }
  }
  /**
   * predictCarBrand
   */
  predictCarBrand(img64) {
    if (this.modelPredictCarBrand) {
      this.modelPredictCarBrand.predictByBase64(img64, _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__.ModelType.FromYolo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(retBrand => {
        this._brand.next(retBrand[0].name);
      })).subscribe();
    }
  }
  /**
   * Predict image
   */
  predictImage() {
    if (this.img?.nativeElement) {
      this.modelPredictCarDirection?.predict(this.img?.nativeElement, _common_model_car_detect_brand_service__WEBPACK_IMPORTED_MODULE_0__.ModelType.FromYolo).subscribe(x => {
        this.ret = x;
      });
    }
  }
  /**
   * File upload
   */
  fileUpload(ev) {
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
  /**
   * Dispose
   */
  ngOnDestroy() {
    this._modelPredictCarDirection.complete();
    this._modelPredictCarDirection.unsubscribe();
    this._modelPredictCarBrand.complete();
    this._modelPredictCarBrand.unsubscribe();
    this._srcImage.complete();
    this._srcImage.unsubscribe();
    this._brand.complete();
    this._brand.unsubscribe();
  }
}
CarBrandDetectedComponent.ɵfac = function CarBrandDetectedComponent_Factory(t) {
  return new (t || CarBrandDetectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform));
};
CarBrandDetectedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CarBrandDetectedComponent,
  selectors: [["app-car-brand-detected"]],
  viewQuery: function CarBrandDetectedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 1,
  consts: [["id", "container"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "margin-top", "50px"], ["img", ""], ["hidden", "", "accept", ".jpg,.jpeg", "type", "file", 3, "change"], ["file", ""], [1, "buttons"], [3, "click"]],
  template: function CarBrandDetectedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CarBrandDetectedComponent_Template_input_change_7_listener($event) {
        return ctx.fileUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5)(10, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CarBrandDetectedComponent_Template_ion_button_click_10_listener() {
        return ctx.clickFileUpload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Upload Car Picture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ** ", ctx.brand, " ** ");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule],
  styles: ["ion-menu-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 224px;\n  max-height: 224px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jYXItYnJhbmQtZGV0ZWN0ZWQvY2FyLWJyYW5kLWRldGVjdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW1ne1xuICBtYXgtd2lkdGg6IDIyNHB4O1xuICBtYXgtaGVpZ2h0OiAyMjRweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_main_car-brand-detected_car-brand-detected_component_ts.js.map