import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs'
import { BehaviorSubject, Observable, distinctUntilChanged, shareReplay } from 'rxjs';
import { CarDirection, getClass, softmax } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class CarPositionService {

  /*
   * Model
   */
  private readonly _model = new BehaviorSubject<tf.GraphModel<string | tf.io.IOHandler> | null>(null);
  model$ = this._model.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Model getter
  */
  get model(): tf.GraphModel<string | tf.io.IOHandler> | null {
    return this._model.getValue();
  }

  /*
   * Model setter
   */
  set model(value: tf.GraphModel<string | tf.io.IOHandler> | null) {
    if (this._model.getValue() !== value) {
      this._model.next(value);
    }
  }


  /**
   *
   */
  constructor() {
    tf.loadGraphModel('assets/car_position/model.json').then(model => {
      this._model.next(model);
    });
  }

  predict(img: HTMLImageElement | HTMLCanvasElement, imageShapeX: number = 224, imageShapeY: number = 224) {
    const model = this.model;
    return new Observable(o => {
      let pre_image = tf.browser.fromPixels(img, 3)
      .resizeNearestNeighbor([imageShapeX, imageShapeY])

      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims()
      if (model) {
        (model.execute(pre_image) as any).data().then((predictions: Float32Array) => {

          var res = this.getPredictedClass(predictions)
          o.next(res);
        });
      }
    });
  }

  /**

 */
  predictBase64(base64: string, imageShapeX: number = 224, imageShapeY: number = 224): Observable<Array<any>> {
    return new Observable(o => {
      const model = this.model;
      const img = new Image(imageShapeX, imageShapeY);
      img.onload = () => {
        let pre_image = tf.browser.fromPixels(img, 3)
          .resizeNearestNeighbor([imageShapeX, imageShapeY])
          .toFloat()
          .div(tf.scalar(255.0))
          .expandDims()
        if (model) {
          (model.execute(pre_image) as any).data().then((predictions: Float32Array) => {
            
            let rss = tf.softmax(predictions).dataSync()
            var res = this.getPredictedClass(predictions)
            o.next(res);
          });

        }
      }
      img.src = base64;
    });
  }


  /**
 *
  Get predicted class
 */
  public getPredictedClass(res: Float32Array): any {
    if (!res || res.length === 0) {
      const empty = [];
      for (let i = 0; i < 5; i++) {
        empty.push({ name: "-", probability: 0, index: 0 });
      }
      return empty;
    }
    const arr = Array.prototype.slice.call(res);

    const output = softmax(arr);
    // const output =  tf.softmax(res).dataSync();
    return getClass(arr, 5, CarDirection);
  }
}
