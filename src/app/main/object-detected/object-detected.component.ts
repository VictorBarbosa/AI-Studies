import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'

import { BehaviorSubject, distinctUntilChanged, shareReplay } from 'rxjs';

@Component({
  selector: 'app-object-detected',
  templateUrl: './object-detected.component.html',
  styleUrls: ['./object-detected.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: []
})
export class ObjectDetectedComponent   implements OnInit {
  model: tf.GraphModel<string | tf.io.IOHandler> | tf.LayersModel | null = null;

  /**
 * img
 */
  @ViewChild('img', { static: true }) img: ElementRef<HTMLImageElement> | null = null;

  /**
   * video
   */
  @ViewChild('file', { static: true }) file: ElementRef<HTMLInputElement> | null = null;


  /*
   * SrcImage
   */
  private readonly _srcImage = new BehaviorSubject<string>('');
  srcImage$ = this._srcImage.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * SrcImage getter
  */
  get srcImage(): string {
    return this._srcImage.getValue();
  }

  /*
   * SrcImage setter
   */
  set srcImage(value: string) {
    if (this._srcImage.getValue() !== value) {
      this._srcImage.next(value);
    }
  }

  /*
   * Position
   */
  private readonly _position = new BehaviorSubject<any | null>(null);
  position$ = this._position.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Position getter
  */
  get position(): any | null {
    return this._position.getValue();
  }

  /*
   * Position setter
   */
  set position(value: any | null) {
    if (this._position.getValue() !== value) {
      this._position.next(value);
    }
  }

  constructor(   ) {

    const mod = "assets/hub_mod/model.json";
    tf.loadGraphModel("https://storage.googleapis.com/tfjs-models/savedmodel/model.json", { fromTFHub: true }).then(async x => {
      this.model = x;
    });

    // tf.loadGraphModel('assets/yolov8x_web_model/model.json').then(async x => {
    //   this.model = x;
    // });

  }


  ngOnInit() {
    this._srcImage.subscribe((base64: string) => {
      if (base64) {
        this.predict(base64)
      }
    })
  }

  pictureUpload(ev: any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      this._srcImage.next(e.target.result);

    }
    reader.readAsDataURL(file);
  }

  predict(base64: string) {
    const model = this.model;
    const img = new Image(224, 224);
    img.onload = () => {
      if (model) {
        const pre_image = tf.tidy(() => {
          return tf.browser.fromPixels(img, 3)
            // .resizeNearestNeighbor([224, 224])
            .toFloat()

            // .div(tf.scalar(255.0))
            .expandDims();
        });




        const result = model.predict(pre_image)


        debugger
        const data = (result as any).dataSync()




        // const detection_boxes = data[0].toFloat().softmax().dataSync();
        // const detection_class_entities = data[1].dataSync();
        // const detection_class_names = data[2].toString();
        // const detection_class_labels = data[3].dataSync();
        // const detection_scores = data[4].softmax().dataSync();

        debugger

        // this.predict2(img, result)
        // const ret = getResult(tf.softmax(result).dataSync(), OBJECT_CLASSES)



      }
    }
    img.src = base64;

  }

  /**
    * clickFileUpload
   */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }
}
