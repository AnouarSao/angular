import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();

  constructor(
    private ordersService: OrdersService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onAdd(item: Order) {
    // console.log(item, 'depuis parent');

    this.ordersService.add(item).subscribe((response) => {
      //console.log(response, 'nouvel objet');
      this.router.navigate(['orders']);
    });
  }
}
