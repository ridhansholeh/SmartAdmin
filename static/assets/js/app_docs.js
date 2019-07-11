$(document).ready(function()
{

	var jsdisplay = $('#js-display');
	var url = "/assets/media/data/plugin-reference.json";

	$.getJSON(url, function(data)
	{
		$.each(data, function(index, value)
		{
			$('.js-plugins').append('<option value="' + value.plugin + '" data-description="' + value.description + '" data-url="' + value.url + '" data-license="' + value.license + '">' + value.plugin + '</option>');
		});
	});

	// SHOW SELECTED VALUE.

	$('.js-plugins').change(function()
	{
		var plugin = this.options[this.selectedIndex].text;
		var url = $('select.js-plugins').find(':selected').data('url');
		var license = $('select.js-plugins').find(':selected').data('license');
		var description = $('select.js-plugins').find(':selected').data('description');

		jsdisplay.removeClass().addClass('d-block')

		$('.js-plugin-name').text(plugin);
		$('.js-plugin-url').text(url);
		$('.js-plugin-url').attr('href', url);
		$('.js-plugin-license').text(license);
		$('.js-plugin-description').text(description);

	});
});