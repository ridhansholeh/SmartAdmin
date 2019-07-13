var example_gridsize = $("#example-gridsize");

$("#gridrange").on("input change", function()
{
	//do something
	example_gridsize.attr("placeholder", ".col-" + $(this).val());
	example_gridsize.parent().removeClass().addClass("col-" + $(this).val())
	console.log("col-" + $(this).val());
});