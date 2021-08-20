import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetquizdataService {

  constructor(public http: HttpClient) { }

  loadQuizData(): Observable<string[]> {
    return this.http.get<string[]>("/assets/Questions.json");
  }
}
