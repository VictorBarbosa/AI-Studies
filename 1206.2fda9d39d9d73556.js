"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1206],{1206:(D,g,i)=>{i.r(g),i.d(g,{StyleTransferComponent:()=>O});var f=i(89),m=i(8207),c=i(334),o=i(6284),d=i(4121),p=i(2147),u=i(3291),h=i(8168),y=i(1947),e=i(5095);const v=["cont"],P=["style"],T=["canv"],C=["filePic"],E=["fileStyle"];function M(a,r){if(1&a&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&a){const n=r.$implicit;e.Q6J("value",n.img),e.xp6(1),e.hij(" ",n.label," ")}}let O=(()=>{class a{get selected(){return this._selected.getValue()}set selected(n){this._selected.getValue()!==n&&this._selected.next(n)}constructor(){this.images=[{img:"assets/Derkovits_Gyula_Talig\xe1s.jpeg",label:"Derkovits_Gyula_Taliga\u0301s"},{img:"assets/Landscape_with_black_figure.jpeg",label:"Landscape_with_black_figure"},{img:"assets/Large_bonfire.jpg",label:"Large_bonfire"},{img:"assets/Les_Demoiselles_d.jpeg",label:"Les_Demoiselles_d.jpeg"},{img:"assets/Nantes_from_the_Ile_Feydeau.jpeg",label:"Nantes_from_the_Ile_Feydeau"},{img:"assets/Pillars_of_creation.jpeg",label:"Pillars_of_creation.jpeg"},{img:"assets/Still_Life_with_a_Bottle_of_Rum.jpg",label:"Still_Life_with_a_Bottle_of_Rum"},{img:"assets/Still_life.jpeg",label:"Still_life"},{img:"assets/The_Scream.jpeg",label:"The_Scream"},{img:"assets/Van_Gogh.jpeg",label:"Van_Gogh"},{img:"assets/Vassily_Kandinsky.jpeg",label:"Vassily_Kandinsky"},{img:"assets/kanagawa_great_wave.jpeg",label:"kanagawa_great_wave"}],this.model=null,this.cont=null,this.style=null,this.canv=null,this.filePic=null,this.fileStyle=null,this._selected=new d.X("assets/Derkovits_Gyula_Talig\xe1s.jpeg"),this.selected$=this._selected.asObservable().pipe((0,p.x)(),(0,u.d)({bufferSize:1,refCount:!0})),c.YLj("assets/StyleTranfer/model.json").then(n=>{this.model=n,this.apply()})}ngOnInit(){this._selected.pipe((0,h.b)(n=>{"fileUpload"===n&&this.fileStyle?.nativeElement.click()})).subscribe()}apply(){if(this.model&&this.cont?.nativeElement&&this.style?.nativeElement){const n=c.Xhn.fromPixels(this.cont.nativeElement,3).resizeNearestNeighbor([224,224]).expandDims().div(255).toFloat(),l=c.Xhn.fromPixels(this.style.nativeElement,3).resizeNearestNeighbor([224,224]).expandDims().div(255).toFloat(),t=this.model.execute([n,l]).dataSync(),s=c.wOQ(Array.from(t),[224,224,3]);c.Xhn.toPixels(s,this.canv?.nativeElement)}}fileUploadPicture(n){const l=n.target.files[0],t=new FileReader;t.onloadend=s=>{let _=new Image;_.src=s.target.result,this.cont?.nativeElement&&(this.cont.nativeElement.src=_.src)},t.readAsDataURL(l)}clickFileUploadPicute(){this.filePic?.nativeElement.click()}fileUploadStyle(n){const l=n.target.files[0],t=new FileReader;t.onloadend=s=>{let _=new Image;_.src=s.target.result,this.style?.nativeElement&&(this.style.nativeElement.src=_.src)},t.readAsDataURL(l)}clickFileUploadStyle(){this.fileStyle?.nativeElement.click()}ngOnDestroy(){this.model?.dispose()}downloadPicture(){this.canv?.nativeElement&&(0,y.GN)(this.canv.nativeElement)}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-style-transfer"]],viewQuery:function(n,l){if(1&n&&(e.Gf(v,5),e.Gf(P,5),e.Gf(T,5),e.Gf(C,5),e.Gf(E,5)),2&n){let t;e.iGM(t=e.CRH())&&(l.cont=t.first),e.iGM(t=e.CRH())&&(l.style=t.first),e.iGM(t=e.CRH())&&(l.canv=t.first),e.iGM(t=e.CRH())&&(l.filePic=t.first),e.iGM(t=e.CRH())&&(l.fileStyle=t.first)}},standalone:!0,features:[e.jDz],decls:26,vars:3,consts:[[1,"container"],[1,"image-container"],[1,"image"],["width","224","src","assets/cont.jpeg","alt",""],["cont",""],["hidden","","accept",".jpg,.jpeg","type","file",3,"change"],["filePic",""],[3,"click"],["width","224","alt","",3,"src"],["style",""],["fileStyle",""],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","fileUpload"],[1,"container-result"],["canv",""],[1,"buttons-alignment"],[3,"value"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3,4),e.TgZ(5,"input",5,6),e.NdJ("change",function(s){return l.fileUploadPicture(s)}),e.qZA(),e.TgZ(7,"ion-button",7),e.NdJ("click",function(){return l.clickFileUploadPicute()}),e._uU(8,"Upload File "),e.qZA()(),e.TgZ(9,"div",2),e._UZ(10,"img",8,9),e.TgZ(12,"input",5,10),e.NdJ("change",function(s){return l.fileUploadStyle(s)}),e.qZA(),e.TgZ(14,"select",11),e.NdJ("ngModelChange",function(s){return l.selected=s}),e.YNc(15,M,2,2,"option",12),e.TgZ(16,"option",13),e._uU(17," Upload File "),e.qZA()()()(),e.TgZ(18,"div",14),e._UZ(19,"canvas",null,15),e.TgZ(21,"div",16)(22,"ion-button",7),e.NdJ("click",function(){return l.apply()}),e._uU(23,"Apply"),e.qZA(),e.TgZ(24,"ion-button",7),e.NdJ("click",function(){return l.downloadPicture()}),e._uU(25,"Download"),e.qZA()()()()),2&n&&(e.xp6(10),e.Q6J("src",l.selected,e.LSH),e.xp6(4),e.Q6J("ngModel",l.selected),e.xp6(1),e.Q6J("ngForOf",l.images))},dependencies:[m.Pc,m.YG,f.ez,f.sg,o.u5,o.YN,o.Kr,o.EJ,o.JJ,o.On],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px!important;height:255px;border:1px solid black}.container[_ngcontent-%COMP%]   .container-result[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;flex-direction:column}.buttons-alignment[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}"]}),a})()}}]);