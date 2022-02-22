import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Item } from '../models/item';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit, OnDestroy, OnChanges {
  @Input() prod: Item;
  productoCopia: Item = new Item();
  @Input() itemShop: Item[] = [];
  @Input() show: boolean = false;
  @Input() contadorDelete: number = 0;
  @Output() conEm = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<Item>();
  @Input() totalPrecio: number = 0;

  deleteItem(producto: Item) {
    this.itemShop.splice(this.itemShop.indexOf(producto), 1);

    this.deleteProduct.emit(producto);
  }

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {}
  constructor() {
    this.prod = new Item();
  }

  ngOnInit(): void {}
}
