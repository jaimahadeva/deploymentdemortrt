"use strict";(self.webpackChunkpreptalksproject=self.webpackChunkpreptalksproject||[]).push([[398],{398:(U,l,r)=>{r.r(l),r.d(l,{LearningModule:()=>A});var g=r(808),s=r(459),n=r(223);let p=(()=>{class e{constructor(t){this.router=t}ngOnInit(){}gotodigitalAngular(){this.router.navigate(["/learning/digitalpreparation"])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-learning"]],decls:0,vars:0,template:function(t,o){},styles:[""]}),e})();class c{}let Z=(()=>{class e{constructor(){}getDigitalQuestions(){return[{id:1,question:"Good morning",answer:"Jaishreeram Prasann\n"},{id:8,question:"What is server side rendering ?",answer:"Angular Universal is the technology that will allow us to render the Apploication in server side .\nBasically Angular will render the Application Only in the Browser but if we are writing the any content that content will not be visible inside the App console so we need to use some rendering method "}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var a=r(382);function m(e,i){if(1&e&&(n.TgZ(0,"div",11)(1,"span",12),n._uU(2),n.qZA(),n.TgZ(3,"span"),n._uU(4),n.qZA(),n.TgZ(5,"div",13)(6,"span"),n._uU(7),n.qZA()()()),2&e){const t=i.$implicit,o=i.index;n.xp6(2),n.hij(" ",o+1,") ."),n.xp6(2),n.hij(" ",t.question,""),n.xp6(3),n.hij(" ",t.answer,"")}}const v=[{path:"home",component:p},{path:"digitalpreparation",component:(()=>{class e{constructor(t,o){this.preptalksservice=t,this.router=o,this.digiAdd=new c,this.digiQuestions=[]}ngOnInit(){this.getdigiQuestions()}onsibmit(){alert("thank you "+this.digiAdd.question+"For the registration")}getdigiQuestions(){this.digiQuestions=this.preptalksservice.getDigitalQuestions()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(Z),n.Y36(s.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-digitalpreparation"]],decls:71,vars:3,consts:[[1,"col-sm-12",2,"width","100%"],[1,"col-sm-4","leftside-conmtainer"],[1,"col-sm-8","bcc",2,"width","80%","float","left"],[1,"col-md-12"],[1,"col-md-12",3,"ngSubmit"],[1,"col-md-12","form-group"],[1,"col-md-3"],["type","text","name","question","id","question",1,"form-control",2,"width","80%","padding-left","4px",3,"ngModel","ngModelChange"],["type","text","name","answer","id","answer",1,"form-control",2,"width","80%","padding-left","20px",3,"ngModel","ngModelChange"],["type","submit",2,"text-align","center"],["class","col-sm-12 pd-20",4,"ngFor","ngForOf"],[1,"col-sm-12","pd-20"],[2,"padding-left","20px"],[2,"padding-left","30px","width","80%"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div"),n._uU(3," 1 "),n.qZA(),n._UZ(4,"br"),n.TgZ(5,"div"),n._uU(6," 1 "),n.qZA(),n._UZ(7,"br"),n.TgZ(8,"div"),n._uU(9," 1 "),n.qZA(),n._UZ(10,"br"),n.TgZ(11,"div"),n._uU(12," 1 "),n.qZA(),n._UZ(13,"br"),n.TgZ(14,"div"),n._uU(15," 1 "),n.qZA(),n._UZ(16,"br"),n.TgZ(17,"div"),n._uU(18," 1 "),n.qZA(),n._UZ(19,"br"),n.TgZ(20,"div"),n._uU(21," 1 "),n.qZA(),n._UZ(22,"br"),n.TgZ(23,"div"),n._uU(24," 1 "),n.qZA(),n._UZ(25,"br"),n.TgZ(26,"div"),n._uU(27," 1 "),n.qZA(),n._UZ(28,"br"),n.TgZ(29,"div"),n._uU(30," 1 "),n.qZA(),n._UZ(31,"br"),n.TgZ(32,"div"),n._uU(33," 1 "),n.qZA(),n._UZ(34,"br"),n.TgZ(35,"div"),n._uU(36," 1 "),n.qZA(),n._UZ(37,"br"),n.TgZ(38,"div"),n._uU(39," 1 "),n.qZA(),n._UZ(40,"br"),n.TgZ(41,"div"),n._uU(42," 1 "),n.qZA(),n._UZ(43,"br"),n.TgZ(44,"div"),n._uU(45," 1 "),n.qZA(),n._UZ(46,"br"),n.TgZ(47,"div"),n._uU(48," 1 "),n.qZA(),n._UZ(49,"br"),n.TgZ(50,"div"),n._uU(51," 1 "),n.qZA(),n._UZ(52,"br"),n.qZA(),n.TgZ(53,"div",2)(54,"div"),n._uU(55," Add New Question\n"),n.qZA(),n.TgZ(56,"div",3)(57,"form",4),n.NdJ("ngSubmit",function(){return o.onsibmit()}),n.TgZ(58,"div",5)(59,"label",6),n._uU(60," Question "),n.qZA(),n.TgZ(61,"input",7),n.NdJ("ngModelChange",function(d){return o.digiAdd.question=d}),n.qZA()(),n._UZ(62,"br"),n.TgZ(63,"div",5)(64,"label",6),n._uU(65," Answer "),n.qZA(),n.TgZ(66,"textarea",8),n.NdJ("ngModelChange",function(d){return o.digiAdd.answer=d}),n.qZA()(),n.TgZ(67,"div",3)(68,"button",9),n._uU(69,"submit"),n.qZA()()()(),n.YNc(70,m,8,3,"div",10),n.qZA()()),2&t&&(n.xp6(61),n.Q6J("ngModel",o.digiAdd.question),n.xp6(5),n.Q6J("ngModel",o.digiAdd.answer),n.xp6(4),n.Q6J("ngForOf",o.digiQuestions))},directives:[a._Y,a.JL,a.F,a.Fj,a.JJ,a.On,g.sg],styles:[".leftside-conmtainer[_ngcontent-%COMP%]{width:20%;max-height:450px;overflow:auto;float:left}.bcc[_ngcontent-%COMP%]{background-color:#f8f8ff}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),e})();var h=r(327);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.ez,f,a.u5,h.MenuModule]]}),e})()}}]);