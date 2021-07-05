$.getJSON("data.json", function (data) {
		//console.log(data);
		var cy = cytoscape({
				container: document.getElementById('cy'),
				elements: data,
				style: [
						{
								selector: 'selected',
								style: {
										'background-color': 'yellow'
								}
						}, {
								selector: 'node',
								style: {
										'label': 'data(name)',
										'text-valign': 'center',
										'text-outline-width':2,
										'text-outline-color':"dark-blue",
										'width': 75,
										'height': 75,
										'background-color': 'blue',
										'border-color': 'black',
										'border-width': 4,
										'color': 'white',
								}
						}, {
								selector: 'edge',
								style: {
										'width': '6px',
										'opacity': 0.666,
										'curve-style': 'bezier',
								}
						}
				],
				layout: {
						name: 'cose'
				}
		});
});
