import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-main-tiles',
  templateUrl: './main-tiles.component.html',
  styleUrls: ['./main-tiles.component.css']
})
export class MainTilesComponent implements OnInit {

  formValue!:FormGroup
  allGridData = ['Heirarchy','Customers','Orders','Schedules','Messages','Email'];

  constructor(private formbuilder: FormBuilder, private api:ApiService,private _router:Router,public route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
   
  }
  
  backClicked(){
   // this._location.back();
   this._router.navigate(['/tiles']);
  }
 
  



  navigateToChild(rout:any){
let routPath = rout.toLowerCase()
    this._router.navigate([routPath],{relativeTo:this.route});
  }
  
    
  }

  


