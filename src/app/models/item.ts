//Este es el modelo con el que se van a crear cada uno de los items
export class Item {
  title: string = '';
  id: number = 0;
  quantity: number = 0;
  price: number = 0;
  img: string = '';
  selected: boolean = false;
}
