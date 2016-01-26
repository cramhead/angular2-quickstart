import {Component, Input, OnInit} from 'angular2/core';
import {Tabs} from './tabs';
import {FileService, File} from './fileService';

@Component({
    selector: 'tab',
    template: `
        <div [hidden]="!active" class="gallery" >
            <a *ngFor="#img of files" href={{img.path}}>
                <img src={{img.path}} />
            </a>
        <div>`,
    providers: [FileService]
})
export class Tab implements OnInit {
    @Input('tabTitle') title: string;
    @Input('active') active: boolean;

    files: File[];
    constructor(private tabs: Tabs, private fileService: FileService) {
        tabs.addTab(this);
    }

    ngOnInit() {
       this.files = this.fileService.getFiles();
    }
}