var colors = [myapp_get_color.success_500, myapp_get_color.danger_500, myapp_get_color.info_500, myapp_get_color.primary_500, myapp_get_color.warning_500];

var simpleLine = c3.generate(
	{
		bindto: "#simpleLine",
		data:
			{
				columns: [
					["data1", 100, 165, 140, 270, 200, 140, 220],
					["data2", 110, 80, 100, 85, 125, 90, 100]
				]
			},
		color:
			{
				pattern: colors
			}
	});

var linleRegions = c3.generate(
	{
		bindto: "#linleRegions",
		data:
			{
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],
				regions:
					{
						'data1': [
							{
								'start': 1,
								'end': 2,
								'style': 'dashed'
							},
							{
								'start': 3
							}], // currently 'dashed' style only
						'data2': [
							{
								'end': 3
							}]
					}
			},
		color:
			{
				pattern: colors
			}
	});

var timeSeries = c3.generate(
	{
		bindto: "#timeSeries",
		data:
			{
				x: 'x',
				xFormat: '%Y',
				columns: [
					['x', '2010', '2011', '2012', '2013', '2014', '2015'],
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 340, 200, 500, 250, 350]
				]
			},
		color:
			{
				pattern: colors
			},
		axis:
			{
				x:
					{
						type: 'timeseries',
						// if true, treat x value as localtime (Default)
						// if false, convert to UTC internally
						localtime: false,
						tick:
							{
								format: '%Y-%m-%d %H:%M:%S'
							}
					}
			}
	});

var splilneLine = c3.generate(
	{
		bindto: "#splilneLine",
		data:
			{
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'spline'
			},
		color:
			{
				pattern: colors
			}
	});

var scatterChart = c3.generate(
	{
		bindto: "#scatterChart",
		data:
			{
				xs:
					{
						setosa: 'setosa_x',
						versicolor: 'versicolor_x',
					},
				// iris data from R
				columns: [
					["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
					["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
					["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
				],
				type: 'scatter'
			},
		color:
			{
				pattern: colors
			},
		axis:
			{
				x:
					{
						label: 'Sepal.Width',
						tick:
							{
								fit: false
							}
					},
				y:
					{
						label: 'Petal.Width'
					}
			}
	});

var scatterChartLoad = function()
{

	$("#scatterChartLoad").attr("disabled", true);

	setTimeout(function()
	{
		scatterChart.load(
			{
				xs:
					{
						virginica: 'virginica_x'
					},
				columns: [
					["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
					["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
				]
			});
	}, 1000);

	setTimeout(function()
	{
		scatterChart.unload(
			{
				ids: 'setosa'
			});
	}, 2000);

	setTimeout(function()
	{
		scatterChart.load(
			{
				columns: [
					["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
				]
			});
	}, 3000);

	setTimeout(function()
	{
		scatterChart.load(
			{
				columns: [
					["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
					["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
					["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
				]
			});
	}, 4000);

	setTimeout(function()
	{
		$("#scatterChartLoad").attr("disabled", false);
	}, 5000)
}

var barChart = c3.generate(
	{
		bindto: "#barChart",
		data:
			{
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'bar'
			},
		color:
			{
				pattern: colors
			},
		bar:
			{
				width:
					{
						ratio: 0.8 // this makes bar width 50% of length between ticks
					}
				// or
				//width: 100 // this makes bar width 100px
			}
	});

var barChartLoad = function()
{
	$("#barChartLoad").attr("disabled", true);
	$("#barChartLoad").text("loading...")

	setTimeout(function()
	{
		barChart.load(
			{
				columns: [
					['data3', 130, -150, 200, 300, -200, 100]
				]
			});
	}, 1000);

	setTimeout(function()
	{
		barChart.load(
			{
				columns: [
					['data4', 50, -70, 130, 170, 100, 50]
				]
			});
	}, 2000);

	setTimeout(function()
	{
		barChart.load(
			{
				columns: [
					['data5', 70, -50, -110, 70, 40, -70]
				]
			});
	}, 3000);

	setTimeout(function()
	{
		$("#barChartLoad").text("load complete")
	}, 4000)
};

var stackedBar = c3.generate(
	{
		bindto: "#stackedBar",
		data:
			{
				columns: [
					['data1', -30, 200, 200, 400, -150, 250],
					['data2', 130, 100, -100, 200, -150, 50],
					['data3', -230, 200, 200, -300, 250, 250]
				],
				type: 'bar',
				groups: [
					['data1', 'data2']
				]
			},
		color:
			{
				pattern: colors
			}
	});

var stackedBarLoad = function()
{

	$("#stackedBarLoad").attr("disabled", true);
	$("#stackedBarLoad").text("loading...");

	setTimeout(function()
	{
		$("#stackedBarLoad").text("grouping...")
		stackedBar.groups([
			['data1', 'data2', 'data3']
		])
	}, 1000);

	setTimeout(function()
	{
		$("#stackedBarLoad").text("grouping...")
		stackedBar.load(
			{
				columns: [
					['data4', 100, -50, 150, 200, -300, -100]
				]
			});
	}, 2000);

	setTimeout(function()
	{
		$("#stackedBarLoad").text("grouping...")
		stackedBar.groups([
			['data1', 'data2', 'data3', 'data4']
		])
	}, 3000);

	setTimeout(function()
	{
		$("#stackedBarLoad").text("load complete")
	}, 4000)
};

var stepChart = c3.generate(
	{
		bindto: "#stepChart",
		data:
			{
				columns: [
					['data1', 300, 350, 300, 0, 0, 100],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				types:
					{
						data1: 'step',
						data2: 'area-step'
					}
			},
		color:
			{
				pattern: [myapp_get_color.info_500, myapp_get_color.warning_500, myapp_get_color.success_500, myapp_get_color.danger_500, myapp_get_color.fusion_300]
			}
	});

var stepChartLoad = function()
{
	$("#stepChartLoad").attr("disabled", true);
	$("#stepChartLoad").text("loading...");

	setTimeout(function()
	{
		stepChart.load(
			{
				columns: [
					['data3', 130, -50, 200, 300, -200, 100]
				],
				type: 'area-step',
			});
	}, 1000);

	setTimeout(function()
	{
		stepChart.load(
			{
				columns: [
					['data4', 50, 70, 130, 170, 100, 50]
				],
				type: 'area-step'
			});
	}, 2000);

	setTimeout(function()
	{
		stepChart.load(
			{
				columns: [
					['data5', 70, -50, -110, 70, 40, -70]
				],
				type: 'step'
			});
	}, 3000);

	setTimeout(function()
	{
		$("#stepChartLoad").text("load complete")
	}, 4000)
}

var combinationChart = c3.generate(
	{
		bindto: "#combinationChart",
		data:
			{
				columns: [
					['data1', 30, 20, 50, 40, 60, 50],
					['data2', 200, 130, 90, 240, 130, 220],
					['data3', 300, 200, 160, 400, 250, 250],
					['data4', 200, 130, 90, 240, 130, 220],
					['data5', 130, 120, 150, 140, 160, 150],
					['data6', 90, 70, 20, 50, 60, 120],
				],
				type: 'bar',
				types:
					{
						data3: 'spline',
						data4: 'line',
						data6: 'area',
					},
				groups: [
					['data1', 'data2']
				]
			},
		color:
			{
				pattern: colors
			}
	});

var pieChart = c3.generate(
	{
		bindto: "#pieChart",
		data:
			{
				// iris data from R
				columns: [
					['virtigo', 30],
					['clarfy', 120],
					["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
					["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
				],
				type: 'pie' //,
				/*onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }*/
			},
		color:
			{
				pattern: colors
			}
	});

var pieChartUnload = function()
{
	$("#pieChartUnload").attr("disabled", true);
	$("#pieChartUnload").text("unloading datasets...")
	setTimeout(function()
	{
		pieChart.unload(
			{
				ids: 'virtigo'
			});
		pieChart.unload(
			{
				ids: 'clarfy'
			});
	}, 1000);
	setTimeout(function()
	{
		$("#pieChartUnload").text("unload complete")
	}, 2000);
};

var donutChart = c3.generate(
	{
		bindto: "#donutChart",
		data:
			{
				// iris data from R
				columns: [
					['IE', 30],
					['Firefox', 120],
					["Opera", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["Safari", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
					["Chrome", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
				],
				type: 'donut' //,
				/*onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }*/
			},
		donut:
			{
				title: "SmartAdmin Browsers"
			},
		color:
			{
				pattern: colors
			}
	});

var donutChartUnload = function()
{
	$("#donutChartUnload").attr("disabled", true);
	$("#donutChartUnload").text("unloading datasets...")
	setTimeout(function()
	{
		donutChart.unload(
			{
				ids: 'Chrome'
			});
		donutChart.unload(
			{
				ids: 'Opera'
			});
	}, 1000);
	setTimeout(function()
	{
		$("#donutChartUnload").text("unload complete")
	}, 2000);
};

var interactiveExample = c3.generate(
	{
		bindto: "#interactiveExample",
		data:
			{
				columns: [
					["data1", 100, 165, 140, 170, 200, 140, 220, 210, 190, 200, 170, 250],
					["data2", 110, 80, 100, 85, 125, 110, 100, 130, 120, 100, 130, 145],
					["data3", 75, 60, 70, 65, 85, 80, 70, 100, 100, 70, 90, 100]
				],
				type: "area-spline"
			},
		subchart:
			{
				show: true
			},
		color:
			{
				pattern: colors
			}
	});

var interactiveWheel = c3.generate(
	{
		bindto: "#interactiveWheel",
		data:
			{
				columns: [
					['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
				]
			},
		zoom:
			{
				enabled: true
			},
		color:
			{
				pattern: [myapp_get_color.primary_500, myapp_get_color.danger_500, myapp_get_color.info_500, myapp_get_color.success_500, myapp_get_color.warning_500]
			},
		grid:
			{
				x:
					{
						show: true
					},
				y:
					{
						show: false
					}
			}
	});