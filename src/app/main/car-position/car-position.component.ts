import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarPositionService } from '../../Services/car-position.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, distinctUntilChanged, shareReplay, tap } from 'rxjs';


@Component({
  selector: 'app-car-position',
  templateUrl: './car-position.component.html',
  styleUrls: ['./car-position.component.scss'],
  standalone: true,
  providers: [CarPositionService],
  imports: [IonicModule, CommonModule],
})
export class CarPositionComponent  implements OnInit {


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

  constructor(private carPosition: CarPositionService ) {

  }

  ngOnInit() {
    this._srcImage.pipe(tap(img => {
      this.img?.nativeElement.setAttribute('src', img);
      this.carPosition.predictBase64(img).pipe(tap(ret => {
        this._position.next(ret);
      }))
        .subscribe();
    })
    ).subscribe();
  }

  pictureUpload(ev: any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      this._srcImage.next(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  /**
 * clickFileUpload
 */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }
}
