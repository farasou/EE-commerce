import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeaturesComponent } from './features/features.component';
import { ShopComponent } from './shop/shop.component';
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    
    FeaturesComponent,
    ShopComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    EditProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
