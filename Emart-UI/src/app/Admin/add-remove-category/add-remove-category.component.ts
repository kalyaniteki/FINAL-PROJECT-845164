import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-remove-category',
  templateUrl: './add-remove-category.component.html',
  styleUrls: ['./add-remove-category.component.css']
})
export class AddRemoveCategoryComponent implements OnInit {
  adminform:FormGroup;
  submitted=false;
  category:Category;
 
  constructor(private builder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.adminform=this.builder.group({
     
      cname:['',Validators.required],
      briefdetails:['',Validators.required]

  })
}
get f()
{
  return this.adminform.controls;
}
Onsubmit()
{
  this.submitted =true;
    if(this.adminform.valid){
      this.AddC()
    }
}
Reset() 
{
  alert("succesfully registered");
    this.submitted = false;
    this.adminform.reset();
}
AddC()
{
  
  this.category=new Category();
  this.category.cid=Math.floor(Math.random()*100);
  this.category.cname=this.adminform.value["cname"],
  this.category.briefdetails=this.adminform.value["briefdetails"],
  this.service.Addcategory(this.category).subscribe(res=>{console.log(this.category),this.Reset()},err=>{console.log(err)})
    
}


}
