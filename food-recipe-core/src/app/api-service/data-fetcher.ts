import { FetchDataService } from './data-fetcher-service'
import { Injectable } from '@angular/core';


import Recipe from '../models/Recipe';

import Tag from '../models/Tag';

@Injectable()
export class DataFetcher {

  recipes: Promise<Recipe[]>;
  tags: Promise<Tag[]>;

  constructor(private readonly dataFetcherService: FetchDataService) {
    this.recipes = this.getRecipies();
    this.tags = this.getTags();
    
  }

  async getRecipies() {

    let recipes;
    await this.dataFetcherService.getRecipies().then((data) => recipes = data);

    return this.recipes = recipes;
  }

  async getTags() {

    let tags;
    await this.dataFetcherService.getTags().then((data) => tags = data);

    return this.tags = tags;
  }
}

export default DataFetcher;
