import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id ! : Number;
  product : any;
  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute        
      ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.get(this.id).subscribe(
      data=>{
        this.product = data;
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    )
  }

  update(){
    this.productService.updateProduct(this.id , this.product).subscribe(
      data=>{
        console.log(data);
        window.location.href = "/update-product";
      },
      err=>{
        console.log(err);
      }
    )
  }



}
