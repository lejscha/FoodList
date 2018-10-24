import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher'
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';



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

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, // Elements will become 130 % of current zize on hover
    transitionTime: 0.2, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0.1 // Zoom will take affect after 0.8 seconds
  }



  data = this.dataFetcher.getTagsForCloud();


  test(clicked: CloudData) {

    debugger

    console.log(clicked + 'is clicked!')
  }


}
