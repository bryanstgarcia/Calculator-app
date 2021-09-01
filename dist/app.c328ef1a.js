// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numberOne = {
  element: document.querySelector('#button__1'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberTwo = {
  element: document.querySelector('#button__2'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberThree = {
  element: document.querySelector('#button__3'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberFour = {
  element: document.querySelector('#button__4'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberFive = {
  element: document.querySelector('#button__5'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberSix = {
  element: document.querySelector('#button__6'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberSeven = {
  element: document.querySelector('#button__7'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberEight = {
  element: document.querySelector('#button__8'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberNine = {
  element: document.querySelector('#button__9'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var numberCero = {
  element: document.querySelector('#button__0'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var dot = {
  element: document.querySelector('#button__dot'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', addNumberLCD);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', addNumberLCD);
  }
};
var equal = {
  element: document.querySelector('#button__equal'),
  value: function value() {
    return this.element.getAttribute('data-value');
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var sum = {
  element: document.querySelector('#button__sum'),
  value: function value() {
    return this.element.innerHTML;
  },
  calc: function calc(valueOne, valueTwo) {
    return parseFloat(valueOne) + parseFloat(valueTwo);
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var subtraction = {
  element: document.querySelector('#button__subtraction'),
  value: function value() {
    return this.element.innerHTML;
  },
  calc: function calc(valueOne, valueTwo) {
    return parseFloat(valueOne) - parseFloat(valueTwo);
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var multiply = {
  element: document.querySelector('#button__multiply'),
  value: function value() {
    return this.element.innerHTML;
  },
  calc: function calc(valueOne, valueTwo) {
    return parseFloat(valueOne) * parseFloat(valueTwo);
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var divide = {
  element: document.querySelector('#button__divide'),
  value: function value() {
    return this.element.innerHTML;
  },
  calc: function calc(valueOne, valueTwo) {
    return parseFloat(valueOne) / parseFloat(valueTwo);
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var exponential = {
  element: document.querySelector('#button__exponent'),
  value: function value() {
    return this.element.innerHTML;
  },
  calc: function calc(valueOne, valueTwo) {
    return Math.pow(valueOne, valueTwo);
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleOperation);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleOperation);
  }
};
var clear = {
  element: document.querySelector('#button__c'),
  value: function value() {
    return this.element.innerHTML;
  },
  addListener: function addListener() {
    return this.element.addEventListener('click', handleClear);
  },
  removeListener: function removeListener() {
    return this.element.removeEventListener('click', handleClear);
  }
};
var lcd = {
  numbers: document.querySelector('#lcd-numbers'),
  value: [],
  values: [],
  total: [],
  symbol: document.querySelector('#lcd-symbol')
}; //let lcdNumbers = document.querySelector('#lcd-numbers');
//let lcdSymbol = document.querySelector('#lcd-symbol')
//let lcdTotal = []
//let lcdValues = []
//let lcdValue = []

var numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberCero];
var operations = [sum, subtraction, multiply, divide, exponential, equal];

function handleLCD(event) {
  return;
}

function addNumberLCD(event) {
  //Add a number to the lcd
  var numberValue;

  if (event.target.id === "button__dot" || event.target.id === "dot") {
    if (lcd.value.join("").includes(".")) return;

    if (lcd.value.length > 0) {
      numberValue = ".";
    } else {
      numberValue = "0.";
    }
  } else if (event.target.id.includes("button")) {
    var valueToAdd = numbers.find(function (number) {
      return event.target.id.includes(number.value());
    });
    numberValue = valueToAdd.value();
  } else if (event.target.id.includes('n')) {
    numberValue = event.target.innerHTML;
  }

  lcd.value.push(numberValue);
  lcd.numbers.innerText = lcd.value.join("");
}

function handleOperation(event) {
  var symbol = document.querySelector("#".concat(event.target.id));
  var symbolObject = symbol.getAttribute('data-value');
  var operationObject = operations.find(function (operation) {
    return operation.value().includes(symbolObject);
  }); //Add the symbol to lcd

  if (lcd.symbol.innerHTML != "") {
    //Add actual value to values
    lcd.values.push(lcd.value.join(""));
    var actualSymbol = lcd.symbol.innerHTML; //Find actual opertaion 

    var actualOperation = operations.find(function (operation) {
      return operation.value().includes(actualSymbol);
    });
    console.log('operacion actual a hacer ' + actualOperation); //Make a calculation

    var calculation = actualOperation.calc(lcd.values[0], lcd.values[1]);
    console.log('resultado del calculo ' + calculation); //Clear actual values

    lcd.values = [];
    lcd.value = []; //Add new calc value

    lcd.values.push(calculation); //Add to lcd

    lcd.numbers.innerText = calculation;
    lcd.symbol.innerText = "";
    lcd.symbol.innerHTML = operationObject.value();
  } else {
    //Add the operation symbol
    lcd.symbol.innerHTML = operationObject.value();

    if (lcd.value == "") {
      return;
    } else {
      //Add number to values 
      lcd.values.push(lcd.value.join("")); //Clear lcd.value

      lcd.value = [];
    }
  }

  console.log(lcd.values, lcd.value);
  console.log(_typeof(lcd.value));
}

function handleListeners(type) {
  if (type == 'add') {
    var _iterator = _createForOfIteratorHelper(numbers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var number = _step.value;
        number.addListener();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(operations),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var operation = _step2.value;
        operation.addListener();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    dot.addListener();
    clear.addListener();
  } else if (type == 'remove') {
    var _iterator3 = _createForOfIteratorHelper(numbers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _number = _step3.value;

        _number.removeListener();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(operations),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _operation = _step4.value;

        _operation.removeListener();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    dot.removeListener();
    clear.removeListener();
  }
} //Delete values


function handleClear() {
  lcd.numbers.innerText = '0';
  lcd.value = [];
  lcd.values = [];
  lcd.total = [];
  lcd.symbol.innerText = '';
} //On-Off


var on = false;
var onOffButton = document.querySelector('#button__on-off');

function onOff() {
  if (on == false) {
    on = true;
    lcd.numbers.innerText = '0';
    handleListeners('add');
  } else {
    on = false;
    handleClear();
    lcd.numbers.innerText = 'OFF';
    handleListeners('remove');
  }
}

window.onload = function () {
  //Purple calc
  if (on == false) {
    lcd.numbers.innerText = 'OFF';
  }

  onOffButton.addEventListener('click', onOff);
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56055" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map