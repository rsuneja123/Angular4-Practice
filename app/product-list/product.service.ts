import { IProduct } from './product.data';

const allData = [{
  productId: 0,
  imageUrl: 'logo2.png',
  Product: 'car',
  Available: '29 july',
  Code: 'gd-11',
  Rate: 444,
  starRating: 4

},
  {
        productId: 1,
    imageUrl: 'logo1.png',
    Product: 'bike',
    Available: '29 june',
    Code: 'ng-11',
    Rate: 5555,
    starRating: 3

  },
  {
        productId: 2,
    imageUrl: 'logo3.png',
    Product: 'home',
    Available: '29 joct',
    Code: 'ng-aa',
    Rate: 999,
    starRating: 5
  }

    ] 

export class productService {
  getProduct(): IProduct[] {
    return allData; 
  }

  getProductDetail(i) {
    return allData[i];
  }
}
