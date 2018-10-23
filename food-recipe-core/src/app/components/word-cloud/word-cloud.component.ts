import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher'


import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

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

  //data: CloudData[] = [
  //  { text: 'WeiEEEolor', weight: 8, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeightFDSFSAFDSAFSlor', weight: 4, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeightFDSFSAFDSAFSDFEEEolor', weight: 14, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeightFDSFSAFSDFEEEolor', weight: 2, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeigSr', weight: 3, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeightFDDFEEEolor', weight: 9, link: 'https://google.com', color: '#ffaaee' },
  //  { text: 'WeightFDSFSAEEolor', weight: 20, link: 'https://google.com', color: '#ffaaee' },


  //  // ...
  //];

  data = this.dataFetcher.getTagsForCloud();
}
