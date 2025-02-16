import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'categories-components-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input()
  public categories: Category[] = [];

  @Output()
  public categorySelectedEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public emitOption(event: Event): void {
    const selectElement: HTMLSelectElement = event.target as HTMLSelectElement;
    this.categorySelectedEmitter.emit(selectElement.value);
  }
}
