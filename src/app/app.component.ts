import { Component } from '@angular/core';
import { AppPagesPaths } from './app-routing.module'
import * as tf from '@tensorflow/tfjs';
interface Model {
  path: string,
  keyModel: string;
}

const Models: Model[] = [
  { keyModel: 'car-brand', path: 'assets/models/car-brand/model.json' },
  { keyModel: 'car-position', path: 'assets/models/car-position/model.json' },
  { keyModel: 'style-transfer', path: 'assets/models/style-transfer/model.json' },
  { keyModel: 'resolution-improvenment', path: 'assets/models/improve_resolution/model.json' },
]
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = AppPagesPaths;
  constructor() {
    indexedDB.databases().then(x => {
      if (x.length === 0) {
        this.setModel();
      }
    })
  }

  setModel() {


    Models.forEach(model => {
      const indexeddb = `indexeddb://${model.keyModel}`
      tf.loadGraphModel(model.path).then(mod => {
        mod.save(indexeddb);
      }).catch((ex) => {
        console.error('Error to load tensorflow model : ', ex.message);
      });
    });
  }
}
