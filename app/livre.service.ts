import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LivreService {

   constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    let result: Observable<Object>;

     result=this.http.get('http://localhost:8067/LIVRE/livre/livres');
     return result;
    }
 save(livre: any): Observable<any> {
    let result: Observable<Object>;
      result = this.http.post('http://localhost:8067/LIVRE/livre/add', livre);
    
    return result;
  }
}
