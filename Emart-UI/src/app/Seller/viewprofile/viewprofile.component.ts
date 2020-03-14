import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../seller.service';
import { Seller } from 'src/app/Models/seller';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit
 {
seller:Seller;
form:FormGroup;
id:number;
item:Items;
  constructor(private builder:FormBuilder,private service:SellerService) {
    this.id=JSON.parse(localStorage.getItem('sellerid')) ;

   }
   ngOnInit() {
    this.form=this.builder.group({
      
        id:[''],
        username:[''],
        password:[''],
        companyname:['',],
        gst:[''],
        briefaboutcompany:[''],
        postaladdress:[''],
        website:['',[Validators.required]],
        emailid:[''],
        mobile:['']
        }) 
        this.myprofile()
      }
     
  
 myprofile()
  {
  this.service.ViewProfile(this.id).subscribe(res=>  
   {
     
     this.seller=res;
     console.log(this.seller);
     this.form.patchValue({
       id:this.seller.id,
       username:this.seller.username,
       emailid:this.seller.emailid,
       password:this.seller.password,
       briefaboutcompany:this.seller.briefaboutcompany,
       companyname:this.seller.companyname,
       postaladdress:this.seller.postaladdress,
       website:this.seller.website,
       gst:this.seller.gst,
       mobile:this.seller.mobile,
       
     })
    })
  }

  Edit()
  {
    this.seller=new Seller();
    this.seller.id=this.form.value["id"],
    this.seller.username=this.form.value["username"],
    this.seller.emailid=this.form.value["emailid"],
    this.seller.password=this.form.value["password"],
    this.seller.briefaboutcompany=this.form.value["briefaboutcompany"],
    this.seller.companyname=this.form.value["companyname"],
    this.seller.postaladdress=this.form.value["postaladdress"],
    this.seller.website=this.form.value["website"],
    this.seller.mobile=this.form.value["mobile"],
    this.seller.gst=this.form.value["gst"],
    this.service.EditProfile(this.seller).subscribe(res=>{console.log(this.seller),alert("updated succesfully"),this.myprofile()},err=>{
      console.log(err)
    })
  }


  }
