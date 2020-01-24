// ==UserScript==
// @name         Dumpert watched video hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides all watched videos
// @author       J
// @match        https://www.dumpert.nl/*
// @grant        none
// ==/UserScript==
var idsFromStorage = [];
var gridVideoItems = [];
var interval = 1500;

function getAllVisibleVideos() {
    return Array.from(document.querySelectorAll('.grid-item'));
}

async function extractIdFromElement(element) {
    let hrefParts = element.getAttribute('href').split('/');
    if(!hrefParts) return undefined;

    let videoId = hrefParts[hrefParts.length - 1].trim();
    if(!videoId) return undefined;

    return videoId;
}

function start() {
    gridVideoItems = getAllVisibleVideos();
    idsFromStorage = sessionStorage.getItem('viewedItems').split(',').filter(c => c.trim() !== "");

    gridVideoItems.forEach(async (videoElement) => {
        let id = await extractIdFromElement(videoElement);
        if(!id) return;

        let present = idsFromStorage.find(c => c.trim() === id.trim());
        if(present){
            //videoElement.remove();
            videoElement.style.display = 'none'
        }
    });
}

(function() {
    'use strict';
    start();

    setInterval(()=>{
        start();
    }, interval)
})();
