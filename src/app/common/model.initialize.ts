
import * as tf from '@tensorflow/tfjs'
import { BehaviorSubject, distinctUntilChanged, shareReplay } from 'rxjs';
export abstract class ModelInitialize {


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
   * Initialize model trained
   * @param modelPath Path where is a model
   */


  constructor(modelPath: string) {
    tf.loadGraphModel(modelPath, {
      onProgress: (fraction: number) => {
        console.log(fraction)
      },
    }).then((mod: any) => {
      this._model.next(mod);
    }).catch(() => {

    });
  }

  /**
   * Clear the memory
   */
  public dispose(): void {
    this._model.complete();
    this._model.unsubscribe();
  }

}
