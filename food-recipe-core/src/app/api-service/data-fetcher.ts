import { FetchDataService } from './data-fetcher-service'
import { Injectable } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import Recipe from '../models/Recipe';
import Tag from '../models/Tag';

@Injectable()
export class DataFetcher {

  constructor(private readonly dataFetcherService: FetchDataService) { }

  async getRecipies() {
    return await this.dataFetcherService.getRecipies();
  }

  async getTags() {
    return await this.dataFetcherService.getTags();
  }

  async getTagsForCloud() {
    return await this.dataFetcherService.getTagsForCloud();
  }
}

export default DataFetcher;
