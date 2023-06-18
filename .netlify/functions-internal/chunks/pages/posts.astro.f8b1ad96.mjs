import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent } from '../astro.da3a6275.mjs';
import 'html-escaper';
import { $ as $$Layout } from './index.astro.cab55e2f.mjs';
/* empty css                           *//* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             *//* empty css                           */
const $$Astro$1 = createAstro();
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { postTitle, postLink, postDate } = Astro2.props;
  return renderTemplate`
${maybeRenderHead($$result)}<div class="center astro-IYIQI2SO">
    <div class="post-card astro-IYIQI2SO">
        <h1 style="text-align: start; margin-left:0.2rem" class="astro-IYIQI2SO">${postTitle}</h1>
        <h2 style="text-align: start; margin-left:0.2rem;font-size:1rem" class="astro-IYIQI2SO">${postDate}</h2>
        <a${addAttribute(postLink, "href")} class="read-more astro-IYIQI2SO">Read More</a>
    </div>
</div>`;
}, "/workspace/my-gitpod-workspace/src/components/PostCard.astro");

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/welcome.md": () => import('./welcome.md.9857b037.mjs')}), () => "../pages/posts/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<h1>Posts</h1>
    ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "postTitle": post.frontmatter.title, "postLink": post.url, "postDate": post.frontmatter.date })}`)}` })}`;
}, "/workspace/my-gitpod-workspace/src/pages/posts.astro");

const $$file = "/workspace/my-gitpod-workspace/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };
