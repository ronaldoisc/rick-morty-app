if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const o=e=>s(e,t),d={module:{uri:t},exports:n,require:o};i[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-5c88d481"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"d37c75b85934c4570a49def470b17385"},{url:"index.html",revision:"197c3c94d5b10aa2687b36f117cbc6ea"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"e0c3e899de1308436439a84984239994"},{url:"rick.ico",revision:"70e6e0e2d934803d872c7cbf19703175"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.88993475.css",revision:"c11ff89568a936079701e60a7326bd7d"},{url:"static/js/main.4e7d8ce7.js",revision:"b91bba876ba4de562cbfe694bf38144d"},{url:"static/js/main.4e7d8ce7.js.LICENSE.txt",revision:"0793d04779f5f2bc7feb5caf0492ef6a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
