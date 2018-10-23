var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WordCloudComponent } from './word-cloud.component';
import { FetchDataService } from '../../api-service/data-fetcher-service';
import DataFetcher from '../../api-service/data-fetcher';
import { TagCloudModule } from 'angular-tag-cloud-module';
var WordCloudModule = /** @class */ (function () {
    function WordCloudModule() {
    }
    WordCloudModule = __decorate([
        NgModule({
            declarations: [
                WordCloudComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                TagCloudModule
            ],
            providers: [
                DataFetcher,
                FetchDataService
            ],
            bootstrap: [WordCloudComponent]
        })
    ], WordCloudModule);
    return WordCloudModule;
}());
export { WordCloudModule };
//# sourceMappingURL=word-cloud.module.js.map