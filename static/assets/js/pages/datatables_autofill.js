$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			responsive: true,
			autoFill:
				{
					focus: 'hover'
				}
		});
});