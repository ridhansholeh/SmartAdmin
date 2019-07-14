$(document).ready(function()
{

	$('#slimtest3').slimScroll(
		{
			color: myapp_get_color.primary_700,
			size: '20px',
			height: '300px',
			alwaysVisible: true
		});

	$('#slimtest2').slimScroll(
		{
			position: 'left',
			height: '300px',
			railVisible: true,
			alwaysVisible: true
		});

});