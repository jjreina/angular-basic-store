import { Component, Input, input } from '@angular/core';
import { Product } from '../../interfaces/products.inteface';

@Component({
  selector: 'products-components-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  public product!: Product;

  public showProduct() {
    console.log('ProductComponent', this.product.images[0].baseUrl);
  }
}
