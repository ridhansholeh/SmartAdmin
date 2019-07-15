$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			responsive: true,
			pageLength: 15,
			order: [
				[2, 'desc']
			],
			rowGroup:
				{
					dataSrc: 2
				}
		});
});