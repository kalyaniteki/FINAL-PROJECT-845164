import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'Rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  
  'Content-Type':'application/json',
})}



@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string='http://localhost:60719/User/'

  constructor(private http:HttpClient) { }
 public BuyerLogin(name:string,pass:string):Observable<any>
 {
   return this.http.get<any>(this.url+'loginb/'+name+'/'+pass,Requestheaders)
 }
 public SellerLogin(name:string,pass:string):Observable<any>
 {
   return this.http.get<any>(this.url+'logins/'+name+'/'+pass,Requestheaders)
 }
 public BuyerRegister(buyer:Buyer):Observable<any>
 {
   return this.http.post(this.url+'BuyerRegister',buyer)
 }
 public SellerRegister(seller:Seller):Observable<any>
 {
   return this.http.post(this.url+'SellerRegister',JSON.stringify(seller),Requestheaders)
 }


}
