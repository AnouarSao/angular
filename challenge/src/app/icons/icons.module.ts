import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconShopComponent } from './components/icon-shop/icon-shop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconShopComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconShopComponent
  ]
})
export class IconsModule { }
