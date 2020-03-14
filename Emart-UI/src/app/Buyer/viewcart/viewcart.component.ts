import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
id:number;
list:Cart;
item:Items;
 
  constructor(private service:BuyerService,private route:Router) {
    this.id=JSON.parse(localStorage.getItem('buyerid'))
   this.View();
  }
View()
{
  this.service.ViewCart(this.id).subscribe(res=>
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
  }


Delete(iid:number)
{
console.log(this.id)
this.service.Deletecart(iid).subscribe(res=>
  
 {
 this.View()
   alert("successfully deleted") 
  
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
