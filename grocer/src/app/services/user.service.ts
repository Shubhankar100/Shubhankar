import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = "http://localhost:9090/database/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  // Gets a list of all the users currently registered
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl+"getUsers");
  }

  // Registers a user to the database
  registerUser(data:any): Observable<any> {
    return this.http.post(baseUrl+"storeUser", data);
  }
}
