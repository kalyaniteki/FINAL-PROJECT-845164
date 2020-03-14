import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { Router} from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
itemname:string;
item:Items;
buyid:number;
buyer:Buyer;
  constructor(private service:BuyerService,private route:Router) {
    if(localStorage.getItem('buyerid')==null)
    {
      this.route.navigateByUrl('/Home')
    }
    this.buyid=JSON.parse(localStorage.getItem('buyerid'))
   }

  ngOnInit() {
  }
  reset()
  {
    localStorage.clear();
    this.route.navigateByUrl('/Home');
  }
  Get()
  {
    this.service.Getprofile(this.buyid).subscribe(res=>  
      {
        
        this.buyer=res;
        console.log(this.buyer);
      })
  }

 Search()
   {
     
    this.service.Search(this.itemname).subscribe(res=>
      {
        this.item=res;
        console.log(this.item);
      },
      err=>{
        console.log(err);
      }
      )
    
   }
}
