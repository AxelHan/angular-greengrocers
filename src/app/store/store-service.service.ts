import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  http = inject(HttpClient)

  storeItems: Promise<Item[]> = this.getStoreItems(); 

  async getStoreItems() {
    const res = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}groceries`))
    return res
  }

}
