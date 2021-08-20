import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(public http: HttpClient) { }

  storeTask(data: any) {
    this.http.post('http://localhost:4200/task', data).subscribe(
      result => console.log(result),
      errror => console.log(errror))
  }

  loadTaskData(): Observable<string[]> {
    return this.http.get<string[]>("/assets/task.json");
  }
}
