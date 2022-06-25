import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  productsList: any;
  loading= true;
  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getDB_Data();
  }

  getDB_Data() {
    this.getProductsList();
  }

  getProductsList() {
    this.ProductsService.getProducts().subscribe((data) => {
      this.productsList = data;
      this.loading = false;
    });
  }

}
