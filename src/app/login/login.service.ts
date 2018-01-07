import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { options } from "../Headers";

@Injectable()
export class LoginService{

    constructor(private http:Http){

    }
    checkLogin(data){

        console.log("inputdata", data);
        return this.http.post("https://spoonkart-service.herokuapp.com/authenticate/login", data, options) .map(res => res.json());
        

    }

   

}