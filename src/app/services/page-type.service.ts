import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageTypeService {

  constructor(private http: HttpClient) { }

  getLocalData(): Observable<any> {
    return this.http.get<any>('/assets/data/lis_tbateaux.json');
  }
}
