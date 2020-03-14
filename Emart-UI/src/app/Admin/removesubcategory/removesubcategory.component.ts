import { Component, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/Models/subcategory';
import { AdminService } from '../admin.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-removesubcategory',
  templateUrl: './removesubcategory.component.html',
  styleUrls: ['./removesubcategory.component.css']
})
export class RemovesubcategoryComponent implements OnInit {
  list:Subcategory
  clist:Category
  form:FormGroup
  constructor(private service:AdminService,private builder:FormBuilder) {
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
   
   this.service.GetSubcategory(this.form.value["cid"]).subscribe(res=>
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

this.service.DeleteSub(id).subscribe(res=>
  
 {
   this.list=res
   alert("successfully deleted") 
   this.Get();
 }
  )
}
ngOnInit() {
  this.form=this.builder.group({
    cid:[''],
});
}
}
