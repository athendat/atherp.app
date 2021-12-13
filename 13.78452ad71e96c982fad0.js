"use strict";(self.webpackChunkpa006_atherp_front=self.webpackChunkpa006_atherp_front||[]).push([[13],{5238:(h,_,a)=>{a.d(_,{g:()=>J});var r=a(3324),c=a(9618),D=a(6006),u=a(7194),x=a(7106),e=a(2741),d=a(4576),v=a(1264),Z=a(2243),T=a(5712),b=a(8418),p=a(6274),m=a(823),f=a(9018),A=a(1749),g=a(846),C=a(3045),I=a(688),E=a(7617);function O(n,i){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Agregar departamento"),e.qZA())}function M(n,i){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Editar departamento"),e.qZA())}function y(n,i){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Detalles del departamento"),e.qZA())}function w(n,i){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e.TgZ(4,"div",12),e.TgZ(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"div",15),e.TgZ(10,"h6",13),e._uU(11,"Descripci\xf3n"),e.qZA(),e.TgZ(12,"span",14),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(8),e.Oqu(t.data.department.name||"Sin nombre"),e.xp6(5),e.Oqu(t.data.department.description||"Sin descripci\xf3n")}}function U(n,i){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.name," ")}}function q(n,i){if(1&n&&(e.TgZ(0,"div",26),e.TgZ(1,"mat-form-field",27),e.TgZ(2,"mat-label"),e._uU(3,"Negocio"),e.qZA(),e.TgZ(4,"mat-select",28),e.YNc(5,U,2,2,"mat-option",29),e.qZA(),e.TgZ(6,"mat-hint"),e._uU(7,"Seleccione el negocio al cual pertenece el departamento"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("formControlName","businessId"),e.xp6(1),e.Q6J("ngForOf",t.business)("ngForTrackBy",t.trackByFn)}}function B(n,i){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=i.$implicit,o=e.oxw(3);e.Q6J("value",o.data.department.businessId._id),e.xp6(1),e.hij(" ",t.name," ")}}function P(n,i){if(1&n&&(e.TgZ(0,"div",26),e.TgZ(1,"mat-form-field",27),e.TgZ(2,"mat-label"),e._uU(3,"Negocio"),e.qZA(),e.TgZ(4,"mat-select",28),e.YNc(5,B,2,2,"mat-option",29),e.qZA(),e.TgZ(6,"mat-hint"),e._uU(7,"Seleccione el negocio al cual pertenece el departamento"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("formControlName","businessId"),e.xp6(1),e.Q6J("ngForOf",t.business)("ngForTrackBy",t.trackByFn)}}function k(n,i){if(1&n&&(e.TgZ(0,"div",16),e.TgZ(1,"div",9),e.TgZ(2,"form",17),e.YNc(3,q,8,3,"div",18),e.YNc(4,P,8,3,"div",18),e.TgZ(5,"div",19),e.TgZ(6,"mat-form-field",20),e.TgZ(7,"mat-label"),e._uU(8,"Nombre"),e.qZA(),e._UZ(9,"input",21),e.qZA(),e.qZA(),e.TgZ(10,"div",22),e.TgZ(11,"mat-form-field",20),e.TgZ(12,"mat-label"),e._uU(13,"Descripci\xf3n del Departamento"),e.qZA(),e._UZ(14,"mat-icon",23),e._UZ(15,"textarea",24),e.qZA(),e.qZA(),e.TgZ(16,"div",19),e.TgZ(17,"mat-slide-toggle",25),e._uU(18," Activo "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.departmentForm)("autocomplete","off"),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(5),e.Q6J("type","text")("formControlName","name")("placeholder","Nombre del departamento"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:menu-alt-2"),e.xp6(1),e.Q6J("formControlName","description")("rows",3)("spellcheck",!1),e.xp6(2),e.Q6J("value",!0)("color","primary")("formControlName","active")}}function F(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateDepartment()}),e._uU(2," Guardar "),e.qZA(),e.BQk()}2&n&&(e.xp6(1),e.Q6J("color","primary")("matDialogClose","confirmed"))}function R(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).createDepartment()}),e._uU(2," Agregar "),e.qZA(),e.BQk()}2&n&&(e.xp6(1),e.Q6J("color","primary")("matDialogClose","confirmed"))}function Q(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",31),e.ynx(2),e.TgZ(3,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteSelectedDepartment()}),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,F,3,2,"ng-container",6),e.YNc(6,R,3,2,"ng-container",6),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let J=(()=>{class n{constructor(t,o,l,s,N,Y,K,S,W){this.data=t,this._activatedRoute=o,this._businessService=l,this._changeDetectorRef=s,this._formBuilder=N,this._fuseConfirmationService=Y,this._hrmService=K,this._router=S,this._userService=W,this.business=[],this.dialogMode="view",this._unsubscribeAll=new D.xQ}ngOnInit(){this._userService.user$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this._user=t,this._businessOwnerId=t.businessOwnerId?t.businessOwnerId:t._id,this._changeDetectorRef.markForCheck()}),this._businessService.business$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>this.business=t),this.departmentForm=this._formBuilder.group({_id:[""],active:[null],businessOwnerId:[this._businessOwnerId,[r.kI.required]],userId:[this._user._id,[r.kI.required]],businessId:["",[r.kI.required]],code:[{value:"",disabled:!0}],name:["",[r.kI.required]],description:[""]}),"edit"===this.data.dialogMode&&this._setDepartmentDataOnForm(this.data.department),this._activatedRoute.params.subscribe(({id:t})=>this.getDepartmentById(t))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}createDepartment(){let t=this.departmentForm.getRawValue();t=(0,x.Z)(t,"_id"),this._fuseConfirmationService.open({title:"Crear Departamento",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(l=>{"confirmed"===l&&this._hrmService.createDepartment(t).subscribe(s=>{this._fuseConfirmationService.open({title:"Departamento creado correctamente",message:s.name,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},s=>{this._fuseConfirmationService.open({title:`${s.statusText}: ${s.status}`,message:s.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})}),this._changeDetectorRef.markForCheck()})}updateDepartment(){const t=this.departmentForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Departamento",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(l=>{"confirmed"===l&&this._hrmService.updateDepartment(t).subscribe(s=>{this._fuseConfirmationService.open({title:"Departamento actualizado correctamente",message:s.name,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},s=>{this._fuseConfirmationService.open({title:`${s.statusText}: ${s.status}`,message:s.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})}),this._changeDetectorRef.markForCheck()})}trackByFn(t,o){return o.id||t}getDepartmentById(t){"new"!==t&&this._hrmService.department$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(o=>{this.department=o,this._changeDetectorRef.markForCheck()})}_setDepartmentDataOnForm(t){this.departmentForm.get("_id").setValue(t._id),this.departmentForm.get("active").setValue(t.active),this.departmentForm.get("name").setValue(t.name),this.departmentForm.get("description").setValue(t.description),this.departmentForm.get("businessId").setValue(t.businessId._id),this.departmentForm.get("businessOwnerId").setValue(t.businessOwnerId._id),this.departmentForm.get("code").setValue(t.code)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.WI),e.Y36(d.gz),e.Y36(v.m),e.Y36(e.sBO),e.Y36(r.qu),e.Y36(Z.R),e.Y36(T.E),e.Y36(d.F0),e.Y36(b.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["department-detail"]],decls:12,vars:6,consts:[[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto",4,"ngIf"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","pb-4","my-10"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],["class","pt-5 sm:col-span-2",4,"ngIf"],[1,"sm:col-span-2"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","required","",3,"type","formControlName","placeholder"],[1,"pt-4","sm:col-span-2"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","matTextareaAutosize","",3,"formControlName","rows","spellcheck"],["required","",1,"pt-4","mb-2",3,"value","color","formControlName"],[1,"pt-5","sm:col-span-2"],[1,"w-full"],["required","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose","click"],["mat-flat-button","",3,"color","matDialogClose","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,O,2,0,"h2",2),e.YNc(4,M,2,0,"h2",2),e.YNc(5,y,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(6,"div",3),e.ynx(7),e.YNc(8,w,14,2,"div",4),e.BQk(),e.ynx(9),e.YNc(10,k,19,14,"div",5),e.BQk(),e.qZA(),e.YNc(11,Q,7,3,"ng-container",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",null===o.data.department._id&&"add"===o.data.dialogMode),e.xp6(1),e.Q6J("ngIf",o.data.department._id&&"edit"===o.data.dialogMode),e.xp6(1),e.Q6J("ngIf",o.data.department._id&&"view"===o.data.dialogMode),e.xp6(3),e.Q6J("ngIf","view"===o.data.dialogMode),e.xp6(2),e.Q6J("ngIf","edit"===o.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==o.data.dialogMode))},directives:[p.O5,r._Y,r.JL,r.sg,m.KE,m.hX,f.Nt,r.Fj,r.Q7,r.JJ,r.u,A.Hw,m.qo,f.D7,g.Rr,g.SA,C.gD,p.sg,m.bx,I.ey,E.lW,c.ZT],encapsulation:2,changeDetection:0}),n})()},316:(h,_,a)=>{a.d(_,{R:()=>r,X:()=>c});const r={_id:null,active:null,businessOwnerId:null,userId:null,businessId:null,code:null,name:null,description:null},c={_id:null,businessId:null,businessOwnerId:null,userId:null,active:null,name:null,salary:null,requirement:null}}}]);