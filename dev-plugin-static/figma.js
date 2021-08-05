(()=>{"use strict";function n(t,e,o=null){return i=this,r=void 0,c=function*(){if(t&&(yield e(t,o),(i=t)&&Array.isArray(i.children)))for(let o of t.children.reverse())yield n(o,e,t);var i},new((a=void 0)||(a=Promise))((function(n,t){function e(n){try{f(c.next(n))}catch(n){t(n)}}function o(n){try{f(c.throw(n))}catch(n){t(n)}}function f(t){var i;t.done?n(t.value):(i=t.value,i instanceof a?i:new a((function(n){n(i)}))).then(e,o)}f((c=c.apply(i,r||[])).next())}));var i,r,a,c}function t(n){return Array.isArray(n.fills)&&n.fills.filter((n=>"IMAGE"===n.type))}!function(n){if(!n)return null;const[t,e,o,i,r,a]=n.match(/rgba?\(([\d\.]+), ([\d\.]+), ([\d\.]+)(, ([\d\.]+))?\)/)||[],c=a&&0===parseFloat(a);e&&o&&i&&!c&&(parseInt(e),parseInt(o),parseInt(i),a&&parseFloat(a))}("rgba(178, 178, 178, 1)");var e=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{f(o.next(n))}catch(n){r(n)}}function c(n){try{f(o.throw(n))}catch(n){r(n)}}function f(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}f((o=o.apply(n,t||[])).next())}))},o=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{f(o.next(n))}catch(n){r(n)}}function c(n){try{f(o.throw(n))}catch(n){r(n)}}function f(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}f((o=o.apply(n,t||[])).next())}))};const i={},r=n=>n.toLowerCase().replace(/[^a-z]/gi,""),a={family:"Roboto",style:"Regular"};function c(n,t){for(const e in t){const o=t[e];if("data"===e&&o&&"object"==typeof o){const t=JSON.parse(n.getSharedPluginData("builder","data")||"{}")||{},e=o,i=Object.assign({},t,e);n.setSharedPluginData("builder","data",JSON.stringify(i))}else if(void 0!==o&&-1===["width","height","type","ref","children","svg"].indexOf(e))try{n[e]=t[e]}catch(o){console.warn(`Assign error for property "${e}"`,n,t,o)}}}const f=["FRAME","GROUP","SVG","RECTANGLE"],u=(n,u,l)=>{return s=void 0,d=void 0,h=function*(){const s=(null==u?void 0:u.ref)||l;if("number"!=typeof n.x||"number"!=typeof n.y)throw Error("Layer coords not defined");const d=(n=>"FRAME"===n.type||"GROUP"===n.type?figma.createFrame():"SVG"===n.type&&n.svg?figma.createNodeFromSvg(n.svg):"RECTANGLE"===n.type?figma.createRectangle():"TEXT"===n.type?figma.createText():void 0)(n);if(!d)throw Error(`${n.type} not implemented`);if(f.includes(n.type)&&s.appendChild(((n,t)=>(t.x=n.x,t.y=n.y,t.resize(n.width||1,n.height||1),c(t,n),t))(n,d)),n.ref=d,"RECTANGLE"===n.type&&t(n)&&(yield function(n){return e(this,void 0,void 0,(function*(){const o=t(n);return o&&Promise.all(o.map((n=>e(this,void 0,void 0,(function*(){n&&n.intArr&&(n.imageHash=yield figma.createImage(n.intArr).hash,delete n.intArr)})))))}))}(n)),"TEXT"===n.type){const t=d;n.fontFamily&&(t.fontName=yield function(n){return o(this,void 0,void 0,(function*(){const t=i[n];if(t)return t;const e=yield o(void 0,void 0,void 0,(function*(){return(yield figma.listAvailableFontsAsync()).filter((n=>"Regular"===n.fontName.style))})),c=n.split(/\s*,\s*/);for(const t of c){const o=r(t);for(const t of e){const e=r(t.fontName.family);if(e===o)return i[e]||(yield figma.loadFontAsync(t.fontName),i[n]=t.fontName,i[e]=t.fontName,t.fontName)}}return a}))}(n.fontFamily),delete n.fontFamily),c(t,n),t.resize(n.width||1,n.height||1),t.textAutoResize="HEIGHT";let e=0;for(n.lineHeight&&(t.lineHeight=n.lineHeight);"number"==typeof n.height&&t.height>n.height;){if(e++>5){console.warn("Too many font adjustments",t,n);break}try{t.resize(t.width+1,t.height)}catch(e){console.warn("Error on resize text:",n,t,e)}}s.appendChild(t)}return d},new((y=void 0)||(y=Promise))((function(n,t){function e(n){try{i(h.next(n))}catch(n){t(n)}}function o(n){try{i(h.throw(n))}catch(n){t(n)}}function i(t){var i;t.done?n(t.value):(i=t.value,i instanceof y?i:new y((function(n){n(i)}))).then(e,o)}i((h=h.apply(s,d||[])).next())}));var s,d,y,h};var l=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{f(o.next(n))}catch(n){r(n)}}function c(n){try{f(o.throw(n))}catch(n){r(n)}}function f(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}f((o=o.apply(n,t||[])).next())}))};figma.showUI(__html__,{width:600,height:600});const s="HTML-TO-FIGMA RESULT";figma.ui.onmessage=t=>{return e=void 0,o=void 0,r=function*(){if("import"===t.type){yield figma.loadFontAsync(a);const{data:e}=t;let{layers:o}=e,i=figma.currentPage,r=i,c=0,f=0,d=figma.currentPage.findOne((n=>n.name===s));d&&(c=d.x,f=d.y),console.log(o);for(const n of o)n.x=c,n.y=f;yield function(t,e,o){return l(this,void 0,void 0,(function*(){for(const i of t)yield n(i,((n,t)=>l(this,void 0,void 0,(function*(){try{const i=yield u(n,t,e);null==o||o({node:i,layer:n,parent:t})}catch(t){console.warn("Error on layer:",n,t)}}))))}))}(o,i,(({node:n,parent:t})=>{t||(r=n,n.name=s)})),null==d||d.remove()}},new((i=void 0)||(i=Promise))((function(n,t){function a(n){try{f(r.next(n))}catch(n){t(n)}}function c(n){try{f(r.throw(n))}catch(n){t(n)}}function f(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(a,c)}f((r=r.apply(e,o||[])).next())}));var e,o,i,r}})();