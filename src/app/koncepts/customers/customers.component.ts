import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  formValue!:FormGroup;
  submitted :boolean = false;
  constructor(private formbuilder: FormBuilder,private api:ApiService,) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      customerName: ['', Validators.required],
      customerAge: ['', [Validators.required,Validators.maxLength(3)]],
      customerAddress: ['', Validators.required]
    })
  }

  saveCustomerForm(){
    this.submitted = true
    if (this.formValue.invalid) {
      return;
  }
    this.api.postCustomerData(this.formValue.value).subscribe(res => {
      console.log(res);
      this.submitted = false;
      alert("Customer Added Successfully");
      this.formValue.reset();

      

      

    }, err=>{
      this.submitted = false;
      console.log(err);
      alert("Customer Added Failed!");
    })
  }
}
