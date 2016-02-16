import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FileService} from './fileService';

bootstrap(AppComponent, [FileService]);
