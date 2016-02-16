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
    var ImageSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fileService_1_1) {
                fileService_1 = fileService_1_1;
            }],
        execute: function() {
            ImageSelector = (function () {
                function ImageSelector() {
                    this.count = 0;
                    this.count = 0;
                }
                ImageSelector.prototype.incCount = function () {
                    this.count++;
                };
                ImageSelector.prototype.decCount = function () {
                    this.count--;
                };
                ImageSelector.prototype.editImage = function (img) {
                    console.log('edit');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', fileService_1.FileElement)
                ], ImageSelector.prototype, "imageElement", void 0);
                ImageSelector = __decorate([
                    core_1.Component({
                        selector: 'imageSelector',
                        template: "\n   <img src={{imageElement.path}} />\n <ul class=\"button-bar\">\n        <li>\n            <a href=\"\" class=\"\">\n                <i class=\"fa fa-angle-down fa-2x pull-left\"></i>\n            </a>\n            <a href=\"\">\n                <i class=\"fa fa-angle-up fa-2x pull-right\" ></i>\n            </a>\n        </li>\n    </ul>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageSelector);
                return ImageSelector;
            }());
            exports_1("ImageSelector", ImageSelector);
        }
    }
});
//# sourceMappingURL=imageSelector.js.map