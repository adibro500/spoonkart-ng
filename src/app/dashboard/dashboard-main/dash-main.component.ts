import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var jquery:any;
declare var $ :any;

@Component({
    selector:'dash-main',
    templateUrl:'./dash-main.html',
    styleUrls:['./dash-main.css']
})
export class DashMainComponent implements OnInit{

confirmed:boolean;

constructor(private spinnerService: Ng4LoadingSpinnerService,private router:Router){



}

openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */

    


    ngOnInit(): void {

        $(document).ready(function(){
        $('#mi-modal').on('show.bs.modal', function(e){
            $('#mi-modal').remove('.modal-backdrop');
        }) 
    })

        var modalConfirm = function(callback){
            
            $("#btn-confirm").on("click", function(){
              $("#mi-modal").modal('show');
            });
          
            $("#modal-btn-si").on("click", function(){
              callback(true);
              $("#mi-modal").modal('hide');
            });
            
            $("#modal-btn-no").on("click", function(){
              callback(false);
              $("#mi-modal").modal('hide');
            });
          };
          
          modalConfirm(function(confirm){
            if(confirm){
              //Acciones si el usuario confirma
            this.confirmed = true;
            }else{
              //Acciones si el usuario no confirma
              this.confirmed = false;
            }
          });



    }



}
