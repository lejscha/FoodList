var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import DataFetcher from '../../api-service/data-fetcher';
var WordCloudComponent = /** @class */ (function () {
    function WordCloudComponent(dataFetcher) {
        this.dataFetcher = dataFetcher;
        this.options = {
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
        this.data = this.dataFetcher.getTagsForCloud();
    }
    WordCloudComponent = __decorate([
        Component({
            selector: 'word-cloud',
            templateUrl: './word-cloud.component.html',
            styleUrls: ['./word-cloud.component.less'],
        }),
        __metadata("design:paramtypes", [DataFetcher])
    ], WordCloudComponent);
    return WordCloudComponent;
}());
export { WordCloudComponent };
//# sourceMappingURL=word-cloud.component.js.map