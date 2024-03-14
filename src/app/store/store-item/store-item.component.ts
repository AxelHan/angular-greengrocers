import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart-service.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {

  constructor(private readonly cartService: CartService){}
  
  @Input('item') item: Item | null = null; 

  addToCart(item: Item){
    this.cartService.addToCart(item);
  }

}
