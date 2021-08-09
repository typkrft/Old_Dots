"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBinaryPlist = void 0;
const fs = require("fs");
exports.isBinaryPlist = (fileName) => {
    const BUFFER_LENGTH = 8;
    const fd = fs.openSync(fileName, 'r');
    const buffer = Buffer.alloc(BUFFER_LENGTH);
    fs.readSync(fd, buffer, 0, BUFFER_LENGTH, 0);
    return buffer.toString() === 'bplist00';
};
//# sourceMappingURL=file.js.map