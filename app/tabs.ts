import {Component, Input} from 'angular2/core';
import {Tab} from './Tab';
import {FileElement} from './fileService';

@Component({
    selector: 'tabs',
    template: `
        <ul class="tabs left">
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.current]="tab.active" class="item">
            <a href="#">{{ tab.title }}</a>
            </li>
        </ul>
        <div class="tab-content clearfix">
            <ng-content></ng-content>
        </div>
        `
})
export class Tabs {
    tabs: Tab[] = [];
    @Input() selectedImage: FileElement;

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tab: Tab) {
        this.tabs.forEach((tab:Tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
}
