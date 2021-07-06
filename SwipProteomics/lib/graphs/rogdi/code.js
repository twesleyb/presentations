$.getJSON("data.json", function (data) {
		//console.log(data);
		var cy = cytoscape({
				container: document.getElementById('cy'),
				elements: data,
				style: [
						{
								selector: 'node',
								style: {
										'label': 'data(Protein)',
										'text-valign': 'center',
										'width': 85,
										'height': 85,
										'background-color': 'data(Color)',
										'border-color': 'data(takamori)',
										'border-width': 4,
										'color': 'black',
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
