import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Recipe from '../models/Recipe';

@Injectable()
export class FetchDataService {
  constructor(private http: HttpClient) { }
  resolve;
  myurl = 'api/RecipeApi/GetRecipes'
   async getRecipies(): Promise<Recipe[]> {
     return await this.http.get<Recipe[]>(this.myurl).toPromise().then(function (data) {
      return data.map((r: any) => new Recipe(r))
    });;
  }
}
