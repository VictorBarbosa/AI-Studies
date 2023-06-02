import { Router } from "@angular/router";
import { AppPagesPaths } from "../app-routing.module";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {

  private _pageCurrent: string = '';
  public get pageCurrent(): string {
    return this._pageCurrent;
  }
  public set pageCurrent(v: string) {
    this._pageCurrent = v;
  }



  /**
   *
   */
  constructor(router?: Router) {
    if (router) {
      const title = AppPagesPaths.find(x => x.url === router.url.replace("/", ""))?.title
      if (title) {
        debugger
        this.pageCurrent = title
      }
    }
  }
}
