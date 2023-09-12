import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelo/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  // hacer un get de los usuarios de la api y que se guarden en un array de tipo User
  getUsers() : Observable<User[]> {

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
