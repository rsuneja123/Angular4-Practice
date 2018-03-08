import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../product-list/product.service';
import { IProduct } from '../product-list/product.data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "product";
  Prod;
  id: number;
  constructor(private routes: ActivatedRoute, private prodService: productService) { }

  ngOnInit() {
    this.id = +this.routes.snapshot.params['id'];
    //this.pageTitle += `: ${id}`;
    this.Prod = this.prodService.getProductDetail(this.id);
  }


}
