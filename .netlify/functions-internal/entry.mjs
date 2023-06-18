import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { h as deserializeManifest } from './chunks/astro.da3a6275.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.5e505a47.mjs');
const _page1  = () => import('./chunks/welcome@_@md.27c4b983.mjs');
const _page2  = () => import('./chunks/posts@_@astro.e631e57a.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/posts/welcome.md", _page1],["src/pages/posts.astro", _page2]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/posts.22b188d7.css"},{"type":"external","src":"/_astro/welcome.f5a515cd.css"},{"type":"external","src":"/_astro/index.d9f569a7.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/posts.22b188d7.css"},{"type":"external","src":"/_astro/welcome.f5a515cd.css"},{"type":"external","src":"/_astro/welcome.b7256ae9.css"}],"routeData":{"route":"/posts/welcome","type":"page","pattern":"^\\/posts\\/welcome\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"welcome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/welcome.md","pathname":"/posts/welcome","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/posts.22b188d7.css"},{"type":"external","src":"/_astro/posts.6292c4d3.css"},{"type":"external","src":"/_astro/index.d9f569a7.css"},{"type":"external","src":"/_astro/welcome.f5a515cd.css"},{"type":"external","src":"/_astro/welcome.b7256ae9.css"}],"routeData":{"route":"/posts","type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts.astro","pathname":"/posts","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/workspace/my-gitpod-workspace/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspace/my-gitpod-workspace/src/pages/posts.astro",{"propagation":"none","containsHead":true}],["/workspace/my-gitpod-workspace/src/pages/posts/welcome.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/posts.astro":"chunks/pages/posts.astro.f8b1ad96.mjs","/src/pages/posts/welcome.md":"chunks/pages/welcome.md.9857b037.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.5e505a47.mjs","\u0000@astro-page:src/pages/posts/welcome@_@md":"chunks/welcome@_@md.27c4b983.mjs","\u0000@astro-page:src/pages/posts@_@astro":"chunks/posts@_@astro.e631e57a.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.1ffeb636.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.d9f569a7.css","/_astro/posts.22b188d7.css","/_astro/posts.6292c4d3.css","/_astro/welcome.b7256ae9.css","/_astro/welcome.f5a515cd.css","/favicon.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
