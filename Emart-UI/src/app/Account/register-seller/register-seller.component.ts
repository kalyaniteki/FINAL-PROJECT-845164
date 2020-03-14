import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  regform:FormGroup;
  submitted=false;
  list:Seller[];
  seller:Seller;
  

  constructor(private builder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.regform=this.builder.group({
    
      username:['',[Validators.required,Validators.pattern("^[A-Za-z]{4,16}$")]],
    companyname:['',Validators.required],
     gst:['',Validators.required],
    briefaboutcompany:['',Validators.required],
    postaladdress:['',Validators.required],
    website:['',Validators.required],
    password:['',[Validators.required,Validators.pattern("^[0-9a-zA-Z]{7}[!@#$%&*^]{1}$")]],
    emailid:['',[Validators.email,Validators.required]],
    mobile:['',[Validators.pattern("^[6-9][0-9]{9}$"),Validators.required]]
    }) 
  }
  get f()
  {
    return this.regform.controls;
  }
 
  onSubmit(){

    this.submitted=true;
    if(this.regform.invalid)
    {
      return;
    }
    else{
      this.seller=new Seller();
      this.seller.id=Math.floor(Math.random()*100);
      this.seller.username=this.regform.value["username"];
      this.seller.password=this.regform.value["password"];
      this.seller.companyname=this.regform.value["companyname"];
      this.seller.gst=this.regform.value["gst"];
      this.seller.briefaboutcompany=this.regform.value["briefaboutcompany"];
      this.seller.postaladdress=this.regform.value["postaladdress"];
      this.seller.website=this.regform.value["website"];
      this.seller.emailid=this.regform.value["emailid"];
      this.seller.mobile=this.regform.value["mobile"];
    
      this.service.SellerRegister(this.seller).subscribe(res=>{this.Reset()},err=>{console.log(err)});
      }
    
   
}
Reset() {
  alert("succesfully registered");
    this.submitted = false;
    this.regform.reset();
}
Add()
{
  if(this.regform.valid){

  this.seller=new Seller();
  this.seller.id=Math.floor(Math.random()*100);
  this.seller.username=this.regform.value["username"];
  this.seller.password=this.regform.value["password"];
  this.seller.companyname=this.regform.value["companyname"];
  this.seller.gst=this.regform.value["gst"];
  this.seller.briefaboutcompany=this.regform.value["briefaboutcompany"];
  this.seller.postaladdress=this.regform.value["postaladdress"];
  this.seller.website=this.regform.value["website"];
  this.seller.emailid=this.regform.value["emailid"];
  this.seller.mobile=this.regform.value["mobile"];

  this.service.SellerRegister(this.seller).subscribe(res=>{this.Reset()},err=>{console.log(err)});
  }
}

}
