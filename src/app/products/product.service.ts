import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("");

  constructor(private http:HttpClient) { }
  viewAlltProducts(){
    const baseUrl = "http://localhost:3000/products";
    return this.http.get(baseUrl);
  }

  viewProduct(productId:any) {
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.get(baseUrl);
  }

  deleteProduct(productId:any) {
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.delete(baseUrl);
  }

  addProduct(productData:any) {
    const baseUrl = "http://localhost:3000/products/";
    return this.http.post(baseUrl,productData);
  }
}
