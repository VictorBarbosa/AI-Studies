"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_style-transfer_style-transfer_component_ts"],{

/***/ 1206:
/*!*****************************************************************!*\
  !*** ./src/app/main/style-transfer/style-transfer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleTransferComponent": () => (/* binding */ StyleTransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ 92175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 64747);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common */ 47167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90390);










const _c0 = ["cont"];
const _c1 = ["style"];
const _c2 = ["canv"];
const _c3 = ["filePic"];
const _c4 = ["fileStyle"];
function StyleTransferComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", img_r6.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", img_r6.label, " ");
  }
}
class StyleTransferComponent {
  /*
  * selected getter
  */
  get selected() {
    return this._selected.getValue();
  }
  /*
   * selected setter
   */
  set selected(value) {
    if (this._selected.getValue() !== value) {
      this._selected.next(value);
    }
  }
  constructor() {
    this.images = [{
      img: 'assets/Derkovits_Gyula_Taligás.jpeg',
      label: 'Derkovits_Gyula_Taligás'
    }, {
      img: 'assets/Landscape_with_black_figure.jpeg',
      label: 'Landscape_with_black_figure'
    }, {
      img: 'assets/Large_bonfire.jpg',
      label: 'Large_bonfire'
    }, {
      img: 'assets/Les_Demoiselles_d.jpeg',
      label: 'Les_Demoiselles_d.jpeg'
    }, {
      img: 'assets/Nantes_from_the_Ile_Feydeau.jpeg',
      label: 'Nantes_from_the_Ile_Feydeau'
    }, {
      img: 'assets/Pillars_of_creation.jpeg',
      label: 'Pillars_of_creation.jpeg'
    }, {
      img: 'assets/Still_Life_with_a_Bottle_of_Rum.jpg',
      label: 'Still_Life_with_a_Bottle_of_Rum'
    }, {
      img: 'assets/Still_life.jpeg',
      label: 'Still_life'
    }, {
      img: 'assets/The_Scream.jpeg',
      label: 'The_Scream'
    }, {
      img: 'assets/Van_Gogh.jpeg',
      label: 'Van_Gogh'
    }, {
      img: 'assets/Vassily_Kandinsky.jpeg',
      label: 'Vassily_Kandinsky'
    }, {
      img: 'assets/kanagawa_great_wave.jpeg',
      label: 'kanagawa_great_wave'
    }];
    this.model = null;
    this.cont = null;
    this.style = null;
    this.canv = null;
    this.filePic = null;
    this.fileStyle = null;
    /*
     * selected
     */
    this._selected = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('assets/Derkovits_Gyula_Taligás.jpeg');
    this.selected$ = this._selected.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.loadGraphModel('assets/StyleTranfer/model.json').then(x => {
      this.model = x;
      this.apply();
    });
  }
  ngOnInit() {
    this._selected.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(value => {
      if ('fileUpload' === value) {
        this.fileStyle?.nativeElement.click();
      }
    })).subscribe();
  }
  apply() {
    if (this.model && this.cont?.nativeElement && this.style?.nativeElement) {
      const img1 = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(this.cont.nativeElement, 3).resizeNearestNeighbor([224, 224]).expandDims().div(255.0).toFloat();
      const img2 = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.fromPixels(this.style.nativeElement, 3).resizeNearestNeighbor([224, 224]).expandDims().div(255.0).toFloat();
      const ret = this.model.execute([img1, img2]).dataSync();
      const t4d = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.tensor3d(Array.from(ret), [224, 224, 3]);
      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.browser.toPixels(t4d, this.canv?.nativeElement);
    }
  }
  /**
   * File upload
   */
  fileUploadPicture(ev) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = e => {
      let image = new Image();
      image.src = e.target.result;
      if (this.cont?.nativeElement) {
        this.cont.nativeElement.src = image.src;
      }
    };
    reader.readAsDataURL(file);
  }
  /**
   * clickFileUpload
   */
  clickFileUploadPicute() {
    this.filePic?.nativeElement.click();
  }
  /**
  * File upload
  */
  fileUploadStyle(ev) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = e => {
      let image = new Image();
      image.src = e.target.result;
      if (this.style?.nativeElement) {
        this.style.nativeElement.src = image.src;
      }
    };
    reader.readAsDataURL(file);
  }
  /**
   * clickFileUpload
   */
  clickFileUploadStyle() {
    this.fileStyle?.nativeElement.click();
  }
  ngOnDestroy() {
    this.model?.dispose();
  }
  downloadPicture() {
    if (this.canv?.nativeElement) {
      (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.downloadImage)(this.canv.nativeElement);
    }
  }
}
StyleTransferComponent.ɵfac = function StyleTransferComponent_Factory(t) {
  return new (t || StyleTransferComponent)();
};
StyleTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StyleTransferComponent,
  selectors: [["app-style-transfer"]],
  viewQuery: function StyleTransferComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cont = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.style = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canv = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filePic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fileStyle = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 3,
  consts: [[1, "container"], [1, "image-container"], [1, "image"], ["width", "224", "src", "assets/cont.jpeg", "alt", ""], ["cont", ""], ["hidden", "", "accept", ".jpg,.jpeg", "type", "file", 3, "change"], ["filePic", ""], [3, "click"], ["width", "224", "alt", "", 3, "src"], ["style", ""], ["fileStyle", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "fileUpload"], [1, "container-result"], ["canv", ""], [1, "buttons-alignment"], [3, "value"]],
  template: function StyleTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function StyleTransferComponent_Template_input_change_5_listener($event) {
        return ctx.fileUploadPicture($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StyleTransferComponent_Template_ion_button_click_7_listener() {
        return ctx.clickFileUploadPicute();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Upload File ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 5, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function StyleTransferComponent_Template_input_change_12_listener($event) {
        return ctx.fileUploadStyle($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StyleTransferComponent_Template_select_ngModelChange_14_listener($event) {
        return ctx.selected = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StyleTransferComponent_option_15_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Upload File ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "canvas", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StyleTransferComponent_Template_ion_button_click_22_listener() {
        return ctx.apply();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Apply");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StyleTransferComponent_Template_ion_button_click_24_listener() {
        return ctx.downloadPicture();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Download");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.selected, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px !important;\n  height: 255px;\n  border: 1px solid black;\n}\n.container[_ngcontent-%COMP%]   .container-result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.buttons-alignment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9zdHlsZS10cmFuc2Zlci9zdHlsZS10cmFuc2Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTs7RUFFRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUVOOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjYW52YXMsXG4gIGltZyB7XG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICAuY29udGFpbmVyLXJlc3VsdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbnMtYWxpZ25tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_main_style-transfer_style-transfer_component_ts.js.map