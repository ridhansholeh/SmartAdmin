$(document).ready(function()
{

	/* update chart */
	var chart = window.chart = $('#update-chart .js-easy-pie-chart').data('easyPieChart');

	$('.js-update').on('click', function()
	{
		chart.update(Math.random() * 200 - 100);
	});

});