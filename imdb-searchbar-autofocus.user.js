// ==UserScript==
// @name         IMDB searchbar autofocus
// @namespace    https://github.com/djefre/tampermonkey-scripts/
// @version      0.1
// @description  auto focus on searchbar
// @author       djefre
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
