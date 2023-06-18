import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from '../astro.da3a6275.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                             *//* empty css                           */
const $$Astro$4 = createAstro();
const $$ThemeToggler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThemeToggler;
  return renderTemplate`${maybeRenderHead($$result)}<button id="themeToggle" class="astro-EF2QS43U">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-EF2QS43U">
    <path class="sun astro-EF2QS43U" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-EF2QS43U" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>`;
}, "/workspace/my-gitpod-workspace/src/components/ThemeToggler.astro");

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  const { siteName } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-DMQPWCEC">
    <div class="nav astro-DMQPWCEC">
    <h1 class="site-title astro-DMQPWCEC">${siteName}</h1>
    <a href="/" class="astro-DMQPWCEC">Home</a>
    <a href="/posts" class="astro-DMQPWCEC">Blog</a>
    <a style="font-size:1.5rem" href="https://github.com/Easewithtuts" class="fa-brands fa-github astro-DMQPWCEC"></a>
    ${renderComponent($$result, "ThemeToggler", $$ThemeToggler, { "class": "astro-DMQPWCEC" })}
    </div>
</header>`;
}, "/workspace/my-gitpod-workspace/src/components/Nav.astro");

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead($$result)}<div class="footer astro-SZ7XMLTE">&copy;${today.getFullYear()} EasewithTuts.<br class="astro-SZ7XMLTE">Built with <a href="https://astro.build" class="astro-SZ7XMLTE">Astro.</a></div>`;
}, "/workspace/my-gitpod-workspace/src/components/Footer.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-SCKKX6R4">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>', "</title>\n    <script", ' crossorigin="anonymous"><\/script>\n    \n', '</head>\n<body class="astro-SCKKX6R4">\n    \n    ', "\n    ", "\n", "\n</body></html>"])), title, addAttribute(({}).KIT, "src"), renderHead($$result), renderComponent($$result, "Nav", $$Nav, { "siteName": "EasewithTuts", "class": "astro-SCKKX6R4" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-SCKKX6R4" }));
}, "/workspace/my-gitpod-workspace/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<h1>Hello, Stranger.</h1>
	<p>Welcome to my blog</p>
` })}`;
}, "/workspace/my-gitpod-workspace/src/pages/index.astro");

const $$file = "/workspace/my-gitpod-workspace/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Footer as a, $$Nav as b, index as i };
