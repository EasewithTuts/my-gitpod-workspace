import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot, e as renderHead, g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.da3a6275.mjs';
import 'html-escaper';
/* empty css                           */import { a as $$Footer, b as $$Nav } from './index.astro.cab55e2f.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             *//* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-BVZIHDZO">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>', '</title>\n    <script src="https://kit.fontawesome.com/e677c14d11.js" crossorigin="anonymous"><\/script>\n    \n', '</head>\n<body class="astro-BVZIHDZO">\n    \n    ', '\n    \n    <div class="box-details astro-BVZIHDZO">\n        <h1 class="astro-BVZIHDZO">', '</h1>\n        <span class="astro-BVZIHDZO">', " \xB7 Posted on ", '</span>\n\n    </div>\n    <div class="box astro-BVZIHDZO">\n        ', "\n    </div>\n    ", "\n</body></html>"])), frontmatter.title, renderHead($$result), renderComponent($$result, "Nav", $$Nav, { "siteName": "EasewithTuts", "class": "astro-BVZIHDZO" }), frontmatter.title, frontmatter.author, frontmatter.date, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-BVZIHDZO" }));
}, "/workspace/my-gitpod-workspace/src/layouts/BlogPost.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Hello World!</p>");

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Welcome","author":"EasewithTuts","date":"18 June 2023"};
				const file = "/workspace/my-gitpod-workspace/src/pages/posts/welcome.md";
				const url = "/posts/welcome";
				function rawContent() {
					return "Hello World!\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BlogPost, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
