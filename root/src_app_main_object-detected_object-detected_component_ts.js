(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_object-detected_object-detected_component_ts"],{

/***/ 2879:
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow-models/coco-ssd/dist/coco-ssd.es2017.esm.min.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 98013)["default"]);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!function (e, a) {
   true ? a(exports, __webpack_require__(/*! @tensorflow/tfjs-converter */ 39715), __webpack_require__(/*! @tensorflow/tfjs-core */ 45524)) : 0;
}(this, function (e, a, m) {
  "use strict";

  const i = {
    1: {
      name: "/m/01g317",
      id: 1,
      displayName: "person"
    },
    2: {
      name: "/m/0199g",
      id: 2,
      displayName: "bicycle"
    },
    3: {
      name: "/m/0k4j",
      id: 3,
      displayName: "car"
    },
    4: {
      name: "/m/04_sv",
      id: 4,
      displayName: "motorcycle"
    },
    5: {
      name: "/m/05czz6l",
      id: 5,
      displayName: "airplane"
    },
    6: {
      name: "/m/01bjv",
      id: 6,
      displayName: "bus"
    },
    7: {
      name: "/m/07jdr",
      id: 7,
      displayName: "train"
    },
    8: {
      name: "/m/07r04",
      id: 8,
      displayName: "truck"
    },
    9: {
      name: "/m/019jd",
      id: 9,
      displayName: "boat"
    },
    10: {
      name: "/m/015qff",
      id: 10,
      displayName: "traffic light"
    },
    11: {
      name: "/m/01pns0",
      id: 11,
      displayName: "fire hydrant"
    },
    13: {
      name: "/m/02pv19",
      id: 13,
      displayName: "stop sign"
    },
    14: {
      name: "/m/015qbp",
      id: 14,
      displayName: "parking meter"
    },
    15: {
      name: "/m/0cvnqh",
      id: 15,
      displayName: "bench"
    },
    16: {
      name: "/m/015p6",
      id: 16,
      displayName: "bird"
    },
    17: {
      name: "/m/01yrx",
      id: 17,
      displayName: "cat"
    },
    18: {
      name: "/m/0bt9lr",
      id: 18,
      displayName: "dog"
    },
    19: {
      name: "/m/03k3r",
      id: 19,
      displayName: "horse"
    },
    20: {
      name: "/m/07bgp",
      id: 20,
      displayName: "sheep"
    },
    21: {
      name: "/m/01xq0k1",
      id: 21,
      displayName: "cow"
    },
    22: {
      name: "/m/0bwd_0j",
      id: 22,
      displayName: "elephant"
    },
    23: {
      name: "/m/01dws",
      id: 23,
      displayName: "bear"
    },
    24: {
      name: "/m/0898b",
      id: 24,
      displayName: "zebra"
    },
    25: {
      name: "/m/03bk1",
      id: 25,
      displayName: "giraffe"
    },
    27: {
      name: "/m/01940j",
      id: 27,
      displayName: "backpack"
    },
    28: {
      name: "/m/0hnnb",
      id: 28,
      displayName: "umbrella"
    },
    31: {
      name: "/m/080hkjn",
      id: 31,
      displayName: "handbag"
    },
    32: {
      name: "/m/01rkbr",
      id: 32,
      displayName: "tie"
    },
    33: {
      name: "/m/01s55n",
      id: 33,
      displayName: "suitcase"
    },
    34: {
      name: "/m/02wmf",
      id: 34,
      displayName: "frisbee"
    },
    35: {
      name: "/m/071p9",
      id: 35,
      displayName: "skis"
    },
    36: {
      name: "/m/06__v",
      id: 36,
      displayName: "snowboard"
    },
    37: {
      name: "/m/018xm",
      id: 37,
      displayName: "sports ball"
    },
    38: {
      name: "/m/02zt3",
      id: 38,
      displayName: "kite"
    },
    39: {
      name: "/m/03g8mr",
      id: 39,
      displayName: "baseball bat"
    },
    40: {
      name: "/m/03grzl",
      id: 40,
      displayName: "baseball glove"
    },
    41: {
      name: "/m/06_fw",
      id: 41,
      displayName: "skateboard"
    },
    42: {
      name: "/m/019w40",
      id: 42,
      displayName: "surfboard"
    },
    43: {
      name: "/m/0dv9c",
      id: 43,
      displayName: "tennis racket"
    },
    44: {
      name: "/m/04dr76w",
      id: 44,
      displayName: "bottle"
    },
    46: {
      name: "/m/09tvcd",
      id: 46,
      displayName: "wine glass"
    },
    47: {
      name: "/m/08gqpm",
      id: 47,
      displayName: "cup"
    },
    48: {
      name: "/m/0dt3t",
      id: 48,
      displayName: "fork"
    },
    49: {
      name: "/m/04ctx",
      id: 49,
      displayName: "knife"
    },
    50: {
      name: "/m/0cmx8",
      id: 50,
      displayName: "spoon"
    },
    51: {
      name: "/m/04kkgm",
      id: 51,
      displayName: "bowl"
    },
    52: {
      name: "/m/09qck",
      id: 52,
      displayName: "banana"
    },
    53: {
      name: "/m/014j1m",
      id: 53,
      displayName: "apple"
    },
    54: {
      name: "/m/0l515",
      id: 54,
      displayName: "sandwich"
    },
    55: {
      name: "/m/0cyhj_",
      id: 55,
      displayName: "orange"
    },
    56: {
      name: "/m/0hkxq",
      id: 56,
      displayName: "broccoli"
    },
    57: {
      name: "/m/0fj52s",
      id: 57,
      displayName: "carrot"
    },
    58: {
      name: "/m/01b9xk",
      id: 58,
      displayName: "hot dog"
    },
    59: {
      name: "/m/0663v",
      id: 59,
      displayName: "pizza"
    },
    60: {
      name: "/m/0jy4k",
      id: 60,
      displayName: "donut"
    },
    61: {
      name: "/m/0fszt",
      id: 61,
      displayName: "cake"
    },
    62: {
      name: "/m/01mzpv",
      id: 62,
      displayName: "chair"
    },
    63: {
      name: "/m/02crq1",
      id: 63,
      displayName: "couch"
    },
    64: {
      name: "/m/03fp41",
      id: 64,
      displayName: "potted plant"
    },
    65: {
      name: "/m/03ssj5",
      id: 65,
      displayName: "bed"
    },
    67: {
      name: "/m/04bcr3",
      id: 67,
      displayName: "dining table"
    },
    70: {
      name: "/m/09g1w",
      id: 70,
      displayName: "toilet"
    },
    72: {
      name: "/m/07c52",
      id: 72,
      displayName: "tv"
    },
    73: {
      name: "/m/01c648",
      id: 73,
      displayName: "laptop"
    },
    74: {
      name: "/m/020lf",
      id: 74,
      displayName: "mouse"
    },
    75: {
      name: "/m/0qjjc",
      id: 75,
      displayName: "remote"
    },
    76: {
      name: "/m/01m2v",
      id: 76,
      displayName: "keyboard"
    },
    77: {
      name: "/m/050k8",
      id: 77,
      displayName: "cell phone"
    },
    78: {
      name: "/m/0fx9l",
      id: 78,
      displayName: "microwave"
    },
    79: {
      name: "/m/029bxz",
      id: 79,
      displayName: "oven"
    },
    80: {
      name: "/m/01k6s3",
      id: 80,
      displayName: "toaster"
    },
    81: {
      name: "/m/0130jx",
      id: 81,
      displayName: "sink"
    },
    82: {
      name: "/m/040b_t",
      id: 82,
      displayName: "refrigerator"
    },
    84: {
      name: "/m/0bt_c3",
      id: 84,
      displayName: "book"
    },
    85: {
      name: "/m/01x3z",
      id: 85,
      displayName: "clock"
    },
    86: {
      name: "/m/02s195",
      id: 86,
      displayName: "vase"
    },
    87: {
      name: "/m/01lsmm",
      id: 87,
      displayName: "scissors"
    },
    88: {
      name: "/m/0kmg4",
      id: 88,
      displayName: "teddy bear"
    },
    89: {
      name: "/m/03wvsk",
      id: 89,
      displayName: "hair drier"
    },
    90: {
      name: "/m/012xff",
      id: 90,
      displayName: "toothbrush"
    }
  };
  class d {
    constructor(e, a) {
      this.modelPath = a || `https://storage.googleapis.com/tfjs-models/savedmodel/${this.getPrefix(e)}/model.json`;
    }
    getPrefix(e) {
      return "lite_mobilenet_v2" === e ? `ssd${e}` : `ssd_${e}`;
    }
    load() {
      var _this = this;
      return _asyncToGenerator(function* () {
        _this.model = yield a.loadGraphModel(_this.modelPath);
        const e = m.zeros([1, 300, 300, 3], "int32"),
          i = yield _this.model.executeAsync(e);
        yield Promise.all(i.map(e => e.data())), i.map(e => e.dispose()), e.dispose();
      })();
    }
    infer(e, a, i) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        const d = m.tidy(() => (e instanceof m.Tensor || (e = m.browser.fromPixels(e)), m.expandDims(e))),
          s = d.shape[1],
          n = d.shape[2],
          l = yield _this2.model.executeAsync(d),
          t = l[0].dataSync(),
          o = l[1].dataSync();
        d.dispose(), m.dispose(l);
        const [p, r] = _this2.calculateMaxScores(t, l[0].shape[1], l[0].shape[2]),
          c = m.getBackend();
        "webgl" === m.getBackend() && m.setBackend("cpu");
        const y = m.tidy(() => {
            const e = m.tensor2d(o, [l[1].shape[1], l[1].shape[3]]);
            return m.image.nonMaxSuppression(e, p, a, i, i);
          }),
          N = y.dataSync();
        return y.dispose(), c !== m.getBackend() && m.setBackend(c), _this2.buildDetectedObjects(n, s, o, p, N, r);
      })();
    }
    buildDetectedObjects(e, a, m, d, s, n) {
      const l = s.length,
        t = [];
      for (let o = 0; o < l; o++) {
        const l = [];
        for (let e = 0; e < 4; e++) l[e] = m[4 * s[o] + e];
        const p = l[0] * a,
          r = l[1] * e,
          c = l[2] * a,
          y = l[3] * e;
        l[0] = r, l[1] = p, l[2] = y - r, l[3] = c - p, t.push({
          bbox: l,
          class: i[n[s[o]] + 1].displayName,
          score: d[s[o]]
        });
      }
      return t;
    }
    calculateMaxScores(e, a, m) {
      const i = [],
        d = [];
      for (let s = 0; s < a; s++) {
        let a = Number.MIN_VALUE,
          n = -1;
        for (let i = 0; i < m; i++) e[s * m + i] > a && (a = e[s * m + i], n = i);
        i[s] = a, d[s] = n;
      }
      return [i, d];
    }
    detect(e, a = 20, m = .5) {
      var _this3 = this;
      return _asyncToGenerator(function* () {
        return _this3.infer(e, a, m);
      })();
    }
    dispose() {
      null != this.model && this.model.dispose();
    }
  }
  e.ObjectDetection = d, e.load = /*#__PURE__*/_asyncToGenerator(function* (e = {}) {
    if (null == m) throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");
    const a = e.base || "lite_mobilenet_v2",
      i = e.modelUrl;
    if (-1 === ["mobilenet_v1", "mobilenet_v2", "lite_mobilenet_v2"].indexOf(a)) throw new Error(`ObjectDetection constructed with invalid base model ${a}. Valid names are 'mobilenet_v1', 'mobilenet_v2' and 'lite_mobilenet_v2'.`);
    const s = new d(a, i);
    return yield s.load(), s;
  }), e.version = "2.2.2", Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 62031:
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/data/compiled_api.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataType": () => (/* binding */ DataType),
/* harmony export */   "SaverDef": () => (/* binding */ SaverDef)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
/** DataType enum. */
var DataType;
(function (DataType) {
  // Not a legal value for DataType.  Used to indicate a DataType field
  // has not been set.
  DataType[DataType["DT_INVALID"] = 0] = "DT_INVALID";
  // Data types that all computation devices are expected to be
  // capable to support.
  DataType[DataType["DT_FLOAT"] = 1] = "DT_FLOAT";
  DataType[DataType["DT_DOUBLE"] = 2] = "DT_DOUBLE";
  DataType[DataType["DT_INT32"] = 3] = "DT_INT32";
  DataType[DataType["DT_UINT8"] = 4] = "DT_UINT8";
  DataType[DataType["DT_INT16"] = 5] = "DT_INT16";
  DataType[DataType["DT_INT8"] = 6] = "DT_INT8";
  DataType[DataType["DT_STRING"] = 7] = "DT_STRING";
  DataType[DataType["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
  DataType[DataType["DT_INT64"] = 9] = "DT_INT64";
  DataType[DataType["DT_BOOL"] = 10] = "DT_BOOL";
  DataType[DataType["DT_QINT8"] = 11] = "DT_QINT8";
  DataType[DataType["DT_QUINT8"] = 12] = "DT_QUINT8";
  DataType[DataType["DT_QINT32"] = 13] = "DT_QINT32";
  DataType[DataType["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
  DataType[DataType["DT_QINT16"] = 15] = "DT_QINT16";
  DataType[DataType["DT_QUINT16"] = 16] = "DT_QUINT16";
  DataType[DataType["DT_UINT16"] = 17] = "DT_UINT16";
  DataType[DataType["DT_COMPLEX128"] = 18] = "DT_COMPLEX128";
  DataType[DataType["DT_HALF"] = 19] = "DT_HALF";
  DataType[DataType["DT_RESOURCE"] = 20] = "DT_RESOURCE";
  DataType[DataType["DT_VARIANT"] = 21] = "DT_VARIANT";
  DataType[DataType["DT_UINT32"] = 22] = "DT_UINT32";
  DataType[DataType["DT_UINT64"] = 23] = "DT_UINT64";
  // Do not use!  These are only for parameters.  Every enum above
  // should have a corresponding value below (verified by types_test).
  DataType[DataType["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
  DataType[DataType["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
  DataType[DataType["DT_INT32_REF"] = 103] = "DT_INT32_REF";
  DataType[DataType["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
  DataType[DataType["DT_INT16_REF"] = 105] = "DT_INT16_REF";
  DataType[DataType["DT_INT8_REF"] = 106] = "DT_INT8_REF";
  DataType[DataType["DT_STRING_REF"] = 107] = "DT_STRING_REF";
  DataType[DataType["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
  DataType[DataType["DT_INT64_REF"] = 109] = "DT_INT64_REF";
  DataType[DataType["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
  DataType[DataType["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
  DataType[DataType["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
  DataType[DataType["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
  DataType[DataType["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
  DataType[DataType["DT_QINT16_REF"] = 115] = "DT_QINT16_REF";
  DataType[DataType["DT_QUINT16_REF"] = 116] = "DT_QUINT16_REF";
  DataType[DataType["DT_UINT16_REF"] = 117] = "DT_UINT16_REF";
  DataType[DataType["DT_COMPLEX128_REF"] = 118] = "DT_COMPLEX128_REF";
  DataType[DataType["DT_HALF_REF"] = 119] = "DT_HALF_REF";
  DataType[DataType["DT_RESOURCE_REF"] = 120] = "DT_RESOURCE_REF";
  DataType[DataType["DT_VARIANT_REF"] = 121] = "DT_VARIANT_REF";
  DataType[DataType["DT_UINT32_REF"] = 122] = "DT_UINT32_REF";
  DataType[DataType["DT_UINT64_REF"] = 123] = "DT_UINT64_REF";
})(DataType || (DataType = {}));
var SaverDef;
(function (SaverDef) {
  /** CheckpointFormatVersion enum. */
  let CheckpointFormatVersion;
  (function (CheckpointFormatVersion) {
    CheckpointFormatVersion[CheckpointFormatVersion["LEGACY"] = 0] = "LEGACY";
    CheckpointFormatVersion[CheckpointFormatVersion["V1"] = 1] = "V1";
    CheckpointFormatVersion[CheckpointFormatVersion["V2"] = 2] = "V2";
  })(CheckpointFormatVersion = SaverDef.CheckpointFormatVersion || (SaverDef.CheckpointFormatVersion = {}));
})(SaverDef || (SaverDef = {}));

/***/ }),

/***/ 43700:
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutionContext": () => (/* binding */ ExecutionContext)
/* harmony export */ });
/**
 * ExecutionContext captures the runtime environment of the node. It keeps
 * track of the current frame and iteration for the control flow ops.
 *
 * For example, typical Dynamic RNN model may contain loops, for which
 * TensorFlow will generate graphs with Enter/Exit nodes to control the
 * current execution frame, and NextIteration Nodes for iteration id increment.
 * For model with branch logic, TensorFLow will generate Switch/Merge ops.
 */
class ExecutionContext {
  constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}) {
    this.weightMap = weightMap;
    this.tensorArrayMap = tensorArrayMap;
    this.tensorListMap = tensorListMap;
    this.functionMap = functionMap;
    this.rootContext = {
      id: 0,
      frameName: '',
      iterationId: 0
    };
    this.contexts = [this.rootContext];
    this.lastId = 0;
    this.generateCurrentContextIds();
  }
  newFrame(id, frameName) {
    return {
      id,
      frameName,
      iterationId: 0
    };
  }
  /**
   * Set the current context
   * @param contexts: ExecutionContextInfo[] the current path of execution
   * frames
   */
  set currentContext(contexts) {
    if (this.contexts !== contexts) {
      this.contexts = contexts;
      this.generateCurrentContextIds();
    }
  }
  get currentContext() {
    return this.contexts;
  }
  /**
   * Returns the current context in string format.
   */
  get currentContextId() {
    return this._currentContextIds[0];
  }
  /**
   * Returns the current context and all parent contexts in string format.
   * This allow access to the nodes in the current and parent frames.
   */
  get currentContextIds() {
    return this._currentContextIds;
  }
  generateCurrentContextIds() {
    const names = [];
    for (let i = 0; i < this.contexts.length - 1; i++) {
      const contexts = this.contexts.slice(0, this.contexts.length - i);
      names.push(this.contextIdforContexts(contexts));
    }
    names.push('');
    this._currentContextIds = names;
  }
  contextIdforContexts(contexts) {
    return contexts ? contexts.map(context => context.id === 0 && context.iterationId === 0 ? '' : `${context.frameName}-${context.iterationId}`).join('/') : '';
  }
  /**
   * Enter a new frame, a new context is pushed on the current context list.
   * @param frameId new frame id
   */
  enterFrame(frameId) {
    if (this.contexts) {
      this.lastId++;
      this.contexts = this.contexts.slice();
      this.contexts.push(this.newFrame(this.lastId, frameId));
      this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
    }
  }
  /**
   * Exit the current frame, the last context is removed from the current
   * context list.
   */
  exitFrame() {
    if (this.contexts && this.contexts.length > 1) {
      this.contexts = this.contexts.slice();
      this.contexts.splice(-1);
      this.currentContextIds.shift();
    } else {
      throw new Error('Cannot exit frame, the context is empty');
    }
  }
  /**
   * Enter the next iteration of a loop, the iteration id of last context is
   * increased.
   */
  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice();
      this.lastId++;
      const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
      context.iterationId += 1;
      context.id = this.lastId;
      this.contexts.splice(-1, 1, context);
      this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else {
      throw new Error('Cannot increase frame iteration, the context is empty');
    }
  }
  getWeight(name) {
    return this.weightMap[name];
  }
  addTensorArray(tensorArray) {
    this.tensorArrayMap[tensorArray.id] = tensorArray;
  }
  getTensorArray(id) {
    return this.tensorArrayMap[id];
  }
  addTensorList(tensorList) {
    this.tensorListMap[tensorList.id] = tensorList;
  }
  getTensorList(id) {
    return this.tensorListMap[id];
  }
  dispose(keepIds) {
    for (const key in this.tensorArrayMap) {
      this.tensorArrayMap[key].clearAndClose(keepIds);
    }
    for (const key in this.tensorListMap) {
      this.tensorListMap[key].clearAndClose(keepIds);
    }
  }
}

/***/ }),

/***/ 17886:
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphExecutor": () => (/* binding */ GraphExecutor)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations/executors/utils */ 25703);
/* harmony import */ var _operations_operation_executor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations/operation_executor */ 25794);
/* harmony import */ var _execution_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution_context */ 43700);
/* harmony import */ var _model_analysis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model_analysis */ 30090);

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





class GraphExecutor {
  /**
   *
   * @param graph Graph the model or function graph to be executed.
   * @param parent When building function exector you need to set the parent
   * executor. Since the weights and function executor maps are set at parant
   * level, that function executor can access the function maps and weight maps
   * through the parent.
   */
  constructor(graph, parent) {
    this.graph = graph;
    this.parent = parent;
    this.compiledMap = new Map();
    this._weightMap = {};
    this.SEPERATOR = ',';
    this._functions = {};
    this._functionExecutorMap = {};
    this.intermediateTensors = {};
    this.keepTensorForDebug = false;
    this._outputs = graph.outputs;
    this._inputs = graph.inputs;
    this._initNodes = graph.initNodes;
    this._signature = graph.signature;
    this._functions = graph.functions;
    // create sub-graph executors
    if (graph.functions != null) {
      Object.keys(graph.functions).forEach(name => {
        this._functionExecutorMap[name] = new GraphExecutor(graph.functions[name], this);
      });
    }
  }
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }
  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }
  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }
  set weightMap(weightMap) {
    const weightIds = Object.keys(weightMap).map(key => weightMap[key].map(tensor => tensor.id));
    this._weightIds = [].concat(...weightIds);
    this._weightMap = weightMap;
  }
  /**
   * Set `ResourceManager` shared by executors of a model.
   * @param resourceManager: `ResourceManager` of the `GraphModel`.
   */
  set resourceManager(resourceManager) {
    this._resourceManager = resourceManager;
  }
  get inputs() {
    return this._inputs.map(node => {
      return {
        name: node.name,
        shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
        dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
      };
    });
  }
  get outputs() {
    return this._outputs.map(node => {
      return {
        name: node.name,
        shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
        dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
      };
    });
  }
  get inputNodes() {
    return this._inputs.map(node => node.signatureKey || node.name);
  }
  get outputNodes() {
    return this._outputs.map(node => {
      const name = node.signatureKey || node.name;
      return node.defaultOutput ? `${name}:${node.defaultOutput}` : name;
    });
  }
  get functions() {
    return Object.keys(this._functions).reduce((map, key) => {
      map[key] = this._functions[key].signature;
      return map;
    }, {});
  }
  getCompilationKey(inputs, outputs) {
    const sortedInputs = inputs.map(node => node.name).sort();
    const sortedOutputs = outputs.map(node => node.name).sort();
    return sortedInputs.join(this.SEPERATOR) + '--' + sortedOutputs.join(this.SEPERATOR);
  }
  /**
   * Compiles the inference graph and returns the minimal set of nodes that are
   * required for execution, in the correct execution order.
   */
  compile(inputs, outputs) {
    const executionInfo = (0,_model_analysis__WEBPACK_IMPORTED_MODULE_5__.getExecutionSubgraph)(inputs, outputs, this.weightMap, this._initNodes);
    const {
      missingInputs,
      dynamicNode,
      syncInputs
    } = executionInfo;
    if (dynamicNode != null) {
      throw new Error(`This execution contains the node '${dynamicNode.name}', which has ` + `the dynamic op '${dynamicNode.op}'. Please use ` + `model.executeAsync() instead. Alternatively, to avoid the ` + `dynamic ops, specify the inputs [${syncInputs}]`);
    }
    if (missingInputs.length > 0) {
      const outNames = outputs.map(n => n.name);
      const inNames = Object.keys(inputs);
      throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs ` + `[${inNames}]. Missing the following inputs: [${missingInputs}]`);
    }
    return (0,_model_analysis__WEBPACK_IMPORTED_MODULE_5__.getNodesInTopologicalOrder)(this.graph, this.weightMap, executionInfo);
  }
  /**
   * Executes the inference for given input tensors.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model, if
   * no outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   */
  execute(inputs, outputs) {
    inputs = this.mapInputs(inputs);
    const names = Object.keys(inputs).sort();
    this.checkInputs(inputs);
    this.checkInputShapeAndType(inputs);
    outputs = this.mapOutputs(outputs);
    this.checkOutputs(outputs);
    const inputNodes = names.map(name => this.graph.nodes[(0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name)[0]]);
    const outputNodeNames = outputs.map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name)[0]);
    let outputNodes = outputNodeNames.map(name => this.graph.nodes[name]);
    this.resetIntermediateTensors();
    // If no outputs are specified, then use the default outputs of the model.
    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }
    const compilationKey = this.getCompilationKey(inputNodes, outputNodes);
    // Do nothing if the compiled graph cache contains the input.
    let orderedNodes = this.compiledMap.get(compilationKey);
    if (orderedNodes == null) {
      orderedNodes = this.compile(inputs, outputNodes);
      this.compiledMap.set(compilationKey, orderedNodes);
    }
    const tensorArrayMap = {};
    const tensorListMap = {};
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.tidy)(() => {
      const context = new _execution_context__WEBPACK_IMPORTED_MODULE_4__.ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
      const tensorsMap = Object.assign({}, this.weightMap);
      Object.keys(inputs).forEach(name => {
        const [nodeName, index] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;
      });
      const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
      const intermediateTensorConsumerCount = {};
      for (let i = 0; i < orderedNodes.length; i++) {
        const node = orderedNodes[i];
        if (!tensorsMap[node.name]) {
          const tensors = (0,_operations_operation_executor__WEBPACK_IMPORTED_MODULE_3__.executeOp)(node, tensorsMap, context, this._resourceManager);
          if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.isPromise(tensors)) {
            throw new Error(`The execution of the op '${node.op}' returned a promise. ` + `Please use model.executeAsync() instead.`);
          }
          tensorsMap[node.name] = tensors;
          this.checkTensorForDisposal(node.name, node, tensorsMap, context, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount);
        }
      }
      // dispose the context for the root executor
      if (this.parent == null) {
        context.dispose(tensorsToKeep);
      }
      return outputs.map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensor)(name, tensorsMap, context));
    });
  }
  getFrozenTensorIds(tensorMap) {
    const ids = [].concat.apply([], Object.keys(tensorMap).map(key => tensorMap[key]).map(tensors => tensors.map(tensor => tensor.id)));
    return new Set(ids);
  }
  checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
    // Skip output nodes and any control flow nodes, since its dependency is
    // tricky to track correctly.
    if (node.category === 'control' || outputNames.indexOf(nodeName) !== -1) {
      return;
    }
    tensorMap[nodeName].forEach(tensor => {
      if (tensor != null) {
        intermediateTensorConsumerCount[tensor.id] = (intermediateTensorConsumerCount[tensor.id] || 0) + node.children.length;
      }
    });
    node.inputs.forEach(input => {
      // Skip any control flow nodes, since its dependency is tricky to track
      // correctly.
      if (input.category !== 'control') {
        const tensors = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensorsForCurrentContenxt)(input.name, tensorMap, context);
        if (tensors != null) {
          tensors.forEach(tensor => {
            if (tensor && !tensor.kept && !tensorsToKeep.has(tensor.id)) {
              const count = intermediateTensorConsumerCount[tensor.id];
              if (count === 1) {
                if (!this.keepTensorForDebug) {
                  tensor.dispose();
                } else {
                  const [nodeName, index] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getNodeNameAndIndex)(node.name, context);
                  if (this.intermediateTensors[nodeName]) {
                    this.intermediateTensors[nodeName][index] = tensor;
                  } else {
                    this.intermediateTensors[nodeName] = [];
                    this.intermediateTensors[nodeName][index] = tensor;
                  }
                }
                delete intermediateTensorConsumerCount[tensor.id];
              } else if (count != null) {
                // only intermediate nodes has count set, inputs and weights are
                // not.
                intermediateTensorConsumerCount[tensor.id]--;
              }
            }
          });
        }
      }
    });
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs output node name from the Tensorflow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   */
  executeAsync(inputs, outputs) {
    var _this = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._executeAsync(inputs, outputs);
    })();
  }
  disposeIntermediateTensors() {
    if (!this.intermediateTensors) {
      return;
    }
    Object.keys(this.intermediateTensors).forEach(key => this.intermediateTensors[key].forEach(tensor => tensor.dispose()));
    this.disposeTensorsMap();
  }
  disposeTensorsMap() {
    if (!this.tensorsMap) {
      return;
    }
    Object.keys(this.tensorsMap).forEach(key => {
      const tensorArray = this.tensorsMap[key];
      tensorArray.forEach(tensor => {
        if (tensor && !tensor.kept && !tensor.isDisposed && !this.keepIds.has(tensor.id)) {
          tensor.dispose();
        }
      });
    });
  }
  getIntermediateTensors() {
    return this.tensorsMap;
  }
  resetIntermediateTensors() {
    for (const key in this.intermediateTensors) {
      this.intermediateTensors[key].forEach(tensor => tensor.dispose());
      delete this.intermediateTensors[key];
    }
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   * @param isFunctionExecution Optional. Flag for executing a function.
   * @param tensorArrayMap Optional, global TensorArray map by id. Used for
   * function execution.
   * @param tensorArrayMap Optinal global TensorList map by id. Used for
   * function execution.
   */
  _executeAsync(inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
    var _this2 = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!isFunctionExecution) {
        inputs = _this2.mapInputs(inputs);
        _this2.checkInputs(inputs);
        _this2.checkInputShapeAndType(inputs);
        outputs = _this2.mapOutputs(outputs);
        _this2.checkOutputs(outputs);
      }
      // For model debug.
      try {
        _this2.keepTensorForDebug = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.env)().getBool('KEEP_INTERMEDIATE_TENSORS');
      } catch (e) {
        console.warn(e.message);
      }
      _this2.resetIntermediateTensors();
      const context = new _execution_context__WEBPACK_IMPORTED_MODULE_4__.ExecutionContext(_this2.weightMap, tensorArrayMap, tensorListMap, _this2.functionExecutorMap);
      // Graph with control flow op requires runtime evaluation of the execution
      // order, while without control flow the execution order is pre-determined
      // in the compile method.
      _this2.tensorsMap = yield _this2.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
      const results = outputs.map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensor)(name, _this2.tensorsMap, context));
      // dispose all the intermediate tensors
      const outputIds = results.map(t => t.id);
      const inputIds = Object.keys(inputs).map(name => inputs[name].id);
      _this2.keepIds = new Set([...outputIds, ...inputIds, ..._this2.weightIds]);
      if (!_this2.keepTensorForDebug) {
        _this2.disposeTensorsMap();
      }
      // dispose the context for the root executor
      if (_this2.parent == null) {
        context.dispose(_this2.keepIds);
      }
      return results;
    })();
  }
  executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
    var _this3 = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mappedInputs = inputs.reduce((map, tensor, index) => {
        map[_this3.inputs[index].name] = tensor;
        return map;
      }, {});
      return _this3._executeAsync(mappedInputs, _this3.outputNodes, true, tensorArrayMap, tensorListMap);
    })();
  }
  /**
   * When there are control flow nodes in the graph, the graph execution use
   * ExecutionContext to keep track of the frames and loop iterators.
   * @param inputs placeholder tensors for the graph.
   * @param context the execution context object for current execution.
   * @param outputNames Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   * @param isFunctionExecution Flag for executing a function.
   */
  executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
    var _this4 = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const names = Object.keys(inputs);
      const inputNodes = names.map(name => _this4.graph.nodes[(0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name)[0]]);
      const outputNodeNames = outputNames.map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name)[0]);
      let outputNodes = outputNodeNames.map(name => _this4.graph.nodes[name]);
      // If no outputs are specified, then use the default outputs of the model.
      if (outputNodes.length === 0) {
        outputNodes = _this4._outputs;
      }
      const {
        usedNodes,
        missingInputs,
        dynamicNode,
        syncInputs
      } = (0,_model_analysis__WEBPACK_IMPORTED_MODULE_5__.getExecutionSubgraph)(inputs, outputNodes, _this4.weightMap, _this4._initNodes);
      // First nodes to execute include inputNodes, weights, and initNodes.
      const stack = [...inputNodes, ..._this4.graph.weights, ...(_this4._initNodes || [])].map(node => {
        return {
          node,
          contexts: context.currentContext
        };
      });
      const tensorsMap = Object.assign({}, _this4.weightMap);
      Object.keys(inputs).forEach(name => {
        const [nodeName, index] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;
      });
      const intermediateTensorConsumerCount = {};
      const tensorsToKeep = _this4.getFrozenTensorIds(tensorsMap);
      const added = {};
      while (stack.length > 0) {
        const promises = _this4.processStack(inputNodes, stack, context, tensorsMap, added, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount, usedNodes);
        yield Promise.all(promises);
      }
      if (dynamicNode == null && !isFunctionExecution) {
        console.warn(`This model execution did not contain any nodes with control flow ` + `or dynamic output shapes. You can use model.execute() instead.`);
      }
      const missingOutputs = outputNodes.filter(node => !(0,_model_analysis__WEBPACK_IMPORTED_MODULE_5__.isControlFlow)(node) && !(0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensor)(node.name, tensorsMap, context)).map(node => node.name);
      if (missingOutputs.length > 0) {
        let alternativeMsg = '';
        if (dynamicNode != null) {
          alternativeMsg = `Alternatively, to avoid the dynamic ops, use model.execute() ` + `and specify the inputs [${syncInputs}]`;
        }
        throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided ` + `inputs [${names}]. Consider providing the following inputs: ` + `[${missingInputs}]. ${alternativeMsg}`);
      }
      return tensorsMap;
    })();
  }
  processStack(inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount, usedNodes) {
    const promises = [];
    while (stack.length > 0) {
      const item = stack.pop();
      context.currentContext = item.contexts;
      let nodeName = '';
      // The tensor of the Enter op with isConstant set should be set
      // in the parent scope, so it will be available as constant for the
      // whole loop.
      if (item.node.op === 'Enter' && (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('isConstant', item.node, tensorMap, context)) {
        [nodeName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getNodeNameAndIndex)(item.node.name, context);
      }
      // only process nodes that are not in the tensorMap yet, this include
      // inputNodes and internal initNodes.
      if (tensorMap[item.node.name] == null) {
        const tensors = (0,_operations_operation_executor__WEBPACK_IMPORTED_MODULE_3__.executeOp)(item.node, tensorMap, context, this._resourceManager);
        if (!nodeName) {
          [nodeName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getNodeNameAndIndex)(item.node.name, context);
        }
        const currentContext = context.currentContext;
        if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.isPromise(tensors)) {
          promises.push(tensors.then(t => {
            tensorMap[nodeName] = t;
            context.currentContext = currentContext;
            this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
            this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
            return t;
          }));
        } else {
          tensorMap[nodeName] = tensors;
          this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
          this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
        }
      } else {
        this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
      }
    }
    return promises;
  }
  processChildNodes(node, stack, context, tensorMap, added, usedNodes) {
    node.children.forEach(childNode => {
      const [nodeName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getNodeNameAndIndex)(childNode.name, context);
      if (added[nodeName] || !usedNodes.has(childNode.name)) {
        return;
      }
      // Merge op can be pushed if any of its inputs has value.
      if (childNode.op === 'Merge') {
        if (childNode.inputNames.some(name => {
          return !!(0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensor)(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack.push({
            contexts: context.currentContext,
            node: childNode
          });
        }
      } else
        // Otherwise all inputs must to have value.
        if (childNode.inputNames.every(name => {
          return !!(0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.getTensor)(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack.push({
            contexts: context.currentContext,
            node: childNode
          });
        }
    });
  }
  /**
   * Releases the memory used by the weight tensors.
   */
  dispose() {
    Object.keys(this.weightMap).forEach(key => this.weightMap[key].forEach(tensor => tensor.dispose()));
  }
  checkInputShapeAndType(inputs) {
    Object.keys(inputs).forEach(name => {
      const input = inputs[name];
      const [nodeName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name);
      const node = this.graph.nodes[nodeName];
      if (node.attrParams['shape'] && node.attrParams['shape'].value) {
        const shape = node.attrParams['shape'].value;
        const match = shape.length === input.shape.length && input.shape.every((dim, index) => shape[index] === -1 || shape[index] === dim);
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.assert(match, () => `The shape of dict['${node.name}'] provided in ` + `model.execute(dict) must be [${shape}], but was ` + `[${input.shape}]`);
      }
      if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.assert(input.dtype === node.attrParams['dtype'].value, () => `The dtype of dict['${node.name}'] provided in ` + `model.execute(dict) must be ` + `${node.attrParams['dtype'].value}, but was ${input.dtype}`);
      }
    });
  }
  mapInputs(inputs) {
    const result = {};
    for (const inputName in inputs) {
      if (this._signature != null && this._signature.inputs != null && this._signature.inputs[inputName] != null) {
        const tensor = this._signature.inputs[inputName];
        result[tensor.name] = inputs[inputName];
      } else {
        result[inputName] = inputs[inputName];
      }
    }
    return result;
  }
  checkInputs(inputs) {
    const notInGraph = Object.keys(inputs).filter(name => {
      const [nodeName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name);
      return this.graph.nodes[nodeName] == null;
    });
    if (notInGraph.length > 0) {
      throw new Error(`The dict provided in model.execute(dict) has ` + `keys: [${notInGraph}] that are not part of graph`);
    }
  }
  mapOutputs(outputs) {
    return outputs.map(name => {
      if (this._signature != null && this._signature.outputs != null && this._signature.outputs[name] != null) {
        const tensor = this._signature.outputs[name];
        return tensor.name;
      }
      return name;
    }, {});
  }
  checkOutputs(outputs) {
    outputs.forEach(name => {
      const [normalizedName] = (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_2__.parseNodeName)(name);
      if (!this.graph.nodes[normalizedName]) {
        throw new Error(`The output '${name}' is not found in the graph`);
      }
    });
  }
}

/***/ }),

/***/ 99209:
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MODEL_NAME": () => (/* binding */ DEFAULT_MODEL_NAME),
/* harmony export */   "GraphModel": () => (/* binding */ GraphModel),
/* harmony export */   "TFHUB_SEARCH_PARAM": () => (/* binding */ TFHUB_SEARCH_PARAM),
/* harmony export */   "loadGraphModel": () => (/* binding */ loadGraphModel),
/* harmony export */   "loadGraphModelSync": () => (/* binding */ loadGraphModelSync)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _operations_operation_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations/operation_mapper */ 73299);
/* harmony import */ var _graph_executor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph_executor */ 17886);
/* harmony import */ var _resource_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource_manager */ 73845);

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




const TFHUB_SEARCH_PARAM = '?tfjs-format=file';
const DEFAULT_MODEL_NAME = 'model.json';
/**
 * A `tf.GraphModel` is a directed, acyclic graph built from a
 * SavedModel GraphDef and allows inference execution.
 *
 * A `tf.GraphModel` can only be created by loading from a model converted from
 * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
 * the command line converter tool and loaded via `tf.loadGraphModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
class GraphModel {
  /**
   * @param modelUrl url for the model, or an `io.IOHandler`.
   * @param weightManifestUrl url for the weight file generated by
   * scripts/convert.py script.
   * @param requestOption options for Request, which allows to send credentials
   * and custom headers.
   * @param onProgress Optional, progress callback function, fired periodically
   * before the load is completed.
   */
  constructor(modelUrl, loadOptions = {}, tfio = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io) {
    this.modelUrl = modelUrl;
    this.loadOptions = loadOptions;
    this.version = 'n/a';
    this.io = tfio;
    if (loadOptions == null) {
      this.loadOptions = {};
    }
    this.resourceManager = new _resource_manager__WEBPACK_IMPORTED_MODULE_4__.ResourceManager();
  }
  // Returns the version information for the tensorflow model GraphDef.
  get modelVersion() {
    return this.version;
  }
  get inputNodes() {
    return this.executor.inputNodes;
  }
  get outputNodes() {
    return this.executor.outputNodes;
  }
  get inputs() {
    return this.executor.inputs;
  }
  get outputs() {
    return this.executor.outputs;
  }
  get weights() {
    return this.executor.weightMap;
  }
  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }
  get modelSignature() {
    return this.signature;
  }
  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  findIOHandler() {
    const path = this.modelUrl;
    if (path.load != null) {
      // Path is an IO Handler.
      this.handler = path;
    } else if (this.loadOptions.requestInit != null) {
      this.handler = this.io.browserHTTPRequest(path, this.loadOptions);
    } else {
      const handlers = this.io.getLoadHandlers(path, this.loadOptions);
      if (handlers.length === 0) {
        // For backward compatibility: if no load handler can be found,
        // assume it is a relative http path.
        handlers.push(this.io.browserHTTPRequest(path, this.loadOptions));
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) load handlers for ` + `URL '${[path]}'`);
      }
      this.handler = handlers[0];
    }
  }
  /**
   * Loads the model and weight files, construct the in memory weight map and
   * compile the inference graph.
   */
  load() {
    this.findIOHandler();
    if (this.handler.load == null) {
      throw new Error('Cannot proceed with model loading because the IOHandler provided ' + 'does not have the `load` method implemented.');
    }
    const loadResult = this.handler.load();
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.isPromise(loadResult)) {
      return loadResult.then(artifacts => this.loadSync(artifacts));
    }
    return this.loadSync(loadResult);
  }
  /**
   * Synchronously construct the in memory weight map and
   * compile the inference graph. Also initialize hashtable if any.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  loadSync(artifacts) {
    this.artifacts = artifacts;
    const graph = this.artifacts.modelTopology;
    let signature = this.artifacts.signature;
    if (this.artifacts.userDefinedMetadata != null) {
      const metadata = this.artifacts.userDefinedMetadata;
      if (metadata.signature != null) {
        signature = metadata.signature;
      }
      if (metadata.structuredOutputKeys != null) {
        this.structuredOutputKeys = metadata.structuredOutputKeys;
      }
    }
    this.signature = signature;
    this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
    const weightMap = this.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
    this.executor = new _graph_executor__WEBPACK_IMPORTED_MODULE_3__.GraphExecutor(_operations_operation_mapper__WEBPACK_IMPORTED_MODULE_2__.OperationMapper.Instance.transformGraph(graph, this.signature));
    this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
    // Attach a model-level resourceManager to each executor to share resources,
    // such as `HashTable`.
    this.executor.resourceManager = this.resourceManager;
    if (artifacts.modelInitializer != null && artifacts.modelInitializer.node != null) {
      const initializer = _operations_operation_mapper__WEBPACK_IMPORTED_MODULE_2__.OperationMapper.Instance.transformGraph(artifacts.modelInitializer);
      this.initializer = new _graph_executor__WEBPACK_IMPORTED_MODULE_3__.GraphExecutor(initializer);
      this.initializer.weightMap = this.executor.weightMap;
      // Attach a model-level resourceManager to the initializer, the
      // hashTables created from when executing the initializer will be stored
      // in the resourceManager.
      this.initializer.resourceManager = this.resourceManager;
      this.initializer.executeAsync({}, []);
    }
    return true;
  }
  /**
   * Save the configuration and/or weights of the GraphModel.
   *
   * An `IOHandler` is an object that has a `save` method of the proper
   * signature defined. The `save` method manages the storing or
   * transmission of serialized data ("artifacts") that represent the
   * model's topology and weights onto or via a specific medium, such as
   * file downloads, local storage, IndexedDB in the web browser and HTTP
   * requests to a server. TensorFlow.js provides `IOHandler`
   * implementations for a number of frequently used saving mediums, such as
   * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
   * for more details.
   *
   * This method also allows you to refer to certain types of `IOHandler`s
   * as URL-like string shortcuts, such as 'localstorage://' and
   * 'indexeddb://'.
   *
   * Example 1: Save `model`'s topology and weights to browser [local
   * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
   * then load it back.
   *
   * ```js
   * const modelUrl =
   *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
   * const model = await tf.loadGraphModel(modelUrl);
   * const zeros = tf.zeros([1, 224, 224, 3]);
   * model.predict(zeros).print();
   *
   * const saveResults = await model.save('localstorage://my-model-1');
   *
   * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
   * console.log('Prediction from loaded model:');
   * model.predict(zeros).print();
   * ```
   *
   * @param handlerOrURL An instance of `IOHandler` or a URL-like,
   * scheme-based string shortcut for `IOHandler`.
   * @param config Options for saving the model.
   * @returns A `Promise` of `SaveResult`, which summarizes the result of
   * the saving, such as byte sizes of the saved artifacts for the model's
   *   topology and weight values.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  save(handlerOrURL, config) {
    var _this = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof handlerOrURL === 'string') {
        const handlers = _this.io.getSaveHandlers(handlerOrURL);
        if (handlers.length === 0) {
          throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
        } else if (handlers.length > 1) {
          throw new Error(`Found more than one (${handlers.length}) save handlers for ` + `URL '${handlerOrURL}'`);
        }
        handlerOrURL = handlers[0];
      }
      if (handlerOrURL.save == null) {
        throw new Error('GraphModel.save() cannot proceed because the IOHandler ' + 'provided does not have the `save` attribute defined.');
      }
      return handlerOrURL.save(_this.artifacts);
    })();
  }
  /**
   * Execute the inference for the input tensors.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns Inference result tensors. If the model is converted and it
   * originally had structured_outputs in tensorflow, then a NamedTensorMap
   * will be returned matching the structured_outputs. If no structured_outputs
   * are present, the output will be single `tf.Tensor` if the model has single
   * output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  predict(inputs, config) {
    const outputTensors = this.execute(inputs, this.outputNodes);
    if (this.structuredOutputKeys) {
      const outputTensorsArray = outputTensors instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.Tensor ? [outputTensors] : outputTensors;
      const outputTensorMap = {};
      outputTensorsArray.forEach((outputTensor, i) => outputTensorMap[this.structuredOutputKeys[i]] = outputTensor);
      return outputTensorMap;
    }
    return outputTensors;
  }
  normalizeInputs(inputs) {
    if (!(inputs instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.Tensor) && !Array.isArray(inputs)) {
      // The input is already a NamedTensorMap.
      return inputs;
    }
    inputs = Array.isArray(inputs) ? inputs : [inputs];
    if (inputs.length !== this.inputNodes.length) {
      throw new Error('Input tensor count mismatch,' + `the graph model has ${this.inputNodes.length} placeholders, ` + `while there are ${inputs.length} input tensors.`);
    }
    return this.inputNodes.reduce((map, inputName, i) => {
      map[inputName] = inputs[i];
      return map;
    }, {});
  }
  normalizeOutputs(outputs) {
    outputs = outputs || this.outputNodes;
    return !Array.isArray(outputs) ? [outputs] : outputs;
  }
  /**
   * Executes inference for the model for given input tensors.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no
   * outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   *
   * @returns A single tensor if provided with a single output or no outputs
   * are provided and there is only one default output, otherwise return a
   * tensor array. The order of the tensor array is the same as the outputs
   * if provided, otherwise the order of outputNodes attribute of the model.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  execute(inputs, outputs) {
    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = this.executor.execute(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  /**
   * Executes inference for the model for given input tensors in async
   * fashion, use this method when your model contains control flow ops.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   *
   * @returns A Promise of single tensor if provided with a single output or
   * no outputs are provided and there is only one default output, otherwise
   * return a tensor map.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  executeAsync(inputs, outputs) {
    var _this2 = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      inputs = _this2.normalizeInputs(inputs);
      outputs = _this2.normalizeOutputs(outputs);
      const result = yield _this2.executor.executeAsync(inputs, outputs);
      return result.length > 1 ? result : result[0];
    })();
  }
  /**
   * Get intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  /**
   * Dispose intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }
  convertTensorMapToTensorsMap(map) {
    return Object.keys(map).reduce((newMap, key) => {
      newMap[key] = [map[key]];
      return newMap;
    }, {});
  }
  /**
   * Releases the memory used by the weight tensors and resourceManager.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  dispose() {
    this.executor.dispose();
    if (this.initializer) {
      this.initializer.dispose();
    }
    this.resourceManager.dispose();
  }
}
/**
 * Load a graph model given a URL to the model definition.
 *
 * Example of loading MobileNetV2 from a URL and making a prediction with a
 * zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
 * const model = await tf.loadGraphModel(modelUrl);
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 *
 * Example of loading MobileNetV2 from a TF Hub URL and making a prediction
 * with a zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
 * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 * @param modelUrl The url or an `io.IOHandler` that loads the model.
 * @param options Options for the HTTP request, which allows to send
 *     credentials
 *    and custom headers.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
function loadGraphModel(_x) {
  return _loadGraphModel.apply(this, arguments);
}
/**
 * Load a graph model given a synchronous IO handler with a 'load' method.
 *
 * @param modelSource The `io.IOHandlerSync` that loads the model, or the
 *     `io.ModelArtifacts` that encode the model, or a tuple of
 *     `[io.ModelJSON, ArrayBuffer]` of which the first element encodes the
 *      model and the second contains the weights.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
function _loadGraphModel() {
  _loadGraphModel = (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (modelUrl, options = {}, tfio = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io) {
    if (modelUrl == null) {
      throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' + 'or an IOHandler that loads the model');
    }
    if (options == null) {
      options = {};
    }
    if (options.fromTFHub && typeof modelUrl === 'string') {
      modelUrl = getTFHubUrl(modelUrl);
    }
    const model = new GraphModel(modelUrl, options, tfio);
    yield model.load();
    return model;
  });
  return _loadGraphModel.apply(this, arguments);
}
function loadGraphModelSync(modelSource) {
  if (modelSource == null) {
    throw new Error('modelUrl in loadGraphModelSync() cannot be null. Please provide ' + 'model artifacts or an IOHandler that loads the model');
  }
  let ioHandler;
  if (modelSource instanceof Array) {
    const [modelJSON, weights] = modelSource;
    if (!modelJSON) {
      throw new Error('modelJSON must be the first element of the array');
    }
    if (!weights || !(weights instanceof ArrayBuffer)) {
      throw new Error('An ArrayBuffer of weights must be the second element of' + ' the array');
    }
    if (!('modelTopology' in modelJSON)) {
      throw new Error('Model JSON is missing \'modelTopology\'');
    }
    if (!('weightsManifest' in modelJSON)) {
      throw new Error('Model JSON is missing \'weightsManifest\'');
    }
    const weightSpecs = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io.getWeightSpecs(modelJSON.weightsManifest);
    const modelArtifacts = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io.getModelArtifactsForJSONSync(modelJSON, weightSpecs, weights);
    ioHandler = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io.fromMemorySync(modelArtifacts);
  } else if ('load' in modelSource) {
    // Then modelSource is already an IOHandlerSync.
    ioHandler = modelSource;
  } else if ('modelTopology' in modelSource && 'weightSpecs' in modelSource && 'weightData' in modelSource) {
    // modelSource is of type ModelArtifacts.
    ioHandler = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.io.fromMemorySync(modelSource);
  } else {
    throw new Error('Unknown model format');
  }
  const model = new GraphModel(ioHandler);
  model.load();
  return model;
}
function getTFHubUrl(modelUrl) {
  if (!modelUrl.endsWith('/')) {
    modelUrl = modelUrl + '/';
  }
  return `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
}

/***/ }),

/***/ 82618:
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashTable": () => (/* binding */ HashTable)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 69683);

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// tslint:disable-next-line: no-imports-from-dist

/**
 * Hashtable contains a set of tensors, which can be accessed by key.
 */
class HashTable {
  /**
   * Constructor of HashTable. Creates a hash table.
   *
   * @param keyDType `dtype` of the table keys.
   * @param valueDType `dtype` of the table values.
   */
  constructor(keyDType, valueDType) {
    this.keyDType = keyDType;
    this.valueDType = valueDType;
    this.handle = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.scalar)(0);
    // tslint:disable-next-line: no-any
    this.tensorMap = new Map();
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.keep)(this.handle);
  }
  get id() {
    return this.handle.id;
  }
  /**
   * Dispose the tensors and handle and clear the hashtable.
   */
  clearAndClose() {
    this.tensorMap.forEach(value => value.dispose());
    this.tensorMap.clear();
    this.handle.dispose();
  }
  /**
   * The number of items in the hash table.
   */
  size() {
    return this.tensorMap.size;
  }
  /**
   * The number of items in the hash table as a rank-0 tensor.
   */
  tensorSize() {
    return _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__.scalar(this.size(), 'int32');
  }
  /**
   * Replaces the contents of the table with the specified keys and values.
   * @param keys Keys to store in the hashtable.
   * @param values Values to store in the hashtable.
   */
  import(keys, values) {
    var _this = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.checkKeyAndValueTensor(keys, values);
      // We only store the primitive values of the keys, this allows lookup
      // to be O(1).
      const $keys = yield keys.data();
      // Clear the hashTable before inserting new values.
      _this.tensorMap.forEach(value => value.dispose());
      _this.tensorMap.clear();
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.tidy)(() => {
        const $values = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.unstack)(values);
        const keysLength = $keys.length;
        const valuesLength = $values.length;
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.util.assert(keysLength === valuesLength, () => `The number of elements doesn't match, keys has ` + `${keysLength} elements, the values has ${valuesLength} ` + `elements.`);
        for (let i = 0; i < keysLength; i++) {
          const key = $keys[i];
          const value = $values[i];
          (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.keep)(value);
          _this.tensorMap.set(key, value);
        }
        return _this.handle;
      });
    })();
  }
  /**
   * Looks up keys in a hash table, outputs the corresponding values.
   *
   * Performs batch lookups, for every element in the key tensor, `find`
   * stacks the corresponding value into the return tensor.
   *
   * If an element is not present in the table, the given `defaultValue` is
   * used.
   *
   * @param keys Keys to look up. Must have the same type as the keys of the
   *     table.
   * @param defaultValue The scalar `defaultValue` is the value output for keys
   *     not present in the table. It must also be of the same type as the
   *     table values.
   */
  find(keys, defaultValue) {
    var _this2 = this;
    return (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.checkKeyAndValueTensor(keys, defaultValue);
      const $keys = yield keys.data();
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.tidy)(() => {
        const result = [];
        for (let i = 0; i < $keys.length; i++) {
          const key = $keys[i];
          const value = _this2.findWithDefault(key, defaultValue);
          result.push(value);
        }
        return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.stack)(result);
      });
    })();
  }
  // tslint:disable-next-line: no-any
  findWithDefault(key, defaultValue) {
    const result = this.tensorMap.get(key);
    return result != null ? result : defaultValue;
  }
  checkKeyAndValueTensor(key, value) {
    if (key.dtype !== this.keyDType) {
      throw new Error(`Expect key dtype ${this.keyDType}, but got ` + `${key.dtype}`);
    }
    if (value.dtype !== this.valueDType) {
      throw new Error(`Expect value dtype ${this.valueDType}, but got ` + `${value.dtype}`);
    }
  }
}

/***/ }),

/***/ 30090:
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExecutionSubgraph": () => (/* binding */ getExecutionSubgraph),
/* harmony export */   "getNodesInTopologicalOrder": () => (/* binding */ getNodesInTopologicalOrder),
/* harmony export */   "isControlFlow": () => (/* binding */ isControlFlow),
/* harmony export */   "isDynamicShape": () => (/* binding */ isDynamicShape),
/* harmony export */   "isHashTable": () => (/* binding */ isHashTable)
/* harmony export */ });
/* harmony import */ var _operations_executors_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operations/executors/utils */ 25703);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Given graph inputs and desired outputs, find the minimal set of nodes
 * to execute in order to compute the outputs. In addition return other useful
 * info such:
 * - Missing inputs needed to compute the output.
 * - Whether the subgraph contains dynamic ops (control flow, dynamic shape).
 * - Alternative inputs in order to avoid async (dynamic op) execution.
 */
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
  const usedNodes = new Set();
  const missingInputs = [];
  let dynamicNode = null;
  let syncInputs = null;
  // Start with the outputs, going backwards and find all the nodes that are
  // needed to compute those outputs.
  const seen = new Set();
  const inputNodeNames = Object.keys(inputs).map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_0__.parseNodeName)(name)[0]);
  let initNodeNames = [];
  if (initNodes != null) {
    initNodeNames = initNodes.map(node => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_0__.parseNodeName)(node.name)[0]);
  }
  const frontier = [...outputs];
  while (frontier.length > 0) {
    const node = frontier.pop();
    if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
      if (dynamicNode == null) {
        dynamicNode = node;
        syncInputs = dynamicNode.children.map(child => child.name).filter(name => usedNodes.has(name));
      }
    }
    usedNodes.add(node.name);
    // Weights are dead end since we already have their values.
    if (weightMap[node.name] != null) {
      continue;
    }
    // This node is a dead end since it's one of the user-provided inputs.
    if (inputNodeNames.indexOf(node.name) !== -1) {
      continue;
    }
    // This node is a dead end since it doesn't have any inputs.
    if (initNodeNames.indexOf(node.name) !== -1) {
      continue;
    }
    if (node.inputs.length === 0) {
      missingInputs.push(node.name);
      continue;
    }
    node.inputs.forEach(input => {
      // Don't add to the frontier if it is already there.
      if (seen.has(input.name)) {
        return;
      }
      seen.add(input.name);
      frontier.push(input);
    });
  }
  return {
    inputs,
    outputs,
    usedNodes,
    missingInputs,
    dynamicNode,
    syncInputs
  };
}
/**
 * Given the execution info, return a list of nodes in topological order that
 * need to be executed to compute the output.
 */
function getNodesInTopologicalOrder(graph, weightMap, executionInfo) {
  const {
    usedNodes,
    inputs
  } = executionInfo;
  const frontier = [];
  const inputNodes = Object.keys(inputs).map(name => (0,_operations_executors_utils__WEBPACK_IMPORTED_MODULE_0__.parseNodeName)(name)[0]).map(name => graph.nodes[name]);
  const initNodes = graph.initNodes;
  inputNodes.forEach(input => {
    if (usedNodes.has(input.name)) {
      frontier.push(input);
    }
  });
  graph.weights.forEach(weight => {
    if (usedNodes.has(weight.name)) {
      frontier.push(weight);
    }
  });
  if (initNodes != null) {
    initNodes.forEach(node => {
      if (usedNodes.has(node.name)) {
        frontier.push(node);
      }
    });
  }
  const seen = new Set();
  const orderedNodes = [];
  while (frontier.length > 0) {
    const node = frontier.pop();
    seen.add(node.name);
    if (!weightMap[node.name]) {
      orderedNodes.push(node);
    }
    node.children.forEach(child => {
      if (!seen.has(child.name) && usedNodes.has(child.name) && child.inputs.every(input => seen.has(input.name))) {
        frontier.push(child);
      }
    });
  }
  return orderedNodes;
}
const CONTROL_FLOW_OPS = ['Switch', 'Merge', 'Enter', 'Exit', 'NextIteration', 'StatelessIf', 'StatelessWhile', 'if', 'While'];
const DYNAMIC_SHAPE_OPS = ['NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'NonMaxSuppressionV5', 'Where'];
const HASH_TABLE_OPS = ['HashTable', 'HashTableV2', 'LookupTableImport', 'LookupTableImportV2', 'LookupTableFind', 'LookupTableFindV2', 'LookupTableSize', 'LookupTableSizeV2'];
function isControlFlow(node) {
  return CONTROL_FLOW_OPS.indexOf(node.op) >= 0;
}
function isDynamicShape(node) {
  return DYNAMIC_SHAPE_OPS.indexOf(node.op) >= 0;
}
function isHashTable(node) {
  return HASH_TABLE_OPS.indexOf(node.op) >= 0;
}

/***/ }),

/***/ 73845:
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceManager": () => (/* binding */ ResourceManager)
/* harmony export */ });
/**
 * Contains global resources of a model.
 */
class ResourceManager {
  constructor(hashTableNameToHandle = {}, hashTableMap = {}) {
    this.hashTableNameToHandle = hashTableNameToHandle;
    this.hashTableMap = hashTableMap;
  }
  /**
   * Register a `HashTable` in the resource manager.
   *
   * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
   * where id is the table handle tensor's id.
   *
   * @param name Op node name that creates the `HashTable`.
   * @param hashTable The `HashTable` to be added to resource manager.
   */
  addHashTable(name, hashTable) {
    this.hashTableNameToHandle[name] = hashTable.handle;
    this.hashTableMap[hashTable.id] = hashTable;
  }
  /**
   * Get the table handle by node name.
   * @param name Op node name that creates the `HashTable`. This name is also
   *     used in the inputs list of lookup and import `HashTable` ops.
   */
  getHashTableHandleByName(name) {
    return this.hashTableNameToHandle[name];
  }
  /**
   * Get the actual `HashTable` by its handle tensor's id.
   * @param id The id of the handle tensor.
   */
  getHashTableById(id) {
    return this.hashTableMap[id];
  }
  /**
   * Dispose `ResourceManager`, including its hashTables and tensors in them.
   */
  dispose() {
    for (const key in this.hashTableMap) {
      this.hashTableMap[key].clearAndClose();
      delete this.hashTableMap[key];
    }
    for (const name in this.hashTableNameToHandle) {
      this.hashTableNameToHandle[name].dispose();
      delete this.hashTableNameToHandle[name];
    }
  }
}

/***/ }),

/***/ 108:
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TensorArray": () => (/* binding */ TensorArray)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _tensor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tensor_utils */ 57824);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * The TensorArray object keeps an array of Tensors.  It
 * allows reading from the array and writing to the array.
 */
class TensorArray {
  constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
    this.name = name;
    this.dtype = dtype;
    this.maxSize = maxSize;
    this.elementShape = elementShape;
    this.identicalElementShapes = identicalElementShapes;
    this.dynamicSize = dynamicSize;
    this.clearAfterRead = clearAfterRead;
    this.tensors = [];
    this.closed_ = false;
    this.idTensor = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.scalar)(0);
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  get closed() {
    return this.closed_;
  }
  /**
   * Dispose the tensors and idTensor and mark the TensoryArray as closed.
   */
  clearAndClose(keepIds) {
    this.tensors.forEach(tensor => {
      if (keepIds == null || !keepIds.has(tensor.tensor.id)) {
        tensor.tensor.dispose();
      }
    });
    this.tensors = [];
    this.closed_ = true;
    this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  /**
   * Read the value at location index in the TensorArray.
   * @param index Number the index to read from.
   */
  read(index) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || index >= this.size()) {
      throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
    }
    const tensorWithState = this.tensors[index];
    if (tensorWithState.cleared) {
      throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read ` + `(perhaps try setting clear_after_read = false?).`);
    }
    if (this.clearAfterRead) {
      tensorWithState.cleared = true;
    }
    tensorWithState.read = true;
    return tensorWithState.tensor;
  }
  /**
   * Helper method to read multiple tensors from the specified indices.
   */
  readMany(indices) {
    return indices.map(index => this.read(index));
  }
  /**
   * Write value into the index of the TensorArray.
   * @param index number the index to write to.
   * @param tensor
   */
  write(index, tensor) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
      throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
    }
    const t = this.tensors[index] || {};
    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor.dtype}, but TensorArray dtype is ${this.dtype}.`);
    }
    // Set the shape for the first time write to unknow shape tensor array
    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0)) {
      this.elementShape = tensor.shape;
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensor.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);
    if (t.read) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
    }
    if (t.written) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
    }
    t.tensor = tensor;
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(tensor);
    t.written = true;
    this.tensors[index] = t;
  }
  /**
   * Helper method to write multiple tensors to the specified indices.
   */
  writeMany(indices, tensors) {
    if (indices.length !== tensors.length) {
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,` + `because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
    }
    indices.forEach((i, index) => this.write(i, tensors[index]));
  }
  /**
   * Return selected values in the TensorArray as a packed Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param [indices] number[] Optional. Taking values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size(). If not specified returns
   *    all tensors in the original order.
   * @param [dtype]
   */
  gather(indices, dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
    }
    if (!indices) {
      indices = [];
      for (let i = 0; i < this.size(); i++) {
        indices.push(i);
      }
    } else {
      indices = indices.slice(0, this.size());
    }
    if (indices.length === 0) {
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tensor)([], [0].concat(this.elementShape));
    }
    // Read all the PersistentTensors into a vector to keep track of
    // their memory.
    const tensors = this.readMany(indices);
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.stack)(tensors, 0);
  }
  /**
   * Return the values in the TensorArray as a concatenated Tensor.
   */
  concat(dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
    }
    if (this.size() === 0) {
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tensor)([], [0].concat(this.elementShape));
    }
    const indices = [];
    for (let i = 0; i < this.size(); i++) {
      indices.push(i);
    }
    // Collect all the tensors from the tensors array.
    const tensors = this.readMany(indices);
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.concat)(tensors, 0);
  }
  /**
   * Scatter the values of a Tensor in specific indices of a TensorArray.
   * @param indices nummber[] values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size().
   * @param tensor Tensor input tensor.
   */
  scatter(indices, tensor) {
    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
    }
    if (indices.length !== tensor.shape[0]) {
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
    }
    const maxIndex = Math.max(...indices);
    if (!this.dynamicSize && maxIndex >= this.maxSize) {
      throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
    }
    this.writeMany(indices, (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.unstack)(tensor, 0));
  }
  /**
   * Split the values of a Tensor into the TensorArray.
   * @param length number[] with the lengths to use when splitting value along
   *    its first dimension.
   * @param tensor Tensor, the tensor to split.
   */
  split(length, tensor) {
    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
    }
    let totalLength = 0;
    const cumulativeLengths = length.map(len => {
      totalLength += len;
      return totalLength;
    });
    if (totalLength !== tensor.shape[0]) {
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
    }
    if (!this.dynamicSize && length.length !== this.maxSize) {
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), ` + 'and the TensorArray is not marked as dynamically resizeable');
    }
    const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
    const tensors = [];
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
      tensor = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(tensor, [1, totalLength, elementPerRow]);
      for (let i = 0; i < length.length; ++i) {
        const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
        const indices = [0, previousLength, 0];
        const sizes = [1, length[i], elementPerRow];
        tensors[i] = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)((0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.slice)(tensor, indices, sizes), this.elementShape);
      }
      return tensors;
    });
    const indices = [];
    for (let i = 0; i < length.length; i++) {
      indices[i] = i;
    }
    this.writeMany(indices, tensors);
  }
}

/***/ }),

/***/ 555:
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TensorList": () => (/* binding */ TensorList),
/* harmony export */   "fromTensor": () => (/* binding */ fromTensor),
/* harmony export */   "reserve": () => (/* binding */ reserve),
/* harmony export */   "scatter": () => (/* binding */ scatter),
/* harmony export */   "split": () => (/* binding */ split)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _tensor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tensor_utils */ 57824);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * TensorList stores a container of `tf.Tensor` objects, which are accessible
 * via tensors field.
 *
 * In order to get a copy of the underlying list, use the copy method:
 * ```
 *    TensorList b = a.copy();
 *    b.tensors().pushBack(t);  // This does not modify a.tensors().
 * ```
 *
 * Note that this is not a deep copy: the memory locations of the underlying
 * tensors will still point to the same locations of the corresponding tensors
 * in the original.
 */
class TensorList {
  /**
   *
   * @param tensors list of tensors
   * @param elementShape shape of each tensor, this can be a single number (any
   * shape is allowed) or partial shape (dim = -1).
   * @param elementDtype data type of each tensor
   * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
   *   meaning that the size of `tensors` is unbounded.
   */
  constructor(tensors, elementShape, elementDtype, maxNumElements = -1) {
    this.tensors = tensors;
    this.elementShape = elementShape;
    this.elementDtype = elementDtype;
    if (tensors != null) {
      tensors.forEach(tensor => {
        if (elementDtype !== tensor.dtype) {
          throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor.dtype}`);
        }
        (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(elementShape, tensor.shape, 'TensorList shape mismatch: ');
        (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(tensor);
      });
    }
    this.idTensor = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.scalar)(0);
    this.maxNumElements = maxNumElements;
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  /**
   * Get a new TensorList containing a copy of the underlying tensor container.
   */
  copy() {
    return new TensorList([...this.tensors], this.elementShape, this.elementDtype);
  }
  /**
   * Dispose the tensors and idTensor and clear the tensor list.
   */
  clearAndClose(keepIds) {
    this.tensors.forEach(tensor => {
      if (keepIds == null || !keepIds.has(tensor.id)) {
        tensor.dispose();
      }
    });
    this.tensors.length = 0;
    this.idTensor.dispose();
  }
  /**
   * The size of the tensors in the tensor list.
   */
  size() {
    return this.tensors.length;
  }
  /**
   * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
   * tf.Tensor.
   * @param elementShape shape of each tensor
   * @param elementDtype data type of each tensor
   * @param numElements the number of elements to stack
   */
  stack(elementShape, elementDtype, numElements = -1) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (numElements !== -1 && this.tensors.length !== numElements) {
      throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(elementShape, this.elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.inferElementShape)(this.elementShape, this.tensors, elementShape);
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
      const reshapedTensors = this.tensors.map(tensor => (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(tensor, outputElementShape));
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.stack)(reshapedTensors, 0);
    });
  }
  /**
   * Pop a tensor from the end of the list.
   * @param elementShape shape of the tensor
   * @param elementDtype data type of the tensor
   */
  popBack(elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (this.size() === 0) {
      throw new Error('Trying to pop from an empty list.');
    }
    const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.inferElementShape)(this.elementShape, this.tensors, elementShape);
    const tensor = this.tensors.pop();
    tensor.kept = false;
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(tensor.shape, elementShape, 'TensorList shape mismatch: ');
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(tensor, outputElementShape);
  }
  /**
   * Push a tensor to the end of the list.
   * @param tensor Tensor to be pushed.
   */
  pushBack(tensor) {
    if (tensor.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(tensor.shape, this.elementShape, 'TensorList shape mismatch: ');
    if (this.maxNumElements === this.size()) {
      throw new Error(`Trying to push element into a full list.`);
    }
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(tensor);
    this.tensors.push(tensor);
  }
  /**
   * Update the size of the list.
   * @param size the new size of the list.
   */
  resize(size) {
    if (size < 0) {
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
    }
    if (this.maxNumElements !== -1 && size > this.maxNumElements) {
      throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
    }
    const destTensorList = new TensorList([], this.elementShape, this.elementDtype, this.maxNumElements);
    destTensorList.tensors.length = size;
    for (let i = 0; i < Math.min(this.tensors.length, size); ++i) {
      destTensorList.tensors[i] = this.tensors[i];
    }
    return destTensorList;
  }
  /**
   * Retrieve the element at the provided index
   * @param elementShape shape of the tensor
   * @param elementDtype dtype of the tensor
   * @param elementIndex index of the tensor
   */
  getItem(elementIndex, elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || elementIndex > this.tensors.length) {
      throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
    }
    if (this.tensors[elementIndex] == null) {
      throw new Error(`element at index ${elementIndex} is null.`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.tensors[elementIndex].shape, elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.inferElementShape)(this.elementShape, this.tensors, elementShape);
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(this.tensors[elementIndex], outputElementShape);
  }
  /**
   * Set the tensor at the index
   * @param elementIndex index of the tensor
   * @param tensor the tensor to be inserted into the list
   */
  setItem(elementIndex, tensor) {
    if (tensor.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
      throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensor.shape, 'TensorList shape mismatch: ');
    (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.keep)(tensor);
    // dispose the previous value if it is replacing.
    if (this.tensors[elementIndex] != null) {
      this.tensors[elementIndex].kept = false;
    }
    this.tensors[elementIndex] = tensor;
  }
  /**
   * Return selected values in the TensorList as a stacked Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param indices indices of tensors to gather
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  gather(indices, elementDtype, elementShape) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, elementShape, 'TensorList shape mismatch: ');
    // When indices is greater than the size of the list, indices beyond the
    // size of the list are ignored.
    indices = indices.slice(0, this.size());
    const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.inferElementShape)(this.elementShape, this.tensors, elementShape);
    if (indices.length === 0) {
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tensor)([], [0].concat(outputElementShape));
    }
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
      const tensors = indices.map(i => (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(this.tensors[i], outputElementShape));
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.stack)(tensors, 0);
    });
  }
  /**
   * Return the values in the TensorList as a concatenated Tensor.
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  concat(elementDtype, elementShape) {
    if (!!elementDtype && elementDtype !== this.elementDtype) {
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
    }
    (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(this.elementShape, elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.inferElementShape)(this.elementShape, this.tensors, elementShape);
    if (this.size() === 0) {
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tensor)([], [0].concat(outputElementShape));
    }
    return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
      const tensors = this.tensors.map(t => (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(t, outputElementShape));
      return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.concat)(tensors, 0);
    });
  }
}
/**
 * Creates a TensorList which, when stacked, has the value of tensor.
 * @param tensor from tensor
 * @param elementShape output tensor element shape
 */
function fromTensor(tensor, elementShape, elementDtype) {
  const dtype = tensor.dtype;
  if (tensor.shape.length < 1) {
    throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor.shape}`);
  }
  if (tensor.dtype !== elementDtype) {
    throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${elementDtype}`);
  }
  const tensorElementShape = tensor.shape.slice(1);
  (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.assertShapesMatchAllowUndefinedSize)(tensorElementShape, elementShape, 'TensorList shape mismatch: ');
  const tensorList = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.unstack)(tensor);
  return new TensorList(tensorList, elementShape, dtype);
}
/**
 * Return a TensorList of the given size with empty elements.
 * @param elementShape the shape of the future elements of the list
 * @param elementDtype the desired type of elements in the list
 * @param numElements the number of elements to reserve
 * @param maxNumElements the maximum number of elements in th list
 */
function reserve(elementShape, elementDtype, numElements, maxNumElements) {
  return new TensorList([], elementShape, elementDtype, maxNumElements);
}
/**
 * Put tensors at specific indices of a stacked tensor into a TensorList.
 * @param indices list of indices on how to scatter the tensor.
 * @param tensor input tensor.
 * @param elementShape the shape of the future elements of the list
 * @param numElements the number of elements to scatter
 */
function scatter(tensor, indices, elementShape, numElements) {
  if (indices.length !== tensor.shape[0]) {
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
  }
  const maxIndex = Math.max(...indices);
  if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
    throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
  }
  const list = new TensorList([], elementShape, tensor.dtype, numElements);
  const tensors = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.unstack)(tensor, 0);
  indices.forEach((value, index) => {
    list.setItem(value, tensors[index]);
  });
  return list;
}
/**
 * Split the values of a Tensor into a TensorList.
 * @param length the lengths to use when splitting value along
 *    its first dimension.
 * @param tensor the tensor to split.
 * @param elementShape the shape of the future elements of the list
 */
function split(tensor, length, elementShape) {
  let totalLength = 0;
  const cumulativeLengths = length.map(len => {
    totalLength += len;
    return totalLength;
  });
  if (totalLength !== tensor.shape[0]) {
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
  }
  const shapeWithoutFirstDim = tensor.shape.slice(1);
  const outputElementShape = (0,_tensor_utils__WEBPACK_IMPORTED_MODULE_1__.mergeElementShape)(shapeWithoutFirstDim, elementShape);
  const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
  const tensors = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
    const tensors = [];
    tensor = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)(tensor, [1, totalLength, elementPerRow]);
    for (let i = 0; i < length.length; ++i) {
      const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
      const indices = [0, previousLength, 0];
      const sizes = [1, length[i], elementPerRow];
      tensors[i] = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.reshape)((0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.slice)(tensor, indices, sizes), outputElementShape);
    }
    tensor.dispose();
    return tensors;
  });
  const list = new TensorList([], elementShape, tensor.dtype, length.length);
  for (let i = 0; i < tensors.length; i++) {
    list.setItem(i, tensors[i]);
  }
  return list;
}

/***/ }),

/***/ 57824:
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertShapesMatchAllowUndefinedSize": () => (/* binding */ assertShapesMatchAllowUndefinedSize),
/* harmony export */   "fullDefinedShape": () => (/* binding */ fullDefinedShape),
/* harmony export */   "inferElementShape": () => (/* binding */ inferElementShape),
/* harmony export */   "mergeElementShape": () => (/* binding */ mergeElementShape)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * This differs from util.assertShapesMatch in that it allows values of
 * negative one, an undefined size of a dimensinon, in a shape to match
 * anything.
 */

/**
 * Used by TensorList and TensorArray to verify if elementShape matches, support
 * negative value as the dim shape.
 * @param shapeA
 * @param shapeB
 * @param errorMessagePrefix
 */
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = '') {
  // constant shape means unknown rank
  if (typeof shapeA === 'number' || typeof shapeB === 'number') {
    return;
  }
  _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.assert(shapeA.length === shapeB.length, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  for (let i = 0; i < shapeA.length; i++) {
    const dim0 = shapeA[i];
    const dim1 = shapeB[i];
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  }
}
function fullDefinedShape(elementShape) {
  if (typeof elementShape === 'number' || elementShape.some(dim => dim < 0)) {
    return false;
  }
  return true;
}
/**
 * Generate the output element shape from the list elementShape, list tensors
 * and input param.
 * @param listElementShape
 * @param tensors
 * @param elementShape
 */
function inferElementShape(listElementShape, tensors, elementShape) {
  let partialShape = mergeElementShape(listElementShape, elementShape);
  const notfullDefinedShape = !fullDefinedShape(partialShape);
  if (notfullDefinedShape && tensors.length === 0) {
    throw new Error(`Tried to calculate elements of an empty list` + ` with non-fully-defined elementShape: ${partialShape}`);
  }
  if (notfullDefinedShape) {
    tensors.forEach(tensor => {
      partialShape = mergeElementShape(tensor.shape, partialShape);
    });
  }
  if (!fullDefinedShape(partialShape)) {
    throw new Error(`Non-fully-defined elementShape: ${partialShape}`);
  }
  return partialShape;
}
function mergeElementShape(elementShapeA, elementShapeB) {
  if (typeof elementShapeA === 'number') {
    return elementShapeB;
  }
  if (typeof elementShapeB === 'number') {
    return elementShapeA;
  }
  if (elementShapeA.length !== elementShapeB.length) {
    throw new Error(`Incompatible ranks during merge: ${elementShapeA} vs. ${elementShapeB}`);
  }
  const result = [];
  for (let i = 0; i < elementShapeA.length; ++i) {
    const dim0 = elementShapeA[i];
    const dim1 = elementShapeB[i];
    if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
      throw new Error(`Incompatible shape during merge: ${elementShapeA} vs. ${elementShapeB}`);
    }
    result[i] = dim0 >= 0 ? dim0 : dim1;
  }
  return result;
}

/***/ }),

/***/ 14865:
/*!***************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/flags.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const ENV = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.env)();
/** Whether to keep intermediate tensors. */
ENV.registerFlag('KEEP_INTERMEDIATE_TENSORS', () => false, debugValue => {
  if (debugValue) {
    console.warn('Keep intermediate tensors is ON. This will print the values of all ' + 'intermediate tensors during model inference. Not all models ' + 'support this mode. For details, check e2e/benchmarks/ ' + 'model_config.js. This significantly impacts performance.');
  }
});

/***/ }),

/***/ 39715:
/*!***************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphModel": () => (/* reexport safe */ _executor_graph_model__WEBPACK_IMPORTED_MODULE_1__.GraphModel),
/* harmony export */   "deregisterOp": () => (/* reexport safe */ _operations_custom_op_register__WEBPACK_IMPORTED_MODULE_2__.deregisterOp),
/* harmony export */   "loadGraphModel": () => (/* reexport safe */ _executor_graph_model__WEBPACK_IMPORTED_MODULE_1__.loadGraphModel),
/* harmony export */   "loadGraphModelSync": () => (/* reexport safe */ _executor_graph_model__WEBPACK_IMPORTED_MODULE_1__.loadGraphModelSync),
/* harmony export */   "registerOp": () => (/* reexport safe */ _operations_custom_op_register__WEBPACK_IMPORTED_MODULE_2__.registerOp),
/* harmony export */   "version_converter": () => (/* reexport safe */ _version__WEBPACK_IMPORTED_MODULE_3__.version)
/* harmony export */ });
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flags */ 14865);
/* harmony import */ var _executor_graph_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executor/graph_model */ 99209);
/* harmony import */ var _operations_custom_op_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/custom_op/register */ 97302);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version */ 50310);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





/***/ }),

/***/ 71188:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeValueImpl": () => (/* binding */ NodeValueImpl)
/* harmony export */ });
/* harmony import */ var _executors_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../executors/utils */ 25703);
/* harmony import */ var _operation_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operation_mapper */ 73299);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * Helper class for lookup inputs and params for nodes in the model graph.
 */
class NodeValueImpl {
  constructor(node, tensorMap, context) {
    this.node = node;
    this.tensorMap = tensorMap;
    this.context = context;
    this.inputs = [];
    this.attrs = {};
    this.inputs = node.inputNames.map(name => this.getInput(name));
    if (node.rawAttrs != null) {
      this.attrs = Object.keys(node.rawAttrs).reduce((attrs, key) => {
        attrs[key] = this.getAttr(key);
        return attrs;
      }, {});
    }
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getInput(name) {
    return (0,_executors_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(name, this.tensorMap, this.context);
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getAttr(name, defaultValue) {
    const value = this.node.rawAttrs[name];
    if (value.tensor != null) {
      return (0,_executors_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(name, this.tensorMap, this.context);
    }
    if (value.i != null || value.f != null) {
      return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getNumberParam)(this.node.rawAttrs, name, defaultValue);
    }
    if (value.s != null) {
      return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getStringParam)(this.node.rawAttrs, name, defaultValue);
    }
    if (value.b != null) {
      return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getBoolParam)(this.node.rawAttrs, name, defaultValue);
    }
    if (value.shape != null) {
      return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getTensorShapeParam)(this.node.rawAttrs, name, defaultValue);
    }
    if (value.type != null) {
      return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getDtypeParam)(this.node.rawAttrs, name, defaultValue);
    }
    if (value.list != null) {
      if (value.list.i != null || value.list.f != null) {
        return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getNumericArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.s != null) {
        return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getStringArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.shape != null) {
        return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getTensorShapeArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.b != null) {
        return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getBoolArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.type != null) {
        return (0,_operation_mapper__WEBPACK_IMPORTED_MODULE_1__.getDtypeArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
    }
    return defaultValue;
  }
}

/***/ }),

/***/ 97302:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregisterOp": () => (/* binding */ deregisterOp),
/* harmony export */   "getRegisteredOp": () => (/* binding */ getRegisteredOp),
/* harmony export */   "registerOp": () => (/* binding */ registerOp)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const CUSTOM_OPS = {};
/**
 * Register an Op for graph model executor. This allows you to register
 * TensorFlow custom op or override existing op.
 *
 * Here is an example of registering a new MatMul Op.
 * ```js
 * const customMatmul = (node) =>
 *    tf.matMul(
 *        node.inputs[0], node.inputs[1],
 *        node.attrs['transpose_a'], node.attrs['transpose_b']);
 *
 * tf.registerOp('MatMul', customMatmul);
 * ```
 * The inputs and attrs of the node object are based on the TensorFlow op
 * registry.
 *
 * @param name The Tensorflow Op name.
 * @param opFunc An op function which is called with the current graph node
 * during execution and needs to return a tensor or a list of tensors. The node
 * has the following attributes:
 *    - attr: A map from attribute name to its value
 *    - inputs: A list of input tensors
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
function registerOp(name, opFunc) {
  const opMapper = {
    tfOpName: name,
    category: 'custom',
    inputs: [],
    attrs: [],
    customExecutor: opFunc
  };
  CUSTOM_OPS[name] = opMapper;
}
/**
 * Retrieve the OpMapper object for the registered op.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
function getRegisteredOp(name) {
  return CUSTOM_OPS[name];
}
/**
 * Deregister the Op for graph model executor.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
function deregisterOp(name) {
  delete CUSTOM_OPS[name];
}

/***/ }),

/***/ 90109:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'BiasAdd':
    case 'AddV2':
    case 'Add':
      {
        return [ops.add((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'AddN':
      {
        return [ops.addN((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('tensors', node, tensorMap, context))];
      }
    case 'FloorMod':
    case 'Mod':
      return [ops.mod((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
    case 'Mul':
      return [ops.mul((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
    case 'RealDiv':
    case 'Div':
      {
        return [ops.div((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'DivNoNan':
      {
        return [ops.divNoNan((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'FloorDiv':
      {
        return [ops.floorDiv((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Sub':
      {
        return [ops.sub((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Minimum':
      {
        return [ops.minimum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Maximum':
      {
        return [ops.maximum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Pow':
      {
        return [ops.pow((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'SquaredDifference':
      {
        return [ops.squaredDifference((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'arithmetic';

/***/ }),

/***/ 3844:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Abs':
    case 'ComplexAbs':
      return [ops.abs((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Acos':
      return [ops.acos((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Acosh':
      return [ops.acosh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Asin':
      return [ops.asin((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Asinh':
      return [ops.asinh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Atan':
      return [ops.atan((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Atan2':
      return [ops.atan2((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('y', node, tensorMap, context))];
    case 'Atanh':
      return [ops.atanh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Ceil':
      return [ops.ceil((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Complex':
      return [ops.complex((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('real', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('imag', node, tensorMap, context))];
    case 'Cos':
      return [ops.cos((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Cosh':
      return [ops.cosh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Elu':
      return [ops.elu((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Erf':
      return [ops.erf((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Exp':
      return [ops.exp((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Expm1':
      {
        return [ops.expm1((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Floor':
      return [ops.floor((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Log':
      return [ops.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Log1p':
      {
        return [ops.log1p((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Imag':
      return [ops.imag((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Neg':
      return [ops.neg((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Reciprocal':
      {
        return [ops.reciprocal((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Real':
      return [ops.real((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Relu':
      return [ops.relu((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Round':
      {
        return [ops.round((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Selu':
      return [ops.selu((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Sigmoid':
      return [ops.sigmoid((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Sin':
      return [ops.sin((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Sign':
      {
        return [ops.sign((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Sinh':
      {
        return [ops.sinh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Softplus':
      {
        return [ops.softplus((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Sqrt':
      {
        return [ops.sqrt((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Square':
      {
        return [ops.square((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Tanh':
      {
        return [ops.tanh((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'Tan':
      return [ops.tan((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'ClipByValue':
      return [ops.clipByValue((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('clipValueMin', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('clipValueMax', node, tensorMap, context))];
    case 'Relu6':
      return [ops.relu6((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
    case 'Rsqrt':
      return [ops.rsqrt((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(node.inputNames[0], tensorMap, context))];
    case 'Prod':
      return [ops.prod((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axes', node, tensorMap, context))];
    case 'LeakyRelu':
      return [ops.leakyRelu((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('alpha', node, tensorMap, context))];
    case 'Prelu':
      return [ops.prelu((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('alpha', node, tensorMap, context))];
    case 'IsNan':
      return [ops.isNaN((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(node.inputNames[0], tensorMap, context))];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'basic_math';

/***/ }),

/***/ 43641:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _executor_tensor_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../executor/tensor_array */ 108);
/* harmony import */ var _executor_tensor_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../executor/tensor_list */ 555);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ 25703);

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




const executeOp = /*#__PURE__*/function () {
  var _ref = (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (node, tensorMap, context) {
    switch (node.op) {
      case 'If':
      case 'StatelessIf':
        {
          const thenFunc = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('thenBranch', node, tensorMap, context);
          const elseFunc = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elseBranch', node, tensorMap, context);
          const cond = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('cond', node, tensorMap, context);
          const args = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('args', node, tensorMap, context);
          const condValue = yield cond.data();
          if (condValue[0]) {
            return context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
          } else {
            return context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
          }
        }
      case 'While':
      case 'StatelessWhile':
        {
          const bodyFunc = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('body', node, tensorMap, context);
          const condFunc = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('cond', node, tensorMap, context);
          const args = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('args', node, tensorMap, context);
          // Calculate the condition of the loop
          const condResult = yield context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
          const argIds = args.map(tensor => tensor.id);
          let condValue = yield condResult[0].data();
          // Dispose the intermediate tensors for condition function
          condResult.forEach(tensor => {
            if (!tensor.kept && argIds.indexOf(tensor.id) === -1) {
              tensor.dispose();
            }
          });
          let result = args;
          while (condValue[0]) {
            // Record the previous result for intermediate tensor tracking
            const origResult = result;
            // Execution the body of the loop
            result = yield context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
            const resultIds = result.map(tensor => tensor.id);
            // Dispose the intermediate tensor for body function that is not global
            // kept, not input/output of the body function
            origResult.forEach(tensor => {
              if (!tensor.kept && argIds.indexOf(tensor.id) === -1 && resultIds.indexOf(tensor.id) === -1) {
                tensor.dispose();
              }
            });
            // Recalcuate the condition of the loop using the latest results.
            const condResult = yield context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
            condValue = yield condResult[0].data();
            // Dispose the intermediate tensors for condition function
            condResult.forEach(tensor => {
              if (!tensor.kept && argIds.indexOf(tensor.id) === -1 && resultIds.indexOf(tensor.id) === -1) {
                tensor.dispose();
              }
            });
          }
          return result;
        }
      case 'LoopCond':
        {
          const pred = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('pred', node, tensorMap, context);
          return [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(pred)];
        }
      case 'Switch':
        {
          const pred = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('pred', node, tensorMap, context);
          let data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('data', node, tensorMap, context);
          if (!data.kept) {
            data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(data);
          }
          // Outputs nodes :0 => false, :1 => true
          return (yield pred.data())[0] ? [undefined, data] : [data, undefined];
        }
      case 'Merge':
        {
          const inputName = node.inputNames.find(name => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getTensor)(name, tensorMap, context) !== undefined);
          if (inputName) {
            const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getTensor)(inputName, tensorMap, context);
            return [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(data)];
          }
          return undefined;
        }
      case 'Enter':
        {
          const frameId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('frameName', node, tensorMap, context);
          const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          context.enterFrame(frameId);
          return [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(data)];
        }
      case 'Exit':
        {
          const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          context.exitFrame();
          return [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(data)];
        }
      case 'NextIteration':
        {
          const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          context.nextIteration();
          return [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cloneTensor)(data)];
        }
      case 'TensorArrayV3':
        {
          const size = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('size', node, tensorMap, context);
          const dtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('dtype', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const dynamicSize = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('dynamicSize', node, tensorMap, context);
          const clearAfterRead = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('clearAfterRead', node, tensorMap, context);
          const identicalElementShapes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('identicalElementShapes', node, tensorMap, context);
          const name = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('name', node, tensorMap, context);
          const tensorArray = new _executor_tensor_array__WEBPACK_IMPORTED_MODULE_2__.TensorArray(name, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
          context.addTensorArray(tensorArray);
          return [tensorArray.idTensor, (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.scalar)(1.0)];
        }
      case 'TensorArrayWriteV3':
        {
          const id = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const index = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('index', node, tensorMap, context);
          const writeTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const writeTensorArray = context.getTensorArray(id.id);
          writeTensorArray.write(index, writeTensor);
          return [writeTensorArray.idTensor];
        }
      case 'TensorArrayReadV3':
        {
          const readId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const readIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('index', node, tensorMap, context);
          const readTensorArray = context.getTensorArray(readId.id);
          return [readTensorArray.read(readIndex)];
        }
      case 'TensorArrayGatherV3':
        {
          const gatherId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const gatherIndices = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('indices', node, tensorMap, context);
          const gatherDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('dtype', node, tensorMap, context);
          const gatherTensorArray = context.getTensorArray(gatherId.id);
          return [gatherTensorArray.gather(gatherIndices, gatherDtype)];
        }
      case 'TensorArrayScatterV3':
        {
          const scatterId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const scatterIndices = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('indices', node, tensorMap, context);
          const scatterTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const scatterTensorArray = context.getTensorArray(scatterId.id);
          scatterTensorArray.scatter(scatterIndices, scatterTensor);
          return [scatterTensorArray.idTensor];
        }
      case 'TensorArrayConcatV3':
        {
          const concatId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const concatTensorArray = context.getTensorArray(concatId.id);
          const concatDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('dtype', node, tensorMap, context);
          return [concatTensorArray.concat(concatDtype)];
        }
      case 'TensorArraySplitV3':
        {
          const splitId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const splitTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const lengths = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('lengths', node, tensorMap, context);
          const splitTensorArray = context.getTensorArray(splitId.id);
          splitTensorArray.split(lengths, splitTensor);
          return [splitTensorArray.idTensor];
        }
      case 'TensorArraySizeV3':
        {
          const sizeId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const sizeTensorArray = context.getTensorArray(sizeId.id);
          return [(0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.scalar)(sizeTensorArray.size(), 'int32')];
        }
      case 'TensorArrayCloseV3':
        {
          const closeId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorArrayId', node, tensorMap, context);
          const closeTensorArray = context.getTensorArray(closeId.id);
          closeTensorArray.clearAndClose();
          return [closeTensorArray.idTensor];
        }
      case 'TensorListSetItem':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const index = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('index', node, tensorMap, context);
          const writeTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          tensorList.setItem(index, writeTensor);
          return [tensorList.idTensor];
        }
      case 'TensorListGetItem':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const readIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('index', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDType = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          return [tensorList.getItem(readIndex, elementShape, elementDType)];
        }
      case 'TensorListScatterV2':
      case 'TensorListScatter':
        {
          const scatterIndices = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('indices', node, tensorMap, context);
          const scatterTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const numElements = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('numElements', node, tensorMap, context);
          const tensorList = (0,_executor_tensor_list__WEBPACK_IMPORTED_MODULE_3__.scatter)(scatterTensor, scatterIndices, elementShape, numElements);
          context.addTensorList(tensorList);
          return [tensorList.idTensor];
        }
      case 'TensorListReserve':
      case 'EmptyTensorList':
        {
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          let numElementsParam;
          if (node.op === 'TensorListReserve') {
            numElementsParam = 'numElements';
          } else {
            numElementsParam = 'maxNumElements';
          }
          const numElements = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)(numElementsParam, node, tensorMap, context);
          const maxNumElements = node.op === 'TensorListReserve' ? -1 : numElements;
          const tensorList = (0,_executor_tensor_list__WEBPACK_IMPORTED_MODULE_3__.reserve)(elementShape, elementDtype, numElements, maxNumElements);
          context.addTensorList(tensorList);
          return [tensorList.idTensor];
        }
      case 'TensorListGather':
        {
          const gatherId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const gatherIndices = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('indices', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          const tensorList = context.getTensorList(gatherId.id);
          return [tensorList.gather(gatherIndices, elementDtype, elementShape)];
        }
      case 'TensorListStack':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          const numElements = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('numElements', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          return [tensorList.stack(elementShape, elementDtype, numElements)];
        }
      case 'TensorListFromTensor':
        {
          const tensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          const tensorList = (0,_executor_tensor_list__WEBPACK_IMPORTED_MODULE_3__.fromTensor)(tensor, elementShape, elementDtype);
          context.addTensorList(tensorList);
          return [tensorList.idTensor];
        }
      case 'TensorListConcat':
      case 'TensorListConcatV2':
        {
          const concatId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const tensorList = context.getTensorList(concatId.id);
          const concatDtype = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('dtype', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          return [tensorList.concat(concatDtype, elementShape)];
        }
      case 'TensorListPushBack':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const writeTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          tensorList.pushBack(writeTensor);
          return [tensorList.idTensor];
        }
      case 'TensorListPopBack':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const elementDType = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementDType', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          return [tensorList.popBack(elementShape, elementDType)];
        }
      case 'TensorListSplit':
        {
          const splitTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensor', node, tensorMap, context);
          const elementShape = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('elementShape', node, tensorMap, context);
          const lengths = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('lengths', node, tensorMap, context);
          const tensorList = (0,_executor_tensor_list__WEBPACK_IMPORTED_MODULE_3__.split)(splitTensor, lengths, elementShape);
          context.addTensorList(tensorList);
          return [tensorList.idTensor];
        }
      case 'TensorListLength':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const tensorList = context.getTensorList(idTensor.id);
          return [(0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__.scalar)(tensorList.size(), 'int32')];
        }
      case 'TensorListResize':
        {
          const idTensor = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('tensorListId', node, tensorMap, context);
          const size = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getParamValue)('size', node, tensorMap, context);
          const srcTensorList = context.getTensorList(idTensor.id);
          const destTensorList = srcTensorList.resize(size);
          context.addTensorList(destTensorList);
          return [destTensorList.idTensor];
        }
      default:
        throw TypeError(`Node type ${node.op} is not implemented`);
    }
  });
  return function executeOp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const CATEGORY = 'control';

/***/ }),

/***/ 48813:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


function fusedConvAndDepthWiseParams(node, tensorMap, context) {
  const [extraOp, activationFunc] = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('fusedOps', node, tensorMap, context);
  const isBiasAdd = extraOp === 'biasadd';
  const noBiasAdd = !isBiasAdd;
  const isPrelu = activationFunc === 'prelu';
  const isBatchNorm = extraOp === 'fusedbatchnorm';
  const numArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('numArgs', node, tensorMap, context);
  if (isBiasAdd) {
    if (isPrelu && numArgs !== 2) {
      throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu ' + 'must have two extra arguments: bias and alpha.');
    }
    if (!isPrelu && isBiasAdd && numArgs !== 1) {
      throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd must have ' + 'one extra argument: bias.');
    }
  }
  if (isBatchNorm) {
    throw new Error('FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported');
  }
  const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
  const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPadding)(node, tensorMap, context);
  const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
  const dilations = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilations', node, tensorMap, context);
  let [biasArg, preluArg] = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('args', node, tensorMap, context);
  if (noBiasAdd) {
    preluArg = biasArg;
    biasArg = undefined;
  }
  const leakyreluAlpha = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('leakyreluAlpha', node, tensorMap, context);
  return {
    stride,
    pad,
    dataFormat,
    dilations,
    biasArg,
    preluArg,
    activationFunc,
    leakyreluAlpha
  };
}
const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Conv1D':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('stride', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilation', node, tensorMap, context);
        return [ops.conv1d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), stride, pad, dataFormat, dilation)];
      }
    case 'Conv2D':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPadding)(node, tensorMap, context);
        const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilations = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilations', node, tensorMap, context);
        return [ops.conv2d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
      }
    case '_FusedConv2D':
      {
        const {
          stride,
          pad,
          dataFormat,
          dilations,
          biasArg,
          preluArg,
          activationFunc,
          leakyreluAlpha
        } = fusedConvAndDepthWiseParams(node, tensorMap, context);
        return [ops.fused.conv2d({
          x: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context),
          filter: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context),
          strides: [stride[1], stride[2]],
          pad: pad,
          dataFormat: dataFormat,
          dilations: [dilations[1], dilations[2]],
          bias: biasArg,
          activation: activationFunc,
          preluActivationWeights: preluArg,
          leakyreluAlpha
        })];
      }
    case 'FusedDepthwiseConv2dNative':
      {
        const {
          stride,
          pad,
          dataFormat,
          dilations,
          biasArg,
          preluArg,
          activationFunc,
          leakyreluAlpha
        } = fusedConvAndDepthWiseParams(node, tensorMap, context);
        return [ops.fused.depthwiseConv2d({
          x: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context),
          filter: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context),
          strides: [stride[1], stride[2]],
          pad: pad,
          dataFormat: dataFormat,
          dilations: [dilations[1], dilations[2]],
          bias: biasArg,
          activation: activationFunc,
          preluActivationWeights: preluArg,
          leakyreluAlpha
        })];
      }
    case 'Conv2DBackpropInput':
    case 'Conv2dTranspose':
      {
        const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('outputShape', node, tensorMap, context);
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPadding)(node, tensorMap, context);
        return [ops.conv2dTranspose((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), shape, [stride[1], stride[2]], pad)];
      }
    case 'DepthwiseConv2dNative':
    case 'DepthwiseConv2d':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPadding)(node, tensorMap, context);
        const dilations = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilations', node, tensorMap, context);
        const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        return [ops.depthwiseConv2d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('input', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
      }
    case 'Conv3D':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilations = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilations', node, tensorMap, context);
        return [ops.conv3d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2], stride[3]], pad, dataFormat, [dilations[1], dilations[2], dilations[3]])];
      }
    case 'AvgPool':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.avgPool((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
      }
    case 'MaxPool':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.maxPool((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
      }
    case 'MaxPoolWithArgmax':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('kernelSize', node, tensorMap, context);
        const includeBatchInIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('includeBatchInIndex', node, tensorMap, context);
        const {
          result,
          indexes
        } = ops.maxPoolWithArgmax((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad, includeBatchInIndex);
        return [result, indexes];
      }
    case 'AvgPool3D':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.avgPool3d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
      }
    case 'MaxPool3D':
      {
        const stride = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.maxPool3d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
      }
    case 'Dilation2D':
      {
        const strides = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('strides', node, tensorMap, context);
        const pad = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('pad', node, tensorMap, context);
        const dilations = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dilations', node, tensorMap, context);
        // strides: [1, stride_height, stride_width, 1].
        const strideHeight = strides[1];
        const strideWidth = strides[2];
        // dilations: [1, dilation_height, dilation_width, 1].
        const dilationHeight = dilations[1];
        const dilationWidth = dilations[2];
        return [ops.dilation2d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('filter', node, tensorMap, context), [strideHeight, strideWidth], pad, [dilationHeight, dilationWidth], 'NHWC' /* dataFormat */)];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'convolution';

/***/ }),

/***/ 50767:
/*!************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Fill':
      {
        const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context);
        const dtype = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context);
        const value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('value', node, tensorMap, context);
        return [ops.fill(shape, value, dtype)];
      }
    case 'LinSpace':
      {
        const start = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('start', node, tensorMap, context);
        const stop = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('stop', node, tensorMap, context);
        const num = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('num', node, tensorMap, context);
        return [ops.linspace(start, stop, num)];
      }
    case 'Multinomial':
      {
        const logits = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('logits', node, tensorMap, context);
        const numSamples = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('numSamples', node, tensorMap, context);
        const seed = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('seed', node, tensorMap, context);
        return [ops.multinomial(logits, numSamples, seed)];
      }
    case 'OneHot':
      {
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('indices', node, tensorMap, context);
        const depth = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('depth', node, tensorMap, context);
        const onValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('onValue', node, tensorMap, context);
        const offValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('offValue', node, tensorMap, context);
        const dtype = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context);
        return [ops.oneHot(indices, depth, onValue, offValue, dtype)];
      }
    case 'Ones':
      {
        return [ops.ones((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context))];
      }
    case 'OnesLike':
      {
        return [ops.onesLike((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'RandomStandardNormal':
      {
        return [ops.randomStandardNormal((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('seed', node, tensorMap, context))];
      }
    case 'RandomUniform':
      {
        return [ops.randomUniform(
        // tslint:disable-next-line:no-any
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('minval', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('maxval', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context))];
      }
    case 'Range':
      {
        const start = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('start', node, tensorMap, context);
        const stop = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('stop', node, tensorMap, context);
        const step = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('step', node, tensorMap, context);
        return [ops.range(start, stop, step, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context))];
      }
    case 'TruncatedNormal':
      {
        const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context);
        const mean = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('mean', node, tensorMap, context);
        const stdDev = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('stdDev', node, tensorMap, context);
        const seed = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('seed', node, tensorMap, context);
        return [ops.truncatedNormal(shape, mean, stdDev, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context), seed)];
      }
    case 'Zeros':
      {
        return [ops.zeros((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context))];
      }
    case 'ZerosLike':
      {
        return [ops.zerosLike((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'creation';

/***/ }),

/***/ 96993:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 25703);

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


function nmsParams(node, tensorMap, context) {
  const boxes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('boxes', node, tensorMap, context);
  const scores = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('scores', node, tensorMap, context);
  const maxOutputSize = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('maxOutputSize', node, tensorMap, context);
  const iouThreshold = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('iouThreshold', node, tensorMap, context);
  const scoreThreshold = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('scoreThreshold', node, tensorMap, context);
  const softNmsSigma = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('softNmsSigma', node, tensorMap, context);
  return {
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  };
}
const executeOp = /*#__PURE__*/function () {
  var _ref = (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (node, tensorMap, context, resourceManager, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__) {
    switch (node.op) {
      case 'NonMaxSuppressionV5':
        {
          const {
            boxes,
            scores,
            maxOutputSize,
            iouThreshold,
            scoreThreshold,
            softNmsSigma
          } = nmsParams(node, tensorMap, context);
          const result = yield ops.image.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
          return [result.selectedIndices, result.selectedScores];
        }
      case 'NonMaxSuppressionV4':
        {
          const {
            boxes,
            scores,
            maxOutputSize,
            iouThreshold,
            scoreThreshold
          } = nmsParams(node, tensorMap, context);
          const padToMaxOutputSize = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('padToMaxOutputSize', node, tensorMap, context);
          const result = yield ops.image.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
          return [result.selectedIndices, result.validOutputs];
        }
      case 'NonMaxSuppressionV3':
      case 'NonMaxSuppressionV2':
        {
          const {
            boxes,
            scores,
            maxOutputSize,
            iouThreshold,
            scoreThreshold
          } = nmsParams(node, tensorMap, context);
          return [yield ops.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
        }
      case 'Where':
        {
          const condition = ops.cast((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('condition', node, tensorMap, context), 'bool');
          const result = [yield ops.whereAsync(condition)];
          condition.dispose();
          return result;
        }
      case 'ListDiff':
        {
          return ops.setdiff1dAsync((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('y', node, tensorMap, context));
        }
      default:
        throw TypeError(`Node type ${node.op} is not implemented`);
    }
  });
  return function executeOp(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
const CATEGORY = 'dynamic';

/***/ }),

/***/ 81450:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'LowerBound':
      {
        const sortedSequence = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('sortedSequence', node, tensorMap, context);
        const values = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('values', node, tensorMap, context);
        return [ops.lowerBound(sortedSequence, values)];
      }
    case 'TopKV2':
      {
        const x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
        const k = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('k', node, tensorMap, context);
        const sorted = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('sorted', node, tensorMap, context);
        const result = ops.topk(x, k, sorted);
        return [result.values, result.indices];
      }
    case 'UpperBound':
      {
        const sortedSequence = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('sortedSequence', node, tensorMap, context);
        const values = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('values', node, tensorMap, context);
        return [ops.upperBound(sortedSequence, values)];
      }
    case 'Unique':
      {
        const x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
        const result = ops.unique(x);
        return [result.values, result.indices];
      }
    case 'UniqueV2':
      {
        const x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const result = ops.unique(x, axis);
        return [result.values, result.indices];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'evaluation';

/***/ }),

/***/ 30962:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Const':
      {
        return tensorMap[node.name];
      }
    case 'PlaceholderWithDefault':
      const def = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('default', node, tensorMap, context);
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(node.name, tensorMap, context) || def];
    case 'Placeholder':
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTensor)(node.name, tensorMap, context)];
    case 'Identity':
    case 'StopGradient':
    case 'FakeQuantWithMinMaxVars':
      {
        // This op is currently ignored.
        const data = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
        return [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.cloneTensor)(data)];
      }
    case 'IdentityN':
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context).map(t => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cloneTensor)(t));
    case 'Snapshot':
      const snapshot = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.cloneTensor)(snapshot)];
    case 'Shape':
      return [ops.tensor1d((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context).shape, 'int32')];
    case 'ShapeN':
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context).map(t => ops.tensor1d(t.shape));
    case 'Size':
      return [ops.scalar((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context).size, 'int32')];
    case 'Rank':
      return [ops.scalar((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context).rank, 'int32')];
    case 'NoOp':
      return [ops.scalar(1)];
    case 'Print':
      const input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
      const data = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('data', node, tensorMap, context);
      const message = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('message', node, tensorMap, context);
      const summarize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('summarize', node, tensorMap, context);
      console.warn('The graph has a tf.print() operation,' + 'usually used for debugging, which slows down performance.');
      console.log(message);
      for (let i = 0; i < data.length; i++) {
        console.log(Array.prototype.slice.call(data[i].dataSync()).slice(0, summarize));
      }
      return [input];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'graph';

/***/ }),

/***/ 78523:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _executor_hash_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../executor/hash_table */ 82618);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 25703);

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const executeOp = /*#__PURE__*/function () {
  var _ref = (0,_Users_victorbarbosa_git_AiSamples_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (node, tensorMap, context, resourceManager) {
    switch (node.op) {
      case 'HashTable':
      case 'HashTableV2':
        {
          const keyDType = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('keyDType', node, tensorMap, context);
          const valueDType = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('valueDType', node, tensorMap, context);
          const hashTable = new _executor_hash_table__WEBPACK_IMPORTED_MODULE_1__.HashTable(keyDType, valueDType);
          resourceManager.addHashTable(node.name, hashTable);
          return [hashTable.handle];
        }
      case 'LookupTableImport':
      case 'LookupTableImportV2':
        {
          const handle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
          const keys = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('keys', node, tensorMap, context);
          const values = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('values', node, tensorMap, context);
          const hashTable = resourceManager.getHashTableById(handle.id);
          return [yield hashTable.import(keys, values)];
        }
      case 'LookupTableFind':
      case 'LookupTableFindV2':
        {
          const handle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
          const keys = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('keys', node, tensorMap, context);
          const defaultValue = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('defaultValue', node, tensorMap, context);
          const hashTable = resourceManager.getHashTableById(handle.id);
          return [yield hashTable.find(keys, defaultValue)];
        }
      case 'LookupTableSize':
      case 'LookupTableSizeV2':
        {
          const handle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
          const hashTable = resourceManager.getHashTableById(handle.id);
          return [hashTable.tensorSize()];
        }
      default:
        throw TypeError(`Node type ${node.op} is not implemented`);
    }
  });
  return function executeOp(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
const CATEGORY = 'hash_table';

/***/ }),

/***/ 23670:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'ResizeBilinear':
      {
        const images = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('images', node, tensorMap, context);
        const size = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('size', node, tensorMap, context);
        const alignCorners = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('alignCorners', node, tensorMap, context);
        const halfPixelCenters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('halfPixelCenters', node, tensorMap, context);
        return [ops.image.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
      }
    case 'ResizeNearestNeighbor':
      {
        const images = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('images', node, tensorMap, context);
        const size = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('size', node, tensorMap, context);
        const alignCorners = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('alignCorners', node, tensorMap, context);
        const halfPixelCenters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('halfPixelCenters', node, tensorMap, context);
        return [ops.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
      }
    case 'CropAndResize':
      {
        const image = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('image', node, tensorMap, context);
        const boxes = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('boxes', node, tensorMap, context);
        const boxInd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('boxInd', node, tensorMap, context);
        const cropSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('cropSize', node, tensorMap, context);
        const method = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('method', node, tensorMap, context);
        const extrapolationValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('extrapolationValue', node, tensorMap, context);
        return [ops.image.cropAndResize(image, boxes, boxInd, cropSize, method, extrapolationValue)];
      }
    case 'ImageProjectiveTransformV3':
      {
        const images = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('images', node, tensorMap, context);
        const transforms = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('transforms', node, tensorMap, context);
        const outputShape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('outputShape', node, tensorMap, context);
        const fillValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('fillValue', node, tensorMap, context);
        const interpolation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('interpolation', node, tensorMap, context);
        const fillMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('fillMode', node, tensorMap, context);
        return [ops.image.transform(images, transforms, interpolation.toLowerCase(), fillMode.toLowerCase(), fillValue, outputShape)];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'image';

/***/ }),

/***/ 8960:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Equal':
      {
        return [ops.equal((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'NotEqual':
      {
        return [ops.notEqual((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Greater':
      {
        return [ops.greater((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'GreaterEqual':
      {
        return [ops.greaterEqual((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Less':
      {
        return [ops.less((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'LessEqual':
      {
        return [ops.lessEqual((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'LogicalAnd':
      {
        return [ops.logicalAnd((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'LogicalNot':
      {
        return [ops.logicalNot((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context))];
      }
    case 'LogicalOr':
      {
        return [ops.logicalOr((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    case 'Select':
    case 'SelectV2':
      {
        return [ops.where((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('condition', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'logical';

/***/ }),

/***/ 45116:
/*!************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'BatchMatMul':
    case 'BatchMatMulV2':
    case 'MatMul':
      return [ops.matMul((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('transposeA', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('transposeB', node, tensorMap, context))];
    case 'Einsum':
      return [ops.einsum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('equation', node, tensorMap, context), ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('tensors', node, tensorMap, context))];
    case 'Transpose':
      return [ops.transpose((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('perm', node, tensorMap, context))];
    case '_FusedMatMul':
      const [extraOp, activationFunc] = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('fusedOps', node, tensorMap, context);
      const isBiasAdd = extraOp === 'biasadd';
      const isPrelu = activationFunc === 'prelu';
      const numArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('numArgs', node, tensorMap, context);
      const leakyreluAlpha = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('leakyreluAlpha', node, tensorMap, context);
      if (isBiasAdd) {
        if (isPrelu && numArgs !== 2) {
          throw new Error('Fused MatMul with BiasAdd and Prelu must have two ' + 'extra arguments: bias and alpha.');
        }
        if (!isPrelu && numArgs !== 1) {
          throw new Error('Fused MatMul with BiasAdd must have one extra argument: bias.');
        }
      }
      const [biasArg, preluArg] = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('args', node, tensorMap, context);
      return [ops.fused.matMul({
        a: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('a', node, tensorMap, context),
        b: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('b', node, tensorMap, context),
        transposeA: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('transposeA', node, tensorMap, context),
        transposeB: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('transposeB', node, tensorMap, context),
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'matrices';

/***/ }),

/***/ 24327:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'EuclideanNorm':
      return [ops.euclideanNorm((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context))];
    case 'FusedBatchNorm':
    case 'FusedBatchNormV2':
      {
        return [ops.batchNorm((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('mean', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('variance', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('offset', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('scale', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('epsilon', node, tensorMap, context))];
      }
    case 'FusedBatchNormV3':
      {
        return [ops.batchNorm((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('mean', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('variance', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('offset', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('scale', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('epsilon', node, tensorMap, context))];
      }
    case 'LRN':
      {
        return [ops.localResponseNormalization((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('radius', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('bias', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('alpha', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('beta', node, tensorMap, context))];
      }
    case 'Softmax':
      {
        return [ops.softmax((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'LogSoftmax':
      {
        return [ops.logSoftmax((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'SparseToDense':
      {
        return [ops.sparseToDense((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('sparseIndices', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('outputShape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('sparseValues', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('defaultValue', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'normalization';

/***/ }),

/***/ 64805:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Max':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.max((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'Mean':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.mean((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'Min':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.min((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'Sum':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.sum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'All':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.all((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'Any':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.any((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'ArgMax':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        return [ops.argMax((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis)];
      }
    case 'ArgMin':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        return [ops.argMin((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis)];
      }
    case 'Prod':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.prod((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }
    case 'Cumprod':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const exclusive = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('exclusive', node, tensorMap, context);
        const reverse = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('reverse', node, tensorMap, context);
        return [ops.cumprod((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, exclusive, reverse)];
      }
    case 'Cumsum':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        const exclusive = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('exclusive', node, tensorMap, context);
        const reverse = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('reverse', node, tensorMap, context);
        return [ops.cumsum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis, exclusive, reverse)];
      }
    case 'Bincount':
      const x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
      const weights = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('weights', node, tensorMap, context);
      const size = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('size', node, tensorMap, context);
      return [ops.bincount(x, weights, size)];
    case 'DenseBincount':
      {
        const x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context);
        const weights = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('weights', node, tensorMap, context);
        const size = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('size', node, tensorMap, context);
        const binaryOutput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('binaryOutput', node, tensorMap, context);
        return [ops.denseBincount(x, weights, size, binaryOutput)];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'reduction';

/***/ }),

/***/ 614:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_2__) => {
  switch (node.op) {
    case 'ConcatV2':
    case 'Concat':
      {
        const n = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('n', node, tensorMap, context);
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
        let inputs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('tensors', node, tensorMap, context);
        inputs = inputs.slice(0, n);
        return [ops.concat(inputs, axis)];
      }
    case 'Gather':
      {
        const input = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('indices', node, tensorMap, context);
        return [ops.gather(input, ops.cast(indices, 'int32'), 0)];
      }
    case 'GatherV2':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
        const batchDims = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('batchDims', node, tensorMap, context);
        const input = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('indices', node, tensorMap, context);
        return [ops.gather(input, ops.cast(indices, 'int32'), axis, batchDims)];
      }
    case 'Reverse':
      {
        const dims = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('dims', node, tensorMap, context);
        const axis = [];
        for (let i = 0; i < dims.length; i++) {
          if (dims[i]) {
            axis.push(i);
          }
        }
        const input = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        return [ops.reverse(input, axis)];
      }
    case 'ReverseV2':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
        const input = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        return [ops.reverse(input, axis)];
      }
    case 'Slice':
      {
        // tslint:disable-next-line:no-any
        const begin = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('begin', node, tensorMap, context);
        // tslint:disable-next-line:no-any
        const size = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('size', node, tensorMap, context);
        return [ops.slice((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context), begin, size)];
      }
    case 'StridedSlice':
      {
        const begin = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('begin', node, tensorMap, context);
        const end = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('end', node, tensorMap, context);
        const strides = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('strides', node, tensorMap, context);
        const beginMask = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('beginMask', node, tensorMap, context);
        const endMask = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('endMask', node, tensorMap, context);
        const ellipsisMask = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('ellipsisMask', node, tensorMap, context);
        const newAxisMask = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('newAxisMask', node, tensorMap, context);
        const shrinkAxisMask = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('shrinkAxisMask', node, tensorMap, context);
        const tensor = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        return [ops.stridedSlice(tensor, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
      }
    case 'Pack':
      {
        return (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy)(() => {
          const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
          const tensors = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('tensors', node, tensorMap, context);
          // Reshape the tensors to the first tensor's shape if they don't
          // match.
          const shape = tensors[0].shape;
          const squeezedShape = ops.squeeze(tensors[0]).shape;
          const mapped = tensors.map(tensor => {
            const sameShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.arraysEqual(tensor.shape, shape);
            if (!sameShape && !_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.arraysEqual(ops.squeeze(tensor).shape, squeezedShape)) {
              throw new Error('the input tensors shape does not match');
            }
            return sameShape ? tensor : ops.reshape(tensor, shape);
          });
          return [ops.stack(mapped, axis)];
        });
      }
    case 'Unpack':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
        const tensor = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('tensor', node, tensorMap, context);
        return ops.unstack(tensor, axis);
      }
    case 'Tile':
      {
        const reps = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('reps', node, tensorMap, context);
        return [ops.tile((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context), reps)];
      }
    case 'Split':
    case 'SplitV':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('axis', node, tensorMap, context);
        const numOrSizeSplits = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('numOrSizeSplits', node, tensorMap, context);
        const tensor = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        return ops.split(tensor, numOrSizeSplits, axis);
      }
    case 'ScatterNd':
      {
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('indices', node, tensorMap, context);
        const values = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('values', node, tensorMap, context);
        const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('shape', node, tensorMap, context);
        return [ops.scatterND(indices, values, shape)];
      }
    case 'GatherNd':
      {
        const x = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('x', node, tensorMap, context);
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('indices', node, tensorMap, context);
        return [ops.gatherND(x, indices)];
      }
    case 'SparseToDense':
      {
        const indices = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('sparseIndices', node, tensorMap, context);
        const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('outputShape', node, tensorMap, context);
        const sparseValues = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('sparseValues', node, tensorMap, context);
        const defaultValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParamValue)('defaultValue', node, tensorMap, context);
        return [ops.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ? defaultValue : ops.cast(defaultValue, sparseValues.dtype))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'slice_join';

/***/ }),

/***/ 25511:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'SparseFillEmptyRows':
      {
        const {
          outputIndices,
          outputValues,
          emptyRowIndicator,
          reverseIndexMap
        } = ops.sparse.sparseFillEmptyRows((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('indices', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('values', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('denseShape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('defaultValue', node, tensorMap, context));
        return [outputIndices, outputValues, emptyRowIndicator, reverseIndexMap];
      }
    case 'SparseReshape':
      {
        const {
          outputIndices,
          outputShape
        } = ops.sparse.sparseReshape((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('inputIndices', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('inputShape', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('newShape', node, tensorMap, context));
        return [outputIndices, outputShape];
      }
    case 'SparseSegmentMean':
      {
        const outputData = ops.sparse.sparseSegmentMean((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('data', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('indices', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('segmentIds', node, tensorMap, context));
        return [outputData];
      }
    case 'SparseSegmentSum':
      {
        const outputData = ops.sparse.sparseSegmentSum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('data', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('indices', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('segmentIds', node, tensorMap, context));
        return [outputData];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'sparse';

/***/ }),

/***/ 3653:
/*!************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'FFT':
      {
        return [ops.fft((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'IFFT':
      {
        return [ops.ifft((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'RFFT':
      {
        return [ops.rfft((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    case 'IRFFT':
      {
        return [ops.irfft((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'spectral';

/***/ }),

/***/ 75804:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'StringNGrams':
      {
        const {
          nGrams,
          nGramsSplits
        } = ops.string.stringNGrams((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('data', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataSplits', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('separator', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('nGramWidths', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('leftPad', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('rightPad', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('padWidth', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('preserveShortSequences', node, tensorMap, context));
        return [nGrams, nGramsSplits];
      }
    case 'StringSplit':
      {
        const {
          indices,
          values,
          shape
        } = ops.string.stringSplit((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('input', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('delimiter', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('skipEmpty', node, tensorMap, context));
        return [indices, values, shape];
      }
    case 'StringToHashBucketFast':
      {
        const output = ops.string.stringToHashBucketFast((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('input', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('numBuckets', node, tensorMap, context));
        return [output];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'string';

/***/ }),

/***/ 42085:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core/dist/ops/ops_for_converter */ 29801);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 25703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist


const executeOp = (node, tensorMap, context, ops = _tensorflow_tfjs_core_dist_ops_ops_for_converter__WEBPACK_IMPORTED_MODULE_1__) => {
  switch (node.op) {
    case 'Cast':
      {
        return [ops.cast((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dtype', node, tensorMap, context))];
      }
    case 'ExpandDims':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        return [ops.expandDims((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis)];
      }
    case 'Squeeze':
      {
        const axis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('axis', node, tensorMap, context);
        return [ops.squeeze((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), axis)];
      }
    case 'Reshape':
      {
        return [ops.reshape((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context))];
      }
    case 'MirrorPad':
      {
        return [ops.mirrorPad((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('padding', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('mode', node, tensorMap, context))];
      }
    case 'PadV2':
    case 'Pad':
      {
        return [ops.pad((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('padding', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('constantValue', node, tensorMap, context))];
      }
    case 'SpaceToBatchND':
      {
        const blockShape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('blockShape', node, tensorMap, context);
        const paddings = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('paddings', node, tensorMap, context);
        return [ops.spaceToBatchND((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), blockShape, paddings)];
      }
    case 'BatchToSpaceND':
      {
        const blockShape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('blockShape', node, tensorMap, context);
        const crops = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('crops', node, tensorMap, context);
        return [ops.batchToSpaceND((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), blockShape, crops)];
      }
    case 'DepthToSpace':
      {
        const blockSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('blockSize', node, tensorMap, context);
        const dataFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        return [ops.depthToSpace((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), blockSize, dataFormat)];
      }
    case 'BroadcastTo':
      {
        return [ops.broadcastTo((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('x', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('shape', node, tensorMap, context))];
      }
    case 'BroadcastArgs':
      {
        return [ops.broadcastArgs((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('s0', node, tensorMap, context), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getParamValue)('s1', node, tensorMap, context))];
      }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};
const CATEGORY = 'transformation';

/***/ }),

/***/ 25703:
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneTensor": () => (/* binding */ cloneTensor),
/* harmony export */   "getNodeNameAndIndex": () => (/* binding */ getNodeNameAndIndex),
/* harmony export */   "getPadding": () => (/* binding */ getPadding),
/* harmony export */   "getParamValue": () => (/* binding */ getParamValue),
/* harmony export */   "getTensor": () => (/* binding */ getTensor),
/* harmony export */   "getTensorsForCurrentContenxt": () => (/* binding */ getTensorsForCurrentContenxt),
/* harmony export */   "parseNodeName": () => (/* binding */ parseNodeName),
/* harmony export */   "split": () => (/* binding */ split)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function getParamValue(paramName, node, tensorMap, context, resourceManager) {
  const inputParam = node.inputParams[paramName];
  if (inputParam && inputParam.inputIndexStart !== undefined) {
    const start = inputParam.inputIndexStart;
    const end = inputParam.inputIndexEnd === 0 ? undefined : inputParam.inputIndexEnd === undefined ? start + 1 : inputParam.inputIndexEnd;
    if (inputParam.type === 'tensor') {
      return getTensor(node.inputNames[inputParam.inputIndexStart], tensorMap, context, resourceManager);
    }
    if (inputParam.type === 'tensors') {
      const inputs = node.inputNames.slice(start, end);
      return inputs.map(name => getTensor(name, tensorMap, context, resourceManager));
    }
    const tensor = getTensor(node.inputNames.slice(start)[0], tensorMap, context, resourceManager);
    const data = tensor.dataSync();
    return inputParam.type === 'number' ? data[0] : _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.toNestedArray(tensor.shape, data);
  }
  const attrParam = node.attrParams[paramName];
  return attrParam && attrParam.value;
}
/**
 * Retrieve the tensor from tensorsMap based on input name.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */
function getTensor(name, tensorsMap, context, resourceManager) {
  const [nodeName, index] = parseNodeName(name);
  if (resourceManager != null) {
    const tensor = resourceManager.getHashTableHandleByName(nodeName);
    if (tensor != null) {
      return tensor;
    }
  }
  const contextId = context.currentContextIds.find(contextId => {
    return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
  });
  return contextId !== undefined ? tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] : undefined;
}
/**
 * Retrieve the tensors based on input name for current context.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 */
function getTensorsForCurrentContenxt(name, tensorsMap, context) {
  return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
/**
 * Returns the node name, outputName and index from the Node input name.
 * @param inputName The input name of the node, in format of
 * node_name:output_index, i.e. MatMul:0, if the output_index is not set, it is
 * default to 0.
 * If the input name contains output name i.e. StringSplit:indices:0, it will
 * return ['StringSplit', 0, 'indices'].
 */
function getNodeNameAndIndex(inputName, context) {
  const [nodeName, index, outputName] = parseNodeName(inputName);
  return [getNodeNameWithContextId(nodeName, context && context.currentContextId), index, outputName];
}
function getNodeNameWithContextId(name, contextId) {
  return !!contextId ? `${name}-${contextId}` : name;
}
function parseNodeName(name) {
  const parts = name.split(':');
  if (parts.length === 1) {
    return [name, 0, undefined];
  }
  const nodeName = parts[0];
  const outputName = parts.length === 3 ? parts[1] : undefined;
  const index = Number(parts[parts.length - 1]);
  return [nodeName, index, outputName];
}
function split(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
function getPadding(node, tensorMap, context) {
  let pad = getParamValue('pad', node, tensorMap, context);
  if (pad === 'explicit') {
    // This is 1d array, we need to convert it to 2d array
    pad = getParamValue('explicitPaddings', node, tensorMap, context);
    const explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];
    for (let i = 0; i < 4; i++) {
      explicitPadding[i][0] = pad[i * 2];
      explicitPadding[i][1] = pad[i * 2 + 1];
    }
    return explicitPadding;
  }
  return pad;
}
/**
 *  Reuse the tensor if it is marked as keep, otherwise clone the tensor to
 *  avoid disposal. This is important for TensorArray and TensorList ops, since
 *  internally they use a tensor as the id for TensorArray and TensorList, and
 * to simplify lookup, they also use Tensor.id as the key to the internal map.
 * These id tensors have been marked as kept in the backend, we need avoid clone
 * them in order to create new Tensor.id.
 * @param tensor
 */
function cloneTensor(tensor) {
  return tensor.kept ? tensor : (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.clone)(tensor);
}

/***/ }),

/***/ 55775:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Add',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AddV2',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AddN',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'BiasAdd',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sub',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'RealDiv',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Div',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'DivNoNan',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FloorDiv',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Mul',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Maximum',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Minimum',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Pow',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SquaredDifference',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Mod',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FloorMod',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];

/***/ }),

/***/ 46752:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Abs',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Acos',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Asin',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atan2',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'y',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Ceil',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ClipByValue',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'clipValueMin',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'clipValueMax',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Complex',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'real',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'imag',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ComplexAbs',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Cos',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Cosh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Elu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Exp',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Floor',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Log',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Imag',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'outputType',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Neg',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Real',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'outputType',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Prelu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'alpha',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Relu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Relu6',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Selu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sigmoid',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sin',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sinh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sqrt',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Rsqrt',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Square',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tanh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sign',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Round',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Expm1',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Log1p',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Reciprocal',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Softplus',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Asinh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Acosh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atanh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Erf',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Prod',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axes',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool',
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LeakyRelu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'alpha',
    'name': 'alpha',
    'type': 'number',
    'defaultValue': 0.2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IsNan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];

/***/ }),

/***/ 4405:
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/control.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'EmptyTensorList',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 1,
    'name': 'maxNumElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LoopCond',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'pred',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Switch',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'pred',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Merge',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Enter',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'frame_name',
    'name': 'frameName',
    'type': 'string'
  }, {
    'tfName': 'is_constant',
    'name': 'isConstant',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Exit',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'NextIteration',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'size',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'dynamic_size',
    'name': 'dynamicSize',
    'type': 'bool'
  }, {
    'tfName': 'clear_after_read',
    'name': 'clearAfterRead',
    'type': 'bool'
  }, {
    'tfName': 'identical_element_shapes',
    'name': 'identicalElementShapes',
    'type': 'bool'
  }, {
    'tfName': 'tensor_array_name',
    'name': 'name',
    'type': 'string'
  }]
}, {
  'tfOpName': 'TensorArrayWriteV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayReadV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayGatherV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }]
}, {
  'tfOpName': 'TensorArrayScatterV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorArrayConcatV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape_except0',
    'name': 'elementShapeExcept0',
    'type': 'shape',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArraySplitV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'lengths',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorArraySizeV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'flowIn',
    'type': 'number'
  }]
}, {
  'tfOpName': 'TensorArrayCloseV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'StatelessIf',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'cond',
    'type': 'tensor'
  }, {
    'start': 1,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'then_branch',
    'name': 'thenBranch',
    'type': 'func'
  }, {
    'tfName': 'else_branch',
    'name': 'elseBranch',
    'type': 'func'
  }]
}, {
  'tfOpName': 'If',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'cond',
    'type': 'tensor'
  }, {
    'start': 1,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'then_branch',
    'name': 'thenBranch',
    'type': 'func'
  }, {
    'tfName': 'else_branch',
    'name': 'elseBranch',
    'type': 'func'
  }]
}, {
  'tfOpName': 'StatelessWhile',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'cond',
    'name': 'cond',
    'type': 'func'
  }, {
    'tfName': 'body',
    'name': 'body',
    'type': 'func'
  }]
}, {
  'tfOpName': 'While',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'cond',
    'name': 'cond',
    'type': 'func'
  }, {
    'tfName': 'body',
    'name': 'body',
    'type': 'func'
  }]
}, {
  'tfOpName': 'TensorListScatter',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListScatterV2',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 3,
    'name': 'numElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListGather',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListGetItem',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListSetItem',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListReserve',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 1,
    'name': 'numElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListFromTensor',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListStack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }, {
    'tfName': 'num_elements',
    'name': 'numElements',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListSplit',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 2,
    'name': 'lengths',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListConcat',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListConcatV2',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListPopBack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListPushBack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListLength',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'TensorListResize',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }]
}];

/***/ }),

/***/ 68338:
/*!****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'AvgPool',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPool',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': [],
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPoolWithArgmax',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'include_batch_in_index',
    'name': 'includeBatchInIndex',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AvgPool3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPool3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Conv1D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'stride',
    'name': 'stride',
    'type': 'number'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NWC'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'dilation',
    'name': 'dilation',
    'type': 'number',
    'defaultValue': 1
  }]
}, {
  'tfOpName': 'Conv2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'useCudnnOnGpu',
    'name': 'useCudnnOnGpu',
    'type': 'bool'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': '_FusedConv2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'use_cudnn_on_gpu',
    'name': 'useCudnnOnGpu',
    'type': 'bool',
    'defaultValue': true
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'defaultValue': [1, 1, 1, 1]
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.0001
  }, {
    'tfName': 'leakyrelu_alpha',
    'name': 'leakyreluAlpha',
    'type': 'number',
    'defaultValue': 0.2
  }]
}, {
  'tfOpName': 'Conv2DBackpropInput',
  'category': 'convolution',
  'inputs': [{
    'start': 2,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 0,
    'name': 'outputShape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'notSupported': true
  }]
}, {
  'tfOpName': 'DepthwiseConv2d',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'DepthwiseConv2dNative',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'FusedDepthwiseConv2dNative',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'defaultValue': [1, 1, 1, 1]
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }]
}, {
  'tfOpName': 'Conv3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Dilation2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'rates',
    'name': 'dilations',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }]
}];

/***/ }),

/***/ 95967:
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/creation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Fill',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }, {
    'start': 1,
    'name': 'value',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LinSpace',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'start',
    'type': 'number'
  }, {
    'start': 1,
    'name': 'stop',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'num',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'OneHot',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'depth',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'onValue',
    'type': 'number',
    'defaultValue': 1
  }, {
    'start': 3,
    'name': 'offValue',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Ones',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'OnesLike',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'RandomStandardNormal',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'RandomUniform',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'minval',
    'name': 'minval',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'maxval',
    'name': 'maxval',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Range',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'start',
    'type': 'number'
  }, {
    'start': 1,
    'name': 'stop',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'step',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'Tidx',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TruncatedNormal',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'means',
    'name': 'mean',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'stddev',
    'name': 'stdDev',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number'
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Zeros',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'ZerosLike',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Multinomial',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'logits',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numSamples',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number'
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'output_dtype',
    'name': 'output_dtype',
    'type': 'dtype'
  }]
}];

/***/ }),

/***/ 45475:
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'NonMaxSuppressionV2',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV3',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV4',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'T_threshold',
    'name': 'threshold',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'pad_to_max_output_size',
    'name': 'padToMaxOutputSize',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV5',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }, {
    'start': 5,
    'name': 'softNmsSigma',
    'type': 'number'
  }]
}, {
  'tfOpName': 'Where',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ListDiff',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'y',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];

/***/ }),

/***/ 5128:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'LowerBound',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'sortedSequence',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'TopKV2',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'k',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'sorted',
    'name': 'sorted',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'UpperBound',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'sortedSequence',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Unique',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'UniqueV2',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}];

/***/ }),

/***/ 83298:
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/graph.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'PlaceholderWithDefault',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'default',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'shape',
    'name': 'shape',
    'type': 'shape'
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Placeholder',
  'category': 'graph',
  'attrs': [{
    'tfName': 'shape',
    'name': 'shape',
    'type': 'shape'
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Const',
  'category': 'graph'
}, {
  'tfOpName': 'Identity',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'IdentityN',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'x',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Snapshot',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Rank',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Size',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Shape',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'ShapeN',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'x',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Print',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'data',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'message',
    'name': 'message',
    'type': 'string'
  }, {
    'tfName': 'first_n',
    'name': 'firstN',
    'type': 'number',
    'notSupported': true
  }, {
    'tfName': 'summarize',
    'name': 'summarize',
    'type': 'number',
    'defaultValue': 3
  }]
}, {
  'tfOpName': 'NoOp',
  'category': 'graph',
  'inputs': []
}, {
  'tfOpName': 'StopGradient',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'FakeQuantWithMinMaxVars',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'min',
    'name': 'min',
    'type': 'number'
  }, {
    'tfName': 'max',
    'name': 'max',
    'type': 'number'
  }]
}];

/***/ }),

/***/ 99416:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'HashTable',
  'category': 'hash_table',
  'inputs': [],
  'attrs': [{
    'tfName': 'shared_name',
    'name': 'sharedName',
    'type': 'string'
  }, {
    'tfName': 'use_node_name_sharing',
    'name': 'useNodeNameSharing',
    'type': 'bool'
  }, {
    'tfName': 'key_dtype',
    'name': 'keyDType',
    'type': 'dtype'
  }, {
    'tfName': 'value_dtype',
    'name': 'valueDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'HashTableV2',
  'category': 'hash_table',
  'inputs': [],
  'attrs': [{
    'tfName': 'shared_name',
    'name': 'sharedName',
    'type': 'string'
  }, {
    'tfName': 'use_node_name_sharing',
    'name': 'useNodeNameSharing',
    'type': 'bool'
  }, {
    'tfName': 'key_dtype',
    'name': 'keyDType',
    'type': 'dtype'
  }, {
    'tfName': 'value_dtype',
    'name': 'valueDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LookupTableImport',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableImportV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableFind',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableFindV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableSize',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'LookupTableSizeV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }]
}];

/***/ }),

/***/ 4468:
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/image.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'ResizeBilinear',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'align_corners',
    'name': 'alignCorners',
    'type': 'bool'
  }, {
    'tfName': 'half_pixel_centers',
    'name': 'halfPixelCenters',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ResizeNearestNeighbor',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'align_corners',
    'name': 'alignCorners',
    'type': 'bool'
  }, {
    'tfName': 'half_pixel_centers',
    'name': 'halfPixelCenters',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'CropAndResize',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'image',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'boxInd',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'cropSize',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'method',
    'name': 'method',
    'type': 'string'
  }, {
    'tfName': 'extrapolation_value',
    'name': 'extrapolationValue',
    'type': 'number'
  }]
}, {
  'tfOpName': 'ImageProjectiveTransformV3',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'transforms',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'outputShape',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'fillValue',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'interpolation',
    'name': 'interpolation',
    'type': 'string'
  }, {
    'tfName': 'fill_mode',
    'name': 'fillMode',
    'type': 'string'
  }]
}];

/***/ }),

/***/ 42611:
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/logical.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Equal',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'NotEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Greater',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'GreaterEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Less',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LessEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalAnd',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalNot',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalOr',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Select',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SelectV2',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];

/***/ }),

/***/ 35470:
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': '_FusedMatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.0001
  }, {
    'tfName': 'transpose_a',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'transpose_b',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'leakyrelu_alpha',
    'name': 'leakyreluAlpha',
    'type': 'number',
    'defaultValue': 0.2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'transpose_a',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'transpose_b',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'BatchMatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'adj_x',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'adj_y',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'BatchMatMulV2',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'adj_x',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'adj_y',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Transpose',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'perm',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Einsum',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'equation',
    'name': 'equation',
    'type': 'string'
  }, {
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}];

/***/ }),

/***/ 79603:
/*!******************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'EuclideanNorm',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool',
    'defaultValue': false
  }]
}, {
  'tfOpName': 'FusedBatchNorm',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FusedBatchNormV2',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FusedBatchNormV3',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LRN',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'depth_radius',
    'name': 'radius',
    'type': 'number',
    'defaultValue': 5
  }, {
    'tfName': 'bias',
    'name': 'bias',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'alpha',
    'name': 'alpha',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'beta',
    'name': 'beta',
    'type': 'number',
    'defaultValue': 0.5
  }]
}, {
  'tfOpName': 'Softmax',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'LogSoftmax',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseToDense',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'sparseIndices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'outputShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'sparseValues',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'validate_indices',
    'name': 'validateIndices',
    'type': 'bool',
    'defaultValue': true,
    'notSupported': true
  }]
}];

/***/ }),

/***/ 94030:
/*!**************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Bincount',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'weights',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'DenseBincount',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'weights',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'binary_output',
    'name': 'binaryOutput',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Max',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Mean',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Min',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Sum',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'All',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Any',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'ArgMax',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'ArgMin',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'Prod',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Cumprod',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'exclusive',
    'name': 'exclusive',
    'type': 'bool'
  }, {
    'tfName': 'reverse',
    'name': 'reverse',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Cumsum',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'exclusive',
    'name': 'exclusive',
    'type': 'bool'
  }, {
    'tfName': 'reverse',
    'name': 'reverse',
    'type': 'bool'
  }]
}];

/***/ }),

/***/ 78113:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'ConcatV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'end': -1,
    'name': 'tensors',
    'type': 'tensors'
  }, {
    'start': -1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }]
}, {
  'tfOpName': 'Concat',
  'category': 'slice_join',
  'inputs': [{
    'start': 1,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }, {
    'start': 0,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }]
}, {
  'tfOpName': 'GatherV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'batch_dims',
    'name': 'batchDims',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Gather',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'validate_indices',
    'name': 'validateIndices',
    'type': 'bool',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Reverse',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'dims',
    'type': 'bool[]'
  }]
}, {
  'tfOpName': 'ReverseV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Slice',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'begin',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'size',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'StridedSlice',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'begin',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'end',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'strides',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'begin_mask',
    'name': 'beginMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'end_mask',
    'name': 'endMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'new_axis_mask',
    'name': 'newAxisMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'ellipsis_mask',
    'name': 'ellipsisMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'shrink_axis_mask',
    'name': 'shrinkAxisMask',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Pack',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Unpack',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'num',
    'name': 'num',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tile',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'reps',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Split',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }, {
    'start': 1,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'num_split',
    'name': 'numOrSizeSplits',
    'type': 'number',
    'defaultValue': 1
  }]
}, {
  'tfOpName': 'SplitV',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numOrSizeSplits',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'ScatterNd',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'shape',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'GatherNd',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseToDense',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'sparseIndices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'outputShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'sparseValues',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'validate_indices',
    'name': 'validateIndices',
    'type': 'bool',
    'defaultValue': false,
    'notSupported': true
  }]
}];

/***/ }),

/***/ 68256:
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'SparseFillEmptyRows',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'denseShape',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'defaultValue',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseReshape',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'inputIndices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'inputShape',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'newShape',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SparseSegmentMean',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'segmentIds',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseSegmentSum',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'segmentIds',
    'type': 'tensor'
  }]
}];

/***/ }),

/***/ 3322:
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'FFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'IFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'RFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'fft_length',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IRFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'fft_length',
    'type': 'number',
    'notSupported': true
  }]
}];

/***/ }),

/***/ 66190:
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/string.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'StringNGrams',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'dataSplits',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'separator',
    'name': 'separator',
    'type': 'string'
  }, {
    'tfName': 'ngram_widths',
    'name': 'nGramWidths',
    'type': 'number[]'
  }, {
    'tfName': 'left_pad',
    'name': 'leftPad',
    'type': 'string'
  }, {
    'tfName': 'right_pad',
    'name': 'rightPad',
    'type': 'string'
  }, {
    'tfName': 'pad_width',
    'name': 'padWidth',
    'type': 'number'
  }, {
    'tfName': 'preserve_short_sequences',
    'name': 'preserveShortSequences',
    'type': 'bool'
  }],
  'outputs': ['ngrams', 'ngrams_splits']
}, {
  'tfOpName': 'StringSplit',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'delimiter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'skip_empty',
    'name': 'skipEmpty',
    'type': 'bool'
  }],
  'outputs': ['indices', 'values', 'shape']
}, {
  'tfOpName': 'StringToHashBucketFast',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'num_buckets',
    'name': 'numBuckets',
    'type': 'number'
  }]
}];

/***/ }),

/***/ 22593:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "json": () => (/* binding */ json)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Cast',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'SrcT',
    'name': 'sdtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'DstT',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'ExpandDims',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'MirrorPad',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'mode',
    'name': 'mode',
    'type': 'string'
  }]
}, {
  'tfOpName': 'Pad',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'constant_value',
    'name': 'constantValue',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'PadV2',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'constantValue',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Reshape',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'shape',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Squeeze',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'axis',
    'tfDeprecatedName': 'squeeze_dims',
    'name': 'axis',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'SpaceToBatchND',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'blockShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'paddings',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'BatchToSpaceND',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'blockShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'crops',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'DepthToSpace',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'block_size',
    'name': 'blockSize',
    'type': 'number'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string'
  }]
}, {
  'tfOpName': 'BroadcastTo',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': []
}, {
  'tfOpName': 'BroadcastArgs',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 's0',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 's1',
    'type': 'tensor'
  }],
  'attrs': []
}];

/***/ }),

/***/ 25794:
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeOp": () => (/* binding */ executeOp)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _custom_op_node_value_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom_op/node_value_impl */ 71188);
/* harmony import */ var _custom_op_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom_op/register */ 97302);
/* harmony import */ var _executors_arithmetic_executor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./executors/arithmetic_executor */ 90109);
/* harmony import */ var _executors_basic_math_executor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./executors/basic_math_executor */ 3844);
/* harmony import */ var _executors_control_executor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./executors/control_executor */ 43641);
/* harmony import */ var _executors_convolution_executor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./executors/convolution_executor */ 48813);
/* harmony import */ var _executors_creation_executor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./executors/creation_executor */ 50767);
/* harmony import */ var _executors_dynamic_executor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./executors/dynamic_executor */ 96993);
/* harmony import */ var _executors_evaluation_executor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./executors/evaluation_executor */ 81450);
/* harmony import */ var _executors_graph_executor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./executors/graph_executor */ 30962);
/* harmony import */ var _executors_hash_table_executor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./executors/hash_table_executor */ 78523);
/* harmony import */ var _executors_image_executor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./executors/image_executor */ 23670);
/* harmony import */ var _executors_logical_executor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./executors/logical_executor */ 8960);
/* harmony import */ var _executors_matrices_executor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./executors/matrices_executor */ 45116);
/* harmony import */ var _executors_normalization_executor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./executors/normalization_executor */ 24327);
/* harmony import */ var _executors_reduction_executor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./executors/reduction_executor */ 64805);
/* harmony import */ var _executors_slice_join_executor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./executors/slice_join_executor */ 614);
/* harmony import */ var _executors_sparse_executor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./executors/sparse_executor */ 25511);
/* harmony import */ var _executors_spectral_executor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./executors/spectral_executor */ 3653);
/* harmony import */ var _executors_string_executor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./executors/string_executor */ 75804);
/* harmony import */ var _executors_transformation_executor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./executors/transformation_executor */ 42085);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */






















/**
 * Executes the op defined by the node object.
 * @param node
 * @param tensorMap contains tensors for executed nodes and weights
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */
function executeOp(node, tensorMap, context, resourceManager, tidy = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.tidy) {
  const value = ((node, tensorMap, context) => {
    switch (node.category) {
      case 'arithmetic':
        return tidy(() => _executors_arithmetic_executor__WEBPACK_IMPORTED_MODULE_3__.executeOp(node, tensorMap, context));
      case 'basic_math':
        return tidy(() => _executors_basic_math_executor__WEBPACK_IMPORTED_MODULE_4__.executeOp(node, tensorMap, context));
      case 'control':
        return _executors_control_executor__WEBPACK_IMPORTED_MODULE_5__.executeOp(node, tensorMap, context);
      case 'convolution':
        return tidy(() => _executors_convolution_executor__WEBPACK_IMPORTED_MODULE_6__.executeOp(node, tensorMap, context));
      case 'creation':
        return tidy(() => _executors_creation_executor__WEBPACK_IMPORTED_MODULE_7__.executeOp(node, tensorMap, context));
      case 'dynamic':
        return _executors_dynamic_executor__WEBPACK_IMPORTED_MODULE_8__.executeOp(node, tensorMap, context);
      case 'evaluation':
        return tidy(() => _executors_evaluation_executor__WEBPACK_IMPORTED_MODULE_9__.executeOp(node, tensorMap, context));
      case 'image':
        return tidy(() => _executors_image_executor__WEBPACK_IMPORTED_MODULE_12__.executeOp(node, tensorMap, context));
      case 'graph':
        return tidy(() => _executors_graph_executor__WEBPACK_IMPORTED_MODULE_10__.executeOp(node, tensorMap, context));
      case 'logical':
        return tidy(() => _executors_logical_executor__WEBPACK_IMPORTED_MODULE_13__.executeOp(node, tensorMap, context));
      case 'matrices':
        return tidy(() => _executors_matrices_executor__WEBPACK_IMPORTED_MODULE_14__.executeOp(node, tensorMap, context));
      case 'normalization':
        return tidy(() => _executors_normalization_executor__WEBPACK_IMPORTED_MODULE_15__.executeOp(node, tensorMap, context));
      case 'reduction':
        return tidy(() => _executors_reduction_executor__WEBPACK_IMPORTED_MODULE_16__.executeOp(node, tensorMap, context));
      case 'slice_join':
        return tidy(() => _executors_slice_join_executor__WEBPACK_IMPORTED_MODULE_17__.executeOp(node, tensorMap, context));
      case 'sparse':
        return tidy(() => _executors_sparse_executor__WEBPACK_IMPORTED_MODULE_18__.executeOp(node, tensorMap, context));
      case 'spectral':
        return tidy(() => _executors_spectral_executor__WEBPACK_IMPORTED_MODULE_19__.executeOp(node, tensorMap, context));
      case 'string':
        return tidy(() => _executors_string_executor__WEBPACK_IMPORTED_MODULE_20__.executeOp(node, tensorMap, context));
      case 'transformation':
        return tidy(() => _executors_transformation_executor__WEBPACK_IMPORTED_MODULE_21__.executeOp(node, tensorMap, context));
      case 'hash_table':
        return _executors_hash_table_executor__WEBPACK_IMPORTED_MODULE_11__.executeOp(node, tensorMap, context, resourceManager);
      case 'custom':
        const opMapper = (0,_custom_op_register__WEBPACK_IMPORTED_MODULE_2__.getRegisteredOp)(node.op);
        if (opMapper && opMapper.customExecutor) {
          return opMapper.customExecutor(new _custom_op_node_value_impl__WEBPACK_IMPORTED_MODULE_1__.NodeValueImpl(node, tensorMap, context));
        } else {
          throw TypeError(`Custom op ${node.op} is not registered.`);
        }
      default:
        throw TypeError(`Unknown op '${node.op}'. File an issue at ` + `https://github.com/tensorflow/tfjs/issues so we can add it` + `, or register a custom execution with tf.registerOp()`);
    }
  })(node, tensorMap, context);
  if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.util.isPromise(value)) {
    return value.then(data => [].concat(data));
  }
  return [].concat(value);
}

/***/ }),

/***/ 73299:
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationMapper": () => (/* binding */ OperationMapper),
/* harmony export */   "decodeBase64": () => (/* binding */ decodeBase64),
/* harmony export */   "getBoolArrayParam": () => (/* binding */ getBoolArrayParam),
/* harmony export */   "getBoolParam": () => (/* binding */ getBoolParam),
/* harmony export */   "getDtypeArrayParam": () => (/* binding */ getDtypeArrayParam),
/* harmony export */   "getDtypeParam": () => (/* binding */ getDtypeParam),
/* harmony export */   "getFuncParam": () => (/* binding */ getFuncParam),
/* harmony export */   "getNumberParam": () => (/* binding */ getNumberParam),
/* harmony export */   "getNumericArrayParam": () => (/* binding */ getNumericArrayParam),
/* harmony export */   "getStringArrayParam": () => (/* binding */ getStringArrayParam),
/* harmony export */   "getStringParam": () => (/* binding */ getStringParam),
/* harmony export */   "getTensorShapeArrayParam": () => (/* binding */ getTensorShapeArrayParam),
/* harmony export */   "getTensorShapeParam": () => (/* binding */ getTensorShapeParam),
/* harmony export */   "parseDtypeParam": () => (/* binding */ parseDtypeParam),
/* harmony export */   "parseStringParam": () => (/* binding */ parseStringParam),
/* harmony export */   "parseTensorShapeParam": () => (/* binding */ parseTensorShapeParam)
/* harmony export */ });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ 45524);
/* harmony import */ var _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/compiled_api */ 62031);
/* harmony import */ var _custom_op_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom_op/register */ 97302);
/* harmony import */ var _executors_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./executors/utils */ 25703);
/* harmony import */ var _op_list_arithmetic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./op_list/arithmetic */ 55775);
/* harmony import */ var _op_list_basic_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./op_list/basic_math */ 46752);
/* harmony import */ var _op_list_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op_list/control */ 4405);
/* harmony import */ var _op_list_convolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op_list/convolution */ 68338);
/* harmony import */ var _op_list_creation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./op_list/creation */ 95967);
/* harmony import */ var _op_list_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./op_list/dynamic */ 45475);
/* harmony import */ var _op_list_evaluation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./op_list/evaluation */ 5128);
/* harmony import */ var _op_list_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./op_list/graph */ 83298);
/* harmony import */ var _op_list_hash_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./op_list/hash_table */ 99416);
/* harmony import */ var _op_list_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./op_list/image */ 4468);
/* harmony import */ var _op_list_logical__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./op_list/logical */ 42611);
/* harmony import */ var _op_list_matrices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./op_list/matrices */ 35470);
/* harmony import */ var _op_list_normalization__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./op_list/normalization */ 79603);
/* harmony import */ var _op_list_reduction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./op_list/reduction */ 94030);
/* harmony import */ var _op_list_slice_join__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./op_list/slice_join */ 78113);
/* harmony import */ var _op_list_sparse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./op_list/sparse */ 68256);
/* harmony import */ var _op_list_spectral__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./op_list/spectral */ 3322);
/* harmony import */ var _op_list_string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./op_list/string */ 66190);
/* harmony import */ var _op_list_transformation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./op_list/transformation */ 22593);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */























class OperationMapper {
  // Singleton instance for the mapper
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  // Loads the op mapping from the JSON file.
  constructor() {
    const ops = [_op_list_arithmetic__WEBPACK_IMPORTED_MODULE_4__, _op_list_basic_math__WEBPACK_IMPORTED_MODULE_5__, _op_list_control__WEBPACK_IMPORTED_MODULE_6__, _op_list_convolution__WEBPACK_IMPORTED_MODULE_7__, _op_list_creation__WEBPACK_IMPORTED_MODULE_8__, _op_list_dynamic__WEBPACK_IMPORTED_MODULE_9__, _op_list_evaluation__WEBPACK_IMPORTED_MODULE_10__, _op_list_graph__WEBPACK_IMPORTED_MODULE_11__, _op_list_hash_table__WEBPACK_IMPORTED_MODULE_12__, _op_list_image__WEBPACK_IMPORTED_MODULE_13__, _op_list_logical__WEBPACK_IMPORTED_MODULE_14__, _op_list_matrices__WEBPACK_IMPORTED_MODULE_15__, _op_list_normalization__WEBPACK_IMPORTED_MODULE_16__, _op_list_reduction__WEBPACK_IMPORTED_MODULE_17__, _op_list_slice_join__WEBPACK_IMPORTED_MODULE_18__, _op_list_sparse__WEBPACK_IMPORTED_MODULE_19__, _op_list_spectral__WEBPACK_IMPORTED_MODULE_20__, _op_list_string__WEBPACK_IMPORTED_MODULE_21__, _op_list_transformation__WEBPACK_IMPORTED_MODULE_22__];
    const mappersJson = [].concat(...ops.map(op => op.json));
    this.opMappers = mappersJson.reduce((map, mapper) => {
      map[mapper.tfOpName] = mapper;
      return map;
    }, {});
  }
  // Converts the model inference graph from Tensorflow GraphDef to local
  // representation for TensorFlow.js API
  transformGraph(graph, signature = {}) {
    const tfNodes = graph.node;
    const placeholders = [];
    const weights = [];
    const initNodes = [];
    const nodes = tfNodes.reduce((map, node) => {
      map[node.name] = this.mapNode(node);
      if (node.op.startsWith('Placeholder')) {
        placeholders.push(map[node.name]);
      } else if (node.op === 'Const') {
        weights.push(map[node.name]);
      } else if (node.input == null || node.input.length === 0) {
        initNodes.push(map[node.name]);
      }
      return map;
    }, {});
    let inputs = [];
    const outputs = [];
    let inputNodeNameToKey = {};
    let outputNodeNameToKey = {};
    if (signature != null) {
      inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
      outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
    }
    const allNodes = Object.keys(nodes);
    allNodes.forEach(key => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName,, outputName] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            // update the input name to use the mapped output index directly.
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    // if signature has not outputs set, add any node that does not have
    // outputs.
    if (Object.keys(outputNodeNameToKey).length === 0) {
      allNodes.forEach(key => {
        const node = nodes[key];
        if (node.children.length === 0) {
          outputs.push(node);
        }
      });
    } else {
      Object.keys(outputNodeNameToKey).forEach(name => {
        const [nodeName] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(name);
        const node = nodes[nodeName];
        if (node != null) {
          node.signatureKey = outputNodeNameToKey[name];
          outputs.push(node);
        }
      });
    }
    if (Object.keys(inputNodeNameToKey).length > 0) {
      Object.keys(inputNodeNameToKey).forEach(name => {
        const [nodeName] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(name);
        const node = nodes[nodeName];
        if (node) {
          node.signatureKey = inputNodeNameToKey[name];
          inputs.push(node);
        }
      });
    } else {
      inputs = placeholders;
    }
    let functions = {};
    if (graph.library != null && graph.library.function != null) {
      functions = graph.library.function.reduce((functions, func) => {
        functions[func.signature.name] = this.mapFunction(func);
        return functions;
      }, {});
    }
    const result = {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature,
      functions
    };
    if (initNodes.length > 0) {
      result.initNodes = initNodes;
    }
    return result;
  }
  mapSignatureEntries(entries) {
    return Object.keys(entries || {}).reduce((prev, curr) => {
      prev[entries[curr].name] = curr;
      return prev;
    }, {});
  }
  mapNode(node) {
    // Unsupported ops will cause an error at run-time (not parse time), since
    // they may not be used by the actual execution subgraph.
    const mapper = (0,_custom_op_register__WEBPACK_IMPORTED_MODULE_2__.getRegisteredOp)(node.op) || this.opMappers[node.op] || {};
    if (node.attr == null) {
      node.attr = {};
    }
    const newNode = {
      name: node.name,
      op: node.op,
      category: mapper.category,
      inputNames: (node.input || []).map(input => input.startsWith('^') ? input.slice(1) : input),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: node.attr,
      outputs: mapper.outputs
    };
    if (mapper.inputs != null) {
      newNode.inputParams = mapper.inputs.reduce((map, param) => {
        map[param.name] = {
          type: param.type,
          inputIndexStart: param.start,
          inputIndexEnd: param.end
        };
        return map;
      }, {});
    }
    if (mapper.attrs != null) {
      newNode.attrParams = mapper.attrs.reduce((map, param) => {
        const type = param.type;
        let value = undefined;
        switch (param.type) {
          case 'string':
            value = getStringParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'string[]':
            value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'number':
            value = getNumberParam(node.attr, param.tfName, param.defaultValue || 0);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'number[]':
            value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'bool':
            value = getBoolParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'bool[]':
            value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'shape':
            value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'shape[]':
            value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'dtype':
            value = getDtypeParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'dtype[]':
            value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'func':
            value = getFuncParam(node.attr, param.tfName, param.defaultValue);
            if (value === undefined && !!param.tfDeprecatedName) {
              value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case 'tensor':
          case 'tensors':
            break;
          default:
            throw new Error(`Unsupported param type: ${param.type} for op: ${node.op}`);
        }
        map[param.name] = {
          value,
          type
        };
        return map;
      }, {});
    }
    return newNode;
  }
  // map the TFunctionDef to TFJS graph object
  mapFunction(functionDef) {
    const tfNodes = functionDef.nodeDef;
    const placeholders = [];
    const weights = [];
    let nodes = {};
    if (tfNodes != null) {
      nodes = tfNodes.reduce((map, node) => {
        map[node.name] = this.mapNode(node);
        if (node.op === 'Const') {
          weights.push(map[node.name]);
        }
        return map;
      }, {});
    }
    const inputs = [];
    const outputs = [];
    functionDef.signature.inputArg.forEach(arg => {
      const [nodeName] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(arg.name);
      const node = {
        name: nodeName,
        op: 'Placeholder',
        inputs: [],
        inputNames: [],
        category: 'graph',
        inputParams: {},
        attrParams: {
          dtype: {
            value: parseDtypeParam(arg.type),
            type: 'dtype'
          }
        },
        children: []
      };
      node.signatureKey = arg.name;
      inputs.push(node);
      nodes[nodeName] = node;
    });
    const allNodes = Object.keys(nodes);
    allNodes.forEach(key => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName,, outputName] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            // update the input name to use the mapped output index directly.
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    const returnNodeMap = functionDef.ret;
    functionDef.signature.outputArg.forEach(output => {
      const [nodeName, index] = (0,_executors_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeNameAndIndex)(returnNodeMap[output.name]);
      const node = nodes[nodeName];
      if (node != null) {
        node.defaultOutput = index;
        outputs.push(node);
      }
    });
    const signature = this.mapArgsToSignature(functionDef);
    return {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature
    };
  }
  mapArgsToSignature(functionDef) {
    return {
      methodName: functionDef.signature.name,
      inputs: functionDef.signature.inputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg);
        return map;
      }, {}),
      outputs: functionDef.signature.outputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg, functionDef.ret);
        return map;
      }, {})
    };
  }
  mapArgToTensorInfo(arg, nameMap) {
    let name = arg.name;
    if (nameMap != null) {
      name = nameMap[name];
    }
    return {
      name,
      dtype: arg.type
    };
  }
}
function decodeBase64(text) {
  const global = (0,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__.env)().global;
  if (typeof global.atob !== 'undefined') {
    return global.atob(text);
  } else if (typeof Buffer !== 'undefined') {
    return new Buffer(text, 'base64').toString();
  } else {
    throw new Error('Unable to decode base64 in this environment. ' + 'Missing built-in atob() or Buffer()');
  }
}
function parseStringParam(s, keepCase) {
  const value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
  return keepCase ? value : value.toLowerCase();
}
function getStringParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param != null) {
    return parseStringParam(param.s, keepCase);
  }
  return def;
}
function getBoolParam(attrs, name, def) {
  const param = attrs[name];
  return param ? param.b : def;
}
function getNumberParam(attrs, name, def) {
  const param = attrs[name] || {};
  const value = param['i'] != null ? param['i'] : param['f'] != null ? param['f'] : def;
  return typeof value === 'number' ? value : parseInt(value, 10);
}
function parseDtypeParam(value) {
  if (typeof value === 'string') {
    // tslint:disable-next-line:no-any
    value = _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType[value];
  }
  switch (value) {
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_FLOAT:
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_HALF:
      return 'float32';
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_INT32:
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_INT64:
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_INT8:
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_UINT8:
      return 'int32';
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_BOOL:
      return 'bool';
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_DOUBLE:
      return 'float32';
    case _data_compiled_api__WEBPACK_IMPORTED_MODULE_1__.DataType.DT_STRING:
      return 'string';
    default:
      // Unknown dtype error will happen at runtime (instead of parse time),
      // since these nodes might not be used by the actual subgraph execution.
      return null;
  }
}
function getFuncParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.func) {
    return param.func.name;
  }
  return def;
}
function getDtypeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.type) {
    return parseDtypeParam(param.type);
  }
  return def;
}
function getDtypeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.type) {
    return param.list.type.map(v => parseDtypeParam(v));
  }
  return def;
}
function parseTensorShapeParam(shape) {
  if (shape.unknownRank) {
    return undefined;
  }
  if (shape.dim != null) {
    return shape.dim.map(dim => typeof dim.size === 'number' ? dim.size : parseInt(dim.size, 10));
  }
  return [];
}
function getTensorShapeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.shape) {
    return parseTensorShapeParam(param.shape);
  }
  return def;
}
function getNumericArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param) {
    return ((param.list.f && param.list.f.length ? param.list.f : param.list.i) || []).map(v => typeof v === 'number' ? v : parseInt(v, 10));
  }
  return def;
}
function getStringArrayParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param && param.list && param.list.s) {
    return param.list.s.map(v => {
      return parseStringParam(v, keepCase);
    });
  }
  return def;
}
function getTensorShapeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.shape) {
    return param.list.shape.map(v => {
      return parseTensorShapeParam(v);
    });
  }
  return def;
}
function getBoolArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.b) {
    return param.list.b;
  }
  return def;
}

/***/ }),

/***/ 50310:
/*!*****************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-converter/dist/version.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
const version = '3.21.0';


/***/ }),

/***/ 83991:
/*!*******************************************************************!*\
  !*** ./src/app/main/object-detected/object-detected.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectDetectedComponent": () => (/* binding */ ObjectDetectedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 82545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 68205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 53792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98067);
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow-models/coco-ssd */ 2879);
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90390);






const _c0 = ["img"];
const _c1 = ["canvas"];
const _c2 = ["file"];
class ObjectDetectedComponent {
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
  constructor() {
    this.model = null;
    /**
    * img
    */
    this.img = null;
    /**
    * img
    */
    this.canvas = null;
    /**
     * video
     */
    this.file = null;
    /*
     * SrcImage
     */
    this._srcImage = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.srcImage$ = this._srcImage.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    /*
     * Position
     */
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.position$ = this._position.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_0__.load().then(x => {
      this.model = x;
    });
  }
  ngOnInit() {
    this._srcImage.subscribe(base64 => {
      if (base64) {
        this.predict(base64);
      }
    });
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
  predict(base64) {
    const model = this.model;
    const img = new Image(600, 400);
    img.onload = () => {
      if (model) {
        this.model?.detect(img).then(result => {
          if (this.canvas?.nativeElement) {
            const canvas = this.canvas?.nativeElement;
            const color = ["red", "green", "blue"];
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext('2d');
            if (context) {
              context.drawImage(img, 0, 0, img.width, img.height);
              context.font = '40px Arial';
              for (let i = 0; i < result.length; i++) {
                context.beginPath();
                context.rect(...result[i].bbox);
                context.lineWidth = 5;
                context.strokeStyle = color[i % 3];
                context.fillStyle = color[i % 3];
                context.stroke();
                context.fillText(result[i].score.toFixed(3) + ' ' + result[i].class, result[i].bbox[0], result[i].bbox[1] - 5);
              }
            }
            this.position = result;
          }
        });
      }
    };
    img.src = base64;
  }
  /**
    * clickFileUpload
   */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }
}
ObjectDetectedComponent.ɵfac = function ObjectDetectedComponent_Factory(t) {
  return new (t || ObjectDetectedComponent)();
};
ObjectDetectedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ObjectDetectedComponent,
  selectors: [["app-object-detected"]],
  viewQuery: function ObjectDetectedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 0,
  consts: [["id", "container"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["img", ""], ["canvas", ""], [1, "buttons"], ["hidden", "", "accept", ".jpg,.jpeg", "type", "file", 3, "change"], ["file", ""], [3, "click"]],
  template: function ObjectDetectedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", null, 2)(4, "canvas", null, 3)(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ObjectDetectedComponent_Template_input_change_8_listener($event) {
        return ctx.pictureUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ObjectDetectedComponent_Template_ion_button_click_10_listener() {
        return ctx.clickFileUpload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Upload File ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
  styles: ["@media screen and (max-width: 660px) {\n  img[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n  ion-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.buttons[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 224;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9vYmplY3QtZGV0ZWN0ZWQvb2JqZWN0LWRldGVjdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDQyxjQUFBO0VBQ0Q7RUFDQTtJQUNDLFdBQUE7RUFDRDtBQUNGO0FBQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gIGltZ3tcbiAgIG1heC13aWR0aDogNjAlO1xuICB9XG4gIGlvbi1idXR0b257XG4gICB3aWR0aDogMTAwJTtcbiAgfVxuIH1cbiAuYnV0dG9ucyB7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbWd7XG4gIG1heC1oZWlnaHQ6IDIyNDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 98013:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=src_app_main_object-detected_object-detected_component_ts.js.map