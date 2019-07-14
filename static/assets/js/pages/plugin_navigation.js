$("#destroy").hide();

$("#build").on('click', function()
{

	if ($("#nav_syndicate").is(':checked') ? true : false)
	{
		$("#nav-1, #nav-2").navigation(
			{
				accordion: $("#nav_accordion").is(':checked') ? true : false,
				animate: $('#nav_animation').val(),
				speed: parseInt($('#nav_speed').val(), 10),
				closedSign: $('#nav_closedSign').val(),
				openedSign: $('#nav_openedSign').val()
			});
	}
	else
	{
		$("#nav-1").navigation(
			{
				accordion: $("#nav-1").data('nav-accordion'),
				animate: $('#nav_animation').val(),
				speed: parseInt($('#nav_speed').val(), 10),
				closedSign: $('#nav_closedSign').val(),
				openedSign: $('#nav_openedSign').val()
			});
		$("#nav-2").navigation(
			{
				accordion: $("#nav-2").data('nav-accordion'),
				animate: $('#nav_animation').val(),
				speed: parseInt($('#nav_speed').val(), 10),
				closedSign: $('#nav_closedSign').val(),
				openedSign: $('#nav_openedSign').val()
			});
	}

	if ($("#nav_compact").is(':checked') ? true : false)
	{
		$("#nav-1").addClass("nav-menu-compact");
		$("#nav-2").addClass("nav-menu-compact");
	}
	else
	{
		$("#nav-1").removeClass("nav-menu-compact");
		$("#nav-2").removeClass("nav-menu-compact");
	}

	$("#build").hide();
	$("#destroy").show();
	$("#nav_accordion, #nav_animation, #nav_speed, #nav_closedSign, #nav_openedSign, #nav_syndicate, #nav_compact").attr('disabled', true);

});
$("#destroy").on('click', function()
{
	$("#nav-1").navigationDestroy();
	$("#nav-2").navigationDestroy();
	$("#destroy").hide();
	$("#build").show();
	$("#nav_accordion, #nav_animation, #nav_speed, #nav_closedSign, #nav_openedSign, #nav_syndicate, #nav_compact").removeAttr('disabled');
});