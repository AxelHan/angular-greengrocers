import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];
  total: number = 0;
  cartItemsSubject = new Subject<Item[]>();
  totalSubject = new Subject<number>();

  constructor() { }

  addToCart(item: Item){
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if(existingItem){
      existingItem.quantity = (existingItem.quantity || 1) + 1; 

    } else{
      item.quantity =1; 
      this.cartItems.push(item)
    }
    this.cartItemsSubject.next(this.cartItems);
    this.calculateTotal();
  }

  removeFromCart(item: Item){
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if(existingItem){
      existingItem.quantity = (existingItem.quantity || 1) - 1; 
      if(existingItem.quantity === 0){
        this.cartItems.splice(this.cartItems.indexOf(existingItem), 1)
      }
      this.cartItemsSubject.next(this.cartItems)
      this.calculateTotal();
    }
  }

  calculateTotal(){
    if(this.cartItems.length === 0){
      this.total = 0
    }
    this.cartItems.forEach(item => {
      this.total = item.price * item.quantity!
    });
    this.totalSubject.next(this.total)
  }
}
