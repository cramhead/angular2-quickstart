import {Injectable} from 'angular2/core';
import {FILES} from './mock-files';

export enum FileType {
    File,
    Folder
}

export class FileElement {
  //  type: FileType;
    name: string;
    path: string;
}

@Injectable()
export class FileService {
    getFiles(): FileElement[] {
        return FILES;
    }
}