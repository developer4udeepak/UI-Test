import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted :boolean = false;

  constructor(private api:ApiService,private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      name: ['',[Validators.required,Validators.minLength(5)]],
      password: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$")]]
    });
  }

  logIn() {
   // this._router.navigate(['/tiles']);//  ********************
     this.submitted = true
     console.log(CryptoJS.AES.encrypt( this.loginForm.value.password, "password").toString())
     sessionStorage.setItem("name", this.loginForm.value.name);
   this.loginForm.value.password = CryptoJS.AES.encrypt( this.loginForm.value.password, "password").toString()
     this.api.getUser(this.loginForm.value).subscribe(res => {
       console.log(res);
       this.submitted = false;
       alert("User logged Successfully");
       this.loginForm.reset();

      

      

     }, err=>{
       this.submitted = false;
       this._router.navigate(['/tiles']);//  ********************
       console.log(err);
       alert("User Invalid!");
     })
  }
    
      }
    
  


