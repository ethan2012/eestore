(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./src/bootstraper')

},{"./src/bootstraper":2}],2:[function(require,module,exports){
var generate = require("./generate");
module.exports = function(source) {
  this.cacheable();
  var output = generate.apply(this, [source]);
  return output;
}
},{"./generate":3}],3:[function(require,module,exports){
module.exports = function(source) {
	var output = source.replace(/class=/g, "className=");
	return output;
}
},{}],4:[function(require,module,exports){
window.ClassToClassname = require('class-to-classname')

},{"class-to-classname":1}]},{},[4]);
