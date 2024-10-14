import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchTerm:any;

  constructor(private productService:ProductService) {}

  search(event:any) {
    this.searchTerm = event.target.value;
    this.productService.search.next(this.searchTerm);
  }
}
