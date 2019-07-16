/* line chart */
var lineChart = function()
{
	var config = {
		type: 'line',
		data:
			{
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: "Success",
						borderColor: myapp_get_color.success_500,
						pointBackgroundColor: myapp_get_color.success_700,
						pointBorderColor: 'rgba(0, 0, 0, 0)',
						pointBorderWidth: 1,
						borderWidth: 1,
						pointRadius: 3,
						pointHoverRadius: 4,
						data: [
							23,
							75,
							60, -48, -9,
							26,
							45
						],
						fill: false
					}]
			},
		options:
			{
				responsive: true,
				title:
					{
						display: false,
						text: 'Line Chart'
					},
				tooltips:
					{
						mode: 'index',
						intersect: false,
					},
				hover:
					{
						mode: 'nearest',
						intersect: true
					},
				scales:
					{
						xAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: '6 months forecast'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						yAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Profit margin (approx)'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	};
	new Chart($("#lineChart > canvas").get(0).getContext("2d"), config);
}
/* line chart -- end */

/* area chart */
var areaChart = function()
{
	var config = {
		type: 'line',
		data:
			{
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: "Primary",
						backgroundColor: 'rgba(136,106,181, 0.2)',
						borderColor: myapp_get_color.primary_500,
						pointBackgroundColor: myapp_get_color.primary_700,
						pointBorderColor: 'rgba(0, 0, 0, 0)',
						pointBorderWidth: 1,
						borderWidth: 1,
						pointRadius: 3,
						pointHoverRadius: 4,
						data: [
							45,
							75,
							26,
							23,
							60, -48, -9
						],
						fill: true
					},
					{
						label: "Success",
						backgroundColor: 'rgba(29,201,183, 0.2)',
						borderColor: myapp_get_color.success_500,
						pointBackgroundColor: myapp_get_color.success_700,
						pointBorderColor: 'rgba(0, 0, 0, 0)',
						pointBorderWidth: 1,
						borderWidth: 1,
						pointRadius: 3,
						pointHoverRadius: 4,
						data: [-10,
							16,
							72,
							93,
							29, -74,
							64
						],
						fill: true
					}]
			},
		options:
			{
				responsive: true,
				title:
					{
						display: false,
						text: 'Area Chart'
					},
				tooltips:
					{
						mode: 'index',
						intersect: false,
					},
				hover:
					{
						mode: 'nearest',
						intersect: true
					},
				scales:
					{
						xAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: '6 months forecast'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						yAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Profit margin (approx)'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	};
	new Chart($("#areaChart > canvas").get(0).getContext("2d"), config);
}
/* area chart -- end */

/* horizontal bar chart */
var horizontalBarChart = function()
{
	var horizontalBarChart = {
		labels: ["January", "February", "March", "April"],
		datasets: [
			{
				label: "Red",
				backgroundColor: myapp_get_color.success_300,
				borderColor: myapp_get_color.success_500,
				borderWidth: 1,
				data: [
					45,
					60, -28, -9
				]
			},
			{
				label: "Blue",
				backgroundColor: myapp_get_color.primary_300,
				borderColor: myapp_get_color.primary_500,
				borderWidth: 1,
				data: [-10,
					29, -34,
					64
				]
			}]

	};
	var config = {
		type: 'horizontalBar',
		data: horizontalBarChart,
		options:
			{
				responsive: true,
				legend:
					{
						position: 'top',
					},
				title:
					{
						display: false,
						text: 'Horizontal Bar Chart'
					},
				scales:
					{
						xAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Profit margin (approx)'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						yAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Quarterly forecast'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#horizontalBarChart > canvas").get(0).getContext("2d"), config);
}
/* horizontal bar chart -- end */

/* bar chart */
var barChart = function()
{
	var barChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Red",
				backgroundColor: myapp_get_color.success_300,
				borderColor: myapp_get_color.success_500,
				borderWidth: 1,
				data: [
					45,
					75,
					26,
					23,
					60, -48, -9
				]
			},
			{
				label: "Blue",
				backgroundColor: myapp_get_color.primary_300,
				borderColor: myapp_get_color.primary_500,
				borderWidth: 1,
				data: [-10,
					16,
					72,
					93,
					29, -74,
					64
				]
			}]

	};
	var config = {
		type: 'bar',
		data: barChartData,
		options:
			{
				responsive: true,
				legend:
					{
						position: 'top',
					},
				title:
					{
						display: false,
						text: 'Bar Chart'
					},
				scales:
					{
						xAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: '6 months forecast'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						yAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Profit margin (approx)'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#barChart > canvas").get(0).getContext("2d"), config);
}
/* bar chart -- end */

/* bar stacked */
var barStacked = function()
{
	var barStackedData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Red",
				backgroundColor: myapp_get_color.primary_300,
				borderColor: myapp_get_color.primary_500,
				borderWidth: 1,
				data: [
					45,
					75,
					26,
					23,
					60, -48, -9
				]
			},
			{
				label: "Blue",
				backgroundColor: myapp_get_color.success_300,
				borderColor: myapp_get_color.success_500,
				borderWidth: 1,
				data: [-10,
					16,
					72,
					93,
					29, -74,
					64
				]
			}]

	};
	var config = {
		type: 'bar',
		data: barStackedData,
		options:
			{
				legend:
					{
						display: false,
						labels:
							{
								display: false
							}
					},
				scales:
					{
						yAxes: [
							{
								stacked: true,
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						xAxes: [
							{
								stacked: true,
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#barStacked > canvas").get(0).getContext("2d"), config);
}
/* bar stacked -- end */

/* bar horizontal stacked */
var barHorizontalStacked = function()
{
	var barHorizontalStackedData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Red",
				backgroundColor: myapp_get_color.primary_300,
				borderColor: myapp_get_color.primary_500,
				borderWidth: 1,
				data: [
					45,
					75,
					26,
					23,
					60, -48, -9
				]
			},
			{
				label: "Blue",
				backgroundColor: myapp_get_color.success_300,
				borderColor: myapp_get_color.success_500,
				borderWidth: 1,
				data: [-10,
					16,
					72,
					93,
					29, -74,
					64
				]
			}]

	};
	var config = {
		type: 'horizontalBar',
		data: barHorizontalStackedData,
		options:
			{
				legend:
					{
						display: false,
						labels:
							{
								display: false
							}
					},
				scales:
					{
						yAxes: [
							{
								stacked: true,
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						xAxes: [
							{
								stacked: true,
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#barHorizontalStacked > canvas").get(0).getContext("2d"), config);
}
/* bar horizontal stacked -- end */

/* grid color */
var gridColor = function()
{
	var config = {
		type: 'line',
		data:
			{
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [
					{
						data: [10, 24, 20, 25, 35, 50],
						backgroundColor: 'rgba(0,0,0, 0.07)',
						borderColor: myapp_get_color.fusion_300,
						borderWidth: 1,
						fill: true
					},
					{
						data: [20, 30, 28, 33, 45, 65],
						backgroundColor: 'rgba(0,0,0, 0.03)',
						borderColor: myapp_get_color.fusion_100,
						borderWidth: 1,
						fill: true
					}]
			},
		options:
			{
				legend:
					{
						display: false,
						labels:
							{
								display: false
							}
					},
				scales:
					{
						yAxes: [
							{
								gridLines:
									{
										drawBorder: false,
										color: ['', myapp_get_color.danger_500, myapp_get_color.success_500]
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11,
										max: 80
									}
							}],
						xAxes: [
							{
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#gridColor > canvas").get(0).getContext("2d"), config);
}
/* grid color -- end */

/* bar & line combine */
var barlineCombine = function()
{
	var barlineCombineData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				type: 'line',
				label: 'Dataset 1',
				borderColor: myapp_get_color.danger_300,
				pointBackgroundColor: myapp_get_color.danger_500,
				pointBorderColor: myapp_get_color.danger_500,
				pointBorderWidth: 1,
				borderWidth: 2,
				pointRadius: 4,
				pointHoverRadius: 5,
				fill: false,
				data: [
					-10,
					16,
					72,
					93,
					29,
					-74,
					64
				]
			},
			{
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: myapp_get_color.primary_300,
				borderColor: myapp_get_color.primary_500,
				data: [
					45,
					75,
					26,
					23,
					60,
					-48,
					-9
				],
				borderWidth: 1
			},
			{
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: myapp_get_color.success_300,
				borderColor: myapp_get_color.success_500,
				data: [
					-10,
					16,
					72,
					93,
					29,
					-74,
					64
				],
				borderWidth: 1
			}]

	};
	var config = {
		type: 'bar',
		data: barlineCombineData,
		options:
			{
				responsive: true,
				legend:
					{
						position: 'top',
					},
				title:
					{
						display: true,
						text: 'Chart.js Bar Chart'
					},
				scales:
					{
						xAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: '6 months forecast'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}],
						yAxes: [
							{
								display: true,
								scaleLabel:
									{
										display: false,
										labelString: 'Profit margin (approx)'
									},
								gridLines:
									{
										display: true,
										color: "#f2f2f2"
									},
								ticks:
									{
										beginAtZero: true,
										fontSize: 11
									}
							}]
					}
			}
	}
	new Chart($("#barlineCombine > canvas").get(0).getContext("2d"), config);
}
/* bar & line combine -- end */

/* polar area */
var polarArea = function()
{
	var config = {
		type: 'polarArea',
		data:
			{
				datasets: [
					{
						data: [
							11,
							16,
							7,
							3,
							14
						],
						backgroundColor: [
							myapp_get_color.primary_200,
							myapp_get_color.primary_400,
							myapp_get_color.success_100,
							myapp_get_color.success_400,
							myapp_get_color.success_600
						],
						label: 'My dataset' // for legend
					}],
				labels: [
					"USA",
					"Germany",
					"Austalia",
					"Canada",
					"France"
				]
			},
		options:
			{
				responsive: true,
				legend:
					{
						display: true,
						position: 'bottom',
					}
			}
	};
	new Chart($("#polarArea > canvas").get(0).getContext("2d"), config);
}
/* polar area -- end */

/* radar chart */
var radarChart = function()
{
	var config = {
		type: "radar",
		data:
			{
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Partying", "Running"],
				datasets: [
					{
						label: "First",
						pointRadius: 4,
						borderDashOffset: 2,
						backgroundColor: "rgba(136,106,181, 0.2)",
						borderColor: "rgba(0,0,0,0)",
						pointBackgroundColor: myapp_get_color.primary_500,
						pointBorderColor: myapp_get_color.primary_500,
						pointHoverBackgroundColor: myapp_get_color.primary_500,
						pointHoverBorderColor: myapp_get_color.primary_500,
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: "Second",
						pointRadius: 4,
						borderDashOffset: 2,
						backgroundColor: "rgba(29,201,183, 0.2)",
						borderColor: "rgba(0,0,0,0)",
						pointBackgroundColor: myapp_get_color.success_500,
						pointBorderColor: myapp_get_color.success_500,
						pointHoverBackgroundColor: myapp_get_color.success_500,
						pointHoverBorderColor: myapp_get_color.success_500,
						data: [28, 48, 40, 19, 96, 27, 100]
					}]
			},
		options:
			{
				responsive: true,
			}
	}

	new Chart($("#radarChart > canvas").get(0).getContext("2d"), config);

}
/* radar chart -- end */

/* bubble chart */
var bubbleChart = function()
{
	var config = {
		type: 'bubble',
		data:
			{
				labels: "Africa",
				datasets: [
					{
						label: ["China"],
						backgroundColor: myapp_get_color.primary_300,
						borderColor: myapp_get_color.primary_500,
						data: [
							{
								x: 21269017,
								y: 5.245,
								r: 15
							}]
					},
					{
						label: ["Denmark"],
						backgroundColor: myapp_get_color.success_300,
						borderColor: myapp_get_color.success_500,
						data: [
							{
								x: 258702,
								y: 7.526,
								r: 10
							}]
					},
					{
						label: ["Germany"],
						backgroundColor: myapp_get_color.info_300,
						borderColor: myapp_get_color.info_500,
						data: [
							{
								x: 3979083,
								y: 6.994,
								r: 15
							}]
					},
					{
						label: ["Japan"],
						backgroundColor: myapp_get_color.danger_300,
						borderColor: myapp_get_color.danger_500,
						data: [
							{
								x: 4931877,
								y: 5.921,
								r: 15
							}]
					}]
			},
		options:
			{
				title:
					{
						display: true,
						text: 'Predicted world population (millions) in 2050'
					},
				scales:
					{
						yAxes: [
							{
								scaleLabel:
									{
										display: true,
										labelString: "Happiness"
									}
							}],
						xAxes: [
							{
								scaleLabel:
									{
										display: true,
										labelString: "GDP (PPP)"
									}
							}]
					}
			}
	}
	new Chart($("#bubbleChart > canvas").get(0).getContext("2d"), config);
}
/* bubble chart -- end*/

/* pie chart */
var pieChart = function()
{
	var config = {
		type: 'pie',
		data:
			{
				datasets: [
					{
						data: [
							11,
							16,
							7,
							3,
							14
						],
						backgroundColor: [
							myapp_get_color.primary_200,
							myapp_get_color.primary_400,
							myapp_get_color.success_50,
							myapp_get_color.success_300,
							myapp_get_color.success_500
						],
						label: 'My dataset' // for legend
					}],
				labels: [
					"USA",
					"Germany",
					"Austalia",
					"Canada",
					"France"
				]
			},
		options:
			{
				responsive: true,
				legend:
					{
						display: true,
						position: 'bottom',
					}
			}
	};
	new Chart($("#pieChart > canvas").get(0).getContext("2d"), config);
}
/* pie chart -- end */

/* doughnut chart */
var doughnutChart = function()
{
	var config = {
		type: 'doughnut',
		data:
			{
				datasets: [
					{
						data: [
							11,
							16,
							7,
							3,
							14
						],
						backgroundColor: [
							myapp_get_color.success_200,
							myapp_get_color.success_400,
							myapp_get_color.primary_50,
							myapp_get_color.primary_300,
							myapp_get_color.primary_500
						],
						label: 'My dataset' // for legend


					}],
				labels: [
					"USA",
					"Germany",
					"Austalia",
					"Canada",
					"France"
				]
			},
		options:
			{
				responsive: true,
				legend:
					{
						display: true,
						position: 'bottom',
					}
			}
	};
	new Chart($("#doughnutChart > canvas").get(0).getContext("2d"), config);
}
/* doughnut chart -- end */

/* initialize all charts */
$(document).ready(function()
{
	lineChart();
	areaChart();
	horizontalBarChart();
	barChart();
	barStacked();
	barHorizontalStacked();
	bubbleChart();
	barlineCombine();
	polarArea();
	radarChart();
	pieChart();
	doughnutChart();
});