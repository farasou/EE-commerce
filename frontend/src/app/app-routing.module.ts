import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductManageComponent} from "./pages/product-manage/product-manage.component";
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'manage-product', component: ProductManageComponent },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductManageComponent, HomeComponent];