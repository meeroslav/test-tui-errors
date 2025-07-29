import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { randomFunction } from '../../test-angular2-e2e/src/test';

console.log(randomFunction());

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

