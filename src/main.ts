import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {registerLicense} from '@syncfusion/ej2-base';

if (environment.production) {
  enableProdMode();
}

registerLicense("ORg4AjUWIQA/Gnt2VVhhQlFac1pJWnxIfUx0RWFbb19yflBHalxZVBYiSV9jS3xTcERgWH1bdHFTT2NeWQ==");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
