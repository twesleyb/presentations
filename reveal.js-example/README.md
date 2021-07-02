## Notes
_reveal.js template + reveald3 and custom css_

## Working with reveald3
* install (see below)
* add reveald3 to dependencies in `index.html` (see below)
* add slide with `div class="fig-container"` and provide path to `data-file`
* add custom css in `lib/` --> `lib/css/custom-gc.css`

```
# install reveald3 
# * puts module in `node_modules`
# * updates `package.json` and `package-lock.json` 
npm install --save reveald3

# put reveald3 in Reveal.initialize `dependencies`
dependencies: [
		{ src: 'node_modules/reveald3/reveald3.js' }
]

```
