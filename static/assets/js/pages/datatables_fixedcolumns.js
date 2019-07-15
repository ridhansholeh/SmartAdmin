$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			//responsive: true, // not compatible
			scrollY: 400,
			scrollX: true,
			scrollCollapse: true,
			paging: false,
			//fixedColumns:   true,
			fixedColumns:
				{
					leftColumns: 2
				},
			columnDefs: [
				{
					targets: -1,
					title: 'Admin Controls',
					orderable: false,
					render: function(data, type, full, meta)
					{

						/*
						-- ES6
						-- convert using https://babeljs.io online transpiler
						return `
						<div class='d-flex mt-2'>
							<a href='javascript:void(0);' class='btn btn-sm btn-outline-danger mr-2' title='Delete Record'>
								<i class="fal fa-times"></i> Delete Record
							</a>
							<a href='javascript:void(0);' class='btn btn-sm btn-outline-primary mr-2' title='Edit'>
								<i class="fal fa-edit"></i> Edit
							</a>
							<div class='dropdown d-inline-block'>
								<a href='#'' class='btn btn-sm btn-outline-primary mr-2' data-toggle='dropdown' aria-expanded='true' title='More options'>
									<i class="fal fa-plus"></i>
								</a>
								<div class='dropdown-menu'>
									<a class='dropdown-item' href='javascript:void(0);'>Change Status</a>
									<a class='dropdown-item' href='javascript:void(0);'>Generate Report</a>
								</div>
							</div>
						</div>`;

						ES5 example below:

						*/
						return "\n\t\t\t\t\t\t<div class='d-flex demo'>\n\t\t\t\t\t\t\t<a href='javascript:void(0);' class='btn btn-sm btn-outline-danger btn-icon btn-inline-block mr-1' title='Delete Record'><i class=\"fal fa-times\"></i></a>\n\t\t\t\t\t\t\t<a href='javascript:void(0);' class='btn btn-sm btn-outline-primary btn-icon btn-inline-block mr-1' title='Edit'><i class=\"fal fa-edit\"></i></a>\n\t\t\t\t\t\t\t<div class='dropdown d-inline-block'>\n\t\t\t\t\t\t\t\t<a href='#' class='btn btn-sm btn-outline-primary btn-icon' data-toggle='dropdown' aria-expanded='true' title='More options'><i class=\"fal fa-plus\"></i></a>\n\t\t\t\t\t\t\t\t<div class='dropdown-menu'>\n\t\t\t\t\t\t\t\t\t<a class='dropdown-item' href='javascript:void(0);'>Change Status</a>\n\t\t\t\t\t\t\t\t\t<a class='dropdown-item' href='javascript:void(0);'>Generate Report</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
					},
				},
				{
					targets: 17,
					/*	The `data` parameter refers to the data for the cell (defined by the
						`data` option, which defaults to the column being worked with, in this case `data: 16`.*/
					render: function(data, type, full, meta)
					{
						var badge = {
							1:
								{
									'title': 'Pending',
									'class': 'badge-warning'
								},
							2:
								{
									'title': 'Delivered',
									'class': 'badge-success'
								},
							3:
								{
									'title': 'Canceled',
									'class': 'badge-secondary'
								},
							4:
								{
									'title': 'Attempt #1',
									'class': 'bg-danger-100 text-white'
								},
							5:
								{
									'title': 'Attempt #2',
									'class': 'bg-danger-300 text-white'
								},
							6:
								{
									'title': 'Failed',
									'class': 'badge-danger'
								},
							7:
								{
									'title': 'Attention!',
									'class': 'badge-primary'
								},
							8:
								{
									'title': 'In Progress',
									'class': 'badge-success'
								},
						};
						if (typeof badge[data] === 'undefined')
						{
							return data;
						}
						return '<span class="badge ' + badge[data].class + ' badge-pill">' + badge[data].title + '</span>';
					},
				}],
		});
});