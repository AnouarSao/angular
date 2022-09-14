import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { ProfilComponent } from './profil/profil.component';

// **: wildcard
const routes: Routes = [
  { path: '', component: BienvenueComponent },
  { path: 'bienvenue', component: BienvenueComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', component: PageIntrouvableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
