import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  
  product : Product = {
    id:'',
    price: '',
    description:'',
    qteStock:'',
    image:''
  };
  submitted = false;
  constructor(private productService: ProductService) { 

  }
  saveProduct(): void {
    const data = {
      id: this.product.id,
      price: this.product.price,
      description: this.product.description,
      qteStock: this.product.qteStock,
      image: this.product.image,
    };
      
      

    this.productService.addProduct(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.reloadPage();
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

  reloadPage(): void {
    window.location.href = "/update-product";
  }


}
