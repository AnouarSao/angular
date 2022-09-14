import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataComponent } from './posts/components/list-data/list-data.component';
import { SingleDataComponent } from './posts/components/single-data/single-data.component';

const routes: Routes = [
  {path: '', component: SingleDataComponent},
  {path: 'liste', component: ListDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
