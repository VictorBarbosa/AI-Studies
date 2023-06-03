import { BehaviorSubject, Observable, distinctUntilChanged, shareReplay } from "rxjs";
import * as tf from '@tensorflow/tfjs'
import * as _ from 'lodash';
import { ClasseAndProbability, Probability } from './model-car-detect-brand-mobile.service';
import { ModelInitialize } from "./model.initialize";
 

export enum ModelType {
  FromYolo,
  FromTensorflow
}


export class ModelCarBrand extends ModelInitialize {

  /*
   * classAndProbability
   */
  private readonly _classAndProbability = new BehaviorSubject<ClasseAndProbability | null>(null);
  classAndProbability$ = this._classAndProbability.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * classAndProbability getter
  */
  get classAndProbability(): ClasseAndProbability | null {
    return this._classAndProbability.getValue();
  }

  /*
   * classAndProbability setter
   */
  set classAndProbability(value: ClasseAndProbability | null) {
    if (this._classAndProbability.getValue() !== value) {
      this._classAndProbability.next(value);
    }
  }


  constructor(modelCarBrandPath: string, private classes: string[], private imageShapeX: number = 224, private imageShapeY: number = 224) {
    super(modelCarBrandPath);
    this._classAndProbability.next(new ClasseAndProbability(classes))
  }

  public predict(img: HTMLImageElement | HTMLCanvasElement, modelType: ModelType): Observable<Array<Probability>> {
    if (modelType === ModelType.FromTensorflow) {
      return this.fromTensorflow(img);
    } else {
      return this.fromYoloConvertedToTensorflow(img);
    }
  }

  public predictByBase64(base64: string, modelType: ModelType): Observable<Array<Probability>> {
    if (modelType === ModelType.FromTensorflow) {
      return this.fromTensorflowBase64(base64);
    } else {
      return this.fromYoloConvertedToTensorflowBase64(base64);
    }
  }

  /**
   * From Tensorflow Base64
   */
  private fromTensorflowBase64(base64: string): Observable<Array<Probability>> {
    return new Observable(o => {
      const model = this.model;
      const img = new Image(this.imageShapeX, this.imageShapeY);
      img.onload = () => {
        let pre_image = tf.browser.fromPixels(img, 3)
          .resizeNearestNeighbor([this.imageShapeX, this.imageShapeY])
          .expandDims()
          .toFloat();
        if (model) {
          (model.execute(pre_image) as any).data().then((predictions: Float32Array) => {
            var res = this.classAndProbability?.getPredictedClass(predictions)
            o.next(res);
          });

        }
      }
      img.src = base64;
    });
  }


  /**
   * From Tensorflow
   */
  private fromTensorflow(img: HTMLImageElement | HTMLCanvasElement): Observable<Array<Probability>> {
    const model = this.model;
    return new Observable(o => {
      let pre_image = tf.browser.fromPixels(img, 3)
        .resizeNearestNeighbor([this.imageShapeX, this.imageShapeY])
        .expandDims()
        .toFloat();
      if (model) {
        (model.execute(pre_image) as any).data().then((ret: Float32Array) => {
          var res = this.classAndProbability?.getPredictedClass(ret)
          o.next(res);
        });
      }
    });
  }

  /**
   * From Yolo converted to Tensorflow Base64
   */
  private fromYoloConvertedToTensorflowBase64(base64: string): Observable<Array<Probability>> {
    return new Observable(o => {
      const model = this.model;
      const img = new Image(this.imageShapeX, this.imageShapeY);
      img.onload = () => {
        let pre_image = tf.browser.fromPixels(img, 3)
          .resizeNearestNeighbor([this.imageShapeX, this.imageShapeY])
          .toFloat()
          .div(tf.scalar(255.0))
          .expandDims()
        if (model) {
          (model.execute(pre_image) as any).data().then((predictions: Float32Array) => {
            var res = this.classAndProbability?.getPredictedClass(predictions)
            o.next(res);
          });
        }
      }
      img.src = base64;
    });

  }

  /**
   * From Yolo converted to Tensorflow
   */
  private fromYoloConvertedToTensorflow(img: HTMLImageElement | HTMLCanvasElement): Observable<Array<Probability>> {
    const model = this.model;
    return new Observable(o => {
      let pre_image = tf.browser.fromPixels(img, 3)
        .resizeNearestNeighbor([this.imageShapeX, this.imageShapeY])
        .expandDims()
        .toFloat();
      if (model) {
        (model.execute(pre_image) as any).data().then((ret: Float32Array) => {

          var res = this.classAndProbability?.getPredictedClass(ret)
          o.next(res);
        });
      }
    });
  }
}
