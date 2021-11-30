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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"dtTg0":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"9W9yf"}],"bJe4D":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "aabef392f217190b";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"eSwaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bootstrap = require("bootstrap");
var _lunr = require("lunr");
var _lunrDefault = parcelHelpers.interopDefault(_lunr);
var documents = [
    {
        name: 'Abrasion Resistance',
        definition: 'The ability of a coating to resist degradation due to mechanical wear.'
    },
    {
        name: 'Abrasive Media',
        definition: 'The material used in abrasive blasting to remove surface contaminants. Examples of abrasive media are sand, iron shot, crushed iron slag, glass beads, or ground nutshells.'
    },
    {
        name: 'Accelerated Weathering',
        definition: 'A test designed to simulate but&nbsp;simultaneously intensify and accelerate the destructive action of natural outdoor weathering.'
    },
    {
        name: 'Accelerator',
        definition: 'A substance used in small proportions to increase the speed of a chemical reaction. Accelerators are often used in the paint industry to hasten the curing of a coating system.'
    },
    {
        name: 'Acrylic Latex',
        definition: 'An aqueous dispersion of acrylic resins.'
    },
    {
        name: 'Acrylic Resin',
        definition: 'A clear resin attained by polymerizing various acrylic monomers either alone or in combination.'
    },
    {
        name: 'Activator',
        definition: 'The curing agent of a two component coating system.'
    },
    {
        name: 'Adhesion',
        definition: 'The degree of attachment between a paint film and the underlying material to which it is in contact (substrate).'
    },
    {
        name: 'Adsorption',
        definition: 'Process of attraction or attachment to a surface. The retention of foreign molecules on the surface of a substance.'
    },
    {
        name: 'Air Cap (Air Nozzle)',
        definition: 'Perforated housing for directing the atomizing air at the head of an air spray gun.'
    },
    {
        name: 'Air Drying',
        definition: 'The most common form of curing a coating in which drying takes place by oxidation or solvent evaporation by simple exposure to air without heat or catalyst.'
    },
    {
        name: 'Air Entrapment',
        definition: 'The inclusion of air bubbles in liquid paint or a paint film.'
    },
    {
        name: 'Airless Spray',
        definition: 'A spraying system in which paint is atomized using high hydraulic pressure rather than compressed air.'
    },
    {
        name: 'Alcohol',
        definition: 'A group of solvents of relatively high evaporation rate but with&nbsp;reasonably low solvent strength. Methanol, ethanol, and isopropyl are common alcohols.'
    },
    {
        name: 'Aliphatic Hydrocarbons',
        definition: 'A class of organic solvents which are composed of open chains of carbon atoms. Aliphatics are relatively weak solvents. Mineral spirits and VM &amp; P Naphtha are aliphatic solvents.'
    },
    {
        name: 'Alkali',
        definition: 'An aqueous liquid that has a pH value of between 7 and 14. A base or caustic material.'
    },
    {
        name: 'Alkyd Resin',
        definition: 'Resins prepared by reacting alcohols and fatty acids. Widely used in general purpose coatings.'
    },
    {
        name: 'Alligatoring',
        definition: 'Surface imperfections of a coating film having the wrinkled appearance of alligator skin.'
    },
    {
        name: 'Ambient Temperature',
        definition: 'Room temperature or the existing temperature of the surroundings.'
    },
    {
        name: 'Amine',
        definition: 'Materials often used as curing agents for epoxy coatings.'
    },
    {
        name: 'Anchor Pattern',
        definition: 'The surface profile generated by abrasive blasting or some power tool cleaning. The distance between peaks and valleys of the blast profile.'
    },
    {
        name: 'Anode',
        definition: 'The positive terminal of an electrical source. In a corrosion cell, the anode is the electrode that has the greater tendency to go into solution of the point at which corrosion occurs.'
    },
    {
        name: 'Aromatic Hydrocarbons',
        definition: 'A class of relatively strong organic solvents which contain an unsaturated ring of carbon atoms. Examples are benzene, toluene, and xylene.'
    },
    {
        name: 'Asphalt',
        definition: 'A black resinous material of petroleum origin.'
    },
    {
        name: 'ASTM B 117',
        definition: 'Salt Fog Spray - Atomized 5% sodium chloride solution at 95°F (35°C).'
    },
    {
        name: 'ASTM D 4258 - 83',
        definition: 'Standard practice for surface cleaning concrete for coating. This practice includes surface cleaning of concrete to remove grease, dirt, and loose material before the application of coatings. Procedures include broom cleaning, vacuum cleaning, air blast cleaning, water cleaning, detergent water cleaning, and steam cleaning.'
    },
    {
        name: 'ASTM D 4259 - 83',
        definition: 'Standard practice for abrading concrete. This practice includes surface preparation of concrete to prepare the surface before the application of coatings. This practice is intended to alter the surface profile of the concrete.'
    },
    {
        name: 'ASTM D 4260 - 83',
        definition: 'Standard practice for acid etching concrete. This practice includes surface preparation of concrete to prepare the surface before the application of coatings. This practice is intended to alter the surface profile of the concrete.'
    },
    {
        name: 'ASTM D 4261 - 83',
        definition: 'Standard practice for surface cleaning concrete unit masonry for coating. This practice covers surface cleaning of concrete unit masonry to remove dust, dirt, mortar spatter, oil, and grease before the application of coatings. Procedures include vacuum cleaning, air blast cleaning, water cleaning, detergent water wash, steam cleaning, and mechanical cleaning.'
    },
    {
        name: 'ASTM D 4262 - 83',
        definition: 'Standard test method for pH of chemically cleaned or etched concrete surfaces. This test method covers the procedure for determining the acidity or alkalinity of concrete surfaces prepared by chemical cleaning or etching before coatings.'
    },
    {
        name: 'ASTM D 4263 - 83',
        definition: 'Standard test method for indication of moisture in concrete by the plastic sheet method. This test method is used to indicate the presence of capillary moisture in concrete.'
    },
    {
        name: 'Barrier Coat',
        definition: 'A coating used to isolate a paint system either from the surface to which it is applied or a previous coating to increase adhesion or ensure compatibility.'
    },
    {
        name: 'Binder',
        definition: 'The nonvolatile portion of the vehicle of a coating which holds together the pigment particles.'
    },
    {
        name: 'Bituminous Coating',
        definition: 'A coal tar or asphalt-based coating material usually used in thick films.'
    },
    {
        name: 'Blast Cleaning',
        definition: 'The cleaning and roughing of a surface by the use of sand, artificial grit, or fine metal shot, which is projected at a surface by compressed air or mechanical means.'
    },
    {
        name: 'Blast Profile',
        definition: 'A cross-sectional view of an abrasive blasted surface. See also: Anchor Pattern.'
    },
    {
        name: 'Bleaching',
        definition: 'The fading of a color toward white generally caused by exposure to chemicals\nor ultraviolet radiation.'
    },
    {
        name: 'Bleeding',
        definition: 'The diffusion of color matter through a coating from underlying surfaces causing color change.'
    },
    {
        name: 'Blistering',
        definition: 'The formation of blisters in paint films by the local loss of adhesion and lifting of the film from the underlying substrate.'
    },
    {
        name: 'Blooming',
        definition: 'A haziness which develops on paint surfaces caused by the exudation of a component of the paint film.'
    },
    {
        name: 'Blushing',
        definition: 'A film defect which manifests itself as a milky appearance that is generally caused by rapid solvent evaporation or the presence of excessive moisture during the curing process.'
    },
    {
        name: 'Bonding',
        definition: 'The attachment between a coating film and the underlying material to which it is applied.'
    },
    {
        name: 'Bounce Back',
        definition: 'The rebound of atomized paint, especially when applied by conventional air spray methods.'
    },
    {
        name: 'Boxing',
        definition: 'Mixing of coatings by pouring from one container to another.'
    },
    {
        name: 'Bridging',
        definition: 'The formation of a paint film over a depression.'
    },
    {
        name: 'Brittleness',
        definition: 'The lack of resistance to cracking or breaking of a paint film when bent or flexed.'
    },
    {
        name: 'Brushability',
        definition: 'The ease of applying a coating by brush.'
    },
    {
        name: 'Bubbling',
        definition: 'A temporary or permanent film defect in which air or solvent vapor bubbles are present in the applied film. Often caused by coating over porous surfaces (concrete, IOZ’s, rust), coating over hot substrates, or a solvent evaporating too fast. Not necessarily harmful, especially if the coating flows back together and forms a continuous film.'
    },
    {
        name: 'Build',
        definition: 'The wet or dry thickness of a coating film.'
    },
    {
        name: 'Catalyst',
        definition: 'An accelerator, activator or curing agent which chemically increases the rate of reaction in a coating.'
    },
    {
        name: 'Cathode',
        definition: 'The negative terminal of an electrolytic cell which, in the corrosion process, is protected and not attacked.'
    },
    {
        name: 'Cathodic Protection',
        definition: 'The reduction or prevention of corrosion of a metal surface caused by making it cathodic. This is accomplished by using a sacrificial anode (such as in zinc rich coatings or galvanizing) or by using impressed current.'
    },
    {
        name: 'Caustic',
        definition: 'A strong base or alkaline material.'
    },
    {
        name: 'Caustic Soda',
        definition: 'A common name for sodium hydroxide, a strong base or alkali.'
    },
    {
        name: 'Cellosolve',
        definition: 'Proprietary name for ethylene glycol monoethyl ether. A slow evaporating, water-miscible, relatively strong solvent often used in epoxy coatings.'
    },
    {
        name: 'Cementitious Coatings',
        definition: 'A coating containing Portland cement as one of its components held on the surface by a binder.'
    },
    {
        name: 'Centipoise',
        definition: 'One hundredth of a poise which is a unit of measurement for viscosity. Water at room temperature has a viscosity of 1.0 Centipoise.'
    },
    {
        name: 'Chalking',
        definition: 'The formation of a friable powdery coating on the surface of a paint film, generally caused by exposure to ultraviolet radiation resulting in a loss of gloss.'
    },
    {
        name: 'Checking',
        definition: 'Cracks in the surface of a paint film.&nbsp;Often caused by poor flexibility of the topcoat, excessive DFT, or excessive service temperature. Typically seen with alkyd (oil-based) coatings.'
    },
    {
        name: 'Chipping',
        definition: 'Small pieces of paint removed from the surface, typically a sign of physical damage incurred in shipping or handling. Use of a surface tolerant primer for touch-up followed by the same finish coat generally solves the problem.'
    },
    {
        name: 'Chlorinated Hydrocarbon',
        definition: 'A class of strong, fast evaporating, nonflammable solvents such as carbon tetrachloride, methylene chloride, or trichloroethylene.'
    },
    {
        name: 'Chlorinated Rubber',
        definition: 'A coating resin formed by the reaction of rubber with chlorine gas. Often used for chemical or water-resistant properties.'
    },
    {
        name: 'Clean and Dry',
        definition: 'Rather than a method, the requirement for Clean and Dry describes the surface condition before painting. The surface shall be clean, dry, and free of oil, grease, wax, form oils, and any other contaminant that may affect the adhesion of the coating.'
    },
    {
        name: 'Cleaners',
        definition: 'A detergent, alkali, acid, or similar contamination removing material, which is usually waterborne.'
    },
    {
        name: 'Coal Tar',
        definition: 'A dark brown to black bituminous material produced by the destructive distillation of coal.'
    },
    {
        name: 'Coal Tar Epoxy',
        definition: 'A coating in which the binder or vehicle is a combination of coal tar and epoxy resins.'
    },
    {
        name: 'Coalescence',
        definition: 'The formation of resinous or polymeric material when water evaporates from an emulsion or a latex system, permitting contact and fusion of adjacent particles; fusing or flowing together of liquid particles.'
    },
    {
        name: 'Coat',
        definition: 'The paint applied to a surface in a single application to form a film when dry.'
    },
    {
        name: 'Coating System',
        definition: 'A number of coats separately applied, in a predetermined order, at suitable intervals to allow for drying and curing, resulting in a completed job.'
    },
    {
        name: 'Cobwebbing',
        definition: 'Premature drying of a coating during spraying causing a spider web effect.'
    },
    {
        name: 'Cohesion',
        definition: 'The forces which bind the particles of a paint film together into a continuous film.'
    },
    {
        name: 'Cold Rolled Steel',
        definition: 'Low carbon, cold-reduced sheet steel. Differs from hot rolled steel by the absence of mill scale.'
    },
    {
        name: 'Color Fast',
        definition: 'Nonfading.'
    },
    {
        name: 'Color Retention',
        definition: 'The ability to retain its original color during weathering or chemical exposure.'
    },
    {
        name: 'Combustible Liquid',
        definition: 'Any liquid having a flashpoint at or above 100°F (37.8°C).'
    },
    {
        name: 'Compatibility',
        definition: 'The ability to mix with or adhere properly to other coatings without detriment.'
    },
    {
        name: 'Conical Mandrel',
        definition: "An instrument used to evaluate a coating's resistance to cracking when bent over a specified radius."
    },
    {
        name: 'Copolymer',
        definition: 'Large molecules obtained by simultaneous polymerization of different monomers, as in vinyl copolymers.'
    },
    {
        name: 'Corrosion',
        definition: 'The decay, oxidation, or deterioration of a substance (steel, concrete, and others) due to interaction with the environment. See also: Rust.'
    },
    {
        name: 'Cracking',
        definition: 'Splitting of a paint film usually due to aging. Often caused by excessive film thickness and insufficient dry time between coats, limited coating flexibility, or a substrate that is too hot or too cold when sprayed.'
    },
    {
        name: 'Craters',
        definition: 'The formation of small bowl shape depressions in paint films.'
    },
    {
        name: 'Cross Spraying',
        definition: 'Spraying the first pass in one direction and the second at a right angle to the first, providing more even film distribution.'
    },
    {
        name: 'Crosslinking',
        definition: 'The setting up of chemical links between molecular chains to form a three-dimensional network of connected molecules.'
    },
    {
        name: 'Curing Agent',
        definition: 'A hardener or activator added to a synthetic resin to develop the proper film-forming properties.'
    },
    {
        name: 'Curtains',
        definition: 'Long horizontal runs in a coating film that occur on vertical surfaces when a coating is applied too heavily.'
    },
    {
        name: 'Degreaser',
        definition: 'A chemical solution or compound designed to remove grease, oils, and similar contaminants.'
    },
    {
        name: 'Deionized Water',
        definition: 'Water that has been purified to remove mineral salts.'
    },
    {
        name: 'Delamination',
        definition: 'The separation between layers of coats due to very poor adhesion.'
    },
    {
        name: 'Density',
        definition: 'Mass per unit volume, usually expressed as grams per milliliter or pounds per gallon.'
    },
    {
        name: 'Descaling',
        definition: 'The removal of mill scale or rust from steel by mechanical means, sometimes assisted by flame cleaning.'
    },
    {
        name: 'Dew Point',
        definition: 'The temperature of a surface, at a given ambient temperature and relative humidity, at which condensation of moisture will occur.'
    },
    {
        name: 'Diluent',
        definition: 'A portion of the volatile components of a coating which is not a true solvent and has minimal effect on the viscosity.'
    },
    {
        name: 'Dispersion',
        definition: 'The suspension of tiny particles, usually pigments, in a liquid, usually resin.'
    },
    {
        name: 'Distilled Water',
        definition: 'Water which has been purified by vaporizing the liquid and collecting the vapor which is then condensed back to a liquid having, in the process, removed the contaminants.'
    },
    {
        name: 'Drier',
        definition: 'A chemical that promotes oxidation and subsequent drying of a paint film. Primarily used in oil-based paints.'
    },
    {
        name: 'Dry Fall',
        definition: 'A coating which is designed to dry rapidly so that the overspray can be easily removed from the surfaces below.'
    },
    {
        name: 'Dry Spray',
        definition: 'Overspray or bounce back producing a sandy finish due to the sprayed particles having partially dried before reaching the surface.'
    },
    {
        name: 'Dry Time',
        definition: 'Time allotted for an applied coating film to reach a set stage of cure or hardness.'
    },
    {
        name: 'Dry to Handle',
        definition: 'The degree of cure at which a film will resist deformation due to handling.'
    },
    {
        name: 'Dry to Recoat',
        definition: 'The time required for a cured film to dry before the application of a second coat.'
    },
    {
        name: 'Dry to Tack Free',
        definition: 'A stage at which a coating film will form a skin to which dust will not adhere.'
    },
    {
        name: 'Dry to Touch',
        definition: 'The state of dry at which a coating film will not transfer onto an item touched lightly against it.'
    },
    {
        name: 'Drying Oil',
        definition: 'An oil having the property of hardening by oxidation to a tough film when exposed to air in the form a thin film.'
    },
    {
        name: 'Dulling',
        definition: 'A loss of gloss or sheen.'
    },
    {
        name: 'Effervescence',
        definition: 'An effect in the film caused by rapid solvent release. This "boiling" of solvent causes a pinholed or cratered appearance reducing gloss.'
    },
    {
        name: 'Efflorescence',
        definition: 'Water-soluble salts, deposited as moisture evaporates, on the exterior of brick or concrete.'
    },
    {
        name: 'Elastic',
        definition: 'The ability of a substance to return to its original shape or volume after a distorting force on the substance has been removed.'
    },
    {
        name: 'Elcometer',
        definition: 'A trademark and brand name for a magnetic instrument for measuring the dry film thickness of coatings applied to ferrous surfaces such as steel.'
    },
    {
        name: 'Electrical Potential',
        definition: 'A minute voltage produced by the separation of molecules into their ionic state.'
    },
    {
        name: 'Electrolyte',
        definition: 'A substance that dissociates into ions in solution, thereby becoming electrically conductive.'
    },
    {
        name: 'Electromotive Series',
        definition: '&nbsp;A listing of elements arranged according to their standard electrical potentials otherwise known as galvanic series.'
    },
    {
        name: 'Electrostatic Spray',
        definition: 'The spray application of paint where the particles are charged, causing them to be electrically attracted to the grounded surface.'
    },
    {
        name: 'Emulsion',
        definition: 'A two-phase liquid system in which tiny droplets of one liquid are immiscible in and dispersed uniformly throughout a second continuous liquid phase.'
    },
    {
        name: 'Enamel',
        definition: 'A term used to characterize a coating that has a glossy smooth finish. A common term for alkyd coatings.'
    },
    {
        name: 'Epoxy',
        definition: 'A synthetic resin derived from petroleum products that can be cured by a catalyst or used to upgrade other synthetic resins to form a harder, more chemical resistant film.'
    },
    {
        name: 'Ester',
        definition: 'Compounds formed by the reaction of alcohols and organic acids.'
    },
    {
        name: 'Etching',
        definition: 'The treatment of a surface with an acid to dissolve loose particles or provide a profile.'
    },
    {
        name: 'External Atomization',
        definition: 'The use of air to break up a coating material after it has exited the spray gun nozzle.'
    },
    {
        name: 'Fading',
        definition: 'Loss of gloss or sheen.'
    },
    {
        name: 'Fan Pattern',
        definition: 'The geometry of a spray pattern.'
    },
    {
        name: 'Feather Edge',
        definition: 'Reduced film thickness at the edge of a dry paint film to produce a smooth, continuous appearance.'
    },
    {
        name: 'Ferrous',
        definition: 'An iron-containing metal.'
    },
    {
        name: 'Filler',
        definition: 'A compound used to extend or bulk a coating to provide extra body or hiding power.'
    },
    {
        name: 'Film',
        definition: 'A layer of coating or paint.'
    },
    {
        name: 'Film Build',
        definition: 'The dry film thickness characteristics of a coat.'
    },
    {
        name: 'Film Integrity',
        definition: 'The continuity of a coating free of defects.'
    },
    {
        name: 'Film Thickness Gauge',
        definition: 'A device for measuring wet or dry film thickness.'
    },
    {
        name: 'Fineness of Grind',
        definition: 'The degree of dispersion of particles within a liquid.'
    },
    {
        name: 'Fingering',
        definition: 'A broken spray pattern delivering heavier paint to one area than another.'
    },
    {
        name: 'Flammable',
        definition: 'Any substance easily ignited in the presence of a flame; any liquid having a flashpoint below 100°F (37.8°C).'
    },
    {
        name: 'Flash Point',
        definition: 'The lowest temperature of a liquid at which sufficient vapor is provided to form an ignitable mixture when mixed with air.'
    },
    {
        name: 'Flash-Off-Time',
        definition: 'Time which must be allowed after the application of a paint film before baking in order that the initial solvents are released, which prevents bubbling.'
    },
    {
        name: 'Flexibility',
        definition: 'The degree to which a coating can conform to movement or deformation of its supporting surface without cracking or flaking.'
    },
    {
        name: 'Floating (Flooding)',
        definition: 'A concentration of one of the ingredients of the pigmented portion of a paint at its surface giving rise to a color change.'
    },
    {
        name: 'Flow',
        definition: 'The degree to which a wet paint film can level out after application so as to eliminate brush marks and produce a smooth uniform finish.'
    },
    {
        name: 'Fluid Tip',
        definition: 'The orifice in a spray gun to which the needle is seated.'
    },
    {
        name: 'Fluorescent',
        definition: 'A class of pigments that, when exposed to visible light, emit light of a different wavelength producing a bright appearance.'
    },
    {
        name: 'Force Drying',
        definition: 'The acceleration of drying by increasing the ambient temperature.'
    },
    {
        name: 'Foreign Thinner',
        definition: "Any thinner not recommended on the label or in the published literature of the manufacturer, which can affect the coating's performance."
    },
    {
        name: 'Fouling',
        definition: 'Marine growth such as weeds or barnacles adhering to the surface.'
    },
    {
        name: 'Fungicide',
        definition: 'A substance poisonous to fungi that retards or kills mold and mildew growth.'
    },
    {
        name: 'Galvanic Anode',
        definition: 'A metal that, when properly connected to metallic structures of different compositions, will generate an electric current.'
    },
    {
        name: 'Galvanic Corrosion',
        definition: 'Corrosion associated with the current of a galvanic cell made up of dissimilar electrodes.'
    },
    {
        name: 'Galvanized Steel',
        definition: 'Cold rolled steel which has been coated with a thin layer of metallic zinc by hot dipping or electroplating.'
    },
    {
        name: 'Gelled',
        definition: 'A coating that has thickened to a jelly-like consistency making it unusable.'
    },
    {
        name: 'Generic',
        definition: 'Belonging to a particular family.'
    },
    {
        name: 'Gloss',
        definition: 'The sheen or ability to reflect light.'
    },
    {
        name: 'Gloss Retention',
        definition: 'The ability to retain the original sheen during weathering.'
    },
    {
        name: 'Glycol Ether',
        definition: 'A group of relatively slow evaporating, strong solvents commonly utilized in epoxy coatings.'
    },
    {
        name: 'Grit',
        definition: 'An abrasive blasting media obtained from slag and various other materials.'
    },
    {
        name: 'Grit Blasting',
        definition: 'Abrasive blasting using grit as the blasting media.'
    },
    {
        name: 'Hardener',
        definition: 'An activator curing agent, catalyst, or cross-linking agent.'
    },
    {
        name: 'Hardness',
        definition: 'The degree to which a material will withstand pressure without deformation or scratching.'
    },
    {
        name: 'Hiding',
        definition: 'The ability of a coating to obscure the surface to which it is applied.'
    },
    {
        name: 'High Build',
        definition: 'A term referring to a paint film which can produce a thick film in a single coat.'
    },
    {
        name: 'Holiday',
        definition: 'Any discontinuity, bare, or thin spot in a painted area.'
    },
    {
        name: 'Hot Rolled Steel',
        definition: 'Steel that has been formed while still hot, generally characterized by the presence of a bluish-black mill scale.'
    },
    {
        name: 'Hydrocarbon',
        definition: 'Extracts from petroleum such as gasoline, lubricating oils, solvents, etc.'
    },
    {
        name: 'Hydrophilic',
        definition: 'A substance that absorbs or has an affinity for water-loving.'
    },
    {
        name: 'Hydrophobic',
        definition: 'A substance that does not absorb or exhibit an affinity for water.'
    },
    {
        name: 'Immersion',
        definition: 'Refers to an environment that is continuously submerged in a liquid, often water.'
    },
    {
        name: 'Impact Resistance',
        definition: 'The ability to resist deformation or cracking due to a forceful blow.'
    },
    {
        name: 'Incompatibility',
        definition: 'Unsuitable for use together because of undesirable chemical or physical effects.'
    },
    {
        name: 'Induction Time',
        definition: 'The time between the mixing of two-component products and the moment they can be used.'
    },
    {
        name: 'Inert Pigment',
        definition: 'A non-reactive pigment, filler, or extender.'
    },
    {
        name: 'Inhibitive Pigment',
        definition: 'A pigment that assists in the prevention of the corrosion process.'
    },
    {
        name: 'Inorganic',
        definition: 'The designation of compounds that do not contain carbon.'
    },
    {
        name: 'Inorganic Zinc',
        definition: 'A&nbsp;coating based on a silicate resin and pigmented with metallic zinc that has excellent resistance to organic solvents and general weathering.'
    },
    {
        name: 'Intercoat Adhesion',
        definition: 'The adhesion between successive coats of paint.'
    },
    {
        name: 'Intercoat Contamination',
        definition: 'The presence of foreign matter such as dust or dirt between successive coats of paint.'
    },
    {
        name: 'Internal Mix',
        definition: 'A spray gun in which the fluid and air are combined before leaving the gun.'
    },
    {
        name: 'Intumescent Coating',
        definition: 'A&nbsp;fire retardant coating that, when heated, produces nonflammable gasses which are trapped by the film, converting it to foam and thereby insulating the substrate.'
    },
    {
        name: 'Ion',
        definition: 'An atom or group of atoms possessing a positive or negative electric charge resulting from having lost or gained an electron.'
    },
    {
        name: 'Iron Oxide',
        definition: 'An oxide of iron, the naturally occurring state of steel'
    },
    {
        name: 'Isopropyl Alcohol (IPA)',
        definition: 'A volatile, flammable liquid used as a solvent commonly known as rubbing alcohol.'
    },
    {
        name: 'Ketone',
        definition: 'An organic compound with a carbonyl group attached to two carbon atoms. Usually indicates a strong, fast evaporating solvent.'
    },
    {
        name: 'Krebs Unit (KU)',
        definition: 'An arbitrary unit of viscosity for a Stormer viscosity instrument.'
    },
    {
        name: 'Lacquer',
        definition: 'A coating comprised of a synthetic film-forming material dissolved in organic solvents and dried by solvent evaporation.'
    },
    {
        name: 'Lacquer Thinner',
        definition: 'A commonly used term to describe a solvent blend of ethyl alcohol, ethyl acetate, and toluene.'
    },
    {
        name: 'Laitance',
        definition: 'An accumulation of fine particles, loosely bonded, on the surface of fresh concrete caused by the upward movement of water.'
    },
    {
        name: 'Latex',
        definition: 'A stable dispersion of a polymer substance in an aqueous medium. It is a common term for water-reducible coatings.'
    },
    {
        name: 'Lead-Free',
        definition: 'Contains, by weight, less than 0.5% lead for industrial products and less than 0.6% lead in consumer products.'
    },
    {
        name: 'Leafing',
        definition: 'The orientation of pigment flakes in a horizontal plane, usually aluminum.'
    },
    {
        name: 'Lifting',
        definition: 'Softening and raising or wrinkling a previous coat by applying an additional coat. It is often caused by coatings containing strong solvents.'
    },
    {
        name: 'Mastic',
        definition: 'A term used to describe a heavy-bodied coating.'
    },
    {
        name: 'Metalizing',
        definition: 'A method of applying atomized, molten metal such as zinc and aluminum to a surface.'
    },
    {
        name: 'Methyl Ethyl Ketone (MEK)',
        definition: 'A low boiling, highly volatile flammable solvent with excellent solubility for most vinyls, urethanes, and other coatings.'
    },
    {
        name: 'Methyl Isobutyl Ketone (MIBK)',
        definition: 'A medium boiling solvent commonly used in vinyls.'
    },
    {
        name: 'Micron',
        definition: 'A micrometer or one-millionth of a meter.'
    },
    {
        name: 'MIL',
        definition: 'One&nbsp;one-thousandth of an inch; 0.0001 inches. It is commonly used to denote coating thickness.'
    },
    {
        name: 'Mildew',
        definition: 'A superficial growth of living organic matter produced by fungi in the presence of moisture. It results in discoloration and decomposition of the surface.'
    },
    {
        name: 'Mill Scale',
        definition: 'A layer of iron oxide formed on the surface of steel plates during hot rolling. It is bluish in appearance.'
    },
    {
        name: 'Mineral Spirit',
        definition: 'A&nbsp;refined petroleum distillate with low aromatic hydrocarbon content and low solubility. It is suitable for thinning alkyd coatings.'
    },
    {
        name: 'Miscible',
        definition: 'Capable of mixing or blending uniformly.'
    },
    {
        name: 'Mist Coat',
        definition: 'A thin tack coat usually applied to fill porous surfaces such as zinc rich primers.'
    },
    {
        name: 'Monomer',
        definition: 'A substance of low molecular weight molecules capable of reacting to form longer molecules called polymers.'
    },
    {
        name: 'Mottled',
        definition: 'Spots of different tones and colors, resulting in a blotchy effect on the coating film.'
    },
    {
        name: 'Mudcraking',
        definition: 'A paint film defect characterized by a broken network of cracks in the film.'
    },
    {
        name: 'Muriatic Acid',
        definition: 'Concentrated hydrochloric acid often diluted and used for etching concrete.'
    },
    {
        name: 'Neutral',
        definition: 'A liquid that is neither acid nor alkali, such as water; pH7.'
    },
    {
        name: 'Non-Drying Oil',
        definition: 'Oil that undergoes little or no oxidation when exposed to air and therefore has no film-forming properties.'
    },
    {
        name: 'Nonferrous',
        definition: 'A&nbsp;term used to designate metals or alloys that do not contain iron.'
    },
    {
        name: 'Nonflammable',
        definition: 'A compound that does not burn in the presence of a flame.'
    },
    {
        name: 'Nonvolatile',
        definition: 'The portion of the paint left after the solvent evaporates; solids.'
    },
    {
        name: 'Oil Length',
        definition: 'The ratio of oil to resin expressed as a percentage of oil by weight in the resin. It is used to determine the physical properties of a resin.'
    },
    {
        name: 'Opacity',
        definition: 'The ability of a paint film to obliterate or hide the color of the surface to which it is applied.'
    },
    {
        name: 'Orange Peel',
        definition: 'The dimpled appearance of a dried paint film resembling the peel of an orange.'
    },
    {
        name: 'Organic',
        definition: 'The designation of any chemical compound containing carbon.'
    },
    {
        name: 'Organic Zinc',
        definition: 'A zinc rich coating utilizing an organic resin such as epoxy.'
    },
    {
        name: 'Osmosis',
        definition: 'The diffusion of liquid through a paint film or other such membrane.'
    },
    {
        name: 'Overspray',
        definition: 'Sprayed coating that is dry when it hits the surface resulting in dusty, granular adhering particles, reducing gloss, and presenting a poor appearance.'
    },
    {
        name: 'Oxidation',
        definition: 'The formation of an oxide. It is the curing mechanism for alkyds.'
    },
    {
        name: 'Paint',
        definition: '(Verb) To apply a thin coating layer to a substrate by brush, roller, spray, or other suitable methods. (Noun) A pigmented liquid designed for application to a substrate in a thin layer, which is then converted to a solid film.'
    },
    {
        name: 'Pass',
        definition: 'The motion of a spray gun in one direction only.'
    },
    {
        name: 'Passivate',
        definition: 'To make a surface such as steel inert or unreactive, usually by chemical means.'
    },
    {
        name: 'Paste',
        definition: 'The product of a dispersion process. It is usually a very high viscosity and requires dilution before application. It is a concentrated pigment dispersion used for shading.'
    },
    {
        name: 'Pattern',
        definition: 'The shape or stream of material coming from a spray gun.'
    },
    {
        name: 'Peeling',
        definition: 'A&nbsp;film of paint or coating lifting from the surface due to poor adhesion. It typically applies to large pieces. See also: Chipping.'
    },
    {
        name: 'Permeability',
        definition: 'The degree to which a membrane or coating film will allow the passage or penetration of a liquid or gas.'
    },
    {
        name: 'pH',
        definition: 'A measure of acidity and alkalinity; pH 1-7 is acid and pH 7-14 is alkali.'
    },
    {
        name: 'Phenolic',
        definition: 'A synthetic resin used for heat or water resistance.'
    },
    {
        name: 'Phosphatizing',
        definition: 'Steel pretreatment by a chemical solution containing metal phosphates and phosphoric acid to inhibit corrosion temporarily.'
    },
    {
        name: 'Pickling',
        definition: 'The treatment of steel to remove rust and mill scale by immersion in a hot acid solution containing an inhibitor.'
    },
    {
        name: 'Pigment',
        definition: 'A finely ground natural or synthetic, insoluble particle adding color and opacity or corrosion inhibition to a coating film.'
    },
    {
        name: 'Pigment / Binder Ratio',
        definition: 'A ratio of total pigment to binder solids in paint.'
    },
    {
        name: 'Pigment Grind',
        definition: 'The action of dispersing a pigment in a liquid vehicle.'
    },
    {
        name: 'Pigment Volume Concentration (PVC)',
        definition: 'The percent by volume occupied by a pigment in the dried film of paint. It is generally expressed as a percentage.'
    },
    {
        name: 'Pinholing',
        definition: 'A film defect characterized by small, pore-like flaws in a coating that extend entirely through the film.'
    },
    {
        name: 'Plasticizer',
        definition: 'An agent added to the resin to aid in flexibility.'
    },
    {
        name: 'Polyester Resin',
        definition: 'A group of synthetic resins which contain repeating ester groups. It is a special type of modified alkyd resin.'
    },
    {
        name: 'Polymer',
        definition: 'A substance of molecules that consist of one or more structural units repeated any number of times.'
    },
    {
        name: 'Polymerization',
        definition: 'A chemical reaction in which two or more small molecules combine to form large molecules containing repeated structural units.'
    },
    {
        name: 'Polyurethane',
        definition: 'An exceptionally hard, wear-resistant coating made by the reaction of polyols with a multi-functional isocyanate.'
    },
    {
        name: 'Polyvinyl Chloride (PVC)',
        definition: 'A hard, tough plastic solid used for plastics and coatings, commonly known as vinyl.'
    },
    {
        name: 'Porosity',
        definition: 'The presence of numerous minute voids in a cured material.'
    },
    {
        name: 'Pot Life',
        definition: 'The length of time a paint material is useful after its original package is opened or a catalyst or other curing agent is added.'
    },
    {
        name: 'Potable Water',
        definition: 'Water fit for human consumption, as in drinking water.'
    },
    {
        name: 'Practical Coverage',
        definition: 'The spreading rate of a paint calculated at the recommended dry film thickness and assuming 15% material loss.'
    },
    {
        name: 'Primer',
        definition: 'The first coat of paint applied to a surface, formulated to have good bonding, wetting, and inhibiting properties.'
    },
    {
        name: 'Profile',
        definition: 'The term used to describe the anchor pattern of a surface produced by sandblasting, acid etching, or a similar method.'
    },
    {
        name: 'Pyrometer',
        definition: 'An instrument used to measure the temperature of a surface.'
    },
    {
        name: 'QUV',
        definition: 'An accelerated testing device designed to evaluate the fading properties of a coating by exposure to high-intensity ultraviolet light.'
    },
    {
        name: 'Reducer',
        definition: 'Commonly known as thinner.'
    },
    {
        name: 'Reflectance',
        definition: 'The ratio of the intensity of reflected light to that of incidental light.'
    },
    {
        name: 'Relative Humidity',
        definition: 'The ratio, expressed as a percent, of the quality of water vapor present in the air to the greatest amount possible at a given temperature.'
    },
    {
        name: 'Resin',
        definition: 'A group of organic materials, either natural or synthetic, which can be molded or dissolved.'
    },
    {
        name: 'Rheology',
        definition: 'The science characterizing fluid deformation or flow.'
    },
    {
        name: 'Roller',
        definition: 'A cylinder covered with lambswool, felt, foamed plastics, or other materials used for applying paint.'
    },
    {
        name: 'Runs',
        definition: 'Sagging and curtaining of a coating or paint film, usually caused by improper thinning, excessive film build, or poor application techniques.'
    },
    {
        name: 'Rust',
        definition: 'The corrosion of steel or iron is an electrochemical phenomenon wherein the base metal reverses to a lower, more stable energy state. If the corrosive environment is water or brine, the corrosion formed is commonly known as rust.'
    },
    {
        name: 'Sag Resistance',
        definition: 'The ability of a paint to be applied at proper film thicknesses without sagging.'
    },
    {
        name: 'Sagging',
        definition: 'The downward movement of a paint film on a vertical surface, occurring between application and drying and resulting in an uneven coating with a thick lower edge.'
    },
    {
        name: 'Salt Atmosphere',
        definition: 'A moist, heavily ladened air with a high chloride concentration. It is used as a test for accelerated corrosion evaluations and is also present near seacoast areas.'
    },
    {
        name: 'Salt Fog Test',
        definition: 'A cabinet designed to accelerate the corrosion process in evaluating coatings. It combines 100% humidity with a 5% salt concentration at 100° F.'
    },
    {
        name: 'Saponification',
        definition: 'The alkaline hydrolysis of fats whereby a soap is formed. It is a typical reaction between alkyds and galvanized metals resulting in peeling.'
    },
    {
        name: 'Satin Finish',
        definition: 'A descriptive term generally referenced to paints with a 60° gloss reading between 10 and 40.'
    },
    {
        name: 'Sealer',
        definition: 'A coating used on absorbent surfaces before painting.'
    },
    {
        name: 'Settling',
        definition: 'The sinking of pigments, extenders, or other solid matter in a paint, on standing in a container, with a consequent accumulation on the bottom of the can.'
    },
    {
        name: 'Shade',
        definition: 'A term employed to describe a particular hue or tone.'
    },
    {
        name: 'Shelf Life',
        definition: 'The maximum time interval that material may be kept in a usable condition during storage.'
    },
    {
        name: 'Shop Primer',
        definition: 'An inexpensive, rust-inhibiting primer designed to protect steel from general weathering immediately after fabrication and before final coating.'
    },
    {
        name: 'Shot Blasting',
        definition: 'Abrasive blasting with a round iron shot or any material which retains its spherical shape for peening purposes.'
    },
    {
        name: 'Silica Sand',
        definition: 'Clean sand made of sharp silica particles, not containing dirt or clay, used for abrasive blast cleaning.'
    },
    {
        name: 'Silicone Resins',
        definition: 'Resins based on silicone instead of carbon, generally used for their outstanding heat resistance and water repellency.'
    },
    {
        name: 'Skinning',
        definition: 'The formation of a solid membrane on the top of a liquid. It is often caused by improper lid seal, moisture contamination, a coating past its shelf life, or solvent evaporation from the top layer (usually from high-speed drying materials).'
    },
    {
        name: 'Solids by Volume',
        definition: 'The percentage of the total volume occupied by nonvolatile compounds.'
    },
    {
        name: 'Solvent',
        definition: 'A liquid in which another substance may be dissolved.'
    },
    {
        name: 'Solvent Entrapment',
        definition: 'The encapsulation of solvent within a cured paint film due to improper drying conditions, resulting in a non-continuous film.'
    },
    {
        name: 'Sound Rusted Substrate',
        definition: 'A&nbsp;rusted substrate cleaned of all loose rust and other loose materials but not cleaned to bare metal.'
    },
    {
        name: 'Specification',
        definition: 'A&nbsp;set of instructions detailing the plan for the coating of a project.'
    },
    {
        name: 'Spray Head',
        definition: 'The combination of needle, tip, and air cap.'
    },
    {
        name: 'Spray Pattern',
        definition: 'The configuration of coating sprayed on a surface.'
    },
    {
        name: 'Spread Rate',
        definition: 'Coverage, usually at the specified dry film thickness.'
    },
    {
        name: 'SSPC-SP-1',
        definition: 'Covers&nbsp;the requirements for the solvent cleaning of steel surfaces. A method for removing all visible oil, grease, soil, drawing and cutting compounds, and other soluble contaminants from steel surfaces. It is intended for use before the application of paint or other protective coatings.'
    },
    {
        name: 'SSPC-SP-10',
        definition: 'Covers the requirements for near-white blast cleaning of steel surfaces by the use of abrasives. When viewed without magnification, near-white blasted surfaces shall be free of all visible oil, grease, dirt, mill scale, rust, paint, oxides, corrosion products, or any contamination.'
    },
    {
        name: 'SSPC-SP-11',
        definition: 'Covers the requirements for power tool cleaning to produce a bare metal surface and to retain or produce a surface profile (1 mil minimum). It is suitable where a roughened, clean, bare metal surface is required, but abrasive blasting is not feasible.'
    },
    {
        name: 'SSPC-SP-2',
        definition: 'Covers the requirements for the hand tool cleaning of steel surfaces. A method of cleaning steel surfaces by using non-power hand tools, removing all loose mill scale, loose rust, loose paint, and other loose detrimental foreign matter.'
    },
    {
        name: 'SSPC-SP-3',
        definition: 'Covers the requirements for the power tool cleaning of steel surfaces. A method of preparing steel surfaces by using power-assisted hand tools, removing all loose mill scale, loose rust, loose paint, and other loose detrimental foreign matter.'
    },
    {
        name: 'SSPC-SP-5',
        definition: 'Covers the requirements for white metal blast cleaning of steel surfaces by the use of abrasives. The surface shall be free of all visible oil, grease, dirt, dust, mill scale, rust, paint, oxides, corrosion products, and other contaminants when viewed without magnification.'
    },
    {
        name: 'SSPC-SP-6',
        definition: 'Covers the requirements for commercial blast cleaning of steel surfaces by the use of abrasives. The surface shall be free of all visible oil, grease, dirt, dust, mill scale, rust, paint, oxides, corrosion products, and other contaminants when viewed without magnification.'
    },
    {
        name: 'SSPC-SP-7',
        definition: 'Covers the requirements for brush-off blast cleaning of steel surfaces by the use of abrasives. When viewed without magnification, the surface shall be free of all visible oil, grease, dirt, dust, loose mill scale, loose rust, and loose paint.'
    },
    {
        name: 'SSPC-SP-8',
        definition: 'Covers the requirements for the pickling of steel surfaces. A method of preparing steel surfaces by chemical reaction, electrolysis, or both. The surfaces, when viewed without magnification, shall be free of all visible mill scale and rust.'
    },
    {
        name: 'Stress Corrosion Cracking',
        definition: 'Spontaneous cracking produced by the combined action of corrosion and static stress.'
    },
    {
        name: 'Strong Solvent',
        definition: 'Any solvent capable of dissolving large quantities of a specified subject.'
    },
    {
        name: 'Substrate',
        definition: 'The surface to be painted.'
    },
    {
        name: 'Surfacer',
        definition: 'A pigmented composition for filling depressions to obtain a smooth, uniform surface before applying the finish coat.'
    },
    {
        name: 'Surfactant',
        definition: 'An additive that reduces surface tension, thereby improving wetting or helping to disperse pigments or inhibit foam.'
    },
    {
        name: 'Suspension',
        definition: 'A relatively coarse, non-colloidal dispersion of solid particles in a liquid.'
    },
    {
        name: 'Synthetic',
        definition: 'Manufactured, as opposed to naturally occurring.'
    },
    {
        name: 'Tabor Abraser',
        definition: 'An instrument used to measure abrasion resistance.'
    },
    {
        name: 'Tails',
        definition: 'Finger-like spray patterns produced by improper gun or coating material adjustment.'
    },
    {
        name: 'Tape Time',
        definition: 'The drying time of a coating required before masking sections for lettering or striping, after which tape will not distort the finish.'
    },
    {
        name: 'Thermocouple',
        definition: 'A temperature measuring device.'
    },
    {
        name: 'Thermoplastic',
        definition: 'Resins having the property of becoming soft upon applying heat but which regain hardness after cooling.'
    },
    {
        name: 'Thermosetting',
        definition: 'Resins having the property of becoming insoluble or hard upon the application of heat.'
    },
    {
        name: 'Thinner',
        definition: 'A liquid (solvent) added to a coating to adjust viscosity.'
    },
    {
        name: 'Thixotropic',
        definition: 'An adjective that describes full-bodied material that undergoes a reduction in viscosity when shaken, stirred, or otherwise mechanically disturbed but readily recovers its original full-bodied condition upon standing.'
    },
    {
        name: 'Toluene',
        definition: 'An aromatic solvent with a high boiling range and low flash point classified as a strong solvent.'
    },
    {
        name: 'Tooth',
        definition: 'The profile, mechanical anchor pattern, or surface roughness.'
    },
    {
        name: 'Two-Pack',
        definition: 'A coating supplied in two parts that must be mixed in the correct portions before use to cure.'
    },
    {
        name: 'Undercoat',
        definition: 'The coat applied to the surface after preparation and before the application of a finish coat.'
    },
    {
        name: 'Underfilm Corrosion (Undercutting)',
        definition: 'Corrosion that occurs under films in the form of randomly distributed hairlines. It typically occurs when metal is corroding beneath the coating and/or at holidays, pinholes, and breaks in the coating. It can also occur when there is blistering, corrosion and/or delamination of the coating.'
    },
    {
        name: 'Vapor Barrier',
        definition: 'A&nbsp;moisture-impervious layer that prevents the passage of water into a material or structure.'
    },
    {
        name: 'Vapor Transmission Rate',
        definition: 'The rate at which moisture passes through a material or coating.'
    },
    {
        name: 'Vehicle',
        definition: 'The liquid portion of a paint in which the pigment is dispersed. It is comprised of binder and thinner.'
    },
    {
        name: 'Vinyl Copolymer',
        definition: 'A resin produced by copolymerizing vinyl acetate and vinyl chloride.'
    },
    {
        name: 'Viscometer',
        definition: "One of several types of instrument for measuring a liquid's viscosity."
    },
    {
        name: 'Viscosity',
        definition: 'A measure of the fluidity of a liquid.'
    },
    {
        name: 'Viscosity Cup',
        definition: 'An efflux viscometer utilizing a measured volume of liquid flowing through a precise orifice.'
    },
    {
        name: 'Voids',
        definition: 'Holidays or holes in a coating.'
    },
    {
        name: 'Volatile Content',
        definition: 'The percentage of materials that evaporate from a coating.'
    },
    {
        name: 'Volatile Organic Compound (VOC)',
        definition: 'A&nbsp;measurement of the total amount of organic compounds evaporating from a coating film, excluding water. It is measured in pounds per gallon (lb/gal) or grams per liter (g/L).'
    },
    {
        name: 'Volume Solids',
        definition: 'The volume of the nonvolatile portion of a composition divided by the total volume. It is expressed as a percent used to calculate the coverage rate.'
    },
    {
        name: 'Wash Primer',
        definition: 'A thin paint, usually a chromate, designed to promote adhesion or to be used as a barrier coat.'
    },
    {
        name: 'Water Blasting',
        definition: 'Blast cleaning of metal using high-velocity water.'
    },
    {
        name: 'Water Spotting',
        definition: 'A surface defect caused by water droplets depositing a circular ring of contaminants.'
    },
    {
        name: 'Weatherometer',
        definition: 'A machine designed for the accelerated testing of coatings.'
    },
    {
        name: 'Weld Slag',
        definition: 'An amorphous deposit formed during welding.'
    },
    {
        name: 'Weld Splatter',
        definition: 'Beads of metal left adjoining the weld.'
    },
    {
        name: 'Wet Sandblasting',
        definition: 'The incorporation of water into the sandblasting operation to minimize dust.'
    },
    {
        name: 'Wetting',
        definition: 'The ability of a vehicle to flow onto the surface to achieve a good bond.'
    },
    {
        name: 'White Rust',
        definition: 'The oxide of zinc formed on galvanized metal.'
    },
    {
        name: 'Xylene',
        definition: 'A flammable aromatic hydrocarbon solvent used in epoxies and fast-drying alkyds.'
    },
    {
        name: 'Zinc Dust',
        definition: 'Finely divided zinc metal used as a pigment in protective coatings.'
    },
    {
        name: 'Zinc Phospho Oxide',
        definition: 'A rust inhibitive pigment.'
    },
    {
        name: 'Zinc Rich Primer',
        definition: 'An anti-corrosion primer for iron and steel incorporating zinc dust in a concentration sufficient to provide cathodic protection.'
    },
    {
        name: 'Dry Film Thickness (DFT)',
        definition: 'The film remaining after a solvent evaporates.&nbsp;Measured with magnetic pull off and/or electronic gauges.'
    },
    {
        name: 'Distinction of Image (DOI)',
        definition: 'The property of a finish which describes its ability to reflect an image with clarity. This is particularly important in automotive and floor finishes. Largely determined by how well a coating flows and levels to create a very smooth surface.'
    },
    {
        name: 'Metamerism',
        definition: 'The different appearance of color under different light sources. See: <a href="https://www.carboline.com/solution-spot/posts/understanding-metamerism-color-matching-for-industrial-coatings/">Understanding Metamerism</a>.'
    },
    {
        name: 'Surface Tolerant',
        definition: 'A coating that is&nbsp;tolerant of less than ideal surface preparation.'
    },
    {
        name: 'Moisture Tolerant',
        definition: 'A coating that cures and adheres to damp surfaces. It can get wet before full cure.'
    },
    {
        name: 'Mix Ratio',
        definition: 'Typically the ratio by volume of Part A to Part B. Some coatings have more components - Parts C, D, etc.'
    },
    {
        name: 'Fisheye',
        definition: 'Separation and/or wet film pulling apart, exposing the coating or substrate beneath.&nbsp;Often caused by contamination on substrate (silicone, oil, grease, water etc.), incompatible coatings (latex and/or waterborne coatings over silicone) or coating over sealants prior to their proper cure.'
    },
    {
        name: 'Wrinkling',
        definition: 'A rough, crinkled surface. It is often caused by the top surface of coating drying faster than the underlying coating, excessive film build, or application when it’s too hot or windy. It most commonly occurs with oil-based (alkyd) coatings that are too thick.'
    },
    {
        name: 'Pinpoint Rusting',
        definition: 'Rusting at pinholes, holidays, valleys, or low spots in the coating. It is often caused by pinholes exposing the substrate, insufficient coating thickness, or a surface profile too deep for a coating to sufficiently cover peaks. It is sometimes seen with WB primers or DTM’s that can not overcome surface contaminants.'
    }
];
var idx = _lunrDefault.default(function() {
    this.field('title');
    this.field('body');
    this.add({
        title: 'Twelfth-Night',
        body: 'If music be the food of love, play on: Give me excess of it…',
        author: 'William Shakespeare',
        id: '1'
    });
});

},{"bootstrap":"2wXXO","lunr":"gnH3E","@parcel/transformer-js/src/esmodule-helpers.js":"a7mgk"}]},["dtTg0","bJe4D","eSwaY"], "eSwaY", "parcelRequire94c2")

//# sourceMappingURL=index.f217190b.js.map
