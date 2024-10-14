import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = this.formBuilder.group({
      id: [""],
      productName: [""],
      categoryId: [""],
      img: [""],
      description: [""],
      prixe: [""],
      isAvailable: [""],
      rating: [""],
      review: [""],
      vendor_name: [""],
      warranty: [""]
  })

  constructor(private router:Router,private formBuilder:FormBuilder,private productService:ProductService) {}
  ngOnInit():void {}

  addProduct() {
    let newProduct = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      img: this.addProductForm.value.img,
      description: this.addProductForm.value.description,
      prixe: this.addProductForm.value.prixe,
      isAvailable: this.addProductForm.value.isAvailable,
      rating: this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      vendor_name: this.addProductForm.value.vendor_name,
      warranty: this.addProductForm.value.warranty
    }

    this.productService.addProduct(newProduct).subscribe((data) => {
      alert("New product added succesfully");
      this.router.navigateByUrl("products")
    })
  }
}
