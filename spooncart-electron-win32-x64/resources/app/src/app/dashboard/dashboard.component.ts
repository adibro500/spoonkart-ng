import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.html',
    styleUrls:['./dashboard.css']
})
export class DashComponent implements OnInit{

hideMenu:boolean;    
constructor(private router:Router){



}
 
refreshWin(){
    window.location.reload();
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
    ngOnInit(): void {

       

        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
     
    }



}
