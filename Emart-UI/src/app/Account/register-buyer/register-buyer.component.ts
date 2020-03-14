import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Buyer } from 'src/app/Models/buyer';



@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  regform:FormGroup;
  submitted=false;
  list:Buyer[];
  buyer:Buyer;
  

  constructor(private builder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.regform=this.builder.group({
    
      username:['',[Validators.required,Validators.pattern("^[A-Za-z]{4,16}$")]],
      password:['',[Validators.required,Validators.pattern("^[0-9a-zA-Z]{7}[!@#$%&*^]{1}$")]],
      emailid:['',Validators.email],
      mobile:['',Validators.pattern("^[6-9][0-9]{9}$")],
     createddatetime:['',Validators.required],

    }) 
  }
  get f()
  {
    return this.regform.controls;
  }
 
  onSubmit(){

    this.submitted =true;
    if(this.regform.valid){
      this.Add()
    }
   
}
Reset() {
  alert("succesfully registered");
    this.submitted = false;
    this.regform.reset();
}
Add()
{
  this.buyer=new Buyer();
  this.buyer.id=Math.floor(Math.random()*100);
  this.buyer.username=this.regform.value["username"];
  this.buyer.password=this.regform.value["password"];
  this.buyer.emailid=this.regform.value["emailid"];
  this.buyer.mobile=this.regform.value["mobile"];
  this.buyer.createddatetime=this.regform.value["createddatetime"];
  this.service.BuyerRegister(this.buyer).subscribe(res=>{this.Reset()},err=>{console.log(err)});

}


}
