$('#js_change_tab_direction input').on('change', function()
{
	var newclass = $('input[name=radioNameTabDirection]:checked', '#js_change_tab_direction').val();
	$('#js_change_tab_direction').parent('.panel-tag').next('.nav.nav-tabs').removeClass().addClass(newclass);
});
$('#js_change_pill_direction input').on('change', function()
{
	var newclass = $('input[name=radioNamePillDirection]:checked', '#js_change_pill_direction').val();
	$('#js_change_pill_direction').parent('.panel-tag').next('.nav.nav-pills').removeClass().addClass(newclass);
});