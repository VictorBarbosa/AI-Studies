import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImageUploderComponent } from '../../common/image-uploder/image-uploder.component';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, shareReplay } from 'rxjs';
import * as tf from '@tensorflow/tfjs'
interface Image {
  img: HTMLImageElement,
  fileName: string,
  index: number,
  rotate: string,
  tensorImage?: tf.Tensor
}

@Component({
  selector: 'app-custom-classification-model',
  templateUrl: './custom-classification-model.component.html',
  styleUrls: ['./custom-classification-model.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ImageUploderComponent, FormsModule],
})
export class CustomClassificationModelComponent implements OnInit {

  /*
   * Images
   */
  private readonly _images = new BehaviorSubject<Image[] | null>(null);
  images$ = this._images.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Images getter
  */
  get images(): Image[] | null {
    return this._images.getValue();
  }

  /*
   * Images setter
   */
  set images(value: Image[] | null) {
    if (this._images.getValue() !== value) {
      this._images.next(value);
    }
  }

  constructor() { }

  ngOnInit() {
    this._images.subscribe(img => {
      img?.forEach(x => {
        x.tensorImage = tf.browser.fromPixels(x.img).resizeNearestNeighbor([224, 224])
          .expandDims()
          .div(255.0)
          .toFloat();
      })
    });
  }



  imageLoad(ev: FileList) {
    const files = ev;
    const imgs = [] as Image[];
    for (let index = 0; index < files.length; index++) {

      const element = files[index];
      const img = document.createElement('img');
      img.width = 224;
      img.height = 224;
      img.src = URL.createObjectURL(element);


      let rotate = `transform:rotate(${(index * 2) + 90}deg)`
      if ((files.length - 1) === index) {
        
        rotate = `transform:rotate(0deg)`
      }

      const im: Image = {
        fileName: element.name,
        img: img,
        index,
        rotate: rotate
      }
      imgs.push(im);

    }
    this._images.next(imgs)
  }

  trainModel() {
    
    const image = (this.images?.map(x => x?.tensorImage) as any) as tf.Tensor<tf.Rank>
    if (image!==undefined) {

      const model = tf.sequential();


      model.add(tf.layers.dense({ units: 3, inputShape: [224, 224, 3] }))


      model.add(tf.layers.conv2d({ filters: 16, kernelSize: 3, padding: 'same', activation: 'relu', }))
      model.add(tf.layers.maxPooling2d({}))

      model.add(tf.layers.conv2d({ filters: 32, kernelSize: 3, padding: 'same', activation: 'relu' }))
      model.add(tf.layers.maxPooling2d({}))

      model.add(tf.layers.conv2d({ filters: 64, kernelSize: 3, padding: 'same', activation: 'relu' }))
      model.add(tf.layers.maxPooling2d({}))

      model.add(tf.layers.dropout({ rate: 0.2 }))
      model.add(tf.layers.flatten({}))


      model.add(tf.layers.dense({ units: 128, activation: 'softmax' }))
      model.add(tf.layers.dense({ units: 1 }))

      model.compile({
        optimizer: 'adam',
        loss: tf.losses.meanSquaredError,
        metrics: ['accuracy']
      })
      


      model.summary();
      model.fit(image, image, { epochs: 5 }).then(x => {
        
      })
    }
  }
}
