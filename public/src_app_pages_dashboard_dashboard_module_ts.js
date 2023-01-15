"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 3203:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component.html?ngResource */ 2102);
/* harmony import */ var _chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss?ngResource */ 8730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ 9014);





let ChatComponent = class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.texto = '';
        this.mensajes = [];
    }
    ngOnInit() {
        this.mensajesSbuscription = this.chatService.getMessages().subscribe(msg => {
            this.mensajes.push(msg);
        });
    }
    ngOnDestroy() {
        this.mensajesSbuscription.unsubscribe();
    }
    enviar() {
        this.chatService.sendMessage(this.texto);
        this.texto = '';
    }
};
ChatComponent.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService }
];
ChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chat',
        template: _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat.component */ 3203);
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios/usuarios.component */ 6822);
/* harmony import */ var _usuario_formulario_usuario_formulario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-formulario/usuario-formulario.component */ 547);









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent,
            _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_2__.UsuariosComponent,
            _usuario_formulario_usuario_formulario_component__WEBPACK_IMPORTED_MODULE_3__.UsuarioFormularioComponent
        ],
        exports: [
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent,
            _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_2__.UsuariosComponent,
            _usuario_formulario_usuario_formulario_component__WEBPACK_IMPORTED_MODULE_3__.UsuarioFormularioComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 547:
/*!*******************************************************************************!*\
  !*** ./src/app/components/usuario-formulario/usuario-formulario.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioFormularioComponent": () => (/* binding */ UsuarioFormularioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuario_formulario_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario-formulario.component.html?ngResource */ 1914);
/* harmony import */ var _usuario_formulario_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario-formulario.component.scss?ngResource */ 9413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ 5763);







let UsuarioFormularioComponent = class UsuarioFormularioComponent {
    constructor(modalCtrl, usuarioService, loadingCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.usuarioService = usuarioService;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.usuarioFormulario = this.fb.group({
            nombre: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            correo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
            rol: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
            img: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]]
        });
        this.usuario = {
            nombre: '',
            correo: '',
            img: '',
            rol: '',
            estado: false
        };
        this.usuarioFormulario.reset({
            nombre: '',
            correo: '@gmail.com',
            img: 'https://i.imgur.com/ZUu9nkH.png',
            rol: ''
        });
        // this.presentLoading();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuarioService.verUsuario(this.usuarioId).subscribe((usuario) => {
                this.usuario = usuario;
                // this.loading.dismiss();
            });
            yield this.usuarioService.obtenerRoles().subscribe((roles) => {
                this.roles = roles;
            });
        });
    }
    salirSinArgumentos() {
        this.modalCtrl.dismiss();
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Cargando...',
                mode: 'ios'
            });
            yield this.loading.present();
        });
    }
    campoEsValido(campo) {
        return this.usuarioFormulario.controls[campo].errors
            && this.usuarioFormulario.controls[campo].touched;
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.usuarioFormulario.invalid) {
                this.usuarioFormulario.markAllAsTouched();
                return;
            }
            yield this.usuarioService.crearUsuario(this.usuarioFormulario.value).subscribe(console.log);
            this.usuarioFormulario.reset();
        });
    }
};
UsuarioFormularioComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
UsuarioFormularioComponent.propDecorators = {
    usuarioId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
UsuarioFormularioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-usuario-formulario',
        template: _usuario_formulario_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usuario_formulario_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsuarioFormularioComponent);



/***/ }),

/***/ 6822:
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosComponent": () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuarios_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.component.html?ngResource */ 890);
/* harmony import */ var _usuarios_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios.component.scss?ngResource */ 2939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ 5763);
/* harmony import */ var _usuario_formulario_usuario_formulario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario-formulario/usuario-formulario.component */ 547);







let UsuariosComponent = class UsuariosComponent {
    constructor(usuarioService, modalCtrl) {
        this.usuarioService = usuarioService;
        this.modalCtrl = modalCtrl;
        this.textoBuscar = '';
        this.segmento = 'activos';
    }
    ngOnInit() {
        this.usuarioService.listarUsuarios().subscribe((usuarios) => {
            this.usuarios = usuarios;
        });
    }
    segmentChanged(event) {
        this.segmento = event.detail.value;
    }
    onSearchChange(event) {
        this.textoBuscar = event.detail.value;
    }
    editarUsuario(usuarioId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _usuario_formulario_usuario_formulario_component__WEBPACK_IMPORTED_MODULE_3__.UsuarioFormularioComponent,
                componentProps: {
                    usuarioId: usuarioId
                }
            });
            yield modal.present();
        });
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
UsuariosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-usuarios',
        template: _usuarios_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usuarios_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsuariosComponent);



/***/ }),

/***/ 9366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 6446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 1659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9366);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 5642);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ 6446);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_2__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 6446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 7791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ 5763);






let DashboardPage = class DashboardPage {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
    }
    ngOnInit() {
        this.usuario = this.usuarioService.usuario;
    }
    logout() {
        this.router.navigateByUrl('/login');
        this.usuarioService.logout();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _usuarios_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.pipe */ 6122);



let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _usuarios_pipe__WEBPACK_IMPORTED_MODULE_0__.UsuariosPipe
        ],
        exports: [
            _usuarios_pipe__WEBPACK_IMPORTED_MODULE_0__.UsuariosPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 6122:
/*!****************************************!*\
  !*** ./src/app/pipes/usuarios.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosPipe": () => (/* binding */ UsuariosPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let UsuariosPipe = class UsuariosPipe {
    constructor() {
        this.statusUsuarios = true;
    }
    transform(arreglo, texto = '', segmento = 'activos') {
        try {
            if (segmento == 'activos') {
                this.statusUsuarios = true;
            }
            if (segmento == 'borrados') {
                this.statusUsuarios = false;
            }
            if (texto === '') {
                return arreglo.filter(item => item['estado'] == this.statusUsuarios);
            }
            if (!arreglo) {
                return arreglo.filter(item => item['estado'] == this.statusUsuarios);
            }
            texto = texto.toLocaleLowerCase();
            let resultadosCorreo = arreglo.filter(item => item['correo'].toLowerCase().includes(texto));
            if (resultadosCorreo.length > 0) {
                return resultadosCorreo.filter(item => item['estado'] == this.statusUsuarios);
            }
            let resultadosNombre = arreglo.filter(item => item['nombre'].toLowerCase().includes(texto));
            if (resultadosNombre.length > 0) {
                return resultadosNombre.filter(item => item['estado'] == this.statusUsuarios);
            }
        }
        catch (error) {
        }
    }
};
UsuariosPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'usuariosPipe'
    })
], UsuariosPipe);



/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket.service */ 8223);



let ChatService = class ChatService {
    constructor(wsService) {
        this.wsService = wsService;
    }
    sendMessage(mensaje) {
        const payload = {
            de: 'Leandro',
            cuerpo: mensaje
        };
        this.wsService.emit('mensaje', payload);
    }
    getMessages() {
        return this.wsService.listen('mensaje-nuevo');
    }
};
ChatService.ctorParameters = () => [
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ 8730:
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9413:
/*!********************************************************************************************!*\
  !*** ./src/app/components/usuario-formulario/usuario-formulario.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  margin-left: 5px;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\nion-icon:hover {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW8tZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcdXN1YXJpby1mb3JtdWxhcmlvXFx1c3VhcmlvLWZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InVzdWFyaW8tZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pY29uOmhvdmVye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59IiwiaW9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1pY29uOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */";

/***/ }),

/***/ 2939:
/*!************************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  cursor: pointer;\n}\n\nion-icon:hover {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcaW5ub3ZhbmNlLWZpbmFuY2VcXHNyY1xcYXBwXFxjb21wb25lbnRzXFx1c3Vhcmlvc1xcdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRyxZQUFBO0FDQ0giLCJmaWxlIjoidXN1YXJpb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pY29uOmhvdmVyIHtcclxuICAgY29sb3I6IGdyZWVuO1xyXG4gIH0iLCJpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWljb246aG92ZXIge1xuICBjb2xvcjogZ3JlZW47XG59Il19 */";

/***/ }),

/***/ 7791:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2102:
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chat.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<h1>Mensaje</h1>\n<hr>\n\n<form (ngSubmit)=\"enviar()\">\n\n  <ion-input type=\"text\" placeholder=\"Mensaje\" name=\"texto\" [(ngModel)]=\"texto\"></ion-input>\n\n  <ion-list>\n    <ion-item *ngFor=\"let mensaje of mensajes\">\n      <ion-label>{{mensaje.de}}: {{mensaje.cuerpo}}</ion-label>\n    </ion-item>\n  </ion-list>\n</form>";

/***/ }),

/***/ 1914:
/*!********************************************************************************************!*\
  !*** ./src/app/components/usuario-formulario/usuario-formulario.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back-outline\" slot=\"start\" (click)=\"salirSinArgumentos()\"></ion-icon>\n    <ion-title>{{usuario.nombre}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-card>\n    <ion-card-content>\n\n      <form (ngSubmit)=\"guardar()\" autocomplete=\"off\" [formGroup]=\"usuarioFormulario\">\n\n        <ion-item>\n          <ion-label>Nombre completo</ion-label>\n          <ion-input type=\"text\" placeholder=\"Nombre completo\" formControlName=\"nombre\"></ion-input>\n          <ion-label *ngIf=\"campoEsValido('nombre')\" style=\"color:red;\">Nombre no válido</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Correo de Gmail</ion-label>\n          <ion-input type=\"text\" placeholder=\"Gmail\" formControlName=\"correo\"></ion-input>\n        </ion-item>\n\n\n        <input type=\"text\" formControlName=\"img\" style=\"display: none;\">\n\n\n        <ion-item>\n          <ion-label>Rol</ion-label>\n          <ion-select value=\"USER_ROLE\" multiple=\"false\" placeholder=\"Selecione un rol\" formControlName=\"rol\">\n            <ion-select-option [value]=\"rol.rol\" *ngFor=\"let rol of roles\">{{rol.rol}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" type=\"submit\">\n          Guardar\n        </ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";

/***/ }),

/***/ 890:
/*!************************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\" style=\"margin-bottom: 15px;\">Cuentas de usuarios</ion-card-title>\n    <ion-segment value=\"activos\" (ionChange)=\"segmentChanged($event)\">\n\n      <ion-segment-button value=\"activos\">\n        <ion-label>Activos</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"borrados\">\n        <ion-label>Borrados</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-card-header>\n  <ion-card-content>\n    \n    <ion-toolbar>\n      <ion-searchbar placeholder=\"Buscar usuarios\" animated mode=\"ios\" (ionChange)=\"onSearchChange($event)\">\n      </ion-searchbar>\n    </ion-toolbar>\n\n    <ion-list>\n      <ion-item *ngFor=\"let usuario of usuarios | usuariosPipe:textoBuscar:segmento\">\n        <ion-label>{{usuario.correo}}</ion-label>\n        <ion-label>{{usuario.nombre}}</ion-label>\n        <ion-icon name=\"create-outline\" (click)=\"editarUsuario(usuario.uid)\"></ion-icon>\n        <ion-icon name=\"trash-outline\" *ngIf=\"segmento=='activos'\"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n  </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 3890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Innovance Finance</ion-title>\n    <ion-text color=\"primary\" slot=\"end\" style=\"margin-right: 10px;cursor: pointer;\" (click)=\"logout()\">\n      <h5>Salir</h5>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size-xl=\"6\">\n        <app-usuarios></app-usuarios>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map