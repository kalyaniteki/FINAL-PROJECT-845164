import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Buyer } from 'src/app/Models/buyer'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { Tokens } from 'src/app/Models/tokens';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logform:FormGroup;
submitted=false;
list:Buyer[];
buyer:Buyer;
seller:Seller;
chb:number;
chs:number;
flag=0;
token:Tokens;

  constructor(private builder:FormBuilder,private route:Router,private service:UserService) {


   }

  ngOnInit() {
    this.logform=this.builder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    
    })
  }
  get f()
  {
    return this.logform.controls;
  }
    onsubmit()
    {
      this.submitted=true;
      if(this.logform.valid){
        this.Login()
      }
     
      
    }
  
    Login()
    {
     
       this.token=new Tokens(); 
       console.log(this.logform.value['username']);
       this.buyer=new Buyer();
      this.buyer.username=this.logform.value['username'];
      this.buyer.password=this.logform.value['password'];
     console.log(this.buyer);
     let buser=this.buyer.username;
     let bpass=this.buyer.password;
     if(this.buyer.username=="chubs"&&this.buyer.password=="chubs123")
     {
       this.flag=1
       localStorage.setItem('Admin',this.buyer.username);
      this.route.navigateByUrl('Admin')
     }
    if(this.flag!=1)
     {
      this.service.BuyerLogin(buser,bpass).subscribe(res=>
      {
          this.token=res,console.log(this.token);

        
     if(this.token.message=="success")
     {
       this.flag==1;
       alert("welcome")
       console.log(this.token)
       localStorage.setItem('buyerid',JSON.stringify(this.token.buyerid))
       localStorage.setItem('token',JSON.stringify(this.token.token))
       localStorage.setItem('sellerid',JSON.stringify(this.token.sellerid))
       this.route.navigateByUrl('BuyerHome')
     }
     
   
      });
    }
   if(this.flag!=1)
     {
      this.service.SellerLogin(buser,bpass).subscribe(res=>{this.token=res
        ,console.log(this.token);


     if(this.token.message=="success")
     {
       alert("welcome")
       this.flag==1;
       console.log(this.token)
       localStorage.setItem('buyerid',JSON.stringify(this.token.buyerid))
       localStorage.setItem('token',JSON.stringify(this.token.token))
       localStorage.setItem('sellerid',JSON.stringify(this.token.sellerid))
       this.route.navigateByUrl('SellerHome')
     }
    
      });
    }
 
   }

}

