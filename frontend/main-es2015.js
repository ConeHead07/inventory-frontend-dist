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
/* harmony default export */ __webpack_exports__["default"] = ("<app-ngbheader [isLoginPage]=\"isLoginPage\"></app-ngbheader>\r\n<div class=\"container app-content\">\r\n  <div class=\"row no-gutters mt-2 app-content-inner-box\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer *ngIf=\"!isLoginPage\" class=\"card small mt-2 app-footer\">\r\n  <div class=\"card-footer text-center\">\r\n    <app-status-check></app-status-check>\r\n    <button *ngIf=\"false && !heartBeatState\" (click)=\"setHeartBeatState(true)\">Enable HeartBeat Check</button>\r\n    <button *ngIf=\"false && heartBeatState\" (click)=\"setHeartBeatState(false)\">Disable HeartBeat Check</button>\r\n    <button *ngIf=\"deferredInstallPrompt\" (click)=\"installApp()\">Install app</button>\r\n  </div>\r\n</footer>\r\n<div #addScripts></div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\"></div>\r\n<div class=\"container h-100\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n      <div class=\"w-100 justify-content-center align-self-center\">\r\n        <div class=\"brand-circle-container\">\r\n          <div class=\"brand-circle-grey\"></div>\r\n        </div>\r\n        <h1><span class=\"lato-black\">Inventory</span><span class=\"lato-light\">App</span></h1>\r\n        <div class=\"user_card user_card_loginbox_bg\">\r\n\r\n            <div class=\"d-flex justify-content-center lato-light mb-2\">\r\n              <h2>Anmeldung</h2>\r\n            </div>\r\n\r\n            <div class=\"d-flex justify-content-center form_container\">\r\n                <form #loginForm=ngForm (ngSubmit)=\"onLoginSubmit()\">\r\n\r\n                    <div class=\"input-group mb-4\">\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">\r\n                                <fa-icon [icon]=\"['fa', 'user']\"></fa-icon>\r\n                            </span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control input_user lato-light\" name=\"user\" placeholder=\"Benutzername\"\r\n                            [(ngModel)]=\"form.email\"\r\n                            minlength=\"3\"\r\n                            pattern=\"[a-zA-Z0-9.@-]{3,}\"\r\n                            required\r\n                        >\r\n                    </div>\r\n\r\n                    <div class=\"input-group mb-5\">\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">\r\n                                <fa-icon [icon]=\"['fa', 'key']\"></fa-icon>\r\n                            </span>\r\n                        </div>\r\n                        <input required type=\"password\" class=\"form-control input_pass lato-light\" name=\"password\" placeholder=\"Passwort\"\r\n                        [(ngModel)]=\"form.password\"\r\n                        required>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-center login_container\">\r\n                     <button type=\"submit\" name=\"button\" class=\"btn login_btn lato-light\"\r\n                     [disabled]=\"loginForm.invalid\">LOGIN</button>\r\n                   </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\" style=\"max-width:90vw\">{{ error }}</div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dbsync/dbsync.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dbsync/dbsync.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currInventur\">\r\n  <div class=\"card mt-1\">\r\n    <div class=\"card-header\">Aktuelle Inventur: {{ currInventur.Titel }}</div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\"></h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">Titel</div>\r\n        <div class=\"col\">{{ currInventur.Titel }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">Inventur-ID (Jobid)</div>\r\n        <div class=\"col\">{{ currInventur.jobid }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">Mandant-ID</div>\r\n        <div class=\"col\">{{ currInventur.mid }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">Created</div>\r\n        <div class=\"col\">{{ currInventur.created_at }}</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"currUser\" class=\"row\">\r\n        <div class=\"col\">User</div>\r\n        <div class=\"col\">{{ currUser.email }}</div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button [disabled]=\"syncInProcess\" class=\"btn btn-danger\" (click)=\"resetCurrJob()\">Inventurdaten komplett neu laden</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-2\">\r\n  <div class=\"card-header\">Synchronisierung</div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\">Aktueller Status</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Client-Revision-ID</div>\r\n      <div class=\"col\">{{ clientRevisionId }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Unsynced Changes</div>\r\n      <div class=\"col\">{{ numUnsyncedChanges }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Server-Revision-ID</div>\r\n      <div class=\"col\">{{ serverRevisionId }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Server-Changes</div>\r\n      <div class=\"col\">{{ numServerChanges }}</div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Status</div>\r\n      <div class=\"col\">{{syncStatusName}} ({{syncStatus}})</div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Finished</div>\r\n      <div class=\"col\">{{syncFinished | json }}</div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">Auto-Run</div>\r\n      <div class=\"col\">{{ syncAutoRun | json }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button *ngIf=\"syncAutoRun\" class=\"btn btn-danger\" (click)=\"syncAutoStop()\"> Autmatische Synchronisierung stoppen</button>\r\n    <button *ngIf=\"!syncAutoRun\" class=\"btn btn-success\" (click)=\"syncAutoStart()\"> Autmatische Synchronisierung starten</button>\r\n    <button *ngIf=\"syncAutoRun\" class=\"btn btn-danger\" (click)=\"forceSendCurrJob()\"> Jetzt versenden</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-2\" *ngIf=\"currProcess\">\r\n  <div class=\"card-header\">Laufender Prozess</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">Status</div>\r\n      <div class=\"col\">{{ syncStatusName }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">Start</div>\r\n      <div class=\"col\">{{ currProcess.starttime | date: 'yyyy-MM-dd HH:mm:ss' }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button *ngIf=\"syncAutoRun\" class=\"btn btn-danger\" (click)=\"cancelCurrJob()\"> Laufenden Prozess verwerfen</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-2\" *ngIf=\"lastServerSyncErrors.length > 0\">\r\n  <div class=\"card-header\">Synchronisations-Fehler</div>\r\n  <h4 class=\"card-title\">Fehler bei letzter Synchroniserung\r\n    (InventurId: {{ lastServerSyncJobid}}) um {{ lastServerSyncDate | date }}</h4>\r\n  Anzahl: {{ lastServerSyncErrors.length }}<br>\r\n\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Table</th>\r\n        <th scope=\"col\">Log-Id</th>\r\n        <th scope=\"col\">Aktion</th>\r\n        <th scope=\"col\">Fehlercode</th>\r\n        <th scope=\"col\">Fehlermeldung</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of lastServerSyncErrors; index as i\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ item.table }}</td>\r\n        <td>{{ item.clientChangeLogId | number }}</td>\r\n        <td>{{ item.type | number }}</td>\r\n        <td>{{ item.error_code }}</td>\r\n        <td>{{ item.error_msg }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    * type: 1=Insert, 2=Update, 3=Delete\r\n</div>\r\n\r\n<div class=\"card mt-2\" id=\"totalProgress\" *ngIf=\"syncTotal && syncTotal.total\">\r\n  <p><ngb-progressbar [striped]=\"true\" [animated]=\"true\" [value]=\"syncTotal.percent\"></ngb-progressbar></p>\r\n  <div class=\"row\">\r\n    <div class=\"col\">{{ syncTotal.executed }}</div>\r\n    <div class=\"col\">von {{ syncTotal.total }}</div>\r\n    <div class=\"col pull-right\">{{ syncTotal.percent }} %</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-2\" id=\"tableProgress\" *ngIf=\"syncTables && syncTables.length > 0\">\r\n  <div class=\"row\" *ngFor=\"let st of syncTables; let stIdx = index\">\r\n    <div class=\"col\">{{ st.total }}</div>\r\n    <div class=\"col\">{{ st.puts }}</div>\r\n    <div class=\"col\">{{ st.modified }}</div>\r\n    <div class=\"col\">{{ st.deleted }}</div>\r\n    <div class=\"col\">{{ st.executed }}</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/invent-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/invent-form.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 1\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 2\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row no-gutters mb-1\">\r\n  <div class=\"form-group col-4\">\r\n    <label for=\"kunde\" class=\"mb-0\">Mandant</label>\r\n    <input id=\"kunde\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"kundeName\">\r\n  </div>\r\n  <div class=\"form-group col-4 px-1\">\r\n    <label for=\"adresse\" class=\"mb-0\">Adresse</label>\r\n    <input id=\"adresse\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"adresse\">\r\n  </div>\r\n  <div class=\"form-group col-4\">\r\n    <label for=\"raum\" class=\"mb-0\">Raum</label>\r\n    <input id=\"raum\" [ngClass]=\"{ 'bg-danger': !raum }\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"raumNr\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n  <div class=\"col-6\">\r\n    <app-progressbar [shortTitle]=\"'Gesamt'\" [title]=\"'Fortschrittsanzeige gesamt'\"\r\n                     [sendDoneClick]=\"true\"\r\n                     (clickedDone)=\"showGesamtDone()\"\r\n                     [sendRestClick]=\"true\"\r\n                     (clickedRest)=\"showGesamtRest()\"\r\n                     [value]=\"jobProgress.done\" [total]=\"jobProgress.total\"></app-progressbar>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <app-progressbar [shortTitle]=\"'Raum'\"  [title]=\"'Fortschrittsanzeige Raum'\"\r\n                     [sendDoneClick]=\"true\"\r\n                     (clickedDone)=\"showRaumDone()\"\r\n                     [sendRestClick]=\"true\"\r\n                     (clickedRest)=\"showRaumRest()\"\r\n                     [value]=\"raumProgress.done\" [total]=\"raumProgress.total\"></app-progressbar>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4\">\r\n  <label for=\"raumCode\" class=\"col-4\"><strong>Raumdaten</strong></label>\r\n\r\n  <div class=\"col-8 text-right\">\r\n    <div #invDrop=\"ngbDropdown\" ngbDropdown style=\"display: inline-block\">\r\n      <button [ngClass]=\"{\r\n        'btn-outline-success': jobLockStatus === 2,\r\n        'btn-outline-info': jobLockStatus === 1,\r\n        'btn-outline-secondary': jobLockStatus === 0\r\n        }\"\r\n              ngbDropdownToggle\r\n              id=\"dropdownLockStatus\"\r\n              class=\"btn btn-sm dropdown-toggle\"\r\n              type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"> Inventur ({{ jobLockStatus }})\r\n        <ng-container [ngSwitch]=\"jobLockStatus\">\r\n          <fa-icon *ngSwitchCase=\"2\" [icon]=\"faLock\"></fa-icon>\r\n          <fa-icon *ngSwitchCase=\"1\" [icon]=\"faUnlockAlt\"></fa-icon>\r\n          <fa-icon *ngSwitchDefault [icon]=\"faLock\"></fa-icon>\r\n        </ng-container>\r\n      </button>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" [style.right]=\"0\" ngbDropdownMenu aria-labelledby=\"dropdownLockStatus\">\r\n        <button ngbDropdownItem class=\"dropdown-item\"\r\n                (click)=\"setJobLockStatusClosed()\"><fa-icon [attr.class]=\"'text-danger'\" [icon]=\"faLock\"></fa-icon>\r\n          Inventur schließen\r\n        </button>\r\n        <button ngbDropdownItem class=\"dropdown-item\"\r\n                (click)=\"setJobLockStatusOpened()\"><fa-icon [attr.class]=\"'text-success'\" [icon]=\"faUnlockAlt\"></fa-icon>\r\n          Inventur in Arbeit\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div #myDrop=\"ngbDropdown\" ngbDropdown style=\"display: inline-block\">\r\n      <button [ngClass]=\"{\r\n        'btn-outline-success': raumEditStatus === 2,\r\n        'btn-outline-info': raumEditStatus === 1,\r\n        'btn-outline-secondary': raumEditStatus === 0\r\n        }\"\r\n              ngbDropdownToggle\r\n              id=\"dropdownRaumStatus\"\r\n              class=\"btn btn-sm dropdown-toggle\"\r\n              type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"> Raum\r\n        <ng-container [ngSwitch]=\"raumEditStatus\">\r\n          <fa-icon *ngSwitchCase=\"2\" [icon]=\"faCheck\"></fa-icon>\r\n          <fa-icon *ngSwitchCase=\"1\" [icon]=\"faDoorOpen\"></fa-icon>\r\n          <fa-icon *ngSwitchDefault [icon]=\"faDoorClosed\"></fa-icon>\r\n        </ng-container>\r\n      </button>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" [style.width]=\"'200px'\" ngbDropdownMenu aria-labelledby=\"dropdownRaumStatus\">\r\n        <button ngbDropdownItem class=\"dropdown-item\"\r\n                (click)=\"setRaumEditStatusClosed()\"><fa-icon [attr.class]=\"'text-success'\" [icon]=\"faCheck\"></fa-icon>\r\n          Fertig\r\n        </button>\r\n        <button ngbDropdownItem class=\"dropdown-item\"\r\n                (click)=\"setRaumEditStatusStarted()\"><fa-icon [attr.class]=\"'text-info'\" [icon]=\"faDoorOpen\"></fa-icon>\r\n          In Arbeit\r\n        </button>\r\n        <button *ngIf=\"raumProgress.done === 0\" ngbDropdownItem class=\"dropdown-item\"\r\n                (click)=\"setRaumEditStatusUntouched()\"><fa-icon [attr.class]=\"'text-secondary'\" [icon]=\"faDoorClosed\"></fa-icon>\r\n          Noch nicht begonnen\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group row\">\r\n  <div class=\"col input-group mb-1\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\">BCode</span>\r\n    </div>\r\n    <input id=\"raumCode\" readonly #raumBarcode type=\"text\"\r\n           class=\"form-control\" [value]=\"formInventar.RaumBarcode\" (input)=\"onRaumBarcodeInput( $event )\" placeholder=\"Raum-Barcode\" aria-label=\"Raumcode\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(raumBarcode)\"><fa-icon [icon]=\"faBarcode\"></fa-icon></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group row\">\r\n  <div class=\"col input-group mb-1\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\">Nr</span>\r\n    </div>\r\n    <input id=\"raumNr\" readonly type=\"text\" [value]=\"formInventar.Raum\" class=\"form-control\" placeholder=\"Raumnr\" aria-label=\"Raumnummer\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectSearchRaum()\">\r\n        <fa-icon [icon]=\"faBookReader\"></fa-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group row\">\r\n  <div class=\"col input-group mb-1\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\">Bez.</span>\r\n    </div>\r\n    <input  id=\"raumBez\" readonly type=\"text\" [value]=\"formInventar.Raumbezeichnung\"\r\n            placeholder=\"Raumbezeichnung\" class=\"form-control\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-success\" [disabled]=\"!formInventar.ruuid\" type=\"button\" (click)=\"openEditRaum()\">\r\n        <fa-icon [icon]=\"faEdit\"></fa-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group row\">\r\n  <div class=\"col input-group mb-1\">\r\n    <div class=\"btn-group input-group\" role=\"group\" aria-label=\"First group\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Bild</span>\r\n      </div>\r\n      <div class=\"input-group-append\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"openCreateRaumImage()\"><fa-icon [icon]=\"faCamera\"></fa-icon>\r\n          <span class=\"d-none d-md-inline\"> anlegen </span>\r\n        </button>\r\n        <div *ngIf=\"raumBilder.length > 0\" #raumBilderDrop=\"ngbDropdown\" class=\"btn btn-light\" ngbDropdown style=\"display: inline-block\">\r\n          <button\r\n            ngbDropdownToggle\r\n            id=\"dropdownRaumbilder\"\r\n            class=\"btn btn-sm dropdown-toggle\"\r\n            type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"> {{ raumBilder.length }} Fotos\r\n          </button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" [style.width]=\"'200px'\" ngbDropdownMenu aria-labelledby=\"dropdownRaumbilder\">\r\n            <button *ngFor=\"let img of raumBilder; let idx = index\"\r\n                    (click)=\"openRaumbild(idx)\"\r\n                    class=\"dropdown-item\" ngbDropdownItem>{{ img.name }}</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"raumPlaene.length > 0\" #raumPlaeneDrop=\"ngbDropdown\" class=\"btn btn-light\"\r\n             ngbDropdown\r\n             style=\"display: inline-block\">\r\n          <button\r\n            ngbDropdownToggle\r\n            id=\"dropdownRaumplaene\"\r\n            class=\"btn btn-sm dropdown-toggle\"\r\n            type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"> {{ raumPlaene.length }} Pläne\r\n          </button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownRaumplaene\">\r\n            <button *ngFor=\"let img of raumPlaene; let idx = index\"\r\n                    (click)=\"openRaumplan(idx)\"\r\n                    class=\"dropdown-item\" ngbDropdownItem>{{ img.name }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4\">\r\n  <label for=\"raumCode\" class=\"col\"><strong>Inventar-Daten</strong></label>\r\n</div>\r\n<ng-container *ngIf=\"raum; else MissingRaum\">\r\n  <div class=\"form-group row\">\r\n      <div class=\"col input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">BCode</span>\r\n        </div>\r\n        <input id=\"elmBarcode\" class=\"form-control\" type=\"text\" aria-label=\"Barcode\"\r\n               required #invBarcode readonly\r\n               [ngClass]=\"{'bg-danger': waitingForNewInventarBarcode || waitingForInventarData }\"\r\n               [attr.value]=\"formInventar.Barcode\"\r\n               [placeholder]=\"!waitingForNewInventarBarcode ? 'Inventar-Barcode ...' : 'Warte auf Inventar-Barcode ...'\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(invBarcode)\">\r\n            <fa-icon [icon]=\"faBarcode\"></fa-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <ngb-alert *ngIf=\"waitingForInventarData\" type=\"danger\" (close)=\"clearFormInventar()\">\r\n    Warte auf Artikelzuweisung für neuen Inventar-Barcode: <b>{{ formInventar.Barcode }}</b><br>\r\n    <i>Sollte der Barcode bekannt sein, können Sie die Funktion reIndexBarcodeLookup in den Einstellungen nutzen!</i>\r\n  </ngb-alert>\r\n  <ngb-alert *ngIf=\"waitingForNewInventarBarcode\" type=\"danger\">\r\n    Warte auf neuen Inventar-Barcode für {{ formInventar.Bezeichnung }}\r\n  </ngb-alert>\r\n\r\n  <div class=\"form-group row\">\r\n      <div class=\"col input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Bez.</span>\r\n        </div>\r\n        <input id=\"elmArtBez\" readonly type=\"text\" [attr.value]=\"formInventar.Bezeichnung\" class=\"form-control\" placeholder=\"Artikelbezeichnung\" aria-label=\"Artikelbezeichnung\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectCreateArtikel()\">\r\n            <fa-icon [icon]=\"faBookReader\"></fa-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <div class=\"col input-group mb-1\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Typ</span>\r\n      </div>\r\n      <input  id=\"elmArtTyp\" type=\"text\" [attr.value]=\"formInventar.Typ\" class=\"form-control\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-success\" [disabled]=\"!formInventar.uuid\" type=\"button\" (click)=\"openEditInventar()\">\r\n          <fa-icon [icon]=\"faEdit\"></fa-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <!-- label for=\"elmArtTyp\" class=\"col-2 col-sm-2 col-md-2 col-lg-2 d-none\">Bild</label -->\r\n    <div class=\"col mb-1\">\r\n\r\n      <div class=\"btn-toolbar justify-content-between w-100\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n        <div class=\"btn-group input-group\" role=\"group\" aria-label=\"First group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Bild</span>\r\n          </div>\r\n          <div class=\"input-group-append\">\r\n            <button type=\"button\" class=\"btn btn-info\"\r\n                    *ngIf=\"artikelImageExists\"\r\n                    (click)=\"openShowArtikelImage()\"><fa-icon [icon]=\"faImage\"></fa-icon>\r\n              <span class=\"d-none d-md-inline\"> anzeigen </span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success\"\r\n                    *ngIf=\"artikelImageExists\"\r\n                    [disabled]=\"!formInventar.gcuuid\"\r\n                    (click)=\"openEditArtikelImage()\"><fa-icon [icon]=\"faEdit\"></fa-icon>\r\n              <span class=\"d-none d-md-inline\"> bearbeiten </span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success\"\r\n                    *ngIf=\"!artikelImageExists\"\r\n                    [disabled]=\"!formInventar.gcuuid\"\r\n                    (click)=\"openCreateArtikelImage()\"><fa-icon [icon]=\"faCamera\"></fa-icon>\r\n              <span class=\"d-none d-md-inline\"> anlegen </span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\" id=\"btnGroupAddon2\">Kunst</div>\r\n          </div>\r\n          <div class=\"input-group-append\">\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"createKunstwerk()\"><fa-icon [icon]=\"faPlus\"></fa-icon>\r\n              <span class=\"d-none d-md-inline\"> anlegen </span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>\r\n<ng-template #MissingRaum>\r\n  <ngb-alert [type]=\"'danger'\" [dismissible]=\"false\">\r\n    Bitte wählen Sie einen Raum aus!\r\n  </ngb-alert>\r\n</ng-template>\r\n\r\n<div id=\"formBottomDivider\" class=\"row no-gutters mb-0 border-bottom\">\r\n  <div id=\"inventurTitel\" class=\"col\">\r\n    {{ inventur.Titel }}\r\n  </div>\r\n</div>\r\n\r\n<div [hidden]=\"!manualBCInputEnabled\">\r\n  <h5>Barcode-Scanning Test</h5>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h6>Scanner Simulator</h6>\r\n      <textarea class=\"scanner-detect-ignore\" #inputSimulateBarcode></textarea><br>\r\n      <button (click)=\"simulateScanner()\">Barcode senden</button><br>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-scannerdetection (scanned)=\"handleScanData($event)\" [config]=\"scanDetectorConfig\">\r\n        <h6>Scan-Detector Barcode</h6>\r\n        <textarea #input2 [ngClass]=\"lastScanDetectClass\"></textarea><br>\r\n        (Zeit: {{ lastScanDetectTime | date:'hh:mm:ss' }})\r\n      </app-scannerdetection>\r\n    </div>\r\n    <div class=\"d-none\">{{ formInventar | json }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <textarea style=\"height:90vh;width:90vw\" class=\"bcRawInput\" #rawInputBarcodes></textarea><br>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<audio *ngIf=\"beepSuccessSrc\" id=\"beepSuccess\" [src]=\"beepSuccessSrc\" autoPlay=\"autoplay\" [muted]=\"'muted'\"></audio>\r\n<audio *ngIf=\"beepErrorSrc\" id=\"beepError\" [src]=\"beepErrorSrc\" autoPlay=\"autoplay\" [muted]=\"'muted'\"></audio>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 1\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 2\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-header\">\r\n  <h6 class=\"modal-title\">Barcodes-Batchverarbeitung</h6>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <ng-container *ngIf=\"loadingShow\">\r\n    <strong>Lade {{ loadingTotal }} Barcodes</strong>\r\n    <p *ngIf=\"loadingTotal\">\r\n      <ngb-progressbar\r\n        [type]=\"loadingType\"\r\n        [value]=\"loadingPercent\"\r\n        [striped]=\"loadingAnimated\"\r\n        [animated]=\"true\"><i>\r\n      {{ loadingCurrent }} von {{ loadingTotal }}\r\n    </i></ngb-progressbar></p>\r\n  </ng-container>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Raum {{ raum.Raum}} {{ raum.Raumbezeichnung }}</h5>\r\n      <p class=\"card-text\" *ngIf=\"raum\">\r\n        <app-progressbar [shortTitle]=\"'Raum'\"  [title]=\"'Fortschrittsanzeige Raum'\"\r\n                         [value]=\"raumProgress.done\"\r\n                         [total]=\"raumProgress.total\">\r\n        </app-progressbar>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"scanResultHistory.length > 0\">\r\n    <hr class=\"mt-3\">\r\n    <div *ngIf=\"false\" class=\"w-100 text-right\">\r\n      <button class=\"btn btn-secondary btn-sm\" (click)=\"clearHistory()\">clear history</button>\r\n    </div>\r\n\r\n    <h5>Inventar: {{ scanResultHistory.length }} </h5>\r\n    <div *ngFor=\"let item of scanResultHistory\">\r\n      <div class=\"card mt-2\">\r\n        <div class=\"card-body\" style=\"padding:.5rem\">\r\n          <h5 class=\"card-title\">{{ item.result.barcode }}</h5>\r\n\r\n          <div *ngIf=\"item.image && item.image.data_url\" class=\"float-right\">\r\n            <img [src]=\"item.image.data_url\" style=\"max-width:100%;max-height:50px\">\r\n          </div>\r\n\r\n          <p class=\"card-text\">\r\n            <span class=\"font-weight-bold\">{{ item.typToString }}:</span>{{ item.infos }}\r\n          </p>\r\n          <p *ngIf=\"false\">\r\n            {{ item | json }}\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"btn-group w-100\" *ngIf=\"item.typ === typeofLookupInventar;else elseNoInv\">\r\n          <button class=\"btn btn-success btn-sm col-6\" (click)=\"applyResult(item)\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n          <button class=\"btn btn-danger btn-sm col-6\" (click)=\"removeResult(item)\"><fa-icon [icon]=\"faRemove\"></fa-icon></button>\r\n        </div>\r\n        <div class=\"btn-group w-100\" #elseNoInv>\r\n          <ngb-alert type=\"error\">\r\n          Fehler: Dies ist kein existierender Inventar-Barcode!\r\n          </ngb-alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"scanResultAssigned.length > 0\">\r\n    <hr class=\"mt-3\">\r\n    <h5>Zugewiesenes Inventar: {{ scanResultAssigned.length }} </h5>\r\n\r\n    <div *ngFor=\"let item of scanResultAssigned\">\r\n      <div class=\"card mt-2\">\r\n        <div class=\"card-body\" style=\"padding:.5rem\">\r\n          <h5 class=\"card-title\">{{ item.result.barcode }}</h5>\r\n\r\n          <div *ngIf=\"item.image && item.image.data_url\" class=\"float-right\">\r\n            <img [src]=\"item.image.data_url\" style=\"max-width:100%;max-height:50px\">\r\n          </div>\r\n\r\n          <p class=\"card-text\">\r\n            <span class=\"font-weight-bold\">{{ item.typToString }}:</span>{{ item.infos }}\r\n          </p>\r\n          <p *ngIf=\"false\">\r\n            {{ item | json }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Artikelfoto erstellen</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <!-- You can now use angular-cropper component in app.component.html -->\r\n  <input style=\"display:none\" type=\"file\" accept=\"image/*\" #inputUploadFile (change)=\"onInputImageFile($event, inputUploadFile)\" />\r\n  <input style=\"display:none\" type=\"file\"accept=\"image/*\" #inputUploadImage capture=\"camera\" (change)=\"onInputImageFile($event, inputUploadImage)\" />\r\n  <canvas id=\"prepareImgCanvas\" #prepareImgCanvas style=\"display:none;\"></canvas>\r\n\r\n  <div class=\"editor\" *ngIf=\"imageUrl\">\r\n    <div class=\"canvas\">\r\n      <angular-cropper\r\n          #angularCropper\r\n          *ngIf=\"imageUrl\"\r\n          [cropperOptions]=\"config\"\r\n          [imageUrl]=\"imageUrl\">\r\n      </angular-cropper>\r\n      <!--\r\n      (cropstart)=\"cropStart($event)\"\r\n      (crop)=\"onCrop($event)\"\r\n      (cropmove)=\"cropMove($event)\"\r\n      (cropend)=\"cropEnd($event)\"\r\n      (ready)=\"onCropperReady($event)\"\r\n      -->\r\n    </div>\r\n\r\n\r\n    <div class=\"toolbar-cropend\" *ngIf=\"cropStatus === 5\">\r\n      <button class=\"btn btn-sm btn-success btn-icon-cirular\" (click)=\"crop()\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"cropReset()\"><fa-icon [icon]=\"faBan\"></fa-icon></button>\r\n    </div>\r\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToMove()\"><fa-icon [icon]=\"faMove\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToCrop()\"><fa-icon [icon]=\"faCrop\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\r\n    </div>\r\n  </div>\r\n  <img *ngIf=\"previewImgUrl\" [src]=\"previewImgUrl\" class=\"mt-1\" style=\"max-width:100%; max-height:150px;\"/>\r\n  <p class=\"d-none\">create-artikel-image works!</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class=\"btn-toolbar\">\r\n    <div class=\"btn-group mr-5\">\r\n      <button class=\"btn btn-info\" (click)=\"openInputUploadFile()\">\r\n        <fa-icon [icon]=\"faUpload\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\">Upload</span>\r\n      </button>\r\n      <button class=\"btn btn-info\" (click)=\"openInputUploadImage()\">\r\n        <fa-icon [icon]=\"faCamera\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\">Photo</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"btn-group\">\r\n\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\r\n        <fa-icon [icon]=\"faBan\"></fa-icon>\r\n        Abbr<span class=\"d-none d-md-inline\">echen</span><span class=\"d-inline d-md-none\">.</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" *ngIf=\"imageUrl\">\r\n        <fa-icon [icon]=\"faSave\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\">Fertig</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Raumfoto erstellen</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <!-- You can now use angular-cropper component in app.component.html -->\r\n  <input style=\"display:none\" type=\"file\" accept=\"image/*\" #inputUploadFile (change)=\"onInputImageFile($event, inputUploadFile)\" />\r\n  <input style=\"display:none\" type=\"file\"accept=\"image/*\" #inputUploadImage capture=\"camera\" (change)=\"onInputImageFile($event, inputUploadImage)\" />\r\n  <canvas id=\"prepareImgCanvas\" #prepareImgCanvas style=\"display:none;\"></canvas>\r\n\r\n  <div class=\"editor\" *ngIf=\"imageUrl\">\r\n    <div class=\"canvas\">\r\n      <angular-cropper\r\n        #angularCropper\r\n        *ngIf=\"imageUrl\"\r\n        [cropperOptions]=\"config\"\r\n        [imageUrl]=\"imageUrl\">\r\n      </angular-cropper>\r\n      <!--\r\n      (cropstart)=\"cropStart($event)\"\r\n      (crop)=\"onCrop($event)\"\r\n      (cropmove)=\"cropMove($event)\"\r\n      (cropend)=\"cropEnd($event)\"\r\n      (ready)=\"onCropperReady($event)\"\r\n      -->\r\n    </div>\r\n\r\n\r\n    <div class=\"toolbar-cropend\" *ngIf=\"cropStatus === 5\">\r\n      <button class=\"btn btn-sm btn-success btn-icon-cirular\" (click)=\"crop()\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"cropReset()\"><fa-icon [icon]=\"faBan\"></fa-icon></button>\r\n    </div>\r\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToMove()\"><fa-icon [icon]=\"faMove\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"setDragModeToCrop()\"><fa-icon [icon]=\"faCrop\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\r\n    </div>\r\n  </div>\r\n  <img *ngIf=\"previewImgUrl\" [src]=\"previewImgUrl\" class=\"mt-1\" style=\"max-width:100%; max-height:150px;\"/>\r\n  <p class=\"d-none\">create-raum-image works!</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class=\"btn-toolbar\">\r\n    <div class=\"btn-group mr-5\">\r\n      <button class=\"btn btn-info\" (click)=\"openInputUploadFile()\">\r\n        <fa-icon [icon]=\"faUpload\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\"> Upload </span>\r\n      </button>\r\n      <button class=\"btn btn-info\" (click)=\"openInputUploadImage()\">\r\n        <fa-icon [icon]=\"faCamera\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\"> Photo </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"btn-group\">\r\n\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\r\n        <fa-icon [icon]=\"faBan\"></fa-icon>\r\n        Abbr<span class=\"d-none d-md-inline\">echen</span></button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" *ngIf=\"imageUrl\">\r\n        <fa-icon [icon]=\"faSave\"></fa-icon>\r\n        <span class=\"d-none d-md-inline\">Fertig</span></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Inventar bearbeiten</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form #inventarForm=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"editInventarBarcode\" class=\"d-none\">Barcode: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">BCode</span>\r\n        </div>\r\n        <input readonly id=\"editInventarBarcode\" #editInventarBarcode (change)=\"formValidate()\" class=\"form-control formcontrol-edit-barcode\" (paste)=\"$event.preventDefault()\" placeholder=\"Barcode\"\r\n               name=\"code\"\r\n               [(ngModel)]=\"inventarInput.code\"\r\n               #code=\"ngModel\"\r\n        >\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(editInventarBarcode)\"><fa-icon [icon]=\"faCamera\"></fa-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{\r\n        'has-warning': false,\r\n        'has-info': false\r\n        }\">\r\n      <label for=\"Bezeichnung\" class=\"d-none\">Bez.: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Bezg</span>\r\n        </div>\r\n        <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Bezeichnung\"\r\n               name=\"Bezeichnung\"\r\n               [(ngModel)]=\"inventarInput.Bezeichnung\"\r\n               #bezeichnung=\"ngModel\"\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Hersteller\" class=\"d-none\">Hersteller:</label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">HST</span>\r\n        </div>\r\n        <input\r\n          id=\"Hersteller\"\r\n          name=\"Hersteller\"\r\n          placeholder=\"Hersteller\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"inventarInput.Hersteller\"\r\n          [ngbTypeahead]=\"search\"\r\n        >\r\n        <!--\r\n          (selectItem)=\"onSelectHersteller($event)\"\r\n          [inputFormatter]=\"formatter\"\r\n          [resultFormatter]=\"formatter\"\r\n          (change)=\"onChangeHersteller($event)\"\r\n          (focus)=\"focus$.next($any($event).target.value)\"\r\n          (click)=\"click$.next($any($event).target.value)\"\r\n          #instance=\"ngbTypeahead\"\r\n        / -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Gruppe\" class=\"d-none\">Gruppe: </label>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">GRP</span>\r\n        </div>\r\n        <input id=\"Gruppe\" class=\"form-control\" placeholder=\"Gruppe\"\r\n               name=\"Gruppe\"\r\n               [(ngModel)]=\"inventarInput.Gruppe\"\r\n               [ngbTypeahead]=\"searchGruppen\"\r\n               (input)=\"onInput($event)\"\r\n        >\r\n        <!--\r\n               (change)=\"onChangeGruppe($event)\"\r\n               (selectItem)=\"onSelectGruppe($event)\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusGrp$.next($any($event).target.value)\"\r\n               (click)=\"clickGrp$.next($any($event).target.value)\"\r\n               #instanceGrp=\"ngbTypeahead\"\r\n        -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Kategorie\" class=\"d-none\">Kategorie: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">KTG</span>\r\n        </div>\r\n        <input id=\"Kategorie\" class=\"form-control\" placeholder=\"Kategorie\"\r\n               name=\"Kategorie\"\r\n               [(ngModel)]=\"inventarInput.Kategorie\"\r\n               (input)=\"onInput($event)\"\r\n        >\r\n        <!--\r\n               (change)=\"onChange($event)\"\r\n               (selectItem)=\"onSelectKategorie($event)\"\r\n               [ngbTypeahead]=\"searchKategorien\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusKtg$.next($any($event).target.value)\"\r\n               (click)=\"clickKtg$.next($any($event).target.value)\"\r\n               #instanceKtg=\"ngbTypeahead\"\r\n        -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"typ\" class=\"d-none\">Artikel-Typ: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">TYP</span>\r\n        </div>\r\n        <input id=\"typ\" class=\"form-control\" placeholder=\"Artikel-Typ\"\r\n               name=\"typ\"\r\n               [(ngModel)]=\"inventarInput.Typ\"\r\n               [ngbTypeahead]=\"searchTypen\"\r\n               (input)=\"onInput($event)\"\r\n        >\r\n        <!--\r\n               (change)=\"onChange($event)\"\r\n               (selectItem)=\"onSelectTypen($event)\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusTyp$.next($any($event).target.value)\"\r\n               (click)=\"clickTyp$.next($any($event).target.value)\"\r\n               #instanceTyp=\"ngbTypeahead\"\r\n        -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Groesse\" class=\"d-none\">Abmessungen: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Größe</span>\r\n        </div>\r\n        <input id=\"Groesse\" class=\"form-control\" placeholder=\"Groesse\"\r\n               name=\"Groesse\"\r\n               [(ngModel)]=\"inventarInput.Groesse\"\r\n               [ngbTypeahead]=\"searchGroessen\"\r\n               (input)=\"onInput($event)\"\r\n        >\r\n        <!--\r\n               (change)=\"onChange($event)\"\r\n               (selectItem)=\"onSelectGroessen($event)\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusGrs$.next($any($event).target.value)\"\r\n               (click)=\"clickGrs$.next($any($event).target.value)\"\r\n               #instanceGrs=\"ngbTypeahead\"\r\n        -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Farbe\" class=\"d-none\">Farbe: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Farbe</span>\r\n        </div>\r\n        <input id=\"Farbe\" class=\"form-control\" placeholder=\"Farbe\"\r\n               name=\"Farbe\"\r\n               [(ngModel)]=\"inventarInput.Farbe\"\r\n               [ngbTypeahead]=\"searchFarben\"\r\n               (input)=\"onInput($event)\"\r\n               >\r\n        <!--\r\n               (change)=\"onChange($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectFarben($event)\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusFa$.next($any($event).target.value)\"\r\n               (click)=\"clickFa$.next($any($event).target.value)\"\r\n               #instanceFa=\"ngbTypeahead\"\r\n        -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Farbe\" class=\"d-none\">Zustand: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Zustand</span>\r\n        </div>\r\n        <input id=\"Zustand\" class=\"form-control\" placeholder=\"Zustand\"\r\n               name=\"Zustand\"\r\n               [(ngModel)]=\"inventarInput.Zustand\">\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<ngb-alert [type]=\"'danger'\" [dismissible]=\"false\" *ngFor=\"let vError of validationErrors\">\r\n  {{ vError }}\r\n</ngb-alert>\r\n\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\">Inventar aktualisieren</button>\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\r\n  <div>\r\n    <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [maxSize]=\"maxSize\" [pageSize]=\"pageSize\" (pageChange)=\"onPageChange(page)\"></ngb-pagination>\r\n  </div>\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"card col-sm-6\" *ngFor=\"let item of listExistingArticlePage\">\r\n      <img *ngIf=\"item.img_id\" class=\"card-img-top\" src=\"...\" alt=\"\">\r\n      <div class=\"card-body \">\r\n        <h6 class=\"card-title\">{{ item.Bezeichnung }}</h6>\r\n        <div *ngIf=\"item.Hersteller\"><small>Hst: {{ item.Hersteller }}</small></div>\r\n        <div *ngIf=\"item.Gruppe\"><small>Grp: {{ item.Gruppe }}</small></div>\r\n        <div *ngIf=\"item.Typ\"><small>Typ: {{ item.Typ }}</small></div>\r\n        <div *ngIf=\"item.Kategorie\"><small>Ktg: {{ item.Kategorie }}</small></div>\r\n        <div *ngIf=\"item.Farbe || item.Groesse\"><small>{{ item.Farbe }} {{ item.Groesse }}</small></div>\r\n        <div *ngIf=\"item.inventar_count\"><small>{{ item.inventar_count }}</small></div>\r\n      </div>\r\n      <div class=\"card-footer text-center\">\r\n        <button (click)=\"applyItemAsInput(item)\" class=\"btn btn-sm btn-info\">Als Vorlage übernehmen</button>\r\n        <button (click)=\"applyItemAsArtikel(item)\" class=\"btn btn-sm btn-primary\">Artikel Übernehmen</button>\r\n      </div>\r\n    </div><!-- Close: div.card -->\r\n  </div><!-- Close: div.row -->\r\n</div>\r\n\r\n<!-- button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Raum zuordnen</button -->\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <div class=\"col-10\"></div>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Raum bearbeiten</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form #raumForm=\"ngForm\">\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{\r\n        'has-error': raum.dirty && (raum.invalid || raumExistsStatus === 1),\r\n        'has-info': raum.dirty && raumExistsStatus === -1\r\n        }\">\r\n      <label for=\"dateOfBirth\" class=\"d-none\">Raum-Nr.: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">RNr</span>\r\n        </div>\r\n        <input id=\"Raum\" class=\"form-control\" placeholder=\"Raumnr\"\r\n               name=\"Raum\"\r\n               [(ngModel)]=\"raumInput.Raum\"\r\n               #raum=\"ngModel\"\r\n               (change)=\"checkIfRaumExists()\"\r\n               required\r\n        >\r\n      </div>\r\n      <div *ngIf=\"raum.valid\">\r\n        <div *ngIf=\"raumExistsStatus===-1\" class=\"help-block\">Raumangabe wird geprüft</div>\r\n        <div *ngIf=\"raumExistsStatus===1\" class=\"help-block\">Raum existiert bereits</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{\r\n        'has-warning': bezeichnung.dirty && (bezeichnung.invalid || bezeichnungExistsStatus === 1),\r\n        'has-info': bezeichnung.dirty && bezeichnungExistsStatus === -1\r\n        }\">\r\n      <label for=\"Bezeichnung\" class=\"d-none\">Raum-Bez.: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Bezg</span>\r\n        </div>\r\n        <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Raumbezeichnung\"\r\n               name=\"Bezeichnung\"\r\n               [(ngModel)]=\"raumInput.Raumbezeichnung\"\r\n               #bezeichnung=\"ngModel\"\r\n               (change)=\"checkIfRaumbezeichnungExists()\"\r\n        >\r\n      </div>\r\n      <div *ngIf=\"bezeichnung.valid\">\r\n        <div *ngIf=\"bezeichnungExistsStatus===-1\" class=\"help-block\">Bezeichnung wird geprüft</div>\r\n        <div *ngIf=\"bezeichnungExistsStatus===1\" class=\"help-block\">Es existiert bereits ein Raum mit dieser Bezeichnung</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Etage\" class=\"d-none\">Etage: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Etage</span>\r\n        </div>\r\n        <input id=\"Etage\" class=\"form-control\" placeholder=\"Etage\"\r\n               name=\"Etage\"\r\n               [(ngModel)]=\"raumInput.Etage\"\r\n               [ngbTypeahead]=\"searchEtage\"\r\n               #etage=\"ngModel\"\r\n               required\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"editRaumBarcode\" class=\"d-none\">Barcode: </label>\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">BCode</span>\r\n        </div>\r\n        <input readonly id=\"editRaumBarcode\" #editRaumBarcode (change)=\"formValidate()\" class=\"form-control formcontrol-xedit-barcode\" (paste)=\"$event.preventDefault()\" placeholder=\"Barcode\"\r\n               name=\"code\"\r\n               [(ngModel)]=\"raumInput.code\"\r\n               #code=\"ngModel\"\r\n        >\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(editRaumBarcode)\"><fa-icon [icon]=\"faBarcode\"></fa-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"false\">\r\n      <label for=\"dateOfBirth\">Datum (Dummy)</label>\r\n      <div class=\"input-group\">\r\n        <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<ngb-alert [type]=\"'danger'\" [dismissible]=\"false\" *ngFor=\"let vError of validationErrors\">\r\n  {{ vError }}\r\n</ngb-alert>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\">Raum aktualisieren</button>\r\n  <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\r\n  formIsValid: {{formIsValid | json }} <br>\r\n  raumForm.form.valid: {{ raumForm.form.valid | json }}\r\n</div>\r\n\r\n<!-- button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Raum zuordnen</button -->\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showGesamtRestForm()\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> Zeige fehlende Räume\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Bereits inventarisierte Räume</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\" sortable=\"Bezeichnung\">Etage</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Raum</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Fertig</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Prgoress</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Vorher</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Nacher</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of raeumeListDone; let rowNr = index\">\r\n      <th scope=\"row\">{{ rowNr }}</th>\r\n      <th>{{ item.Etage }}</th>\r\n      <td><span class=\"btn btn-link\" (click)=\"onSelectRaum(item.uuid)\">{{ item.Raum }}</span></td>\r\n      <td>\r\n        <fa-icon *ngIf=\"item.editStatus === 2; else elseInProgress\"  [attr.class]=\"'text-success'\" [icon]=\"faCheck\"></fa-icon>\r\n        <ng-template #elseInProgress><fa-icon [attr.class]=\"'text-info'\" [icon]=\"faInWork\"></fa-icon></ng-template>\r\n      </td>\r\n      <td>\r\n        <ng-container [ngSwitch]=\"item.statusIconName\">\r\n          <fa-icon [attr.class]=\"'text-danger'\" *ngSwitchCase=\"'empty'\" [icon]=\"faEmpty\"></fa-icon>\r\n          <fa-icon [attr.class]=\"'text-warning'\" *ngSwitchCase=\"'quarter'\" [icon]=\"faQuarter\"></fa-icon>\r\n          <fa-icon [attr.class]=\"'text-info'\" *ngSwitchCase=\"'half'\" [icon]=\"faHalf\"></fa-icon>\r\n          <fa-icon [attr.class]=\"'text-success'\" *ngSwitchCase=\"'three-quarter'\" [icon]=\"faThreeQuarter\"></fa-icon>\r\n          <fa-icon [attr.class]=\"'text-success'\" *ngSwitchCase=\"'full'\" [icon]=\"faFull\"></fa-icon>\r\n        </ng-container> {{ item.progress }}%\r\n      </td>\r\n      <td>{{ item.total }}</td>\r\n      <td>{{ item.done }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showGesamtDoneForm()\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> Zeige bereits aufgenommene Räume\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Noch nicht inventarisierte Räume</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\" sortable=\"Bezeichnung\">Etage</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Raum</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Gestarted</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Vorher</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Nacher</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of raeumeListDone; let rowNr = index\">\r\n      <th scope=\"row\">{{ rowNr + 1 }}</th>\r\n      <th>{{ item.Etage }}</th>\r\n      <td><span class=\"btn btn-link\" (click)=\"onSelectRaum(item.uuid)\">{{ item.Raum }}</span></td>\r\n      <td>{{ item.editStatus === 0 ? 'Nein' : 'Ja' }}</td>\r\n      <td>{{ item.total }}</td>\r\n      <td>{{ item.done }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/imagebox/imagebox.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/imagebox/imagebox.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ titel }}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div *ngIf=\"false\">\r\n  numImages: {{ numImages }}\r\n  numImgFound: {{ numImgFound }}\r\n  numImgLoaded: {{ numImgLoaded }}\r\n  numImgFinished: {{ numImgFinished }}\r\n  finishedLoading: {{ finishedLoading | json }}\r\n  error: {{ error }}\r\n  </div>\r\n  <ng-template *ngIf=\"(!currImg || currImg === null || currImg.loadingStatus !== htmlImageLoadingStatus.Loaded); else ImageBox\">\r\n    <div *ngIf=\"error\">{{ error }}</div>\r\n    <div *ngIf=\"currImg\">\r\n      <div *ngIf=\"currImg.loadingStatus === htmlImageLoadingStatus.Pending\">Bild wird vorbereitet!</div>\r\n      <div *ngIf=\"currImg.loadingStatus === htmlImageLoadingStatus.Loading\">Bild wird geladen!</div>\r\n      <div *ngIf=\"currImg.loadingStatus === htmlImageLoadingStatus.Aborted\">Ladevorgang wurde abgebrochen!</div>\r\n      <div *ngIf=\"currImg.error\">{{ currImg.error }}</div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #ImageBox>\r\n    <h3>{{currImgIdx + 1 }}/{{numImages}} {{ currImg.name }}</h3>\r\n    <p *ngIf=\"currImg.desc\">{{ currImg.desc }}</p>\r\n    <div style=\"position:relative;text-align:center\">\r\n      <button class=\"btn btn-mini btn-light\"\r\n              style=\"position:absolute;left:10px;top:calc(50% - 1rem);\"\r\n              (click)=\"prev()\" *ngIf=\"currImgIdx > 0\">\r\n        <fa-icon [icon]=\"faAngleLeft\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-mini btn-light\"\r\n              style=\"position:absolute;right:10px;top:calc(50% - 1rem);\"\r\n              (click)=\"next()\" *ngIf=\"currImgIdx < (numImages - 1)\">\r\n        <fa-icon [icon]=\"faAngleRight\"></fa-icon>\r\n      </button>\r\n      <button  class=\"btn btn-mini btn-danger\"\r\n               style=\"position:absolute;left:calc(50% - .5rem);bottom:.5rem;\"\r\n               (click)=\"delete(currImg.uuid)\">\r\n        <fa-icon [icon]=\"faTrashAlt\"></fa-icon>\r\n      </button>\r\n      <img [src]=\"currImg.img.src\" style=\"max-width:99%;max-height:99%;margin-left:auto;margin-right:auto\">\r\n      <div class=\"carousel-caption\" style=\"position:absolute;bottom:2rem;text-align:center\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <ngb-carousel *ngIf=\"false && finishedLoading && numImgLoaded > 0\">\r\n      <ng-template *ngFor=\"let item of images; let i = index\" ngbSlide>\r\n        <ng-container *ngIf=\"item !== null && item.img && item.loadingStatus===htmlImageLoadingStatus.Loaded\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img [src]=\"item.img.src\" class=\"slide-img-by-dataurl\" alt=\"{{ item.titel }}\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>{{ item.name }}</h3>\r\n            <p *ngIf=\"item.desc\">{{ item.desc }}}</p>\r\n          </div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ngb-carousel>\r\n  </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showRaumRestForm($event)\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> Zeige fehlendes Inventar\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Bereits inventarisiert</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\" sortable=\"Bezeichnung\">Bezeichnung</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Typ</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Menge</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of inventarListDone; let rowNr = index\">\r\n      <th scope=\"row\">{{ rowNr + 1 }}</th>\r\n      <td>{{ item.Bezeichnung }}</td>\r\n      <td>{{ item.Typ }}</td>\r\n      <td>{{ item.Menge }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showRaumDoneForm($event)\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> Zeige zugewiesenes Inventar\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Dieses Inventar fehlt noch</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\" sortable=\"Bezeichnung\">Bezeichnung</th>\r\n      <th scope=\"col\" sortable=\"Typ\">Typ</th>\r\n      <th scope=\"col\" sortable=\"Menge\">Menge</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of inventarListRest; let rowNr = index\">\r\n      <th scope=\"row\">{{ rowNr + 1 }}</th>\r\n      <td>{{ item.Bezeichnung }}</td>\r\n      <td>{{ item.Typ }}</td>\r\n      <td>{{ item.Menge }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/scanner/scanner.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/scanner/scanner.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h6 class=\"modal-title\">Barcode scannen!</h6>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <select (change)=\"onDeviceSelectChange($event.target.value)\">\r\n    <option value=\"\" [selected]=\"!currentDevice\">No Device Selected</option>\r\n    <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\"\r\n            [selected]=\"currentDevice && device.deviceId === currentDevice.deviceId\">{{device.label}}</option>\r\n  </select>\r\n  <div class=\"scanner-view-port\">\r\n    <zxing-scanner\r\n      #scanner\r\n      [style.height]=\"'5rem'\"\r\n\r\n      [torch]=\"torchEnabled\"\r\n      [(device)]=\"currentDevice\"\r\n      (scanSuccess)=\"onCodeResult($event)\"\r\n      [formats]=\"formatsEnabled\"\r\n      [tryHarder]=\"tryHarder\"\r\n      (permissionResponse)=\"onHasPermission($event)\"\r\n      (camerasFound)=\"onCamerasFound($event)\"\r\n      (torchCompatible)=\"onTorchCompatible($event)\">\r\n    </zxing-scanner>\r\n    <div *ngIf=\"currentDevice\" id=\"ScannerFocusRedLine\"></div>\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\" *ngIf=\"allowBarcodeInput\">\r\n    <input type=\"text\" class=\"form-control\" #bcInputTest\r\n           placeholder=\"Barcode\" aria-label=\"Barcode\" aria-describedby=\"button-addon2\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-primary\" type=\"button\" id=\"button-addon2\"\r\n              (click)=\"bctest(bcInputTest.value)\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"scanResultCurrent\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{ scanResultCurrent.barcode }}</h5>\r\n\r\n      <div *ngIf=\"scanResultCurrent.image && scanResultCurrent.image.data_url\" class=\"float-right\">\r\n        <img [src]=\"scanResultCurrent.image.data_url\" style=\"max-width:200%;max-height:150px\">\r\n      </div>\r\n\r\n      <p class=\"card-text\">\r\n        <span class=\"font-weight-bold\">{{ scanResultCurrent.typToString }}:</span> {{ scanResultCurrent.infos }}\r\n      </p>\r\n\r\n    </div>\r\n    <div class=\"btn-group w-100\">\r\n      <button class=\"btn btn-success btn-sm col-6\" (click)=\"applyResult()\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n      <button class=\"col-6 btn btn-danger\" ngbButton (click)=\"clearResult()\"><fa-icon [icon]=\"faRemove\"></fa-icon></button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"scanResultHistory.length > 0\">\r\n    <hr class=\"mt-3\">\r\n    <div class=\"w-100 text-right\">\r\n      <button class=\"btn btn-secondary btn-sm\" (click)=\"clearHistory()\">clear history</button>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of scanResultHistory\">\r\n      <div class=\"card mt-2\">\r\n        <div class=\"card-body\" style=\"padding:.5rem\">\r\n          <h5 class=\"card-title\">{{ item.barcode }}</h5>\r\n\r\n          <div *ngIf=\"item.image && item.image.data_url\" class=\"float-right\">\r\n            <img [src]=\"item.image.data_url\" style=\"max-width:100%;max-height:50px\">\r\n          </div>\r\n\r\n          <p class=\"card-text\">\r\n            <span class=\"font-weight-bold\">{{ item.typToString }}:</span> {{ item.infos }}\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"btn-group w-100\">\r\n          <button class=\"btn btn-success btn-sm col-6\" (click)=\"applyHistoryResult(item)\"><fa-icon [icon]=\"faCheck\"></fa-icon></button>\r\n          <button class=\"btn btn-danger btn-sm col-6\" (click)=\"removeResult(item)\"><fa-icon [icon]=\"faRemove\"></fa-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showSearchForm($event)\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> <fa-icon [icon]=\"faSearch\"></fa-icon> Artikel suchen\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ formTitle }}</h4>\r\n</div>\r\n<div class=\"modal-body artikel-form\" [ngClass]=\"{ 'artikel-form-kunst': formType === formTypeKunst }\">\r\n  <form #myForm=\"ngForm\">\r\n    <div *ngIf=\"formLabels.Hersteller.isVisible\" class=\"form-group\">\r\n      <label for=\"Hersteller\" class=\"d-none\">{{ formLabels.Hersteller.label }}:</label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Hersteller.labelShort }}</span>\r\n        </div>\r\n      <input\r\n        id=\"Hersteller\"\r\n        name=\"Hersteller\"\r\n        [placeholder]=\"formLabels.Hersteller.placeholder\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [(ngModel)]=\"artikelDaten.Hersteller\"\r\n        (selectItem)=\"onSelectHersteller($event)\"\r\n        [ngbTypeahead]=\"search\"\r\n        [inputFormatter]=\"formatter\"\r\n        [resultFormatter]=\"formatter\"\r\n        (change)=\"onChangeHersteller($event)\"\r\n        (focus)=\"focus$.next($any($event).target.value)\"\r\n        (click)=\"click$.next($any($event).target.value)\"\r\n        #instance=\"ngbTypeahead\"\r\n      />\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Gruppe.isVisible\" class=\"form-group\">\r\n      <label for=\"typ\" class=\"d-none\">{{ formLabels.Gruppe.label }}: </label>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Gruppe.labelShort }}</span>\r\n        </div>\r\n        <input id=\"Gruppe\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Gruppe.placeholder\"\r\n               name=\"Gruppe\"\r\n               [(ngModel)]=\"artikelDaten.Gruppe\"\r\n               (change)=\"onChangeGruppe($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectGruppe($event)\"\r\n               [ngbTypeahead]=\"searchGruppen\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusGrp$.next($any($event).target.value)\"\r\n               (click)=\"clickGrp$.next($any($event).target.value)\"\r\n               #instanceGrp=\"ngbTypeahead\"\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Kategorie.isVisible\" class=\"form-group\">\r\n      <label for=\"typ\" class=\"d-none\">{{ formLabels.Kategorie.label }}: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Kategorie.labelShort }}</span>\r\n        </div>\r\n        <input id=\"Kategorie\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Kategorie.placeholder\"\r\n               name=\"Kategorie\"\r\n               [(ngModel)]=\"artikelDaten.Kategorie\"\r\n               (change)=\"onChange($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectKategorie($event)\"\r\n               [ngbTypeahead]=\"searchKategorien\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusKtg$.next($any($event).target.value)\"\r\n               (click)=\"clickKtg$.next($any($event).target.value)\"\r\n               #instanceKtg=\"ngbTypeahead\"\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Bezeichnung.isVisible\" class=\"form-group\" [ngClass]=\"{\r\n        'has-error': bezeichnung.dirty && (bezeichnung.invalid || numBezeichnungExists === 1),\r\n        'has-info': bezeichnung.dirty && numBezeichnungExists === -1\r\n        }\">\r\n      <label for=\"Bezeichnung\" class=\"d-none\">{{ formLabels.Bezeichnung.label }}: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Bezeichnung.labelShort }}</span>\r\n        </div>\r\n        <input id=\"Bezeichnung\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Bezeichnung.placeholder\"\r\n               name=\"Bezeichnung\"\r\n               [(ngModel)]=\"artikelDaten.Bezeichnung\"\r\n               #bezeichnung=\"ngModel\"\r\n               (change)=\"checkIfABezeichnungExistsGlobal()\"\r\n               (input)=\"onInput($event)\"\r\n               required\r\n        >\r\n      </div>\r\n      <div *ngIf=\"bezeichnung.valid\">\r\n        <div *ngIf=\"numBezeichnungExists === -1\" class=\"help-block\">Artikelangabe wird geprüft {{ numBezeichnungExists }}</div>\r\n        <div *ngIf=\"numBezeichnungExists > 0\" class=\"help-block\">Artikel existiert bereits {{ numBezeichnungExists }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Typ.isVisible\" class=\"form-group\">\r\n      <label for=\"typ\" class=\"d-none\">{{ formLabels.Typ.label }}: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Typ.labelShort }}</span>\r\n        </div>\r\n        <input id=\"typ\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Typ.placeholder\"\r\n               name=\"typ\"\r\n               [(ngModel)]=\"artikelDaten.Typ\"\r\n               (change)=\"onChange($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectTypen($event)\"\r\n               [ngbTypeahead]=\"searchTypen\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusTyp$.next($any($event).target.value)\"\r\n               (click)=\"clickTyp$.next($any($event).target.value)\"\r\n               #instanceTyp=\"ngbTypeahead\"\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Groesse.isVisible\" class=\"form-group\">\r\n      <label for=\"Groesse\" class=\"d-none\">{{ formLabels.Groesse.label }}: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Groesse.labelShort }}</span>\r\n        </div>\r\n        <input id=\"Groesse\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Groesse.placeholder\"\r\n               name=\"Groesse\"\r\n               [(ngModel)]=\"artikelDaten.Groesse\"\r\n               (change)=\"onChange($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectGroessen($event)\"\r\n               [ngbTypeahead]=\"searchGroessen\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusGrs$.next($any($event).target.value)\"\r\n               (click)=\"clickGrs$.next($any($event).target.value)\"\r\n               #instanceGrs=\"ngbTypeahead\"\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"formLabels.Farbe.isVisible\" class=\"form-group\">\r\n      <label for=\"Farbe\" class=\"d-none\">{{ formLabels.Farbe.label }}: </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">{{ formLabels.Farbe.labelShort }}</span>\r\n        </div>\r\n        <input id=\"Farbe\" class=\"form-control\"\r\n               [placeholder]=\"formLabels.Farbe.placeholder\"\r\n               name=\"Farbe\"\r\n               [(ngModel)]=\"artikelDaten.Farbe\"\r\n               (change)=\"onChange($event)\"\r\n               (input)=\"onInput($event)\"\r\n               (selectItem)=\"onSelectFarben($event)\"\r\n               [ngbTypeahead]=\"searchFarben\"\r\n               [inputFormatter]=\"formatter\"\r\n               [resultFormatter]=\"formatter\"\r\n               (focus)=\"focusFa$.next($any($event).target.value)\"\r\n               (click)=\"clickFa$.next($any($event).target.value)\"\r\n               #instanceFa=\"ngbTypeahead\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <pre>{{closeResult}}</pre>\r\n  <p class=\"d-none\">select-create-artikel works!</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\" [disabled]=\"!formIsValid || !myForm.form.valid\">Artikel anlegen</button>\r\n  <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\r\n  <div>\r\n    <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [maxSize]=\"maxSize\" [pageSize]=\"pageSize\" (pageChange)=\"onPageChange(page)\"></ngb-pagination>\r\n  </div>\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"card col-sm-6\" *ngFor=\"let item of listExistingArticlePage\">\r\n      <img *ngIf=\"item.img_id\" class=\"card-img-top\" src=\"...\" alt=\"\">\r\n      <div class=\"card-body \">\r\n        <h6 class=\"card-title\">{{ item.Bezeichnung }}</h6>\r\n        <div *ngIf=\"item.Hersteller\"><small>Hst: {{ item.Hersteller }}</small></div>\r\n        <div *ngIf=\"item.Gruppe\"><small>Grp: {{ item.Gruppe }}</small></div>\r\n        <div *ngIf=\"item.Typ\"><small>Typ: {{ item.Typ }}</small></div>\r\n        <div *ngIf=\"item.Kategorie\"><small>Ktg: {{ item.Kategorie }}</small></div>\r\n        <div *ngIf=\"item.Farbe || item.Groesse\"><small>{{ item.Farbe }} {{ item.Groesse }}</small></div>\r\n        <div *ngIf=\"item.inventar_count\"><small>{{ item.inventar_count }}</small></div>\r\n      </div>\r\n      <div class=\"card-footer text-center\">\r\n        <button (click)=\"applyItemAsInput(item)\" class=\"btn btn-sm btn-info\">Als Vorlage übernehmen</button>\r\n        <button (click)=\"applyItemAsArtikel(item)\" class=\"btn btn-sm btn-primary\">Artikel Übernehmen</button>\r\n      </div>\r\n    </div><!-- Close: div.card -->\r\n  </div><!-- Close: div.row -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showSearchForm($event)\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> <fa-icon [icon]=\"faSearch\"></fa-icon> Raum suchen\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Raum anlegen</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #raumForm=\"ngForm\">\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{\r\n        'has-error': raum.dirty && (raum.invalid || raumExistsStatus === 1),\r\n        'has-info': raum.dirty && raumExistsStatus === -1\r\n        }\">\r\n        <label for=\"dateOfBirth\" class=\"d-none\">Raum-Nr.: </label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">RNr</span>\r\n          </div>\r\n          <input id=\"Raum\" class=\"form-control\" placeholder=\"Raumnr\"\r\n                 name=\"Raum\"\r\n                 [(ngModel)]=\"raumDaten.Raum\"\r\n                 #raum=\"ngModel\"\r\n                 (change)=\"checkIfRaumExists()\"\r\n                 required\r\n          >\r\n        </div>\r\n        <div *ngIf=\"raum.valid\">\r\n          <div *ngIf=\"raumExistsStatus===-1\" class=\"help-block\">Raumangabe wird geprüft</div>\r\n          <div *ngIf=\"raumExistsStatus===1\" class=\"help-block\">Raum existiert bereits</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{\r\n        'has-warning': bezeichnung.dirty && (bezeichnung.invalid || bezeichnungExistsStatus === 1),\r\n        'has-info': bezeichnung.dirty && bezeichnungExistsStatus === -1\r\n        }\">\r\n        <label for=\"Bezeichnung\" class=\"d-none\">Raum-Bez.: </label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Bezg</span>\r\n          </div>\r\n          <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Raumbezeichnung\"\r\n                 name=\"Bezeichnung\"\r\n                 [(ngModel)]=\"raumDaten.Raumbezeichnung\"\r\n                 #bezeichnung=\"ngModel\"\r\n                 (change)=\"checkIfRaumbezeichnungExists()\"\r\n          >\r\n        </div>\r\n        <div *ngIf=\"bezeichnung.valid\">\r\n          <div *ngIf=\"bezeichnungExistsStatus===-1\" class=\"help-block\">Bezeichnung wird geprüft</div>\r\n          <div *ngIf=\"bezeichnungExistsStatus===1\" class=\"help-block\">Es existiert bereits ein Raum mit dieser Bezeichnung</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"Etage\" class=\"d-none\">Etage: </label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Etage</span>\r\n          </div>\r\n          <input id=\"Etage\" class=\"form-control\" placeholder=\"Etage\"\r\n                 name=\"Etage\"\r\n                 [(ngModel)]=\"raumDaten.Etage\"\r\n                 #etage=\"ngModel\"\r\n                 required\r\n          >\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"newRaumBarcode\" class=\"d-none\">Barcode: </label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">BCode</span>\r\n          </div>\r\n          <input readonly id=\"newRaumBarcode\" #newRaumBarcode class=\"form-control formcontrol-edit-barcode\" (paste)=\"$event.preventDefault()\" placeholder=\"Barcode\"\r\n                 name=\"code\"\r\n                 [(ngModel)]=\"raumDaten.code\"\r\n                 #code=\"ngModel\"\r\n          >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner(newRaumBarcode)\"><fa-icon [icon]=\"faCamera\"></fa-icon></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"false\">\r\n        <label for=\"dateOfBirth\">Datum (Dummy)</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit($event)\" [disabled]=\"!formIsValid || !raumForm.form.valid\">Raum anlegen</button>\r\n    <div *ngIf=\"formError\" class=\"alert-danger\"> {{formError}} </div>\r\n  </div>\r\n\r\n<!-- button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Raum zuordnen</button -->\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n  <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showCreateForm($event)\">\r\n    <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> <fa-icon [icon]=\"faPlus\"></fa-icon> Neuen Artikel anlegen\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Artikelauswahl</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <label for=\"typeahead-prevent-manual-entry\">Artikel suchen:</label>\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\r\n    </div>\r\n    <input id=\"typeahead-prevent-manual-entry\" #searchArtikelInput type=\"text\" class=\"form-control\"\r\n           (selectItem)=\"onSelectItem($event)\"\r\n           [(ngModel)]=\"model\"\r\n           [ngbTypeahead]=\"search\"\r\n           [inputFormatter]=\"formatter\"\r\n           [resultFormatter]=\"formatter\"\r\n           [editable]='false' />\r\n  </div>\r\n  <hr>\r\n  <pre class=\"d-none\">Model: {{ model | json }}</pre>\r\n\r\n  <p class=\"d-none\">select-search-artikel works! {{ clientId }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header p-0\" style=\"padding:0.1rem\">\r\n  <div class=\"btn-group row no-gutters w-100\">\r\n    <button class=\"btn btn-primary col-10 text-left pl-3\" (click)=\"showCreateForm($event)\">\r\n      <fa-icon [icon]=\"faSignOutAlt\" class=\"mr-3\"></fa-icon> <fa-icon [icon]=\"faPlus\"></fa-icon> Neuen Raum anlegen\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger col-2\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Raumauswahl</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <label for=\"typeahead-prevent-manual-entry\" class=\"mb-0\">Raum suchen:</label>\r\n  <div class=\"input-group mb-1\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\r\n    </div>\r\n  <input id=\"typeahead-prevent-manual-entry\" #searchInput type=\"text\" class=\"form-control\"\r\n         (selectItem)=\"onSelectItem($event)\"\r\n         [(ngModel)]=\"model\"\r\n         [ngbTypeahead]=\"search\"\r\n         [inputFormatter]=\"formatter\"\r\n         [resultFormatter]=\"formatter\"\r\n         [editable]='false' />\r\n  </div>\r\n  <hr>\r\n\r\n  <p class=\"d-none\">select-search-raum works! {{ gebaeudeId }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body\">\r\n  <ngb-alert [type]=\"'danger'\" *ngIf=\"error\" (close)=\"error = ''\"></ngb-alert>\r\n\r\n  <div class=\"editor\" *ngIf=\"imageUrl\">\r\n    <div class=\"canvas\">\r\n      <angular-cropper\r\n          #angularCropper\r\n          *ngIf=\"imageUrl\"\r\n          [cropperOptions]=\"config\"\r\n          [imageUrl]=\"imageUrl\">\r\n      </angular-cropper>\r\n    </div>\r\n\r\n\r\n    <div class=\"toolbar-close\">\r\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"close()\"><fa-icon [icon]=\"faClose\"></fa-icon></button>\r\n    </div>\r\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body\">\n  {{ titel }}\n  <ngb-alert [type]=\"'danger'\" *ngIf=\"error\" (close)=\"error = ''\"></ngb-alert>\n\n  <div class=\"editor\" *ngIf=\"imageUrl\">\n    <div class=\"canvas\">\n      <angular-cropper\n        #angularCropper\n        *ngIf=\"imageUrl\"\n        [cropperOptions]=\"config\"\n        [imageUrl]=\"imageUrl\">\n      </angular-cropper>\n    </div>\n\n\n    <div class=\"toolbar-close\">\n      <button class=\"btn btn-sm btn-danger btn-icon-cirular\" (click)=\"close()\"><fa-icon [icon]=\"faClose\"></fa-icon></button>\n    </div>\n    <div class=\"toolbar btn-group btn-group-sm rounded\">\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomIn()\"><fa-icon [icon]=\"faSearchPlus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"zoomOut()\"><fa-icon [icon]=\"faSearchMinus\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateLeft()\"><fa-icon [icon]=\"faRotateLeft\"></fa-icon></button>\n      <button class=\"btn btn-sm btn-light\" (click)=\"rotateRight()\"><fa-icon [icon]=\"faRotateRight\"></fa-icon></button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-inventory/select-inventory.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-inventory/select-inventory.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"false && lastInventoryDetails as inv\">\r\n  Möchten Sie die vorherige Inventur fortsetzen?<br>\r\n  <div *ngIf=\"1\" class=\"row\">\r\n    <div class=\"col-3\">Titel</div>\r\n    <div class=\"col-8\">{{ inv.Titel }}</div>\r\n  </div>\r\n  <div *ngIf=\"1\" class=\"row\">\r\n    <div class=\"col-3\">Mandant</div>\r\n    <div class=\"col-8\">{{ inv.Mandant }}</div>\r\n  </div>\r\n  <div *ngIf=\"1\" class=\"row\">\r\n    <div class=\"col-3\">Gebaeude</div>\r\n    <div class=\"col-8\">{{ inv.Gebaeude }}</div>\r\n  </div>\r\n  <div *ngIf=\"inv.Raum\" class=\"row\">\r\n    <div class=\"col-3\">Raum</div>\r\n    <div class=\"col-8\">{{ inv.Raum }}</div>\r\n  </div>\r\n  <div *ngIf=\"inv.Raumbezeichnung\" class=\"row\">\r\n    <div class=\"col-3\">R-Bezeichnung</div>\r\n    <div class=\"col-8\">{{ inv.Raumbezeichnung }}</div>\r\n  </div>\r\n  <div *ngIf=\"inv.Etage\" class=\"row\">\r\n    <div class=\"col-3\">Etage</div>\r\n    <div class=\"col-8\">{{ inv.Etage }}</div>\r\n  </div>\r\n  <button class=\"btn btn-primary\" (click)=\"gotoLastInventory()\">Fortsetzen</button>\r\n</div>\r\n\r\n<h5>Inventarisierung auswählen</h5>\r\n<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"select-inventory\">\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"row no-gutters input-group mb-1\">\r\n      <div class=\"col-auto input-group-prepend\">\r\n        <span class=\"input-group-text border-secondary\">Kunde</span>\r\n      </div>\r\n      <div ngbDropdown #myDropKunde=\"ngbDropdown\" class=\"col myDropdown\">\r\n        <button (click)=\"$event.preventDefault(); $event.stopPropagation(); myDropKunde.isOpen() ? myDropKunde.close() : myDropKunde.open();\"\r\n                class=\"col btn btn-outline-secondary\" id=\"dropKunde\" ngbDropdownAnchor>\r\n          <ng-container *ngIf=\"client\"><span>{{ client.Mandant }}</span></ng-container>\r\n          <ng-container *ngIf=\"!client && statusLoadingUserInventories < 5\"><span>Kunden werden geladen</span></ng-container>\r\n          <ng-container *ngIf=\"!client && statusLoadingUserInventories >= 5 && clients && clients.length > 0\"><span>Bitte Kunde auswählen</span></ng-container>\r\n          <ng-container *ngIf=\"!client && statusLoadingUserInventories >= 5 && (!clients || clients.length === 0)\"><span>Keine Auswahl vorhanden</span></ng-container>\r\n        </button>\r\n\r\n        <div ngbDropdownMenu aria-labelledby=\"dropKunde\" class=\"border-secondary rounded-bottom\">\r\n          <button ngbDropdownItem *ngFor=\"let _client of clients; let i = index\"\r\n                  (click)=\"$event.preventDefault(); $event.stopPropagation(); clientChanged(i)\"\r\n                  [attr.data-index]=\"i\"\r\n                  [value]=\"i\">{{_client.Mandant}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"row no-gutters input-group mb-1\">\r\n      <div class=\"col-auto input-group-prepend\">\r\n        <span class=\"input-group-text border-secondary\">Inventur</span>\r\n      </div>\r\n      <div ngbDropdown #myInventoryDrop=\"ngbDropdown\" class=\"col myDropdown\">\r\n        <button (click)=\"$event.preventDefault(); $event.stopPropagation(); myInventoryDrop.isOpen() ? myInventoryDrop.close() : myInventoryDrop.open();\"\r\n                class=\"col btn btn-outline-secondary\" id=\"dropInventory\" ngbDropdownAnchor>\r\n          <ng-container *ngIf=\"inventory && lastInventory && inventory.jobid === lastInventory.jobid\"><span>{{ inventory.Titel }} (Zuletzt in Arbeit)</span></ng-container>\r\n          <ng-container *ngIf=\"inventory && (!lastInventory || inventory.jobid !== lastInventory.jobid)\"><span>{{ inventory.Titel }}</span></ng-container>\r\n          <ng-container *ngIf=\"!inventory && statusLoadingUserInventories < 5\"><span>Inventarisierungen werden geladen</span></ng-container>\r\n          <ng-container *ngIf=\"!inventory && statusLoadingUserInventories >= 5 && inventoriesSelectable && inventoriesSelectable.length > 0\"><span>Bitte Inventur auswählen</span></ng-container>\r\n          <ng-container *ngIf=\"!inventory && statusLoadingUserInventories >= 5 && (!inventoriesSelectable || inventoriesSelectable.length === 0)\"><span>Keine Auswahl vorhanden</span></ng-container>\r\n        </button>\r\n\r\n        <div ngbDropdownMenu aria-labelledby=\"dropInventory\" class=\"border-secondary rounded-bottom\">\r\n          <button ngbDropdownItem *ngFor=\"let _inventory of inventoriesSelectable; let i = index\"\r\n                  (click)=\"$event.preventDefault(); $event.stopPropagation(); inventorySelectionChanged(_inventory.jobid)\"\r\n                  [attr.data-index]=\"_inventory.jobid\"\r\n                  [value]=\"_inventory.jobid\">{{_inventory.Titel}}\r\n            <ng-container *ngIf=\"lastInventory && _inventory.jobid === lastInventory.jobid\">\r\n            (Zuletzt in Arbeit)\r\n          </ng-container></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"true\" class=\"form-group\">\r\n    <div class=\"row no-gutters input-group mb-1\">\r\n      <div class=\"col-auto input-group-prepend\">\r\n        <span class=\"input-group-text border-secondary\">Standort</span>\r\n      </div>\r\n      <div ngbDropdown #myGebaeudeDrop2=\"ngbDropdown\" class=\"col myDropdown\">\r\n        <button (click)=\"$event.preventDefault(); $event.stopPropagation(); myGebaeudeDrop2.isOpen() ? myGebaeudeDrop2.close() : myGebaeudeDrop2.open();\"\r\n                [disabled]=\"!inventory\"\r\n                class=\"col btn btn-outline-secondary\" id=\"dropGebaeude2\" ngbDropdownAnchor>\r\n          <ng-container *ngIf=\"building\"><span>{{ building.Gebaeude }}</span> <span *ngIf=\"lastBuilding && building.gid === lastBuilding.gid\">(Zuletzt in Arbeit)</span></ng-container>\r\n          <ng-container *ngIf=\"!building && statusLoadingUserInventories < 5\"><span>Standorte werden geladen</span></ng-container>\r\n          <ng-container *ngIf=\"!building && statusLoadingUserInventories >= 5 && buildings && buildings.length > 0\"><span>Bitte Standort auswählen</span></ng-container>\r\n          <ng-container *ngIf=\"!building && statusLoadingUserInventories >= 5 && (!buildings || buildings.length === 0)\"><span>Keine Auswahl vorhanden</span></ng-container>\r\n        </button>\r\n\r\n        <div ngbDropdownMenu aria-labelledby=\"dropGebaeude2\" class=\"border-secondary rounded-bottom\" style=\"max-height:50vh;overflow-y:scroll\">\r\n          <button ngbDropdownItem *ngFor=\"let _bldg of buildings; let i = index\"\r\n                  (click)=\"$event.preventDefault(); $event.stopPropagation(); buildingChanged(i)\"\r\n                  [attr.data-index]=\"i\"\r\n                  [value]=\"i\">{{_bldg.Gebaeude}}\r\n            <ng-container *ngIf=\"lastBuilding && _bldg.gid === lastBuilding.gid\">\r\n              (Zuletzt in Arbeit)\r\n            </ng-container></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <app-progressbar [title]=\"'Anzahl Elemente'\" [value]=\"doneElements\" [total]=\"totalElements\"></app-progressbar>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col col-sm-6 offset-sm-6\">\r\n        <button [disabled]=\"!building || loading\" class=\"btn btn-primary w-100\">Starten</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-2\">\r\n    <ng-container [ngSwitch]=\"statusLoadingUserInventories\">\r\n      <span *ngSwitchCase=\"0\"></span>\r\n      <ngb-alert *ngSwitchCase=\"1\" [type]=\"'danger'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Warte auf Internet-Verbindung</ngb-alert>\r\n      <ngb-alert *ngSwitchCase=\"2\" [type]=\"'danger'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Warte auf Server-Verbindung</ngb-alert>\r\n      <ngb-alert *ngSwitchCase=\"3\" [type]=\"'warning'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Verbindung wird aufgebaut</ngb-alert>\r\n      <ngb-alert *ngSwitchCase=\"4\" [type]=\"'info'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Daten werden abgerufen</ngb-alert>\r\n      <ngb-alert *ngSwitchCase=\"5\" [type]=\"'success'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Auswahldaten wurden geladen</ngb-alert>\r\n      <ngb-alert *ngSwitchCase=\"6\" [type]=\"'danger'\" [dismissible]=\"false\">[{{statusLoadingUserInventories}}] Leider ist etwas schiefgelaufen</ngb-alert>\r\n    </ng-container>\r\n    <ngb-alert [type]=\"'info'\" *ngIf=\"status\" class=\"alert-info\">{{status}}</ngb-alert>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\" *ngIf=\"tablesLoadingStarted\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"tablesLoadingDetailsIsExpanded=!tablesLoadingDetailsIsExpanded\"\r\n            [attr.aria-expanded]=\"!tablesLoadingDetailsIsExpanded\"\r\n            aria-controls=\"collapseExample\">\r\n      Details {{ tablesLoadingDetailsIsExpanded ? \"ausblenden\" : \"einblenden\"}}\r\n    </button>\r\n    <div class=\"card\" *ngIf=\"tablesLoadingDetailsIsExpanded\">\r\n      <div class=\"card-body\">\r\n        <div *ngFor=\"let item of tablesLoadingStatus; let t = index\">\r\n          {{ item.table }} {{ item.status }}\r\n          <p><ngb-progressbar type=\"success\"\r\n                            [value]=\"item.progress\"\r\n                            [striped]=\"!item.finished\"\r\n                            [animated]=\"!item.finished\">{{item.current}} von {{item.total}}</ngb-progressbar></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"lastMetaMsg !== '' && !tablesLoadingStarted\">\r\n    <ngb-alert [type]=\"'success'\" (close)=\"lastMetaMsg = ''\">{{ lastMetaMsg }}</ngb-alert>\r\n  </div>\r\n\r\n  <div *ngIf=\"lastMetaErr !== '' && !tablesLoadingStarted\">\r\n    <ngb-alert [type]=\"'danger'\" (close)=\"lastMetaErr = ''\">{{ lastMetaErr }}</ngb-alert>\r\n  </div>\r\n\r\n  <div *ngIf=\"showListmetaMsg\">\r\n    <p *ngFor=\"let msg of listMetaMsg\">\r\n      <ngb-alert [type]=\"msg.type\" (close)=\"closeMsg(msg)\">{{ msg.message }}</ngb-alert>\r\n    </p>\r\n  </div>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 1\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"blobs-overlay\" *ngIf=\"blobAlert && useOverlay === 2\">\r\n  <div class=\"blobs-container\">\r\n    <ng-container [ngSwitch]=\"blobAlert\">\r\n      <div class=\"blob red animate\" *ngSwitchCase=\"'danger'\"></div>\r\n      <div class=\"blob green animate\" *ngSwitchCase=\"'success'\"></div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-1\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Barcode-Index neu aufbauen</h5>\r\n    <p class=\"card-text\">\r\n      Der Barcode-Index dient der schnelleren Auswertung von Barcode-Eingaben.\r\n      Sollten Barcodes nicht gefunden werden, obwohl sie vorhanden sein sollten,\r\n      nutzen sie diese Funktion, um den Index basierend auf Objektkatalog-, Inventar- und Raumdaten\r\n      neu aufzubauen\r\n    </p>\r\n    <button class=\"btn btn-primary\" [disabled]=\"buildBcLookup\" (click)=\"reIndexBarcodeLookup()\">reIndexBarcodeLookup</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-1\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Sound und visuelles Feedback testen</h5>\r\n    <div class=\"card-text\">\r\n      Barcode-Scans werden mit akkustischen und visuellen Feedback quittiert.\r\n      <h6>Erfolgreiche Scans:</h6>\r\n      Grüne Welle und einer Piep-Ton\r\n\r\n      <h6>Fehlerhafte Scan:</h6>\r\n      Rote Welle und länger anhaltender Piep-Ton\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"playSuccess()\">Sound Success</button>\r\n    <button class=\"btn btn-danger\" (click)=\"playError()\">Sound Error</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mt-1\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Manuelle Barcode-Simulation</h5>\r\n    <div class=\"card-text\">\r\n      Die Barcode-Eingabe kann zu Testzwecken manuelle simuliert werden.\r\n    </div>\r\n\r\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup (change)=\"changeManualBCInput($event)\" name=\"radioBasic\" [(ngModel)]=\"enableManualBCInput\">\r\n\r\n      <label ngbButtonLabel class=\"btn-primary\">\r\n        <input ngbButton type=\"radio\" [value]=\"true\"> On\r\n      </label>\r\n      <label ngbButtonLabel class=\"btn-primary\">\r\n        <input ngbButton type=\"radio\" [value]=\"false\"> Off\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Browser(Handy)-Datenbank leeren</h5>\r\n    <p class=\"card-text\">\r\n      Mit dieser Funktion werden 'alle' Datenbank-Inhalte des Browsers/Handy gelöscht.<br>\r\n      Unsynchronisierte Änderungen gehen hierbei verloren!<br>\r\n      Benutzen Sie diese Funktion nur wenn alle Daten bereits synchronisiert sind!<br>\r\n      Datenbank: {{ dbName }} Version {{ dbVersion }}\r\n    </p>\r\n    <button class=\"btn btn-danger\" [disabled]=\"buildBcLookup\" (click)=\"dbClear()\">Datenbank leeren</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Browser(Handy)-Datenbank löschen</h5>\r\n    <p class=\"card-text\">\r\n      Mit dieser Funktion wird die Browser/Handy-Datenbank gelöscht.<br>\r\n      Unsynchronisierte Änderungen gehen hierbei verloren!<br>\r\n      Die Datenbank-Struktur wird nach einem Seiten-Reload neu aufgebaut.<br>\r\n      Benutzen Sie diese Funktion nur wenn alle Daten bereits synchronisiert sind\r\n      oder schwerwiegende Fehler aufgetreten sind.<br>\r\n      Datenbank: {{ dbName }} Version {{ dbVersion }}\r\n    </p>\r\n    <button class=\"btn btn-danger\" [disabled]=\"buildBcLookup\" (click)=\"dbDelete()\">Datenbank löschen</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/ngbheader/ngbheader.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/ngbheader/ngbheader.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light xxx-bg-light app-navbar\">\r\n  <span class=\"navbar-brand\">\r\n    <img class=\"logo\" src=\"/assets/mertens-logo-221x45.png\">\r\n  </span>\r\n  <button class=\"navbar-toggler\" type=\"button\"\r\n          aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\"\r\n          aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\r\n    <ul *ngIf=\"!isLoginPage\" class=\"navbar-nav ml-auto\">\r\n\r\n      <li *ngIf=\"false\" routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/select-inventory\">Select</a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"continueLastInventory()\">Inventarisieren</a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/sync\">Sync</a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/settings\"><fa-icon [icon]=\"faCog\"></fa-icon></a>\r\n      </li>\r\n\r\n\r\n      <li routerLinkActive=\"active\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/auth/logout\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/progressbar/progressbar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/progressbar/progressbar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"mb-0\">\r\n  <span class=\"d-none d-md-inline\">{{title}}: </span>\r\n  <span class=\"d-inline d-md-none\">{{short}}: </span>\r\n  {{totalText}}\r\n</label>\r\n<div>\r\n\r\n  <div class=\"progress progress-elemente\" (click)=\"onClickRest($event)\"  [ngClass]=\"{'bg-danger' : total > 0}\">\r\n    <div class=\"progress-bar bg-success\" (click)=\"onClickBarDone($event)\"  [ngClass]=\"type\" role=\"progressbar\" [style.width]=\"progressAmount + '%'\">\r\n    </div>\r\n    <span class=\"progress-text\">{{donePercentText}}</span>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6 text-success\">\r\n\r\n      <button type=\"button\" (click)=\"onClickDone($event)\" class=\"btn btn-sm btn-light btn-sx text-success\">\r\n        <span class=\"d-none d-md-inline\">\r\n        Erledigt </span>{{doneAmountText}}\r\n      </button>\r\n\r\n    </div>\r\n    <div class=\"col-6 text-danger text-right\">\r\n\r\n      <button type=\"button\" (click)=\"onClickRest($event)\" class=\"btn btn-sm btn-light btn-sx text-danger\">\r\n        <span class=\"d-none d-md-inline\">\r\n        Rest </span>{{restAmountText}}\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scannerdetection/scannerdetection.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scannerdetection/scannerdetection.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/status-check/status-check.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/status-check/status-check.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <span class=\"badge mr-2\" [ngClass]=\"{\r\n        'badge-success':currentState?.hasNetworkConnection,\r\n        'badge-danger':!currentState?.hasNetworkConnection\r\n        }\">\r\n      {{ currentState?.hasNetworkConnection ? 'Online' : 'Offline' }}\r\n  </span>\r\n  <span class=\"badge mr-2\" [ngClass]=\"{\r\n        'badge-success': currentState?.hasServerAccess,\r\n        'badge-danger': !currentState?.hasServerAccess\r\n        }\">\r\n      Backend: {{ currentState?.hasServerAccess ? 'ON' : 'OFF' }}\r\n  </span>\r\n  <span class=\"badge mr-2\" [ngClass]=\"{\r\n        'badge-success': currentState?.hasValidSession,\r\n        'badge-danger': !currentState?.hasValidSession\r\n        }\">\r\n      {{ currentState?.hasValidSession ? 'Eingeloggt' : 'Login abgelaufen' }}\r\n  </span>\r\n  <ng-container *ngIf=\"numUnsynced > -1\">\r\n    <span class=\"badge mr-2\" [ngClass]=\"{\r\n        'badge-success':numUnsynced===0,\r\n        'badge-danger':numUnsynced!==0\r\n        }\">\r\n      Unsynced:  {{ numUnsynced }}\r\n    </span>\r\n  </ng-container>\r\n    <span class=\"badge badge-info\">\r\n      v{{currentApplicationVersion}}\r\n    </span>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"frontend\",\"version\":\"1.0.9709\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --aot --host 0.0.0.0 --disable-host-check\",\"startssl\":\"ng serve --aot --port 4235 --host inventory.local --disable-host-check --ssl true --sslCert=./ssl/localhost.crt --sslKey=./ssl/localhost.key --open\",\"startssl_test\":\"ng serve --host inventory.local --publicHost inventory.local:4200/sockjs-node --disable-host-check --ssl true --sslCert=./ssl/localhost.crt --sslKey=./ssl/localhost.key\",\"prebuild-xxx\":\"yarn version --patch\",\"build\":\"ng build\",\"build-prod\":\"ng build --output-path=dist/prod --configuration=production\",\"build-rc\":\"ng build --output-path=dist/rc --configuration=rc\",\"build-dev\":\"ng build --output-path=dist/dev --configuration=dev\",\"firebase-deploy-prod\":\"firebase deploy --only hosting:frontend\",\"firebase-deploy-rc\":\"firebase deploy --only hosting:rc\",\"firebase-deploy-dev\":\"firebase deploy --only hosting:dev\",\"firebase-deploy-all\":\"firebase deploy\",\"startpwaOld\":\"http-server -p 4225 -c-1 dist/frontend -S -C ssh_pem/cert.pem -K ssh_pem/key.pem -o\",\"startpwa\":\"http-server -p 4225 -c-1 dist/frontend -S -C ssl/public_crt.pem -K ssl/private_key.pem -o\",\"startpwa-rc\":\"http-server -p 4245 -c-1 dist/rc -S -C ssl/public_crt.pem -K ssl/private_key.pem -o\",\"startpwa-dev\":\"http-server -p 4255 -c-1 dist/dev -S -C ssl/public_crt.pem -K ssl/private_key.pem -o\",\"startpwa-prod\":\"http-server -p 4265 -c-1 dist/prod -S -C ssl/public_crt.pem -K ssl/private_key.pem -o\",\"buildpwa\":\"yarn run prebuild && ng build --prod --project frontend\",\"rebuild\":\"ng build --prod --project frontend\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"serve-dist\":\"ts-node node-dist-server.ts\",\"serve-dist-js\":\"node node-dist-server.js\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~8.2.14\",\"@angular/common\":\"~8.2.14\",\"@angular/compiler\":\"~8.2.14\",\"@angular/core\":\"~8.2.14\",\"@angular/fire\":\"5.4.2\",\"@angular/forms\":\"~8.2.14\",\"@angular/platform-browser\":\"~8.2.14\",\"@angular/platform-browser-dynamic\":\"~8.2.14\",\"@angular/pwa\":\"^0.1000.5\",\"@angular/router\":\"~8.2.14\",\"@angular/service-worker\":\"~8.2.14\",\"@auth0/angular-jwt\":\"^5.0.2\",\"@fortawesome/angular-fontawesome\":\"0.4.0\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.8\",\"@fortawesome/free-brands-svg-icons\":\"^5.5.0\",\"@fortawesome/free-regular-svg-icons\":\"^5.5.0\",\"@fortawesome/free-solid-svg-icons\":\"^5.5.0\",\"@ng-bootstrap/ng-bootstrap\":\"^5.1.5\",\"@types/crypto-js\":\"3.1.47\",\"@zxing/ngx-scanner\":\"^3.0.0\",\"angular-cropperjs\":\"^1.0.2\",\"bootstrap\":\"^4.4.1\",\"browser-image-compression\":\"^1.0.11\",\"compress\":\"^0.99.0\",\"compressorjs\":\"^1.0.6\",\"cropperjs\":\"^1.5.6\",\"crypto-js\":\"3.3.0\",\"dexie\":\"2.0.4\",\"dexie-observable\":\"1.0.0-beta.7\",\"dexie-relationships\":\"^1.2.11\",\"dexie-syncable\":\"1.0.0-beta.6\",\"es6-shim\":\"^0.35.5\",\"express\":\"^4.17.1\",\"express-cors\":\"0.0.3\",\"faker\":\"^4.1.0\",\"firebase\":\">= 5.5.7 <8\",\"global\":\"^4.4.0\",\"guid-typescript\":\"^1.0.9\",\"json-server\":\"^0.15.1\",\"ngx-toastr\":\"10.0.4\",\"ngx-webcam\":\"0.2.6\",\"rxjs\":\"~6.4.0\",\"ts-md5\":\"^1.2.7\",\"tslib\":\"^1.10.0\",\"web-push\":\"^3.4.4\",\"zone.js\":\"~0.9.1\"},\"devDependencies\":{\"@angular-devkit/architect\":\"<0.900 || ^0.900.0-0 || ^9.0.0-0\",\"@angular-devkit/build-angular\":\"^0.803.23\",\"@angular/cli\":\"8.3.0\",\"@angular/compiler-cli\":\"~8.2.14\",\"@angular/language-service\":\"~8.2.14\",\"@types/browser-image-compression\":\"^1.0.1\",\"@types/jasmine\":\"~3.3.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^14.14.22\",\"codelyzer\":\"^5.0.0\",\"express-serve-static-core\":\"^0.1.1\",\"firebase-tools\":\"^7.12.0\",\"fuzzy\":\"^0.1.3\",\"inquirer\":\"^6.2.2\",\"inquirer-autocomplete-prompt\":\"^1.0.1\",\"jasmine-core\":\"~3.4.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.1.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.0\",\"moment\":\"^2.24.0\",\"protractor\":\"~5.4.0\",\"reflect-metadata\":\"^0.1.13\",\"spa-http-server\":\"^0.9.0\",\"ts-node\":\"^8.8.2\",\"tslint\":\"~5.15.0\",\"typescript\":\"~3.5.3\"}}");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: #fff;\n}\n\ndiv.c1 div.c1-1 {\n  color: green;\n}\n\ndiv.c1-1 {\n  color: red;\n}\n\n.body-bg-login {\n  background: linear-gradient(to right bottom, #1cc7d0, #013ca6, #013ca6, #1cc7d0);\n}\n\n.app-content .app-content-inner-box {\n  min-height: calc(100% - 72px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUNBSjs7QURJSTtFQUNJLFlBQUE7QUNEUjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURLQTtFQUNFLGdGQUFBO0FDRkY7O0FES0E7RUFDRSw2QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuYzEge1xyXG4gICAgZGl2LmMxLTEge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmMxLTEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJvZHktYmctbG9naW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxY2M3ZDAgLCMwMTNjYTYsICMwMTNjYTYsIzFjYzdkMCk7XHJcbn1cclxuXHJcbi5hcHAtY29udGVudCAuYXBwLWNvbnRlbnQtaW5uZXItYm94IHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA3MnB4KTtcclxufVxyXG4iLCJoMSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5kaXYuYzEgZGl2LmMxLTEge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbmRpdi5jMS0xIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJvZHktYmctbG9naW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMWNjN2QwLCAjMDEzY2E2LCAjMDEzY2E2LCAjMWNjN2QwKTtcbn1cblxuLmFwcC1jb250ZW50IC5hcHAtY29udGVudC1pbm5lci1ib3gge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA3MnB4KTtcbn0iXX0= */");

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
/* harmony import */ var _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AppComponent = class AppComponent {
    constructor(connectionService, toastr, router, swUpdate, swPush) {
        this.connectionService = connectionService;
        this.toastr = toastr;
        this.router = router;
        this.swUpdate = swUpdate;
        this.swPush = swPush;
        this.title = 'frontend';
        this.url = '';
        this.isLoginPage = false;
        this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appVersion;
        this.VAPID_PUBLIC_KEY = 'BG2ymYfILNZzi183knEsp5PkW8jaGhsMR0u1iAriOfRUjKrLuAQLE6oZf_TguLnBPDksMDE900zi_qnoqmjOE3Y';
        this.heartBeatState = this.connectionService.options.enableHeartbeat;
        if (this.swUpdate.isEnabled) {
            this.setupUpdates();
        }
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                console.log('router.event (NavigationEnd)', this.router.url, { event });
                this.url = event.url;
                const rgxAuth = new RegExp('\/auth\\b');
                this.isLoginPage = rgxAuth.test(this.url);
            }
        });
    }
    onPrompt(event) {
        this.deferredInstallPrompt = event;
        return false;
    }
    setHeartBeatState(state) {
        this.heartBeatState = state;
        this.connectionService.updateOptions({ enableHeartbeat: state });
    }
    /*
    
            updates.available.subscribe(event => {
              console.log('current version is', event.current);
              console.log('available version is', event.available);
            });
            updates.activated.subscribe(event => {
              console.log('old version was', event.previous);
              console.log('new version is', event.current);
            });
    
            updates.available.subscribe(event => {
                updates.activateUpdate().then(() => this.updateApp());
            });
     */
    setupUpdates() {
        return;
        this.swUpdate.available.subscribe(event => {
            // Update wurde entdeckt
            console.log('current version is', event.current);
            console.log('available version is', event.available);
            const message = 'Aktuelle Version: ' + event.current + '<br>Aktuelle Version' + event.available;
            const action = 'New Version is available!';
            // Benutzer auf Update hinweisen und Seite neu laden
            this.toastr.info(message, action).onAction.subscribe(() => location.reload());
        });
        // Update herunterladen
        this.swUpdate.activateUpdate().then(e => {
            // Update wurde heruntergeladen
            const message = 'Anwendung wurde aktualisert und wird neu geladen';
            const action = 'Reload!';
            // Benutzer auf Update hinweisen und Seite neu laden
            this.toastr.info(message, action).onAction.subscribe(() => location.reload());
        });
        // Auf Updates prüfen
        this.swUpdate.checkForUpdate();
    }
    setupPush() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pushSubscription = yield this.swPush.requestSubscription({
                serverPublicKey: this.VAPID_PUBLIC_KEY
            })
                .then((sub) => {
                console.log('Push Subscription', sub);
            }, (err) => {
                console.error('error registering for push', err);
            });
            console.log({ pushSubscription });
        });
    }
    installApp() {
        this.deferredInstallPrompt.prompt();
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwPush"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeinstallprompt', ['$event'])
], AppComponent.prototype, "onPrompt", null);
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/select-inventory/select-inventory.component */ "./src/app/pages/select-inventory/select-inventory.component.ts");
/* harmony import */ var _shared_components_ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/ngbheader/ngbheader.component */ "./src/app/shared/components/ngbheader/ngbheader.component.ts");
/* harmony import */ var _pages_invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/invent-form/invent-form.component */ "./src/app/pages/invent-form/invent-form.component.ts");
/* harmony import */ var _shared_inventory_progress_inventory_progress_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/inventory-progress/inventory-progress.directive */ "./src/app/shared/inventory-progress/inventory-progress.directive.ts");
/* harmony import */ var _shared_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/progressbar/progressbar.component */ "./src/app/shared/components/progressbar/progressbar.component.ts");
/* harmony import */ var _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/auth/auth-interceptor.service */ "./src/app/pages/auth/auth-interceptor.service.ts");
/* harmony import */ var _pages_invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/invent-form/modals/select-create-raum/select-create-raum.component */ "./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.ts");
/* harmony import */ var _pages_invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/invent-form/modals/select-create-artikel/select-create-artikel.component */ "./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
/* harmony import */ var _pages_invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/invent-form/modals/create-artikel-image/create-artikel-image.component */ "./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
/* harmony import */ var _pages_invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/invent-form/modals/show-artikel-image/show-artikel-image.component */ "./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
/* harmony import */ var _pages_invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/invent-form/modals/select-search-raum/select-search-raum.component */ "./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.ts");
/* harmony import */ var _pages_invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/invent-form/modals/select-search-artikel/select-search-artikel.component */ "./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _shared_components_status_check_status_check_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/components/status-check/status-check.component */ "./src/app/shared/components/status-check/status-check.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm2015/angular-cropperjs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _pages_invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/invent-form/modals/scanner/scanner.component */ "./src/app/pages/invent-form/modals/scanner/scanner.component.ts");
/* harmony import */ var _shared_directives_scannerinput_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/directives/scannerinput.directive */ "./src/app/shared/directives/scannerinput.directive.ts");
/* harmony import */ var _shared_components_scannerdetection_scannerdetection_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/components/scannerdetection/scannerdetection.component */ "./src/app/shared/components/scannerdetection/scannerdetection.component.ts");
/* harmony import */ var _pages_invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/invent-form/modals/raum-list-done/raum-list-done.component */ "./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.ts");
/* harmony import */ var _pages_invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/invent-form/modals/raum-list-rest/raum-list-rest.component */ "./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.ts");
/* harmony import */ var _pages_invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component */ "./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts");
/* harmony import */ var _pages_invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component */ "./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts");
/* harmony import */ var _pages_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/dbsync/dbsync.component */ "./src/app/pages/dbsync/dbsync.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _pages_invent_form_modals_edit_raum_edit_raum_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/invent-form/modals/edit-raum/edit-raum.component */ "./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.ts");
/* harmony import */ var _pages_invent_form_modals_edit_inventar_edit_inventar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/invent-form/modals/edit-inventar/edit-inventar.component */ "./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.ts");
/* harmony import */ var _pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/auth/auth-guard.service */ "./src/app/pages/auth/auth-guard.service.ts");
/* harmony import */ var _pages_invent_form_modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/invent-form/modals/imagebox/imagebox.component */ "./src/app/pages/invent-form/modals/imagebox/imagebox.component.ts");
/* harmony import */ var _pages_invent_form_modals_show_raum_image_show_raum_image_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/invent-form/modals/show-raum-image/show-raum-image.component */ "./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.ts");
/* harmony import */ var _pages_invent_form_modals_create_raum_image_create_raum_image_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/invent-form/modals/create-raum-image/create-raum-image.component */ "./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.ts");
/* harmony import */ var _pages_invent_form_modals_batch_barcodes_batch_barcodes_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/invent-form/modals/batch-barcodes/batch-barcodes.component */ "./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.ts");






























// import imageCompression from 'browser-image-compression';


// the scanner



















const appRoutes = [
    { path: '', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"] },
    { path: 'auth', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"] },
    { path: 'auth/logout', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"] },
    { path: 'select-inventory', component: _pages_select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_14__["SelectInventoryComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] },
    { path: 'form-inventory/:clientid/:buildingid/:roomid', component: _pages_invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_16__["InventFormComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] },
    { path: 'form-inventory/:clientid/:buildingid', component: _pages_invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_16__["InventFormComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] },
    { path: 'form-inventory', component: _pages_invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_16__["InventFormComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] },
    { path: 'sync', component: _pages_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_40__["DbsyncComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__["SettingsComponent"], canActivate: [_pages_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuardService"]] }
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
            _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
            _pages_select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_14__["SelectInventoryComponent"],
            _shared_components_ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_15__["NgbheaderComponent"],
            _pages_invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_16__["InventFormComponent"],
            _shared_inventory_progress_inventory_progress_directive__WEBPACK_IMPORTED_MODULE_17__["InventoryProgressDirective"],
            _shared_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_18__["ProgressbarComponent"],
            _pages_invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_20__["SelectCreateRaumComponent"],
            _pages_invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_21__["SelectCreateArtikelComponent"],
            _pages_invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_22__["CreateArtikelImageComponent"],
            _pages_invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_23__["ShowArtikelImageComponent"],
            _pages_invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_33__["ScannerComponent"],
            _shared_directives_scannerinput_directive__WEBPACK_IMPORTED_MODULE_34__["ScannerinputDirective"],
            _shared_components_scannerdetection_scannerdetection_component__WEBPACK_IMPORTED_MODULE_35__["ScannerdetectionComponent"],
            _pages_invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_24__["SelectSearchRaumComponent"],
            _pages_invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_25__["SelectSearchArtikelComponent"],
            _shared_components_status_check_status_check_component__WEBPACK_IMPORTED_MODULE_27__["StatusCheckComponent"],
            _pages_invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_36__["RaumListDoneComponent"],
            _pages_invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_37__["RaumListRestComponent"],
            _pages_invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_38__["GesamtListRestComponent"],
            _pages_invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_39__["GesamtListDoneComponent"],
            _pages_dbsync_dbsync_component__WEBPACK_IMPORTED_MODULE_40__["DbsyncComponent"],
            _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__["SettingsComponent"],
            _pages_invent_form_modals_edit_raum_edit_raum_component__WEBPACK_IMPORTED_MODULE_44__["EditRaumComponent"],
            _pages_invent_form_modals_edit_inventar_edit_inventar_component__WEBPACK_IMPORTED_MODULE_45__["EditInventarComponent"], _pages_invent_form_modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_47__["ImageboxComponent"], _pages_invent_form_modals_show_raum_image_show_raum_image_component__WEBPACK_IMPORTED_MODULE_48__["ShowRaumImageComponent"], _pages_invent_form_modals_create_raum_image_create_raum_image_component__WEBPACK_IMPORTED_MODULE_49__["CreateRaumImageComponent"], _pages_invent_form_modals_batch_barcodes_batch_barcodes_component__WEBPACK_IMPORTED_MODULE_50__["BatchBarcodesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_32__["ZXingScannerModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_28__["WebcamModule"],
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_29__["AngularCropperjsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot({
                enableHtml: true,
                closeButton: true,
                progressBar: true,
                maxOpened: 6,
                autoDismiss: true,
                preventDuplicates: true,
                resetTimeoutOnDuplicate: true
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_42__["environment"].production,
                registrationStrategy: 'registerImmediately'
            })
        ],
        entryComponents: [
            _pages_invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_22__["CreateArtikelImageComponent"],
            _pages_invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_23__["ShowArtikelImageComponent"],
            _pages_invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_33__["ScannerComponent"],
            _pages_invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_21__["SelectCreateArtikelComponent"],
            _pages_invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_20__["SelectCreateRaumComponent"],
            _pages_invent_form_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_24__["SelectSearchRaumComponent"],
            _pages_invent_form_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_25__["SelectSearchArtikelComponent"],
            _pages_invent_form_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_36__["RaumListDoneComponent"],
            _pages_invent_form_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_37__["RaumListRestComponent"],
            _pages_invent_form_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_38__["GesamtListRestComponent"],
            _pages_invent_form_modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_39__["GesamtListDoneComponent"],
            _pages_invent_form_modals_edit_raum_edit_raum_component__WEBPACK_IMPORTED_MODULE_44__["EditRaumComponent"],
            _pages_invent_form_modals_edit_inventar_edit_inventar_component__WEBPACK_IMPORTED_MODULE_45__["EditInventarComponent"],
            _pages_invent_form_modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_47__["ImageboxComponent"],
            _pages_invent_form_modals_show_raum_image_show_raum_image_component__WEBPACK_IMPORTED_MODULE_48__["ShowRaumImageComponent"],
            _pages_invent_form_modals_create_raum_image_create_raum_image_component__WEBPACK_IMPORTED_MODULE_49__["CreateRaumImageComponent"],
            _pages_invent_form_modals_batch_barcodes_batch_barcodes_component__WEBPACK_IMPORTED_MODULE_50__["BatchBarcodesComponent"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptorService"],
                multi: true
            },
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_26__["ApiService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/auth/auth-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/auth-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        const isLoggedIn = this.auth.isLoggedIn();
        if (!this.auth.isLoggedIn()) {
            console.log('#16 AuthGuardService navigate to auth', { isLoggedIn });
            this.router.navigate(['auth']);
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/pages/auth/auth-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/auth-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.applicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appVersion;
    }
    addAuthHeader(request) {
        const user = this.authService.getUser();
        if (!user) {
            return request;
        }
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${user.token}`,
                'Client-Device-Id': `${this.authService.getClientDeviceId()}`,
                'Client-App-Version': this.applicationVersion
            }
        });
    }
    handleResponseError(error, request, next) {
        // Business error
        if (error.status === 400) {
            // Show message
        }
        else if (error.status === 401 || error.status === 403) {
            if (this.router.url.indexOf('/auth') === -1) {
                console.error('Login ist abgelaufen. Bitte neu einloggen! navigate to /auth');
                this.router.navigateByUrl('/auth');
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
    intercept(req, next) {
        // Handle Request
        const request = this.addAuthHeader(req);
        // Handle Response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error, caught) => {
            return this.handleResponseError(error, request, next);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/pages/auth/auth.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Coded with love by Mutiullah Samim */\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nh1, .h1 {\n  z-index: 1;\n  font-size: 2rem;\n  font-weight: 100;\n  color: #2d2d2d !important;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 2rem;\n}\nh2, .h2 {\n  font-size: 3rem;\n  color: #2d2d2d;\n  margin-bottom: 1.5rem;\n}\n.user_card.user_card_loginbox_bg {\n  background-color: #eeeeee;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 520px;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  padding-left: 5%;\n  padding-right: 5%;\n  margin-bottom: 1.5rem;\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.form_container {\n  width: 100%;\n}\n.form_container form {\n  width: 100%;\n}\n.login_btn {\n  width: 75%;\n  max-width: 230px;\n  min-width: 160px;\n  background: #2d2d2d !important;\n  color: #ffffff !important;\n  font-size: 1.2rem;\n  border-radius: 0 !important;\n}\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.login_container {\n  margin-top: 2rem;\n  padding: 0;\n}\n.input-group-text {\n  background: #c6c6c6 !important;\n  color: white !important;\n  border: 0 !important;\n  font-size: 1.2rem;\n}\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important;\n}\n.form_containter .form-control,\n.form-control {\n  background-color: #ffffff !important;\n  font-size: 1.2rem;\n  color: #2d2d2d;\n}\n/* Change Autocomplete styles in Chrome*/\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  border: none;\n  color: #2d2d2d !important;\n  -webkit-text-fill-color: #2d2d2d;\n  -webkit-box-shadow: none;\n  transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n  font-family: \"Lato\" !important;\n  font-weight: 300 !important;\n  font-style: normal !important;\n  font-size: 1.3rem !important;\n}\ninput:-webkit-autofill::first-line {\n  font-family: \"Lato\";\n  font-weight: 300;\n  font-style: normal;\n  font-size: 1.3rem;\n  color: #2d2d2d !important;\n}\n.form-control.ng-invalid {\n  border-right: 0.4rem solid #f7a9a9;\n}\n.form-control.ng-valid {\n  border-right: 0.4rem solid #adfaad;\n}\n.brand-circle-container {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.brand-circle-grey {\n  margin-left: auto;\n  margin-right: auto;\n  width: 18vh;\n  height: 18vh;\n  min-width: 100px;\n  min-height: 100px;\n  max-width: 180px;\n  max-height: 180px;\n  border-radius: 50%;\n  background-color: #eee;\n  margin-bottom: 1.6vh;\n  margin-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsdUNBQUE7QUFDRDs7RUFFSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjtBRElFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUo7QURFRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FEVUE7RUFDRSxXQUFBO0FDUEY7QURTQTtFQUNFLFdBQUE7QUNORjtBRFFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0xGO0FEUUE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FDTEo7QURPQTtFQUNFLGdCQUFBO0VBQ0UsVUFBQTtBQ0pKO0FETUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7O0VBRUksMkJBQUE7RUFDQSx1QkFBQTtBQ0hKO0FES0E7RUFDSSxvQ0FBQTtBQ0ZKO0FES0E7O0VBRUUsb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjtBRElBLHdDQUFBO0FBQ0U7Ozs7Ozs7OztFQVNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpREFBQTtFQUNBLGlEQUFBO0VBQ0EsaURBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0RKO0FESUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDREo7QURJQTtFQUNFLGtDQUFBO0FDREY7QURLQTtFQUNFLGtDQUFBO0FDRkY7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIENvZGVkIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0gKi9cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmcge1xyXG59XHJcbiAgaDEsIC5oMSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjMmQyZDJkICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIGgyLCAuaDIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIC51c2VyX2NhcmQudXNlcl9jYXJkX2xvZ2luYm94X2JnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLy8td2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAvLy1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm1fY29udGFpbmVyIGZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dpbl9idG4ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luX2J0bjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI2M2YzZjNiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfdXNlcixcclxuLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtX2NvbnRhaW50ZXIgLmZvcm0tY29udHJvbCxcclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG59XHJcbi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSovXHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcclxuICB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG4gIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbiAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbiAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMyZDJkMmQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDo6Zmlyc3QtbGluZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6ICMyZDJkMmQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIHJnYigyNDcsIDE2OSwgMTY5KTtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNvbnRyb2wubmctdmFsaWQge1xyXG4gIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIHJnYigxNzMsIDI1MCwgMTczKTtcclxufVxyXG5cclxuLmJyYW5kLWNpcmNsZS1jb250YWluZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcblxyXG4uYnJhbmQtY2lyY2xlLWdyZXkge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTh2aDtcclxuICBoZWlnaHQ6IDE4dmg7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNnZoO1xyXG4gIG1hcmdpbi10b3A6IDJ2aFxyXG59XHJcblxyXG5cclxuIiwiLyogQ29kZWQgd2l0aCBsb3ZlIGJ5IE11dGl1bGxhaCBTYW1pbSAqL1xuYm9keSxcbmh0bWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaDEsIC5oMSB7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMyZDJkMmQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5oMiwgLmgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogIzJkMmQyZDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4udXNlcl9jYXJkLnVzZXJfY2FyZF9sb2dpbmJveF9iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybV9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1fY29udGFpbmVyIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luX2J0biB7XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogMjMwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcbn1cblxuLmZvcm1fY29udGFpbnRlciAuZm9ybS1jb250cm9sLFxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMmQyZDJkO1xufVxuXG4vKiBDaGFuZ2UgQXV0b2NvbXBsZXRlIHN0eWxlcyBpbiBDaHJvbWUqL1xuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzJkMmQyZCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzJkMmQyZDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDo6Zmlyc3QtbGluZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICMyZDJkMmQgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgI2Y3YTlhOTtcbn1cblxuLmZvcm0tY29udHJvbC5uZy12YWxpZCB7XG4gIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkICNhZGZhYWQ7XG59XG5cbi5icmFuZC1jaXJjbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnJhbmQtY2lyY2xlLWdyZXkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTh2aDtcbiAgaGVpZ2h0OiAxOHZoO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMS42dmg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");






let AuthComponent = class AuthComponent {
    constructor(authService, router, connection, baseData) {
        this.authService = authService;
        this.router = router;
        this.connection = connection;
        this.baseData = baseData;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
        this.hasConnection = false;
        this.hasServerConnection = false;
        this.form = {
            email: null,
            password: null,
        };
    }
    ngOnInit() {
        this.authService.logout();
        this.hasConnection = this.connection.hasServerAccess;
        this.hasServerConnection = this.connection.hasServerAccess;
        this.connectionSubscription = this.connection.monitor().subscribe((conn) => {
            this.hasConnection = conn.hasNetworkConnection;
            this.hasServerConnection = conn.hasServerAccess;
        });
    }
    ngOnDestroy() {
        this.connectionSubscription.unsubscribe();
    }
    onLoginSubmit() {
        let auth;
        const email = this.form.email;
        const password = this.form.password;
        this.isLoading = true;
        auth = this.authService.login(email, password);
        auth.then((resData) => {
            this.isLoading = false;
            this.router.navigate(['/select-inventory']);
            this.form.email = '';
            this.form.password = '';
        });
        auth.catch((errorMessage) => {
            console.error('AuthComponent.onLoginSubmit() #73', errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/pages/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/pages/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/auth/auth.service.ts ***!
  \********************************************/
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
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.model */ "./src/app/pages/auth/user.model.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");












let AuthService = class AuthService {
    constructor(
    // public jwtHelper: JwtHelperService,
    http, router, connection, baseData, userService, apiService) {
        this.http = http;
        this.router = router;
        this.connection = connection;
        this.baseData = baseData;
        this.userService = userService;
        this.apiService = apiService;
        this.user = null;
        this.authPath = '/auth/login';
        this.pwSalt = 'Inventory';
    }
    logout() {
        this.baseData.setCurrentUser(null);
        if (this.user) {
            this.user.isLoggedIn = false;
        }
        this.setUserData(this.user);
    }
    login(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginUrl = this.apiService.getUrlByPath(this.authPath);
            const pwHash = this.getEncryptedPassword(password);
            const hasNetwork = this.connection.hasNetworkConnection;
            if (!this.connection.hasNetworkConnection) {
                const authenticatedUser = yield this.getUserByAuth(email, pwHash, true);
                let err = 'Es besteht aktuell keine Serververbindung! ';
                if (!authenticatedUser) {
                    console.error('AuthService.login offline: failed #65', { email, pwHash, hasNetwork });
                    err += 'Email und Passwort stimmen nicht mit der letzten Live-Anmeldung überein!' + '<br>';
                }
                else {
                    console.log('AuthService.login offline: successful #66', authenticatedUser.email);
                    let expiresIn = 1000 * 60 * 60;
                    if (authenticatedUser.expirationDate && authenticatedUser.expirationDate.getTime() > (Date.now() + expiresIn)) {
                        expiresIn = authenticatedUser.expirationDate.getTime() - Date.now();
                    }
                    this.handleAuthentication(email, authenticatedUser.id, authenticatedUser.token, expiresIn, +this.getClientDeviceId(), pwHash);
                    return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
                        observer.next(true);
                        observer.complete();
                    });
                }
                throw err;
            }
            return this.http.post(loginUrl, {
                email,
                password,
                returnSecureToken: true,
                clientDeviceId: this.getClientDeviceId()
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(resData => {
                console.log('AuthService.login', { resData });
                this.userService.put({
                    id: resData.auth_identifier,
                    name: email,
                    email,
                    password: pwHash,
                    remember_token: resData.access_token,
                    created_at: new Date()
                });
                this.handleAuthentication(email, resData.auth_identifier, resData.access_token, +resData.expires_in, +resData.clientDeviceId, pwHash);
                this.apiService.get('auth/me').toPromise().then((me) => {
                    if ('password' in me) {
                        delete me.password;
                    }
                    this.userService.update(me.id, me);
                });
            })).toPromise();
        });
    }
    handleAuthentication(email, userId, token, expiresIn, clientDeviceId, pwHash) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](email, userId, token, expirationDate, pwHash);
        this.user.isLoggedIn = true;
        const previousUser = this.baseData.getCurrentUser();
        if (previousUser) {
            this.baseData.setPreviousUser(previousUser);
        }
        this.setUserData(this.user);
        this.setClientDeviceId(clientDeviceId);
        this.connection.setAuthState(true);
        this.connection.refresh();
    }
    setUserData(userData) {
        this.baseData.setCurrentUser(this.user);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    getUserByAuth(email, password, pwIsEncrypted) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const encPassword = pwIsEncrypted ? password : this.getEncryptedPassword(password);
            const userData = yield this.userService.getByAuth(email, encPassword);
            console.log('AuthServer.getUserByAuth(', email, password, ') #161 encPassword:', encPassword, 'userData:', userData);
            if (userData) {
                const minExpirationTime = 1000 * 60 * 60 * 2;
                const expireDate = new Date(Date.now() + minExpirationTime);
                return new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](email, userData.id, userData.remember_token, expireDate, encPassword);
            }
            let lastUser = this.getUser();
            if (!lastUser) {
                lastUser = this.getPreviousUser();
            }
            if (lastUser.email === email && lastUser.pwHash === encPassword) {
                return lastUser;
            }
            return null;
        });
    }
    getUserData() {
        return this.getUserDataOfLocalStorage('userData');
    }
    getPreviousUser() {
        return this.getUserDataOfLocalStorage('previousUser');
    }
    getUserDataOfLocalStorage(itemName) {
        const userDataString = localStorage.getItem(itemName);
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            if (userData && ('uTokenExpirationDate' in userData)) {
                userData.uTokenExpirationDate = new Date(userData.uTokenExpirationDate);
            }
            if (userData &&
                ('email' in userData) &&
                ('id' in userData) &&
                ('uToken' in userData) &&
                ('uTokenExpirationDate' in userData) &&
                ('pwHash' in userData)) {
                return new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](userData.email, userData.id, userData.uToken, userData.uTokenExpirationDate, userData.pwHash);
            }
        }
        return null;
    }
    setClientDeviceId(devid) {
        this.baseData.setCurrentDevice(devid);
    }
    getClientDeviceId() {
        return this.baseData.getCurrentDeviceId() || 0;
    }
    getUser() {
        return this.getUserData();
    }
    getUserToken() {
        if (this.user instanceof _user_model__WEBPACK_IMPORTED_MODULE_7__["User"]) {
            return this.user.token;
        }
        return '';
    }
    isLoggedIn() {
        const user = this.getUser();
        const isLoggedIn = (user && (user instanceof _user_model__WEBPACK_IMPORTED_MODULE_7__["User"]) && user.hasValidUiSession);
        if (!isLoggedIn) {
            console.log('app.pages.auth.auth.service.ts #187 user is not logged in: ', user);
        }
        return isLoggedIn;
    }
    isAuthenticated() {
        if (!this.user || !(this.user instanceof _user_model__WEBPACK_IMPORTED_MODULE_7__["User"]) || !this.user.token) {
            return false;
        }
        const token = this.user.token;
        return (this.user.expirationDate.getTime() <= Date.now());
        // Check whether the token is expired and return
        // true or false
        // return !this.jwtHelper.isTokenExpired(token);
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
    getEncryptedPassword(password) {
        const pwHash = crypto_js__WEBPACK_IMPORTED_MODULE_6__["SHA3"](this.pwSalt + password);
        return crypto_js__WEBPACK_IMPORTED_MODULE_6__["enc"].Base64.stringify(pwHash);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/pages/auth/user.model.ts":
/*!******************************************!*\
  !*** ./src/app/pages/auth/user.model.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, id, uToken, uTokenExpirationDate, pwHash) {
        this.email = email;
        this.id = id;
        this.uToken = uToken;
        this.uTokenExpirationDate = uTokenExpirationDate;
        this.pwHash = pwHash;
        const dateNow = new Date();
        const dateExp = (uTokenExpirationDate instanceof Date) ? uTokenExpirationDate : new Date(uTokenExpirationDate);
        this.isLoggedIn = (uTokenExpirationDate !== null && dateNow < dateExp);
        if (typeof uTokenExpirationDate === 'string') {
            this.uTokenExpirationDate = new Date(uTokenExpirationDate);
        }
    }
    get token() {
        if (!this.uTokenExpirationDate || new Date() > this.uTokenExpirationDate) {
            return null;
        }
        return this.uToken;
    }
    get hasValidUiSession() {
        const hasValidUiSession = {
            isLoggedIn: this.isLoggedIn,
            uTokenExpirationDate: this.uTokenExpirationDate,
            Date: new Date(),
            result: false
        };
        if (this.isLoggedIn && new Date() < this.uTokenExpirationDate) {
            hasValidUiSession.result = true;
            // console.log('app.pages.auth.user.model.ts #34 ', hasValidUiSession);
            return true;
        }
        console.error('app.pages.auth.user.model.ts #39 use has no valid session ', hasValidUiSession);
        return false;
    }
    get expirationDate() {
        if (typeof this.uTokenExpirationDate === 'string') {
            this.uTokenExpirationDate = new Date(this.uTokenExpirationDate);
        }
        return this.uTokenExpirationDate;
    }
}


/***/ }),

/***/ "./src/app/pages/dbsync/dbsync.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/dbsync/dbsync.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Ric3luYy9kYnN5bmMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dbsync/dbsync.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/dbsync/dbsync.component.ts ***!
  \**************************************************/
/*! exports provided: DbsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbsyncComponent", function() { return DbsyncComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/dbsync-client.service */ "./src/app/shared/services/dbsync-client.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _shared_services_dbsync_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/dbsync-log.service */ "./src/app/shared/services/dbsync-log.service.ts");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");









let DbsyncComponent = class DbsyncComponent {
    constructor(dbsyncClient, baseData, networkService, dataService, dbsyncLogService, dexie) {
        this.dbsyncClient = dbsyncClient;
        this.baseData = baseData;
        this.networkService = networkService;
        this.dataService = dataService;
        this.dbsyncLogService = dbsyncLogService;
        this.dexie = dexie;
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSync"];
        this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSyncAlt"];
        this.syncInProcess = true;
        this.syncTables = [];
        this.lastServerSyncErrors = [];
        this.subscribedSyncJobProcesses = [];
        this.syncTotal = {
            jobid: 0,
            revisionId: 0,
            total: 0,
            executed: 0,
            percent: 0,
            puts: 0,
            modified: 0,
            deleted: 0,
            tables: [],
            chunks: 0,
            start: null
        };
    }
    ngOnDestroy() {
        this.subscriptionSyncTotal.unsubscribe();
        this.subscriptionSyncTable.unsubscribe();
        this.subscriptionSyncMsg.unsubscribe();
        this.subscriptionSyncErr.unsubscribe();
        this.subscriptionNetworkService.unsubscribe();
        this.subscriptionAutoSyncChange.unsubscribe();
        this.subscriptionProcessStarted.unsubscribe();
        this.subscriptionProcessFinished.unsubscribe();
        this.subscriptionLastSyncErr.unsubscribe();
        this.removeAllSyncJobStatusSubscriptions();
    }
    ngOnInit() {
        this.jobid = this.baseData.getCurrentJobid();
        this.refreshStatusInfos();
        this.loadServerSyncErrors(this.jobid);
        this.subscriptionLastSyncErr = this.dbsyncClient.syncErrorChange.subscribe((result) => {
            this.lastServerSyncErrors = [];
            if (result.count > 0) {
                this.loadServerSyncErrors(result.jobid);
            }
        });
        this.subscriptionSyncTable = this.dbsyncLogService.tableSyncProgress
            .subscribe((data) => {
            const tb = data.table;
            const rv = data.revisionId;
            const num = data.executed;
            let syncTbl = this.syncTables.find(t => t.table === data.table);
            if (!syncTbl) {
                syncTbl = Object.assign({}, data);
                this.syncTables.push(syncTbl);
            }
            else {
                syncTbl.executed = data.executed;
                syncTbl.puts = data.puts;
                syncTbl.modified = data.modified;
                syncTbl.deleted = data.deleted;
            }
        });
        this.subscriptionSyncTotal = this.dbsyncLogService.totalSyncProgress
            .subscribe((data) => {
            this.refreshStatusInfos();
            if (data.executed === 0) {
                while (this.syncTables.length) {
                    this.syncTables.pop();
                }
            }
            for (const k of Object.keys(data)) {
                this.syncTotal[k] = data[k];
            }
        });
        this.subscriptionSyncMsg = this.dbsyncLogService.syncMessage
            .subscribe((data) => {
            this.refreshStatusInfos();
        });
        this.subscriptionSyncErr = this.dbsyncLogService.syncError
            .subscribe((data) => {
            this.refreshStatusInfos();
        });
        this.subscriptionNetworkService = this.networkService.monitor().subscribe(() => {
            if (this.networkService.hasServerAccess) {
                this.refreshStatusInfos();
            }
        });
        this.subscriptionAutoSyncChange = this.dbsyncClient.autoSyncChange.subscribe((isRunning) => {
            this.syncAutoRun = isRunning;
        });
        this.subscriptionProcessStarted = this.dbsyncClient.processStarted.subscribe((proc) => {
            console.log('Gestarted: Synchronisierung für Inventur mit JobId ' + proc.jobid, { proc });
            if (proc.jobid === this.syncJobid) {
                this.syncInProcess = !proc.finished;
            }
        });
        this.subscriptionProcessFinished = this.dbsyncClient.processFinished.subscribe((proc) => {
            console.log('Beendet: Synchronisierung für Inventur mit JobId ' + proc.jobid, { proc });
            if (proc.jobid === this.syncJobid) {
                this.syncInProcess = !proc.finished;
            }
        });
    }
    loadServerSyncErrors(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.serverSyncErrors
                .where({ jobid })
                .toArray()
                .then((errors) => {
                errors.find((itm) => {
                    if (itm.timestamp instanceof Date) {
                        this.lastServerSyncDate = itm.timestamp;
                        return true;
                    }
                    return false;
                });
                this.lastServerSyncJobid = jobid;
                this.lastServerSyncErrors = errors;
                return errors.length;
            });
        });
    }
    refreshStatusInfos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.jobid = this.baseData.getCurrentJobid();
            this.syncJobid = this.jobid;
            this.currInventur = this.baseData.getCurrentInventur();
            this.deviceId = this.baseData.getCurrentDeviceId();
            this.currUser = this.baseData.getCurrentUser();
            this.syncUid = this.baseData.getCurrentUid();
            this.syncDevid = this.baseData.getCurrentDeviceId();
            this.currProcess = this.dbsyncClient.getProcessByJobId(this.jobid);
            console.log({
                method: 'refreshStatusInfos',
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
                this.syncStatus = _shared_services_dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__["SyncJobStatus"].Init;
                this.syncStatusName = '';
                this.syncFinished = true;
                this.syncInProcess = false;
            }
            console.log('DbsyncComponent.refreshStatusInfos() #248 call askServerForChanges', (new Date()).toString());
            this.dbsyncClient.getLastServerChanges(this.jobid, 15 * 1000)
                .then((infos) => {
                console.log('DbsyncComponent.refreshStatusInfos() #250 callback of async askServerForChange for jobid ' + this.jobid, { infos });
                if (infos.success) {
                    this.serverRevisionId = infos.MaxRevisionId;
                    this.numServerChanges = infos.NumChanges;
                }
            })
                .catch((reason) => {
                console.error('DbsyncComponent.refreshStatusInfos() #257', { reason });
            });
            this.dbsyncClient.getCurrentClientRevId().then((revid) => {
                this.clientRevisionId = revid;
            });
            this.syncAutoRun = this.dbsyncClient.autoSyncIsRunning();
        });
    }
    checkForUnsyncedChanges() {
        this.dbsyncClient.numUnsyncedChangeLogsByJobId(this.jobid).then(num => {
            this.numUnsyncedChanges = num;
        });
    }
    syncAutoStop() {
        this.dbsyncClient.autoSyncStop();
    }
    syncAutoStart() {
        this.dbsyncClient.autoSyncStart(true);
    }
    cancelCurrJob() {
        this.dbsyncClient.removeSyncProcessByJobid(this.jobid);
        this.refreshStatusInfos();
    }
    forceSendCurrJob() {
        this.cancelCurrJob();
        this.dbsyncClient.sendByJobId(this.jobid, [], null, true);
    }
    syncCurrJob() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (typeof this.syncJobid === 'number') {
                console.log('called syncCurrJob, call syncStart(' + this.syncJobid + ')');
                this.syncStart(this.syncJobid);
            }
            else {
                console.error('syncJobid is not defined');
            }
        });
    }
    resetCurrJob() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#287 dbsync called resetCurrJob() this.syncJobid: ', this.syncJobid);
            this.syncInProcess = true;
            this.dataService.loadInventurDataByInventurId(this.syncJobid, true).finally(() => {
                this.syncInProcess = false;
            });
        });
    }
    syncStart(jobid) {
        console.log('called syncStart, call dbsyncClient.syncJob(' + jobid + ')');
        const sync = this.dbsyncClient.syncJob(jobid);
        sync.then((proc) => {
            if (this.isSyncJobStatusSubscribed(proc)) {
                return;
            }
            const syncJobStatusChangeSubscription = proc.statusChanged.subscribe((status) => {
                this.syncJobid = proc.jobid;
                this.syncStatus = proc.getStatus();
                this.syncStatusName = proc.getStatusName();
                this.syncErrorMsg = this.currProcess && ('errorMsg' in this.currProcess) ? this.currProcess.errorMsg : '';
                this.syncFinished = this.currProcess ? this.currProcess.finished : null;
                this.syncDuration = this.currProcess ? this.currProcess.duration : null;
                this.syncDurFormatted = this.currProcess ? this.currProcess.durationFormatted : '';
                console.log('Process-Status has changed', { proc });
                this.syncInProcess = !proc.finished;
                if (proc.finished) {
                    console.log('#186 dbsync.component remove/unsubscribe finished SyncJob');
                    this.removeSyncJobStatusSubscriptionBySub(syncJobStatusChangeSubscription);
                }
            });
            this.addSyncJobStatusSubscription(proc, syncJobStatusChangeSubscription);
        });
    }
    isSyncJobStatusSubscribed(proc) {
        const foundProc = this.subscribedSyncJobProcesses.find(p => p[0] === proc);
        return !!foundProc;
    }
    addSyncJobStatusSubscription(proc, sub) {
        console.log('#200 dbsync.component addSyncJobStatusSubscription');
        this.subscribedSyncJobProcesses.push([proc, sub]);
    }
    removeSyncJobStatusSubscriptionBySub(sub) {
        console.log('#204 dbsync.component removeSyncJobStatusSubscriptionBySub');
        const foundProc = this.subscribedSyncJobProcesses.find(p => p[1] === sub);
        if (foundProc) {
            console.log('#207 dbsync.component foundProc');
            foundProc[1].unsubscribe();
            this.subscribedSyncJobProcesses = this.subscribedSyncJobProcesses.filter(p => p !== foundProc);
        }
    }
    removeSyncJobStatusSubscriptionByProc(proc) {
        console.log('#214 dbsync.component removeSyncJobStatusSubscriptionByProc');
        const foundProc = this.subscribedSyncJobProcesses.find(p => p[0] === proc);
        if (foundProc) {
            console.log('#217 dbsync.component foundProc');
            foundProc[1].unsubscribe();
            this.subscribedSyncJobProcesses = this.subscribedSyncJobProcesses.filter(p => p !== foundProc);
        }
    }
    removeAllSyncJobStatusSubscriptions() {
        console.log('#224 dbsync.component removeSyncJobStatusSubscriptionByProc');
        this.subscribedSyncJobProcesses.forEach(proc => {
            proc[1].unsubscribe();
        });
        this.subscribedSyncJobProcesses.length = 0;
    }
};
DbsyncComponent.ctorParameters = () => [
    { type: _shared_services_dbsync_client_service__WEBPACK_IMPORTED_MODULE_2__["DBSyncClientService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _shared_services_dbsync_log_service__WEBPACK_IMPORTED_MODULE_7__["DbsyncLogService"] },
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_8__["DexieService"] }
];
DbsyncComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbsync',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbsync.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dbsync/dbsync.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbsync.component.scss */ "./src/app/pages/dbsync/dbsync.component.scss")).default]
    })
], DbsyncComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/artikel.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/artikel.service.ts ***!
  \********************************************************************/
/*! exports provided: ArtikelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtikelService", function() { return ArtikelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _hersteller_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hersteller.service */ "./src/app/pages/invent-form/data-services/hersteller.service.ts");










let ArtikelService = class ArtikelService {
    constructor(dexie, authService, dataService, baseData, herstellerService) {
        this.dexie = dexie;
        this.authService = authService;
        this.dataService = dataService;
        this.baseData = baseData;
        this.herstellerService = herstellerService;
    }
    artikelBezeichnungExistsGlobal(bezeichnung, jobid = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const globalItems = yield this.dexie.objektKatalogGlobal
                .where('Bezeichnung')
                .equalsIgnoreCase(bezeichnung)
                .toArray();
            if (jobid !== 0 && globalItems && globalItems.length > 0) {
                const gcuuids = globalItems.map(itm => itm.uuid);
                return yield this.dexie.objektKatalogMandant
                    .where('gcuuid').anyOf(gcuuids)
                    .and(itm => itm.for_jobid === jobid)
                    .count();
            }
            return globalItems.length;
        });
    }
    ___DEL__artikelExistsMandant(mid, gcid) {
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
    artikelMcuuidByGcuuids(mid, gcuuids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (typeof gcuuids === 'string') {
                gcuuids = [gcuuids];
            }
            const items = yield this.dexie.objektKatalogMandant
                .where('gcuuid').anyOf(gcuuids)
                .filter(itm => itm.mid === mid)
                .toArray();
            return items;
        });
    }
    ___DEL__getGcuuidByGcuuid(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogGlobal.get(uuid).then((itm) => itm.uuid);
        });
    }
    insertArtikelData(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const katalog = db.objektKatalogGlobal;
            const hersteller = db.hersteller;
            const uid = this.authService.getUser().id;
            const jobid = this.baseData.getCurrentJobid();
            const deviceid = this.baseData.getCurrentDeviceId();
            const uuid = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            const log = { log: true };
            if (daten.Hersteller) {
                console.log('ArtikelService insertArtikelDate() #153');
                yield this.herstellerService.getByNameOrCreate(daten.Hersteller).then(hstData => {
                    daten.hid = hstData.hid;
                    daten.huuid = hstData.uuid;
                });
            }
            const exists = yield katalog.where({
                Bezeichnung: daten.Bezeichnung,
                huuid: daten.huuid
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
                    console.log('ArtikelService insertArtikelData() #175');
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
                created_device_id: deviceid,
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
                Kst: !('Kst' in daten) ? null : daten.Kst,
                log: true
            };
            const insertNewData = Object.assign({}, insertData, log);
            const insertKey = yield katalog.add(Object.assign({}, insertData, log));
            if (!insertKey) {
                console.error('ArtikelService # 220 insertArtikelData(daten) empty result insertKey', { insertKey, insertNewData });
                alert('#219 ArtikelService.insertArtikelData(daten) empty Result. See console.log');
            }
            console.log('ArtikelService insertArtikelData() #223');
            return katalog.get(insertKey);
        });
    }
    insertArtikelRefByGcidGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const artikelRef = db.objektKatalogMandant;
            const jobid = this.baseData.getCurrentJobid();
            const mid = this.baseData.getCurrentMid();
            const uid = this.authService.getUser().id;
            const uuid = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            const devID = this.baseData.getCurrentDeviceId();
            const log = { log: true };
            const d = new Date();
            const code = uuid;
            const insertData = Object.assign({ gcuuid }, {
                mid,
                code,
                for_jobid: jobid,
                created_at: new Date(),
                created_uid: uid,
                created_device_id: devID,
                uuid
            }, log);
            return artikelRef.add(insertData).catch((reason) => {
                console.error(reason, 'ArtikelService.insertArtikelRefByGcidGcuuid #263 artikelRef.add', { insertData });
                return null;
            }).then((mcuuid) => artikelRef.get(mcuuid));
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
            const log = { log: true };
            if (!daten.gcuuid) {
                console.log('ArtikelService insertArtikelRef() #265', { daten: Object.assign({}, daten) });
                const artikelData = yield this.insertArtikelData(Object.assign({}, daten, log));
                console.log('ArtikelService insertArtikelRef() #270 artikelData', { artikelData: Object.assign({}, artikelData) });
                if (!artikelData) {
                    console.error('ArtikelService #267 unexpected empty Result: artikelData = this.insertArikelData()', { artikelData, daten });
                    alert('ArikelService #269 unexpected Result for insertArtikelData. See console.log');
                    return null;
                }
                daten.gcid = artikelData.gcid;
                daten.gcuuid = artikelData.uuid;
            }
            const insertData = {
                mid: daten.mid || defaultMid,
                gcid: daten.gcid,
                gcuuid: daten.gcuuid,
                for_jobid: jobid,
                uuid,
                code: uuid,
                created_at: new Date(),
                created_uid: uid,
                created_jobid: jobid,
                created_device_id: devID,
                modified_at: null,
                modified_uid: null
            };
            return artikelRef.add(Object.assign({}, insertData, log))
                .then(insertUuid => artikelRef.get({ uuid: insertUuid }))
                .catch(reason => {
                console.error(reason, 'ArtikelService #309 artikelRef.add', { insertData });
                return null;
            });
        });
    }
    insert(daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log('ArtikelService #295 insert(daten) call this.getFirstArtikelGcuuidByBasisDaten(daten)', { daten });
                try {
                    const existingGcuuid = yield this.getFirstArtikelGcuuidByBasisDaten(daten);
                    daten.gcuuid = existingGcuuid;
                }
                catch (e) {
                    console.error('ArtikelService #299', { e });
                    throw e;
                }
                console.log('ArtikelService #303 insert(daten) call this.insertArtikelRef(daten)');
                const artikelRefData = yield this.insertArtikelRef(daten);
                console.log('ArtikelService #305 artikelRefData = insert(daten)', { daten, artikelRefData });
                if (!artikelRefData || !('gcuuid' in artikelRefData)) {
                    alert('ERROR: #307 ArtikelService.insert() after calling ArtikelService.insertArtikelRef(daten)' +
                        JSON.stringify({ daten }));
                    return {
                        success: false,
                        newId: null,
                        data: null,
                        newItem: null,
                        artikelRef: null,
                        artikelData: null
                    };
                }
                const gItem = yield this.dexie.objektKatalogGlobal.get({ uuid: artikelRefData.gcuuid });
                const mItem = artikelRefData;
                const item = Object.assign({}, mItem, gItem, { mcuuid: mItem.uuid });
                return {
                    success: true,
                    newId: artikelRefData.uuid,
                    data: artikelRefData,
                    newItem: item,
                    artikelRef: artikelRefData,
                    artikelData: gItem
                };
            }
            catch (err) {
                const errorMsg = ('name' in err ? err.name + ': ' : '')
                    + (('message' in err) ? err.message : JSON.stringify(err));
                return {
                    success: false,
                    errorMsg,
                    debug: err,
                    data: daten
                };
            }
        });
    }
    getFirstArtikelGcuuidByBasisDaten(properties) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (('Hersteller' in properties) && properties.Hersteller.length > 0) {
                const hst = yield this.herstellerService.getByName(properties.Hersteller);
                if (hst && hst.uuid) {
                    properties.huuid = hst.uuid;
                }
                else {
                    return '';
                }
            }
            const filledProps = {};
            const emptyProps = {};
            for (const pName of Object.keys(properties)) {
                if (!(pName in properties)) {
                    continue;
                }
                if (properties[pName] !== '' && properties[pName] !== null) {
                    filledProps[pName] = properties[pName];
                }
                else {
                    emptyProps[pName] = properties[pName];
                }
            }
            if (Object.keys(filledProps).length === 0) {
                return '';
            }
            if (!('huuid' in filledProps) && !('Bezeichnung' in filledProps)) {
                return '';
            }
            let query;
            if (properties.huuid && 'huuid' in filledProps) {
                query = this.dexie.objektKatalogGlobal.where({ huuid: properties.huuid });
                delete filledProps.huuid;
            }
            else if (properties.Bezeichnung && 'Bezeichnung' in filledProps) {
                query = this.dexie.objektKatalogGlobal.where('Bezeichnung').equalsIgnoreCase(properties.Bezeichnung);
                delete filledProps.Bezeichnung;
            }
            query.filter((okg) => {
                for (const k of Object.keys(filledProps)) {
                    if ((k in okg) && okg[k] !== filledProps[k]) {
                        return false;
                    }
                }
                for (const k of Object.keys(emptyProps)) {
                    if (!(k in okg) || okg[k] === emptyProps[k]) {
                        continue;
                    }
                    if (okg[k] !== null && okg[k] !== '') {
                        return false;
                    }
                }
                return true;
            }).first().then((okg) => {
                if (okg && ('uuid' in okg)) {
                    return okg.uuid;
                }
                else {
                    return '';
                }
            });
        });
    }
    __DEL__update(artikel) {
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
                where: (huuid) ? { huuid } : null,
                joins: [
                    { parentKey: 'huuid', key: 'uuid', table: 'hersteller', alias: 'hersteller', resultType: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].First },
                    { parentKey: 'uuid', table: 'images', key: 'gcuuid', alias: 'image', resultType: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].First },
                    { parentKey: 'uuid', table: 'objektKatalogMandant', key: 'gcuuid', alias: 'artikelRef', multi: true,
                        where: { mid },
                        joins: [{
                                parentKey: 'uuid', table: 'inventar', key: 'mcuuid', alias: 'inventar_count', multi: true,
                                resultType: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["JoinResultType"].Count,
                                map: (obj) => ({ uuid: obj.uuid, ruuid: obj.ruuid })
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
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] },
    { type: _hersteller_service__WEBPACK_IMPORTED_MODULE_9__["HerstellerService"] }
];
ArtikelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArtikelService);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/barcode.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/barcode.service.ts ***!
  \********************************************************************/
/*! exports provided: BarcodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeService", function() { return BarcodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");




let BarcodeService = class BarcodeService {
    constructor(db) {
        this.db = db;
        this.lastErrors = [];
        this.rebuildProcesses = [];
        this.isInDebugMode = false;
        this.lkup = this.db.barcodeLookup;
    }
    simpleLookup(barcode, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (barcode.startsWith('R') || barcode.startsWith('A')) {
                const structLookupResult = yield this.bcAnalyzeLookup(barcode, jobid);
                if (structLookupResult && structLookupResult.success) {
                    return structLookupResult;
                }
            }
            const indexLookupResult = yield this.indexLookup(barcode, jobid);
            if (indexLookupResult) {
                return indexLookupResult;
            }
            return yield this.allTablesLookup(barcode, jobid);
            /*
            return Promise.all([
              this.indexLookup(barcode),
              this.bcAnalyzeLookup(barcode)
            ]).then( results => results[0] || results[1]);
             */
        });
    }
    indexLookup(barcode, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            barcode = this.bcTrimZero(barcode);
            const found = yield this.lkup.get({ code: barcode, for_jobid: jobid });
            if (this.isInDebugMode) {
                console.log('BarcodeService.indexLookup(', { barcode, jobid }, ') #57', { found });
            }
            const result = {
                barcode,
                foundRef: found,
                success: false,
                lookupResultTable: _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].None,
                data: null
            };
            if (found && found.uuid) {
                const searchKey = { uuid: found.uuid };
                const item = yield this.db.table(found.table).get(searchKey);
                if (this.isInDebugMode) {
                    console.log('BarcodeService #68 indexLookup item = this.db.table(', found.table, ').get(', searchKey, ')', { item });
                }
                if (item) {
                    result.success = true;
                    result.data = item;
                    switch (found.table) {
                        case 'inventar':
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Inventar;
                            result.inventar = item;
                            break;
                        case 'raeume':
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Raeume;
                            result.raum = item;
                            break;
                        case 'objektKatalogMandant':
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogMandant;
                            result.artikelRef = item;
                            break;
                        case 'objektKatalogGlobal':
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogGlobal;
                            result.artikelData = item;
                            break;
                        default:
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Any;
                    }
                }
            }
            if (this.isInDebugMode) {
                console.log('BarcodeService #99 indexLookup(', { result, barcode, jobid }, ')', { found });
            }
            return result;
        });
    }
    allTablesLookup(barcode, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = {
                barcode,
                foundRef: null,
                success: false,
                lookupResultTable: _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].None,
                data: null
            };
            result.data = yield this.db.inventar.where({ code: barcode, for_jobid: jobid }).first();
            if (result.data) {
                result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Inventar;
                result.success = true;
                result.foundRef = {
                    code: barcode, key: 'uuid', id: result.data.uuid,
                    for_jobid: jobid, table: 'inventar', updateHelper: 0, uuid: result.inventar.uuid
                };
                return result;
            }
            result.data = yield this.db.raeume.where({ code: barcode, for_jobid: jobid }).first();
            if (result.data) {
                result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Raeume;
                result.success = true;
                result.foundRef = {
                    code: barcode, key: 'uuid', id: result.data.uuid,
                    for_jobid: jobid, table: 'raeume', updateHelper: 0, uuid: result.data.uuid
                };
                return result;
            }
            result.data = yield this.db.objektKatalogMandant.where({ code: barcode, for_jobid: jobid }).first();
            if (result.data) {
                result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogMandant;
                result.success = true;
                result.foundRef = {
                    code: barcode, key: 'uuid', id: result.data.uuid,
                    for_jobid: jobid, table: 'objektKatalogMandant', updateHelper: 0, uuid: result.data.uuid
                };
                return result;
            }
            return result;
        });
    }
    bcAnalyzeLookup(barcode, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const matchesObjektbuchArtikel = barcode.match(/^(A)(\d+)-/);
            const matchesObjektbuchRaum = !matchesObjektbuchArtikel ? barcode.match(/^(R)(\d+)-/) : false;
            let foundTable;
            let foundTableKey;
            const result = {
                barcode,
                foundRef: null,
                success: false,
                lookupResultTable: _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].None,
                data: null
            };
            if (matchesObjektbuchArtikel) {
                const [, , sMcid] = matchesObjektbuchArtikel;
                foundTable = 'objektKatalogMandant';
                foundTableKey = 'uuid';
            }
            else if (matchesObjektbuchRaum) {
                const [, , sRid] = matchesObjektbuchRaum;
                foundTable = 'raeume';
                foundTableKey = 'uuid';
            }
            else {
                return result;
            }
            const objBookLkUp = yield this.db.objektbuchBarcodesLookup.where({
                code: barcode,
                for_jobid: jobid,
                table: foundTable
            }).first();
            if (foundTable && objBookLkUp) {
                result.data = yield this.db.table(foundTable).where({ uuid: objBookLkUp.uuid }).first();
                if (result.data) {
                    result.foundRef = {
                        code: barcode,
                        table: foundTable,
                        key: foundTableKey,
                        id: result.data.uuid,
                        uuid: result.data.uuid || null
                    };
                    result.success = true;
                    switch (foundTable) {
                        case 'raeume':
                            result.raum = result.data;
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Raeume;
                            break;
                        case 'objektKatalogMandant':
                            result.artikelRef = result.data;
                            result.lookupResultTable = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogMandant;
                            break;
                    }
                }
            }
            return result;
        });
    }
    bcTrimZero(barcode) {
        barcode = barcode.trim();
        while (barcode.charAt(0) === '0') {
            barcode = barcode.substr(1).trim();
        }
        return barcode;
    }
    fullLookup(barcode, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            barcode = this.bcTrimZero(barcode);
            const simpleResult = yield this.simpleLookup(barcode, jobid);
            const lookupResultTableText = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"][simpleResult.lookupResultTable];
            if (this.isInDebugMode) {
                console.log(`BarcodeService.fullLookup() #230 for ${barcode} found ${lookupResultTableText}`, { simpleResult });
            }
            if (!simpleResult.success || simpleResult.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogGlobal) {
                if (this.isInDebugMode) {
                    console.log(`BarcodeService.fullLookup() #235 for ${barcode} return ${lookupResultTableText}`);
                }
                return simpleResult;
            }
            switch (simpleResult.lookupResultTable) {
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].ObjektKatalogMandant:
                    if (this.isInDebugMode) {
                        console.log(`BarcodeService.fullLookup() #243 for ${barcode} fetch global Data for ${lookupResultTableText}`);
                    }
                    simpleResult.artikelData = yield this.db.objektKatalogGlobal.get({ uuid: simpleResult.artikelRef.gcuuid });
                    simpleResult.image = yield this.db.images.get({ gcuuid: simpleResult.artikelRef.gcuuid });
                    if (simpleResult.image) {
                        simpleResult.image.data_url = null;
                        simpleResult.image.data_binary = null;
                    }
                    break;
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Raeume:
                    if (this.isInDebugMode) {
                        console.log(`BarcodeService.fullLookup() #255 for ${barcode} fetch gebaeude Data for ${lookupResultTableText}`);
                    }
                    simpleResult.gebaeude = yield this.db.gebaeude.get(simpleResult.raum.gid);
                    break;
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultTable"].Inventar:
                    if (this.isInDebugMode) {
                        console.log('BarcodeService.fullLookup() #262' +
                            ` for ${barcode} fetch artikelRef/global/image/raum Data for ${lookupResultTableText}`, { mcuuid: simpleResult.inventar.mcuuid });
                    }
                    simpleResult.artikelRef = yield this.db.objektKatalogMandant.get({ uuid: simpleResult.inventar.mcuuid });
                    if (simpleResult.artikelRef) {
                        if (this.isInDebugMode) {
                            console.log('BarcodeService.fullLookup() #271 ', { gcuuid: simpleResult.artikelRef.gcuuid });
                        }
                        simpleResult.artikelData = yield this.db.objektKatalogGlobal.get({ uuid: simpleResult.artikelRef.gcuuid });
                        if (this.isInDebugMode) {
                            console.log('BarcodeService.fullLookup() #254 ');
                        }
                        simpleResult.image = yield this.db.images.filter((img) => {
                            return ('mcuuid' in img) && (img.mcuuid === simpleResult.artikelRef.uuid);
                        }).first();
                        if (!simpleResult.image) {
                            simpleResult.image = yield this.db.images.where({ gcuuid: simpleResult.artikelRef.gcuuid }).first();
                        }
                        if (simpleResult.image) {
                            simpleResult.image.data_url = null;
                            simpleResult.image.data_binary = null;
                        }
                    }
                    if (this.isInDebugMode) {
                        console.log('BarcodeService.fullLookup() #261 ');
                    }
                    simpleResult.raum = yield this.db.raeume.get({ uuid: simpleResult.inventar.ruuid });
                    break;
                default:
                // Nothing, Should not happen
            }
            if (this.isInDebugMode) {
                console.log(`BarcodeService.fullLookup() #166 fullLookup for ${barcode} return data for ${lookupResultTableText}`, { simpleResult });
            }
            return simpleResult;
        });
    }
    rebuild() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.rebuildTable(this.db.inventar),
                this.rebuildTable(this.db.raeume),
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
            if (this.rebuildProcesses.find(p => p.table === table.name)) {
                return false;
            }
            this.rebuildProcesses.push({ jobid: 0, table: table.name });
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            console.log('BarcodeService.rebuildTable() #323 delete index for table ', tblName);
            yield this.db.barcodeLookup.where('table').equals(tblName).delete();
            return this.db
                .transaction('rw', [table, this.db.barcodeLookup], () => {
                table.each((item) => {
                    this.db.barcodeLookup.put(Object.assign({
                        code: item.code,
                        table: tblName,
                        for_jobid: item.for_jobid,
                        key: keyName,
                        uuid: item.uuid,
                        updateHelper: 1
                    }, { log: false }));
                });
            })
                .then(() => true)
                .finally(() => {
                this.rebuildProcesses = this.rebuildProcesses.filter(p => p.table !== tblName);
            });
        });
    }
    rebuildByJobid(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('BarcodeService.rebuildByJobid(' + jobid + ') #346');
            return Promise.all([
                this.rebuildTableByJobid(this.db.inventar, jobid),
                this.rebuildTableByJobid(this.db.raeume, jobid),
                this.rebuildTableByJobid(this.db.objektKatalogMandant, jobid)
            ]).then((results) => {
                const numErrors = results.filter(re => !re).length;
                this.addError('#242 Beim Rebuild des Lookup-Indexes sind ' + numErrors + ' aufgetreten!');
                return numErrors === 0;
            });
        });
    }
    rebuildTableByJobid(table, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.rebuildProcesses.find(p => (p.jobid === 0 || p.jobid === jobid) && p.table === table.name)) {
                console.error(`BarcodeService.rebuildTableByJobid(${table.name}, ${jobid}) #360 Abort rebuild, is already running`);
                return false;
            }
            this.rebuildProcesses.push({ jobid, table: table.name });
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            if (this.isInDebugMode) {
                console.log('BarcodeService.rebuildTableByJobid(' + jobid + ', ' + table + ') #253.' +
                    ' barcode.service rebuildTableByJobid delete barcodeLookup for table ', tblName, jobid);
            }
            const numDeleted = yield this.db.barcodeLookup.where({ table: tblName, for_jobid: jobid }).delete();
            if (this.isInDebugMode) {
                console.log(`BarcodeService.rebuildTableByJobid(${table.name}, ${jobid}) #255`, ' numDeleted:', numDeleted);
            }
            let count = 0;
            return this.db
                .transaction('rw', [table, this.db.barcodeLookup], () => {
                table.where({ for_jobid: jobid }).each((item) => {
                    count += 1;
                    const putData = Object.assign({
                        code: item.code,
                        table: tblName,
                        for_jobid: item.for_jobid,
                        key: keyName,
                        uuid: item.uuid,
                        updateHelper: 1
                    }, { log: false });
                    if (!item.code) {
                        console.error('#359 BarcodeService.rebuildTableByJobid Missing Barcode', tblName, jobid, { putData });
                        return;
                    }
                    this.db.barcodeLookup.put(putData)
                        .catch((argReason) => {
                        console.error('#365 barcode.serve rebuildTableByJobid put Errors', tblName, jobid, { argReason, putData });
                        return false;
                    });
                });
            })
                .then(() => {
                console.log(`BarcodeService.rebuildTableByJobid(${table.name}, ${jobid}) #403 finished`, { count });
                return true;
            })
                .catch((argReason) => {
                console.error(`BarcodeService.rebuildTableByJobid(${table.name}, ${jobid}) #274 finished with Errors`, argReason);
                return false;
            })
                .finally(() => {
                this.rebuildProcesses = this.rebuildProcesses.filter(p => p.jobid !== jobid && p.table !== tblName);
            });
        });
    }
    importObjektbuchBarcodesLookup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('BarcodeService.importObjektbuchBarcodesLookup() #405');
            this.lkup.where({ updateHelper: 11 }).modify({ updateHelper: 12 });
            const list = yield this.db.objektbuchBarcodesLookup.toArray();
            yield list.forEach(item => {
                item.updateHelper = 11;
                if (this.isInDebugMode) {
                    console.log('BarcodeService.importObjektbuchBarcodesLookup() #3411 import ', { item });
                }
                this.lkup.put(Object.assign({}, item, { log: false })).then((r) => {
                    // console.log('#229 result of put', item, r);
                }).catch((err) => {
                    console.error('#231', err);
                });
            });
            yield this.lkup.where({ updateHelper: 12 }).delete();
            return true;
        });
    }
    rebuildOnRunningSystemByJobid(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.rebuildTableOnRunningSystemByJobid(this.db.inventar, jobid)
                    .then(() => true).catch(() => false)
                    .finally(() => console.log(`BarcodeService.rebuildOnRunningSystemByJobid(${jobid}) #413 Finished Inventar`)),
                this.rebuildTableOnRunningSystemByJobid(this.db.raeume, jobid)
                    .then(() => true).catch(() => false)
                    .finally(() => console.log(`BarcodeService.rebuildOnRunningSystemByJobid(${jobid}) #415 Finished Raeume!`)),
                this.rebuildTableOnRunningSystemByJobid(this.db.objektKatalogMandant, jobid)
                    .then(() => true).catch(() => false)
                    .finally(() => console.log(`BarcodeService.rebuildOnRunningSystemByJobid(${jobid}) #417 Finished objektKatalogMandant!`))
            ]).then((results) => {
                const numErrors = results.filter(re => !re).length;
                if (numErrors) {
                    this.addError(`Beim Rebuild des Lookup-Indexes sind ${numErrors} Fehler aufgetreten!`);
                    console.error(`BarcodeService.rebuildOnRunningSystemByJobid(${jobid}) #439
        Beim Rebuild des Lookup-Indexes sind ${numErrors} Fehler aufgetreten!`);
                }
                return numErrors === 0;
            }).catch((err) => {
                console.error(`BarcodeService.rebuildOnRunningSystemByJobid(${jobid}) #423. Fehler beim Barcode-Lookup-Aufbau: `, { err });
            });
        });
    }
    rebuildTableOnRunningSystemByJobid(table, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.rebuildProcesses.find(p => (p.jobid === 0 || p.jobid === jobid) && p.table === table.name)) {
                return false;
            }
            this.rebuildProcesses.push({ jobid, table: table.name });
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            const tblBarcodeLookup = this.db.barcodeLookup;
            let count = 0;
            yield this.db.transaction('rw', [tblBarcodeLookup, table], () => {
                tblBarcodeLookup
                    .where({ table: tblName, for_jobid: jobid, updateHelper: 1 })
                    .modify({ updateHelper: 2 })
                    .then(() => {
                    table.where({ for_jobid: jobid })
                        .filter((item) => !!item.code)
                        .each((item) => {
                        count += 1;
                        tblBarcodeLookup.put(Object.assign({
                            code: item.code,
                            table: tblName,
                            key: keyName,
                            for_jobid: jobid,
                            uuid: item.uuid,
                            updateHelper: 1
                        }, { log: false }));
                    });
                });
            });
            const numDeletes = yield tblBarcodeLookup.where({ table: tblName, for_jobid: jobid, updateHelper: 2 }).delete();
            console.log(`BarcodeService.rebuildTableOnRunningSystemByJobid(${table.name}, ${jobid}) #477 finished`, {
                count, numDeletes
            });
            // Clear Finished Process from ProcessList
            this.rebuildProcesses = this.rebuildProcesses.filter(p => p.jobid !== jobid && p.table !== tblName);
        });
    }
    rebuildOnRunningSystem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.rebuildTableOnRunningSystem(this.db.inventar)
                    .finally(() => console.log('BarcodeService.rebuildOnRunningSystem() #487 Finished Inventar')),
                this.rebuildTableOnRunningSystem(this.db.raeume)
                    .finally(() => console.log('BarcodeService.rebuildOnRunningSystem() #489 Finished Raeume!')),
                this.rebuildTableOnRunningSystem(this.db.objektKatalogMandant)
                    .finally(() => console.log('BarcodeService.rebuildOnRunningSystem() #491 Finished objektKatalogMandant!'))
            ]).then((results) => {
                const numErrors = results.filter(re => !re).length;
                if (numErrors > 0) {
                    console.error(`BarcodeService.rebuildOnRunningSystem() #495 Es sind ${numErrors} Fehler aufgetreten!`);
                    this.addError(`Beim Rebuild des Lookup-Indexes sind ${numErrors} Fehler aufgetreten!`);
                }
                return numErrors === 0;
            }).catch((err) => {
                console.error('BarcodeService.rebuildOnRunningSystem() #500. Fehler beim Barcode-Lookup-Aufbau: ', { err });
            });
        });
    }
    rebuildTableOnRunningSystem(table) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.rebuildProcesses.find(p => p.table === table.name)) {
                return false;
            }
            this.rebuildProcesses.push({ jobid: 0, table: table.name });
            const keyName = table.schema.primKey.keyPath.toString();
            const tblName = table.name;
            const tblBarcodeLookup = this.db.barcodeLookup;
            console.log(`BarcodeService.rebuildTableOnRunningSystem(${table.name}) #513 Start Transaction Re-Indexing`);
            yield this.db.transaction('rw', [tblBarcodeLookup, table], () => {
                if (this.isInDebugMode) {
                    console.log(`BarcodeService.rebuildTableOnRunningSystem(${table.name}) #515 Set Flag updateHelper=2`);
                }
                tblBarcodeLookup
                    .where({ table: tblName, updateHelper: 1 })
                    .modify({ updateHelper: 2 })
                    .then(() => {
                    if (this.isInDebugMode) {
                        console.log(`BarcodeService.rebuildTableOnRunningSystem(${table.name}) #520 rebuild Index`);
                    }
                    table.filter((item) => !!item.code)
                        .each((item) => {
                        const forJobid = ('for_jobid' in item) ? item.for_jobid : 0;
                        tblBarcodeLookup.put(Object.assign({
                            code: item.code,
                            table: tblName,
                            key: keyName,
                            for_jobid: forJobid,
                            uuid: item.uuid,
                            updateHelper: 1
                        }, { log: false }));
                    });
                });
            });
            if (this.isInDebugMode) {
                console.log(`BarcodeService.rebuildTableOnRunningSystem(${table.name}) #536 delete no more existing entries`);
            }
            yield tblBarcodeLookup.where({ table: tblName, updateHelper: 2 }).delete();
            // Clear Finished Process from ProcessList
            this.rebuildProcesses = this.rebuildProcesses.filter(p => p.table !== tblName);
            return true;
        });
    }
    addBarcode(item, log = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.db.barcodeLookup.add(Object.assign({}, item, { log }))
                .then((key) => key[0])
                .catch(reason => {
                console.error(reason, 'BarcodeService.addBarcode #517 add', { item });
                return '';
            });
        });
    }
    replaceBarcodeByUuid(uuid, item, log = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ('code' in item) {
                const updItem = item;
                console.log('BarcodeService.updateBarcodeByuuid() #521 Run Barcode-Update ');
                const bcFound = yield this.db.barcodeLookup
                    .where({ table: item.table, for_jobid: item.for_jobid })
                    .filter((oldBcItem) => oldBcItem.uuid === item.uuid)
                    .first();
                if (bcFound) {
                    const numDel = yield this.db.barcodeLookup.where({
                        code: bcFound.code,
                        for_jobid: bcFound.for_jobid
                    }).delete();
                    yield this.addBarcode({
                        code: updItem.code,
                        for_jobid: item.for_jobid,
                        key: 'uuid',
                        table: item.table,
                        uuid: item.uuid
                    }, log);
                    return true;
                }
            }
            else {
                console.log('DbsyncClientService.sendByJobId() #701 No-Barcode-Update, Origin-Element not found ', { item });
            }
            return false;
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
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] }
];
BarcodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BarcodeService);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/hersteller.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/hersteller.service.ts ***!
  \***********************************************************************/
/*! exports provided: HerstellerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerstellerService", function() { return HerstellerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);





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
    getAllHerstellerWithUuids() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = [];
            return this.dexie.hersteller.orderBy('Hersteller')
                .each(hst => {
                result.push({
                    Hersteller: hst.Hersteller,
                    uuid: hst.uuid
                });
            })
                .then(() => result);
        });
    }
    getByNameOrCreate(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const hstExisting = yield this.getByName(name);
            if (hstExisting) {
                return hstExisting;
            }
            return this.createAndGetData(name);
        });
    }
    getByName(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called HerstellerService.getByName(name)');
            const exakt = yield this.dexie.hersteller.where({ Hersteller: name }).first();
            if (exakt !== undefined) {
                console.log('Found Hersteller with strict compare-search');
                return exakt;
            }
            const fuzzy = yield this.dexie.hersteller.filter(item => item.Hersteller.trim().toLowerCase() === name.trim().toLowerCase()).first();
            if (fuzzy === undefined) {
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
            const uuid = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            const item = {
                Hersteller: name,
                uuid,
                for_jobid: jobid,
                created_at: new Date(),
                created_uid: uid,
                created_jobid: jobid
            };
            return this.dexie.hersteller.add(item)
                .then(insertUuid => insertUuid)
                .catch(reason => {
                console.error(reason, 'HerstellerService.create #75', { item });
                return '';
            });
        });
    }
    createAndGetData(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uuid = yield this.create(name);
            return this.dexie.hersteller.get({ uuid });
        });
    }
};
HerstellerService.ctorParameters = () => [
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
HerstellerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HerstellerService);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/images.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/images.service.ts ***!
  \*******************************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");





let ImagesService = class ImagesService {
    constructor(dexie, baseData) {
        this.dexie = dexie;
        this.baseData = baseData;
    }
    insertArtikelImage(image, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const item = {
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString(),
                name: image.name,
                desc: image.desc,
                size: image.size,
                width: image.width,
                height: image.height,
                type: image.type,
                for_jobid: image.for_jobid,
                mcuuid: image.mcuuid,
                gcuuid: image.gcuuid,
                url: image.url || '',
                data_binary: image.data_binary || null,
                data_url: image.data_url || null,
                revnr: 1,
                created_at: image.created_at || new Date(),
                created_uid: image.created_uid || uid,
                created_jobid: image.created_jobid || jobid
            };
            return this.dexie.images
                .add(item)
                .then((imgUuid) => {
                this.addImageKatalogRef({
                    for_jobid: image.for_jobid,
                    RefTable: 'ObjektKatalogMandant',
                    RefUuid: image.mcuuid,
                    ImgUuid: imgUuid,
                    RefText: image.desc || image.name,
                    Pos: 1,
                    Kategorie: ''
                });
                return imgUuid;
            })
                .catch(reason => {
                console.error(reason, 'ImageService.insertArtikelImage() #86 add ', {
                    uuid: item.uuid,
                    mcuuid: item.mcuuid,
                    gcuuid: item.gcuuid,
                    name: item.name,
                    size: item.size,
                    width: item.width,
                    height: item.height
                });
                return null;
            });
        });
    }
    addImageKatalogRef(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uid = this.baseData.getCurrentUid();
            const devID = this.baseData.getCurrentDeviceId();
            const jobid = this.baseData.getCurrentJobid();
            const item = {
                for_jobid: data.for_jobid || jobid,
                RefTable: data.RefTable,
                RefUuid: data.RefUuid,
                ImgUuid: data.ImgUuid,
                RefText: data.RefText,
                Pos: data.Pos,
                Kategorie: data.Kategorie,
                created_at: new Date(),
                created_uid: uid,
                created_jobid: jobid,
                created_device_id: devID
            };
            return this.dexie.objektKatalogImages.add(item)
                .then(uuid => uuid)
                .catch(reason => {
                console.error(reason, 'ImageService.addImageKatalogRef #119 ', { item });
                return '';
            });
        });
    }
    putRaumImage(image, ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.insertRaumImage(image, ruuid, useJobid);
        });
    }
    putArtikelImage(image, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.dexie.images.where({ gcuuid: image.gcuuid }).delete();
            return this.insertArtikelImage(image, useJobid);
        });
    }
    getImageByMcuuid(mcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called ImageService.getImageByMcuuid:', mcuuid);
            return this.dexie.images.filter((img) => 'mcuuid' in img && img.mcuuid === mcuuid).first()
                .then(img => img, err => null);
            // Dexie hat den Index 'mcuuid' in Images nicht übernommen
            return this.dexie.images.where({ mcuuid }).first();
        });
    }
    getImageByGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called ImageService.getImageByGcuuid:', gcuuid);
            return this.dexie.images.where({ gcuuid }).first();
        });
    }
    getImageByUuid(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called ImageService.getImageByUuid:', uuid);
            return this.dexie.images.where({ uuid }).first()
                .then(img => img, err => null);
        });
    }
    imageExistsOfGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.images.where({ gcuuid }).count()
                .then(nr => nr > 0)
                .catch(err => { console.error(err); return false; });
        });
    }
    insertRaumImage(image, ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const numExists = yield this.dexie.images.where({ for_jobid: image.for_jobid, name: image.name }).count();
            if (numExists) {
                let inc = 1;
                let incExists = 0;
                let incName = '';
                do {
                    ++inc;
                    incName = image.name + '(' + inc + ')';
                    incExists = yield this.dexie.images.where({ for_jobid: image.for_jobid, name: incName }).count();
                } while (incExists > 0);
                image.name = incName;
            }
            const item = {
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString(),
                name: image.name,
                desc: image.desc,
                size: image.size,
                width: image.width,
                height: image.height,
                type: image.type,
                for_jobid: image.for_jobid,
                mcuuid: '',
                gcuuid: '',
                url: image.url || '',
                data_binary: image.data_binary || null,
                data_url: image.data_url || null,
                revnr: 1,
                created_at: image.created_at || new Date(),
                created_uid: image.created_uid || uid,
                created_jobid: image.created_jobid || jobid
            };
            return this.dexie.images.add(item)
                .then((imgUuid) => {
                this.addImageKatalogRef({
                    for_jobid: image.for_jobid,
                    RefTable: 'Raeume',
                    RefUuid: ruuid,
                    ImgUuid: imgUuid,
                    RefText: image.desc || image.name,
                    Pos: 1,
                    Kategorie: 'Bild'
                });
                return imgUuid;
            })
                .catch(reason => {
                console.error(reason, 'ImagesService.insertRaumImage() #214 images.add', {
                    uuid: item.uuid,
                    name: item.name,
                    size: item.size,
                    width: item.width,
                    height: item.height
                });
                return null;
            });
        });
    }
    deleteByUuid(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.images.where({ uuid }).delete()
                .then((num) => {
                return this.dexie.objektKatalogImages
                    .where({ ImgUuid: uuid })
                    .delete()
                    .then((numLinks) => num + numLinks)
                    .catch(() => {
                    console.error('ERROR: Can not delete links in objektKatalogImages for uuid: ' + uuid);
                    return num;
                });
            })
                .catch(() => {
                console.error('ERROR: Cannot Delete Image with uuid: ' + uuid);
                return 0;
            });
        });
    }
};
ImagesService.ctorParameters = () => [
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImagesService);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/inventar.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/inventar.service.ts ***!
  \*********************************************************************/
/*! exports provided: InventarEditErrorCode, InventarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarEditErrorCode", function() { return InventarEditErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarService", function() { return InventarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _artikel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artikel.service */ "./src/app/pages/invent-form/data-services/artikel.service.ts");
/* harmony import */ var _hersteller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hersteller.service */ "./src/app/pages/invent-form/data-services/hersteller.service.ts");
/* harmony import */ var _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var _raum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");











var InventarEditErrorCode;
(function (InventarEditErrorCode) {
    InventarEditErrorCode[InventarEditErrorCode["NoError"] = 0] = "NoError";
    InventarEditErrorCode[InventarEditErrorCode["RaumNotFound"] = 1] = "RaumNotFound";
    InventarEditErrorCode[InventarEditErrorCode["InventarNotFound"] = 2] = "InventarNotFound";
    InventarEditErrorCode[InventarEditErrorCode["ArtikelNotFound"] = 3] = "ArtikelNotFound";
    InventarEditErrorCode[InventarEditErrorCode["ArtikelMandantNotFound"] = 4] = "ArtikelMandantNotFound";
    InventarEditErrorCode[InventarEditErrorCode["ArtikelGlobalNotFound"] = 5] = "ArtikelGlobalNotFound";
})(InventarEditErrorCode || (InventarEditErrorCode = {}));
let InventarService = class InventarService {
    constructor(dexie, authService, baseData, herstellerService, artikelService, variablesService, raumService) {
        this.dexie = dexie;
        this.authService = authService;
        this.baseData = baseData;
        this.herstellerService = herstellerService;
        this.artikelService = artikelService;
        this.variablesService = variablesService;
        this.raumService = raumService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    returnResultSuccess(data) {
        const result = {
            type: data.type,
            success: true,
            message: data.message || ''
        };
        if (data.type === 1 /* Create */) {
            result.insertID = data.insertID;
            result.insertUUID = data.insertUUID;
        }
        return result;
    }
    getJobiId() {
        return this.baseData.getCurrentJobid();
    }
    getMid() {
        return this.baseData.getCurrentMid();
    }
    getUserId() {
        return this.authService.getUser().id;
    }
    getFreshUuid() {
        return guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
    }
    getNewKunstBarcode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.getJobiId();
            const varLastOffset = 'KunstBarcodeOffset_' + jobid;
            const devid = this.baseData.getCurrentDeviceId().toString(10);
            const offsetDefault = '9' + devid.padStart(4, '0') + '00001';
            let codeCheckInc = yield this.variablesService.get(varLastOffset, parseInt(offsetDefault, 10));
            if (!codeCheckInc) {
                codeCheckInc = parseInt(offsetDefault, 10);
            }
            let code = ''; // codeCheckInc;
            let itemCheck = null;
            do {
                code = codeCheckInc.toString(10);
                itemCheck = yield this.dexie.inventar.where({
                    for_jobid: jobid,
                    code
                }).first();
                ++codeCheckInc;
            } while (itemCheck);
            yield this.variablesService.set(varLastOffset, parseInt(code, 10));
            return code;
        });
    }
    returnResultError(data) {
        return {
            type: data.type,
            success: false,
            message: data.message || '',
            errorMsg: data.errorMsg || '',
            errorCode: data.errorCode || null,
        };
    }
    getHello() {
        return 'hello';
    }
    getInventar(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = {
                success: false,
                inventar: null,
                artikelRef: null,
                artikelData: null,
                hersteller: null
            };
            console.log('InventarService #155 getInventar(uuid: ', uuid, ')');
            result.inventar = yield this.dexie.inventar.get(uuid);
            console.log('InventarService #157 inventar.get(uuid: ', uuid, ')', { result });
            if (result.inventar) {
                console.log('InventarService #160 objektKatalogMandant.get(uuid: ', result.inventar.mcuuid, ')');
                result.artikelRef = yield this.dexie.objektKatalogMandant.get(result.inventar.mcuuid);
                console.log('InventarService #162 objektKatalogMandant.get(uuid: ', result.inventar.mcuuid, ')', { resultArtikelRef: result.artikelRef });
                if (result.artikelRef) {
                    result.success = true;
                    console.log('InventarService #155 objektKatalogGlobal.get(uuid: ', result.artikelRef.gcuuid, ')');
                    result.artikelData = yield this.dexie.objektKatalogGlobal.get(result.artikelRef.gcuuid);
                    console.log('InventarService #155 objektKatalogGlobal.get(uuid: ', result.artikelRef.gcuuid, ')', { resultArtikelData: result.artikelData });
                    if (result.artikelData.huuid) {
                        console.log('InventarService #172 herteller.get(huuid: ', result.artikelData.huuid, ')');
                        result.hersteller = yield this.dexie.hersteller.get(result.artikelData.huuid);
                        console.log('InventarService #174 hersteller.get(huuid: ', result.artikelData.huuid, ')', { resultHersteller: result.hersteller });
                    }
                }
            }
            return result;
        });
    }
    insertInventar(inventar, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.getJobiId();
            const uid = this.getUserId();
            const uuid = this.getFreshUuid();
            console.log('InventarService #189 insertInventar: ', { inventar });
            const item = {
                mcid: inventar.mcid,
                uuid,
                mcuuid: inventar.mcuuid,
                hash: '',
                code: inventar.code,
                ruuid: inventar.ruuid,
                ruuid_neu: inventar.ruuid,
                for_jobid: inventar.jobid || jobid,
                jobid: inventar.jobid || jobid,
                created_at: inventar.created_at || new Date(),
                created_uid: inventar.created_uid || uid,
                created_jobid: inventar.created_jobid || jobid
            };
            const log = { log: true };
            const insertUuid = yield this.dexie.inventar
                .add(Object.assign({}, item, log))
                .then(id => id)
                .catch(reason => {
                console.error(reason, 'InventarService.insertInventar() #239 inventar.add', { item });
                return '';
            });
            console.log('InventarService #207 insertInventar: ', { insertUuid, data: Object.assign({}, item, log) });
            const saved = yield this.dexie.inventar.get(insertUuid);
            console.log('InventarService #207 insertInventar: ', { insertUuid, saved, data: Object.assign({}, item, log) });
            if (insertUuid && saved) {
                this.dexie.barcodeLookup.add({
                    code: saved.code,
                    for_jobid: jobid,
                    table: 'inventar',
                    key: 'uuid',
                    uuid: insertUuid,
                    updateHelper: 11
                }).catch(reason => {
                    console.error(reason, 'InventarService.insertInventar() barcodeLookup.add', {
                        code: saved.code,
                        for_jobid: jobid,
                        table: 'inventar',
                        key: 'uuid',
                        uuid: insertUuid,
                        updateHelper: 11
                    });
                });
                const lkupItem = yield this.dexie.barcodeLookup.get({ code: saved.code, for_jobid: jobid });
                console.log('InventarService #220 insertInventar: ', { insertUuid, saved, lkupItem, data: Object.assign({}, item, log) });
            }
            this.changed.emit({
                type: 1 /* Create */,
                table: this.dexie.inventar.name,
                key: insertUuid,
                uuid,
                obj: item
            });
            return this.returnResultSuccess({
                type: 1 /* Create */,
                insertUUID: uuid
            });
        });
    }
    updateArtikelRef(uuid, inventar, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.getJobiId();
            const uid = this.getUserId();
            /*
            const inventar: DBDIInventar = {
              mcid: this.formInventar.mcid,
              mcuuid: this.formInventar.mcuuid,
              ruuid: this.formInventar.ruuid,
              code: this.formInventar.Barcode,
              jobid,
              created_at: new Date(),
              created_uid: uid
            };
            */
            const inventarEditResult = {
                type: 2 /* Update */,
                success: false,
                message: '',
                errorMsg: '',
                errorCode: InventarEditErrorCode.NoError,
                insertUUID: uuid
            };
            const item = {
                mcid: inventar.mcid,
                uuid,
                mcuuid: inventar.mcuuid,
                code: inventar.code,
                jobid: inventar.jobid || jobid,
                modified_at: inventar.modified_at || new Date(),
                modified_uid: inventar.modified_uid || uid,
                modified_jobid: inventar.modified_jobid || jobid
            };
            return this.dexie.inventar.update(uuid, item).then((n) => {
                inventarEditResult.success = true;
                inventarEditResult.message = 'Inventar wurde aktualisiert!';
                return inventarEditResult;
            }, (reason) => {
                console.error('InventarService updateArtikelRef #277', {
                    uuid,
                    inventar,
                    updateData: item,
                    reason
                });
                inventarEditResult.errorCode = InventarEditErrorCode.InventarNotFound;
                inventarEditResult.message = 'Fehler bei Aktualisierung der Inventardaten! (siehe console.error)';
                inventarEditResult.errorMsg = JSON.stringify(reason);
                return inventarEditResult;
            });
        });
    }
    updateByUuid(uuid, daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // return this.getInventar(ivid);
            console.log('#205 updateById', { uuid, daten });
            const updateData = daten;
            const jobid = this.getJobiId();
            const uid = this.getUserId();
            const mid = this.getMid();
            const devID = this.baseData.getCurrentDeviceId();
            const oldData = yield this.getInventar(uuid);
            let bUpdateBarceLookup = false;
            const globalKatalogDaten = {
                Bezeichnung: daten.Bezeichnung,
                Gruppe: daten.Gruppe,
                Kategorie: daten.Kategorie,
                Typ: daten.Typ,
                Farbe: daten.Farbe,
                Groesse: daten.Groesse,
                hid: daten.hid || 0,
                huuid: daten.huuid || null
            };
            if (daten.Hersteller) {
                console.log('#226 checkAndGet Hersteller: ', daten.Hersteller);
                const hstQuery = this.dexie.hersteller.where('Hersteller').equals(daten.Hersteller);
                if ((yield hstQuery.count()) > 0) {
                    console.log('#228 checkAndGet Hersteller existiert bereits');
                    yield this.dexie.hersteller
                        .where('Hersteller').equals(daten.Hersteller)
                        .first()
                        .then(hstData => {
                        globalKatalogDaten.hid = hstData.hid;
                        globalKatalogDaten.huuid = hstData.uuid;
                    });
                }
                else {
                    console.log('#238 checkAndGet Hersteller wird angelegt');
                    yield this.herstellerService.createAndGetData(daten.Hersteller)
                        .then((hst) => {
                        globalKatalogDaten.hid = hst.hid;
                        globalKatalogDaten.huuid = hst.uuid;
                    });
                }
            }
            const okgFilledFields = this.getFilledFields(globalKatalogDaten);
            const okgEmptyFieldnames = Object.keys(this.getEmptyFields(globalKatalogDaten));
            const okgArtikelMatches = yield this.dexie.objektKatalogGlobal
                .filter((rslt) => {
                for (const ff of Object.keys(okgFilledFields)) {
                    const val = okgFilledFields[ff];
                    const valRslt = typeof rslt[ff] === 'string' ? rslt[ff].trim() : rslt[ff];
                    if (val !== valRslt) {
                        return false;
                    }
                }
                for (const ef of okgEmptyFieldnames) {
                    const valRslt = typeof rslt[ef] === 'string' ? rslt[ef].trim() : rslt[ef];
                    if (null !== valRslt && '' !== valRslt) {
                        return false;
                    }
                }
                return true;
            }).toArray();
            console.log('#267 okgArtikelMatches', { okgFilledFields, okgEmptyFieldnames, okgArtikelMatches });
            let okgArtikel = null;
            let okmArtikelRef = null;
            switch (okgArtikelMatches.length) {
                case 0:
                    console.log('#273 checkAndGet Artikel wird angelegt');
                    okgArtikel = yield this.artikelService.insertArtikelData(globalKatalogDaten);
                    break;
                case 1:
                    okgArtikel = okgArtikelMatches[0];
                    break;
                default:
                    okgArtikel = okgArtikelMatches.sort((a, b) => {
                        const rankA = a.created_jobid === jobid ? 1 : (a.modified_jobid === jobid ? 2 : 3);
                        const rankB = b.created_jobid === jobid ? 1 : (b.modified_jobid === jobid ? 2 : 3);
                        return rankA < rankB ? -1 : (rankA > rankB ? 1 : 0);
                    })[0];
            }
            if (okgArtikel) {
                console.log('#290 checkAndGet Artikel existiert/angelegt');
                okmArtikelRef = yield this.dexie.objektKatalogMandant.where({
                    mid,
                    for_jobid: jobid,
                    gcid: okgArtikel.gcid
                }).first();
                if (!okmArtikelRef) {
                    console.log('#296 checkAndGet ArtikelRef nuss angeleget werden');
                    okmArtikelRef = yield this.artikelService.insertArtikelRefByGcidGcuuid(okgArtikel.uuid);
                }
                const updateInv = {};
                if (okmArtikelRef.uuid !== daten.mcuuid) {
                    updateInv.mcuuid = okmArtikelRef.uuid;
                }
                if (oldData.inventar.Zustand !== daten.Zustand) {
                    updateInv.Zustand = daten.Zustand;
                }
                if (oldData.inventar.code !== daten.code) {
                    updateInv.code = daten.code;
                    bUpdateBarceLookup = true;
                }
                if (Object.keys(updateInv).length > 0) {
                    console.log('#310 checkAndGet ArtikelRef-ID muss im Inventar aktualisiert werden');
                    updateInv.modified_at = new Date();
                    updateInv.modified_uid = uid;
                    updateInv.modified_jobid = jobid;
                    updateInv.modified_device_id = devID;
                    updateInv.log = true;
                    yield this.dexie.inventar.update(uuid, updateInv).then(() => {
                        if (bUpdateBarceLookup) {
                            console.log('InventarService #353 call updateBarcodelookup(', { ivid: uuid, datenCode: daten.code });
                            this.updateBarcodeLookup(uuid, daten.code, oldData.inventar.code);
                        }
                        else {
                            console.log('InventarService #356 Barcode has not changed');
                        }
                    });
                }
            }
            const result = yield this.getInventar(uuid);
            console.log('#322 return Inventar-Data', result);
            return result;
        });
    }
    updateRefs(uuid, mcuuid, daten) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.getJobiId();
            const uid = this.getUserId();
            const mid = this.getMid();
            const devID = this.baseData.getCurrentDeviceId();
            const updateInv = {};
            const oldData = yield this.getInventar(uuid);
            let bUpdateBarceLookup = false;
            updateInv.mcuuid = mcuuid;
            if (daten.Zustand && daten.Zustand !== oldData.inventar.Zustand) {
                updateInv.Zustand = daten.Zustand;
            }
            if (daten.code && daten.code !== oldData.inventar.code) {
                updateInv.code = daten.code;
                bUpdateBarceLookup = true;
            }
            console.log('#310 checkAndGet ArtikelRef-ID muss im Inventar aktualisiert werden');
            updateInv.modified_at = new Date();
            updateInv.modified_uid = uid;
            updateInv.modified_jobid = jobid;
            updateInv.modified_device_id = devID;
            updateInv.log = true;
            this.dexie.inventar.update(uuid, updateInv).then(() => {
                if (bUpdateBarceLookup) {
                    this.updateBarcodeLookup(uuid, daten.code, oldData.inventar.code);
                }
            });
        });
    }
    updateBarcodeLookup(uuid, code, oldCode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('InventarService #410 called updateBarcodelookup(', { uuid, code }, ')');
            let savedRaumDataCode = oldCode;
            const savedRaumData = yield this.dexie.inventar.get(uuid);
            if (!oldCode) {
                savedRaumDataCode = savedRaumData.code;
            }
            const jobid = this.getJobiId();
            console.log('InventarService #413 check if code has changed(', { ivid: uuid, code, savedRaumDataCode }, ')');
            if (savedRaumDataCode !== code) {
                const lkupKey = {
                    code: savedRaumDataCode,
                    for_jobid: jobid
                };
                const bcItem = yield this.dexie.barcodeLookup.get(lkupKey);
                if (bcItem) {
                    console.log('InventarService #420 make update on existing bcItem: ', { lkupKey });
                    yield this.dexie.barcodeLookup.update([savedRaumDataCode, jobid], {
                        code
                    });
                }
                else {
                    console.log('InventarService #425 create new bcItem');
                    this.dexie.barcodeLookup.put({
                        code,
                        for_jobid: jobid,
                        key: 'uuid',
                        table: 'inventar',
                        updateHelper: 1,
                        uuid: savedRaumData.uuid
                    });
                }
            }
        });
    }
    getFilledFields(obj) {
        const allFields = Object.keys(obj);
        const filledFields = {};
        for (const f of allFields) {
            const val = (typeof obj[f] === 'string') ? obj[f].trim() : obj[f];
            if (null === val || '' === val) {
                continue;
            }
            filledFields[f] = val;
        }
        return filledFields;
    }
    getEmptyFields(obj) {
        const allFields = Object.keys(obj);
        const emptyFields = {};
        for (const f of allFields) {
            const val = (typeof obj[f] === 'string') ? obj[f].trim() : obj[f];
            if (null === val || '' === val) {
                emptyFields[f] = val;
            }
        }
        return emptyFields;
    }
    assignRaum(uuid, ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const inventar = db.inventar;
            const raeume = db.raeume;
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const devid = this.baseData.getCurrentDeviceId();
            const log = { log: true };
            console.log('InventoryEditorService.assignInventarToRaum', {
                uuid,
                ruuid,
                jobid,
                uid,
                devid
            });
            return Promise.all([
                inventar.get(uuid),
                raeume.get(ruuid)
            ])
                .then(result => {
                const inv = result[0];
                const raum = result[1];
                console.log('InventoryEditorService.assignInventarToRaum', {
                    inv,
                    raum
                });
                if (!inv) {
                    return this.returnResultError({
                        type: 2 /* Update */,
                        errorCode: InventarEditErrorCode.InventarNotFound
                    });
                }
                if (!raum) {
                    return this.returnResultError({
                        type: 2 /* Update */,
                        errorCode: InventarEditErrorCode.RaumNotFound
                    });
                }
                const changes = {
                    ruuid: raum.uuid,
                    jobid,
                    modified_at: new Date(),
                    modified_uid: uid,
                    modified_jobid: jobid,
                    modified_device_id: devid
                };
                return inventar.update(inv.uuid, Object.assign({}, changes, log)).then(() => {
                    this.changed.emit({
                        type: 2 /* Update */,
                        table: inventar.name,
                        key: inv.uuid,
                        uuid: inv.uuid,
                        obj: Object.assign({}, inv, changes),
                        mods: changes
                    });
                    if (raum.current_jobstatus === 0) {
                        this.raumService.setRaumStatus(_shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Started, ruuid, jobid);
                    }
                    return this.returnResultSuccess({
                        type: 2 /* Update */
                    });
                });
            });
        });
    }
    getInventarListRestByRaumUuid(ruuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarDataList = [];
            const inventarList = yield this.dexie.inventar
                .where({ ruuid })
                .and((item) => item.jobid !== jobid)
                .sortBy('created_at');
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where('uuid').anyOf(inventarList.map(itm => itm.mcuuid))
                .toArray();
            const artikelData = yield this.dexie.objektKatalogGlobal
                .where('uuid').anyOf(artikelRefs.map(itm => itm.gcuuid))
                .toArray();
            for (const inventar of inventarList) {
                const d = { inventar, artikelRef: null, artikelData: null };
                d.artikelRef = artikelRefs.find(itm => itm.uuid === inventar.mcuuid);
                if (d.artikelRef) {
                    d.artikelData = artikelData.find(itm => itm.uuid === d.artikelRef.gcuuid);
                }
                inventarDataList.push(d);
            }
            return inventarDataList;
        });
    }
    getInventarListDoneByRaumUuid(ruuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarDataList = [];
            const inventarList = yield this.dexie.inventar
                .where({ ruuid })
                .and((item) => item.jobid === jobid)
                .sortBy('modified_at');
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where('uuid').anyOf(inventarList.map(itm => itm.mcuuid))
                .toArray();
            const artikelData = yield this.dexie.objektKatalogGlobal
                .where('uuid').anyOf(artikelRefs.map(itm => itm.gcuuid))
                .toArray();
            for (const inventar of inventarList) {
                const d = { inventar, artikelRef: null, artikelData: null };
                d.artikelRef = artikelRefs.find(itm => itm.uuid === inventar.mcuuid);
                if (d.artikelRef) {
                    d.artikelData = artikelData.find(itm => itm.uuid === d.artikelRef.gcuuid);
                }
                inventarDataList.push(d);
            }
            return inventarDataList;
        });
    }
};
InventarService.ctorParameters = () => [
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_5__["BasedataService"] },
    { type: _hersteller_service__WEBPACK_IMPORTED_MODULE_8__["HerstellerService"] },
    { type: _artikel_service__WEBPACK_IMPORTED_MODULE_7__["ArtikelService"] },
    { type: _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_9__["VariablesService"] },
    { type: _raum_service__WEBPACK_IMPORTED_MODULE_10__["RaumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InventarService.prototype, "changed", void 0);
InventarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventarService);



/***/ }),

/***/ "./src/app/pages/invent-form/data-services/raum.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/invent-form/data-services/raum.service.ts ***!
  \*****************************************************************/
/*! exports provided: RaumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumService", function() { return RaumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");








let RaumService = class RaumService {
    constructor(dexie, authService, baseDataService) {
        this.dexie = dexie;
        this.authService = authService;
        this.baseDataService = baseDataService;
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
    codeExistsInInventur(jobid, ruuid, code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raeume = this.dexie.raeume
                .where('code')
                .equalsIgnoreCase(code.trim())
                .filter(itm => itm.uuid !== ruuid && itm.for_jobid !== jobid);
            const numRaeume = yield this.dexie.raeume
                .where('code')
                .equalsIgnoreCase(code.trim())
                .filter(itm => itm.uuid !== ruuid && itm.for_jobid !== jobid)
                .count();
            const exists = 0 < numRaeume;
            console.log('#85 raum.service.ts codeExistsInInventur', {
                params: {
                    jobid,
                    ruuid,
                    code
                },
                result: {
                    exists,
                    raeume,
                    numRaeume
                }
            });
            return exists;
        });
    }
    raumExistsInInventur(jobid, ruuid, Raum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numRaeume = yield this.dexie.raeume
                .where('Raum')
                .equalsIgnoreCase(Raum.trim())
                .filter(itm => itm.uuid !== ruuid && itm.for_jobid !== jobid)
                .count();
            return 0 < numRaeume;
        });
    }
    get(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.raeume.get(uuid);
        });
    }
    insert(daten, useJobId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobId || this.baseDataService.getCurrentJobid();
            const insertData = {
                gid: daten.gid,
                uuid: guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString(),
                hash: '',
                for_jobid: jobid,
                code: daten.code,
                raumid: '',
                Raum: daten.Raum,
                Raumbezeichnung: daten.Raumbezeichnung,
                Etage: daten.Etage,
                created_at: new Date(),
                created_jobid: jobid,
                created_uid: this.authService.getUser().id,
                modified_at: null,
                modified_uid: null
            };
            const log = { log: true };
            let newId = '';
            let newItem = null;
            try {
                newId = yield this.dexie.raeume.add(Object.assign({}, insertData, log));
                newItem = yield this.dexie.raeume.get(newId);
            }
            catch (err) {
                const errorMsg = (('name' in err) ? err.name + ': ' : '')
                    + (('message' in err) ? err.message : JSON.stringify(err));
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
    updateByUuid(uuid, raum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#162 raum.service.ts updateById:', { uuid, raum });
            const jobid = this.baseDataService.getCurrentJobid();
            const savedRaumData = yield this.dexie.raeume.get(uuid);
            const hasUuid = ('uuid' in raum) && (typeof raum.uuid === 'string') && raum.uuid !== '';
            const updUuid = hasUuid && ('uuid' in raum) ? raum.uuid : uuid;
            if (savedRaumData.code && savedRaumData.code !== raum.code) {
                const lkupKey = {
                    code: savedRaumData.code,
                    for_jobid: jobid
                };
                console.log('#172 raum.service.ts Raum-Code has changed', { lkupKey });
                const bcItem = yield this.dexie.barcodeLookup.get(lkupKey);
                console.log('#174 raum.service.ts check if bcItem exists', { bcItem });
                if (bcItem) {
                    yield this.dexie.barcodeLookup.delete([savedRaumData.code, jobid]).catch((reason) => {
                        console.error('#177 Alter BC-Lookup fuer Raum konnte nicht geloescht werden!', { reason });
                    });
                }
                console.log('#184 raum.service.ts create new bcItem', {
                    code: raum.code,
                    for_jobid: jobid,
                    id: uuid,
                    key: 'uuid',
                    table: 'raeume',
                    updateHelper: 1,
                    uuid: updUuid
                });
                if (raum.code) {
                    yield this.dexie.barcodeLookup.put({
                        code: raum.code,
                        for_jobid: jobid,
                        key: 'uuid',
                        table: 'raeume',
                        updateHelper: 1,
                        uuid: updUuid
                    });
                }
            }
            else if (raum.code) {
                const bcItem = yield this.dexie.barcodeLookup.get({ code: raum.code, for_jobid: jobid });
                if (!bcItem) {
                    this.dexie.barcodeLookup.put({
                        code: raum.code,
                        for_jobid: jobid,
                        key: 'uuid',
                        table: 'raeume',
                        updateHelper: 1,
                        uuid: updUuid
                    });
                }
            }
            console.log('#205 raum.service.ts update raum', { uuid, raum });
            const numChanges = yield this.dexie.raeume.update(uuid, Object.assign({}, raum, { log: true }));
            const savedData = yield this.dexie.raeume.get(uuid);
            console.log('#208 raum.service.ts get updated raumItem', { uuid, savedData, return: {
                    success: numChanges > 0,
                    id: uuid,
                    item: savedData,
                    data: raum
                } });
            return {
                success: numChanges > 0,
                id: uuid,
                item: savedData,
                data: raum
            };
        });
    }
    __DEL__updateByUuid(uuid, raum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const numChanges = yield this.dexie.raeume.where({ uuid }).modify(raum);
            const savedData = yield this.dexie.raeume.where({ uuid }).first();
            return {
                success: numChanges > 0,
                id: savedData.uuid,
                item: savedData,
                data: raum
            };
        });
    }
    getRaumPlaene(ruuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const totalImages = yield this.dexie.objektKatalogImages.where({
                RefTable: 'Raeume',
                RefUuid: ruuid
            }).toArray();
            const imgWithUuids = yield this.dexie.objektKatalogImages.where({
                RefTable: 'Raeume',
                RefUuid: ruuid,
                Kategorie: 'Plan'
            }).toArray();
            const imgUuids = imgWithUuids.map((row) => row.ImgUuid);
            console.log('RaumService.getRaumPlaene, ruuid: ', ruuid, 'totalImages', totalImages, 'imgUuids', imgUuids);
            if (imgUuids.length === 0) {
                return [];
            }
            return this.dexie.images
                .where('uuid').anyOf(imgUuids)
                .toArray()
                .then((images) => {
                return images.map((img) => ({
                    uuid: img.uuid,
                    name: img.name,
                    type: img.type,
                    size: img.size,
                    width: img.width,
                    height: img.height,
                    desc: img.desc || '',
                    Kategorie: 'Plan',
                    RaumUuid: ruuid
                }));
            });
        });
    }
    getRaumBilder(ruuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const totalImages = yield this.dexie.objektKatalogImages.where({
                RefTable: 'Raeume',
                RefUuid: ruuid
            }).toArray();
            const imgUuids = yield this.dexie.objektKatalogImages.where({
                RefTable: 'Raeume',
                RefUuid: ruuid,
                Kategorie: 'Bild'
            }).toArray().then((rows) => rows.map((row) => row.ImgUuid));
            console.log('RaumService.getRaumBilder, ruuid: ', ruuid, 'totalImages', totalImages, 'imgUuids.length', imgUuids.length);
            if (imgUuids.length === 0) {
                return [];
            }
            return this.dexie.images
                .where('uuid').anyOf(imgUuids)
                .toArray()
                .then((images) => {
                return images.map((img) => ({
                    uuid: img.uuid,
                    name: img.name,
                    type: img.type,
                    size: img.size,
                    width: img.width,
                    height: img.height,
                    desc: img.desc || '',
                    Kategorie: 'Bild',
                    RaumUuid: ruuid
                }));
            });
        });
    }
    getEtagenByGidInInventur(jobid, gid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const etagen = [];
            return this.dexie.raeume
                .where({ for_jobid: jobid, gid }).each(raum => {
                if (etagen.indexOf(raum.Etage) === -1) {
                    etagen.push(raum.Etage);
                }
            }).then(() => etagen);
        });
    }
    getRaumStatus(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raum = yield this.dexie.raeume.get(uuid);
            if (raum) {
                return raum.current_jobstatus;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(`ERROR - GetRaumStatus: Raum mit ID ${uuid} wurde nicht gefunden`);
        });
    }
    triggerRaumStatus(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raum = yield this.dexie.raeume.get(uuid);
            this.raumStatusChanged.emit({
                uuid,
                status: raum.current_jobstatus
            });
        });
    }
    setRaumStatus(stat, uuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const log = true;
            const numChanges = yield this.dexie.raeume.where({ uuid }).modify({
                current_jobstatus: stat,
                current_jobid: jobid,
                log
            });
            if (numChanges) {
                this.triggerRaumStatus(uuid);
            }
            return numChanges;
        });
    }
    setRaumStatusInit(uuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Init, uuid, jobid);
        });
    }
    setRaumStatusStarted(uuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Started, uuid, jobid);
        });
    }
    setRaumStatusClosed(uuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.setRaumStatus(_shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed, uuid, jobid);
        });
    }
    getRaeumeStartedByGebaeudeId(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raeume = yield this.dexie.raeume.where({ gid }).toArray();
            const raeumeStat = yield Promise.all(raeume.map((raum) => {
                return Promise.all([
                    this.dexie.inventar.where({ ruuid: raum.uuid }).count(),
                    this.dexie.inventar.where({ ruuid: raum.uuid, jobid }).count()
                ]).then((results) => {
                    const total = results[0];
                    const done = results[1];
                    const progress = total > 0 ? done * 100 / total : -1;
                    return {
                        uuid: raum.uuid,
                        Raum: raum.Raum,
                        Etage: raum.Etage,
                        editStatus: raum.current_jobstatus,
                        progress,
                        total,
                        done
                    };
                });
            }));
            return raeumeStat.filter(stat => stat.editStatus === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed || stat.done > 0);
        });
    }
    getRaeumeToDoByGebaeudeId(gid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raeume = yield this.dexie.raeume
                .where({ gid })
                .and(r => r.current_jobstatus !== _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIRaumEditStatus"].Closed).toArray();
            const raeumeStat = yield Promise.all(raeume.map((raum) => {
                return Promise.all([
                    this.dexie.inventar.where({ ruuid: raum.uuid }).count(),
                    this.dexie.inventar.where({ ruuid: raum.uuid, jobid }).count()
                ]).then((results) => {
                    return {
                        uuid: raum.uuid,
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
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_7__["BasedataService"] }
];
RaumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RaumService);



/***/ }),

/***/ "./src/app/pages/invent-form/invent-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/invent-form/invent-form.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inventurTitel {\n  font-size: 0.7rem;\n  color: silver;\n  text-align: right;\n}\n\n#formBottomDivider {\n  margin-bottom: 1rem;\n}\n\ntextarea.NewFreshScan {\n  background-color: #8bffbb;\n  color: #b6121c;\n}\n\ntextarea.NewFreshScan.CountDown-4 {\n  background-color: #9effc4;\n  color: #98121c;\n}\n\ntextarea.NewFreshScan.CountDown-3 {\n  background-color: #aaffc9;\n  color: #7a111a;\n}\n\ntextarea.NewFreshScan.CountDown-2 {\n  background-color: #bcffcf;\n  color: #5c1018;\n}\n\ntextarea.NewFreshScan.CountDown-2 {\n  background-color: #ccffda;\n  color: #3e1119;\n}\n\ntextarea.NewFreshScan.CountDown-1 {\n  background-color: #d6ffe1;\n  color: #200f0f;\n}\n\ninput.bg-danger {\n  color: #ffffff;\n  font-weight: bold;\n}\n\ninput.bg-danger::-moz-placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n\ninput.bg-danger::placeholder {\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.input-group-text {\n  min-width: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxwYWdlc1xcaW52ZW50LWZvcm1cXGludmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9pbnZlbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL2ludmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludmVudHVyVGl0ZWwge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiBzaWx2ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNmb3JtQm90dG9tRGl2aWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxudGV4dGFyZWEuTmV3RnJlc2hTY2FuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJmZmJiO1xyXG4gIGNvbG9yOiAjYjYxMjFjO1xyXG59XHJcbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZmZjNDtcclxuICBjb2xvcjogIzk4MTIxYztcclxufVxyXG5cclxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmM5O1xyXG4gIGNvbG9yOiAjN2ExMTFhO1xyXG59XHJcblxyXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2ZmY2Y7XHJcbiAgY29sb3I6ICM1YzEwMTg7XHJcbn1cclxuXHJcbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZkYTtcclxuICBjb2xvcjogIzNlMTExOTtcclxufVxyXG5cclxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZmZmUxO1xyXG4gIGNvbG9yOiAjMjAwZjBmO1xyXG59XHJcbmlucHV0LmJnLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0LmJnLWRhbmdlcjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBtaW4td2lkdGg6IDMuNXJlbTtcclxufVxyXG4iLCIjaW52ZW50dXJUaXRlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogc2lsdmVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2Zvcm1Cb3R0b21EaXZpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxudGV4dGFyZWEuTmV3RnJlc2hTY2FuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiZmZiYjtcbiAgY29sb3I6ICNiNjEyMWM7XG59XG5cbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWZmYzQ7XG4gIGNvbG9yOiAjOTgxMjFjO1xufVxuXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmM5O1xuICBjb2xvcjogIzdhMTExYTtcbn1cblxudGV4dGFyZWEuTmV3RnJlc2hTY2FuLkNvdW50RG93bi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZmZjZjtcbiAgY29sb3I6ICM1YzEwMTg7XG59XG5cbnRleHRhcmVhLk5ld0ZyZXNoU2Nhbi5Db3VudERvd24tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmZGE7XG4gIGNvbG9yOiAjM2UxMTE5O1xufVxuXG50ZXh0YXJlYS5OZXdGcmVzaFNjYW4uQ291bnREb3duLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZmZmUxO1xuICBjb2xvcjogIzIwMGYwZjtcbn1cblxuaW5wdXQuYmctZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dC5iZy1kYW5nZXI6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIG1pbi13aWR0aDogMy41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/invent-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/invent-form/invent-form.component.ts ***!
  \************************************************************/
/*! exports provided: InventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventFormComponent", function() { return InventFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/inventory-progress/inventory-progress.service */ "./src/app/shared/inventory-progress/inventory-progress.service.ts");
/* harmony import */ var _modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/select-create-artikel/select-create-artikel.component */ "./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/scanner/scanner.component */ "./src/app/pages/invent-form/modals/scanner/scanner.component.ts");
/* harmony import */ var _modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/create-artikel-image/create-artikel-image.component */ "./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
/* harmony import */ var _modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/show-artikel-image/show-artikel-image.component */ "./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
/* harmony import */ var _modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/select-search-artikel/select-search-artikel.component */ "./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.ts");
/* harmony import */ var _modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/select-create-raum/select-create-raum.component */ "./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.ts");
/* harmony import */ var _modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/raum-list-rest/raum-list-rest.component */ "./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.ts");
/* harmony import */ var _modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/raum-list-done/raum-list-done.component */ "./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.ts");
/* harmony import */ var _modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/select-search-raum/select-search-raum.component */ "./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_inventory_editor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/inventory-editor.service */ "./src/app/shared/services/inventory-editor.service.ts");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-services/inventar.service */ "./src/app/pages/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
/* harmony import */ var _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data-services/raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");
/* harmony import */ var _modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/gesamt-list-rest/gesamt-list-rest.component */ "./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts");
/* harmony import */ var _modals_gesamt_list_done_gesamt_list_done_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/gesamt-list-done/gesamt-list-done.component */ "./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts");
/* harmony import */ var _shared_services_sounds_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/services/sounds.service */ "./src/app/shared/services/sounds.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _modals_edit_raum_edit_raum_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/edit-raum/edit-raum.component */ "./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.ts");
/* harmony import */ var _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/services/variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var _modals_edit_inventar_edit_inventar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/edit-inventar/edit-inventar.component */ "./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.ts");
/* harmony import */ var _modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modals/imagebox/imagebox.component */ "./src/app/pages/invent-form/modals/imagebox/imagebox.component.ts");
/* harmony import */ var _modals_show_raum_image_show_raum_image_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modals/show-raum-image/show-raum-image.component */ "./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.ts");
/* harmony import */ var _modals_create_raum_image_create_raum_image_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modals/create-raum-image/create-raum-image.component */ "./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.ts");
/* harmony import */ var _modals_batch_barcodes_batch_barcodes_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/batch-barcodes/batch-barcodes.component */ "./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.ts");










// Dialogs

























let InventFormComponent = class InventFormComponent {
    constructor(route, location, dataService, modalService, baseData, inventoryProgress, inventoryEditor, inventarDataService, raumService, imageService, bcLookup, sounds, variables, toastr) {
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
        this.sounds = sounds;
        this.variables = variables;
        this.toastr = toastr;
        this.faBarcode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBarcode"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCamera"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faImage"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCheck"];
        this.faDoorOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faDoorOpen"];
        this.faDoorClosed = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faDoorClosed"];
        this.faBookReader = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBookReader"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLock"];
        this.faUnlockAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUnlockAlt"];
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
            uuid: null,
            mcid: null,
            mcuuid: null,
            gcid: null,
            gcuuid: null,
            ruuid: null,
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
        this.waitingForInventarData = false;
        this.openedCreateRaum = false;
        this.artikelImageExists = false;
        this.allowNewInventarByGivenArticle = false;
        this.jobProgress = {
            total: 0,
            done: 0,
        };
        this.numUnsynced = -1;
        this.raumBilder = [];
        this.raumPlaene = [];
        this.jobLockStatus = _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["DBDIJobLockStatus"].Init;
        this.raumProgress = {
            total: 0,
            done: 0,
        };
        this.beepSuccessSrc = '';
        this.beepErrorSrc = '';
        this.currentModal = {
            modalRef: null,
            isOpen: false,
            name: ''
        };
        this.currentModals = [];
        this.blobAlertSuccess = 'success';
        this.blobAlertFailure = 'danger';
        this.blobAlertOff = null;
        this.blobAlertTimer = null;
        this.varChangeSubscription = null;
        this.useOverlay = 0;
        this.beepSuccessSrc = this.sounds.getSuccessSrc();
        this.beepErrorSrc = this.sounds.getErrorSrc();
    }
    showBlobAlertSuccess() {
        this.showBlobAlert('success');
    }
    showBlobAlertError() {
        this.showBlobAlert('danger');
    }
    showBlobAlert(alertType) {
        this.useOverlay = this.useOverlay < 2 ? this.useOverlay + 1 : 1;
        this.blobAlert = null;
        if (this.blobAlertTimer) {
            clearTimeout(this.blobAlertTimer);
        }
        this.blobAlert = alertType;
        this.blobAlertTimer = setTimeout(() => {
            this.blobAlert = null;
            this.useOverlay = 0;
        }, 1200);
    }
    ngOnInit() {
        this.inventoryProgress.getCurrentInventurLockStatus().then((status) => {
            this.jobLockStatus = status;
        });
        this.unsyncedAmountChangeSubscription = this.dataService.clientSyncAmountChanged
            .subscribe((amount) => {
            this.numUnsynced = amount;
        });
        this.inventurLockStatusChangeSubscription = this.inventoryProgress.inventurLockStatusChanged
            .subscribe((status) => {
            this.jobLockStatus = status;
        });
        this.raumStatusChangeSubscription = this.raumService.raumStatusChanged
            .subscribe((stat) => {
            if (stat.uuid === this.roomUuiD) {
                this.raumEditStatus = stat.status;
            }
        });
        console.log('this.inventarDataService.changed', this.inventarDataService.changed);
        this.inventarDataChangeSubscription = this.inventarDataService
            .changed.subscribe((change) => {
            this.refreshRaumProgress();
        });
        this.routingSubscription = this.route.params.subscribe(params => {
            this.clientID = parseInt(params.clientid, 10);
            this.buildingID = parseInt(params.buildingid, 10);
            const roomUUID = params.roomid;
            this.dataService.getClient(this.clientID).then((clnt) => {
                this.kunde = clnt;
                this.baseData.setCurrentMandant(this.kunde);
            });
            this.dataService.getBuilding(this.buildingID, this.clientID).then((bldg) => {
                this.gebaeude = bldg;
            });
            if (roomUUID) {
                this.loadRaumById(roomUUID);
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
        this.jobid = this.baseData.getCurrentJobid();
        this.inventur = this.baseData.getCurrentInventur();
        this.variables.get('manualBarcodeInput', false).then((status) => {
            this.manualBCInputEnabled = status;
        });
        this.variables.watch('manualBarcodeInput');
        this.varChangeSubscription = this.variables.varChanged.subscribe((setting) => {
            if (setting.name === 'manualBarcodeInput') {
                this.manualBCInputEnabled = setting.newValue;
            }
        });
    }
    loadRaumById(roomUuid) {
        this.dataService.getRaum(roomUuid)
            .then((raum) => {
            console.log('InventFormComponente #338 Retrieved Raum by roomUuid', { raum, roomUuid });
            this.loadRaumByData(raum);
        });
    }
    loadRaumByData(raum) {
        const url = '/form-inventory/' + this.clientID + '/' + this.buildingID + '/' + raum.uuid;
        console.log('InventFormComponente #345 Change URL ', { raum, url });
        this.location.go(url);
        this.roomUuiD = raum.uuid;
        this.raum = raum;
        this.baseData.setCurrentRaum(this.raum);
        this.formInventar.ruuid = raum.uuid;
        this.formInventar.Raum = raum.Raum;
        this.formInventar.Raumbezeichnung = raum.Raumbezeichnung;
        this.formInventar.RaumBarcode = raum.code;
        this.clearFormInventar();
        this.raumEditStatus = this.raum.current_jobstatus;
        this.raumBilder = [];
        this.raumPlaene = [];
        this.loadRaumImages();
        this.refreshRaumProgress();
    }
    loadRaumImages() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.raumService.getRaumBilder(this.raum.uuid).then((images) => {
                    console.log('InventFormComponent.raumService.getRaumBilder #376 images: ', images);
                    this.raumBilder = images;
                    return images.length;
                }),
                this.raumService.getRaumPlaene(this.raum.uuid).then((images) => {
                    console.log('InventFormComponent.raumService.getRaumPlaene #376 images: ', images);
                    this.raumPlaene = images;
                    return images.length;
                })
            ]).then(results => results[0] + results[1]);
        });
    }
    clearFormInventar() {
        this.waitingForNewInventarBarcode = false;
        this.waitingForInventarData = false;
        this.inventarData = null;
        this.artikelUuiD = null;
        this.formInventar.uuid = '';
        this.formInventar.mcid = 0;
        this.formInventar.mcuuid = '';
        this.formInventar.gcid = 0;
        this.formInventar.gcuuid = '';
        this.formInventar.Barcode = '';
        this.formInventar.Bezeichnung = '';
        this.formInventar.Typ = '';
        this.artikelImageExists = false;
    }
    clearFormRaum() {
        this.formInventar.ruuid = '';
        this.formInventar.Raum = '';
        this.formInventar.Raumbezeichnung = '';
        this.formInventar.RaumBarcode = '';
    }
    assignInventarToRaum(inventarData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('InventFormComponente #350 assignInventarToRaum(inventarData)', { inventarData });
            this.loadInventarByData(inventarData);
            this.inventarDataService.assignRaum(inventarData.inventar.uuid, this.roomUuiD)
                .then((rslt) => {
                console.log('InventFormComponente #387 Inventar wurde dem Raum zugewiesen!', { rslt });
            })
                .catch((err) => {
                console.error('InventFormComponente #390 Inventar konnte nicht zugewiesen werden!', err);
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
                ruuid: this.formInventar.ruuid,
                code: this.formInventar.Barcode,
                jobid,
                created_at: new Date(),
                created_uid: uid
            };
            const inserting = this.inventarDataService.insertInventar(inventar, jobid);
            inserting.then((result) => {
                if (result.success) {
                    console.log('InventFormComponente #409 Inventar wurde hinzugefügt', result);
                    this.loadInventarByUuid(result.insertUUID);
                }
                else {
                    console.error('InventFormComponent #424 Inventar konnte nicht hinzugefügt werden', { result });
                }
            })
                .catch((err) => {
                console.error('InventFormComponente #413 Fehler beim Speichern neuer Inventar-Daten', { err });
            });
            return inserting;
        });
    }
    updateInventarArtikelRef() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const uuid = this.formInventar.uuid;
            const inventar = {
                mcid: this.formInventar.mcid,
                mcuuid: this.formInventar.mcuuid,
                ruuid: this.formInventar.ruuid,
                code: this.formInventar.Barcode,
                jobid,
                modified_at: new Date(),
                modified_uid: uid
            };
            return this.inventarDataService.updateArtikelRef(uuid, inventar, jobid);
        });
    }
    refreshInventoryProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.refreshRaumProgress(),
                this.refreshGebaeudeProgress()
            ]).then(() => {
                console.log('InventFormComponente #425 Fortschritt für Gebaeude und Raum wurde aktualisiert');
                return true;
            }).catch((err) => {
                console.error('InventFormComponente #428Beim Aktualisieren des Fortschritts von Gebaeude und Raum ist ein Fehler aufgetreten');
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
            this.inventoryProgress.getCurrentRaumProgress(this.roomUuiD)
                .then((progress) => {
                this.raumProgress.done = progress.done;
                this.raumProgress.total = progress.total;
            })
                .catch(err => {
                console.error('InventFormComponente #449 Fehler bei Raum-Progress-Aktualisierung', err);
            });
        });
    }
    loadArtikelByUuid(artikelUuid) {
        this.dataService.getArtikel(artikelUuid)
            .then(item => {
            this.loadArtikelByData(item);
        });
    }
    loadArtikelByData(artikel) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.artikelUuiD = artikel.uuid;
            this.formInventar.mcid = artikel.mcid;
            this.formInventar.mcuuid = artikel.mcuuid;
            this.formInventar.gcid = artikel.gcid;
            this.formInventar.gcuuid = artikel.uuid;
            this.formInventar.Bezeichnung = artikel.Bezeichnung;
            this.formInventar.Typ = artikel.Typ;
            console.log('InventFormComponent #475 loadArtikelByData', {
                artikel: Object.assign({}, artikel),
                formInventar: Object.assign({}, this.formInventar),
                waitingForInventarData: this.waitingForInventarData,
                waitingForNewInventarBarcode: this.waitingForNewInventarBarcode
            });
            if (this.allowNewInventarByGivenArticle) {
                if (!this.waitingForInventarData && this.formInventar.Barcode.length > 1) {
                    this.formInventar.Barcode = '';
                    console.log('InventFormComponent #479 set waitingForNewInventarBarcode = true');
                    this.waitingForNewInventarBarcode = true;
                }
            }
            const tmp = Object.assign({}, this.formInventar);
            this.formInventar = Object.assign({}, tmp);
            if (!this.formInventar.uuid && this.waitingForInventarData) {
                console.log('InventFormComponente #480 call this.saveNewInventar() from this.loadArtikelByData(...)');
                const insertResult = yield this.saveNewInventar();
                if (insertResult && insertResult.success) {
                    this.waitingForInventarData = false;
                    this.toastr.success('Neues Inventar-Objekt wurde hinzugefügt!', 'Neuaufnahme gespeichert');
                }
                else {
                    this.toastr.error('Neues Inventar-Objekt konnte nicht hinzugefügt werden!', 'Fehler bei Neuaufnahme');
                    return false;
                }
            }
            if (this.formInventar.uuid) {
                const bConfirmUpdate = confirm('Möchten Sie die Inventardaten wirklich ändern!\n' +
                    'Dem Objekt wurden bereits Artikeldaten zugewiesen.\n' +
                    'Drücken Sie [OK] zur Bestätigung\n' +
                    'oder auf [Abbrechen]!');
                if (bConfirmUpdate) {
                    const updateResult = yield this.updateInventarArtikelRef();
                    if (updateResult && updateResult.success) {
                        this.toastr.success('Inventar wurde mit neuen Artikeldaten gespeichert', 'Erfolgreiche Artikelzuweisung');
                    }
                    else {
                        this.toastr.error('Inventar konnte nicht aktualisiert werden!', 'Fehler bei Artikelzuweisung');
                        return false;
                    }
                }
            }
            console.log('InventFormComponente #487 loadArtikelByData', { waitingForNewInventarBarcode: this.waitingForNewInventarBarcode });
            console.log('InventFormComponente #488Applied argument artikel', artikel, ' to formInventar', this.formInventar);
            this.reloadImageExistsStatus();
            return true;
        });
    }
    loadInventarByUuid(uuid) {
        this.dataService.getInventarData(uuid).then(result => {
            console.log('InventFormComponente #494 loadInventarById(uuid)', { uuid });
            this.loadInventarByData(result.inventarData);
        });
    }
    loadInventarByData(inventarData) {
        const inventar = inventarData.inventar;
        const artikelRef = inventarData.artikelRef;
        const artikelData = inventarData.artikelData;
        console.log('InventFormComponente #503 loadInventarByData(inventarData)', { inventarData });
        this.inventarData = inventarData;
        this.artikelUuiD = inventar.mcuuid;
        this.formInventar.mcid = inventar.mcid;
        this.formInventar.gcid = artikelRef ? artikelRef.gcid : 0;
        this.formInventar.mcuuid = artikelRef.uuid;
        this.formInventar.gcuuid = artikelData.uuid;
        this.formInventar.Bezeichnung = artikelData.Bezeichnung;
        this.formInventar.Typ = artikelData.Typ;
        this.formInventar.Barcode = inventar.code;
        this.formInventar.uuid = inventar.uuid;
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
    reloadRaumImageExistsStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.loadRaumImages().then(numImgs => numImgs > 0);
        });
    }
    reloadRaumImages() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.raumService.getRaumBilder(this.raum.uuid).then((images) => {
                console.log('InventFormComponent.raumService.getRaumBilder #376 images: ', images);
                this.raumBilder = images;
                return images.length;
            });
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
    createKunstwerk() {
        // YYYYMMDDHHMMSS
        // Fantasy Barcode: 9{MID}{DEVID}
        this.inventarDataService.getNewKunstBarcode().then((kBarcode) => {
            this.clearFormInventar();
            this.formInventar.Barcode = kBarcode;
            this.waitingForInventarData = true;
            const modalCreateArtikel = this.openSelectCreateArtikel();
            modalCreateArtikel.setFormType(_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_8__["ArtikelFormType"].Kunst);
        });
    }
    get gebaeudeId() { return this.buildingID; }
    openRaumbild(idx) {
        if (false) {}
        else {
            const imgUuids = this.raumBilder.map((itm) => itm.uuid);
            const modalRef = this.modalService.open(_modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_31__["ImageboxComponent"], { size: 'xl' });
            console.log('openRaumplan', { raumBilder: this.raumBilder, imgUuids, idx });
            this.modalWatch(modalRef, 'Imagebox');
            modalRef.componentInstance.setTitel('Raumbilder');
            modalRef.componentInstance.setImagesUuids(imgUuids, idx);
            modalRef.result.finally(() => {
                this.loadRaumImages();
            });
        }
    }
    openRaumplan(idx) {
        if (false) {}
        else {
            const imgUuids = this.raumPlaene.map((itm) => itm.uuid);
            const modalRef = this.modalService.open(_modals_imagebox_imagebox_component__WEBPACK_IMPORTED_MODULE_31__["ImageboxComponent"], { size: 'xl' });
            console.log('openRaumplan', { raumPlaene: this.raumPlaene, imgUuids, idx });
            this.modalWatch(modalRef, 'Imagebox');
            modalRef.componentInstance.setTitel('Raumpläne');
            modalRef.componentInstance.setImagesUuids(imgUuids, idx);
        }
    }
    openCreateArtikelImage() {
        const modalRef = this.modalService.open(_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_11__["CreateArtikelImageComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'CreateArtikelImage');
        modalRef.componentInstance.name = this.formInventar.Bezeichnung + '/' + this.formInventar.Typ;
        modalRef.componentInstance.gcuuid = this.formInventar.gcuuid;
        modalRef.componentInstance.setMetaData({
            for_jobid: this.jobid,
            mcuuid: this.formInventar.mcuuid,
            gcuuid: this.formInventar.gcuuid,
            name: this.formInventar.Bezeichnung + (this.formInventar.Typ ? '-' + this.formInventar.Typ : ''),
            desc: this.formInventar.Bezeichnung + (this.formInventar.Typ ? ' / ' + this.formInventar.Typ : '')
        });
        modalRef.result.then(() => {
            this.reloadImageExistsStatus();
        });
    }
    openCreateRaumImage() {
        const rb = this.formInventar.Raumbezeichnung;
        const rm = this.formInventar.Raum;
        let name = '';
        if (rm) {
            name = rm.split('/').join('.').split(' ').join('_');
        }
        else {
            name = rb.split('/').join('.').split(' ').join('_');
        }
        const modalRef = this.modalService.open(_modals_create_raum_image_create_raum_image_component__WEBPACK_IMPORTED_MODULE_33__["CreateRaumImageComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'CreateRaumImage');
        modalRef.componentInstance.name = this.formInventar.Bezeichnung + '/' + this.formInventar.Typ;
        modalRef.componentInstance.gcuuid = this.formInventar.gcuuid;
        modalRef.componentInstance.setMetaData({
            for_jobid: this.jobid,
            ruuid: this.formInventar.ruuid,
            name,
            desc: rb
        });
        modalRef.result.finally(() => {
            this.reloadRaumImageExistsStatus();
        });
    }
    openEditArtikelImage() {
        const modalRef = this.modalService.open(_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_11__["CreateArtikelImageComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'CreateArtikelImage');
        modalRef.componentInstance.name = this.formInventar.Bezeichnung + '/' + this.formInventar.Typ;
        modalRef.componentInstance.setMetaData({
            mcuuid: this.formInventar.mcuuid,
            gcuuid: this.formInventar.gcuuid,
            for_jobid: this.jobid,
            name: this.formInventar.Bezeichnung,
            desc: this.formInventar.Bezeichnung
        });
        modalRef.result.then(() => {
            this.reloadImageExistsStatus();
        });
    }
    openShowArtikelImage() {
        const modalRef = this.modalService.open(_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_12__["ShowArtikelImageComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'ShowArtikelImage');
        modalRef.componentInstance.name = 'World';
        console.log('openShowArtikelImage #642 setMcuuid: ', this.formInventar.mcuuid);
        modalRef.componentInstance.setMcuuid(this.formInventar.mcuuid, this.formInventar.gcuuid);
        modalRef.result.then(() => {
            this.reloadImageExistsStatus();
        });
    }
    openScanner(inputElm) {
        const modalRef = this.modalService.open(_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_10__["ScannerComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'Scanner');
        modalRef.componentInstance.name = 'World';
        const sub = modalRef.componentInstance.onScan.subscribe((data) => {
            const scan = {
                barcode: data.barcode,
                length: data.length,
                valid: data.valid,
                target: inputElm
            };
            modalRef.close();
            console.log('InventFormComponente #588 call handleScanData', { data, scan });
            this.handleScanData(scan);
        });
        modalRef.result.then(() => {
            sub.unsubscribe();
        }).catch(() => { });
    }
    openBatchScans(barcodes, inputElm) {
        console.log('InventFormComponent.openBatchScans(', barcodes, ') #778', { barcodes, inputElm });
        const modalRef = this.modalService.open(_modals_batch_barcodes_batch_barcodes_component__WEBPACK_IMPORTED_MODULE_34__["BatchBarcodesComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'BatchBarcodes');
        if (!modalRef.componentInstance.jobid) {
            modalRef.componentInstance.setJobid(this.jobid);
        }
        modalRef.componentInstance.setRaum(this.raum);
        modalRef.componentInstance.setBarcodes(barcodes);
        const sub = modalRef.componentInstance.onScan.subscribe((data) => {
            console.log('InventFormComponent.openBatchScans subscribe response #785', { data });
            const scan = {
                barcode: data.barcode,
                length: data.length,
                valid: data.valid,
                target: inputElm
            };
            modalRef.close();
            console.log('InventFormComponente #588 call handleScanData', { data, scan });
            this.handleScanData(scan);
        });
        const sub2 = modalRef.componentInstance.onLookupResultApply.subscribe((data) => {
            let modalIsClosed = false;
            if (data.ModalRaumUuid !== this.raum.uuid) {
                modalRef.close();
                modalIsClosed = true;
                alert('Fehler: Raumangabe in Hauptfenster und Dialog stimmen nicht mehr überein!\n' +
                    'ModalRaumUuid: ' + data.ModalRaumUuid + '\n' +
                    'Main-Raum-UUID: ' + this.raum.uuid);
                return;
            }
            if (modalRef.componentInstance.closeOnApplyBarcode) {
                modalRef.close();
                modalIsClosed = true;
            }
            if (data.result.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].Inventar) {
                const inventarData = {
                    inventar: data.result.inventar,
                    artikelRef: data.result.artikelRef,
                    artikelData: data.result.artikelData
                };
                this.assignInventarToRaum(inventarData)
                    .then(() => {
                    this.playSuccess();
                    if (!modalIsClosed && modalRef && modalRef.componentInstance) {
                        modalRef.componentInstance.showBlobAlertSuccess();
                        modalRef.componentInstance.setAssignedInventar(data.barcode);
                    }
                })
                    .catch((reason) => {
                    this.playError();
                    if (!modalIsClosed && modalRef && modalRef.componentInstance) {
                        modalRef.componentInstance.showBlobAlertError();
                    }
                });
            }
        });
        modalRef.result.then(() => {
            sub.unsubscribe();
            sub2.unsubscribe();
        }, () => { });
    }
    getModalRefByName(name) {
        const modal = this.currentModals.find(mod => mod.name === name);
        return (modal && modal.modalRef.componentInstance) ? modal.modalRef : null;
    }
    closeModalIfOpen(name) {
        const modal = this.currentModals.find(mod => mod.name === name);
        if (modal && modal.modalRef.componentInstance) {
            modal.modalRef.close();
            return true;
        }
        return false;
    }
    modalWatch(modalRef, name) {
        const mRef = modalRef;
        const mName = name;
        console.log('InventFormComponente #610 Opened Modal: ', name);
        const currModal = {
            modalRef,
            name,
            isOpen: true
        };
        this.currentModal = currModal;
        this.currentModals = this.currentModals.filter(mod => undefined !== mod.modalRef.componentInstance);
        this.currentModals.push(currModal);
        console.log('InventFormComponente #618 After open Modal: ', this.currentModal, this.currentModals);
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
        })
            .catch((err) => {
            if (name === 'SelectCreateRaum') {
                this.openedCreateRaum = false;
            }
            this.currentModals = this.currentModals.filter(mod => undefined !== mod.modalRef.componentInstance);
            if (typeof err !== 'string' || err.indexOf('Cross click') === -1) {
                console.error('InventFormComponente #902 Error on Closing Modal ', { mName, err });
            }
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
            console.log('InventFormComponente #652 After Catch: ', this.currentModal, this.currentModals);
        });
    }
    openSelectCreateArtikel(settings = null) {
        const modalRef = this.modalService.open(_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_8__["SelectCreateArtikelComponent"], { size: 'xl' }); // , scrollable: true } );
        this.modalWatch(modalRef, 'SelectCreateArtikel');
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.clientId = this.clientID;
        modalRef.componentInstance.artikelCreated.subscribe((artikel) => {
            this.loadArtikelByData(artikel.newItem);
        });
        modalRef.componentInstance.artikelSelected.subscribe((item) => {
            console.log('InventFormComponente #665 openSelectCreateArtikel Apply selected Article', item);
            this.loadArtikelByUuid(item.uuid);
        });
        modalRef.componentInstance.artikelSearching.subscribe((raum) => {
            this.openSelectSearchArtikel();
        });
        return modalRef.componentInstance;
    }
    openSelectSearchArtikel() {
        const modalRef = this.modalService.open(_modals_select_search_artikel_select_search_artikel_component__WEBPACK_IMPORTED_MODULE_13__["SelectSearchArtikelComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'SelectSearchArtikel');
        modalRef.componentInstance.clientId = this.clientID;
        modalRef.componentInstance.artikelSelected.subscribe((item) => {
            console.log('InventFormComponente #678 Apply selected Article', item);
            this.loadArtikelByUuid(item.uuid);
        });
        modalRef.componentInstance.artikelCreating.subscribe((mid) => {
            modalRef.close();
            this.openSelectCreateArtikel();
        });
    }
    openSelectSearchRaum() {
        const modalRef = this.modalService.open(_modals_select_search_raum_select_search_raum_component__WEBPACK_IMPORTED_MODULE_17__["SelectSearchRaumComponent"], { size: 'xl' });
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
    openEditRaum() {
        const modalRef = this.modalService.open(_modals_edit_raum_edit_raum_component__WEBPACK_IMPORTED_MODULE_28__["EditRaumComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'EditRaum');
        modalRef.componentInstance.raumUuid = this.roomUuiD;
        modalRef.componentInstance.raumChanged.subscribe((raum) => {
            this.loadRaumByData(raum);
        });
        modalRef.componentInstance.scannerRequest.subscribe((target) => {
            this.openScanner(target);
        });
    }
    openEditInventar() {
        const modalRef = this.modalService.open(_modals_edit_inventar_edit_inventar_component__WEBPACK_IMPORTED_MODULE_30__["EditInventarComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'EditInventar');
        console.log('InventFormComponente #715 this.inventarData ' + this.inventarData.inventar.uuid);
        modalRef.componentInstance.inventarUuid = this.inventarData.inventar.uuid;
        modalRef.componentInstance.inventarChanged.subscribe((inventar) => {
            console.log('InventFormComponente #718 Aktualisierte Inventar-Daten', { inventar });
            this.toastr.success('Inventardaten wurden aktualisiert!');
            this.loadInventarByUuid(inventar.inventar.uuid);
        });
        modalRef.componentInstance.scannerRequest.subscribe((target) => {
            this.openScanner(target);
        });
    }
    openSelectCreateRaum() {
        const modalRef = this.modalService.open(_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_14__["SelectCreateRaumComponent"], { size: 'xl' });
        this.modalWatch(modalRef, 'SelectCreateRaum');
        this.openedCreateRaum = true;
        modalRef.componentInstance.gebaeudeId = this.buildingID;
        modalRef.componentInstance.raumCreated.subscribe((raum) => {
            this.loadRaumByData(raum);
        });
        modalRef.componentInstance.raumSearching.subscribe(() => {
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
        modalRef.componentInstance.raumSelected.subscribe((ruuid) => {
            this.loadRaumById(ruuid);
        });
        modalRef.componentInstance.requestGesamtRest.subscribe((g) => {
            this.openGesamtListRest(g);
        });
    }
    openGesamtListRest(useGebaeude) {
        const gebaeude = useGebaeude || this.gebaeude;
        if (!gebaeude || !gebaeude.gid) {
            console.error('InventFormComponente #759 No Gebaeude-Data!!!');
        }
        else {
            console.log('InventFormComponente #761 OpenGesamtListRest', {
                buildingID: this.buildingID,
                gebaeude: this.gebaeude
            });
        }
        const modalRef = this.modalService.open(_modals_gesamt_list_rest_gesamt_list_rest_component__WEBPACK_IMPORTED_MODULE_24__["GesamtListRestComponent"], { size: 'xl', scrollable: true });
        this.modalWatch(modalRef, 'GesamtListRest');
        modalRef.componentInstance.gebaeude = gebaeude;
        modalRef.componentInstance.raumSelected.subscribe((ruuid) => {
            this.loadRaumById(ruuid);
        });
        modalRef.componentInstance.requestGesamtDone.subscribe((g) => {
            this.openGesamtListDone(g);
        });
    }
    openRaumListDone(useRaum) {
        const raum = useRaum || this.raum;
        const modalRef = this.modalService.open(_modals_raum_list_done_raum_list_done_component__WEBPACK_IMPORTED_MODULE_16__["RaumListDoneComponent"], { size: 'xl', scrollable: true });
        this.modalWatch(modalRef, 'RaumListDone');
        modalRef.componentInstance.raum = raum;
        modalRef.componentInstance.requestRestList.subscribe((r) => {
            this.openRaumListRest(r);
        });
    }
    openRaumListRest(useRaum) {
        const raum = useRaum || this.raum;
        const modalRef = this.modalService.open(_modals_raum_list_rest_raum_list_rest_component__WEBPACK_IMPORTED_MODULE_15__["RaumListRestComponent"], { size: 'xl', scrollable: true });
        this.modalWatch(modalRef, 'RaumListRest');
        modalRef.componentInstance.raum = raum;
        modalRef.componentInstance.requestDoneList.subscribe((r) => {
            this.openRaumListDone(r);
        });
    }
    ngOnDestroy() {
        this.routingSubscription.unsubscribe();
        this.raumStatusChangeSubscription.unsubscribe();
        this.inventarDataChangeSubscription.unsubscribe();
        this.inventurLockStatusChangeSubscription.unsubscribe();
    }
    toggleRaumEditStatus() {
        const jobid = this.baseData.getCurrentJobid();
        if (this.raumEditStatus !== _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["DBDIRaumEditStatus"].Closed) {
            this.raumService.setRaumStatusClosed(this.roomUuiD, jobid);
        }
        else {
            this.raumService.setRaumStatusStarted(this.roomUuiD, jobid);
        }
    }
    setJobLockStatusClosed() {
        this.inventoryProgress.setCurrentInventurLockStatusClosed();
    }
    setJobLockStatusOpened() {
        this.inventoryProgress.setCurrentInventurLockStatusOpened();
    }
    setRaumEditStatusClosed() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusClosed(this.roomUuiD, jobid);
    }
    setRaumEditStatusStarted() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusStarted(this.roomUuiD, jobid);
    }
    setRaumEditStatusUntouched() {
        const jobid = this.baseData.getCurrentJobid();
        this.raumService.setRaumStatusInit(this.roomUuiD, jobid);
    }
    onRaumBarcodeInput(event) {
        if (event.target instanceof HTMLInputElement || 'value' in event.target) {
            console.log('InventFormComponente #838 BarCodeInput :', event.target.value);
        }
    }
    showGesamtDone() {
        console.log('InventFormComponente #843 Called show Gesamt Done');
        this.openGesamtListDone();
    }
    showGesamtRest() {
        console.log('InventFormComponente #848 Called show Gesamt Rest');
        this.openGesamtListRest();
    }
    showRaumDone() {
        console.log('InventFormComponente #853 Called show Raum Done ...');
        this.openRaumListDone();
    }
    showRaumRest() {
        console.log('InventFormComponente #858 Called show Raum Rest');
        this.openRaumListRest();
    }
    bcTrimZero(barcode) {
        barcode = barcode.trim();
        while (barcode.charAt(0) === '0') {
            barcode = barcode.substr(1).trim();
        }
        return barcode;
    }
    onBarcodeInput() { }
    handleScanData(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const enableBatchInput = false;
            event.barcode = this.bcTrimZero(event.barcode);
            if (this.kunde.mid === 5 && event.barcode.length > 10) {
                if (!event.barcode.startsWith('A') && !event.barcode.startsWith('R')) {
                    event.barcode = event.barcode.substr(0, 10);
                }
            }
            if (this.rawInputBarcodes && this.rawInputBarcodes.nativeElement && 'value' in this.rawInputBarcodes.nativeElement) {
                this.rawInputBarcodes.nativeElement.value = '';
                if (('rawInput' in event) && event.rawInput) {
                    this.rawInputBarcodes.nativeElement.value = event.rawInput;
                    if (('debugData' in event) && event.debugData && event.debugData.keyDownEvents) {
                        this.rawInputBarcodes.nativeElement.value += '\n\nkeyDownEvents:\n' + JSON.stringify(event.debugData.keyDownEvents);
                    }
                }
            }
            if (event.barcode.indexOf('\n') > -1) {
                const numBatchCodes = event.barcode.split('\n').length;
                let batchError = '';
                if (!this.raum) {
                    batchError = 'Wählen Sie erst einen Raum aus!';
                }
                else if (this.waitingForNewInventarBarcode) {
                    batchError = 'Aktueller Vorgang erwartet einzelnen neuen Inventar-Barcode!';
                }
                else if (this.waitingForInventarData) {
                    batchError = 'Aktueller Vorgang erwartet einzelne Artikelzuweisung!';
                }
                if (batchError) {
                    alert(batchError + '\n' +
                        'Es wurden ' + numBatchCodes + ' Barcodes im Batchmodus übermittelt!');
                    return;
                }
                const barcodes = event.barcode.split('\n').map((c) => {
                    let bc = this.bcTrimZero(c.trim());
                    if (this.kunde.mid === 5 && bc.length > 10 && !bc.startsWith('A') && !bc.startsWith('R')) {
                        bc = bc.substr(0, 10);
                    }
                    return bc;
                });
                if (enableBatchInput) {
                    return this.openBatchScans(barcodes, event.target);
                }
                alert('Auslesen mehrerer Barcodes pro Scan ist deaktiviert.\nBarcodes müssen einzeln gescannt werden!');
                return;
            }
            console.log('InventFormComponente #865 handleScanData', { waitingForNewInventarBarcode: this.waitingForNewInventarBarcode, event });
            const bcResult = yield this.bcLookup.fullLookup(event.barcode, this.jobid);
            console.log('InventFormComponente #867 handleScanData', { bcResult });
            const barcode = event.barcode;
            this.displayScannedBarcode(event.barcode);
            const RaumCreateModal = this.getModalRefByName('SelectCreateRaum');
            const RaumEditModal = this.getModalRefByName('EditRaum');
            const InventarEditModal = this.getModalRefByName('EditInventar');
            if (RaumCreateModal && RaumCreateModal.componentInstance) {
                if (bcResult.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None) {
                    const modalComp = RaumCreateModal.componentInstance;
                    // alert('transfer Code to Input SelectCreateRaumComponentraumDaten.code!');
                    modalComp.raumDaten.code = bcResult.barcode;
                    this.playSuccess();
                    return true;
                }
                else {
                    this.playError();
                    this.toastr.error('Gebe einen gülten Barcode ein oder schließe den Dialog "Neuen Raum anlegen"!' +
                        '<br>' + barcode, 'Ungültiger Barcode für Raum-Neu-Erfassung:');
                    return false;
                }
            }
            if (RaumEditModal && RaumEditModal.componentInstance) {
                if (bcResult.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None) {
                    const modalComp = RaumEditModal.componentInstance;
                    // alert('transfer Code to Input EditRaumComponent.raumInput.code!');
                    if (confirm('Achtung! Möchtest du wirklich den Raumbarcode bearbeiten?')) {
                        modalComp.raumInput.code = bcResult.barcode;
                        this.playSuccess();
                    }
                    return true;
                }
                else {
                    this.playError();
                    this.toastr.error('Gebe einen gülten Barcode ein oder schließe den Dialog "Raum aktualisieren"!' +
                        '<br>' + barcode + ' [' + _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"][bcResult.lookupResultTable] + ']', 'Ungültiger Barcode für Raum-Aktualisierung');
                    return false;
                }
            }
            if (InventarEditModal && InventarEditModal.componentInstance) {
                if (bcResult.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None) {
                    const modalComp = InventarEditModal.componentInstance;
                    // alert('transfer Code to Input EditRaumComponent.raumInput.code!');
                    modalComp.inventarInput.code = bcResult.barcode;
                    this.playSuccess();
                    return true;
                }
                else {
                    this.playError();
                    this.toastr.error('Gebe einen gülten Barcode ein oder schließe den Dialog "Barcode aktualisieren"!' +
                        '<br>' + barcode, 'Ungültiger Barcode für Inventar-Aktualisierung');
                    return false;
                }
            }
            if (this.waitingForNewInventarBarcode) {
                console.log('InventFormComponente #949 handleScanData');
                if (bcResult.lookupResultTable === _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None) {
                    this.formInventar.Barcode = bcResult.barcode;
                    console.log('InventFormComponente #952 handleScanData');
                    console.log('InventFormComponente #953 call this.saveNewInventar() from this.handleScanData');
                    this.waitingForNewInventarBarcode = false;
                    const insertResult = yield this.saveNewInventar();
                    if (insertResult && insertResult.success) {
                        this.playSuccess();
                    }
                    else {
                        this.playError();
                    }
                    return true;
                }
                else {
                    this.playError();
                    console.log('InventFormComponente #960 handleScanData');
                    if (confirm('Barcode ist bereits vergeben!\n' +
                        'Drücken Sie [Abbrechen], um die Neuaufnahme abzubrechen!\n' +
                        'Drücken Sie [OK], wenn Sie einen neuen Barcode vergeben wollen.')) {
                        return;
                    }
                    else {
                        this.waitingForNewInventarBarcode = false;
                    }
                }
            }
            console.log('InventFormComponente #972 handleScanData');
            if (this.waitingForInventarData) {
                if (bcResult.lookupResultTable !== _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].ObjektKatalogMandant) {
                    this.playError();
                    if (confirm('Fehler: Erwarte Artikel-Barcode!\n' +
                        'Drücken Sie [Abbrechen], um die Neuaufnahme abzubrechen!\n' +
                        'Drücken Sie [OK], wenn Sie einen Artikel zuweisen möchten.')) {
                        return;
                    }
                    else {
                        this.waitingForInventarData = false;
                        console.log('InventFormComponente #1034 handleScanData', { waitingForNewInventarBarcode: this.waitingForNewInventarBarcode });
                    }
                }
                else {
                    console.log('InventFormComponente #986 Found Artikel-Barcode', { bcResult });
                    console.log('InventFormComponente #987 Continue ...');
                }
            }
            switch (bcResult.lookupResultTable) {
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None:
                    console.log('InventFormComponente #990 handleScanData LookupResultTable.None');
                    if (!bcResult.barcode.match(/^(\d{10}|L\d{9,10})$/)) {
                        console.log('InventFormComponent.handleScanData() #1163', { bcResult });
                        if (!confirm('Der Barcode besteht nicht wie erwartet aus 10 Zahlen!\n' +
                            'Möchten Sie ihn dennoch für die Neuaufnahme verwenden?')) {
                            return;
                        }
                    }
                    this.clearFormInventar();
                    this.formInventar.Barcode = bcResult.barcode;
                    this.waitingForInventarData = true;
                    this.playSuccess().then(() => {
                        // this.openSelectSearchArtikel();
                    });
                    // ToDo: Reaktion auf neuen Barcode ändern in Neufnahme
                    // User soll daraufhin einen Artikel zuweisen können
                    this.toastr.warning('Barcode: ' + barcode + '<br>' +
                        'Für eine Neuaufnahme weisen sie bitte einen Artikel zu!<br>\n' +
                        '<i>Oder nutzen Sie unter Einstellungen die Funktion reIndexBarcodeLookup, ' +
                        'falls neu aufgenommene Elemente nicht erkannt werden.</i>', 'Unbekannter Barcode');
                    break;
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].Raeume:
                    console.log('InventFormComponente #1008 handleScanData LookupResultTable.Raeume');
                    if (bcResult.raum.gid === this.buildingID) {
                        this.loadRaumByData(bcResult.raum);
                        this.playSuccess();
                        return;
                    }
                    else {
                        const geb = bcResult.gebaeude;
                        const gebName = geb ? (geb.Gebaeude || geb.Adresse) : ' Unbekannte Standort-ID ' + bcResult.raum.gid;
                        this.playError();
                        this.toastr.error('Der gescannte Raum-Barcode ist einem anderen Standort zugewiesen: ' + gebName, 'Fehler: Raum kann nicht geladen werden!');
                        if (0) {}
                    }
                    break;
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].Inventar:
                    console.log('InventFormComponente #1031 handleScanData LookupResultTable.Inventar');
                    this.modalService.dismissAll();
                    this.assignInventarToRaum({
                        inventar: bcResult.inventar,
                        artikelRef: bcResult.artikelRef,
                        artikelData: bcResult.artikelData
                    });
                    this.playSuccess();
                    break;
                case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].ObjektKatalogMandant:
                    console.log('InventFormComponente #1095 handleScanData LookupResultTable.Mandant', { bcResult });
                    if (!this.formInventar.Barcode) {
                        this.playError();
                        this.toastr.error('Bitte scanne erst einen neuen InventarBarcode für die Artikelzuweisung', 'Fehler bei Barcodezuweisung');
                    }
                    if (!this.waitingForInventarData && this.formInventar.uuid) {
                        this.playError();
                        this.toastr.warning('Sie versuchen gerade bereits zugewiesene Inventar-Daten zu ändern', 'Warnung');
                    }
                    this.loadArtikelByData(Object.assign({}, bcResult.artikelRef, { mcuuid: bcResult.artikelRef.uuid }, bcResult.artikelData)).then((success) => {
                        if (success) {
                            this.playSuccess();
                        }
                        else {
                            this.playError();
                        }
                    });
                    break;
                default:
                    this.playError();
                    this.toastr.error('Ungültiger oder nicht richtig erkannter Barcode!');
            }
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
        if (!this.inputSimulateBarcode
            || !this.inputSimulateBarcode.nativeElement
            || !this.inputSimulateBarcode.nativeElement.value
            || !(typeof this.inputSimulateBarcode.nativeElement.value === 'string')) {
            return;
        }
        const input = this.inputSimulateBarcode.nativeElement.value;
        const s = input.replace('\r\n', '\n').replace('\r', '\n');
        for (const character of s) {
            let key = character;
            let shiftKey = false;
            if (character === '\t') {
                key = 'Tab';
            }
            else if (character === '\n') {
                key = 'Enter';
            }
            else if (character !== character.toLowerCase() && character === character.toUpperCase()) {
                shiftKey = true;
                const shiftEvent = new KeyboardEvent('keydown', { bubbles: true, cancelable: true,
                    key: 'Shift', code: 'ShiftLeft', shiftKey });
                document.dispatchEvent(shiftEvent);
            }
            const e = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: character, shiftKey });
            setTimeout(() => document.dispatchEvent(e));
        }
        const xe = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter', shiftKey: false });
        setTimeout(() => document.dispatchEvent(xe));
    }
    playSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showBlobAlertSuccess();
            this.sounds.playSuccess();
        });
    }
    playError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showBlobAlertError();
            this.sounds.playError();
        });
    }
};
InventFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_18__["BasedataService"] },
    { type: _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_7__["InventoryProgressService"] },
    { type: _shared_services_inventory_editor_service__WEBPACK_IMPORTED_MODULE_19__["InventoryEditorService"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_20__["InventarService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_23__["RaumService"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_21__["ImagesService"] },
    { type: _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_22__["BarcodeService"] },
    { type: _shared_services_sounds_service__WEBPACK_IMPORTED_MODULE_26__["SoundsService"] },
    { type: _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_29__["VariablesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input2', { static: true })
], InventFormComponent.prototype, "input2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputSimulateBarcode', { static: true })
], InventFormComponent.prototype, "inputSimulateBarcode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rawInputBarcodes', { static: true })
], InventFormComponent.prototype, "rawInputBarcodes", void 0);
InventFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invent-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invent-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/invent-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invent-form.component.scss */ "./src/app/pages/invent-form/invent-form.component.scss")).default]
    })
], InventFormComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.bg-danger::-moz-placeholder {\n  color: #ffffff;\n}\n\ninput.bg-danger::placeholder {\n  color: #ffffff;\n}\n\n.with-pulse-effect {\n  -webkit-animation: enter-animation 2s ease;\n          animation: enter-animation 2s ease;\n}\n\n@-webkit-keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n\n@keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2JhdGNoLWJhcmNvZGVzL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxccGFnZXNcXGludmVudC1mb3JtXFxtb2RhbHNcXGJhdGNoLWJhcmNvZGVzXFxiYXRjaC1iYXJjb2Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2JhdGNoLWJhcmNvZGVzL2JhdGNoLWJhcmNvZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRERBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFlBQUE7RUNBRjtFREVBO0lBQ0Usa0RBQUE7SUFDQSxXQUFBO0VDQUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxZQUFBO0VDQUY7RURFQTtJQUNFLGtEQUFBO0lBQ0EsV0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvYmF0Y2gtYmFyY29kZXMvYmF0Y2gtYmFyY29kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQuYmctZGFuZ2VyOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi53aXRoLXB1bHNlLWVmZmVjdCB7XHJcbiAgYW5pbWF0aW9uOiBlbnRlci1hbmltYXRpb24gMnMgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBlbnRlci1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDM1LCAxMzAsIDIyMCwxKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAyNXB4IHJnYmEoMzUsIDEzMCwgMjIwLDApO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0LmJnLWRhbmdlcjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLndpdGgtcHVsc2UtZWZmZWN0IHtcbiAgYW5pbWF0aW9uOiBlbnRlci1hbmltYXRpb24gMnMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBlbnRlci1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMyMzgyZGM7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDI1cHggcmdiYSgzNSwgMTMwLCAyMjAsIDApO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: bcLookupTyp, BatchBarcodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bcLookupTyp", function() { return bcLookupTyp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchBarcodesComponent", function() { return BatchBarcodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/inventory-progress/inventory-progress.service */ "./src/app/shared/inventory-progress/inventory-progress.service.ts");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/pages/invent-form/data-services/inventar.service.ts");












var bcLookupTyp;
(function (bcLookupTyp) {
    bcLookupTyp[bcLookupTyp["Neu"] = 0] = "Neu";
    bcLookupTyp[bcLookupTyp["Unbekannt"] = 1] = "Unbekannt";
    bcLookupTyp[bcLookupTyp["Raum"] = 2] = "Raum";
    bcLookupTyp[bcLookupTyp["Artikel"] = 3] = "Artikel";
    bcLookupTyp[bcLookupTyp["Inventar"] = 4] = "Inventar";
})(bcLookupTyp || (bcLookupTyp = {}));
let BatchBarcodesComponent = class BatchBarcodesComponent {
    constructor(activeModal, dataService, bcLookup, imageService, baseData, variables, inventoryProgress, inventarDataService) {
        this.activeModal = activeModal;
        this.dataService = dataService;
        this.bcLookup = bcLookup;
        this.imageService = imageService;
        this.baseData = baseData;
        this.variables = variables;
        this.inventoryProgress = inventoryProgress;
        this.inventarDataService = inventarDataService;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCheck"];
        this.faRemove = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.typeofLookupInventar = bcLookupTyp[bcLookupTyp.Inventar];
        this.typeofLookupRaum = bcLookupTyp[bcLookupTyp.Raum];
        this.typeofLookupArtikel = bcLookupTyp[bcLookupTyp.Artikel];
        this.typeofLookupNeu = bcLookupTyp[bcLookupTyp.Neu];
        this.onScan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLookupResultApply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.jobid = 0;
        this.batchBarcodes = [];
        this.uniqBatchBarcodes = [];
        this.scanResultHistory = [];
        this.scanResultAssigned = [];
        this.blobAlertTimer = null;
        this.useOverlay = 0;
        this.loadingTimer = null;
        this.loadingShow = false;
        this.loadingType = 'warning';
        this.loadingAnimated = true;
        this.loadingPercent = 0;
        this.loadingCurrent = 0;
        this.loadingTotal = 0;
        this.closeOnApplyBarcode = false;
        this.raumProgress = {
            total: 0,
            done: 0,
        };
    }
    ngOnInit() {
        this.jobid = this.baseData.getCurrentJobid();
        this.raum = this.baseData.getCurrentRaum();
        this.refreshRaumProgress();
        this.subRaumChanged = this.inventoryProgress.raumProgressChanged.subscribe(progress => {
            if (this.raum && this.raum.uuid !== progress.uuid) {
                return;
            }
            this.raumProgress.done = progress.done;
            this.raumProgress.total = progress.total;
        });
    }
    ngOnDestroy() {
        this.subRaumChanged.unsubscribe();
    }
    showBlobAlertSuccess() {
        this.showBlobAlert('success');
    }
    showBlobAlertError() {
        this.showBlobAlert('danger');
    }
    showBlobAlert(alertType) {
        this.useOverlay = this.useOverlay < 2 ? this.useOverlay + 1 : 1;
        this.blobAlert = null;
        if (this.blobAlertTimer) {
            clearTimeout(this.blobAlertTimer);
        }
        this.blobAlert = alertType;
        this.blobAlertTimer = setTimeout(() => {
            this.blobAlert = null;
            this.useOverlay = 0;
        }, 1200);
    }
    setAssignedInventar(barcode) {
        const result = this.scanResultHistory.find((r) => r.barcode === barcode);
        if (result) {
            this.removeResult(result);
            this.scanResultAssigned.unshift(result);
        }
    }
    setLoadingIndicator(current, total) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingShow = true;
            if (current === 0 || current > this.loadingCurrent) {
                this.loadingPercent = (current > 0) ? current * 100 / total : 100;
                this.loadingCurrent = current;
                this.loadingType = (current > 0) ? 'success' : 'warning';
                this.loadingAnimated = current !== total;
                if (current === 0 && total > 0 && this.loadingTimer) {
                    clearTimeout(this.loadingTimer);
                    this.loadingTimer = null;
                }
                if (current > 0 && current === total) {
                    this.loadingTimer = setTimeout(() => { this.loadingShow = false; }, 4000);
                }
            }
            this.loadingTotal = total;
        });
    }
    setRaum(raum) {
        this.raum = raum;
    }
    setJobid(jobid) {
        this.jobid = jobid;
    }
    setBarcodes(barcodes) {
        // setBarcodes wird aus InventFormComponent aufgerufen, noch bevor ngOnInit ausgefuehrt wurde
        const uniqBarcodes = [];
        for (let i = 0; i < barcodes.length; i++) {
            const bc = barcodes[i].trim();
            if (bc !== '' && uniqBarcodes.indexOf(bc) === -1) {
                uniqBarcodes.push(bc);
            }
        }
        this.batchBarcodes = barcodes;
        this.uniqBatchBarcodes = uniqBarcodes;
        const total = uniqBarcodes.length;
        let current = 0;
        this.setLoadingIndicator(current, total);
        console.log('BatchBarcodesComponent.setBarcodes(', barcodes, ') #106');
        this.clearResult();
        Promise.all(uniqBarcodes.map((code) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rslt = yield this.bcLookup.fullLookup(code, this.jobid);
            ++current;
            this.setLoadingIndicator(current, total);
            return rslt;
        }))).then((lkUpResults) => {
            lkUpResults.reverse().forEach((rslt) => {
                this.showResult(rslt);
            });
        }).catch(() => {
            console.error('BatchBarcodesComponent.setBarcodes #121: Fehler bei Index-Barcode-Anfrage fuer', { barcodes });
            alert('BatchBarcodesComponent.setBarcodes #121\nFehler bei Index-Barcode-Anfrage.');
        });
    }
    clearResult() {
        this.scanResultHistory.length = 0;
    }
    showResult(result) {
        let bezeichnung = '';
        let bcObjectType = bcLookupTyp.Unbekannt;
        let bcObjectInfos = '';
        switch (result.lookupResultTable) {
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].None:
                bezeichnung = 'Neuer Barcode';
                bcObjectType = bcLookupTyp.Neu;
                bcObjectInfos = this.bcInfoToString({
                    Gefunden: 'Neuer oder unbekannter Barcode'
                });
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].Raeume:
                const g = (result.gebaeude.Gebaeude || result.gebaeude.Adresse);
                if (g) {
                    bezeichnung += `${g} :: `;
                }
                bezeichnung += result.raum.Raum;
                if (result.raum.Raumbezeichnung) {
                    bezeichnung += ' / ' + result.raum.Raumbezeichnung;
                }
                if (result.raum.Etage) {
                    bezeichnung += ' :: ' + result.raum.Etage;
                }
                bezeichnung = (result.gebaeude.Gebaeude || result.gebaeude.Adresse);
                bcObjectType = bcLookupTyp.Raum;
                bcObjectInfos = bezeichnung;
                if (false) {}
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].Inventar:
                if (result.artikelData.Typ) {
                    bezeichnung = result.artikelData.Typ + ' :: ';
                }
                bezeichnung += result.artikelData.Bezeichnung;
                if (result.artikelData.Farbe) {
                    bezeichnung += ' :: ' + result.artikelData.Farbe;
                }
                if (result.artikelData.Groesse) {
                    bezeichnung += ' :: ' + result.artikelData.Groesse;
                }
                if (result.artikelData.Kategorie) {
                    bezeichnung += ' :: ' + result.artikelData.Kategorie;
                }
                if (result.artikelData.Gruppe) {
                    bezeichnung += ' :: ' + result.artikelData.Gruppe;
                }
                bcObjectType = bcLookupTyp.Inventar;
                bcObjectInfos = bezeichnung;
                if (false) {}
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"].ObjektKatalogMandant:
                bezeichnung = result.artikelData.Bezeichnung;
                if (result.artikelData.Farbe) {
                    bezeichnung += ' :: ' + result.artikelData.Farbe;
                }
                if (result.artikelData.Groesse) {
                    bezeichnung += ' :: ' + result.artikelData.Groesse;
                }
                if (result.artikelData.Kategorie) {
                    bezeichnung += ' :: ' + result.artikelData.Kategorie;
                }
                bcObjectType = bcLookupTyp.Artikel;
                bcObjectInfos = bezeichnung;
                if (false) {}
                break;
            default:
                bezeichnung = 'Unerwartetes Ergebnis';
                bcObjectType = bcLookupTyp.Unbekannt;
                bcObjectInfos = bezeichnung;
                this.bcInfoToString({
                    Gefunden: 'Unerwartetes Ergebnis',
                    Objekt: _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_5__["LookupResultTable"][result.lookupResultTable]
                });
        }
        const lastResult = {
            typ: bcObjectType,
            typToString: bcLookupTyp[bcObjectType],
            barcode: result.barcode,
            infos: bcObjectInfos,
            image: result.image,
            result
        };
        this.addHistoryResult(lastResult);
        if (result.image && result.image.mcuuid) {
            this.loadImageByMcuuid(result.image.mcuuid).then(img => {
                const lastResultFound = this.scanResultHistory.find(r => r === lastResult);
                if (lastResultFound) {
                    lastResultFound.image.data_url = img.data_url;
                }
            });
        }
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
        this.scanResultHistory = this.scanResultHistory.filter(r => r !== result);
        console.log('remove Result', { result });
        // alert(JSON.stringify(result));
    }
    applyResult(result) {
        console.log('BatchBarcodesComponent.applyHistoryResult(result: ', result, ') #335');
        const emitScanResult = {
            barcode: result.result.barcode,
            length: result.result.barcode.length,
            valid: true,
            result
        };
        console.log('BatchBarcodesComponent.applyHistoryResult(result: \', result, \') #335apply applyHistoryResult', { emitScanResult });
        result.ModalRaumUuid = this.raum.uuid;
        result.ModalJobid = this.jobid;
        this.onLookupResultApply.emit(result);
        // this.onScan.emit( emitScanResult );
    }
    clearHistory() {
        this.scanResultHistory = [];
    }
    bcInfoToString(json) {
        return JSON.stringify(json).substr(1).split('').slice(0, -1).join('');
        let tbl = '<table>';
        for (const k of Object.keys(json)) {
            tbl += '<tr><th>' + k + '</th><td>' + json[k] + '</td>';
        }
        tbl += '</table>';
        return tbl;
    }
    loadImageByMcuuid(mcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', mcuuid);
            if (mcuuid) {
                return this.imageService.getImageByMcuuid(mcuuid)
                    .then(image => {
                    return image;
                })
                    .catch(err => {
                    console.error(err);
                    return null;
                });
            }
            else {
                return null;
            }
        });
    }
    refreshRaumProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.inventoryProgress.getCurrentRaumProgress(this.raum.uuid)
                .then((progress) => {
                this.raumProgress.done = progress.done;
                this.raumProgress.total = progress.total;
            })
                .catch(err => {
                console.error('InventFormComponente #449 Fehler bei Raum-Progress-Aktualisierung', err);
            });
        });
    }
    showRaumDone() { }
    showRaumRest() { }
};
BatchBarcodesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__["BarcodeService"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] },
    { type: _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_9__["VariablesService"] },
    { type: _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_10__["InventoryProgressService"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_11__["InventarService"] }
];
BatchBarcodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-batch-barcodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./batch-barcodes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./batch-barcodes.component.scss */ "./src/app/pages/invent-form/modals/batch-barcodes/batch-barcodes.component.scss")).default]
    })
], BatchBarcodesComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar-cropend,\n.toolbar {\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -8rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-cropend {\n  top: 1rem;\n  width: 5rem;\n  margin-left: -2.5rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n\n.btn-icon-cirular + .btn-icon-cirular {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2NyZWF0ZS1hcnRpa2VsLWltYWdlL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxccGFnZXNcXGludmVudC1mb3JtXFxtb2RhbHNcXGNyZWF0ZS1hcnRpa2VsLWltYWdlXFxjcmVhdGUtYXJ0aWtlbC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2NyZWF0ZS1hcnRpa2VsLWltYWdlL2NyZWF0ZS1hcnRpa2VsLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUdFLG1CQUFBO0VBR0EsYUFBQTtFQUdBLHVCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNHRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvY3JlYXRlLWFydGlrZWwtaW1hZ2UvY3JlYXRlLWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLmVkaXRvciB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhbnZhcyB7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhci1jcm9wZW5kLFxyXG4udG9vbGJhciB7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTZyZW07XHJcbiAgei1pbmRleDogMjAxNTtcclxufVxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuLnRvb2xiYXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJvcmRlcjowO1xyXG59XHJcblxyXG4udG9vbGJhci1jcm9wZW5kIHtcclxuICB0b3A6IDFyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XHJcbiAgei1pbmRleDogMjAxNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1pY29uLWNpcnVsYXIge1xyXG4gIHdpZHRoOjJyZW07XHJcbiAgaGVpZ2h0OjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czoxcmVtO1xyXG59XHJcbi5idG4taWNvbi1jaXJ1bGFyICsgLmJ0bi1pY29uLWNpcnVsYXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiIsIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5lZGl0b3Ige1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FudmFzIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sYmFyLWNyb3BlbmQsXG4udG9vbGJhciB7XG4gIGJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMnJlbTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cmVtO1xuICB6LWluZGV4OiAyMDE1O1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnRvb2xiYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG59XG5cbi50b29sYmFyLWNyb3BlbmQge1xuICB0b3A6IDFyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcbiAgei1pbmRleDogMjAxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4taWNvbi1jaXJ1bGFyIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJ0bi1pY29uLWNpcnVsYXIgKyAuYnRuLWljb24tY2lydWxhciB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CreateArtikelImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArtikelImageComponent", function() { return CreateArtikelImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
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
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCamera"];
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
    setMetaData(metaData) {
        this.imgMetaData = metaData;
    }
    openInputUploadFile() {
        this.inputUploadFile.nativeElement.dispatchEvent(new MouseEvent('click'));
    }
    openInputUploadImage() {
        this.inputUploadImage.nativeElement.dispatchEvent(new MouseEvent('click'));
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
    converterDataURItoBlob(dataURI) {
        let byteString;
        let mimeString;
        let ia;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = encodeURI(dataURI.split(',')[1]);
        }
        // separate out the mime component
        mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
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
                if (this.inputImgHeight > 1000 || this.inputImgWidth > 1000) {
                    const canv = this.prepareImgCanvas.nativeElement;
                    const ctx = canv.getContext('2d');
                    const iRel = this.inputImgWidth / this.inputImgHeight;
                    canv.width = (iRel > 1) ? 1000 : (1000 * iRel);
                    canv.height = (iRel > 1) ? (1000 / iRel) : 1000;
                    ctx.drawImage(img, 0, 0, this.inputImgWidth, this.inputImgHeight, 0, 0, canv.width, canv.height);
                    this.imageUrl = canv.toDataURL('image/jpeg', 0.6);
                }
                else if (this.inputImgSize > 100 * KB) {
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
            this.inputImgSavedData = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.8);
            return this.imageService.putArtikelImage({
                name: this.imgMetaData.name,
                desc: this.imgMetaData.desc,
                for_jobid: this.imgMetaData.for_jobid,
                mcuuid: this.imgMetaData.mcuuid,
                gcuuid: this.imgMetaData.gcuuid,
                type: 'image/jpeg',
                size: this.inputImgSavedData.toString().length,
                width: cropData.width,
                height: cropData.height,
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputUploadFile', { static: true })
], CreateArtikelImageComponent.prototype, "inputUploadFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputUploadImage', { static: true })
], CreateArtikelImageComponent.prototype, "inputUploadImage", void 0);
CreateArtikelImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-artikel-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-artikel-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-artikel-image.component.scss */ "./src/app/pages/invent-form/modals/create-artikel-image/create-artikel-image.component.scss")).default]
    })
], CreateArtikelImageComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar-cropend,\n.toolbar {\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -8rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-cropend {\n  top: 1rem;\n  width: 5rem;\n  margin-left: -2.5rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n\n.btn-icon-cirular + .btn-icon-cirular {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2NyZWF0ZS1yYXVtLWltYWdlL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxccGFnZXNcXGludmVudC1mb3JtXFxtb2RhbHNcXGNyZWF0ZS1yYXVtLWltYWdlXFxjcmVhdGUtcmF1bS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2NyZWF0ZS1yYXVtLWltYWdlL2NyZWF0ZS1yYXVtLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUdFLG1CQUFBO0VBR0EsYUFBQTtFQUdBLHVCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNHRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvY3JlYXRlLXJhdW0taW1hZ2UvY3JlYXRlLXJhdW0taW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLmVkaXRvciB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhbnZhcyB7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhci1jcm9wZW5kLFxyXG4udG9vbGJhciB7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTZyZW07XHJcbiAgei1pbmRleDogMjAxNTtcclxufVxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuLnRvb2xiYXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJvcmRlcjowO1xyXG59XHJcblxyXG4udG9vbGJhci1jcm9wZW5kIHtcclxuICB0b3A6IDFyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XHJcbiAgei1pbmRleDogMjAxNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1pY29uLWNpcnVsYXIge1xyXG4gIHdpZHRoOjJyZW07XHJcbiAgaGVpZ2h0OjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czoxcmVtO1xyXG59XHJcbi5idG4taWNvbi1jaXJ1bGFyICsgLmJ0bi1pY29uLWNpcnVsYXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiIsIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5lZGl0b3Ige1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FudmFzIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sYmFyLWNyb3BlbmQsXG4udG9vbGJhciB7XG4gIGJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMnJlbTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cmVtO1xuICB6LWluZGV4OiAyMDE1O1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnRvb2xiYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG59XG5cbi50b29sYmFyLWNyb3BlbmQge1xuICB0b3A6IDFyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcbiAgei1pbmRleDogMjAxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4taWNvbi1jaXJ1bGFyIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJ0bi1pY29uLWNpcnVsYXIgKyAuYnRuLWljb24tY2lydWxhciB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateRaumImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRaumImageComponent", function() { return CreateRaumImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
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
let CreateRaumImageComponent = class CreateRaumImageComponent {
    constructor(activeModal, imageService) {
        this.activeModal = activeModal;
        this.imageService = imageService;
        // Editor-Button-Icons
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCamera"];
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
    setMetaData(metaData) {
        this.imgMetaData = metaData;
    }
    openInputUploadFile() {
        this.inputUploadFile.nativeElement.dispatchEvent(new MouseEvent('click'));
    }
    openInputUploadImage() {
        this.inputUploadImage.nativeElement.dispatchEvent(new MouseEvent('click'));
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
    converterDataURItoBlob(dataURI) {
        let byteString;
        let mimeString;
        let ia;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = encodeURI(dataURI.split(',')[1]);
        }
        // separate out the mime component
        mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
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
                if (this.inputImgHeight > 1000 || this.inputImgWidth > 1000) {
                    const canv = this.prepareImgCanvas.nativeElement;
                    const ctx = canv.getContext('2d');
                    const iRel = this.inputImgWidth / this.inputImgHeight;
                    canv.width = (iRel > 1) ? 1000 : (1000 * iRel);
                    canv.height = (iRel > 1) ? (1000 / iRel) : 1000;
                    ctx.drawImage(img, 0, 0, this.inputImgWidth, this.inputImgHeight, 0, 0, canv.width, canv.height);
                    this.imageUrl = canv.toDataURL('image/jpeg', 0.6);
                }
                else if (this.inputImgSize > 100 * KB) {
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
            this.inputImgSavedData = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.8);
            return this.imageService.putRaumImage({
                name: this.imgMetaData.name,
                desc: this.imgMetaData.desc,
                for_jobid: this.imgMetaData.for_jobid,
                mcuuid: '',
                gcuuid: '',
                type: 'image/jpeg',
                size: this.inputImgSavedData.toString().length,
                width: cropData.width,
                height: cropData.height,
                data_url: this.inputImgSavedData
            }, this.imgMetaData.ruuid).then(() => {
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
CreateRaumImageComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper', { static: false })
], CreateRaumImageComponent.prototype, "angularCropper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prepareImgCanvas', { static: true })
], CreateRaumImageComponent.prototype, "prepareImgCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputUploadFile', { static: true })
], CreateRaumImageComponent.prototype, "inputUploadFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputUploadImage', { static: true })
], CreateRaumImageComponent.prototype, "inputUploadImage", void 0);
CreateRaumImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-raum-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-raum-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-raum-image.component.scss */ "./src/app/pages/invent-form/modals/create-raum-image/create-raum-image.component.scss")).default]
    })
], CreateRaumImageComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL21vZGFscy9lZGl0LWludmVudGFyL2VkaXQtaW52ZW50YXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditInventarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInventarComponent", function() { return EditInventarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/pages/invent-form/data-services/inventar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_services_hersteller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-services/hersteller.service */ "./src/app/pages/invent-form/data-services/hersteller.service.ts");
/* harmony import */ var _data_services_artikel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data-services/artikel.service */ "./src/app/pages/invent-form/data-services/artikel.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");











const states = [];
const stateNames = [];
const artikelGruppen = [];
const artikelKategorien = [];
const artikelTypen = [];
const artikelGroessen = [];
const artikelFarben = [];
const gruppenKategorien = [];
let EditInventarComponent = class EditInventarComponent {
    constructor(activeModal, inventarService, artikelService, herstellerService, baseData, dataService) {
        this.activeModal = activeModal;
        this.inventarService = inventarService;
        this.artikelService = artikelService;
        this.herstellerService = herstellerService;
        this.baseData = baseData;
        this.dataService = dataService;
        this.artikelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.artikelSearching = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.artikelCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.herstellerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gruppeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventarChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scannerRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCamera"];
        this.numBezeichnungExists = -1;
        this.inventarDaten = null;
        this.inventarInput = {
            code: '',
            uuid: '',
            Bezeichnung: '',
            Gruppe: '',
            Kategorie: '',
            Typ: '',
            Hersteller: '',
            Groesse: '',
            Farbe: '',
            huuid: '',
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
        this.validationErrors = [];
        this.formIsValid = true;
        this.formError = '';
        this.uuid = '';
        this.formatter = (state) => state;
        this.search = (text$) => {
            console.log('EditInventarComponent #550');
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instance.isPopupOpen()));
            const inputFocus$ = this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? stateNames
                : stateNames.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGruppen = (text$) => {
            console.log('EditInventarComponent #562');
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
            console.log('EditInventarComponent #585');
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickTyp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceTyp.isPopupOpen()));
            const inputFocus$ = this.focusTyp$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelTypen
                : artikelTypen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGroessen = (text$) => {
            console.log('EditInventarComponent #597');
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickGrs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceGrs.isPopupOpen()));
            const inputFocus$ = this.focusGrs$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelGroessen
                : artikelGroessen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchFarben = (text$) => {
            console.log('EditInventarComponent #609', { text$ });
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickFa$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !this.instanceFa.isPopupOpen()));
            const inputFocus$ = this.focusFa$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelFarben
                : artikelFarben.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
            console.log('EditInventarComponent #618');
        };
    }
    loadHersteller() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #150 loadHersteller');
            return this.herstellerService.getAllHerstellerWithUuids()
                .then(list => {
                while (states.length > 0) {
                    states.pop();
                    stateNames.pop();
                }
                list.forEach(item => {
                    states.push(item);
                    stateNames.push(item.Hersteller);
                });
                console.log('#118 ngOnInit', { states, stateNames });
                return states.length;
            })
                .catch(() => -1);
        });
    }
    loadGruppenKategorien() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #168');
            return this.artikelService.getGroupedArtikelGruppenKategorien()
                .then((list) => {
                gruppenKategorien.length = 0;
                list.forEach(itm => gruppenKategorien.push(itm));
                return gruppenKategorien.length;
            })
                .catch(() => -1);
        });
    }
    loadGruppen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #179');
            return this.artikelService.getGroupedArtikelGruppen()
                .then(list => {
                artikelGruppen.length = 0;
                list.forEach((it) => artikelGruppen.push(it));
                return artikelGruppen.length;
            })
                .catch(() => -1);
        });
    }
    loadKategorien() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #190');
            return this.artikelService.getGroupedArtikelKategorien()
                .then(list => {
                artikelKategorien.length = 0;
                list.forEach((it) => artikelKategorien.push(it));
                return artikelKategorien.length;
            })
                .catch(() => -1);
        });
    }
    loadArtikeltypen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #201');
            return this.artikelService.getGroupedArtikelProperties('Typ')
                .then(list => {
                artikelTypen.length = 0;
                list.forEach((it) => artikelTypen.push(it));
                return artikelTypen.length;
            })
                .catch(() => -1);
        });
    }
    loadFarben() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #212');
            return this.artikelService.getGroupedArtikelFarben()
                .then(list => {
                artikelFarben.length = 0;
                list.forEach((it) => artikelFarben.push(it));
                return artikelFarben.length;
            })
                .catch(() => -1);
        });
    }
    loadGroessen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #223');
            return this.artikelService.getGroupedArtikelGroessen()
                .then(list => {
                artikelGroessen.length = 0;
                list.forEach((it) => artikelGroessen.push(it));
                return artikelGroessen.length;
            })
                .catch(() => -1);
        });
    }
    ngOnInit() {
        console.log('EditInventarComponent #234 ngOnInit');
        this.mid = this.baseData.getCurrentMid();
        Promise.all([
            this.loadHersteller(),
            this.loadGruppenKategorien(),
            this.loadGruppen(),
            this.loadKategorien(),
            this.loadArtikeltypen(),
            this.loadFarben(),
            this.loadGroessen()
        ])
            .then((result) => {
            console.log('loaded all ArtikelData', {
                result,
                states,
                stateNames,
                artikelTypen,
                'gruppenKategorien.length': gruppenKategorien.length,
                'artikelGruppen.length': artikelGruppen.length,
                'artikelKategorien.length': artikelKategorien.length,
                'artikelTypen.length': artikelTypen.length,
                'artikelFarben.length': artikelFarben.length,
                'artikelGroessen.length': artikelGroessen.length
            });
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
    openScanner(target) {
        console.log('EditInventarComponent #287 openScanner');
        this.scannerRequest.emit(target);
    }
    get inventarUuid() {
        console.log('called get raumId() ', this.uuid);
        return this.uuid;
    }
    set inventarUuid(uuid) {
        console.log('EditInventarComponent #297 set inventarId(id)', { id: uuid });
        this.uuid = uuid;
        this.inventarService.getInventar(uuid).then(result => {
            console.log('EditInventarComponent #300 getInventar', { result });
            this.inventarDaten = result;
            if (result && result.success) {
                this.inventarInput.uuid = uuid;
                this.inventarInput.code = result.inventar.code;
                this.inventarInput.Bezeichnung = result.artikelData.Bezeichnung;
                this.inventarInput.Gruppe = result.artikelData.Gruppe;
                this.inventarInput.Kategorie = result.artikelData.Kategorie;
                this.inventarInput.Typ = result.artikelData.Typ;
                if (result.hersteller && result.hersteller.Hersteller) {
                    this.inventarInput.Hersteller = result.hersteller.Hersteller;
                }
                else {
                    this.inventarInput.Hersteller = '';
                }
                this.inventarInput.Groesse = result.artikelData.Groesse;
                this.inventarInput.Farbe = result.artikelData.Farbe;
                this.inventarInput.mcid = result.inventar.mcid;
                this.inventarInput.mcuuid = result.inventar.mcuuid;
                this.inventarInput.gcid = result.artikelRef.gcid;
                this.inventarInput.gcuuid = result.artikelRef.gcuuid;
                this.inventarInput.hid = result.artikelData.hid;
                this.inventarInput.huuid = result.artikelData.huuid;
                this.inventarInput.Zustand = result.inventar.Zustand;
            }
        });
    }
    formValidate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return true;
        });
    }
    getWhereInputsOf(artikelProperties) {
        const daten = Object.assign({}, this.inventarInput);
        console.log('#201 getWhereInputsOf', { artikelProperties, daten, inventarInput: this.inventarInput });
        const where = artikelProperties
            .filter(p => {
            const hasInput = (p in daten)
                && daten[p] !== 0
                && daten[p] !== ''
                && !!daten[p];
            console.log('#206 getWhereInputsOf', {
                p, hasInput, daten, artikelDaten: Object.assign({}, this.inventarInput),
                value: this.inventarInput[p], dvalue: daten[p]
            });
            return hasInput;
        })
            .reduce((o, p) => { o[p] = this.inventarInput[p]; return o; }, {});
        console.log('#210 getWhereInputsOf', { artikelProperties, where, artikelDaten: this.inventarInput });
        return where;
    }
    delegateListArticleMatches(delay) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #347');
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
    rebuildTypeaheadKategorien(gruppe) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #360');
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
            console.log('EditInventarComponent #384');
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelTypen(where).then(list => {
                artikelTypen.length = 0;
                list.forEach((it) => artikelTypen.push(it));
            });
        });
    }
    rebuildTypeaheadFarben() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #393');
            const where = this.getWhereInputsOf(['hid']);
            this.artikelService.getGroupedArtikelFarben(where).then(list => {
                artikelFarben.length = 0;
                list.forEach((it) => artikelFarben.push(it));
            });
        });
    }
    checkHersteller() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #402');
            console.log('called checkHersteller');
            const input = this.inventarInput.Hersteller;
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
            const d = this.inventarInput;
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
    checkIfArtikelExistsMandant() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #465');
            console.log('check if bezeichnung exists');
            this.numBezeichnungExists = -1;
            let globalArtikelIds = [];
            yield this.artikelService
                .artikelGlobalByBezeichnung(this.inventarInput.Bezeichnung)
                .then(items => {
                globalArtikelIds = items.map(item => item.uuid);
            });
            if (globalArtikelIds.length === 0) {
                return false;
            }
            return 0 < (yield this.artikelService
                .artikelMcuuidByGcuuids(this.mid, globalArtikelIds)
                .then(items => {
                return items.length;
            }));
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #481');
            this.formError = '';
            console.log('save inventar');
            if (yield this.formValidate()) {
                const uuid = this.uuid;
                const result = yield this.inventarService.updateByUuid(uuid, this.inventarInput);
                if (result.success) {
                    this.inventarChanged.emit(result);
                    if (result.hersteller && result.hersteller.hid) {
                        this.inventarInput.hid = result.hersteller.hid;
                    }
                    else {
                        this.inventarInput.hid = null;
                    }
                    this.inventarInput.huuid = result.hersteller.uuid;
                    this.inventarInput.mcid = result.artikelRef.mcid;
                    this.inventarInput.mcuuid = result.artikelRef.uuid;
                    this.inventarInput.gcid = result.artikelData.gcid;
                    this.inventarInput.gcuuid = result.artikelData.uuid;
                }
                else {
                    this.formError = 'Daten konnten nicht aktualisiert werden!<br>';
                    return false;
                }
                return true;
            }
            else {
                this.formError = 'Bitte die Angaben vervollständigen, Raum darf noch nicht vergeben sein';
                return false;
            }
        });
    }
    applyItemAsArtikel(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('EditInventarComponent #509');
            this.applyItemAsInput(item);
            console.log('#361 applyItemAsArtikel', { item });
            if (!item.mcuuid) {
                let artikelRef = yield this.dataService.getArtikelRefByGcuuidMid(item.gcuuid, this.mid);
                if (!artikelRef) {
                    artikelRef = yield this.artikelService.insertArtikelRef(item);
                }
                item.mcid = artikelRef.mcid;
                item.mcuuid = artikelRef.uuid;
            }
            if (this.inventarDaten.inventar.mcuuid !== item.mcuuid) {
                yield this.inventarService.updateRefs(this.uuid, item.mcuuid, {
                    Zustand: this.inventarInput.Zustand,
                    code: this.inventarInput.code
                });
            }
            const result = yield this.inventarService.getInventar(this.uuid);
            this.inventarChanged.emit(result);
            return;
        });
    }
    applyItemAsInput(item) {
        console.log('EditInventarComponent #534');
        console.log('#367 applyItemAsInput', { item });
        this.inventarInput.Hersteller = item.Hersteller;
        this.inventarInput.hid = item.hid;
        this.inventarInput.Bezeichnung = item.Bezeichnung;
        this.inventarInput.Gruppe = item.Gruppe;
        this.inventarInput.Kategorie = item.Kategorie;
        this.inventarInput.Farbe = item.Farbe;
        this.inventarInput.Groesse = item.Groesse;
        this.inventarInput.Typ = item.Typ;
        return;
    }
    onInput(event) {
        console.log('EditInventarComponent #621');
        this.inputChanging.emit(event);
    }
    onChange(event) {
        this.inputChanged.emit(event);
    }
    onSelectHersteller(selected) {
        const foundHst = states.find((st) => st.Hersteller === selected.item);
        console.log('selected:', selected, 'selected.item: ', selected.item, 'foundHst:', foundHst);
        this.inventarInput.huuid = (foundHst) ? foundHst.uuid : null;
        console.log('this.artikelDaten.Hersteller: ', this.inventarInput.Hersteller, { selected });
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
    onSelectTypen(selected) {
        console.log('Typen selected', selected);
        this.inputChanged.emit();
    }
    onSelectFarben(selected) {
        console.log('Farben selected', selected);
        this.inputChanged.emit();
    }
    onSelectGroessen(selected) {
        console.log('Groessen selected', selected);
        this.inputChanged.emit();
    }
    onPageChange(page) {
        console.log('EditInventarComponent #678');
        this.collectionSize = this.listExistingArticleMatches.length;
        this.pageSize = 8;
        const start = (page - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.listExistingArticlePage = this.listExistingArticleMatches.slice(start, end);
        console.log('#599 pagination goto page', page, '.slice(', start, end, ') of', this.collectionSize);
    }
    onSubmit(event) {
        console.log('onSubmit', this.inventarInput);
        this.save();
    }
};
EditInventarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_4__["InventarService"] },
    { type: _data_services_artikel_service__WEBPACK_IMPORTED_MODULE_8__["ArtikelService"] },
    { type: _data_services_hersteller_service__WEBPACK_IMPORTED_MODULE_7__["HerstellerService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_9__["BasedataService"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "artikelSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "artikelSearching", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "artikelCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "herstellerChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "gruppeChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "inputChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "inputChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "inventarChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditInventarComponent.prototype, "scannerRequest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance', { static: true })
], EditInventarComponent.prototype, "instance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceGrp', { static: true })
], EditInventarComponent.prototype, "instanceGrp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceKtg', { static: true })
], EditInventarComponent.prototype, "instanceKtg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceTyp', { static: true })
], EditInventarComponent.prototype, "instanceTyp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceGrs', { static: true })
], EditInventarComponent.prototype, "instanceGrs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceFa', { static: true })
], EditInventarComponent.prototype, "instanceFa", void 0);
EditInventarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-inventar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-inventar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-inventar.component.scss */ "./src/app/pages/invent-form/modals/edit-inventar/edit-inventar.component.scss")).default]
    })
], EditInventarComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group-text {\n  min-width: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2VkaXQtcmF1bS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxlZGl0LXJhdW1cXGVkaXQtcmF1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2VkaXQtcmF1bS9lZGl0LXJhdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvZWRpdC1yYXVtL2VkaXQtcmF1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgbWluLXdpZHRoOiA0cmVtO1xyXG59XHJcbiIsIi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditRaumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRaumComponent", function() { return EditRaumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let EditRaumComponent = class EditRaumComponent {
    constructor(
    // private modalService: NgbModal,
    activeModal, raumService) {
        this.activeModal = activeModal;
        this.raumService = raumService;
        // faSearch = faSearch;
        this.faBarcode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBarcode"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCamera"];
        // faSignOutAlt = faSignOutAlt;
        this.raumExistsStatus = -1;
        this.bezeichnungExistsStatus = -1;
        this.raumDaten = null;
        this.etagen = [];
        this.validationErrors = [];
        this.raumInput = {
            gid: 0,
            Raum: '',
            Raumbezeichnung: '',
            Etage: '',
            code: ''
        };
        this.formIsValid = false;
        this.formError = '';
        this.raumSearching = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scannerRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchEtage = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(term => {
            return term.length >= 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(term => {
            // console.log('map and slice artikel by term', term, 'states', states);
            const matches = this.etagen
                .filter(item => new RegExp(term, 'mi').test(item))
                .slice(0, 10);
            // console.log('search ', { term, matches, etagen: this.etagen });
            return matches;
        }));
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called formValidate');
            this.validationErrors.length = 0;
            if (typeof this.raumInput.code === 'string' &&
                this.raumInput.code.trim().length > 0 &&
                this.raumInput.code !== this.raumDaten.code) {
                const codeExists = yield this.raumService.codeExistsInInventur(this.raumDaten.for_jobid, this.raumDaten.uuid, this.raumInput.code);
                if (codeExists) {
                    this.validationErrors.push('#96 Raum-Barcode ist bereits für einen anderen Raum vergeben!', JSON.stringify({ codeExists }));
                }
            }
            if (this.raumInput.Raum.trim().length > 0 && this.raumInput.Raum.trim() !== this.raumDaten.Raum) {
                if (yield this.raumService.raumExistsInInventur(this.raumDaten.for_jobid, this.raumDaten.uuid, this.raumInput.Raum)) {
                    this.validationErrors.push('Raum-Name ist bereits für einen anderen Raum vergeben!');
                }
            }
            this.formIsValid =
                this.raumInput.Raum.length > 0
                    && this.validationErrors.length === 0;
            console.log('called formValidate return ', this.formIsValid);
            return this.formIsValid;
        });
    }
    get raumUuid() {
        console.log('called get raumId() ', this.uuid);
        return this.uuid;
    }
    set raumUuid(uuid) {
        console.log('called set raumId', 'param', uuid, 'old-uuid', this.uuid);
        this.raumService.get(uuid).then(raum => {
            this.raumDaten = raum;
            if (raum) {
                this.uuid = raum.uuid;
                for (const inputFld of Object.keys(this.raumInput)) {
                    this.raumInput[inputFld] = raum[inputFld];
                }
                console.log('#128 edit-raum.component.ts set raumId(uuid: ' + uuid + ')', { raum, raumInput: Object.assign({}, this.raumInput) });
                this.etagen = [];
                this.raumService.getEtagenByGidInInventur(this.raumDaten.for_jobid, this.raumDaten.gid).then((etagen) => {
                    this.etagen = etagen;
                });
            }
            else {
                this.uuid = '';
            }
        }).catch(() => {
            this.raumDaten = null;
            this.uuid = '';
        });
    }
    checkIfRaumExists() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('check if raum exists');
            this.raumExistsStatus = -1;
            let raumExists = false;
            yield this.raumService
                .raumExists(this.gid, this.raumInput.Raum)
                .then(exists => {
                this.raumExistsStatus = exists ? 1 : 0;
                raumExists = exists;
            });
            yield this.formValidate();
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
                .raumBezeichnungExists(this.gid, this.raumInput.Raumbezeichnung)
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
            if (yield this.formValidate()) {
                console.log('save raumdaten ', this.raumInput);
                for (const col of Object.keys(this.raumDaten)) {
                }
                const result = yield this.raumService.updateByUuid(this.raumDaten.uuid, this.raumInput);
                console.log('save raumdaten result ', result);
                if (!result.success) {
                    this.formError = 'Daten konnten nicht aktualisiert werden!<br>' + result.errorMsg;
                    return false;
                }
                else {
                    this.raumChanged.emit(result.item);
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
        console.log('onSubmit', this.raumInput);
        this.save();
    }
};
EditRaumComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditRaumComponent.prototype, "raumSearching", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditRaumComponent.prototype, "raumChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditRaumComponent.prototype, "scannerRequest", void 0);
EditRaumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-raum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-raum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-raum.component.scss */ "./src/app/pages/invent-form/modals/edit-raum/edit-raum.component.scss")).default]
    })
], EditRaumComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LWRvbmUvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxwYWdlc1xcaW52ZW50LWZvcm1cXG1vZGFsc1xcZ2VzYW10LWxpc3QtZG9uZVxcZ2VzYW10LWxpc3QtZG9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LWRvbmUvZ2VzYW10LWxpc3QtZG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LWRvbmUvZ2VzYW10LWxpc3QtZG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbiIsIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GesamtListDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesamtListDoneComponent", function() { return GesamtListDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");
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
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchangeAlt"];
        this.raumSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    set gebaeude(gebaeude) {
        this.gebaeudeDaten = gebaeude;
        this.loadGebaeudeStat();
    }
    onSelectRaum(uuid) {
        this.raumSelected.emit(uuid);
        this.activeModal.close();
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
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GesamtListDoneComponent.prototype, "raumSelected", void 0);
GesamtListDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gesamt-list-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gesamt-list-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gesamt-list-done.component.scss */ "./src/app/pages/invent-form/modals/gesamt-list-done/gesamt-list-done.component.scss")).default]
    })
], GesamtListDoneComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LXJlc3QvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxwYWdlc1xcaW52ZW50LWZvcm1cXG1vZGFsc1xcZ2VzYW10LWxpc3QtcmVzdFxcZ2VzYW10LWxpc3QtcmVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LXJlc3QvZ2VzYW10LWxpc3QtcmVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL2dlc2FtdC1saXN0LXJlc3QvZ2VzYW10LWxpc3QtcmVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbiIsIi5tb2RhbC1oZWFkZXIubW9kYWwtaGVhZGVyLXdpdGgtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GesamtListRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesamtListRestComponent", function() { return GesamtListRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let GesamtListRestComponent = class GesamtListRestComponent {
    constructor(activeModal, baseData, raumData) {
        this.activeModal = activeModal;
        this.baseData = baseData;
        this.raumData = raumData;
        this.requestGesamtDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchangeAlt"];
    }
    ngOnInit() {
    }
    set gebaeude(gebaeude) {
        this.gebaeudeDaten = gebaeude;
        this.loadGebaeudeStat();
    }
    onSelectRaum(ruuid) {
        this.raumSelected.emit(ruuid);
        this.activeModal.close();
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
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__["RaumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GesamtListRestComponent.prototype, "raumSelected", void 0);
GesamtListRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gesamt-list-rest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gesamt-list-rest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gesamt-list-rest.component.scss */ "./src/app/pages/invent-form/modals/gesamt-list-rest/gesamt-list-rest.component.scss")).default]
    })
], GesamtListRestComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/imagebox/imagebox.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/imagebox/imagebox.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL21vZGFscy9pbWFnZWJveC9pbWFnZWJveC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/imagebox/imagebox.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/imagebox/imagebox.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageboxComponent", function() { return ImageboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








var HtmlImageLoadingStatus;
(function (HtmlImageLoadingStatus) {
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["Pending"] = 0] = "Pending";
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["Loading"] = 1] = "Loading";
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["Aborted"] = 2] = "Aborted";
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["Loaded"] = 3] = "Loaded";
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["NotFound"] = 4] = "NotFound";
    HtmlImageLoadingStatus[HtmlImageLoadingStatus["Error"] = 5] = "Error";
})(HtmlImageLoadingStatus || (HtmlImageLoadingStatus = {}));
let ImageboxComponent = class ImageboxComponent {
    constructor(dexie, imgService, activeModal, domSanitizer, toastr) {
        this.dexie = dexie;
        this.imgService = imgService;
        this.activeModal = activeModal;
        this.domSanitizer = domSanitizer;
        this.toastr = toastr;
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleLeft"];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleRight"];
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowAltCircleLeft"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowAltCircleRight"];
        this.faDot = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDotCircle"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.titel = '';
        this.htmlImageLoadingStatus = HtmlImageLoadingStatus;
        this.images = [];
        this.imageUuidList = [];
        this.numImages = 0;
        this.numImgFound = 0;
        this.numImgFinished = 0;
        this.numImgLoaded = 0;
        this.currImgIdx = 0;
        this.finishedLoading = false;
        this.currImg = null;
        this.prevImg = null;
        this.nextImg = null;
        this.error = '';
    }
    ngOnInit() {
    }
    setTitel(titel) {
        this.titel = titel;
    }
    setImagesUuids(uuids, currIdx = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ImageboxComponent.setImagesUuids #65', { uuids, currIdx });
            this.currImg = null;
            this.prevImg = null;
            this.nextImg = null;
            this.imageUuidList = uuids;
            this.numImages = this.imageUuidList.length;
            if (currIdx < 0) {
                this.currImgIdx = 0;
            }
            else if (currIdx > this.numImages - 1) {
                this.currImgIdx = this.numImages - 1;
            }
            else {
                this.currImgIdx = currIdx;
            }
            this.images.length = 0;
            this.images.length = this.imageUuidList.length;
            this.images.fill(null);
            console.log('ImageboxComponent.setImagesUuids #82 loadImage', { currIdx });
            yield this.loadImage(currIdx)
                .catch(reason => {
                console.error('Could not load Image', { reason });
            })
                .then((success) => {
                console.log('#86 loadImage(', currIdx, ') successful');
            });
            if (this.numImages > 1) {
                console.log('ImageboxComponent.setImagesUuids #82 loadImages');
                yield this.loadImages()
                    .catch(reason => {
                    console.error('#92 Could not load all Images', { reason });
                }).then((result) => {
                    console.log('#94 loaded all Images in List by loadImages() successful', { result });
                });
            }
            this.finishedLoading = true;
        });
    }
    loadImages() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dbImages = this.dexie.images;
            const thisImages = this.images;
            const numUuids = this.imageUuidList.length;
            let numResults = 0;
            let numFound = 0;
            let numFinished = 0;
            let numLoaded = 0;
            return new Promise((resolve, reject) => {
                const checkResolve = () => {
                    console.log('ImageboxComponent.setImagesUuids #102 loadImages checkResolve', numResults, numUuids, numFinished, numFound, numLoaded);
                    if (numResults === numUuids && numFinished === numFound) {
                        console.log('ImageboxComponent.setImagesUuids #104 loadImages checkResolve');
                        if (numFound === numUuids) {
                            console.log('ImageboxComponent.setImagesUuids #106 loadImages checkResolve resolve');
                            resolve(numLoaded);
                        }
                        else {
                            console.log('ImageboxComponent.setImagesUuids #109 loadImages checkResolve reject');
                            reject(numLoaded);
                        }
                    }
                };
                this.imageUuidList.map((uuid, idx) => {
                    console.log('ImageboxComponent #124', { uuid, idx }, thisImages[idx]);
                    if (thisImages[idx] !== null
                        && typeof thisImages[idx] === 'object'
                        && 'loadingStatus' in thisImages[idx]
                        && thisImages[idx].loadingStatus === HtmlImageLoadingStatus.Loaded) {
                        ++numResults;
                        ++numLoaded;
                        return;
                    }
                    dbImages.get(uuid)
                        .then(row => {
                        ++numResults;
                        if (!row) {
                            thisImages[idx] = {
                                uuid,
                                img: null,
                                loadingStatus: HtmlImageLoadingStatus.NotFound,
                                isDeletable: true,
                                isEditable: true
                            };
                            checkResolve();
                            return;
                        }
                        ++numFound;
                        console.log('ImageboxComponent #145', idx, thisImages[idx]);
                        if (thisImages[idx] !== null
                            && typeof thisImages[idx] === 'object'
                            && 'loadingStatus' in thisImages[idx]
                            && thisImages[idx].loadingStatus === HtmlImageLoadingStatus.Loaded) {
                            ++numLoaded;
                            checkResolve();
                            return;
                        }
                        ++this.numImgFound;
                        thisImages[idx] = {
                            uuid,
                            name: row.name,
                            width: row.width,
                            height: row.height,
                            type: row.type,
                            desc: row.desc,
                            loadingStatus: HtmlImageLoadingStatus.Loading,
                            isDeletable: true,
                            isEditable: true,
                            img: new Image()
                        };
                        thisImages[idx].img.onload = (ev) => {
                            ++numFinished;
                            ++numLoaded;
                            ++this.numImgLoaded;
                            ++this.numImgFinished;
                            thisImages[idx].loadingStatus = HtmlImageLoadingStatus.Loaded;
                            console.log('successfull loaded ' + idx + '=' + thisImages[idx].img.src);
                            checkResolve();
                        };
                        thisImages[idx].img.onerror = (ev) => {
                            ++numFinished;
                            ++this.numImgFinished;
                            thisImages[idx].loadingStatus = HtmlImageLoadingStatus.Error;
                            checkResolve();
                        };
                        thisImages[idx].img.onabort = (ev) => {
                            ++numFinished;
                            ++this.numImgFinished;
                            thisImages[idx].loadingStatus = HtmlImageLoadingStatus.Aborted;
                            checkResolve();
                        };
                        thisImages[idx].img.src = row.data_url.replace(/(\r\n|\n|\r)/gm, '');
                    }).catch(reason => {
                        ++numResults;
                        ++this.numImgFinished;
                        thisImages[idx].loadingStatus = HtmlImageLoadingStatus.NotFound;
                        checkResolve();
                    });
                });
                checkResolve();
            });
        });
    }
    prev() {
        this.loadImage(this.currImgIdx - 1);
    }
    next() {
        this.loadImage(this.currImgIdx + 1);
    }
    delete(imgUuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let delUuid = imgUuid;
            console.log('ImageboxComponent.delete() #236 this.images.length:', this.images.length);
            const idx = this.imageUuidList.indexOf(imgUuid);
            let numDeleted = 0;
            if (idx === -1) {
                console.error('ImageboxComponent.delete(' + imgUuid + ') #230 Image not found');
                // alert('Bild kann nicht gelöscht werden. Unbekannte Bild-ID: ' + imgUuid);
                this.toastr.error('Fehler beim Löschen: Unbekannte Bild-ID ' + imgUuid);
                return;
            }
            if (!confirm('Möchten Sie das Bild wirklich löschen?')) {
                return false;
            }
            if (imgUuid) {
                numDeleted = yield this.imgService.deleteByUuid(imgUuid);
                if (numDeleted) {
                    this.toastr.success('Bild wurde gelöscht ' + imgUuid);
                }
            }
            if (!numDeleted) {
                console.error('ImageboxComponent.delete(' + imgUuid + ') #247 wurde nicht gelöscht');
                this.toastr.error('Bild konnte nicht gelöscht werden. Bild-ID: ' + imgUuid, 'Fehler');
                return;
            }
            const len = this.imageUuidList.length;
            const newLen = len - 1;
            for (let i = idx; i < len; ++i) {
                if (i < newLen) {
                    this.imageUuidList[i] = this.imageUuidList[i + 1];
                    this.images[i] = this.images[i + 1];
                }
            }
            this.imageUuidList.length = newLen;
            this.images.length = newLen;
            this.numImages = newLen;
            if (idx < this.images.length && this.images[idx]) {
                this.currImgIdx = idx;
                this.currImg = this.images[idx];
            }
            else if (this.images.length > 0) {
                this.currImgIdx = this.images.length - 1;
                this.currImg = this.images[this.currImgIdx];
            }
            else {
                this.currImg = null;
                this.currImgIdx = 0;
            }
        });
    }
    loadImage(imgIdx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ImageboxComponent.setImagesUuids #195 loadImage(', imgIdx, ')');
            return new Promise((resolve, reject) => {
                if (imgIdx < 0) {
                    imgIdx = this.numImages - 1;
                }
                else if (imgIdx > this.numImages - 1) {
                    imgIdx = 0;
                }
                if (!this.imageUuidList[imgIdx]) {
                    // Error
                    this.error = 'Mit dem Index ' + imgIdx + ' ist keine Datei hinterlegt!';
                    console.log('ImageboxComponent.setImagesUuids #205 loadImage(', imgIdx, ') reject');
                    reject(false);
                    return null;
                }
                console.log('ImageboxComponent #220', imgIdx, this.images[imgIdx]);
                if (this.images[imgIdx] !== null
                    && typeof this.images[imgIdx] === 'object'
                    && 'img' in this.images[imgIdx]
                    && 'loadingStatus' in this.images[imgIdx]
                    && this.images[imgIdx].loadingStatus === HtmlImageLoadingStatus.Loaded) {
                    this.currImgIdx = imgIdx;
                    this.currImg = this.images[imgIdx];
                    console.log('ImageboxComponent.setImagesUuids #215 loadImage(', imgIdx, ') resolve');
                    resolve(true);
                    return;
                }
                const uuid = this.imageUuidList[imgIdx];
                if (this.images[imgIdx] === null) {
                    this.images[imgIdx] = {
                        uuid,
                        img: null,
                        loadingStatus: HtmlImageLoadingStatus.Pending,
                        isDeletable: true,
                        isEditable: true
                    };
                }
                else {
                    this.images[imgIdx].loadingStatus = HtmlImageLoadingStatus.Pending;
                }
                this.dexie.images.where({ uuid }).first()
                    .then(row => {
                    if (!row) {
                        this.error = 'In der Datenbank wurde kein Bild mit UUID ' + uuid + ' gefunden!';
                        return;
                    }
                    ++this.numImgFound;
                    this.images[imgIdx] = {
                        uuid,
                        name: row.name,
                        width: row.width,
                        height: row.height,
                        type: row.type,
                        desc: row.desc,
                        loadingStatus: HtmlImageLoadingStatus.Loading,
                        isDeletable: true,
                        isEditable: true,
                        img: new Image()
                    };
                    this.images[imgIdx].img.onload = (ev) => {
                        ++this.numImgLoaded;
                        ++this.numImgFinished;
                        this.currImgIdx = imgIdx;
                        this.currImg = this.images[imgIdx];
                        this.images[imgIdx].loadingStatus = HtmlImageLoadingStatus.Loaded;
                        console.log('ImageboxComponent.setImagesUuids #237 loadImage(', imgIdx, ') resolve');
                        console.log('successfull loaded ' + imgIdx + '=' + this.images[imgIdx].img.src);
                        resolve(true);
                    };
                    this.images[imgIdx].img.onerror = (ev) => {
                        ++this.numImgFinished;
                        this.images[imgIdx].loadingStatus = HtmlImageLoadingStatus.Error;
                        this.error = 'Bild ' + row.name + ' konnte nicht geladen werden!';
                        console.error('ImageboxComponent.setImagesUuids #243 loadImage(', imgIdx, ') reject');
                        console.error('row.data_url = ', row.data_url);
                        console.error(ev);
                        reject(false);
                    };
                    this.images[imgIdx].img.onabort = (ev) => {
                        ++this.numImgFinished;
                        this.images[imgIdx].loadingStatus = HtmlImageLoadingStatus.Aborted;
                        this.error = 'Der Ladeprozess für das Bild ' + row.name + ' wurde abgebrochen!';
                        console.error('ImageboxComponent.setImagesUuids #249 loadImage(', imgIdx, ') reject');
                        console.error(ev);
                        reject(false);
                    };
                    this.images[imgIdx].img.src = row.data_url.replace(/(\r\n|\n|\r)/gm, '');
                    // this.images[imgIdx].loadingStatus = HtmlImageLoadingStatus.Loaded;
                })
                    .catch(reason => {
                    this.error = 'DB(Dexie) Afragefehler ' + JSON.stringify(reason || '');
                    console.error('#288 this.dexie.images.get(', uuid, ')');
                    console.error(reason);
                    reject(false);
                });
            });
        });
    }
};
ImageboxComponent.ctorParameters = () => [
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_5__["ImagesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currentImage', { static: true })
], ImageboxComponent.prototype, "currentImage", void 0);
ImageboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imagebox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imagebox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/imagebox/imagebox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imagebox.component.scss */ "./src/app/pages/invent-form/modals/imagebox/imagebox.component.scss")).default]
    })
], ImageboxComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  flex-direction: row-reverse;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3JhdW0tbGlzdC1kb25lL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxccGFnZXNcXGludmVudC1mb3JtXFxtb2RhbHNcXHJhdW0tbGlzdC1kb25lXFxyYXVtLWxpc3QtZG9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3JhdW0tbGlzdC1kb25lL3JhdW0tbGlzdC1kb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvcmF1bS1saXN0LWRvbmUvcmF1bS1saXN0LWRvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iLCIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RaumListDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumListDoneComponent", function() { return RaumListDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/pages/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let RaumListDoneComponent = class RaumListDoneComponent {
    constructor(activeModal, inventarService, baseData) {
        this.activeModal = activeModal;
        this.inventarService = inventarService;
        this.baseData = baseData;
        this.requestRestList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchangeAlt"];
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
        this.loadInventarByRuuid(raum.uuid).then(() => {
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
    loadInventarByRuuid(ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const groupedList = [];
            console.log('#54 getHello:', this.inventarService.getHello());
            return this.inventarService.getInventarListDoneByRaumUuid(ruuid, jobid)
                .then(list => {
                this.inventarDetailList = list;
                console.log('loadInventarByRuuid #70 list: ', list);
                this.inventarListGrouped = this.inventarDetailList
                    .sort((a, b) => a.inventar.mcuuid > b.inventar.mcuuid ? -1
                    : (a.inventar.mcuuid < b.inventar.mcuuid ? 1 : 0))
                    .reduce((gList, item) => {
                    console.log('loadInventarByRuuid #70 reduce list, currentItem ', item);
                    if (!item) {
                        return gList;
                    }
                    const l = gList.length;
                    const i = l - 1;
                    const artikelData = item.artikelData || { Bezeichnung: '?[Fehlende Katalogdaten]', Typ: '' };
                    if (!l || gList[i].mcuuid !== item.inventar.mcuuid) {
                        gList[l] = {
                            mcuuid: item.inventar.mcuuid,
                            Bezeichnung: artikelData.Bezeichnung || '',
                            Typ: item.inventar.Typ || artikelData.Typ || '',
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
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RaumListDoneComponent.prototype, "requestRestList", void 0);
RaumListDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raum-list-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raum-list-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raum-list-done.component.scss */ "./src/app/pages/invent-form/modals/raum-list-done/raum-list-done.component.scss")).default]
    })
], RaumListDoneComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-fb-align-right {\n  flex-direction: row-reverse;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3JhdW0tbGlzdC1yZXN0L0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxccGFnZXNcXGludmVudC1mb3JtXFxtb2RhbHNcXHJhdW0tbGlzdC1yZXN0XFxyYXVtLWxpc3QtcmVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3JhdW0tbGlzdC1yZXN0L3JhdW0tbGlzdC1yZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnQtZm9ybS9tb2RhbHMvcmF1bS1saXN0LXJlc3QvcmF1bS1saXN0LXJlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci1mYi1hbGlnbi1yaWdodCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItZmItYWxpZ24tcmlnaHQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RaumListRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaumListRestComponent", function() { return RaumListRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_services_inventar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-services/inventar.service */ "./src/app/pages/invent-form/data-services/inventar.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let RaumListRestComponent = class RaumListRestComponent {
    constructor(activeModal, inventarService, baseData) {
        this.activeModal = activeModal;
        this.inventarService = inventarService;
        this.baseData = baseData;
        this.requestDoneList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchangeAlt"];
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
        if (raum === null || raum === undefined || (typeof raum === 'object' && !('uuid' in raum))) {
            // Do Nothing
            return;
        }
        this.loadInventarByRuuid(raum.uuid).then(() => {
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
    loadInventarByRuuid(ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const groupedList = [];
            console.log('#54 getHello:', this.inventarService.getHello());
            return this.inventarService.getInventarListRestByRaumUuid(ruuid, jobid)
                .then(list => {
                this.inventarDetailList = list;
                this.inventarListGrouped = this.inventarDetailList
                    .sort((a, b) => a.inventar.mcuuid > b.inventar.mcuuid ? -1
                    : (a.inventar.mcuuid < b.inventar.mcuuid ? 1 : 0))
                    .reduce((gList, item) => {
                    const l = gList.length;
                    const i = l - 1;
                    if (!l || gList[i].mcuuid !== item.inventar.mcuuid) {
                        gList[l] = {
                            mcuuid: item.inventar.mcuuid,
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
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RaumListRestComponent.prototype, "requestDoneList", void 0);
RaumListRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raum-list-rest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raum-list-rest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raum-list-rest.component.scss */ "./src/app/pages/invent-form/modals/raum-list-rest/raum-list-rest.component.scss")).default]
    })
], RaumListRestComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/scanner/scanner.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/scanner/scanner.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.bg-danger::-moz-placeholder {\n  color: #ffffff;\n}\n\ninput.bg-danger::placeholder {\n  color: #ffffff;\n}\n\n.scanner-view-port {\n  position: relative;\n  height: auto;\n  overflow-y: hidden;\n  width: 100%;\n}\n\nzxing-scanner::ng-deep video {\n  height: 5rem;\n  width: 100%;\n}\n\n#ScannerFocusRedLine {\n  position: absolute;\n  left: 5%;\n  width: 90%;\n  top: 50%;\n  border: 0;\n  border-top: 1rem solid rgba(255, 0, 0, 0.5);\n  margin-top: -0.5rem;\n}\n\n#barcodeChangedPart {\n  color: blue;\n}\n\n.with-pulse-effect {\n  -webkit-animation: enter-animation 2s ease;\n          animation: enter-animation 2s ease;\n}\n\n@-webkit-keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n\n@keyframes enter-animation {\n  0% {\n    box-shadow: 0px 0px 0px 0px #2382dc;\n    color: black;\n  }\n  100% {\n    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);\n    color: blue;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NjYW5uZXIvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxwYWdlc1xcaW52ZW50LWZvcm1cXG1vZGFsc1xcc2Nhbm5lclxcc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NjYW5uZXIvc2Nhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QUREQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUNBRjs7QURJQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxZQUFBO0VDREY7RURHQTtJQUNFLGtEQUFBO0lBQ0EsV0FBQTtFQ0RGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsWUFBQTtFQ0RGO0VER0E7SUFDRSxrREFBQTtJQUNBLFdBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NjYW5uZXIvc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5iZy1kYW5nZXI6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNjYW5uZXItdmlldy1wb3J0IHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBoZWlnaHQ6YXV0bztcclxuICBvdmVyZmxvdy15OmhpZGRlbjtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG56eGluZy1zY2FubmVyOjpuZy1kZWVwIHZpZGVvIHtcclxuICBoZWlnaHQ6NXJlbTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4jU2Nhbm5lckZvY3VzUmVkTGluZSB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDo1JTtcclxuICB3aWR0aDo5MCU7XHJcbiAgdG9wOjUwJTtcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItdG9wOjFyZW0gc29saWQgcmdiYSgyNTUsMCwwLC41KTtcclxuICBtYXJnaW4tdG9wOi0wLjVyZW1cclxufVxyXG5cclxuI2JhcmNvZGVDaGFuZ2VkUGFydCB7XHJcbiAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLndpdGgtcHVsc2UtZWZmZWN0IHtcclxuICBhbmltYXRpb246IGVudGVyLWFuaW1hdGlvbiAycyBlYXNlO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBlbnRlci1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDM1LCAxMzAsIDIyMCwxKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAyNXB4IHJnYmEoMzUsIDEzMCwgMjIwLDApO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0LmJnLWRhbmdlcjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNjYW5uZXItdmlldy1wb3J0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnp4aW5nLXNjYW5uZXI6Om5nLWRlZXAgdmlkZW8ge1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jU2Nhbm5lckZvY3VzUmVkTGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIHdpZHRoOiA5MCU7XG4gIHRvcDogNTAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XG59XG5cbiNiYXJjb2RlQ2hhbmdlZFBhcnQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLndpdGgtcHVsc2UtZWZmZWN0IHtcbiAgYW5pbWF0aW9uOiBlbnRlci1hbmltYXRpb24gMnMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBlbnRlci1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMyMzgyZGM7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDI1cHggcmdiYSgzNSwgMTMwLCAyMjAsIDApO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/scanner/scanner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/scanner/scanner.component.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/variables.service */ "./src/app/shared/services/variables.service.ts");












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
    activeModal, dataService, bcLookup, imageService, baseData, variables) {
        this.activeModal = activeModal;
        this.dataService = dataService;
        this.bcLookup = bcLookup;
        this.imageService = imageService;
        this.baseData = baseData;
        this.variables = variables;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheck"];
        this.faRemove = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrashAlt"];
        this.currentDevice = null;
        this.onScan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatsEnabled = [
            _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].CODE_128
            // , BarcodeFormat.DATA_MATRIX
            // , BarcodeFormat.EAN_13
            // , BarcodeFormat.QR_CODE
        ];
        this.allowBarcodeInput = false;
        this.scanResultHistory = [];
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.tryHarder = false;
    }
    ngOnInit() {
        this.jobid = this.baseData.getCurrentJobid();
        this.variables.get('manualBarcodeInput', false).then((status) => {
            this.allowBarcodeInput = status;
        });
    }
    clearResult() {
        this.qrResultString = null;
        this.scanResultCurrent = null;
    }
    bctest(test) {
        console.log({ test });
        if (typeof test === 'string' && test.length) {
            this.onCodeResult(test);
        }
    }
    applyResult() {
        const emitScanResult = {
            barcode: this.scanBCLookupSimpleResult.barcode,
            length: this.scanBCLookupSimpleResult.barcode.length,
            valid: true,
            result: this.scanBCLookupSimpleResult
        };
        console.log('apply applyResult ', { emitScanResult });
        this.onScan.emit(emitScanResult);
    }
    bcLookupTypToString(typ) {
        return bcLookupTyp[typ];
    }
    showResult(result) {
        this.scanBCLookupSimpleResult = result;
        this.scannedBarcodeInfoImg = result.image;
        let bezeichnung = '';
        switch (result.lookupResultTable) {
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].None:
                bezeichnung = 'Neuer Barcode';
                this.scannedBarcodeRsltTyp = bcLookupTyp.Neu;
                this.scannedBarcodeInfos = this.bcInfoToString({
                    Gefunden: 'Neuer oder unbekannter Barcode'
                });
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].Raeume:
                const g = (result.gebaeude.Gebaeude || result.gebaeude.Adresse);
                if (g) {
                    bezeichnung += `${g} :: `;
                }
                bezeichnung += result.raum.Raum;
                if (result.raum.Raumbezeichnung) {
                    bezeichnung += ' / ' + result.raum.Raumbezeichnung;
                }
                if (result.raum.Etage) {
                    bezeichnung += ' :: ' + result.raum.Etage;
                }
                bezeichnung = (result.gebaeude.Gebaeude || result.gebaeude.Adresse);
                this.scannedBarcodeRsltTyp = bcLookupTyp.Raum;
                this.scannedBarcodeInfos = bezeichnung;
                this.bcInfoToString({
                    Gefunden: 'Raum',
                    Gebaeude: result.gebaeude.Gebaeude || result.gebaeude.Adresse,
                    Raum: result.raum.Raum,
                    Bezg: result.raum.Raumbezeichnung,
                    Etage: result.raum.Etage
                });
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].Inventar:
                if (result.artikelData.Typ) {
                    bezeichnung = result.artikelData.Typ + ' :: ';
                }
                bezeichnung += result.artikelData.Bezeichnung;
                if (result.artikelData.Farbe) {
                    bezeichnung += ' :: ' + result.artikelData.Farbe;
                }
                if (result.artikelData.Groesse) {
                    bezeichnung += ' :: ' + result.artikelData.Groesse;
                }
                if (result.artikelData.Kategorie) {
                    bezeichnung += ' :: ' + result.artikelData.Kategorie;
                }
                this.scannedBarcodeRsltTyp = bcLookupTyp.Inventar;
                this.scannedBarcodeInfos = bezeichnung;
                this.bcInfoToString({
                    Gefunden: 'Inventar',
                    InventarNr: result.inventar.iv_nr,
                    Bezeichnung: result.artikelData.Bezeichnung,
                    Typ: result.artikelData.Typ,
                    Farbe: result.artikelData.Farbe,
                    Groesse: result.artikelData.Groesse,
                    Kategorie: result.artikelData.Kategorie
                });
                break;
            case _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"].ObjektKatalogMandant:
                bezeichnung = result.artikelData.Bezeichnung;
                if (result.artikelData.Farbe) {
                    bezeichnung += ' :: ' + result.artikelData.Farbe;
                }
                if (result.artikelData.Groesse) {
                    bezeichnung += ' :: ' + result.artikelData.Groesse;
                }
                if (result.artikelData.Kategorie) {
                    bezeichnung += ' :: ' + result.artikelData.Kategorie;
                }
                this.scannedBarcodeRsltTyp = bcLookupTyp.Artikel;
                this.scannedBarcodeInfos = bezeichnung;
                this.bcInfoToString({
                    Gefunden: 'Artikel',
                    Bezeichnung: result.artikelData.Bezeichnung,
                    Typ: result.artikelData.Typ,
                    Farbe: result.artikelData.Farbe,
                    Groesse: result.artikelData.Groesse,
                    Kategorie: result.artikelData.Kategorie
                });
                break;
            default:
                bezeichnung = 'Unerwartetes Ergebnis';
                this.scannedBarcodeRsltTyp = bcLookupTyp.Unbekannt;
                this.scannedBarcodeInfos = bezeichnung;
                this.bcInfoToString({
                    Gefunden: 'Unerwartetes Ergebnis',
                    Objekt: _shared_interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_7__["LookupResultTable"][result.lookupResultTable]
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
        const lastResult = this.scanResultCurrent;
        if (this.scannedBarcodeInfoImg && this.scannedBarcodeInfoImg.mcuuid) {
            this.loadImageByMcuuid(this.scannedBarcodeInfoImg.mcuuid).then(img => {
                if (this.scanResultCurrent === lastResult) {
                    this.scanResultCurrent.image.data_url = img.data_url;
                }
                else {
                    const lastResultFound = this.scanResultHistory.find(r => r === lastResult);
                    if (lastResultFound) {
                        lastResultFound.image.data_url = img.data_url;
                    }
                }
            });
        }
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
        this.scanResultHistory = this.scanResultHistory.filter(r => r !== result);
        console.log('remove Result', { result });
        // alert(JSON.stringify(result));
    }
    applyHistoryResult(result) {
        const emitScanResult = {
            barcode: this.scanBCLookupSimpleResult.barcode,
            length: this.scanBCLookupSimpleResult.barcode.length,
            valid: true,
            result: this.scanBCLookupSimpleResult
        };
        console.log('apply applyHistoryResult', { emitScanResult });
        this.onScan.emit(emitScanResult);
    }
    clearHistory() {
        this.scanResultHistory = [];
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        // this.allowBarcodeInput = false;
        this.hasDevices = Boolean(devices && devices.length);
        if (this.hasDevices) {
            for (const dev of this.availableDevices) {
                console.log('found camera mediaDeviceInfo: ', dev);
            }
        }
    }
    bcInfoToString(json) {
        return JSON.stringify(json).substr(1).split('').slice(0, -1).join('');
        let tbl = '<table>';
        for (const k of Object.keys(json)) {
            tbl += '<tr><th>' + k + '</th><td>' + json[k] + '</td>';
        }
        tbl += '</table>';
        return tbl;
    }
    onCodeResult(resultString) {
        // const resultString = '0000037536';
        // const oldBarcode: string = this.scannedBarcode || '';
        this.scannedBarcode = resultString;
        this.scannedBarcodeInfos = '';
        this.scannedBarcodeInfoImg = null;
        this.bcLookup.fullLookup(resultString, this.jobid).then((result) => {
            this.showResult(result);
        });
    }
    loadImageByMcuuid(mcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', mcuuid);
            if (mcuuid) {
                return this.imageService.getImageByMcuuid(mcuuid)
                    .then(image => {
                    return image;
                })
                    .catch(err => {
                    console.error(err);
                    return null;
                });
            }
            else {
                return null;
            }
        });
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
        // this.allowBarcodeInput = !device;
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
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _data_services_barcode_service__WEBPACK_IMPORTED_MODULE_6__["BarcodeService"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_10__["BasedataService"] },
    { type: _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_11__["VariablesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scanner', { static: true })
], ScannerComponent.prototype, "scanner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barcodeChangedPart', { static: true })
], ScannerComponent.prototype, "barcodeChangedPart", void 0);
ScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/scanner/scanner.component.html")).default,
        animations: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scanner.component.scss */ "./src/app/pages/invent-form/modals/scanner/scanner.component.scss")).default]
    })
], ScannerComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.card-body,\n.card-footer {\n  padding: 0.5rem;\n}\n\n.artikel-form .input-group-prepend .input-group-text {\n  min-width: 4rem;\n}\n\n.artikel-form.artikel-form-kunst .input-group-prepend .input-group-text {\n  min-width: 5.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtYXJ0aWtlbC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzZWxlY3QtY3JlYXRlLWFydGlrZWxcXHNlbGVjdC1jcmVhdGUtYXJ0aWtlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtYXJ0aWtlbC9zZWxlY3QtY3JlYXRlLWFydGlrZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTs7RUFFRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtYXJ0aWtlbC9zZWxlY3QtY3JlYXRlLWFydGlrZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLmNhcmQtYm9keSxcclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hcnRpa2VsLWZvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIG1pbi13aWR0aDo0cmVtO1xyXG59XHJcblxyXG4uYXJ0aWtlbC1mb3JtLmFydGlrZWwtZm9ybS1rdW5zdCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgbWluLXdpZHRoOjUuNXJlbTtcclxufVxyXG4iLCIubW9kYWwtaGVhZGVyLm1vZGFsLWhlYWRlci13aXRoLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uY2FyZC1ib2R5LFxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uYXJ0aWtlbC1mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuXG4uYXJ0aWtlbC1mb3JtLmFydGlrZWwtZm9ybS1rdW5zdCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIG1pbi13aWR0aDogNS41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ArtikelFormType, SelectCreateArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtikelFormType", function() { return ArtikelFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCreateArtikelComponent", function() { return SelectCreateArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_artikel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/artikel.service */ "./src/app/pages/invent-form/data-services/artikel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_services_hersteller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-services/hersteller.service */ "./src/app/pages/invent-form/data-services/hersteller.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");










const states = [];
const stateNames = [];
const artikelGruppen = [];
const artikelKategorien = [];
const artikelTypen = [];
const artikelGroessen = [];
const artikelFarben = [];
const gruppenKategorien = [];
var ArtikelFormType;
(function (ArtikelFormType) {
    ArtikelFormType[ArtikelFormType["Inventar"] = 0] = "Inventar";
    ArtikelFormType[ArtikelFormType["Kunst"] = 1] = "Kunst";
})(ArtikelFormType || (ArtikelFormType = {}));
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
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
        this.ArtikelExistsStatus = -1;
        this.numBezeichnungExists = -1;
        this.artikelDaten = {
            mid: 0,
            mcid: 0,
            mcuuid: '',
            gcid: 0,
            gcuuid: '',
            Bezeichnung: '',
            Gruppe: '',
            Kategorie: '',
            Typ: '',
            Hersteller: '',
            huuid: '',
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
        this.formTitle = 'Neuen Artikel anlegen';
        this.formType = ArtikelFormType.Inventar;
        this.formTypeInventar = ArtikelFormType.Inventar;
        this.formTypeKunst = ArtikelFormType.Kunst;
        this.formLabels = {
            Hersteller: {
                isVisible: true,
                label: 'Hersteller',
                labelShort: 'HST',
                placeholder: 'Hersteller'
            },
            Gruppe: {
                isVisible: true,
                label: 'Gruppe',
                labelShort: 'GRP',
                placeholder: 'Gruppe'
            },
            Kategorie: {
                isVisible: true,
                label: 'Kategorie',
                labelShort: 'KTG',
                placeholder: 'Kategorie'
            },
            Bezeichnung: {
                isVisible: true,
                label: 'Bezeichnung',
                labelShort: 'BEZ',
                placeholder: 'Artikel-Bezeichnung'
            },
            Typ: {
                isVisible: true,
                label: 'Typ',
                labelShort: 'TYP',
                placeholder: 'Artikel-Typ'
            },
            Groesse: {
                isVisible: true,
                label: 'Groesse',
                labelShort: 'Größe',
                placeholder: 'Größe / Abmessungen'
            },
            Farbe: {
                isVisible: true,
                label: 'Farbe',
                labelShort: 'Farbe',
                placeholder: 'Artikelfarbe'
            }
        };
        this.formLabelsInventar = this.formLabels;
        this.formatter = (state) => state;
        this.search = (text$) => {
            const isPopupOpen = (typeof this.instance === 'object' && this.instance instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instance.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? stateNames
                : stateNames.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGruppen = (text$) => {
            const isPopupOpen = (typeof this.instanceGrp === 'object' && this.instanceGrp instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instanceGrp.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickGrp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focusGrp$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelGruppen
                : artikelGruppen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchKategorien = (text$) => {
            const isPopupOpen = (typeof this.instanceKtg === 'object' && this.instanceKtg instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instanceKtg.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickKtg$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focusKtg$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelKategorien
                : artikelKategorien.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchTypen = (text$) => {
            const isPopupOpen = (typeof this.instanceTyp === 'object' && this.instanceTyp instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instanceTyp.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickTyp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focusTyp$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelTypen
                : artikelTypen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchGroessen = (text$) => {
            const isPopupOpen = (typeof this.instanceGrs === 'object' && this.instanceGrs instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instanceGrs.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickGrs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focusGrs$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelGroessen
                : artikelGroessen.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
        this.searchFarben = (text$) => {
            const isPopupOpen = (typeof this.instanceFa === 'object' && this.instanceFa instanceof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
                ? this.instanceFa.isPopupOpen()
                : false;
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickFa$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => !isPopupOpen));
            const inputFocus$ = this.focusFa$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(term => (term === '' ? artikelFarben
                : artikelFarben.filter(item => new RegExp(term, 'mi').test(item))).slice(0, 10)));
        };
    }
    ngOnInit() {
        this.herstellerService.getAllHerstellerWithUuids().then(list => {
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
            // this.checkIfArtikelExistsMandant();
            this.delegateListArticleMatches(500);
            if (this.artikelDaten.Kategorie === 'Kunst' && this.formType !== ArtikelFormType.Kunst) {
                this.setKunstFormLabels();
            }
            else if (this.artikelDaten.Kategorie !== 'Kunst' && this.formType === ArtikelFormType.Kunst) {
                this.setInventarFormLabels();
            }
        });
    }
    setFormType(type) {
        this.formType = type;
        if (type === ArtikelFormType.Inventar) {
            this.formTitle = 'Neuen Artikel anlegen';
            this.setInventarFormLabels();
        }
        else if (type === ArtikelFormType.Kunst) {
            this.formTitle = 'Neues Kunstobjekt anlegen';
            this.setKunstForm({ Kategorie: 'Kunst' });
        }
    }
    setInventarFormLabels() {
        for (const lbl in Object.keys(this.formLabelsInventar)) {
            if (this.formLabelsInventar.hasOwnProperty(lbl)) {
                this.formLabels[lbl].isVisible = this.formLabelsInventar[lbl].isVisible;
                this.formLabels[lbl].label = this.formLabelsInventar[lbl].label;
                this.formLabels[lbl].labelShort = this.formLabelsInventar[lbl].labelShort;
            }
        }
    }
    setKunstForm(vals) {
        this.setKunstFormLabels();
        if (vals) {
            this.setFormValues(vals);
        }
    }
    setKunstFormLabels() {
        this.formLabels.Bezeichnung.label = 'Titel';
        this.formLabels.Bezeichnung.labelShort = 'Titel';
        this.formLabels.Bezeichnung.placeholder = 'Titel';
        this.formLabels.Typ.label = 'Künstler';
        this.formLabels.Typ.labelShort = 'Künstler';
        this.formLabels.Typ.placeholder = 'Künstler';
        this.artikelDaten.Kategorie = 'Kunst';
    }
    setFormValues(vals) {
        for (const fld in vals) {
            if (vals.hasOwnProperty(fld) && this.artikelDaten[fld]) {
                this.artikelDaten[fld] = vals[fld];
            }
        }
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
            const where = this.getWhereInputsOf(['huuid']);
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
            const where = this.getWhereInputsOf(['huuid']);
            this.artikelService.getGroupedArtikelTypen(where).then(list => {
                artikelTypen.length = 0;
                list.forEach((it) => artikelTypen.push(it));
            });
        });
    }
    rebuildTypeaheadGroessen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['huuid']);
            this.artikelService.getGroupedArtikelGroessen(where).then(list => {
                artikelGroessen.length = 0;
                list.forEach((it) => artikelGroessen.push(it));
            });
        });
    }
    rebuildTypeaheadFarben() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const where = this.getWhereInputsOf(['huuid']);
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
                this.herstellerExistsStatus.uuid = null;
            }
            if (term.length) {
                this.herstellerExistsStatus.isQuerying = true;
                return yield this.herstellerService.getByName(term).then((data) => {
                    this.herstellerExistsStatus.data = data;
                    this.herstellerExistsStatus.isQuerying = false;
                    if (data !== null && data !== undefined) {
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
            const huuid = this.herstellerExistsStatus.uuid;
            for (const k of ['Bezeichnung', 'Typ', 'Kategorie', 'Gruppe', 'Groesse', 'Farbe']) {
                if (d[k]) {
                    oCheckData[k] = d[k];
                }
            }
            this.listExistingArticleMatches = yield this.artikelService.listArticleByProperties(mid, huuid, oCheckData);
            this.page = 1;
            this.onPageChange(this.page);
            console.log('finished listArticleMatches with results.count: ', this.listExistingArticleMatches.length, ' for', { mid, huuid, oCheckData });
        });
    }
    applyItemAsArtikel(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#361 applyItemAsArtikel', { item });
            if (!item.mcuuid) {
                let artikelRef = yield this.dataService.getArtikelRefByGcuuidMid(item.gcuuid, this.clientId);
                if (!artikelRef) {
                    artikelRef = yield this.artikelService.insertArtikelRef(item);
                }
                item.mcid = artikelRef.mcid;
                item.mcuuid = artikelRef.uuid;
            }
            this.artikelSelected.emit({
                uuid: item.mcuuid,
                mcuuid: item.mcuuid,
                name: item.Bezeichnung
            });
            return;
        });
    }
    applyItemAsInput(item) {
        console.log('#367 applyItemAsInput', { item });
        this.artikelDaten.Hersteller = item.Hersteller;
        this.artikelDaten.huuid = item.huuid;
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
        this.artikelDaten.huuid = (foundHst) ? foundHst.uuid : null;
        console.log('SelectCreateArtikel onSelectHersteller this.artikelDaten.Hersteller: ', this.artikelDaten.Hersteller, { selected, foundHst });
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
        this.formIsValid =
            this.artikelDaten.Bezeichnung.length > 0
                && this.numBezeichnungExists === 0;
        console.log('called formValidate return ', this.formIsValid);
        return this.formIsValid;
    }
    showSearchForm(event) {
        this.artikelSearching.emit(1);
        this.activeModal.close();
    }
    get gebaeudeId() {
        return this.gid;
    }
    set gebaeudeId(gid) {
        this.gid = gid;
    }
    get clientId() {
        return this.mid;
    }
    set clientId(mid) {
        this.mid = mid;
    }
    checkIfABezeichnungExistsGlobal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.delegateListArticleMatches();
            this.numBezeichnungExists = -1;
            const jobid = this.baseData.getCurrentJobid();
            const numExists = yield this.artikelService
                .artikelBezeichnungExistsGlobal(this.artikelDaten.Bezeichnung, jobid);
            this.numBezeichnungExists = numExists;
            this.formValidate();
            console.log('check if Artikel exists: ', numExists, 'this.numBezeichnungExists', this.numBezeichnungExists);
            this.listArticleMatches();
            return numExists;
        });
    }
    checkIfArtikelExistsMandant() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.numBezeichnungExists = -1;
            let globalArtikelUuids = [];
            yield this.artikelService
                .artikelGlobalByBezeichnung(this.artikelDaten.Bezeichnung)
                .then(items => {
                globalArtikelUuids = items.map(item => item.uuid);
            });
            if (globalArtikelUuids.length === 0) {
                this.numBezeichnungExists = 0;
                return false;
            }
            const numExistsByMandant = yield this.artikelService
                .artikelMcuuidByGcuuids(this.mid, globalArtikelUuids)
                .then(items => {
                return items.length;
            });
            this.numBezeichnungExists = numExistsByMandant;
            return numExistsByMandant > 0;
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.formError = '';
            if (this.formValidate()) {
                this.artikelDaten.mid = this.mid;
                const result = yield this.artikelService.insert(this.artikelDaten);
                if (!result.success) {
                    this.formError = 'Daten konnten nicht gespeichert werden!<br>' + result.errorMsg;
                    console.error('save Artikeldaten result ', { artikelDaten: this.artikelDaten, result });
                    return false;
                }
                else {
                    this.artikelCreated.emit(result);
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
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_8__["BasedataService"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-create-artikel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-create-artikel.component.scss */ "./src/app/pages/invent-form/modals/select-create-artikel/select-create-artikel.component.scss")).default]
    })
], SelectCreateArtikelComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.input-group-text {\n  min-width: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtcmF1bS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzZWxlY3QtY3JlYXRlLXJhdW1cXHNlbGVjdC1jcmVhdGUtcmF1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1jcmVhdGUtcmF1bS9zZWxlY3QtY3JlYXRlLXJhdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLXJhdW0vc2VsZWN0LWNyZWF0ZS1yYXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBtaW4td2lkdGg6IDRyZW07XHJcbn1cclxuIiwiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBtaW4td2lkdGg6IDRyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectCreateRaumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCreateRaumComponent", function() { return SelectCreateRaumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_services_raum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-services/raum.service */ "./src/app/pages/invent-form/data-services/raum.service.ts");





let SelectCreateRaumComponent = class SelectCreateRaumComponent {
    constructor(
    // private modalService: NgbModal,
    activeModal, raumService) {
        this.activeModal = activeModal;
        this.raumService = raumService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCamera"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
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
        this.raumSearching.emit();
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-create-raum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-create-raum.component.scss */ "./src/app/pages/invent-form/modals/select-create-raum/select-create-raum.component.scss")).default]
    })
], SelectCreateRaumComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1zZWFyY2gtYXJ0aWtlbC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzZWxlY3Qtc2VhcmNoLWFydGlrZWxcXHNlbGVjdC1zZWFyY2gtYXJ0aWtlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1zZWFyY2gtYXJ0aWtlbC9zZWxlY3Qtc2VhcmNoLWFydGlrZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3Qtc2VhcmNoLWFydGlrZWwvc2VsZWN0LXNlYXJjaC1hcnRpa2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuIiwiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SelectSearchArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSearchArtikelComponent", function() { return SelectSearchArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






const states = [];
let SelectSearchArtikelComponent = class SelectSearchArtikelComponent {
    constructor(dataService, activeModal) {
        this.dataService = dataService;
        this.activeModal = activeModal;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignOutAlt"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
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
    ngAfterViewInit() {
        this.setSearchFocus();
    }
    setSearchFocus() {
        if (this.searchArtikelInput && this.searchArtikelInput.nativeElement && this.searchArtikelInput.nativeElement.focus) {
            this.searchArtikelInput.nativeElement.focus();
        }
        else {
            console.error('NOT FOUND this.searchArtikelInput.nativeElement');
        }
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
            this.loadArtikels().then(() => {
                this.setSearchFocus();
            });
        }
    }
    loadArtikels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadArtikels');
            states.length = 1;
            yield this.dataService.getArtikelListByClientId(this.mid)
                .then(items => {
                console.log('process fetched artikels', items.length);
                return items.map(artikel => {
                    const nameParts = [];
                    if (artikel.Typ) {
                        nameParts.push(artikel.Typ);
                    }
                    if (artikel.Bezeichnung) {
                        nameParts.push(artikel.Bezeichnung);
                    }
                    if (artikel.Kategorie) {
                        nameParts.push(artikel.Kategorie);
                    }
                    if (artikel.Gruppe) {
                        nameParts.push(artikel.Gruppe);
                    }
                    if (artikel.Farbe) {
                        nameParts.push(artikel.Farbe);
                    }
                    if (artikel.Groesse) {
                        nameParts.push(artikel.Groesse);
                    }
                    if (artikel.Hersteller) {
                        nameParts.push(artikel.Hersteller);
                    }
                    const option = {
                        uuid: artikel.mcuuid,
                        mcuuid: artikel.mcuuid,
                        name: nameParts.join(' :: ')
                    };
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
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchArtikelComponent.prototype, "artikelSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchArtikelComponent.prototype, "artikelCreating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchArtikelInput', { static: false })
], SelectSearchArtikelComponent.prototype, "searchArtikelInput", void 0);
SelectSearchArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-search-artikel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-search-artikel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-search-artikel.component.scss */ "./src/app/pages/invent-form/modals/select-search-artikel/select-search-artikel.component.scss")).default]
    })
], SelectSearchArtikelComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header.modal-header-with-links {\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1zZWFyY2gtcmF1bS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzZWxlY3Qtc2VhcmNoLXJhdW1cXHNlbGVjdC1zZWFyY2gtcmF1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3NlbGVjdC1zZWFyY2gtcmF1bS9zZWxlY3Qtc2VhcmNoLXJhdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3Qtc2VhcmNoLXJhdW0vc2VsZWN0LXNlYXJjaC1yYXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuIiwiLm1vZGFsLWhlYWRlci5tb2RhbC1oZWFkZXItd2l0aC1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectSearchRaumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSearchRaumComponent", function() { return SelectSearchRaumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");







const raeume = [];
const states = [];
let SelectSearchRaumComponent = class SelectSearchRaumComponent {
    constructor(dataService, activeModal, baseData) {
        this.dataService = dataService;
        this.activeModal = activeModal;
        this.baseData = baseData;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.faSearchLocation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearchLocation"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignOutAlt"];
        this.raumSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumCreating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatter = (state) => state.name;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => {
            return term.length >= 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => {
            // console.log('map and slice artikel by term', term, 'states', states);
            const matches = states
                .filter(item => new RegExp(term, 'mi').test(item.name))
                .sort()
                .slice(0, 10);
            console.log('search ', { term, matches: Object.assign({}, matches), states });
            return matches;
        }));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.setSearchFocus();
    }
    setSearchFocus() {
        if (this.searchInput && this.searchInput.nativeElement && this.searchInput.nativeElement.focus) {
            this.searchInput.nativeElement.focus();
        }
        else {
            console.error('NOT FOUND this.searchInput.nativeElement');
        }
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
            this.jobid = this.baseData.getCurrentJobid();
            console.log('Reload Search-List');
            this.loadRaeume().then(() => {
                this.setSearchFocus();
            });
            this.setSearchFocus();
        }
    }
    loadRaeume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadRaeume');
            states.length = 0;
            this.dataService.getRaeumeByGebaeudeId(this.gid, this.jobid)
                .then(raeume2 => {
                console.log('loadRaeume: ', { raeume2: Object.assign({}, raeume2) });
                const raeume3 = raeume2.map(raum => {
                    const nameParts = [];
                    if (raum.Raum) {
                        nameParts.push(raum.Raum);
                    }
                    if (raum.Raumbezeichnung) {
                        nameParts.push(raum.Raumbezeichnung);
                    }
                    if (raum.Etage) {
                        nameParts.push(raum.Etage);
                    }
                    const itm = { uuid: raum.uuid, name: nameParts.join(' :: ') };
                    const rOpt = Object.assign({}, itm, raum);
                    if (!states.find(st => st.uuid === rOpt.uuid)) {
                        states.push(rOpt);
                    }
                    return rOpt;
                });
                console.log('loadRaeume: ', { states: Object.assign({}, states) });
                return raeume3;
            })
                .catch(err => { console.error(err); });
        });
    }
};
SelectSearchRaumComponent.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_6__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchRaumComponent.prototype, "raumSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSearchRaumComponent.prototype, "raumCreating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true })
], SelectSearchRaumComponent.prototype, "searchInput", void 0);
SelectSearchRaumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-search-raum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-search-raum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-search-raum.component.scss */ "./src/app/pages/invent-form/modals/select-search-raum/select-search-raum.component.scss")).default]
    })
], SelectSearchRaumComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputPreview {\n  max-width: 100%;\n  max-height: calc(100vh - 200px);\n}\n\n.editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -7rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-close {\n  position: absolute;\n  top: 0.2rem;\n  right: 0.2rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctYXJ0aWtlbC1pbWFnZS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzaG93LWFydGlrZWwtaW1hZ2VcXHNob3ctYXJ0aWtlbC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctYXJ0aWtlbC1pbWFnZS9zaG93LWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBR0UsbUJBQUE7RUFHQSxhQUFBO0VBR0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctYXJ0aWtlbC1pbWFnZS9zaG93LWFydGlrZWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5wdXRQcmV2aWV3IHtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAyMDBweCk7XHJcbn1cclxuLmVkaXRvciB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhbnZhcyB7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTZyZW07XHJcbiAgei1pbmRleDogMjAxNTtcclxufVxyXG5cclxuLnRvb2xiYXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJvcmRlcjowO1xyXG59XHJcblxyXG4udG9vbGJhci1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLjJyZW07XHJcbiAgcmlnaHQ6IDAuMnJlbTtcclxuICB6LWluZGV4OiAyMDE2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLWljb24tY2lydWxhciB7XHJcbiAgd2lkdGg6MnJlbTtcclxuICBoZWlnaHQ6MnJlbTtcclxuICBib3JkZXItcmFkaXVzOjFyZW07XHJcbn1cclxuXHJcbiIsIiNpbnB1dFByZXZpZXcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG59XG5cbi5lZGl0b3Ige1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FudmFzIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3R0b206IDFyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnJlbTtcbiAgei1pbmRleDogMjAxNTtcbn1cblxuLnRvb2xiYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG59XG5cbi50b29sYmFyLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMnJlbTtcbiAgcmlnaHQ6IDAuMnJlbTtcbiAgei1pbmRleDogMjAxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4taWNvbi1jaXJ1bGFyIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShowArtikelImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowArtikelImageComponent", function() { return ShowArtikelImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
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
        this.mcuuid = null;
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
    setMcuuid(mcuuid, gcuuid = '') {
        this.mcuuid = mcuuid;
        this.gcuuid = gcuuid;
        console.log('called setMcuuid', this.mcuuid);
        this.loadImageByMcuuid(this.mcuuid).then(mSuccess => {
            if (!mSuccess && gcuuid) {
                this.loadImageByGcuuid(this.gcuuid).then(gSuccess => {
                    if (!gSuccess) {
                        alert('Bild konnte leider nicht geladen werden!');
                    }
                });
            }
        }, err => {
            if (gcuuid) {
                this.loadImageByGcuuid(this.gcuuid).then(gSuccess => {
                    if (!gSuccess) {
                        alert('Bild konnte leider nicht geladen werden!');
                    }
                });
            }
            else {
                alert('Bild konnte leider nicht geladen werden!');
            }
        });
    }
    loadImageByMcuuid(mcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', mcuuid);
            if (mcuuid) {
                return this.imageService.getImageByMcuuid(mcuuid)
                    .then(image => {
                    if (image) {
                        this.imageUrl = image.data_url;
                        return true;
                    }
                    return false;
                })
                    .catch(err => {
                    console.error(err);
                    return false;
                });
            }
            return false;
        });
    }
    loadImageByGcuuid(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', gcuuid);
            if (gcuuid) {
                return this.imageService.getImageByGcuuid(gcuuid)
                    .then(image => {
                    if (image) {
                        this.imageUrl = image.data_url;
                        return true;
                    }
                    return false;
                })
                    .catch(err => {
                    console.error(err);
                    return false;
                });
            }
            return false;
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-artikel-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-artikel-image.component.scss */ "./src/app/pages/invent-form/modals/show-artikel-image/show-artikel-image.component.scss")).default]
    })
], ShowArtikelImageComponent);



/***/ }),

/***/ "./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputPreview {\n  max-width: 100%;\n  max-height: calc(100vh - 200px);\n}\n\n.editor {\n  height: 60%;\n  position: relative;\n}\n\n.canvas {\n  height: 100%;\n}\n\n.canvas {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.toolbar {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 1rem;\n  color: #fff;\n  height: 2rem;\n  left: 50%;\n  margin-left: -7rem;\n  position: absolute;\n  width: 16rem;\n  z-index: 2015;\n}\n\n.toolbar button {\n  background: transparent;\n  color: #fff;\n  border: 0;\n}\n\n.toolbar-close {\n  position: absolute;\n  top: 0.2rem;\n  right: 0.2rem;\n  z-index: 2016;\n  background-color: transparent;\n}\n\n.btn-icon-cirular {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctcmF1bS1pbWFnZS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnQtZm9ybVxcbW9kYWxzXFxzaG93LXJhdW0taW1hZ2VcXHNob3ctcmF1bS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctcmF1bS1pbWFnZS9zaG93LXJhdW0taW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBR0UsbUJBQUE7RUFHQSxhQUFBO0VBR0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50LWZvcm0vbW9kYWxzL3Nob3ctcmF1bS1pbWFnZS9zaG93LXJhdW0taW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5wdXRQcmV2aWV3IHtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAyMDBweCk7XHJcbn1cclxuLmVkaXRvciB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW52YXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhbnZhcyB7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTZyZW07XHJcbiAgei1pbmRleDogMjAxNTtcclxufVxyXG5cclxuLnRvb2xiYXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJvcmRlcjowO1xyXG59XHJcblxyXG4udG9vbGJhci1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLjJyZW07XHJcbiAgcmlnaHQ6IDAuMnJlbTtcclxuICB6LWluZGV4OiAyMDE2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLWljb24tY2lydWxhciB7XHJcbiAgd2lkdGg6MnJlbTtcclxuICBoZWlnaHQ6MnJlbTtcclxuICBib3JkZXItcmFkaXVzOjFyZW07XHJcbn1cclxuXHJcbiIsIiNpbnB1dFByZXZpZXcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG59XG5cbi5lZGl0b3Ige1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FudmFzIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3R0b206IDFyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnJlbTtcbiAgei1pbmRleDogMjAxNTtcbn1cblxuLnRvb2xiYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG59XG5cbi50b29sYmFyLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMnJlbTtcbiAgcmlnaHQ6IDAuMnJlbTtcbiAgei1pbmRleDogMjAxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4taWNvbi1jaXJ1bGFyIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShowRaumImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRaumImageComponent", function() { return ShowRaumImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-services/images.service */ "./src/app/pages/invent-form/data-services/images.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let ShowRaumImageComponent = class ShowRaumImageComponent {
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
        this.titel = '';
        this.uuid = null;
        this.imageUrl = null;
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
    setImageUuid(uuid) {
        this.uuid = uuid;
        console.log('called setMcuuid', this.uuid);
        this.loadImageByUuid(this.uuid).then(mSuccess => {
            if (!mSuccess) {
                alert('Bild konnte leider nicht geladen werden!');
            }
        });
    }
    setTitel(titel) {
        this.titel = titel;
    }
    loadImageByUuid(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('called loadImageByGcuuid', uuid);
            if (uuid) {
                return this.imageService.getImageByUuid(uuid)
                    .then(image => {
                    if (image) {
                        this.imageUrl = image.data_url.replace(/(\r\n|\n|\r)/gm, '');
                        return true;
                    }
                    return false;
                })
                    .catch(err => {
                    console.error(err);
                    return false;
                });
            }
            return false;
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
ShowRaumImageComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _data_services_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper', { static: false })
], ShowRaumImageComponent.prototype, "angularCropper", void 0);
ShowRaumImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-raum-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-raum-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-raum-image.component.scss */ "./src/app/pages/invent-form/modals/show-raum-image/show-raum-image.component.scss")).default]
    })
], ShowRaumImageComponent);



/***/ }),

/***/ "./src/app/pages/select-inventory/select-inventory.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/select-inventory/select-inventory.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n}\n\n.select-inventory .input-group-text {\n  min-width: 5.5em;\n}\n\n.dropdown.myDropdown {\n  width: 100%;\n}\n\n.dropdown.myDropdown [aria-haspopup=true] {\n  text-align: left;\n  position: relative;\n  text-indent: 1em;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown.myDropdown [aria-haspopup=true][aria-expanded=true] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown.myDropdown [aria-haspopup=true]::after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n\n.dropdown.myDropdown .dropdown-menu {\n  width: 100%;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWludmVudG9yeS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZFJldHJ1Y3R1cmUvc3JjXFxhcHBcXHBhZ2VzXFxzZWxlY3QtaW52ZW50b3J5XFxzZWxlY3QtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY3QtaW52ZW50b3J5L3NlbGVjdC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNHRjs7QUREQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZWN0LWludmVudG9yeS9zZWxlY3QtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLnByb2dyZXNzLWVsZW1lbnRlIHtcclxuICBoZWlnaHQ6Y2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4uc2VsZWN0LWludmVudG9yeSAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgbWluLXdpZHRoOiA1LjVlbTtcclxufVxyXG4uZHJvcGRvd24ubXlEcm9wZG93biB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uZHJvcGRvd24ubXlEcm9wZG93biBbYXJpYS1oYXNwb3B1cD10cnVlXSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IDFlbTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmRyb3Bkb3duLm15RHJvcGRvd24gW2FyaWEtaGFzcG9wdXA9dHJ1ZV1bYXJpYS1leHBhbmRlZD10cnVlXSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZHJvcGRvd24ubXlEcm9wZG93biBbYXJpYS1oYXNwb3B1cD10cnVlXTo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24ubXlEcm9wZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbiIsIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xufVxuXG4uc2VsZWN0LWludmVudG9yeSAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIG1pbi13aWR0aDogNS41ZW07XG59XG5cbi5kcm9wZG93bi5teURyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi5teURyb3Bkb3duIFthcmlhLWhhc3BvcHVwPXRydWVdIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogMWVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uZHJvcGRvd24ubXlEcm9wZG93biBbYXJpYS1oYXNwb3B1cD10cnVlXVthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5kcm9wZG93bi5teURyb3Bkb3duIFthcmlhLWhhc3BvcHVwPXRydWVdOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmRyb3Bkb3duLm15RHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/select-inventory/select-inventory.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/select-inventory/select-inventory.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInventoryComponent", function() { return SelectInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/inventory-progress/inventory-progress.service */ "./src/app/shared/inventory-progress/inventory-progress.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _shared_services_dbsync_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/dbsync-log.service */ "./src/app/shared/services/dbsync-log.service.ts");
/* harmony import */ var _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../invent-form/data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");











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
    constructor(dataService, route, router, auth, baseData, progressService, connection, dbsyncLogService, bcLookupService) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.baseData = baseData;
        this.progressService = progressService;
        this.connection = connection;
        this.dbsyncLogService = dbsyncLogService;
        this.bcLookupService = bcLookupService;
        this.faSyncIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSyncAlt"];
        this.hasConnection = false;
        this.hasServerConnection = false;
        this.status = '';
        this.statusLoadingUserInventories = StatusLoadingInventories.None;
        this.loadedUserInventories = false;
        this.totalElements = 0;
        this.doneElements = 0;
        this.loading = false;
        this.listMetaData = [];
        this.listMetaMsg = [];
        this.lastMetaErr = '';
        this.lastMetaMsg = '';
        this.showListmetaMsg = false;
        this.tablesLoadingStatus = [];
        this.tablesLoadingStarted = false;
        this.tablesLoadingDetailsIsExpanded = false;
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
        this.loading = false;
        this.lastInventory = this.baseData.getCurrentInventur();
        this.lastBuilding = this.baseData.getCurrentGebaeude();
        this.lastRaum = this.baseData.getCurrentRaum();
        this.tablesLoadingStarted = Object.keys(this.tablesLoadingStatus).length > 0;
        this.routingSubscription = this.route.params.subscribe(params => {
            console.log({ params });
        });
        this.hasConnection = this.connection.hasServerAccess;
        this.hasServerConnection = this.connection.hasServerAccess;
        this.subscriptionLoadingStatus = this.dataService.loadingDataChanged
            .subscribe((stat) => {
            this.tablesLoadingStarted = true;
            for (const tbl in stat) {
                if (!stat.hasOwnProperty(tbl)) {
                    continue;
                }
                if (!this.tablesLoadingStatus.find((tblStat) => tblStat.table === tbl)) {
                    this.tablesLoadingStatus.push(stat[tbl]);
                    continue;
                }
                const tblIdx = this.tablesLoadingStatus.findIndex((tblStat) => tblStat.table === tbl);
                for (const statKey in stat[tbl]) {
                    if (stat[tbl].hasOwnProperty(statKey) && stat[tbl][statKey] !== this.tablesLoadingStatus[tblIdx][statKey]) {
                        this.tablesLoadingStatus[tblIdx][statKey] = stat[tbl][statKey];
                    }
                }
            }
        });
        this.connectionSubscription = this.connection.monitor().subscribe((conn) => {
            this.hasConnection = conn.hasNetworkConnection;
            this.hasServerConnection = conn.hasServerAccess;
            if (this.statusLoadingUserInventories < StatusLoadingInventories.FinishedSuccessful) {
                this.checkLoadUserInventories();
            }
        });
        this.subscriptionMetaData = this.dbsyncLogService.loadingMetaData.subscribe((data) => {
            if (data.table) {
                const existing = this.listMetaData.find((item) => item.table === data.table);
                if (existing) {
                    existing.message = data.message;
                    if (data.executed) {
                        existing.executed = data.executed;
                    }
                    if (data.total) {
                        existing.total = data.total;
                    }
                }
            }
        });
        this.subscriptionMetaMsg = this.dbsyncLogService.loadingMetaMessage.subscribe((data) => {
            this.lastMetaMsg = data.message;
            this.listMetaMsg.push({
                type: 'success',
                message: data.message
            });
        });
        this.subscriptionMetaErr = this.dbsyncLogService.loadingMetaError.subscribe((data) => {
            this.lastMetaErr = data.message;
            this.listMetaMsg.push({
                type: 'danger',
                message: data.message
            });
        });
        if (!this.connection.hasNetworkConnection) {
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
    closeMsg(msg) {
        this.listMetaMsg.splice(this.listMetaMsg.indexOf(msg), 1);
    }
    loadLastInventoryDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.lastInventoryDetails = null;
            const inv = this.baseData.getCurrentInventur();
            const geb = this.baseData.getCurrentGebaeude();
            const mandant = yield this.dataService.getClient(inv.mid);
            const rm = this.baseData.getCurrentRaum();
            if (inv && geb && mandant) {
                this.lastInventoryDetails = {
                    jobid: inv.jobid,
                    mid: inv.mid,
                    gid: geb.gid,
                    Titel: inv.Titel,
                    Mandant: mandant.Mandant,
                    Gebaeude: geb.Gebaeude,
                    routeParams: [inv.mid, geb.gid],
                    Etage: null,
                    Raum: null,
                    Raumbezeichnung: null
                };
                if (rm) {
                    this.lastInventoryDetails.ruuid = rm.uuid;
                    this.lastInventoryDetails.Etage = rm.Etage;
                    this.lastInventoryDetails.Raum = rm.Raum;
                    this.lastInventoryDetails.Raumbezeichnung = rm.Raumbezeichnung;
                    this.lastInventoryDetails.routeParams.push(rm.uuid);
                }
            }
        });
    }
    gotoLastInventory() {
        if (this.lastInventoryDetails && this.lastInventoryDetails.routeParams.length > 1) {
            this.gotoFormInventory.apply(this, this.lastInventoryDetails.routeParams);
        }
    }
    gotoFormInventory(mid, gid, ruuid) {
        const routeData = ['/form-inventory', mid, gid];
        if (ruuid && ruuid.length > 0) {
            routeData.push(ruuid);
        }
        this.router.navigate(routeData);
    }
    checkLoadUserInventories(onlineOnly = true) {
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
    getStatusLoadingInventoryText(status) {
        return StatusLoadingInventories[status];
    }
    loadUserInventories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ngOnInit select-iventory.components.ts');
            const uid = this.auth.getUser().id;
            const lastMid = this.baseData.getCurrentMid() || 0;
            const lastGid = this.baseData.getCurrentGid() || 0;
            const lastJobid = this.baseData.getCurrentJobid();
            const lastRuuid = this.baseData.getCurrentRuuid();
            return yield this.dataService.getUserAssignedInventories(uid)
                .then((result) => {
                console.log({ called: 'this.dataService.getUserAssignedInventories', result });
                this.inventories = result;
                this.inventoriesSelectable = this.inventories;
                this.lastInventory = this.inventories.find((inv) => inv.jobid === lastJobid);
                let defaultMid = 0;
                let defaultGid = 0;
                let defaultJobid = 0;
                this.statusLoadingUserInventories = StatusLoadingInventories.Loading;
                if (this.lastInventory) {
                    this.loadLastInventoryDetails();
                    defaultMid = this.lastInventory.mid;
                    defaultGid = this.lastInventory.gid;
                    defaultJobid = this.lastInventory.jobid;
                }
                const aMids = this.inventories.map((itm) => itm.mid);
                console.log('ngOnInit', { uid, aMids });
                return this.dataService.getClientList()
                    .then((mandanten) => {
                    this.clients = mandanten.filter((itm) => aMids.indexOf(itm.mid) !== -1);
                    return this.clients;
                })
                    .then(clientList => {
                    this.setDefaultSelection({
                        mid: defaultMid,
                        gid: defaultGid,
                        jobid: defaultJobid
                    });
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
    setDefaultSelection(ids) {
        const clientListIdx = this.getClientListIdxByMid(ids.mid);
        if (-1 !== clientListIdx) {
            const clientChanged = this.clientChanged(clientListIdx);
            if (ids.gid || ids.jobid) {
                clientChanged.then((success) => {
                    if (!success) {
                        return false;
                    }
                    if (ids.gid) {
                        const buildingsListIdx = this.getBuildingListIdxByGid(ids.gid);
                        this.buildingChanged(buildingsListIdx);
                    }
                    if (ids.jobid) {
                        this.inventoriesSelectable = this.inventories.filter((inv) => inv.mid === ids.mid);
                        const checkInv = this.inventoriesSelectable.find((inv) => inv.jobid === ids.jobid);
                        if (checkInv) {
                            this.inventory = checkInv;
                            if (this.lastBuilding) {
                                this.inventorySelectionChanged(checkInv.jobid).then(() => {
                                    const checkGeb = this.buildings.find((b) => b.gid === this.lastBuilding.gid);
                                    if (checkGeb) {
                                        this.building = checkGeb;
                                    }
                                });
                            }
                        }
                    }
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
        this.connectionSubscription.unsubscribe();
        this.subscriptionMetaMsg.unsubscribe();
        this.subscriptionMetaErr.unsubscribe();
        this.subscriptionMetaData.unsubscribe();
    }
    clientChanged(clientIdx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.client = this.clients[clientIdx];
            console.log('client changed to ', { clientIdx, this_clients: this.clients, this_client: this.client });
            this.buildings = yield this.dataService.getBuildingList(this.client.mid);
            this.inventoriesSelectable = this.inventories.filter((inv) => inv.mid === this.client.mid);
            console.log('assign selection buildings: ', this.buildings);
            if (this.inventory && this.inventory.mid !== this.client.mid) {
                this.inventory = null;
                this.building = null;
            }
            return true;
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            console.log(this.selectForm);
            if (!this.client || !this.inventory || !this.building) {
                this.status = 'Bitte vervollständige die Auswahl!';
                return;
            }
            this.jobid = this.inventory.jobid;
            this.baseData.setCurrentMandant(this.client);
            this.baseData.setCurrentInventur(this.inventory);
            this.baseData.setCurrentGebaeude(this.building);
            if (this.lastInventory && this.lastInventory.jobid === this.jobid
                && this.lastBuilding && this.lastBuilding.gid === this.building.gid
                && (yield this.dataService.hasValidInventurRevId(this.inventory.jobid))
                && (yield this.dataService.hasAllInventurData(this.inventory.jobid))) {
                console.log('SelectInventoryComponent #410 onSubmit gotoLastInventory');
                yield this.bcLookupService.rebuildOnRunningSystemByJobid(this.jobid);
                this.gotoLastInventory();
            }
            else {
                console.log('SelectInventoryComponent #414 onSubmit dataService.loadInventurDataByInventurId', this.inventory.jobid);
                this.status = 'Bitte warten .... Inventarisierungsdaten werden vom Server geladen.';
                yield this.dataService.loadInventurDataByInventurId(this.inventory.jobid);
                this.status = 'Daten wurden geladen';
                // More Control for navigate
                this.router.navigate([
                    '/form-inventory', this.client.mid, this.building.gid
                ]);
            }
        });
    }
    buildingChanged(buildingListIdx) {
        this.building = this.buildings[buildingListIdx];
        this.progressService.getCurrentGebaeudeProgress().then((progress) => {
            this.totalElements = progress.total;
            this.doneElements = progress.done;
        });
    }
    inventorySelectionChanged(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.inventory = this.inventories.find((ivy) => ivy.jobid === jobid);
            this.buildings = yield this.dataService.getBuildingListByJobid(this.inventory.jobid, this.inventory.mid);
        });
    }
};
SelectInventoryComponent.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_5__["BasedataService"] },
    { type: _shared_inventory_progress_inventory_progress_service__WEBPACK_IMPORTED_MODULE_6__["InventoryProgressService"] },
    { type: _shared_services_connection_service_service__WEBPACK_IMPORTED_MODULE_8__["ConnectionService"] },
    { type: _shared_services_dbsync_log_service__WEBPACK_IMPORTED_MODULE_9__["DbsyncLogService"] },
    { type: _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_10__["BarcodeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], SelectInventoryComponent.prototype, "selectForm", void 0);
SelectInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-inventory/select-inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-inventory.component.scss */ "./src/app/pages/select-inventory/select-inventory.component.scss")).default]
    })
], SelectInventoryComponent);



/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".variables-list .row + .row {\n  border-top: 1px solid rgba(86, 61, 124, 0.2);\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFyaWFibGVzLWxpc3QgLnJvdyArIC5yb3cge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDg2LCA2MSwgMTI0LCAuMik7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcbiIsIi52YXJpYWJsZXMtbGlzdCAucm93ICsgLnJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDg2LCA2MSwgMTI0LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invent-form/data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _shared_services_sounds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/sounds.service */ "./src/app/shared/services/sounds.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SettingsComponent = class SettingsComponent {
    constructor(dexieService, variables, baseData, barcodeLookup, sounds, router) {
        this.dexieService = dexieService;
        this.variables = variables;
        this.baseData = baseData;
        this.barcodeLookup = barcodeLookup;
        this.sounds = sounds;
        this.router = router;
        this.variableList = [];
        this.buildBcLookup = false;
        this.useOverlay = 0;
        this.blobAlertTimer = null;
        this.changedManualBCInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dbName = this.dexieService.name;
        this.dbVersion = this.dexieService.verno;
    }
    ngOnInit() {
        this.reloadVariableList();
        this.variables.get('manualBarcodeInput', false).then((val) => {
            this.enableManualBCInput = !!val;
        });
    }
    reloadVariableList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.variableList = yield this.variables.getAll();
        });
    }
    changeManualBCInput(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('changeManualBCInput', { event });
            this.variables.set('manualBarcodeInput', this.enableManualBCInput);
            this.changedManualBCInput.emit(this.enableManualBCInput);
        });
    }
    dbClear() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.baseData.setCurrentInventur(null);
            this.baseData.setCurrentRaum(null);
            this.baseData.setCurrentGebaeude(null);
            this.baseData.setCurrentRaum(null);
            yield this.dexieService.clearDB();
            this.router.navigate(['/select-inventory']);
        });
    }
    dbDelete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.baseData.setCurrentInventur(null);
            this.baseData.setCurrentRaum(null);
            this.baseData.setCurrentGebaeude(null);
            this.baseData.setCurrentRaum(null);
            yield this.dexieService.deleteDB();
            this.router.navigate(['/select-inventory']);
        });
    }
    reIndexBarcodeLookup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.buildBcLookup = true;
            console.log('Start rebuildOnRunningSystem');
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
    playSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showBlobAlertSuccess();
            this.sounds.playSuccess();
        });
    }
    playError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showBlobAlertError();
            this.sounds.playError();
        });
    }
    showBlobAlertSuccess() {
        this.showBlobAlert('success');
    }
    showBlobAlertError() {
        this.showBlobAlert('danger');
    }
    showBlobAlert(alertType) {
        this.useOverlay = this.useOverlay < 2 ? this.useOverlay + 1 : 1;
        this.blobAlert = null;
        if (this.blobAlertTimer) {
            clearTimeout(this.blobAlertTimer);
        }
        this.blobAlert = alertType;
        this.blobAlertTimer = setTimeout(() => {
            this.blobAlert = null;
            this.useOverlay = 0;
        }, 1200);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _shared_services_dexie_service__WEBPACK_IMPORTED_MODULE_5__["DexieService"] },
    { type: _shared_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"] },
    { type: _shared_services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_4__["BarcodeService"] },
    { type: _shared_services_sounds_service__WEBPACK_IMPORTED_MODULE_6__["SoundsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SettingsComponent.prototype, "changedManualBCInput", void 0);
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/shared/components/ngbheader/ngbheader.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/ngbheader/ngbheader.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-navbar,\nnav.navbar {\n  background-color: #f2f2f2;\n}\n\nnav.navbar .navbar-brand img.logo {\n  width: 40vw;\n  max-width: 221px;\n}\n\n.rowed-inline {\n  justify-content: space-between;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmdiaGVhZGVyL0M6XFxVc2Vyc1xcZi5iYXJ0aG9sZFxcd29ya3NwYWNlXFxFcndpbkludmVudGFyaXNpZXJ1bmdcXGFwcHNcXGZyb250ZW5kUmV0cnVjdHVyZS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuZ2JoZWFkZXJcXG5nYmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmdiaGVhZGVyL25nYmhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZ2JoZWFkZXIvbmdiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYXZiYXIsXHJcbm5hdi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxubmF2Lm5hdmJhciAubmF2YmFyLWJyYW5kIGltZy5sb2dvIHtcclxuICB3aWR0aDogNDB2dztcclxuICBtYXgtd2lkdGg6MjIxcHg7XHJcbn1cclxuXHJcbi5yb3dlZC1pbmxpbmUge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiIsIi5hcHAtbmF2YmFyLFxubmF2Lm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbm5hdi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcubG9nbyB7XG4gIHdpZHRoOiA0MHZ3O1xuICBtYXgtd2lkdGg6IDIyMXB4O1xufVxuXG4ucm93ZWQtaW5saW5lIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/ngbheader/ngbheader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/ngbheader/ngbheader.component.ts ***!
  \********************************************************************/
/*! exports provided: NgbheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbheaderComponent", function() { return NgbheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NgbheaderComponent = class NgbheaderComponent {
    constructor(baseData, router) {
        this.baseData = baseData;
        this.router = router;
        this.collapsed = true;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"];
        this.faPlayCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlayCircle"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPowerOff"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSync"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.isLoginPage = false;
    }
    continueLastInventory() {
        //  routerLink="/form-inventory"
        // { path: 'form-inventory/:clientid/:buildingid/:roomid', component: InventFormComponent },
        const jobid = this.baseData.getCurrentJobid();
        const mid = this.baseData.getCurrentMid();
        const gid = this.baseData.getCurrentGid();
        const room = this.baseData.getCurrentRaum();
        console.log('NgbheaderComponent #25 continuelastInventory', { jobid, mid, gid, room });
        if (jobid && mid && gid && room && room.gid === gid) {
            console.log('NgbheaderComponent #28 continuelastInventory goto form-inventory with room');
            return this.router.navigate([
                '/form-inventory', mid, gid, room.uuid
            ]);
        }
        if (jobid && mid && gid) {
            console.log('NgbheaderComponent #35 continuelastInventory goto form-inventory without room');
            return this.router.navigate([
                '/form-inventory', mid, gid
            ]);
        }
        console.log('NgbheaderComponent #28 continuelastInventory goto select-inventory');
        return this.router.navigate(['/select-inventory']);
    }
};
NgbheaderComponent.ctorParameters = () => [
    { type: _services_basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgbheaderComponent.prototype, "isLoginPage", void 0);
NgbheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngbheader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngbheader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/ngbheader/ngbheader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngbheader.component.scss */ "./src/app/shared/components/ngbheader/ngbheader.component.scss")).default]
    })
], NgbheaderComponent);



/***/ }),

/***/ "./src/app/shared/components/progressbar/progressbar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/progressbar/progressbar.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n  position: relative;\n}\n\n.progress-text {\n  position: absolute;\n  top: 0;\n  left: calc(50% - 1rem);\n  color: #fff;\n  line-height: calc(1.5em + 0.75rem + 2px);\n}\n\nbutton.btn.btn-sx {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmRSZXRydWN0dXJlL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByb2dyZXNzYmFyXFxwcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLnByb2dyZXNzLWVsZW1lbnRlIHtcclxuICBoZWlnaHQ6Y2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzLXRleHR7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxcmVtKTtcclxuICBjb2xvcjojZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN4IHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4iLCIucHJvZ3Jlc3MucHJvZ3Jlc3MtZWxlbWVudGUge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZ3Jlc3MtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDFyZW0pO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbn1cblxuYnV0dG9uLmJ0bi5idG4tc3gge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/progressbar/progressbar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/progressbar/progressbar.component.ts ***!
  \************************************************************************/
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
        return this.value + ' St';
    }
    get donePercentText() {
        return !this.total || this.total === 100 ? '' : '' + this.progressAmount + ' %';
    }
    get totalText() {
        return (this.total ? this.total.toString() : '??') + ' St';
    }
    get restText() {
        return (!this.total
            ? '??'
            : (this.total - this.value) + ' St' + (!this.total || this.total === 100
                ? ''
                : ' (' + this.progressRest + ' %)'));
    }
    get restAmountText() {
        return this.total ? '' + Math.max(0, this.total - this.value) + ' St' : '';
    }
    get restPercentText() {
        return this.total ? '' + this.progressRest + ' %' : '';
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progressbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/progressbar/progressbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progressbar.component.scss */ "./src/app/shared/components/progressbar/progressbar.component.scss")).default]
    })
], ProgressbarComponent);



/***/ }),

/***/ "./src/app/shared/components/scannerdetection/scannerdetection.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/scannerdetection/scannerdetection.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NjYW5uZXJkZXRlY3Rpb24vc2Nhbm5lcmRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/scannerdetection/scannerdetection.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/scannerdetection/scannerdetection.component.ts ***!
  \**********************************************************************************/
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
        this.rawInput = '';
        this.keyDownEvents = [];
        this.lastKeyEventTime = 0;
        this.lastTimer = null;
        this.lastTimerTime = null;
        this.isInDebugMode = false;
        this.detectorConfig = {
            minLength: 5,
            maxLength: 32,
            scannerStartsWith: '',
            scannerEndsWith: '',
            scanTimeout: 100,
            ignoreChars: '',
            ignoreEndsWith: true,
            ignoreOverElements: ['.scanner-detect-ignore'],
            barcodeType: 'code128'
        };
        this.scanned = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set config(input) {
        this.detectorConfig = Object.assign(this.detectorConfig, input);
    }
    onKeyDown(event, useTarget) {
        if (this.isInDebugMode) {
            console.log('#55 scannerDetection Key-Down-Event', { event, useTarget });
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
        const isEditableTextInput = (target instanceof HTMLInputElement
            && target.tagName === 'input'
            && target.type.match(/text|number|/)
            && !target.readOnly
            && !target.disabled);
        if (ignoreElementIds.indexOf(targetElementId) !== -1) {
            emitScanData = false;
        }
        if (ignoreClassNames.indexOf(targetClassName) !== -1) {
            emitScanData = false;
        }
        if (ignoreTagNames.indexOf(targetTagName) !== -1) {
            emitScanData = false;
        }
        if (isEditableTextInput) {
            emitScanData = false;
        }
        if (!emitScanData && this.isInDebugMode) {
            console.log('#89 scannerDetection target is not our target: ', {
                useTarget,
                isEditableTextInput,
                ignoreTagNames,
                ignoreElementIds,
                ignoreClassNames
            });
            return;
        }
        const now = Date.now();
        const diff = now - this.lastKeyEventTime;
        const isScanInput = diff > this.detectorConfig.scanTimeout;
        const key = 'key' in event ? event.key : '';
        const isShiftKey = event.shiftKey;
        if (!isScanInput) {
            this.input = key;
            this.rawInput = key;
            if (this.isInDebugMode) {
                console.log('#101 scannerDetection Start, input', this.input);
            }
        }
        else {
            this.rawInput += '|' + key;
            if (this.isInDebugMode) {
                console.log('#109 scannerDetection isScanInput', { target, key, 'this.input': this.input, 'event.type': event.type, event });
            }
            if (key.length === 1) {
                this.input += !isShiftKey ? key : key.toUpperCase();
                const barcode = this.input;
                if (this.isInDebugMode) {
                    console.log('#106 scannerDetection add Char to Barcode', { key, barcode });
                }
            }
            else if (key === 'Tab') {
                this.input += '\t';
            }
            else if (key === 'Enter') {
                this.input += '\n';
            }
        }
        this.lastTimerTime = now;
        if (this.lastTimer) {
            clearTimeout(this.lastTimer);
        }
        this.lastTimer = setTimeout(() => {
            let input = this.input;
            if (input.indexOf('ß') !== -1) {
                input = input.split('ß').join('-');
            }
            const barcode = input;
            const rawInput = this.rawInput;
            const keyDownEvents = this.keyDownEvents;
            if (this.isInDebugMode) {
                console.log('#138 scannerDetection Emit After Timeout', { key, barcode });
            }
            this.input = '';
            if (barcode.length >= 5) {
                this.scanned.emit({
                    barcode,
                    rawInput,
                    length: barcode.length,
                    valid: true,
                    debugData: {
                        keyDownEvents
                    }
                });
            }
        }, this.detectorConfig.scanTimeout);
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event', '$event.target'])
], ScannerdetectionComponent.prototype, "onKeyDown", null);
ScannerdetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scannerdetection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scannerdetection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scannerdetection/scannerdetection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scannerdetection.component.scss */ "./src/app/shared/components/scannerdetection/scannerdetection.component.scss")).default]
    })
], ScannerdetectionComponent);



/***/ }),

/***/ "./src/app/shared/components/status-check/status-check.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/status-check/status-check.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXR1cy1jaGVjay9zdGF0dXMtY2hlY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/status-check/status-check.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/status-check/status-check.component.ts ***!
  \**************************************************************************/
/*! exports provided: StatusCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCheckComponent", function() { return StatusCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_connection_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _services_dbsync_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dbsync-client.service */ "./src/app/shared/services/dbsync-client.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






let StatusCheckComponent = class StatusCheckComponent {
    constructor(connectionService, dataService, syncService) {
        this.connectionService = connectionService;
        this.dataService = dataService;
        this.syncService = syncService;
        this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appVersion;
        this.numUnsynced = -1;
    }
    ngOnInit() {
        this.syncService.numUnsyncedChangeLogs().then((amount) => {
            this.numUnsynced = amount;
        });
        this.connectionSubscription = this.connectionService.monitor().subscribe((currentState) => {
            console.log(currentState);
            this.currentState = currentState;
        });
        this.unsyncedAmountChangeSubscription = this.dataService.clientSyncAmountChanged
            .subscribe((amount) => {
            this.numUnsynced = amount;
        });
    }
    ngOnDestroy() {
        this.connectionSubscription.unsubscribe();
        this.unsyncedAmountChangeSubscription.unsubscribe();
    }
};
StatusCheckComponent.ctorParameters = () => [
    { type: _services_connection_service_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_dbsync_client_service__WEBPACK_IMPORTED_MODULE_4__["DBSyncClientService"] }
];
StatusCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-check',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./status-check.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/status-check/status-check.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./status-check.component.scss */ "./src/app/shared/components/status-check/status-check.component.scss")).default]
    })
], StatusCheckComponent);



/***/ }),

/***/ "./src/app/shared/directives/scannerinput.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/scannerinput.directive.ts ***!
  \*************************************************************/
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

/***/ "./src/app/shared/interfaces/dexie.interfaces.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/interfaces/dexie.interfaces.ts ***!
  \*******************************************************/
/*! exports provided: DBDIRaumEditStatus, DBDIJobLockStatus, LookupResultTable, LookupResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBDIRaumEditStatus", function() { return DBDIRaumEditStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBDIJobLockStatus", function() { return DBDIJobLockStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupResultTable", function() { return LookupResultTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupResultType", function() { return LookupResultType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DBDIRaumEditStatus;
(function (DBDIRaumEditStatus) {
    DBDIRaumEditStatus[DBDIRaumEditStatus["Init"] = 0] = "Init";
    DBDIRaumEditStatus[DBDIRaumEditStatus["Started"] = 1] = "Started";
    DBDIRaumEditStatus[DBDIRaumEditStatus["Closed"] = 2] = "Closed";
})(DBDIRaumEditStatus || (DBDIRaumEditStatus = {}));
var DBDIJobLockStatus;
(function (DBDIJobLockStatus) {
    DBDIJobLockStatus[DBDIJobLockStatus["Init"] = 0] = "Init";
    DBDIJobLockStatus[DBDIJobLockStatus["Unlocked"] = 1] = "Unlocked";
    DBDIJobLockStatus[DBDIJobLockStatus["Locked"] = 2] = "Locked";
})(DBDIJobLockStatus || (DBDIJobLockStatus = {}));
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

/***/ "./src/app/shared/inventory-progress/inventory-progress.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/inventory-progress/inventory-progress.directive.ts ***!
  \***************************************************************************/
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

/***/ "./src/app/shared/inventory-progress/inventory-progress.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/inventory-progress/inventory-progress.service.ts ***!
  \*************************************************************************/
/*! exports provided: InventoryProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProgressService", function() { return InventoryProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _services_dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _services_basedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/basedata.service */ "./src/app/shared/services/basedata.service.ts");





let InventoryProgressService = class InventoryProgressService {
    constructor(dexieService, baseData) {
        this.dexieService = dexieService;
        this.baseData = baseData;
        this.inventurLockStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getCurrentInventurLockStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const deviceId = this.baseData.getCurrentDeviceId();
            return this.dexieService.inventurenUserStatus.get([jobid, uid, deviceId])
                .then((item) => {
                if (item) {
                    return item.status;
                }
            })
                .catch(() => {
                return _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIJobLockStatus"].Init;
            });
        });
    }
    setCurrentInventurLockStatusClosed() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const deviceId = this.baseData.getCurrentDeviceId();
            const status = _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIJobLockStatus"].Locked;
            console.log('InventoryProgressService #40 setCurrentInventurLockStatusClosed', { jobid, uid, deviceId, status });
            const exists = yield this.dexieService.inventurenUserStatus
                .where({ jobid, uid, device_id: deviceId })
                .count();
            console.log('InventoryProgressService #46 setCurrentInventurLockStatusClosed', { exists });
            if (exists) {
                return this.dexieService.inventurenUserStatus
                    .update([jobid, uid, deviceId], {
                    status,
                    geschlossen_am: new Date(),
                    modified_at: new Date()
                })
                    .then(() => {
                    console.log('InventoryProgressService #55 setCurrentInventurLockStatusClosed update emit Status Locked');
                    this.inventurLockStatusChanged.emit(status);
                    return true;
                })
                    .catch(() => {
                    return false;
                });
            }
            else {
                console.log('InventoryProgressService #63 setCurrentInventurLockStatusClosed insert Status Locked');
                const insertKey = [jobid, uid, deviceId];
                const insertDaten = {
                    jobid,
                    uid,
                    device_id: deviceId,
                    token: '',
                    status: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIJobLockStatus"].Locked,
                    geladen_am: new Date(),
                    geschlossen_am: new Date(),
                    created_at: new Date(),
                    modified_at: new Date()
                };
                return this.dexieService.inventurenUserStatus
                    .add(insertDaten)
                    .then(() => {
                    console.log('InventoryProgressService #77 setCurrentInventurLockStatusClosed inserted emit Status Locked');
                    this.inventurLockStatusChanged.emit(status);
                    return true;
                })
                    .catch((reason) => {
                    console.error('InventoryProgressService #83 Status Locked konnte nicht gesetzt werden', { reason, insertDaten });
                    return false;
                });
            }
        });
    }
    setCurrentInventurLockStatusOpened() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const deviceId = this.baseData.getCurrentDeviceId();
            const status = _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_2__["DBDIJobLockStatus"].Unlocked;
            console.log('InventoryProgressService #88 setCurrentInventurLockStatusOpened', { jobid, uid, deviceId, status });
            const exists = yield this.dexieService.inventurenUserStatus
                .where({ jobid, uid, device_id: deviceId })
                .count();
            if (exists) {
                return this.dexieService.inventurenUserStatus
                    .update([jobid, uid, deviceId], {
                    status,
                    geschlossen_am: new Date(),
                    modified_at: new Date()
                })
                    .then(() => {
                    this.inventurLockStatusChanged.emit(status);
                    return true;
                })
                    .catch(() => {
                    return false;
                });
            }
            else {
                const insertKey = [jobid, uid, deviceId];
                const insertDaten = {
                    jobid,
                    uid,
                    device_id: deviceId,
                    token: '',
                    status,
                    geladen_am: new Date(),
                    geschlossen_am: null,
                    created_at: new Date(),
                    modified_at: new Date()
                };
                return this.dexieService.inventurenUserStatus
                    .put(insertDaten, insertKey)
                    .then(() => {
                    this.inventurLockStatusChanged.emit(status);
                    return true;
                })
                    .catch((reason) => {
                    console.error('InventoryProgressService #137 Status Opened konnte nicht gesetzt werden', { reason, insertKey, insertDaten });
                    return false;
                });
            }
        });
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
            const ruuidListTmp = yield raeume.where({ gid }).toArray();
            const ruuidList = ruuidListTmp.filter((rg) => rg.gid === gid && rg.for_jobid === jobid).map((rg) => rg.uuid);
            const chunkSize = Math.ceil(ruuidList.length / 8);
            const chunks = [];
            for (let i = 0; i < ruuidList.length; i += chunkSize) {
                chunks.push(ruuidList.slice(i, i + chunkSize));
            }
            return yield Promise.all([
                inventar.where({ jobid }).count(),
                Promise.all(chunks.map((ruuidChunkList) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    return inventar
                        .where('ruuid').anyOf(ruuidChunkList)
                        .and((inv) => inv.for_jobid === jobid)
                        .count();
                })))
            ]).then((chunksTotalAndProgress) => {
                console.log({ chunksTotalAndProgress });
                progress.done = chunksTotalAndProgress[0];
                progress.total = chunksTotalAndProgress[1].reduce((sum, chnk) => sum + chnk, 0);
                return progress;
            });
        });
    }
    getCurrentRaumProgress(useRuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uuid = useRuuid || this.baseData.getCurrentRuuid();
            const jobid = this.baseData.getCurrentJobid();
            console.log('getCurrentRaumProgress calls getRaumProgressByRidAndJobid', { uuid, jobid });
            return this.getRaumProgressByUuidAndJobid(uuid, jobid).then((progress) => {
                this.raumProgressChanged.emit(Object.assign({ uuid }, progress));
                return progress;
            });
        });
    }
    getRaumProgressByUuidAndJobid(uuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const progress = {
                total: 0,
                done: 0,
            };
            yield Promise.all([
                this.dexieService.inventar.where({ ruuid: uuid }).count(),
                this.dexieService.inventar.where({ ruuid: uuid }).and(itm => itm.jobid === jobid).count()
            ]).then(totalAndProgress => {
                progress.total = totalAndProgress[0];
                progress.done = totalAndProgress[1];
            });
            console.log('called getRaumProgressByUuidAndJobid', { uuid, jobid, progress });
            return progress;
        });
    }
    getCurrentRaumInventarFound(useRuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ruuid = useRuuid || this.baseData.getCurrentRuuid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getRaumInventarFoundByRuuidAndJobid(ruuid, jobid);
        });
    }
    getRaumInventarFoundByRuuidAndJobid(ruuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.inventar.where({ ruuid, jobid }).toArray();
        });
    }
    getCurrentRaumInventarNotFound(useRuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ruuid = useRuuid || this.baseData.getCurrentRuuid();
            const jobid = this.baseData.getCurrentJobid();
            return this.getRaumInventarNotFoundByRuuidAndJobid(ruuid, jobid);
        });
    }
    getRaumInventarNotFoundByRuuidAndJobid(ruuid, jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.inventar.where({ ruuid }).and(item => item.jobid !== jobid).toArray();
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
    { type: _services_dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"] },
    { type: _services_basedata_service__WEBPACK_IMPORTED_MODULE_4__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InventoryProgressService.prototype, "inventurLockStatusChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InventoryProgressService.prototype, "raumProgressChanged", void 0);
InventoryProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryProgressService);



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/shared/services/basedata.service.ts");




let ApiService = class ApiService {
    constructor(http, baseData) {
        this.http = http;
        this.baseData = baseData;
        this.apiBaseUrl = '';
        this.apiBaseUrl = this.baseData.getCurrentApiBaseUrlOrSetDefault(this.getDefaultApiUrl);
    }
    getDefaultApiUrl() {
        const hostName = window.location.hostname;
        let defaultUrl = '';
        const rgx = /(demo-)(.*?)(-app)(.mertens.services)/;
        if (rgx.test(hostName)) {
            defaultUrl = 'https://' + hostName.replace(rgx, '$1$2-admin$4') + '/';
            console.log('ApiService #24 getDefaultApiUrl()', { hostName, defaultUrl });
            return defaultUrl;
        }
        switch (hostName) {
            case 'inventory.local':
            case '127.0.0.1':
            case 'localhost':
                defaultUrl = 'https://' + hostName + ':8040/';
                break;
            case 'mertens-inventory-client.bluebirdapp.de':
                defaultUrl = 'https://mertens-inventory.bluebirdapp.de/';
                break;
            case 'demo-rheinenergie-app.mertens.services':
            case 'demo-apo-app.mertens.services':
            case 'demo-pc-app.mertens.services':
                defaultUrl = 'https://' + hostName.replace('-app.mertens.services', '-admin.mertens.services') + '/';
                break;
            case 'mertens-inventory-rc.web.app':
            case 'mertens-inventory-rc.firebaseapp.com':
            case 'mertens-inventory-dev.web.app':
            case 'mertens-inventory-dev.firebaseapp.com':
            case 'dev-inventory-app.mertens.services':
                defaultUrl = 'https://dev-inventory.mertens.services/';
                break;
            case 'mertens-inventory.firebaseapp.com':
            case 'mertens-inventory.web.app':
            default:
                defaultUrl = 'https://inventory.mertens.services/';
        }
        console.log('ApiService #50 getDefaultApiUrl()', { hostName, defaultUrl });
        return defaultUrl;
    }
    getBaseUrl() {
        return this.apiBaseUrl;
    }
    getUrlByPath(path) {
        while (path.startsWith('/')) {
            path = path.substr(1);
        }
        return this.apiBaseUrl + path;
    }
    getHealthPingUrl() {
        return this.getUrlByPath('assets/ping.json');
    }
    getConnectedPingUrl() {
        return this.getUrlByPath('auth/connected');
    }
    getUrl(url) {
        if (url.substr(0, 10).match(/^[a-zA-Z]:\/\//)) {
            return url;
        }
        return this.getUrlByPath(url);
    }
    get(path, options) {
        console.log('ApiService #89 Send GET-Request for path ', path, this.getUrl(path));
        return this.http.get(this.getUrl(path), options);
    }
    post(path, body, options) {
        console.log('ApiService #89 Send POST-Request for path ', path, this.getUrl(path));
        return this.http.post(this.getUrl(path), body, options);
    }
    put(path, body, options) {
        return this.http.put(this.getUrl(path), body, options);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/services/basedata.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/basedata.service.ts ***!
  \*****************************************************/
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
        this.mandantChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventurChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gebaeudeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.raumChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deviceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventurStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apiBaseUrlChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentMandant = JSON.parse(localStorage.getItem('currentMandant'));
        this.currentInventur = JSON.parse(localStorage.getItem('currentInventur'));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.previousUser = JSON.parse(localStorage.getItem('previousUser'));
        this.currentGebaeude = JSON.parse(localStorage.getItem('currentGebaeude'));
        this.currentRaum = JSON.parse(localStorage.getItem('currentRaum'));
        this.currentDevice = JSON.parse(localStorage.getItem('currentDevice'));
        this.currentInventurStatus = JSON.parse(localStorage.getItem('currentInventurStatus'));
        this.currentApiBaseUrl = JSON.parse(localStorage.getItem('currentApiBaseUrl'));
    }
    setCurrentMandant(mandant) {
        this.currentMandant = mandant;
        localStorage.setItem('currentMandant', JSON.stringify(mandant));
        this.mandantChanged.emit(this.currentMandant);
    }
    setCurrentInventur(inventur) {
        this.currentInventur = inventur;
        localStorage.setItem('currentInventur', JSON.stringify(inventur));
        this.inventurChanged.emit(this.currentInventur);
    }
    setCurrentInventurStatus(inventurStatus) {
        this.currentInventurStatus = inventurStatus;
        localStorage.setItem('currentInventurStatus', JSON.stringify(inventurStatus));
        this.inventurStatusChanged.emit(this.currentInventurStatus);
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
    setPreviousUser(user) {
        this.previousUser = user;
        localStorage.setItem('previousUser', JSON.stringify(user));
    }
    setCurrentApiBaseUrl(apiBaseUrl) {
        this.currentApiBaseUrl = apiBaseUrl;
        localStorage.setItem('currentApiBaseUrl', JSON.stringify(apiBaseUrl));
        this.apiBaseUrlChanged.emit(this.currentApiBaseUrl);
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
    getPreviousUser() {
        return this.previousUser;
    }
    getPreviousUid() {
        try {
            return this.previousUser.id;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentUid() {
        try {
            return this.currentUser.id;
        }
        catch (e) {
            return 0;
        }
    }
    getCurrentMandant() {
        return this.currentMandant;
    }
    getCurrentInventur() {
        return this.currentInventur;
    }
    getCurrentInventurStatus() {
        return this.currentInventurStatus;
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
    getCurrentRuuid() {
        try {
            return this.currentRaum.uuid;
        }
        catch (e) {
            return '';
        }
    }
    getCurrentApiBaseUrl() {
        return this.currentApiBaseUrl;
    }
    getCurrentApiBaseUrlOrSetDefault(setter) {
        if (!this.currentApiBaseUrl) {
            this.setCurrentApiBaseUrl(setter());
        }
        return this.currentApiBaseUrl;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "userChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "mandantChanged", void 0);
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "inventurStatusChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasedataService.prototype, "apiBaseUrlChanged", void 0);
BasedataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasedataService);



/***/ }),

/***/ "./src/app/shared/services/connection-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/connection-service.service.ts ***!
  \***************************************************************/
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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
var ConnectionService_1;







/**
 * InjectionToken for specifing ConnectionService options.
 */
const ConnectionServiceOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ConnectionServiceOptionsToken');
let ConnectionService = ConnectionService_1 = class ConnectionService {
    constructor(http, options, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.stateChangeEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentState = {
            hasServerAccess: false,
            hasValidSession: false,
            hasNetworkConnection: window.navigator.onLine
        };
        this.serviceOptions = lodash__WEBPACK_IMPORTED_MODULE_4__["defaults"]({}, options, ConnectionService_1.DEFAULT_OPTIONS);
        this.checkNetworkState();
        this.checkInternetState();
        // this.checkAuthenticationState();
    }
    /**
     * Current ConnectionService options. Notice that changing values of the returned object has not effect on service execution.
     * You should use "updateOptions" function.
     */
    get options() {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.serviceOptions);
    }
    setAuthState(isLoggedIn) {
        this.currentState.hasValidSession = isLoggedIn;
        this.emitEvent();
    }
    refresh() {
        this.checkInternetState();
    }
    checkInternetState() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"](this.httpSubscription)) {
            this.httpSubscription.unsubscribe();
        }
        const method = this.serviceOptions.requestMethod;
        const heartBeatPath = this.serviceOptions.heartbeatUrl;
        if (this.serviceOptions.enableHeartbeat) {
            this.httpSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.serviceOptions.heartbeatInterval)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.apiService[method](heartBeatPath, { responseType: 'text' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(errors => errors.pipe(
            // log error message
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(val => {
                console.error('Http error:', val);
                const lastAccess = this.currentState.hasServerAccess;
                this.currentState.hasServerAccess = false;
                if (lastAccess !== false) {
                    this.emitEvent();
                }
            }), 
            // restart after 5 seconds
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.serviceOptions.heartbeatRetryInterval))))
                .subscribe(result => {
                const lastAccess = this.currentState.hasServerAccess;
                const lastSession = this.currentState.hasValidSession;
                this.currentState.hasServerAccess = true;
                if (result && typeof result === 'string' && result.match(/"connected"\s*:\s*true/)) {
                    this.currentState.hasValidSession = true;
                }
                if (lastAccess !== this.currentState.hasServerAccess
                    || lastSession !== this.currentState.hasValidSession) {
                    this.emitEvent();
                }
            });
        }
        else {
            const lastAccess = this.currentState.hasServerAccess;
            this.currentState.hasServerAccess = false;
            if (lastAccess !== false) {
                this.emitEvent();
            }
        }
    }
    checkNetworkState() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"](this.onlineSubscription)) {
            this.onlineSubscription.unsubscribe();
        }
        this.onlineSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').subscribe(() => {
            this.currentState.hasNetworkConnection = true;
            this.checkInternetState();
            this.emitEvent();
        });
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"](this.offlineSubscription)) {
            this.offlineSubscription.unsubscribe();
        }
        this.offlineSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').subscribe(() => {
            this.currentState.hasNetworkConnection = false;
            this.currentState.hasServerAccess = false;
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
    get hasServerAccess() {
        return this.currentState.hasServerAccess;
    }
    get hasNetworkConnection() {
        return this.currentState.hasNetworkConnection;
    }
};
ConnectionService.DEFAULT_OPTIONS = {
    enableHeartbeat: true,
    heartbeatUrl: '/auth/heartbeat',
    heartbeatInterval: 120000,
    heartbeatRetryInterval: 60000,
    requestMethod: 'get',
    responseType: 'text'
};
ConnectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ConnectionServiceOptionsToken,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
ConnectionService = ConnectionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ConnectionServiceOptionsToken)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], ConnectionService);



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: InventarDataResultError, JoinResultType, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarDataResultError", function() { return InventarDataResultError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinResultType", function() { return JoinResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/dexie.interfaces */ "./src/app/shared/interfaces/dexie.interfaces.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var _dbsync_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dbsync-client.service */ "./src/app/shared/services/dbsync-client.service.ts");
/* harmony import */ var _pages_invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/invent-form/data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _dbsync_log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dbsync-log.service */ "./src/app/shared/services/dbsync-log.service.ts");











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
const log = {
    info: (line, ...vars) => {
        const l = console.log.bind(console, '[INFO] data.service.ts #' + line);
        l.apply(console, vars);
    },
    err: (line, ...vars) => {
        const l = console.error.bind(console, '[ERROR] data.service.ts #' + line);
        l.apply(console, vars);
    },
    dbg: (line, ...vars) => {
        const l = console.log.bind(console, '[Debug] data.service.ts #' + line);
        l.apply(console, vars);
    },
    warn: (line, ...vars) => {
        const l = console.log.bind(console, '[Warning] data.service.ts #' + line);
        l.apply(console, vars);
    }
};
let DataService = class DataService {
    constructor(api, dexie, barcodeLookup, connectionService, settingsService, DbSyncService, dbSyncLogService) {
        this.api = api;
        this.dexie = dexie;
        this.barcodeLookup = barcodeLookup;
        this.connectionService = connectionService;
        this.settingsService = settingsService;
        this.DbSyncService = DbSyncService;
        this.dbSyncLogService = dbSyncLogService;
        this.lastLoadFailed = false;
        this.loadingDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clientSyncAmountChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentState = connectionService.getCurrentState();
        this.connectionService.monitor().subscribe((currentState) => {
            log.info(43, 'network status has changed', { currentState });
            this.currentState = currentState;
            this.subscriptionClientLogsChanged = this.dexie.clientSyncAmountChanged.subscribe((amount) => {
                console.log('DataService #245 clientSyncAmountChanged: ', { amount });
                this.clientSyncAmountChanged.emit(amount);
            });
        });
    }
    ngOnDestroy() {
        this.subscriptionClientLogsChanged.unsubscribe();
    }
    getSelectedRoom() {
    }
    getUserAssignedInventories(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            log.info(173, 'getUserAssignedInventories');
            let userInventuren = [];
            if (this.currentState.hasServerAccess) {
                log.dbg(177, 'getUserAssignedInventories, call loadUserAssignedInventories');
                yield this.loadUserAssignedInventories();
            }
            else {
                log.err(180, 'getUserAssignedInventories no InternetAccess. Cannot call loadUserAssignedInventories', { 'this.currentState': this.currentState, 'this.currentState.hasInternetAccess': this.currentState.hasServerAccess });
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
            log.dbg(205, 'loadUserAssignedInventories');
            const db = this.dexie;
            const api = this.api;
            this.dbSyncLogService.metaMessage({ message: 'Lade Inventuren Meta-Daten ...' });
            // jobidsByAuthUser
            return yield Promise
                .all([
                api.get('auth/me').toPromise(),
                api.get('api/inventur/jobidsByAuthUser').toPromise(),
                api.get('api/inventur/clientsByAuthUser').toPromise()
                    .then(list => {
                    this.dbSyncLogService.metaMessage({ message: 'Lade Mandanten ... ' + list.length });
                    return Promise.all(list.map((item) => db.mandanten.put(item)));
                }),
                api.get('api/inventur/gebaeudeByAuthUser').toPromise()
                    .then(list => {
                    this.dbSyncLogService.metaMessage({ message: 'Lade Mandanten ... ' + list.length });
                    return Promise.all(list.map((item) => db.gebaeude.put(item)));
                }),
                api.get('api/inventur/listByAuthUser').toPromise()
                    .then(list => {
                    this.dbSyncLogService.metaMessage({ message: 'Lade Gebäude ... ' + list.length });
                    return Promise.all(list.map((item) => db.inventuren.put(item)));
                }),
                api.get('api/inventur/inventurenGebaeudeByAuthUser').toPromise()
                // ,api.get<DBDIInventurenUserStatus[]>( 'api/inventur/inventurenStatusByAuthUser').toPromise()
            ])
                .then((results) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.dbSyncLogService.metaMessage({ message: 'Inventuren Meta-Daten wurden heruntergeladen' });
                const authUser = results[0];
                const invUser = results[1];
                const mandantenRslt = results[2];
                const gebaeudeRslt = results[3];
                const inventurenRslt = results[4];
                const invGebaeude = results[5];
                this.dbSyncLogService.metaMessage({ message: 'Bereinige Inventur-Auswahl' });
                const del = yield db.inventurenUser.where('uid').equals(authUser.id).delete();
                yield invUser.map((item) => {
                    return db.inventurenUser.add(item)
                        .then(id => id)
                        .catch(reason => {
                        console.error(reason, 'DataService.loadUserAssignedInventories() #293', { item });
                        return [0, 0];
                    });
                });
                this.dbSyncLogService.metaMessage({ message: 'Bereinige Gebäude-Auswahl' });
                const delG = yield db.inventurenGebaeude.where('uid').equals(authUser.id).delete()
                    .catch((reason) => console.error('Cannot delete GRef', reason));
                yield invGebaeude.map((item) => db.inventurenGebaeude.add(item)
                    .catch((reason) => {
                    console.error(reason, 'DataService..loadUserAssignedInventories() #304 inventurenGebaeude.add', { item });
                }));
                this.dbSyncLogService.metaMessage({ message: 'Inventuren Meta-Daten wurden importiert' });
                console.log('Finished loading user-inventories');
                return true;
            }))
                .finally(() => {
            });
        });
    }
    loadClientList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#244  data.service loadClientList');
            return this.api
                .get('api/mandant')
                .subscribe((list) => {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                const asyncJobs = [];
                asyncJobs.push(this.dexie.mandanten.clear());
                list.forEach((item) => {
                    console.log({ called: 'loadClientList', item });
                    asyncJobs.push(this.dexie.mandanten.put(item));
                });
                Promise.all(asyncJobs).finally(() => { });
            });
        });
    }
    loadGebaeudeListByClientId(mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#261  data.service loadGebaeudeListByClientd');
            yield this.api
                .get('api/mandant/' + mid + '/gebaeude')
                .subscribe((list) => {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                this.dexie.gebaeude.where('mid').equals(mid)
                    .delete()
                    .then(() => {
                    return list.map((item) => {
                        console.log({ called: 'loadGebaeudeList', item });
                        return this.dexie.gebaeude.put(item);
                    });
                })
                    .finally(() => {
                });
            });
            return true;
        });
    }
    loadRaeumeListByGebaeudeId(gid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#283  data.service');
            this.api.get('api/gebaeude/' + gid + '/raeume').subscribe((list) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                this.dexie.stopChangeLogForImport(true);
                yield this.dexie.raeume
                    .where('gid').equals(gid)
                    .delete()
                    .then((nr) => list.map((item) => {
                    console.log({ called: 'loadClientList', item });
                    return this.dexie.raeume.put(Object.assign({}, item, { log: false }));
                }))
                    .finally(() => {
                    this.dexie.stopChangeLogForImport(false);
                });
            }));
        });
    }
    loadInventar(gid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#303  data.service');
            this.api.get('api/gebaeude/' + gid + '/raeume').subscribe((list) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('SelectInventoryComponent', 'loadClientList', { list });
                this.dexie.stopChangeLogForImport(true);
                console.log('#303 data-service delete raeume');
                return this.dexie.raeume.where('gid').equals(gid)
                    .delete()
                    .then((nr) => {
                    return list.map((item) => {
                        console.log({ called: 'loadClientList', item });
                        return this.dexie.raeume.put(Object.assign({}, item, { log: false }));
                    });
                })
                    .finally(() => {
                    this.dexie.stopChangeLogForImport(false);
                });
            }));
        });
    }
    hasAllInventurData(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // tslint:disable-next-line:variable-name
            const for_jobid = jobid;
            return (!!(yield this.dexie.inventar.where({ for_jobid }).first())
                && !!(yield this.dexie.raeume.where({ for_jobid }).first())
                && !!(yield this.dexie.objektKatalogMandant.where({ for_jobid }).first())
                && !!(yield this.dexie.objektbuchBarcodesLookup.where({ for_jobid }).first())
                && !!(yield this.dexie.barcodeLookup.where({ for_jobid }).first()));
        });
    }
    hasValidInventurRevId(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const varName = 'jobid-' + jobid + '-revision-id';
            const lastRevId = +(yield this.settingsService.get(varName, 0));
            return (!isNaN(lastRevId) && lastRevId > 0);
        });
    }
    loadInventurDataByInventurId(jobid, reset = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('#324 called loadInventurDataByInventurId(', jobid, reset, ')');
            this.setLoadingStarted(jobid);
            const syncLogMsg = this.dbSyncLogService.message.bind(this.dbSyncLogService, [jobid]);
            const syncLogErr = this.dbSyncLogService.error.bind(this.dbSyncLogService, [jobid]);
            const tables = {
                gebaeude: 'pending',
                raeume: 'pending',
                hersteller: 'pending',
                images: 'pending',
                inventar: 'pending',
                objektKatalogGlobal: 'pending',
                objektKatalogMandant: 'pending',
                objektKatalogImages: 'pending',
                objektbuchBarcodesLookup: 'pending'
            };
            const tablesLoadingStatus = {};
            for (const t in tables) {
                if (!tables.hasOwnProperty(t)) {
                    continue;
                }
                tablesLoadingStatus[t] = {
                    table: t,
                    status: 'pending',
                    total: -1,
                    current: -1,
                    progress: 0,
                    startDate: null,
                    finished: null
                };
            }
            const tblStatus = (table, statKey, value) => {
                console.log('#441 tblStatus', { table, statKey, value, tables, tablesLoadingStatus });
                if (typeof statKey === 'string' && typeof value !== 'undefined') {
                    tablesLoadingStatus[table][statKey] = value;
                    tables[table] = statKey + ' ' + value;
                }
                else if (typeof statKey === 'string') {
                    tablesLoadingStatus[table].status = statKey;
                    tables[table] = statKey;
                }
                else if (typeof statKey === 'object') {
                    for (const k in statKey) {
                        if (statKey.hasOwnProperty(k)) {
                            tablesLoadingStatus[table][k] = statKey[k];
                            tables[table] = k + ' ' + statKey[k];
                        }
                    }
                }
                this.loadingDataChanged.emit(tablesLoadingStatus);
                console.log(tables);
            };
            const inventurAlreadyStartedRevId = +(yield this.settingsService.get('jobid-' + jobid + '-revision-id', 0));
            console.log('#388 loadInventurDataByInventurId, inventurAlreadyStartedRevId: ', inventurAlreadyStartedRevId);
            const hasAllInventurData = yield this.hasAllInventurData(jobid);
            if (!reset
                && !isNaN(inventurAlreadyStartedRevId) && inventurAlreadyStartedRevId > 0
                && hasAllInventurData) {
                console.log('#338 loadInventurDataByInventurId');
                const numUnsyncedClientChanges = yield this.DbSyncService.numUnsyncedChangeLogsByJobId(jobid);
                console.log('#340 loadInventurDataByInventurId', { numUnsyncedClientChanges });
                if (numUnsyncedClientChanges) {
                    console.log('#342 loadInventurDataByInventurId START SYNC', { numUnsyncedClientChanges });
                    this.setLoadingFinished();
                    const syncJobResult = yield this.DbSyncService.syncJob(jobid);
                    return [{
                            success: true,
                            switchedToSync: true,
                            syncJobResult
                        }];
                }
                else {
                    console.log('#346 loadInventurDataByInventurId NOTHING TO SYNC');
                    this.setLoadingFinished();
                    return [{
                            success: true,
                            errorMsg: '',
                            total: 0,
                            inserts: 0,
                            revisionId: yield this.settingsService.get('jobid-' + jobid + '-revision-id'),
                            debug: null,
                        }];
                }
            }
            // await this.DbSyncService
            this.dbSyncLogService.start(jobid, inventurAlreadyStartedRevId);
            this.dexie.stopChangeLogForImport(true);
            if (reset) {
                syncLogMsg('Reset: Daten werden für kompletten Neu-Import zurückgesetzt!');
                console.log('DataService.loadInventurDataByInventurId(', jobid, reset, ')  #473');
                const numRaeume = yield this.dexie.raeume.where({ for_jobid: jobid }).count().catch((reason) => {
                    console.error('#354 ', { reason });
                });
                console.log('#357 Before cleanup');
                yield Promise.all([
                    this.dexie.raeume.where({ for_jobid: jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Räume');
                        console.log('#359finished cleanup raeume');
                    }),
                    this.dexie.inventar.where({ for_jobid: jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Inventar');
                        console.log('#361 finished cleanup inventar');
                    }),
                    this.dexie.hersteller.where({ for_jobid: jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Hersteller');
                        console.log('#363 finished cleanup hersteller');
                    }),
                    this.dexie.images.filter((img) => img.for_jobid === jobid).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Images');
                        console.log('#365 finished cleanup images');
                    }),
                    this.dexie.objektKatalogMandant
                        .where({ for_jobid: jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Katalogdaten (Mandant)');
                        console.log('#367 finished cleanup okg');
                        this.dexie.objektKatalogGlobal
                            .where({ created_jobid: jobid })
                            .each((itm) => {
                            this.dexie.objektKatalogMandant.where({ gcuuid: itm.uuid }).count().then((num) => {
                                if (num === 0) {
                                    this.dexie.objektKatalogGlobal.delete(itm.uuid);
                                }
                            });
                        })
                            .finally(() => {
                            syncLogMsg('Finished Reset Mandanten-Spezifische Katalogdaten (Global)');
                            console.log('#463 finished cleanup okm');
                        });
                    }),
                    this.dexie.objektKatalogImages.where({ created_jobid: jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Katalog/Raum-Images');
                        console.log('#459 finished cleanup okm');
                    }),
                    this.dexie.clientChangeLog.where({ jobid }).delete()
                        .finally(() => {
                        syncLogMsg('Finished Reset Client-Change-Log');
                        console.log('#464 finished cleanup clientchangelog');
                    })
                ]);
                syncLogMsg('Reset: Daten wurden zurückgesetzt!');
                console.log('#373 After cleanup');
                const resetCmt = 'data.service.tx loadInventurDataByInventurId() reset';
                yield Promise.all([
                    this.settingsService.set('jobid-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('inventar-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('raeume-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('images-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('hersteller-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('objektKatalogGlobal-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('objektKatalogMandant-' + jobid + '-revision-id', 0, resetCmt),
                    this.settingsService.set('objektKatalogImages-' + jobid + '-revision-id', 0, resetCmt)
                ]);
                syncLogMsg('Reset: Revision-Ids wurden zurückgesetzt!');
                console.log('#362 loadInventurDataByInventurId');
            }
            syncLogMsg('Import: Starte Server-Download!');
            console.log('#477 loadInventurDataByInventurId, start parallel data-imports.');
            const loadingResult = yield Promise
                .all([
                this.loadTableDataByUrl('gebaeude', `api/inventur/${jobid}/gebaeude`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('raeume', `api/inventur/${jobid}/raeume`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('hersteller', `api/inventur/${jobid}/hersteller`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('images', `api/inventur/${jobid}/images`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('inventar', `api/inventur/${jobid}/inventar`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('objektKatalogGlobal', `api/inventur/${jobid}/katalog`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('objektKatalogMandant', `api/inventur/${jobid}/artikelids`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('objektbuchBarcodesLookup', `api/inventur/${jobid}/objektbuchLookup`, tblStatus, { jobid, reset }),
                this.loadTableDataByUrl('objektKatalogImages', `api/inventur/${jobid}/katalogImages`, tblStatus, { jobid, reset })
            ])
                .then((results) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, arguments, void 0, function* () {
                const maxRevId = results.reduce((carry, item) => {
                    if (isNaN(item.revisionId)) {
                        console.log('#501 data.service item.revisionId not found', { carry, item });
                        return carry;
                    }
                    const max = Math.max(carry, item.revisionId || 0);
                    console.log('#414 data.service reduce to maxRevId', { carry, item, max });
                    return Math.max(carry, item.revisionId);
                }, 0);
                this.settingsService.setRevId('jobid-' + jobid + '-revision-id', maxRevId, 'data.service.ts loadInventurDataByInventurId()');
                console.log('#511 data.service.ts loadInventurDataByInventurId() Start rebuild of barcodeLookup Table');
                yield this.barcodeLookup.rebuildByJobid(jobid);
                console.log('#513 data.service.ts loadInventurDataByInventurId() finished', 'arguments', arguments);
                return results;
            }))
                .finally(() => {
                this.dexie.stopChangeLogForImport(false);
            });
            this.setLoadingFinished();
            return loadingResult;
        });
    }
    setLoadingStarted(jobid) {
        this.DbSyncService.setFullImportJobId(jobid);
    }
    setLoadingFinished() {
        this.DbSyncService.setFullImportJobId(0);
    }
    getLoadingJobId() {
        return this.DbSyncService.getFullImportJobId();
    }
    loadTableDataByUrl(table, dataUrl, cbTblStatus, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const syncLogMsg = this.dbSyncLogService.message.bind(this.dbSyncLogService, [options.jobid]);
            const syncLogErr = this.dbSyncLogService.error.bind(this.dbSyncLogService, [options.jobid]);
            const syncLogData = this.dbSyncLogService.log.bind(this.dbSyncLogService);
            console.log('#425  data.service loadTableDataByUrl ', table);
            const jobid = options.jobid;
            const reset = options.reset || false;
            const varLastRevisionId = `${table}-${jobid}-revision-id`;
            const varLastLoadAttempt = `${table}-${jobid}-download-attempt`;
            const varLastLoadSuccess = `${table}-${jobid}-download-success`;
            const varLastLoadEntries = `${table}-${jobid}-download-entries`;
            const lastRevisionId = yield this.settingsService.get(varLastRevisionId);
            const lastLoadSuccessDate = yield this.settingsService.get(varLastLoadSuccess);
            const lastLoadAttemptDate = new Date();
            let nextUrl = dataUrl;
            this.settingsService.set(varLastLoadAttempt, lastLoadAttemptDate);
            if (!reset && lastLoadSuccessDate) {
                nextUrl += '?lastLoad=' + Date.parse(lastLoadSuccessDate) + '&lastRevId=' + lastRevisionId;
            }
            let inserts = 0;
            let total = 0;
            let revisionId = 0;
            let numChunks = 0;
            syncLogMsg('Starte Download und Import: ' + table + ' from ' + nextUrl);
            if (!nextUrl) {
                console.error('#551  this.loadTableDataByUrl nextUrl is Empty', { table, dataUrl, nextUrl, reset });
            }
            const logData = (puts) => {
                return {
                    jobid,
                    table,
                    revisionId,
                    total,
                    puts,
                    modified: 0,
                    deleted: 0
                };
            };
            while (nextUrl) {
                const url = nextUrl;
                if (cbTblStatus) {
                    cbTblStatus(table, {
                        status: 'downloading Part ' + (numChunks + 1),
                        startDate: new Date()
                    });
                }
                console.log({ function: 'loadTableDataByUrl', table, url, cbTblStatus, options });
                yield this.api.get(url).toPromise()
                    .then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    nextUrl = ('nextUrl' in data) ? data.nextUrl : '';
                    console.log('#452 data.service: Retrieved Data ', table, ' for processing!');
                    numChunks++;
                    const numRows = data.rows.length;
                    if ('total' in data) {
                        total = data.total;
                    }
                    else {
                        total = numRows;
                    }
                    if (cbTblStatus) {
                        cbTblStatus(table, {
                            status: 'process import',
                            total
                        });
                    }
                    revisionId = data.revisionId || 0;
                    this.settingsService.set(varLastLoadSuccess, lastLoadAttemptDate);
                    this.settingsService.set(varLastLoadEntries, inserts + numRows);
                    const stepSize = parseInt((data.rows.length / 10).toString(), 10);
                    if (!data.rows) {
                        console.error('#468 data.service loadTableDataByUrl Invalid Data-Structure from ', { url, data });
                    }
                    return yield Promise.all(data.rows.map((item, i) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        return this.dexie.table(table).put(Object.assign({}, item, { log: false })).then(() => {
                            if (((i + 1) % stepSize === 0 || (i + 1) === total) && cbTblStatus) {
                                cbTblStatus(table, {
                                    current: inserts + 1,
                                    progress: ((inserts + 1) * 100 / total).toFixed(1)
                                });
                            }
                            inserts += 1;
                            if (inserts % 100 === 0) {
                                syncLogData(logData(inserts));
                            }
                            return true;
                        });
                    })));
                }));
            }
            if (revisionId) {
                this.settingsService.set(varLastRevisionId, revisionId);
            }
            syncLogData(logData(inserts));
            syncLogMsg('Finished Table ' + table);
            if (cbTblStatus) {
                cbTblStatus(table, {
                    status: 'finished',
                    finished: new Date()
                });
            }
            console.log('#543 data.service loadTableDataByUrl Finished Importprocess Data ', table, ' inserts', inserts);
            return {
                success: true,
                errorMsg: '',
                total,
                inserts,
                numChunks,
                revisionId,
            };
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
        return Object.assign({}, globalData, link, { mcuuid: link.uuid });
    }
    getFullRaumData(raum, gebaeude) {
        const raumGebaeudeData = Object.assign({}, raum, gebaeude);
        return raumGebaeudeData;
    }
    getArtikelRefByGcuuidMid(gcuuid, mid) {
        return this.dexie.objektKatalogMandant.where({ gcuuid, mid }).first();
    }
    getArtikelRef(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogMandant.get(uuid);
        });
    }
    getArtikelData(gcuuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.objektKatalogGlobal.get(gcuuid);
        });
    }
    getArtikel(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelLink = yield this.dexie.objektKatalogMandant.get({ uuid });
            const artikelData = yield this.dexie.objektKatalogGlobal.get({ uuid: artikelLink.gcuuid });
            return this.getFullArtikelData(artikelLink, artikelData);
        });
    }
    getArtikelRefAndData(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelRef = yield this.dexie.objektKatalogMandant.get({ uuid });
            const artikelData = yield this.dexie.objektKatalogGlobal.get({ uuid: artikelRef.gcuuid });
            return {
                artikelRef,
                artikelData
            };
        });
    }
    getInventarRef(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.inventar.get(uuid);
        });
    }
    getInventarData(uuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inventarRef = yield this.dexie.inventar.get(uuid);
            if (!inventarRef) {
                return { success: false, errorCode: InventarDataResultError.InventarNotFound };
            }
            const artikelRef = yield this.dexie.objektKatalogMandant.get(inventarRef.mcuuid);
            if (!artikelRef) {
                return { success: false, errorCode: InventarDataResultError.ArtikelRefNotFound };
            }
            const artikelData = yield this.dexie.objektKatalogGlobal.get(artikelRef.gcuuid);
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
    getRaumAndGebaeude(ruuid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const raum = yield this.dexie.raeume.get(ruuid);
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
    getRaum(uuid) {
        let raum;
        return this.dexie.raeume.get({ uuid })
            .then((data) => {
            raum = data;
            const gid = raum.gid;
            return this.dexie.gebaeude.get({ gid });
        })
            .then((gebaeude) => this.getFullRaumData(raum, gebaeude));
    }
    getRaeumeByGebaeudeId(gid, jobid) {
        return this.dexie.raeume.where({ gid, for_jobid: jobid }).toArray();
    }
    getArtikelListByClientId(mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const artikelRefs = yield this.dexie.objektKatalogMandant
                .where({ mid }).toArray();
            const artikelData = yield Promise.all(artikelRefs.map((ref) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return yield this.dexie.objektKatalogGlobal.get(ref.gcuuid);
            })));
            const artikelHst = yield Promise.all(artikelData.map((ref) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (typeof ref === 'undefined' || !ref || !ref.huuid) {
                    return '';
                }
                const hst = yield this.dexie.hersteller.get(ref.huuid);
                if (hst) {
                    return hst.Hersteller;
                }
                return '';
            })));
            return artikelRefs.map((ref, i) => (Object.assign({}, artikelData[i], ref, { mcuuid: ref.uuid }, { Hersteller: artikelHst[i] } // artikelHst[i].Hersteller
            )));
        });
    }
    getInventarByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const inventarMatches = yield db.inventar
                .where({ code: barcode })
                .toArray();
            for (const inventar of inventarMatches) {
                const artikelRef = yield db.objektKatalogMandant.get(inventar.mcuuid);
                if (!useMid || artikelRef.mid === useMid) {
                    const artikelData = yield db.objektKatalogGlobal.get(artikelRef.gcuuid);
                    return {
                        type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Inventar,
                        inventar,
                        artikelRef,
                        artikelData
                    };
                }
            }
            return {
                type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch
            };
        });
    }
    getRaumByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const raumMatch = yield db.raeume.where({ code: barcode }).first();
            if (raumMatch) {
                const gebaeude = yield db.gebaeude.get(raumMatch.gid);
                return {
                    type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].Raum,
                    raum: raumMatch,
                    gebaeude
                };
            }
            return { type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
        });
    }
    getArtikelByBarcode(barcode, useMid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexie;
            const listArtikelData = yield db.objektKatalogGlobal.where({ code: barcode }).toArray();
            if (listArtikelData.length === 0) {
                return { type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
            }
            return db.objektKatalogMandant.where('gcid')
                .anyOf(listArtikelData.map((d) => d.gcid))
                .filter((d) => !useMid || d.mid === useMid)
                .toArray()
                .then((refs) => {
                if (refs.length === 0) {
                    console.log('#531 barcodeLookup im Mandanten-Objektbuch NOT FOUND', { barcode, useMid });
                    return { type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].NoMatch };
                }
                if (refs.length === 1) {
                    return {
                        type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].ObjektBuchArtikel,
                        artikelRef: refs[0],
                        artikelData: listArtikelData.find(itm => itm.gcid === refs[0].gcid)
                    };
                }
                return refs.map(artikelRef => {
                    return {
                        type: _interfaces_dexie_interfaces__WEBPACK_IMPORTED_MODULE_3__["LookupResultType"].ObjektBuchArtikel,
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
            return list;
        });
    }
    getBuildingListByJobid(jobid, clientID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const listGebaeudeRef = yield this.dexie.inventurenGebaeude.where({ jobid }).toArray();
            const listGid = listGebaeudeRef.map((jg) => jg.gid);
            const list = yield this.dexie.gebaeude.where('gid').anyOf(listGid).filter((g) => g.mid === clientID).toArray();
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
            const Promise = dexie__WEBPACK_IMPORTED_MODULE_7__["default"].Promise;
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
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_4__["DexieService"] },
    { type: _pages_invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_9__["BarcodeService"] },
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"] },
    { type: _variables_service__WEBPACK_IMPORTED_MODULE_6__["VariablesService"] },
    { type: _dbsync_client_service__WEBPACK_IMPORTED_MODULE_8__["DBSyncClientService"] },
    { type: _dbsync_log_service__WEBPACK_IMPORTED_MODULE_10__["DbsyncLogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataService.prototype, "loadingDataChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataService.prototype, "clientSyncAmountChanged", void 0);
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/services/dbsync-client.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/dbsync-client.service.ts ***!
  \**********************************************************/
/*! exports provided: SyncJobStatus, SyncJobResult, DBSyncClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncJobStatus", function() { return SyncJobStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncJobResult", function() { return SyncJobResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBSyncClientService", function() { return DBSyncClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/shared/services/basedata.service.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _connection_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-service.service */ "./src/app/shared/services/connection-service.service.ts");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variables.service */ "./src/app/shared/services/variables.service.ts");
/* harmony import */ var _dbsync_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dbsync-log.service */ "./src/app/shared/services/dbsync-log.service.ts");
/* harmony import */ var _pages_invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/invent-form/data-services/barcode.service */ "./src/app/pages/invent-form/data-services/barcode.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var DBSyncClientService_1;










var SyncJobStatus;
(function (SyncJobStatus) {
    SyncJobStatus[SyncJobStatus["Init"] = 0] = "Init";
    SyncJobStatus[SyncJobStatus["AddedToProcessList"] = 1] = "AddedToProcessList";
    SyncJobStatus[SyncJobStatus["Pending"] = 2] = "Pending";
    SyncJobStatus[SyncJobStatus["AlreadyStarted"] = 3] = "AlreadyStarted";
    SyncJobStatus[SyncJobStatus["Offline"] = 4] = "Offline";
    SyncJobStatus[SyncJobStatus["Aborted"] = 5] = "Aborted";
    SyncJobStatus[SyncJobStatus["QueryChangeLogs"] = 6] = "QueryChangeLogs";
    SyncJobStatus[SyncJobStatus["AbortedEmptyChangeLogs"] = 7] = "AbortedEmptyChangeLogs";
    SyncJobStatus[SyncJobStatus["Online"] = 8] = "Online";
    SyncJobStatus[SyncJobStatus["AskForServerChanges"] = 9] = "AskForServerChanges";
    SyncJobStatus[SyncJobStatus["Uploading"] = 10] = "Uploading";
    SyncJobStatus[SyncJobStatus["ServerAnswered"] = 11] = "ServerAnswered";
    SyncJobStatus[SyncJobStatus["ServerAnsweredWithErrors"] = 12] = "ServerAnsweredWithErrors";
    SyncJobStatus[SyncJobStatus["WriteServerSyncedIds"] = 13] = "WriteServerSyncedIds";
    SyncJobStatus[SyncJobStatus["WriteServerReChanges"] = 14] = "WriteServerReChanges";
    SyncJobStatus[SyncJobStatus["WriteServerChanges"] = 15] = "WriteServerChanges";
    SyncJobStatus[SyncJobStatus["RefreshLogs"] = 16] = "RefreshLogs";
    SyncJobStatus[SyncJobStatus["FinishedWithErrors"] = 17] = "FinishedWithErrors";
    SyncJobStatus[SyncJobStatus["Finished"] = 18] = "Finished";
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
        this.serverChanges = {};
        this.unsynced = -1;
        this.errorMsg = '';
        this.starttime = Date.now();
        this.stoptime = 0;
        this.alreadyStartedProcess = null;
        this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.finished = false;
        this.numClientChanges = -1;
        this.numServerRechanges = -1;
        this.numServerChanges = -1;
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
        this.setStatus(status);
        if (typeof errorMsg !== 'undefined') {
            this.errorMsg = errorMsg;
        }
        return this;
    }
}
let DBSyncClientService = DBSyncClientService_1 = class DBSyncClientService {
    constructor(dexieService, apiService, baseData, networkService, settings, dbSyncLogService, bcLookupService) {
        this.dexieService = dexieService;
        this.apiService = apiService;
        this.baseData = baseData;
        this.networkService = networkService;
        this.settings = settings;
        this.dbSyncLogService = dbSyncLogService;
        this.bcLookupService = bcLookupService;
        this.processes = [];
        this.processingJobids = [];
        this.processStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.processFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.syncIntervalTimer = null;
        this.syncIntervalTime = 1 * 60 * 1000;
        this.fullImportJobid = 0;
        this.dbgLog = false;
        this.aLastServerChangesByJobid = [];
        this.serverChangesCacheLifetime = 60 * 1000;
        this.isInDebugMode = false;
        this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appVersion;
        this.autoSyncChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateStatusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentJobChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.syncErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptionClientLogsChanged = this.dexieService.clientSyncAmountChanged.subscribe((amount) => {
            if (this.isInDebugMode) {
                console.log('DBSyncClientService.constructor() subscribedEvent #271 clientSyncAmountChanged: ', { amount });
            }
        });
        this.subscriptionNetworkChanged = this.networkService.monitor().subscribe((state) => {
            if (this.isInDebugMode) {
                console.log('DBSyncClientService.constructor() connectionChanged #275', { state });
            }
            if (state.hasServerAccess) {
                this.autoSyncStart(true);
            }
            else {
                this.autoSyncStop();
            }
        });
        if (this.networkService.getCurrentState().hasServerAccess) {
            this.autoSyncStart();
        }
    }
    ngOnDestroy() {
        this.subscriptionClientLogsChanged.unsubscribe();
    }
    initCurrentJobSyncStatus() {
        this.currentJobSyncStatus = {
            jobid: 0,
            unsyncedClientLogs: 0,
            serverRevisionId: 0,
            clientRevisionId: 0,
            isUploading: false,
            isRunning: false,
            jobStatus: SyncJobStatus.Init
        };
    }
    addSyncProcess(process) {
        const logTi = 'DbsyncClientService.addSyncProcess(' + process.jobid + ')';
        console.log(logTi + ' #330 before add this.processes.length:', this.processes.length);
        this.processes.push(process);
        this.processingJobids.push(process.jobid);
        process.setStatus(SyncJobStatus.AddedToProcessList);
        console.log(logTi + ' #333 after add this.processes.length:', this.processes.length);
    }
    removeSyncProcessByJobid(jobid, reason = '') {
        this.processes = this.processes.filter((p) => {
            if (p.jobid === jobid) {
                p.finish(SyncJobStatus.Aborted, 'Abbruch');
            }
            return p.jobid !== jobid;
        });
        this.processingJobids = this.processes.map(proc => proc.jobid);
    }
    autoSyncIsRunning() {
        return this.syncIntervalTimer !== null;
    }
    setFullImportJobId(jobid) {
        this.fullImportJobid = jobid;
    }
    getFullImportJobId() {
        return this.fullImportJobid;
    }
    autoSyncStart(startNow = false) {
        const logTi = 'DbsyncClientService.autoSyncStart(' + (startNow ? 'true' : 'false') + ')';
        if (this.syncIntervalTimer) {
            this.autoSyncStop();
        }
        // Sync im 1-Minuten-Takt
        console.log(logTi + (new Date()).toTimeString() + ' setInterval this.sync, ' + this.syncIntervalTime + 'ms');
        const syncFunction = this.sync.bind(this);
        this.syncIntervalTimer = setInterval(() => {
            console.log(logTi + (new Date()).toTimeString() + ' interval execute this.sync.bind');
            syncFunction();
        }, this.syncIntervalTime);
        this.autoSyncChange.emit(true);
        if (startNow) {
            console.log(logTi + (new Date()).toTimeString() + ' startNow before interval starts in ' + this.syncIntervalTime + 'ms');
            this.sync();
        }
    }
    autoSyncStop() {
        if (this.syncIntervalTimer) {
            try {
                clearInterval(this.syncIntervalTimer);
                this.syncIntervalTimer = null;
                this.autoSyncChange.emit(false);
            }
            catch (e) { }
        }
    }
    sync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const logTi = 'DbsyncClientService.sync()';
            const currJobId = this.baseData.getCurrentJobid();
            console.log('DBSyncClientService.sync() #377 STARTED currJobId(', currJobId, ') at ' + (new Date()).toLocaleString());
            if (!this.networkService.getCurrentState().hasServerAccess) {
                console.error(logTi + ' #379 ABORT No-Internet-Access');
                return;
            }
            if (!this.networkService.getCurrentState().hasValidSession) {
                console.error(logTi + ' #400 ABORT No-Valid-Session');
                return;
            }
            const isDBSyncService = (this instanceof DBSyncClientService_1);
            if (this.isInDebugMode) {
                console.log(logTi + ' #384 this is DBSyncClientService', { isDBSyncService });
            }
            if (!isDBSyncService) {
                console.error(logTi + ' #387 this is not correct binded to Instance of DBSyncClientService');
                return;
            }
            if (this.isInDebugMode) {
                console.log(logTi + ' #392 call getIncompleteInventuren()');
            }
            let incompleteInventurLogs = yield this.getIncompleteInventuren();
            console.log(logTi + ' #389 all changes', incompleteInventurLogs
                .reduce((carry, job) => {
                return carry + job.changes.length;
            }, 0));
            const currJobIdx = incompleteInventurLogs.map(itm => itm.jobid).indexOf(currJobId);
            if (this.isInDebugMode) {
                console.log(logTi + ' #398 currJobIdx: ', currJobIdx);
            }
            if (currJobIdx !== -1) {
                if (this.isInDebugMode) {
                    console.log(logTi + ' #403');
                }
                const currJob = incompleteInventurLogs[currJobIdx];
                incompleteInventurLogs = incompleteInventurLogs.slice(currJobIdx, 1);
                console.log(logTi + ' #407 call sendByJobId(', currJob.jobid, currJob.changes, ')');
                yield this.sendByJobId(currJob.jobid, currJob.changes);
            }
            else {
                console.log(logTi + ' #410 no changes of currJobId(' + currJobId + ')');
            }
            for (const logs of incompleteInventurLogs) {
                if (logs.jobid === currJobId) {
                    continue;
                }
                if (this.isInDebugMode) {
                    console.log(logTi + ' #418 call sendByJobId(', logs.jobid, logs.changes, ')');
                }
                yield this.sendByJobId(logs.jobid, logs.changes);
            }
            console.log(logTi + ' #423 END');
        });
    }
    getCurrentClientRevId() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = this.baseData.getCurrentJobid();
            return this.getClientRevIdByJobid(jobid);
        });
    }
    getClientRevIdByJobid(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const lastRevIdVar = `jobid-${jobid}-revision-id`;
            return (yield this.settings.get(lastRevIdVar)) || 0;
        });
    }
    setCurrentClientRevId(newRevId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(`DBSyncClientService.setCurrentClientRevId(newRevId: ${newRevId}) #410`);
            const jobid = this.baseData.getCurrentJobid();
            const lastRevIdVar = `jobid-${jobid}-revision-id`;
            return yield this.settings.setRevId(lastRevIdVar, newRevId, 'dbsync-client.service.ts setCurrentClientRevId');
        });
    }
    askServerForChanges(jobid = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const logTi = 'DbsyncClientService.askServerForChanges(' + jobid + ')';
            if (!jobid) {
                jobid = this.baseData.getCurrentJobid();
            }
            const devid = this.baseData.getCurrentDeviceId() || 0;
            const lastRevId = yield this.getClientRevIdByJobid(jobid);
            if (!this.networkService.hasServerAccess) {
                console.error('Abort Change-Request: No Internet!');
                return { success: false, errorMsg: 'Abort Change-Request: No Internet!', MaxRevisionId: -1, NumChanges: -1 };
            }
            console.log(logTi + ' #466 Send Request: ' + `api/sync/havingChanges/${jobid}/${lastRevId}/${devid}`);
            return this.apiService
                .get(`api/sync/havingChanges/${jobid}/${lastRevId}/${devid}`, {})
                .toPromise()
                .then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (('errorMsg' in data) && data.errorMsg) {
                    console.error(data.errorMsg);
                    return { success: false };
                }
                return Object.assign({ success: true }, data);
            }))
                .catch((reason) => {
                console.error(logTi + ' #480 HTTP-ERROR ', { reason });
                return { success: false };
            });
        });
    }
    refreshServerChangeCache(jobid, timestamp, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const sc = this.aLastServerChangesByJobid.find(ch => ch.jobid === jobid);
            if (sc) {
                sc.timestamp = Date.now();
                sc.data = data;
            }
            else {
                this.aLastServerChangesByJobid.unshift({
                    jobid,
                    timestamp: Date.now(),
                    data
                });
            }
        });
    }
    getLastServerChanges(jobid = 0, maxAge = 60 * 10 * 1000) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const sc = this.aLastServerChangesByJobid.find(ch => ch.jobid === jobid);
            if (!sc || Date.now() - sc.timestamp > maxAge) {
                return this.askServerForChanges(jobid);
            }
            return sc.data;
        });
    }
    syncJob(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('DBSyncClientService.syncJob(jobid:', jobid, ') #404');
            this.clearFinishedProcesses();
            const currJobProc = this.processes.find(proc => proc.jobid === jobid);
            const newJob = new SyncJobResult(jobid);
            if (currJobProc && !currJobProc.finished) {
                console.log('DBSyncClientService.syncJob() #411. Sync für Job ', jobid, ' läuft bereits!');
                newJob.alreadyStartedProcess = currJobProc;
                return newJob.finish(SyncJobStatus.AlreadyStarted, 'Sync-Process is already running. Duration: ' + currJobProc.durationFormatted);
            }
            const numChanges = yield this.numUnsyncedChangeLogsByJobId(jobid);
            if (!numChanges && this.isInDebugMode) {
                console.log('DBSyncClientService.syncJob() #420. numClientChanges: ' + numChanges);
                // return newJob.finish(SyncJobStatus.AbortedEmptyChangeLogs);
            }
            if (this.isInDebugMode) {
                console.log('DBSyncClientService.syncJob() #424. call this.sendByJobId(' + jobid + ', [], newJob)');
            }
            this.sendByJobId(jobid, [], newJob);
            return newJob;
        });
    }
    finishProcess(proc, status, errorMsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!proc.finished) {
                proc.finish(status, errorMsg || null);
            }
            this.clearFinishedProcesses();
            this.processFinished.emit(proc);
            return proc;
        });
    }
    sendByJobId(useJobid, useLogs, useJobResult, force = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const origDebugMode = this.isInDebugMode;
            this.isInDebugMode = true;
            const logTi = 'DbsyncClientService.sendByJobId(' + useJobid +
                ', logs[' + (Array.isArray(useLogs) ? useLogs.length : 0) + '], ' +
                (typeof useJobResult) + ')';
            console.log(logTi + ' #448 at ', (new Date()).toLocaleTimeString(), ' processes.length: ', this.processes.length);
            this.clearFinishedProcesses();
            const jobid = useJobid;
            const syncJobResult = useJobResult || new SyncJobResult(jobid);
            const jobInProcess = this.processes.find(proc => proc.jobid === jobid);
            if (!force && jobInProcess && !jobInProcess.finished) {
                if (this.isInDebugMode) {
                    console.log(`DBSyncClientService.sendByJobId(${jobid}) #537. Abbruch. Sync läuft bereits`);
                    console.log('jobInProcess.jobid:', jobInProcess.jobid);
                    console.log('jobInProcess.status:', jobInProcess.status);
                    console.log('jobInProcess.starttime:', jobInProcess.starttime);
                    console.log('jobInProcess.duration:', jobInProcess.duration);
                    console.log('jobInProcess.synced:', jobInProcess.synced);
                    console.log('jobInProcess.numClientChanges:', jobInProcess.numClientChanges);
                    console.log('jobInProcess.numServerChanges:', jobInProcess.numServerChanges);
                    console.log('jobInProcess.numServerRechanges:', jobInProcess.numServerRechanges);
                    console.log('jobInProcess.finished:', jobInProcess.finished);
                    console.log('jobInProcess.committed:', jobInProcess.committed);
                    console.log('jobInProcess.errorMsg:', jobInProcess.errorMsg);
                }
                syncJobResult.alreadyStartedProcess = jobInProcess;
                return syncJobResult.finish(SyncJobStatus.AlreadyStarted);
            }
            this.addSyncProcess(syncJobResult);
            if (this.getFullImportJobId() === useJobid) {
                return this.finishProcess(syncJobResult, SyncJobStatus.AlreadyStarted, 'Synchronisation wurde abgebrochen, da Import noch läuft!');
            }
            if (!this.networkService.hasServerAccess) {
                return this.finishProcess(syncJobResult, SyncJobStatus.Offline, 'Synchronisatioon wurde abgebrochen wegen fehlender Serververbindung!');
            }
            syncJobResult.setStatus(SyncJobStatus.Online);
            if (this.isInDebugMode) {
                console.log(`DbsyncClientServer.sendByJobId(${jobid}) #525 call askServerForChanges`, (new Date()).toString());
            }
            syncJobResult.setStatus(SyncJobStatus.AskForServerChanges);
            const ServerInfo = (force) ? { NumChanges: 1 } : yield this.askServerForChanges();
            const devid = this.baseData.getCurrentDeviceId() || 0;
            const lastRevIdVar = `jobid-${jobid}-revision-id`;
            let lastRevId = (yield this.settings.get(lastRevIdVar)) || 0;
            syncJobResult.setStatus(SyncJobStatus.Pending);
            this.processStarted.emit(syncJobResult);
            syncJobResult.setStatus(SyncJobStatus.QueryChangeLogs);
            if (!useLogs || !useLogs.length) {
                if (this.isInDebugMode) {
                    console.log(`DBSyncClientService.sendByJobId(${jobid}) #548. Keine Client-Änderungen!`);
                }
                useLogs = yield this.getUnsyncedChangeLogsByJobId(useJobid);
            }
            syncJobResult.numClientChanges = (useLogs) ? useLogs.length : 0;
            if (!useLogs && !ServerInfo.NumChanges) {
                if (this.isInDebugMode) {
                    console.log(`DBSyncClientService.sendByJobId(${jobid}) #556; Abbruch. Keine Änderungen!`);
                }
                return this.finishProcess(syncJobResult, SyncJobStatus.AbortedEmptyChangeLogs);
            }
            let logs = useLogs;
            syncJobResult.sendClientDeviceId = devid;
            syncJobResult.committedIds = logs.map((itm) => itm.id);
            // ASK for Server-Changes
            this.dbSyncLogService.start(jobid, lastRevId);
            const syncLogMsg = this.dbSyncLogService.message.bind(this.dbSyncLogService, [jobid]);
            const syncLogErr = this.dbSyncLogService.error.bind(this.dbSyncLogService, [jobid]);
            const syncLogData = this.dbSyncLogService.log.bind(this.dbSyncLogService);
            syncLogMsg('Starte Synchronisation');
            let total = 0;
            let executed = 0;
            let chunks = 0;
            let lastSyncDate;
            const tableLogs = {};
            let syncJobLoop = 0;
            syncJobResult.setStatus(SyncJobStatus.Pending);
            while (!syncJobResult.finished && syncJobLoop < 20) {
                syncJobLoop++;
                if (syncJobLoop > 1) {
                    lastRevId = (yield this.settings.get(lastRevIdVar)) || 0;
                    logs = yield this.getUnsyncedChangeLogsByJobId(useJobid);
                }
                if (lastRevIdVar === 'jobid-2-revision-id' && lastRevId === 0) {
                    const err = 'Fehlerhafter Wert für ' + name + ': ' + lastRevId;
                    console.error(err);
                    alert(err);
                    return;
                }
                if (this.isInDebugMode) {
                    console.log(logTi + ` #599. Synchronisations-Loop!`, { syncJobLoop, lastRevId, 'logs.length': logs.length });
                }
                syncLogMsg('Download Daten ...');
                syncJobResult.committed = logs.length;
                lastSyncDate = new Date();
                console.log(logTi + ' #640 Start Sending SyncData to ', `api/sync/syncWithRevisionId/${jobid}`);
                syncJobResult.setStatus(SyncJobStatus.Uploading);
                yield this.apiService
                    .post(`api/sync/syncWithRevisionId/${jobid}`, {
                    jobid,
                    devid,
                    lastRevId,
                    appVersion: this.appVersion,
                    changes: logs
                })
                    .toPromise()
                    .then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    chunks++;
                    syncJobResult.setStatus(SyncJobStatus.ServerAnswered);
                    console.log(logTi + ' #654 Process SyncData-Response', `api/sync/syncWithRevisionId/${jobid}`);
                    if (('errorMsg' in data) && data.errorMsg) {
                        syncJobResult.errorMsg = data.errorMsg;
                        console.error(logTi + ' #552 ', data.errorMsg);
                        syncLogErr('Download Fehler: ' + data.errorMsg);
                        return this.finishProcess(syncJobResult, SyncJobStatus.ServerAnsweredWithErrors);
                    }
                    this.saveLastSyncErrorEvent({
                        jobid,
                        startDate: lastSyncDate,
                        errors: data.aSyncErrors || []
                    });
                    if (total === 0) {
                        total = data.serverChanges.total;
                        this.dbSyncLogService.jobSetTotal(jobid, total);
                    }
                    this.dbSyncLogService.jobSetChunks(jobid, chunks);
                    syncJobResult.numServerChanges = total;
                    syncJobResult.numServerRechanges = (data.serverRechanges) ? data.serverRechanges.length : 0;
                    syncLogMsg('Verarbeite Server-Antwort ...');
                    console.log(logTi + ' #570 Changes wurden gesendet, verarbeite Response', {
                        aSyncedChangeIds: data.aSyncedChangeIds ? data.aSyncedChangeIds.length : 0,
                        aFailedChangeIds: data.aFailedChangeIds ? data.aFailedChangeIds.length : 0,
                        serverRechanges: data.serverRechanges ? data.serverRechanges.length : 0,
                        serverChanges: data.serverChanges.rows ? data.serverChanges.rows.length : 0
                    });
                    console.log(logTi + ' #577 Process sync_done');
                    syncJobResult.setStatus(SyncJobStatus.WriteServerSyncedIds);
                    if (data.aSyncedChangeIds && data.aSyncedChangeIds.length > 0) {
                        syncLogMsg('Entferne vom Server bestätige Client-Logs ...');
                        yield this.dexieService.clientChangeLog
                            .where('id')
                            .anyOf(data.aSyncedChangeIds)
                            .modify({ sync_done: 1 });
                        yield this.dexieService.clientChangeLog
                            .where({ sync_done: 1 })
                            .delete();
                    }
                    if (data.aFailedChangeIds && data.aFailedChangeIds.length > 0) {
                        syncJobResult.errorMsg += 'Num Failed Server-Syncs: ' + data.aFailedChangeIds.length + '.\n';
                        for (const chckFailure of data.aFailedChangeIds) {
                            switch (chckFailure.reason) {
                                case 'INSERT_ALREADY_EXISTS':
                                case 'NEWER_VERSION_ON_SERVER':
                                    yield this.dexieService.clientChangeLog.delete(chckFailure.id);
                                    break;
                            }
                        }
                    }
                    console.log(logTi + ' #603 Process serverRechanges');
                    syncJobResult.setStatus(SyncJobStatus.WriteServerReChanges);
                    if (data.serverRechanges && data.serverRechanges.length > 0) {
                        syncLogMsg('Korrigiere Client-Ids nach Server-Antwort ...');
                        yield Promise.all(data.serverRechanges.map((chg) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            chg.table = chg.table[0].toLowerCase() + chg.table.substr(1);
                            chg.mods.log = false;
                            return this.dexieService.table(chg.table).where({ uuid: chg.uuid }).modify(chg.mods);
                        })));
                    }
                    if (this.isInDebugMode) {
                        console.log(logTi + ' #614 Process serverChanges');
                    }
                    syncJobResult.setStatus(SyncJobStatus.WriteServerChanges);
                    if (data.serverChanges.rows && data.serverChanges.rows.length > 0) {
                        syncLogMsg('Import Server-Changes ...');
                        const chgLen = data.serverChanges.rows.length;
                        for (let ci = 0; ci < chgLen; ci++) {
                            const chg = data.serverChanges.rows[ci];
                            const currRevId = chg.revision_id;
                            if (currRevId < lastRevId) {
                                const err = `#701 SYNC-FEHLER: LastRevId ist größer als CurrRevID: ${lastRevId} > ${currRevId}`;
                                console.error(err);
                                return this.finishProcess(syncJobResult, SyncJobStatus.Aborted, 'Server-Aenderungen sind nicht streng nach RevId sortiert!');
                            }
                            chg.table = chg.table[0].toLowerCase() + chg.table.substr(1);
                            if (!(chg.table in tableLogs)) {
                                tableLogs[chg.table] = {
                                    jobid,
                                    table: chg.table,
                                    revisionId: chg.revision_id,
                                    executed: 0,
                                    puts: 0,
                                    modified: 0,
                                    deleted: 0,
                                    total: 0,
                                    lastEmittedrevisionId: 0
                                };
                            }
                            switch (chg.type) {
                                case 1: // Insert
                                    tableLogs[chg.table].puts++;
                                    const objInsertData = Object.assign({}, (JSON.parse(chg.obj)), { log: false });
                                    if (this.isInDebugMode) {
                                        console.log(logTi + ' #651 ' + ci + '/' + chgLen +
                                            ' insert into ' + chg.table + ' ', objInsertData);
                                    }
                                    yield this.dexieService.table(chg.table).put(objInsertData);
                                    if (['inventar', 'raeume', 'objektKatalogMandant'].indexOf(chg.table) > -1) {
                                        const newItem = objInsertData;
                                        this.bcLookupService.addBarcode({
                                            code: newItem.code,
                                            table: chg.table,
                                            key: 'uuid',
                                            for_jobid: newItem.for_jobid,
                                            uuid: newItem.uuid
                                        });
                                    }
                                    break;
                                case 2: // Update
                                    tableLogs[chg.table].modified++;
                                    const objUpdateData = Object.assign({}, (JSON.parse(chg.mods)), { log: false });
                                    const hasCodeMod = ('code' in objUpdateData);
                                    if (this.isInDebugMode) {
                                        console.log(logTi + ' #671 ' + ci + '/' + chgLen + ' hasCodeMod: ', hasCodeMod, objUpdateData);
                                    }
                                    yield this.dexieService.table(chg.table)
                                        .where({ uuid: chg.uuid })
                                        .modify(objUpdateData);
                                    if (['inventar', 'raeume', 'objektKatalogMandant'].indexOf(chg.table) > -1
                                        && ('code' in objUpdateData)) {
                                        const updItem = objUpdateData;
                                        if (this.isInDebugMode) {
                                            console.log(logTi + ' #682 Run Barcode-Update ', hasCodeMod, objUpdateData);
                                        }
                                        const replaceSuccess = yield this.bcLookupService.replaceBarcodeByUuid(chg.uuid, {
                                            code: updItem.code,
                                            for_jobid: jobid,
                                            key: 'uuid',
                                            table: chg.table,
                                            uuid: chg.uuid
                                        });
                                        if (this.isInDebugMode) {
                                            console.log(logTi + ' #690', { replaceSuccess });
                                        }
                                    }
                                    else {
                                        if (this.isInDebugMode) {
                                            console.log(logTi + ' #692 No-Barcode-Update ', hasCodeMod, { chg, objUpdateData });
                                        }
                                    }
                                    break;
                                case 3: // Delete
                                    tableLogs[chg.table].deleted++;
                                    if (this.isInDebugMode) {
                                        console.log(logTi + ' #700 ' + ci + '/' + chgLen +
                                            ' dbsync-client delete ' + chg.table + ' by uuid ' + chg.uuid);
                                    }
                                    yield this.dexieService.table(chg.table)
                                        .where({ uuid: chg.uuid })
                                        .delete();
                            }
                            executed++;
                            tableLogs[chg.table].executed++;
                            lastRevId = currRevId;
                            if (this.isInDebugMode) {
                                console.log(logTi + ' #710 ' + ci + '/' + chgLen +
                                    ' this.settings.set(', lastRevIdVar, chg.revision_id, ')');
                            }
                            yield this.settings.setRevId(lastRevIdVar, chg.revision_id, 'LogRow ' + ci + '/' + chgLen + '; RevId ' + currRevId);
                            if (executed === total || executed % 100 === 0) {
                                for (const logData of Object.values(tableLogs)) {
                                    if (logData.revisionId > logData.lastEmittedrevisionId) {
                                        syncLogData(logData);
                                        logData.lastEmittedrevisionId = logData.revisionId;
                                    }
                                }
                            }
                        }
                    }
                    console.log(logTi + ' #725 Process SyncResponse finished');
                    syncJobResult.revisionId = yield this.settings.get(lastRevIdVar);
                    syncJobResult.committed = logs ? logs.length : 0;
                    syncJobResult.synced = data.aSyncedChangeIds ? data.aSyncedChangeIds.length : 0;
                    syncJobResult.conflicts = data.aFailedChangeIds ? data.aFailedChangeIds.length : 0;
                    syncJobResult.numServerRechanges = data.serverRechanges ? data.serverRechanges.length : 0;
                    syncJobResult.numServerChanges = data.serverChanges ? data.serverChanges.rows.length : 0;
                    console.log(logTi + ' #733 data.serverChanges.total:', data.serverChanges.total);
                    for (const logData of Object.values(tableLogs)) {
                        syncLogData(logData);
                        logData.lastEmittedrevisionId = logData.revisionId;
                    }
                    if (data.serverChanges.rows.length < data.serverChanges.total) {
                        console.log(logTi + ' #741 keep SyncProcess(jobid: ' + syncJobResult.jobid + ') open');
                        return syncJobResult;
                    }
                    console.log(logTi + ' #744 finish SyncProcess(jobid: ' + syncJobResult.jobid + ')');
                    syncLogMsg('Aktuelle Synchronisation wurde abgeschlossen');
                    syncJobResult.setStatus(SyncJobStatus.Finished);
                    this.finishProcess(syncJobResult, SyncJobStatus.Finished);
                    return syncJobResult;
                }));
            }
            this.isInDebugMode = origDebugMode;
        });
    }
    addBarcodeToLookupTable(code, table, uuid, forJobid, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const tblBarcodeLookup = this.dexieService.barcodeLookup;
            const updateHelper = 1;
            const key = this.dexieService.table(table).schema.primKey.keyPath;
            tblBarcodeLookup.put(Object.assign({
                code,
                table,
                key,
                id,
                for_jobid: forJobid,
                uuid,
                updateHelper
            }, { log: false }));
            return true;
        });
    }
    clearFinishedProcesses() {
        console.log('DBSyncClientService #668 processList before clearFinishedProcesses', Object.assign({}, this.processes.map(p => p)));
        this.processes = this.processes.filter(proc => {
            if (proc.finished) {
                return false;
            }
            if (proc.status < SyncJobStatus.Uploading && proc.duration > 20000) {
                proc.finish(SyncJobStatus.Aborted);
                return false;
            }
            return true;
        });
        this.processingJobids = this.processes.map(proc => proc.jobid);
        console.log('DBSyncClientService #677 processList after clearFinishedProcesses', Object.assign({}, this.processes.map(p => p)));
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
                return log;
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
            const tablePrio = ['inventar', 'objektKatalogMandant', 'objektKatalogGlobal', 'hersteller'];
            const db = this.dexieService;
            return db.clientChangeLog
                .where({ jobid })
                .filter(itm => !('sync_done' in itm) || itm.sync_done === 0)
                .limit(30)
                .sortBy('id')
                .then((list) => {
                return this.sortAndFixChangeLogs(list);
            });
        });
    }
    sortAndFixChangeLogs(list) {
        console.log('DbSyncClientService #866 sortAndFixChangeLogs', Object.assign({}, list));
        const tablePrio = ['inventar', 'objektKatalogMandant', 'objektKatalogGlobal', 'hersteller'];
        const db = this.dexieService;
        list.sort((a, b) => {
            if (a.timestamp !== b.timestamp) {
                return a.timestamp < b.timestamp ? -1 : 1;
            }
            else {
                return (tablePrio.indexOf(a.table) > tablePrio.indexOf(b.table)) ? -1 : 1;
            }
        });
        return Promise.all(list.map((itm) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (itm.type === 2 /* Update */) {
                if (Object.keys(itm.mods).length === 0 || (Object.keys(itm.mods).length === 1 && 'modified_at' in itm.mods)) {
                    console.log('DbSyncClientService #881 Removing empty Entry from Change-Log', { itm });
                    db.clientChangeLog.delete(itm.id);
                    return null;
                }
            }
            if (itm.table === 'objektKatalogMandant') {
                if (itm.type === 1 /* Create */ && !itm.obj.gcuuid) {
                    const artikelData = yield db.objektKatalogGlobal.where({ gcid: itm.obj.gcid }).first();
                    if (artikelData) {
                        itm.obj.gcuuid = artikelData.uuid;
                    }
                }
            }
            if (itm.table === 'inventar') {
                if (itm.type === 2 /* Update */) {
                    let isEmptyMod = false;
                    if (itm.mods.mcid && !itm.mods.mcuuid) {
                        console.error('DBSyncClient Found Inventar-Update #872 without mcuuid-Field', Object.assign({}, itm));
                        const artikelRef = yield db.objektKatalogMandant.where({ mcid: itm.mods.mcid }).first();
                        if (artikelRef) {
                            itm.mods.mcuuid = artikelRef.uuid;
                            console.log('DBSyncClient Found Inventar-Update #875 added mcuuid-Field', Object.assign({}, itm));
                        }
                        else {
                            console.error('DBSyncClient Found Inventar-Update #875 but don t found ArtikelRef.mcuuid-Field', Object.assign({}, itm));
                        }
                        delete itm.mods.mcid;
                    }
                    if (Object.keys(itm.mods).length === 1 && 'modified_at' in itm.mods) {
                        isEmptyMod = true;
                    }
                    if (Object.keys(itm.mods).length === 0) {
                        isEmptyMod = true;
                    }
                    if (isEmptyMod) {
                        console.log('DbSyncClientService #908 Removing empty Entry from Change-Log', { itm });
                        db.clientChangeLog.delete(itm.id);
                        itm = null;
                    }
                }
                else if (itm.type === 1 /* Create */) {
                    // Test und Korrektur falls GCUUID stat MCUUID in Inventar hinterlegt wurde
                    console.log('DBSyncClient #849 Test if inventar has gcuuid instead of mcuuid, itm.obj.mcuuid: ' + itm.obj.mcuuid);
                    yield db.objektKatalogGlobal.where({ uuid: itm.obj.mcuuid }).first().then((rslt) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log('DbSyncClientService #851 result of okm-Query by mcuuid', { rslt });
                        if (rslt) {
                            const okgItm = rslt;
                            yield db.objektKatalogMandant.where({ gcuuid: okgItm.uuid }).first().then((okm) => {
                                itm.obj.mcuuid = okm.uuid;
                                db.inventar.update(itm.obj.uuid, { mcuuid: okm.uuid });
                                db.clientChangeLog.update(itm.id, {
                                    obj: Object.assign({}, itm.obj, { mcuuid: okm.uuid })
                                });
                            });
                        }
                        return rslt;
                    }))
                        .catch((reason) => {
                        console.error('DBSyncClient #865 Error on Querying for OKG by ' + itm.obj.mcuuid, { reason });
                    });
                    if (itm.obj.mcid && itm.obj.mcuuid) {
                        console.log('DBSyncClient Found Inventar-Update #872 with mcuuid-Field', Object.assign({}, itm));
                        delete itm.obj.mcid;
                    }
                    if (itm.obj.rid && !itm.obj.ruuid) {
                        console.error('DBSyncClient Found Inventar-Update #872 without ruuid-Field', Object.assign({}, itm));
                        const raum = yield db.raeume.where({ rid: itm.obj.rid }).first();
                        if (raum) {
                            itm.obj.ruuid = raum.uuid;
                            console.log('Fixed Missing ruuid-Field', Object.assign({}, itm));
                        }
                    }
                    if (!itm.obj.ruuid || !itm.obj.mcuuid) {
                        console.error('DbSyncClientService #938 Removing incomplete Inventar + Entry from Change-Log', { itm });
                        yield db.clientChangeLog.delete(itm.id);
                        yield db.inventar.delete(itm.uuid);
                        if (itm.obj.code && itm.obj.for_jobid && itm.uuid) {
                            yield db.barcodeLookup
                                .where({ code: itm.obj.code, for_jobid: itm.obj.for_jobid })
                                .filter((lkup) => lkup.uuid === itm.uuid)
                                .delete();
                        }
                        itm = null;
                    }
                }
            }
            return itm;
        })).filter((itm) => !!itm));
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
    getCurrentSyncStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return Promise.all([
                this.numUnsyncedChangeLogs(),
                this.getRunningProcesses()
            ]);
        });
    }
    numUnsyncedChangeLogs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexieService.clientChangeLog.where({ sync_done: 0 }).count()
                .catch(reason => {
                console.error(reason, 'DbsyncClientService.numUnsyncedChangeLogs() #1055');
                throw reason;
            });
        });
    }
    getIncompleteInventuren() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currJobId = this.baseData.getCurrentJobid();
            const numPending = yield this.dexieService.clientChangeLog.where({ sync_done: 0 }).count();
            if (!numPending) {
                return [];
            }
            const uniqJobIds = [];
            yield this.dexieService.clientChangeLog.where({ sync_done: 0 }).each((log) => {
                if (-1 === uniqJobIds.indexOf(log.jobid)) {
                    if (log.jobid === currJobId) {
                        uniqJobIds.unshift(log.jobid);
                    }
                    else {
                        uniqJobIds.push(log.jobid);
                    }
                }
            });
            return Promise.all(uniqJobIds.map((jobid) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const changes = yield this.dexieService.clientChangeLog
                    .where({ jobid, sync_done: 0 }).sortBy('id');
                return {
                    jobid,
                    changes
                };
            })));
        });
    }
    saveLastSyncErrorEvent(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = event.jobid;
            const insertData = event.errors.map((itm) => {
                return {
                    jobid,
                    clientChangeLogId: itm.clientChangeLogId || null,
                    table: itm.table,
                    type: itm.type || null,
                    uuid: itm.uuid,
                    error_code: itm.ERROR_CODE,
                    error_msg: itm.ERROR_MSG || '',
                    error_data: itm.ERROR_DATA || null,
                    error_ref_table: itm.ERROR_REF_TABLE || null,
                    error_ref_by: itm.ERROR_REF_BY || null,
                    error_ref_uuid: itm.ERROR_REF_UUID || null,
                    timestamp: new Date()
                };
            });
            const delAction = this.dexieService.serverSyncErrors.where({ jobid }).delete();
            delAction.finally(() => this.dexieService.serverSyncErrors.bulkAdd(insertData)).then((n) => {
                if (n > 0) {
                    this.resyncServerErrors(jobid);
                }
            }).finally(() => {
                this.syncErrorChange.emit({ jobid, count: event.errors.length });
            });
        });
    }
    resyncServerErrors(jobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const db = this.dexieService;
            console.log('DBSyncClientService resyncServerErrors #980');
            const aErrors = yield db.serverSyncErrors.where({ jobid }).toArray();
            aErrors.map((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('DBSyncClientService resyncServerErrors #983', { err });
                if (!('clientChangeLogId' in err) || !err.clientChangeLogId) {
                    console.error('DBSyncClientService resyncServerErrors #985 NO clientChangeLogId in err', { err });
                    return false;
                }
                const table = err.table;
                const uuid = err.uuid;
                const chId = err.clientChangeLogId;
                console.log('DBSyncClientService resyncServerErrors #992 ', { id: chId, table, uuid });
                const logItem = yield db.clientChangeLog.get(chId);
                if (!logItem || logItem.table !== table || logItem.uuid !== uuid) {
                    console.error('logItem by id ', chId, ' not found', { table, uuid });
                }
                console.log('DBSyncClientService resyncServerErrors #998 ', {
                    logItem,
                    id: chId,
                    table,
                    uuid
                });
                console.log('DBSyncClientService resyncServerErrors #1003', { logItem });
                const data = yield db.table(table).get(uuid);
                console.log('DBSyncClientService resyncServerErrors #1005', { err_code: err.error_code, data });
                switch (err.error_code) {
                    case 'ITEM_NOT_FOUND':
                        console.log('DBSyncClientService resyncServerErrors #1009 clientChangeLog.delete ', { chId });
                        yield db.clientChangeLog.delete(chId);
                        if (data) {
                            const chgLogData = {
                                jobid: logItem.jobid,
                                key: 0,
                                mid: logItem.mid,
                                obj: data,
                                sync_attempts: 0,
                                sync_done: 0,
                                table: logItem.table,
                                timestamp: new Date(),
                                type: 1,
                                uid: logItem.uid,
                                uuid: logItem.uuid
                            };
                            console.log('DBSyncClientService resyncServerErrors #1025 clientChangeLog.add ', { chgLogData });
                            db.clientChangeLog.add(chgLogData).catch(reason => {
                                console.error(reason, 'DbsyncClientService.resyncServerErrors() #1108 clientChangeLog.add', { chgLogData });
                            });
                        }
                        break;
                    case 'NEWER_VERSION_ON_SERVER':
                        console.log('DBSyncClientService resyncServerErrors #1031 clientChangeLog.delete ', { chId });
                        yield db.clientChangeLog.delete(chId);
                        break;
                }
            }));
        });
    }
};
DBSyncClientService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_4__["DexieService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_3__["BasedataService"] },
    { type: _connection_service_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"] },
    { type: _variables_service__WEBPACK_IMPORTED_MODULE_6__["VariablesService"] },
    { type: _dbsync_log_service__WEBPACK_IMPORTED_MODULE_7__["DbsyncLogService"] },
    { type: _pages_invent_form_data_services_barcode_service__WEBPACK_IMPORTED_MODULE_8__["BarcodeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DBSyncClientService.prototype, "autoSyncChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DBSyncClientService.prototype, "updateStatusChanges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DBSyncClientService.prototype, "currentJobChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DBSyncClientService.prototype, "syncErrorChange", void 0);
DBSyncClientService = DBSyncClientService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DBSyncClientService);



/***/ }),

/***/ "./src/app/shared/services/dbsync-log.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/dbsync-log.service.ts ***!
  \*******************************************************/
/*! exports provided: DbsyncLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbsyncLogService", function() { return DbsyncLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DbsyncLogService = class DbsyncLogService {
    constructor() {
        this.tableSyncProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalSyncProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.syncMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.syncError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingMetaData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingMetaError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingMetaMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.jobList = [];
    }
    start(jobid, revisionId) {
        const job = this.jobList.find(s => s.jobid !== jobid);
        if (job) {
            this.finish(jobid);
        }
        const newJob = {
            jobid,
            revisionId,
            executed: 0,
            total: 0,
            chunks: 0,
            puts: 0,
            modified: 0,
            deleted: 0,
            tables: [],
            tableSyncDetails: {},
            start: new Date()
        };
        this.jobList.push(newJob);
        this.totalSyncProgress.emit(newJob);
    }
    finish(jobid) {
        this.jobList = this.jobList.filter(s => s.jobid !== jobid);
    }
    jobSetTotal(jobid, total) {
        const job = this.jobList.find(s => s.jobid !== jobid);
        if (job) {
            job.total = total;
        }
    }
    jobSetRevisionId(jobid, revisionId) {
        const job = this.jobList.find(s => s.jobid !== jobid);
        if (job) {
            job.revisionId = revisionId;
        }
    }
    jobSetChunks(jobid, chunks) {
        const job = this.jobList.find(s => s.jobid !== jobid);
        if (job) {
            job.chunks = chunks;
        }
    }
    log(data) {
        const job = this.jobList.find(s => s.jobid === data.jobid);
        this.tableSyncProgress.emit(data);
        if (job) {
            job.revisionId = Math.max(job.revisionId, data.revisionId);
            job.executed += data.executed;
            job.puts += data.puts;
            job.modified += data.modified;
            job.deleted += data.deleted;
            job.tableSyncDetails[data.table] = data;
            const tbl = job.tables.find(t => t.table === data.table);
            if (!tbl) {
                job.tables.push({
                    table: data.table,
                    executed: data.executed,
                    total: data.total
                });
                job.total += data.total;
            }
            this.totalSyncProgress.emit(job);
        }
    }
    message(jobid, message) {
        this.syncMessage.emit({ jobid, message });
    }
    error(jobid, message) {
        this.syncError.emit({ jobid, message });
    }
    metaData(data) {
        this.loadingMetaData.emit(data);
    }
    metaMessage(message) {
        this.loadingMetaMessage.emit(message);
    }
    metaError(error) {
        this.loadingMetaError.emit(error);
    }
};
DbsyncLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DbsyncLogService);



/***/ }),

/***/ "./src/app/shared/services/dexie-sync-client.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/dexie-sync-client.service.ts ***!
  \**************************************************************/
/*! exports provided: DexieSyncClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieSyncClientService", function() { return DexieSyncClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");



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

/***/ "./src/app/shared/services/dexie.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/dexie.service.ts ***!
  \**************************************************/
/*! exports provided: DexieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieService", function() { return DexieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var dexie_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie-observable */ "./node_modules/dexie-observable/dist/dexie-observable.es.js");
/* harmony import */ var dexie_syncable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dexie-syncable */ "./node_modules/dexie-syncable/dist/dexie-syncable.es.js");
/* harmony import */ var _dexie_sync_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dexie-sync-client.service */ "./src/app/shared/services/dexie-sync-client.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basedata.service */ "./src/app/shared/services/basedata.service.ts");







const database = 'merTensIventory.1';
let DexieService = class DexieService extends dexie__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(syncClient, baseData) {
        super(database);
        this.syncClient = syncClient;
        this.baseData = baseData;
        this.clientSyncAmountChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dbVersion = 12;
        this.nextDbVersion = 0;
        this.stopClientLogForServerLoad = false;
        this.nextDbVersion = this.dbVersion + 1;
        this.on('versionchange', (event) => {
            console.log('DexieService #62 event versionchange ', { event });
        });
        this.on('message', event => {
            console.log('DexieService #65 event message', { event });
        });
        this.init();
    }
    clearDB() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('clear db');
            return Promise.all(this.tables.map((t) => t.clear()))
                .then(() => {
                console.log('Datenbank wurde geleert!');
                return true;
            }).catch((r) => {
                console.error(r);
                return false;
            });
        });
    }
    deleteDB() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dbName = this.name;
            console.log('delete db ' + dbName);
            return dexie__WEBPACK_IMPORTED_MODULE_2__["default"].delete(dbName).then(() => {
                alert('Browser-Datenbank ' + dbName + ' wurde gelöscht!\n' +
                    'Die Seite wird für den Neu-Aufbau neu geladen\n' +
                    ' und muss nötigenfalls auch händisch wiederholt neu geladen werden!');
                document.location.href = '/';
                return true;
            }).catch((reason) => {
                alert('Beim Löschen sind Fehler aufgetreten\n' +
                    'Die Seite wird neu geladen\n' +
                    ' und muss nötigenfalls auch händisch wiederholt neu geladen werden!');
                document.location.href = '/';
                return false;
            });
        });
    }
    init() {
        dexie__WEBPACK_IMPORTED_MODULE_2__["default"].Syncable.registerSyncProtocol('inventorySync', this.syncClient);
        this.nextDbVersion = this.dbVersion + 1;
        this.version(12).stores({
            barcodeLookup: '&[code+for_jobid],table,for_jobid,[table+for_jobid],updateHelper,[table+updateHelper]',
            clientChangeLog: '++id,table,type,key,uuid,jobid,sync_done',
            devices: '++id,name,user_agent',
            gebaeude: '++gid,mid,Gebaeude',
            hersteller: '$$uuid,hid,Hersteller,for_jobid,created_jobid',
            images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid,created_jobid,modified_jobid',
            inventar: '$$uuid,ivid,mcid,for_jobid,mcuuid,code,[rid+jobid],rid,rid_init,rid_neu,ruuid,jobid,invid,iv_nr',
            inventuren: '++jobid,mid,gid,Titel,Start,aktiviert,AbgeschlossenAm',
            inventurenGebaeude: '[jobid+gid+uid],jobid,gid,uid',
            inventurenUser: '&[jobid+uid],jobid,uid',
            inventurenUserStatus: '&[jobid+uid+device_id],jobid,uid,device_id,status,token',
            lieferant: '++hid,Lieferant',
            mandanten: '++mid,Mandant',
            objektbuchBarcodesLookup: '&code,for_jobid',
            objektKatalogGlobal: '$$uuid,gcid,code,hid,Bezeichnung,Typ,Gruppe,Kategorie,Farbe,Groesse,created_jobid',
            objektKatalogMandant: '$$uuid,mcid,gcid,gcuuid,code,mid,for_jobid,created_jobid',
            objektKatalogImages: '$$uuid,id,for_jobid,RefTable,RefUuid,ImgUuid,Kategorie',
            raeume: '$$uuid,rid,gid,[rid+gid],for_jobid,code,raumid,Raum,Raumbezeichnung,Etage,current_jobid,current_jobstatus',
            serverSyncErrors: '++id,jobid,clientChangeLogId,table,type,uuid,error_code,error_msg',
            uploads: '++id,uuid,mid,standort,importkey,filename,filesize,checksum,stat,errors',
            users: '++id,name,email,password',
            variables: '&name,value'
        });
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
        if (1) {
            const v2 = this.nextDbVersion;
            this.version(v2).stores({
                images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid,created_jobid,modified_jobid'
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v2);
                this.images.toCollection().each((img) => {
                    this.objektKatalogMandant.where({ mcid: img.mcid }).first().then((okm) => {
                        this.images.where({ uuid: img.uuid }).modify({ mcuuid: okm.uuid });
                    });
                });
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v3 = this.nextDbVersion;
            this.version(v3).stores({
                images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid,created_jobid,modified_jobid'
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v3);
                this.images.toCollection().each((img) => {
                    this.objektKatalogMandant.where({ mcid: img.mcid }).first().then((okm) => {
                        this.images.where({ uuid: img.uuid }).modify({ mcuuid: okm.uuid });
                    });
                });
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v4 = this.nextDbVersion;
            this.version(v4).stores({
                images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid,created_jobid,modified_jobid'
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v4);
                return trans;
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v5 = this.nextDbVersion;
            this.version(v5).stores({
                objektKatalogGlobal: '$$uuid,gcid,code,huuid,Bezeichnung,Typ,Gruppe,Kategorie,Farbe,Groesse,created_jobid',
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v5);
                return trans;
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v6 = this.nextDbVersion;
            this.version(v6).stores({
                objektKatalogGlobal: '$$uuid,gcid,code,huuid,Bezeichnung,[Bezeichnung+huuid],Typ,Gruppe,Kategorie,Farbe,Groesse,created_jobid',
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v6);
                return trans;
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v7 = this.nextDbVersion;
            this.version(v7).stores({
                objektKatalogGlobal: '$$uuid,uuid,gcid,code,huuid,Bezeichnung,[Bezeichnung+huuid],Typ,Gruppe,Kategorie,Farbe,Groesse,created_jobid',
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v7);
                return trans;
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v8 = this.nextDbVersion;
            this.version(v8).stores({
                images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid,created_jobid,modified_jobid',
            }).upgrade((trans) => {
                console.log('Starte Upgrade for DB-Version ' + v8);
                return trans;
            });
            this.nextDbVersion += 1;
        }
        if (1) {
            const v9 = this.nextDbVersion;
            this.version(v9).stores({
                images: '$$uuid,id,name,type,size,width,height,gcuuid,mcuuid,url,for_jobid',
            });
            this.nextDbVersion += 1;
        }
        if (true) {
            const v10 = this.nextDbVersion;
            this.version(v10).stores({
                barcodeLookup: '&[code+for_jobid],table,for_jobid,[table+for_jobid],[table+for_jobid+updateHelper],updateHelper,[table+updateHelper]',
            });
            this.nextDbVersion += 1;
        }
        if (true) {
            const v11 = this.nextDbVersion;
            this.version(v11).stores({
                objektKatalogImages: '$$uuid,id,for_jobid,RefTable,RefUuid,ImgUuid,Kategorie,[RefTable+RefUuid+Kategorie]',
            });
            this.nextDbVersion += 1;
        }
        if (true) {
            const v12 = this.nextDbVersion;
            this.version(v12).stores({
                objektKatalogImages: '$$uuid,id,for_jobid,RefTable,RefUuid,ImgUuid,Kategorie,[RefTable+RefUuid+Kategorie],[RefTable+RefUuid]',
            });
            this.nextDbVersion += 1;
        }
        const validLogTables = [
            'hersteller',
            'inventar',
            'inventurenUserStatus',
            'images',
            'objektKatalogGlobal',
            'objektKatalogMandant',
            'objektKatalogImages',
            'raeume'
        ];
        let lastClientChangeLogTimestamp = 0;
        const lastClientChangeLogDelay = 2000;
        let lastClientChangeLogTimer = null;
        const lastClientChangeLogTrigger = () => {
            this.clientChangeLog.count().then((num) => {
                this.clientSyncAmountChanged.emit(num);
            });
        };
        const checkEmitClientChange = () => {
            const now = Date.now();
            if (lastClientChangeLogTimer) {
                if (now - lastClientChangeLogTimestamp < lastClientChangeLogDelay) {
                    return;
                }
                clearTimeout(lastClientChangeLogTimer);
                lastClientChangeLogTimer = null;
            }
            lastClientChangeLogTimestamp = Date.now();
            lastClientChangeLogTimer = setTimeout(lastClientChangeLogTrigger, lastClientChangeLogDelay);
        };
        this.on('changes', (changes, partial) => {
            // console.log('#145 dexie.service on changes: changes.length', changes.length, partial, { changes});
            changes.forEach((change) => {
                if (change.table === 'clientChangeLog') {
                    if (change.type === 2 /* Update */ && !('sync_done' in change.mods)) {
                        return;
                    }
                    checkEmitClientChange();
                }
            });
            if (this.stopClientLogForServerLoad) {
                // console.log('#145 dexie.service on changes: is disabled for Server-Load');
                return;
            }
            changes.forEach((change) => {
                if (validLogTables.indexOf(change.table) === -1 || change.table === this.clientChangeLog.name) {
                    // console.log('#151 dexie.service on changes: ChangeLog disabled for table ', change.table);
                    return;
                }
                this.addChangeLog(change);
            });
        });
    }
    addChangeLog(change) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const logFlag = this.getChangeLogFlag(change);
            // if (log === undefined || !log) {
            //   console.log('#152 addChangeLog Skip DB-Change-Logging - No Log-Flag', { change });
            //   return;
            // }
            const logPrefix = 'DexieService.addChangeLog(change[' + change.table + ',' + change.type + ',' + change.key + '] ';
            console.log(logPrefix + '#322');
            if (logFlag !== undefined && logFlag !== null && logFlag === false) {
                console.log(logPrefix + '#324 ABORT log:', logFlag, { change });
                if (change.type !== 3) {
                    yield this.table(change.table).update(change.key, { log: undefined });
                }
                return;
            }
            const uuid = this.getChangeLogUuid(change);
            if (change.type !== 3 && 'obj' in change && 'log' in change.obj && change.obj.log !== undefined) {
                yield this.table(change.table).update(change.key, { log: undefined });
            }
            const chlog = {
                timestamp: new Date(),
                table: change.table,
                type: change.type,
                key: change.key,
                uuid,
                mid: this.baseData.getCurrentMid(),
                uid: this.baseData.getCurrentUid(),
                jobid: this.baseData.getCurrentJobid(),
                sync_attempts: 0,
                sync_done: 0
            };
            switch (change.type) {
                case 1 /* Create */:
                    const insertChange = change;
                    if ('log' in change.obj) {
                        delete change.obj.log;
                    }
                    chlog.obj = change.obj;
                    switch (change.table) {
                        case 'objektKatalogGlobal':
                            if (!('huuid' in chlog.obj)) {
                                chlog.obj.huuid = this.getChangeLogProp(change, 'huuid');
                            }
                            break;
                        case 'objektKatalogMandant':
                            if (!('gcuuid' in chlog.obj)) {
                                chlog.obj.gcuuid = this.getChangeLogProp(change, 'gcuuid');
                            }
                            break;
                        case 'inventar':
                            if (!('mcuuid' in chlog.obj)) {
                                chlog.obj.mcuuid = this.getChangeLogProp(change, 'mcuuid');
                            }
                            if (!('ruuid' in chlog.obj)) {
                                chlog.obj.ruuid = this.getChangeLogProp(change, 'ruuid');
                            }
                            break;
                    }
                    break;
                case 2 /* Update */:
                    const updateChange = change;
                    chlog.mods = updateChange.mods;
                    if ('log' in chlog.mods) {
                        delete chlog.mods.log;
                    }
                    const colNames = Object.keys(chlog.mods);
                    if (colNames.length === 0 || (colNames.length === 1 && colNames[0].startsWith('modified_'))) {
                        return;
                    }
                    const iNumContentCols = colNames.filter((col) => {
                        if (['mcuuid', 'ruuid', 'gcuuid', 'huuid'].indexOf(col) !== -1 && undefined === change.mods[col]) {
                            return false;
                        }
                        return col !== 'log' && !col.startsWith('modified');
                    });
                    if (!iNumContentCols) {
                        return;
                    }
                    console.log(logPrefix + '#384 update', change.mods, { chlog });
                    break;
                case 3 /* Delete */:
                    const deleteChange = change;
                    break;
            }
            this.clientChangeLog.add(chlog)
                .then((n) => {
                console.log(logPrefix + '#439 added number:', n);
            })
                .catch(reason => {
                console.error(reason, logPrefix + ' #443 clientChangeLog.add', { chlog });
            });
        });
    }
    getChangeLogUuid(change) {
        const ch = change;
        if (typeof change.key === 'string' && change.key.match(/([a-z0-9]+-){2,}[a-z0-9]/)) {
            return change.key;
        }
        if (('obj' in ch) && ('uuid' in ch.obj)) {
            return ch.obj.uuid;
        }
        if (('mods' in ch) && ('uuid' in ch.mods)) {
            return ch.mods.uuid;
        }
        if (('oldObj' in ch) && ('uuid' in ch.oldObj)) {
            return ch.oldObj.uuid;
        }
        return undefined;
    }
    getChangeLogProp(change, propName) {
        const ch = change;
        if ((propName in ch) && (propName in ch.obj)) {
            return ch.obj.uuid;
        }
        if ((propName in ch) && (propName in ch.mods)) {
            return ch.mods.uuid;
        }
        if ((propName in ch) && (propName in ch.oldObj)) {
            return ch.oldObj.uuid;
        }
        return undefined;
    }
    getChangeLogFlag(change) {
        const ch = change;
        const showFlagLog = false;
        if (typeof ch !== 'object') {
            if (showFlagLog) {
                console.error('DexieService.getChangeLogFlag(change) #192 change is not a object: ', change);
            }
            return false;
        }
        const logPrefix = 'DexieService.getChangeLogFlag(change[' + ch.table + ',' + ch.type + ',' + ch.key + ']) ';
        console.log(logPrefix + '#482 change', Object.assign({}, change));
        if ((typeof ch.obj === 'object') && ('log' in ch.obj)) {
            if (showFlagLog) {
                console.log(logPrefix + '#485 return ch.obj.log ', ch.obj.log);
            }
            return ch.obj.log;
            // return !!ch.obj.log;
        }
        if ((typeof ch.mods === 'object') && ('log' in ch.mods)) {
            if (showFlagLog) {
                console.log(logPrefix + '#491 return ch.mods.log ', ch.mods.log);
            }
            return ch.mods.log;
            // return !!ch.mods.log;
        }
        if ((typeof ch.oldObj === 'object') && ('log' in ch.oldObj)) {
            if (showFlagLog) {
                console.log(logPrefix + '#497 return ch.oldObj.log ', ch.oldObj.log);
            }
            return ch.oldObj.log;
            // return !!ch.oldObj.log;
        }
        return undefined;
    }
    stopChangeLogForImport(stop) {
        const showFlagLog = false;
        if (showFlagLog) {
            console.log('#199 stopClientLogForServerLoad => ', stop);
        }
        this.stopClientLogForServerLoad = stop;
    }
};
DexieService.ctorParameters = () => [
    { type: _dexie_sync_client_service__WEBPACK_IMPORTED_MODULE_5__["DexieSyncClientService"] },
    { type: _basedata_service__WEBPACK_IMPORTED_MODULE_6__["BasedataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DexieService.prototype, "clientSyncAmountChanged", void 0);
DexieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DexieService);



/***/ }),

/***/ "./src/app/shared/services/inventory-editor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/inventory-editor.service.ts ***!
  \*************************************************************/
/*! exports provided: InventoryEditorErrorCode, InventoryEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryEditorErrorCode", function() { return InventoryEditorErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryEditorService", function() { return InventoryEditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/shared/services/basedata.service.ts");




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
    assignInventarToRaum(invUuid, ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            const uid = this.baseData.getCurrentUid();
            const devid = this.baseData.getCurrentDeviceId();
            console.log('InventoryEditorService.assignInventarToRaum', {
                invUuid,
                ruuid,
                jobid,
                uid,
                devid
            });
            return Promise.all([
                this.dexieService.inventar.get(invUuid),
                this.dexieService.raeume.get(ruuid)
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
                return this.dexieService.inventar.update(inv.uuid, {
                    ruuid: raum.uuid,
                    jobid,
                    modified_uid: uid,
                    modified_jobid: jobid,
                    modified_device_id: devid
                }).then(() => this.returnResultSuccess());
            });
        });
    }
    undoAssignedInventarToRaum(invUuid, ruuid, useJobid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const jobid = useJobid || this.baseData.getCurrentJobid();
            return this.dexieService.clientChangeLog
                .where({ table: 'raeume', uuid: invUuid, jobid })
                .filter(item => item.obj && ('uuid' in item.obj) && item.obj.uuid === ruuid)
                .last()
                .then(item => {
                if (item.type === 1 /* Create */) {
                    return this.dexieService.inventar
                        .delete(item.uuid)
                        .then(() => this.dexieService.clientChangeLog.delete(item.id))
                        .then(() => this.returnResultSuccess());
                }
                else if (item.type === 2 /* Update */) {
                    return this.dexieService.inventar
                        .update(invUuid, item.oldObj)
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

/***/ "./src/app/shared/services/sounds.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/sounds.service.ts ***!
  \***************************************************/
/*! exports provided: SoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundsService", function() { return SoundsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const tempo = {
    n1: 1000,
    n2: 500,
    n3: 750,
    n4: 250,
    n8: 125,
    n16: 62.5,
    n32: 31.75
};
const tones = [
    { taste: 1, en: 'A0', de: 'A2', freq: 27.5 },
    { taste: 2, en: 'A#0/Bb0', de: 'Ais2/B2', freq: 29.1352 },
    { taste: 3, en: 'B0', de: 'H2', freq: 30.8677 },
    { taste: 4, en: 'C1', de: 'C1', freq: 32.7032 },
    { taste: 5, en: 'C#1/Db1', de: 'Cis1/Des1', freq: 34.6478 },
    { taste: 6, en: 'D1', de: 'D1', freq: 36.7081 },
    { taste: 7, en: 'D#1/Eb1', de: 'Dis1/Es1', freq: 38.8909 },
    { taste: 8, en: 'E1', de: 'E1', freq: 41.2034 },
    { taste: 9, en: 'F1', de: 'F1', freq: 43.6535 },
    { taste: 10, en: 'F#1/Gb1', de: 'Fis1/Ges1', freq: 46.2493 },
    { taste: 11, en: 'G1', de: 'G1', freq: 48.9994 },
    { taste: 12, en: 'G#1/Ab1', de: 'Gis1/As1', freq: 51.9131 },
    { taste: 13, en: 'A1', de: 'A1', freq: 55 },
    { taste: 14, en: 'A#1/Bb1', de: 'Ais1/B1', freq: 58.2705 },
    { taste: 15, en: 'B1', de: 'H1', freq: 61.7354 },
    { taste: 16, en: 'C2', de: 'C', freq: 65.4064 },
    { taste: 17, en: 'C#2/Db2', de: 'Cis/Des', freq: 69.2957 },
    { taste: 18, en: 'D2', de: 'D', freq: 73.4162 },
    { taste: 19, en: 'D#2/Eb2', de: 'Dis/Es', freq: 77.7817 },
    { taste: 20, en: 'E2', de: 'E', freq: 82.4069 },
    { taste: 21, en: 'F2', de: 'F', freq: 87.3071 },
    { taste: 22, en: 'F#2/Gb2', de: 'Fis/Ges', freq: 92.4986 },
    { taste: 23, en: 'G2', de: 'G', freq: 97.9989 },
    { taste: 24, en: 'G#2/Ab2', de: 'Gis/As', freq: 103.826 },
    { taste: 25, en: 'A2', de: 'A', freq: 110 },
    { taste: 26, en: 'A#2/Bb2', de: 'Ais/B', freq: 116.541 },
    { taste: 27, en: 'B2', de: 'H', freq: 123.471 },
    { taste: 28, en: 'C3', de: 'c', freq: 130.813 },
    { taste: 29, en: 'C#3/Db3', de: 'cis/des', freq: 138.591 },
    { taste: 30, en: 'D3', de: 'd', freq: 146.832 },
    { taste: 31, en: 'D#3/Eb3', de: 'dis/es', freq: 155.563 },
    { taste: 32, en: 'E3', de: 'e', freq: 164.814 },
    { taste: 33, en: 'F3', de: 'f', freq: 174.614 },
    { taste: 34, en: 'F#3/Gb3', de: 'fis/ges', freq: 184.997 },
    { taste: 35, en: 'G3', de: 'g', freq: 195.998 },
    { taste: 36, en: 'G#3/Ab3', de: 'gis/as', freq: 207.652 },
    { taste: 37, en: 'A3', de: 'a', freq: 220 },
    { taste: 38, en: 'A#3/Bb3', de: 'ais/b', freq: 233.082 },
    { taste: 39, en: 'B3', de: 'h', freq: 246.942 },
    { taste: 40, en: 'C4[3]', de: 'c1', freq: 261.626 },
    { taste: 41, en: 'C#4/Db4', de: 'cis1/des1', freq: 277.183 },
    { taste: 42, en: 'D4', de: 'd1', freq: 293.665 },
    { taste: 43, en: 'D#4/Eb4', de: 'dis1/es1', freq: 311.127 },
    { taste: 44, en: 'E4', de: 'e1', freq: 329.628 },
    { taste: 45, en: 'F4', de: 'f1', freq: 349.228 },
    { taste: 46, en: 'F#4/Gb4', de: 'fis1/ges1', freq: 369.994 },
    { taste: 47, en: 'G4', de: 'g1', freq: 391.995 },
    { taste: 48, en: 'G#4/Ab4', de: 'gis1/as1', freq: 415.305 },
    { taste: 49, en: 'A4[2]', de: 'a1 Kammerton', freq: 440 },
    { taste: 50, en: 'A#4/Bb4', de: 'ais1/b1', freq: 466.164 },
    { taste: 51, en: 'B4', de: 'h1', freq: 493.883 },
    { taste: 52, en: 'C5', de: 'c2', freq: 523.251 },
    { taste: 53, en: 'C#5/Db5', de: 'cis2/des2', freq: 554.365 },
    { taste: 54, en: 'D5', de: 'd2', freq: 587.33 },
    { taste: 55, en: 'D#5/Eb5', de: 'dis2/es2', freq: 622.254 },
    { taste: 56, en: 'E5', de: 'e2', freq: 659.255 },
    { taste: 57, en: 'F5', de: 'f2', freq: 698.456 },
    { taste: 58, en: 'F#5/Gb5', de: 'fis2/ges2', freq: 739.989 },
    { taste: 59, en: 'G5', de: 'g2', freq: 783.991 },
    { taste: 60, en: 'G#5/Ab5', de: 'gis2/as2', freq: 830.609 },
    { taste: 61, en: 'A5', de: 'a2', freq: 880 },
    { taste: 62, en: 'A#5/Bb5', de: 'ais2/b2', freq: 932.328 },
    { taste: 63, en: 'B5', de: 'h2', freq: 987.767 },
    { taste: 64, en: 'C6', de: 'c3', freq: 1046.5 },
    { taste: 65, en: 'C#6/Db6', de: 'cis3/des3', freq: 1108.73 },
    { taste: 66, en: 'D6', de: 'd3', freq: 1174.66 },
    { taste: 67, en: 'D#6/Eb6', de: 'dis3/es3', freq: 1244.51 },
    { taste: 68, en: 'E6', de: 'e3', freq: 1318.51 },
    { taste: 69, en: 'F6', de: 'f3', freq: 1396.91 },
    { taste: 70, en: 'F#6/Gb6', de: 'fis3/ges3', freq: 1479.98 },
    { taste: 71, en: 'G6', de: 'g3', freq: 1567.98 },
    { taste: 72, en: 'G#6/Ab6', de: 'gis3/as3', freq: 1661.22 },
    { taste: 73, en: 'A6', de: 'a3', freq: 1760 },
    { taste: 74, en: 'A#6/Bb6', de: 'ais3/b3', freq: 1864.66 },
    { taste: 75, en: 'B6', de: 'h3', freq: 1975.53 },
    { taste: 76, en: 'C7', de: 'c4', freq: 2093 },
    { taste: 77, en: 'C#7/Db7', de: 'cis4/des4', freq: 2217.46 },
    { taste: 78, en: 'D7', de: 'd4', freq: 2349.32 },
    { taste: 79, en: 'D#7/Eb7', de: 'dis4/es4', freq: 2489.02 },
    { taste: 80, en: 'E7', de: 'e4', freq: 2637.02 },
    { taste: 81, en: 'F7', de: 'f4', freq: 2793.83 },
    { taste: 82, en: 'F#7/Gb7', de: 'fis4/ges4', freq: 2959.96 },
    { taste: 83, en: 'G7', de: 'g4', freq: 3135.96 },
    { taste: 84, en: 'G#7/Ab7', de: 'gis4/as4', freq: 3322.44 },
    { taste: 85, en: 'A7', de: 'a4', freq: 3520 },
    { taste: 86, en: 'A#7/Bb7', de: 'ais4/b4', freq: 3729.31 },
    { taste: 87, en: 'B7', de: 'h4', freq: 3951.07 },
    { taste: 88, en: 'C8', de: 'c5', freq: 4186.01 }
];
let SoundsService = class SoundsService {
    constructor() {
        this.success = new Audio();
        this.success.muted = true;
        this.success.autoplay = true;
        this.success.src = '../assets/googlesounds/notification_simple-01.mp3';
        this.success.load();
        this.error = new Audio();
        this.error.muted = true;
        this.error.autoplay = true;
        this.error.src = '../assets/googlesounds/alert_error-01.mp3';
        this.error.load();
    }
    getSuccessSrc() {
        return this.success.src;
    }
    getErrorSrc() {
        return this.error.src;
    }
    playSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.success.muted = false;
            this.success.play();
        });
    }
    playError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.error.muted = false;
            this.error.play();
        });
    }
};
SoundsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoundsService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/shared/services/dexie.service.ts");



let UserService = class UserService {
    constructor(dexie) {
        this.dexie = dexie;
    }
    getByUid(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.dexie.users.get(id);
            this.fitDateAttr(user);
            return user;
        });
    }
    put(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.users.put(user);
        });
    }
    update(id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.dexie.users.update(id, data);
        });
    }
    getByEmail(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.dexie.users.where('email').equalsIgnoreCase(email).first();
            this.fitDateAttr(user);
            return user;
        });
    }
    getByAuth(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.dexie.users.where({ email, password }).first();
            this.fitDateAttr(user);
            return user;
        });
    }
    fitDateAttr(user) {
        if (user) {
            if (user.created_at && typeof user.created_at === 'string') {
                user.created_at = new Date(user.created_at);
            }
            if (user.updated_at && typeof user.updated_at === 'string') {
                user.updated_at = new Date(user.updated_at);
            }
        }
        return user;
    }
};
UserService.ctorParameters = () => [
    { type: _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/services/variables.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/variables.service.ts ***!
  \******************************************************/
/*! exports provided: SettingsChangeAction, VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsChangeAction", function() { return SettingsChangeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/shared/services/dexie.service.ts");
/* harmony import */ var _basedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basedata.service */ "./src/app/shared/services/basedata.service.ts");




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
    set(name, value, logComment = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let oldVal;
            let action = SettingsChangeAction.Insert;
            if (yield this.has(name)) {
                oldVal = yield this.get(name);
                action = SettingsChangeAction.Update;
            }
            const success = yield this.variables.put({ name, value })
                .then(() => {
                this.checkWatchVar(name, action, value, oldVal);
                return true;
            })
                .catch((err) => false);
            return success;
        });
    }
    setRevId(name, value, logComment = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let oldVal;
            let action = SettingsChangeAction.Insert;
            if (yield this.has(name)) {
                oldVal = yield this.get(name);
                action = SettingsChangeAction.Update;
            }
            if (value === 0 || oldVal > value) {
                const err = 'Kritischer Zugriff: Wert von ' + name + ' wurde versucht herunterzusetzen von ' + oldVal + ' auf ' + value;
                console.error(err, { name, value, logComment, oldVal, action });
                return false;
            }
            const success = yield this.variables.put({ name, value })
                .then(() => {
                this.checkWatchVar(name, action, value, oldVal);
                return true;
            })
                .catch((err) => false);
            return success;
        });
    }
    get(name, defaultValue = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.variables.get(name)
                .then(item => item.value)
                .catch((err) => defaultValue);
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VariablesService.prototype, "varChanged", void 0);
VariablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VariablesService);



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
    appVersion: __webpack_require__(/*! ../../package.json */ "./package.json").version + '-dev',
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

module.exports = __webpack_require__(/*! C:\Users\f.barthold\workspace\ErwinInventarisierung\apps\frontendRetructure\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map