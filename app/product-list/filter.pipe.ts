import { Pipe,PipeTransform } from "@angular/core";
import { IProduct } from "./product.service";

@Pipe( {
  name:'newFilter'
})

export class pipeFilter implements PipeTransform {
  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((pro: IProduct) =>
      pro.Product.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
