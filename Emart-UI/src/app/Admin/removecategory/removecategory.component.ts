import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-removecategory',
  templateUrl: './removecategory.component.html',
  styleUrls: ['./removecategory.component.css']
})
export class RemovecategoryComponent implements OnInit {
list:Category
  constructor(private service:AdminService) {
  this.View();
  
  }
View()
{
  this.service.GetCategory().subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    }
    )
}


  Delete(id:number)
{

this.service.Delete(id).subscribe(res=>
  
 {
   this.list=res;
   alert("successfully deleted") 
  this.View();
 }
  )
}
   
  ngOnInit() {
  }

}
