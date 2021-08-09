(()=>{var t={891:(t,e,n)=>{var o=n(549),r=n(87),i=o.window,a=o.workspace,s="$(checklist)",u="$(zap)",l={"TODO:":{text:"TODO:",color:"#fff",backgroundColor:"#ffbd2a",overviewRulerColor:"rgba(255,189,42,0.8)"},"FIXME:":{text:"FIXME:",color:"#fff",backgroundColor:"#f06292",overviewRulerColor:"rgba(240,98,146,0.8)"}},c={color:"#2196f3",backgroundColor:"#ffeb3b"};function g(t){return Array.isArray(t)?"{"+t.join(",")+"}":"string"==typeof t?t:""}function h(t,e,n,o){for(var r=t.uri.toString(),i=r.substring(7,r.length),a=0;a<t.lineCount;a++){var s=t.lineAt(a).text,u=s.match(o);if(null!==u){e.hasOwnProperty(i)||(e[i]=[]);var l=f(s,u);l.length>500&&(l=l.substring(0,500).trim()+"...");var c=d(r,i,s,a,u),g={uri:c.uri,label:l,detail:c.relativePath,lineNum:a,fileName:c.absPath,startCol:c.startCol,endCol:c.endCol};n.push(g),e[i].push(g)}}}function p(t){if(i.outputChannel)if(i.outputChannel.clear(),0!==t.length){var e=a.getConfiguration("todohighlight").get("toggleURI",!1),n=r.platform();t.forEach((function(t,o){var r=["#"+(o+1)+"\t"+t.uri+"#"+(t.lineNum+1),"#"+(o+1)+"\t"+t.uri+":"+(t.lineNum+1)+":"+(t.startCol+1)],a=0;"linux"!=n&&"darwin"!=n||(a=1),e&&(a=+!a),i.outputChannel.appendLine(r[a]),i.outputChannel.appendLine("\t"+t.label+"\n")})),i.outputChannel.show()}else i.showInformationMessage("No results")}function f(t,e){return t.substring(t.indexOf(e[0]),t.length)}function d(t,e,n,o,r){var i=a.rootPath+"/",s=e.replace(i,""),u=n.indexOf(r[0]);return{uri:t,absPath:e,relativePath:s+" "+(o+1)+":"+(u+1),startCol:u,endCol:n.length}}function v(t){i.processing=!0,m(s,"0"),console.log("todohighlight err:",t)}function m(t,e,n){i.statusBarItem&&(i.statusBarItem.text=`${t} ${e}`||"",n&&(i.statusBarItem.tooltip=n),i.statusBarItem.show())}function x(t){return t.replace(/\(\?<[=|!][^)]*\)/g,"").replace(/((?:[^\\]{1}|^)(?:(?:[\\]{2})+)?)(\((?!\?[:|=|!]))([^)]*)(\))/g,"$1$2?:$3$4")}t.exports={DEFAULT_STYLE:c,getAssembledData:function(t,e,n){var o,r={},i=[];return t.forEach((t=>{var o=(t="string"==typeof t?{text:t}:t).text;o&&(n||(o=o.toUpperCase()),"TODO:"!=o&&"FIXME:"!=o||(t=Object.assign({},l[o],t)),r[o]=Object.assign({},c,e,t),t.regex&&i.push(i.pattern||o))})),i&&(o=i.join("|")),Object.keys(l).filter((t=>!o||!t.match(new RegExp(o)))).forEach((t=>{r[t]||(r[t]=Object.assign({},c,e,l[t]))})),r},chooseAnnotationType:function(t){return i.showQuickPick(t,{})},searchAnnotations:function(t,e,n){var o=a.getConfiguration("todohighlight"),r=g(o.get("include"))||"{**/*}",s=g(o.get("exclude")),l=o.get("maxFilesForSearch",5120),c=" Searching...";i.processing=!0,m(u,c),a.findFiles(r,s,l).then((function(o){if(o&&0!==o.length)for(var r=o.length,s=0,l=0,g={},p=[],f=0;f<r;f++)a.openTextDocument(o[f]).then((function(t){h(t,g,p,e),d()}),(function(t){v(t),d()}));else n({message:"No files found"});function d(){l++,s=Math.floor(l/r*100),m(u,s+"% "+c),(l===r||i.manullyCancel)&&(i.processing=!0,t.update("annotationList",p),n(null,g,p))}}),(function(t){v(t)}))},annotationsFound:function(t,e,n){if(t)return console.log("todohighlight err:",t),void m(s,"0");var o=n.length;m(s,o,o+" result(s) found"),p(n)},createStatusBarItem:function(){var t=i.createStatusBarItem(o.StatusBarAlignment.Left);return t.text="$(checklist)0",t.tooltip="List annotations",t.command="todohighlight.showOutputChannel",t},setStatusMsg:m,showOutputChannel:p,escapeRegExp:function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},escapeRegExpGroups:function(t){if(parseFloat(process.version.replace("v",""))>9){let e=/(?<!\\)(\()([^?]\w*(?:\\+\w)*)(\))?/g;return t.replace(e,"$1?:$2$3")}return x(t)},escapeRegExpGroupsLegacy:x}},87:t=>{"use strict";t.exports=require("os")},549:t=>{"use strict";t.exports=require("vscode")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}var o,r,i,a,s,u={};o=u,r=n(549),i=n(891),a=r.window,s=r.workspace,o.activate=function(t){var e,n,o,u,l,c,g=null,h=a.activeTextEditor,p=t.workspaceState,f=s.getConfiguration("todohighlight");function d(){if(h&&h.document){for(var t,n=h.document.getText(),i={};t=u.exec(n);){var s=h.document.positionAt(t.index),g=h.document.positionAt(t.index+t[0].length),p={range:new r.Range(s,g)},d=t[0];let n=t.slice(1).indexOf(d);d=Object.keys(o)[n]||d,e||(d=d.toUpperCase()),i[d]?i[d].push(p):i[d]=[p],c.trim()&&!o[d]&&(o[d]=a.createTextEditorDecorationType(l))}Object.keys(o).forEach((t=>{var e=f.get("isEnable")&&i[t]?i[t]:[],n=o[t];h.setDecorations(n,e)}))}}function v(t){var s=t.get("defaultStyle");c=t.get("keywordsPattern"),e=t.get("isCaseSensitive",!0),a.statusBarItem||(a.statusBarItem=i.createStatusBarItem()),a.outputChannel||(a.outputChannel=a.createOutputChannel("TodoHighlight")),o={},c.trim()?(l=Object.assign({},i.DEFAULT_STYLE,s,{overviewRulerLane:r.OverviewRulerLane.Right}),u=c):(n=i.getAssembledData(t.get("keywords"),s,e),Object.keys(n).forEach((t=>{e||(t=t.toUpperCase());var i=Object.assign({},{overviewRulerLane:r.OverviewRulerLane.Right},n[t]);i.overviewRulerColor||(i.overviewRulerColor=i.backgroundColor),o[t]=a.createTextEditorDecorationType(i)})),u=Object.keys(n).map((t=>{if(!n[t].regex)return`(${i.escapeRegExp(t)})`;let e=n[t].regex.pattern||t;return`(${i.escapeRegExpGroups(e)})`})).join("|")),u=new RegExp(u,"gi"),e&&(u=new RegExp(u,"g"))}function m(){g&&clearTimeout(g),g=setTimeout(d,0)}v(f),t.subscriptions.push(r.commands.registerCommand("todohighlight.toggleHighlight",(function(){f.update("isEnable",!f.get("isEnable"),!0).then((function(){m()}))}))),t.subscriptions.push(r.commands.registerCommand("todohighlight.listAnnotations",(function(){if(c.trim())i.searchAnnotations(p,u,i.annotationsFound);else{if(!n)return;var t=Object.keys(n);t.unshift("ALL"),i.chooseAnnotationType(t).then((function(t){if(t){var n=u;"ALL"!=t&&(t=i.escapeRegExp(t),n=new RegExp(t,e?"g":"gi")),i.searchAnnotations(p,n,i.annotationsFound)}}))}}))),t.subscriptions.push(r.commands.registerCommand("todohighlight.showOutputChannel",(function(){var t=p.get("annotationList",[]);i.showOutputChannel(t)}))),h&&m(),a.onDidChangeActiveTextEditor((function(t){h=t,t&&m()}),null,t.subscriptions),s.onDidChangeTextDocument((function(t){h&&t.document===h.document&&m()}),null,t.subscriptions),s.onDidChangeConfiguration((function(){(f=s.getConfiguration("todohighlight")).get("isEnable")&&(v(f),m())}),null,t.subscriptions)},module.exports=u})();
//# sourceMappingURL=extension.js.map