import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from '../seller.service';
import { Tokens } from 'src/app/Models/tokens';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  item:Items;
  list:Items;
  num:number;
  list1:Items;
  itemid: number;
id:number;
  token: Tokens;
  constructor(private builder:FormBuilder,private service:SellerService) {
    this.id=JSON.parse(localStorage.getItem('sellerid')) ;
    this.ViewItems();
   
}
ViewItems()
{
  this.service.ViewItems(this.id).subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    }
    )
}
ngOnInit() {
  this.itemform=this.builder.group({
    itemid:[''],
    cid:[''],
       sid:[''],
       price:[''],
        itemname:[''],
        description:[''],
        stocknum:[''],
        remarks:[''],
        sellerid:[''],
       

     
      }) 
     
    }

Edititem()
{
  this.item=new Items();
   this.item.itemid=Number(localStorage.getItem("itemid"));
  this.item.itemname=this.itemform.value["itemname"];
  this.item.price=Number(this.itemform.value["price"]);
  this.item.stocknum=Number(this.itemform.value["stocknum"]);
  this.item.remarks=this.itemform.value["remarks"];
  this.item.description=this.itemform.value["description"];
  this.item.sellerid=this.id;
  this.item.image=this.list1.image;
  console.log(this.item);
  this.service.UpdateItems(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully"),this.ViewItems()})
  
}
  
Delete(id:number)
{

this.service.Delete(id).subscribe(res=>
  
 {
   this.item=res;
   alert("successfully deleted") 
   this.ViewItems();
  
 }
  )
  
}
   

view(itemid:number)
{
 this.list1=new Items()
  this.service.GetById(itemid).subscribe(
    res=>{
      this.list1=res;
      console.log(this.list1)
      localStorage.setItem("itemid",this.list1.itemid.toString())
      this.itemform.patchValue({
          itemname:this.list1.itemname,
          price:Number(this.list1.price),
          stocknum:Number(this.list1.stocknum),
          description:this.list1.description,
          remarks:this.list1.remarks
        })
      })
}  

}


