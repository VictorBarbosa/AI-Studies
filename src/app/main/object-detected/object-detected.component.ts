import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'

import { BehaviorSubject, distinctUntilChanged, shareReplay } from 'rxjs';
import { getResult } from '../../common/common';
import * as coco from '@tensorflow-models/coco-ssd';
import { ObjectDetection } from '@tensorflow-models/coco-ssd';
@Component({
  selector: 'app-object-detected',
  templateUrl: './object-detected.component.html',
  styleUrls: ['./object-detected.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: []
})
export class ObjectDetectedComponent implements OnInit {
  model: ObjectDetection | null = null;

  /**
 * img
 */
  @ViewChild('img', { static: true }) img: ElementRef<HTMLImageElement> | null = null;
  /**
 * img
 */
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement> | null = null;

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


  constructor() {
    coco.load().then(x => {
      this.model = x;
    });
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
    const img = new Image(600, 400);
    img.onload = () => {
      if (model) {

        this.model?.detect(img).then(result => {

          if (this.canvas?.nativeElement) {


            const canvas = this.canvas?.nativeElement;
            const color = ["red", "green", "blue"]
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
                context.fillText(
                  result[i].score.toFixed(3) + ' ' + result[i].class,
                  result[i].bbox[0],
                  result[i].bbox[1] - 5);
              }
            }

            this.position = result;
          }



        });

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


