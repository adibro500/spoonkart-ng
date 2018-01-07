import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Route } from '@angular/router/src/config';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dashboard/dashboard.component';
import { DashMainComponent } from './dashboard/dashboard-main/dash-main.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { CustInfoComponent } from './dashboard/customer-info/customer.component';
import { AddFoodComponent } from './addFood/addFood.component';
import { FormsModule } from "@angular/forms";
import { CustomerService } from './dashboard/customer-info/customer-service';
import { HttpModule } from '@angular/http';
import { FoodService } from './addFood/addFood.service';
import { ModalModule } from 'ngx-bootstrap';
import { DataService } from './dashboard/customer-info/data-service.sdervice';
import { LoadingModule } from 'ngx-loading';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginService } from './login/login.service';
import { Select2Module } from 'ng2-select2';
import {NgSelectizeModule} from 'ng-selectize';
import {Select2Component} from 'angular-select2-component';
const routes : Routes=[

{path:'',component:LoginComponent},
//DashComponent
{path:'dashboard',component:DashComponent,
children:[

  {path:'dashmain',component:DashMainComponent},
  {path:'grid',component:GridComponent},
  {path:'cust',component:CustInfoComponent},
  {path:'addFood',component:AddFoodComponent},
  
]

},
{path:'grid',component:GridComponent},
{path:'cust',component:CustInfoComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LoginComponent,
    DashComponent,
    DashMainComponent,
    CustInfoComponent,
    AddFoodComponent,
    Select2Component
    
  ],
  imports: [
    LoadingModule,
    NgSelectizeModule,
    NoopAnimationsModule,
    HttpModule,
    ModalModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerService,FoodService,DataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
