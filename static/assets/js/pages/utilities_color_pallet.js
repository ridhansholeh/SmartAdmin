// get hex color value

var color = '';

function hexc(colorval)
{
	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	delete(parts[0]);
	for (var i = 1; i <= 3; ++i)
	{
		parts[i] = parseInt(parts[i]).toString(16);
		if (parts[i].length == 1) parts[i] = '0' + parts[i];
	}
	color = '#' + parts.join('');
}

$('.color-disp-demo [class^="bg-"]').each(function()
{
	var x = $(this).css('backgroundColor');
	hexc(x);
	$(this).find("span").append(color);
	color = null;
});