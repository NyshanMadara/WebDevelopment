import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../.../../../../product.service';
import { Product } from './products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: Product[];
  searchStr = ''
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
    }));
  }

   ngOnInit() {
    this.getProducts();
  }
  getProducts() {
      this.productService.getProducts().subscribe(products => this.products = products);
  }
  // getProducts(){
  //   const id = +this.route.snapshot.paramMap.get('id');

  //   this.productService.getProductsByCategory(id).subscribe(products => this.products = products);
  // }
}

