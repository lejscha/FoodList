import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher'
import { CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.less'],
})

export class WordCloudComponent {

  constructor(private readonly dataFetcher: DataFetcher) { }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1000,
    height: 400,
    overflow: false,
  };

  data = this.dataFetcher.getTagsForCloud();
}
