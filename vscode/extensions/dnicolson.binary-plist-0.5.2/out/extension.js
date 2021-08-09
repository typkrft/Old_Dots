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
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const plist_file_system_1 = require("./plist-file-system");
const file_1 = require("./file");
function activate(context) {
    let lastClosedPlistDocument;
    vscode.workspace.registerFileSystemProvider('plist', new plist_file_system_1.PlistFileSystemProvider(), {
        isCaseSensitive: process.platform === 'linux'
    });
    vscode.workspace.onDidCloseTextDocument(document => {
        if (document.uri.scheme === 'plist') {
            lastClosedPlistDocument = document;
        }
    });
    vscode.workspace.onDidOpenTextDocument((document) => __awaiter(this, void 0, void 0, function* () {
        if (lastClosedPlistDocument && lastClosedPlistDocument.fileName === document.fileName) {
            lastClosedPlistDocument = null;
            return;
        }
        const isPlistXmlOpen = vscode.workspace.textDocuments.filter(openDoc => openDoc.fileName === document.fileName && openDoc.uri.scheme === 'plist').length > 0;
        if (isPlistXmlOpen && document.uri.scheme === 'file') {
            return;
        }
        if (document.uri.scheme === 'file' && document.languageId === 'plist' && file_1.isBinaryPlist(document.fileName)) {
            vscode.window.showInformationMessage('Changes to this file will be saved as binary.');
            const uri = vscode.Uri.file(document.fileName).with({ scheme: 'plist' });
            try {
                const doc = yield vscode.workspace.openTextDocument(uri);
                yield vscode.window.showTextDocument(doc, { preview: false });
                vscode.languages.setTextDocumentLanguage(doc, 'xml');
            }
            catch (error) {
                console.error(error);
            }
        }
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map