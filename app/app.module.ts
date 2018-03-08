  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { pipeFilter  } from './product-list/filter.pipe';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from '../shared/star.component';
import { productService } from './product-list/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    pipeFilter,
    StarComponent,
    ProductDetailComponent],
  imports: [
    BrowserModule, MatTableModule, MatFormFieldModule,
    MatInputModule, BrowserAnimationsModule, FormsModule,
    
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id' component: ProductDetailComponent])
  
  ],
  providers: [productService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
