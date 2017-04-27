// ==UserScript==
// @name         Driftin.io Starman Themes
// @namespace    https://github.com/kaloncpu57
// @version      0.1.0
// @description  Plays a random Mario Starman theme when you use Star Power
// @author       kaloncpu57
// @match        http://driftin.io/*
// @grant        none
// ==/UserScript==

var script = document.createElement("script");
script.src = "https://kaloncpu57.github.io/io-scripts/driftin/starman-audioSprite.js";
document.head.appendChild(script);
