/* infinite nav pills */
$('#js-nav-pills-menu').menuSlider(
	{
		element: $('#js-nav-pills-menu'),
		wrapperId: 'test-nav'
	});


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
$(document).on('change', '.js-bg-color', function()
{
	var setBgColor = $('select.js-bg-color').val();
	var setValue = $('select.js-bg-target').val();

	$('select.js-bg-color').removeClassPrefix('bg-').addClass(setBgColor);
	$(setValue).removeClassPrefix('bg-').addClass(setBgColor);
})

/* change border */
$(document).on('change', '.js-border-color', function()
{
	var setBorderColor = $('select.js-border-color').val();
	$("#cp-2").removeClassPrefix('border-').addClass(setBorderColor);
	$('select.js-border-color').removeClassPrefix('border-').addClass(setBorderColor);
})

/* change target */
$(document).on('change', '.js-bg-target', function()
{
	//reset color selection
	$('select.js-bg-color').prop('selectedIndex', 0).removeClassPrefix('bg-');
})