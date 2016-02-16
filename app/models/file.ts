export enum FileType {
    File,
    Folder
}

export class File{
  constructor(public name: string, public path:string) {}
}
