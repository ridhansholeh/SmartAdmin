$('input:checkbox').change(function()
{
	if ($(this).is(":checked"))
	{
		$('#table-example').addClass($(this).attr("data-class"));
	}
	else
	{
		$('#table-example').removeClass($(this).attr("data-class"));
	}
});