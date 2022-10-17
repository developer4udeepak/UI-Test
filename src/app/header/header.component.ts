import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userName :any = '';
  constructor(private _router:Router) { }

  ngOnInit(): void {
   this.userName =  sessionStorage.getItem("name");
    
  }

  logOut(){
    sessionStorage.clear()
    this._router.navigate(['/login']);
  }

}
