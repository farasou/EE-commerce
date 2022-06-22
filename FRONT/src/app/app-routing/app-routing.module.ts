import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';


import { HomeComponent } from '../home/home.component';
import { CreateProductComponent } from '../Product/create-product/create-product.component';
import { EditProductComponent } from '../Product/edit-product/edit-product.component';
import { ProductListComponent } from '../Product/product-list/product-list.component';
import { UpdateProductComponent } from '../Product/update-product/update-product.component';
import { ShopComponent } from '../shop/shop.component';


const routes: Routes = [
 { path: '', component:HomeComponent},
 { path: 'about', component:AboutComponent},
 {path: "features", component:FeaturesComponent},
 {path: "shop", component:ShopComponent},
 {path: "product", component:CreateProductComponent},
 {path: "productList", component:ProductListComponent},
 {path: "update-product", component:UpdateProductComponent},
 {path: "edit-product/:id", component:EditProductComponent},
 {path: '**',component: HomeComponent},
 

]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
