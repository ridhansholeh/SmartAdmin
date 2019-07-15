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
					extend: 'colvis',
					text: 'Column Visibility',
					titleAttr: 'Col visibility',
					className: 'btn-outline-default'
				},
				{
					extend: 'csvHtml5',
					text: 'CSV',
					titleAttr: 'Generate CSV',
					className: 'btn-outline-default'
				},
				{
					extend: 'copyHtml5',
					text: 'Copy',
					titleAttr: 'Copy to clipboard',
					className: 'btn-outline-default'
				},
				{
					extend: 'print',
					text: 'Print',
					titleAttr: 'Print Table',
					className: 'btn-outline-default'
				}

			]
		});
});