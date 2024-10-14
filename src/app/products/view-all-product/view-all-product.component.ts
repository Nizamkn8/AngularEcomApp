import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {

  productList:any;
  filterCategory:any;
  searchKey:any;

  constructor(private productService:ProductService){}

  ngOnInit(): void {

    this.productService.viewAlltProducts().subscribe(data => {
      console.log(data);
      this.productList = data;
    })

    this.productService.search.subscribe((value) => {
      this.searchKey = value;
      console.log("helloo",value,this.searchKey)

    })
  }

  filter(category:any) {
    this.filterCategory = this.productList.filter((item:any) => {
      if(item.categoryId == category || category == ""){
        return item;
      }
    })
  }
}
