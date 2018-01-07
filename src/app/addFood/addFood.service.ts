import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { options } from "../Headers";

@Injectable()
export class FoodService{

    constructor(private http:Http){

    }
    getFood() {
        
return this.http.get("https://spoonkart-service.herokuapp.com/get/food", options).map(res => res.json());
        
        
            }
            getCustomer() {
                
        return this.http.get("https://spoonkart-service.herokuapp.com/get/customer", options).map(res => res.json());
                
                
                    }
                    getCustomerByDoc(addr) {
                        console.log("addr",addr);
                return this.http.get("https://spoonkart-service.herokuapp.com/get/customer/"+addr, options).map(res => res.json());
                        
                        
                            }

}