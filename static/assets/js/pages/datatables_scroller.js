$(document).ready(function()
{
	$('#dt-basic-example').dataTable(
		{
			responsive: true,
			stateSave: true, //remembers your table settings (filter, scroll point, sort, etc)
			processing: true,
			pageLength: false,
			sAjaxSource: '/assets/media/data/2500.json',
			deferRender: true,
			scrollY: 300,
			scrollCollapse: true,
			scroller: true,
			/* render dynamic buttons */
			columnDefs: [
				{
					targets: -1,
					title: '',
					orderable: false,
					render: function(data, type, full, meta)
					{

						/*
						-- ES6
						-- convert using https://babeljs.io online transpiler
						return `
						<a href='javascript:void(0);' class='btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1' title='Delete Record'>
							<i class="fal fa-times"></i>
						</a>
						<div class='dropdown d-inline-block'>
							<a href='#'' class='btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0' data-toggle='dropdown' aria-expanded='true' title='More options'>
								<i class="fal fa-ellipsis-v"></i>
							</a>
							<div class='dropdown-menu'>
								<a class='dropdown-item' href='javascript:void(0);'>Change Status</a>
								<a class='dropdown-item' href='javascript:void(0);'>Generate Report</a>
							</div>
						</div>`;

						ES5 example below:

						*/
						return "\n\t\t\t\t\t\t<a href='javascript:void(0);' class='btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1' title='Delete Record'>\n\t\t\t\t\t\t\t<i class=\"fal fa-times\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class='dropdown d-inline-block'>\n\t\t\t\t\t\t\t<a href='#'' class='btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0' data-toggle='dropdown' aria-expanded='true' title='More options'>\n\t\t\t\t\t\t\t\t<i class=\"fal fa-ellipsis-v\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class='dropdown-menu'>\n\t\t\t\t\t\t\t\t<a class='dropdown-item' href='javascript:void(0);'>Change Status</a>\n\t\t\t\t\t\t\t\t<a class='dropdown-item' href='javascript:void(0);'>Generate Report</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
					},
				},
				{
					targets: 7,
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
									'title': 'Pending',
									'class': 'badge-warning'
								},
							3:
								{
									'title': 'Canceled',
									'class': 'badge-secondary'
								},
							4:
								{
									'title': 'Attempt',
									'class': 'bg-danger-100 text-white'
								},
							5:
								{
									'title': 'Failed',
									'class': 'badge-danger text-white'
								},
							6:
								{
									'title': 'Delivered',
									'class': 'badge-success'
								},
							7:
								{
									'title': 'Attention!',
									'class': 'badge-primary'
								},
							8:
								{
									'title': 'In Progress',
									'class': 'bg-success-300'
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