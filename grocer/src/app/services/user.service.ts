import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';

const baseUrl = "http://localhost:9090/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // Gets a list of all the users currently registered
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  // Registers a user to the database
  registerUser(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
