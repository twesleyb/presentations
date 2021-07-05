$.getJSON("data.json", function (data) {
		//console.log(data);
		var cy = cytoscape({
				container: document.getElementById('cy'),
				elements: data,
				style: [
						{
								selector: 'node',
								style: {
										'label': 'data(name)',
										'text-valign': 'center',
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
										'color': 'red',
								}
						}
				],
				layout: {
						name: 'cose'
				}
		});
});
