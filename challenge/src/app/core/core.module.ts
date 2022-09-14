import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { ShopModule } from '../shop/shop.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    HomeModule,
    ShopModule,
    SharedModule
  ],
})
export class CoreModule { }
