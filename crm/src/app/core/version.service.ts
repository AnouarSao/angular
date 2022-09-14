import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  // créer un observable data
  version = new BehaviorSubject(0);

  // créer une méthode increment()
  increment(){
    this.version.next(this.version.value + 1);
  }

  constructor() { }
}
