import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../.../../../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

items: any;
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(items => this.items = items);
  }
}
