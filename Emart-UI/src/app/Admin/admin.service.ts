import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{ Observable} from 'rxjs'
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheader={headers:new HttpHeaders({
  'Content-type':'application/json'
})}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:60719/Admin/'

  constructor(private http:HttpClient) { }

  public Addcategory(category:Category):Observable<any>
 {
   return this.http.post(this.url+'AddC',category)
 }
 public AddSubcategory(subcategory:Subcategory):Observable<any>
 {
   return this.http.post(this.url+'AddS',subcategory)
 }
 public GetCategory():Observable<Category>
 {
   return this.http.get<Category>(this.url+'GetC')
 } 
 public Delete(id:number):Observable<Category>
  {
    return this.http.delete<Category>(this.url+'DeleteC/'+id)
  }
  public GetSubcategory(id:number):Observable<Subcategory>
  {
    return this.http.get<Subcategory>(this.url+'GetS/'+id)
  }
  public DeleteSub(id:number):Observable<Subcategory>
  {
    return this.http.delete<Subcategory>(this.url+'DeleteS/'+id)
  }
  public UpdateCategory(id:number):Observable<Category>
  {
    return this.http.put<Category>(this.url+'updateC/'+id,Requestheader)
  }
  public UpdateSubCategory(id:number):Observable<Subcategory>
  {
    return this.http.put<Subcategory>(this.url+'updateS/'+id,Requestheader)
  }

}
