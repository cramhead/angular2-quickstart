System.register(['angular2/core', './fileService'], function(exports_1) {
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
    var core_1, fileService_1;
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fileService_1_1) {
                fileService_1 = fileService_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs() {
                    this.tabs = [];
                }
                Tabs.prototype.addTab = function (tab) {
                    if (this.tabs.length === 0) {
                        tab.active = true;
                    }
                    this.tabs.push(tab);
                };
                Tabs.prototype.selectTab = function (tab) {
                    this.tabs.forEach(function (tab) {
                        tab.active = false;
                    });
                    tab.active = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', fileService_1.FileElement)
                ], Tabs.prototype, "selectedImage", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n        <ul class=\"tabs left\">\n            <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.current]=\"tab.active\" class=\"item\">\n            <a href=\"#\">{{ tab.title }}</a>\n            </li>\n        </ul>\n        <div class=\"tab-content clearfix\">\n            <ng-content></ng-content>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.js.map