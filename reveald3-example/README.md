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

# Use reveald3 to point to cytoscape!
a cytoscape graph will have the following elements:
* cytoscape.js, e.g. `cytoscape.min.js` --> put this in `lib/js/`
* main page: index.html
* graph data: data.json
* graph code: code.js
* graph style: style.css

This way each graph can be a stand-alone page that is easy to work with and easy
to point to within a reveal.js presentation. To render the static webpage we
need reveald3!

Its pretty easy now to incorporate any of the cytoscape examples. 

Not sure how to save graph data as flat json and not cytoscape json (*.cyjs). 

Documentation points to `cy.json()`

With the following directory structure, all we need to do is point our
presentation to a html file for a cytoscape graph!
