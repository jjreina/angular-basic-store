import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.inteface';

@Component({
  selector: 'products-components-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  @Input()
  public products: Product[] = [];
}
