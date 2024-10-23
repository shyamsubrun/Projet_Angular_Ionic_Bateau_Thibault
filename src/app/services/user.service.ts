import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/assets/data/listUser.json';

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    return this.http.get<any>(this.userUrl);
  }
}
