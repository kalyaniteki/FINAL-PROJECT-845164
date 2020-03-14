import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Purchase } from 'src/app/Models/purchase';
import { Seller } from 'src/app/Models/seller';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/Seller/seller.service';


@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
purch:Purchase[]=[];
seller:Purchase
items:Items[]=[]
id:number;
  constructor(private service:BuyerService,private service1:SellerService) { 
 this.id=JSON.parse(localStorage.getItem('buyerid')),

    this.service.PurchaseHistory(this.id).subscribe(res=>
      {
        this.purch=res;
        console.log(this.purch);
        for(let i=0;i<this.purch.length;i++)
        {
        this.service1.GetById(this.purch[i].itemid).subscribe(res1=>{
        console.log(this.purch[i].itemid);
          this.items.push(res1);
          console.log(this.items);
          
        })
        }
       
        })
      
      }

  

  ngOnInit() {
  }

}
