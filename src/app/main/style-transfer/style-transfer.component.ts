import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs'
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, shareReplay, tap } from 'rxjs';
import { downloadImage } from '../../common/common';


interface ImagesTransfer {
  label: string,
  img: string
}
@Component({
  selector: 'app-style-transfer',
  templateUrl: './style-transfer.component.html',
  styleUrls: ['./style-transfer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class StyleTransferComponent implements OnInit {

  images: ImagesTransfer[] = [
    { img: 'assets/Derkovits_Gyula_Taligás.jpeg', label: 'Derkovits_Gyula_Taligás' },
    { img: 'assets/Landscape_with_black_figure.jpeg', label: 'Landscape_with_black_figure' },
    { img: 'assets/Large_bonfire.jpg', label: 'Large_bonfire' },
    { img: 'assets/Les_Demoiselles_d.jpeg', label: 'Les_Demoiselles_d.jpeg' },
    { img: 'assets/Nantes_from_the_Ile_Feydeau.jpeg', label: 'Nantes_from_the_Ile_Feydeau' },
    { img: 'assets/Pillars_of_creation.jpeg', label: 'Pillars_of_creation.jpeg' },
    { img: 'assets/Still_Life_with_a_Bottle_of_Rum.jpg', label: 'Still_Life_with_a_Bottle_of_Rum' },
    { img: 'assets/Still_life.jpeg', label: 'Still_life' },
    { img: 'assets/The_Scream.jpeg', label: 'The_Scream' },
    { img: 'assets/Van_Gogh.jpeg', label: 'Van_Gogh' },
    { img: 'assets/Vassily_Kandinsky.jpeg', label: 'Vassily_Kandinsky' },
    { img: 'assets/kanagawa_great_wave.jpeg', label: 'kanagawa_great_wave' }
  ]

  model: tf.GraphModel<string | tf.io.IOHandler> | null = null;

  @ViewChild('cont') cont: ElementRef<HTMLImageElement> | null = null;
  @ViewChild('style') style: ElementRef<HTMLImageElement> | null = null;
  @ViewChild('canv') canv: ElementRef<HTMLCanvasElement> | null = null;
  @ViewChild('filePic') filePic: ElementRef<HTMLInputElement> | null = null;
  @ViewChild('fileStyle') fileStyle: ElementRef<HTMLInputElement> | null = null;



  /*
   * selected
   */
  private readonly _selected = new BehaviorSubject<string | null>('assets/Derkovits_Gyula_Taligás.jpeg');
  selected$ = this._selected.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * selected getter
  */
  get selected(): string | null {
    return this._selected.getValue();
  }

  /*
   * selected setter
   */
  set selected(value: string | null) {
    if (this._selected.getValue() !== value) {
      this._selected.next(value);

    }
  }
  constructor() {
    tf.loadGraphModel('assets/StyleTranfer/model.json',).then(x => {
      this.model = x;
      this.apply()
    })

  }

  ngOnInit(): void {

    this._selected
      .pipe(tap((value) => {
        if ('fileUpload' === value) {
          this.fileStyle?.nativeElement.click();
        }
      }))
      .subscribe()
  }

  apply() {
    if (this.model && this.cont?.nativeElement && this.style?.nativeElement) {
      const img1 = tf.browser.fromPixels(this.cont.nativeElement, 3).resizeNearestNeighbor([224, 224])
        .expandDims().div(255.0).toFloat();
      const img2 = tf.browser.fromPixels(this.style.nativeElement, 3).resizeNearestNeighbor([224, 224])
        .expandDims().div(255.0).toFloat();
      const ret = (this.model.execute([img1, img2]) as any).dataSync() as Float32Array;
      const t4d = tf.tensor3d(Array.from(ret), [224, 224, 3])
      tf.browser.toPixels(t4d, this.canv?.nativeElement)
    }
  }


  /**
   * File upload
   */
  fileUploadPicture(ev: any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      if (this.cont?.nativeElement) {
        this.cont.nativeElement.src = image.src;
      }
    }
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
  fileUploadStyle(ev: any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      if (this.style?.nativeElement) {
        this.style.nativeElement.src = image.src;
      }
    }
    reader.readAsDataURL(file);
  }

  /**
   * clickFileUpload
   */
  clickFileUploadStyle() {
    this.fileStyle?.nativeElement.click();
  }

  ngOnDestroy(): void {
    this.model?.dispose()
  }

  downloadPicture() {
    if (this.canv?.nativeElement) {
      downloadImage(this.canv.nativeElement)
    }
  }
}
