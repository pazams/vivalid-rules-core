(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// waiting on https://github.com/substack/node-browserify/issues/968  to use:
// using https://github.com/substack/browser-pack/compare/master...jmm:standalone-require3
var vivalid = require('vivalid');

var addValidatorBuilder = vivalid.validatorRepo.addBuilder;

addValidatorBuilder('requiered',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'this field is requiered';

        if (!value){
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('maxlength',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'maximum ' + options.max + ' characters allowed';

        if (value.length > options.max){
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('minlength',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'minimum ' + options.min + ' characters allowed';

        if (value.length < options.min){
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('betweenlength',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'between ' + options.min + '-' + options.max + ' characters allowed';

        if (value.length < options.min || value.length > options.max) {
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('max',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'maximum value is ' + options.max;

        if (value > options.max){
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('min',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'minimum value is ' + options.min;

        if (value < options.min){
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('pattern',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'input characters must match: ' + options.regex;

        var re = new RegExp(options.regex);

        if (!re.exec(value)) {
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('email',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'invalid email address';

        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!re.exec(value)) {
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

addValidatorBuilder('url',function(ValidationState,stateEnum,options){

    return function(value) {

        var msg = options.msg || 'invalid URL';

        var re = /^(ftp|http|https):\/\/[^ "]+$/;

        if (!re.exec(value)) {
            return new ValidationState(msg, stateEnum.invalid);
        }

        else{
            return new ValidationState('', stateEnum.valid);
        }

    };
});

},{"vivalid":"vivalid"}]},{},[1]);
