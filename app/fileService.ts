import {Injectable} from 'angular2/core';
import {FILES} from './mock-files';

export enum FileType {
    File,
    Folder
};
export class File {
  //  type: FileType;
    name: string;
    path: string;
}

@Injectable()
export class FileService {
    getFiles(): File[] {
        return FILES;
    }
}