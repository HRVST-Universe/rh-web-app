// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"4cJp5":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1235;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "94516bfcea929c78";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"4GnH8":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$fe53 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$fe53.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainGamePage", ()=>MainGamePage);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _mobxReactLite = require("mobx-react-lite");
var _gameCanvas = require("@/components/GameCanvas");
var _gameCanvasDefault = parcelHelpers.interopDefault(_gameCanvas);
var _bettingControls = require("@/components/BettingControls");
var _bettingControlsDefault = parcelHelpers.interopDefault(_bettingControls);
var _userMenuBar = require("@/components/UserMenuBar");
var _userMenuBarDefault = parcelHelpers.interopDefault(_userMenuBar);
var _useToast = require("@/hooks/use-toast");
var _button = require("@/components/ui/button");
var _lucideReact = require("lucide-react");
var _dialog = require("@/components/ui/dialog");
var _howToPlay = require("@/components/HowToPlay");
var _howToPlayDefault = parcelHelpers.interopDefault(_howToPlay);
var _toastMessages = require("@/utils/toastMessages");
var _storeContext = require("@/contexts/StoreContext");
var _s = $RefreshSig$();
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var MainGamePage = _s((0, _mobxReactLite.observer)(_c = _s(function() {
    _s();
    var navigate = (0, _reactRouterDom.useNavigate)();
    var _a = (0, _storeContext.useStore)(), userStore = _a.userStore, gameStore = _a.gameStore;
    var _b = (0, _react.useState)(false), showHelp = _b[0], setShowHelp = _b[1];
    var _c = (0, _react.useState)(null), gameScene = _c[0], setGameScene = _c[1];
    var toast = (0, _useToast.useToast)().toast;
    (0, _react.useEffect)(function() {
        if (!userStore.user) {
            navigate('/');
            return;
        }
        // Initialize background music
        var bgMusic = new Audio('/sounds/background-music.mp3');
        bgMusic.loop = true;
        bgMusic.volume = 0.5;
        if (!gameStore.isMuted) bgMusic.play().catch(function(error) {
            return console.log('Audio playback failed:', error);
        });
        return function() {
            bgMusic.pause();
            bgMusic.currentTime = 0;
        };
    }, [
        navigate,
        userStore.user,
        gameStore.isMuted
    ]);
    var handleSceneCreated = (0, _react.useCallback)(function(scene) {
        console.log('MainGamePage: Game scene created');
        setGameScene(scene);
    }, []);
    var handleSpin = function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var _a, totalWinAmount, winningLines, isBigWin, toastConfig, toastConfig, error_1;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (!gameScene || gameStore.betAmount > gameStore.balance) {
                            toast({
                                title: "Insufficient Balance",
                                description: "Please lower your bet amount.",
                                variant: "destructive"
                            });
                            return [
                                2 /*return*/ 
                            ];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        gameStore.placeBet();
                        return [
                            4 /*yield*/ ,
                            gameScene.startSpin(gameStore.betAmount, 1)
                        ];
                    case 2:
                        _a = _b.sent(), totalWinAmount = _a.totalWinAmount, winningLines = _a.winningLines;
                        if (winningLines.length > 0) {
                            gameStore.updateAfterSpin(totalWinAmount);
                            isBigWin = totalWinAmount >= gameStore.betAmount * 50;
                            toastConfig = (0, _toastMessages.getWinToastMessage)(totalWinAmount, isBigWin);
                            toast(toastConfig);
                        } else {
                            gameStore.setSpinning(false);
                            toastConfig = (0, _toastMessages.getLoseToastMessage)();
                            toast(toastConfig);
                        }
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        error_1 = _b.sent();
                        console.error('Error during spin:', error_1);
                        toast({
                            title: "Error",
                            description: "An error occurred during spin.",
                            variant: "destructive"
                        });
                        gameStore.setSpinning(false);
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    if (!userStore.user) return null;
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "min-h-screen bg-nightsky relative overflow-hidden"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "absolute inset-0 bg-cover bg-center opacity-20",
        style: {
            backgroundImage: "url('/images/neon-crop-circles.WEBP')"
        }
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _userMenuBarDefault.default), null), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "pt-16"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameCanvasDefault.default), {
        onSceneCreated: handleSceneCreated
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _bettingControlsDefault.default), {
        onSpin: handleSpin,
        helpButton: /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
            variant: "outline",
            size: "icon",
            onClick: function() {
                return setShowHelp(true);
            },
            className: "bg-nightsky/50 border-neongreen"
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.HelpCircle), {
            className: "h-6 w-6 text-neongreen"
        }))
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _dialog.Dialog), {
        open: showHelp,
        onOpenChange: setShowHelp
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _dialog.DialogContent), null, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _dialog.DialogHeader), null, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _dialog.DialogTitle), null, "How to Play")), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _howToPlayDefault.default), null))));
}, "7EjSXtC60gZWoRKbTyJFhhHOfOk=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate),
        (0, _storeContext.useStore),
        (0, _storeContext.useStore),
        (0, _storeContext.useStore),
        (0, _useToast.useToast)
    ];
})), "7EjSXtC60gZWoRKbTyJFhhHOfOk=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate),
        (0, _storeContext.useStore),
        (0, _storeContext.useStore),
        (0, _storeContext.useStore),
        (0, _useToast.useToast)
    ];
});
_c1 = MainGamePage;
var _c, _c1;
$RefreshReg$(_c, "MainGamePage$observer");
$RefreshReg$(_c1, "MainGamePage");

  $parcel$ReactRefreshHelpers$fe53.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"9xmpe","mobx-react-lite":"e0C8P","@/components/GameCanvas":"2m3aP","@/components/BettingControls":"6tLoE","@/components/UserMenuBar":"3YkNl","@/hooks/use-toast":"3j0xv","@/components/ui/button":"cyayD","lucide-react":"8oTgY","@/components/ui/dialog":"1YubV","@/components/HowToPlay":"gOsBl","@/utils/toastMessages":"kfnb0","@/contexts/StoreContext":"izR6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"2m3aP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4044 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4044.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
var _slotGameScene = require("@/scenes/SlotGameScene");
var _useMobile = require("@/hooks/use-mobile");
var _lucideReact = require("lucide-react");
var _s = $RefreshSig$();
var GameCanvas = function(_a) {
    _s();
    var onSceneCreated = _a.onSceneCreated;
    console.log('GameCanvas: Component mounting');
    var isMobile = (0, _useMobile.useIsMobile)();
    var _b = (0, _react.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    var gameRef = (0, _react.useRef)(null);
    var containerRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(function() {
        console.log('GameCanvas: Initial mount');
        if (!containerRef.current || gameRef.current) {
            console.log('GameCanvas: Container not ready or game already initialized');
            return;
        }
        var getGameDimensions = function() {
            var _a, _b;
            var maxHeight = window.innerHeight * 0.6;
            var width = ((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || window.innerWidth;
            var height = Math.min(((_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) || window.innerHeight, maxHeight);
            return {
                width: width,
                height: height
            };
        };
        var _a = getGameDimensions(), width = _a.width, height = _a.height;
        console.log('GameCanvas: Creating new game instance with dimensions:', {
            width: width,
            height: height
        });
        var config = {
            type: (0, _phaserDefault.default).AUTO,
            parent: containerRef.current,
            width: width,
            height: height,
            transparent: true,
            scene: (0, _slotGameScene.SlotGameScene),
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                }
            },
            scale: {
                mode: (0, _phaserDefault.default).Scale.RESIZE,
                autoCenter: (0, _phaserDefault.default).Scale.CENTER_BOTH,
                width: width,
                height: height
            },
            dom: {
                createContainer: true
            },
            audio: {
                disableWebAudio: false
            },
            callbacks: {
                postBoot: function(game) {
                    console.log('GameCanvas: Game loaded successfully');
                    var scene = game.scene.getScene('SlotGameScene');
                    if (onSceneCreated) onSceneCreated(scene);
                    setIsLoading(false);
                }
            }
        };
        try {
            console.log('GameCanvas: Attempting to create new Phaser game instance');
            gameRef.current = new (0, _phaserDefault.default).Game(config);
            console.log('GameCanvas: Successfully created Phaser game instance');
        } catch (error) {
            console.error('GameCanvas: Error creating Phaser game instance:', error);
            setIsLoading(false);
        }
        var handleResize = function() {
            if (!gameRef.current) return;
            var _a = getGameDimensions(), newWidth = _a.width, newHeight = _a.height;
            console.log('GameCanvas: Resizing game to:', {
                newWidth: newWidth,
                newHeight: newHeight
            });
            gameRef.current.scale.resize(newWidth, newHeight);
        };
        window.addEventListener('resize', handleResize);
        return function() {
            console.log('GameCanvas: Cleaning up game instance');
            window.removeEventListener('resize', handleResize);
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, [
        isMobile,
        onSceneCreated
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "w-full h-[60vh] relative"
    }, isLoading && /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "absolute inset-0 flex items-center justify-center z-10"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "text-center space-y-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Loader2), {
        className: "w-12 h-12 animate-spin text-neongreen mx-auto"
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
        className: "text-neongreen font-space animate-pulse"
    }, "Loading Rewarding Harvest..."))), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        ref: containerRef,
        className: "w-full h-full",
        style: {
            background: 'transparent',
            outline: 'none'
        }
    }));
};
_s(GameCanvas, "l4Ilzd8o1dqhK0lBxt3bhGyAC6o=", false, function() {
    return [
        (0, _useMobile.useIsMobile)
    ];
});
_c = GameCanvas;
exports.default = GameCanvas;
var _c;
$RefreshReg$(_c, "GameCanvas");

  $parcel$ReactRefreshHelpers$4044.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","phaser":"9U0wC","@/scenes/SlotGameScene":"gkSRA","@/hooks/use-mobile":"3sDTj","lucide-react":"8oTgY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gkSRA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlotGameScene", ()=>SlotGameScene);
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
var _symbolConfig = require("./configs/symbolConfig");
var _gridManager = require("./utils/gridManager");
var _winAnimationManager = require("./effects/WinAnimationManager");
var _messageManager = require("./effects/MessageManager");
var _soundManager = require("./effects/SoundManager");
var _gridManager1 = require("./managers/GridManager");
var _spinManager = require("./managers/SpinManager");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var SlotGameScene = /** @class */ function(_super) {
    __extends(SlotGameScene, _super);
    function SlotGameScene() {
        var _this = _super.call(this, {
            key: 'SlotGameScene'
        }) || this;
        _this.symbols = [];
        _this.isSpinning = false;
        _this.currentGrid = [];
        _this.baseScale = 1;
        _this.assetsLoaded = false;
        console.log('SlotGameScene: Constructor initialized');
        return _this;
    }
    SlotGameScene.prototype.preload = function() {
        var _this = this;
        console.log('SlotGameScene: Preloading assets');
        // Load SVG symbols
        Object.values((0, _symbolConfig.SYMBOLS)).forEach(function(symbol) {
            _this.load.svg("symbol-".concat(symbol), "/images/assets/".concat(symbol, ".svg"));
        });
        // Load audio assets
        this.load.audio('background-music', '/sounds/background-music.mp3');
        this.load.audio('spin-sound', '/sounds/spin.mp3');
        this.load.audio('win-sound', '/sounds/win.mp3');
        this.load.audio('big-win-sound', '/sounds/big-win.mp3');
        this.load.audio('lose-sound', '/sounds/lose.mp3');
        this.load.on('complete', function() {
            console.log('SlotGameScene: Assets loaded successfully');
            _this.assetsLoaded = true;
            _this.events.emit('assetsLoaded');
        });
    };
    SlotGameScene.prototype.create = function() {
        console.log('SlotGameScene: Creating game scene');
        this.children.removeAll(true);
        this.add.graphics().clear();
        this.initializeManagers();
        this.setupBackground();
        this.setupAlienMessage();
        this.createGrid();
        this.startFloatingAnimations();
        this.events.on('shutdown', this.cleanup, this);
        console.log('SlotGameScene: Scene setup complete');
    };
    SlotGameScene.prototype.cleanup = function() {
        console.log('SlotGameScene: Cleaning up scene');
        this.winAnimationManager.clearPreviousAnimations();
        this.stopFloatingAnimations();
        this.events.off('shutdown', this.cleanup, this);
    };
    SlotGameScene.prototype.initializeManagers = function() {
        this.soundManager = new (0, _soundManager.SoundManager)(this);
        this.currentGrid = (0, _gridManager.createInitialGrid)();
        this.winAnimationManager = new (0, _winAnimationManager.WinAnimationManager)(this);
        this.messageManager = new (0, _messageManager.MessageManager)(this);
        this.gridManager = new (0, _gridManager1.GridManager)(this);
    };
    SlotGameScene.prototype.setupBackground = function() {
        var _a = this.cameras.main, width = _a.width, height = _a.height;
        this.bgImage = this.add.image(width / 2, height / 2, 'preloader-bg').setDisplaySize(width, height).setAlpha(0.3);
    };
    SlotGameScene.prototype.setupAlienMessage = function() {
        var width = this.cameras.main.width;
        this.alienMessage = this.add.text(width / 2, 50, '', {
            fontFamily: 'Space Grotesk',
            fontSize: '24px',
            color: '#4AE54A',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5).setAlpha(0).setDepth(1000);
    };
    SlotGameScene.prototype.createGrid = function() {
        var _a = this.cameras.main, width = _a.width, height = _a.height;
        var gridDimensions = this.gridManager.calculateGridDimensions(width, height);
        this.baseScale = gridDimensions.baseScale;
        console.log('SlotGameScene: Creating grid with dimensions:', gridDimensions);
        for(var row = 0; row < (0, _symbolConfig.GRID_SIZE); row++){
            this.symbols[row] = [];
            for(var col = 0; col < (0, _symbolConfig.GRID_SIZE); col++){
                var x = gridDimensions.startX + col * (gridDimensions.cellSize + gridDimensions.gridPadding);
                var y = gridDimensions.startY + row * (gridDimensions.cellSize + gridDimensions.gridPadding);
                var symbolKey = this.currentGrid[row][col];
                var symbol = this.add.image(x, y, "symbol-".concat(symbolKey)).setDisplaySize((0, _symbolConfig.SYMBOL_SIZE), (0, _symbolConfig.SYMBOL_SIZE)).setOrigin(0.5).setScale(this.baseScale).setInteractive();
                symbol.setData('originalY', y);
                symbol.setData('isFloating', true);
                this.symbols[row][col] = symbol;
            }
        }
        this.spinManager = new (0, _spinManager.SpinManager)(this, this.symbols, this.currentGrid, this.baseScale, this.messageManager, this.soundManager, this.winAnimationManager);
    };
    SlotGameScene.prototype.stopFloatingAnimations = function() {
        var _this = this;
        console.log('SlotGameScene: Stopping floating animations');
        this.symbols.flat().forEach(function(symbol) {
            _this.tweens.killTweensOf(symbol);
        });
    };
    SlotGameScene.prototype.startFloatingAnimations = function() {
        var _this = this;
        if (this.isSpinning) {
            console.log('SlotGameScene: Skipping floating animations while spinning');
            return;
        }
        console.log('SlotGameScene: Starting floating animations');
        this.symbols.flat().forEach(function(symbol) {
            var baseY = symbol.getData('originalY');
            _this.tweens.add({
                targets: symbol,
                y: baseY + 10,
                duration: 2000 + Math.random() * 1000,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });
    };
    SlotGameScene.prototype.startSpin = function(betAmount, multiplier) {
        return __awaiter(this, void 0, Promise, function() {
            var result, error_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.isSpinning) {
                            console.log('SlotGameScene: Spin already in progress, ignoring new spin request');
                            return [
                                2 /*return*/ ,
                                {
                                    totalWinAmount: 0,
                                    winningLines: []
                                }
                            ];
                        }
                        console.log("SlotGameScene: Starting spin with bet: ".concat(betAmount, " and multiplier: ").concat(multiplier));
                        this.isSpinning = true;
                        this.stopFloatingAnimations();
                        this.winAnimationManager.clearPreviousAnimations();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.spinManager.performSpin(betAmount, multiplier)
                        ];
                    case 2:
                        result = _a.sent();
                        this.isSpinning = false;
                        return [
                            2 /*return*/ ,
                            result
                        ];
                    case 3:
                        error_1 = _a.sent();
                        console.error('SlotGameScene: Error during spin:', error_1);
                        this.isSpinning = false;
                        return [
                            2 /*return*/ ,
                            {
                                totalWinAmount: 0,
                                winningLines: []
                            }
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return SlotGameScene;
}((0, _phaserDefault.default).Scene);

},{"phaser":"9U0wC","./configs/symbolConfig":"dyxnD","./utils/gridManager":"7nHAg","./effects/WinAnimationManager":"6spgV","./effects/MessageManager":"gXTmw","./effects/SoundManager":"37BTq","./managers/GridManager":"45dRo","./managers/SpinManager":"1ZOUX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyxnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ALL_SYMBOLS", ()=>ALL_SYMBOLS);
parcelHelpers.export(exports, "SYMBOLS", ()=>SYMBOLS);
parcelHelpers.export(exports, "SYMBOL_VALUES", ()=>SYMBOL_VALUES);
parcelHelpers.export(exports, "GRID_SIZE", ()=>GRID_SIZE);
parcelHelpers.export(exports, "SYMBOL_SIZE", ()=>SYMBOL_SIZE);
parcelHelpers.export(exports, "SPIN_DURATION", ()=>SPIN_DURATION);
parcelHelpers.export(exports, "SELECTED_SYMBOLS", ()=>SELECTED_SYMBOLS);
var ALL_SYMBOLS = {
    AVOCADO: 'avocado',
    BANANA: 'banana',
    BLUEBERRIES: 'blueberries',
    BROCCOLI: 'broccoli',
    CARROT: 'carrot',
    CAULIFLOWER: 'cauliflower',
    CHERRY: 'cherry',
    CORN: 'corn',
    CUCUMBER: 'cucumber',
    EGGPLANT: 'eggplant',
    GRAPES: 'grapes',
    LIME: 'lime',
    PEAR: 'pear',
    PLUM: 'plum',
    PUMPKIN: 'pumpkin',
    STRAWBERRY: 'strawberry',
    TOMATO: 'tomato',
    WATERMELON: 'watermelon'
};
// Use all symbols for the game
var allSymbolKeys = Object.keys(ALL_SYMBOLS);
var SYMBOLS = Object.fromEntries(_c1 = allSymbolKeys.map(_c = function(key) {
    return [
        key,
        ALL_SYMBOLS[key]
    ];
}));
_c2 = SYMBOLS;
var SYMBOL_VALUES = Object.fromEntries(_c4 = Object.keys(SYMBOLS).map(_c3 = function(key) {
    return [
        SYMBOLS[key],
        10
    ];
}));
_c5 = SYMBOL_VALUES;
var GRID_SIZE = 6;
var SYMBOL_SIZE = 128; // Changed from 256 to 128
var SPIN_DURATION = 2000;
var SELECTED_SYMBOLS = Object.values(SYMBOLS);
_c6 = SELECTED_SYMBOLS;
console.log('Initialized symbols:', SELECTED_SYMBOLS);
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "SYMBOLS$Object.fromEntries$allSymbolKeys.map");
$RefreshReg$(_c1, "SYMBOLS$Object.fromEntries");
$RefreshReg$(_c2, "SYMBOLS");
$RefreshReg$(_c3, "SYMBOL_VALUES$Object.fromEntries$Object.keys(SYMBOLS).map");
$RefreshReg$(_c4, "SYMBOL_VALUES$Object.fromEntries");
$RefreshReg$(_c5, "SYMBOL_VALUES");
$RefreshReg$(_c6, "SELECTED_SYMBOLS");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nHAg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateRandomSymbol", ()=>generateRandomSymbol);
parcelHelpers.export(exports, "createInitialGrid", ()=>createInitialGrid);
var _symbolConfig = require("../configs/symbolConfig");
var generateRandomSymbol = function() {
    var randomIndex = Math.floor(Math.random() * (0, _symbolConfig.SELECTED_SYMBOLS).length);
    var symbol = (0, _symbolConfig.SELECTED_SYMBOLS)[randomIndex];
    console.log('Generated random symbol:', symbol);
    return symbol;
};
var createInitialGrid = function() {
    console.log('Creating initial grid with all symbols:', (0, _symbolConfig.SELECTED_SYMBOLS));
    var grid = [];
    for(var row = 0; row < (0, _symbolConfig.GRID_SIZE); row++){
        grid[row] = [];
        for(var col = 0; col < (0, _symbolConfig.GRID_SIZE); col++)grid[row][col] = generateRandomSymbol();
    }
    console.log('Initial grid created:', grid);
    return grid;
};

},{"../configs/symbolConfig":"dyxnD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6spgV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WinAnimationManager", ()=>WinAnimationManager);
var _particleManager = require("./ParticleManager");
var _styleConfig = require("../configs/styleConfig");
var WinAnimationManager = /** @class */ function() {
    function WinAnimationManager(scene) {
        this.activeCircles = [];
        this.scene = scene;
        this.particleManager = new (0, _particleManager.ParticleManager)(scene);
        console.log('WinAnimationManager: Initialized');
        this.scene.events.on('shutdown', this.clearPreviousAnimations, this);
        this.scene.events.on('destroy', this.clearPreviousAnimations, this);
    }
    WinAnimationManager.prototype.createWinAnimation = function(positions, symbols) {
        var _this = this;
        console.log('WinAnimationManager: Creating win animations for positions:', positions);
        // Create animations for each winning position without clearing previous ones
        positions.forEach(function(_a) {
            var row = _a[0], col = _a[1];
            var symbol = symbols[row][col];
            // Create three concentric rings with different sizes and alphas
            var rings = [
                {
                    radius: 45,
                    alpha: 0.8,
                    lineWidth: 3
                },
                {
                    radius: 35,
                    alpha: 0.6,
                    lineWidth: 2
                },
                {
                    radius: 25,
                    alpha: 0.4,
                    lineWidth: 2
                }
            ];
            rings.forEach(function(ring, index) {
                var graphics = _this.scene.add.graphics();
                graphics.setDepth(90);
                _this.activeCircles.push(graphics);
                // Draw initial circle
                graphics.lineStyle(ring.lineWidth, (0, _styleConfig.COLORS).neonGreen, ring.alpha);
                graphics.strokeCircle(symbol.x, symbol.y, ring.radius);
                // Create slower flash animation with phase delay
                _this.scene.tweens.add({
                    targets: graphics,
                    alpha: {
                        from: ring.alpha,
                        to: 0.1
                    },
                    duration: 800 + index * 200,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.easeInOut',
                    delay: index * 200,
                    onUpdate: function() {
                        graphics.clear();
                        graphics.lineStyle(ring.lineWidth, (0, _styleConfig.COLORS).neonGreen, graphics.alpha);
                        graphics.strokeCircle(symbol.x, symbol.y, ring.radius);
                    }
                });
            });
        });
    };
    WinAnimationManager.prototype.clearPreviousAnimations = function() {
        var _this = this;
        console.log('WinAnimationManager: Clearing previous animations');
        this.activeCircles.forEach(function(circle) {
            if (circle && circle.active) {
                _this.scene.tweens.killTweensOf(circle);
                circle.clear();
                circle.destroy();
            }
        });
        this.activeCircles = [];
        this.particleManager.clearParticles();
    };
    WinAnimationManager.prototype.destroy = function() {
        this.clearPreviousAnimations();
        this.scene.events.off('shutdown', this.clearPreviousAnimations, this);
        this.scene.events.off('destroy', this.clearPreviousAnimations, this);
        this.particleManager.destroy();
    };
    return WinAnimationManager;
}();

},{"./ParticleManager":"hdFDU","../configs/styleConfig":"hSfhP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdFDU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleManager", ()=>ParticleManager);
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
var ParticleManager = /** @class */ function() {
    function ParticleManager(scene) {
        this.particleSystems = [];
        this.scene = scene;
        console.log('ParticleManager: Initialized');
        // Add scene cleanup listener
        this.scene.events.on('shutdown', this.clearParticles, this);
        this.scene.events.on('destroy', this.clearParticles, this);
    }
    ParticleManager.prototype.createWinParticles = function(x, y, radius) {
        var _this = this;
        console.log('ParticleManager: Creating win particles at', {
            x: x,
            y: y,
            radius: radius
        });
        var particles = this.scene.add.particles(x, y, 'particle', {
            lifespan: 2000,
            speed: {
                min: 50,
                max: 100
            },
            scale: {
                start: 0.4,
                end: 0
            },
            alpha: {
                start: 0.6,
                end: 0
            },
            blendMode: (0, _phaserDefault.default).BlendModes.ADD,
            emitting: false,
            quantity: 1,
            frequency: 150,
            rotate: {
                min: 0,
                max: 360
            }
        });
        // Set proper depth to avoid rendering issues
        particles.setDepth(1);
        this.particleSystems.push(particles);
        // Only start emitting when explicitly called
        particles.start();
        // Auto cleanup after animation duration
        this.scene.time.delayedCall(2000, function() {
            if (particles && particles.active) {
                console.log('ParticleManager: Cleaning up particle system');
                particles.stop();
                var index = _this.particleSystems.indexOf(particles);
                if (index > -1) {
                    _this.particleSystems.splice(index, 1);
                    particles.destroy();
                }
            }
        });
    };
    ParticleManager.prototype.clearParticles = function() {
        console.log('ParticleManager: Clearing all particles');
        this.particleSystems.forEach(function(particles) {
            if (particles && particles.active) {
                particles.stop();
                particles.destroy();
            }
        });
        this.particleSystems = [];
    };
    ParticleManager.prototype.destroy = function() {
        this.clearParticles();
        this.scene.events.off('shutdown', this.clearParticles, this);
        this.scene.events.off('destroy', this.clearParticles, this);
    };
    return ParticleManager;
}();

},{"phaser":"9U0wC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSfhP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLORS", ()=>COLORS);
parcelHelpers.export(exports, "TEXT_STYLE", ()=>TEXT_STYLE);
var COLORS = {
    neonGreen: 0x39ff14,
    neonPink: 0xff00ff,
    background: 0x000000
};
var TEXT_STYLE = {
    fontSize: '24px',
    fontFamily: 'Space Grotesk',
    color: '#39ff14',
    stroke: '#39ff14',
    strokeThickness: 1,
    shadow: {
        offsetX: 0,
        offsetY: 0,
        color: '#ff00ff',
        blur: 10,
        stroke: true,
        fill: true
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXTmw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageManager", ()=>MessageManager);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var MessageManager = /** @class */ function() {
    function MessageManager(scene) {
        this.messageText = null;
        this.messageBackground = null;
        this.scene = scene;
        console.log('MessageManager: Initialized');
    }
    MessageManager.prototype.showMessage = function(message, duration) {
        return __awaiter(this, void 0, Promise, function() {
            var glowFX;
            var _this = this;
            var _a;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        console.log('MessageManager: Showing message:', message, 'duration:', duration);
                        if (this.messageText) this.messageText.destroy();
                        if (this.messageBackground) this.messageBackground.destroy();
                        // Create semi-transparent background
                        this.messageBackground = this.scene.add.graphics();
                        this.messageBackground.fillStyle(0x000000, 0.7);
                        this.messageBackground.fillRect(0, 0, this.scene.cameras.main.width, 100);
                        this.messageBackground.setDepth(1000);
                        // Create message text with neon effect
                        this.messageText = this.scene.add.text(this.scene.cameras.main.width / 2, 50, message, {
                            fontFamily: 'Space Grotesk',
                            fontSize: '24px',
                            color: '#4AE54A',
                            align: 'center',
                            stroke: '#000000',
                            strokeThickness: 4
                        }).setOrigin(0.5).setDepth(1001);
                        glowFX = (_a = this.messageText.preFX) === null || _a === void 0 ? void 0 : _a.addGlow(0x4AE54A, 0, 0, false, 0.1, 16);
                        // Animate in
                        this.messageText.setAlpha(0);
                        this.messageBackground.setAlpha(0);
                        this.scene.tweens.add({
                            targets: [
                                this.messageText,
                                this.messageBackground
                            ],
                            alpha: 1,
                            duration: 300,
                            ease: 'Power2'
                        });
                        // Wait for duration
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve) {
                                return _this.scene.time.delayedCall(duration, resolve);
                            })
                        ];
                    case 1:
                        // Wait for duration
                        _b.sent();
                        // Animate out
                        this.scene.tweens.add({
                            targets: [
                                this.messageText,
                                this.messageBackground
                            ],
                            alpha: 0,
                            duration: 300,
                            ease: 'Power2',
                            onComplete: function() {
                                if (_this.messageText) _this.messageText.destroy();
                                if (_this.messageBackground) _this.messageBackground.destroy();
                                _this.messageText = null;
                                _this.messageBackground = null;
                            }
                        });
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return MessageManager;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37BTq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SoundManager", ()=>SoundManager);
var SoundManager = /** @class */ function() {
    function SoundManager(scene) {
        console.log('SoundManager: Initializing');
        this.scene = scene;
        try {
            var audioLoaded = this.scene.registry.get('audioLoaded');
            if (!audioLoaded) {
                console.warn('SoundManager: Audio not preloaded in PreloaderScene, attempting to load now');
                this.loadSoundEffects();
            } else this.initializeSounds();
        } catch (error) {
            console.error('SoundManager: Error in constructor:', error);
            this.createDummySounds();
        }
    }
    SoundManager.prototype.loadSoundEffects = function() {
        var _this = this;
        try {
            this.scene.load.audio('spin-sound', './sounds/spin.mp3');
            this.scene.load.audio('win-sound', './sounds/win.mp3');
            this.scene.load.audio('big-win-sound', './sounds/big-win.mp3');
            this.scene.load.audio('lose-sound', './sounds/lose.mp3');
            this.scene.load.audio('background-music', './sounds/background-music.mp3');
            this.scene.load.once('complete', function() {
                console.log('SoundManager: Sound effects loaded successfully');
                _this.initializeSounds();
            });
            this.scene.load.start();
        } catch (error) {
            console.error('SoundManager: Error loading sound effects:', error);
        }
    };
    SoundManager.prototype.initializeSounds = function() {
        try {
            this.spinSound = this.scene.sound.add('spin-sound', {
                volume: 0.5
            });
            this.winSound = this.scene.sound.add('win-sound', {
                volume: 0.7
            });
            this.bigWinSound = this.scene.sound.add('big-win-sound', {
                volume: 0.8
            });
            this.loseSound = this.scene.sound.add('lose-sound', {
                volume: 0.5
            });
            this.bgMusic = this.scene.sound.add('background-music', {
                volume: 0.5,
                loop: true
            });
            console.log('SoundManager: Sounds initialized successfully');
        } catch (error) {
            console.error('SoundManager: Error initializing sounds:', error);
            this.createDummySounds();
        }
    };
    SoundManager.prototype.createDummySounds = function() {
        var dummySound = this.createDummySound();
        this.spinSound = dummySound;
        this.winSound = dummySound;
        this.bigWinSound = dummySound;
        this.loseSound = dummySound;
        this.bgMusic = dummySound;
    };
    SoundManager.prototype.createDummySound = function() {
        return {
            play: function() {},
            stop: function() {},
            destroy: function() {},
            pause: function() {},
            resume: function() {}
        };
    };
    SoundManager.prototype.playSpinSound = function() {
        var _this = this;
        try {
            if (this.scene.sound.locked) {
                console.log('SoundManager: Audio locked, waiting for unlock');
                this.scene.sound.once('unlocked', function() {
                    _this.spinSound.play();
                });
            } else {
                this.spinSound.play();
                console.log('SoundManager: Playing spin sound');
            }
        } catch (error) {
            console.error('SoundManager: Error playing spin sound:', error);
        }
    };
    SoundManager.prototype.playWinSound = function(winAmount, betAmount) {
        var _this = this;
        try {
            var isBigWin_1 = winAmount >= betAmount * 50;
            var soundToPlay_1 = isBigWin_1 ? this.bigWinSound : this.winSound;
            if (this.scene.sound.locked) {
                console.log('SoundManager: Audio locked, waiting for unlock');
                this.scene.sound.once('unlocked', function() {
                    if (isBigWin_1) _this.bgMusic.pause();
                    soundToPlay_1.play();
                });
            } else {
                if (isBigWin_1) this.bgMusic.pause();
                soundToPlay_1.play();
                console.log("SoundManager: Playing ".concat(isBigWin_1 ? 'big win' : 'win', " sound"));
            }
            if (isBigWin_1) soundToPlay_1.once('complete', function() {
                _this.bgMusic.resume();
            });
        } catch (error) {
            console.error('SoundManager: Error playing win sound:', error);
        }
    };
    SoundManager.prototype.playLoseSound = function() {
        var _this = this;
        try {
            if (this.scene.sound.locked) {
                console.log('SoundManager: Audio locked, waiting for unlock');
                this.scene.sound.once('unlocked', function() {
                    _this.loseSound.play();
                });
            } else {
                this.loseSound.play();
                console.log('SoundManager: Playing lose sound');
            }
        } catch (error) {
            console.error('SoundManager: Error playing lose sound:', error);
        }
    };
    SoundManager.prototype.toggleMute = function(isMuted) {
        this.scene.sound.mute = isMuted;
        console.log('SoundManager: Mute toggled:', isMuted);
    };
    SoundManager.prototype.startBackgroundMusic = function() {
        if (!this.bgMusic.isPlaying) this.bgMusic.play();
    };
    SoundManager.prototype.stopBackgroundMusic = function() {
        if (this.bgMusic.isPlaying) this.bgMusic.stop();
    };
    return SoundManager;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45dRo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridManager", ()=>GridManager);
var _symbolConfig = require("../configs/symbolConfig");
var GridManager = /** @class */ function() {
    function GridManager(scene) {
        this.scene = scene;
    }
    GridManager.prototype.calculateGridDimensions = function(width, height) {
        var padding = Math.min(width, height) * 0.1; // Reduced from 0.15 to 0.1
        var gridPadding = Math.min(width, height) * 0.02; // Reduced from 0.04 to 0.02
        var availableWidth = width - padding * 2;
        var availableHeight = height - padding * 2;
        var cellSize = Math.min((availableWidth - gridPadding * ((0, _symbolConfig.GRID_SIZE) - 1)) / (0, _symbolConfig.GRID_SIZE), (availableHeight - gridPadding * ((0, _symbolConfig.GRID_SIZE) - 1)) / (0, _symbolConfig.GRID_SIZE));
        var startX = (width - (cellSize + gridPadding) * ((0, _symbolConfig.GRID_SIZE) - 1)) / 2;
        var startY = (height - (cellSize + gridPadding) * ((0, _symbolConfig.GRID_SIZE) - 1)) / 2;
        var baseScale = cellSize / (0, _symbolConfig.SYMBOL_SIZE);
        return {
            width: width,
            height: height,
            cellSize: cellSize,
            startX: startX,
            startY: startY,
            baseScale: baseScale,
            gridPadding: gridPadding
        };
    };
    return GridManager;
}();

},{"../configs/symbolConfig":"dyxnD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZOUX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinManager", ()=>SpinManager);
var _winCalculator = require("../utils/winCalculator");
var _gridManager = require("../utils/gridManager");
var _symbolConfig = require("../configs/symbolConfig");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var SpinManager = /** @class */ function() {
    function SpinManager(scene, symbols, currentGrid, baseScale, messageManager, soundManager, winAnimationManager) {
        this.scene = scene;
        this.symbols = symbols;
        this.currentGrid = currentGrid;
        this.baseScale = baseScale;
        this.messageManager = messageManager;
        this.soundManager = soundManager;
        this.winAnimationManager = winAnimationManager;
    }
    SpinManager.prototype.performSpin = function(betAmount, multiplier) {
        return __awaiter(this, void 0, Promise, function() {
            var results, error_1;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        console.log("SpinManager: Starting spin with bet: ".concat(betAmount, " and multiplier: ").concat(multiplier));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            7,
                            ,
                            8
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.messageManager.showMessage("Initiating crop analysis...", 1000)
                        ];
                    case 2:
                        _a.sent();
                        this.soundManager.playSpinSound();
                        return [
                            4 /*yield*/ ,
                            this.animateSpinSequence()
                        ];
                    case 3:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.messageManager.showMessage("Analyzing energy patterns...", 1000)
                        ];
                    case 4:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve) {
                                return _this.scene.time.delayedCall(1000, resolve);
                            })
                        ];
                    case 5:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.processSpinResults(betAmount, multiplier)
                        ];
                    case 6:
                        results = _a.sent();
                        return [
                            2 /*return*/ ,
                            results
                        ];
                    case 7:
                        error_1 = _a.sent();
                        console.error('SpinManager: Error during spin:', error_1);
                        return [
                            2 /*return*/ ,
                            {
                                totalWinAmount: 0,
                                winningLines: []
                            }
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    SpinManager.prototype.animateSpinSequence = function() {
        return __awaiter(this, void 0, Promise, function() {
            var _this = this;
            return __generator(this, function(_a) {
                return [
                    2 /*return*/ ,
                    new Promise(function(resolve) {
                        var completedSpins = 0;
                        var totalSpins = (0, _symbolConfig.GRID_SIZE) * (0, _symbolConfig.GRID_SIZE);
                        var _loop_1 = function(rowIndex) {
                            var _loop_2 = function(colIndex) {
                                var symbol = _this.symbols[rowIndex][colIndex];
                                _this.scene.tweens.add({
                                    targets: symbol,
                                    scaleX: 0,
                                    duration: 300,
                                    ease: 'Power1',
                                    onComplete: function() {
                                        var newSymbol = (0, _gridManager.generateRandomSymbol)();
                                        _this.currentGrid[rowIndex][colIndex] = newSymbol;
                                        symbol.setTexture("symbol-".concat(newSymbol));
                                        _this.scene.tweens.add({
                                            targets: symbol,
                                            scaleX: _this.baseScale,
                                            duration: 300,
                                            ease: 'Power1',
                                            onComplete: function() {
                                                completedSpins++;
                                                if (completedSpins === totalSpins) resolve();
                                            }
                                        });
                                    }
                                });
                            };
                            for(var colIndex = 0; colIndex < (0, _symbolConfig.GRID_SIZE); colIndex++)_loop_2(colIndex);
                        };
                        for(var rowIndex = 0; rowIndex < (0, _symbolConfig.GRID_SIZE); rowIndex++)_loop_1(rowIndex);
                    })
                ];
            });
        });
    };
    SpinManager.prototype.processSpinResults = function(betAmount, multiplier) {
        return __awaiter(this, void 0, Promise, function() {
            var _a, totalWinAmount, winningLines, _i, winningLines_1, line;
            var _this = this;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = (0, _winCalculator.calculateWinnings)(this.currentGrid, betAmount, multiplier), totalWinAmount = _a.totalWinAmount, winningLines = _a.winningLines;
                        if (!(winningLines.length > 0)) return [
                            3 /*break*/ ,
                            7
                        ];
                        this.soundManager.playWinSound(totalWinAmount);
                        _i = 0, winningLines_1 = winningLines;
                        _b.label = 1;
                    case 1:
                        if (!(_i < winningLines_1.length)) return [
                            3 /*break*/ ,
                            4
                        ];
                        line = winningLines_1[_i];
                        this.winAnimationManager.createWinAnimation(line.positions, this.symbols);
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve) {
                                return _this.scene.time.delayedCall(500, resolve);
                            })
                        ];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        return [
                            4 /*yield*/ ,
                            this.messageManager.showMessage("Harvesting cosmic energy...", 1000)
                        ];
                    case 5:
                        _b.sent();
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve) {
                                return _this.scene.time.delayedCall(1000, resolve);
                            })
                        ];
                    case 6:
                        _b.sent();
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 7:
                        this.soundManager.playLoseSound();
                        return [
                            4 /*yield*/ ,
                            this.messageManager.showMessage("Better luck next time...", 1000)
                        ];
                    case 8:
                        _b.sent();
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve) {
                                return _this.scene.time.delayedCall(1000, resolve);
                            })
                        ];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        return [
                            2 /*return*/ ,
                            {
                                totalWinAmount: totalWinAmount,
                                winningLines: winningLines
                            }
                        ];
                }
            });
        });
    };
    return SpinManager;
}();

},{"../utils/winCalculator":"6S69R","../utils/gridManager":"7nHAg","../configs/symbolConfig":"dyxnD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S69R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findWinningLines", ()=>findWinningLines);
parcelHelpers.export(exports, "calculateWinnings", ()=>calculateWinnings);
var _symbolConfig = require("../configs/symbolConfig");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var findWinningLines = function(grid) {
    var winningLines = [];
    // Check horizontal lines
    for(var row = 0; row < (0, _symbolConfig.GRID_SIZE); row++){
        var currentSymbol = '';
        var count = 0;
        var positions = [];
        for(var col = 0; col < (0, _symbolConfig.GRID_SIZE); col++){
            var symbol = grid[row][col];
            if (symbol === currentSymbol) {
                count++;
                positions.push([
                    row,
                    col
                ]);
            } else {
                if (count >= 3) winningLines.push({
                    positions: __spreadArray([], positions, true),
                    symbol: currentSymbol,
                    count: count,
                    winAmount: 0 // Will be calculated later
                });
                currentSymbol = symbol;
                count = 1;
                positions = [
                    [
                        row,
                        col
                    ]
                ];
            }
        }
        if (count >= 3) winningLines.push({
            positions: __spreadArray([], positions, true),
            symbol: currentSymbol,
            count: count,
            winAmount: 0
        });
    }
    // Check vertical lines
    for(var col = 0; col < (0, _symbolConfig.GRID_SIZE); col++){
        var currentSymbol = '';
        var count = 0;
        var positions = [];
        for(var row = 0; row < (0, _symbolConfig.GRID_SIZE); row++){
            var symbol = grid[row][col];
            if (symbol === currentSymbol) {
                count++;
                positions.push([
                    row,
                    col
                ]);
            } else {
                if (count >= 3) winningLines.push({
                    positions: __spreadArray([], positions, true),
                    symbol: currentSymbol,
                    count: count,
                    winAmount: 0
                });
                currentSymbol = symbol;
                count = 1;
                positions = [
                    [
                        row,
                        col
                    ]
                ];
            }
        }
        if (count >= 3) winningLines.push({
            positions: __spreadArray([], positions, true),
            symbol: currentSymbol,
            count: count,
            winAmount: 0
        });
    }
    // Check diagonals
    // Check diagonal (top-left to bottom-right)
    for(var startRow = 0; startRow < (0, _symbolConfig.GRID_SIZE) - 2; startRow++)for(var startCol = 0; startCol < (0, _symbolConfig.GRID_SIZE) - 2; startCol++){
        var positions = [];
        var symbol = grid[startRow][startCol];
        var isWinningLine = true;
        for(var i = 0; i < 3; i++){
            var row = startRow + i;
            var col = startCol + i;
            if (grid[row][col] !== symbol) {
                isWinningLine = false;
                break;
            }
            positions.push([
                row,
                col
            ]);
        }
        if (isWinningLine) winningLines.push({
            positions: positions,
            symbol: symbol,
            count: 3,
            winAmount: 0
        });
    }
    // Check diagonal (top-right to bottom-left)
    for(var startRow = 0; startRow < (0, _symbolConfig.GRID_SIZE) - 2; startRow++)for(var startCol = (0, _symbolConfig.GRID_SIZE) - 1; startCol >= 2; startCol--){
        var positions = [];
        var symbol = grid[startRow][startCol];
        var isWinningLine = true;
        for(var i = 0; i < 3; i++){
            var row = startRow + i;
            var col = startCol - i;
            if (grid[row][col] !== symbol) {
                isWinningLine = false;
                break;
            }
            positions.push([
                row,
                col
            ]);
        }
        if (isWinningLine) winningLines.push({
            positions: positions,
            symbol: symbol,
            count: 3,
            winAmount: 0
        });
    }
    console.log('Found winning lines:', winningLines);
    return winningLines;
};
var calculateWinnings = function(grid, betAmount, multiplier) {
    var winningLines = findWinningLines(grid);
    var totalWinAmount = 0;
    winningLines.forEach(function(line) {
        var symbolValue = (0, _symbolConfig.SYMBOL_VALUES)[line.symbol];
        line.winAmount = betAmount * multiplier * (symbolValue / 100) * line.count;
        totalWinAmount += line.winAmount;
        console.log("Win line: ".concat(line.symbol, " x").concat(line.count, " = ").concat(line.winAmount));
    });
    return {
        totalWinAmount: totalWinAmount,
        winningLines: winningLines
    };
};

},{"../configs/symbolConfig":"dyxnD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sDTj":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9b71 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9b71.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useIsMobile", ()=>useIsMobile);
var _react = require("react");
var _s = $RefreshSig$();
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    var _a = _react.useState(undefined), isMobile = _a[0], setIsMobile = _a[1];
    _react.useEffect(function() {
        var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
        var onChange = function() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return function() {
            return mql.removeEventListener("change", onChange);
        };
    }, []);
    return !!isMobile;
}
_s(useIsMobile, "0GqMkPP9LWUOAHEeYMc6D+ioKWI=");

  $parcel$ReactRefreshHelpers$9b71.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"6tLoE":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7809 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$7809.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _mobxReactLite = require("mobx-react-lite");
var _storeContext = require("@/contexts/StoreContext");
var _betAmountControl = require("./betting/BetAmountControl");
var _betAmountControlDefault = parcelHelpers.interopDefault(_betAmountControl);
var _gameControls = require("./betting/GameControls");
var _gameControlsDefault = parcelHelpers.interopDefault(_gameControls);
var _spinControls = require("./betting/SpinControls");
var _spinControlsDefault = parcelHelpers.interopDefault(_spinControls);
var _s = $RefreshSig$();
var BettingControls = _s((0, _mobxReactLite.observer)(_c = _s(function(_a) {
    _s();
    var onSpin = _a.onSpin, helpButton = _a.helpButton;
    var gameStore = (0, _storeContext.useStore)().gameStore;
    (0, _react.useEffect)(function() {
        console.log('BettingControls: Component mounted');
        return function() {
            return console.log('BettingControls: Component unmounting');
        };
    }, []);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "fixed bottom-0 left-0 right-0 w-full bg-nightsky/50 backdrop-blur-sm border-t border-neongreen/20 p-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "w-full md:w-1/2 space-y-2"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _betAmountControlDefault.default), null)), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameControlsDefault.default), {
        helpButton: helpButton
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _spinControlsDefault.default), {
        onSpin: onSpin
    }))));
}, "ydgY6grxlWNAQi0E5JoSNy9pfBw=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
})), "ydgY6grxlWNAQi0E5JoSNy9pfBw=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
});
_c1 = BettingControls;
exports.default = BettingControls;
var _c, _c1;
$RefreshReg$(_c, "BettingControls$observer");
$RefreshReg$(_c1, "BettingControls");

  $parcel$ReactRefreshHelpers$7809.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","mobx-react-lite":"e0C8P","@/contexts/StoreContext":"izR6x","./betting/BetAmountControl":"hKuTf","./betting/GameControls":"juBUK","./betting/SpinControls":"69kn9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"hKuTf":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9ad3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9ad3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _slider = require("@/components/ui/slider");
var _mobxReactLite = require("mobx-react-lite");
var _storeContext = require("@/contexts/StoreContext");
var _s = $RefreshSig$();
var BetAmountControl = _s((0, _mobxReactLite.observer)(_c = _s(function() {
    _s();
    var gameStore = (0, _storeContext.useStore)().gameStore;
    var handleSliderChange = function(value) {
        console.log('BetAmountControl: Slider value changed:', value[0]);
        gameStore.setBetAmount(value[0]);
    };
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
        className: "text-neongreen font-space whitespace-nowrap min-w-[120px]"
    }, "Bet (HRVST):"), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex-1"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _slider.Slider), {
        defaultValue: [
            gameStore.betAmount
        ],
        max: 10000,
        min: 100,
        step: 100,
        value: [
            gameStore.betAmount
        ],
        onValueChange: handleSliderChange,
        className: "w-full"
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
        className: "text-neongreen font-space min-w-[80px] text-right"
    }, gameStore.betAmount));
}, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
})), "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
});
_c1 = BetAmountControl;
exports.default = BetAmountControl;
var _c, _c1;
$RefreshReg$(_c, "BetAmountControl$observer");
$RefreshReg$(_c1, "BetAmountControl");

  $parcel$ReactRefreshHelpers$9ad3.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@/components/ui/slider":"7WltW","mobx-react-lite":"e0C8P","@/contexts/StoreContext":"izR6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7WltW":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$36b6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$36b6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slider", ()=>Slider);
var _react = require("react");
var _reactSlider = require("@radix-ui/react-slider");
var _utils = require("@/lib/utils");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var Slider = /*#__PURE__*/ _react.forwardRef(_c = function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactSlider.Root, __assign({
        ref: ref,
        className: (0, _utils.cn)("relative flex w-full touch-none select-none items-center", className)
    }, props), /*#__PURE__*/ _react.createElement(_reactSlider.Track, {
        className: "relative h-2 w-full grow overflow-hidden rounded-full bg-nightsky/20"
    }, /*#__PURE__*/ _react.createElement(_reactSlider.Range, {
        className: "absolute h-full bg-neongreen"
    })), /*#__PURE__*/ _react.createElement(_reactSlider.Thumb, {
        className: "block h-5 w-5 rounded-full border-2 border-neongreen bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    }));
});
_c1 = Slider;
Slider.displayName = _reactSlider.Root.displayName;
var _c, _c1;
$RefreshReg$(_c, "Slider$React.forwardRef");
$RefreshReg$(_c1, "Slider");

  $parcel$ReactRefreshHelpers$36b6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@radix-ui/react-slider":"hmJTK","@/lib/utils":"2536F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"hmJTK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Range", ()=>Range);
parcelHelpers.export(exports, "Root", ()=>Root);
parcelHelpers.export(exports, "Slider", ()=>Slider);
parcelHelpers.export(exports, "SliderRange", ()=>SliderRange);
parcelHelpers.export(exports, "SliderThumb", ()=>SliderThumb);
parcelHelpers.export(exports, "SliderTrack", ()=>SliderTrack);
parcelHelpers.export(exports, "Thumb", ()=>Thumb);
parcelHelpers.export(exports, "Track", ()=>Track);
parcelHelpers.export(exports, "createSliderScope", ()=>createSliderScope);
// packages/react/slider/src/Slider.tsx
var _react = require("react");
var _number = require("@radix-ui/number");
var _primitive = require("@radix-ui/primitive");
var _reactComposeRefs = require("@radix-ui/react-compose-refs");
var _reactContext = require("@radix-ui/react-context");
var _reactUseControllableState = require("@radix-ui/react-use-controllable-state");
var _reactDirection = require("@radix-ui/react-direction");
var _reactUsePrevious = require("@radix-ui/react-use-previous");
var _reactUseSize = require("@radix-ui/react-use-size");
var _reactPrimitive = require("@radix-ui/react-primitive");
var _reactCollection = require("@radix-ui/react-collection");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
var PAGE_KEYS = [
    "PageUp",
    "PageDown"
];
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var BACK_KEYS = {
    "from-left": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-right": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowRight"
    ],
    "from-bottom": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-top": [
        "Home",
        "PageDown",
        "ArrowUp",
        "ArrowLeft"
    ]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = (0, _reactCollection.createCollection)(SLIDER_NAME);
var [createSliderContext, createSliderScope] = (0, _reactContext.createContextScope)(SLIDER_NAME, [
    createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = _react.forwardRef((props, forwardedRef)=>{
    const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
        min
    ], value, onValueChange = ()=>{}, onValueCommit = ()=>{}, inverted = false, form, ...sliderProps } = props;
    const thumbRefs = _react.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = _react.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = (0, _reactUseControllableState.useControllableState)({
        prop: value,
        defaultProp: defaultValue,
        onChange: (value2)=>{
            const thumbs = [
                ...thumbRefs.current
            ];
            thumbs[valueIndexToChangeRef.current]?.focus();
            onValueChange(value2);
        }
    });
    const valuesBeforeSlideStartRef = _react.useRef(values);
    function handleSlideStart(value2) {
        const closestIndex = getClosestValueIndex(values, value2);
        updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
        updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = {
        commit: false
    }) {
        const decimalCount = getDecimalCount(step);
        const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
        const nextValue = (0, _number.clamp)(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
            if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else return prevValues;
        });
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderProvider, {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(Collection.Provider, {
            scope: props.__scopeSlider,
            children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(Collection.Slot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderOrientation, {
                    "aria-disabled": disabled,
                    "data-disabled": disabled ? "" : void 0,
                    ...sliderProps,
                    ref: forwardedRef,
                    onPointerDown: (0, _primitive.composeEventHandlers)(sliderProps.onPointerDown, ()=>{
                        if (!disabled) valuesBeforeSlideStartRef.current = values;
                    }),
                    min,
                    max,
                    inverted,
                    onSlideStart: disabled ? void 0 : handleSlideStart,
                    onSlideMove: disabled ? void 0 : handleSlideMove,
                    onSlideEnd: disabled ? void 0 : handleSlideEnd,
                    onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                            commit: true
                        }),
                    onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                            commit: true
                        }),
                    onStepKeyDown: ({ event, direction: stepDirection })=>{
                        if (!disabled) {
                            const isPageKey = PAGE_KEYS.includes(event.key);
                            const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                            const multiplier = isSkipKey ? 10 : 1;
                            const atIndex = valueIndexToChangeRef.current;
                            const value2 = values[atIndex];
                            const stepInDirection = step * multiplier * stepDirection;
                            updateValues(value2 + stepInDirection, atIndex, {
                                commit: true
                            });
                        }
                    }
                })
            })
        })
    });
});
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
});
var SliderHorizontal = _react.forwardRef((props, forwardedRef)=>{
    const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const [slider, setSlider] = _react.useState(null);
    const composedRefs = (0, _reactComposeRefs.useComposedRefs)(forwardedRef, (node)=>setSlider(node));
    const rectRef = _react.useRef(void 0);
    const direction = (0, _reactDirection.useDirection)(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderImpl, {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderVertical = _react.forwardRef((props, forwardedRef)=>{
    const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const sliderRef = _react.useRef(null);
    const ref = (0, _reactComposeRefs.useComposedRefs)(forwardedRef, sliderRef);
    const rectRef = _react.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderImpl, {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderImpl = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: (0, _primitive.composeEventHandlers)(props.onKeyDown, (event)=>{
            if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
            } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
            }
        }),
        onPointerDown: (0, _primitive.composeEventHandlers)(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId);
            event.preventDefault();
            if (context.thumbs.has(target)) target.focus();
            else onSlideStart(event);
        }),
        onPointerMove: (0, _primitive.composeEventHandlers)(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0, _primitive.composeEventHandlers)(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    });
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
    });
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = _react.useRef(null);
    const composedRefs = (0, _reactComposeRefs.useComposedRefs)(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>convertValueToPercentage(value, context.min, context.max));
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
        }
    });
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = _react.forwardRef((props, forwardedRef)=>{
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = _react.useState(null);
    const composedRefs = (0, _reactComposeRefs.useComposedRefs)(forwardedRef, (node)=>setThumb(node));
    const index = _react.useMemo(()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb) : -1, [
        getItems,
        thumb
    ]);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(SliderThumbImpl, {
        ...props,
        ref: composedRefs,
        index
    });
});
var SliderThumbImpl = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = _react.useState(null);
    const composedRefs = (0, _reactComposeRefs.useComposedRefs)(forwardedRef, (node)=>setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = (0, _reactUseSize.useSize)(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    _react.useEffect(()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /* @__PURE__ */ (0, _jsxRuntime.jsxs)("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
            /* @__PURE__ */ (0, _jsxRuntime.jsx)(Collection.ItemSlot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
                    role: "slider",
                    "aria-label": props["aria-label"] || label,
                    "aria-valuemin": context.min,
                    "aria-valuenow": value,
                    "aria-valuemax": context.max,
                    "aria-orientation": context.orientation,
                    "data-orientation": context.orientation,
                    "data-disabled": context.disabled ? "" : void 0,
                    tabIndex: context.disabled ? void 0 : 0,
                    ...thumbProps,
                    ref: composedRefs,
                    style: value === void 0 ? {
                        display: "none"
                    } : props.style,
                    onFocus: (0, _primitive.composeEventHandlers)(props.onFocus, ()=>{
                        context.valueIndexToChangeRef.current = index;
                    })
                })
            }),
            isFormControl && /* @__PURE__ */ (0, _jsxRuntime.jsx)(BubbleInput, {
                name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
                form: context.form,
                value
            }, index)
        ]
    });
});
SliderThumb.displayName = THUMB_NAME;
var BubbleInput = (props)=>{
    const { value, ...inputProps } = props;
    const ref = _react.useRef(null);
    const prevValue = (0, _reactUsePrevious.usePrevious)(value);
    _react.useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("input", {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)("input", {
        style: {
            display: "none"
        },
        ...inputProps,
        ref,
        defaultValue: value
    });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b);
}
function convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return (0, _number.clamp)(percentage, [
        0,
        100
    ]);
}
function getLabel(index, totalValues) {
    if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
    else if (totalValues === 2) return [
        "Minimum",
        "Maximum"
    ][index];
    else return void 0;
}
function getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue));
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function getDecimalCount(value) {
    return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
var Root = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;

},{"react":"21dqq","@radix-ui/number":"dGzBr","@radix-ui/primitive":"6tfNw","@radix-ui/react-compose-refs":"9oY2o","@radix-ui/react-context":"e4yIO","@radix-ui/react-use-controllable-state":"iGBDL","@radix-ui/react-direction":"eG2IQ","@radix-ui/react-use-previous":"9xxuP","@radix-ui/react-use-size":"2YMuD","@radix-ui/react-primitive":"6azWK","@radix-ui/react-collection":"10eEf","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGzBr":[function(require,module,exports,__globalThis) {
// packages/core/number/src/number.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eG2IQ":[function(require,module,exports,__globalThis) {
// packages/react/direction/src/Direction.tsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectionProvider", ()=>DirectionProvider);
parcelHelpers.export(exports, "Provider", ()=>Provider);
parcelHelpers.export(exports, "useDirection", ()=>useDirection);
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var DirectionContext = _react.createContext(void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = _react.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;

},{"react":"21dqq","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xxuP":[function(require,module,exports,__globalThis) {
// packages/react/use-previous/src/usePrevious.tsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "usePrevious", ()=>usePrevious);
var _react = require("react");
function usePrevious(value) {
    const ref = _react.useRef({
        value,
        previous: value
    });
    return _react.useMemo(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YMuD":[function(require,module,exports,__globalThis) {
// packages/react/use-size/src/useSize.tsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSize", ()=>useSize);
var _react = require("react");
var _reactUseLayoutEffect = require("@radix-ui/react-use-layout-effect");
function useSize(element) {
    const [size, setSize] = _react.useState(void 0);
    (0, _reactUseLayoutEffect.useLayoutEffect)(()=>{
        if (element) {
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ("borderBoxSize" in entry) {
                    const borderSizeEntry = entry["borderBoxSize"];
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize["inlineSize"];
                    height = borderSize["blockSize"];
                } else {
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width,
                    height
                });
            });
            resizeObserver.observe(element, {
                box: "border-box"
            });
            return ()=>resizeObserver.unobserve(element);
        } else setSize(void 0);
    }, [
        element
    ]);
    return size;
}

},{"react":"21dqq","@radix-ui/react-use-layout-effect":"FQXPb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juBUK":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$38e8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$38e8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _button = require("@/components/ui/button");
var _lucideReact = require("lucide-react");
var _mobxReactLite = require("mobx-react-lite");
var _storeContext = require("@/contexts/StoreContext");
var _s = $RefreshSig$();
var GameControls = _s((0, _mobxReactLite.observer)(_c = _s(function(_a) {
    _s();
    var helpButton = _a.helpButton;
    var gameStore = (0, _storeContext.useStore)().gameStore;
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        variant: "outline",
        size: "icon",
        onClick: function() {
            return gameStore.toggleMute();
        },
        className: "bg-nightsky/50 border-neongreen"
    }, gameStore.isMuted ? /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.VolumeX), {
        className: "h-6 w-6 text-neongreen"
    }) : /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Volume2), {
        className: "h-6 w-6 text-neongreen"
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "h-16 flex items-center"
    }, helpButton));
}, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
})), "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
});
_c1 = GameControls;
exports.default = GameControls;
var _c, _c1;
$RefreshReg$(_c, "GameControls$observer");
$RefreshReg$(_c1, "GameControls");

  $parcel$ReactRefreshHelpers$38e8.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@/components/ui/button":"cyayD","lucide-react":"8oTgY","mobx-react-lite":"e0C8P","@/contexts/StoreContext":"izR6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"69kn9":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$511b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$511b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _button = require("@/components/ui/button");
var _lucideReact = require("lucide-react");
var _mobxReactLite = require("mobx-react-lite");
var _storeContext = require("@/contexts/StoreContext");
var _s = $RefreshSig$();
var SpinControls = _s((0, _mobxReactLite.observer)(_c = _s(function(_a) {
    _s();
    var onSpin = _a.onSpin;
    var gameStore = (0, _storeContext.useStore)().gameStore;
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        className: "min-w-[200px] h-16 bg-neongreen text-nightsky hover:bg-neongreen/80 font-space text-lg",
        onClick: onSpin,
        disabled: gameStore.isSpinning || gameStore.betAmount > gameStore.balance
    }, gameStore.isSpinning ? /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Loader2), {
        className: "mr-2 h-6 w-6 animate-spin"
    }), "Spinning...") : 'SPIN'), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        className: "h-16 px-6 font-space ".concat(gameStore.isAutoSpin ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'),
        onClick: function() {
            return gameStore.toggleAutoSpin();
        },
        disabled: gameStore.isSpinning || gameStore.betAmount > gameStore.balance
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.RotateCw), {
        className: "h-6 w-6 ".concat(gameStore.isAutoSpin ? 'animate-spin' : '')
    })));
}, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
})), "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        (0, _storeContext.useStore)
    ];
});
_c1 = SpinControls;
exports.default = SpinControls;
var _c, _c1;
$RefreshReg$(_c, "SpinControls$observer");
$RefreshReg$(_c1, "SpinControls");

  $parcel$ReactRefreshHelpers$511b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@/components/ui/button":"cyayD","lucide-react":"8oTgY","mobx-react-lite":"e0C8P","@/contexts/StoreContext":"izR6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3YkNl":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$da7d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$da7d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _sheet = require("@/components/ui/sheet");
var _button = require("@/components/ui/button");
var _avatar = require("@/components/ui/avatar");
var _lucideReact = require("lucide-react");
var _userContext = require("@/contexts/UserContext");
var _gameShiftService = require("@/services/gameShiftService");
var _s = $RefreshSig$();
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var UserMenuBar = function() {
    _s();
    var _a;
    var navigate = (0, _reactRouterDom.useNavigate)();
    var _b = (0, _userContext.useUser)(), user = _b.user, logout = _b.logout;
    var _c = (0, _react.useState)(null), walletAddress = _c[0], setWalletAddress = _c[1];
    var _d = (0, _react.useState)(0), usdcBalance = _d[0], setUsdcBalance = _d[1];
    var _e = (0, _react.useState)(0), solBalance = _e[0], setSolBalance = _e[1];
    var _f = (0, _react.useState)(0), hrvstBalance = _f[0], setHrvstBalance = _f[1];
    var handleLogout = function() {
        logout();
        navigate('/');
    };
    (0, _react.useEffect)(function() {
        var fetchBalances = function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var balances, error_1;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!(user === null || user === void 0 ? void 0 : user.walletAddress)) return [
                                3 /*break*/ ,
                                4
                            ];
                            setWalletAddress(user.walletAddress);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4 /*yield*/ ,
                                (0, _gameShiftService.fetchWalletBalances)(user.walletAddress)
                            ];
                        case 2:
                            balances = _a.sent();
                            setUsdcBalance(balances.usdc || 0);
                            setSolBalance(balances.sol || 0);
                            setHrvstBalance(balances.hrvst || 0);
                            return [
                                3 /*break*/ ,
                                4
                            ];
                        case 3:
                            error_1 = _a.sent();
                            console.error("Error fetching wallet balances:", error_1);
                            return [
                                3 /*break*/ ,
                                4
                            ];
                        case 4:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        fetchBalances();
    }, [
        user === null || user === void 0 ? void 0 : user.walletAddress
    ]);
    // ... keep existing code (rest of the component remains the same)
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "fixed top-0 left-0 right-0 bg-nightsky/90 border-b border-neongreen/20 px-4 py-2 z-50"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center justify-between max-w-7xl mx-auto"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center space-x-4"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _avatar.Avatar), {
        className: "h-8 w-8"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _avatar.AvatarImage), {
        src: user === null || user === void 0 ? void 0 : user.avatarUrl
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _avatar.AvatarFallback), {
        className: "bg-harvestorange text-white"
    }, ((_a = user === null || user === void 0 ? void 0 : user.username) === null || _a === void 0 ? void 0 : _a.slice(0, 2).toUpperCase()) || 'U')), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex flex-col space-y-1"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
        className: "text-white font-medium"
    }, (user === null || user === void 0 ? void 0 : user.username) || 'Player'), walletAddress && /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
        className: "text-sm text-harvestpeach truncate max-w-[150px]"
    }, "Wallet: ", walletAddress), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex space-x-3 text-sm"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center space-x-1 text-neongreen"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.DollarSign), {
        className: "w-4 h-4"
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", null, usdcBalance.toFixed(2), " USDC")), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center space-x-1 text-harvestpeach"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Coins), {
        className: "w-4 h-4"
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", null, hrvstBalance.toFixed(2), " HRVST")), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center space-x-1 text-sky-500"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Wallet), {
        className: "w-4 h-4"
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", null, solBalance.toFixed(2), " SOL"))))), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "flex items-center space-x-2"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        variant: "ghost",
        size: "icon",
        onClick: function() {
            return navigate('/game');
        },
        className: "text-neongreen hover:bg-neongreen/20"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.X), {
        className: "h-6 w-6"
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _sheet.Sheet), null, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _sheet.SheetTrigger), {
        asChild: true
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        variant: "ghost",
        size: "icon",
        className: "text-neongreen hover:bg-neongreen/20"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.Menu), {
        className: "h-6 w-6"
    }))), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _sheet.SheetContent), {
        className: "bg-nightsky border-harvestorange"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _sheet.SheetHeader), null, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _sheet.SheetTitle), {
        className: "text-neongreen"
    }, "Menu")), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "mt-6 space-y-4"
    }, [
        {
            icon: (0, _lucideReact.User),
            label: 'Profile',
            path: '/profile'
        },
        {
            icon: (0, _lucideReact.Settings),
            label: 'Settings',
            path: '/settings'
        },
        {
            icon: (0, _lucideReact.ShoppingBag),
            label: 'Shop',
            path: '/shop'
        },
        {
            icon: (0, _lucideReact.Repeat),
            label: 'Trade',
            path: '/trade'
        },
        {
            icon: (0, _lucideReact.Wallet),
            label: 'Buy HRVST',
            path: '/buy-tokens'
        }
    ].map(function(item) {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
            key: item.path,
            variant: "ghost",
            className: "w-full justify-start text-white hover:text-neongreen hover:bg-neongreen/20",
            onClick: function() {
                return navigate(item.path);
            }
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(item.icon, {
            className: "mr-2 h-5 w-5"
        }), item.label);
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _button.Button), {
        variant: "ghost",
        className: "w-full justify-start text-harvestorange hover:text-harvestpeach hover:bg-harvestorange/20",
        onClick: handleLogout
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _lucideReact.LogOut), {
        className: "mr-2 h-5 w-5"
    }), "Logout")))))));
};
_s(UserMenuBar, "GANRLjK5MtSs5LQ7uHI2hXJL6LA=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate),
        (0, _userContext.useUser),
        (0, _userContext.useUser),
        (0, _userContext.useUser)
    ];
});
_c = UserMenuBar;
exports.default = UserMenuBar;
var _c;
$RefreshReg$(_c, "UserMenuBar");

  $parcel$ReactRefreshHelpers$da7d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"9xmpe","@/components/ui/sheet":"86pyl","@/components/ui/button":"cyayD","@/components/ui/avatar":"22Fi6","lucide-react":"8oTgY","@/contexts/UserContext":"bHCI1","@/services/gameShiftService":"dUubP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"86pyl":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$475c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$475c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sheet", ()=>Sheet);
parcelHelpers.export(exports, "SheetTrigger", ()=>SheetTrigger);
parcelHelpers.export(exports, "SheetClose", ()=>SheetClose);
parcelHelpers.export(exports, "SheetContent", ()=>SheetContent);
parcelHelpers.export(exports, "SheetHeader", ()=>SheetHeader);
parcelHelpers.export(exports, "SheetTitle", ()=>SheetTitle);
var _react = require("react");
var _reactDialog = require("@radix-ui/react-dialog");
var _utils = require("@/lib/utils");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var Sheet = _reactDialog.Root;
var SheetTrigger = _reactDialog.Trigger;
var SheetClose = _reactDialog.Close;
var SheetPortal = _reactDialog.Portal;
var SheetOverlay = /*#__PURE__*/ _react.forwardRef(function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactDialog.Overlay, __assign({
        className: (0, _utils.cn)("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props, {
        ref: ref
    }));
});
_c = SheetOverlay;
SheetOverlay.displayName = _reactDialog.Overlay.displayName;
var SheetContent = /*#__PURE__*/ _react.forwardRef(_c1 = function(_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _react.createElement(SheetPortal, null, /*#__PURE__*/ _react.createElement(SheetOverlay, null), /*#__PURE__*/ _react.createElement(_reactDialog.Content, __assign({
        ref: ref,
        className: (0, _utils.cn)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", className)
    }, props), children));
});
_c2 = SheetContent;
SheetContent.displayName = _reactDialog.Content.displayName;
var SheetHeader = function(_a) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement("div", __assign({
        className: (0, _utils.cn)("flex flex-col space-y-2", className)
    }, props));
};
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
var SheetTitle = /*#__PURE__*/ _react.forwardRef(_c4 = function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactDialog.Title, __assign({
        ref: ref,
        className: (0, _utils.cn)("text-lg font-semibold text-foreground", className)
    }, props));
});
_c5 = SheetTitle;
SheetTitle.displayName = _reactDialog.Title.displayName;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "SheetOverlay");
$RefreshReg$(_c1, "SheetContent$React.forwardRef");
$RefreshReg$(_c2, "SheetContent");
$RefreshReg$(_c3, "SheetHeader");
$RefreshReg$(_c4, "SheetTitle$React.forwardRef");
$RefreshReg$(_c5, "SheetTitle");

  $parcel$ReactRefreshHelpers$475c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@radix-ui/react-dialog":"6XGgt","@/lib/utils":"2536F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"22Fi6":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b7ca = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b7ca.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Avatar", ()=>Avatar);
parcelHelpers.export(exports, "AvatarImage", ()=>AvatarImage);
parcelHelpers.export(exports, "AvatarFallback", ()=>AvatarFallback);
var _react = require("react");
var _reactAvatar = require("@radix-ui/react-avatar");
var _utils = require("@/lib/utils");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var Avatar = /*#__PURE__*/ _react.forwardRef(_c = function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactAvatar.Root, __assign({
        ref: ref,
        className: (0, _utils.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
    }, props));
});
_c1 = Avatar;
Avatar.displayName = _reactAvatar.Root.displayName;
var AvatarImage = /*#__PURE__*/ _react.forwardRef(_c2 = function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactAvatar.Image, __assign({
        ref: ref,
        className: (0, _utils.cn)("aspect-square h-full w-full", className)
    }, props));
});
_c3 = AvatarImage;
AvatarImage.displayName = _reactAvatar.Image.displayName;
var AvatarFallback = /*#__PURE__*/ _react.forwardRef(_c4 = function(_a, ref) {
    var className = _a.className, props = __rest(_a, [
        "className"
    ]);
    return /*#__PURE__*/ _react.createElement(_reactAvatar.Fallback, __assign({
        ref: ref,
        className: (0, _utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
    }, props));
});
_c5 = AvatarFallback;
AvatarFallback.displayName = _reactAvatar.Fallback.displayName;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Avatar$React.forwardRef");
$RefreshReg$(_c1, "Avatar");
$RefreshReg$(_c2, "AvatarImage$React.forwardRef");
$RefreshReg$(_c3, "AvatarImage");
$RefreshReg$(_c4, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c5, "AvatarFallback");

  $parcel$ReactRefreshHelpers$b7ca.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@radix-ui/react-avatar":"gd1JA","@/lib/utils":"2536F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gd1JA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Avatar", ()=>Avatar);
parcelHelpers.export(exports, "AvatarFallback", ()=>AvatarFallback);
parcelHelpers.export(exports, "AvatarImage", ()=>AvatarImage);
parcelHelpers.export(exports, "Fallback", ()=>Fallback);
parcelHelpers.export(exports, "Image", ()=>Image);
parcelHelpers.export(exports, "Root", ()=>Root);
parcelHelpers.export(exports, "createAvatarScope", ()=>createAvatarScope);
// packages/react/avatar/src/Avatar.tsx
var _react = require("react");
var _reactContext = require("@radix-ui/react-context");
var _reactUseCallbackRef = require("@radix-ui/react-use-callback-ref");
var _reactUseLayoutEffect = require("@radix-ui/react-use-layout-effect");
var _reactPrimitive = require("@radix-ui/react-primitive");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = (0, _reactContext.createContextScope)(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = _react.useState("idle");
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
            ...avatarProps,
            ref: forwardedRef
        })
    });
});
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar, src, onLoadingStatusChange = ()=>{}, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
    const handleLoadingStatusChange = (0, _reactUseCallbackRef.useCallbackRef)((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    (0, _reactUseLayoutEffect.useLayoutEffect)(()=>{
        if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).img, {
        ...imageProps,
        ref: forwardedRef,
        src
    }) : null;
});
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = _react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = _react.useState(delayMs === void 0);
    _react.useEffect(()=>{
        if (delayMs !== void 0) {
            const timerId = window.setTimeout(()=>setCanRender(true), delayMs);
            return ()=>window.clearTimeout(timerId);
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, _jsxRuntime.jsx)((0, _reactPrimitive.Primitive).span, {
        ...fallbackProps,
        ref: forwardedRef
    }) : null;
});
AvatarFallback.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
    const [loadingStatus, setLoadingStatus] = _react.useState("idle");
    (0, _reactUseLayoutEffect.useLayoutEffect)(()=>{
        if (!src) {
            setLoadingStatus("error");
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            };
        setLoadingStatus("loading");
        image.onload = updateStatus("loaded");
        image.onerror = updateStatus("error");
        image.src = src;
        if (referrerPolicy) image.referrerPolicy = referrerPolicy;
        return ()=>{
            isMounted = false;
        };
    }, [
        src,
        referrerPolicy
    ]);
    return loadingStatus;
}
var Root = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;

},{"react":"21dqq","@radix-ui/react-context":"e4yIO","@radix-ui/react-use-callback-ref":"jZRpW","@radix-ui/react-use-layout-effect":"FQXPb","@radix-ui/react-primitive":"6azWK","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUubP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerGameShiftUser", ()=>registerGameShiftUser);
parcelHelpers.export(exports, "fetchWalletBalances", ()=>fetchWalletBalances);
var _uuid = require("uuid");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIzMjkxZGYyMy0zODY1LTQwNjEtYTcxZS1kOGIzZGE1ZGYyNTgiLCJzdWIiOiIxNjI3MWQ0Mi1kMDdjLTRmNTgtOTQ2MC05Nzg4MTY3NjkxNjEiLCJpYXQiOjE3MzMzNzQxMTV9.HjZ5MPjypiPSoyGqxrw22IPYsgssRTGPWW4M_DBzWxw";
if (!API_KEY) console.warn("\u26A0\uFE0F GameShift: API key not found in environment variables");
// Generate a unique reference ID
var referenceID = "user_".concat((0, _uuid.v4)().replace(/-/g, ''));
var registerGameShiftUser = function(email, externalWallet) {
    return __awaiter(void 0, void 0, Promise, function() {
        var endpoint, headers, userData, response, data, error_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (!API_KEY) throw new Error('GameShift API key not found');
                    console.log("\uD83C\uDFAE GameShift: Attempting registration...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    endpoint = 'https://api.gameshift.dev/nx/users';
                    headers = {
                        'accept': 'application/json',
                        'x-api-key': API_KEY,
                        'Content-Type': 'application/json'
                    };
                    userData = __assign({
                        email: email,
                        referenceId: referenceID
                    }, externalWallet && {
                        externalWallet: externalWallet
                    });
                    console.log("\uD83D\uDCE4 GameShift: Sending registration request with data:", __assign(__assign({}, userData), {
                        externalWallet: userData.externalWallet ? '[REDACTED]' : undefined
                    }));
                    return [
                        4 /*yield*/ ,
                        fetch(endpoint, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(userData)
                        })
                    ];
                case 2:
                    response = _a.sent();
                    return [
                        4 /*yield*/ ,
                        response.json()
                    ];
                case 3:
                    data = _a.sent();
                    if (!response.ok) {
                        console.error("\u274C GameShift: Server responded with error:", data);
                        throw new Error(data.message || 'Failed to register user with GameShift');
                    }
                    console.log("\u2705 GameShift: Registration Successful:", data);
                    return [
                        2 /*return*/ ,
                        data
                    ];
                case 4:
                    error_1 = _a.sent();
                    console.error("\u274C GameShift: Registration Error:", error_1.message);
                    throw error_1;
                case 5:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
var fetchWalletBalances = function(walletAddress) {
    return __awaiter(void 0, void 0, void 0, function() {
        var response;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (!API_KEY) throw new Error('GameShift API key not found');
                    return [
                        4 /*yield*/ ,
                        fetch("https://api.gameshift.dev/nx/users/".concat(referenceID, "/wallet-address"), {
                            headers: {
                                'accept': 'application/json',
                                'x-api-key': API_KEY
                            }
                        })
                    ];
                case 1:
                    response = _a.sent();
                    if (!response.ok) throw new Error('Failed to fetch wallet balances');
                    return [
                        4 /*yield*/ ,
                        response.json()
                    ];
                case 2:
                    return [
                        2 /*return*/ ,
                        _a.sent()
                    ];
            }
        });
    });
};

},{"uuid":"j4KJi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOsBl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("@/components/ui/button");
var _dialog = require("@/components/ui/dialog");
var _lucideReact = require("lucide-react");
var HowToPlay = function() {
    return React.createElement((0, _dialog.Dialog), null, React.createElement((0, _dialog.DialogTrigger), {
        asChild: true
    }, React.createElement((0, _button.Button), {
        variant: "outline",
        size: "icon",
        className: "bg-nightsky/50 border-neongreen"
    }, React.createElement((0, _lucideReact.HelpCircle), {
        className: "h-5 w-5 text-neongreen"
    }))), React.createElement((0, _dialog.DialogContent), {
        className: "bg-nightsky border-neongreen"
    }, React.createElement((0, _dialog.DialogHeader), null, React.createElement((0, _dialog.DialogTitle), {
        className: "text-neongreen font-space"
    }, "How to Play Harvest Slots"), React.createElement((0, _dialog.DialogDescription), {
        className: "text-harvestpeach space-y-4"
    }, React.createElement("div", {
        className: "mt-4"
    }, React.createElement("h3", {
        className: "font-bold mb-2"
    }, "Game Rules:"), React.createElement("ul", {
        className: "list-disc list-inside space-y-2"
    }, React.createElement("li", null, "Place your bet using the controls below the game grid"), React.createElement("li", null, "Click SPIN or use Auto-Spin for continuous play"), React.createElement("li", null, "Win by matching 3 or more symbols in any direction"), React.createElement("li", null, "Payouts: 0.001 SOL = 1000 HRVST tokens"))), React.createElement("div", null, React.createElement("h3", {
        className: "font-bold mb-2"
    }, "Winning Patterns:"), React.createElement("p", null, "Matches can occur in any direction:"), React.createElement("ul", {
        className: "list-disc list-inside space-y-2"
    }, React.createElement("li", null, "Horizontal lines"), React.createElement("li", null, "Vertical lines"), React.createElement("li", null, "Diagonal lines")))))));
};
_c = HowToPlay;
exports.default = HowToPlay;
var _c;
$RefreshReg$(_c, "HowToPlay");

},{"@/components/ui/button":"cyayD","@/components/ui/dialog":"1YubV","lucide-react":"8oTgY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfnb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWinToastMessage", ()=>getWinToastMessage);
parcelHelpers.export(exports, "getLoseToastMessage", ()=>getLoseToastMessage);
var getWinToastMessage = function(hrvestTokens, isBigWin) {
    var messages = isBigWin ? [
        "\uD83C\uDF1F Cosmic Abundance! Your harvest is bountiful!",
        "\u2728 The stars align for a prosperous harvest!",
        "\uD83C\uDF3E A legendary harvest bestowed upon you!"
    ] : [
        "\uD83C\uDF31 Seeds of prosperity bloom!",
        "\uD83C\uDF40 A rewarding harvest arrives!",
        "\uD83C\uDF3F Nature's bounty smiles upon you!"
    ];
    return {
        title: isBigWin ? "\uD83C\uDF8A SPECTACULAR HARVEST! \uD83C\uDF8A" : "\uD83C\uDF3E Bountiful Win! \uD83C\uDF3E",
        description: "".concat(messages[Math.floor(Math.random() * messages.length)], " ").concat(hrvestTokens.toFixed(0), " HRVST"),
        duration: isBigWin ? 5000 : 2000
    };
};
var getLoseToastMessage = function() {
    var messages = [
        "\uD83C\uDFB2 Fortune favors the persistent!",
        "\uD83C\uDF40 Your luck is brewing!",
        "\uD83C\uDF31 Every attempt plants seeds of future wins!",
        "\u2728 The stars are still aligning!"
    ];
    return {
        title: "Keep Growing! \uD83C\uDF31",
        description: messages[Math.floor(Math.random() * messages.length)],
        duration: 1000
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aQL8O","4cJp5"], null, "parcelRequire94c2")

//# sourceMappingURL=MainGamePage.ea929c78.js.map
