System.register(['angular2/core', './tabs', './fileService', './imageSelector'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_1, fileService_1, imageSelector_1;
    var Tab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (fileService_1_1) {
                fileService_1 = fileService_1_1;
            },
            function (imageSelector_1_1) {
                imageSelector_1 = imageSelector_1_1;
            }],
        execute: function() {
            Tab = (function () {
                function Tab(tabs, fileService) {
                    this.tabs = tabs;
                    this.fileService = fileService;
                    this.active = false;
                    tabs.addTab(this);
                }
                Tab.prototype.ngOnInit = function () {
                    this.fileElements = this.fileService.getFiles();
                };
                Tab.prototype.popEditor = function (evt, img) {
                    evt.preventDefault();
                    console.log('editor');
                };
                __decorate([
                    core_1.Input('tabTitle'), 
                    __metadata('design:type', String)
                ], Tab.prototype, "title", void 0);
                Tab = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        template: "\n        <div [hidden]=\"!active\" class=\"gallery\" >\n            <a *ngFor=\"#imgFile of fileElements\" href={{imgFile.path}} (click)=\"popEditor($event, imgFile)\">\n                <imageSelector [imageElement]=\"imgFile\" ></imageSelector>\n            </a>\n        </div>",
                        providers: [fileService_1.FileService],
                        directives: [imageSelector_1.ImageSelector]
                    }), 
                    __metadata('design:paramtypes', [tabs_1.Tabs, fileService_1.FileService])
                ], Tab);
                return Tab;
            }());
            exports_1("Tab", Tab);
        }
    }
});
//# sourceMappingURL=Tab.js.map