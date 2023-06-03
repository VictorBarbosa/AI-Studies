"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_custom-classification-model_custom-classification-model_component_ts"],{

/***/ 92687:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/custom-classification-model/custom-classification-model.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomClassificationModelComponent": () => (/* binding */ CustomClassificationModelComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var _common_image_uploder_image_uploder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/image-uploder/image-uploder.component */ 53905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 64747);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90390);









function CustomClassificationModelComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](item_r3.rotate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r3.img.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class CustomClassificationModelComponent {
  /*
  * Images getter
  */
  get images() {
    return this._images.getValue();
  }
  /*
   * Images setter
   */
  set images(value) {
    if (this._images.getValue() !== value) {
      this._images.next(value);
    }
  }
  constructor() {
    /*
     * Images
     */
    this._images = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.images$ = this._images.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
  }
  ngOnInit() {
    this._images.subscribe(img => {
      img?.forEach(x => {
        x.tensorImage = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.browser.fromPixels(x.img).resizeNearestNeighbor([224, 224]).expandDims().div(255.0).toFloat();
      });
    });
  }
  imageLoad(ev) {
    const files = ev;
    const imgs = [];
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      const img = document.createElement('img');
      img.width = 224;
      img.height = 224;
      img.src = URL.createObjectURL(element);
      let rotate = `transform:rotate(${index * 2 + 90}deg)`;
      if (files.length - 1 === index) {
        rotate = `transform:rotate(0deg)`;
      }
      const im = {
        fileName: element.name,
        img: img,
        index,
        rotate: rotate
      };
      imgs.push(im);
    }
    this._images.next(imgs);
  }
  trainModel() {
    const image = this.images?.map(x => x?.tensorImage);
    if (image !== undefined) {
      const model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.sequential();
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.dense({
        units: 3,
        inputShape: [224, 224, 3]
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.conv2d({
        filters: 16,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.maxPooling2d({}));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.conv2d({
        filters: 32,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.maxPooling2d({}));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.conv2d({
        filters: 64,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.maxPooling2d({}));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.dropout({
        rate: 0.2
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.flatten({}));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.dense({
        units: 128,
        activation: 'softmax'
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.layers.dense({
        units: 1
      }));
      model.compile({
        optimizer: 'adam',
        loss: _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__.losses.meanSquaredError,
        metrics: ['accuracy']
      });
      model.summary();
      model.fit(image, image, {
        epochs: 5
      }).then(x => {});
    }
  }
}
CustomClassificationModelComponent.ɵfac = function CustomClassificationModelComponent_Factory(t) {
  return new (t || CustomClassificationModelComponent)();
};
CustomClassificationModelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomClassificationModelComponent,
  selectors: [["app-custom-classification-model"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 5,
  consts: [["id", "container"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["img", ""], [1, "img-container"], [3, "style", "src", 4, "ngFor", "ngForOf"], [1, "buttons", "alingment"], [3, "multiple", "srcImageChange"], [3, "click"], [3, "src"]],
  template: function CustomClassificationModelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomClassificationModelComponent_img_5_Template, 1, 3, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "app-image-uploder", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("srcImageChange", function CustomClassificationModelComponent_Template_app_image_uploder_srcImageChange_7_listener($event) {
        return ctx.imageLoad($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomClassificationModelComponent_Template_ion_button_click_8_listener() {
        return ctx.trainModel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Train");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "json");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 3, ctx.images), "\n");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe, _common_image_uploder_image_uploder_component__WEBPACK_IMPORTED_MODULE_0__.ImageUploderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
  styles: [".img-container[_ngcontent-%COMP%] {\n  display: contents;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 244px;\n  position: absolute;\n  height: 244px;\n}\n\n.alingment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: stretch;\n  justify-content: center;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jdXN0b20tY2xhc3NpZmljYXRpb24tbW9kZWwvY3VzdG9tLWNsYXNzaWZpY2F0aW9uLW1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAyNDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyNDRweDtcbiAgfVxufVxuLmFsaW5nbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_main_custom-classification-model_custom-classification-model_component_ts.js.map