import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { AppSetting } from '../providers/config/app-setting/app-setting';

platformBrowserDynamic().bootstrapModule(AppModule, [AppSetting]);
