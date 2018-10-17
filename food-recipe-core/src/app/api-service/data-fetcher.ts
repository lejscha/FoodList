import { FetchDataService } from './data-fetcher-service'
import { Injectable } from '@angular/core';


import Recipe from '../models/Recipe';

@Injectable()
export class DataFetcher {

  recipes: Promise<Recipe[]>;

  constructor(private readonly dataFetcherService: FetchDataService) {
    this.recipes = this.getRecipies();
  }

  async getRecipies() {

    let recipes;
    await this.dataFetcherService.getRecipies().then((data) => recipes = data);

    return this.recipes = recipes;
  }
}

export default DataFetcher;
