import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WordCloudComponent } from './word-cloud.component';
import { FetchDataService } from '../../api-service/data-fetcher-service'
import DataFetcher from '../../api-service/data-fetcher'



@NgModule({
  declarations: [
    WordCloudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataFetcher,
    FetchDataService
  ],
  bootstrap: [WordCloudComponent]
})

export class AppModule { }
