"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_image-reconstructor_image-reconstructor_component_ts"],{

/***/ 33021:
/*!***************************************************************************!*\
  !*** ./src/app/main/image-reconstructor/image-reconstructor.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageReconstructorComponent": () => (/* binding */ ImageReconstructorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 31682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 64747);
/* harmony import */ var _common_image_uploder_image_uploder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/image-uploder/image-uploder.component */ 53905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90390);








const _c0 = ["canv"];
class ImageReconstructorComponent {
  /*
  * Dx getter
  */
  get dx() {
    return this._dx.getValue();
  }
  /*
   * Dx setter
   */
  set dx(value) {
    if (this._dx.getValue() !== value) {
      this._dx.next(value);
    }
  }
  /*
  * Dy getter
  */
  get dy() {
    return this._dy.getValue();
  }
  /*
   * Dy setter
   */
  set dy(value) {
    if (this._dy.getValue() !== value) {
      this._dy.next(value);
    }
  }
  /*
  * Dw getter
  */
  get dw() {
    return this._dw.getValue();
  }
  /*
   * Dw setter
   */
  set dw(value) {
    if (this._dw.getValue() !== value) {
      this._dw.next(value);
    }
  }
  /*
  * Dh getter
  */
  get dh() {
    return this._dh.getValue();
  }
  /*
   * Dh setter
   */
  set dh(value) {
    if (this._dh.getValue() !== value) {
      this._dh.next(value);
    }
  }
  /*
  * Img getter
  */
  get img() {
    return this._img.getValue();
  }
  /*
  * Height getter
  */
  get height() {
    return this._height.getValue();
  }
  /*
   * Height setter
   */
  set height(value) {
    if (this._height.getValue() !== value) {
      this._height.next(value);
    }
  }
  /*
  * Width getter
  */
  get width() {
    return this._width.getValue();
  }
  /*
   * Width setter
   */
  set width(value) {
    if (this._width.getValue() !== value) {
      this._width.next(value);
    }
  }
  /*
   * Img setter
   */
  set img(value) {
    if (this._img.getValue() !== value) {
      this._img.next(value);
    }
  }
  constructor() {
    /*
     * Dx
     */
    this._dx = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.dx$ = this._dx.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Dy
     */
    this._dy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.dy$ = this._dy.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Dw
     */
    this._dw = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.dw$ = this._dw.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Dh
     */
    this._dh = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.dh$ = this._dh.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Img
     */
    this._img = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.img$ = this._img.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Height
     */
    this._height = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.height$ = this._height.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Width
     */
    this._width = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.width$ = this._width.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.canv = null;
  }
  ngOnInit() {
    // dx: number, dy: number, dw: number, dh: number
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._img, this._dx, this._dy, this._dw, this._dh, this._height, this._width]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(([img, dx, dy, dw, dh, height, width]) => {
      if (this.canv && img) {
        const canvas = this.canv.nativeElement;
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.addEventListener("load", () => {
          ctx?.clearRect(0, 0, canvas.width, canvas.height);
          // ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx?.drawImage(image, 0, 0, width, height, dx, dy, dw, dh);
        });
        image.src = img.src;
        // 150*300*3 =
      }
    })).subscribe();
  }
  srcImageChange(img) {
    // this._img.next(img)
  }
  changeColor(arg0) {
    const newArr = [];
    let arr = Array.from(arg0);
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > 50 && arr[index] < 100) {
        arr[index] = arr[index] / 255;
      }
      newArr.push(arr[index]);
    }
    return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.tensor4d(arg0, [1, 223, 223, 3]);
  }
}
ImageReconstructorComponent.ɵfac = function ImageReconstructorComponent_Factory(t) {
  return new (t || ImageReconstructorComponent)();
};
ImageReconstructorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ImageReconstructorComponent,
  selectors: [["app-image-reconstructor"]],
  viewQuery: function ImageReconstructorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.canv = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  decls: 21,
  vars: 13,
  consts: [[2, "border", "solid 1px"], ["canv", ""], [3, "multiple"], ["step", "1", "min", "0", "max", "500", "type", "range", 3, "ngModel", "ngModelChange"]],
  template: function ImageReconstructorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "canvas", 0, 1)(2, "app-image-uploder", 2)(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.width = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.height = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.dx = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.dy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.dw = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ImageReconstructorComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.dh = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("width", ctx.width, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.width);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("height", ctx.height, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("dx", ctx.dx, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.dx);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("dy", ctx.dy, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.dy);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("dw", ctx.dw, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.dw);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("dh", ctx.dh, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.dh);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _common_image_uploder_image_uploder_component__WEBPACK_IMPORTED_MODULE_1__.ImageUploderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
  styles: ["@media screen and (max-width: 660px) {\n  img[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n  ion-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9pbWFnZS1yZWNvbnN0cnVjdG9yL2ltYWdlLXJlY29uc3RydWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNDLGNBQUE7RUFDRDtFQUNBO0lBQ0MsV0FBQTtFQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICBpbWd7XG4gICBtYXgtd2lkdGg6IDYwJTtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgd2lkdGg6IDEwMCU7XG4gIH1cbiB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_main_image-reconstructor_image-reconstructor_component_ts.js.map