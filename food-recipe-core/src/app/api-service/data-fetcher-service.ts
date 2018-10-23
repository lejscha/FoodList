import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Recipe from '../models/Recipe';
import Tag from '../models/Tag';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { CloudDataModel } from '../models/CloudData';

@Injectable()
export class FetchDataService {
  constructor(private http: HttpClient) { }
  resolve;
  myurl = 'api/RecipeApi/GetRecipes'
   async getRecipies(): Promise<Recipe[]> {
     return await this.http.get<Recipe[]>(this.myurl).toPromise().then(function (data) {
      return data.map((r: any) => new Recipe(r))
     });
  }

  async getTags(): Promise<Tag[]> {
    return await this.http.get<Tag[]>("api/RecipeApi/GetTags").toPromise().then(function (data) {
      return data.map((r: any) => new Tag(r))
    });
  }

  async getTagsForCloud(): Promise<CloudData[]> {
    return await this.http.get<CloudData[]>("api/RecipeApi/GetTags").toPromise().then(function (data) {

      debugger

      return data.map((r: any) => new CloudDataModel(r))
    });
  }
}
