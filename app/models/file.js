System.register([], function(exports_1) {
    "use strict";
    var FileType, File;
    return {
        setters:[],
        execute: function() {
            (function (FileType) {
                FileType[FileType["File"] = 0] = "File";
                FileType[FileType["Folder"] = 1] = "Folder";
            })(FileType || (FileType = {}));
            exports_1("FileType", FileType);
            File = (function () {
                function File() {
                }
                return File;
            }());
            exports_1("File", File);
        }
    }
});
//# sourceMappingURL=file.js.map