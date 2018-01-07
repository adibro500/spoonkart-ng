import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from './login.service';

@Component({
    selector:'login',
    templateUrl:'./login.html',
    styleUrls:['./login.css']
})
export class LoginComponent implements OnInit{

constructor(private login:LoginService,private router:Router){
    
}


    redirectNext(str){
        if(str=='login'){
this.router.navigate(['/dashboard/dashmain']);
}
}
show_login_error:boolean = false;
info =  {};
t;
authLogin(u,p){
// let loginInfo = {
// "username":u,
// "password":p    
// }

// this.login.checkLogin(loginInfo).subscribe((res)=>{this.info = JSON.parse(JSON.stringify(res));this.t = this.info["data"]});
// if(this.t === "valid"){
//     console.log("innnnn info");
// this.show_login_error = false;
if(u=="samskitchen" && p=="samskitchen_17")
this.router.navigate(['/dashboard/dashmain']);
else 
//alert("please enter valid credentials");
// }
// else if(this.t === "invalid"){
this.show_login_error = true;
// }
}

    ngOnInit(): void {

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
    }



}
