(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{esQn:function(t,e,n){"use strict";n.r(e),n.d(e,"ProdutoDetailPageModule",(function(){return L}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),a=n("LRne"),b=n("eIep"),s=n("5+tZ"),d=n("lJxs"),p=n("AytR"),u=n("fXoL"),l=n("uhbV"),m=n("G8+7");function f(t,e){if(1&t){const t=u.Nb();u.Mb(0,"ion-content",1),u.Mb(1,"ion-fab",2),u.Mb(2,"ion-fab-button",3),u.Ib(3,"ion-icon",4),u.Lb(),u.Lb(),u.Mb(4,"ion-card",5),u.Ib(5,"img",6),u.Mb(6,"ion-card-header",7),u.Mb(7,"ion-card-title"),u.mc(8),u.Lb(),u.Lb(),u.Mb(9,"ion-card-content"),u.mc(10),u.Xb(11,"currency"),u.Lb(),u.Mb(12,"ion-button",8),u.Ub("click",(function(){u.hc(t);const n=e.ngIf;return u.Wb().addToCart(n)})),u.mc(13,"Adicionar ao carrinho"),u.Lb(),u.Lb(),u.Lb()}if(2&t){const t=e.ngIf;u.xb(5),u.bc("src",t.imageUrl||"assets/imgs/prod.jpg",u.ic),u.xb(3),u.nc(t.nome),u.xb(2),u.oc(" ",u.Yb(11,3,t.preco)," ")}}let h=(()=>{class t{constructor(t,e,n,o){this.router=t,this.service=n,this.cartService=o,this.item$=this.service.findById(e.snapshot.params.produtoId).pipe(Object(b.a)(t=>this.loadImageUrls(t)))}loadImageUrls(t){return Object(a.a)(t).pipe(Object(s.a)(t=>this.service.getImageFromBucket(t.id).pipe(Object(d.a)(()=>Object.assign(Object.assign({},t),{imageUrl:`${p.a.BUCKET_URL}/prod${t.id}.jpg`})))))}addToCart(t){this.cartService.addProduto(t),this.router.navigateByUrl("/cart")}}return t.\u0275fac=function(e){return new(e||t)(u.Hb(c.g),u.Hb(c.a),u.Hb(l.a),u.Hb(m.a))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-produto-detail"]],decls:6,vars:3,consts:[["padding","",4,"ngIf"],["padding",""],["vertical","top","horizontal","end","edge","","slot","fixed"],["routerLink","/cart"],["name","cart"],[1,"md","hydrated"],[3,"src"],[1,"ion-inherit-color","md","hydrated"],["expand","block","color","primary",3,"click"]],template:function(t,e){1&t&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.mc(3,"Produto Detail"),u.Lb(),u.Lb(),u.Lb(),u.kc(4,f,14,5,"ion-content",0),u.Xb(5,"async")),2&t&&(u.xb(4),u.bc("ngIf",u.Yb(5,1,e.item$)))},directives:[r.m,r.J,r.I,o.k,r.j,r.k,r.l,r.Q,c.h,r.n,r.f,r.h,r.i,r.g,r.d],pipes:[o.b,o.d],styles:[""]}),t})();const g=[{path:"",component:h},{path:":produtoId",component:h}];let y=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(g)],c.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[o.c,i.d,r.K,y]]}),t})()}}]);