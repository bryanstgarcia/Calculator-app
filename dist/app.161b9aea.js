parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,u=function(){};return{s:u,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={element:document.querySelector("#button__1"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},u={element:document.querySelector("#button__2"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},o={element:document.querySelector("#button__3"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},l={element:document.querySelector("#button__4"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},c={element:document.querySelector("#button__5"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},a={element:document.querySelector("#button__6"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},s={element:document.querySelector("#button__7"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},m={element:document.querySelector("#button__8"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},v={element:document.querySelector("#button__9"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},d={element:document.querySelector("#button__0"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},f={element:document.querySelector("#button__dot"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",T)},removeListener:function(){return this.element.removeEventListener("click",T)}},L={element:document.querySelector("#button__equal"),value:function(){return this.element.getAttribute("data-value")},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},h={element:document.querySelector("#button__sum"),value:function(){return this.element.innerHTML},calc:function(e,t){return parseFloat(e)+parseFloat(t)},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},b={element:document.querySelector("#button__subtraction"),value:function(){return this.element.innerHTML},calc:function(e,t){return parseFloat(e)-parseFloat(t)},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},y={element:document.querySelector("#button__multiply"),value:function(){return this.element.innerHTML},calc:function(e,t){return parseFloat(e)*parseFloat(t)},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},_={element:document.querySelector("#button__divide"),value:function(){return this.element.innerHTML},calc:function(e,t){return parseFloat(e)/parseFloat(t)},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},E={element:document.querySelector("#button__exponent"),value:function(){return this.element.innerHTML},calc:function(e,t){return Math.pow(e,t)},addListener:function(){return this.element.addEventListener("click",A)},removeListener:function(){return this.element.removeEventListener("click",A)}},k={element:document.querySelector("#button__c"),value:function(){return this.element.innerHTML},addListener:function(){return this.element.addEventListener("click",F)},removeListener:function(){return this.element.removeEventListener("click",F)}},g={numbers:document.querySelector("#lcd-numbers"),value:[],values:[],total:[],symbol:document.querySelector("#lcd-symbol")},p=[i,u,o,l,c,a,s,m,v,d],S=[h,b,y,_,E,L];function q(e){}function T(e){var t;if("button__dot"===e.target.id||"dot"===e.target.id){if(g.value.join("").includes("."))return;t=g.value.length>0?".":"0."}else if(e.target.id.includes("button")){t=p.find(function(t){return e.target.id.includes(t.value())}).value()}else e.target.id.includes("n")&&(t=e.target.innerHTML);g.value.push(t),g.numbers.innerText=g.value.join("")}function A(e){var t=document.querySelector("#".concat(e.target.id)).getAttribute("data-value"),n=S.find(function(e){return e.value().includes(t)});if(""!=g.symbol.innerHTML){g.values.push(g.value.join(""));var i=g.symbol.innerHTML,u=S.find(function(e){return e.value().includes(i)});console.log("operacion actual a hacer "+u);var o=u.calc(g.values[0],g.values[1]);console.log("resultado del calculo "+o),g.values=[],g.value=[],g.values.push(o),g.numbers.innerText=o,g.symbol.innerText="",g.symbol.innerHTML=n.value()}else{if(g.symbol.innerHTML=n.value(),""==g.value)return;g.values.push(g.value.join("")),g.value=[]}console.log(g.values,g.value),console.log(r(g.value))}function M(t){if("add"==t){var n,r=e(p);try{for(r.s();!(n=r.n()).done;){n.value.addListener()}}catch(s){r.e(s)}finally{r.f()}var i,u=e(S);try{for(u.s();!(i=u.n()).done;){i.value.addListener()}}catch(s){u.e(s)}finally{u.f()}f.addListener(),k.addListener()}else if("remove"==t){var o,l=e(p);try{for(l.s();!(o=l.n()).done;){o.value.removeListener()}}catch(s){l.e(s)}finally{l.f()}var c,a=e(S);try{for(a.s();!(c=a.n()).done;){c.value.removeListener()}}catch(s){a.e(s)}finally{a.f()}f.removeListener(),k.removeListener()}}function F(){g.numbers.innerText="0",g.value=[],g.values=[],g.total=[],g.symbol.innerText=""}var H=!1,x=document.querySelector("#button__on-off");function w(){0==H?(H=!0,g.numbers.innerText="0",M("add")):(H=!1,F(),g.numbers.innerText="OFF",M("remove"))}window.onload=function(){0==H&&(g.numbers.innerText="OFF"),x.addEventListener("click",w)};
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.161b9aea.js.map