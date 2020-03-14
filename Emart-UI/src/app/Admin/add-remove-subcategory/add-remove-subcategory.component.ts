import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Subcategory } from 'src/app/Models/subcategory';
import { Category } from 'src/app/Models/category';


@Component({
  selector: 'app-add-remove-subcategory',
  templateUrl: './add-remove-subcategory.component.html',
  styleUrls: ['./add-remove-subcategory.component.css']
})
export class AddRemoveSubcategoryComponent implements OnInit {
adminform:FormGroup
sub:Subcategory
submitted=false;
list:Category
  constructor(private builder:FormBuilder,private service:AdminService) {
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

  ngOnInit() {
    this.adminform=this.builder.group({
     
    sname:['',Validators.required],
    cid:[''],
   briefdetails:['',Validators.required],
    GST:['',Validators.required]

    })
  
  }
  Reset()
  {
    alert("Added successfully");
    this.submitted = false;
    this.adminform.reset();
  }
  Onsubmit()
  {
    this.submitted=true;
    if(this.adminform.valid)
    {
      this.AddS()
    }
  }
  get f()
  {
    return this.adminform.controls;
  }
  AddS()
  {
    this.sub=new Subcategory();
    this.sub.sid=Math.floor(Math.random()*(1000));
    this.sub.sname=this.adminform.value["sname"],
    this.sub.cid=Number(this.adminform.value["cid"]),
    this.sub.briefdetails=this.adminform.value["briefdetails"],
    this.sub.GST=this.adminform.value["GST"],
    this.service.AddSubcategory(this.sub).subscribe(res=>{console.log(this.sub),this.Reset()},err=>{
      console.log(err)


    })
  }
}
