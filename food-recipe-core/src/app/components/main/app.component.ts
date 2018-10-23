import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent {

  constructor(private readonly dataFetcher: DataFetcher) { }

  title = 'Våra recept';
  recipies = this.dataFetcher.getRecipies();
  tags = this.dataFetcher.getTags();
}
