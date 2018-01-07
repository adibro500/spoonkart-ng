
import {Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from './addFood.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning/positioning.service';
import { Keys } from '@swimlane/ngx-datatable/release/utils';
import { CustInfoComponent } from '../dashboard/customer-info/customer.component';
import { CustomerService } from '../dashboard/customer-info/customer-service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/Rx';
import { DataService } from '../dashboard/customer-info/data-service.sdervice';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import * as _ from 'underscore';
import { Select2OptionData } from 'ng2-select2';
import { CURRENT_OPTIONS_CONFIG, REMOVE_OPTIONS_CONFIG, ADD_OPTIONS_CONFIG } from './dynamicOptions.config';
import {differenceWith, intersectionWith} from 'lodash'
import { ExampleValues_Frameworks } from './selectize.config';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var jquery:any;
declare var $ :any;


@Component({
    selector:'add-food',
    templateUrl:'./addFood.html',
    styleUrls:['../dashboard/customer-info/customer.css'],
    providers:[BsModalService,ComponentLoaderFactory,PositioningService]
})
export class AddFoodComponent implements OnInit,AfterViewInit{
    
    modalRef: BsModalRef;
    modalRef2: BsModalRef;
    modalRef3: BsModalRef;
    modalRef4: BsModalRef;
    modalRef5: BsModalRef;
    optionSelected:string;
    optionSelected2:string;
    
    config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false
    };

data:any[] = [];
shownData:any;
billingItem:any;
billingItems:any[] = [];
finalAmt:number = 0;
billedAmt:number = 0;
calcAmtHelper:any[] = [];
qty:number = 0;
showQty:boolean;
radVal:any;
res;
loaded:boolean = false;
private keyUp = new Subject<string>();


getBillingItems() {
    return Object.entries(this.billingItems).filter(arr => arr[1]).map(arr => arr[0]);
}
totalAmt:number = 0;
openModal(template: TemplateRef<any>,item) {
    this.billedAmt = 0;
    this.qty = 0;
    this.shownData = item;
    this.radioData = 0;
    this.modalRef = this.modalService.show(template, this.config);
  }
 
  openModal2(template2: TemplateRef<any>,item) {
    this.modalRef2 = this.modalService.show(template2, this.config);
  }

  openModal3(template3: TemplateRef<any>,item) {
    this.modalRef3 = this.modalService.show(template3, this.config);
  }
  openModal4(template4: TemplateRef<any>,item) {
    this.modalRef4 = this.modalService.show(template4, this.config);
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }

inc(){
    if(this.radioData!==undefined){
    this.qty++;
    this.billedAmt += this.radioData; 
   
    }   
   
    
}
selectedOption:string = '';

ngAfterViewInit(){
    // $('.js-example-basic-single').select2();
    // $('.js-example-basic-single').on(
    //     'change',
    //     (e) => this.selectedOption = $(e.target).val()
    // );
}
radioData:any;
public exampleData:string[] = [];


dec(){
    if(this.radioData!==undefined){
    if(this.qty>=1)
    this.qty--;
    if(this.billedAmt >=this.radioData )
    this.billedAmt = this.billedAmt - this.radioData;
    }
}

openModalWithComponent() {

    this.modalRef4 = this.modalService.show(CustInfoComponent);

}

pushToArray(a,c,b){
this.billingItem = {
    "Item":a,
    "Qty":this.qty,
    "Unit_Cost":c,
    "Cost":b
};
if(b !== 0)
    this.billingItems.push(this.billingItem);
    
    if(this.billingItems.length !== 0){
       
        this.totalAmt += parseInt(b);
        }else{
            this.totalAmt = 0;
        } 
    
    
}


  updateVals(a,b){
     
      this.billingItem={a:b};
    this.billedAmt = this.billingItem[a];
     
  }

constructor(private cserv:CustomerService,private dServ:DataService,private spinnerService: Ng4LoadingSpinnerService,private modalService: BsModalService,private fserv:FoodService,private router:Router){
    console.log('now: ', _.now());
    this.spinnerService.show();
    this.fserv.getFood().subscribe(data => {
        this.data = JSON.parse(JSON.stringify(data[0].food_menu));
        this.spinnerService.hide();
        
    });
    

    if(this.radioData!== undefined && this.qty==1){
    this.billedAmt = this.radioData*1;
    }
const observable = this.keyUp
    .map(value => (<HTMLInputElement>event.target).value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .flatMap((search) => {
        this.spinnerService.show();
      return Observable.of(search).delay(500);
    })
    .subscribe((data) => {
      this.dServ.getData(data).subscribe((data)=>{
          if(data!==null){
              this.loaded = true;
        this.res=data; 
        this.fname = this.res['first name'];
        this.lname = this.res['last name'];
        this.mob1 = this.res['mobile number 1'];
        this.mob2 = this.res['mobile number 2'];
        this.mob3 = this.res['mobile number 3']; 
        this.mail = this.res['email address'];        
        this.hnum = this.res['detailed house address']['house number'];
        this.snum = this.res['detailed house address']['street number'];
        this.loc = this.res['detailed house address']['location'];        
        this.city = this.res['detailed house address']['city'];
        this.building = this.res['detailed flat address']['flat number'];
        this.fnum = this.res['detailed flat address']['building'];                
        this.snum2 = this.res['detailed flat address']['street number'];
        this.loc2 = this.res['detailed flat address']['location'];
        this.city2 = this.res['detailed flat address']['city'];
        console.log(this.res); 
        this.spinnerService.hide();
          }

          else{
            
                this.loaded = false;
            this.spinnerService.hide();
          }
    })

    })


}



openNav() {
   if( document.getElementById("mySidenav").style.width !== "250px"){ 
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
   }else{
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
   }

  }
  confirmed:boolean;
  addr_type:boolean;
  fname:string;
  lname:string;
  mob1:string;
  mob2:string;
  mob3:string;
  mail:string;
  hnum:string;
  snum:string;
  loc:string;
  city:string;
  fnum:string;
  building:string;
  snum2:string;
  loc2:string;
  city2:string;
d3:any;

  onSelect(){
    //alert(`id: ${id}, text: ${text}`);
  this.optionSelected2 = this.optionSelected;
    console.log(this.optionSelected)
  }

  onSearch(){
      console.log("option sel");
    this.fserv.getCustomerByDoc(this.optionSelected).subscribe(res =>{
        if(res !== null){
            this.loaded = true;
        this.d3 =res;
        console.log(this.d3);
        this.fname = this.d3['first name'];
        this.lname = this.d3['last name'];
        this.mob1 = this.d3['mobile number 1'];
        this.mob2 = this.d3['mobile number 2'];
        this.mob3 = this.d3['mobile number 3']; 
        this.mail = this.d3['email address'];        
        this.hnum = this.d3['detailed house address']['house number'];
        this.snum = this.d3['detailed house address']['street number'];
        this.loc = this.d3['detailed house address']['location'];
        this.city = this.d3['detailed house address']['city'];        
        this.fnum = this.d3['detailed flat address']['flat number'];
        this.building = this.d3['detailed flat address']['building'];
        this.snum2 = this.d3['detailed flat address']['street number'];
        this.loc2 = this.d3['detailed flat address']['location'];
        this.city2 = this.d3['detailed flat address']['city'];
        console.log(this.d3); 
        }else{
            this.loaded = false;
        }
    });

  }

data2 :any = {};
    ngOnInit(): void {
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
        this.fserv.getCustomer().subscribe(data2 => {
this.data2 = JSON.parse(JSON.stringify(data2));

this.setData(this.data2);
        });
      
          
    }
    data3:any[] = [];
    setData(d){
        for(var i = 0;i<this.data2.length;i++){
            if(d[i]["house address"] !== undefined && d[i]["house address"] !== ",,,"){
        this.exampleData.push(d[i]["house address"]);
            }
        else if(d[i]["flat address"] !== ",,," && d[i]["flat address"] !== undefined)
        this.exampleData.push(d[i]["flat address"]);

        }
        console.log(this.exampleData);
    }


    currentOptions: any;
    currentOptionsConfig = CURRENT_OPTIONS_CONFIG;
    value: string[] = [];
    
    saveCustomer(){
        let today = new Date();
        let Customer = {};
        let h_addr = [];
        let f_addr = [];
        let h_addr2 = {};
        let f_addr2 = {};
        let order = {};
        

        if(this.res === undefined || this.d3 === undefined){
    Customer["Customer ID"] = today.getHours()+today.getMinutes()+today.getSeconds()+today.getMilliseconds();

    Customer["first name"] = this.fname;
    Customer["last name"] = this.lname;
    Customer["mobile number 1"] = this.mob1;
    if(this.mob2 !== undefined)
    Customer["mobile number 2"] = this.mob2;
    if(this.mob3 !== undefined)
        Customer["mobile number 3"]=this.mob3;
        if(this.mail !== undefined)
        Customer["email address"]=this.mail;


        
            if(this.hnum !== undefined)
        h_addr.push(this.hnum);
        if(this.snum !== undefined)
        h_addr.push(this.snum);
        if(this.loc !== undefined)
        h_addr.push(this.loc);
        if(this.city !== undefined)
        h_addr.push(this.city);
        if(h_addr !== undefined)
        Customer["house address"] = h_addr.join();
        if(this.hnum !== undefined)
        h_addr2["house number"] = this.hnum;
        if(this.snum !== undefined)
        h_addr2["street number"] = this.snum;
        if(this.loc !== undefined)
        h_addr2["location"] = this.loc;
        if(this.city !== undefined)
        h_addr2["city"] = this.city;
        if(h_addr2 !== undefined)
        Customer["detailed house address"] = h_addr2;

        if(this.fnum !== undefined)
        f_addr.push(this.fnum);
        if(this.building !== undefined)
        f_addr.push(this.building);
        if(this.snum2 !== undefined)
        f_addr.push(this.snum2);
        if(this.loc2 !== undefined)
        f_addr.push(this.loc2);
        if(this.city2 !== undefined)
        f_addr.push(this.city2);
        if(f_addr !== undefined)
            Customer["flat address"] = f_addr.join();

            if(this.fnum !== undefined)
            f_addr2["flat number"] = this.fnum;
            if(this.building !== undefined)
            f_addr2["building name"] = this.building;
            if(this.snum2 !== undefined)
            f_addr2["street number"] = this.building;
            if(this.loc2 !== undefined)
            f_addr2["location"] = this.loc2;
            if(this.city2 !== undefined)
            f_addr2["city"] = this.city2;
            if(f_addr2 !== undefined)
                Customer["detailed flat address"] = f_addr2;
            

           if(this.billingItems.length >= 1){
               let totalAmt = 0
               order["Customer ID"] = today.getHours()+today.getMinutes()+today.getSeconds()+today.getMilliseconds();
            order["Order Date"] = today.getDate() + "-"+today.getMonth()+1+"-"+today.getFullYear();
            order["Order Time"] = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds();
            order["Order"] = this.billingItems;
            for(var i=0;i<this.billingItems.length;i++){
                totalAmt += this.billingItems[i]["Cost"];
            }
            order["Total Amount"] = totalAmt;
            Customer["Order Info"] = order;
           }
          
           
console.log("saved");
    

        this.cserv.saveCustomerInput(Customer);

    }
    else{
        if(this.billingItems.length >= 1){
        order["Customer ID"] = this.res["Customer ID"];
        order["Order Date"] = today.getDate() + "-"+today.getMonth()+1+"-"+today.getFullYear();
        order["Order Time"] = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds();
        order["Order"] = this.billingItems;
        order["Total Amount"] = this.billedAmt;
        }

    }
   
    }
    removeOptions: any = this.currentOptions;
	removeOptionsConfig = REMOVE_OPTIONS_CONFIG;
	removeOptionsValue: string[];

	addOptions: any = [];
	addOptionsConfig = ADD_OPTIONS_CONFIG;
	addOptionsValue: string[];

    removeSelectedOption() {
		this.currentOptions = differenceWith(this.currentOptions, this.removeOptionsValue, (oldValue: any, selectedValue: any) => {
			return oldValue[this.currentOptionsConfig.valueField] === selectedValue;
		});
		this.refreshRemoveAndAddOptions();
	}

	addSelectedOptions() {
		if (this.addOptionsValue && this.addOptionsValue.length > 0) {
			const optionsToAdd = intersectionWith(this.addOptions, this.addOptionsValue, (option: any, value: any) => {
				return option[this.addOptionsConfig.valueField] === value;
			});
			if (optionsToAdd && optionsToAdd.length > 0) {
				optionsToAdd.forEach((option: any) => {
					this.currentOptions.push(option);
				});
			}
			this.refreshRemoveAndAddOptions();
		}
	}

	refreshRemoveAndAddOptions() {
		this.removeOptions = this.currentOptions;

		this.addOptions = differenceWith(ExampleValues_Frameworks, this.removeOptions, (allValue: any, removedValue: any) => {
			return allValue[this.currentOptionsConfig.valueField] === removedValue[this.removeOptionsConfig.valueField];
		});
	}
}
