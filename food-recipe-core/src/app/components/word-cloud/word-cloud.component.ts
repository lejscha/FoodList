import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher'

@Component({
  selector: 'word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.less'],
})

export class WordCloudComponent {

  constructor(private readonly dataFetcher: DataFetcher) { }

  title = 'Våra recept';
  recipies = this.dataFetcher.recipes;
  tags = this.dataFetcher.tags;
}
