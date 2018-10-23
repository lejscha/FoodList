import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FetchDataService } from '../../api-service/data-fetcher-service';
import DataFetcher from '../../api-service/data-fetcher';


//import { WordCloudComponent } from '../../components/word-cloud/word-cloud.component'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DataFetcher,
    FetchDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
