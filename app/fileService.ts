import {Injectable} from 'angular2/core';
import {FILES} from './mock-files';
import {File} from './models/file';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileService {
    files$:Observable<Array<File>>; // the observable object that others will observe
    private _filesObserver:any;
    dataStore:{ files: File[]};

    constructor() {
        this.files$ = new Observable(observer => this._filesObserver = observer).share();
        this.dataStore = {
            files: [{name: 'img', path: 'http://placehold.it/100x100/4D99E0/ffffff.png'}]
        };
    }

    /**
     * Use arrow function to capture this!
     */
    pushFile = () => {
        console.log('pushing');
        this.dataStore.files.push({name: 'img', path: 'http://placehold.it/100x100/4D99E0/ffffff.png'});
        //   this._filesObserver.next(this._dataStore.files);
    };

    getFiles():File[] {
        setInterval(this.pushFile, 1000);
        return this.dataStore.files = FILES.map(function (file) {
            return file;
        });
    }


}