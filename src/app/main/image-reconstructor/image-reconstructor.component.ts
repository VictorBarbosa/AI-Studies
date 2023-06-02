import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'
import { BehaviorSubject, combineLatest, distinctUntilChanged, shareReplay, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ImageUploderComponent } from '../../common/image-uploder/image-uploder.component';

@Component({
  selector: 'app-image-reconstructor',
  templateUrl: './image-reconstructor.component.html',
  styleUrls: ['./image-reconstructor.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ImageUploderComponent, FormsModule],
  providers: [],


})
export class ImageReconstructorComponent implements OnInit {



  /*
   * Dx
   */
  private readonly _dx = new BehaviorSubject<number>(0);
  dx$ = this._dx.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Dx getter
  */
  get dx(): number {
    return this._dx.getValue();
  }

  /*
   * Dx setter
   */
  set dx(value: number) {
    if (this._dx.getValue() !== value) {
      this._dx.next(value);
    }
  }

  /*
   * Dy
   */
  private readonly _dy = new BehaviorSubject<number>(0);
  dy$ = this._dy.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Dy getter
  */
  get dy(): number {
    return this._dy.getValue();
  }

  /*
   * Dy setter
   */
  set dy(value: number) {
    if (this._dy.getValue() !== value) {
      this._dy.next(value);
    }
  }
  /*
   * Dw
   */
  private readonly _dw = new BehaviorSubject<number>(0);
  dw$ = this._dw.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Dw getter
  */
  get dw(): number {
    return this._dw.getValue();
  }

  /*
   * Dw setter
   */
  set dw(value: number) {
    if (this._dw.getValue() !== value) {
      this._dw.next(value);
    }
  }


  /*
   * Dh
   */
  private readonly _dh = new BehaviorSubject<number>(0);
  dh$ = this._dh.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Dh getter
  */
  get dh(): number {
    return this._dh.getValue();
  }

  /*
   * Dh setter
   */
  set dh(value: number) {
    if (this._dh.getValue() !== value) {
      this._dh.next(value);
    }
  }


  /*
   * Img
   */
  private readonly _img = new BehaviorSubject<HTMLImageElement | null>(null);
  img$ = this._img.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Img getter
  */
  get img(): HTMLImageElement | null {
    return this._img.getValue();
  }


  /*
   * Height
   */
  private readonly _height = new BehaviorSubject<number>(0);
  height$ = this._height.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Height getter
  */
  get height(): number {
    return this._height.getValue();
  }

  /*
   * Height setter
   */
  set height(value: number) {
    if (this._height.getValue() !== value) {
      this._height.next(value);
    }
  }

  /*
   * Width
   */
  private readonly _width = new BehaviorSubject<number>(0);
  width$ = this._width.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Width getter
  */
  get width(): number {
    return this._width.getValue();
  }

  /*
   * Width setter
   */
  set width(value: number) {
    if (this._width.getValue() !== value) {
      this._width.next(value);
    }
  }


  /*
   * Img setter
   */
  set img(value: HTMLImageElement | null) {
    if (this._img.getValue() !== value) {
      this._img.next(value);
    }
  }

  @ViewChild('canv') canv: ElementRef<HTMLCanvasElement> | null = null;

  constructor( ) {

  }

  ngOnInit() {
    // dx: number, dy: number, dw: number, dh: number
    combineLatest([
      this._img,
      this._dx,
      this._dy,
      this._dw,
      this._dh,
      this._height,
      this._width
    ]).pipe(tap(
      ([img, dx, dy, dw, dh, height, width]) => {

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
      })).subscribe()



  }

  srcImageChange(img: FileList) {
    // this._img.next(img)

  }
  changeColor(arg0: Uint8Array | Float32Array | Int32Array): any {
    const newArr = [];
    let arr = Array.from(arg0);
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > 50 && arr[index] < 100) {
        arr[index] = arr[index] / 255;
      }
      newArr.push(arr[index])
    }
    return tf.tensor4d(arg0, [1, 223, 223, 3]);
  }

}
