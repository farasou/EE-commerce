import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  dataC:any;
  term!: string;
  p: number = 1;
  currentIndex = -1;
  currentProduct:Product={
    id: '',
    price: '',
    description:'',
    qteStock:'',
    image:''
  };
  products: Product[] = [];
  product!:Product;
  index:number=1;
  
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  submitted:boolean=false;
  
  constructor(private productService :ProductService, private router: Router) {
    this.productService.getAll().subscribe(data=>this.dataC=data);
   }
   getRequestParams( page: number, pageSize: number): any {
    let params: any = {};
   
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  ngOnInit(): void {
    
  }
  setActiveComplaints(products: Product, index: number): void {
    this.currentProduct= products;
    this.currentIndex = index;
  }

  delete(id : number): void {
    this.productService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.href = "/update-product";
        },
        error => {
          console.log(error);
        });
  }
 
  retrieveTutorials(): void {
   
  }
  goToUpdate( id : number){
    this.router.navigate(['edit-product', id ]);
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
    
 

}
