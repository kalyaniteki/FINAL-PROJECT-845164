import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../seller.service';
import { Items } from 'src/app/Models/items';
import { Seller } from 'src/app/Models/seller';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
sform:FormGroup;
submitted=false;

clist:Category;
slist:Subcategory;
sub:Subcategory;
  image: Items;
  items:Items[]=[];
item:Items;
name:string;
img:string;
sid:number;
selectedFile : File = null;
  constructor(private builder:FormBuilder,private service:SellerService) {
    this.sid=JSON.parse(localStorage.getItem('sellerid')) ;
    
    this.service.GetCategory().subscribe(res=>
      {
        this.clist=res;
        console.log(this.clist);
      },
      err=>{
        console.log(err);
      }
      )

    }
   
   Get()
   {
    
    this.service.GetSubCategory(this.sform.value["cid"]).subscribe(res=>
      {
        this.slist=res;
        console.log(this.slist);
      },
      err=>{
        console.log(err);
      }
      ) 
   }
  

  ngOnInit() {
    this.sform=this.builder.group({
        cid:[''],
        sid:[''],
          price:['',Validators.required],
            name:['',Validators.required],
            description:['',Validators.required],
            stock:['',Validators.required],
            remarks:['',Validators.required],
           
            image:['',Validators.required]
      
    })
  }
    get f()
    {
      return this.sform.controls;
    }
    Onsubmit()
    {
      this.submitted=true;
      if(this.sform.valid)
      {
        this.AddItem();
      }
    }
AddItem()
{
  this.item=new Items();
  this.item.itemid=Math.floor(Math.random()*10000)
  this.item.cid=Number(this.sform.value["cid"]),
  this.item.sid=Number(this.sform.value["sid"]),
  this.item.price=this.sform.value["price"],
  this.item.itemname=this.sform.value["name"],
  this.item.description=this.sform.value["description"],
  this.item.stocknum=this.sform.value["stock"],
  this.item.remarks=this.sform.value["remarks"],
  this.item.sellerid=this.sid;
  this.item.image=this.img;
  this.service.AddItems(this.item).subscribe(res=>{console.log(this.item),this.Reset()},err=>{console.log(err)}) 
}
  Reset()
  {
    alert("Items Added Succesfully");
    this.submitted=false;
    this.sform.reset();

  }
  fileEvent(event){
    this.img= event.target.files[0].name;
  }

}
