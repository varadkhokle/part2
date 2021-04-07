import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { UseraddComponent } from './useradd/useradd.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UsersService } from './users.service';
import { ShowuserComponent } from './showuser/showuser.component';
import { CovidmeterComponent } from './covidmeter/covidmeter.component';


@NgModule({
  imports:[ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, UseraddComponent,routingComponents,ShowuserComponent, CovidmeterComponent],
  providers: [UsersService],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
}
