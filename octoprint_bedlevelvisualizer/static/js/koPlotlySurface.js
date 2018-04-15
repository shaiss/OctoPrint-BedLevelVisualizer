ko.bindingHandlers.plotlySurface = {
/* 	init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var test = ko.unwrap(valueAccessor()) || [];
		console.log(test);
		var data = [{
				z: test,
				type: 'surface'
			}
		];

		var layout = {
			//title: 'Bed Leveling Mesh',
			autosize: true,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				camera: {
					eye: {
						x: -1.25,
						y: -1.25,
						z: 1.25
					}
				}
			}
		};	
		Plotly.react(element, data, layout);
	}, */
	update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		console.log(valueAccessor());
		console.log(ko.unwrap(valueAccessor()));
		console.log(allBindingsAccessor);
		console.log(viewModel);
		console.log(bindingContext);
/* 		var test = ko.unwrap(valueAccessor()) || [];
		console.log(test);
		
		var data = [{
				z: test,
				type: 'surface'
			}
		];

		var layout = {
			//title: 'Bed Leveling Mesh',
			autosize: true,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				camera: {
					eye: {
						x: -1.25,
						y: -1.25,
						z: 1.25
					}
				}
			}
		};		

		Plotly.react(element, data, layout); */
	}
};