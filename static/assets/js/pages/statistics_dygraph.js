$(document).ready(function()
{
	g1 = new Dygraph(document.getElementById("noroll"), data_temp,
		{
			customBars: true,
			title: 'Daily Temperatures in New York vs. San Francisco',
			ylabel: 'Temperature (F)',
			legend: 'always',
			labelsDivStyles:
				{
					'textAlign': 'right'
				},
			showRangeSelector: true,
			rangeSelectorPlotStrokeColor: myapp_get_color.primary_400,
			rangeSelectorPlotFillColor: myapp_get_color.primary_100
		});
	g2 = new Dygraph(document.getElementById("roll14"), data_temp,
		{
			rollPeriod: 14,
			showRoller: true,
			customBars: true,
			ylabel: 'Temperature (F)',
			legend: 'always',
			labelsDivStyles:
				{
					'textAlign': 'right'
				},
			showRangeSelector: true,
			rangeSelectorHeight: 30,
			rangeSelectorPlotStrokeColor: myapp_get_color.warning_100,
			rangeSelectorPlotFillColor: myapp_get_color.warning_50
		});

});