import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buyer } from '../Models/buyer';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

import { Items } from '../Models/items';
import { Purchase } from '../Models/purchase';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {

url:string='http://localhost:60719/Buyer/'

  constructor(private http:HttpClient) { }
  public Getprofile(id:number):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'GetP/'+id)
  }
  public EditProfile(buyer:Buyer):Observable<Buyer>
  {
    return this.http.put<Buyer>(this.url+'Edit',buyer)
  }
  public GetCategory():Observable<Category>
  {
    return this.http.get<Category>(this.url+'GetC')
  } 
  public BuyItems(purchase:Purchase):Observable<any>
  {
    return this.http.post(this.url+'Buy',purchase)
  }
  public Search(name:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Search/'+name);
  }
  public AddCart(cart:Cart):Observable<any>
  {
    return this.http.post(this.url+'Addcart',cart);
  }
  public ViewCart(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+'Viewcart/'+id)
  }
  public GetCart(id:number):Observable<number>
  {
    return this.http.get<number>(this.url+'Getcart/'+id)
  }
  public Deletecart(id:number):Observable<any>
  {
    return this.http.delete(this.url+'delcart/'+id)
  }
  public PurchaseHistory(buyerid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'History/'+buyerid);
  }

}
