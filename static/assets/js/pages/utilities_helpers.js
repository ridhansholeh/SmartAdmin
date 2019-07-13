//initApp.listFilter(navHooks, navFilterInput, navAnchor);
//initApp.listFilter($('js-primary-nav > ul.nav-menu'), $('#nav_filter_input'), $('js-primary-nav'));


initApp.listFilter($('#helper-filter-list'), $('#helper-filter-input'));

//

var jsopacity = $("#js_opacity");
var jsopacityText = $("#js_opacity_class")

$("#js_opacity_range").on("input change", function()
{
	//do something
	jsopacityText.text('.opacity' + $(this).val());
	jsopacity.removeClass().addClass("rounded-circle width-3 h-auto opacity-" + $(this).val());
});


// gradient example

var ng_bgColors,
	ng_bgColors_URL = "/assets/media/data/ng-bg-colors.json",
	formatBgColors = [];

$.when(
	$.getJSON(ng_bgColors_URL, function(data)
	{
		ng_bgColors = data;
	})
).then(function()
{
	if (ng_bgColors)
	{

		formatBgColors.push($('<option></option>').attr("value", null).text("select background"));

		//formatTextColors
		jQuery.each(ng_bgColors, function(index, item)
		{
			formatBgColors.push($('<option></option>').attr("value", item).addClass(item).text(item))
		});

		$("select.js-bg-color").empty().append(formatBgColors);

	}
	else
	{
		console.log("somethign went wrong!")
	}
});

/* change background */
$(document).on('change', '.js-bg-gradient-demo', function()
{
	var setBgColor = $('select.js-bg-color').val();
	var setValue = $('select.js-bg-gradient').val();

	$('select.js-bg-color').removeClassPrefix('bg-').addClass(setBgColor);
	$('#js-gradient-demo').removeClass().addClass("p-3 rounded " + ' ' + setBgColor + ' ' + setValue);

})