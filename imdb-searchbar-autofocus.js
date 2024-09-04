// ==UserScript==
// @name         IMDB searchbar autofocus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let el = document.getElementById('navbar-query');
    if(el){
      el.focus()
    }
})();
