"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9419],{9419:(T,v,s)=>{s.r(v),s.d(v,{CarPositionComponent:()=>U});var c=s(4401),m=s(4121),u=s(2147),g=s(3291),C=s(7241),h=s(1947),e=s(5095);let b=(()=>{class o{get model(){return this._model.getValue()}set model(t){this._model.getValue()!==t&&this._model.next(t)}constructor(){this._model=new m.X(null),this.model$=this._model.asObservable().pipe((0,u.x)(),(0,g.d)({bufferSize:1,refCount:!0})),c.YLj("assets/car_position/model.json").then(t=>{this._model.next(t)})}predict(t,i=224,n=224){const r=this.model;return new C.y(a=>{let d=c.Xhn.fromPixels(t,3).resizeNearestNeighbor([i,n]).toFloat().div(c.iD$(255)).expandDims();r&&r.execute(d).data().then(f=>{var p=this.getPredictedClass(f);a.next(p)})})}predictBase64(t,i=224,n=224){return new C.y(r=>{const a=this.model,d=new Image(i,n);d.onload=()=>{let f=c.Xhn.fromPixels(d,3).resizeNearestNeighbor([i,n]).toFloat().div(c.iD$(255)).expandDims();a&&a.execute(f).data().then(p=>{c.XAC(p).dataSync();var A=this.getPredictedClass(p);r.next(A)})},d.src=t})}getPredictedClass(t){if(!t||0===t.length){const r=[];for(let a=0;a<5;a++)r.push({name:"-",probability:0,index:0});return r}const i=Array.prototype.slice.call(t);return(0,h.XA)(i),(0,h.ll)(i,5,h.RL)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=s(89),P=s(8207),y=s(8168);const I=["img"],Z=["file"];function F(o,l){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&o){const t=l.$implicit;e.xp6(2),e.hij(" ",t.name,""),e.xp6(2),e.hij(" ",t.probability,"")}}let U=(()=>{class o{get srcImage(){return this._srcImage.getValue()}set srcImage(t){this._srcImage.getValue()!==t&&this._srcImage.next(t)}get position(){return this._position.getValue()}set position(t){this._position.getValue()!==t&&this._position.next(t)}constructor(t){this.carPosition=t,this.img=null,this.file=null,this._srcImage=new m.X(""),this.srcImage$=this._srcImage.asObservable().pipe((0,u.x)(),(0,g.d)({bufferSize:1,refCount:!0})),this._position=new m.X(null),this.position$=this._position.asObservable().pipe((0,u.x)(),(0,g.d)({bufferSize:1,refCount:!0}))}ngOnInit(){this._srcImage.pipe((0,y.b)(t=>{var i;null===(i=this.img)||void 0===i||i.nativeElement.setAttribute("src",t),this.carPosition.predictBase64(t).pipe((0,y.b)(n=>{this._position.next(n)})).subscribe()})).subscribe()}pictureUpload(t){const i=t.target.files[0],n=new FileReader;n.onloadend=r=>{(new Image).src=r.target.result,this._srcImage.next(r.target.result)},n.readAsDataURL(i)}clickFileUpload(){var t;null===(t=this.file)||void 0===t||t.nativeElement.click()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-car-position"]],viewQuery:function(t,i){if(1&t&&(e.Gf(I,7),e.Gf(Z,7)),2&t){let n;e.iGM(n=e.CRH())&&(i.img=n.first),e.iGM(n=e.CRH())&&(i.file=n.first)}},standalone:!0,features:[e._Bn([b]),e.jDz],decls:12,vars:1,consts:[["id","container"],[2,"display","flex","flex-direction","column","align-items","center"],["img",""],[4,"ngFor","ngForOf"],[1,"buttons"],["hidden","","accept",".jpg,.jpeg","type","file",3,"change"],["file",""],[3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",null,2),e.TgZ(4,"div")(5,"table"),e.YNc(6,F,5,2,"tr",3),e.qZA()()(),e.TgZ(7,"div",4)(8,"input",5,6),e.NdJ("change",function(r){return i.pictureUpload(r)}),e.qZA(),e.TgZ(10,"ion-button",7),e.NdJ("click",function(){return i.clickFileUpload()}),e._uU(11,"Upload File "),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngForOf",i.position))},dependencies:[P.Pc,P.YG,x.ez,x.sg],styles:["#container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}.buttons[_ngcontent-%COMP%]{bottom:0px;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column}"]}),o})()}}]);