import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Tokens } from 'src/app/Models/tokens';

@Component({
  selector: 'app-buyerviewprofile',
  templateUrl: './buyerviewprofile.component.html',
  styleUrls: ['./buyerviewprofile.component.css']
})
export class BuyerviewprofileComponent implements OnInit {
form:FormGroup
submitted=false;
buyer:Buyer;
  token: Tokens;
  id:number;
  constructor(private builder:FormBuilder,private service:BuyerService) { 

    this.id=JSON.parse(localStorage.getItem('buyerid')) ;
  }

  ngOnInit() {
    this.form=this.builder.group({
      
      id:['',[Validators.required]],
      username:['',Validators.required],
      password:['',Validators.required],
      emailid:['',Validators.required],
      mobile:['',Validators.required],
      createddatetime:['',Validators.required]
  })
this.GetProfile();
}
GetProfile()
  {
   
  this.service.Getprofile(this.id).subscribe(res=>  
   {
     
     this.buyer=res;
     console.log(this.buyer);
     this.form.patchValue({
       id:this.buyer.id,
       username:this.buyer.username,
       emailid:this.buyer.emailid,
       password:this.buyer.password,
       createddatetime:this.buyer. createddatetime,
       mobile:this.buyer.mobile,
     })
    })

    }
    Edit()
    {
      this.buyer=new Buyer();
      this.buyer.id=this.form.value["id"],
      this.buyer.username=this.form.value["username"],
      this.buyer.emailid=this.form.value["emailid"],
      this.buyer.password=this.form.value["password"],
      this.buyer.mobile=this.form.value["mobile"],
      this.buyer.createddatetime=this.form.value["createddatetime"],
      this.service.EditProfile(this.buyer).subscribe(res=>{console.log(this.buyer),alert("updated succesfully"),this.GetProfile()},err=>{
        console.log(err)
      })
    }
  
  

  }


