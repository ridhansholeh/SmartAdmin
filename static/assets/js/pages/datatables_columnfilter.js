$(document).ready(function()
{
	// Setup - add a text input to each footer cell
	$('#dt-basic-example thead tr').clone(true).appendTo('#dt-basic-example thead');
	$('#dt-basic-example thead tr:eq(1) th').each(function(i)
	{
		var title = $(this).text();
		$(this).html('<input type="text" class="form-control form-control-sm" placeholder="Search ' + title + '" />');

		$('input', this).on('keyup change', function()
		{
			if (table.column(i).search() !== this.value)
			{
				table
					.column(i)
					.search(this.value)
					.draw();
			}
		});
	});

	var table = $('#dt-basic-example').DataTable(
		{
			//responsive: true,
			orderCellsTop: true,
			fixedHeader: true,
		});

});