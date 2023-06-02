import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Router, Routes } from '@angular/router';
import { AppPagesPaths } from '../app-routing.module';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],

  providers: []

})
export class MainComponent implements OnInit {

  page: any = ''

  constructor(private router: Router) {

  }



  ngOnInit() {
  }


  ngAfterContentChecked(): void {
    this.page = AppPagesPaths.find(x => x.url === this.router.url.replace("/", ""))?.title;
  }

}
