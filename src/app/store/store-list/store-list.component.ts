import { Component } from '@angular/core';
import { StoreService } from '../store-service.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  items: any

  constructor(private readonly storeService: StoreService){}


  async ngOnInit(){
    this.items = await this.storeService.getStoreItems();
    console.log(this.items)
  }
  
}
