import {Component} from 'angular2/core';
import {Tabs} from './tabs';
import {Tab} from './tab';


@Component({
    selector: 'my-app',
    template: `
    <div class="container">

       <!-- Breadcrumbs -->
        <ul class="breadcrumbs">
        <li><a href="">Home</a></li>
        <li><a href="">Category</a></li>
        <li><a href="">Sub Category</a></li>
        <li><a href="">Page Title</a></li>
        </ul>
       <tabs>
            <tab tabTitle="Foo">
                Content of tab Foo
            </tab>
            <tab tabTitle="Bar">
                Content of tab Bar
            </tab>
        </tabs>
    </div>
    `,
    directives: [Tabs, Tab]
})
export class AppComponent {
}