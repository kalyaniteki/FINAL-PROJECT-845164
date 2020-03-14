import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AddRemoveSubcategoryComponent } from './Admin/add-remove-subcategory/add-remove-subcategory.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { BuyerviewprofileComponent } from './Buyer/buyerviewprofile/buyerviewprofile.component';
import { HomeComponent } from './Account/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RemovecategoryComponent } from './Admin/removecategory/removecategory.component';
import { RemovesubcategoryComponent } from './Admin/removesubcategory/removesubcategory.component';
import { FrontComponent } from './Account/front/front.component'

@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewcartComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    SellerLandingPageComponent,
    AdditemComponent,
    ViewitemComponent,
    ViewreportsComponent,
    ViewprofileComponent,
    AdminLandingPageComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddRemoveCategoryComponent,
    AddRemoveSubcategoryComponent,
    DailyReportComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    BuyerviewprofileComponent,
    HomeComponent,
    RemovecategoryComponent,
    RemovesubcategoryComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
