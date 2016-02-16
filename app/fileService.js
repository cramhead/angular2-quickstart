System.register(['angular2/core', './mock-files'], function(exports_1) {
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
    var core_1, mock_files_1;
    var FileType, FileElement, FileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_files_1_1) {
                mock_files_1 = mock_files_1_1;
            }],
        execute: function() {
            (function (FileType) {
                FileType[FileType["File"] = 0] = "File";
                FileType[FileType["Folder"] = 1] = "Folder";
            })(FileType || (FileType = {}));
            exports_1("FileType", FileType);
            FileElement = (function () {
                function FileElement() {
                }
                return FileElement;
            }());
            exports_1("FileElement", FileElement);
            FileService = (function () {
                function FileService() {
                }
                FileService.prototype.getFiles = function () {
                    return mock_files_1.FILES;
                };
                FileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FileService);
                return FileService;
            }());
            exports_1("FileService", FileService);
        }
    }
});
//# sourceMappingURL=fileService.js.map