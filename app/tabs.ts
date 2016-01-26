import {Component} from 'angular2/core';
import {Tab} from './Tab';

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

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
}
