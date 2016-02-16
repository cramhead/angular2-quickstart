import {Injectable} from 'angular2/core';
import {FILES} from './mock-files';
import {File} from './models/file';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileService {
    files$: Observable<Array<File>>; // the observable object that others will observe
    private _filesObserver: any;

    constructor(){

       this.files$ = new Observable(observer => this._filesObserver = observer).share();
    }
    getFiles(): File[] {
        return FILES;
    }
}