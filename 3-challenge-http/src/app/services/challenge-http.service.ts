import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeHttpService {

  constructor(private http: HttpClient) { }

  onDisplaySingleItem(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  onDisplayList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
