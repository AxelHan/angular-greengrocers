import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreListComponent } from './store-list/store-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StoreItemComponent,
    StoreListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [StoreItemComponent, StoreListComponent]
})
export class StoreModule { }
