import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Category } from 'src/app/Models/category';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  list:Items[]=[];
item:Items
  num:number;
  cart:Cart;
  id:number;
  iid:number;
  list1:Cart[]=[];
  count:number;
 
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) {
    this.id=JSON.parse(localStorage.getItem('buyerid'))
   
  }

 

  ngOnInit() {
    this.itemform=this.builder.group({
      itemname:['']
    })
   
  }
AddCart(it:Cart)
{
  
  
  this.service.GetCart(it.itemid).subscribe(res=>
    {
      this.count=res;
      console.log(this.count);  
    
    
    if(this.count!=0)
    {
      this.count=0;
      alert("already exists")
    }
    else
    {
  this.cart=new Cart();
  this.cart.cartid=Math.floor(Math.random()*100000)
  this.cart.buyerid=this.id;
  this.cart.itemid=it.itemid;
  this.cart.itemname=it.itemname;
  this.cart.description=it.description;
  this.cart.image=it.image;
  this.cart.price=it.price;
  this.service.AddCart(this.cart).subscribe(res=>{console.log(this.cart)},err=>{console.log(err)})
  alert("Item Added to Cart");
    }
  })
}

  Search()
  {
    
    this.service.Search(this.itemform.value['itemname']).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      }
      )
  }
buy(item:Items)
{ 
  console.log(item)
  localStorage.setItem("itemlist",JSON.stringify(item));
  this.route.navigateByUrl('/BuyerHome/buyproduct')

}

}
