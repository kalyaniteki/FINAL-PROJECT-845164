import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Purchase } from 'src/app/Models/purchase';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
pform:FormGroup
val:string;
payment:boolean=false
list:Items[]=[];
item:Items
obj:Items
status="paid";
purchase:Purchase
sid:number
bid:number
ptotal:number;
  today= new Date();
  submitted=false;

  no:number;
  
  constructor(private service:BuyerService,private build:FormBuilder,private route:Router) { 
    this.item=JSON.parse(localStorage.getItem("itemlist"))
    this.list.push(this.item)
 
    this.bid=JSON.parse(localStorage.getItem('buyerid'))
    this.no=1;
   
  }

  ngOnInit() {
    this.pform=this.build.group({
      card:['',Validators.required],
      itemname:[''],
      price:[''],
      pid:[''],
     
      num:['',Validators.required],
      remarks:['',Validators.required],
     ptotal:['']
     
    })
     this.Buy();
  }
  get f()
  {
    return this.pform.controls;
  }
  Pay()
  {
    this.val=this.pform.value['card'];
    if(this.val=="Card")
    {
      this.payment=true;
    }
    else{
      this.payment=false;
    }
   
  }
Onsubmit()
{
  this.submitted=true;
  if(this.pform.valid)
  {
    return this.BuyItem()
  }

}

Buy()
{
  this.pform.patchValue({

    itemname:this.item.itemname,
    price:this.item.price,  
  
})
}
BuyItem()
{

  this.purchase=new Purchase();
  this.purchase.pid=Math.floor(Math.random()*100);
  this.purchase.itemid=this.item.itemid;
  this.purchase.buyerid=this.bid;
  this.purchase.sellerid=this.item.sellerid;
  this.purchase.TransactionType=this.pform.value['card'];
  this.purchase.TransactionStatus=this.status;
  this.purchase.datetime=this.today;
  this.purchase.remarks=this.pform.value['remarks'],
  this.purchase.NumOfItems=Number(this.pform.value['num'])
  console.log(this.purchase)
  this.service.BuyItems(this.purchase).subscribe(res=>{console.log(this.purchase)},err=>{console.log(err)}) 
  alert("Payment completed");
  this.route.navigateByUrl('/BuyerHome');
}

decrease()
{
  this.no=Number(this.pform.value['num'])
  this.no=this.no-1;
}
increase()
{
  this.no=Number(this.pform.value['num'])
  this.no=this.no+1;
}

total()
{
  
  this.ptotal=this.pform.value['price'];
  this.ptotal=this.no*this.ptotal;


 
}

}
