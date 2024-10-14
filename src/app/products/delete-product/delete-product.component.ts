import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  prodductId:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) => {
      this.prodductId = data["id"];
    })

    this.productService.deleteProduct(this.prodductId).subscribe((item:any) => {
      alert("Succesfully Deleted");
      this.router.navigateByUrl("products")
    })
  }

}
