---
layout : "../../layouts/BlogPost.astro"
title : "An Introduction To Web Components"
author : "EasewithTuts"
date : 18 June 2023
description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consequuntur quas necessitatibus quis itaque provident."
heroImage : "https://placehold.co/600x400"
---
Web Components are custom elements which can be defined in 3 ways
 * [Lit](https://lit.dev)
 * [Stencil.js](https://stenciljs.com)
 * Natively in Javascript

But,We'll cover on how to define them in Vanilla JavaScript

 # Step 1
 Create a class extending 'HTMLElement'

```js
class Example extends HTMLElement {
    
}
```

# Step 2
Add a connectedCallback() Lifecycle in the class
```js
class Example extends HTMLElement {
    connectedCallback() {
        
    }
}
```

# Step 3
Use this.innerHTML as the content of the element.
You can add Native HTML Elements
```js
class Example extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p></p>`
    }
}
```

# Step 4
Define your web component.
```js
customElements.define('my-example',Example)
```

# That's it!
You created your first web component.
