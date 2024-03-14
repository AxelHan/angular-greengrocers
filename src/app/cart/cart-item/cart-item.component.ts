import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  constructor(private readonly cartService: CartService){}
  @Input('item') item: Item | null = null; 

  removeFromCart(item: Item){
    this.cartService.removeFromCart(item)
  }

  addToCart(item: Item){
    this.cartService.addToCart(item);
  }
}
