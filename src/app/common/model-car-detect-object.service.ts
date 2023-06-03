import { BehaviorSubject, distinctUntilChanged, shareReplay } from "rxjs";
import * as tf from '@tensorflow/tfjs'
import * as _ from 'lodash';

export enum ModelType {
  FromYolo,
  FromTensorflow
}

const threshold = 0.75;

export class ModelObjectDetect {
  /*
   * ModelDetectObject
   */
  private readonly _modelDetectObject = new BehaviorSubject<tf.GraphModel<string | tf.io.IOHandler> | null>(null);
  modelDetectObject$ = this._modelDetectObject.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * ModelDetectObject getter
  */
  get modelDetectObject(): tf.GraphModel<string | tf.io.IOHandler> | null {
    return this._modelDetectObject.getValue();
  }

  /*
   * ModelDetectObject setter
   */
  set modelDetectObject(value: tf.GraphModel<string | tf.io.IOHandler> | null) {
    if (this._modelDetectObject.getValue() !== value) {
      this._modelDetectObject.next(value);
    }
  }

  /*
   * CanvasRef
   */
  private readonly _canvasRef = new BehaviorSubject<HTMLCanvasElement | null>(null);
  canvasRef$ = this._canvasRef.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * CanvasRef getter
  */
  get canvasRef(): HTMLCanvasElement | null {
    return this._canvasRef.getValue();
  }

  /*
   * CanvasRef setter
   */
  set canvasRef(value: HTMLCanvasElement | null) {
    if (this._canvasRef.getValue() !== value) {
      this._canvasRef.next(value);
    }
  }

  constructor(private modelDetectObjectPath: string, private classNames: string[], private imageShapeX: number = 224, private imageShapeY: number = 224,) {
    tf.loadGraphModel(modelDetectObjectPath).then(mod => {
      this._modelDetectObject.next(mod);
    });
  }

  detectFrame(canvasRef: HTMLCanvasElement, video: tf.PixelData | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap) {
    
    this.canvasRef = canvasRef;
    if (this.modelDetectObject) {
      tf.engine().startScope();
      this.modelDetectObject.executeAsync(this.process_input(video)).then((predictions: any) => {
        this.renderPredictions(predictions);
        // requestAnimationFrame(() => {
        //   this.detectFrame(video);
        // });
        tf.engine().endScope();
      });
    }

  }

  private process_input(video_frame: tf.PixelData | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap) {
    const tfimg = tf.browser.fromPixels(video_frame).toInt();
    const expandedimg = tfimg.transpose([0, 1, 2]).expandDims();
    return expandedimg;
  }

  private buildDetectedObjects(scores: any, threshold: any, boxes: any, classes: any, classesDir: any) {
    const detectionObjects: any = []
    var video_frame = document.getElementById('frame') as HTMLVideoElement;

    scores[0].forEach((score: any, i: any) => {
      if (score > threshold) {
        const bbox = [];
        const minY = boxes[0][i][0] * video_frame.offsetHeight;
        const minX = boxes[0][i][1] * video_frame.offsetWidth;
        const maxY = boxes[0][i][2] * video_frame.offsetHeight;
        const maxX = boxes[0][i][3] * video_frame.offsetWidth;
        bbox[0] = minX;
        bbox[1] = minY;
        bbox[2] = maxX - minX;
        bbox[3] = maxY - minY;
        detectionObjects.push({
          class: classes[i],
          label: classesDir[classes[i]].name,
          score: score.toFixed(4),
          bbox: bbox
        })
      }
    })
    return detectionObjects
  }

  private renderPredictions(predictions: any) {
    
    const ctx = this.canvasRef?.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Font options.
      const font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      //Getting predictions
      const boxes = predictions[4].arraySync();
      const scores = predictions[5].arraySync();
      const classes = predictions[6].dataSync();
      const detections = this.buildDetectedObjects(scores, threshold, boxes, classes, this.classNames);

      detections.forEach((item: any) => {
        const x = item['bbox'][0];
        const y = item['bbox'][1];
        const width = item['bbox'][2];
        const height = item['bbox'][3];

        // Draw the bounding box.
        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);

        // Draw the label background.
        ctx.fillStyle = "#00FFFF";
        const textWidth = ctx.measureText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%").width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
      });

      detections.forEach((item: any) => {
        const x = item['bbox'][0];
        const y = item['bbox'][1];

        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%", x, y);
      });
    }
  }
}
