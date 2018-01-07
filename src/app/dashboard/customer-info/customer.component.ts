
import {Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer-service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/Rx';
import { DataService } from './data-service.sdervice';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var jquery:any;
declare var $ :any;

@Component({
    selector:'customer-info',
    templateUrl:'./customer-info.html',
    styleUrls:['./customer.css']
})
export class CustInfoComponent implements OnInit{
public loading = false;
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
res;
valid_mob:boolean;

private keyUp = new Subject<string>();
modalRef5: BsModalRef;

config = {
  animated: true,
  keyboard: true,
  backdrop: true,
  ignoreBackdropClick: false
};

openModal(template: TemplateRef<any>,item) {
    this.modalRef5 = this.modalService.show(template, this.config);
    if(this.mob1 !== undefined || this.mob2 !== undefined || this.mob3 !== undefined){
        this.valid_mob = true;
        this.confirm_order = false;
    }
    else{
        this.valid_mob = false;
        
    this.confirm_order = true;
    }
  }

constructor(private modalService: BsModalService,private spinnerService: Ng4LoadingSpinnerService,private dServ:DataService,public bsModalRef: BsModalRef,private router:Router,private cserv:CustomerService){ 
    
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
        this.res=data; 
        this.fname = this.res['first name'];
        this.lname = this.res['last name'];
        this.mob1 = this.res['mobile number 1'];
        this.mob2 = this.res['mobile number 2'];
        this.mob3 = this.res['mobile number 3']; 
        this.mail = this.res['email address'];        
        this.hnum = this.res['house address']['house number'];
        this.snum = this.res['house address']['street number'];
        this.loc = this.res['house address']['location'];
        this.city = this.res['house address']['city'];        
        this.fnum = this.res['flat address']['flat number'];
        this.building = this.res['flat address']['building name'];
        this.snum2 = this.res['flat address']['street'];
        this.loc2 = this.res['flat address']['location'];
        this.city2 = this.res['flat address']['city'];
        console.log(this.res); 
        this.spinnerService.hide();
          }

          else{
            this.fname = '';
            this.lname = '';
            this.mob1 = '';
            this.mob2 = '';
            this.mob3 = ''; 
            this.mail = '';        
            this.hnum = '';
            this.snum = '';
            this.loc = '';
            this.city = '';        
            this.fnum = '';
            this.building = '';
            this.snum2 = '';
            this.loc2 = '';
            this.city2 = '';
            this.spinnerService.hide();
          }
    })
    
    })

}

openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

    
  keyUP2(){
   
  }

    ngOnInit(): void {




    }
    confirm_order:boolean;
    saveCustomer(){

        
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        
        let n = mm + '/' + dd + '/' + yyyy;


        let Customer ={
            "Order Date":n,
            "Order Time":today.getHours()+today.getMinutes()+today.getSeconds()+today.getMilliseconds(),
            "first name": this.fname.trim(),
        "last name":this.lname.trim(),
        "mobile number 1":this.mob1.trim(),
        "mobile number 2":this.mob2.trim(),
        "mobile number 3":this.mob3.trim(),
        "email address":this.mail.trim(),
        "house address":{
        "house number":this.hnum.trim(),
        "street number":this.snum.trim(),
        "location":this.loc.trim(),
        "city":this.city.trim()
        },
        "flat address":{
        "flat number":this.fnum.trim(),
        "building name":this.building.trim(),
        "street":this.snum2.trim(),
        "location":this.loc2.trim(),
        "city":this.city2.trim()
        }
        }

        this.cserv.saveCustomerInput(Customer);

    }

}
