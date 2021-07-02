$.getJSON("data.json", function (data) {
		//console.log(data);
		var cy = cytoscape({
				container: document.getElementById('cy'),
				elements: data,
				style: [
						{
								selector: 'node',
								style: {
										'label': 'data(label)',
										'width': '60px',
										'height': '60px',
										'color': 'blue',
										'background-fit': 'contain',
										'background-clip': 'none'
								}
						}, {
								selector: 'edge',
								style: {
										'text-background-color': 'yellow',
										'text-background-opacity': 0.4,
										'width': '6px',
										'target-arrow-shape': 'triangle',
										'control-point-step-size': '140px'
								}
						}
				],
				layout: {
						name: 'circle'
				}
		});
});
