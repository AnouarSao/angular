import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {

  item$!: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService : OrdersService,
    private router: Router
    ) {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'),'depuis edit');
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.item$ = this.ordersService.getItemById(id);
  }

  ngOnInit(): void {}

  onEdit(item: Order) {
    // console.log('depuis parent page edit');
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
