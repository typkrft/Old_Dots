"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSyntax = void 0;
const palette_1 = require("../palette");
const default_1 = require("./default");
const italic_1 = require("./italic");
function getSyntax(configuration, variant) {
    let palette = palette_1.getPalette(configuration, variant);
    let syntax;
    if (configuration.italicKeywords === true) {
        syntax = italic_1.getItalicSyntax(palette, configuration.italicComments);
    }
    else {
        syntax = default_1.getDefaultSyntax(palette, configuration.italicComments);
    }
    return syntax;
}
exports.getSyntax = getSyntax;
//# sourceMappingURL=index.js.map