import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { HeroFilterComponent } from './pages/hero-filter/hero-filter.component';
import { ProductsGridComponent } from './pages/products-grid/products-grid.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroFilterComponent,
    ProductsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
