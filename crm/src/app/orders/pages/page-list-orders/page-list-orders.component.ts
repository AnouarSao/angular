import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // créer la variable titleParent
  titleParent: string = 'Liste des commandes';

  // transformer enum en tableau
  states = Object.values(StateOrder);

  // collection!: Order[];

  collection$!: Observable<Order[]>;

  //  en-têtes du tableau de type array
  // faire passer headers au component enfant
  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService, private router: Router) {

    // this.ordersService.refreshCollection();

    this.collection$ = this.ordersService.collection;

    // remplacé par pipe async
    //   this.ordersService.collection.subscribe((data) => {
    //     this.collection = data;
    //     // console.log(this.collection);
    //   });

    // ici on déclenche la fonction sumUp defini dans orders.service.ts
    // console.log(this.ordersService.sumUp(2, 3));
  }

  ngOnInit(): void {}

  // cette fonction est remplacée par pipe total
  // total(val: number, coef: number, tva?: number): number{
  //    console.log('fonction appelée ')
  //   if(tva){
  //     return val * coef * (1 + tva/100);
  //   }
  //   return val * coef;
  // }

  changeState(item: Order, event: Event) {
    console.log(item, event);
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    console.log(state, 'nouvel état');
    // déclencher une méthode du service pour update
    this.ordersService.changeState(item, state).subscribe((res) => {
      console.log(res, 'nouvel objet');
      // mettre à jour notre objet côté front
      // item = res;
      Object.assign(item, res);
    });
  }

  goToEdit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  onDelete(item: Order){
    // console.log('verifier delete');

    this.ordersService.delete(item).subscribe();
  }
}
