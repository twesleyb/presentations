## Notes

Start-up
```
npm install
npm start
localhost
```

Vim Auto-indent
```
gg=G
```

### Imbedding Cytoscape
* save network (no html) --> generates `networks.js` and `styles.js`, you can
	use `networks.js` as `graph-data.js`.
* Alternatively save network as `.cyjs` and append `let data = `
* modify `networks.js` --> this is `graph_data.js`
* generate `graph.js`--> name should match graph `<div id>` tag
* include cytoscape js source code (data, graph, cytoscape)
* NOTE: order seems to be important! cytoscape.js src should be after reveal.js!
* adjust slide size to be `with:100%` and `height:100%`
