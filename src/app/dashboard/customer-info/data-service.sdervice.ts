import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Observable
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private _http: Http) { }
    private url: string;
    getData(search): Observable<any> {
      // sample url 
     // this.url = 'https://jsonplaceholder.typicode.com/posts/' + search;
     this.url = 'https://spoonkart-service.herokuapp.com/cust/'+search;
      return this._http.get(this.url)
        .map((data) => {
            return data.json();
        });
    }
}