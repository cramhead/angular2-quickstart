System.register(['angular2/core', './mock-files', 'rxjs/add/operator/share', 'rxjs/Observable'], function(exports_1) {
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
    var core_1, mock_files_1, Observable_1;
    var FileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_files_1_1) {
                mock_files_1 = mock_files_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            FileService = (function () {
                function FileService() {
                    var _this = this;
                    this.pushFile = function () {
                        console.log('pushing');
                        _this.dataStore.files.push({ name: 'img', path: 'http://placehold.it/100x100/4D99E0/ffffff.png' });
                        //   this._filesObserver.next(this._dataStore.files);
                    };
                    this.files$ = new Observable_1.Observable(function (observer) { return _this._filesObserver = observer; }).share();
                    this.dataStore = {
                        files: [{ name: 'img', path: 'http://placehold.it/100x100/4D99E0/ffffff.png' }]
                    };
                }
                FileService.prototype.getFiles = function () {
                    setInterval(this.pushFile, 1000);
                    return this.dataStore.files = mock_files_1.FILES.map(function (file) {
                        return file;
                    });
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