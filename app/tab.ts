import {Component, Input, OnInit} from 'angular2/core';
import {Tabs} from './tabs';
import {FileService, File} from './fileService';
import {ImageSelector} from './imageSelector';

@Component({
    selector: 'tab',
    template: `
        <div [hidden]="!active" class="gallery" >
            <a *ngFor="#imgFile of fileElements" href={{imgFile.path}} (click)="popEditor($event, imgFile)">
                <imageSelector [imageElement]="imgFile" ></imageSelector>
            </a>
        </div>`,
    providers: [FileService],
    directives: [ImageSelector]
})
export class Tab implements OnInit {
    @Input('tabTitle')
    title:string;
    public active:boolean = false;

    public fileElements:File[];

    constructor(private tabs:Tabs, private fileService:FileService) {
        tabs.addTab(this);
    }

    ngOnInit() {
        this.fileElements = this.fileService.getFiles();
        this.fileService.files$.subscribe(
            newFiles => { this.fileElements = newFiles; },
            error => { console.error('new error: ' + error); },
            () => { console.log('complete'); }
        );
    }

    popEditor(evt, img:File) {
        evt.preventDefault();
        console.log('editor');
    }
}