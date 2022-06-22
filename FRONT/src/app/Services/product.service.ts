import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../Models/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8000/product";
  constructor(private httpClient :HttpClient) { }

  addProduct(product: any): Observable<object>{
    return this.httpClient.post(`${this.baseURL}/add`, product);
} 
getAll() {
  return this.httpClient.get(`${this.baseURL}/getAll`)
}
updateProduct(id:Number,data:Product){
   
  return this.httpClient.put(`http://localhost:8000/product/update/${id}` , data);
}
delete(id : any){
  return  this.httpClient.delete(`http://localhost:8000/product/delete/${id}`)
}
get(id : any){
  return  this.httpClient.get(`http://localhost:8000/product/get/${id}`)
}




}
