(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-ngbheader></app-ngbheader>\n<div class=\"container\">\n  <div class=\"row mt-2\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container h-100\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"user_card\">\n            <div class=\"d-flex justify-content-center\">\n                <div class=\"brand_logo_container\" style=\"background-color:#c02b2b;color:#ffbd55;border:0.rem solid #c02b2b; overflow:hidden;\">\n                    <div class=\"brand_logo_barcode\">\n                        <fa-icon [icon]=\"['fa', 'barcode']\"></fa-icon>\n                        <fa-icon [icon]=\"['fa', 'barcode']\"></fa-icon>\n                    </div>\n                    <div class=\"brand_logo_text\">Inventarisierung</div>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center form_container\">\n                <form #loginForm=ngForm (ngSubmit)=\"onLoginSubmit()\">\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <fa-icon [icon]=\"['fa', 'user']\"></fa-icon>\n                            </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control input_user\" name=\"user\" placeholder=\"username\"\n                            [(ngModel)]=\"form.email\"\n                            minlength=\"3\"\n                            pattern=\"[a-zA-Z0-9.@]{3,}\"\n                            required\n                        >\n                    </div>\n                    <div class=\"input-group mb-2\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <fa-icon [icon]=\"['fa', 'key']\"></fa-icon>\n                            </span>\n                        </div>\n                        <input required type=\"password\" class=\"form-control input_pass\" name=\"password\" placeholder=\"password\"\n                        [(ngModel)]=\"form.password\"\n                        required>\n                    </div>\n                    <div class=\"d-flex justify-content-center mt-3 login_container\">\n                 <button type=\"button\" name=\"button\" class=\"btn login_btn\"\n                 (click)=\"onLoginSubmit()\"\n                 [disabled]=\"loginForm.invalid\">Login</button>\n               </div>\n                </form>\n            </div>\n        </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n    </div>\n</div>\n\n<div style=\"display: none\"><p>login works!</p></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/test\">Test</a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\"\n            ngbDropdownToggle\n            id=\"navbarDropdown\" role=\"button\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/test\">Action</a>\n            <a class=\"dropdown-item\" routerLink=\"/test\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/test\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" routerLink=\"/test\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n\n<div style=\"display: none\"><p>header works!</p></div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormInventFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mb-1\">\n  <div class=\"form-group col-4\">\n    <label for=\"kunde\">Mandant</label>\n    <input id=\"kunde\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"kundeName\">\n  </div>\n  <div class=\"form-group col-4\">\n    <label for=\"adresse\">Adresse</label>\n    <input id=\"adresse\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"adresse\">\n  </div>\n  <div class=\"form-group col-4\">\n    <label for=\"raum\">Raum</label>\n    <input id=\"raum\" class=\"form-control\" [readOnly]=\"true\" [attr.value]=\"raumNr\">\n  </div>\n</div>\n\n<div class=\"row mb-4\">\n  <div class=\"col-6\">\n    <app-progressbar [shortTitle]=\"'Gesamt'\" [title]=\"'Fortschrittsanzeige gesamt'\" [value]=\"45.5\" [total]=\"145\"></app-progressbar>\n  </div>\n  <div class=\"col-6\">\n    <app-progressbar [shortTitle]=\"'Raum'\"  [title]=\"'Fortschrittsanzeige Raum'\" [value]=\"45.5\" [total]=\"145\"></app-progressbar>\n  </div>\n</div>\n\n<div class=\"form-group row mt-4\">\n  <label for=\"raumCode\" class=\"col-4 col-sm-3 col-md-2 col-lg-2\">Raum-Barcode</label>\n  <div class=\"col input-group\">\n    <input id=\"raumCode\" type=\"text\" class=\"form-control\" (input)=\"onRaumBarcodeInput( $event )\" placeholder=\"Barcode\" aria-label=\"Raumcode\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner()\"><fa-icon [icon]=\"faSearch\"></fa-icon></button>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-group row mt-4\">\n  <label for=\"raumNr\" class=\"col-4 col-sm-3 col-md-2 col-lg-2\">Raum-Nr</label>\n  <div class=\"col input-group\">\n    <input id=\"raumNr\" type=\"text\" class=\"form-control\" placeholder=\"Raumnr\" aria-label=\"Raumnummer\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectCreateRaum()\">...</button>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"form-group row\">\n    <label for=\"raumBez\" class=\"col-4 col-sm-3 col-md-2 col-lg-2\">Raum-Bez.</label>\n    <div class=\"col\">\n      <input  id=\"raumBez\" type=\"text\" class=\"form-control\">\n    </div>\n</div>\n\n<div class=\"form-group row\">\n    <label for=\"elmBarcode\" class=\"col-4 col-sm-3 col-md-2 col-lg-2\">Barcode</label>\n    <div class=\"col input-group\">\n      <input id=\"elmBarcode\" readonly type=\"text\" class=\"form-control\" placeholder=\"Barcode\" aria-label=\"Barcode\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openScanner()\">...</button>\n      </div>\n    </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"elmArtBez\" class=\"col-4 col-sm-3 col-md-2 col-lg-2\">Artikel<span class=\"d-none d-md-inline\">-Bez.</span></label>\n    <div class=\"col input-group\">\n      <input id=\"elmArtBez\" readonly type=\"text\" class=\"form-control\" placeholder=\"Artikelbezeichnung\" aria-label=\"Artikelbezeichnung\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"openSelectCreateArtikel()\">...</button>\n      </div>\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"elmArtTyp\" class=\"col-3 col-sm-3 col-md-2 col-lg-2\"><span class=\"d-none d-md-inline\">Artikel-</span>Typ</label>\n    <div class=\"col\">\n      <input  id=\"elmArtTyp\" type=\"text\" class=\"form-control\">\n    </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"elmArtTyp\" class=\"col-3 col-sm-3 col-md-2 col-lg-2\">Bild</label>\n  <div class=\"col\">\n    <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Large button group\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"openCreateArtikelImage()\"> + Neu</button>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"openShowArtikelImage()\"> anzeigen</button>\n    </div>\n  </div>\n</div>\n\n<ngx-sw-scanner-detection\n  (scan)=\"handle($event)\"\n  [config]=\"scanDetectorConfig\"\n>\n  <input #input> ### not needed, only for showing the code\n</ngx-sw-scanner-detection>\n\n<button (click)=\"simulateScanner()\">Scanner Simulation</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormModalsCreateArtikelImageCreateArtikelImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello, {{name}} !</p>\n  <p>create-artikel-image works!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormModalsScannerScannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Hi there!</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n  <zxing-scanner [torch]=\"torchEnabled\" [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\r\n                 [formats]=\"formatsEnabled\" [tryHarder]=\"tryHarder\" (permissionResponse)=\"onHasPermission($event)\"\r\n                 (camerasFound)=\"onCamerasFound($event)\" (torchCompatible)=\"onTorchCompatible($event)\"></zxing-scanner>\r\n\r\n  <section class=\"results\" *ngIf=\"qrResultString\">\r\n    <div>\r\n      <small>Result</small>\r\n      <strong>{{ qrResultString }}</strong>\r\n    </div>\r\n    <button ngbButton (click)=\"clearResult()\">&times;</button>\r\n  </section>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormModalsSelectCreateArtikelSelectCreateArtikelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div><p>select-create-artikel works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormModalsSelectCreateRaumSelectCreateRaumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Raum zuordnen oder anlegen</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Raum</label>\n        <div class=\"input-group\">\n          <input id=\"Raum\" class=\"form-control\" placeholder=\"Raumnr\" name=\"Raum\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Raum</label>\n        <div class=\"input-group\">\n          <input id=\"Bezeichnung\" class=\"form-control\" placeholder=\"Raumbezeichnung\" name=\"Bezeichnung\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Datum (Dummy)</label>\n        <div class=\"input-group\">\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Save click')\">Save</button>\n  </div>\n\n<!-- button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Raum zuordnen</button -->\n\n<hr>\n\n<pre>{{closeResult}}</pre>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventFormModalsShowArtikelImageShowArtikelImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello!</p>\n  <p>show-artikel-image works!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventoryComponentsProgressbarProgressbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<label>\n  <span class=\"d-none d-md-inline\">{{title}}: </span>\n  <span class=\"d-inline d-md-none\">{{short}}: </span>\n  {{totalText}}\n</label>\n<div>\n\n  <div class=\"progress progress-elemente\" [ngClass]=\"{'bg-danger' : total > 0}\">\n    <div class=\"progress-bar bg-success\" [ngClass]=\"type\" role=\"progressbar\" [style.width]=\"progressAmount + '%'\">\n    </div>\n    <span class=\"progress-text\">{{donePercentText}}</span>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6 text-success\">\n      <span class=\"d-none d-md-inline\">\n        Erledigt </span>{{doneAmountText}}\n    </div>\n    <div class=\"col-6 text-danger text-right\">\n      <span class=\"d-none d-md-inline\">\n        Rest </span>{{restAmountText}}\n    </div>\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNgbheaderNgbheaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <span class=\"navbar-brand\">Inventory</span>\n  <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown>\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\n          Static\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown>\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown2\" role=\"button\">\n          Static right\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown2\" class=\"dropdown-menu dropdown-menu-right\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li *ngIf=\"false\" class=\"nav-item\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown3\" role=\"button\">\n          Dynamic\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown3\" class=\"dropdown-menu\">\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/select-inventory\">Select</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/form-inventory\">Inventarisieren</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mkRequest()\">mkRequest</a>\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectInventorySelectInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"ctrlKunde\">Auswahl KundeModel</label>\n    <select\n        class=\"form-control\"\n        id=\"client\"\n        name=\"client\"\n        ngModel\n        (change)=\"clientChanged($event.target.value)\"\n        required>\n      <option *ngFor=\"let _client of clients; let i = index\" [attr.data-index]=\"i\" [value]=\"i\">\n        {{ _client.Mandant }}\n      </option>\n    </select>\n  </div>\n\n  <div>{{ client?.Mandant }}</div>\n\n  <div class=\"form-group\">\n    <label for=\"ctrlStandort\">Auswahl Standort</label>\n\n    <select\n      class=\"form-control\"\n      id=\"building\"\n      name=\"building\"\n      ngModel\n      (change)=\"buildingChanged($event.target.value)\"\n      required>\n      <option *ngFor=\"let _bldg of buildings; let i = index\" [attr.data-index]=\"i\" [value]=\"i\">{{_bldg.Gebaeude}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <app-progressbar [title]=\"'Anzahl Elemente'\" [value]=\"45.5\" [total]=\"145\"></app-progressbar>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-sm-6 offset-sm-6\">\n      <button [disabled]=\"false && !f.valid\" class=\"btn btn-primary w-100\">Starten</button>\n  </div>\n  </div>\n</form>\n\n\n\n<div style=\"display: none\"><p>select-inventory works!</p></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>test works!</p>\n\n<h1>hi</h1>\n\n<button class=\"btn btn-primary\" [ngClass]=\"{'btn-secondary': isToggled}\" (click)=\"onToggle()\">Toggle</button>\n\n<div class=\"c1\" *ngIf=\"isToggled\">\n  <div class=\"c1-1\" (click)=\"onClick_c1_1_1()\">Element in div.c1>div.c1-1</div>\n</div>\n<div class=\"c1\" *ngIf=\"isToggled\">\n  <div class=\"c1-2\" (click)=\"onClick_c1_1_2()\">Element in div.c1>div.c1-2</div>\n</div>\n\n<div class=\"c1-1\" *ngIf=\"!isToggled\" (click)=\"onClick_c1_1()\">\n  Element in div.c1-1 {{title}}\n</div>\n\n<input type=\"text\" [(ngModel)]=\"title\">\n<p>{{ title }}</p>\n<button class=\"btn btn-primary\"\n        [ngStyle]=\"{textDecoration: titleEndWithAnA ? 'none' : 'underline'}\"\n        (click)=\"onAddAnA()\">Add an a</button>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ApiService = class ApiService {
      constructor(http) {
        this.http = http;
        this.apiBaseUrl = ':8040/';
        const originDomain = window && window.location && window.location.origin ? window.location.origin.split(':').slice(0, 2).join(':') : 'http://127.0.0.1';
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

    ApiService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: #fff;\n}\n\ndiv.c1 div.c1-1 {\n  color: green;\n}\n\ndiv.c1-1 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBRElJO0VBQ0ksWUFBQTtBQ0RSOztBREtBO0VBQ0ksVUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuYzEge1xyXG4gICAgZGl2LmMxLTEge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmMxLTEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsImgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmRpdi5jMSBkaXYuYzEtMSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuZGl2LmMxLTEge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'frontend';
        console.log('init AppComponent');
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./select-inventory/select-inventory.component */
    "./src/app/select-inventory/select-inventory.component.ts");
    /* harmony import */


    var _ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./ngbheader/ngbheader.component */
    "./src/app/ngbheader/ngbheader.component.ts");
    /* harmony import */


    var _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./invent-form/invent-form.component */
    "./src/app/invent-form/invent-form.component.ts");
    /* harmony import */


    var _inventory_progress_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./inventory-progress.directive */
    "./src/app/inventory-progress.directive.ts");
    /* harmony import */


    var _inventory_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./inventory/components/progressbar/progressbar.component */
    "./src/app/inventory/components/progressbar/progressbar.component.ts");
    /* harmony import */


    var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./auth/auth-interceptor.service */
    "./src/app/auth/auth-interceptor.service.ts");
    /* harmony import */


    var _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./invent-form/modals/select-create-raum/select-create-raum.component */
    "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts");
    /* harmony import */


    var _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./invent-form/modals/select-create-artikel/select-create-artikel.component */
    "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
    /* harmony import */


    var _invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./invent-form/modals/create-artikel-image/create-artikel-image.component */
    "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
    /* harmony import */


    var _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./invent-form/modals/show-artikel-image/show-artikel-image.component */
    "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var ngx_scanner_detection__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-scanner-detection */
    "./node_modules/ngx-scanner-detection/fesm2015/ngx-scanner-detection.js");
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./invent-form/modals/scanner/scanner.component */
    "./src/app/invent-form/modals/scanner/scanner.component.ts"); // Scanner-Detection
    // the scanner


    const appRoutes = [{
      path: '',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"]
    }, {
      path: 'test',
      component: _test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"]
    }, {
      path: 'select-inventory',
      component: _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__["SelectInventoryComponent"]
    }, {
      path: 'form-inventory/:clientid/:buildingid',
      component: _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__["InventFormComponent"]
    }];
    let AppModule = class AppModule {
      constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBarcode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faKey"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSquare"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheckSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStackOverflow"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faMedium"]);
      }

    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"], _select_inventory_select_inventory_component__WEBPACK_IMPORTED_MODULE_16__["SelectInventoryComponent"], _ngbheader_ngbheader_component__WEBPACK_IMPORTED_MODULE_17__["NgbheaderComponent"], _invent_form_invent_form_component__WEBPACK_IMPORTED_MODULE_18__["InventFormComponent"], _inventory_progress_directive__WEBPACK_IMPORTED_MODULE_19__["InventoryProgressDirective"], _inventory_components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressbarComponent"], _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__["SelectCreateRaumComponent"], _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__["SelectCreateArtikelComponent"], _invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__["CreateArtikelImageComponent"], _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__["ShowArtikelImageComponent"], _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_29__["ScannerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_28__["ZXingScannerModule"], ngx_scanner_detection__WEBPACK_IMPORTED_MODULE_27__["ScannerDetectionModule"]],
      entryComponents: [_invent_form_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_24__["CreateArtikelImageComponent"], _invent_form_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_25__["ShowArtikelImageComponent"], _invent_form_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_29__["ScannerComponent"], _invent_form_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_23__["SelectCreateArtikelComponent"], _invent_form_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_22__["SelectCreateRaumComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
        multi: true
      }, _api_service__WEBPACK_IMPORTED_MODULE_26__["ApiService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/auth/auth-interceptor.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppAuthAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

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
            Authorization: "Bearer ".concat(user.token)
          }
        });
        return next.handle(modifiedReq);
      }

    };

    AuthInterceptorService.ctorParameters = () => [{
      type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.scss":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Coded with love by Mutiullah Samim */\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  background: #60a3bc !important;\n}\n.user_card {\n  height: 400px;\n  width: 350px;\n  margin-top: auto;\n  margin-bottom: auto;\n  background: #f39c12;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n}\n.brand_logo_container {\n  position: absolute;\n  height: 90px;\n  width: 200px;\n  top: 25px;\n  border-radius: 5px;\n  background: #60a3bc;\n  padding: 10px;\n  text-align: center;\n}\n.brand_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.form_container {\n  margin-top: 75px;\n}\n.login_btn {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important;\n}\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.login_container {\n  padding: 0 2rem;\n}\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important;\n}\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important;\n}\n.brand_logo_barcode {\n  font-size: 6rem;\n  position: absolute;\n  top: -25%;\n  left: 9%;\n  width: 83%;\n  height: 6rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.brand_logo_text {\n  font-size: 1rem;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background-color: inherit;\n  font-weight: bold;\n  letter-spacing: 0.06em;\n  padding: 0.2em 0 0.3em 0;\n}\n.form-control.ng-invalid {\n  border-right: 0.4rem solid #f7a9a9;\n}\n.form-control.ng-valid {\n  border-right: 0.4rem solid #adfaad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLHVDQUFBO0FBQ0c7O0VBRUksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRFQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpRkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNHUjtBRERJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNJUjtBREZJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQ0tSO0FESEk7RUFDSSxlQUFBO0FDTVI7QURKSTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0FDT1I7QURMSTs7RUFFSSwyQkFBQTtFQUNBLHVCQUFBO0FDUVI7QUROSTtFQUNJLG9DQUFBO0FDU1I7QUROQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRE5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ1NKO0FETkE7RUFDSSxrQ0FBQTtBQ1NKO0FETkE7RUFDSSxrQ0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXHJcbiAgICBib2R5LFxyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51c2VyX2NhcmQge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIHRvcDogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjBhM2JjO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJyYW5kX2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9idG46Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlucHV0X3VzZXIsXHJcbiAgICAuaW5wdXRfcGFzczpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLmJyYW5kX2xvZ29fYmFyY29kZSB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNSU7XHJcbiAgICBsZWZ0OiA5JTtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJyYW5kX2xvZ29fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjNlbSAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgcmdiKDI0NywgMTY5LCAxNjkpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIHJnYigxNzMsIDI1MCwgMTczKTtcclxufVxyXG4iLCIvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXG5ib2R5LFxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNjBhM2JjICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyX2NhcmQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmMzljMTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRvcDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNjBhM2JjO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmFuZF9sb2dvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uZm9ybV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3M6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZF9sb2dvX2JhcmNvZGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjUlO1xuICBsZWZ0OiA5JTtcbiAgd2lkdGg6IDgzJTtcbiAgaGVpZ2h0OiA2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5icmFuZF9sb2dvX3RleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgcGFkZGluZzogMC4yZW0gMCAwLjNlbSAwO1xufVxuXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWQge1xuICBib3JkZXItcmlnaHQ6IDAuNHJlbSBzb2xpZCAjZjdhOWE5O1xufVxuXG4uZm9ybS1jb250cm9sLm5nLXZhbGlkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgI2FkZmFhZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AuthComponent = class AuthComponent {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
        this.form = {
          email: null,
          password: null
        };
      }

      ngOnInit() {}

      onLoginSubmit() {
        console.log('onLoginSubmit #32', this.form);
        let authObs;
        let url = '';
        const email = this.form.email;
        const password = this.form.password;
        const originDomain = window && window.location && window.location.origin ? window.location.origin.split(':').slice(0, 2).join(':') : 'http://127.0.0.1';
        url = originDomain + ':8040/auth/login/';
        console.log('onLoginSubmit #44', {
          url
        });
        authObs = this.authService.login(email, password);
        console.log('onLoginSubmit #47', {
          url
        });
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
        console.log('onLoginSubmit #63', {
          url
        });
      }

    };

    AuthComponent.ctorParameters = () => [{
      type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthComponent.prototype, "password", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/auth/auth.component.scss")).default]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");

    let AuthService = class AuthService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = null;
        this.url = ':8040/auth/login/';
        console.log('#29 AuthService.constructor', 'this.url: ', this.url);
        const originDomain = window && window.location && window.location.origin ? window.location.origin.split(':').slice(0, 2).join(':') : 'http://127.0.0.1';
        this.url = originDomain + this.url;
        console.log('#34 AuthService.constructor', {
          originDomain
        }, 'this.url: ', this.url);
      }

      login(email, password) {
        console.log('#37 AuthService.login', {
          email,
          password
        }, 'this.url: ', this.url);
        return this.http.post(this.url, {
          email,
          password,
          returnSecureToken: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(resData => {
          console.log('AuthService.login', {
            resData
          });
          this.handleAuthentication(email, resData.auth_identifier, resData.access_token, +resData.expires_in);
        }));
      }

      handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, token, expirationDate);
        this.setUserData(this.user);
      }

      setUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
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

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

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
    /***/

  },

  /***/
  "./src/app/dexie.service.ts":
  /*!**********************************!*\
    !*** ./src/app/dexie.service.ts ***!
    \**********************************/

  /*! exports provided: DexieService */

  /***/
  function srcAppDexieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DexieService", function () {
      return DexieService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var dexie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dexie */
    "./node_modules/dexie/dist/dexie.es.js");

    let DexieService = class DexieService extends dexie__WEBPACK_IMPORTED_MODULE_2__["default"] {
      constructor() {
        super('LocalInventory');
        this.version(1).stores({
          gebaeude: '++gid,mid,mandanten_id,Gebaeude,Adresse,' + 'created_at,modified_at,created_uid,modified_uid',
          hersteller: '++hid,Hersteller,created_at,updated_at',
          inventar: 'ivid,mcid,rid,Bezeichnung,Typ,Kategorie,Farbe,Groesse,Zustand,Seriennr,' + 'jobid,invid,iv_nr,ErsteAufnahmeAm,LetzteAufnahmeAm,' + 'created_at,modified_at,created_uid,modified_uid',
          inventuren: '++jobid,mid,gid,Titel,Start,aktiviert,created_at,modified_at,created_uid,modified_uid',
          lieferant: '++hid,Lieferant,created_at,updated_at',
          logInventar: '++id,crud_action,ivid,mcid,rid,mid,jobid,Bezeichnung,data,' + 'log_time,log_user',
          logObjektGlobal: '++id,crud_action,gcid,Bezeichnung,data,log_time,log_user',
          logObjektMandant: '++id,crud_action,gcid,mcid,mid,data,log_time,log_user',
          logRaeume: '++id,crud_action,rid,gid,mid,Raum,Raumbezeichnung,Etage,data,' + 'log_time,log_user,created_at,updated_at',
          mandanten: '++mid,Mandant,created_at,modified_at,created_uid,modified_uid',
          objektKatalogGlobal: '++gcid,hid,lid,Bezeichnung,Produktnr,Typ,Gruppe,Kategorie,Farbe,Groesse,' + 'Bild,AnlagenNr,FibuNr,Flaeche,Gewicht,Baujahr,Kst,' + 'created_at,modified_at,created_uid,modified_uid',
          objektKatalogMandant: '++mcid,gcid,mid,created_at,modified_at,created_uid,modified_uid',
          raeume: '++rid,gid,raumid,Raum,Raumbezeichnung,Etage,' + 'created_at,modified_at,created_uid,modified_uid',
          uploads: '++id,mid,standort,importkey,filename,filesize,checksum,content,stat,errors,created_at,created_uid,modified_at,modified_uid',
          users: '++id,name,email,password,remember_token,created_at,updated_at'
        });
      }

    };
    DexieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DexieService);
    /***/
  },

  /***/
  "./src/app/event.service.ts":
  /*!**********************************!*\
    !*** ./src/app/event.service.ts ***!
    \**********************************/

  /*! exports provided: EventService */

  /***/
  function srcAppEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let EventService = class EventService {
      constructor() {
        this.TestEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventService);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HeaderComponent = class HeaderComponent {
      constructor() {
        this.isAuthenticated = true;
      }

      ngOnInit() {}

    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/invent-form.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/invent-form/invent-form.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormInventFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL2ludmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/invent-form/invent-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/invent-form/invent-form.component.ts ***!
    \******************************************************/

  /*! exports provided: InventFormComponent */

  /***/
  function srcAppInventFormInventFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventFormComponent", function () {
      return InventFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../inventory/service/data.service */
    "./src/app/inventory/service/data.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modals/scanner/scanner.component */
    "./src/app/invent-form/modals/scanner/scanner.component.ts");
    /* harmony import */


    var _modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modals/create-artikel-image/create-artikel-image.component */
    "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts");
    /* harmony import */


    var _modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modals/show-artikel-image/show-artikel-image.component */
    "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts");
    /* harmony import */


    var _modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modals/select-create-artikel/select-create-artikel.component */
    "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts");
    /* harmony import */


    var _modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modals/select-create-raum/select-create-raum.component */
    "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts"); // Dialogs


    let InventFormComponent = class InventFormComponent {
      constructor(route, dataService, modalService) {
        this.route = route;
        this.dataService = dataService;
        this.modalService = modalService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.scanDetectorConfig = {
          minLength: 7,
          maxLength: 20,
          scannerStartsWith: '',
          scannerEndsWith: '',
          scanTimeout: 100,
          replaceNotNumber: true,
          allowNotNumber: false,
          ignoreOverElement: [],
          barcodeType: ''
        };
      }

      ngOnInit() {
        this.routingSubscription = this.route.params.subscribe(params => {
          this.clientID = parseInt(params.clientid, 10);
          this.buildingID = parseInt(params.buildingid, 10);
          this.kunde = this.dataService.getClient(this.clientID);
          this.gebaeude = this.dataService.getBuilding(this.buildingID, this.clientID);
          console.log({
            params,
            kunde: this.kunde,
            gebaeude: this.gebaeude
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

      openComponent(content) {
        const modalRef = this.modalService.open(content);
        modalRef.componentInstance.name = 'World';
      }

      openCreateArtikelImage() {
        const modalRef = this.modalService.open(_modals_create_artikel_image_create_artikel_image_component__WEBPACK_IMPORTED_MODULE_7__["CreateArtikelImageComponent"]);
        modalRef.componentInstance.name = 'World';
      }

      openShowArtikelImage() {
        const modalRef = this.modalService.open(_modals_show_artikel_image_show_artikel_image_component__WEBPACK_IMPORTED_MODULE_8__["ShowArtikelImageComponent"]);
        modalRef.componentInstance.name = 'World';
      }

      openScanner() {
        const modalRef = this.modalService.open(_modals_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_6__["ScannerComponent"]);
        modalRef.componentInstance.name = 'World';
      }

      openSelectCreateArtikel() {
        const modalRef = this.modalService.open(_modals_select_create_artikel_select_create_artikel_component__WEBPACK_IMPORTED_MODULE_9__["SelectCreateArtikelComponent"]);
        modalRef.componentInstance.name = 'World';
      }

      openSelectCreateRaum() {
        const modalRef = this.modalService.open(_modals_select_create_raum_select_create_raum_component__WEBPACK_IMPORTED_MODULE_10__["SelectCreateRaumComponent"]);
      }

      ngOnDestroy() {
        this.routingSubscription.unsubscribe();
      }

      onRaumBarcodeInput(event) {
        if (event.target instanceof HTMLInputElement || 'value' in event.target) {
          console.log('BarCodeInput:', event.target.value);
        }
      }

      onBarcodeInput() {}

      handle(event) {
        console.log(event);
        this.input.nativeElement.value = event.barcode;
      } // dummy


      simulateScanner() {
        const s = '1234567890123';

        for (const character of s) {
          // for (let i = 0; i < s.length; i++) {
          const e = new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: character,
            shiftKey: false
          });
          setTimeout(() => document.dispatchEvent(e));
        }

        const xe = new KeyboardEvent('keyup', {
          bubbles: true,
          cancelable: true,
          key: 'Enter',
          shiftKey: false
        });
        setTimeout(() => document.dispatchEvent(xe));
      }

    };

    InventFormComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
    }, {
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      static: true
    })], InventFormComponent.prototype, "input", void 0);
    InventFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invent-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invent-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/invent-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invent-form.component.scss */
      "./src/app/invent-form/invent-form.component.scss")).default]
    })], InventFormComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormModalsCreateArtikelImageCreateArtikelImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9jcmVhdGUtYXJ0aWtlbC1pbWFnZS9jcmVhdGUtYXJ0aWtlbC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CreateArtikelImageComponent */

  /***/
  function srcAppInventFormModalsCreateArtikelImageCreateArtikelImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateArtikelImageComponent", function () {
      return CreateArtikelImageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let CreateArtikelImageComponent = class CreateArtikelImageComponent {
      constructor(activeModal) {
        this.activeModal = activeModal;
      }

      ngOnInit() {}

    };

    CreateArtikelImageComponent.ctorParameters = () => [{
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CreateArtikelImageComponent.prototype, "name", void 0);
    CreateArtikelImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-artikel-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-artikel-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-artikel-image.component.scss */
      "./src/app/invent-form/modals/create-artikel-image/create-artikel-image.component.scss")).default]
    })], CreateArtikelImageComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/modals/scanner/scanner.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/invent-form/modals/scanner/scanner.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormModalsScannerScannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/invent-form/modals/scanner/scanner.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/invent-form/modals/scanner/scanner.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ScannerComponent */

  /***/
  function srcAppInventFormModalsScannerScannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScannerComponent", function () {
      return ScannerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @zxing/library/esm/core/BarcodeFormat */
    "./node_modules/@zxing/library/esm/core/BarcodeFormat.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let ScannerComponent = class ScannerComponent {
      constructor( //    private readonly _dialog: MatDialo,
      activeModal) {
        this.activeModal = activeModal;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.currentDevice = null;
        this.formatsEnabled = [_zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].CODE_128, _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].DATA_MATRIX, _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].EAN_13, _zxing_library_esm_core_BarcodeFormat__WEBPACK_IMPORTED_MODULE_3__["default"].QR_CODE];
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.tryHarder = false;
      }

      ngOnInit() {}

      clearResult() {
        this.qrResultString = null;
      }

      onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
      }

      onCodeResult(resultString) {
        this.qrResultString = resultString;
      }

      onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
      }

      openFormatsDialog() {
        const data = {
          formatsEnabled: this.formatsEnabled
        }; // this._dialog
        //   .open(FormatsDialogComponent, { data })
        //   .afterClosed()
        //   .subscribe(x => { if (x) { this.formatsEnabled = x; } });
      }

      onHasPermission(has) {
        this.hasPermission = has;
      }

      openInfoDialog() {
        const data = {
          hasDevices: this.hasDevices,
          hasPermission: this.hasPermission
        }; // this._dialog.open(AppInfoDialogComponent, { data });
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

    ScannerComponent.ctorParameters = () => [{
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
    }];

    ScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scanner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scanner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/scanner/scanner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scanner.component.scss */
      "./src/app/invent-form/modals/scanner/scanner.component.scss")).default]
    })], ScannerComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormModalsSelectCreateArtikelSelectCreateArtikelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLWFydGlrZWwvc2VsZWN0LWNyZWF0ZS1hcnRpa2VsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SelectCreateArtikelComponent */

  /***/
  function srcAppInventFormModalsSelectCreateArtikelSelectCreateArtikelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCreateArtikelComponent", function () {
      return SelectCreateArtikelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let SelectCreateArtikelComponent = class SelectCreateArtikelComponent {
      constructor(activeModal) {
        this.activeModal = activeModal;
      }

      ngOnInit() {}

    };

    SelectCreateArtikelComponent.ctorParameters = () => [{
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
    }];

    SelectCreateArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-create-artikel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-create-artikel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-create-artikel.component.scss */
      "./src/app/invent-form/modals/select-create-artikel/select-create-artikel.component.scss")).default]
    })], SelectCreateArtikelComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormModalsSelectCreateRaumSelectCreateRaumComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zZWxlY3QtY3JlYXRlLXJhdW0vc2VsZWN0LWNyZWF0ZS1yYXVtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/invent-form/modals/select-create-raum/select-create-raum.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SelectCreateRaumComponent */

  /***/
  function srcAppInventFormModalsSelectCreateRaumSelectCreateRaumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCreateRaumComponent", function () {
      return SelectCreateRaumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let SelectCreateRaumComponent = class SelectCreateRaumComponent {
      constructor( // private modalService: NgbModal,
      activeModal) {
        this.activeModal = activeModal;
      } // open(content) {
      //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //     this.closeResult = `Closed with: ${result}`;
      //   }, (reason) => {
      //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //   });
      // }


      getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
          return 'by pressing ESC';
        } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return "with: ".concat(reason);
        }
      }

      ngOnInit() {}

    };

    SelectCreateRaumComponent.ctorParameters = () => [{
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
    }];

    SelectCreateRaumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-create-raum',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-create-raum.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/select-create-raum/select-create-raum.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-create-raum.component.scss */
      "./src/app/invent-form/modals/select-create-raum/select-create-raum.component.scss")).default]
    })], SelectCreateRaumComponent);
    /***/
  },

  /***/
  "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventFormModalsShowArtikelImageShowArtikelImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudC1mb3JtL21vZGFscy9zaG93LWFydGlrZWwtaW1hZ2Uvc2hvdy1hcnRpa2VsLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ShowArtikelImageComponent */

  /***/
  function srcAppInventFormModalsShowArtikelImageShowArtikelImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowArtikelImageComponent", function () {
      return ShowArtikelImageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let ShowArtikelImageComponent = class ShowArtikelImageComponent {
      constructor(activeModal) {
        this.activeModal = activeModal;
      }

      ngOnInit() {}

    };

    ShowArtikelImageComponent.ctorParameters = () => [{
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
    }];

    ShowArtikelImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-artikel-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-artikel-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-artikel-image.component.scss */
      "./src/app/invent-form/modals/show-artikel-image/show-artikel-image.component.scss")).default]
    })], ShowArtikelImageComponent);
    /***/
  },

  /***/
  "./src/app/inventory-progress.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/inventory-progress.directive.ts ***!
    \*************************************************/

  /*! exports provided: InventoryProgressDirective */

  /***/
  function srcAppInventoryProgressDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryProgressDirective", function () {
      return InventoryProgressDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InventoryProgressDirective = class InventoryProgressDirective {
      constructor() {}

    };
    InventoryProgressDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appInventoryProgress]'
    })], InventoryProgressDirective);
    /***/
  },

  /***/
  "./src/app/inventory/components/progressbar/progressbar.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/inventory/components/progressbar/progressbar.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventoryComponentsProgressbarProgressbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n  position: relative;\n}\n\n.progress-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  line-height: calc(1.5em + 0.75rem + 2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvQzpcXFVzZXJzXFxmLmJhcnRob2xkXFx3b3Jrc3BhY2VcXEVyd2luSW52ZW50YXJpc2llcnVuZ1xcYXBwc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGludmVudG9yeVxcY29tcG9uZW50c1xccHJvZ3Jlc3NiYXJcXHByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLnByb2dyZXNzLWVsZW1lbnRlIHtcclxuICBoZWlnaHQ6Y2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzLXRleHR7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBsaW5lLWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG59XHJcbiIsIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcy10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inventory/components/progressbar/progressbar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/inventory/components/progressbar/progressbar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProgressbarComponent */

  /***/
  function srcAppInventoryComponentsProgressbarProgressbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
      return ProgressbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProgressbarComponent = class ProgressbarComponent {
      constructor() {
        this.title = 'Fortschrittsanzeige';
        this.shortTitle = '';
        this.type = 'success';
        this.restType = 'danger';
        this.value = 0;
        this.total = 0;
      }

      get short() {
        return this.shortTitle ? this.shortTitle : this.title;
      }

      get progressAmount() {
        return !this.value ? 0 : !this.total ? 50 : Math.round(this.value * 1000 / this.total) / 10;
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
        return !this.total ? '??' : this.total - this.value + ' Stk' + (!this.total || this.total === 100 ? '' : ' (' + this.progressRest + '%)');
      }

      get restAmountText() {
        return this.total ? '' + Math.max(0, this.total - this.value) + 'Stk' : '';
      }

      get restPercentText() {
        return this.total ? '' + this.progressRest + '%' : '';
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "shortTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "restType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressbarComponent.prototype, "total", void 0);
    ProgressbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progressbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progressbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/components/progressbar/progressbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progressbar.component.scss */
      "./src/app/inventory/components/progressbar/progressbar.component.scss")).default]
    })], ProgressbarComponent);
    /***/
  },

  /***/
  "./src/app/inventory/service/data.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/inventory/service/data.service.ts ***!
    \***************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppInventoryServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _dexie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../dexie.service */
    "./src/app/dexie.service.ts");

    let DataService = class DataService {
      constructor(api, dexie) {
        this.api = api;
        this.dexie = dexie;
      }

      getSelectedRoom() {}

      getUserAssignedInventories() {
        return this.dexie.inventuren.toArray();
      }

      loadInventurSelection() {}

      loadUserAssignedInventories() {
        this.api.get('api/inventur/listByAuthUser').subscribe(list => {
          console.log('SelectInventoryComponent', 'loadUserAssignedInventories', {
            list
          });
          this.dexie.inventuren.clear();
          list.forEach(item => {
            this.dexie.inventuren.put(item);
          });
        });
      }

      loadClientList() {
        this.api.get('api/mandant').subscribe(list => {
          console.log('SelectInventoryComponent', 'loadClientList', {
            list
          });
          this.dexie.mandanten.clear();
          list.forEach(item => {
            console.log({
              called: 'loadClientList',
              item
            });
            this.dexie.mandanten.put(item);
          });
        });
      }

      loadGebaeudeListByClientId(mid) {
        this.api.get('api/mandant/' + mid + '/gebaeude').subscribe(list => {
          console.log('SelectInventoryComponent', 'loadClientList', {
            list
          });
          this.dexie.gebaeude.where('mid').equals(mid).delete();
          list.forEach(item => {
            console.log({
              called: 'loadClientList',
              item
            });
            this.dexie.gebaeude.put(item);
          });
        });
      }

      loadRaeumeListByGebaeudeId(gid) {
        this.api.get('api/gebaeude/' + gid + '/raeume').subscribe(list => {
          console.log('SelectInventoryComponent', 'loadClientList', {
            list
          });
          this.dexie.raeume.where('gid').equals(gid).delete();
          list.forEach(item => {
            console.log({
              called: 'loadClientList',
              item
            });
            this.dexie.raeume.put(item);
          });
        });
      }

      loadInventar(gid) {
        this.api.get('api/gebaeude/' + gid + '/raeume').subscribe(list => {
          console.log('SelectInventoryComponent', 'loadClientList', {
            list
          });
          this.dexie.raeume.where('gid').equals(gid).delete();
          list.forEach(item => {
            console.log({
              called: 'loadClientList',
              item
            });
            this.dexie.raeume.put(item);
          });
        });
      }

      loadInventurDataByInventurId(id) {
        const tables = {
          gebaeude: 'pending',
          raeume: 'pending',
          inventar: 'pending',
          objektkatalogglobal: 'pending',
          objektkatalogmandant: 'pending'
        };

        const tblStatus = (table, status) => {
          tables[table] = status;
          console.log(tables);
        };

        this.loadTableDataByUrl('gebaeude', "api/inventur/".concat(id, "/gebaeude"), tblStatus);
        this.loadTableDataByUrl('raeume', "api/inventur/".concat(id, "/raeume"), tblStatus);
        this.loadTableDataByUrl('inventar', "api/inventur/".concat(id, "/inventar"), tblStatus);
        this.loadTableDataByUrl('objektKatalogGlobal', "api/inventur/".concat(id, "/katalog"), tblStatus);
        this.loadTableDataByUrl('objektKatalogMandant', "api/inventur/".concat(id, "/artikelids"), tblStatus);
      }

      loadTableDataByUrl(table, url, cbTblStatus, options) {
        if (cbTblStatus) {
          cbTblStatus(table, 'downloading');
        }

        console.log({
          function: 'loadTableDataByUrl',
          table,
          url,
          cbTblStatus,
          options
        });
        return this.api.get(url).subscribe(data => {
          console.log('Retrieved Data ', table, ' for processing!');

          if (cbTblStatus) {
            cbTblStatus(table, 'process import');
          }

          data.rows.forEach(item => {
            if (table === 'raeume') {
              console.log({
                called: 'load item' + table,
                item
              });
            }

            this.dexie.table(table).put(item);
          });
          console.log('Finished Importprocess Data ', table);

          if (cbTblStatus) {
            cbTblStatus(table, 'finished');
          }
        });
      }

      getClient(clientID) {
        const clients = this.getClientList();
        const fclients = clients.filter(client => client.mid === clientID);
        console.log({
          clientID,
          clients,
          fclients
        });
        return fclients.length ? fclients[0] : null;
      }

      getBuilding(bldgID, clientID) {
        const bldgs = this.getBuildingList(clientID);
        const fbldgs = bldgs.filter(bldg => bldg.gid === bldgID);
        console.log({
          bldgID,
          clientID,
          bldgs,
          fbldgs
        });
        return fbldgs.length ? fbldgs[0] : null;
      }

      getClientList2() {
        return this.dexie.mandanten.toArray();
      }

      getClientList() {
        return [{
          mid: 1,
          uid: 1400,
          Mandant: 'Vodafone',
          created_at: new Date(new Date('2020-02-01 21:38:44')),
          modified_at: null,
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 3,
          uid: 1100,
          Mandant: 'Rheienergie',
          created_at: new Date(new Date('2020-02-01 21:38:44')),
          modified_at: null,
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 4,
          uid: 1300,
          Mandant: 'Manpower',
          created_at: new Date(new Date('2020-02-01 21:38:44')),
          modified_at: null,
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 5,
          uid: 1200,
          Mandant: 'APO Bank',
          created_at: new Date(new Date('2020-02-01 21:38:44')),
          modified_at: null,
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 6,
          uid: 1500,
          Mandant: 'Rheinmetall',
          created_at: new Date(new Date('2020-02-01 21:38:44')),
          modified_at: null,
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 10,
          uid: 1600,
          Mandant: 'APO-Data',
          created_at: new Date(new Date('2020-02-05 08:27:00')),
          modified_at: new Date(new Date('2020-02-01 21:43:36')),
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 11,
          uid: 1000,
          Mandant: 'RTL-Köln',
          created_at: new Date(new Date('2020-02-05 08:27:00')),
          modified_at: new Date(new Date('2020-02-01 21:43:36')),
          created_uid: 0,
          modified_uid: 0
        }, {
          mid: 12,
          uid: 1700,
          Mandant: 'Mertens',
          created_at: new Date(new Date('2020-02-05 08:27:00')),
          modified_at: new Date(new Date('2020-02-01 21:43:36')),
          created_uid: 0,
          modified_uid: 0
        }];
      }

      getBuildingList(clientID) {
        return [{
          gid: 1,
          mid: 1,
          Gebaeude: '11.1',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 2,
          mid: 1,
          Gebaeude: '11.3',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 3,
          mid: 1,
          Gebaeude: '11_1',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 4,
          mid: 1,
          Gebaeude: '11_2',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 5,
          mid: 1,
          Gebaeude: '12',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 6,
          mid: 1,
          Gebaeude: 'A',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 7,
          mid: 1,
          Gebaeude: 'B',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 8,
          mid: 1,
          Gebaeude: 'C',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 9,
          mid: 1,
          Gebaeude: 'Campus',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 10,
          mid: 1,
          Gebaeude: 'Hochhaus',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 11,
          mid: 1,
          Gebaeude: 'RHEINENERGIE',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 12,
          mid: 2,
          Gebaeude: 'Standard',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 13,
          mid: 3,
          Gebaeude: '10',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 14,
          mid: 3,
          Gebaeude: '11',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 15,
          mid: 3,
          Gebaeude: '11.1',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 16,
          mid: 3,
          Gebaeude: '11.2',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 17,
          mid: 3,
          Gebaeude: '11.3',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 18,
          mid: 3,
          Gebaeude: '11.3/E071.1S',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 19,
          mid: 3,
          Gebaeude: '11.4',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 20,
          mid: 3,
          Gebaeude: '11.5',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 21,
          mid: 3,
          Gebaeude: '11.6',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 22,
          mid: 3,
          Gebaeude: '11_1',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 23,
          mid: 3,
          Gebaeude: '11_2',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 24,
          mid: 3,
          Gebaeude: '11_3',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 25,
          mid: 3,
          Gebaeude: '11_4',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 26,
          mid: 3,
          Gebaeude: '11_5',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 27,
          mid: 3,
          Gebaeude: '11_6',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 28,
          mid: 3,
          Gebaeude: '12',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 29,
          mid: 3,
          Gebaeude: '13',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 30,
          mid: 3,
          Gebaeude: '14',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 31,
          mid: 3,
          Gebaeude: '20',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 32,
          mid: 3,
          Gebaeude: '21',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 33,
          mid: 3,
          Gebaeude: '22',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 34,
          mid: 3,
          Gebaeude: '23',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 35,
          mid: 3,
          Gebaeude: '24',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 36,
          mid: 3,
          Gebaeude: '30',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 37,
          mid: 3,
          Gebaeude: '31',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 38,
          mid: 3,
          Gebaeude: '32',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 39,
          mid: 3,
          Gebaeude: '33',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 40,
          mid: 3,
          Gebaeude: '33/A 110',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 41,
          mid: 3,
          Gebaeude: '34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 42,
          mid: 3,
          Gebaeude: '35',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 43,
          mid: 3,
          Gebaeude: '36',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 44,
          mid: 3,
          Gebaeude: '38',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 45,
          mid: 3,
          Gebaeude: '38/E01',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 46,
          mid: 3,
          Gebaeude: '39',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 47,
          mid: 3,
          Gebaeude: '40',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 48,
          mid: 3,
          Gebaeude: '40/122',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 49,
          mid: 3,
          Gebaeude: '41',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 50,
          mid: 3,
          Gebaeude: '41/E 16',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 51,
          mid: 3,
          Gebaeude: '42',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 52,
          mid: 3,
          Gebaeude: '50',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 53,
          mid: 3,
          Gebaeude: '51',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 54,
          mid: 3,
          Gebaeude: '52',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 55,
          mid: 3,
          Gebaeude: '53',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 56,
          mid: 3,
          Gebaeude: '54',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 57,
          mid: 3,
          Gebaeude: '60',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 58,
          mid: 3,
          Gebaeude: '61',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 59,
          mid: 3,
          Gebaeude: '64',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 60,
          mid: 3,
          Gebaeude: '66',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 61,
          mid: 3,
          Gebaeude: '68',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 62,
          mid: 3,
          Gebaeude: '70',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 63,
          mid: 3,
          Gebaeude: '70/E02',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 64,
          mid: 3,
          Gebaeude: '81',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 65,
          mid: 3,
          Gebaeude: '83',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 66,
          mid: 3,
          Gebaeude: '99',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 67,
          mid: 3,
          Gebaeude: 'Außenflächen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 68,
          mid: 3,
          Gebaeude: 'HLS131 42',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 69,
          mid: 3,
          Gebaeude: 'KUZ',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 70,
          mid: 3,
          Gebaeude: 'SSH',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 71,
          mid: 3,
          Gebaeude: 'Standard',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 72,
          mid: 4,
          Gebaeude: 'Aachen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 73,
          mid: 4,
          Gebaeude: 'Aschaffenburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 74,
          mid: 4,
          Gebaeude: 'Augsburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 75,
          mid: 4,
          Gebaeude: 'Bautzen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 76,
          mid: 4,
          Gebaeude: 'Berlin',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 77,
          mid: 4,
          Gebaeude: 'Biberach',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 78,
          mid: 4,
          Gebaeude: 'Bielefeld',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 79,
          mid: 4,
          Gebaeude: 'Brandenburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 80,
          mid: 4,
          Gebaeude: 'Braunschweig',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 81,
          mid: 4,
          Gebaeude: 'Bremen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 82,
          mid: 4,
          Gebaeude: 'Chemnitz',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 83,
          mid: 4,
          Gebaeude: 'Coburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 84,
          mid: 4,
          Gebaeude: 'Cottbus',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 85,
          mid: 4,
          Gebaeude: 'Deggendorf',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 86,
          mid: 4,
          Gebaeude: 'Dessau',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 87,
          mid: 4,
          Gebaeude: 'Dortmund',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 88,
          mid: 4,
          Gebaeude: 'Dresden',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 89,
          mid: 4,
          Gebaeude: 'Düsseldorf',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 90,
          mid: 4,
          Gebaeude: 'Einbeck',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 91,
          mid: 4,
          Gebaeude: 'Eisenach',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 92,
          mid: 4,
          Gebaeude: 'Erfurt',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 93,
          mid: 4,
          Gebaeude: 'Eschborn',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 94,
          mid: 4,
          Gebaeude: 'Frankfurt a.M.',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 95,
          mid: 4,
          Gebaeude: 'Freiburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 96,
          mid: 4,
          Gebaeude: 'Friedberg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 97,
          mid: 4,
          Gebaeude: 'Fulda',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 98,
          mid: 4,
          Gebaeude: 'Gießen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 99,
          mid: 4,
          Gebaeude: 'Goslar',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 100,
          mid: 4,
          Gebaeude: 'Göttingen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 101,
          mid: 4,
          Gebaeude: 'Halberstadt',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 102,
          mid: 4,
          Gebaeude: 'Haldensleben',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 103,
          mid: 4,
          Gebaeude: 'Halle',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 104,
          mid: 4,
          Gebaeude: 'Hamburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 105,
          mid: 4,
          Gebaeude: 'Hanau',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 106,
          mid: 4,
          Gebaeude: 'Hann. Múnden',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 107,
          mid: 4,
          Gebaeude: 'Hannover',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 108,
          mid: 4,
          Gebaeude: 'Heidelberg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 109,
          mid: 4,
          Gebaeude: 'Heidenheim',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 110,
          mid: 4,
          Gebaeude: 'Heilbad Heiligenstad',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 111,
          mid: 4,
          Gebaeude: 'Henningsdorf',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 112,
          mid: 4,
          Gebaeude: 'Jena',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 113,
          mid: 4,
          Gebaeude: 'Karlsruhe',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 114,
          mid: 4,
          Gebaeude: 'Kassel',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 115,
          mid: 4,
          Gebaeude: 'Kaufbeuren',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 116,
          mid: 4,
          Gebaeude: 'Kempten',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 117,
          mid: 4,
          Gebaeude: 'Köln',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 118,
          mid: 4,
          Gebaeude: 'Lahr',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 119,
          mid: 4,
          Gebaeude: 'Landsberg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 120,
          mid: 4,
          Gebaeude: 'Landshut',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 121,
          mid: 4,
          Gebaeude: 'Leipzig',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 122,
          mid: 4,
          Gebaeude: 'Lindenberg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 123,
          mid: 4,
          Gebaeude: 'Ludwigsburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 124,
          mid: 4,
          Gebaeude: 'Lörrach',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 125,
          mid: 4,
          Gebaeude: 'Magdeburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 126,
          mid: 4,
          Gebaeude: 'Mainz',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 127,
          mid: 4,
          Gebaeude: 'Mannheim',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 128,
          mid: 4,
          Gebaeude: 'Memmingen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 129,
          mid: 4,
          Gebaeude: 'München',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 130,
          mid: 4,
          Gebaeude: 'Nienburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 131,
          mid: 4,
          Gebaeude: 'Nordhausen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 132,
          mid: 4,
          Gebaeude: 'Nürnberg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 133,
          mid: 4,
          Gebaeude: 'Potsdam',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 134,
          mid: 4,
          Gebaeude: 'Rastatt',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 135,
          mid: 4,
          Gebaeude: 'Ravensburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 136,
          mid: 4,
          Gebaeude: 'Regensburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 137,
          mid: 4,
          Gebaeude: 'Rudolstadt',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 138,
          mid: 4,
          Gebaeude: 'Saarbrücken',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 139,
          mid: 4,
          Gebaeude: 'Schongau',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 140,
          mid: 4,
          Gebaeude: 'Schweinfurt',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 141,
          mid: 4,
          Gebaeude: 'Schwerin',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 142,
          mid: 4,
          Gebaeude: 'Standard',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 143,
          mid: 4,
          Gebaeude: 'Stuttgart',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 144,
          mid: 4,
          Gebaeude: 'Suhl',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 145,
          mid: 4,
          Gebaeude: 'Trier',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 146,
          mid: 4,
          Gebaeude: 'Ulm',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 147,
          mid: 4,
          Gebaeude: 'Wangen',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 148,
          mid: 4,
          Gebaeude: 'Wiesbaden',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 149,
          mid: 4,
          Gebaeude: 'Wolfsburg',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 150,
          mid: 4,
          Gebaeude: 'Worms',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 151,
          mid: 4,
          Gebaeude: 'Zwickau',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 152,
          mid: 5,
          Gebaeude: 'AWE00D0A1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 153,
          mid: 5,
          Gebaeude: 'AWE00D0A1-A114',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 154,
          mid: 5,
          Gebaeude: 'AWE00D0A1-A126',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 155,
          mid: 5,
          Gebaeude: 'AWE00D0A1-A130',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 156,
          mid: 5,
          Gebaeude: 'AWE00D0A1-A138',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 157,
          mid: 5,
          Gebaeude: 'AWE00D0A2-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 158,
          mid: 5,
          Gebaeude: 'AWE00D0A3-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 159,
          mid: 5,
          Gebaeude: 'AWE00D0A4-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 160,
          mid: 5,
          Gebaeude: 'AWE00D0A4-A450',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 161,
          mid: 5,
          Gebaeude: 'AWE00D0A4-A453',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 162,
          mid: 5,
          Gebaeude: 'AWE00D0A4-A456',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 163,
          mid: 5,
          Gebaeude: 'AWE00D0AE-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 164,
          mid: 5,
          Gebaeude: 'AWE00D0B1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 165,
          mid: 5,
          Gebaeude: 'AWE00D0B2-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 166,
          mid: 5,
          Gebaeude: 'AWE00D0B2-B204',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 167,
          mid: 5,
          Gebaeude: 'AWE00D0B2-B208',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 168,
          mid: 5,
          Gebaeude: 'AWE00D0B2-B213',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 169,
          mid: 5,
          Gebaeude: 'AWE00D0B2-B251',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 170,
          mid: 5,
          Gebaeude: 'AWE00D0B2-B255',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 171,
          mid: 5,
          Gebaeude: 'AWE00D0B4-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 172,
          mid: 5,
          Gebaeude: 'AWE00D0B4-B403',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 173,
          mid: 5,
          Gebaeude: 'AWE00D0B4-B406',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 174,
          mid: 5,
          Gebaeude: 'AWE00D0B4-B409',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 175,
          mid: 5,
          Gebaeude: 'AWE00D0B5-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 176,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B511',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 177,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B513',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 178,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B515',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 179,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B524',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 180,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B526',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 181,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B529',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 182,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B531',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 183,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B540',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 184,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B542',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 185,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B545',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 186,
          mid: 5,
          Gebaeude: 'AWE00D0B5-B548',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 187,
          mid: 5,
          Gebaeude: 'AWE00D0BE-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 188,
          mid: 5,
          Gebaeude: 'AWE00D0C1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 189,
          mid: 5,
          Gebaeude: 'AWE00D0C2-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 190,
          mid: 5,
          Gebaeude: 'AWE00D0C3-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 191,
          mid: 5,
          Gebaeude: 'AWE00D0C3-C308',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 192,
          mid: 5,
          Gebaeude: 'AWE00D0C3-C310',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 193,
          mid: 5,
          Gebaeude: 'AWE00D0C3-C316',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 194,
          mid: 5,
          Gebaeude: 'AWE00D0C4-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 195,
          mid: 5,
          Gebaeude: 'AWE00D0C6-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 196,
          mid: 5,
          Gebaeude: 'AWE00D0CE-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 197,
          mid: 5,
          Gebaeude: 'AWE00D0D1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 198,
          mid: 5,
          Gebaeude: 'AWE00D0D2-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 199,
          mid: 5,
          Gebaeude: 'AWE00D0D2-D210',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 200,
          mid: 5,
          Gebaeude: 'AWE00D0D3-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 201,
          mid: 5,
          Gebaeude: 'AWE00D0D3-D352',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 202,
          mid: 5,
          Gebaeude: 'AWE00D0D3-D359',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 203,
          mid: 5,
          Gebaeude: 'AWE00D0D3-D366',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 204,
          mid: 5,
          Gebaeude: 'AWE00D0D4-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 205,
          mid: 5,
          Gebaeude: 'AWE00D0D4-D425',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 206,
          mid: 5,
          Gebaeude: 'AWE00D0DE-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 207,
          mid: 5,
          Gebaeude: 'AWE00D0E1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 208,
          mid: 5,
          Gebaeude: 'AWE00D0E2-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 209,
          mid: 5,
          Gebaeude: 'AWE00D0E3-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 210,
          mid: 5,
          Gebaeude: 'AWE00D0E4-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 211,
          mid: 5,
          Gebaeude: 'AWE00D0E4-E458',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 212,
          mid: 5,
          Gebaeude: 'AWE00D0E4-E462',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 213,
          mid: 5,
          Gebaeude: 'AWE00D0E5-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 214,
          mid: 5,
          Gebaeude: 'AWE00D0E6-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 215,
          mid: 5,
          Gebaeude: 'AWE00D0EE-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 216,
          mid: 5,
          Gebaeude: 'AWE00D0U1-',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 217,
          mid: 5,
          Gebaeude: 'AWE00K1EG-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 218,
          mid: 5,
          Gebaeude: 'AWE00K1O1-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 219,
          mid: 5,
          Gebaeude: 'AWE00K1O2-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 220,
          mid: 5,
          Gebaeude: 'AWE00K1O3-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 221,
          mid: 5,
          Gebaeude: 'AWE00K1O4-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 222,
          mid: 5,
          Gebaeude: 'AWE00K1O5-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 223,
          mid: 5,
          Gebaeude: 'AWE00K1U2-Riehler Str. 34',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 224,
          mid: 5,
          Gebaeude: 'AWE00K2EG-Riehler Str. 36',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 225,
          mid: 5,
          Gebaeude: 'AWE00K2U1-Riehler Str. 36',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 226,
          mid: 10,
          Gebaeude: 'Beispielgebäude',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 227,
          mid: 10,
          Gebaeude: 'Düsseldorf',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 228,
          mid: 10,
          Gebaeude: 'Hannover',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }, {
          gid: 229,
          mid: 12,
          Gebaeude: 'Willich',
          Adresse: '',
          created_at: new Date('2020-02-02 01:48:32'),
          modified_at: null,
          created_uid: 0,
          modified_uid: null
        }].filter(b => b.mid === clientID);
      }

    };

    DataService.ctorParameters = () => [{
      type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
    }, {
      type: _dexie_service__WEBPACK_IMPORTED_MODULE_3__["DexieService"]
    }];

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/ngbheader/ngbheader.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/ngbheader/ngbheader.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNgbheaderNgbheaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nYmhlYWRlci9uZ2JoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ngbheader/ngbheader.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ngbheader/ngbheader.component.ts ***!
    \**************************************************/

  /*! exports provided: NgbheaderComponent */

  /***/
  function srcAppNgbheaderNgbheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbheaderComponent", function () {
      return NgbheaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let NgbheaderComponent = class NgbheaderComponent {
      constructor(http) {
        this.http = http;
        this.collapsed = true;
      }

      mkRequest() {
        const originDomain = window && window.location && window.location.origin ? window.location.origin.split(':').slice(0, 2).join(':') : 'http://127.0.0.1';
        this.http.get(originDomain + ':8040/auth/me').subscribe(data => console.log(data));
      }

    };

    NgbheaderComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    NgbheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ngbheader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ngbheader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ngbheader/ngbheader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ngbheader.component.scss */
      "./src/app/ngbheader/ngbheader.component.scss")).default]
    })], NgbheaderComponent);
    /***/
  },

  /***/
  "./src/app/select-inventory/select-inventory.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/select-inventory/select-inventory.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectInventorySelectInventoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress.progress-elemente {\n  height: calc(1.5em + 0.75rem + 2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LWludmVudG9yeS9DOlxcVXNlcnNcXGYuYmFydGhvbGRcXHdvcmtzcGFjZVxcRXJ3aW5JbnZlbnRhcmlzaWVydW5nXFxhcHBzXFxmcm9udGVuZC9zcmNcXGFwcFxcc2VsZWN0LWludmVudG9yeVxcc2VsZWN0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VsZWN0LWludmVudG9yeS9zZWxlY3QtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1pbnZlbnRvcnkvc2VsZWN0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy5wcm9ncmVzcy1lbGVtZW50ZSB7XHJcbiAgaGVpZ2h0OmNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxufVxyXG4iLCIucHJvZ3Jlc3MucHJvZ3Jlc3MtZWxlbWVudGUge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/select-inventory/select-inventory.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/select-inventory/select-inventory.component.ts ***!
    \****************************************************************/

  /*! exports provided: SelectInventoryComponent */

  /***/
  function srcAppSelectInventorySelectInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectInventoryComponent", function () {
      return SelectInventoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../inventory/service/data.service */
    "./src/app/inventory/service/data.service.ts");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../event.service */
    "./src/app/event.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SelectInventoryComponent = class SelectInventoryComponent {
      constructor(dataService, eventService, route, router) {
        this.dataService = dataService;
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.totalElements = 300;
        this.doneElements = 50;
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
        return Math.round(done * 1000 / total) / 10;
      }

      ngOnInit() {
        console.log('ngOnInit select-iventory.components.ts');
        this.dataService.loadClientList();
        this.dataService.loadUserAssignedInventories();
        this.clients = this.dataService.getClientList();
        this.dataService.getClientList2().then(result => {
          console.log({
            called: 'this.dataService.getClientList1',
            result
          });
          this.clients = result;
        });
        this.dataService.getUserAssignedInventories().then(result => {
          console.log({
            called: 'this.dataService.getUserAssignedInventories',
            result
          });
          this.inventories = result;
        });
        this.routingSubscription = this.route.params.subscribe(params => {
          console.log({
            params
          });
        });
      }

      ngOnDestroy() {
        this.routingSubscription.unsubscribe();
      }

      clientChanged(clientIdx) {
        this.client = this.clients[clientIdx];
        console.log('client changed to ', {
          clientIdx,
          this_clients: this.clients,
          this_client: this.client
        });
        this.buildings = this.dataService.getBuildingList(this.client.mid); // this.client = clientID;
      }

      onSubmit() {
        console.log(this.selectForm);
        this.dataService.loadInventurDataByInventurId(1); // Simple Way to navigate

        this.router.navigateByUrl('/form-inventory'); // More Control for navigate

        this.router.navigate(['/form-inventory', this.client.mid, this.building.gid]);
      }

      buildingChanged(buildingListIdx) {
        this.building = this.buildings[buildingListIdx];
      }

    };

    SelectInventoryComponent.ctorParameters = () => [{
      type: _inventory_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
    }, {
      type: _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      static: false
    })], SelectInventoryComponent.prototype, "selectForm", void 0);
    SelectInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-inventory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/select-inventory/select-inventory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-inventory.component.scss */
      "./src/app/select-inventory/select-inventory.component.scss")).default]
    })], SelectInventoryComponent);
    /***/
  },

  /***/
  "./src/app/test/test.component.scss":
  /*!******************************************!*\
    !*** ./src/app/test/test.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

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

      ngOnInit() {}

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

    TestComponent.ctorParameters = () => [{
      type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    }];

    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.component.scss */
      "./src/app/test/test.component.scss")).default]
    })], TestComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\f.barthold\workspace\ErwinInventarisierung\apps\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map