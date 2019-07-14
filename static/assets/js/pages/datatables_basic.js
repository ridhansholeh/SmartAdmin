/* demo scripts for change table color */
/* change background */

$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			responsive: true
		});

	$('.js-thead-colors a').on('click', function()
	{
		var theadColor = $(this).attr("data-bg");
		console.log(theadColor);
		$('#dt-basic-example thead').removeClassPrefix('bg-').addClass(theadColor);
	});

	$('.js-tbody-colors a').on('click', function()
	{
		var theadColor = $(this).attr("data-bg");
		console.log(theadColor);
		$('#dt-basic-example').removeClassPrefix('bg-').addClass(theadColor);
	});

});