import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AdditemComponent } from './Seller/additem/additem.component';
import { ViewitemComponent } from './Seller/viewitem/viewitem.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { ViewprofileComponent } from './Seller/viewprofile/viewprofile.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddRemoveCategoryComponent } from './Admin/add-remove-category/add-remove-category.component';
import { BuyerviewprofileComponent } from './Buyer/buyerviewprofile/buyerviewprofile.component';
import { AddRemoveSubcategoryComponent } from './Admin/add-remove-subcategory/add-remove-subcategory.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { HomeComponent } from './Account/home/home.component';
import { RemovecategoryComponent } from './Admin/removecategory/removecategory.component';
import { RemovesubcategoryComponent } from './Admin/removesubcategory/removesubcategory.component';
import { FrontComponent } from './Account/front/front.component';



const routes: Routes = [
  {path:'start',component:FrontComponent},
  {path:'Home',component:HomeComponent,children:[
    {path:'Login',component:LoginComponent},
    {path:'Register-seller',component:RegisterSellerComponent},
    {path:'Register-buyer',component:RegisterBuyerComponent},
  ]},
 
  {path:'BuyerHome',component:BuyerLandingPageComponent,children:
   [{path:'search',component:SearchComponent},
   {path:'Viewcart',component:ViewcartComponent},
   {path:'purchasehistory',component:PurchasehistoryComponent},
   {path:'buyproduct',component:BuyproductComponent} ,
   {path:'bviewprofile',component:BuyerviewprofileComponent}
 
  ]},
  {path:'SellerHome',component:SellerLandingPageComponent,children:
    [{path:'additems',component:AdditemComponent},
    {path:'viewitems',component:ViewitemComponent},
    {path:'viewreport',component:ViewreportsComponent},
    {path:'viewprofile',component:ViewprofileComponent} 
  ]},
  {path:'Admin',component:AdminLandingPageComponent,children:[
     {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
     {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
     {path:'Add-removecategory',component:AddRemoveCategoryComponent},
     {path:'Add-removesubcategory',component:AddRemoveSubcategoryComponent},
     {path:'dailyreport',component:DailyReportComponent},
     {path:'Viewcategory',component:RemovecategoryComponent},
     {path:'Viewsubcategory',component:RemovesubcategoryComponent}

  ]},
  {path:'',redirectTo:'start',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
