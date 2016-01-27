import {Component, Input} from 'angular2/core';
import {FileElement} from './fileService';

@Component({
    selector: 'imageSelector',
    template: `
   <img src={{imageElement.path}} />
 <ul class="button-bar">
        <li>
            <a href="" class="">
                <i class="fa fa-angle-down fa-2x pull-left"></i>
            </a>
            <a href="">
                <i class="fa fa-angle-up fa-2x pull-right" ></i>
            </a>
        </li>
    </ul>
    `,
})
export class ImageSelector {
    @Input() imageElement: FileElement;

    count: number = 0;

    constructor() {
        this.count = 0;
    }

    incCount() {
        this.count++;
    }
    decCount() {
        this.count--;
    }
}