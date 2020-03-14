import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../Models/items';
import { Seller } from '../Models/seller';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService 
{
url:string='http://localhost:60719/Item/'
sellerurl:string='http://localhost:60719/Seller/'
  constructor(private http:HttpClient) { }

  public AddItems(items:Items):Observable<any>
  {
    return this.http.post(this.url+'Add',items)
  }
  public ViewItems(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.url+'View/'+id,Requestheaders)
  } 
  public ViewProfile(id:number):Observable<Seller>
  {
    return this.http.get<Seller>(this.sellerurl+'Get/'+id,Requestheaders)
  }
  public EditProfile(seller:Seller):Observable<Seller>
  {
    return this.http.put<Seller>(this.sellerurl+'Edit/',seller)
  }
  public Delete(id:number):Observable<Items>
  {
    return this.http.delete<Items>(this.url+'Delete/'+id)
  }
  public UpdateItems(item:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'update',item)
  }
  public GetCategory():Observable<Category>
  {
    return this.http.get<Category>(this.url+'GetC')
  } 
  public GetSubCategory(cid:number):Observable<Subcategory>
  {
    return this.http.get<Subcategory>(this.url+'GetS/'+cid)
  } 
  public GetById(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.url+'Get/'+id)
  }


}
