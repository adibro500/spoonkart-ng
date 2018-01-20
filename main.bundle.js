webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Headers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");

var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]();
// let url = 'http://localhost:8081/auth/v1/ldap-login';
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
// headers.append('Access-Control-Allow-Headers', '*');
// headers.append('Access-Control-Request-Method', '*');
// headers.append('Access-Control-Allow-Methods', 'POST');
//Access-Control-Allow-Methods 


/***/ }),

/***/ "../../../../../src/app/addFood/addFood.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addFood_service__ = __webpack_require__("../../../../../src/app/addFood/addFood.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_positioning_positioning_service__ = __webpack_require__("../../../../ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_customer_info_customer_component__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_customer_info_customer_service__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/customer-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_customer_info_data_service_sdervice__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/data-service.sdervice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dynamicOptions_config__ = __webpack_require__("../../../../../src/app/addFood/dynamicOptions.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selectize_config__ = __webpack_require__("../../../../../src/app/addFood/selectize.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AddFoodComponent = (function () {
    function AddFoodComponent(cserv, dServ, spinnerService, modalService, fserv, router) {
        var _this = this;
        this.cserv = cserv;
        this.dServ = dServ;
        this.spinnerService = spinnerService;
        this.modalService = modalService;
        this.fserv = fserv;
        this.router = router;
        this.config = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false
        };
        this.data = [];
        this.billingItems = [];
        this.finalAmt = 0;
        this.billedAmt = 0;
        this.calcAmtHelper = [];
        this.qty = 0;
        this.loaded = false;
        this.keyUp = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["b" /* Subject */]();
        this.totalAmt = 0;
        this.selectedOption = '';
        this.exampleData = [];
        this.data2 = {};
        this.data3 = [];
        this.currentOptionsConfig = __WEBPACK_IMPORTED_MODULE_15__dynamicOptions_config__["b" /* CURRENT_OPTIONS_CONFIG */];
        this.value = [];
        this.removeOptions = this.currentOptions;
        this.removeOptionsConfig = __WEBPACK_IMPORTED_MODULE_15__dynamicOptions_config__["c" /* REMOVE_OPTIONS_CONFIG */];
        this.addOptions = [];
        this.addOptionsConfig = __WEBPACK_IMPORTED_MODULE_15__dynamicOptions_config__["a" /* ADD_OPTIONS_CONFIG */];
        console.log('now: ', __WEBPACK_IMPORTED_MODULE_14_underscore__["now"]());
        this.spinnerService.show();
        this.fserv.getFood().subscribe(function (data) {
            _this.data = JSON.parse(JSON.stringify(data[0].food_menu));
            _this.spinnerService.hide();
        });
        if (this.radioData !== undefined && this.qty == 1) {
            this.billedAmt = this.radioData * 1;
        }
        var observable = this.keyUp
            .map(function (value) { return event.target.value; })
            .debounceTime(1000)
            .distinctUntilChanged()
            .flatMap(function (search) {
            _this.spinnerService.show();
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(search).delay(500);
        })
            .subscribe(function (data) {
            _this.dServ.getData(data).subscribe(function (data) {
                if (data !== null) {
                    _this.loaded = true;
                    _this.res = data;
                    _this.fname = _this.res['first name'];
                    _this.lname = _this.res['last name'];
                    _this.mob1 = _this.res['mobile number 1'];
                    _this.mob2 = _this.res['mobile number 2'];
                    _this.mob3 = _this.res['mobile number 3'];
                    _this.mail = _this.res['email address'];
                    _this.hnum = _this.res['detailed house address']['house number'];
                    _this.snum = _this.res['detailed house address']['street number'];
                    _this.loc = _this.res['detailed house address']['location'];
                    _this.city = _this.res['detailed house address']['city'];
                    _this.building = _this.res['detailed flat address']['flat number'];
                    _this.fnum = _this.res['detailed flat address']['building'];
                    _this.snum2 = _this.res['detailed flat address']['street number'];
                    _this.loc2 = _this.res['detailed flat address']['location'];
                    _this.city2 = _this.res['detailed flat address']['city'];
                    console.log(_this.res);
                    _this.spinnerService.hide();
                }
                else {
                    _this.loaded = false;
                    _this.spinnerService.hide();
                }
            }, function (err) {
                _this.loaded = false;
                _this.spinnerService.hide();
            });
        });
    }
    AddFoodComponent.prototype.getBillingItems = function () {
        return Object.entries(this.billingItems).filter(function (arr) { return arr[1]; }).map(function (arr) { return arr[0]; });
    };
    AddFoodComponent.prototype.openModal = function (template, item) {
        this.billedAmt = 0;
        this.qty = 1;
        this.shownData = item;
        this.radioData = 0;
        this.modalRef = this.modalService.show(template, this.config);
    };
    AddFoodComponent.prototype.openModal2 = function (template2, item) {
        this.modalRef2 = this.modalService.show(template2, this.config);
    };
    AddFoodComponent.prototype.openModal3 = function (template3, item) {
        this.modalRef3 = this.modalService.show(template3, this.config);
    };
    AddFoodComponent.prototype.openModal4 = function (template4, item) {
        this.modalRef4 = this.modalService.show(template4, this.config);
    };
    AddFoodComponent.prototype.openModalWithClass = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
    };
    AddFoodComponent.prototype.inc = function () {
        if (this.radioData !== undefined) {
            this.qty++;
            this.billedAmt += this.radioData;
        }
    };
    AddFoodComponent.prototype.ngAfterViewInit = function () {
        // $('.js-example-basic-single').select2();
        // $('.js-example-basic-single').on(
        //     'change',
        //     (e) => this.selectedOption = $(e.target).val()
        // );
    };
    AddFoodComponent.prototype.dec = function () {
        if (this.radioData !== undefined) {
            if (this.qty >= 1)
                this.qty--;
            if (this.billedAmt >= this.radioData)
                this.billedAmt = this.billedAmt - this.radioData;
        }
    };
    AddFoodComponent.prototype.openModalWithComponent = function () {
        this.modalRef4 = this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__dashboard_customer_info_customer_component__["a" /* CustInfoComponent */]);
    };
    AddFoodComponent.prototype.pushToArray = function (a, c, b) {
        this.billingItem = {
            "Item": a,
            "Qty": this.qty,
            "Unit_Cost": c,
            "Cost": b
        };
        if (b !== 0)
            this.billingItems.push(this.billingItem);
        if (this.billingItems.length !== 0) {
            this.totalAmt += parseInt(b);
        }
        else {
            this.totalAmt = 0;
        }
    };
    AddFoodComponent.prototype.updateVals = function (a, b) {
        this.billingItem = { a: b };
        this.billedAmt = this.billingItem[a];
    };
    AddFoodComponent.prototype.openNav = function () {
        if (document.getElementById("mySidenav").style.width !== "250px") {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        else {
            document.getElementById("mySidenav").style.width = "0px";
            document.getElementById("main").style.marginLeft = "0px";
        }
    };
    AddFoodComponent.prototype.onSelect = function () {
        //alert(`id: ${id}, text: ${text}`);
        this.optionSelected2 = this.optionSelected;
        console.log(this.optionSelected);
    };
    AddFoodComponent.prototype.onSearch = function () {
        var _this = this;
        console.log("option sel");
        this.fserv.getCustomerByDoc(this.optionSelected).subscribe(function (res) {
            if (res !== null) {
                _this.loaded = true;
                _this.d3 = res;
                console.log(_this.d3);
                _this.fname = _this.d3['first name'];
                _this.lname = _this.d3['last name'];
                _this.mob1 = _this.d3['mobile number 1'];
                _this.mob2 = _this.d3['mobile number 2'];
                _this.mob3 = _this.d3['mobile number 3'];
                _this.mail = _this.d3['email address'];
                _this.hnum = _this.d3['detailed house address']['house number'];
                _this.snum = _this.d3['detailed house address']['street number'];
                _this.loc = _this.d3['detailed house address']['location'];
                _this.city = _this.d3['detailed house address']['city'];
                _this.fnum = _this.d3['detailed flat address']['flat number'];
                _this.building = _this.d3['detailed flat address']['building'];
                _this.snum2 = _this.d3['detailed flat address']['street number'];
                _this.loc2 = _this.d3['detailed flat address']['location'];
                _this.city2 = _this.d3['detailed flat address']['city'];
                console.log(_this.d3);
            }
            else {
                _this.loaded = false;
            }
        });
    };
    AddFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $(document).ready(function() {
        //     $('.js-example-basic-single').select2();
        // });
        // this.exampleData = [
        //     {
        //       id: 'opt1',
        //       text: 'Options 1'
        //     },
        //     {
        //       id: 'opt2',
        //       text: 'Options 2'
        //     },
        //     {
        //       id: 'opt3',
        //       text: 'Options 3'
        //     },
        //     {
        //       id: 'opt4',
        //       text: 'Options 4'
        //     }
        //   ];
        this.fserv.getCustomer().subscribe(function (data2) {
            _this.data2 = JSON.parse(JSON.stringify(data2));
            _this.setData(_this.data2);
        });
    };
    AddFoodComponent.prototype.setData = function (d) {
        for (var i = 0; i < this.data2.length; i++) {
            if (d[i]["house address"] !== undefined && d[i]["house address"] !== ",,,") {
                this.exampleData.push(d[i]["house address"]);
            }
            else if (d[i]["flat address"] !== ",,," && d[i]["flat address"] !== undefined)
                this.exampleData.push(d[i]["flat address"]);
        }
        console.log(this.exampleData);
    };
    AddFoodComponent.prototype.saveCustomer = function () {
        var today = new Date();
        var Customer = {};
        var h_addr = [];
        var f_addr = [];
        var h_addr2 = {};
        var f_addr2 = {};
        var order = {};
        if (this.d3 === undefined || this.res === undefined) {
            Customer["Customer ID"] = today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds();
            Customer["first name"] = this.fname;
            Customer["last name"] = this.lname;
            Customer["mobile number 1"] = this.mob1;
            if (this.mob2 !== undefined)
                Customer["mobile number 2"] = this.mob2;
            if (this.mob3 !== undefined)
                Customer["mobile number 3"] = this.mob3;
            if (this.mail !== undefined)
                Customer["email address"] = this.mail;
            if (this.hnum !== undefined)
                h_addr.push(this.hnum);
            if (this.snum !== undefined)
                h_addr.push(this.snum);
            if (this.loc !== undefined)
                h_addr.push(this.loc);
            if (this.city !== undefined)
                h_addr.push(this.city);
            if (h_addr !== undefined)
                Customer["house address"] = h_addr.join();
            if (this.hnum !== undefined)
                h_addr2["house number"] = this.hnum;
            if (this.snum !== undefined)
                h_addr2["street number"] = this.snum;
            if (this.loc !== undefined)
                h_addr2["location"] = this.loc;
            if (this.city !== undefined)
                h_addr2["city"] = this.city;
            if (h_addr2 !== undefined)
                Customer["detailed house address"] = h_addr2;
            if (this.fnum !== undefined)
                f_addr.push(this.fnum);
            if (this.building !== undefined)
                f_addr.push(this.building);
            if (this.snum2 !== undefined)
                f_addr.push(this.snum2);
            if (this.loc2 !== undefined)
                f_addr.push(this.loc2);
            if (this.city2 !== undefined)
                f_addr.push(this.city2);
            if (f_addr !== undefined)
                Customer["flat address"] = f_addr.join();
            if (this.fnum !== undefined)
                f_addr2["flat number"] = this.fnum;
            if (this.building !== undefined)
                f_addr2["building name"] = this.building;
            if (this.snum2 !== undefined)
                f_addr2["street number"] = this.building;
            if (this.loc2 !== undefined)
                f_addr2["location"] = this.loc2;
            if (this.city2 !== undefined)
                f_addr2["city"] = this.city2;
            if (f_addr2 !== undefined)
                Customer["detailed flat address"] = f_addr2;
            if (this.billingItems.length >= 1) {
                var totalAmt = 0;
                order["Customer ID"] = today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds();
                order["Order Date"] = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();
                order["Order Time"] = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
                order["Order"] = this.billingItems;
                for (var i = 0; i < this.billingItems.length; i++) {
                    totalAmt += this.billingItems[i]["Cost"];
                }
                order["Total Amount"] = totalAmt;
                Customer["Order Info"] = order;
            }
            console.log("saved");
            this.cserv.saveCustomerInput(Customer);
        }
        else {
            if (this.billingItems.length >= 1) {
                var totalAmt = 0;
                if (this.d3 !== undefined)
                    order["Customer ID"] = this.d3["Customer ID"];
                else if (this.res !== undefined)
                    order["Customer ID"] = this.res["Customer ID"];
                order["Order Date"] = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();
                order["Order Time"] = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
                order["Order"] = this.billingItems;
                for (var i = 0; i < this.billingItems.length; i++) {
                    totalAmt += this.billingItems[i]["Cost"];
                }
                order["Total Amount"] = totalAmt;
                Customer["Order Info"] = order;
            }
            this.cserv.saveCustomerInput(Customer);
        }
    };
    AddFoodComponent.prototype.removeSelectedOption = function () {
        var _this = this;
        this.currentOptions = Object(__WEBPACK_IMPORTED_MODULE_16_lodash__["differenceWith"])(this.currentOptions, this.removeOptionsValue, function (oldValue, selectedValue) {
            return oldValue[_this.currentOptionsConfig.valueField] === selectedValue;
        });
        this.refreshRemoveAndAddOptions();
    };
    AddFoodComponent.prototype.addSelectedOptions = function () {
        var _this = this;
        if (this.addOptionsValue && this.addOptionsValue.length > 0) {
            var optionsToAdd = Object(__WEBPACK_IMPORTED_MODULE_16_lodash__["intersectionWith"])(this.addOptions, this.addOptionsValue, function (option, value) {
                return option[_this.addOptionsConfig.valueField] === value;
            });
            if (optionsToAdd && optionsToAdd.length > 0) {
                optionsToAdd.forEach(function (option) {
                    _this.currentOptions.push(option);
                });
            }
            this.refreshRemoveAndAddOptions();
        }
    };
    AddFoodComponent.prototype.refreshRemoveAndAddOptions = function () {
        var _this = this;
        this.removeOptions = this.currentOptions;
        this.addOptions = Object(__WEBPACK_IMPORTED_MODULE_16_lodash__["differenceWith"])(__WEBPACK_IMPORTED_MODULE_17__selectize_config__["b" /* ExampleValues_Frameworks */], this.removeOptions, function (allValue, removedValue) {
            return allValue[_this.currentOptionsConfig.valueField] === removedValue[_this.removeOptionsConfig.valueField];
        });
    };
    AddFoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-food',
            template: __webpack_require__("../../../../../src/app/addFood/addFood.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/customer-info/customer.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_positioning_positioning_service__["a" /* PositioningService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__dashboard_customer_info_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_12__dashboard_customer_info_data_service_sdervice__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__addFood_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AddFoodComponent);
    return AddFoodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/addFood/addFood.html":
/***/ (function(module, exports) {

module.exports = "    <a><span (click)=\"openNav()\"> <i class=\"glyphicon glyphicon-menu-hamburger\"></i> </span></a>\n    <div class=\"container demo\">\n        \n            \n            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        \n              <ng-container *ngFor=\"let tb of data;let idx=index\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne-{{idx}}\">\n                        <h4 class=\"panel-title\">\n                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne-{{idx}}\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                <i class=\"more-less glyphicon glyphicon-plus\"></i>\n                               {{tb.menu}}\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseOne-{{idx}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                        <div class=\"panel-body\">\n                          \n                            <h4 class=\"col-sm-6 col-md-6 col-xs-6 text-left\">\n                                Food Item\n                            </h4>\n                                  \n                                \n    \n                              \n                                    \n                                          <h4 class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                              Quarter\n                                          </h4>\n                                                <h4 class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                                    Half\n                                                </h4>\n                                                      <h4 class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                                         Full\n                                                      </h4>     \n                                                      <hr/>\n                                    \n                        <ng-container *ngFor=\"let item of tb.items;let idx2=index\">\n\n                          <div class=\"row\" (click)=\"openModal(template,item)\">\n                           \n                        \n                              <div class=\"col-sm-6 col-md-6 col-xs-6 text-left\">\n                            {{item.title}}\n                              </div>\n                              \n                            \n\n                          \n                                \n                                      <div class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                          {{item.quarter}}\n                                            </div>\n                                            <div class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                                {{item.half}}\n                                                  </div>\n                                                  <div class=\"col-sm-2 col-xs-2 col-md-2 text-left\">\n                                                      {{item.full}}\n                                                        </div>     \n                                \n                                                      </div>\n                          \n\n                        </ng-container>\n                        </div>\n                    </div>\n                </div>\n              </ng-container>\n        \n        \n            </div><!-- panel-group -->\n            \n            <div class=\"row\">\n                <div class=\"col-sm-6 col-xs-6 col-md-6\">\n              Item\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                 Unit Cost\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                    Qty\n                  </div>\n                  <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                      Item Cost\n                    </div>\n            </div>\n            <ng-container *ngFor=\"let item of billingItems\">\n              <ng-container *ngIf=\"item !== undefined && item !== null\">\n            <div class=\"row\">\n                <div class=\"col-sm-6  col-xs-6 col-md-6\">\n              {{item.Item}}\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                 {{item.Unit_Cost}}\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                    {{item.Qty}}\n                  </div>\n                  <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                     {{item.Cost}}\n                    </div>\n            </div>\n              </ng-container>\n            </ng-container>\n            <div class=\"col-sm-12 col-md-12 col-xs-12 text-right\">\n              Total Cost:{{totalAmt}}\n            </div>\n            \n            <button (click)=\"openModal2(template2,billingItems)\">Submit Order</button>\n        </div><!-- container -->\n\n\n        \n\n        <ng-template #template>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Modal</h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-6 col-xs-6\">\n                  Item\n                    </div>\n                    <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                      Quarter\n                    </div>\n                    <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                        Half\n                      </div>\n                      <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                          Full\n                        </div>\n                </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6 col-xs-6\">\n             {{shownData.title}}\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                  <ng-container *ngIf=\"shownData.quarter!==undefined && shownData.quarter!==''\">\n                   <input type=\"radio\" name=\"radio-group;qty=0\" (change)=\"billedAmt=radioData\" [(ngModel)]=\"radioData\" [value]=\"shownData.quarter\"> <label>{{shownData.quarter}}</label>\n                  </ng-container>\n                </div>\n                <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                    <ng-container *ngIf=\"shownData.half!==undefined && shownData.half!==''\">\n                        <input type=\"radio\" name=\"radio-group\" (change)=\"billedAmt=radioData\" [(ngModel)]=\"radioData\" [value]=\"shownData.half\"> <label>{{shownData.half}}</label>\n                       </ng-container>\n                  </div>\n                  <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                      <ng-container *ngIf=\"shownData.full!==undefined && shownData.full!==''\">\n                          <input type=\"radio\" name=\"radio-group\" (change)=\"billedAmt=radioData\" [(ngModel)]=\"radioData\" [value]=\"shownData.full\"> <label>{{shownData.full}}</label>\n                         </ng-container>\n                    </div>\n                   \n              \n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-2 col-xs-2\">\n              Quantity: \n              </div>\n              <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                  <button class=\"btn\" (click)=\"inc()\">+</button>\n                  </div>\n                  <span>Quantity: {{qty}}</span>\n                  <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                      <button class=\"btn\" (click)=\"dec()\">-</button> \n                      </div>\n                      <div class=\"col-sm-3 col-md-2 col-xs-2\">\n                         Item Cost: <input class=\"form-control\" type=\"text\" [(ngModel)]=\"billedAmt\" [value]=\"finalAmt\">\n                          </div>\n            </div>\n          \n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"col-sm-12 col-md-12 col-xs-12\">\n                <button (click)=\"pushToArray(shownData.title,radioData,billedAmt);modalRef.hide()\">Add Item</button>\n              </div>\n              <!-- <div *ngIf=\"billingItems.length !== 0\">\n                <ul>\n                  <li *ngFor=\"let d of billingItems\">{{d.Item}},{{d.Unit_Cost}},{{d.Qty}},{{d.Cost}}</li>\n                </ul>\n              </div> -->\n\n          </div>\n          </ng-template>\n\n\n          <ng-template #template2>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Modal</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 col-md-6 col-xs-6\">\n                    Item\n                      </div>\n                      <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                       Unit Cost\n                      </div>\n                      <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                          Qty\n                        </div>\n                        <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                            Item Cost\n                          </div>\n                  </div>\n                  <ng-container *ngFor=\"let item of billingItems\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 col-md-6 col-xs-6\">\n                    {{item.Item}}\n                      </div>\n                      <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                       {{item.Unit_Cost}}\n                      </div>\n                      <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                          {{item.Qty}}\n                        </div>\n                        <div class=\"col-sm-2 col-md-2 col-xs-2\">\n                           {{item.Cost}}\n                          </div>\n                  </div>\n                  </ng-container>\n                  \n              </div>\n               \n              \n              <div class=\"modal-footer\">\n                <div class=\"col-sm-12\">\n                    Total Cost:{{totalAmt}}\n                  <button (click)=\"modalRef2.hide();openModal4(template3)\">Confirm Order</button>\n                </div>\n                <!-- <div *ngIf=\"billingItems.length !== 0\">\n                  <ul>\n                    <li *ngFor=\"let d of billingItems\">{{d.Item}},{{d.Unit_Cost}},{{d.Qty}},{{d.Cost}}</li>\n                  </ul>\n                </div> -->\n  \n            </div>\n            </ng-template>\n\n<ng-template #template3>\n            <form ngNativeValidate>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Customer Information</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef4.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                \n                <div class=\"modal-body\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row col-md-12 col-sm-12 col-xs-12 text-center row_wrapper\">\n                            <div class=\"col-md-10 col-sm-10 col-xs-10\">\n                                    <!-- <ng-selectize [options]=\"currentOptions\" [(ngModel)]=\"value\" [config]=\"currentOptionsConfig\" [ngModelOptions]=\"{standalone: true}\"></ng-selectize>  -->                                                         \n                                <!-- <app-options></app-options> -->\n                                <select2  name=\"srch\"  [options]=\"exampleData\" [(ngModel)]=\"optionSelected\" (onSelect)=\"onSelect($event)\"></select2>    \n                                <input type=\"text\" name=\"ser\" [(ngModel)]=\"optionSelected2\" style=\"display:none\">\n                                <!-- <select class=\"js-example-basic-single\" name=\"state\">\n                                    <option value=\"AL\">Alabama</option>\n                                     \n                                    <option value=\"WY\">Wyoming</option>\n                                  </select> -->\n                                  \t\n                              <!-- </ng-select2> -->\n                            </div>\n                                   \n                                    <div class=\"col-md-1 col-sm-1 col-xs-1\">\n                <button class=\"btn\" (click)=\"onSearch()\">Search</button>\n                            </div>\n                        </div>   \n                       <br/>\n                       <br/>\n                \n                        <div class=\"row_wrapper row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <input id=\"fname\" name=\"fname\" class=\"form-control\" placeholder=\"First Name\" type=\"text\" [(ngModel)]=\"fname\" />\n                \n                            </div>\n                            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                <input id=\"lname\" name=\"lname\" class=\"form-control\" placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"lname\" />\n                            </div>\n                \n                            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                <input id=\"mob1\" name=\"mob1\" class=\"form-control\" placeholder=\"Mobile number 1\" type=\"text\" [(ngModel)]=\"mob1\" (keyup)='keyUp.next($event)' minlength=\"10\" maxlength=\"10\"/>\n                            </div>\n                            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                <input id=\"mob2\" name=\"mob2\" class=\"form-control\" placeholder=\"Mobile number 2\" type=\"text\" [(ngModel)]=\"mob2\" minlength=\"10\" maxlength=\"10\"/>\n                            </div>\n                            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                <input id=\"mob3\" name=\"mob3\" class=\"form-control\" placeholder=\"Mobile number 3\" type=\"text\" [(ngModel)]=\"mob3\" minlength=\"10\" maxlength=\"10\"/>\n                            </div>\n                            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                <input id=\"mail\" name=\"mail\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"mail\" />\n                            </div>\n                            <div class=\"ip col-md-12 col-sm-12 col-xs-12\">\n                \n                                <input type=\"radio\" name=\"radio-group\" id=\"hchk\" value=\"addr_house\" [(ngModel)]=\"addr_type\" />\n                                <label for=\"hchk\">House Address</label>\n                                <input type=\"radio\" name=\"radio-group\" id=\"fchk\" value=\"addr_flat\" [(ngModel)]=\"addr_type\" />\n                                <label for=\"fchk\">Flat Address</label>\n                            </div>\n                \n                            <hr/>\n                            <div *ngIf=\"addr_type=='addr_house'\">\n                                <div class=\"row_wrapper row\">\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"mob2\" name=\"m2\" class=\"form-control\" placeholder=\"House number\" type=\"text\" [(ngModel)]=\"hnum\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"mob3\" name=\"m3\" class=\"form-control\" placeholder=\"Street number\" type=\"text\" [(ngModel)]=\"snum\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"mail\" name=\"ml\" class=\"form-control\" placeholder=\"Location\" type=\"email\" [(ngModel)]=\"loc\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                                        <input id=\"mail\" name=\"ml2\" class=\"form-control\" placeholder=\"City\" type=\"email\" [(ngModel)]=\"city\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"addr_type=='addr_flat'\">\n                                <div class=\"row_wrapper row\">\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"mob2\" name=\"mb2\" class=\"form-control\" placeholder=\"Flat number\" type=\"text\" [(ngModel)]=\"fnum\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"mob3\" name=\"mb3\" class=\"form-control\" placeholder=\"Building\" type=\"text\" [(ngModel)]=\"building\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                \n                                        <input id=\"street\" name=\"st2\" class=\"form-control\" placeholder=\"Street\" type=\"text\" [(ngModel)]=\"snum2\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                                        <input id=\"loc\" name=\"loc2\" class=\"form-control\" placeholder=\"Location\" type=\"text\" [(ngModel)]=\"loc2\" />\n                                    </div>\n                                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                                        <input id=\"city2\" name=\"ct2\" class=\"form-control\" placeholder=\"City\" type=\"text\" [(ngModel)]=\"city2\" />\n                \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                       \n                    </div>\n                \n                    <div class=\"modal-footer\">\n                        <button type=\"submit\" class=\"btn\" (click)=\"saveCustomer();modalRef4.hide()\">Save</button>\n                    </div>\n                </div>\n                </form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/addFood/addFood.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Headers__ = __webpack_require__("../../../../../src/app/Headers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.getFood = function () {
        return this.http.get("https://spoonkart-service.herokuapp.com/get/food", __WEBPACK_IMPORTED_MODULE_3__Headers__["a" /* options */]).map(function (res) { return res.json(); });
    };
    FoodService.prototype.getCustomer = function () {
        return this.http.get("https://spoonkart-service.herokuapp.com/get/customer", __WEBPACK_IMPORTED_MODULE_3__Headers__["a" /* options */]).map(function (res) { return res.json(); });
    };
    FoodService.prototype.getCustomerByDoc = function (addr) {
        console.log("addr", addr);
        return this.http.get("https://spoonkart-service.herokuapp.com/get/customer/" + addr, __WEBPACK_IMPORTED_MODULE_3__Headers__["a" /* options */]).map(function (res) { return res.json(); });
    };
    FoodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "../../../../../src/app/addFood/dynamicOptions.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CURRENT_OPTIONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_OPTIONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_OPTIONS_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectize_config__ = __webpack_require__("../../../../../src/app/addFood/selectize.config.ts");

var CURRENT_OPTIONS_CONFIG = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__selectize_config__["a" /* DEFAULT_DROPDOWN_CONFIG */], {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label', 'value'],
    maxItems: 10
});
var REMOVE_OPTIONS_CONFIG = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__selectize_config__["a" /* DEFAULT_DROPDOWN_CONFIG */], {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label', 'value'],
    maxItems: 10
});
var ADD_OPTIONS_CONFIG = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__selectize_config__["a" /* DEFAULT_DROPDOWN_CONFIG */], {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label', 'value'],
    maxItems: 10
});


/***/ }),

/***/ "../../../../../src/app/addFood/selectize.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Example_Placeholder */
/* unused harmony export Example_Placeholder_HasOptions */
/* unused harmony export Example_Placeholder_NoOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_DROPDOWN_CONFIG; });
/* unused harmony export SingleSelectConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExampleValues_Frameworks; });
/* unused harmony export ExampleValues_Lanugages */
/* unused harmony export ExampleValues_Colors */
/* unused harmony export ExampleGroups_Colors */
/**
 * Created by nicho on 12/17/2016.
 */
var Example_Placeholder = 'Placeholder...';
var Example_Placeholder_HasOptions = 'Click to select options';
var Example_Placeholder_NoOptions = 'No options available...';
var DEFAULT_DROPDOWN_CONFIG = {
    highlight: false,
    create: false,
    persist: true,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down'
};
var SingleSelectConfig = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'value',
    plugins: ['remove_button'],
    maxItems: 1
});
var ExampleValues_Frameworks = [
    {
        label: 'Angular',
        value: 'angular',
        code: 'NG'
    }, {
        label: 'ReactJS',
        value: 'reactjs',
        code: 'RJS'
    }, {
        label: 'Ember JS',
        value: 'emberjs',
        code: 'emjs'
    }, {
        label: 'Ruby on Rails',
        value: 'ruby_on_rails',
        code: 'ROR'
    }
];
var ExampleValues_Lanugages = [
    {
        label: 'JavaScript',
        value: 'javascript',
        code: 'js'
    }, {
        label: 'C++',
        value: 'c++',
        code: 'cpp'
    }, {
        label: 'Java',
        value: 'java',
        code: 'j'
    }, {
        label: 'Cascading Style Sheets',
        value: 'css',
        code: 'css'
    }, {
        label: 'Oracle SQL',
        value: 'oracle_sql',
        code: 'osql'
    }
];
var ExampleValues_Colors = [
    {
        label: 'Red',
        value: 'red',
        group: 'colors'
    }, {
        label: 'Blue',
        value: 'blue',
        group: 'colors'
    }, {
        label: 'Green',
        value: 'green',
        group: 'colors'
    }, {
        label: 'Dog',
        value: 'dog',
        group: 'animals'
    }
];
var ExampleGroups_Colors = [
    {
        group: 'colors',
        label: 'The colors'
    }, {
        group: 'animals',
        label: 'The Animals'
    }
];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<ng4-loading-spinner> </ng4-loading-spinner><router-outlet></router-outlet>',
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_main_dash_main_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-main/dash-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_grid_grid_component__ = __webpack_require__("../../../../../src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_customer_info_customer_component__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addFood_addFood_component__ = __webpack_require__("../../../../../src/app/addFood/addFood.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_customer_info_customer_service__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/customer-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addFood_addFood_service__ = __webpack_require__("../../../../../src/app/addFood/addFood.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_customer_info_data_service_sdervice__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/data-service.sdervice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng_selectize__ = __webpack_require__("../../../../ng-selectize/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_select2_component__ = __webpack_require__("../../../../angular-select2-component/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    //DashComponent
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashComponent */],
        children: [
            { path: 'dashmain', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_main_dash_main_component__["a" /* DashMainComponent */] },
            { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_grid_grid_component__["a" /* GridComponent */] },
            { path: 'cust', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_customer_info_customer_component__["a" /* CustInfoComponent */] },
            { path: 'addFood', component: __WEBPACK_IMPORTED_MODULE_11__addFood_addFood_component__["a" /* AddFoodComponent */] },
        ]
    },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_grid_grid_component__["a" /* GridComponent */] },
    { path: 'cust', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_customer_info_customer_component__["a" /* CustInfoComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_main_dash_main_component__["a" /* DashMainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_customer_info_customer_component__["a" /* CustInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__addFood_addFood_component__["a" /* AddFoodComponent */],
                __WEBPACK_IMPORTED_MODULE_22_angular_select2_component__["a" /* Select2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng_selectize__["a" /* NgSelectizeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__["c" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__dashboard_customer_info_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_15__addFood_addFood_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_17__dashboard_customer_info_data_service_sdervice__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_20__login_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/customer-info/customer-info.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form>\n<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Customer Information</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\n        </div>\n       \n\n        <div class=\"row_wrapper row\">\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                <input id=\"fname\" name=\"fname\" class=\"form-control\" placeholder=\"First Name\" type=\"text\" [(ngModel)]=\"fname\" />\n\n            </div>\n            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                <input id=\"lname\" name=\"lname\" class=\"form-control\" placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"lname\" />\n            </div>\n\n            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                <input id=\"mob1\" name=\"mob1\" class=\"form-control\" placeholder=\"Mobile number 1\" type=\"text\" [(ngModel)]=\"mob1\" (keyup)='keyUP2();keyUp.next($event)' minlength=\"10\" maxlength=\"10\"/>\n            </div>\n            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                <input id=\"mob2\" name=\"mob2\" class=\"form-control\" placeholder=\"Mobile number 2\" type=\"text\" [(ngModel)]=\"mob2\" minlength=\"10\" maxlength=\"10\"/>\n            </div>\n            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                <input id=\"mob3\" name=\"mob3\" class=\"form-control\" placeholder=\"Mobile number 3\" type=\"text\" [(ngModel)]=\"mob3\" minlength=\"10\" maxlength=\"10\"/>\n            </div>\n            <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                <input id=\"mail\" name=\"mail\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"mail\" />\n            </div>\n            <div class=\"ip col-md-12 col-sm-12 col-xs-12\">\n\n                <input type=\"radio\" name=\"radio-group\" id=\"hchk\" value=\"addr_house\" [(ngModel)]=\"addr_type\" />\n                <label for=\"hchk\">House Address</label>\n                <input type=\"radio\" name=\"radio-group\" id=\"fchk\" value=\"addr_flat\" [(ngModel)]=\"addr_type\" />\n                <label for=\"fchk\">Flat Address</label>\n            </div>\n\n            <hr/>\n            <div *ngIf=\"addr_type=='addr_house'\">\n                <div class=\"row_wrapper row\">\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"mob2\" name=\"m2\" class=\"form-control\" placeholder=\"House number\" type=\"text\" [(ngModel)]=\"hnum\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"mob3\" name=\"m3\" class=\"form-control\" placeholder=\"Street number\" type=\"text\" [(ngModel)]=\"snum\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"mail\" name=\"ml\" class=\"form-control\" placeholder=\"Location\" type=\"email\" [(ngModel)]=\"loc\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                        <input id=\"mail\" name=\"ml2\" class=\"form-control\" placeholder=\"City\" type=\"email\" [(ngModel)]=\"city\" />\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"addr_type=='addr_flat'\">\n                <div class=\"row_wrapper row\">\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"mob2\" name=\"mb2\" class=\"form-control\" placeholder=\"Flat number\" type=\"text\" [(ngModel)]=\"fnum\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"mob3\" name=\"mb3\" class=\"form-control\" placeholder=\"Building\" type=\"text\" [(ngModel)]=\"building\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n\n                        <input id=\"street\" name=\"st2\" class=\"form-control\" placeholder=\"Street\" type=\"text\" [(ngModel)]=\"snum2\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                        <input id=\"loc\" name=\"loc2\" class=\"form-control\" placeholder=\"Location\" type=\"text\" [(ngModel)]=\"loc2\" />\n                    </div>\n                    <div class=\"ip col-md-6 col-sm-6 col-xs-6\">\n                        <input id=\"city2\" name=\"ct2\" class=\"form-control\" placeholder=\"City\" type=\"text\" [(ngModel)]=\"city2\" />\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn\" (click)=\"openModal(template);bsModalRef.hide()\">Save</button>\n    </div>\n</div>\n</form>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        Please Confirm\n    </div>\n    <div class=\"modal-body\">\n        <div *ngIf=\"valid_mob == false && confirm_order == true\">\n                \n<h3>Please enter a valid mobile number</h3>\n</div>    \n<div *ngIf=\"confirm_order == false && valid_mob == true\">\n        \n<button (click)=\"saveCustomer()\">Please confirm the order</button>\n</div>    \n    </div>\n</ng-template> -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/customer-info/customer-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Headers__ = __webpack_require__("../../../../../src/app/Headers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.saveCustomerInput = function (data) {
        console.log("inputdata", data);
        return this.http.post("https://spoonkart-service.herokuapp.com/save/customer", data, __WEBPACK_IMPORTED_MODULE_2__Headers__["a" /* options */]).map(function (res) { return res.json(); }).subscribe(function (data) { return console.log(data); });
    };
    CustomerService.prototype.updateCustomerInput = function (str1, data) {
        return this.http.post("https://spoonkart-service.herokuapp.com/update/" + str1, data, __WEBPACK_IMPORTED_MODULE_2__Headers__["a" /* options */]).map(function (res) { return res.json(); }).subscribe(function (data) { return console.log(data); });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/customer-info/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/customer-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service_sdervice__ = __webpack_require__("../../../../../src/app/dashboard/customer-info/data-service.sdervice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CustInfoComponent = (function () {
    function CustInfoComponent(modalService, spinnerService, dServ, bsModalRef, router, cserv) {
        var _this = this;
        this.modalService = modalService;
        this.spinnerService = spinnerService;
        this.dServ = dServ;
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.cserv = cserv;
        this.loading = false;
        this.keyUp = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.config = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false
        };
        var observable = this.keyUp
            .map(function (value) { return event.target.value; })
            .debounceTime(1000)
            .distinctUntilChanged()
            .flatMap(function (search) {
            _this.spinnerService.show();
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(search).delay(500);
        })
            .subscribe(function (data) {
            _this.dServ.getData(data).subscribe(function (data) {
                if (data !== null) {
                    _this.res = data;
                    _this.fname = _this.res['first name'];
                    _this.lname = _this.res['last name'];
                    _this.mob1 = _this.res['mobile number 1'];
                    _this.mob2 = _this.res['mobile number 2'];
                    _this.mob3 = _this.res['mobile number 3'];
                    _this.mail = _this.res['email address'];
                    _this.hnum = _this.res['house address']['house number'];
                    _this.snum = _this.res['house address']['street number'];
                    _this.loc = _this.res['house address']['location'];
                    _this.city = _this.res['house address']['city'];
                    _this.fnum = _this.res['flat address']['flat number'];
                    _this.building = _this.res['flat address']['building name'];
                    _this.snum2 = _this.res['flat address']['street'];
                    _this.loc2 = _this.res['flat address']['location'];
                    _this.city2 = _this.res['flat address']['city'];
                    console.log(_this.res);
                    _this.spinnerService.hide();
                }
                else {
                    _this.fname = '';
                    _this.lname = '';
                    _this.mob1 = '';
                    _this.mob2 = '';
                    _this.mob3 = '';
                    _this.mail = '';
                    _this.hnum = '';
                    _this.snum = '';
                    _this.loc = '';
                    _this.city = '';
                    _this.fnum = '';
                    _this.building = '';
                    _this.snum2 = '';
                    _this.loc2 = '';
                    _this.city2 = '';
                    _this.spinnerService.hide();
                }
            });
        });
    }
    CustInfoComponent.prototype.openModal = function (template, item) {
        this.modalRef5 = this.modalService.show(template, this.config);
        if (this.mob1 !== undefined || this.mob2 !== undefined || this.mob3 !== undefined) {
            this.valid_mob = true;
            this.confirm_order = false;
        }
        else {
            this.valid_mob = false;
            this.confirm_order = true;
        }
    };
    CustInfoComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };
    CustInfoComponent.prototype.keyUP2 = function () {
    };
    CustInfoComponent.prototype.ngOnInit = function () {
    };
    CustInfoComponent.prototype.saveCustomer = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var n = mm + '/' + dd + '/' + yyyy;
        var Customer = {
            "Order Date": n,
            "Order Time": today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds(),
            "first name": this.fname.trim(),
            "last name": this.lname.trim(),
            "mobile number 1": this.mob1.trim(),
            "mobile number 2": this.mob2.trim(),
            "mobile number 3": this.mob3.trim(),
            "email address": this.mail.trim(),
            "house address": {
                "house number": this.hnum.trim(),
                "street number": this.snum.trim(),
                "location": this.loc.trim(),
                "city": this.city.trim()
            },
            "flat address": {
                "flat number": this.fnum.trim(),
                "building name": this.building.trim(),
                "street": this.snum2.trim(),
                "location": this.loc2.trim(),
                "city": this.city2.trim()
            }
        };
        this.cserv.saveCustomerInput(Customer);
    };
    CustInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customer-info',
            template: __webpack_require__("../../../../../src/app/dashboard/customer-info/customer-info.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/customer-info/customer.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_8__data_service_sdervice__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]])
    ], CustInfoComponent);
    return CustInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/customer-info/customer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_wrapper .ip{\n\nmargin-bottom: 10px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/customer-info/data-service.sdervice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getData = function (search) {
        // sample url 
        // this.url = 'https://jsonplaceholder.typicode.com/posts/' + search;
        this.url = 'https://spoonkart-service.herokuapp.com/cust/' + search;
        return this._http.get(this.url)
            .map(function (data) {
            return data.json();
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-main/dash-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashMainComponent = (function () {
    function DashMainComponent(spinnerService, router) {
        this.spinnerService = spinnerService;
        this.router = router;
    }
    DashMainComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    DashMainComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#mi-modal').on('show.bs.modal', function (e) {
                $('#mi-modal').remove('.modal-backdrop');
            });
        });
        var modalConfirm = function (callback) {
            $("#btn-confirm").on("click", function () {
                $("#mi-modal").modal('show');
            });
            $("#modal-btn-si").on("click", function () {
                callback(true);
                $("#mi-modal").modal('hide');
            });
            $("#modal-btn-no").on("click", function () {
                callback(false);
                $("#mi-modal").modal('hide');
            });
        };
        modalConfirm(function (confirm) {
            if (confirm) {
                //Acciones si el usuario confirma
                this.confirmed = true;
            }
            else {
                //Acciones si el usuario no confirma
                this.confirmed = false;
            }
        });
    };
    DashMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-main',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard-main/dash-main.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard-main/dash-main.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DashMainComponent);
    return DashMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-main/dash-main.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-backdrop{\n    display: none !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-main/dash-main.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-fluid\">\n    <div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"vertical-align:middle\">\n  <a><span (click)=\"openNav()\"> <i class=\"glyphicon glyphicon-menu-hamburger\"></i> </span></a>\n    </div>\n  <div class=\"input-group col-md-10 col-sm-10 col-xs-10\">\n          <input name=\"searchtext\" value=\"\" placeholder=\"Search customer...\" class=\"form-control\" type=\"text\">\n          <span class=\"input-group-btn\">\n             <button class=\"btn btn-default\" type=\"submit\" id=\"addressSearch\">\n                 <i class=\"glyphicon glyphicon-search\"></i>\n             </button>\n          </span>\n      </div>\n</div><br/><hr/>\n<div class=\"col-md-6 col-sm-6 col-xs-6\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Customer Details</div>\n        <div class=\"panel-body\"><grid></grid></div>\n      </div>\n\n</div>\n<div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"position:relative\">\n  <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Top 5 Billing Customers</div>\n          <div class=\"panel-body\">Panel Content</div>\n        </div>\n        <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">Top 5 foods</div>\n              <div class=\"panel-body\">Panel Content</div>\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashComponent = (function () {
    function DashComponent(router) {
        this.router = router;
    }
    DashComponent.prototype.refreshWin = function () {
        window.location.reload();
    };
    DashComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    DashComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    };
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n}\n\n/* The navigation menu links */\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n/* Position and style the close button (top right corner) */\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#main {\n    transition: margin-left .5s;\n    padding: 20px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mySidenav\" class=\"sidenav\">\n    <hr/>\n        <h3 style=\" padding: 8px 8px 8px 32px;\">Sam's admin</h3><a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n       <hr/>\n        <a [routerLink]='[\"../dashboard/dashmain\"]'>Home</a>\n       \n        <a [routerLink]='[\"../dashboard/addFood\"]'>Order Food</a>\n                \n              \n        <a href=\"#\">Reports</a>\n        <a [routerLink]='[\"/\"]'>Sign Out</a>\n        <!-- <a (click)=\"refreshWin()\">Refresh</a> -->\n      </div>\n      \n      <!-- Use any element to open the sidenav -->\n     \n      \n      <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->\n      <div id=\"main\">\n  \n                <router-outlet></router-outlet> \n      </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = (function () {
    function GridComponent(changeDetectorRef) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.cols = ['Customer ID', 'first name', 'last name', 'house address', 'flat address'];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    GridComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "https://spoonkart-service.herokuapp.com/get/customers");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    GridComponent.prototype.exportAsCSV = function () {
        var columns = this.dataTable.columns;
        var headers = columns
            .map(function (column) { return column.name; })
            .filter(function (e) { return e; }); // remove column without name (i.e. falsy value)
        var rows = this.dataTable.rows.map(function (row) {
            var r = {};
            columns.forEach(function (column) {
                if (!column.name) {
                    return;
                } // ignore column without name
                if (column.prop) {
                    var prop = column.prop;
                    r[prop] = (typeof row[prop] === 'boolean') ? (row[prop]) ? 'Yes'
                        : 'No'
                        : row[prop];
                }
                else {
                    // special cases handled here
                }
            });
            return r;
        });
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            headers: headers,
            showTitle: false,
            title: 'Report',
            useBom: true,
        };
        return new __WEBPACK_IMPORTED_MODULE_1_angular2_csv_Angular2_csv__["Angular2Csv"](rows, 'report', options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], GridComponent.prototype, "dataTable", void 0);
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grid',
            template: "\n    <div>\n      <div class=\"text-right\">\n        <button type=\"button\" class=\"btn1 btn sv_btn\" (click)=\"exportAsCSV()\" >\n              <label>\n                 Export to CSV\n              </label>\n          </button>\n      </div>\n      <ngx-datatable\n      #dataTable  \n      class=\"material\"\n        [rows]=\"rows\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\"\n        [reorderable]=\"reorderable\"\n        [limit]=\"10\">\n       <ng-container *ngFor=\"let col of cols;let j=index\">\n                    <ng-container *ngIf=\"col!==undefined\">\n                     \n                  <ngx-datatable-column prop={{col}} [sortable]=\"true\" [name]=\"col\"  [resizeable]=\"true\" [canAutoResize]=\"true\">        \n                  </ngx-datatable-column>\n                    </ng-container>\n               </ng-container>  \n      </ngx-datatable>\n     \n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(login, router) {
        this.login = login;
        this.router = router;
        this.show_login_error = false;
        this.info = {};
    }
    LoginComponent.prototype.redirectNext = function (str) {
        if (str == 'login') {
            this.router.navigate(['/dashboard/dashmain']);
        }
    };
    LoginComponent.prototype.authLogin = function (u, p) {
        // let loginInfo = {
        // "username":u,
        // "password":p    
        // }
        // this.login.checkLogin(loginInfo).subscribe((res)=>{this.info = JSON.parse(JSON.stringify(res));this.t = this.info["data"]});
        // if(this.t === "valid"){
        //     console.log("innnnn info");
        // this.show_login_error = false;
        if (u == "samskitchen" && p == "samskitchen_17")
            this.router.navigate(['/dashboard/dashmain']);
        else
            //alert("please enter valid credentials");
            // }
            // else if(this.t === "invalid"){
            this.show_login_error = true;
        // }
    };
    LoginComponent.prototype.ngOnInit = function () {
        //     $(document).ready(function(){
        //     $('.error-page').hide(0);
        //     $('.login-button , .no-access').click(function(){
        //       $('.login').slideUp(500);
        //       $('.error-page').slideDown(1000);
        //     });
        //     $('.try-again').click(function(){
        //       $('.error-page').hide(0);
        //       $('.login').slideDown(1000);
        //     });
        // });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background:url('http://cdn.wallpapersafari.com/13/6/Mpsg2b.jpg');\n  margin:0px;\n  font-family: 'Ubuntu', sans-serif;\n\tbackground-size: 100% 110%;\n}\nh1, h2, h3, h4, h5, h6, a {\n  margin:0; padding:0;\n}\n.login {\n  margin:0 auto;\n  max-width:500px;\n}\n.login-header {\n  color:#fff;\n  text-align:center;\n  font-size:300%;\n}\n/* .login-header h1 {\n   text-shadow: 0px 5px 15px #000; */\n\n.login-form {\n  border:.5px solid #fff;\n  background:#4facff;\n  border-radius:10px;\n  box-shadow:0px 0px 10px #000;\n}\n.login-form h3 {\n  text-align:left;\n  margin-left:40px;\n  color:#fff;\n}\n.login-form {\n  box-sizing:border-box;\n  padding-top:15px;\n\tpadding-bottom:10%;\n  margin:5% auto;\n  text-align:center;\n}\n.login input[type=\"text\"],\n.login input[type=\"password\"] {\n  max-width:400px;\n\twidth: 80%;\n  line-height:3em;\n  font-family: 'Ubuntu', sans-serif;\n  margin:1em 2em;\n  border-radius:5px;\n  border:2px solid #f2f2f2;\n  outline:none;\n  padding-left:10px;\n}\n.login-form input[type=\"button\"] {\n  height:30px;\n  width:100px;\n  background:#fff;\n  border:1px solid #f2f2f2;\n  border-radius:20px;\n  color: slategrey;\n  text-transform:uppercase;\n  font-family: 'Ubuntu', sans-serif;\n  cursor:pointer;\n}\n.sign-up{\n  color:#f2f2f2;\n  margin-left:-70%;\n  cursor:pointer;\n  text-decoration:underline;\n}\n.no-access {\n  color:#E86850;\n  margin:20px 0px 20px -57%;\n  text-decoration:underline;\n  cursor:pointer;\n}\n.try-again {\n  color:#f2f2f2;\n  text-decoration:underline;\n  cursor:pointer;\n}\n\n/*Media Querie*/\n@media only screen and (min-width : 150px) and (max-width : 530px){\n  .login-form h3 {\n    text-align:center;\n    margin:0;\n  }\n  .sign-up, .no-access {\n    margin:10px 0;\n  }\n  .login-button {\n    margin-bottom:10px;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Ubuntu:500' rel='stylesheet' type='text/css'>\n<div class=\"login\">\n  <div class=\"login-header\">\n    <h1>Login</h1>\n  </div>\n  <div class=\"login-form\">\n    <h3>Username:</h3>\n    <input type=\"text\" placeholder=\"Username\" #uname/><br>\n    <h3>Password:</h3>\n    <input type=\"password\" placeholder=\"Password\" #upass/>\n    <br>\n    <input (click)=\"authLogin(uname.value,upass.value)\" type=\"button\" value=\"Login\" class=\"login-button\"/>\n    <br>\n   <div *ngIf=\"show_login_error == true\">\n      Please enter valid username and password\n      <br/>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Headers__ = __webpack_require__("../../../../../src/app/Headers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.checkLogin = function (data) {
        console.log("inputdata", data);
        return this.http.post("https://spoonkart-service.herokuapp.com/authenticate/login", data, __WEBPACK_IMPORTED_MODULE_3__Headers__["a" /* options */]).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map