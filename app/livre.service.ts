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
    return this.http.get('http://192.168.1.3:8067/LIVRE/livre/livres');
  }
 save(livre: any): Observable<any> {
    let result: Observable<Object>;
      result = this.http.post('http://192.168.1.3:8067/LIVRE/livre/add', livre);
    
    return result;
  }
}
