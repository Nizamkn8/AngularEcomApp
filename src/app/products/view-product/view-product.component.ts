import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productId:any;
  productData:any;

  constructor( private productService:ProductService, private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) => {
      this.productId = data['id'];
    })

    this.productService.viewProduct(this.productId).subscribe((data:any) => {
      this.productData = data;
    })
  }

}
