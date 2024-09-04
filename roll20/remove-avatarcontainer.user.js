// ==UserScript==
// @name         Remove player avatars bottom-left
// @namespace    https://github.com/djefre/tampermonkey-scripts/
// @version      0.1
// @description  Removes the player avatars at the bottom left of the screen
// @author       djefre
// @match        https://app.roll20.net/editor/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roll20.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    try{
        document.getElementById('avatarContainer').remove();
        console.warn('==== Avatars removed ====');
    } catch{}
})();
