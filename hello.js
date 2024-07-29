// ==UserScript==
// @name         Hello Alert Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  显示一个包含"hello"的弹窗
// @author       none
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert('hello');
})();
