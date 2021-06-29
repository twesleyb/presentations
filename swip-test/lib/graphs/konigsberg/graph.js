let netw = cytoscape({
  container: document.getElementById('konigsberg-graph'),
  elements: data.elements,
  layout: {
    name: 'circle'
  }
});

Reveal.addEventListener('slidechanged', function(event) {
  if (event.currentSlide.id === 'style') {
    netw.resize();
    netw.layout();
  }
});
