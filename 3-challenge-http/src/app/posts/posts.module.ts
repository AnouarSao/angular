import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDataComponent } from './components/list-data/list-data.component';
import { SingleDataComponent } from './components/single-data/single-data.component';



@NgModule({
  declarations: [
    ListDataComponent,
    SingleDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SingleDataComponent,
    ListDataComponent
  ]
})
export class PostsModule { }
