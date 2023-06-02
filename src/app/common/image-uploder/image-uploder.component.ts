import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, distinctUntilChanged, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-image-uploder',
  templateUrl: './image-uploder.component.html',
  styleUrls: ['./image-uploder.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],

})
export class ImageUploderComponent implements OnInit, OnDestroy {


  /**
   * video
   */
  @ViewChild('file', { static: true }) file: ElementRef<HTMLInputElement> | null = null;


  /*
  *Emitter when  change
  */
  @Output() srcImageChange = new EventEmitter<FileList>();


  /*
   * _multiple
   */
  private _multiple = new BehaviorSubject<boolean>(false);

  /*
   * _multiple Getter
   */
  get multiple(): boolean {
    return this._multiple.getValue();
  }

  /*
   * _multiple Setter
   */
  @Input() set multiple(value: boolean) {
    if (this._multiple.getValue() !== value) {
      this._multiple.next(value);
    }
  }


  constructor() { }


  ngOnInit() {

  }

  pictureUpload(ev: any) {
    this.srcImageChange.emit(ev.target.files)
  }

  ngOnDestroy(): void {

  }

  /**
  * clickFileUpload
 */
  clickFileUpload() {
    this.file?.nativeElement.click();
  }

}
