
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

//inne takie
var wynikbox =  document.getElementById("wynikbox");

wynikbox.innerText = _1gr * 0.01 +
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



console.log("oblicz koniec");
}