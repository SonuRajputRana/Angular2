import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http:HttpClient) { }


onData():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}

Username = new BehaviorSubject('ram')

}
