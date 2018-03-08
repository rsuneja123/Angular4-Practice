import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productService } from './product.service';
import { IProduct } from './product.data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Prod: IProduct[] = [];
  constructor(private prodService:productService) { }
  imgWidth: number = 30;
  showImage: boolean = false;
  filter: string;
  
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  carFilter() {
    this.filter= "car";
  }
  ngOnInit() {
    this.Prod = this.prodService.getProduct();
  }
}

  


