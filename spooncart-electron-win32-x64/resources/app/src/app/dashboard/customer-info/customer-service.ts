import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { options } from "../../Headers";
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService{

    constructor(private http:Http){

    }
    saveCustomerInput(data){
        console.log("inputdata", data);
        
        return this.http.post("https://spoonkart-service.herokuapp.com/save/customer", data, options) .map(res => res.json()).subscribe(data => console.log(data));
        

    }

   

}