// elements: references data.js (let graph1 = {})
// document.getElementsById references div tag
let cy1 = cytoscape({
  container: document.getElementById('graph1-cy'),
  elements: graph1.elements,
  layout: {
    name: 'grid'
  }
});

Reveal.addEventListener('slidechanged', function(event) {
  if (event.currentSlide.id === 'style') {
    cy1.resize();
    cy1.layout();
  }
});
