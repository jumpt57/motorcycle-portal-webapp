import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'jquery';
import 'materialize-css';

platformBrowserDynamic().bootstrapModule(AppModule);
