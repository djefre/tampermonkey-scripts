// ==UserScript==
// @name         Remove player avatars bottom-left
// @namespace    djefre.roll20
// @version      0.1
// @description  Removes the player avatars at the bottom left of the screen
// @author       You
// @match        https://app.roll20.net/editor/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roll20.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('avatarContainer').remove()
    // Your code here...
})();
