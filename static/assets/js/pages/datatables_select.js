$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			responsive: true,
			dom:
			/*	--- Layout Structure
				--- Options
				l	-	length changing input control
				f	-	filtering input
				t	-	The table!
				i	-	Table information summary
				p	-	pagination control
				r	-	processing display element
				B	-	buttons
				R	-	ColReorder
				S	-	Select

				--- Markup
				< and >				- div element
				<"class" and >		- div with a class
				<"#id" and >		- div with an ID
				<"#id.class" and >	- div with an ID and a class

				--- Further reading
				https://datatables.net/reference/option/dom
				--------------------------------------
			 */
				"<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			buttons: [
				{
					extend: 'selected',
					text: 'Selected',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectedSingle',
					text: 'Single',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectAll',
					text: 'All',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectNone',
					text: 'Deselect',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectRows',
					text: 'Rows',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectColumns',
					text: 'Columns',
					className: 'btn-outline-secondary btn-sm'
				},
				{
					extend: 'selectCells',
					text: 'Cells',
					className: 'btn-outline-secondary btn-sm'
				}

			],
			select: true
		});
});