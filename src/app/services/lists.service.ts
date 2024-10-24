import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant,Bateau,Recette,Type } from '../models/bateau.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getListBateaux(): Observable<{ bateaux: Bateau[], type: Type }> {
    return this.http.get<Bateau[]>('/assets/data/listBateaux.json').pipe(
      map((bateaux: Bateau[]) => ({
        bateaux: bateaux,
        type: Type.Bateau
      }))
    );
  }
  getListRestaurants(): Observable<{restaurants : Restaurant[],type : Type}> {
    return this.http.get<Restaurant[]>('/assets/data/listRestaurants.json').pipe(
      map((restaurants : Restaurant[]) => ({
        restaurants: restaurants,
        type: Type.Restaurants
      }))
    );
  }
  getListRecettes(): Observable<{recettes : Recette[], type : Type}> {
    return this.http.get<Recette[]>('/assets/data/listRecettes.json').pipe(
      map((recettes : Recette[]) => ({
        recettes: recettes,
        type: Type.Recettes
      }))
    );
  }

  getListProduits(): Observable<any> {
    return this.http.get<any>('assets/data/listProduits.json');
  }
}
