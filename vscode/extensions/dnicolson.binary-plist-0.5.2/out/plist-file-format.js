"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlistFileFormat = void 0;
const vscode = require("vscode");
const child_process_1 = require("child_process");
const hasbin = require('hasbin');
const plist = require('simple-plist');
class PlutilParser {
    toXml(uri) {
        return child_process_1.spawnSync('plutil', ['-convert', 'xml1', uri, '-o', '-']).stdout;
    }
    toBinary(uri, xmlString) {
        return __awaiter(this, void 0, void 0, function* () {
            const output = child_process_1.spawnSync('plutil', ['-convert', 'binary1', '-o', uri, '-'], { input: xmlString });
            if (String(output.stdout).length) {
                return Promise.reject(String(output.stdout));
            }
            if (String(output.stderr).length) {
                return Promise.reject(String(output.stderr));
            }
        });
    }
}
class PythonParser {
    toXml(uri) {
        return child_process_1.spawnSync(hasbin.sync('python3') ? 'python3' : 'python', ['-c', `import plistlib;\nwith open("""${uri.replace(/\\/g, '\\\\')}""", 'rb') as fp: pl = plistlib.load(fp); print(plistlib.dumps(pl).decode('utf-8'))`]).stdout;
    }
    toBinary(uri, xmlString) {
        return __awaiter(this, void 0, void 0, function* () {
            const python = `
import sys, os, tempfile, shutil, plistlib

fp = tempfile.NamedTemporaryFile(mode='wb', delete=False)
pl = plistlib.loads(sys.stdin.read().encode('utf-8'), fmt=plistlib.FMT_XML)
plistlib.dump(pl, fp, fmt=plistlib.FMT_BINARY)
path = fp.name
fp.close()
shutil.copy(path, """${uri.replace(/\\/g, '\\\\')}""")
os.remove(path)
`;
            const output = child_process_1.spawnSync(hasbin.sync('python3') ? 'python3' : 'python', ['-c', python], { input: xmlString });
            if (String(output.stderr).length) {
                return Promise.reject(String(output.stderr));
            }
        });
    }
}
class NodeParser {
    toXml(uri) {
        return plist.stringify(plist.readFileSync(uri));
    }
    toBinary(uri, xmlString) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield vscode.window.showQuickPick(['Continue', 'Cancel'], {
                placeHolder: 'Values of type real that are whole numbers will be saved as type integer. Continue?'
            });
            if (result !== 'Continue') {
                return Promise.reject('Save cancelled.');
            }
            const originalConsoleError = console.error;
            const originalConsoleWarn = console.warn;
            console.error = message => { throw new Error(`An error occurred saving the file: ${message}`); };
            console.warn = message => { throw new Error(`An error occurred saving the file: ${message}`); };
            try {
                const object = plist.parse(xmlString);
                try {
                    plist.writeBinaryFileSync(uri, object);
                }
                catch (message) {
                    throw new Error(`An error occurred saving the file: ${message}`);
                }
            }
            catch (message) {
                throw new Error(`An error occurred parsing the XML: ${message}`);
            }
            console.error = originalConsoleError;
            console.warn = originalConsoleWarn;
        });
    }
}
class PlistFileFormat {
    constructor(parser = '') {
        if (parser === 'PLUTIL' || this._hasPlutil()) {
            this.engine = new PlutilParser();
        }
        else if (parser === 'PYTHON' || this._hasPlistlib()) {
            this.engine = new PythonParser();
        }
        else {
            this.engine = new NodeParser();
        }
    }
    _hasPlutil() {
        return hasbin.sync('plutil');
    }
    _hasPlistlib() {
        const output = hasbin.sync('python') && child_process_1.spawnSync('python', ['-c', 'import plistlib; plistlib.load']);
        return String(output.stderr).length === 0 || hasbin.sync('python3');
    }
    binaryToXml(uri) {
        return this.engine.toXml(uri);
    }
    xmlToBinary(uri, xmlString) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.engine.toBinary(uri, xmlString);
        });
    }
}
exports.PlistFileFormat = PlistFileFormat;
//# sourceMappingURL=plist-file-format.js.map