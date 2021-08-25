import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  checkUser():Observable<login[]>{
    return this.http.get<login[]>("/assets/login.json");
  }
}
