import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './home/pages/page-accueil/page-accueil.component';
import { PageAddProductComponent } from './shop/page-add-product/page-add-product.component';

const routes: Routes = [
  { path:'', component: PageAccueilComponent },
  { path:'accueil', component: PageAccueilComponent },
  { path: 'panier', component:PageAddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
