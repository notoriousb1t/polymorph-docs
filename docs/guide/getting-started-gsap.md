# Getting Started with GSAP

GSAP is a professional-grade animation library for the modern web. It's crazy fast, freakishly robust and widely browser compatible. Find out more at [https://greensock.com/gsap/](https://greensock.com/gsap/).

## Setup
Like many other libraries, using NPM is the best way to install GSAP as a dependency.

```bash
npm install gsap
```

## Morph two shapes
To create a simple morphing effect, we just need two SVG shapes: in this example the `.origin` shape will morph into the `.target` shape in 800ms, no less, no more.

### Markup
Define the shapes in your document.
```html
<svg viewBox="0 0 100 100" class="origin">
  <path d="M15 15h70v70H15z"/>
</svg>

<svg viewBox="0 0 100 100" class="target">
  <path d="M30 50l20-20 20 20-20 20z"/>
</svg>
```

### Tween
Now, you need to use the `interpolate` method to prepare the shapes to morph. As you can see, GSAP is using the `d` attribute to update the shape path. You can improve the rendering by adjusting the [paths options](/api.md#interpolate-paths-options).

```ts
import * as Polymorph from 'polymorph-js';
import gsap from 'gsap';

// get the shape where you want the morphing to be done
const shape = document.querySelector('.origin path');

// create the morphing effect between the two paths
const morph = Polymorph.interpolate([
  '.origin path',
  '.target path'
]);

// play the tween morphing effect
let val = {
  prop: 0
};

gsap.to(val, {
  prop: 1,
  onUpdate: () => {
    shape.setAttribute('d', morph(val.prop));
  }
});
```

> Note that the `path` where the morphing is done can be any valid path in your document