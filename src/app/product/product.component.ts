import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { Item } from '../models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: Item[] = [];

  productoIndividual: Item = new Item();

  @Output() carrito = new EventEmitter<Item[]>();
  @Output() contadorEmit = new EventEmitter<number>();
  show: boolean = false;

  cartItem: Item[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  //Esta función se implementará sobre el botón go cart para ir a la ruta del carrito
  goCart() {
    this.router.navigate(['shopping-cart']);
    window.scroll({ top: 1500, left: 0, behavior: 'smooth' });
  }
  //Estos botones sirven para incrementar la cantidad de unidades que quiero de un item en concreto y recibe por parámetro el producto que se está modificando
  incrementQuantity(prod: Item) {
    this.product = this.product.filter((x) => (x.id = prod.id));

    prod.quantity++;
  }

  decrementQuantity(prod: Item) {
    this.product = this.product.filter((x) => (x = prod));
    if (prod.quantity > 1) {
      prod.quantity--;
    }
  }
  //Esta función añade un item al carrito de compras
  addItem(prod: Item) {
    this.cartItem.push(prod);
    this.show = true;
    this.carrito.emit(this.cartItem);

    this.productoIndividual = prod;

    prod.selected = false;
  }
}
