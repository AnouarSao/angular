import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/core/models/order';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  //urlAPI
  private urlApi = environment.urlApi;

  // private collection$!: Observable<Order[]>;

  // on remplace collection$ l'observable froid par un chaud
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );

  constructor(private http: HttpClient) {
    // utilisé dans refreshCollection() maintenant
    // this.collection = this.http.get<Order[]>(this.urlApi + '/orders').pipe(
    //   map((tab) => {
    //     return tab.map((obj) => {
    //       return new Order(obj);
    //     });
    //   })
    // );
    this.refreshCollection();
  }

  refreshCollection() {
    this.http
      .get<Order[]>(this.urlApi + '/orders')
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        // ici on va passer data à l'observable chaud this.collection$
        this.collection$.next(data);
      });
  }
  // on va appeler cette fonction this.ordersService.collection
  // getter
  get collection() {
    this.refreshCollection();
    return this.collection$;
  }

  // setter
  // set collection(col: Observable<Order[]>) {
  //   this.collection$ = col;
  // }

  // getData() {
  //   return this.http.get<Order[]>('http://localhost:3000/orders');
  // }

  // sumUp(a:number, b:number){
  //   return a+b;
  // }

  // changeState
  changeState(item: Order, state: StateOrder): Observable<Order> {
    // créer un nouvel objet
    const obj = new Order(item);
    // modifier l'état avec la nouvelle valeur
    obj.state = state;
    // déclencher update()
    return this.update(obj);
  }

  update(obj: Order): Observable<Order> {
    // appel http
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }

  add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  delete(item: Order): Observable<Order> {
    // console.log('delete depuis service');

    return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`).pipe(
      tap(() => {
        // refreshCollection
        this.refreshCollection();
      })
    );
  }
}
