(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-ngbheader></app-ngbheader>\n<div class=\"container\">\n  <div class=\"row mt-2\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-status-check></app-status-check>\n  <button *ngIf=\"!heartBeatState\" (click)=\"setHeartBeatState(true)\">Enable HeartBeat Check</button>\n  <button *ngIf=\"heartBeatState\" (click)=\"setHeartBeatState(false)\">Disable HeartBeat Check</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"user_card\">\n            <div class=\"d-flex justify-content-center\">\n                <div class=\"brand_logo_container\" style=\"background-color:#c02b2b;color:#ffbd55;border:0.rem solid #c02b2b; overflow:hidden;\">\n                    <div class=\"brand_logo_barcode\">\n                        <fa-icon [icon]=\"['fa', 'barcode']\"></fa-icon>\n                        <fa-icon [icon]=\"['fa', 'barcode']\"></fa-icon>\n                    </div>\n                    <div class=\"brand_logo_text\">Inventarisierung</div>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center form_container\">\n                <form #loginForm=ngForm (ngSubmit)=\"onLoginSubmit()\">\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <fa-icon [icon]=\"['fa', 'user']\"></fa-icon>\n                            </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control input_user\" name=\"user\" placeholder=\"username\"\n                            [(ngModel)]=\"form.email\"\n                            minlength=\"3\"\n                            pattern=\"[a-zA-Z0-9.@]{3,}\"\n                            required\n                        >\n                    </div>\n                    <div class=\"input-group mb-2\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <fa-icon [icon]=\"['fa', 'key']\"></fa-icon>\n                            </span>\n                        </div>\n                        <input required type=\"password\" class=\"form-control input_pass\" name=\"password\" placeholder=\"password\"\n                        [(ngModel)]=\"form.password\"\n                        required>\n                    </div>\n                    <div class=\"d-flex justify-content-center mt-3 login_container\">\n                 <button type=\"button\" name=\"button\" class=\"btn login_btn\"\n                 (click)=\"onLoginSubmit()\"\n                 [disabled]=\"loginForm.invalid\">Login</button>\n               </div>\n                </form>\n            </div>\n        </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n    </div>\n</div>\n\n<div style=\"display: none\"><p>login works!</p></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/test\">Test</a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\"\n            ngbDropdownToggle\n            id=\"navbarDropdown\" role=\"button\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/test\">Action</a>\n            <a class=\"dropdown-item\" routerLink=\"/test\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/test\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" routerLink=\"/test\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n\n<div style=\"display: none\"><p>header works!</p></div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row no-gutters mb-1\">\n  <div class=\"form-group col-4\">\n    <label for=\"kunde\" class=\"mb-0\">Mandant</label>\n    <input id=\"kunde\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"kundeName\">\n  </div>\n  <div class=\"form-group col-4 px-1\">\n    <label for=\"adresse\" class=\"mb-0\">Adresse</label>\n    <input id=\"adresse\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"adresse\">\n  </div>\n  <div class=\"form-group col-4\">\n    <label for=\"raum\" class=\"mb-0\">Raum</label>\n    <input id=\"raum\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"raumNr\">\n  </div>\n</div>\n\n<div class=\"row mb-4\">\n  <div class=\"col-6\">\n    <app-progressbar [shortTitle]=\"'Gesamt'\" [title]=\"'Fortschrittsanzeige gesamt'\"\n                     [sendDoneClick]=\"true\"\n                     (clickedDone)=\"showGesamtDone()\"\n                     [sendRestClick]=\"true\"\n                     (clickedRest)=\"showGesamtRest()\"\n                     [value]=\"jobProgress.done\" [total]=\"jobProgress.total\"></app-progressbar>\n  </div>\n  <div class=\"col-6\">\n    <app-progressbar [shortTitle]=\"'Raum'\"  [title]=\"'Fortschrittsanzeige Raum'\"\n                     [sendDoneClick]=\"true\"\n                     (clickedDone)=\"showRaumDone()\"\n                     [sendRestClick]=\"true\"\n                     (clickedRest)=\"showRaumRest()\"\n                     [value]=\"raumProgress.done\" [total]=\"raumProgress.total\"></app-progressbar>\n  </div>\n</div>\n\n<div class=\"row mt-4\">\n  <label for=\"raumCode\" class=\"col-8\"><strong>Raumdaten</strong></label>\n\n  <div class=\"col-4 text-right\">\n    <div #myDrop=\"ngbDropdown\" ngbDropdown>\n      <button [ngClass]=\"{\n        'btn-outline-success': raumEditStatus === 2,\n        'btn-outline-info': raumEditStatus === 1,\n        'btn-outline-secondary': raumEditStatus === 0\n        }\" class=\"btn btn-sm dropdown-toggle\"\n              type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              (click)=\"$event.stopPropagation(); myDrop.open();\"\n              aria-expanded=\"false\">\n        <ng-container [ngSwitch]=\"raumEditStatus\">\n          <fa-icon *ngSwitchCase=\"2\" [icon]=\"faCheck\"></fa-icon>\n          <fa-icon *ngSwitchCase=\"1\" [icon]=\"faDoorOpen\"></fa-icon>\n          <fa-icon *ngSwitchDefault [icon]=\"faDoorClosed\"></fa-icon>\n        </ng-container>\n      </button>\n      <div class=\"dropdown-menu dropdown-menu-right\" [style.right]=\"0\" ngbDropdownMenu>\n        <button ngbDropdownItem class=\"dropdown-item\"\n                (click)=\"setRaumEditStatusClosed()\"><fa-icon [attr.class]=\"'text-success'\" [icon]=\"faCheck\"></fa-icon>\n          Fertig\n        </button>\n        <button ngbDropdownItem class=\"dropdown-item\"\n                (click)=\"setRaumEditStatusStarted()\"><fa-icon [attr.class]=\"'text-info'\" [icon]=\"faDoorOpen\"></fa-icon>\n          In Arbeit\n        </button>\n        <button *ngIf=\"raumProgress.done === 0\" ngbDropdownItem class=\"dropdown-item\"\n                (click)=\"setRaumEditStatusUntouched()\"><fa-icon [attr.class]=\"'text-secondary'\" [icon]=\"faDoorClosed\"></fa-icon>\n          Noch nicht begonnen\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <div class=\"col input-group mb-1\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">BCode</span>\n    </div>\n    <input id=\"raumCode\" #raumBarcode type=\"text\"\n           class=\"form-control\" [value]=\"formInventar.RaumBarcode\" (input)=\"onRaumBarcodeInput( $event )\" placeholder=\"Raum-Barcode\" aria-label=\"Raumcode\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(raumBarcode)\"><fa-icon [icon]=\"faCamera\"></fa-icon></button>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col input-group mb-1\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Nr</span>\n    </div>\n    <input id=\"raumNr\" type=\"text\" [value]=\"formInventar.Raum\" class=\"form-control\" placeholder=\"Raumnr\" aria-label=\"Raumnummer\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectSearchRaum()\">...</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col input-group mb-1\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Bez.</span>\n    </div>\n    <!-- div class=\"col\" -->\n      <input  id=\"raumBez\" type=\"text\" [value]=\"formInventar.Raumbezeichnung\"\n              placeholder=\"Raumbezeichnung\" class=\"form-control\">\n    <!-- /div -->\n  </div>\n</div>\n\n<div class=\"row mt-4\">\n  <label for=\"raumCode\" class=\"col\"><strong>Inventar-Daten</strong></label>\n</div>\n<div class=\"form-group row\">\n    <div class=\"col input-group mb-1\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">BCode</span>\n      </div>\n      <input id=\"elmBarcode\" #invBarcode readonly\n             required\n             [ngClass]=\"{'bg-danger': !formInventar.Barcode.length}\" type=\"text\"\n             [attr.value]=\"formInventar.Barcode\" class=\"form-control\"\n             placeholder=\"Warte auf Barcode ...\" aria-label=\"Barcode\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(invBarcode)\">\n          <fa-icon [icon]=\"faCamera\"></fa-icon>\n        </button>\n      </div>\n    </div>\n</div>\n<div class=\"form-group row\">\n    <div class=\"col input-group mb-1\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Bez.</span>\n      </div>\n      <input id=\"elmArtBez\" readonly type=\"text\" [attr.value]=\"formInventar.Bezeichnung\" class=\"form-control\" placeholder=\"Artikelbezeichnung\" aria-label=\"Artikelbezeichnung\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectCreateArtikel()\">...</button>\n      </div>\n    </div>\n</div>\n<div class=\"form-group row\">\n  <div class=\"col input-group mb-1\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Typ</span>\n    </div>\n    <!-- div class=\"col\" -->\n      <input  id=\"elmArtTyp\" type=\"text\" [attr.value]=\"formInventar.Typ\" class=\"form-control\">\n    <!-- /div -->\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <!-- label for=\"elmArtTyp\" class=\"col-2 col-sm-2 col-md-2 col-lg-2 d-none\">Bild</label -->\n  <div class=\"col input-group mb-1\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Bild</span>\n    </div>\n  <!-- div class=\"col\">\n    <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Large button group\" -->\n    <div class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-success\" *ngIf=\"!artikelImageExists\" [disabled]=\"!formInventar.gcuuid\" (click)=\"openCreateArtikelImage()\"><fa-icon [icon]=\"faCamera\"></fa-icon> anlegen </button>\n      <button type=\"button\" class=\"btn btn-info\" *ngIf=\"artikelImageExists\" (click)=\"openShowArtikelImage()\"><fa-icon [icon]=\"faImage\"></fa-icon> anzeigen</button>\n    </div>\n    <!-- /div>\n  </div -->\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <button (click)=\"simulateScanner()\">Scanner Simulation</button><br>\n    <input #inputSimulateBarcode>\n  </div>\n\n  <div class=\"row\">\n<app-scannerdetection (scanned)=\"handleScanData($event)\" [config]=\"scanDetectorConfig\">\n  <h4>Detected Barcode (Zeit: {{ lastScanDetectTime | date:'hh:mm:ss' }})</h4>\n  <textarea #input2 [ngClass]=\"lastScanDetectClass\"></textarea>\n</app-scannerdetection>\n  </div>\n  <div>{{ formInventar | json }}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Neues aktuelles Artikelfoto erstellen</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div>\n    <webcam [height]=\"500\" [width]=\"400\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n            [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\n            [videoOptions]=\"videoOptions\"\n            [imageQuality]=\"1\"\n            (cameraSwitched)=\"cameraWasSwitched($event)\"\n            (initError)=\"handleInitError($event)\"\n    ></webcam>\n    <br/>\n    <button class=\"actionBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\n    <button class=\"actionBtn\" (click)=\"toggleWebcam();\">Toggle Webcam</button>\n    <br/>\n    <button class=\"actionBtn\" (click)=\"showNextWebcam(true);\" [disabled]=\"!multipleWebcamsAvailable\">Next Webcam</button>\n    <input id=\"cameraSwitchCheckbox\" type=\"checkbox\" [(ngModel)]=\"allowCameraSwitch\"><label for=\"cameraSwitchCheckbox\">Allow Camera Switch</label>\n    <br/>\n    DeviceId: <input id=\"deviceId\" type=\"text\" [(ngModel)]=\"deviceId\" style=\"width: 500px\">\n    <button (click)=\"showNextWebcam(deviceId);\">Activate</button>\n  </div>\n  <div class=\"snapshot\" *ngIf=\"webcamImage\">\n    <h2>Nice one!</h2>\n    <img [src]=\"webcamImage.imageAsDataUrl\" style=\"max-width:100%\"/>\n  </div>\n\n  <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n  <ul *ngFor=\"let error of errors\">\n    <li>{{error | json}}</li>\n  </ul>\n  <p class=\"d-none\">create-artikel-image works!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Neues aktuelles Artikelfoto erstellen</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <!-- You can now use angular-cropper component in app.component.html -->\n  <input type=\"file\" *ngIf=\"!imageUrl\" accept=\"image/*\" #inputImage capture=\"camera\" (change)=\"onInputImageFile($event, inputImage)\" />\n  <canvas id=\"prepareImgCanvas\" #prepareImgCanvas style=\"display:none;\"></canvas>\n\n  <div class=\"editor\" *ngIf=\"imageUrl\">\n    <div class=\"canvas\">\n      <angular-cropper\n          #angularCropper\n          *ngIf=\"imageUrl\"\n          [cropperOptions]=\"config\"\n          [imageUrl]=\"imageUrl\">\n      </angular-cropper>\n      <!--\n      (cropstart)=\"cropStart($event)\"\n      (crop)=\"onCrop($event)\"\n      (cropmove)=\"cropMove($event)\"\n      (cropend)=\"cropEnd($event)\"\n      (ready)=\"onCropperReady($event)\"\n      -->\n    </div>\n\n\n    <div class=\"toolbar-cropend\" *ngIf=\"cropStatus === 5\">\n      <button class=\"btn btn-sm btn-success btn-icon-cirular\" (click)=\"crop()\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"cropReset()\"><fa-icon [icon]=\"faBan\"></fa-icon></button>\n    </div>\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToMove()\"><fa-icon [icon]=\"faMove\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToCrop()\"><fa-icon [icon]=\"faCrop\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\n    </div>\n  </div>\n  <img *ngIf=\"previewImgUrl\" [src]=\"previewImgUrl\" class=\"mt-1\" style=\"max-width:100%; max-height:150px;\"/>\n  <p class=\"d-none\">create-artikel-image works!</p>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Abbrechen</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" *ngIf=\"imageUrl\">\n    <fa-icon [icon]=\"faSave\"></fa-icon>\n    Fertig</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showGesamtRestForm($event)\">\n      <fa-icon [icon]=\"\"></fa-icon> Zeige fehlende Räume\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Bereits inventarisiert</h4>\n</div>\n<div class=\"modal-body\">\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\" sortable=\"Bezeichnung\">Etage</th>\n      <th scope=\"col\" sortable=\"Typ\">Raum</th>\n      <th scope=\"col\" sortable=\"Typ\">Fertig</th>\n      <th scope=\"col\" sortable=\"Typ\">Prgoress</th>\n      <th scope=\"col\" sortable=\"Menge\">Vorher</th>\n      <th scope=\"col\" sortable=\"Menge\">Nacher</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of raeumeListDone\">\n      <th scope=\"row\">{{ item.rid }}</th>\n      <th>{{ item.Etage }}</th>\n      <td>{{ item.Raum }}</td>\n      <td>\n        <fa-icon *ngIf=\"item.editStatus === 2; else elseInProgress\"  [attr.class]=\"'text-success'\" [icon]=\"faCheck\"></fa-icon>\n        <ng-template #elseInProgress><fa-icon [attr.class]=\"'text-info'\" [icon]=\"faInWork\"></fa-icon></ng-template>\n      </td>\n      <td>\n        <ng-container [ngSwitch]=\"item.statusIconName\">\n          <fa-icon [attr.class]=\"'text-danger'\" *ngSwitchCase=\"'empty'\" [icon]=\"faEmpty\"></fa-icon>\n          <fa-icon [attr.class]=\"'text-warning'\" *ngSwitchCase=\"'quarter'\" [icon]=\"faQuarter\"></fa-icon>\n          <fa-icon [attr.class]=\"'text-info'\" *ngSwitchCase=\"'half'\" [icon]=\"faHalf\"></fa-icon>\n          <fa-icon [attr.class]=\"'text-success'\" *ngSwitchCase=\"'three-quarter'\" [icon]=\"faThreeQuarter\"></fa-icon>\n          <fa-icon [attr.class]=\"'text-success'\" *ngSwitchCase=\"'full'\" [icon]=\"faFull\"></fa-icon>\n        </ng-container> {{ item.progress }}%\n      </td>\n      <td>{{ item.total }}</td>\n      <td>{{ item.done }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<p>gesamt-list-done works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showGesamtDoneForm($event)\">\n      <fa-icon [icon]=\"\"></fa-icon> Zeige bereits aufgenommene Räume\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Bereits inventarisiert</h4>\n</div>\n<div class=\"modal-body\">\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\" sortable=\"Bezeichnung\">Etage</th>\n      <th scope=\"col\" sortable=\"Typ\">Raum</th>\n      <th scope=\"col\" sortable=\"Typ\">Gestarted</th>\n      <th scope=\"col\" sortable=\"Menge\">Vorher</th>\n      <th scope=\"col\" sortable=\"Menge\">Nacher</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of raeumeListDone\">\n      <th scope=\"row\">{{ item.rid }}</th>\n      <th>{{ item.Etage }}</th>\n      <td>{{ item.Raum }}</td>\n      <td>{{ item.editStatus === 0 ? 'Nein' : 'Ja' }}</td>\n      <td>{{ item.total }}</td>\n      <td>{{ item.done }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<p>gesamt-list-done works!</p>\n\n\n<p>gesamt-list-rest works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-done/raum-list-done.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-done/raum-list-done.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showRaumRestForm($event)\">\n      <fa-icon [icon]=\"\"></fa-icon> Zeige fehlendes Inventar\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Bereits inventarisiert</h4>\n</div>\n<div class=\"modal-body\">\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\" sortable=\"Bezeichnung\">Bezeichnung</th>\n      <th scope=\"col\" sortable=\"Typ\">Typ</th>\n      <th scope=\"col\" sortable=\"Menge\">Menge</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of inventarListDone\">\n      <th scope=\"row\">{{ item.mcid }}</th>\n      <td>{{ item.Bezeichnung }}</td>\n      <td>{{ item.Typ }}</td>\n      <td>{{ item.Menge }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showRaumDoneForm($event)\">\n      <fa-icon [icon]=\"\"></fa-icon> Zeige zugewiesenes Inventar\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Dieses Inventar fehlt noch</h4>\n</div>\n<div class=\"modal-body\">\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\" sortable=\"Bezeichnung\">Bezeichnung</th>\n      <th scope=\"col\" sortable=\"Typ\">Typ</th>\n      <th scope=\"col\" sortable=\"Menge\">Menge</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of inventarListRest\">\n      <th scope=\"row\">{{ item.mcid }}</th>\n      <td>{{ item.Bezeichnung }}</td>\n      <td>{{ item.Typ }}</td>\n      <td>{{ item.Menge }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h6 class=\"modal-title\">Barcode scannen!</h6>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <div class=\"scanner-view-port\">\r\n    <zxing-scanner [style.height]=\"'5rem'\" [torch]=\"torchEnabled\" [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\r\n                   [formats]=\"formatsEnabled\" [tryHarder]=\"tryHarder\" (permissionResponse)=\"onHasPermission($event)\"\r\n                   (camerasFound)=\"onCamerasFound($event)\" (torchCompatible)=\"onTorchCompatible($event)\">\r\n    </zxing-scanner>\r\n    <div id=\"ScannerFocusRedLine\"></div>\r\n  </div>\r\n  <input #bcInputTest><button (click)=\"bctest(bcInputTest.value)\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n\r\n  <section class=\"results\" [hidden]=\"!scannedBarcode\">\r\n    <div>\r\n      <small>Result</small>\r\n      <span>{{ scannedUnchangedPart }}</span><span id=\"barcodeChangedPart\" #barcodeChangedPart>{{ scannedChangedPart }}</span><br>\r\n    </div>\r\n  </section>\r\n  <div *ngIf=\"scanResultCurrent\">\r\n    <div>{{ scanResultCurrent.barcode }}</div>\r\n    <div>{{ scanResultCurrent.typToString }}</div>\r\n    <div>{{ scanResultCurrent.infos }}</div>\r\n    <div *ngIf=\"scanResultCurrent.image\">\r\n      <img [src]=\"scanResultCurrent.image.data_url\" style=\"max-width:100%;max-height:50vh\">\r\n    </div>\r\n    <button ngbButton (click)=\"applyResult()\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n    <button ngbButton (click)=\"clearResult()\"><fa-icon [icon]=\"faBan\"></fa-icon></button>\r\n  </div>\r\n  <div *ngIf=\"scanResultHistory.length > 0\">\r\n    <div *ngFor=\"let item of scanResultHistory\" class=\"row\">\r\n      <div class=\"col-6\">{{ item.barcode }}</div>\r\n      <div class=\"col-6\">{{ item.typToString }}</div>\r\n      <div class=\"col\">{{ item.infos }}</div>\r\n      <div *ngIf=\"item.image\" class=\"col-2\">\r\n        <img [src]=\"item.image.data_url\" style=\"max-width:100%;max-height:50px\">\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <span class=\"btn btn-sm\" (click)=\"applyHistoryResult(item)\"><fa-icon [icon]=\"faCheck\"></fa-icon></span>\r\n        <span class=\"btn btn-sm\" (click)=\"removeResult(item)\"><fa-icon [icon]=\"faBan\"></fa-icon></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showSearchForm($event)\">\n      <fa-icon [icon]=\"faSearch\"></fa-icon> Artikel suchen\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Neuen Artikel anlegen</h4>\n</div>\n<div class=\"modal-body artikel-form\">\n  <form #myForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"Hersteller\" class=\"d-none\">Hersteller:</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">HST</span>\n        </div>\n      <input\n        id=\"Hersteller\"\n        name=\"Hersteller\"\n        placeholder=\"Hersteller\"\n        type=\"text\"\n        class=\"form-control\"\n        [(ngModel)]=\"artikelDaten.Hersteller\"\n        (selectItem)=\"onSelectHersteller($event)\"\n        [ngbTypeahead]=\"search\"\n        [inputFormatter]=\"formatter\"\n        [resultFormatter]=\"formatter\"\n        (change)=\"onChangeHersteller($event)\"\n        (focus)=\"focus$.next($any($event).target.value)\"\n        (click)=\"click$.next($any($event).target.value)\"\n        #instance=\"ngbTypeahead\"\n      />\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"typ\" class=\"d-none\">Gruppe: </label>\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">GRP</span>\n        </div>\n        <input id=\"Gruppe\" class=\"form-control\" placeholder=\"Gruppe\"\n               name=\"Gruppe\"\n               [(ngModel)]=\"artikelDaten.Gruppe\"\n               (change)=\"onChangeGruppe($event)\"\n               (input)=\"onInput($event)\"\n               (selectItem)=\"onSelectGruppe($event)\"\n               [ngbTypeahead]=\"searchGruppen\"\n               [inputFormatter]=\"formatter\"\n               [resultFormatter]=\"formatter\"\n               (focus)=\"focusGrp$.next($any($event).target.value)\"\n               (click)=\"clickGrp$.next($any($event).target.value)\"\n               #instanceGrp=\"ngbTypeahead\"\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"typ\" class=\"d-none\">Kategorie: </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">KTG</span>\n        </div>\n        <input id=\"Kategorie\" class=\"form-control\" placeholder=\"Kategorie\"\n               name=\"Kategorie\"\n               [(ngModel)]=\"artikelDaten.Kategorie\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (selectItem)=\"onSelectKategorie($event)\"\n               [ngbTypeahead]=\"searchKategorien\"\n               [inputFormatter]=\"formatter\"\n               [resultFormatter]=\"formatter\"\n               (focus)=\"focusKtg$.next($any($event).target.value)\"\n               (click)=\"clickKtg$.next($any($event).target.value)\"\n               #instanceKtg=\"ngbTypeahead\"\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{\n        'has-error': bezeichnung.dirty && (bezeichnung.invalid || numBezeichnungExists === 1),\n        'has-info': bezeichnung.dirty && numBezeichnungExists === -1\n        }\">\n      <label for=\"Bezeichnung\" class=\"d-none\">Artikel-Bez: </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">BEZ</span>\n        </div>\n        <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Bezeichnung\"\n               name=\"Bezeichnung\"\n               [(ngModel)]=\"artikelDaten.Bezeichnung\"\n               #bezeichnung=\"ngModel\"\n               (change)=\"checkIfABezeichnungExistsGlobal()\"\n               (input)=\"onInput($event)\"\n               required\n        >\n      </div>\n      <div *ngIf=\"bezeichnung.valid\">\n        <div *ngIf=\"numBezeichnungExists===-1\" class=\"help-block\">Artikelangabe wird geprüft</div>\n        <div *ngIf=\"numBezeichnungExists===1\" class=\"help-block\">Artikel existiert bereits</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"typ\" class=\"d-none\">Artikel-Typ: </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">TYP</span>\n        </div>\n        <input id=\"typ\" class=\"form-control\" placeholder=\"Artikel-Typ\"\n               name=\"typ\"\n               [(ngModel)]=\"artikelDaten.Typ\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (selectItem)=\"onSelectTypen($event)\"\n               [ngbTypeahead]=\"searchTypen\"\n               [inputFormatter]=\"formatter\"\n               [resultFormatter]=\"formatter\"\n               (focus)=\"focusTyp$.next($any($event).target.value)\"\n               (click)=\"clickTyp$.next($any($event).target.value)\"\n               #instanceTyp=\"ngbTypeahead\"\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Groesse\" class=\"d-none\">Abmessungen: </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Größe</span>\n        </div>\n        <input id=\"Groesse\" class=\"form-control\" placeholder=\"Groesse\"\n               name=\"Groesse\"\n               [(ngModel)]=\"artikelDaten.Groesse\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (selectItem)=\"onSelectGroessen($event)\"\n               [ngbTypeahead]=\"searchGroessen\"\n               [inputFormatter]=\"formatter\"\n               [resultFormatter]=\"formatter\"\n               (focus)=\"focusGrs$.next($any($event).target.value)\"\n               (click)=\"clickGrs$.next($any($event).target.value)\"\n               #instanceGrs=\"ngbTypeahead\"\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Farbe\" class=\"d-none\">Farbe: </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Farbe</span>\n        </div>\n        <input id=\"Farbe\" class=\"form-control\" placeholder=\"Farbe\"\n               name=\"Farbe\"\n               [(ngModel)]=\"artikelDaten.Farbe\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (selectItem)=\"onSelectFarben($event)\"\n               [ngbTypeahead]=\"searchFarben\"\n               [inputFormatter]=\"formatter\"\n               [resultFormatter]=\"formatter\"\n               (focus)=\"focusFa$.next($any($event).target.value)\"\n               (click)=\"clickFa$.next($any($event).target.value)\"\n               #instanceFa=\"ngbTypeahead\"\n        >\n      </div>\n    </div>\n  </form>\n  <pre>{{closeResult}}</pre>\n  <p class=\"d-none\">select-create-artikel works!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\" [disabled]=\"!formIsValid || !myForm.form.valid\">Artikel anlegen</button>\n  <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\n  <div>\n    <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [maxSize]=\"maxSize\" [pageSize]=\"pageSize\" (pageChange)=\"onPageChange(page)\"></ngb-pagination>\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"card col-sm-6\" *ngFor=\"let item of listExistingArticlePage\">\n      <img *ngIf=\"item.img_id\" class=\"card-img-top\" src=\"...\" alt=\"\">\n      <div class=\"card-body \">\n        <h6 class=\"card-title\">{{ item.Bezeichnung }}</h6>\n        <div *ngIf=\"item.Hersteller\"><small>Hst: {{ item.Hersteller }}</small></div>\n        <div *ngIf=\"item.Gruppe\"><small>Grp: {{ item.Gruppe }}</small></div>\n        <div *ngIf=\"item.Typ\"><small>Typ: {{ item.Typ }}</small></div>\n        <div *ngIf=\"item.Kategorie\"><small>Ktg: {{ item.Kategorie }}</small></div>\n        <div *ngIf=\"item.Farbe || item.Groesse\"><small>{{ item.Farbe }} {{ item.Groesse }}</small></div>\n        <div *ngIf=\"item.inventar_count\"><small>{{ item.inventar_count }}</small></div>\n      </div>\n      <div class=\"card-footer text-center\">\n        <button (click)=\"applyItemAsInput(item)\" class=\"btn btn-sm btn-info\">Als Vorlage übernehmen</button>\n        <button (click)=\"applyItemAsArtikel(item)\" class=\"btn btn-sm btn-primary\">Artikel Übernehmen</button>\n      </div>\n    </div><!-- Close: div.card -->\n  </div><!-- Close: div.row -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showSearchForm($event)\">\n      <fa-icon [icon]=\"faSearch\"></fa-icon> Raum suchen\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Raum anlegen</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #raumForm=\"ngForm\">\n\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-error': raum.dirty && (raum.invalid || raumExistsStatus === 1),\n        'has-info': raum.dirty && raumExistsStatus === -1\n        }\">\n        <label for=\"dateOfBirth\">Raum-Nr.: </label>\n        <div class=\"input-group\">\n          <input id=\"Raum\" class=\"form-control\" placeholder=\"Raumnr\"\n                 name=\"Raum\"\n                 [(ngModel)]=\"raumDaten.Raum\"\n                 #raum=\"ngModel\"\n                 (change)=\"checkIfRaumExists()\"\n                 required\n          >\n        </div>\n        <div *ngIf=\"raum.valid\">\n          <div *ngIf=\"raumExistsStatus===-1\" class=\"help-block\">Raumangabe wird geprüft</div>\n          <div *ngIf=\"raumExistsStatus===1\" class=\"help-block\">Raum existiert bereits</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-warning': bezeichnung.dirty && (bezeichnung.invalid || bezeichnungExistsStatus === 1),\n        'has-info': bezeichnung.dirty && bezeichnungExistsStatus === -1\n        }\">\n        <label for=\"dateOfBirth\">Raum-Bez.: </label>\n        <div class=\"input-group\">\n          <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Raumbezeichnung\"\n                 name=\"Bezeichnung\"\n                 [(ngModel)]=\"raumDaten.Raumbezeichnung\"\n                 #bezeichnung=\"ngModel\"\n                 (change)=\"checkIfRaumbezeichnungExists()\"\n          >\n        </div>\n        <div *ngIf=\"bezeichnung.valid\">\n          <div *ngIf=\"bezeichnungExistsStatus===-1\" class=\"help-block\">Bezeichnung wird geprüft</div>\n          <div *ngIf=\"bezeichnungExistsStatus===1\" class=\"help-block\">Es existiert bereits ein Raum mit dieser Bezeichnung</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Etage: </label>\n        <div class=\"input-group\">\n          <input id=\"Etage\" class=\"form-control\" placeholder=\"Etage\"\n                 name=\"Etage\"\n                 [(ngModel)]=\"raumDaten.Etage\"\n                 #etage=\"ngModel\"\n                 required\n          >\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"newRaumBarcode\">Barcode: </label>\n        <div class=\"input-group\">\n          <input id=\"newRaumBarcode\" #newRaumBarcode class=\"form-control formcontrol-edit-barcode\" (paste)=\"$event.preventDefault()\" placeholder=\"Barcode\"\n                 name=\"code\"\n                 [(ngModel)]=\"raumDaten.code\"\n                 #code=\"ngModel\"\n          >\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(newRaumBarcode)\"><fa-icon [icon]=\"faCamera\"></fa-icon></button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"false\">\n        <label for=\"dateOfBirth\">Datum (Dummy)</label>\n        <div class=\"input-group\">\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\" [disabled]=\"!formIsValid || !raumForm.form.valid\">Raum anlegen</button>\n    <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\n  </div>\n\n<!-- button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Raum zuordnen</button -->\n\n<hr>\n\n<pre>{{closeResult}}</pre>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n  <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showCreateForm($event)\">\n    <fa-icon [icon]=\"faPlus\"></fa-icon> Neuen Artikel anlegen\n  </button>\n  <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Artikelauswahl</h4>\n</div>\n<div class=\"modal-body\">\n  <label for=\"typeahead-prevent-manual-entry\">Artikel suchen:</label>\n  <input id=\"typeahead-prevent-manual-entry\"  type=\"text\" class=\"form-control\"\n         (selectItem)=\"onSelectItem($event)\"\n         [(ngModel)]=\"model\"\n         [ngbTypeahead]=\"search\"\n         [inputFormatter]=\"formatter\"\n         [resultFormatter]=\"formatter\"\n         [editable]='false' />\n  <hr>\n  <pre>Model: {{ model | json }}</pre>\n\n  <p>select-search-artikel works! {{ clientId }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-raum/select-search-raum.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-raum/select-search-raum.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\n  <div class=\"btn-group row no-gutters w-100\">\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showCreateForm($event)\">\n      <fa-icon [icon]=\"faPlus\"></fa-icon> Neuen Raum anlegen\n    </button>\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Raumauswahl</h4>\n</div>\n<div class=\"modal-body\">\n  <label for=\"typeahead-prevent-manual-entry\">Raum suchen:</label>\n  <input id=\"typeahead-prevent-manual-entry\"  type=\"text\" class=\"form-control\"\n         (selectItem)=\"onSelectItem($event)\"\n         [(ngModel)]=\"model\"\n         [ngbTypeahead]=\"search\"\n         [inputFormatter]=\"formatter\"\n         [resultFormatter]=\"formatter\"\n         [editable]='false' />\n  <hr>\n  <pre>Model: {{ model | json }}</pre>\n\n  <p>select-search-raum works! {{ gebaeudeId }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body\">\n  <ngb-alert [type]=\"'danger'\" *ngIf=\"error\" (close)=\"error = ''\"></ngb-alert>\n\n  <div class=\"editor\" *ngIf=\"imageUrl\">\n    <div class=\"canvas\">\n      <angular-cropper\n          #angularCropper\n          *ngIf=\"imageUrl\"\n          [cropperOptions]=\"config\"\n          [imageUrl]=\"imageUrl\">\n      </angular-cropper>\n    </div>\n\n\n    <div class=\"toolbar-close\">\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"close()\"><fa-icon [icon]=\"faClose\"></fa-icon></button>\n    </div>\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\n    </div>\n  </div>\n\n  <p class=\"d-none\">show-artikel-image works!</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/dbsync/dbsync.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/dbsync/dbsync.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dbsync works!</p>\n\n<div *ngIf=\"currInventur\">\n  <h4>Aktuelle Inventur (Job-ID: {{ currInventur.jobid }})</h4>\n  <div class=\"row\">\n    <div class=\"col-3\">Titel</div>\n    <div class=\"col\">{{ currInventur.Titel }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">Start</div>\n    <div class=\"col\">{{ currInventur.Start }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">Unsynced Changes</div>\n    <div class=\"col\">{{ numUnsyncedChanges }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">Mandant-ID</div>\n    <div class=\"col\">{{ currInventur.mid }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">Created</div>\n    <div class=\"col\">{{ currInventur.created_at }}</div>\n  </div>\n</div>\n<button [disabled]=\"syncInProcess\" class=\"btn btn-primary\" (click)=\"syncCurrJob()\"><fa-icon [icon]=\"faSyncAlt\"></fa-icon> Synchronisierung starten</button>\n<br>\nsyncStatus: {{syncStatus | json }}<br>\nsyncFinished: {{syncFinished | json }}<br>\n\n<div *ngIf=\"currUser\">\n  <div class=\"row\">\n    <div class=\"col\">User</div>\n    <div class=\"col\">{{ currUser.email }}</div>\n  </div>\n</div>\n\n<div *ngIf=\"currProcess\">\n  <div class=\"row\">\n    <div class=\"col\">Status</div>\n    <div class=\"col\">{{ syncStatusName }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Start</div>\n    <div class=\"col\">{{ currProcess.starttime | date }}</div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"mb-0\">\n  <span class=\"d-none d-md-inline\">{{title}}: </span>\n  <span class=\"d-inline d-md-none\">{{short}}: </span>\n  {{totalText}}\n</label>\n<div>\n\n  <div class=\"progress progress-elemente\" (click)=\"onClickRest($event)\"  [ngClass]=\"{'bg-danger' : total > 0}\">\n    <div class=\"progress-bar bg-success\" (click)=\"onClickBarDone($event)\"  [ngClass]=\"type\" role=\"progressbar\" [style.width]=\"progressAmount + '%'\">\n    </div>\n    <span class=\"progress-text\">{{donePercentText}}</span>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6 text-success\">\n\n      <button type=\"button\" (click)=\"onClickDone($event)\" class=\"btn btn-sm btn-light text-success\">\n        <span class=\"d-none d-md-inline\">\n        Erledigt </span>{{doneAmountText}}\n      </button>\n\n    </div>\n    <div class=\"col-6 text-danger text-right\">\n\n      <button type=\"button\" (click)=\"onClickRest($event)\" class=\"btn btn-sm btn-light text-danger\">\n        <span class=\"d-none d-md-inline\">\n        Rest </span>{{restAmountText}}\n      </button>\n\n    </div>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/scannerdetection/scannerdetection.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/scannerdetection/scannerdetection.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/settings/settings.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/settings/settings.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n<button class=\"btn btn-primary\" [disabled]=\"buildBcLookup\" (click)=\"reIndexBarcodeLookup()\">reIndexBarcodeLookup</button>\n<div class=\"row\" *ngFor=\"let varItem of variableList\">\n  <div class=\"col-3\">{{ varItem.name }}</div>\n  <div class=\"col\">{{ varItem.value | json }}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <span class=\"navbar-brand\">Inventory</span>\n  <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown>\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\n          Static\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown>\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown2\" role=\"button\">\n          Static right\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown2\" class=\"dropdown-menu dropdown-menu-right\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown3\" role=\"button\">\n          Dynamic\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown3\" class=\"dropdown-menu\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/select-inventory\">Select</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/form-inventory\">Inventarisieren</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mkRequest()\">mkRequest</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sync\">Sync</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/settings\"><fa-icon [icon]=\"faCog\"></fa-icon></a>\n      </li>\n\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n{{ statusLoadingUserInventories }}\n\n<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"ctrlKunde\">Auswahl KundeModel</label>\n    <select\n        class=\"form-control\"\n        id=\"client\"\n        name=\"client\"\n        ngModel\n        (change)=\"clientChanged($event.target.value)\"\n        required>\n      <option *ngFor=\"let _client of clients; let i = index\" [attr.data-index]=\"i\" [value]=\"i\">\n        {{ _client.Mandant }}\n      </option>\n    </select>\n  </div>\n\n  <div>{{ client?.Mandant }}</div>\n\n  <div class=\"form-group\">\n    <label for=\"ctrlStandort\">Auswahl Standort</label>\n\n    <select\n      class=\"form-control\"\n      id=\"building\"\n      name=\"building\"\n      ngModel\n      (change)=\"buildingChanged($event.target.value)\"\n      required>\n      <option *ngFor=\"let _bldg of buildings; let i = index\" [attr.data-index]=\"i\" [value]=\"i\">{{_bldg.Gebaeude}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <app-progressbar [title]=\"'Anzahl Elemente'\" [value]=\"doneElements\" [total]=\"totalElements\"></app-progressbar>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-sm-6 offset-sm-6\">\n      <button [disabled]=\"false && !f.valid\" class=\"btn btn-primary w-100\">Starten</button>\n  </div>\n    <div *ngIf=\"status\" class=\"alert-info\">{{status}}</div>\n  </div>\n</form>\n\n\n\n<div style=\"display: none\"><p>select-inventory works!</p></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-check/status-check.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status-check/status-check.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  Netzwerk: <span [ngStyle]=\"{'color':currentState?.hasNetworkConnection?'green':'red'}\">\n      {{ currentState?.hasNetworkConnection ? 'ON' : 'OFF' }}!\n    </span> ||\n  Backend: <span [ngStyle]=\"{'color':currentState?.hasInternetAccess?'green':'red'}\">\n      {{ currentState?.hasInternetAccess ? 'ON' : 'OFF' }}!\n    </span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test works!</p>\n\n<h1>hi</h1>\n\n<button class=\"btn btn-primary\" [ngClass]=\"{'btn-secondary': isToggled}\" (click)=\"onToggle()\">Toggle</button>\n\n<div class=\"c1\" *ngIf=\"isToggled\">\n  <div class=\"c1-1\" (click)=\"onClick_c1_1_1()\">Element in div.c1>div.c1-1</div>\n</div>\n<div class=\"c1\" *ngIf=\"isToggled\">\n  <div class=\"c1-2\" (click)=\"onClick_c1_1_2()\">Element in div.c1>div.c1-2</div>\n</div>\n\n<div class=\"c1-1\" *ngIf=\"!isToggled\" (click)=\"onClick_c1_1()\">\n  Element in div.c1-1 {{title}}\n</div>\n\n<input type=\"text\" [(ngModel)]=\"title\">\n<p>{{ title }}</p>\n<button class=\"btn btn-primary\"\n        [ngStyle]=\"{textDecoration: titleEndWithAnA ? 'none' : 'underline'}\"\n        (click)=\"onAddAnA()\">Add an a</button>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.apiBaseUrl = ':8040/';
        const originDomain = (window && window.location && window.location.origin)
            ? window.location.origin.split(':').slice(0, 2).join(':')
            : 'http://127.0.0.1';
        this.apiBaseUrl = originDomain + this.apiBaseUrl;
    }
    getBaseUrl() {
        return this.apiBaseUrl;
    }
    getUrl(url) {
        if (url.substr(0, 10).match(/^[a-zA-Z]:\/\//)) {
            return url;
        }
        return this.apiBaseUrl + url;
    }
    get(path, options) {
        return this.http.get(this.getUrl(path), options);
    }
    post(path, body, options) {
        return this.http.post(this.getUrl(path), body, options);
    }
    put(path, body, options) {
        return this.http.put(this.getUrl(path), body, options);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: #fff;\n}\n\ndiv.c1 div.c1-1 {\n  color: green;\n}\n\ndiv.c1-1 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBRElJO0VBQ0ksWUFBQTtBQ0RSOztBREtBO0VBQ0ksVUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuYzEge1xyXG4gICAgZGl2LmMxLTEge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmMxLTEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsImgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmRpdi5jMSBkaXYuYzEtMSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuZGl2LmMxLTEge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection-service.service */ "./src/app/connection-service.service.ts");



let AppComponent = class AppComponent {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.title = 'frontend';
        this.heartBeatState = this.connectionService.options.enableHeartbeat;
    }
    setHeartBeatState(state) {
        this.heartBeatState = state;
        this.connectionService.updateOptions({ enableHeartbeat: state });
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-inventory/select-inventory.component */ "./src/app/select-inventory/select-inventory.component.ts");
/* harmony import */ var _ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ngbheader/ngbheader.component */ "./src/app/ngbheader/ngbheader.component.ts");
/* harmony import */ var _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invent-form/invent-form.component */ "./src/app/invent-form/invent-form.component.ts");
/* harmony import */ var _inventory_progress_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inventory-progress.directive */ "./src/app/inventory-progress.directive.ts");
/* harmony import */ var _inventory_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inventory/components/progressbar/progressbar.component */ "./src/app/inventory/components/progressbar/progressbar.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./invent-form/modals/select-create-raum/select-create-raum.component */ "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts");
/* harmony import */ var _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./invent-form/modals/select-create-artikel/select-create-artikel.component */ "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
/* harmony import */ var _invent_form_modals_create_artikel_image_webcam_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./invent-form/modals/create-artikel-image-webcam/create-artikel-image.component */ "./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.ts");
/* harmony import */ var _invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./invent-form/modals/create-artikel-image/create-artikel-image.component */ "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
/* harmony import */ var _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./invent-form/modals/show-artikel-image/show-artikel-image.component */ "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
/* harmony import */ var _invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./invent-form/modals/select-search-raum/select-search-raum.component */ "./src/app/invent-form/modals/select-search-raum/select-search-raum.component.ts");
/* harmony import */ var _invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./invent-form/modals/select-search-artikel/select-search-artikel.component */ "./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _status_check_status_check_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./status-check/status-check.component */ "./src/app/status-check/status-check.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm2015/angular-cropperjs.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./invent-form/modals/scanner/scanner.component */ "./src/app/invent-form/modals/scanner/scanner.component.ts");
/* harmony import */ var _scannerinput_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./scannerinput.directive */ "./src/app/scannerinput.directive.ts");
/* harmony import */ var _inventory_components_scannerdetection_scannerdetection_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./inventory/components/scannerdetection/scannerdetection.component */ "./src/app/inventory/components/scannerdetection/scannerdetection.component.ts");
/* harmony import */ var _invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./invent-form/modals/raum-list-done/raum-list-done.component */ "./src/app/invent-form/modals/raum-list-done/raum-list-done.component.ts");
/* harmony import */ var _invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./invent-form/modals/raum-list-rest/raum-list-rest.component */ "./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.ts");
/* harmony import */ var _invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./invent-form/modals/gesamt-list-rest/gesamt-list-rest.component */ "./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts");
/* harmony import */ var _invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./invent-form/modals/gesamt-list-done/gesamt-list-done.component */ "./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts");
/* harmony import */ var _inventory_components_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./inventory/components/dbsync/dbsync.component */ "./src/app/inventory/components/dbsync/dbsync.component.ts");
/* harmony import */ var _inventory_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./inventory/components/settings/settings.component */ "./src/app/inventory/components/settings/settings.component.ts");

































// the scanner










const appRoutes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"] },
    { path: 'select-inventory', component: _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__["SelectInventoryComponent"] },
    { path: 'form-inventory/:clientid/:buildingid', component: _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__["InventFormComponent"] },
    { path: 'form-inventory/:clientid/:buildingid/:roomid', component: _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__["InventFormComponent"] },
    { path: 'sync', component: _inventory_components_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_41__["DbsyncComponent"] },
    { path: 'settings', component: _inventory_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_42__["SettingsComponent"] }
];
function persist() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        return navigator.storage && navigator.storage.persist && (yield navigator.storage.persist());
    });
}
if ('localStorage' in window && localStorage.getItem('ClientDeviceId') === null) {
    localStorage.setItem('ClientDeviceId', JSON.stringify(0));
}
persist();
let AppModule = class AppModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBarcode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faKey"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSquare"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheckSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStackOverflow"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faMedium"]);
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"],
            _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__["SelectInventoryComponent"],
            _ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_17__["NgbheaderComponent"],
            _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__["InventFormComponent"],
            _inventory_progress_directive__WEBPACK_IMPORTED_MODULE_19__["InventoryProgressDirective"],
            _inventory_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressbarComponent"],
            _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__["SelectCreateRaumComponent"],
            _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__["SelectCreateArtikelComponent"],
            _invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__["CreateArtikelImageComponent"],
            _invent_form_modals_create_artikel_image_webcam_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__["CreateArtikelImageWebcamComponent"],
            _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_26__["ShowArtikelImageComponent"],
            _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_34__["ScannerComponent"],
            _scannerinput_directive__WEBPACK_IMPORTED_MODULE_35__["ScannerinputDirective"],
            _inventory_components_scannerdetection_scannerdetection_component__WEBPACK_IMPORTED_MODULE_36__["ScannerdetectionComponent"],
            _invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_27__["SelectSearchRaumComponent"],
            _invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_28__["SelectSearchArtikelComponent"],
            _status_check_status_check_component__WEBPACK_IMPORTED_MODULE_30__["StatusCheckComponent"],
            _invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_37__["RaumListDoneComponent"],
            _invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_38__["RaumListRestComponent"],
            _invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_39__["GesamtListRestComponent"],
            _invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_40__["GesamtListDoneComponent"],
            _inventory_components_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_41__["DbsyncComponent"],
            _inventory_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_42__["SettingsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(appRoutes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__["ZXingScannerModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_31__["WebcamModule"],
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_32__["AngularCropperjsModule"]
        ],
        entryComponents: [
            _invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__["CreateArtikelImageComponent"],
            _invent_form_modals_create_artikel_image_webcam_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__["CreateArtikelImageWebcamComponent"],
            _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_26__["ShowArtikelImageComponent"],
            _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_34__["ScannerComponent"],
            _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__["SelectCreateArtikelComponent"],
            _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__["SelectCreateRaumComponent"],
            _invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_27__["SelectSearchRaumComponent"],
            _invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_28__["SelectSearchArtikelComponent"],
            _invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_37__["RaumListDoneComponent"],
            _invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_38__["RaumListRestComponent"],
            _invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_39__["GesamtListRestComponent"],
            _invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_40__["GesamtListDoneComponent"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
                multi: true
            },
            _api_service__WEBPACK_IMPORTED_MODULE_29__["ApiService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const user = this.authService.getUser();
        if (!user) {
            return next.handle(req);
        }
        const modifiedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${user.token}`,
                'Client-Device-Id': `${this.authService.getClientDeviceId()}`
            }
        });
        return next.handle(modifiedReq);
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Coded with love by Mutiullah Samim */\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  background: #60a3bc !important;\n}\n.user_card {\n  height: 400px;\n  width: 350px;\n  margin-top: auto;\n  margin-bottom: auto;\n  background: #f39c12;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n}\n.brand_logo_container {\n  position: absolute;\n  height: 90px;\n  width: 200px;\n  top: 25px;\n  border-radius: 5px;\n  background: #60a3bc;\n  padding: 10px;\n  text-align: center;\n}\n.brand_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.form_container {\n  margin-top: 75px;\n}\n.login_btn {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important;\n}\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.login_container {\n  padding: 0 2rem;\n}\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important;\n}\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important;\n}\n.brand_logo_barcode {\n  font-size: 6rem;\n  position: absolute;\n  top: -25%;\n  left: 9%;\n  width: 83%;\n  height: 6rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.brand_logo_text {\n  font-size: 1rem;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: inherit;\n  font-weight: bold;\n  letter-spacing: 0.06em;\n  padding: 0.2em 0 0.3em 0;\n}\n.form-control.ng-invalid {\n  border-right: 0.4rem solid #f7a9a9;\n}\n.form-control.ng-valid {\n  border-right: 0.4rem solid #adfaad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLHVDQUFBO0FBQ0c7O0VBRUksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRFQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpRkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNHUjtBRERJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNJUjtBREZJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQ0tSO0FESEk7RUFDSSxlQUFBO0FDTVI7QURKSTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0FDT1I7QURMSTs7RUFFSSwyQkFBQTtFQUNBLHVCQUFBO0FDUVI7QUROSTtFQUNJLG9DQUFBO0FDU1I7QUROQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRE5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ1NKO0FETkE7RUFDSSxrQ0FBQTtBQ1NKO0FETkE7RUFDSSxrQ0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXHJcbiAgICBib2R5LFxyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51c2VyX2NhcmQge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIHRvcDogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjBhM2JjO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJyYW5kX2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9idG46Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlucHV0X3VzZXIsXHJcbiAgICAuaW5wdXRfcGFzczpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLmJyYW5kX2xvZ29fYmFyY29kZSB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNSU7XHJcbiAgICBsZWZ0OiA5JTtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJyYW5kX2xvZ29fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjNlbSAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgcmdiKDI0NywgMTY5LCAxNjkpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIHJnYigxNzMsIDI1MCwgMTczKTtcclxufVxyXG4iLCIvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXG5ib2R5LFxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNjBhM2JjICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyX2NhcmQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmMzljMTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRvcDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNjBhM2JjO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmFuZF9sb2dvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uZm9ybV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3M6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZF9sb2dvX2JhcmNvZGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjUlO1xuICBsZWZ0OiA5JTtcbiAgd2lkdGg6IDgzJTtcbiAgaGVpZ2h0OiA2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5icmFuZF9sb2dvX3RleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgcGFkZGluZzogMC4yZW0gMCAwLjNlbSAwO1xufVxuXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWQge1xuICBib3JkZXItcmlnaHQ6IDAuNHJlbSBzb2xpZCAjZjdhOWE5O1xufVxuXG4uZm9ybS1jb250cm9sLm5nLXZhbGlkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgI2FkZmFhZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthComponent = class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
        this.form = {
            email: null,
            password: null,
        };
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        console.log('onLoginSubmit #32', this.form);
        let authObs;
        let url = '';
        const email = this.form.email;
        const password = this.form.password;
        const originDomain = (window && window.location && window.location.origin)
            ? window.location.origin.split(':').slice(0, 2).join(':')
            : 'http://127.0.0.1';
        url = originDomain + ':8040/auth/login/';
        console.log('onLoginSubmit #44', { url });
        authObs = this.authService.login(email, password);
        console.log('onLoginSubmit #47', { url });
        this.isLoading = true;
        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/select-inventory']);
            this.form.email = '';
            this.form.password = '';
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        console.log('onLoginSubmit #63', { url });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthComponent.prototype, "username", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthComponent.prototype, "password", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthComponent.prototype, "onlineStatusMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthComponent.prototype, "onlineStatus", void 0);
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basedata.service */ "./src/app/basedata.service.ts");








let AuthService = class AuthService {
    constructor(http, router, baseData) {
        this.http = http;
        this.router = router;
        this.baseData = baseData;
        this.user = null;
        this.url = ':8040/auth/login/';
        console.log('#29 AuthService.constructor', 'this.url: ', this.url);
        const originDomain = (window && window.location && window.location.origin)
            ? window.location.origin.split(':').slice(0, 2).join(':')
            : 'http://127.0.0.1';
        this.url = originDomain + this.url;
        console.log('#34 AuthService.constructor', { originDomain }, 'this.url: ', this.url);
    }
    login(email, password) {
        console.log('#37 AuthService.login', { email, password }, 'this.url: ', this.url);
        return this.http.post(this.url, {
            email,
            password,
            returnSecureToken: true,
            clientDeviceId: this.getClientDeviceId()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(resData => {
            console.log('AuthService.login', { resData });
            this.handleAuthentication(email, resData.auth_identifier, resData.access_token, +resData.expires_in, +resData.clientDeviceId);
        }));
    }
    handleAuthentication(email, userId, token, expiresIn, clientDeviceId) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, token, expirationDate);
        this.setUserData(this.user);
        this.setClientDeviceId(clientDeviceId);
    }
    setUserData(userData) {
        this.baseData.setCurrentUser(this.user);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    setClientDeviceId(devid) {
        this.baseData.setCurrentDevice(devid);
    }
    getClientDeviceId() {
        return this.baseData.getCurrentDeviceId() || 0;
    }
    getUser() {
        if (this.user instanceof _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]) {
            return this.user;
        }
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && 'email' in userData && 'id' in userData && 'uToken' in userData && 'uTokenExpirationDate' in userData) {
            return new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.email, userData.id, userData.uToken, userData.uTokenExpirationDate);
        }
        return null;
    }
    getUserToken() {
        if (this.user instanceof _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]) {
            return this.user.token;
        }
        return '';
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_7__["BasedataService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, id, uToken, uTokenExpirationDate) {
        this.email = email;
        this.id = id;
        this.uToken = uToken;
        this.uTokenExpirationDate = uTokenExpirationDate;
    }
    get token() {
        if (!this.uTokenExpirationDate || new Date() > this.uTokenExpirationDate) {
            return null;
        }
        return this.uToken;
    }
    get expirationDate() {
        return this.uTokenExpirationDate;
    }
}


/***/ }),

/***/ "./src/app/basedata.service.ts":
/*!*************************************!*\
  !*** ./src/app/basedata.service.ts ***!
  \*************************************/
/*! exports provided: BasedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasedataService", function() { return BasedataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasedataService = class BasedataService {
    constructor() {
        this.userChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventurChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gebaeudeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deviceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentInventur = JSON.parse(localStorage.getItem('currentInventur'));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentGebaeude = JSON.parse(localStorage.getItem('currentGebaeude'));
        this.currentRaum = JSON.parse(localStorage.getItem('currentRaum'));
        this.currentDevice = JSON.parse(localStorage.getItem('currentDevice'));
    }
    setCurrentInventur(inventur) {
        this.currentInventur = inventur;
        localStorage.setItem('currentInventur', JSON.stringify(inventur));
        this.inventurChanged.emit(this.currentInventur);
    }
    setCurrentGebaeude(gebaeude) {
        this.currentGebaeude = gebaeude;
        localStorage.setItem('currentGebaeude', JSON.stringify(gebaeude));
        this.gebaeudeChanged.emit(this.currentGebaeude);
    }
    setCurrentRaum(raum) {
        this.currentRaum = raum;
        localStorage.setItem('currentRaum', JSON.stringify(raum));
        this.raumChanged.emit(this.currentRaum);
    }
    setCurrentDevice(deviceid) {
        this.currentDevice = deviceid;
        localStorage.setItem('currentDevice', JSON.stringify(deviceid));
        this.deviceChanged.emit(this.currentDevice);
    }
    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userChanged.emit(this.currentUser);
    }
    getCurrentDevice() {
        return this.currentDevice;
    }
    getCurrentDeviceId() {
        try {
            return this.currentDevice;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getCurrentUid() {
        try {
            return this.currentUser.id;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentInventur() {
        return this.currentInventur;
    }
    getCurrentJobid() {
        try {
            return this.currentInventur.jobid;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentMid() {
        try {
            return this.currentInventur.mid;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentGebaeude() {
        return this.currentGebaeude;
    }
    getCurrentGid() {
        try {
            return this.currentGebaeude.gid;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentRaum() {
        return this.currentRaum;
    }
    getCurrentRid() {
        try {
            return this.currentRaum.rid;
        }
        catch (e) {
            return 0;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "userChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "inventurChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "gebaeudeChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "raumChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "deviceChanged", void 0);
BasedataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasedataService);



/***/ }),

/***/ "./src/app/connection-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/connection-service.service.ts ***!
  \***********************************************/
/*! exports provided: ConnectionServiceOptionsToken, ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionServiceOptionsToken", function() { return ConnectionServiceOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var ConnectionService_1;






/**
 * InjectionToken for specifing ConnectionService options.
 */
const ConnectionServiceOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ConnectionServiceOptionsToken');
let ConnectionService = ConnectionService_1 = class ConnectionService {
    constructor(http, options) {
        this.http = http;
        this.stateChangeEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentState = {
            hasInternetAccess: false,
            hasNetworkConnection: window.navigator.onLine
        };
        this.serviceOptions = lodash__WEBPACK_IMPORTED_MODULE_4__["defaults"]({}, options, ConnectionService_1.DEFAULT_OPTIONS);
        this.checkNetworkState();
        this.checkInternetState();
    }
    /**
     * Current ConnectionService options. Notice that changing values of the returned object has not effect on service execution.
     * You should use "updateOptions" function.
     */
    get options() {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.serviceOptions);
    }
    checkInternetState() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"](this.httpSubscription)) {
            this.httpSubscription.unsubscribe();
        }
        if (this.serviceOptions.enableHeartbeat) {
            this.httpSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.serviceOptions.heartbeatInterval)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.http[this.serviceOptions.requestMethod](this.serviceOptions.heartbeatUrl, { responseType: 'text' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(errors => errors.pipe(
            // log error message
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(val => {
                console.error('Http error:', val);
                const lastAccess = this.currentState.hasInternetAccess;
                this.currentState.hasInternetAccess = false;
                if (lastAccess !== false) {
                    this.emitEvent();
                }
            }), 
            // restart after 5 seconds
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.serviceOptions.heartbeatRetryInterval))))
                .subscribe(result => {
                const lastAccess = this.currentState.hasInternetAccess;
                this.currentState.hasInternetAccess = true;
                if (lastAccess !== true) {
                    this.emitEvent();
                }
            });
        }
        else {
            const lastAccess = this.currentState.hasInternetAccess;
            this.currentState.hasInternetAccess = false;
            if (lastAccess !== false) {
                this.emitEvent();
            }
        }
    }
    checkNetworkState() {
        this.onlineSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').subscribe(() => {
            this.currentState.hasNetworkConnection = true;
            this.checkInternetState();
            this.emitEvent();
        });
        this.offlineSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').subscribe(() => {
            this.currentState.hasNetworkConnection = false;
            this.checkInternetState();
            this.emitEvent();
        });
    }
    emitEvent() {
        this.stateChangeEventEmitter.emit(this.currentState);
    }
    ngOnDestroy() {
        try {
            this.offlineSubscription.unsubscribe();
            this.onlineSubscription.unsubscribe();
            this.httpSubscription.unsubscribe();
        }
        catch (e) {
        }
    }
    /**
     * Monitor Network & Internet connection status by subscribing to this observer. If you set "reportCurrentState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param reportCurrentState Report current state when initial subscription. Default is "true"
     */
    monitor(reportCurrentState = true) {
        return reportCurrentState ?
            this.stateChangeEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.currentState))
            :
                this.stateChangeEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300));
    }
    /**
     * Update options of the service. You could specify partial options object. Values that are not specified will use default / previous
     * option values.
     * @param options Partial option values.
     */
    updateOptions(options) {
        this.serviceOptions = lodash__WEBPACK_IMPORTED_MODULE_4__["defaults"]({}, options, this.serviceOptions);
        this.checkInternetState();
    }
    getCurrentState() {
        return this.currentState;
    }
    get hasInternetAccess() {
        return this.currentState.hasInternetAccess;
    }
    get hastNetworkConnection() {
        return this.currentState.hasNetworkConnection;
    }
};
ConnectionService.DEFAULT_OPTIONS = {
    enableHeartbeat: true,
    heartbeatUrl: '/assets/ping.json',
    heartbeatInterval: 120000,
    heartbeatRetryInterval: 60000,
    requestMethod: 'head'
};
ConnectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ConnectionServiceOptionsToken,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ConnectionService = ConnectionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ConnectionServiceOptionsToken)), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], ConnectionService);



/***/ }),

/***/ "./src/app/dbsync-client.service.ts":
/*!******************************************!*\
  !*** ./src/app/dbsync-client.service.ts ***!
  \******************************************/
/*! exports provided: SyncJobStatus, SyncJobResult, DBSyncClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncJobStatus", function() { return SyncJobStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncJobResult", function() { return SyncJobResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBSyncClientService", function() { return DBSyncClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-service.service */ "./src/app/connection-service.service.ts");
/* harmony import */ var _inventory_service_variables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory/service/variables.service */ "./src/app/inventory/service/variables.service.ts");







var SyncJobStatus;
(function (SyncJobStatus) {
    SyncJobStatus[SyncJobStatus["Init"] = 0] = "Init";
    SyncJobStatus[SyncJobStatus["Pending"] = 1] = "Pending";
    SyncJobStatus[SyncJobStatus["AlreadyStarted"] = 2] = "AlreadyStarted";
    SyncJobStatus[SyncJobStatus["Offline"] = 3] = "Offline";
    SyncJobStatus[SyncJobStatus["Aborted"] = 4] = "Aborted";
    SyncJobStatus[SyncJobStatus["QueryChangeLogs"] = 5] = "QueryChangeLogs";
    SyncJobStatus[SyncJobStatus["AbortedEmptyChangeLogs"] = 6] = "AbortedEmptyChangeLogs";
    SyncJobStatus[SyncJobStatus["Uploading"] = 7] = "Uploading";
    SyncJobStatus[SyncJobStatus["ServerAnswered"] = 8] = "ServerAnswered";
    SyncJobStatus[SyncJobStatus["ServerAnsweredWithErrors"] = 9] = "ServerAnsweredWithErrors";
    SyncJobStatus[SyncJobStatus["RefreshLogs"] = 10] = "RefreshLogs";
    SyncJobStatus[SyncJobStatus["FinishedWithErrors"] = 11] = "FinishedWithErrors";
    SyncJobStatus[SyncJobStatus["Finished"] = 12] = "Finished";
})(SyncJobStatus || (SyncJobStatus = {}));
class SyncJobResult {
    constructor(jobid) {
        this.jobid = jobid;
        this.status = SyncJobStatus.Init;
        this.committed = 0;
        this.confirmed = 0;
        this.committedIds = [];
        this.confirmedIds = [];
        this.refreshed = null;
        this.serverChanges = [];
        this.unsynced = -1;
        this.errorMsg = '';
        this.starttime = Date.now();
        this.stoptime = 0;
        this.alreadyStartedProcess = null;
        this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.finished = false;
    }
    get duration() {
        return (this.stoptime || Date.now()) - this.starttime;
    }
    get durationFormatted() {
        const dur = (this.stoptime || Date.now()) - this.starttime;
        const ms = dur % 1000;
        const s = Math.floor(dur / 1000) % 60;
        const m = Math.floor(dur / 60000) % 60;
        const h = Math.floor(dur / (60 * 60 * 1000));
        return ((h > 0) ? `${h}h ` : '') +
            ((m > 0) ? `${m}m ` : '') +
            ((s > 0) ? `${s}s ` : '') +
            ((ms > 0) ? `${ms}ms ` : '');
    }
    onStatusChange(cb) {
        this.statusChangeCallback = cb;
    }
    setStatus(status) {
        if (status !== this.status) {
            this.status = status;
            this.statusChanged.emit(status);
            if (this.statusChangeCallback) {
                this.statusChangeCallback(this.status);
            }
        }
        return this;
    }
    getStatus() {
        return this.status;
    }
    getStatusName() {
        return SyncJobStatus[this.status].toString();
    }
    finish(status, errorMsg) {
        this.stoptime = Date.now();
        this.finished = true;
        this.status = status;
        if (typeof errorMsg !== 'undefined') {
            this.errorMsg = errorMsg;
        }
        return this;
    }
}
let DBSyncClientService = class DBSyncClientService {
    constructor(dexieService, apiService, baseData, networkService, settings) {
        this.dexieService = dexieService;
        this.apiService = apiService;
        this.baseData = baseData;
        this.networkService = networkService;
        this.settings = settings;
        this.processes = [];
        this.processingJobids = [];
        this.processStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.processFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    sync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currJobId = this.baseData.getCurrentJobid();
            const incompleteInventurLogs = yield this.getIncompleteInventuren();
            const currJobIdx = incompleteInventurLogs.map(itm => itm.jobid).indexOf(currJobId);
            if (currJobIdx !== -1) {
                const currJob = incompleteInventurLogs[currJobIdx];
                incompleteInventurLogs.slice(currJobIdx, 1);
                this.sendByJobId(currJob.jobid, currJob.changes);
            }
            for (const logs of incompleteInventurLogs) {
                this.sendByJobId(logs.jobid, logs.changes);
            }
        });
    }
    syncJob(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('[called syncStart] call this.clearFinishedProcesses');
            this.clearFinishedProcesses();
            console.log('[called syncStart] call this.processes.find(proc => proc.jobid === ' + jobid + ')');
            const currJobProc = this.processes.find(proc => proc.jobid === jobid);
            const newJob = new SyncJobResult(jobid);
            if (currJobProc && !currJobProc.finished) {
                newJob.alreadyStartedProcess = currJobProc;
                console.log('[called syncStart] call newJob.finish(AlreadyStarted)');
                return newJob.finish(SyncJobStatus.AlreadyStarted, 'Sync-Process is already running. Duration: ' + currJobProc.durationFormatted);
            }
            console.log('[called syncStart] call this.numUnsyncedChangeLogsByJobId(' + jobid + ')');
            const numChanges = yield this.numUnsyncedChangeLogsByJobId(jobid);
            if (!numChanges) {
                console.log('[called syncStart] call newJob.finish(AbortedEmptyChangeLogs)');
                return newJob.finish(SyncJobStatus.AbortedEmptyChangeLogs);
            }
            console.log('[called syncStart] call this.sendByJobId(' + jobid + ', [], newJob)');
            this.sendByJobId(jobid, [], newJob);
            return newJob;
        });
    }
    finishProcess(proc, status, errorMsg) {
        if (!proc.finished) {
            proc.finish(status, errorMsg || null);
        }
        this.clearFinishedProcesses();
        this.processFinished.emit(proc);
        return proc;
    }
    sendByJobId(useJobid, useLogs, useJobResult) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('[called sendByJobId](' + useJobid + ', useLogs, useJobResult)');
            this.clearFinishedProcesses();
            const jobid = useJobid;
            const syncJobResult = useJobResult || new SyncJobResult(jobid);
            const jobInProcess = this.processes.find(proc => proc.jobid === jobid);
            if (jobInProcess && !jobInProcess.finished) {
                syncJobResult.alreadyStartedProcess = jobInProcess;
                return syncJobResult.finish(SyncJobStatus.AlreadyStarted);
            }
            syncJobResult.setStatus(SyncJobStatus.Pending);
            this.processStarted.emit(syncJobResult);
            if (!useLogs || !useLogs.length) {
                syncJobResult.setStatus(SyncJobStatus.QueryChangeLogs);
                useLogs = yield this.getUnsyncedChangeLogsByJobId(useJobid);
            }
            if (!useLogs) {
                return this.finishProcess(syncJobResult, SyncJobStatus.AbortedEmptyChangeLogs);
            }
            const logs = useLogs;
            const devid = this.baseData.getCurrentDeviceId() || 0;
            syncJobResult.sendClientDeviceId = devid;
            syncJobResult.committedIds = logs.map((itm) => itm.id);
            if (!this.networkService.hasInternetAccess) {
                return this.finishProcess(syncJobResult, SyncJobStatus.Offline, 'Synchronisatioon wurde abgeborochen wegen fehlernder Serververbindung!');
            }
            console.log('[called sendByJobId] call this.processes.push(syncJobResult)');
            this.processingJobids.push(jobid);
            this.processes.push(syncJobResult);
            const lastDownloads = {
                objektKatalogGlobal: this.settings.get(`objektKatalogGlobal-${jobid}-download-succes`),
                objektKatalogMandant: this.settings.get(`objektKatalogGlobal-${jobid}-download-succes`),
                inventar: this.settings.get(`inventar-${jobid}-download-succes`),
                raeume: this.settings.get(`raeume-${jobid}-download-succes`),
                images: this.settings.get(`images-${jobid}-download-succes`),
                hersteller: this.settings.get(`hersteller-${jobid}-download-succes`),
            };
            syncJobResult.committed = logs.length;
            yield this.apiService
                .post(`api/sync/importchanges/${jobid}`, {
                jobid,
                devid,
                lastDownloads,
                changes: logs
            })
                .toPromise()
                .then((data) => {
                if (data.errorMsg) {
                    syncJobResult.errorMsg = data.errorMsg;
                }
                console.log('#26 Response of sendByJobId', { data });
                if ('setClientDeviceId' in data && data.setClientDeviceId > 0) {
                    this.baseData.setCurrentDevice(data.setClientDeviceId);
                }
                syncJobResult.confirmed = data.syncedLogIds.length;
                syncJobResult.confirmedIds = data.syncedLogIds;
                syncJobResult.unsynced = syncJobResult.committed - syncJobResult.confirmed;
                syncJobResult.serverChanges = data.serverChangeLogs;
                if (data.errorMsg) {
                    return syncJobResult.finish(SyncJobStatus.ServerAnsweredWithErrors, data.errorMsg);
                }
                else {
                    return syncJobResult.setStatus(SyncJobStatus.ServerAnswered);
                }
            })
                .catch((reason) => {
                syncJobResult.finish(SyncJobStatus.Aborted, JSON.stringify(reason));
            });
            if (syncJobResult.getStatus() !== SyncJobStatus.ServerAnswered) {
                return this.finishProcess(syncJobResult, syncJobResult.getStatus(), syncJobResult.errorMsg);
            }
            syncJobResult.refreshed = yield this.processResponseByJobId(syncJobResult.confirmedIds, syncJobResult.jobid);
            this.updateCommitCounter(syncJobResult.committedIds, syncJobResult.jobid);
            const diff = syncJobResult.committed - syncJobResult.refreshed;
            if (diff !== 0) {
                syncJobResult.errorMsg += `Von ${diff} ChangeLog-Einträgen konte der Status nach der Synchronisierung nicht aktualisert werden!`;
            }
            if (syncJobResult.errorMsg) {
                return this.finishProcess(syncJobResult, SyncJobStatus.FinishedWithErrors, syncJobResult.errorMsg);
            }
            else {
                return this.finishProcess(syncJobResult, SyncJobStatus.Finished);
            }
        });
    }
    clearFinishedProcesses() {
        this.processes = this.processes.filter(proc => !proc.finished);
        this.processingJobids = this.processes.map(proc => proc.jobid);
    }
    getRunningProcesses() {
        this.clearFinishedProcesses();
        return this.processes;
    }
    getProcessByJobId(jobid) {
        return this.processes.find(proc => proc.jobid === jobid);
    }
    updateCommitCounter(committedIds, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.dexieService.clientChangeLog
                .where('id')
                .anyOf(committedIds)
                .and((log) => !jobid || log.jobid === jobid)
                .modify((log) => {
                log.sync_attempts++;
                log.sync_lastattempt = new Date();
            });
        });
    }
    processResponseByJobId(syncedLogIds, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Return Anzahl betroffener Datensätze
            const syncTime = Date.now();
            return yield this.dexieService.clientChangeLog
                .where('id')
                .anyOf(syncedLogIds)
                .and((log) => !jobid || log.jobid === jobid)
                .modify({
                sync_done: 1,
                sync_time: syncTime
            });
        });
    }
    getUnsyncedChangeLogsByJobId(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.dexieService.clientChangeLog
                .where({ jobid })
                .filter(itm => !('sync_done' in itm) || itm.sync_done === 0)
                .toArray();
        });
    }
    numUnsyncedChangeLogsByJobId(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rslt = this.dexieService.clientChangeLog
                .where('jobid')
                .equals(jobid)
                // .filter(itm => !('sync_done' in itm) || itm.sync_done === 0)
                .count();
            rslt.then(num => {
                console.log('then numUnsyncedChangeLogsByJobId: ', { jobid, num });
                return num;
            }).catch(err => {
                console.error('then numUnsyncedChangeLogsByJobId: ', { jobid, err });
            });
            return rslt;
        });
    }
    getIncompleteInventuren() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numPending = yield this.dexieService.clientChangeLog.where({ sync_done: 0 }).count();
            return this.dexieService.clientChangeLog
                .where({ sync_done: 0 })
                .toArray()
                .then(list => {
                const currJobId = this.baseData.getCurrentJobid();
                const listGroupedByJobid = [];
                listGroupedByJobid.push({
                    jobid: currJobId,
                    changes: []
                });
                const groupIds = [currJobId];
                list.forEach(item => {
                    const jobid = item.jobid;
                    let groupIdx = groupIds.indexOf(jobid);
                    if (groupIdx === -1) {
                        groupIds.push(jobid);
                        listGroupedByJobid.push({
                            jobid,
                            changes: []
                        });
                        groupIdx = groupIds.indexOf(jobid);
                    }
                    listGroupedByJobid[groupIdx].changes.push(item);
                });
                return listGroupedByJobid;
            });
        });
    }
};
DBSyncClientService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_4__["DexieService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"] },
    { type: _inventory_service_variables_service__WEBPACK_IMPORTED_MODULE_6__["VariablesService"] }
];
DBSyncClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DBSyncClientService);



/***/ }),

/***/ "./src/app/dexie-sync-client.service.ts":
/*!**********************************************!*\
  !*** ./src/app/dexie-sync-client.service.ts ***!
  \**********************************************/
/*! exports provided: DexieSyncClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieSyncClientService", function() { return DexieSyncClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");



let DexieSyncClientService = class DexieSyncClientService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    sync(context, url, options, baseRevision, syncedRevision, changes, partial, applyRemoteChanges, onChangesAccepted, onSuccess, onError) {
        const POLL_INTERVAL = 10000; // Poll every 10th second
        // In this example, the server expects the following JSON format of the request:
        //  {
        //      [clientIdentity: unique value representing the client identity. If omitted, server will return a new client
        //                       identity in its response that we should apply in next sync call.]
        //      baseRevision: baseRevision,
        //      partial: partial,
        //      changes: changes,
        //      syncedRevision: syncedRevision
        //  }
        //  To keep the sample simple, we assume the server has the exact same specification of how changes are structured.
        //  In real world, you would have to pre-process the changes array to fit the server specification.
        //  However, this example shows how to deal with ajax to fulfil the API.
        const request = {
            clientIdentity: context.clientIdentity || null,
            baseRevision,
            partial,
            changes,
            syncedRevision
        };
        /**
         *
         * $.ajax(url, {
         * type: 'post',
         * contentType: 'application/json', // Make sure we set the correct content-type header as some servers expect this
         * dataType: 'json',
         * data: JSON.stringify(request)
         * });
         */
        this.apiService
            .post('/api/sync/dexie', request)
            .toPromise()
            .catch(err => {
            // onError(textStatus, POLL_INTERVAL);
            onError(err, POLL_INTERVAL);
        })
            .then(data => {
            // In this example, the server response has the following format:
            // {
            //    success: true / false,
            //    errorMessage: "",
            //    changes: changes,
            //    currentRevision: revisionOfLastChange,
            //    needsResync: false,    // Flag telling that server doesn't have given syncedRevision or of other reason
            //                           // wants client to resync. ATTENTION: this flag is currently
            //                           // ignored by Dexie.Syncable
            //    partial: true / false, // The server sent only a part of the changes it has for us.
            //                           // On next resync it will send more based on the clientIdentity
            //    [clientIdentity: unique value representing the client identity.
            //    Only provided if we did not supply a valid clientIdentity in the request.]
            // }
            if (!data.success) {
                onError(data.errorMessage, Infinity); // Infinity = Don't try again. We would continue getting this error.
            }
            else {
                if ('clientIdentity' in data) {
                    context.clientIdentity = data.clientIdentity;
                    // Make sure we save the clientIdentity sent by the server before we try to resync.
                    // If saving fails we wouldn't be able to do a partial synchronization
                    context.save()
                        .then(() => {
                        // Since we got success, we also know that server accepted our changes:
                        onChangesAccepted();
                        // Convert the response format to the Dexie.Syncable.Remote.SyncProtocolAPI specification:
                        applyRemoteChanges(data.changes, data.currentRevision, data.partial, data.needsResync);
                        onSuccess({ again: POLL_INTERVAL });
                    })
                        .catch((e) => {
                        // We didn't manage to save the clientIdentity stop synchronization
                        onError(e, Infinity);
                    });
                }
                else {
                    // Since we got success, we also know that server accepted our changes:
                    onChangesAccepted();
                    // Convert the response format to the Dexie.Syncable.Remote.SyncProtocolAPI specification:
                    applyRemoteChanges(data.changes, data.currentRevision, data.partial, data.needsResync);
                    onSuccess({ again: POLL_INTERVAL });
                }
            }
        });
    }
};
DexieSyncClientService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
DexieSyncClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DexieSyncClientService);



/***/ }),

/***/ "./src/app/dexie.service.ts":
/*!**********************************!*\
  !*** ./src/app/dexie.service.ts ***!
  \**********************************/
/*! exports provided: DexieService, DBDIRaumEditStatus, LookupResultTable, LookupResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieService", function() { return DexieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBDIRaumEditStatus", function() { return DBDIRaumEditStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupResultTable", function() { return LookupResultTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupResultType", function() { return LookupResultType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var dexie_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie-observable */ "./node_modules/dexie-observable/dist/dexie-observable.es.js");
/* harmony import */ var dexie_syncable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dexie-syncable */ "./node_modules/dexie-syncable/dist/dexie-syncable.es.js");
/* harmony import */ var dexie_relationships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dexie-relationships */ "./node_modules/dexie-relationships/dist/index.js");
/* harmony import */ var dexie_relationships__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dexie_relationships__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dexie_sync_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dexie-sync-client.service */ "./src/app/dexie-sync-client.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basedata.service */ "./src/app/basedata.service.ts");





 // import dexieRelationships from 'dexie-relationships';


// Dexie.addons.push( dexieRelationships );
dexie__WEBPACK_IMPORTED_MODULE_2__["default"].addons.push(dexie_relationships__WEBPACK_IMPORTED_MODULE_5___default.a);
let DexieService = class DexieService extends dexie__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(syncClient, baseData) {
        super('merTensIventory'); // , { addons: [ relationships ] });
        this.syncClient = syncClient;
        this.baseData = baseData;
        this.dbVersion = 1;
        this.stopClientLogForServerLoad = false;
        dexie__WEBPACK_IMPORTED_MODULE_2__["default"].Syncable.registerSyncProtocol('inventorySync', this.syncClient);
        const DXVersion = this.version(11).stores({
            clientChangeLog: '++id,table,type,key,jobid,sync_done',
            devices: '++id,name,user_agent',
            gebaeude: '++gid,mid,mandanten_id,Gebaeude,Adresse',
            hersteller: '++hid,Hersteller,created_at,created_uid,created_jobid,created_device_id',
            images: '++id,uuid,name,type,size,width,height,gcuuid,url,created_jobid,modified_jobid',
            inventar: '++ivid,mcid,uuid,mcuuid,code,[rid+jobid],rid,rid_alt,rid_neu,jobid,invid,iv_nr',
            inventuren: '++jobid,mid,gid,Titel,Start,aktiviert,AbgeschlossenAm',
            inventurenUser: '++jobid,uid',
            lieferant: '++hid,Lieferant',
            mandanten: '++mid,Mandant',
            objektKatalogGlobal: '++gcid,uuid,hash,code,hid,lid,Bezeichnung,Produktnr,Typ,Gruppe,Kategorie,Farbe,Groesse,AnlagenNr,' +
                'GeraetNr,FibuNr,Flaeche,Gewicht,Baujahr,Kst',
            objektKatalogMandant: '++mcid,uuid,gcid,gcuuid,code,mid',
            raeume: '++rid,gid,uuid,hash,code,raumid,Raum,Raumbezeichnung,Etage,current_jobid,current_jobstatus',
            uploads: '++id,uuid,mid,standort,importkey,filename,filesize,checksum,stat,errors',
            users: '++id,name,email,password',
            objektbuchBarcodesLookup: '&code',
            variables: '&name,value',
            barcodeLookup: '&code,table,updateHelper,[table+updateHelper]'
        });
        this.version(12).stores({
            hersteller: '++hid,uuid,Hersteller,created_at,created_uid,created_jobid,created_device_id',
            objektKatalogGlobal: '++gcid,uuid,hash,code,hid,huuid,lid,Bezeichnung,Produktnr,Typ,Gruppe,Kategorie,Farbe,Groesse,AnlagenNr,' +
                'GeraetNr,FibuNr,Flaeche,Gewicht,Baujahr,Kst',
        });
        this.version(13).stores({
            raeume: '++rid,gid,[rid+gid],uuid,hash,code,raumid,Raum,Raumbezeichnung,Etage,current_jobid,current_jobstatus'
        });
        const validLogTables = [
            'hersteller',
            'inventar',
            'images',
            'objektKatalogGlobal',
            'objektKatalogMandant',
            'raeume'
        ];
        this.on('changes', changes => {
            if (this.stopClientLogForServerLoad) {
                console.log('Change is disable for Server-Load');
                return;
            }
            changes.forEach(change => {
                if (validLogTables.indexOf(change.table) === -1 || change.table === this.clientChangeLog.name) {
                    console.log('Change is disabled for table ', change.table);
                    return;
                }
                console.log('Write ChangeLog for table ', change.table, { change });
                const chlog = {
                    timestamp: new Date(),
                    table: change.table,
                    type: change.type,
                    key: change.key,
                    mid: this.baseData.getCurrentMid(),
                    uid: this.baseData.getCurrentUid(),
                    jobid: this.baseData.getCurrentJobid(),
                    sync_attempts: 0,
                    sync_done: 0
                };
                switch (change.type) {
                    case 1 /* Create */:
                        const createChange = change;
                        chlog.obj = createChange.obj;
                        console.log('An object was created: ' + JSON.stringify(createChange.obj));
                        break;
                    case 2 /* Update */:
                        const updateChange = change;
                        chlog.mods = updateChange.mods;
                        console.log('An object was updated with ' + change.key + ': ' + JSON.stringify(updateChange.mods));
                        break;
                    case 3 /* Delete */:
                        const deleteChange = change;
                        console.log('An object was updated with ' + change.key + ': ' + JSON.stringify(deleteChange));
                        break;
                }
                this.clientChangeLog.add(chlog);
            });
        });
    }
};
DexieService.ctorParameters = () => [
    { type: _dexie_sync_client_service__WEBPACK_IMPORTED_MODULE_6__["DexieSyncClientService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_7__["BasedataService"] }
];
DexieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DexieService);

var DBDIRaumEditStatus;
(function (DBDIRaumEditStatus) {
    DBDIRaumEditStatus[DBDIRaumEditStatus["Init"] = 0] = "Init";
    DBDIRaumEditStatus[DBDIRaumEditStatus["Started"] = 1] = "Started";
    DBDIRaumEditStatus[DBDIRaumEditStatus["Closed"] = 2] = "Closed";
})(DBDIRaumEditStatus || (DBDIRaumEditStatus = {}));
var LookupResultTable;
(function (LookupResultTable) {
    LookupResultTable[LookupResultTable["None"] = 0] = "None";
    LookupResultTable[LookupResultTable["Any"] = 1] = "Any";
    LookupResultTable[LookupResultTable["Inventar"] = 2] = "Inventar";
    LookupResultTable[LookupResultTable["Raeume"] = 3] = "Raeume";
    LookupResultTable[LookupResultTable["ObjektKatalogGlobal"] = 4] = "ObjektKatalogGlobal";
    LookupResultTable[LookupResultTable["ObjektKatalogMandant"] = 5] = "ObjektKatalogMandant";
    LookupResultTable[LookupResultTable["Objektbuch"] = 6] = "Objektbuch";
})(LookupResultTable || (LookupResultTable = {}));
var LookupResultType;
(function (LookupResultType) {
    LookupResultType[LookupResultType["NoMatch"] = 0] = "NoMatch";
    LookupResultType[LookupResultType["Inventar"] = 1] = "Inventar";
    LookupResultType[LookupResultType["Raum"] = 2] = "Raum";
    LookupResultType[LookupResultType["ObjektBuchArtikel"] = 3] = "ObjektBuchArtikel";
    LookupResultType[LookupResultType["ObjektBuchRaum"] = 4] = "ObjektBuchRaum";
})(LookupResultType || (LookupResultType = {}));


/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventService = class EventService {
    constructor() {
        this.TestEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isAuthenticated = true;
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/invent-form/data-services/artikel.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/invent-form/data-services/artikel.service.ts ***!
  \**************************************************************/
/*! exports provided: ArtikelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtikelService", function() { return ArtikelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../basedata.service */ "./src/app/basedata.service.ts");









let ArtikelService = class ArtikelService {
    constructor(dexie, authService, dataService, baseData) {
        this.dexie = dexie;
        this.authService = authService;
        this.dataService = dataService;
        this.baseData = baseData;
    }
    artikelBezeichnungExistsGlobal(bezeichnung) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.dexie.objektKatalogGlobal
                .where('Bezeichnung')
                .equalsIgnoreCase(bezeichnung)
                .count();
        });
    }
    artikelExistsMandant(mid, gcid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numItems = yield this.dexie.objektKatalogMandant
                .where({ mid, gcid })
                .count();
            return 0 < numItems;
        });
    }
    artikelGlobalByBezeichnung(bezeichnung) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const items = yield this.dexie.objektKatalogGlobal
                .where('Bezeichnung')
                .equalsIgnoreCase(bezeichnung)
                .toArray();
            return items;
        });
    }
    artikelMcidByGcids(mid, gcids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (typeof gcids === 'number') {
                gcids = [gcids];
            }
            const items = yield this.dexie.objektKatalogMandant
                .where('gcid').anyOf(gcids)
                .filter(itm => itm.mid === mid)
                .toArray();
            return items;
        });
    }
    getGcuuidByGcid(gcid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogGlobal.get(gcid).then((itm) => itm.uuid);
        });
    }
    insertArtikelData(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const katalog = db.objektKatalogGlobal;
            const hersteller = db.hersteller;
            const uid = this.authService.getUser().id;
            const jobid = this.baseData.getCurrentJobid();
            const uuid = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            if (daten.hid && !daten.huuid) {
                const hst = yield hersteller.get(daten.hid);
                daten.huuid = hst.uuid;
            }
            const exists = yield katalog.where({
                Bezeichnung: daten.Bezeichnung
            }).toArray();
            if (exists) {
                const sameData = exists.filter((itm) => {
                    for (const k of ['huuid', 'Gruppe', 'Kategorie', 'Typ', 'Farbe', 'Groesse']) {
                        if (itm[k] !== daten[k]) {
                            return false;
                        }
                    }
                    return true;
                });
                if (sameData.length > 0) {
                    return sameData[0];
                }
                else {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])({
                        name: 'DuplicateEntry',
                        message: 'Es existiert bereits ein Katalogeintrag mit gleicher Bezeichnung,' +
                            ' der aufgrund abweichender Details nicht übernommen werden kann.\n' +
                            ' Da Bezeichnungen unique sein müssen, ändern sie diese bitte ab oder übernehmen den anderen Eintrag!',
                        data: sameData
                    });
                }
            }
            const insertData = {
                uuid,
                hash: null,
                code: uuid,
                hid: daten.hid,
                huuid: daten.huuid,
                Bezeichnung: daten.Bezeichnung,
                Typ: daten.Typ,
                Gruppe: daten.Gruppe,
                Kategorie: daten.Kategorie,
                Farbe: daten.Farbe,
                Groesse: daten.Groesse,
                created_at: new Date(),
                modified_at: null,
                created_uid: uid,
                created_jobid: jobid,
                lid: !('lid' in daten) ? null : daten.lid,
                Produktnr: !('Produktnr' in daten) ? null : daten.Produktnr,
                Bild: !('Bild' in daten) ? null : daten.Bild,
                AnlagenNr: !('AnlagenNr' in daten) ? null : daten.AnlagenNr,
                GeraetNr: !('GeraetNr' in daten) ? null : daten.GeraetNr,
                FibuNr: !('FibuNr' in daten) ? null : daten.FibuNr,
                Flaeche: !('Flaeche' in daten) ? null : daten.Flaeche,
                Gewicht: !('Gewicht' in daten) ? null : daten.Gewicht,
                Baujahr: !('Baujahr' in daten) ? null : daten.Baujahr,
                Kst: !('Kst' in daten) ? null : daten.Kst
            };
            const insertKey = yield katalog.add(insertData);
            insertData.gcid = insertKey;
            return insertData;
        });
    }
    insertArtikelRef(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const artikelRef = db.objektKatalogMandant;
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.authService.getUser().id;
            const uuid = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            const defaultMid = this.baseData.getCurrentMid();
            const devID = this.baseData.getCurrentDeviceId();
            if (!daten.gcid && !daten.gcuuid) {
                const artikelData = yield this.insertArtikelData(daten);
                daten.gcid = artikelData.gcid;
                daten.gcuuid = artikelData.uuid;
            }
            const insertData = {
                mid: daten.mid || defaultMid,
                gcid: daten.gcid,
                mcid: 0,
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString(),
                hash: '',
                code: uuid,
                created_at: new Date(),
                created_uid: this.authService.getUser().id,
                created_jobid: jobid,
                created_device_id: devID,
                modified_at: null,
                modified_uid: null
            };
            const insertKey = yield artikelRef.add(insertData);
            insertData.mcid = insertKey;
            return insertData;
        });
    }
    insert(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const artikelRefData = yield this.insertArtikelRef(daten);
                const gItem = yield this.dexie.objektKatalogGlobal.get(artikelRefData.gcid);
                const mItem = yield this.dexie.objektKatalogMandant.get(artikelRefData.mcid);
                const item = Object.assign({}, mItem, gItem);
                return {
                    success: true,
                    newId: artikelRefData.mcid,
                    data: artikelRefData,
                    newItem: item,
                };
            }
            catch (err) {
                const errorMsg = ('name' in err ? err.name + ': ' : '')
                    + ('message' in err ? err.message : JSON.stringify(err));
                return {
                    success: false,
                    errorMsg,
                    debug: err,
                    data: daten
                };
            }
        });
    }
    update(artikel) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return {
                success: false
            };
        });
    }
    countArticleByHerstellerUuid(huuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelTbl = this.dexie.objektKatalogGlobal;
            return yield artikelTbl.where({ huuid }).count();
        });
    }
    countArticleByHerstellerId(hid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelTbl = this.dexie.objektKatalogGlobal;
            return yield artikelTbl.where({ hid }).count();
        });
    }
    countArticleByProperties(props) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelTbl = this.dexie.objektKatalogGlobal;
            let query = artikelTbl;
            const propKeys = Object.keys(props);
            propKeys.forEach(k => { if (!props[k]) {
                delete props[k];
            } });
            if (props.huuid) {
                query = artikelTbl.where({ huuid: props.huuid });
                delete props.huuid;
            }
            else if (props.hid) {
                query = artikelTbl.where({ hid: props.hid });
                delete props.hid;
            }
            if (!('filter' in query)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('query has an Unexpected Type. ' +
                    'Expected Collection|Table with method filter! Given: ' + (typeof query));
            }
            return yield query.filter(props).count();
        });
    }
    listArticleByProperties(mid, hstId, props) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const huuid = (typeof hstId === 'string') ? hstId : null;
            const hid = (typeof hstId === 'number') ? hstId : null;
            let propKeys = Object.keys(props);
            propKeys.forEach(k => {
                if (!props[k]) {
                    delete props[k];
                }
                else if (typeof props[k] === 'string') {
                    props[k] = props[k].toLowerCase();
                }
            });
            propKeys = Object.keys(props);
            const join = {
                table: 'objektKatalogGlobal',
                where: (hid) ? { hid } : null,
                joins: [
                    { parentKey: 'hid', key: 'hid', table: 'hersteller', alias: 'hersteller', resultType: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].First },
                    { parentKey: 'uuid', table: 'images', key: 'gcuuid', alias: 'image', resultType: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].First },
                    { parentKey: 'gcid', table: 'objektKatalogMandant', key: 'gcid', alias: 'artikelRef', multi: true,
                        where: { mid },
                        joins: [{
                                parentKey: 'mcid', table: 'inventar', key: 'mcid', alias: 'inventar_count', multi: true,
                                resultType: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].Count,
                                map: (obj) => ({ ivid: obj.ivid, rid: obj.rid })
                            }],
                        filter: (obj) => obj.mid === mid
                    }
                ],
                filter: (item) => {
                    for (const k of propKeys) {
                        if (!(k in item)) {
                            return false;
                        }
                        if (typeof props[k] === 'string' && typeof item[k] === 'string') {
                            if (-1 === item[k].toLowerCase().indexOf(props[k])) {
                                return false;
                            }
                        }
                        else if (props[k] !== item[k]) {
                            return false;
                        }
                    }
                    return true;
                },
                map: (obj) => {
                    obj.gcuuid = obj.uuid;
                    obj.inventar_count = 0;
                    obj.Hersteller = '';
                    obj.img_id = null;
                    obj.img_uuid = null;
                    obj.mcid = null;
                    obj.mcuuid = null;
                    if (obj.hersteller !== undefined && obj.hersteller !== null) {
                        obj.Hersteller = obj.hersteller.Hersteller;
                    }
                    if (obj.image !== undefined && obj.image !== null) {
                        obj.img_id = obj.image.id;
                        obj.img_uuid = obj.image.uuid;
                    }
                    if (Array.isArray(obj.artikelRef)) {
                        obj.artikelRef.forEach((a) => obj.inventar_count += a.inventar_count);
                        obj.mcid = (obj.artikelRef.length) ? obj.artikelRef[0].mcid : null;
                        obj.mcuuid = (obj.artikelRef.length) ? obj.artikelRef[0].mcuuid : null;
                    }
                    else if (!!obj.artikelRef) {
                        obj.inventar_count = obj.artikelRef.inventar_count;
                        obj.mcid = obj.artikelRef.mcid;
                        obj.mcuuid = obj.artikelRef.mcuuid;
                    }
                    return obj;
                },
                sort: (a, b) => {
                    const r = ('inventar_count' in a) && ('inventar_count' in b)
                        ? (a.inventar_count > b.inventar_count ? -1 : 1)
                        : 0;
                    // console.log('#311 sort joinie result', a.inventar_count, b.inventar_count, r);
                    return r;
                },
                limit: 10
            };
            return this.dataService.joinie(join).then((list) => {
                console.log({ 'joinie.result': list });
                return list;
            });
        });
    }
    getGroupedArtikelGruppen(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.getGroupedArtikelProperties('Gruppe', where);
        });
    }
    getGroupedArtikelKategorien(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.getGroupedArtikelProperties('Kategorie', where);
        });
    }
    getGroupedArtikelTypen(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.getGroupedArtikelProperties('Typ', where);
        });
    }
    getGroupedArtikelGroessen(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.getGroupedArtikelProperties('Groesse', where);
        });
    }
    getGroupedArtikelFarben(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.getGroupedArtikelProperties('Farbe', where);
        });
    }
    getGroupedArtikelProperties(property, where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const table = db.objektKatalogGlobal;
            const names = [];
            const hasWhere = where && Object.keys(where).length > 0;
            const keysWhere = (hasWhere) ? Object.keys(where) : [];
            const collection = (hasWhere) ? table.where(where) : table.toCollection();
            const uniqNames = yield table.orderBy(property).filter(itm => {
                if (!(property in itm) || typeof itm[property] !== 'string' || itm[property].trim() === '') {
                    return false;
                }
                if (!hasWhere) {
                    return true;
                }
                for (const k of keysWhere) {
                    if (!(k in itm)) {
                        return false;
                    }
                    if (typeof itm[k] === 'string' && typeof where[k] === 'string') {
                        if (itm[k].toString().toLowerCase().trim() !== where[k].toString().toLowerCase().trim()) {
                            return false;
                        }
                    }
                    else if (itm[k] !== where[k]) {
                        return false;
                    }
                }
                return true;
            })
                .uniqueKeys();
            uniqNames.forEach((n) => {
                if (typeof n === 'string') {
                    names.push(n);
                }
            });
            return names;
        });
    }
    getGroupedArtikelGruppenKategorien(where) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#364 getGroupedArtikelGruppenKategorien', { where });
            const db = this.dexie;
            const Promise = dexie__WEBPACK_IMPORTED_MODULE_5__["default"].Promise;
            const table = db.objektKatalogGlobal;
            const uniqGrps = yield table.orderBy('Gruppe').uniqueKeys();
            return Promise.all(uniqGrps.map((grp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return table.orderBy('Kategorie')
                    .filter((itm) => itm.Gruppe === grp && typeof itm.Kategorie === 'string' && itm.Kategorie.trim() !== '')
                    .uniqueKeys();
            }))).then((ktgs) => {
                return uniqGrps.map((grp, i) => ({ gruppe: grp.toString(), kategorien: ktgs[i] }));
            });
        });
    }
};
ArtikelService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] }
];
ArtikelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArtikelService);



/***/ }),

/***/ "./src/app/invent-form/data-services/barcode.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/invent-form/data-services/barcode.service.ts ***!
  \**************************************************************/
/*! exports provided: BarcodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeService", function() { return BarcodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");



let BarcodeService = class BarcodeService {
    constructor(db) {
        this.db = db;
        this.lastErrors = [];
        this.rebuildProcesses = [];
        this.lkup = this.db.barcodeLookup;
    }
    simpleLookup(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (barcode.startsWith('R') || barcode.startsWith('A')) {
                return this.bcAnalyzeLookup(barcode);
            }
            return this.indexLookup(barcode);
            /*
            return Promise.all([
              this.indexLookup(barcode),
              this.bcAnalyzeLookup(barcode)
            ]).then( results => results[0] || results[1]);
             */
        });
    }
    indexLookup(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const found = yield this.lkup.get(barcode);
            const result = {
                barcode,
                foundRef: found,
                success: false,
                lookupResultTable: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].None,
                data: null
            };
            if (found) {
                const searchKey = found.uuid ? { uuid: found.uuid } : found.id;
                const item = yield this.db.table(found.table).get(searchKey);
                if (item) {
                    result.success = true;
                    result.data = item;
                    switch (found.table) {
                        case 'inventar':
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Inventar;
                            result.inventar = item;
                            break;
                        case 'raeume':
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Raeume;
                            result.raum = item;
                            break;
                        case 'objektKatalogMandant':
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].ObjektKatalogMandant;
                            result.artikelRef = item;
                            break;
                        case 'objektKatalogGlobal':
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].ObjektKatalogGlobal;
                            result.artikelData = item;
                            break;
                        default:
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Any;
                    }
                }
            }
            return result;
        });
    }
    bcAnalyzeLookup(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const matchesObjektbuchArtikel = barcode.match(/^(A)-(\d+)-/);
            const matchesObjektbuchRaum = barcode.match(/^(R)-(\d+)-/);
            let foundTable;
            let foundTableKey;
            let foundTableId;
            const result = {
                barcode,
                foundRef: null,
                success: false,
                lookupResultTable: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].None,
                data: null
            };
            if (matchesObjektbuchArtikel) {
                const [, , sMcid] = matchesObjektbuchArtikel;
                foundTable = 'objektKatalogMandant';
                foundTableKey = 'mcid';
                foundTableId = parseInt(sMcid, 10);
            }
            else if (matchesObjektbuchRaum) {
                const [, , sRid] = matchesObjektbuchRaum;
                foundTable = 'raeume';
                foundTableKey = 'rid';
                foundTableId = parseInt(sRid, 10);
            }
            if (foundTable && foundTableId) {
                result.data = yield this.db.table(foundTable).get(foundTableId);
                if (result.data) {
                    result.foundRef = {
                        code: barcode,
                        table: foundTable,
                        key: foundTableKey,
                        id: foundTableId,
                        uuid: result.data.uuid || null
                    };
                    switch (foundTable) {
                        case 'raeume':
                            result.raum = result.data;
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Raeume;
                            break;
                        case 'objektKatalogMandant':
                            result.artikelRef = result.data;
                            result.lookupResultTable = _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].ObjektKatalogMandant;
                            break;
                    }
                }
            }
            return result;
        });
    }
    fullLookup(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const simpleResult = yield this.simpleLookup(barcode);
            if (!simpleResult.success || simpleResult.lookupResultTable === _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].ObjektKatalogGlobal) {
                return simpleResult;
            }
            switch (simpleResult.lookupResultTable) {
                case _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].ObjektKatalogMandant:
                    simpleResult.artikelData = yield this.db.objektKatalogGlobal.get({ uuid: simpleResult.artikelRef.gcuuid });
                    simpleResult.image = yield this.db.images.get({ gcuuid: simpleResult.artikelRef.gcuuid });
                    if (simpleResult.image) {
                        simpleResult.image.data_url = null;
                        simpleResult.image.data_binary = null;
                    }
                    break;
                case _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Raeume:
                    simpleResult.gebaeude = yield this.db.gebaeude.get(simpleResult.raum.gid);
                    break;
                case _dexie_service__WEBPACK_IMPORTED_MODULE_2__["LookupResultTable"].Inventar:
                    simpleResult.artikelRef = yield this.db.objektKatalogMandant.get(simpleResult.inventar.mcid);
                    if (simpleResult.artikelRef) {
                        simpleResult.artikelData = yield this.db.objektKatalogGlobal.get({ uuid: simpleResult.artikelRef.gcuuid });
                        simpleResult.image = yield this.db.images.get({ gcuuid: simpleResult.artikelRef.gcuuid });
                        if (simpleResult.image) {
                            simpleResult.image.data_url = null;
                            simpleResult.image.data_binary = null;
                        }
                    }
                    simpleResult.raum = yield this.db.raeume.get(simpleResult.inventar.rid);
                    break;
                default:
                // Nothing, Should not happen
            }
            return simpleResult;
        });
    }
    rebuild() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.importObjektbuchBarcodesLookup(),
                this.rebuildTable(this.db.inventar),
                this.rebuildTable(this.db.raeume),
                this.rebuildTable(this.db.objektKatalogGlobal),
                this.rebuildTable(this.db.objektKatalogMandant)
            ]).then((results) => {
                const numErrors = results.filter(re => !re).length;
                this.addError('Beim Rebuild des Lookup-Indexes sind ' + numErrors + ' aufgetreten!');
                return numErrors === 0;
            });
        });
    }
    rebuildTable(table) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.rebuildProcesses.indexOf(table.name) !== -1) {
                return false;
            }
            this.rebuildProcesses.push(table.name);
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            yield this.db.barcodeLookup.where('table').equals(tblName).delete();
            const list = yield table.toArray();
            return Promise.all(list.map((item) => {
                return this.addBarcode({
                    code: item.code,
                    table: tblName,
                    key: keyName,
                    uuid: item.uuid,
                    updateHelper: 1
                });
            }))
                .then(() => true)
                .catch((err) => {
                console.error(err);
                this.addError(err);
                return false;
            })
                .finally(() => {
                // Clear Finished Process from ProcessList
                this.rebuildProcesses = this.rebuildProcesses.filter(procName => procName !== tblName);
            });
        });
    }
    importObjektbuchBarcodesLookup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called importObjektbuchBarcodesLookup');
            this.lkup.where({ updateHelper: 11 }).modify({ updateHelper: 12 });
            const list = yield this.db.objektbuchBarcodesLookup.toArray();
            yield list.forEach(item => {
                item.updateHelper = 11;
                console.log('called importObjektbuchBarcodesLookup import ', { item });
                this.lkup.put(item).then((r) => {
                    // console.log('#229 result of put', item, r);
                }).catch((err) => {
                    console.error('#231', err);
                });
            });
            yield this.lkup.where({ updateHelper: 12 }).delete();
            return true;
        });
    }
    rebuildOnRunningSystem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.importObjektbuchBarcodesLookup(),
                this.rebuildTableOnRunningSystem(this.db.inventar),
                this.rebuildTableOnRunningSystem(this.db.raeume),
                this.rebuildTableOnRunningSystem(this.db.objektKatalogGlobal),
                this.rebuildTableOnRunningSystem(this.db.objektKatalogMandant)
            ]).then((results) => {
                const numErrors = results.filter(re => !re).length;
                this.addError('Beim Rebuild des Lookup-Indexes sind ' + numErrors + ' aufgetreten!');
                return numErrors === 0;
            }).catch((err) => {
                console.error('Fehler beim Barcode-Lookup-Aufbar: ', { err });
            });
        });
    }
    rebuildTableOnRunningSystem(table) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.rebuildProcesses.indexOf(table.name) !== -1) {
                return false;
            }
            this.rebuildProcesses.push(table.name);
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            yield this.db.barcodeLookup.where({ table: tblName, updateHelper: 1 }).modify({ updateHelper: 2 });
            const list = yield table.toArray();
            yield Promise.all(list.map((item) => {
                return this.addBarcode({
                    code: item.code,
                    table: tblName,
                    key: keyName,
                    uuid: item.uuid,
                    updateHelper: 1
                });
            }));
            yield this.db.barcodeLookup.where({ table: tblName, updateHelper: 2 }).delete();
            // Clear Finished Process from ProcessList
            this.rebuildProcesses = this.rebuildProcesses.filter(procName => procName !== tblName);
        });
    }
    addBarcode(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.db.barcodeLookup.put(item);
        });
    }
    addError(err) {
        this.lastErrors.push(err);
        if (this.lastErrors.length > 20) {
            this.lastErrors = this.lastErrors.slice(-20);
        }
    }
    getLastErrors() {
        return this.lastErrors;
    }
};
BarcodeService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] }
];
BarcodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BarcodeService);



/***/ }),

/***/ "./src/app/invent-form/data-services/hersteller.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/invent-form/data-services/hersteller.service.ts ***!
  \*****************************************************************/
/*! exports provided: HerstellerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerstellerService", function() { return HerstellerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basedata.service */ "./src/app/basedata.service.ts");




let HerstellerService = class HerstellerService {
    constructor(dexie, baseData) {
        this.dexie = dexie;
        this.baseData = baseData;
    }
    getAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.dexie.hersteller.orderBy('Hersteller').toArray();
        });
    }
    getAllHerstellerWithIds() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = [];
            return this.dexie.hersteller.orderBy('Hersteller')
                .each(hst => {
                result.push({
                    Hersteller: hst.Hersteller,
                    hid: hst.hid,
                    uuid: hst.uuid
                });
            })
                .then(() => result);
        });
    }
    getByName(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called HerstellerService.getByName(name)');
            const exakt = yield this.dexie.hersteller.filter(item => item.Hersteller === name).first();
            if (exakt !== undefined) {
                console.log('Found Hersteller with strict compare-search');
                return exakt;
            }
            const fuzzy = yield this.dexie.hersteller.filter(item => item.Hersteller.trim().toLowerCase() === name.trim().toLowerCase()).first();
            if (fuzzy !== undefined) {
                console.log('Not Found Hersteller with strict compare-search, found with caseinsensitive');
            }
            else {
                console.error('Hersteller not found!');
            }
            return fuzzy;
        });
    }
    create(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            return yield this.dexie.hersteller.add({
                Hersteller: name,
                created_at: new Date(),
                created_uid: uid,
                created_jobid: jobid
            });
        });
    }
};
HerstellerService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
HerstellerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HerstellerService);



/***/ }),

/***/ "./src/app/invent-form/data-services/images.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/invent-form/data-services/images.service.ts ***!
  \*************************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basedata.service */ "./src/app/basedata.service.ts");





let ImagesService = class ImagesService {
    constructor(dexie, baseData) {
        this.dexie = dexie;
        this.baseData = baseData;
    }
    insertImage(image, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const item = {
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString(),
                name: image.name,
                size: image.size,
                width: image.width,
                height: image.height,
                type: image.type,
                gcuuid: image.gcuuid,
                url: image.url || '',
                data_binary: image.data_binary || null,
                data_url: image.data_url || null,
                revnr: 1,
                created_at: image.created_at || new Date(),
                created_uid: image.created_uid || uid,
                created_jobid: image.created_jobid || jobid
            };
            const rs = yield this.dexie.images.add(item);
            return rs;
        });
    }
    getImage(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.images.get({ gcuuid });
        });
    }
    imageExistsOfGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.images.where({ gcuuid }).count()
                .then(nr => nr > 0)
                .catch(err => { console.error(err); return false; });
        });
    }
};
ImagesService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImagesService);



/***/ }),

/***/ "./src/app/invent-form/data-services/inventar.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/invent-form/data-services/inventar.service.ts ***!
  \***************************************************************/
/*! exports provided: InventarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarService", function() { return InventarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basedata.service */ "./src/app/basedata.service.ts");





let InventarService = class InventarService {
    constructor(dexie, baseData) {
        this.dexie = dexie;
        this.baseData = baseData;
    }
    getHello() {
        return 'hello';
    }
    insertInventar(inventar, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const item = {
                mcid: inventar.mcid,
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString(),
                mcuuid: inventar.mcuuid,
                hash: '',
                code: inventar.code,
                rid: inventar.rid,
                rid_neu: inventar.rid,
                jobid: inventar.jobid || jobid,
                created_at: inventar.created_at || new Date(),
                created_uid: inventar.created_uid || uid,
                created_jobid: inventar.created_jobid || jobid
            };
            const rs = yield this.dexie.inventar.add(item);
            return rs;
        });
    }
    getInventarListRestByRaumId(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarDataList = [];
            const inventarList = yield this.dexie.inventar
                .where({ rid })
                .and((item) => item.jobid !== jobid)
                .sortBy('mcid');
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where('mcid').anyOf(inventarList.map(itm => itm.mcid))
                .toArray();
            const artikelData = yield this.dexie.objektKatalogGlobal
                .where('gcid').anyOf(artikelRefs.map(itm => itm.gcid))
                .toArray();
            for (const inventar of inventarList) {
                const d = { inventar, artikelRef: null, artikelData: null };
                d.artikelRef = artikelRefs.find(itm => itm.mcid === inventar.mcid);
                if (d.artikelRef) {
                    d.artikelData = artikelData.find(itm => itm.gcid === d.artikelRef.gcid);
                }
                inventarDataList.push(d);
            }
            return inventarDataList;
        });
    }
    getInventarListDoneByRaumId(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarDataList = [];
            const inventarList = yield this.dexie.inventar
                .where({ rid })
                .and((item) => item.jobid === jobid)
                .sortBy('mcid');
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where('mcid').anyOf(inventarList.map(itm => itm.mcid))
                .toArray();
            const artikelData = yield this.dexie.objektKatalogGlobal
                .where('gcid').anyOf(artikelRefs.map(itm => itm.gcid))
                .toArray();
            for (const inventar of inventarList) {
                const d = { inventar, artikelRef: null, artikelData: null };
                d.artikelRef = artikelRefs.find(itm => itm.mcid === inventar.mcid);
                if (d.artikelRef) {
                    d.artikelData = artikelData.find(itm => itm.gcid === d.artikelRef.gcid);
                }
                inventarDataList.push(d);
            }
            return inventarDataList;
        });
    }
};
InventarService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
InventarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventarService);



/***/ }),

/***/ "./src/app/invent-form/data-services/raum.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/invent-form/data-services/raum.service.ts ***!
  \***********************************************************/
/*! exports provided: RaumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumService", function() { return RaumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let RaumService = class RaumService {
    constructor(dexie, authService) {
        this.dexie = dexie;
        this.authService = authService;
        this.raumStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    raumExists(gid, raum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numRaeume = yield this.dexie.raeume
                .where('Raum')
                .equalsIgnoreCase(raum)
                .filter(itm => itm.gid === gid)
                .count();
            return 0 < numRaeume;
        });
    }
    raumBezeichnungExists(gid, bezeichnung) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numRaeume = yield this.dexie.raeume
                .where('Raumbezeichnung')
                .equalsIgnoreCase(bezeichnung)
                .filter(itm => itm.gid === gid)
                .count();
            return 0 < numRaeume;
        });
    }
    insert(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const insertData = {
                gid: daten.gid,
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString(),
                hash: '',
                code: '',
                raumid: '',
                Raum: daten.Raum,
                Raumbezeichnung: daten.Raumbezeichnung,
                Etage: daten.Etage,
                created_at: new Date(),
                created_uid: this.authService.getUser().id,
                modified_at: null,
                modified_uid: null
            };
            let newId = 0;
            let newItem = null;
            try {
                newId = yield this.dexie.raeume.add(insertData);
                newItem = yield this.dexie.raeume.get(newId);
            }
            catch (err) {
                const errorMsg = ('name' in err ? err.name + ': ' : '')
                    + ('message' in err ? err.message : JSON.stringify(err));
                return {
                    success: false,
                    errorMsg,
                    debug: err,
                    data: insertData
                };
            }
            console.log('insert Raum ', { newItem });
            return {
                success: true,
                newId,
                newItem
            };
        });
    }
    update(raum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return {
                success: false
            };
        });
    }
    getRaumStatus(rid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raum = yield this.dexie.raeume.get(rid);
            if (raum) {
                return raum.current_jobstatus;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(`ERROR - GetRaumStatus: Raum mit ID ${rid} wurde nicht gefunden`);
        });
    }
    triggerRaumStatus(rid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raum = yield this.dexie.raeume.get(rid);
            this.raumStatusChanged.emit({
                rid,
                status: raum.current_jobstatus
            });
        });
    }
    setRaumStatus(stat, rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numChanges = yield this.dexie.raeume.where({ rid }).modify({
                current_jobstatus: stat,
                current_jobid: jobid,
            });
            if (numChanges) {
                this.triggerRaumStatus(rid);
            }
            return numChanges;
        });
    }
    setRaumStatusInit(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Init, rid, jobid);
        });
    }
    setRaumStatusStarted(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Started, rid, jobid);
        });
    }
    setRaumStatusClosed(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed, rid, jobid);
        });
    }
    getRaeumeStartedByGebaeudeId(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raeume = yield this.dexie.raeume.where({ gid }).toArray();
            const raeumeStat = yield Promise.all(raeume.map((raum) => {
                return Promise.all([
                    this.dexie.inventar.where({ rid: raum.rid }).count(),
                    this.dexie.inventar.where('[rid+jobid]').equals([raum.rid, jobid]).count()
                ]).then((results) => {
                    const total = results[0];
                    const done = results[1];
                    const progress = total > 0 ? done * 100 / total : -1;
                    return {
                        rid: raum.rid,
                        Raum: raum.Raum,
                        Etage: raum.Etage,
                        editStatus: raum.current_jobstatus,
                        progress,
                        total,
                        done
                    };
                });
            }));
            return raeumeStat.filter(stat => stat.editStatus === _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed || stat.done > 0);
        });
    }
    getRaeumeToDoByGebaeudeId(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raeume = yield this.dexie.raeume
                .where({ gid })
                .and(r => r.current_jobstatus !== _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed).toArray();
            const raeumeStat = yield Promise.all(raeume.map((raum) => {
                return Promise.all([
                    this.dexie.inventar.where({ rid: raum.rid }).count(),
                    this.dexie.inventar.where('[rid+jobid]').equals([raum.rid, jobid]).count()
                ]).then((results) => {
                    return {
                        rid: raum.rid,
                        Raum: raum.Raum,
                        Etage: raum.Etage,
                        progress: 0,
                        editStatus: raum.current_jobstatus,
                        total: results[0],
                        done: results[1]
                    };
                });
            }));
            return raeumeStat.filter(stat => stat.done === 0);
        });
    }
};
RaumService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RaumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RaumService);



/***/ }),

/***/ "./src/app/invent-form/invent-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/invent-form/invent-form.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea.NewFreshScan {\n  background-color: #8bffbb;\n  color: #b6121c;\n}\n\ntextarea.NewFreshScan.CountDown-4 {\n  background-color: #9effc4;\n  color: #98121c;\n}\n\ntextarea.NewFreshScan.CountDown-3 {\n  background-color: #aaffc9;\n  color: #7a111a;\n}\n\ntextarea.NewFreshScan.CountDown-2 {\n  background-color: #bcffcf;\n  color: #5c1018;\n}\n\ntextarea.NewFreshScan.CountDown-2 {\n  background-color: #ccffda;\n  color: #3e1119;\n}\n\ntextarea.NewFreshScan.CountDown-1 {\n  background-color: #d6ffe1;\n  color: #200f0f;\n}\n\ninput.bg-danger::-webkit-input-placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n\ninput.bg-danger::-moz-placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n\ninput.bg-danger::-ms-input-placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n\ninput.bg-danger::placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50LWZvcm0vQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGludmVudC1mb3JtXFxpbnZlbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW52ZW50LWZvcm0vaW52ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRExBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FETEE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL2ludmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEuTmV3RnJlc2hTY2FuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJmZmJiO1xyXG4gIGNvbG9yOiAjYjYxMjFjO1xyXG59XHJcbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZmZjNDtcclxuICBjb2xvcjogIzk4MTIxYztcclxufVxyXG5cclxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmM5O1xyXG4gIGNvbG9yOiAjN2ExMTFhO1xyXG59XHJcblxyXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2ZmY2Y7XHJcbiAgY29sb3I6ICM1YzEwMTg7XHJcbn1cclxuXHJcbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZkYTtcclxuICBjb2xvcjogIzNlMTExOTtcclxufVxyXG5cclxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZmZmUxO1xyXG4gIGNvbG9yOiAjMjAwZjBmO1xyXG59XHJcbmlucHV0LmJnLWRhbmdlcjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsInRleHRhcmVhLk5ld0ZyZXNoU2NhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmZmYmI7XG4gIGNvbG9yOiAjYjYxMjFjO1xufVxuXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVmZmM0O1xuICBjb2xvcjogIzk4MTIxYztcbn1cblxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZjOTtcbiAgY29sb3I6ICM3YTExMWE7XG59XG5cbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2ZmY2Y7XG4gIGNvbG9yOiAjNWMxMDE4O1xufVxuXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmRhO1xuICBjb2xvcjogIzNlMTExOTtcbn1cblxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZmZlMTtcbiAgY29sb3I6ICMyMDBmMGY7XG59XG5cbmlucHV0LmJnLWRhbmdlcjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/invent-form/invent-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/invent-form/invent-form.component.ts ***!
  \******************************************************/
/*! exports provided: InventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventFormComponent", function() { return InventFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _inventory_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory-progress.service */ "./src/app/inventory-progress.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/scanner/scanner.component */ "./src/app/invent-form/modals/scanner/scanner.component.ts");
/* harmony import */ var _modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/create-artikel-image/create-artikel-image.component */ "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
/* harmony import */ var _modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/show-artikel-image/show-artikel-image.component */ "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
/* harmony import */ var _modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/select-create-artikel/select-create-artikel.component */ "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
/* harmony import */ var _modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/select-search-artikel/select-search-artikel.component */ "./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.ts");
/* harmony import */ var _modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/select-create-raum/select-create-raum.component */ "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts");
/* harmony import */ var _modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/raum-list-rest/raum-list-rest.component */ "./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.ts");
/* harmony import */ var _modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/raum-list-done/raum-list-done.component */ "./src/app/invent-form/modals/raum-list-done/raum-list-done.component.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/select-search-raum/select-search-raum.component */ "./src/app/invent-form/modals/select-search-raum/select-search-raum.component.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _inventory_editor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../inventory-editor.service */ "./src/app/inventory-editor.service.ts");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-services/inventar.service */ "./src/app/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-services/images.service */ "./src/app/invent-form/data-services/images.service.ts");
/* harmony import */ var _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data-services/barcode.service */ "./src/app/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data-services/raum.service */ "./src/app/invent-form/data-services/raum.service.ts");
/* harmony import */ var _modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/gesamt-list-rest/gesamt-list-rest.component */ "./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts");
/* harmony import */ var _modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/gesamt-list-done/gesamt-list-done.component */ "./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts");








// Dialogs


















let InventFormComponent = class InventFormComponent {
    constructor(route, location, dataService, modalService, baseData, inventoryProgress, inventoryEditor, inventarDataService, raumService, imageService, bcLookup) {
        this.route = route;
        this.location = location;
        this.dataService = dataService;
        this.modalService = modalService;
        this.baseData = baseData;
        this.inventoryProgress = inventoryProgress;
        this.inventoryEditor = inventoryEditor;
        this.inventarDataService = inventarDataService;
        this.raumService = raumService;
        this.imageService = imageService;
        this.bcLookup = bcLookup;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCamera"];
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faImage"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"];
        this.faDoorOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDoorOpen"];
        this.faDoorClosed = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDoorClosed"];
        this.scanDetectorConfig = {
            minLength: 5,
            maxLength: 30,
            scannerStartsWith: '',
            scannerEndsWith: '',
            scanTimeout: 100,
            replaceNotNumber: false,
            allowNotNumber: true,
            ignoreOverElement: ['.formcontrol-edit-barcode'],
            barcodeType: ''
        };
        this.formInventar = {
            ivid: null,
            mcid: null,
            gcid: null,
            gcuuid: null,
            rid: null,
            Raum: null,
            Raumbezeichnung: null,
            RaumBarcode: null,
            Barcode: '',
            Bezeichnung: '',
            Typ: '',
        };
        this.lastScanDetectClass = '';
        this.lastScanDetectTimer = null;
        this.waitingForNewInventarBarcode = false;
        this.openedCreateRaum = false;
        this.artikelImageExists = false;
        this.jobProgress = {
            total: 0,
            done: 0,
        };
        this.raumProgress = {
            total: 0,
            done: 0,
        };
        this.currentModal = {
            modalRef: null,
            isOpen: false,
            name: ''
        };
        this.currentModals = [];
    }
    ngOnInit() {
        this.raumService.raumStatusChanged.subscribe((stat) => {
            if (stat.rid === this.roomID) {
                this.raumEditStatus = stat.status;
            }
        });
        this.routingSubscription = this.route.params.subscribe(params => {
            this.clientID = parseInt(params.clientid, 10);
            this.buildingID = parseInt(params.buildingid, 10);
            const roomID = parseInt(params.roomid, 10);
            this.dataService.getClient(this.clientID).then((clnt) => {
                this.kunde = clnt;
            });
            this.dataService.getBuilding(this.buildingID, this.clientID).then((bldg) => {
                this.gebaeude = bldg;
            });
            if (roomID) {
                this.loadRaumById(roomID);
            }
            else {
                const lastSelectedRoom = this.baseData.getCurrentRaum();
                if (lastSelectedRoom && lastSelectedRoom.gid === this.buildingID) {
                    this.loadRaumByData(lastSelectedRoom);
                }
            }
            console.log({ params, kunde: this.kunde, gebaeude: this.gebaeude });
            this.refreshInventoryProgress();
        });
    }
    loadRaumById(roomID) {
        this.dataService.getRaum(roomID)
            .then((raum) => {
            console.log('Retrieved Raum', { raum });
            this.loadRaumByData(raum);
        });
    }
    loadRaumByData(raum) {
        const url = '/form-inventory/' + this.clientID + '/' + this.buildingID + '/' + raum.rid;
        console.log('Change URL ', { raum, url });
        this.location.go(url);
        this.roomID = raum.rid;
        this.raum = raum;
        this.baseData.setCurrentRaum(this.raum);
        this.formInventar.rid = raum.rid;
        this.formInventar.Raum = raum.Raum;
        this.formInventar.Raumbezeichnung = raum.Raumbezeichnung;
        this.formInventar.RaumBarcode = raum.code;
        this.raumEditStatus = this.raum.current_jobstatus;
        console.log('#144 loadRaumByData refreshRaumProgress');
        this.refreshRaumProgress();
    }
    assignInventarToRaum(inventarData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadInventarByData(inventarData);
            this.inventoryEditor.assignInventarToRaum(inventarData.inventar.ivid, this.roomID)
                .then(() => {
                console.log('Inventar wurde dem Raum zugewiesen!');
                this.refreshInventoryProgress();
            })
                .catch((err) => {
                console.error('Inventar konnte nicht zugewiesen werden!', err);
            });
        });
    }
    saveNewInventar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const inventar = {
                mcid: this.formInventar.mcid,
                mcuuid: this.formInventar.mcuuid,
                rid: this.formInventar.rid,
                code: this.formInventar.Barcode,
                jobid,
                created_at: new Date(),
                created_uid: uid
            };
            this.inventarDataService.insertInventar(inventar, jobid);
        });
    }
    assignArtikelToRaum(artikelMcid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    refreshInventoryProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.refreshGebaeudeProgress(),
                this.refreshRaumProgress()
            ]).then(() => {
                console.log('Fortschritt für Gebaeude und Raum wurde aktualisiert');
                return true;
            }).catch((err) => {
                console.error('Beim Aktualisieren des Fortschritts von Gebaeude und Raum ist ein Fehler aufgetreten');
                return false;
            });
        });
    }
    refreshGebaeudeProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.inventoryProgress.getCurrentGebaeudeProgress().then((progress) => {
                this.jobProgress.done = progress.done;
                this.jobProgress.total = progress.total;
            });
        });
    }
    refreshRaumProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.inventoryProgress.getCurrentRaumProgress(this.roomID)
                .then((progress) => {
                this.raumProgress.done = progress.done;
                this.raumProgress.total = progress.total;
            })
                .catch(err => {
                console.error('Fehler bei Raum-Progress-Aktualisierung', err);
            });
        });
    }
    loadArtikelById(artikelID) {
        this.dataService.getArtikel(artikelID)
            .then(item => {
            this.loadArtikelByData(item);
        });
    }
    loadArtikelByData(artikel) {
        this.artikelID = artikel.mcid;
        this.formInventar.mcid = artikel.mcid;
        this.formInventar.mcuuid = artikel.uuid;
        this.formInventar.gcid = artikel.gcid;
        this.formInventar.gcuuid = artikel.uuid;
        this.formInventar.Bezeichnung = artikel.Bezeichnung;
        this.formInventar.Typ = artikel.Typ;
        this.formInventar.Barcode = '';
        this.formInventar.ivid = null;
        const tmp = Object.assign({}, this.formInventar);
        this.formInventar = Object.assign({}, tmp);
        this.waitingForNewInventarBarcode = true;
        console.log('Applied argument artikel', artikel, ' to formInventar', this.formInventar);
        this.reloadImageExistsStatus();
    }
    loadInventarById(ivid) {
        this.dataService.getInventarData(ivid).then(result => {
            this.loadInventarByData(result.inventarData);
        });
    }
    loadInventarByData(inventarData) {
        const inventar = inventarData.inventar;
        const artikelRef = inventarData.artikelRef;
        const artikelData = inventarData.artikelData;
        this.inventarData = inventarData;
        this.artikelID = inventar.mcid;
        this.formInventar.mcid = inventar.mcid;
        this.formInventar.gcid = artikelRef.gcid;
        this.formInventar.mcuuid = artikelRef.uuid;
        this.formInventar.gcuuid = artikelData.uuid;
        this.formInventar.Bezeichnung = artikelData.Bezeichnung;
        this.formInventar.Typ = artikelData.Typ;
        this.formInventar.Barcode = inventar.code;
        this.formInventar.ivid = inventar.ivid;
        this.reloadImageExistsStatus();
    }
    reloadImageExistsStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.artikelImageExists = false;
            if (!this.formInventar.gcuuid) {
                return false;
            }
            return this.imageService.imageExistsOfGcuuid(this.formInventar.gcuuid)
                .then(exists => {
                this.artikelImageExists = exists;
                return exists;
            })
                .catch(() => false);
        });
    }
    get kundeName() {
        return this.kunde ? this.kunde.Mandant : '';
    }
    get adresse() {
        return this.gebaeude ? this.gebaeude.Gebaeude : '';
    }
    get raumNr() {
        return this.raum ? this.raum.Raum : '';
    }
    get gebaeudeId() { return this.buildingID; }
    openComponent(content) {
        const modalRef = this.modalService.open(content);
        modalRef.componentInstance.name = 'World';
    }
    openCreateArtikelImage() {
        const modalRef = this.modalService.open(_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_9__["CreateArtikelImageComponent"]);
        modalRef.componentInstance.name = this.formInventar.Bezeichnung + '/' + this.formInventar.Typ;
        modalRef.componentInstance.gcuuid = this.formInventar.gcuuid;
        modalRef.result.then(() => {
            this.reloadImageExistsStatus();
        });
    }
    openShowArtikelImage() {
        const modalRef = this.modalService.open(_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_10__["ShowArtikelImageComponent"]);
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.setGcuuid(this.formInventar.gcuuid);
        modalRef.result.then(() => {
            this.reloadImageExistsStatus();
        });
    }
    openScanner(inputElm) {
        const modalRef = this.modalService.open(_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_8__["ScannerComponent"]);
        modalRef.componentInstance.name = 'World';
        const sub = modalRef.componentInstance.onScan.subscribe((data) => {
            const scan = {
                barcode: data.barcode,
                length: data.length,
                valid: data.valid,
                target: inputElm
            };
            this.handleScanData(scan);
        });
    }
    getModalRefByName(name) {
        const modal = this.currentModals.find(mod => mod.name === name);
        return (modal && modal.modalRef.componentInstance) ? modal.modalRef : null;
    }
    modalWatch(modalRef, name) {
        const mRef = modalRef;
        const mName = name;
        console.log('Opened Modal: ', name);
        this.currentModal = {
            modalRef,
            name,
            isOpen: true
        };
        this.currentModals = this.currentModals.filter(mod => undefined !== mod.modalRef.componentInstance);
        this.currentModals.push(this.currentModal);
        console.log('After open Modal: ', this.currentModal, this.currentModals);
        modalRef.result.then((result) => {
            if (name === 'SelectCreateRaum') {
                this.openedCreateRaum = false;
            }
            this.currentModals = this.currentModals.filter(mod => undefined !== mod.modalRef.componentInstance);
            if (this.currentModals.length) {
                this.currentModal = this.currentModals[this.currentModals.length - 1];
            }
            else {
                this.currentModal = {
                    modalRef: null,
                    name: '',
                    isOpen: false
                };
            }
            console.log('After dismiss resolved: ', this.currentModal, this.currentModals);
        })
            .catch((err) => {
            if (name === 'SelectCreateRaum') {
                this.openedCreateRaum = false;
            }
            this.currentModals = this.currentModals.filter(mod => undefined !== mod.modalRef.componentInstance);
            console.error('Error on Closing Modal ', { mName, err });
            if (this.currentModals.length) {
                this.currentModal = this.currentModals[this.currentModals.length - 1];
            }
            else {
                this.currentModal = {
                    modalRef: null,
                    name: '',
                    isOpen: false
                };
            }
            console.log('After Catch: ', this.currentModal, this.currentModals);
        });
    }
    openSelectCreateArtikel() {
        const modalRef = this.modalService.open(_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_11__["SelectCreateArtikelComponent"]);
        this.modalWatch(modalRef, 'SelectCreateArtikel');
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.clientId = this.clientID;
        modalRef.componentInstance.artikelCreated.subscribe((artikel) => {
            this.loadArtikelByData(artikel);
        });
        modalRef.componentInstance.artikelSelected.subscribe((item) => {
            console.log('#505 openSelectCreateArtikel Apply selected Article', item);
            this.loadArtikelById(item.id);
        });
        modalRef.componentInstance.artikelSearching.subscribe((raum) => {
            this.openSelectSearchArtikel();
        });
    }
    openSelectSearchArtikel() {
        const modalRef = this.modalService.open(_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_12__["SelectSearchArtikelComponent"]);
        this.modalWatch(modalRef, 'SelectSearchArtikel');
        modalRef.componentInstance.clientId = this.clientID;
        modalRef.componentInstance.artikelSelected.subscribe((item) => {
            console.log('Apply selected Article', item);
            this.loadArtikelById(item.id);
        });
        modalRef.componentInstance.artikelCreating.subscribe((mid) => {
            modalRef.close();
            this.openSelectCreateArtikel();
        });
    }
    openSelectSearchRaum() {
        const modalRef = this.modalService.open(_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_17__["SelectSearchRaumComponent"]);
        this.modalWatch(modalRef, 'SelectSearchRaum');
        modalRef.componentInstance.gebaeudeId = this.buildingID;
        modalRef.componentInstance.raumSelected.subscribe((raum) => {
            this.loadRaumByData(raum);
        });
        modalRef.componentInstance.raumCreating.subscribe((gid) => {
            modalRef.close();
            this.openSelectCreateRaum();
        });
    }
    openSelectCreateRaum() {
        const modalRef = this.modalService.open(_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_13__["SelectCreateRaumComponent"]);
        this.modalWatch(modalRef, 'SelectCreateRaum');
        this.openedCreateRaum = true;
        modalRef.componentInstance.gebaeudeId = this.buildingID;
        modalRef.componentInstance.raumCreated.subscribe((raum) => {
            this.loadRaumByData(raum);
        });
        modalRef.componentInstance.raumSearching.subscribe((raum) => {
            this.openSelectSearchRaum();
        });
        modalRef.componentInstance.scannerRequest.subscribe((target) => {
            this.openScanner(target);
        });
    }
    openGesamtListDone(useGebaeude) {
        const gebaeude = useGebaeude || this.gebaeude;
        const modalRef = this.modalService.open(_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_25__["GesamtListDoneComponent"], { size: 'xl', scrollable: true });
        this.modalWatch(modalRef, 'GesamtListDone');
        modalRef.componentInstance.gebaeude = gebaeude;
        modalRef.componentInstance.requestGesamtRest.subscribe((g) => {
            this.openGesamtListRest(g);
        });
    }
    openGesamtListRest(useGebaeude) {
        const gebaeude = useGebaeude || this.gebaeude;
        if (!gebaeude || !gebaeude.gid) {
            console.error('No Gebaeude-Data!!!');
        }
        else {
            console.log('OpenGesamtListRest', {
                buildingID: this.buildingID,
                gebaeude: this.gebaeude
            });
        }
        const modalRef = this.modalService.open(_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_24__["GesamtListRestComponent"]);
        this.modalWatch(modalRef, 'GesamtListRest');
        modalRef.componentInstance.gebaeude = gebaeude;
        modalRef.componentInstance.requestGesamtDone.subscribe((g) => {
            this.openGesamtListDone(g);
        });
    }
    openRaumListDone(useRaum) {
        const raum = useRaum || this.raum;
        const modalRef = this.modalService.open(_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_15__["RaumListDoneComponent"]);
        this.modalWatch(modalRef, 'RaumListDone');
        modalRef.componentInstance.raum = raum;
        modalRef.componentInstance.requestRestList.subscribe((r) => {
            this.openRaumListRest(r);
        });
    }
    openRaumListRest(useRaum) {
        const raum = useRaum || this.raum;
        const modalRef = this.modalService.open(_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_14__["RaumListRestComponent"]);
        this.modalWatch(modalRef, 'RaumListRest');
        modalRef.componentInstance.raum = raum;
        modalRef.componentInstance.requestDoneList.subscribe((r) => {
            this.openRaumListDone(r);
        });
    }
    ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
    toggleRaumEditStatus() {
        const jobid = this.baseData.getCurrentJobid();
        if (this.raumEditStatus !== _dexie_service__WEBPACK_IMPORTED_MODULE_16__["DBDIRaumEditStatus"].Closed) {
            this.raumService.setRaumStatusClosed(this.roomID, jobid);
        }
        else {
            this.raumService.setRaumStatusStarted(this.roomID, jobid);
        }
    }
    setRaumEditStatusClosed() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusClosed(this.roomID, jobid);
    }
    setRaumEditStatusStarted() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusStarted(this.roomID, jobid);
    }
    setRaumEditStatusUntouched() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusInit(this.roomID, jobid);
    }
    onRaumBarcodeInput(event) {
        if (event.target instanceof HTMLInputElement || 'value' in event.target) {
            console.log('BarCodeInput :', event.target.value);
        }
    }
    showGesamtDone() {
        console.log('Called show Gesamt Done');
        this.openGesamtListDone();
    }
    showGesamtRest() {
        console.log('Called show Gesamt Rest');
        this.openGesamtListRest();
    }
    showRaumDone() {
        console.log('Called show Raum Done ...');
        this.openRaumListDone();
    }
    showRaumRest() {
        console.log('Called show Raum Rest');
        this.openRaumListRest();
    }
    barcodeLookup(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const bclResult = {
                barcode,
                expectedType: _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].NoMatch,
                bcParts: null,
                result: { type: _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].NoMatch }
            };
            // Test auf Objektbuch - Artikel
            const matchesObjektbuchArtikel = barcode.match(/^(A)-(\d+)-(\d+)-(\d+)-([0-9a-zA-Z]+)$/);
            if (matchesObjektbuchArtikel) {
                const [, src, id, mid, gcid, hashStart] = matchesObjektbuchArtikel;
                bclResult.expectedType = _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchArtikel;
                bclResult.bcParts = { src, id, mid, gcid, hashStart };
                const data = yield this.dataService.getArtikelRefAndData(parseInt(id, 10));
                if (data) {
                    bclResult.result = {
                        type: _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchArtikel,
                        artikelRef: data.artikelRef,
                        artikelData: data.artikelData
                    };
                }
                return bclResult;
            }
            // Test auf Objektbuch - Raum
            const matchesObjektbuchRaum = barcode.match(/^(R)-(\d+)-(\d+)-(\d+)-([0-9a-zA-Z]+)$/);
            if (matchesObjektbuchRaum) {
                const [, src, id, mid, gid, hashStart] = matchesObjektbuchRaum;
                bclResult.expectedType = _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchRaum;
                bclResult.bcParts = { src, id, mid, gid, hashStart };
                const data = yield this.dataService.getRaumAndGebaeude(parseInt(id, 10));
                if (data) {
                    bclResult.result = {
                        type: _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchRaum,
                        raum: data.raum,
                        gebaeude: data.gebaeude
                    };
                }
                return bclResult;
            }
            console.log('Start Barcode-Lookup');
            bclResult.result = yield this.dataService.barcodeLookup(barcode, this.kunde.mid);
            return bclResult;
            // switch (result.type) {
            //   case LookupResultType.Inventar:
            //     bclResult.result = {
            //       type: LookupResultType.Inventar,
            //       inventar: result.inventar,
            //       artikelRef: result.artikelRef,
            //       artikelData: result.artikelData
            //     };
            //     break;
            //
            //   case LookupResultType.Raum:
            //     bclResult.result = {
            //       type: LookupResultType.Raum,
            //       raum: result.raum,
            //       gebaeude: result.gebaeude
            //     };
            //     break;
            //
            //   default:
            //   // Nothing
            // }
            //
            // return bclResult;
        });
    }
    onBarcodeInput() { }
    handleScanData(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(event);
            const bcResult = yield this.bcLookup.fullLookup(event.barcode);
            const barcode = event.barcode;
            let expectedBarcodeType = this.waitingForNewInventarBarcode ? _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].Inventar : null;
            this.displayScannedBarcode(event.barcode);
            if (event.target && event.target.id) {
                switch (event.target.id) {
                    case 'raumBarcode':
                        expectedBarcodeType = _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].Raum;
                        break;
                    case 'newRaumBarcode':
                        expectedBarcodeType = _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchRaum;
                        break;
                    case 'invBarcode':
                        break;
                }
            }
            const RaumCreateModal = this.getModalRefByName('SelectCreateRaum');
            if (RaumCreateModal && RaumCreateModal.componentInstance) {
                if (bcResult.lookupResultTable === _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].None) {
                    const modalComp = RaumCreateModal.componentInstance;
                    modalComp.raumDaten.code = bcResult.barcode;
                    return true;
                }
                else {
                    alert('Ungültiger Barcode für Raun-Neu-Erfassung! ' +
                        'Gebe einen gülten Barcode ein oder schließe den Dialog "Neuen Raum anlegen"!');
                    return false;
                }
            }
            if (this.waitingForNewInventarBarcode) {
                if (bcResult.lookupResultTable === _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].None) {
                    this.formInventar.Barcode = bcResult.barcode;
                    this.waitingForNewInventarBarcode = false;
                    this.saveNewInventar();
                    return true;
                }
                else {
                    if (!confirm('Ungültiger Barcode für die Inventar-Neu-Anlage!' +
                        'Bitte bestätige den Abbruch, wenn die vorherige Aktion abgebrochen werden soll.')) {
                        return;
                    }
                }
            }
            switch (bcResult.lookupResultTable) {
                case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].None:
                    break;
                case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].Raeume:
                    if (bcResult.raum.gid === this.buildingID) {
                        this.loadRaumByData(bcResult.raum);
                        return;
                    }
                    else {
                        const geb = bcResult.gebaeude;
                        const gebName = geb ? (geb.Gebaeude || geb.Adresse) : ' Unbekannte Standort-ID ' + bcResult.raum.gid;
                        alert('Fehler: Raum kann nicht geladen werden\n' +
                            'Der gescannte Raum-Barcode ist einem anderen Standort zugewiesen:\n' +
                            gebName);
                    }
                    break;
                case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].Inventar:
                    this.assignInventarToRaum({
                        inventar: bcResult.inventar,
                        artikelRef: bcResult.artikelRef,
                        artikelData: bcResult.artikelData
                    });
                    break;
                case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultTable"].ObjektKatalogMandant:
                    this.loadArtikelByData(Object.assign({}, bcResult.artikelRef, bcResult.artikelData));
                    break;
                default:
                    alert('Ungültiger oder nicht richtig erkannter Barcode!');
            }
            // OLD-Part, dessen Lokik mit neuem BC-Lookup übernommen werden muss
            this.barcodeLookup(barcode).then((bclResult) => {
                /*
                      if (RaumCreateModal && RaumCreateModal.componentInstance) {
                        if (bclResult.result.type === LookupResultType.NoMatch) {
                          const modalComp: SelectCreateRaumComponent = RaumCreateModal.componentInstance;
                          modalComp.raumDaten.code = barcode;
                          return true;
                        } else {
                          alert('Ungültiger Barcode für Raun-Neu-Erfassung! ' +
                            'Gebe einen gülten Barcode ein oder schließe den Dialog "Neuen Raum anlegen"!');
                          return false;
                        }
                      }
                
                      if (this.waitingForNewInventarBarcode) {
                        if (bclResult.result.type === LookupResultType.NoMatch) {
                          this.formInventar.Barcode = barcode;
                          this.waitingForNewInventarBarcode = false;
                          this.saveNewInventar();
                          return true;
                        } else {
                          if (!confirm('Ungültiger Barcode für die Inventar-Neu-Anlage!' +
                          'Bitte bestätige den Abbruch, wenn die vorherige Aktion abgebrochen werden soll.')) {
                            return;
                          }
                        }
                      }
                 */
                switch (bclResult.result.type) {
                    case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchRaum:
                    case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].Raum:
                        this.loadRaumByData(bclResult.result.raum);
                        return true;
                    case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].ObjektBuchArtikel:
                        this.loadArtikelByData(Object.assign({}, bclResult.result.artikelRef, bclResult.result.artikelData));
                        return true;
                    case _dexie_service__WEBPACK_IMPORTED_MODULE_16__["LookupResultType"].Inventar:
                        this.assignInventarToRaum(bclResult.result);
                        return true;
                    default:
                        alert('Ungültiger oder nicht richtig erkannter Barcode!');
                }
            }).catch((err) => {
                console.error(err);
            });
        });
    }
    displayScannedBarcode(barcode) {
        this.input2.nativeElement.value = barcode;
        this.lastScanDetectTime = new Date();
        this.lastScanDetectClass = 'NewFreshScan CountDown-5';
        let countdown = 5;
        if (this.lastScanDetectTimer) {
            clearInterval(this.lastScanDetectTimer);
            this.lastScanDetectTimer = null;
        }
        this.lastScanDetectTimer = setInterval(() => {
            this.lastScanDetectClass = 'NewFreshScan CountDown-' + (--countdown);
            if (countdown < 1) {
                this.lastScanDetectClass = '';
                clearInterval(this.lastScanDetectTimer);
                this.lastScanDetectTimer = null;
            }
        }, 1000);
    }
    // dummy
    simulateScanner() {
        if (!this.inputSimulateBarcode.nativeElement.value) {
            this.inputSimulateBarcode.nativeElement.value = 'A-1-3-1-78eae45';
        }
        const s = this.inputSimulateBarcode.nativeElement.value;
        for (const character of s) {
            // for (let i = 0; i < s.length; i++) {
            const e = new KeyboardEvent('keyup', { bubbles: true, cancelable: true, key: character, shiftKey: false });
            setTimeout(() => document.dispatchEvent(e));
        }
        const xe = new KeyboardEvent('keyup', { bubbles: true, cancelable: true, key: 'Enter', shiftKey: false });
        setTimeout(() => document.dispatchEvent(xe));
    }
};
InventFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_18__["BasedataService"] },
    { type: _inventory_progress_service__WEBPACK_IMPORTED_MODULE_6__["InventoryProgressService"] },
    { type: _inventory_editor_service__WEBPACK_IMPORTED_MODULE_19__["InventoryEditorService"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_20__["InventarService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_23__["RaumService"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_21__["ImagesService"] },
    { type: _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_22__["BarcodeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input2', { static: true })
], InventFormComponent.prototype, "input2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputSimulateBarcode', { static: true })
], InventFormComponent.prototype, "inputSimulateBarcode", void 0);
InventFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invent-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invent-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invent-form.component.scss */ "./src/app/invent-form/invent-form.component.scss")).default]
    })
], InventFormComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9jcmVhdGUtYXJ0aWtlbC1pbWFnZS13ZWJjYW0vY3JlYXRlLWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateArtikelImageWebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArtikelImageWebcamComponent", function() { return CreateArtikelImageWebcamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");





const infoLogWorkaround = (...args) => {
    args.unshift('[INFO]');
    console.log.apply(console, args);
};
const infoLog = (...args) => {
    const cons = console;
    const consInfo = cons.info || infoLogWorkaround;
    consInfo(args);
};
let CreateArtikelImageWebcamComponent = class CreateArtikelImageWebcamComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        infoLog('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
};
CreateArtikelImageWebcamComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateArtikelImageWebcamComponent.prototype, "name", void 0);
CreateArtikelImageWebcamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-artikel-image-webcam',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-artikel-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-artikel-image.component.scss */ "./src/app/invent-form/modals/create-artikel-image-webcam/create-artikel-image.component.scss")).default]
    })
], CreateArtikelImageWebcamComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar-cropend,\n.toolbar {\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -8rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-cropend {\n  top: 1rem;\n  width: 5rem;\n  margin-left: -2.5rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n\n.btn-icon-cirular + .btn-icon-cirular {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50LWZvcm0vbW9kYWxzL2NyZWF0ZS1hcnRpa2VsLWltYWdlL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kL3NyY1xcYXBwXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxjcmVhdGUtYXJ0aWtlbC1pbWFnZVxcY3JlYXRlLWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9jcmVhdGUtYXJ0aWtlbC1pbWFnZS9jcmVhdGUtYXJ0aWtlbC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBR0UsbUJBQUE7RUFHQSxhQUFBO0VBR0EsdUJBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0dGOztBREFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9jcmVhdGUtYXJ0aWtlbC1pbWFnZS9jcmVhdGUtYXJ0aWtlbC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FudmFzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvb2xiYXItY3JvcGVuZCxcclxuLnRvb2xiYXIge1xyXG4gIGJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE2cmVtO1xyXG4gIHotaW5kZXg6IDIwMTU7XHJcbn1cclxuLnRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG59XHJcbi50b29sYmFyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBib3JkZXI6MDtcclxufVxyXG5cclxuLnRvb2xiYXItY3JvcGVuZCB7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xyXG4gIHotaW5kZXg6IDIwMTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4taWNvbi1jaXJ1bGFyIHtcclxuICB3aWR0aDoycmVtO1xyXG4gIGhlaWdodDoycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6MXJlbTtcclxufVxyXG4uYnRuLWljb24tY2lydWxhciArIC5idG4taWNvbi1jaXJ1bGFyIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4iLCIuZWRpdG9yIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbnZhcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhbnZhcyB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG9vbGJhci1jcm9wZW5kLFxuLnRvb2xiYXIge1xuICBib3R0b206IDFyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnJlbTtcbiAgei1pbmRleDogMjAxNTtcbn1cblxuLnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi50b29sYmFyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xufVxuXG4udG9vbGJhci1jcm9wZW5kIHtcbiAgdG9wOiAxcmVtO1xuICB3aWR0aDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XG4gIHotaW5kZXg6IDIwMTY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLWljb24tY2lydWxhciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5idG4taWNvbi1jaXJ1bGFyICsgLmJ0bi1pY29uLWNpcnVsYXIge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateArtikelImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArtikelImageComponent", function() { return CreateArtikelImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/invent-form/data-services/images.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





const infoLogWorkaround = (...args) => {
    args.unshift('[INFO]');
    console.log.apply(console, args);
};
const infoLog = (...args) => {
    const cons = console;
    const consInfo = cons.info || infoLogWorkaround;
    consInfo(args);
};
let CreateArtikelImageComponent = class CreateArtikelImageComponent {
    constructor(activeModal, imageService) {
        this.activeModal = activeModal;
        this.imageService = imageService;
        // Editor-Button-Icons
        this.faCrop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCropAlt"];
        this.faMove = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowsAlt"];
        this.faSearchPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearchPlus"];
        this.faSearchMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearchMinus"];
        this.faRotateLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUndo"];
        this.faRotateRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRedo"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"];
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBan"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSave"];
        this.faUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrashAlt"];
        this.faTrashRestore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrashRestore"];
        this.faTrashRestoreAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrashRestoreAlt"];
        this.gcuuid = '';
        this.name = '';
        this.allowDelete = false;
        this.inputFile = null;
        this.inputImgData = null;
        this.inputImgType = '';
        this.inputImgSize = 0;
        this.inputImgWidth = 0;
        this.inputImgHeight = 0;
        this.inputImgSavedData = null;
        this.previewImgUrl = null;
        this.config = {
            // aspectRatio : 16 / 9,
            autoCrop: false,
            dragMode: 'crop',
            background: true,
            movable: true,
            rotatable: true,
            scalable: true,
            zoomable: true,
            restore: true,
            viewMode: 0,
            checkImageOrigin: true,
            // crop: this.onCrop.bind(this),
            cropmove: this.cropMove.bind(this),
            cropstart: this.cropStart.bind(this),
            cropend: this.cropEnd.bind(this),
            zoom: this.zoomed.bind(this),
            ready: this.onCropperReady.bind(this),
            checkCrossOrigin: true,
            wheelZoomRatio: 0.1,
            toggleDragModeOnDblclick: true
        };
        this.cropStatus = 0;
        this.cropApplied = false;
        this.dragMode = 'move';
        this.canMove = false;
    }
    cropMove(data) {
        this.cropStatus = 3;
        this.previewImgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL();
    }
    cropStart(e) {
        this.cropStatus = 2;
    }
    cropEnd(e) {
        if (['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'].indexOf(e.detail.action) !== -1) {
            this.cropStatus = 5;
        }
        else if (e.detail.action === 'move') {
            const canvasData = this.angularCropper.cropper.getCanvasData();
            const containerData = this.angularCropper.cropper.getContainerData();
            console.log('cropEnd move', { e, canvasData, containerData });
            let toLeft = canvasData.left > 0 ? 0 : canvasData.left;
            let toTop = canvasData.top > 0 ? 0 : canvasData.top;
            if (canvasData.left > 0 || canvasData.top > 0) {
                this.angularCropper.cropper.moveTo(toLeft, toTop);
            }
            else {
                let posIsOk = true;
                if (canvasData.top + canvasData.height < containerData.height) {
                    toTop = containerData.height - canvasData.height;
                    posIsOk = false;
                }
                if (canvasData.left + canvasData.width < containerData.width) {
                    toLeft = containerData.width - canvasData.width;
                    posIsOk = false;
                }
                if (!posIsOk) {
                    this.angularCropper.cropper.moveTo(toLeft, toTop);
                }
            }
        }
    }
    onCrop(e) {
        // console.log('onCrop Details: ', e.details);
    }
    zoomed(e) {
        console.log('zoomListener Event: ', e, 'this.angularCropper: ', this.angularCropper);
        const canvasData = this.angularCropper.cropper.getCanvasData();
        const containerData = this.angularCropper.cropper.getContainerData();
        const ratio = e.detail.ratio;
        const oldRatio = e.detail.oldRatio;
        const minRatioW = containerData.width / canvasData.naturalWidth;
        const minRatioH = containerData.height / canvasData.naturalHeight;
        if (ratio < oldRatio && (ratio < minRatioW || ratio < minRatioH)) { // Zoom-Out
            e.preventDefault(); // Prevent zoom out
            return false;
        }
        this.canMove = Math.abs(minRatioW - ratio) > 0.01;
    }
    ngOnInit() {
        console.log('#39 CreateArtikelImageComponent ngOniInit');
        this.dragMode = this.config.dragMode;
    }
    onInputImageFile(event, elm) {
        console.log('onInputImageFile', { event });
        if (elm.files.length) {
            this.inputFile = elm.files[0];
        }
        else {
            this.inputFile = null;
        }
        this.prepareInputImageFile();
    }
    prepareInputImageFile() {
        if (!this.inputFile) {
            return;
        }
        this.inputImgSize = this.inputFile.size;
        this.inputImgType = this.inputFile.type;
        console.log('Filesize of ' + this.inputFile.name + ' (' + this.inputFile.type + ') is ' + this.inputFile.size);
        const rd = new FileReader();
        rd.onload = (ev) => {
            console.log(ev);
            this.inputImgData = rd.result;
            const img = new Image();
            img.onerror = (err) => {
                console.error('Cannot load file as image', { err });
            };
            img.onload = (imgLoadEv) => {
                console.log('im onlad', { imgLoadEv });
                this.inputImgWidth = img.width;
                this.inputImgHeight = img.height;
                console.log(`Img W: ${this.inputImgWidth}, H: ${this.inputImgHeight}`);
                const KB = 1024;
                console.log('this.prepareImgCanvas', this.prepareImgCanvas);
                if (this.inputImgHeight > 2000 || this.inputImgWidth > 2000) {
                    const canv = this.prepareImgCanvas.nativeElement;
                    const ctx = canv.getContext('2d');
                    const iRel = this.inputImgWidth / this.inputImgHeight;
                    canv.width = (iRel > 1) ? 2000 : (2000 * iRel);
                    canv.height = (iRel > 1) ? (2000 / iRel) : 2000;
                    ctx.drawImage(img, 0, 0, this.inputImgWidth, this.inputImgHeight, 0, 0, canv.width, canv.height);
                    this.imageUrl = canv.toDataURL('image/jpeg', 0.7);
                }
                else if (this.inputImgSize > 200 * KB) {
                    // 1264270 => 1.235 KB
                    const canv = this.prepareImgCanvas.nativeElement;
                    const ctx = canv.getContext('2d');
                    const iRel = this.inputImgWidth / this.inputImgHeight;
                    canv.width = this.inputImgWidth;
                    canv.height = this.inputImgHeight;
                    ctx.drawImage(img, 0, 0);
                    this.imageUrl = canv.toDataURL('image/jpeg', 0.7);
                }
                else {
                    this.imageUrl = this.inputImgData;
                }
            };
            console.log('Assign DataUrl to img. ', this.inputImgData);
            img.src = this.inputImgData;
        };
        rd.onprogress = (ev) => {
            console.log('read ' + ev.loaded + ' of ' + ev.total);
        };
        rd.readAsDataURL(this.inputFile);
        // const img = new Image();
        // img.src = null;
        // if (this.inputFile.size) {
        // }
    }
    onCropperReady(data) {
        console.log('called onCropperReady on this: ', this, 'this.angularCropper:', this.angularCropper, ' data: ', data);
        if (!this.angularCropper.isLoading && typeof this.angularCropper.cropper !== 'undefined') {
            this.angularCropper.cropper.setDragMode(this.config.dragMode);
            this.dragMode = this.config.dragMode;
            return;
        }
        this.angularCropper.ready.subscribe((data2) => {
            console.log('ready subscribe', { data2 });
            this.angularCropper.cropper.setDragMode(this.config.dragMode);
            this.dragMode = this.config.dragMode;
        });
    }
    crop() {
        console.log('crop this.angularCropper:', this.angularCropper);
        this.imageUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
        this.cropApplied = true;
        this.angularCropper.cropper.clear();
        this.cropStatus = 0;
    }
    cropReset() {
        console.log('reset this.angularCropper:', this.angularCropper);
        this.angularCropper.cropper.clear();
        this.angularCropper.cropper.reset();
        this.cropStatus = 0;
    }
    setDragModeToMove() {
        this.angularCropper.cropper.setDragMode('move');
        this.dragMode = 'move';
        if (this.cropStatus === 1) {
            this.cropStatus = 0;
        }
    }
    setDragModeToCrop() {
        this.angularCropper.cropper.setDragMode('crop');
        this.angularCropper.cropper.crop();
        this.dragMode = 'crop';
        this.cropStatus = 5;
    }
    hideCropBox() {
        this.angularCropper.cropper.clear();
    }
    rotateLeft() {
        // console.log('rotate left 90 this.angularCropper:', this.angularCropper);
        this.angularCropper.cropper.rotate(-90);
    }
    rotateRight() {
        // console.log('rotate right 90 this.angularCropper:', this.angularCropper);
        this.angularCropper.cropper.rotate(90);
    }
    rotate180() {
        // console.log('rotate 180 this.angularCropper:', this.angularCropper);
        this.angularCropper.cropper.rotate(180);
    }
    zoomIn() {
        // console.log('zoom( 0.1) this.angularCropper:', this.angularCropper);
        this.angularCropper.cropper.zoom(.1);
    }
    zoomOut(useRatio) {
        const ratio = (typeof useRatio === 'undefined' || useRatio >= 0) ? -0.1 : useRatio;
        console.log('zoom( -0.1) this.angularCropper:', this.angularCropper);
        const canvasData = this.angularCropper.cropper.getCanvasData();
        const cropBoxData = this.angularCropper.cropper.getCropBoxData();
        const containerData = this.angularCropper.cropper.getContainerData();
        const cad = canvasData;
        const crd = cropBoxData;
        const cod = containerData;
        const caw = cad.width;
        const cah = cad.height;
        const crw = crd.width;
        const crh = crd.height;
        const cow = cod.width;
        const coh = cod.height;
        console.log({ ratio, caw, cah, cow, coh, crw, crh, canvasData, cropBoxData, containerData });
        if (caw < cow || cah < coh) {
            console.error('Permission denied to zoom out smaller than canvas');
            return;
        }
        console.log('Permission allowed to zoom out >= canvas');
        this.angularCropper.cropper.zoom(ratio);
    }
    escape() {
        this.imageUrl = null;
        this.inputImgSavedData = null;
        this.inputImgData = null;
    }
    close() {
        this.escape();
        this.activeModal.close();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('save this.angularCropper:', this.angularCropper);
            this.angularCropper.cropper.disable();
            const cropData = this.angularCropper.cropper.getImageData();
            this.inputImgSavedData = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
            return this.imageService.insertImage({
                name: this.name,
                type: 'image/jpeg',
                size: this.inputImgSavedData.toString().length,
                width: cropData.width,
                height: cropData.height,
                gcuuid: this.gcuuid,
                data_url: this.inputImgSavedData
            }).then(() => {
                this.activeModal.close();
                return true;
            }).catch((err) => {
                console.error('Cannot save Image', { err });
                this.angularCropper.cropper.enable();
                return false;
            });
        });
    }
    cropSave() {
        this.crop();
        this.save();
    }
};
CreateArtikelImageComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper', { static: false })
], CreateArtikelImageComponent.prototype, "angularCropper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prepareImgCanvas', { static: true })
], CreateArtikelImageComponent.prototype, "prepareImgCanvas", void 0);
CreateArtikelImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-artikel-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-artikel-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-artikel-image.component.scss */ "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss")).default]
    })
], CreateArtikelImageComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9nZXNhbXQtbGlzdC1kb25lL2dlc2FtdC1saXN0LWRvbmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GesamtListDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesamtListDoneComponent", function() { return GesamtListDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/invent-form/data-services/raum.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let GesamtListDoneComponent = class GesamtListDoneComponent {
    constructor(activeModal, baseData, raumData) {
        this.activeModal = activeModal;
        this.baseData = baseData;
        this.raumData = raumData;
        this.requestGesamtRest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // FA-Icons
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"];
        this.faInWork = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"];
        this.faEmpty = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBatteryEmpty"];
        this.faQuarter = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBatteryQuarter"];
        this.faHalf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBatteryHalf"];
        this.faThreeQuarter = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBatteryThreeQuarters"];
        this.faFull = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBatteryFull"];
    }
    ngOnInit() {
    }
    set gebaeude(gebaeude) {
        this.gebaeudeDaten = gebaeude;
        this.loadGebaeudeStat();
    }
    getStatusIconNameByItem(item) {
        if (item.done === 0) {
            return 'empty';
        }
        else if (item.done >= item.total) {
            return 'full';
        }
        else if (item.progress >= 75) {
            return 'three-quarter';
        }
        else if (item.progress >= 50) {
            return 'half';
        }
        else {
            return 'quarter';
        }
    }
    loadGebaeudeStat(useJobid) {
        const jobid = useJobid || this.baseData.getCurrentJobid();
        this.raumData.getRaeumeStartedByGebaeudeId(this.gebaeudeDaten.gid, jobid).then((list) => {
            this.raeumeListDone = list
                .map((item) => {
                item.progress = Math.ceil(item.progress < 99 || item.progress >= 100 ? item.progress : 99);
                return Object.assign({}, item, { statusIconName: this.getStatusIconNameByItem(item) });
            })
                .sort((a, b) => {
                if (a.editStatus === b.editStatus && a.progress === b.progress) {
                    return a.Raum.toLowerCase() < b.Raum.toLowerCase() ? -1 : 1;
                }
                else if (a.editStatus !== b.editStatus) {
                    return a.editStatus < b.editStatus ? -1 : 1;
                }
                else {
                    return a.progress < b.progress ? -1 : 1;
                }
            });
        });
    }
    showGesamtRestForm() {
        console.log('click showGesamtToDoForm');
        this.activeModal.close();
        this.requestGesamtRest.emit(this.gebaeudeDaten);
    }
};
GesamtListDoneComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
GesamtListDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gesamt-list-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gesamt-list-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gesamt-list-done.component.scss */ "./src/app/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss")).default]
    })
], GesamtListDoneComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9nZXNhbXQtbGlzdC1yZXN0L2dlc2FtdC1saXN0LXJlc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GesamtListRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesamtListRestComponent", function() { return GesamtListRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/invent-form/data-services/raum.service.ts");





let GesamtListRestComponent = class GesamtListRestComponent {
    constructor(activeModal, baseData, raumData) {
        this.activeModal = activeModal;
        this.baseData = baseData;
        this.raumData = raumData;
        this.requestGesamtDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    set gebaeude(gebaeude) {
        this.gebaeudeDaten = gebaeude;
        this.loadGebaeudeStat();
    }
    loadGebaeudeStat(useJobid) {
        const jobid = useJobid || this.baseData.getCurrentJobid();
        this.raumData.getRaeumeToDoByGebaeudeId(this.gebaeudeDaten.gid, jobid).then((list) => {
            this.raeumeListDone = list.sort((a, b) => {
                return a.Raum.toLowerCase() < b.Raum.toLowerCase() ? -1 : 1;
            });
        });
    }
    showGesamtDoneForm() {
        console.log('click showGesamtToDoForm');
        this.activeModal.close();
        this.requestGesamtDone.emit(this.gebaeudeDaten);
    }
};
GesamtListRestComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
GesamtListRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gesamt-list-rest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gesamt-list-rest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gesamt-list-rest.component.scss */ "./src/app/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss")).default]
    })
], GesamtListRestComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/raum-list-done/raum-list-done.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/invent-form/modals/raum-list-done/raum-list-done.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9yYXVtLWxpc3QtZG9uZS9yYXVtLWxpc3QtZG9uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/invent-form/modals/raum-list-done/raum-list-done.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/invent-form/modals/raum-list-done/raum-list-done.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RaumListDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumListDoneComponent", function() { return RaumListDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");





let RaumListDoneComponent = class RaumListDoneComponent {
    constructor(activeModal, inventarService, baseData) {
        this.activeModal = activeModal;
        this.inventarService = inventarService;
        this.baseData = baseData;
        this.requestRestList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventarListDone = [];
        this.inventarListGrouped = [];
        this.inventarDetailList = [];
        this.total = 0;
        this.pageNr = 1;
        this.pageSize = 0;
        this.totalPages = 0;
    }
    ngOnInit() {
    }
    set raum(raum) {
        this.raumDaten = raum;
        this.loadInventarByRid(raum.rid).then(() => {
            this.setPage(1);
        });
    }
    setPage(pageNr, pageSize) {
        this.total = this.inventarListGrouped.length;
        this.pageSize = Math.max(1, Math.min(this.total, pageSize || this.pageSize || this.total));
        this.totalPages = Math.ceil(this.total / this.pageSize);
        this.pageNr = Math.min(this.totalPages, Math.max(1, pageNr));
        this.inventarListDone = this.inventarListGrouped
            .slice(Math.max(0, this.pageNr - 1) * this.pageSize, this.pageSize);
    }
    loadInventarByRid(rid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const groupedList = [];
            console.log('#54 getHello:', this.inventarService.getHello());
            return this.inventarService.getInventarListDoneByRaumId(rid, jobid)
                .then(list => {
                this.inventarDetailList = list;
                this.inventarListGrouped = this.inventarDetailList
                    .sort((a, b) => a.inventar.mcid > b.inventar.mcid ? -1
                    : (a.inventar.mcid < b.inventar.mcid ? 1 : 0))
                    .reduce((gList, item) => {
                    const l = gList.length;
                    const i = l - 1;
                    if (!l || gList[i].mcid !== item.inventar.mcid) {
                        gList[l] = {
                            mcid: item.inventar.mcid,
                            Bezeichnung: item.inventar.Bezeichnung || item.artikelData.Bezeichnung,
                            Typ: item.inventar.Typ || item.artikelData.Typ,
                            Menge: 1
                        };
                    }
                    else {
                        gList[i].Menge++;
                    }
                    return gList;
                }, groupedList);
                return true;
            });
        });
    }
    showRaumRestForm(e) {
        console.log('click showRaumDoneForm');
        this.activeModal.close();
        this.requestRestList.emit(this.raumDaten);
    }
};
RaumListDoneComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__["InventarService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RaumListDoneComponent.prototype, "requestRestList", void 0);
RaumListDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raum-list-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raum-list-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-done/raum-list-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raum-list-done.component.scss */ "./src/app/invent-form/modals/raum-list-done/raum-list-done.component.scss")).default]
    })
], RaumListDoneComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9yYXVtLWxpc3QtcmVzdC9yYXVtLWxpc3QtcmVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RaumListRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumListRestComponent", function() { return RaumListRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");





let RaumListRestComponent = class RaumListRestComponent {
    constructor(activeModal, inventarService, baseData) {
        this.activeModal = activeModal;
        this.inventarService = inventarService;
        this.baseData = baseData;
        this.requestDoneList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventarListRest = [];
        this.inventarListGrouped = [];
        this.inventarDetailList = [];
        this.total = 0;
        this.pageNr = 1;
        this.pageSize = 0;
        this.totalPages = 0;
    }
    ngOnInit() {
        console.log('typeof this.activeModal.dismiss: ', this.activeModal.dismiss);
    }
    set raum(raum) {
        this.raumDaten = raum;
        this.loadInventarByRid(raum.rid).then(() => {
            this.setPage(1);
        });
    }
    setPage(pageNr, pageSize) {
        this.total = this.inventarListGrouped.length;
        this.pageSize = Math.max(1, Math.min(this.total, pageSize || this.pageSize || this.total));
        this.totalPages = Math.ceil(this.total / this.pageSize);
        this.pageNr = Math.min(this.totalPages, Math.max(1, pageNr));
        this.inventarListRest = this.inventarListGrouped
            .slice(Math.max(0, this.pageNr - 1) * this.pageSize, this.pageSize);
    }
    loadInventarByRid(rid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const groupedList = [];
            console.log('#54 getHello:', this.inventarService.getHello());
            return this.inventarService.getInventarListRestByRaumId(rid, jobid)
                .then(list => {
                this.inventarDetailList = list;
                this.inventarListGrouped = this.inventarDetailList
                    .sort((a, b) => a.inventar.mcid > b.inventar.mcid ? -1
                    : (a.inventar.mcid < b.inventar.mcid ? 1 : 0))
                    .reduce((gList, item) => {
                    const l = gList.length;
                    const i = l - 1;
                    if (!l || gList[i].mcid !== item.inventar.mcid) {
                        gList[l] = {
                            mcid: item.inventar.mcid,
                            Bezeichnung: item.inventar.Bezeichnung || item.artikelData.Bezeichnung,
                            Typ: item.inventar.Typ || item.artikelData.Typ,
                            Menge: 1
                        };
                    }
                    else {
                        gList[i].Menge++;
                    }
                    return gList;
                }, groupedList);
                return true;
            });
        });
    }
    showRaumDoneForm(e) {
        console.log('click showRaumDoneForm');
        this.activeModal.close();
        this.requestDoneList.emit(this.raumDaten);
    }
};
RaumListRestComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__["InventarService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RaumListRestComponent.prototype, "requestDoneList", void 0);
RaumListRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raum-list-rest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raum-list-rest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raum-list-rest.component.scss */ "./src/app/invent-form/modals/raum-list-rest/raum-list-rest.component.scss")).default]
    })
], RaumListRestComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/scanner/scanner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/invent-form/modals/scanner/scanner.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.bg-danger::-webkit-input-placeholder {\n  color: #ffffff;\n}\n\ninput.bg-danger::-moz-placeholder {\n  color: #ffffff;\n}\n\ninput.bg-danger::-ms-input-placeholder {\n  color: #ffffff;\n}\n\ninput.bg-danger::placeholder {\n  color: #ffffff;\n}\n\n.scanner-view-port {\n  position: relative;\n  height: auto;\n  overflow-y: hidden;\n  width: 100%;\n}\n\nzxing-scanner::ng-deep video {\n  height: 5rem;\n  width: 100%;\n}\n\n#ScannerFocusRedLine {\n  position: absolute;\n  left: 5%;\n  width: 90%;\n  top: 50%;\n  border: 0;\n  border-top: 1rem solid rgba(255, 0, 0, 0.5);\n  margin-top: -0.5rem;\n}\n\n#barcodeChangedPart {\n  color: blue;\n}\n\n.with-pulse-effect {\n  -webkit-animation: enter-animation 2s ease;\n          animation: enter-animation 2s ease;\n}\n\n@-webkit-keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n\n@keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50LWZvcm0vbW9kYWxzL3NjYW5uZXIvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGludmVudC1mb3JtXFxtb2RhbHNcXHNjYW5uZXJcXHNjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0FDQUY7O0FEREE7RUFDRSxjQUFBO0FDQUY7O0FEREE7RUFDRSxjQUFBO0FDQUY7O0FEREE7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSwwQ0FBQTtVQUFBLGtDQUFBO0FDQUY7O0FESUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsWUFBQTtFQ0RGO0VER0E7SUFDRSxrREFBQTtJQUNBLFdBQUE7RUNERjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFlBQUE7RUNERjtFREdBO0lBQ0Usa0RBQUE7SUFDQSxXQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQuYmctZGFuZ2VyOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zY2FubmVyLXZpZXctcG9ydCB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuenhpbmctc2Nhbm5lcjo6bmctZGVlcCB2aWRlbyB7XHJcbiAgaGVpZ2h0OjVyZW07XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuI1NjYW5uZXJGb2N1c1JlZExpbmUge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NSU7XHJcbiAgd2lkdGg6OTAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLXRvcDoxcmVtIHNvbGlkIHJnYmEoMjU1LDAsMCwuNSk7XHJcbiAgbWFyZ2luLXRvcDotMC41cmVtXHJcbn1cclxuXHJcbiNiYXJjb2RlQ2hhbmdlZFBhcnQge1xyXG4gIGNvbG9yOmJsdWU7XHJcbn1cclxuXHJcbi53aXRoLXB1bHNlLWVmZmVjdCB7XHJcbiAgYW5pbWF0aW9uOiBlbnRlci1hbmltYXRpb24gMnMgZWFzZTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZW50ZXItYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgzNSwgMTMwLCAyMjAsMSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMjVweCByZ2JhKDM1LCAxMzAsIDIyMCwwKTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbnB1dC5iZy1kYW5nZXI6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zY2FubmVyLXZpZXctcG9ydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG56eGluZy1zY2FubmVyOjpuZy1kZWVwIHZpZGVvIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI1NjYW5uZXJGb2N1c1JlZExpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICB3aWR0aDogOTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xufVxuXG4jYmFyY29kZUNoYW5nZWRQYXJ0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi53aXRoLXB1bHNlLWVmZmVjdCB7XG4gIGFuaW1hdGlvbjogZW50ZXItYW5pbWF0aW9uIDJzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgZW50ZXItYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMjM4MmRjO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAyNXB4IHJnYmEoMzUsIDEzMCwgMjIwLCAwKTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/invent-form/modals/scanner/scanner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/invent-form/modals/scanner/scanner.component.ts ***!
  \*****************************************************************/
/*! exports provided: bcLookupTyp, ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bcLookupTyp", function() { return bcLookupTyp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library/esm/core/BarcodeFormat */ "./node_modules/@zxing/library/esm/core/BarcodeFormat.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-services/barcode.service */ "./src/app/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");









var bcLookupTyp;
(function (bcLookupTyp) {
    bcLookupTyp[bcLookupTyp["Neu"] = 0] = "Neu";
    bcLookupTyp[bcLookupTyp["Unbekannt"] = 1] = "Unbekannt";
    bcLookupTyp[bcLookupTyp["Raum"] = 2] = "Raum";
    bcLookupTyp[bcLookupTyp["Artikel"] = 3] = "Artikel";
    bcLookupTyp[bcLookupTyp["Inventar"] = 4] = "Inventar";
})(bcLookupTyp || (bcLookupTyp = {}));
let ScannerComponent = class ScannerComponent {
    constructor(
    //    private readonly _dialog: MatDialo,
    activeModal, dataService, bcLookup) {
        this.activeModal = activeModal;
        this.dataService = dataService;
        this.bcLookup = bcLookup;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheck"];
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBan"];
        this.currentDevice = null;
        this.onScan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatsEnabled = [
            _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].CODE_128
            // , BarcodeFormat.DATA_MATRIX
            // , BarcodeFormat.EAN_13
            // , BarcodeFormat.QR_CODE
        ];
        this.scanResultHistory = [];
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.tryHarder = false;
    }
    ngOnInit() {
    }
    clearResult() {
        this.qrResultString = null;
    }
    bctest(test) {
        console.log({ test });
        if (typeof test === 'string' && test.length) {
            this.onCodeResult(test);
        }
    }
    applyResult() {
        this.onScan.emit({
            barcode: this.scanBCLookupSimpleResult.barcode,
            length: this.scanBCLookupSimpleResult.barcode.length,
            valid: true,
            result: this.scanBCLookupSimpleResult
        });
    }
    bcLookupTypToString(typ) {
        return bcLookupTyp[typ];
    }
    showResult(result) {
        this.scanBCLookupSimpleResult = result;
        this.scannedBarcodeInfoImg = result.image;
        switch (result.lookupResultTable) {
            case _dexie_service__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].None:
                this.scannedBarcodeRsltTyp = bcLookupTyp.Neu;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Neuer oder unbekannter Barcode'
                });
                break;
            case _dexie_service__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].Raeume:
                this.scannedBarcodeRsltTyp = bcLookupTyp.Raum;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Raum',
                    Gebaeude: result.gebaeude.Gebaeude || result.gebaeude.Adresse,
                    Raum: result.raum.Raum,
                    Bezg: result.raum.Raumbezeichnung,
                    Etage: result.raum.Etage
                });
                break;
            case _dexie_service__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].Inventar:
                this.scannedBarcodeRsltTyp = bcLookupTyp.Inventar;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Inventar',
                    InventarNr: result.inventar.iv_nr,
                    Bezeichnung: result.artikelData.Bezeichnung,
                    Typ: result.artikelData.Typ,
                    Farbe: result.artikelData.Farbe,
                    Groesse: result.artikelData.Groesse,
                    Kategorie: result.artikelData.Kategorie
                });
                break;
            case _dexie_service__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].ObjektKatalogMandant:
                this.scannedBarcodeRsltTyp = bcLookupTyp.Artikel;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Artikel',
                    Bezeichnung: result.artikelData.Bezeichnung,
                    Typ: result.artikelData.Typ,
                    Farbe: result.artikelData.Farbe,
                    Groesse: result.artikelData.Groesse,
                    Kategorie: result.artikelData.Kategorie
                });
                break;
            default:
                this.scannedBarcodeRsltTyp = bcLookupTyp.Unbekannt;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Unerwartetes Ergebnise',
                    Objekt: _dexie_service__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"][result.lookupResultTable]
                });
        }
        const newHistoryItem = (this.scanResultCurrent) ? Object.assign({}, this.scanResultCurrent) : null;
        this.scanResultCurrent = {
            typ: this.scannedBarcodeRsltTyp,
            typToString: bcLookupTyp[this.scannedBarcodeRsltTyp],
            barcode: this.scannedBarcode,
            infos: this.scannedBarcodeInfos,
            image: this.scannedBarcodeInfoImg,
            result
        };
        this.addHistoryResult(newHistoryItem);
    }
    addHistoryResult(result) {
        if (result) {
            this.scanResultHistory.unshift(result);
            while (this.scanResultHistory.length > 10) {
                this.scanResultHistory.pop();
            }
        }
        return this.scanResultHistory.length;
    }
    removeResult(result) {
        console.log('remove Result', { result });
    }
    applyHistoryResult(result) {
        console.log('apply Result', { result });
    }
    clearHistory() {
        this.scanResultHistory = [];
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    bcInfoToString(json) {
        return JSON.stringify(json).substr(1).split('').slice(0, -1).join('');
    }
    onCodeResult(resultString) {
        const oldBarcode = this.scannedBarcode || '';
        this.scannedBarcode = resultString;
        this.scannedBarcodeInfos = '';
        this.scannedBarcodeInfoImg = null;
        this.bcLookup.fullLookup(resultString).then((result) => {
            this.showResult(result);
        });
        const resultLength = resultString.length;
        let numMatchingStart = 0;
        const checkLength = Math.min(resultLength, oldBarcode.length);
        if (oldBarcode !== resultString) {
            for (let i = 1; i <= checkLength; i++) {
                if (oldBarcode.substr(0, i) === resultString.substr(0, i)) {
                    numMatchingStart = i;
                }
                console.log('i', i, oldBarcode.substr(0, i), resultString.substr(0, i), numMatchingStart);
            }
            if (numMatchingStart) {
                this.scannedUnchangedPart = resultString.substr(0, numMatchingStart);
                this.scannedChangedPart = resultString.substr(numMatchingStart);
            }
            else {
                this.scannedUnchangedPart = '';
                this.scannedChangedPart = resultString.substr(numMatchingStart);
            }
            const htmlChangedPart = this.barcodeChangedPart.nativeElement;
            htmlChangedPart.classList.remove('with-pulse-effect');
            void htmlChangedPart.offsetWidth;
            htmlChangedPart.classList.add('with-pulse-effect');
            console.log({ oldBarcode, resultString, checkLength, resultLength, numMatchingStart,
                scannedUnchangedPart: this.scannedUnchangedPart,
                scannedChangedPart: this.scannedChangedPart
            });
        }
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }
    openFormatsDialog() {
        const data = {
            formatsEnabled: this.formatsEnabled,
        };
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    openInfoDialog() {
        const data = {
            hasDevices: this.hasDevices,
            hasPermission: this.hasPermission,
        };
    }
    onTorchCompatible(isCompatible) {
        this.torchAvailable$.next(isCompatible || false);
    }
    toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
    }
    toggleTryHarder() {
        this.tryHarder = !this.tryHarder;
    }
};
ScannerComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_6__["BarcodeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barcodeChangedPart', { static: true })
], ScannerComponent.prototype, "barcodeChangedPart", void 0);
ScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html")).default,
        animations: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scanner.component.scss */ "./src/app/invent-form/modals/scanner/scanner.component.scss")).default]
    })
], ScannerComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body,\n.card-footer {\n  padding: 0.5rem;\n}\n\n.artikel-form .input-group-prepend .input-group-text {\n  min-width: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtYXJ0aWtlbC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcaW52ZW50LWZvcm1cXG1vZGFsc1xcc2VsZWN0LWNyZWF0ZS1hcnRpa2VsXFxzZWxlY3QtY3JlYXRlLWFydGlrZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLWFydGlrZWwvc2VsZWN0LWNyZWF0ZS1hcnRpa2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLWFydGlrZWwvc2VsZWN0LWNyZWF0ZS1hcnRpa2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSxcclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLmFydGlrZWwtZm9ybSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgbWluLXdpZHRoOjRyZW07XHJcbn1cclxuIiwiLmNhcmQtYm9keSxcbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmFydGlrZWwtZm9ybSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIG1pbi13aWR0aDogNHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectCreateArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCreateArtikelComponent", function() { return SelectCreateArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_artikel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/artikel.service */ "./src/app/invent-form/data-services/artikel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_services_hersteller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-services/hersteller.service */ "./src/app/invent-form/data-services/hersteller.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");










const states = [];
const stateNames = [];
const artikelGruppen = [];
const artikelKategorien = [];
const artikelTypen = [];
const artikelGroessen = [];
const artikelFarben = [];
const gruppenKategorien = [];
let SelectCreateArtikelComponent = class SelectCreateArtikelComponent {
    constructor(
    // private modalService: NgbModal,
    activeModal, artikelService, herstellerService, baseData, dataService) {
        this.activeModal = activeModal;
        this.artikelService = artikelService;
        this.herstellerService = herstellerService;
        this.baseData = baseData;
        this.dataService = dataService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.ArtikelExistsStatus = -1;
        this.numBezeichnungExists = -1;
        this.artikelDaten = {
            mid: 0,
            mcid: 0,
            gcid: 0,
            Bezeichnung: '',
            Gruppe: '',
            Kategorie: '',
            Typ: '',
            Hersteller: '',
            hid: 0,
            Groesse: '',
            Farbe: ''
        };
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focusGrp$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clickGrp$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focusKtg$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clickKtg$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focusTyp$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clickTyp$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focusGrs$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clickGrs$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focusFa$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clickFa$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.formIsValid = false;
        this.formError = '';
        this.existsStatus = {
            Hersteller: { term: '', count: 0 },
            Bezeichnung: { term: '', count: 0 },
            Typ: { term: '', count: 0 },
            Groesse: { term: '', count: 0 },
            Farbe: { term: '', count: 0 },
        };
        this.herstellerExistsStatus = {
            term: '',
            hid: 0,
            uuid: '',
            data: null,
            isQuerying: false
        };
        this.delayedTrigger = {};
        this.listExistingArticleMatches = [];
        this.listExistingArticlePage = [];
        this.pageSize = 8;
        this.collectionSize = 0;
        this.page = 1;
        this.maxSize = 6;
        this.artikelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.artikelSearching = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.artikelCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.herstellerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gruppeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatter = (state) => state;
        this.search = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instance.isPopupOpen()));
            const inputFocus$ = this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? stateNames
                : stateNames.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGruppen = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickGrp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceGrp.isPopupOpen()));
            const inputFocus$ = this.focusGrp$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelGruppen
                : artikelGruppen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchKategorien = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickKtg$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceKtg.isPopupOpen()));
            const inputFocus$ = this.focusKtg$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelKategorien
                : artikelKategorien.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchTypen = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickTyp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceTyp.isPopupOpen()));
            const inputFocus$ = this.focusTyp$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelTypen
                : artikelTypen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGroessen = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickGrs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceGrs.isPopupOpen()));
            const inputFocus$ = this.focusGrs$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelGroessen
                : artikelGroessen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchFarben = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickFa$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceFa.isPopupOpen()));
            const inputFocus$ = this.focusFa$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelFarben
                : artikelFarben.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
    }
    ngOnInit() {
        this.herstellerService.getAllHerstellerWithIds().then(list => {
            while (states.length > 0) {
                states.pop();
                stateNames.pop();
            }
            list.forEach(item => {
                states.push(item);
                stateNames.push(item.Hersteller);
            });
            console.log('#118 ngOnInit', { states, stateNames });
        });
        this.artikelService.getGroupedArtikelGruppenKategorien().then((list) => {
            gruppenKategorien.length = 0;
            list.forEach(itm => gruppenKategorien.push(itm));
        });
        this.artikelService.getGroupedArtikelGruppen().then(list => {
            list.forEach((it) => artikelGruppen.push(it));
        });
        this.artikelService.getGroupedArtikelKategorien().then(list => {
            list.forEach((it) => artikelKategorien.push(it));
        });
        this.artikelService.getGroupedArtikelProperties('Typ').then(list => {
            list.forEach((it) => artikelTypen.push(it));
        });
        this.artikelService.getGroupedArtikelFarben().then(list => {
            list.forEach((it) => artikelFarben.push(it));
        });
        this.artikelService.getGroupedArtikelGroessen().then(list => {
            list.forEach((it) => artikelGroessen.push(it));
        });
        this.herstellerChanged.subscribe(() => {
            this.checkHersteller().then(() => {
                this.inputChanged.emit();
                // this.rebuildTypeaheadGruppen();
                this.rebuildTypeaheadFarben();
                // this.rebuildTypeaheadKategorien();
                this.rebuildTypeaheadTypen();
            });
        });
        this.gruppeChanged.subscribe((gruppe) => {
            this.rebuildTypeaheadKategorien(gruppe);
            this.inputChanged.emit();
        });
        this.inputChanging.subscribe(() => {
            this.delegateListArticleMatches(3000);
        });
        this.inputChanged.subscribe(() => {
            // this.checkIfArtikelExistsGlobal();
            this.checkIfArtikelExistsMandant();
            this.delegateListArticleMatches(500);
        });
    }
    getWhereInputsOf(artikelProperties) {
        const daten = Object.assign({}, this.artikelDaten);
        console.log('#201 getWhereInputsOf', { artikelProperties, daten, artikelDaten: this.artikelDaten });
        const where = artikelProperties
            .filter(p => {
            const hasInput = (p in daten)
                && daten[p] !== 0
                && daten[p] !== ''
                && !!daten[p];
            console.log('#206 getWhereInputsOf', { p, hasInput, daten, artikelDaten: Object.assign({}, this.artikelDaten),
                value: this.artikelDaten[p], dvalue: daten[p] });
            return hasInput;
        })
            .reduce((o, p) => { o[p] = this.artikelDaten[p]; return o; }, {});
        console.log('#210 getWhereInputsOf', { artikelProperties, where, artikelDaten: this.artikelDaten });
        return where;
    }
    rebuildTypeaheadGruppen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelGruppen(where).then(list => {
                artikelGruppen.length = 0;
                list.forEach((it) => artikelGruppen.push(it));
            });
        });
    }
    rebuildTypeaheadKategorien(gruppe) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const grpKategorien = gruppenKategorien.find(itm => itm.gruppe === gruppe);
            if (gruppe && grpKategorien && grpKategorien.kategorien.length) {
                artikelKategorien.length = 0;
                grpKategorien.kategorien.forEach(ktg => artikelKategorien.push(ktg));
                return;
            }
            const buffer = [];
            gruppenKategorien.forEach(itm => {
                itm.kategorien.forEach(ktg => {
                    if (ktg && artikelKategorien.indexOf(ktg) === -1) {
                        buffer.push(ktg);
                    }
                });
            });
            artikelKategorien.length = 0;
            buffer.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1)
                .forEach(ktg => artikelKategorien.push(ktg));
            return;
        });
    }
    rebuildTypeaheadTypen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelTypen(where).then(list => {
                artikelTypen.length = 0;
                list.forEach((it) => artikelTypen.push(it));
            });
        });
    }
    rebuildTypeaheadGroessen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelGroessen(where).then(list => {
                artikelGroessen.length = 0;
                list.forEach((it) => artikelGroessen.push(it));
            });
        });
    }
    rebuildTypeaheadFarben() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelFarben(where).then(list => {
                artikelFarben.length = 0;
                list.forEach((it) => artikelFarben.push(it));
            });
        });
    }
    delegateCheckHersteller() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const funcName = 'checkHersteller';
            const delayMS = 1000;
            if (funcName in this.delayedTrigger) {
                clearTimeout(this.delayedTrigger[funcName]);
                delete this.delayedTrigger[funcName];
            }
            console.log('delegate checkHersteller');
            this.delayedTrigger[funcName] = setTimeout(this.checkHersteller.bind(this), delayMS);
        });
    }
    delegateListArticleMatches(delay) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const funcName = 'listArticleMatches';
            const delayMS = isNaN(delay) ? 2000 : delay;
            if (funcName in this.delayedTrigger) {
                clearTimeout(this.delayedTrigger[funcName]);
                delete this.delayedTrigger[funcName];
            }
            console.log('delegate listArticleMatches');
            this.delayedTrigger[funcName] = setTimeout(this.listArticleMatches.bind(this), delayMS);
        });
    }
    checkHersteller() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called checkHersteller');
            const input = this.artikelDaten.Hersteller;
            const term = (typeof input === 'string') ? input.trim() : '';
            if (term !== this.herstellerExistsStatus.term) {
                this.herstellerExistsStatus.term = term;
                this.herstellerExistsStatus.data = null;
                this.herstellerExistsStatus.hid = null;
                this.herstellerExistsStatus.uuid = null;
            }
            if (term.length) {
                this.herstellerExistsStatus.isQuerying = true;
                return yield this.herstellerService.getByName(term).then((data) => {
                    this.herstellerExistsStatus.data = data;
                    this.herstellerExistsStatus.isQuerying = false;
                    if (data !== null && data !== undefined) {
                        this.herstellerExistsStatus.hid = data.hid;
                        this.herstellerExistsStatus.uuid = ('uuid' in data) ? data.uuid : null;
                        console.log('#167 Hersteller exists: ', this.herstellerExistsStatus);
                        return true;
                    }
                    return false;
                });
            }
            console.log('#172 Hersteller not found: ', term);
            return false;
        });
    }
    listArticleMatches() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#175 called listArticleMatches');
            const mid = this.baseData.getCurrentMid();
            const oInputStatus = this.existsStatus;
            const d = this.artikelDaten;
            const oCheckData = {};
            yield this.checkHersteller();
            const hid = this.herstellerExistsStatus.hid;
            for (const k of ['Bezeichnung', 'Typ', 'Kategorie', 'Gruppe', 'Groesse', 'Farbe']) {
                if (d[k]) {
                    oCheckData[k] = d[k];
                }
            }
            this.listExistingArticleMatches = yield this.artikelService.listArticleByProperties(mid, hid, oCheckData);
            this.page = 1;
            this.onPageChange(this.page);
            console.log('finished listArticleMatches with results.count: ', this.listExistingArticleMatches.length, ' for', { mid, hid, oCheckData });
        });
    }
    applyItemAsArtikel(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#361 applyItemAsArtikel', { item });
            if (!item.mcid || !item.mcuuid) {
                let artikelRef = yield this.dataService.getArtikelRefByGcuuidMid(item.gcuuid, this.clientId);
                if (!artikelRef) {
                    artikelRef = yield this.artikelService.insertArtikelRef(item);
                }
                item.mcid = artikelRef.mcid;
                item.mcuuid = artikelRef.uuid;
            }
            this.artikelSelected.emit({
                id: item.mcid,
                mcid: item.mcid,
                mcuuid: item.mcuuid,
                name: item.Bezeichnung
            });
            return;
        });
    }
    applyItemAsInput(item) {
        console.log('#367 applyItemAsInput', { item });
        this.artikelDaten.Hersteller = item.Hersteller;
        this.artikelDaten.hid = item.hid;
        this.artikelDaten.Bezeichnung = item.Bezeichnung;
        this.artikelDaten.Gruppe = item.Gruppe;
        this.artikelDaten.Kategorie = item.Kategorie;
        this.artikelDaten.Farbe = item.Farbe;
        this.artikelDaten.Groesse = item.Groesse;
        this.artikelDaten.Typ = item.Typ;
        return;
    }
    onInput(event) {
        this.inputChanging.emit(event);
    }
    onChange(event) {
        this.inputChanged.emit(event);
    }
    onSelectHersteller(selected) {
        const foundHst = states.find((st) => st.Hersteller === selected.item);
        console.log('selected:', selected, 'selected.item: ', selected.item, 'foundHst:', foundHst);
        this.artikelDaten.hid = (foundHst) ? foundHst.hid : null;
        console.log('this.artikelDaten.Hersteller: ', this.artikelDaten.Hersteller, { selected });
        this.herstellerChanged.emit(selected.item);
    }
    onChangeHersteller(event) {
        console.log('Hersteller changed', event);
        if (event.target instanceof HTMLInputElement) {
            this.herstellerChanged.emit(event.target.value);
        }
    }
    onSelectGruppe(selected) {
        console.log('Gruppe selected', selected);
        this.gruppeChanged.emit(selected.item);
    }
    onChangeGruppe(event) {
        console.log('Gruppe changed', event);
        if (event.target instanceof HTMLInputElement) {
            this.gruppeChanged.emit(event.target.value);
        }
    }
    onSelectKategorie(selected) {
        console.log('Kategorien selected', selected);
        this.inputChanged.emit();
    }
    onChangeKategorie(event) {
        console.log('Kategorien changed', event);
        this.inputChanged.emit(event);
    }
    onSelectTypen(selected) {
        console.log('Typen selected', selected);
        this.inputChanged.emit();
    }
    onChangeTyp(event) {
        console.log('Typ changed', event);
        this.inputChanged.emit(event);
    }
    onSelectFarben(selected) {
        console.log('Farben selected', selected);
        this.inputChanged.emit();
    }
    onSelectGroessen(selected) {
        console.log('Groessen selected', selected);
        this.inputChanged.emit();
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    formValidate() {
        console.log('called formValidate');
        this.formIsValid =
            this.artikelDaten.Bezeichnung.length > 0
                && this.numBezeichnungExists === 0;
        console.log('called formValidate return ', this.formIsValid);
        return this.formIsValid;
    }
    showSearchForm(event) {
        console.log('called showSearchForm');
        this.artikelSearching.emit(1);
        this.activeModal.close();
    }
    get gebaeudeId() {
        console.log('called get gebaeudeId() ', this.gid);
        return this.gid;
    }
    set gebaeudeId(gid) {
        console.log('called set gebaeudeId', 'param', gid, 'old-gid', this.gid);
        this.gid = gid;
    }
    get clientId() {
        console.log('called get clientId() ', this.mid);
        return this.mid;
    }
    set clientId(mid) {
        console.log('called set clientId', 'param', mid, 'old-mid', this.mid);
        this.mid = mid;
    }
    checkIfABezeichnungExistsGlobal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('check if Artikel exists');
            this.delegateListArticleMatches();
            this.numBezeichnungExists = -1;
            let NumBezgenExists = 0;
            yield this.artikelService
                .artikelBezeichnungExistsGlobal(this.artikelDaten.Bezeichnung)
                .then(numExists => {
                this.numBezeichnungExists = numExists;
                NumBezgenExists = numExists;
            });
            this.formValidate();
            console.log('check if Artikel exists: ', NumBezgenExists);
            this.listArticleMatches();
            return NumBezgenExists;
        });
    }
    checkIfArtikelExistsMandant() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('check if bezeichnung exists');
            this.numBezeichnungExists = -1;
            let globalArtikelIds = [];
            yield this.artikelService
                .artikelGlobalByBezeichnung(this.artikelDaten.Bezeichnung)
                .then(items => {
                globalArtikelIds = items.map(item => item.gcid);
            });
            if (globalArtikelIds.length === 0) {
                return false;
            }
            return 0 < (yield this.artikelService
                .artikelMcidByGcids(this.mid, globalArtikelIds)
                .then(items => {
                return items.length;
                // mandantArtikelIds = items.map<number>( itm => itm.mcid );
            }));
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.formError = '';
            console.log('save Artikel ');
            if (this.formValidate()) {
                this.artikelDaten.mid = this.mid;
                console.log('save Artikeldaten ', this.artikelDaten);
                const result = yield this.artikelService.insert(this.artikelDaten);
                console.log('save Artikeldaten result ', result);
                if (!result.success) {
                    this.formError = 'Daten konnten nicht gespeichert werden!<br>' + result.errorMsg;
                    return false;
                }
                else {
                    this.artikelCreated.emit(result.newItem);
                    this.activeModal.close();
                    return true;
                }
            }
            else {
                this.formError = 'Bitte die Angaben vervollständigen, Artikel-Bezeichnung darf noch nicht vergeben sein';
            }
        });
    }
    onPageChange(page) {
        this.collectionSize = this.listExistingArticleMatches.length;
        this.pageSize = 8;
        const start = (page - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.listExistingArticlePage = this.listExistingArticleMatches.slice(start, end);
        console.log('#599 pagination goto page', page, '.slice(', start, end, ') of', this.collectionSize);
    }
    onSubmit(event) {
        console.log('onSubmit', this.artikelDaten);
        this.save();
    }
};
SelectCreateArtikelComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_artikel_service__WEBPACK_IMPORTED_MODULE_4__["ArtikelService"] },
    { type: _data_services_hersteller_service__WEBPACK_IMPORTED_MODULE_7__["HerstellerService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] },
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance', { static: true })
], SelectCreateArtikelComponent.prototype, "instance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceGrp', { static: true })
], SelectCreateArtikelComponent.prototype, "instanceGrp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceKtg', { static: true })
], SelectCreateArtikelComponent.prototype, "instanceKtg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceTyp', { static: true })
], SelectCreateArtikelComponent.prototype, "instanceTyp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceGrs', { static: true })
], SelectCreateArtikelComponent.prototype, "instanceGrs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceFa', { static: true })
], SelectCreateArtikelComponent.prototype, "instanceFa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "artikelSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "artikelSearching", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "artikelCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "herstellerChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "gruppeChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "inputChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateArtikelComponent.prototype, "inputChanged", void 0);
SelectCreateArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-create-artikel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-create-artikel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-create-artikel.component.scss */ "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss")).default]
    })
], SelectCreateArtikelComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLXJhdW0vc2VsZWN0LWNyZWF0ZS1yYXVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectCreateRaumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCreateRaumComponent", function() { return SelectCreateRaumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/invent-form/data-services/raum.service.ts");





let SelectCreateRaumComponent = class SelectCreateRaumComponent {
    constructor(
    // private modalService: NgbModal,
    activeModal, raumService) {
        this.activeModal = activeModal;
        this.raumService = raumService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCamera"];
        this.raumExistsStatus = -1;
        this.bezeichnungExistsStatus = -1;
        this.raumDaten = {
            Raum: '',
            Raumbezeichnung: '',
            Etage: '',
            code: ''
        };
        this.formIsValid = false;
        this.formError = '';
        this.raumSearching = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scannerRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
    openScanner(target) {
        this.scannerRequest.emit(target);
    }
    formValidate() {
        console.log('called formValidate');
        this.formIsValid =
            this.raumDaten.Raum.length > 0
                && this.raumExistsStatus === 0;
        console.log('called formValidate return ', this.formIsValid);
        return this.formIsValid;
    }
    showSearchForm(event) {
        console.log('called showSearchForm');
        this.raumSearching.emit(1);
        this.activeModal.close();
    }
    get gebaeudeId() {
        console.log('called get gebaeudeId() ', this.gid);
        return this.gid;
    }
    set gebaeudeId(gid) {
        console.log('called set gebaeudeId', 'param', gid, 'old-gid', this.gid);
        this.gid = gid;
    }
    checkIfRaumExists() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('check if raum exists');
            this.raumExistsStatus = -1;
            let raumExists = false;
            yield this.raumService
                .raumExists(this.gid, this.raumDaten.Raum)
                .then(exists => {
                this.raumExistsStatus = exists ? 1 : 0;
                raumExists = exists;
            });
            this.formValidate();
            console.log('check if raum exists: ', raumExists);
            return raumExists;
        });
    }
    checkIfRaumbezeichnungExists() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('check if bezeichnung exists');
            this.bezeichnungExistsStatus = -1;
            let bezeichnungExists = false;
            yield this.raumService
                .raumBezeichnungExists(this.gid, this.raumDaten.Raumbezeichnung)
                .then(exists => {
                this.bezeichnungExistsStatus = exists ? 1 : 0;
                bezeichnungExists = exists;
            });
            console.log('check if bezeichnung exists: ', bezeichnungExists);
            return bezeichnungExists;
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.formError = '';
            console.log('save raum ');
            if (this.formValidate()) {
                this.raumDaten.gid = this.gid;
                console.log('save raumdaten ', this.raumDaten);
                const result = yield this.raumService.insert(this.raumDaten);
                console.log('save raumdaten result ', result);
                if (!result.success) {
                    this.formError = 'Daten konnten nicht gespeichert werden!<br>' + result.errorMsg;
                    return false;
                }
                else {
                    this.raumCreated.emit(result.newItem);
                    this.activeModal.close();
                    return true;
                }
            }
            else {
                this.formError = 'Bitte die Angaben vervollständigen, Raum darf noch nicht vergeben sein';
            }
        });
    }
    onSubmit(event) {
        console.log('onSubmit', this.raumDaten);
        this.save();
    }
};
SelectCreateRaumComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateRaumComponent.prototype, "raumSearching", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateRaumComponent.prototype, "raumCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCreateRaumComponent.prototype, "scannerRequest", void 0);
SelectCreateRaumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-create-raum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-create-raum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-create-raum.component.scss */ "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss")).default]
    })
], SelectCreateRaumComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3Qtc2VhcmNoLWFydGlrZWwvc2VsZWN0LXNlYXJjaC1hcnRpa2VsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectSearchArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSearchArtikelComponent", function() { return SelectSearchArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






const states = [];
let SelectSearchArtikelComponent = class SelectSearchArtikelComponent {
    constructor(dataService, activeModal) {
        this.dataService = dataService;
        this.activeModal = activeModal;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.artikelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.artikelCreating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatter = (state) => state.name;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => {
            console.log('filter by term', term);
            return term.length >= 2;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => {
            console.log('map and slice artikels by term', term, 'states', states);
            return states
                .filter(item => new RegExp(term, 'mi').test(item.name))
                .slice(0, 10);
        }));
    }
    ngOnInit() {
    }
    showCreateForm(event) {
        console.log('showCreateForm');
        this.artikelCreating.emit(this.mid);
        this.activeModal.close();
    }
    onSelectItem(selected) {
        console.log(selected, selected.item);
        this.artikelSelected.emit(selected.item);
        this.activeModal.close();
    }
    get clientId() {
        return this.mid;
    }
    set clientId(mid) {
        console.log('SET gebaeudeId', 'param', mid, 'old-mid', this.mid);
        if (this.mid !== mid) {
            this.mid = mid;
            console.log('Reload Search-List');
            this.loadArtikels();
        }
    }
    loadArtikels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadArtikels');
            yield this.dataService.getArtikelListByClientId(this.mid)
                .then(items => {
                console.log('process fetched artikels', items.length);
                return items.map(artikel => {
                    const option = {
                        id: artikel.mcid,
                        mcid: artikel.mcid,
                        mcuuid: artikel.mcuuid,
                        name: artikel.Bezeichnung
                    };
                    console.log('loadArtikels push ', { artikel, option });
                    states.push(option);
                    return Object.assign({}, artikel, option);
                });
            }).then()
                .catch(err => { console.error(err); });
            if (1) {
                this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => term.length >= 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => states
                    .filter(item => new RegExp(term, 'mi').test(item.name))
                    .slice(0, 10)));
            }
        });
    }
};
SelectSearchArtikelComponent.ctorParameters = () => [
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchArtikelComponent.prototype, "artikelSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchArtikelComponent.prototype, "artikelCreating", void 0);
SelectSearchArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-search-artikel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-search-artikel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-search-artikel.component.scss */ "./src/app/invent-form/modals/select-search-artikel/select-search-artikel.component.scss")).default]
    })
], SelectSearchArtikelComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/select-search-raum/select-search-raum.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-search-raum/select-search-raum.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3Qtc2VhcmNoLXJhdW0vc2VsZWN0LXNlYXJjaC1yYXVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/invent-form/modals/select-search-raum/select-search-raum.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/invent-form/modals/select-search-raum/select-search-raum.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectSearchRaumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSearchRaumComponent", function() { return SelectSearchRaumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let raeume;
const states = [];
let SelectSearchRaumComponent = class SelectSearchRaumComponent {
    constructor(dataService, activeModal) {
        this.dataService = dataService;
        this.activeModal = activeModal;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.raumSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumCreating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatter = (state) => state.name;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => {
            console.log('filter by term', term);
            return term.length >= 2;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => {
            console.log('map and slice artikel by term', term, 'states', states);
            return states
                .filter(item => new RegExp(term, 'mi').test(item.name))
                .slice(0, 10);
        }));
    }
    ngOnInit() {
    }
    showCreateForm(event) {
        console.log('showCreateForm');
        this.raumCreating.emit(this.gid);
        this.activeModal.close();
    }
    onSelectItem(selected) {
        console.log(selected, selected.item);
        this.raumSelected.emit(selected.item);
        this.activeModal.close();
    }
    get gebaeudeId() {
        return this.gid;
    }
    set gebaeudeId(gid) {
        console.log('SET gebaeudeId', 'param', gid, 'old-gid', this.gid);
        if (this.gid !== gid) {
            this.gid = gid;
            console.log('Reload Search-List');
            this.loadRaeume();
        }
    }
    loadRaeume() {
        console.log('called loadRaeume');
        this.dataService.getRaeumeByGebaeudeId(this.gid)
            .then(raeume2 => {
            console.log('process fetched raeume', raeume2.length);
            const raeume3 = raeume2.map(raum => {
                const itm = { id: raum.rid, name: raum.Raum };
                const rOpt = Object.assign({}, itm, raum);
                states.push(rOpt);
                return rOpt;
            });
            return raeume3;
        })
            .then(raeume4 => {
            this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => term.length >= 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => raeume4
                .filter(item => new RegExp(term, 'mi').test(item.name))
                .slice(0, 10)));
        })
            .catch(err => { console.error(err); });
        if (0) {}
    }
};
SelectSearchRaumComponent.ctorParameters = () => [
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchRaumComponent.prototype, "raumSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchRaumComponent.prototype, "raumCreating", void 0);
SelectSearchRaumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-search-raum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-search-raum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-search-raum/select-search-raum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-search-raum.component.scss */ "./src/app/invent-form/modals/select-search-raum/select-search-raum.component.scss")).default]
    })
], SelectSearchRaumComponent);



/***/ }),

/***/ "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputPreview {\n  max-width: 100%;\n  max-height: calc(100vh - 200px);\n}\n\n.editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -7rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-close {\n  position: absolute;\n  top: 0.2rem;\n  right: 0.2rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctYXJ0aWtlbC1pbWFnZS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcaW52ZW50LWZvcm1cXG1vZGFsc1xcc2hvdy1hcnRpa2VsLWltYWdlXFxzaG93LWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zaG93LWFydGlrZWwtaW1hZ2Uvc2hvdy1hcnRpa2VsLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUdFLG1CQUFBO0VBR0EsYUFBQTtFQUdBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zaG93LWFydGlrZWwtaW1hZ2Uvc2hvdy1hcnRpa2VsLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lucHV0UHJldmlldyB7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgbWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG59XHJcbi5lZGl0b3Ige1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FudmFzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gIGJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE2cmVtO1xyXG4gIHotaW5kZXg6IDIwMTU7XHJcbn1cclxuXHJcbi50b29sYmFyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBib3JkZXI6MDtcclxufVxyXG5cclxuLnRvb2xiYXItY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC4ycmVtO1xyXG4gIHJpZ2h0OiAwLjJyZW07XHJcbiAgei1pbmRleDogMjAxNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1pY29uLWNpcnVsYXIge1xyXG4gIHdpZHRoOjJyZW07XHJcbiAgaGVpZ2h0OjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czoxcmVtO1xyXG59XHJcblxyXG4iLCIjaW5wdXRQcmV2aWV3IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xufVxuXG4uZWRpdG9yIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbnZhcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhbnZhcyB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm90dG9tOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAycmVtO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtN3JlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZyZW07XG4gIHotaW5kZXg6IDIwMTU7XG59XG5cbi50b29sYmFyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xufVxuXG4udG9vbGJhci1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjJyZW07XG4gIHJpZ2h0OiAwLjJyZW07XG4gIHotaW5kZXg6IDIwMTY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLWljb24tY2lydWxhciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShowArtikelImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowArtikelImageComponent", function() { return ShowArtikelImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/invent-form/data-services/images.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let ShowArtikelImageComponent = class ShowArtikelImageComponent {
    constructor(activeModal, imageService) {
        this.activeModal = activeModal;
        this.imageService = imageService;
        // Editor-Button-Icons
        this.faCrop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCropAlt"];
        this.faMove = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowsAlt"];
        this.faSearchPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearchPlus"];
        this.faSearchMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearchMinus"];
        this.faRotateLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUndo"];
        this.faRotateRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRedo"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"];
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBan"];
        this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.gcuuid = null;
        this.inputFile = null;
        this.previewEnable = false;
        this.imageUrl = null;
        this.maxWidth = 600;
        this.maxHeight = 600;
        this.error = '';
        this.config = {
            // aspectRatio : 16 / 9,
            autoCrop: false,
            dragMode: 'move',
            background: true,
            movable: true,
            rotatable: true,
            scalable: true,
            zoomable: true,
            restore: true,
            viewMode: 0,
            checkImageOrigin: true,
            cropend: this.cropEnd.bind(this),
            zoom: this.zoomed.bind(this),
            // ready: this.onCropperReady.bind(this),
            checkCrossOrigin: true,
            wheelZoomRatio: 0.1,
            toggleDragModeOnDblclick: true
        };
        this.cropStatus = 0;
    }
    ngOnInit() {
        console.log('called ShowArtikelImageComponent.ngOnInit');
    }
    setGcuuid(gcuuid) {
        console.log('called setGcuuid', this.gcuuid);
        this.gcuuid = gcuuid;
        this.loadImageByGcuuid(this.gcuuid);
    }
    loadImageByGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', gcuuid);
            if (gcuuid) {
                this.imageService.getImage(gcuuid)
                    .then(image => {
                    this.imageUrl = image.data_url;
                })
                    .catch(err => {
                    console.error(err);
                });
            }
        });
    }
    zoomed(e) {
        console.log('zoomListener Event: ', e, 'this.angularCropper: ', this.angularCropper);
        const canvasData = this.angularCropper.cropper.getCanvasData();
        const containerData = this.angularCropper.cropper.getContainerData();
        const ratio = e.detail.ratio;
        const oldRatio = e.detail.oldRatio;
        const minRatioW = containerData.width / canvasData.naturalWidth;
        const minRatioH = containerData.height / canvasData.naturalHeight;
        if (ratio < oldRatio && (ratio < minRatioW || ratio < minRatioH)) { // Zoom-Out
            e.preventDefault(); // Prevent zoom out
            return false;
        }
    }
    cropEnd(e) {
        if (['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'].indexOf(e.detail.action) !== -1) {
            this.cropStatus = 5;
        }
        else if (e.detail.action === 'move') {
            const canvasData = this.angularCropper.cropper.getCanvasData();
            const containerData = this.angularCropper.cropper.getContainerData();
            console.log('cropEnd move', { e, canvasData, containerData });
            const toLeft = canvasData.left > 0 ? 0 : canvasData.left;
            const toTop = canvasData.top > 0 ? 0 : canvasData.top;
            if (canvasData.left > 0 || canvasData.top > 0) {
                this.angularCropper.cropper.moveTo(toLeft, toTop);
            }
        }
    }
    rotateLeft() {
        this.angularCropper.cropper.rotate(-90);
    }
    rotateRight() {
        this.angularCropper.cropper.rotate(90);
    }
    rotate180() {
        this.angularCropper.cropper.rotate(180);
    }
    zoomIn() {
        const canvasData = this.angularCropper.cropper.getCanvasData();
        console.log('zoomIn ', { canvasData });
        this.angularCropper.cropper.zoom(.1);
    }
    zoomOut(useRatio) {
        const ratio = (typeof useRatio === 'undefined' || useRatio >= 0) ? -0.1 : useRatio;
        console.log('zoom( -0.1) this.angularCropper:', this.angularCropper);
        const canvasData = this.angularCropper.cropper.getCanvasData();
        const cropBoxData = this.angularCropper.cropper.getCropBoxData();
        const containerData = this.angularCropper.cropper.getContainerData();
        const cad = canvasData;
        const crd = cropBoxData;
        const cod = containerData;
        const caw = cad.width;
        const cah = cad.height;
        const crw = crd.width;
        const crh = crd.height;
        const cow = cod.width;
        const coh = cod.height;
        console.log({ ratio, caw, cah, cow, coh, crw, crh, canvasData, cropBoxData, containerData });
        if (caw < cow || cah < coh) {
            console.error('Permission denied to zoom out smaller than canvas');
            return;
        }
        console.log('Permission allowed to zoom out >= canvas');
        this.angularCropper.cropper.zoom(ratio);
    }
    escape() {
        this.imageUrl = null;
    }
    close() {
        this.escape();
        this.activeModal.close();
    }
};
ShowArtikelImageComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper', { static: false })
], ShowArtikelImageComponent.prototype, "angularCropper", void 0);
ShowArtikelImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-artikel-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-artikel-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-artikel-image.component.scss */ "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss")).default]
    })
], ShowArtikelImageComponent);



/***/ }),

/***/ "./src/app/inventory-editor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/inventory-editor.service.ts ***!
  \*********************************************/
/*! exports provided: InventoryEditorErrorCode, InventoryEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryEditorErrorCode", function() { return InventoryEditorErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryEditorService", function() { return InventoryEditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/basedata.service.ts");




var InventoryEditorErrorCode;
(function (InventoryEditorErrorCode) {
    InventoryEditorErrorCode[InventoryEditorErrorCode["NoError"] = 0] = "NoError";
    InventoryEditorErrorCode[InventoryEditorErrorCode["RaumNotFound"] = 1] = "RaumNotFound";
    InventoryEditorErrorCode[InventoryEditorErrorCode["InventarNotFound"] = 2] = "InventarNotFound";
    InventoryEditorErrorCode[InventoryEditorErrorCode["ArtikelNotFound"] = 3] = "ArtikelNotFound";
    InventoryEditorErrorCode[InventoryEditorErrorCode["ArtikelMandantNotFound"] = 4] = "ArtikelMandantNotFound";
    InventoryEditorErrorCode[InventoryEditorErrorCode["ArtikelGlobalNotFound"] = 5] = "ArtikelGlobalNotFound";
})(InventoryEditorErrorCode || (InventoryEditorErrorCode = {}));
let InventoryEditorService = class InventoryEditorService {
    constructor(dexieService, baseData) {
        this.dexieService = dexieService;
        this.baseData = baseData;
    }
    returnResultSuccess(data) {
        data = data || {};
        return {
            success: true,
            message: data.message || '',
            errorMsg: data.errorMsg || '',
            errorCode: data.errorCode || null,
        };
    }
    returnResultError(data) {
        data = data || {};
        return {
            success: false,
            message: data.message || '',
            errorMsg: data.errorMsg || '',
            errorCode: data.errorCode || null,
        };
    }
    updateInventar(invid, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    updateArtikelImage(invid, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    assignInventarToRaum(ivid, rid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const devid = this.baseData.getCurrentDeviceId();
            console.log('InventoryEditorService.assignInventarToRaum', {
                ivid,
                rid,
                jobid,
                uid,
                devid
            });
            return Promise.all([
                this.dexieService.inventar.get(ivid),
                this.dexieService.raeume.get(rid)
            ])
                .then(result => {
                const inv = result[0];
                const raum = result[1];
                console.log('InventoryEditorService.assignInventarToRaum', {
                    inv,
                    raum
                });
                if (!inv) {
                    return this.returnResultError({ errorCode: InventoryEditorErrorCode.InventarNotFound });
                }
                if (!raum) {
                    return this.returnResultError({ errorCode: InventoryEditorErrorCode.RaumNotFound });
                }
                return this.dexieService.inventar.update(inv.ivid, {
                    rid,
                    ruuid: raum.uuid,
                    jobid,
                    modified_uid: uid,
                    modified_jobid: jobid,
                    modified_device_id: devid
                }).then(() => this.returnResultSuccess());
            });
        });
    }
    undoAssignedInventarToRaum(ivid, rid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            return this.dexieService.clientChangeLog
                .where({ table: 'raeume', key: ivid, jobid })
                .filter(item => item.obj && ('rid' in item.obj) && item.obj.rid === rid)
                .last()
                .then(item => {
                if (item.type === 1 /* Create */) {
                    return this.dexieService.inventar
                        .delete(item.key)
                        .then(() => this.dexieService.clientChangeLog.delete(item.id))
                        .then(() => this.returnResultSuccess());
                }
                else if (item.type === 2 /* Update */) {
                    return this.dexieService.inventar
                        .update(ivid, item.oldObj)
                        .then((num) => {
                        if (num > 0) {
                            return this.dexieService.clientChangeLog.delete(item.id);
                        }
                        else {
                            throw new Error('Cannot undo Raum-Inventar-Zuweisung!');
                        }
                    })
                        .then(() => this.returnResultSuccess())
                        .catch((err) => this.returnResultError({ errorMsg: err }));
                }
                else {
                    return this.returnResultError();
                }
            });
        });
    }
    createKatalogArtikel(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    undoCreatedKatalogArtikel(invid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    assignArtikelToRaum(invid, rid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
};
InventoryEditorService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
InventoryEditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryEditorService);



/***/ }),

/***/ "./src/app/inventory-progress.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/inventory-progress.directive.ts ***!
  \*************************************************/
/*! exports provided: InventoryProgressDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProgressDirective", function() { return InventoryProgressDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InventoryProgressDirective = class InventoryProgressDirective {
    constructor() { }
};
InventoryProgressDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInventoryProgress]'
    })
], InventoryProgressDirective);



/***/ }),

/***/ "./src/app/inventory-progress.service.ts":
/*!***********************************************!*\
  !*** ./src/app/inventory-progress.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProgressService", function() { return InventoryProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/basedata.service.ts");




let InventoryProgressService = class InventoryProgressService {
    constructor(dexieService, baseData) {
        this.dexieService = dexieService;
        this.baseData = baseData;
    }
    getCurrentGebaeudeProgress(useGid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const gid = useGid || this.baseData.getCurrentGid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getGebaeudeProgressByGidAndJobid(gid, jobid);
        });
    }
    getGebaeudeProgressByGidAndJobid(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexieService;
            const raeume = db.raeume;
            const inventar = db.inventar;
            const progress = {
                total: 0,
                done: 0,
            };
            const ridListTmp = yield raeume.where({ gid }).toArray();
            const ridList = ridListTmp.filter((rg) => rg.gid === gid).map((rg) => rg.rid);
            const chunkSize = Math.ceil(ridList.length / 8);
            const chunks = [];
            for (let i = 0; i < ridList.length; i += chunkSize) {
                chunks.push(ridList.slice(i, i + chunkSize));
            }
            return yield Promise.all([
                inventar.where({ jobid }).count(),
                Promise.all(chunks.map((ridChunkList) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return inventar.where('rid').anyOf(ridChunkList).count(); })))
            ]).then((chunksTotalAndProgress) => {
                console.log({ chunksTotalAndProgress });
                progress.done = chunksTotalAndProgress[0];
                progress.total = chunksTotalAndProgress[1].reduce((sum, chnk) => sum + chnk, 0);
                return progress;
            });
        });
    }
    getCurrentRaumProgress(useRid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rid = useRid || this.baseData.getCurrentRid();
            const jobid = this.baseData.getCurrentJobid();
            console.log('getCurrentRaumProgress calls getRaumProgressByRidAndJobid', { rid, jobid });
            return this.getRaumProgressByRidAndJobid(rid, jobid);
        });
    }
    getRaumProgressByRidAndJobid(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const progress = {
                total: 0,
                done: 0,
            };
            yield Promise.all([
                this.dexieService.inventar.where({ rid }).count(),
                this.dexieService.inventar.where({ rid }).and(itm => itm.jobid === jobid).count()
            ]).then(totalAndProgress => {
                progress.total = totalAndProgress[0];
                progress.done = totalAndProgress[1];
            });
            console.log('called getRaumProgressByRidAndJobid', { rid, jobid, progress });
            return progress;
        });
    }
    getCurrentRaumInventarFound(useRid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rid = useRid || this.baseData.getCurrentRid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getRaumInventarFoundByRidAndJobid(rid, jobid);
        });
    }
    getRaumInventarFoundByRidAndJobid(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.inventar.where({ rid, jobid }).toArray();
        });
    }
    getCurrentRaumInventarNotFound(useRid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rid = useRid || this.baseData.getCurrentRid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getRaumInventarNotFoundByRidAndJobid(rid, jobid);
        });
    }
    getRaumInventarNotFoundByRidAndJobid(rid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.inventar.where({ rid }).and(item => item.jobid !== jobid).toArray();
        });
    }
    getCurrentGebaeudeRaeumeFinished(useGid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const gid = useGid || this.baseData.getCurrentGid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getGebaeudeRaeumeFinishedByGidAndJobid(gid, jobid);
        });
    }
    getGebaeudeRaeumeFinishedByGidAndJobid(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.raeume
                .where({ gid })
                .and(itm => itm.current_jobid === jobid && itm.current_jobstatus === 2)
                .toArray();
        });
    }
    getCurrentGebaeudeRaeumeNotFinished(useGid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const gid = useGid || this.baseData.getCurrentGid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getGebaeudeRaeumeNotFinishedByGidAndJobid(gid, jobid);
        });
    }
    getGebaeudeRaeumeNotFinishedByGidAndJobid(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.raeume
                .where({ gid })
                .and(itm => itm.current_jobid !== jobid || itm.current_jobstatus !== 2)
                .toArray();
        });
    }
};
InventoryProgressService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
InventoryProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryProgressService);



/***/ }),

/***/ "./src/app/inventory/components/dbsync/dbsync.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/inventory/components/dbsync/dbsync.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL2Ric3luYy9kYnN5bmMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/inventory/components/dbsync/dbsync.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/inventory/components/dbsync/dbsync.component.ts ***!
  \*****************************************************************/
/*! exports provided: DbsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbsyncComponent", function() { return DbsyncComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dbsync-client.service */ "./src/app/dbsync-client.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let DbsyncComponent = class DbsyncComponent {
    constructor(dbsyncClient, baseData) {
        this.dbsyncClient = dbsyncClient;
        this.baseData = baseData;
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSync"];
        this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSyncAlt"];
        this.syncInProcess = true;
    }
    ngOnInit() {
        this.jobid = this.baseData.getCurrentJobid();
        this.syncJobid = this.jobid;
        this.currInventur = this.baseData.getCurrentInventur();
        this.deviceId = this.baseData.getCurrentDeviceId();
        this.currUser = this.baseData.getCurrentUser();
        this.syncUid = this.baseData.getCurrentUid();
        this.syncDevid = this.baseData.getCurrentDeviceId();
        this.currProcess = this.dbsyncClient.getProcessByJobId(this.jobid);
        console.log({
            method: 'ngOnInit',
            syncUid: this.syncUid,
            syncUser: this.baseData.getCurrentUser(),
            syncDevid: this.syncDevid,
            syncStatus: this.syncStatus,
            syncFinished: this.syncFinished
        });
        this.checkForUnsyncedChanges();
        if (this.currProcess) {
            this.syncInProcess = !this.currProcess.finished;
            this.syncJobid = this.currProcess.jobid;
            this.syncStatus = this.currProcess.getStatus();
            this.syncStatusName = this.currProcess.getStatusName();
            this.syncErrorMsg = this.currProcess.errorMsg;
            this.syncFinished = this.currProcess.finished;
            this.syncDuration = this.currProcess.duration;
            this.syncDurFormatted = this.currProcess.durationFormatted;
            console.log('Synchronisierung läuft ...', { proc: this.currProcess });
        }
        else {
            console.log('Synchronisierung läuft nicht ...');
            this.syncStatus = _dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__["SyncJobStatus"].Init;
            this.syncFinished = true;
            this.syncInProcess = false;
        }
        this.dbsyncClient.processStarted.subscribe((proc) => {
            console.log('Gestarted: Synchronisierung für Inventur mit JobId ' + proc.jobid, { proc });
            if (proc.jobid === this.syncJobid) {
                this.syncInProcess = !proc.finished;
            }
        });
        this.dbsyncClient.processFinished.subscribe((proc) => {
            console.log('Beendet: Synchronisierung für Inventur mit JobId ' + proc.jobid, { proc });
            if (proc.jobid === this.syncJobid) {
                this.syncInProcess = !proc.finished;
            }
        });
    }
    checkForUnsyncedChanges() {
        this.dbsyncClient.numUnsyncedChangeLogsByJobId(this.jobid).then(num => {
            this.numUnsyncedChanges = num;
        });
    }
    syncCurrJob() {
        if (typeof this.syncJobid === 'number') {
            console.log('called syncCurrJob, call syncStart(' + this.syncJobid + ')');
            this.syncStart(this.syncJobid);
        }
        else {
            console.error('syncJobid is not defined');
        }
    }
    syncStart(jobid) {
        console.log('called syncStart, call dbsyncClient.syncJob(' + jobid + ')');
        const sync = this.dbsyncClient.syncJob(jobid);
        sync.then((proc) => {
            proc.statusChanged.subscribe((status) => {
                this.syncJobid = proc.jobid;
                this.syncStatus = proc.getStatus();
                this.syncStatusName = proc.getStatusName();
                this.syncErrorMsg = this.currProcess.errorMsg;
                this.syncFinished = this.currProcess.finished;
                this.syncDuration = this.currProcess.duration;
                this.syncDurFormatted = this.currProcess.durationFormatted;
                console.log('Process-Status has changed', { proc });
                this.syncInProcess = !proc.finished;
            });
        });
    }
};
DbsyncComponent.ctorParameters = () => [
    { type: _dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__["DBSyncClientService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
DbsyncComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbsync',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbsync.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/dbsync/dbsync.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbsync.component.scss */ "./src/app/inventory/components/dbsync/dbsync.component.scss")).default]
    })
], DbsyncComponent);



/***/ }),

/***/ "./src/app/inventory/components/progressbar/progressbar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory/components/progressbar/progressbar.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n  position: relative;\n}\n\n.progress-text {\n  position: absolute;\n  top: 0;\n  left: calc(50% - 1rem);\n  color: #fff;\n  line-height: calc(1.5em + 0.75rem + 2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGludmVudG9yeVxcY29tcG9uZW50c1xccHJvZ3Jlc3NiYXJcXHByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XHJcbiAgaGVpZ2h0OmNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy10ZXh0e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMXJlbSk7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBsaW5lLWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG59XHJcbiIsIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcy10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMXJlbSk7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/inventory/components/progressbar/progressbar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/inventory/components/progressbar/progressbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressbarComponent = class ProgressbarComponent {
    constructor() {
        this.title = 'Fortschrittsanzeige';
        this.shortTitle = '';
        this.type = 'success';
        this.restType = 'danger';
        this.value = 0;
        this.total = 0;
        this.sendDoneClick = false;
        this.sendRestClick = false;
        this.clickedDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickedRest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get short() {
        return this.shortTitle ? this.shortTitle : this.title;
    }
    get progressAmount() {
        return !this.value
            ? 0
            : (!this.total
                ? 50
                : Math.round(this.value * 1000 / this.total) / 10);
    }
    get progressRest() {
        return 100 - this.progressAmount;
    }
    get rest() {
        return Math.min(0, this.total - this.value);
    }
    get doneText() {
        return this.doneAmountText + this.donePercentText;
    }
    get doneAmountText() {
        return this.value + ' Stk';
    }
    get donePercentText() {
        return !this.total || this.total === 100 ? '' : ' (' + this.progressAmount + '%)';
    }
    get totalText() {
        return (this.total ? this.total.toString() : '??') + ' Stk';
    }
    get restText() {
        return (!this.total
            ? '??'
            : (this.total - this.value) + ' Stk' + (!this.total || this.total === 100
                ? ''
                : ' (' + this.progressRest + '%)'));
    }
    get restAmountText() {
        return this.total ? '' + Math.max(0, this.total - this.value) + 'Stk' : '';
    }
    get restPercentText() {
        return this.total ? '' + this.progressRest + '%' : '';
    }
    ngOnInit() {
    }
    onClickDone(e) {
        console.log('onClickDone', { e });
        this.clickedDone.emit(e);
    }
    onClickBarDone(e) {
        e.stopPropagation();
        this.onClickDone(e);
    }
    onClickRest(e) {
        console.log('onClickRest', { e });
        this.clickedRest.emit(e);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "shortTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "restType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "sendDoneClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressbarComponent.prototype, "sendRestClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProgressbarComponent.prototype, "clickedDone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProgressbarComponent.prototype, "clickedRest", void 0);
ProgressbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progressbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progressbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progressbar.component.scss */ "./src/app/inventory/components/progressbar/progressbar.component.scss")).default]
    })
], ProgressbarComponent);



/***/ }),

/***/ "./src/app/inventory/components/scannerdetection/scannerdetection.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/inventory/components/scannerdetection/scannerdetection.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL3NjYW5uZXJkZXRlY3Rpb24vc2Nhbm5lcmRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/inventory/components/scannerdetection/scannerdetection.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/inventory/components/scannerdetection/scannerdetection.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ScannerdetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerdetectionComponent", function() { return ScannerdetectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScannerdetectionComponent = class ScannerdetectionComponent {
    constructor() {
        this.input = '';
        this.lastKeyEventTime = 0;
        this.lastTimer = null;
        this.lastTimerTime = null;
        this.detectorConfig = {
            minLength: 5,
            maxLength: 32,
            scannerStartsWith: '',
            scannerEndsWith: '',
            scanTimeout: 100,
            ignoreChars: '',
            ignoreEndsWith: true,
            ignoreOverElements: ['INPUT'],
            barcodeType: 'code128'
        };
        this.scanned = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set config(input) {
        this.detectorConfig = Object.assign(this.detectorConfig, input);
    }
    onKeyUp(event, useTarget) {
        console.log('scannerDetection onKeyUp');
        if (!useTarget || (useTarget instanceof HTMLElement)) {
            return false;
        }
        const target = useTarget;
        const targetTagName = target.tagName;
        const targetElementId = target.id;
        const targetClassName = target.className;
        const ignoreElements = this.detectorConfig.ignoreOverElements;
        let emitScanData = true;
        const ignoreTagNames = ignoreElements
            .filter(name => !name.startsWith('.') && !name.startsWith('#'))
            .map(name => name.toUpperCase());
        const ignoreElementIds = ignoreElements
            .filter(name => name.startsWith('#'))
            .map(name => name.substr(1));
        const ignoreClassNames = ignoreElements
            .filter(name => name.startsWith('.'))
            .map(name => name.substr(1));
        if (ignoreElementIds.indexOf(targetElementId) !== -1) {
            emitScanData = false;
        }
        if (ignoreClassNames.indexOf(targetClassName) !== -1) {
            emitScanData = false;
        }
        if (ignoreTagNames.indexOf(targetTagName) !== -1) {
            emitScanData = false;
        }
        const now = Date.now();
        const diff = now - this.lastKeyEventTime;
        const isScanInput = diff > this.detectorConfig.scanTimeout;
        const key = event.key;
        const code = event.code;
        const isCtrlKey = event.ctrlKey;
        if (!isScanInput) {
            this.input = key;
            console.log('#70 scannerDetection nochKeinScannerStream oder Start, input', this.input);
        }
        else {
            if (key.length === 1) {
                this.input += key;
                console.log('#74 scannerDetection verarbeite scannerStream, input', this.input);
            }
            else {
                const barcode = this.input;
                console.log('#77 scannerDetection verpacke scannerStream, input', this.input);
                this.input = '';
                if (this.lastTimer) {
                    clearTimeout(this.lastTimer);
                }
                console.log('#82 scannerDetection emit scannerStream, input', this.input);
                if (emitScanData) {
                    this.scanned.emit({
                        barcode,
                        length: barcode.length,
                        valid: true,
                        target
                    });
                }
                return;
            }
        }
        if (this.lastTimer && now - this.lastTimerTime < this.detectorConfig.scanTimeout) {
            console.log('#93 scannerDetection setTimeout wurde bereits gestartet', this.lastTimerTime);
            return;
        }
        console.log('#97 scannerDetection');
        this.lastTimerTime = now;
        this.lastTimer = setTimeout(() => {
            console.log('#100 scannerDetection');
            const barcode = this.input;
            if (barcode.length > 7) {
                console.log('#103 scannerDetection');
                this.scanned.emit({
                    barcode,
                    length: barcode.length,
                    valid: true
                });
            }
        }, this.detectorConfig.scanTimeout);
        console.log('#111 scannerDetection LAST-LINE');
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScannerdetectionComponent.prototype, "config", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScannerdetectionComponent.prototype, "scanned", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event', '$event.target'])
], ScannerdetectionComponent.prototype, "onKeyUp", null);
ScannerdetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scannerdetection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scannerdetection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/scannerdetection/scannerdetection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scannerdetection.component.scss */ "./src/app/inventory/components/scannerdetection/scannerdetection.component.scss")).default]
    })
], ScannerdetectionComponent);



/***/ }),

/***/ "./src/app/inventory/components/settings/settings.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/inventory/components/settings/settings.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/inventory/components/settings/settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/inventory/components/settings/settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/variables.service */ "./src/app/inventory/service/variables.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../invent-form/data-services/barcode.service */ "./src/app/invent-form/data-services/barcode.service.ts");





let SettingsComponent = class SettingsComponent {
    constructor(variables, baseData, barcodeLookup) {
        this.variables = variables;
        this.baseData = baseData;
        this.barcodeLookup = barcodeLookup;
        this.variableList = [];
        this.buildBcLookup = false;
    }
    ngOnInit() {
        this.reloadVariableList();
    }
    reloadVariableList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.variableList = yield this.variables.getAll();
        });
    }
    reIndexBarcodeLookup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.buildBcLookup = true;
            this.barcodeLookup.rebuildOnRunningSystem().then((result) => {
                console.log('Finished BC-Lookup-Rebuild', { result });
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                this.buildBcLookup = false;
            });
            this.reloadVariableList();
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _service_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__["BarcodeService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/inventory/components/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/inventory/service/data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/inventory/service/data.service.ts ***!
  \***************************************************/
/*! exports provided: InventarDataResultError, JoinResultType, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarDataResultError", function() { return InventarDataResultError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinResultType", function() { return JoinResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../connection-service.service */ "./src/app/connection-service.service.ts");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables.service */ "./src/app/inventory/service/variables.service.ts");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");







var InventarDataResultError;
(function (InventarDataResultError) {
    InventarDataResultError[InventarDataResultError["InventarNotFound"] = 1] = "InventarNotFound";
    InventarDataResultError[InventarDataResultError["ArtikelRefNotFound"] = 2] = "ArtikelRefNotFound";
    InventarDataResultError[InventarDataResultError["ArtikelDataNotFound"] = 3] = "ArtikelDataNotFound";
})(InventarDataResultError || (InventarDataResultError = {}));
var JoinResultType;
(function (JoinResultType) {
    JoinResultType[JoinResultType["List"] = 0] = "List";
    JoinResultType[JoinResultType["First"] = 1] = "First";
    JoinResultType[JoinResultType["Count"] = 2] = "Count";
})(JoinResultType || (JoinResultType = {}));
let DataService = class DataService {
    constructor(api, dexie, connectionService, settingsService) {
        this.api = api;
        this.dexie = dexie;
        this.connectionService = connectionService;
        this.settingsService = settingsService;
        this.lastLoadFailed = false;
        this.currentState = connectionService.getCurrentState();
        this.connectionService.monitor().subscribe((currentState) => {
            console.log('#43 DataService network status has changed', { currentState });
            this.currentState = currentState;
        });
    }
    getSelectedRoom() {
    }
    getUserAssignedInventories(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#52 getUserAssignedInventories loadUserAssignedInventories');
            let userInventuren = [];
            if (this.currentState.hasInternetAccess) {
                console.log('#56 getUserAssignedInventories loadUserAssignedInventories');
                yield this.loadUserAssignedInventories();
            }
            else {
                console.log('#59 getUserAssignedInventories no InternetAccess. Cannot call loadUserAssignedInventories', { 'this.currentState': this.currentState, 'this.currentState.hasInternetAccess': this.currentState.hasInternetAccess });
                return null;
            }
            yield Promise.all([
                this.dexie.inventuren.toArray(),
                this.dexie.inventurenUser.where('uid').equals(uid).toArray()
            ]).then((results) => {
                const inv = results[0];
                const jobids = results[1].map((itm) => itm.jobid);
                userInventuren = inv.filter((itm) => jobids.indexOf(itm.jobid) !== -1);
                console.log('#72 getUserAssignedInventories', { inv, jobids, userInventuren });
            });
            return userInventuren;
        });
    }
    loadInventurSelection() {
    }
    loadUserAssignedInventories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const api = this.api;
            db.stopClientLogForServerLoad = true;
            // jobidsByAuthUser
            return yield Promise
                .all([
                api.get('auth/me').toPromise(),
                api.get('api/inventur/jobidsByAuthUser').toPromise(),
                api.get('api/inventur/clientsByAuthUser').toPromise()
                    .then(list => Promise.all(list.map((item) => db.mandanten.put(item)))),
                api.get('api/inventur/gebaeudeByAuthUser').toPromise()
                    .then(list => Promise.all(list.map((item) => db.gebaeude.put(item)))),
                api.get('api/inventur/listByAuthUser').toPromise()
                    .then(list => Promise.all(list.map((item) => db.inventuren.put(item))))
            ])
                .then((results) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const authUser = results[0];
                const invUser = results[1];
                const mandantenRslt = results[2];
                const gebaeudeRslt = results[3];
                const inventurenRslt = results[4];
                console.log({ results });
                const del = yield db.inventurenUser.where('uid').equals(authUser.id).delete();
                yield invUser.map((item) => db.inventurenUser.add(item));
                console.log('Finished loading user-inventories');
                return true;
            }))
                .finally(() => {
                db.stopClientLogForServerLoad = false;
            });
        });
    }
    loadClientList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.api
                .get('api/mandant')
                .subscribe((list) => {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                this.dexie.stopClientLogForServerLoad = true;
                const asyncJobs = [];
                asyncJobs.push(this.dexie.mandanten.clear());
                list.forEach((item) => {
                    console.log({ called: 'loadClientList', item });
                    asyncJobs.push(this.dexie.mandanten.put(item));
                });
                Promise.all(asyncJobs).finally(() => { this.dexie.stopClientLogForServerLoad = false; });
            });
        });
    }
    loadGebaeudeListByClientId(mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api
                .get('api/mandant/' + mid + '/gebaeude')
                .subscribe((list) => {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                this.dexie.stopClientLogForServerLoad = true;
                this.dexie.gebaeude.where('mid').equals(mid)
                    .delete()
                    .then(() => {
                    return list.map((item) => {
                        console.log({ called: 'loadGebaeudeList', item });
                        return this.dexie.gebaeude.put(item);
                    });
                })
                    .finally(() => {
                    this.dexie.stopClientLogForServerLoad = false;
                });
            });
            return true;
        });
    }
    loadRaeumeListByGebaeudeId(gid) {
        this.api.get('api/gebaeude/' + gid + '/raeume').subscribe((list) => {
            console.log('SelectInventoryComponent', 'loadClientList', { list });
            this.dexie.stopClientLogForServerLoad = true;
            this.dexie.raeume
                .where('gid').equals(gid)
                .delete()
                .then((nr) => list.map((item) => {
                console.log({ called: 'loadClientList', item });
                return this.dexie.raeume.put(item);
            }))
                .finally(() => {
                this.dexie.stopClientLogForServerLoad = false;
            });
        });
    }
    loadInventar(gid) {
        this.api.get('api/gebaeude/' + gid + '/raeume').subscribe((list) => {
            console.log('SelectInventoryComponent', 'loadClientList', { list });
            this.dexie.stopClientLogForServerLoad = true;
            return this.dexie.raeume.where('gid').equals(gid)
                .delete()
                .then((nr) => {
                return list.map((item) => {
                    console.log({ called: 'loadClientList', item });
                    return this.dexie.raeume.put(item);
                });
            })
                .finally(() => {
                this.dexie.stopClientLogForServerLoad = false;
            });
        });
    }
    loadInventurDataByInventurId(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const tables = {
                gebaeude: 'pending',
                raeume: 'pending',
                hersteller: 'pending',
                images: 'pending',
                inventar: 'pending',
                objektkatalogglobal: 'pending',
                objektkatalogmandant: 'pending',
                objektbuchBarcodesLookup: 'pending'
            };
            const tblStatus = (table, status) => {
                tables[table] = status;
                console.log(tables);
            };
            this.dexie.stopClientLogForServerLoad = true;
            return yield Promise
                .all([
                this.loadTableDataByUrl('gebaeude', `api/inventur/${id}/gebaeude`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('raeume', `api/inventur/${id}/raeume`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('hersteller', `api/inventur/${id}/hersteller`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('images', `api/inventur/${id}/images`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('inventar', `api/inventur/${id}/inventar`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('objektKatalogGlobal', `api/inventur/${id}/katalog`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('objektKatalogMandant', `api/inventur/${id}/artikelids`, tblStatus, { jobid: id }),
                this.loadTableDataByUrl('objektbuchBarcodesLookup', `api/inventur/${id}/objektbuchLookup`, tblStatus, { jobid: id })
            ])
                .finally(() => {
                this.dexie.stopClientLogForServerLoad = false;
            });
        });
    }
    loadTableDataByUrl(table, url, cbTblStatus, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (cbTblStatus) {
                cbTblStatus(table, 'downloading');
            }
            const jobid = options.jobid;
            const lastLoadAttempt = `${table}-${jobid}-download-attempt`;
            const lastLoadSuccess = `${table}-${jobid}-download-success`;
            const lastLoadEntries = `${table}-${jobid}-download-entries`;
            this.settingsService.set(lastLoadAttempt, new Date());
            console.log({ function: 'loadTableDataByUrl', table, url, cbTblStatus, options });
            let inserts = 0;
            let total = 0;
            return yield this.api.get(url).toPromise()
                .then((data) => {
                console.log('Retrieved Data ', table, ' for processing!');
                this.settingsService.set(lastLoadSuccess, new Date());
                this.settingsService.set(lastLoadEntries, data.rows.length);
                if (cbTblStatus) {
                    cbTblStatus(table, 'process import ' + data.rows.length);
                    cbTblStatus(table, 'total: ' + data.rows.length);
                }
                inserts = 0;
                total = data.rows.length;
                const stepSize = parseInt((data.rows.length / 10).toString(), 10);
                const asyncJobs = data.rows.map((item, i) => {
                    if (table === 'raeume') {
                        console.log({ called: 'load item' + table, item });
                    }
                    if (((i + 1) % stepSize === 0 || (i + 1) === total) && cbTblStatus) {
                        cbTblStatus(table, i + 1);
                    }
                    return this.dexie.table(table).put(item).then(() => {
                        inserts += 1;
                        return true;
                    });
                });
                return asyncJobs;
            })
                .then(() => {
                if (cbTblStatus) {
                    cbTblStatus(table, 'finished');
                }
                console.log('Finished Importprocess Data ', table);
                return {
                    success: true,
                    errorMsg: '',
                    total,
                    inserts
                };
            });
        });
    }
    getClient(clientID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const clients = yield this.getClientList();
            const fclients = clients.filter(client => client.mid === clientID);
            console.log({ clientID, clients, fclients });
            return fclients.length ? fclients[0] : null;
        });
    }
    getBuilding(bldgID, clientID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const bldgs = yield this.getBuildingList(clientID);
            const fbldgs = bldgs.filter(bldg => bldg.gid === bldgID);
            console.log({ bldgID, clientID, bldgs, fbldgs });
            return fbldgs.length ? fbldgs[0] : null;
        });
    }
    getClientList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.dexie.mandanten.toArray();
        });
    }
    getFullArtikelData(link, globalData) {
        return Object.assign({}, link, globalData);
    }
    getFullRaumData(raum, gebaeude) {
        const raumGebaeudeData = Object.assign({}, raum, gebaeude);
        return raumGebaeudeData;
    }
    getArtikelRefByGcuuidMid(gcuuid, mid) {
        return this.dexie.objektKatalogMandant.where({ gcuuid, mid }).first();
    }
    getArtikelRef(mcid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogMandant.get(mcid);
        });
    }
    getArtikelData(gcid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogGlobal.get(gcid);
        });
    }
    getArtikel(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelLink = yield this.dexie.objektKatalogMandant.get({ mcid: id });
            const artikelData = yield this.dexie.objektKatalogGlobal.get({ gcid: artikelLink.gcid });
            console.log('getArtikel by id', { id, artikelLink, artikelData });
            return this.getFullArtikelData(artikelLink, artikelData);
        });
    }
    getArtikelRefAndData(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelRef = yield this.dexie.objektKatalogMandant.get({ mcid: id });
            const artikelData = yield this.dexie.objektKatalogGlobal.get({ gcid: artikelRef.gcid });
            return {
                artikelRef,
                artikelData
            };
        });
    }
    getInventarRef(ivid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.inventar.get(ivid);
        });
    }
    getInventarData(ivid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarRef = yield this.dexie.inventar.get(ivid);
            if (!inventarRef) {
                return { success: false, errorCode: InventarDataResultError.InventarNotFound };
            }
            const artikelRef = yield this.dexie.objektKatalogMandant.get(inventarRef.mcid);
            if (!artikelRef) {
                return { success: false, errorCode: InventarDataResultError.ArtikelRefNotFound };
            }
            const artikelData = yield this.dexie.objektKatalogGlobal.get(artikelRef.gcid);
            if (!artikelData) {
                return { success: false, errorCode: InventarDataResultError.ArtikelDataNotFound };
            }
            return {
                success: true,
                inventarData: {
                    inventar: inventarRef,
                    artikelRef,
                    artikelData
                }
            };
        });
    }
    getRaumAndGebaeude(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('getRaum by id', id);
            const raum = yield this.dexie.raeume.get(id);
            if (raum) {
                const gebaeude = yield this.dexie.gebaeude.get(raum.gid);
                return {
                    raum,
                    gebaeude
                };
            }
            return null;
        });
    }
    getRaum(id) {
        console.log('getRaum by id', id);
        let raum;
        return this.dexie.raeume.get({ rid: id })
            .then((data) => {
            raum = data;
            const gid = raum.gid;
            return this.dexie.gebaeude.get({ gid });
        })
            .then((gebaeude) => this.getFullRaumData(raum, gebaeude));
    }
    getRaeumeByGebaeudeId(gid) {
        console.log('Search in rooms by gid', gid);
        return this.dexie.raeume.where({ gid }).toArray();
    }
    getArtikelListByClientId(mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Search in Global Katalog by mid', mid);
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where({ mid }).toArray();
            const artikelData = yield Promise.all(artikelRefs.map((ref) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return this.dexie.objektKatalogGlobal.get(ref.gcid); })));
            return artikelRefs.map((ref, i) => (Object.assign({}, artikelData[i], ref, { mcuuid: ref.uuid })));
        });
    }
    barcodeLookup(barcode, mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#364 barcodeLookup', { barcode, mid });
            const lookupInventar = yield this.getInventarByBarcode(barcode, mid);
            if (lookupInventar.type === _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Inventar) {
                return lookupInventar;
            }
            // Otherwise return the Result of Raum-Lookup
            const lookupRaum = yield this.getRaumByBarcode(barcode, mid);
            if (lookupRaum.type === _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Raum) {
                return lookupRaum;
            }
            const lookupArtikel = yield this.getArtikelByBarcode(barcode, mid);
            if ('type' in lookupArtikel && lookupArtikel.type === _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].ObjektBuchArtikel) {
                return lookupArtikel;
            }
            console.error('Barcode-Lookup erzielte kein Match für: ', { barcode, mid });
            return { type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
        });
    }
    getInventarByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            console.log('#380 barcodeLookup in inventar', { barcode, useMid });
            const inventarMatches = yield db.inventar
                .where({ code: barcode })
                .toArray();
            console.log('#383 barcodeLookup in inventar', { inventarMatches });
            for (const inventar of inventarMatches) {
                const artikelRef = yield db.objektKatalogMandant.get(inventar.mcid);
                console.log('#387 barcodeLookup in inventar', { artikelRef });
                if (!useMid || artikelRef.mid === useMid) {
                    const artikelData = yield db.objektKatalogGlobal.get(artikelRef.gcid);
                    console.log('#389 barcodeLookup in inventar', { artikelData });
                    return {
                        type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Inventar,
                        inventar,
                        artikelRef,
                        artikelData
                    };
                }
            }
            console.log('#398 barcodeLookup in inventar', 'No-Match');
            return {
                type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch
            };
        });
    }
    getRaumByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            console.log('#412 barcodeLookup in raeume', { barcode, useMid });
            const raumMatch = yield db.raeume.where({ code: barcode }).first();
            if (raumMatch) {
                const gebaeude = yield db.gebaeude.get(raumMatch.gid);
                return {
                    type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Raum,
                    raum: raumMatch,
                    gebaeude
                };
            }
            console.log('#232 barcodeLookup NOT FOUND', { barcode, useMid });
            return { type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
        });
    }
    getArtikelByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            console.log('#517 barcodeLookup in Objektbuch', { barcode, useMid });
            const listArtikelData = yield db.objektKatalogGlobal.where({ code: barcode }).toArray();
            if (listArtikelData.length === 0) {
                console.log('#521 barcodeLookup in Objektbuch NOT FOUND', { barcode, useMid });
                return { type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
            }
            return db.objektKatalogMandant.where('gcid')
                .anyOf(listArtikelData.map((d) => d.gcid))
                .filter((d) => !useMid || d.mid === useMid)
                .toArray()
                .then((refs) => {
                if (refs.length === 0) {
                    console.log('#531 barcodeLookup im Mandanten-Objektbuch NOT FOUND', { barcode, useMid });
                    return { type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
                }
                if (refs.length === 1) {
                    return {
                        type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].ObjektBuchArtikel,
                        artikelRef: refs[0],
                        artikelData: listArtikelData.find(itm => itm.gcid === refs[0].gcid)
                    };
                }
                return refs.map(artikelRef => {
                    return {
                        type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].ObjektBuchArtikel,
                        artikelRef,
                        artikelData: listArtikelData.find(itm => itm.gcid === artikelRef.gcid)
                    };
                });
            });
        });
    }
    getBuildingList(clientID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const list = yield this.dexie.gebaeude.where({ mid: clientID }).toArray();
            console.log('#336 async getBuildingList', list);
            return list;
        });
    }
    joinsToStrictFormat(joins, parent) {
        const db = this.dexie;
        const f = Object.assign({}, joins);
        if (typeof f.table === 'string') {
            f.table = db.table(f.table);
        }
        if (!f.alias) {
            f.alias = f.table.name;
        }
        if (parent) {
            const pTable = parent.table;
            const fKey = f.table.schema.primKey.keyPath;
            const pKey = pTable.schema.primKey.keyPath;
            const fIndexes = f.table.schema.indexes;
            const pIndexes = pTable.schema.indexes;
            if (!f.key && !f.parentKey) {
                if (pIndexes.find((idx) => JSON.stringify(idx.keyPath) === JSON.stringify(fKey))) {
                    f.key = fKey;
                    f.parentKey = fKey;
                }
                else if (fIndexes.find((idx) => JSON.stringify(idx.keyPath) === JSON.stringify(pKey))) {
                    f.key = pKey;
                    f.parentKey = pKey;
                }
            }
            else if (!f.key) {
                if (fIndexes.find((idx) => JSON.stringify(idx.keyPath) === JSON.stringify(f.parentKey))) {
                    f.key = f.parentKey;
                }
            }
            else if (!f.parentKey) {
                if (pIndexes.find((idx) => JSON.stringify(idx.keyPath) === JSON.stringify(f.key))) {
                    f.parentKey = f.key;
                }
            }
        }
        if (f.joins && Array.isArray(f.joins)) {
            f.joins = f.joins.map((jn) => this.joinsToStrictFormat(jn, f));
        }
        return f;
    }
    joinieTables(join) {
        let tables = [join.table];
        if (join.joins) {
            join.joins.forEach((jn) => tables = tables.concat(this.joinieTables(jn)));
        }
        return tables;
    }
    joinie(flexJoins) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const joins = this.joinsToStrictFormat(flexJoins);
            const db = this.dexie;
            const Promise = dexie__WEBPACK_IMPORTED_MODULE_6__["default"].Promise;
            const tables = this.joinieTables(joins);
            const debugConsole = console;
            const debugJoinie = false;
            const logDebug = (...args) => {
                if (debugJoinie) {
                    if ('debug' in debugConsole) {
                        debugConsole.debug.apply(debugConsole, arguments);
                    }
                    else if ('log' in debugConsole) {
                        debugConsole.log.apply(debugConsole, arguments);
                    }
                }
            };
            logDebug('found Tables in recursive join', tables);
            const fullRslt = [];
            return db.transaction('r', tables, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let coll;
                if (joins.where) {
                    logDebug('Create collection with where Query:', joins.where);
                    coll = joins.table.where(joins.where);
                }
                else {
                    logDebug('Create collection from table:', joins.table.name);
                    coll = joins.table.toCollection();
                }
                logDebug('#706');
                if (!joins.joins || !joins.joins.length) {
                    logDebug('#709');
                    return coll;
                }
                const recursiveRelationshipMapper = (parent, subJoins, deep) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (!subJoins || subJoins.length === 0) {
                        logDebug('#714');
                        return true;
                    }
                    for (const join of subJoins) {
                        const references = {};
                        const resultType = !('resultType' in join) ? JoinResultType.List : join.resultType;
                        const filterKeysBeforeJoin = !join.where ? [] : Object.keys(join.where);
                        const filter = !filterKeysBeforeJoin.length
                            ? null
                            : (obj) => {
                                for (const k of filterKeysBeforeJoin) {
                                    if (obj[k] !== join.where[k]) {
                                        return false;
                                    }
                                }
                                return true;
                            };
                        if (!Array.isArray(join.key) && !Array.isArray(join.parentKey)) {
                            references[join.key] = parent[join.parentKey];
                        }
                        else if (Array.isArray(join.key) && Array.isArray(join.key) && join.key.length === join.parentKey.length) {
                            join.key.forEach((k, i) => {
                                references[k] = parent[join.parentKey[i]];
                            });
                        }
                        logDebug('#738');
                        const hasNullKeys = Object.values(references).length !== Object.values(references).filter(k => {
                            const isValid = !(k === 0 || k === '' || k === null || k === undefined || typeof k === 'undefined');
                            logDebug('#741', { k, isValid });
                            return isValid;
                        }).length;
                        if (hasNullKeys) {
                            logDebug('#745 Abort Join-Query with Null-Keys on Leading Table: ', { where: references, obj: parent,
                                joinTable: join.table });
                            return false;
                        }
                        logDebug('#738 query join with references', { hasNullKeys, references });
                        if (resultType === JoinResultType.Count) {
                            parent[join.alias] = yield join.table.where(references).count();
                            return true;
                        }
                        else if (resultType === JoinResultType.First) {
                            parent[join.alias] = yield join.table.where(references).first();
                            return true;
                        }
                        yield join.table.where(references).each(subItm => {
                            logDebug('#750');
                            // Possibility to remove Item before executing Join-Queries
                            if (filter && !filter(subItm)) {
                                logDebug('#753 removed item');
                                return;
                            }
                            recursiveRelationshipMapper(subItm, join.joins || [], deep + 1).then((b) => {
                                logDebug('#758');
                                if (((join.alias in parent) && parent[join.alias]) && (join.multi === false
                                    || (!isNaN(join.limit)
                                        && (isNaN(join.offset) || join.offset === 0)
                                        && !join.sort
                                        && Array.isArray(parent[join.alias])
                                        && (join.limit <= parent[join.alias].length)))) {
                                    logDebug('#768');
                                    return;
                                }
                                if (join.filter && !join.filter(subItm)) {
                                    logDebug('#772');
                                    return; // Nothing
                                }
                                if (join.map) {
                                    logDebug('#777');
                                    join.map(subItm);
                                }
                                if (!parent[join.alias]) {
                                    logDebug('#782');
                                    parent[join.alias] = (('multi' in join) && join.multi === true) ? [subItm] : subItm;
                                }
                                else if (!Array.isArray(parent[join.alias])) {
                                    logDebug('#785');
                                    parent[join.alias] = [parent[join.alias], subItm];
                                }
                                else {
                                    logDebug('#788');
                                    parent[join.alias].push(subItm);
                                }
                                return;
                            });
                        }).then(() => {
                            logDebug('#794');
                            if ((join.alias in parent) && Array.isArray(parent[join.alias])) {
                                logDebug('#796');
                                if (('sort' in join) && join.sort) {
                                    console.log('#798');
                                    parent[join.alias] = parent[join.alias].sort(join.sort);
                                }
                                logDebug('#801');
                                const offset = ('offset' in join) && !!isNaN(join.offset) ? join.offset : 0;
                                logDebug('#803');
                                const useLimit = ('limit' in join) && !!isNaN(join.limit);
                                logDebug('#805');
                                const maxLimit = parent[join.alias].length;
                                if (offset > 0 || useLimit) {
                                    console.log('#808');
                                    parent[join.alias] = parent[join.alias].slice(offset, useLimit ? join.limit : maxLimit);
                                }
                            }
                        });
                    }
                });
                yield coll.each(itm => {
                    recursiveRelationshipMapper(itm, joins.joins || [], 0).then((b) => {
                        logDebug('#809 recursiveRelationMapper.then', { b });
                        if (joins.filter && !joins.filter(itm)) {
                            logDebug('#811 filter returns false for', { itm });
                            return;
                        }
                        logDebug('#814 add item', { itm });
                        fullRslt.push(itm);
                    });
                });
            })).then(() => {
                logDebug('#827');
                if (('map' in joins) && joins.map && ('sort' in joins) && joins.sort) {
                    logDebug('#829 return fullRslt map and sort');
                    return fullRslt.map(joins.map).sort(joins.sort);
                }
                logDebug('#832');
                if (('map' in joins) && joins.map) {
                    logDebug('#834 return fullRslt.map');
                    return fullRslt.map(joins.map);
                }
                if (('sort' in joins) && joins.sort) {
                    logDebug('#838 return fullRlst.sort');
                    return fullRslt.sort(joins.sort);
                }
                logDebug('#841 return fullRslt');
                return fullRslt;
            });
        });
    }
};
DataService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"] },
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] },
    { type: _variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/inventory/service/variables.service.ts":
/*!********************************************************!*\
  !*** ./src/app/inventory/service/variables.service.ts ***!
  \********************************************************/
/*! exports provided: SettingsChangeAction, VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsChangeAction", function() { return SettingsChangeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dexie.service */ "./src/app/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basedata.service */ "./src/app/basedata.service.ts");




var SettingsChangeAction;
(function (SettingsChangeAction) {
    SettingsChangeAction[SettingsChangeAction["Insert"] = 0] = "Insert";
    SettingsChangeAction[SettingsChangeAction["Update"] = 1] = "Update";
    SettingsChangeAction[SettingsChangeAction["Delete"] = 2] = "Delete";
    SettingsChangeAction[SettingsChangeAction["SetProperty"] = 3] = "SetProperty";
    SettingsChangeAction[SettingsChangeAction["AddListItem"] = 4] = "AddListItem";
    SettingsChangeAction[SettingsChangeAction["AppendString"] = 5] = "AppendString";
})(SettingsChangeAction || (SettingsChangeAction = {}));
let VariablesService = class VariablesService {
    constructor(db, baseData) {
        this.db = db;
        this.baseData = baseData;
        this.watchVariables = [];
        this.varChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.variables = this.db.variables;
        this.get('Settings.watchVariables', []).then(watchVars => {
            this.watchVariables = watchVars;
        });
    }
    watch(...watchNames) {
        watchNames.forEach((name) => {
            if (!this.watchVariables.find((alreadyWatched) => alreadyWatched === name)) {
                this.watchVariables.push(name);
            }
        });
        this.set('Settings.watchVariables', this.watchVariables);
    }
    unwatch(...unwatchNames) {
        this.watchVariables = this.watchVariables.filter((alreadyWatched) => unwatchNames.indexOf(alreadyWatched) === -1);
        this.set('Settings.watchVariables', this.watchVariables);
    }
    checkWatchVar(name, action, newValue, oldValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.watchVariables.find((watchVar) => watchVar === name)) {
                return;
            }
            const checkVal = (action !== SettingsChangeAction.Delete) ? newValue : oldValue;
            let varType = 'any';
            if (checkVal === undefined) {
                varType = 'undefined';
            }
            else if (typeof checkVal === null) {
                varType = 'null';
            }
            else {
                varType = checkVal.constructor.name;
            }
            this.varChanged.emit({
                name,
                action,
                varType,
                newValue,
                oldValue: (action !== SettingsChangeAction.AddListItem
                    && action !== SettingsChangeAction.AppendString) ? oldValue : null,
                oldSize: (action === SettingsChangeAction.AddListItem
                    || action === SettingsChangeAction.AppendString) ? oldValue : null
            });
        });
    }
    getAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.variables.toArray();
        });
    }
    set(name, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let oldVal;
            let action = SettingsChangeAction.Insert;
            if (yield this.has(name)) {
                oldVal = yield this.get(name);
                action = SettingsChangeAction.Update;
            }
            return this.variables.put({ name, value })
                .then(() => {
                this.checkWatchVar(name, action, value, oldVal);
                return true;
            })
                .catch((err) => false);
        });
    }
    get(name, defaultValue = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.variables.get(name).then(item => item.value).catch((err) => defaultValue);
        });
    }
    has(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return 0 < (yield this.variables.where({ name }).count());
        });
    }
    delete(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(yield this.has(name))) {
                return true;
            }
            const oldVal = yield this.get(name);
            if (0 < (yield this.variables.where({ name }).delete())) {
                this.checkWatchVar(name, SettingsChangeAction.Delete, null, oldVal);
                return true;
            }
            return false;
        });
    }
    toKeyValueObject(key, value) {
        const obj = {};
        obj[key] = value;
        return obj;
    }
    setObjectPropery(name, propertyName, propertyValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const obj = yield this.get(name, {});
            const oldVal = this.toKeyValueObject(propertyName, (propertyName in obj) ? obj[propertyName] : undefined);
            const newVal = this.toKeyValueObject(propertyName, propertyValue);
            obj[propertyName] = propertyValue;
            yield this.set(name, obj);
            this.checkWatchVar(name, SettingsChangeAction.SetProperty, newVal, oldVal);
            return true;
        });
    }
    appendListItem(name, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const list = yield this.get(name, []);
            list.push(item);
            yield this.set(name, list);
            this.checkWatchVar(name, SettingsChangeAction.AddListItem, item, list.length - 1);
            return list.length;
        });
    }
    appendString(name, append, sep = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const oldStr = yield this.get(name, '');
            if (oldStr) {
                yield this.set(name, oldStr + sep + append);
            }
            else {
                yield this.set(name, append);
            }
            this.checkWatchVar(name, SettingsChangeAction.AppendString, append, oldStr.length);
            return true;
        });
    }
    isEqual(name, compare) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return compare === (yield this.get(name));
        });
    }
};
VariablesService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
VariablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VariablesService);



/***/ }),

/***/ "./src/app/ngbheader/ngbheader.component.scss":
/*!****************************************************!*\
  !*** ./src/app/ngbheader/ngbheader.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nYmhlYWRlci9uZ2JoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ngbheader/ngbheader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ngbheader/ngbheader.component.ts ***!
  \**************************************************/
/*! exports provided: NgbheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbheaderComponent", function() { return NgbheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let NgbheaderComponent = class NgbheaderComponent {
    constructor(http) {
        this.http = http;
        this.collapsed = true;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
    }
    mkRequest() {
        const originDomain = (window && window.location && window.location.origin)
            ? window.location.origin.split(':').slice(0, 2).join(':')
            : 'http://127.0.0.1';
        this.http.get(originDomain + ':8040/auth/me').subscribe((data) => console.log(data));
    }
};
NgbheaderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NgbheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngbheader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngbheader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngbheader.component.scss */ "./src/app/ngbheader/ngbheader.component.scss")).default]
    })
], NgbheaderComponent);



/***/ }),

/***/ "./src/app/scannerinput.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/scannerinput.directive.ts ***!
  \*******************************************/
/*! exports provided: ScannerinputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerinputDirective", function() { return ScannerinputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScannerinputDirective = class ScannerinputDirective {
    constructor() {
        this.numberOfClicks = 0;
    }
    onClick(btn) {
        console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target'])
], ScannerinputDirective.prototype, "onClick", null);
ScannerinputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'button[appScannerinput]'
    })
], ScannerinputDirective);



/***/ }),

/***/ "./src/app/select-inventory/select-inventory.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/select-inventory/select-inventory.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LWludmVudG9yeS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcc2VsZWN0LWludmVudG9yeVxcc2VsZWN0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VsZWN0LWludmVudG9yeS9zZWxlY3QtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1pbnZlbnRvcnkvc2VsZWN0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XHJcbiAgaGVpZ2h0OmNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxufVxyXG4iLCIucHJvZ3Jlc3MucHJvZ3Jlc3MtZWxlbWVudGUge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/select-inventory/select-inventory.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/select-inventory/select-inventory.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInventoryComponent", function() { return SelectInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inventory/service/data.service */ "./src/app/inventory/service/data.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basedata.service */ "./src/app/basedata.service.ts");
/* harmony import */ var _inventory_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inventory-progress.service */ "./src/app/inventory-progress.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-connection-service */ "./node_modules/ng-connection-service/fesm2015/ng-connection-service.js");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connection-service.service */ "./src/app/connection-service.service.ts");











var StatusLoadingInventories;
(function (StatusLoadingInventories) {
    StatusLoadingInventories[StatusLoadingInventories["None"] = 0] = "None";
    StatusLoadingInventories[StatusLoadingInventories["WaitingForNetwork"] = 1] = "WaitingForNetwork";
    StatusLoadingInventories[StatusLoadingInventories["WaitingForServerAccess"] = 2] = "WaitingForServerAccess";
    StatusLoadingInventories[StatusLoadingInventories["Pending"] = 3] = "Pending";
    StatusLoadingInventories[StatusLoadingInventories["Loading"] = 4] = "Loading";
    StatusLoadingInventories[StatusLoadingInventories["FinishedSuccessful"] = 5] = "FinishedSuccessful";
    StatusLoadingInventories[StatusLoadingInventories["Failure"] = 6] = "Failure";
})(StatusLoadingInventories || (StatusLoadingInventories = {}));
let SelectInventoryComponent = class SelectInventoryComponent {
    constructor(dataService, eventService, route, router, auth, baseData, progressService, connection, ngConnection) {
        this.dataService = dataService;
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.baseData = baseData;
        this.progressService = progressService;
        this.connection = connection;
        this.ngConnection = ngConnection;
        this.faSyncIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSyncAlt"];
        this.ngHasConnection = false;
        this.hasConnection = false;
        this.hasServerConnection = false;
        this.status = '';
        this.statusLoadingUserInventories = StatusLoadingInventories.None;
        this.loadedUserInventories = false;
        this.totalElements = 0;
        this.doneElements = 0;
    }
    get progressAmount() {
        if (typeof this.doneElements !== 'number' || this.doneElements <= 0) {
            return 0;
        }
        if (typeof this.totalElements !== 'number') {
            return 0;
        }
        const done = this.doneElements;
        const total = this.totalElements;
        return total > 0 ? Math.round((done * 1000) / total) / 10 : 0;
    }
    ngOnInit() {
        this.routingSubscription = this.route.params.subscribe(params => {
            console.log({ params });
        });
        this.ngConnection.monitor().subscribe((hasConn) => {
            this.ngHasConnection = hasConn;
        });
        this.hasConnection = this.connection.hasInternetAccess;
        this.hasServerConnection = this.connection.hasInternetAccess;
        this.connection.monitor().subscribe((conn) => {
            this.hasConnection = conn.hasNetworkConnection;
            this.hasServerConnection = conn.hasInternetAccess;
            if (this.statusLoadingUserInventories < StatusLoadingInventories.FinishedSuccessful) {
                this.checkLoadUserInventories();
            }
        });
    }
    checkLoadUserInventories() {
        const stat = this.statusLoadingUserInventories;
        if (stat < StatusLoadingInventories.FinishedSuccessful) {
            if (stat < StatusLoadingInventories.Pending) {
                if (!this.hasConnection) {
                    this.statusLoadingUserInventories = StatusLoadingInventories.WaitingForNetwork;
                    return;
                }
                if (!this.hasServerConnection) {
                    this.statusLoadingUserInventories = StatusLoadingInventories.WaitingForServerAccess;
                    return;
                }
                this.statusLoadingUserInventories = StatusLoadingInventories.Pending;
                this.loadUserInventories().then((success) => {
                    this.statusLoadingUserInventories = success
                        ? StatusLoadingInventories.FinishedSuccessful
                        : StatusLoadingInventories.Failure;
                }).catch((err) => {
                    this.statusLoadingUserInventories = StatusLoadingInventories.Failure;
                    this.status = JSON.stringify(err);
                });
            }
        }
    }
    loadUserInventories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ngOnInit select-iventory.components.ts');
            const uid = this.auth.getUser().id;
            const mid = this.baseData.getCurrentMid() || 0;
            const gid = this.baseData.getCurrentGid() || 0;
            return yield this.dataService.getUserAssignedInventories(uid)
                .then((result) => {
                console.log({ called: 'this.dataService.getUserAssignedInventories', result });
                this.inventories = result;
                const aMids = this.inventories.map((itm) => itm.mid);
                console.log('ngOnInit', { uid, aMids });
                return this.dataService.getClientList()
                    .then((mandanten) => {
                    this.clients = mandanten.filter((itm) => aMids.indexOf(itm.mid) !== -1);
                    return this.clients;
                })
                    .then(clientList => {
                    this.setDefaultSelection(mid, gid);
                    return true;
                })
                    .catch((err) => {
                    this.status = JSON.stringify(err);
                    return false;
                });
            })
                .catch((err) => {
                this.status = JSON.stringify(err);
                return false;
            });
        });
    }
    setDefaultSelection(mid, gid) {
        const clientListIdx = this.getClientListIdxByMid(mid);
        if (-1 !== clientListIdx) {
            const clientChanged = this.clientChanged(clientListIdx);
            if (gid) {
                clientChanged.then((success) => {
                    if (!success) {
                        return false;
                    }
                    const buildingsListIdx = this.getBuildingListIdxByGid(gid);
                    this.buildingChanged(buildingsListIdx);
                });
            }
        }
    }
    getClientListIdxByMid(mid) {
        if (!mid) {
            return -1;
        }
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].mid === mid) {
                return i;
            }
        }
        return -1;
    }
    getBuildingListIdxByGid(gid) {
        if (!gid) {
            return -1;
        }
        for (let i = 0; i < this.buildings.length; i++) {
            if (this.buildings[i].mid === gid) {
                return i;
            }
        }
        return -1;
    }
    ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
    clientChanged(clientIdx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.client = this.clients[clientIdx];
            console.log('client changed to ', { clientIdx, this_clients: this.clients, this_client: this.client });
            this.buildings = yield this.dataService.getBuildingList(this.client.mid);
            console.log('assign selection buildings: ', this.buildings);
            return true;
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.selectForm);
            this.status = 'Lade Inventarisierungsdaten vom Server';
            yield this.dataService.loadInventurDataByInventurId(1);
            this.status = '';
            // Simple Way to navigate
            if (0) {}
            for (const inventory of this.inventories) {
                if (inventory.mid === this.client.mid && inventory.gid === this.building.gid) {
                    this.jobid = inventory.jobid;
                    this.inventory = inventory;
                    this.baseData.setCurrentInventur(inventory);
                    this.baseData.setCurrentGebaeude(this.building);
                    // More Control for navigate
                    this.router.navigate([
                        '/form-inventory', this.client.mid, this.building.gid
                    ]);
                    return true;
                }
            }
            return false;
        });
    }
    buildingChanged(buildingListIdx) {
        this.building = this.buildings[buildingListIdx];
        this.progressService.getCurrentGebaeudeProgress().then((progress) => {
            this.totalElements = progress.total;
            this.doneElements = progress.done;
        });
    }
};
SelectInventoryComponent.ctorParameters = () => [
    { type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_6__["BasedataService"] },
    { type: _inventory_progress_service__WEBPACK_IMPORTED_MODULE_7__["InventoryProgressService"] },
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_10__["ConnectionService"] },
    { type: ng_connection_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], SelectInventoryComponent.prototype, "selectForm", void 0);
SelectInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-inventory.component.scss */ "./src/app/select-inventory/select-inventory.component.scss")).default]
    })
], SelectInventoryComponent);



/***/ }),

/***/ "./src/app/status-check/status-check.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/status-check/status-check.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1jaGVjay9zdGF0dXMtY2hlY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/status-check/status-check.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-check/status-check.component.ts ***!
  \********************************************************/
/*! exports provided: StatusCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCheckComponent", function() { return StatusCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../connection-service.service */ "./src/app/connection-service.service.ts");



let StatusCheckComponent = class StatusCheckComponent {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.connectionService.monitor().subscribe((currentState) => {
            console.log(currentState);
            this.currentState = currentState;
        });
    }
};
StatusCheckComponent.ctorParameters = () => [
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }
];
StatusCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-check',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./status-check.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-check/status-check.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./status-check.component.scss */ "./src/app/status-check/status-check.component.scss")).default]
    })
], StatusCheckComponent);



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



let TestComponent = class TestComponent {
    constructor(app) {
        this.app = app;
        this.title = '';
        this.isToggled = false;
        this.title = app.title;
    }
    onAlertClose(alertElm) {
        console.log('close alert', arguments);
        alertElm.remove();
    }
    ngOnInit() { }
    onToggle() {
        this.isToggled = !this.isToggled;
    }
    onClick_c1_1_1() {
        console.log('click c1_1_1');
    }
    onClick_c1_1_2() {
        console.log('click c1_1_2');
    }
    onClick_c1_1() {
        console.log('click c1_1');
    }
    onAddAnA() {
        this.title += 'a';
    }
    get titleEndWithAnA() {
        return this.title.endsWith('a');
    }
};
TestComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\f.barthold\workspace\ErwinInventarisierung\apps\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map