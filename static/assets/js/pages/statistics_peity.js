$(document).ready(function()
{

	// multiple donut sizes
	$(".js-data-attributes span").peity("donut")

	//auto update chart
	var updatingChart = $(".updating-chart").peity("line",
		{
			fill: myapp_get_color.info_500,
			stroke: myapp_get_color.info_700,
			width: "210",
			height: 40
		})
	setInterval(function()
	{
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
			.text(values.join(","))
			.change()
	}, 500);

	$(".bar-colours-2").peity("bar",
		{
			fill: function(value)
			{
				return value > 0 ? myapp_get_color.success_500 : myapp_get_color.danger_500
			}
		})

	$(".bar-colours-3").peity("bar",
		{
			fill: function(_, i, all)
			{
				var g = parseInt((i / all.length) * 255)
				return "rgb(255, " + g + ", " + g + ")"
			}
		})

});