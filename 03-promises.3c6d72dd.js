var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");function i(e,t){const o=Math.random()>.3;return new Promise(((r,n)=>{setTimeout((()=>{o&&r({position:e,delay:t}),n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.target.delay.value);const o=Number(e.target.step.value),r=Number(e.target.amount.value);for(let e=1;e<=r;e+=1)i(e,t).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=o}));
//# sourceMappingURL=03-promises.3c6d72dd.js.map
