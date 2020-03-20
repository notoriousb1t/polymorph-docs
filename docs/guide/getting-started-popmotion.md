# Getting Started with Popmotion

Popmotion is a simple animation library for delightful user interfaces : the small Swiss Army knife for animators and UI developers. Find out more at [https://popmotion.io](https://popmotion.io/).

## Setup
Like many other libraries, using NPM is the best way to install popmotion as a dependency.

```bash
npm install popmotion
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
Now, you need to use the `interpolate` method to prepare the shapes to morph. As you can see, popmotion is using the `d` attribute to update the shape path. You can improve the rendering by adjusting the [paths options](/api.md#interpolate-paths-options).

```ts
import * as Polymorph from 'polymorph-js';
import * as Popmotion from 'popmotion';

// get the shape where you want the morphing to be done
const shape = Popmotion.styler(document.querySelector('.origin'));

// create the morphing effect between the two paths
const morph = Polymorph.interpolate([
  '.origin path',
  '.target path'
]);

// play the tween morphing effect
Popmotion.tween({
  duration: 800
}).pipe(morph).start(shape.set('d'));
```

> Note that the `path` where the morphing is done can be any valid path in your document