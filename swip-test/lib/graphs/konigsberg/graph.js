let netw = cytoscape({
  container: document.getElementById('konigsberg-graph'),
  elements: data.elements,
		style: [
				{
						selector: 'node',
						style: {
								'background-color': "rgb(58,127,182)", // node color
								'border-color': "rgb(0,0,0)",
								'border-width': 4,
								'width': 75,
								'height': 75,
								'content': "data(name)",
								'text-valign': "center"
						}
				}
		],
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
