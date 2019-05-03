import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

  constructor(private http: Http) {}

  getData(name: string): Observable<any> {
    return this.http.get('http://localhost:8080/greeting?name=' + name)
                    .map(response => response.json())
  }

}
