import {Component, Input, OnInit} from 'angular2/core';
import {Tabs} from './tabs';
import {FileService, FileElement} from './fileService';
import {ImageSelector} from './imageSelector';

@Component({
    selector: 'tab',
    template: `
        <div [hidden]="!active" class="gallery" >
            <a *ngFor="#imgFile of fileElements" href={{imgFile.path}} (click)="popEditor">
                <imageSelector [imageElement]="imgFile" ></imageSelector>
            </a>
        <div>`,
    providers: [FileService],
    directives: [ImageSelector]
})
export class Tab implements OnInit {
    @Input('tabTitle') title: string;
    public active: boolean;

    public fileElements: FileElement[];
    constructor(private tabs: Tabs, private fileService: FileService) {
        tabs.addTab(this);
    }

    ngOnInit() {
       this.fileElements = this.fileService.getFiles();
    }
    popEditor(evt) {
        evt.preventDefault();
        console.log('editor');
    }
}