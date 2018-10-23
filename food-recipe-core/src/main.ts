import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/components/main/app.module';
import { WordCloudModule } from './app/components/word-cloud/word-cloud.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(WordCloudModule)
  .catch(err => console.error(err));

