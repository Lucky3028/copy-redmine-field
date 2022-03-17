// ==UserScript==
// @name        copy-redmine-field
// @namespace   https://celesteria.net
// @version     0.1.0
// @description undefined
// @author      Lucky3028 <Lucky3028@users.noreply.github.com>
// @license     MIT
// @supportURL  https://github.com/Lucky3028/copy-redmine-field/issues
// @run-at      document-end
// @include     *://redmine.*.*/issues/*
// @include     *://.*redmine.*/issues/*
// @updateURL   https://lucky3028.github.io/copy-redmine-field/main.js
// @downloadURL https://lucky3028.github.io/copy-redmine-field/main.js
// ==/UserScript==
(function () {
    'use strict';

    /* eslint-disable no-console */
    const onDoubleClick = (element) => {
        const content = element.textContent;
        if (content) {
            navigator.clipboard.writeText(content).catch((e) => console.error(e));
        }
    };
    Array.from(document.querySelectorAll('[class$=attribute]'))
        .map((element) => element.querySelector('div.value'))
        .forEach((element) => element === null || element === void 0 ? void 0 : element.addEventListener('dblclick', () => onDoubleClick(element)));

})();
