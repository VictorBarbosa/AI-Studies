import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModelCarBrand, ModelType } from '../../common/model-car-detect-brand.service';


import { IonicModule, Platform } from '@ionic/angular';
import { BehaviorSubject, distinctUntilChanged, shareReplay, tap, catchError, EMPTY } from 'rxjs';

import { CommonModule } from '@angular/common';
import { CarDirection, CarsBrands } from '../../common/common';

export interface Probability {
  name: string,
  probability: number,
  index: number,
}
@Component({
  selector: 'app-car-brand-detected',
  templateUrl: './car-brand-detected.component.html',
  styleUrls: ['./car-brand-detected.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: []
})
export class CarBrandDetectedComponent implements OnInit {
  public folder!: string;
  ret = [] as any;


  /*
   * modelPredictCarDirection
   */
  private readonly _modelPredictCarDirection = new BehaviorSubject<ModelCarBrand | null>(null);
  modelPredictCarDirection$ = this._modelPredictCarDirection.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * modelPredictCarDirection getter
  */
  get modelPredictCarDirection(): ModelCarBrand | null {
    return this._modelPredictCarDirection.getValue();
  }

  /*
   * modelPredictCarDirection setter
   */
  set modelPredictCarDirection(value: ModelCarBrand | null) {
    if (this._modelPredictCarDirection.getValue() !== value) {
      this._modelPredictCarDirection.next(value);
    }
  }


  /*
   * ModelPredictCarBrand
   */
  private readonly _modelPredictCarBrand = new BehaviorSubject<ModelCarBrand | null>(null);
  modelPredictCarBrand$ = this._modelPredictCarBrand.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * ModelPredictCarBrand getter
  */
  get modelPredictCarBrand(): ModelCarBrand | null {
    return this._modelPredictCarBrand.getValue();
  }

  /*
   * ModelPredictCarBrand setter
   */
  set modelPredictCarBrand(value: ModelCarBrand | null) {
    if (this._modelPredictCarBrand.getValue() !== value) {
      this._modelPredictCarBrand.next(value);
    }
  }

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
   * Brand
   */
  private readonly _brand = new BehaviorSubject<string>('');
  brand$ = this._brand.asObservable().pipe(distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));

  /*
  * Brand getter
  */
  get brand(): string {
    return this._brand.getValue();
  }

  /*
   * Brand setter
   */
  set brand(value: string) {
    if (this._brand.getValue() !== value) {
      this._brand.next(value);
    }
  }

  /**
   * Constructor
   */
  constructor(private plataform: Platform) {
    this._modelPredictCarDirection.next(new ModelCarBrand('car-position', CarDirection))
    this._modelPredictCarBrand.next(new ModelCarBrand('car-brand', CarsBrands))


  }

  /**
   * On Init
   */
  ngOnInit() {
    this._srcImage.pipe(tap(img => {
      this.img?.nativeElement.setAttribute('src', img);
      if (this.modelPredictCarDirection && this.modelPredictCarBrand) {
        this.predictSideCar(img);
      }
    })
    ).subscribe();

  }

  /**
   * predictSideCar
   */
  private predictSideCar(img64: string) {
    if (this.modelPredictCarBrand) {
      this.modelPredictCarDirection?.predictByBase64(img64, ModelType.FromYolo).pipe(
        tap((retDir: Probability[]) => {
          if (retDir[0].name === "Front" && this.modelPredictCarBrand) {
            this.predictCarBrand(img64);
          } else {
            if (retDir[0].name !== 'Could not identify as a car') {
              this._brand.next(`The car is on "${retDir[0].name}" and must be Front`);
            } else {
              this._brand.next(retDir[0].name);
            }
          }
        }),
        catchError((err) => {
          return EMPTY
        })
      ).subscribe();
    }
  }


  /**
   * predictCarBrand
   */
  private predictCarBrand(img64: string) {
    if (this.modelPredictCarBrand) {

      this.modelPredictCarBrand.predictByBase64(img64, ModelType.FromYolo).pipe(
        tap((retBrand: Probability[]) => {
          this._brand.next(retBrand[0].name);
        }))
        .subscribe()
    }
  }

  /**
   * Predict image
   */
  predictImage() {
    if (this.img?.nativeElement) {
      this.modelPredictCarDirection?.predict(this.img?.nativeElement, ModelType.FromYolo)
        .subscribe(x => {
          this.ret = (x) as any;
        })
    }
  }


  /**
   * File upload
   */
  fileUpload(ev: any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      this._srcImage.next(e.target.result);
    }
    reader.readAsDataURL(file);
  }

  /**
   * clickFileUpload
   */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }


  /**
   * Dispose
   */
  ngOnDestroy(): void {
    this._modelPredictCarDirection.complete()
    this._modelPredictCarDirection.unsubscribe()
    this._modelPredictCarBrand.complete()
    this._modelPredictCarBrand.unsubscribe()
    this._srcImage.complete()
    this._srcImage.unsubscribe()
    this._brand.complete()
    this._brand.unsubscribe()
  }
}


