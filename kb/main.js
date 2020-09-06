
function oblicz() {
    //zdobywanie wartości formularza
var _1gr = document.getElementById("1gr").value;
var _2gr = document.getElementById("2gr").value;
var _5gr = document.getElementById("5gr").value;
var _10gr = document.getElementById("10gr").value;
var _20gr = document.getElementById("20gr").value;
var _50gr = document.getElementById("50gr").value;

var _1zl = document.getElementById("1zl").value;
var _2zl = document.getElementById("2zl").value;
var _5zl = document.getElementById("5zl").value;
var _10zl = document.getElementById("10zl").value;
var _20zl = document.getElementById("20zl").value;
var _50zl = document.getElementById("50zl").value;
var _100zl = document.getElementById("100zl").value;
var _200zl = document.getElementById("200zl").value;
var _500zl = document.getElementById("500zl").value;

    //zdobywanie objektu wynik
    var _1w = document.getElementById("1w");
    var _2w = document.getElementById("2w");
    var _3w = document.getElementById("3w");
    var _4w = document.getElementById("4w");
    var _5w = document.getElementById("5w");
    var _6w = document.getElementById("6w");
    var _7w = document.getElementById("7w");
    var _8w = document.getElementById("8w");
    var _9w = document.getElementById("9w");
    var _10w = document.getElementById("10w");
    var _11w = document.getElementById("11w");
    var _12w = document.getElementById("12w");
    var _13w = document.getElementById("13w");
    var _14w = document.getElementById("14w");
    var _15w = document.getElementById("15w");

//inne takie
var wynikbox =  document.getElementById("wynikbox");

var wynikvar = _1gr * 0.01 +
_2gr * 0.02 +
_5gr * 0.05 +
_10gr * 0.1 +
_20gr * 0.2 +
_50gr * 0.5 +
_1zl * 1 +
_2zl * 2 +
_5zl * 5 +
_10zl * 10 +
_20zl * 20 +
_50zl * 50 +
_100zl * 100 +
_200zl * 200 +
_500zl * 500 ;

wynikbox.innerText = wynikvar.toFixed(2);

var __1w = _1gr * 0.01;
var __2w = _2gr * 0.02;
var __3w = _5gr * 0.05;
var __4w = _10gr * 0.1;
var __5w = _20gr * 0.2;
var __6w = _50gr * 0.5;
var __7w = _1zl * 1;
var __8w = _2zl * 2;
var __9w = _5zl * 5;
var __10w = _10zl * 10;
var __11w = _20zl * 20;
var __12w = _50zl * 50;
var __13w = _100zl * 100;
var __14w = _200zl * 200;
var __15w = _500zl * 500;

_1w.innerText = __1w.toFixed(2);
_2w.innerText = __2w.toFixed(2);
_3w.innerText = __3w.toFixed(2);
_4w.innerText = __4w.toFixed(2);
_5w.innerText = __5w.toFixed(2);
_6w.innerText = __6w.toFixed(2);
_7w.innerText = __7w.toFixed(2);
_8w.innerText = __8w.toFixed(2);
_9w.innerText = __9w.toFixed(2);
_10w.innerText = __10w.toFixed(2);
_11w.innerText = __11w.toFixed(2);
_12w.innerText = __12w.toFixed(2);
_13w.innerText = __13w.toFixed(2);
_14w.innerText = __14w.toFixed(2);
_15w.innerText = __15w.toFixed(2);

console.log("oblicz koniec");
}