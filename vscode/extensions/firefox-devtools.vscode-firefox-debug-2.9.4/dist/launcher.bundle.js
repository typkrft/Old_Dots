(()=>{var t={4244:t=>{t.exports=t=>{const e=process.versions.node.split(".").map((t=>parseInt(t,10)));return t=t.split(".").map((t=>parseInt(t,10))),e[0]>t[0]||e[0]===t[0]&&(e[1]>t[1]||e[1]===t[1]&&e[2]>=t[2])}},7630:(t,e,n)=>{"use strict";const r=n(5997),i=n(5622),o=n(3056).mkdirsSync,c=n(1465).utimesMillisSync,s=n(2520);function u(t,e,n,o){if(!o.filter||o.filter(e,n))return function(t,e,n,o){const c=(o.dereference?r.statSync:r.lstatSync)(e);return c.isDirectory()?function(t,e,n,i,o){if(!e)return function(t,e,n,i){return r.mkdirSync(n),l(e,n,i),f(n,t)}(t.mode,n,i,o);if(e&&!e.isDirectory())throw new Error(`Cannot overwrite non-directory '${i}' with directory '${n}'.`);return l(n,i,o)}(c,t,e,n,o):c.isFile()||c.isCharacterDevice()||c.isBlockDevice()?function(t,e,n,i,o){return e?function(t,e,n,i){if(i.overwrite)return r.unlinkSync(n),a(t,e,n,i);if(i.errorOnExist)throw new Error(`'${n}' already exists`)}(t,n,i,o):a(t,n,i,o)}(c,t,e,n,o):c.isSymbolicLink()?function(t,e,n,o){let c=r.readlinkSync(e);if(o.dereference&&(c=i.resolve(process.cwd(),c)),t){let t;try{t=r.readlinkSync(n)}catch(t){if("EINVAL"===t.code||"UNKNOWN"===t.code)return r.symlinkSync(c,n);throw t}if(o.dereference&&(t=i.resolve(process.cwd(),t)),s.isSrcSubdir(c,t))throw new Error(`Cannot copy '${c}' to a subdirectory of itself, '${t}'.`);if(r.statSync(n).isDirectory()&&s.isSrcSubdir(t,c))throw new Error(`Cannot overwrite '${t}' with '${c}'.`);return function(t,e){return r.unlinkSync(e),r.symlinkSync(t,e)}(c,n)}return r.symlinkSync(c,n)}(t,e,n,o):void 0}(t,e,n,o)}function a(t,e,n,i){return r.copyFileSync(e,n),i.preserveTimestamps&&function(t,e,n){(function(t){return 0==(128&t)})(t)&&function(t,e){f(t,128|e)}(n,t),function(t,e){const n=r.statSync(t);c(e,n.atime,n.mtime)}(e,n)}(t.mode,e,n),f(n,t.mode)}function f(t,e){return r.chmodSync(t,e)}function l(t,e,n){r.readdirSync(t).forEach((r=>function(t,e,n,r){const o=i.join(e,t),c=i.join(n,t),{destStat:a}=s.checkPathsSync(o,c,"copy");return u(a,o,c,r)}(r,t,e,n)))}t.exports=function(t,e,n){"function"==typeof n&&(n={filter:n}),(n=n||{}).clobber=!("clobber"in n)||!!n.clobber,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&"ia32"===process.arch&&console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");const{srcStat:c,destStat:a}=s.checkPathsSync(t,e,"copy");return s.checkParentPathsSync(t,c,e,"copy"),function(t,e,n,c){if(c.filter&&!c.filter(e,n))return;const s=i.dirname(n);return r.existsSync(s)||o(s),u(t,e,n,c)}(a,t,e,n)}},2928:(t,e,n)=>{"use strict";t.exports={copySync:n(7630)}},2629:(t,e,n)=>{"use strict";const r=n(5997),i=n(5622),o=n(3056).mkdirs,c=n(3705).pathExists,s=n(1465).utimesMillis,u=n(2520);function a(t,e,n,r,s){const u=i.dirname(n);c(u,((i,c)=>i?s(i):c?l(t,e,n,r,s):void o(u,(i=>i?s(i):l(t,e,n,r,s)))))}function f(t,e,n,r,i,o){Promise.resolve(i.filter(n,r)).then((c=>c?t(e,n,r,i,o):o()),(t=>o(t)))}function l(t,e,n,r,i){return r.filter?f(y,t,e,n,r,i):y(t,e,n,r,i)}function y(t,e,n,o,c){(o.dereference?r.stat:r.lstat)(e,((s,a)=>s?c(s):a.isDirectory()?function(t,e,n,i,o,c){return e?e&&!e.isDirectory()?c(new Error(`Cannot overwrite non-directory '${i}' with directory '${n}'.`)):h(n,i,o,c):function(t,e,n,i,o){r.mkdir(n,(r=>{if(r)return o(r);h(e,n,i,(e=>e?o(e):m(n,t,o)))}))}(t.mode,n,i,o,c)}(a,t,e,n,o,c):a.isFile()||a.isCharacterDevice()||a.isBlockDevice()?function(t,e,n,i,o,c){return e?function(t,e,n,i,o){if(!i.overwrite)return i.errorOnExist?o(new Error(`'${n}' already exists`)):o();r.unlink(n,(r=>r?o(r):d(t,e,n,i,o)))}(t,n,i,o,c):d(t,n,i,o,c)}(a,t,e,n,o,c):a.isSymbolicLink()?function(t,e,n,o,c){r.readlink(e,((e,s)=>e?c(e):(o.dereference&&(s=i.resolve(process.cwd(),s)),t?void r.readlink(n,((e,a)=>e?"EINVAL"===e.code||"UNKNOWN"===e.code?r.symlink(s,n,c):c(e):(o.dereference&&(a=i.resolve(process.cwd(),a)),u.isSrcSubdir(s,a)?c(new Error(`Cannot copy '${s}' to a subdirectory of itself, '${a}'.`)):t.isDirectory()&&u.isSrcSubdir(a,s)?c(new Error(`Cannot overwrite '${a}' with '${s}'.`)):function(t,e,n){r.unlink(e,(i=>i?n(i):r.symlink(t,e,n)))}(s,n,c)))):r.symlink(s,n,c))))}(t,e,n,o,c):void 0))}function d(t,e,n,i,o){r.copyFile(e,n,(r=>r?o(r):i.preserveTimestamps?function(t,e,n,r){return function(t){return 0==(128&t)}(t)?function(t,e,n){return m(t,128|e,n)}(n,t,(i=>i?r(i):p(t,e,n,r))):p(t,e,n,r)}(t.mode,e,n,o):m(n,t.mode,o)))}function p(t,e,n,i){!function(t,e,n){r.stat(t,((t,r)=>t?n(t):s(e,r.atime,r.mtime,n)))}(e,n,(e=>e?i(e):m(n,t,i)))}function m(t,e,n){return r.chmod(t,e,n)}function h(t,e,n,i){r.readdir(t,((r,o)=>r?i(r):S(o,t,e,n,i)))}function S(t,e,n,r,o){const c=t.pop();return c?function(t,e,n,r,o,c){const s=i.join(n,e),a=i.join(r,e);u.checkPaths(s,a,"copy",((e,i)=>{if(e)return c(e);const{destStat:u}=i;l(u,s,a,o,(e=>e?c(e):S(t,n,r,o,c)))}))}(t,c,e,n,r,o):o()}t.exports=function(t,e,n,r){"function"!=typeof n||r?"function"==typeof n&&(n={filter:n}):(r=n,n={}),r=r||function(){},(n=n||{}).clobber=!("clobber"in n)||!!n.clobber,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&"ia32"===process.arch&&console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"),u.checkPaths(t,e,"copy",((i,o)=>{if(i)return r(i);const{srcStat:c,destStat:s}=o;u.checkParentPaths(t,c,e,"copy",(i=>i?r(i):n.filter?f(a,s,t,e,n,r):a(s,t,e,n,r)))}))}},1627:(t,e,n)=>{"use strict";const r=n(533).E;t.exports={copy:r(n(2629))}},983:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5997),o=n(5622),c=n(3056),s=n(6222),u=r((function(t,e){e=e||function(){},i.readdir(t,((n,r)=>{if(n)return c.mkdirs(t,e);r=r.map((e=>o.join(t,e))),function t(){const n=r.pop();if(!n)return e();s.remove(n,(n=>{if(n)return e(n);t()}))}()}))}));function a(t){let e;try{e=i.readdirSync(t)}catch{return c.mkdirsSync(t)}e.forEach((e=>{e=o.join(t,e),s.removeSync(e)}))}t.exports={emptyDirSync:a,emptydirSync:a,emptyDir:u,emptydir:u}},3113:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5622),o=n(5997),c=n(3056);t.exports={createFile:r((function(t,e){function n(){o.writeFile(t,"",(t=>{if(t)return e(t);e()}))}o.stat(t,((r,s)=>{if(!r&&s.isFile())return e();const u=i.dirname(t);o.stat(u,((t,r)=>{if(t)return"ENOENT"===t.code?c.mkdirs(u,(t=>{if(t)return e(t);n()})):e(t);r.isDirectory()?n():o.readdir(u,(t=>{if(t)return e(t)}))}))}))})),createFileSync:function(t){let e;try{e=o.statSync(t)}catch{}if(e&&e.isFile())return;const n=i.dirname(t);try{o.statSync(n).isDirectory()||o.readdirSync(n)}catch(t){if(!t||"ENOENT"!==t.code)throw t;c.mkdirsSync(n)}o.writeFileSync(t,"")}}},5966:(t,e,n)=>{"use strict";const r=n(3113),i=n(5467),o=n(6813);t.exports={createFile:r.createFile,createFileSync:r.createFileSync,ensureFile:r.createFile,ensureFileSync:r.createFileSync,createLink:i.createLink,createLinkSync:i.createLinkSync,ensureLink:i.createLink,ensureLinkSync:i.createLinkSync,createSymlink:o.createSymlink,createSymlinkSync:o.createSymlinkSync,ensureSymlink:o.createSymlink,ensureSymlinkSync:o.createSymlinkSync}},5467:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5622),o=n(5997),c=n(3056),s=n(3705).pathExists;t.exports={createLink:r((function(t,e,n){function r(t,e){o.link(t,e,(t=>{if(t)return n(t);n(null)}))}s(e,((u,a)=>u?n(u):a?n(null):void o.lstat(t,(o=>{if(o)return o.message=o.message.replace("lstat","ensureLink"),n(o);const u=i.dirname(e);s(u,((i,o)=>i?n(i):o?r(t,e):void c.mkdirs(u,(i=>{if(i)return n(i);r(t,e)}))))}))))})),createLinkSync:function(t,e){if(o.existsSync(e))return;try{o.lstatSync(t)}catch(t){throw t.message=t.message.replace("lstat","ensureLink"),t}const n=i.dirname(e);return o.existsSync(n)||c.mkdirsSync(n),o.linkSync(t,e)}}},9460:(t,e,n)=>{"use strict";const r=n(5622),i=n(5997),o=n(3705).pathExists;t.exports={symlinkPaths:function(t,e,n){if(r.isAbsolute(t))return i.lstat(t,(e=>e?(e.message=e.message.replace("lstat","ensureSymlink"),n(e)):n(null,{toCwd:t,toDst:t})));{const c=r.dirname(e),s=r.join(c,t);return o(s,((e,o)=>e?n(e):o?n(null,{toCwd:s,toDst:t}):i.lstat(t,(e=>e?(e.message=e.message.replace("lstat","ensureSymlink"),n(e)):n(null,{toCwd:t,toDst:r.relative(c,t)})))))}},symlinkPathsSync:function(t,e){let n;if(r.isAbsolute(t)){if(n=i.existsSync(t),!n)throw new Error("absolute srcpath does not exist");return{toCwd:t,toDst:t}}{const o=r.dirname(e),c=r.join(o,t);if(n=i.existsSync(c),n)return{toCwd:c,toDst:t};if(n=i.existsSync(t),!n)throw new Error("relative srcpath does not exist");return{toCwd:t,toDst:r.relative(o,t)}}}}},9002:(t,e,n)=>{"use strict";const r=n(5997);t.exports={symlinkType:function(t,e,n){if(n="function"==typeof e?e:n,e="function"!=typeof e&&e)return n(null,e);r.lstat(t,((t,r)=>{if(t)return n(null,"file");e=r&&r.isDirectory()?"dir":"file",n(null,e)}))},symlinkTypeSync:function(t,e){let n;if(e)return e;try{n=r.lstatSync(t)}catch{return"file"}return n&&n.isDirectory()?"dir":"file"}}},6813:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5622),o=n(5997),c=n(3056),s=c.mkdirs,u=c.mkdirsSync,a=n(9460),f=a.symlinkPaths,l=a.symlinkPathsSync,y=n(9002),d=y.symlinkType,p=y.symlinkTypeSync,m=n(3705).pathExists;t.exports={createSymlink:r((function(t,e,n,r){r="function"==typeof n?n:r,n="function"!=typeof n&&n,m(e,((c,u)=>c?r(c):u?r(null):void f(t,e,((c,u)=>{if(c)return r(c);t=u.toDst,d(u.toCwd,n,((n,c)=>{if(n)return r(n);const u=i.dirname(e);m(u,((n,i)=>n?r(n):i?o.symlink(t,e,c,r):void s(u,(n=>{if(n)return r(n);o.symlink(t,e,c,r)}))))}))}))))})),createSymlinkSync:function(t,e,n){if(o.existsSync(e))return;const r=l(t,e);t=r.toDst,n=p(r.toCwd,n);const c=i.dirname(e);return o.existsSync(c)||u(c),o.symlinkSync(t,e,n)}}},5109:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5997),o=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter((t=>"function"==typeof i[t]));Object.keys(i).forEach((t=>{"promises"!==t&&(e[t]=i[t])})),o.forEach((t=>{e[t]=r(i[t])})),e.exists=function(t,e){return"function"==typeof e?i.exists(t,e):new Promise((e=>i.exists(t,e)))},e.read=function(t,e,n,r,o,c){return"function"==typeof c?i.read(t,e,n,r,o,c):new Promise(((c,s)=>{i.read(t,e,n,r,o,((t,e,n)=>{if(t)return s(t);c({bytesRead:e,buffer:n})}))}))},e.write=function(t,e,...n){return"function"==typeof n[n.length-1]?i.write(t,e,...n):new Promise(((r,o)=>{i.write(t,e,...n,((t,e,n)=>{if(t)return o(t);r({bytesWritten:e,buffer:n})}))}))},"function"==typeof i.writev&&(e.writev=function(t,e,...n){return"function"==typeof n[n.length-1]?i.writev(t,e,...n):new Promise(((r,o)=>{i.writev(t,e,...n,((t,e,n)=>{if(t)return o(t);r({bytesWritten:e,buffers:n})}))}))}),"function"==typeof i.realpath.native&&(e.realpath.native=r(i.realpath.native))},5978:(t,e,n)=>{"use strict";t.exports={...n(5109),...n(2928),...n(1627),...n(983),...n(5966),...n(6916),...n(3056),...n(9121),...n(1784),...n(8587),...n(3705),...n(6222)};const r=n(5747);Object.getOwnPropertyDescriptor(r,"promises")&&Object.defineProperty(t.exports,"promises",{get:()=>r.promises})},6916:(t,e,n)=>{"use strict";const r=n(533).p,i=n(619);i.outputJson=r(n(5394)),i.outputJsonSync=n(8154),i.outputJSON=i.outputJson,i.outputJSONSync=i.outputJsonSync,i.writeJSON=i.writeJson,i.writeJSONSync=i.writeJsonSync,i.readJSON=i.readJson,i.readJSONSync=i.readJsonSync,t.exports=i},619:(t,e,n)=>{"use strict";const r=n(173);t.exports={readJson:r.readFile,readJsonSync:r.readFileSync,writeJson:r.writeFile,writeJsonSync:r.writeFileSync}},8154:(t,e,n)=>{"use strict";const{stringify:r}=n(3779),{outputFileSync:i}=n(8587);t.exports=function(t,e,n){const o=r(e,n);i(t,o,n)}},5394:(t,e,n)=>{"use strict";const{stringify:r}=n(3779),{outputFile:i}=n(8587);t.exports=async function(t,e,n={}){const o=r(e,n);await i(t,o,n)}},3056:(t,e,n)=>{"use strict";const r=n(533).p,{makeDir:i,makeDirSync:o}=n(5889),c=r(i);t.exports={mkdirs:c,mkdirsSync:o,mkdirp:c,mkdirpSync:o,ensureDir:c,ensureDirSync:o}},5889:(t,e,n)=>{"use strict";const r=n(5109),i=n(5622),o=n(4244)("10.12.0"),c=t=>{if("win32"===process.platform&&/[<>:"|?*]/.test(t.replace(i.parse(t).root,""))){const e=new Error(`Path contains invalid characters: ${t}`);throw e.code="EINVAL",e}},s=t=>("number"==typeof t&&(t={mode:t}),{mode:511,...t}),u=t=>{const e=new Error(`operation not permitted, mkdir '${t}'`);return e.code="EPERM",e.errno=-4048,e.path=t,e.syscall="mkdir",e};t.exports.makeDir=async(t,e)=>{if(c(t),e=s(e),o){const n=i.resolve(t);return r.mkdir(n,{mode:e.mode,recursive:!0})}const n=async t=>{try{await r.mkdir(t,e.mode)}catch(e){if("EPERM"===e.code)throw e;if("ENOENT"===e.code){if(i.dirname(t)===t)throw u(t);if(e.message.includes("null bytes"))throw e;return await n(i.dirname(t)),n(t)}try{if(!(await r.stat(t)).isDirectory())throw new Error("The path is not a directory")}catch{throw e}}};return n(i.resolve(t))},t.exports.makeDirSync=(t,e)=>{if(c(t),e=s(e),o){const n=i.resolve(t);return r.mkdirSync(n,{mode:e.mode,recursive:!0})}const n=t=>{try{r.mkdirSync(t,e.mode)}catch(e){if("EPERM"===e.code)throw e;if("ENOENT"===e.code){if(i.dirname(t)===t)throw u(t);if(e.message.includes("null bytes"))throw e;return n(i.dirname(t)),n(t)}try{if(!r.statSync(t).isDirectory())throw new Error("The path is not a directory")}catch{throw e}}};return n(i.resolve(t))}},9121:(t,e,n)=>{"use strict";t.exports={moveSync:n(1472)}},1472:(t,e,n)=>{"use strict";const r=n(5997),i=n(5622),o=n(2928).copySync,c=n(6222).removeSync,s=n(3056).mkdirpSync,u=n(2520);function a(t,e,n){try{r.renameSync(t,e)}catch(r){if("EXDEV"!==r.code)throw r;return function(t,e,n){return o(t,e,{overwrite:n,errorOnExist:!0}),c(t)}(t,e,n)}}t.exports=function(t,e,n){const o=(n=n||{}).overwrite||n.clobber||!1,{srcStat:f}=u.checkPathsSync(t,e,"move");return u.checkParentPathsSync(t,f,e,"move"),s(i.dirname(e)),function(t,e,n){if(n)return c(e),a(t,e,n);if(r.existsSync(e))throw new Error("dest already exists.");return a(t,e,n)}(t,e,o)}},1784:(t,e,n)=>{"use strict";const r=n(533).E;t.exports={move:r(n(7450))}},7450:(t,e,n)=>{"use strict";const r=n(5997),i=n(5622),o=n(1627).copy,c=n(6222).remove,s=n(3056).mkdirp,u=n(3705).pathExists,a=n(2520);function f(t,e,n,i){r.rename(t,e,(r=>r?"EXDEV"!==r.code?i(r):function(t,e,n,r){o(t,e,{overwrite:n,errorOnExist:!0},(e=>e?r(e):c(t,r)))}(t,e,n,i):i()))}t.exports=function(t,e,n,r){"function"==typeof n&&(r=n,n={});const o=n.overwrite||n.clobber||!1;a.checkPaths(t,e,"move",((n,l)=>{if(n)return r(n);const{srcStat:y}=l;a.checkParentPaths(t,y,e,"move",(n=>{if(n)return r(n);s(i.dirname(e),(n=>n?r(n):function(t,e,n,r){if(n)return c(e,(i=>i?r(i):f(t,e,n,r)));u(e,((i,o)=>i?r(i):o?r(new Error("dest already exists.")):f(t,e,n,r)))}(t,e,o,r)))}))}))}},8587:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5997),o=n(5622),c=n(3056),s=n(3705).pathExists;t.exports={outputFile:r((function(t,e,n,r){"function"==typeof n&&(r=n,n="utf8");const u=o.dirname(t);s(u,((o,s)=>o?r(o):s?i.writeFile(t,e,n,r):void c.mkdirs(u,(o=>{if(o)return r(o);i.writeFile(t,e,n,r)}))))})),outputFileSync:function(t,...e){const n=o.dirname(t);if(i.existsSync(n))return i.writeFileSync(t,...e);c.mkdirsSync(n),i.writeFileSync(t,...e)}}},3705:(t,e,n)=>{"use strict";const r=n(533).p,i=n(5109);t.exports={pathExists:r((function(t){return i.access(t).then((()=>!0)).catch((()=>!1))})),pathExistsSync:i.existsSync}},6222:(t,e,n)=>{"use strict";const r=n(533).E,i=n(5180);t.exports={remove:r(i),removeSync:i.sync}},5180:(t,e,n)=>{"use strict";const r=n(5997),i=n(5622),o=n(2357),c="win32"===process.platform;function s(t){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach((e=>{t[e]=t[e]||r[e],t[e+="Sync"]=t[e]||r[e]})),t.maxBusyTries=t.maxBusyTries||3}function u(t,e,n){let r=0;"function"==typeof e&&(n=e,e={}),o(t,"rimraf: missing path"),o.strictEqual(typeof t,"string","rimraf: path should be a string"),o.strictEqual(typeof n,"function","rimraf: callback function required"),o(e,"rimraf: invalid options argument provided"),o.strictEqual(typeof e,"object","rimraf: options should be object"),s(e),a(t,e,(function i(o){if(o){if(("EBUSY"===o.code||"ENOTEMPTY"===o.code||"EPERM"===o.code)&&r<e.maxBusyTries)return r++,setTimeout((()=>a(t,e,i)),100*r);"ENOENT"===o.code&&(o=null)}n(o)}))}function a(t,e,n){o(t),o(e),o("function"==typeof n),e.lstat(t,((r,i)=>r&&"ENOENT"===r.code?n(null):r&&"EPERM"===r.code&&c?f(t,e,r,n):i&&i.isDirectory()?y(t,e,r,n):void e.unlink(t,(r=>{if(r){if("ENOENT"===r.code)return n(null);if("EPERM"===r.code)return c?f(t,e,r,n):y(t,e,r,n);if("EISDIR"===r.code)return y(t,e,r,n)}return n(r)}))))}function f(t,e,n,r){o(t),o(e),o("function"==typeof r),e.chmod(t,438,(i=>{i?r("ENOENT"===i.code?null:n):e.stat(t,((i,o)=>{i?r("ENOENT"===i.code?null:n):o.isDirectory()?y(t,e,n,r):e.unlink(t,r)}))}))}function l(t,e,n){let r;o(t),o(e);try{e.chmodSync(t,438)}catch(t){if("ENOENT"===t.code)return;throw n}try{r=e.statSync(t)}catch(t){if("ENOENT"===t.code)return;throw n}r.isDirectory()?p(t,e,n):e.unlinkSync(t)}function y(t,e,n,r){o(t),o(e),o("function"==typeof r),e.rmdir(t,(c=>{!c||"ENOTEMPTY"!==c.code&&"EEXIST"!==c.code&&"EPERM"!==c.code?c&&"ENOTDIR"===c.code?r(n):r(c):function(t,e,n){o(t),o(e),o("function"==typeof n),e.readdir(t,((r,o)=>{if(r)return n(r);let c,s=o.length;if(0===s)return e.rmdir(t,n);o.forEach((r=>{u(i.join(t,r),e,(r=>{if(!c)return r?n(c=r):void(0==--s&&e.rmdir(t,n))}))}))}))}(t,e,r)}))}function d(t,e){let n;s(e=e||{}),o(t,"rimraf: missing path"),o.strictEqual(typeof t,"string","rimraf: path should be a string"),o(e,"rimraf: missing options"),o.strictEqual(typeof e,"object","rimraf: options should be object");try{n=e.lstatSync(t)}catch(n){if("ENOENT"===n.code)return;"EPERM"===n.code&&c&&l(t,e,n)}try{n&&n.isDirectory()?p(t,e,null):e.unlinkSync(t)}catch(n){if("ENOENT"===n.code)return;if("EPERM"===n.code)return c?l(t,e,n):p(t,e,n);if("EISDIR"!==n.code)throw n;p(t,e,n)}}function p(t,e,n){o(t),o(e);try{e.rmdirSync(t)}catch(r){if("ENOTDIR"===r.code)throw n;if("ENOTEMPTY"===r.code||"EEXIST"===r.code||"EPERM"===r.code)!function(t,e){if(o(t),o(e),e.readdirSync(t).forEach((n=>d(i.join(t,n),e))),!c)return e.rmdirSync(t,e);{const n=Date.now();do{try{return e.rmdirSync(t,e)}catch{}}while(Date.now()-n<500)}}(t,e);else if("ENOENT"!==r.code)throw r}}t.exports=u,u.sync=d},2520:(t,e,n)=>{"use strict";const r=n(5109),i=n(5622),o=n(1669),c=n(4244)("10.5.0"),s=t=>c?r.stat(t,{bigint:!0}):r.stat(t),u=t=>c?r.statSync(t,{bigint:!0}):r.statSync(t);function a(t,e){return Promise.all([s(t),s(e).catch((t=>{if("ENOENT"===t.code)return null;throw t}))]).then((([t,e])=>({srcStat:t,destStat:e})))}function f(t,e){if(e.ino&&e.dev&&e.ino===t.ino&&e.dev===t.dev){if(c||e.ino<Number.MAX_SAFE_INTEGER)return!0;if(e.size===t.size&&e.mode===t.mode&&e.nlink===t.nlink&&e.atimeMs===t.atimeMs&&e.mtimeMs===t.mtimeMs&&e.ctimeMs===t.ctimeMs&&e.birthtimeMs===t.birthtimeMs)return!0}return!1}function l(t,e){const n=i.resolve(t).split(i.sep).filter((t=>t)),r=i.resolve(e).split(i.sep).filter((t=>t));return n.reduce(((t,e,n)=>t&&r[n]===e),!0)}function y(t,e,n){return`Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`}t.exports={checkPaths:function(t,e,n,r){o.callbackify(a)(t,e,((i,o)=>{if(i)return r(i);const{srcStat:c,destStat:s}=o;return s&&f(c,s)?r(new Error("Source and destination must not be the same.")):c.isDirectory()&&l(t,e)?r(new Error(y(t,e,n))):r(null,{srcStat:c,destStat:s})}))},checkPathsSync:function(t,e,n){const{srcStat:r,destStat:i}=function(t,e){let n;const r=u(t);try{n=u(e)}catch(t){if("ENOENT"===t.code)return{srcStat:r,destStat:null};throw t}return{srcStat:r,destStat:n}}(t,e);if(i&&f(r,i))throw new Error("Source and destination must not be the same.");if(r.isDirectory()&&l(t,e))throw new Error(y(t,e,n));return{srcStat:r,destStat:i}},checkParentPaths:function t(e,n,o,s,u){const a=i.resolve(i.dirname(e)),l=i.resolve(i.dirname(o));if(l===a||l===i.parse(l).root)return u();const d=(r,i)=>r?"ENOENT"===r.code?u():u(r):f(n,i)?u(new Error(y(e,o,s))):t(e,n,l,s,u);c?r.stat(l,{bigint:!0},d):r.stat(l,d)},checkParentPathsSync:function t(e,n,r,o){const c=i.resolve(i.dirname(e)),s=i.resolve(i.dirname(r));if(s===c||s===i.parse(s).root)return;let a;try{a=u(s)}catch(t){if("ENOENT"===t.code)return;throw t}if(f(n,a))throw new Error(y(e,r,o));return t(e,n,s,o)},isSrcSubdir:l}},1465:(t,e,n)=>{"use strict";const r=n(5997);t.exports={utimesMillis:function(t,e,n,i){r.open(t,"r+",((t,o)=>{if(t)return i(t);r.futimes(o,e,n,(t=>{r.close(o,(e=>{i&&i(t||e)}))}))}))},utimesMillisSync:function(t,e,n){const i=r.openSync(t,"r+");return r.futimesSync(i,e,n),r.closeSync(i)}}},533:(t,e)=>{"use strict";e.E=function(t){return Object.defineProperty((function(...e){if("function"!=typeof e[e.length-1])return new Promise(((n,r)=>{t.call(this,...e,((t,e)=>null!=t?r(t):n(e)))}));t.apply(this,e)}),"name",{value:t.name})},e.p=function(t){return Object.defineProperty((function(...e){const n=e[e.length-1];if("function"!=typeof n)return t.apply(this,e);t.apply(this,e.slice(0,-1)).then((t=>n(null,t)),n)}),"name",{value:t.name})}},8770:t=>{"use strict";t.exports=function(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Object)var n={__proto__:e(t)};else n=Object.create(null);return Object.getOwnPropertyNames(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n};var e=Object.getPrototypeOf||function(t){return t.__proto__}},5997:(t,e,n)=>{var r,i,o=n(5747),c=n(2825),s=n(5877),u=n(8770),a=n(1669);function f(t,e){Object.defineProperty(t,r,{get:function(){return e}})}"function"==typeof Symbol&&"function"==typeof Symbol.for?(r=Symbol.for("graceful-fs.queue"),i=Symbol.for("graceful-fs.previous")):(r="___graceful-fs.queue",i="___graceful-fs.previous");var l=function(){};if(a.debuglog?l=a.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(l=function(){var t=a.format.apply(a,arguments);t="GFS4: "+t.split(/\n/).join("\nGFS4: "),console.error(t)}),!o[r]){var y=global[r]||[];f(o,y),o.close=function(t){function e(e,n){return t.call(o,e,(function(t){t||m(),"function"==typeof n&&n.apply(this,arguments)}))}return Object.defineProperty(e,i,{value:t}),e}(o.close),o.closeSync=function(t){function e(e){t.apply(o,arguments),m()}return Object.defineProperty(e,i,{value:t}),e}(o.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",(function(){l(o[r]),n(2357).equal(o[r].length,0)}))}function d(t){c(t),t.gracefulify=d,t.createReadStream=function(e,n){return new t.ReadStream(e,n)},t.createWriteStream=function(e,n){return new t.WriteStream(e,n)};var e=t.readFile;t.readFile=function(t,n,r){return"function"==typeof n&&(r=n,n=null),function t(n,r,i){return e(n,r,(function(e){!e||"EMFILE"!==e.code&&"ENFILE"!==e.code?("function"==typeof i&&i.apply(this,arguments),m()):p([t,[n,r,i]])}))}(t,n,r)};var n=t.writeFile;t.writeFile=function(t,e,r,i){return"function"==typeof r&&(i=r,r=null),function t(e,r,i,o){return n(e,r,i,(function(n){!n||"EMFILE"!==n.code&&"ENFILE"!==n.code?("function"==typeof o&&o.apply(this,arguments),m()):p([t,[e,r,i,o]])}))}(t,e,r,i)};var r=t.appendFile;r&&(t.appendFile=function(t,e,n,i){return"function"==typeof n&&(i=n,n=null),function t(e,n,i,o){return r(e,n,i,(function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?("function"==typeof o&&o.apply(this,arguments),m()):p([t,[e,n,i,o]])}))}(t,e,n,i)});var i=t.copyFile;i&&(t.copyFile=function(t,e,n,r){return"function"==typeof n&&(r=n,n=0),i(t,e,n,(function(o){!o||"EMFILE"!==o.code&&"ENFILE"!==o.code?("function"==typeof r&&r.apply(this,arguments),m()):p([i,[t,e,n,r]])}))});var o=t.readdir;function u(e){return o.apply(t,e)}if(t.readdir=function(t,e,n){var r=[t];return"function"!=typeof e?r.push(e):n=e,r.push((function(t,e){e&&e.sort&&e.sort(),!t||"EMFILE"!==t.code&&"ENFILE"!==t.code?("function"==typeof n&&n.apply(this,arguments),m()):p([u,[r]])})),u(r)},"v0.8"===process.version.substr(0,4)){var a=s(t);S=a.ReadStream,E=a.WriteStream}var f=t.ReadStream;f&&(S.prototype=Object.create(f.prototype),S.prototype.open=function(){var t=this;v(t.path,t.flags,t.mode,(function(e,n){e?(t.autoClose&&t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n),t.read())}))});var l=t.WriteStream;l&&(E.prototype=Object.create(l.prototype),E.prototype.open=function(){var t=this;v(t.path,t.flags,t.mode,(function(e,n){e?(t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n))}))}),Object.defineProperty(t,"ReadStream",{get:function(){return S},set:function(t){S=t},enumerable:!0,configurable:!0}),Object.defineProperty(t,"WriteStream",{get:function(){return E},set:function(t){E=t},enumerable:!0,configurable:!0});var y=S;Object.defineProperty(t,"FileReadStream",{get:function(){return y},set:function(t){y=t},enumerable:!0,configurable:!0});var h=E;function S(t,e){return this instanceof S?(f.apply(this,arguments),this):S.apply(Object.create(S.prototype),arguments)}function E(t,e){return this instanceof E?(l.apply(this,arguments),this):E.apply(Object.create(E.prototype),arguments)}Object.defineProperty(t,"FileWriteStream",{get:function(){return h},set:function(t){h=t},enumerable:!0,configurable:!0});var w=t.open;function v(t,e,n,r){return"function"==typeof n&&(r=n,n=null),function t(e,n,r,i){return w(e,n,r,(function(o,c){!o||"EMFILE"!==o.code&&"ENFILE"!==o.code?("function"==typeof i&&i.apply(this,arguments),m()):p([t,[e,n,r,i]])}))}(t,e,n,r)}return t.open=v,t}function p(t){l("ENQUEUE",t[0].name,t[1]),o[r].push(t)}function m(){var t=o[r].shift();t&&(l("RETRY",t[0].name,t[1]),t[0].apply(null,t[1]))}global[r]||f(global,o[r]),t.exports=d(u(o)),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!o.__patched&&(t.exports=d(o),o.__patched=!0)},5877:(t,e,n)=>{var r=n(2413).Stream;t.exports=function(t){return{ReadStream:function e(n,i){if(!(this instanceof e))return new e(n,i);r.call(this);var o=this;this.path=n,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=65536,i=i||{};for(var c=Object.keys(i),s=0,u=c.length;s<u;s++){var a=c[s];this[a]=i[a]}if(this.encoding&&this.setEncoding(this.encoding),void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}null===this.fd?t.open(this.path,this.flags,this.mode,(function(t,e){if(t)return o.emit("error",t),void(o.readable=!1);o.fd=e,o.emit("open",e),o._read()})):process.nextTick((function(){o._read()}))},WriteStream:function e(n,i){if(!(this instanceof e))return new e(n,i);r.call(this),this.path=n,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,i=i||{};for(var o=Object.keys(i),c=0,s=o.length;c<s;c++){var u=o[c];this[u]=i[u]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],null===this.fd&&(this._open=t.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}}},2825:(t,e,n)=>{var r=n(7619),i=process.cwd,o=null,c=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return o||(o=i.call(process)),o};try{process.cwd()}catch(t){}if("function"==typeof process.chdir){var s=process.chdir;process.chdir=function(t){o=null,s.call(process,t)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,s)}t.exports=function(t){var e,n;function i(e){return e?function(n,r,i){return e.call(t,n,r,(function(t){l(t)&&(t=null),i&&i.apply(this,arguments)}))}:e}function o(e){return e?function(n,r){try{return e.call(t,n,r)}catch(t){if(!l(t))throw t}}:e}function s(e){return e?function(n,r,i,o){return e.call(t,n,r,i,(function(t){l(t)&&(t=null),o&&o.apply(this,arguments)}))}:e}function u(e){return e?function(n,r,i){try{return e.call(t,n,r,i)}catch(t){if(!l(t))throw t}}:e}function a(e){return e?function(n,r,i){function o(t,e){e&&(e.uid<0&&(e.uid+=4294967296),e.gid<0&&(e.gid+=4294967296)),i&&i.apply(this,arguments)}return"function"==typeof r&&(i=r,r=null),r?e.call(t,n,r,o):e.call(t,n,o)}:e}function f(e){return e?function(n,r){var i=r?e.call(t,n,r):e.call(t,n);return i.uid<0&&(i.uid+=4294967296),i.gid<0&&(i.gid+=4294967296),i}:e}function l(t){return!t||"ENOSYS"===t.code||!(process.getuid&&0===process.getuid()||"EINVAL"!==t.code&&"EPERM"!==t.code)}r.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&function(t){t.lchmod=function(e,n,i){t.open(e,r.O_WRONLY|r.O_SYMLINK,n,(function(e,r){e?i&&i(e):t.fchmod(r,n,(function(e){t.close(r,(function(t){i&&i(e||t)}))}))}))},t.lchmodSync=function(e,n){var i,o=t.openSync(e,r.O_WRONLY|r.O_SYMLINK,n),c=!0;try{i=t.fchmodSync(o,n),c=!1}finally{if(c)try{t.closeSync(o)}catch(t){}else t.closeSync(o)}return i}}(t),t.lutimes||function(t){r.hasOwnProperty("O_SYMLINK")?(t.lutimes=function(e,n,i,o){t.open(e,r.O_SYMLINK,(function(e,r){e?o&&o(e):t.futimes(r,n,i,(function(e){t.close(r,(function(t){o&&o(e||t)}))}))}))},t.lutimesSync=function(e,n,i){var o,c=t.openSync(e,r.O_SYMLINK),s=!0;try{o=t.futimesSync(c,n,i),s=!1}finally{if(s)try{t.closeSync(c)}catch(t){}else t.closeSync(c)}return o}):(t.lutimes=function(t,e,n,r){r&&process.nextTick(r)},t.lutimesSync=function(){})}(t),t.chown=s(t.chown),t.fchown=s(t.fchown),t.lchown=s(t.lchown),t.chmod=i(t.chmod),t.fchmod=i(t.fchmod),t.lchmod=i(t.lchmod),t.chownSync=u(t.chownSync),t.fchownSync=u(t.fchownSync),t.lchownSync=u(t.lchownSync),t.chmodSync=o(t.chmodSync),t.fchmodSync=o(t.fchmodSync),t.lchmodSync=o(t.lchmodSync),t.stat=a(t.stat),t.fstat=a(t.fstat),t.lstat=a(t.lstat),t.statSync=f(t.statSync),t.fstatSync=f(t.fstatSync),t.lstatSync=f(t.lstatSync),t.lchmod||(t.lchmod=function(t,e,n){n&&process.nextTick(n)},t.lchmodSync=function(){}),t.lchown||(t.lchown=function(t,e,n,r){r&&process.nextTick(r)},t.lchownSync=function(){}),"win32"===c&&(t.rename=(e=t.rename,function(n,r,i){var o=Date.now(),c=0;e(n,r,(function s(u){if(u&&("EACCES"===u.code||"EPERM"===u.code)&&Date.now()-o<6e4)return setTimeout((function(){t.stat(r,(function(t,o){t&&"ENOENT"===t.code?e(n,r,s):i(u)}))}),c),void(c<100&&(c+=10));i&&i(u)}))})),t.read=function(e){function n(n,r,i,o,c,s){var u;if(s&&"function"==typeof s){var a=0;u=function(f,l,y){if(f&&"EAGAIN"===f.code&&a<10)return a++,e.call(t,n,r,i,o,c,u);s.apply(this,arguments)}}return e.call(t,n,r,i,o,c,u)}return Object.setPrototypeOf&&Object.setPrototypeOf(n,e),n}(t.read),t.readSync=(n=t.readSync,function(e,r,i,o,c){for(var s=0;;)try{return n.call(t,e,r,i,o,c)}catch(t){if("EAGAIN"===t.code&&s<10){s++;continue}throw t}})}},173:(t,e,n)=>{let r;try{r=n(5997)}catch(t){r=n(5747)}const i=n(376),{stringify:o,stripBom:c}=n(3779),s={readFile:i.fromPromise((async function(t,e={}){"string"==typeof e&&(e={encoding:e});const n=e.fs||r,o=!("throws"in e)||e.throws;let s,u=await i.fromCallback(n.readFile)(t,e);u=c(u);try{s=JSON.parse(u,e?e.reviver:null)}catch(e){if(o)throw e.message=`${t}: ${e.message}`,e;return null}return s})),readFileSync:function(t,e={}){"string"==typeof e&&(e={encoding:e});const n=e.fs||r,i=!("throws"in e)||e.throws;try{let r=n.readFileSync(t,e);return r=c(r),JSON.parse(r,e.reviver)}catch(e){if(i)throw e.message=`${t}: ${e.message}`,e;return null}},writeFile:i.fromPromise((async function(t,e,n={}){const c=n.fs||r,s=o(e,n);await i.fromCallback(c.writeFile)(t,s,n)})),writeFileSync:function(t,e,n={}){const i=n.fs||r,c=o(e,n);return i.writeFileSync(t,c,n)}};t.exports=s},376:(t,e)=>{"use strict";e.fromCallback=function(t){return Object.defineProperty((function(...e){if("function"!=typeof e[e.length-1])return new Promise(((n,r)=>{t.call(this,...e,((t,e)=>null!=t?r(t):n(e)))}));t.apply(this,e)}),"name",{value:t.name})},e.fromPromise=function(t){return Object.defineProperty((function(...e){const n=e[e.length-1];if("function"!=typeof n)return t.apply(this,e);t.apply(this,e.slice(0,-1)).then((t=>n(null,t)),n)}),"name",{value:t.name})}},3779:t=>{t.exports={stringify:function(t,{EOL:e="\n",finalEOL:n=!0,replacer:r=null,spaces:i}={}){const o=n?e:"";return JSON.stringify(t,r,i).replace(/\n/g,e)+o},stripBom:function(t){return Buffer.isBuffer(t)&&(t=t.toString("utf8")),t.replace(/^\uFEFF/,"")}}},2357:t=>{"use strict";t.exports=require("assert")},7619:t=>{"use strict";t.exports=require("constants")},5747:t=>{"use strict";t.exports=require("fs")},5622:t=>{"use strict";t.exports=require("path")},2413:t=>{"use strict";t.exports=require("stream")},1669:t=>{"use strict";t.exports=require("util")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);const t=require("child_process");var e=n(5978);let i=process.argv.splice(2),o=i.shift();if("spawnDetached"===o){let e=i.shift();(0,t.spawn)(e,i,{detached:!0,stdio:"ignore"}).unref()}else if("spawnAndRemove"===o){let n=i.shift(),r=i.shift(),o=(0,t.spawn)(r,i);o.stdout.on("data",(()=>{})),o.stderr.on("data",(()=>{})),o.once("close",(()=>setTimeout((()=>e.remove(n)),500)))}else if("spawnAndRemove2"===o){let n=i.shift(),r=i.shift(),o=i.shift(),c=(0,t.spawn)(o,i);c.stdout.on("data",(()=>{})),c.stderr.on("data",(()=>{})),c.once("close",(()=>setTimeout((()=>e.remove(n,(()=>e.remove(r)))),500)))}})(),module.exports=r})();
//# sourceMappingURL=launcher.bundle.js.map