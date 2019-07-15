$(document).ready(function()
{

	/*
	NOTES:

		Column id
		---------------------------------------------------
		Please always keep in mind that DataTable framework allows two different kinds of "rows": Arrays and Objects. In first case columns are indexed through integers; in second case columns are indexed by their attribute name. Usually JSON's use the Object approach, but we cannot be sure.


		Row key
		---------------------------------------------------
		There is no default key in the table. Inside your callback functions, probably you will need a row key to build URL's, in that case you can get them from the rowdata parameter.


	COLUMN DEFINITIONS:

		title = "string" - title name on table header th and on form labels
		---------------------------------------------------
		id = "string" - id assigned to imput element when editing/adding in modal
		---------------------------------------------------
		data = "string"  - data name from the dataset
		---------------------------------------------------
		type = "text" | "select" | "hidden" | "readonly"  - Type of HTML input to be shown.
		---------------------------------------------------
		hoverMsg = "some msg" - The message will appear as a tooltip over the input field.
		---------------------------------------------------
		pattern = r.e.  - If type is "input", the typed text will be matched against given regular expression, before submit.
		---------------------------------------------------
		msg = "some string" - An error message that is displayed in case pattern is not matched. Set HTML "data-errorMsg" attribute.
		---------------------------------------------------
		maxLength = integer - If type is "input", set HTML "maxlength" attribute.
		---------------------------------------------------
		options = ["a", "b", "c"] - If type is "select", the options that shall be presented.
		---------------------------------------------------
		select2 = {} - If type is "select", enable a select2 component. Select2 jQuery plugin must be linked. More select2 configuration options may be passed within the array.
		---------------------------------------------------
		datepicker = {} - If type is "text", enable a datepicker component. jQuery-UI plugin must be linked. More datepicker configuration options may be passed within the array.
		---------------------------------------------------
		multiple = true | false - Set HTML "multiple" attribute (for use with select2).
		---------------------------------------------------
		unique = true | false - Ensure that no two rows have the same value. The check is performed client side, not server side. Set HTML "data-unique" attribute. (Probably there's some issue with this).
		---------------------------------------------------
		uniqueMsg = "some string" - An error message that is displayed when the unique constraint is not respected. Set HTML "data-uniqueMsg" attribute.
		---------------------------------------------------
		special = "any string" - Set HTML "data-special" attribute (don't know what's that needed for).
		---------------------------------------------------
		defaultValue = "any string" - Adds a default value when adding a row
		---------------------------------------------------
	*/


	// Event Lot
	var events = $("#app-eventlog");

	// Column Definitions
	var columnSet = [
		{
			title: "RowId",
			id: "DT_RowId",
			data: "DT_RowId",
			placeholderMsg: "Server Generated ID",
			"visible": false,
			"searchable": false,
			type: "readonly"
		},
		{
			title: "Status",
			id: "status",
			data: "status",
			type: "select",
			"options": [
				"active",
				"inactive",
				"disabled",
				"partial"
			]
		},
		{
			title: "IP Address",
			id: "ipAddress",
			data: "ipAddress",
			type: "text",
			pattern: "((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}",
			placeholderMsg: "e.g 82.84.86.88",
			errorMsg: "*Invalid address - Enter valid ip.",
			hoverMsg: "(Optional) - Ex: 82.84.86.88",
			unique: true,
			uniqueMsg: "Already exists. IP must be unique!",
		},
		{
			title: "Port Number",
			id: "port",
			data: "port",
			type: "text",
			pattern: "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$",
			placeholderMsg: "e.g 6112",
			errorMsg: "*Invalid port - Enter valid port or range.",
			hoverMsg: "Ex: 6112 (single)   or   6111:6333 (range)",
			unique: false
		},
		{
			title: "Activation Date",
			id: "adate",
			data: "adate",
			type: "date",
			pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
			placeholderMsg: "yyyy-mm-dd",
			errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
		},
		{
			title: "User Email",
			id: "user",
			data: "user",
			type: "text",
			pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
			placeholderMsg: "user@domain.com",
			errorMsg: "*Invalid email - Enter valid email.",
			unique: true,
			uniqueMsg: "Email already in use"
		},
		{
			title: "Package",
			id: "package",
			data: "package",
			type: "select",
			"options": [
				"free",
				"silver",
				"gold",
				"platinum",
				"payg"
			]
		},
		{
			title: "Acc. Balance",
			id: "balance",
			data: "balance",
			type: "number",
			placeholderMsg: "Amount due",
			defaultValue: "0"
		}]

	/* start data table */
	var myTable = $('#dt-basic-example').dataTable(
		{
			/* check datatable buttons page for more info on how this DOM structure works */
			dom: "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			ajax: "/assets/media/data/server-demo.json",
			columns: columnSet,
			/* selecting multiple rows will not work */
			select: 'single',
			/* altEditor at work */
			altEditor: true,
			responsive: true,
			/* buttons uses classes from bootstrap, see buttons page for more details */
			buttons: [
				{
					extend: 'selected',
					text: '<i class="fal fa-times mr-1"></i> Delete',
					name: 'delete',
					className: 'btn-primary btn-sm mr-1'
				},
				{
					extend: 'selected',
					text: '<i class="fal fa-edit mr-1"></i> Edit',
					name: 'edit',
					className: 'btn-primary btn-sm mr-1'
				},
				{
					text: '<i class="fal fa-plus mr-1"></i> Add',
					name: 'add',
					className: 'btn-success btn-sm mr-1'
				},
				{
					text: '<i class="fal fa-sync mr-1"></i> Synchronize',
					name: 'refresh',
					className: 'btn-primary btn-sm'
				}],
			columnDefs: [
				{
					targets: 1,
					render: function(data, type, full, meta)
					{
						var badge = {
							"active":
								{
									'title': 'Active',
									'class': 'badge-success'
								},
							"inactive":
								{
									'title': 'Inactive',
									'class': 'badge-warning'
								},
							"disabled":
								{
									'title': 'Disabled',
									'class': 'badge-danger'
								},
							"partial":
								{
									'title': 'Partial',
									'class': 'bg-danger-100 text-white'
								}
						};
						if (typeof badge[data] === 'undefined')
						{
							return data;
						}
						return '<span class="badge ' + badge[data].class + ' badge-pill">' + badge[data].title + '</span>';
					},
				},
				{
					targets: 7,
					type: 'currency',
					render: function(data, type, full, meta)
					{
						//var number = Number(data.replace(/[^0-9.-]+/g,""));
						if (data >= 0)
						{
							return '<span class="text-success fw-500">$' + data + '</span>';
						}
						else
						{
							return '<span class="text-danger fw-500">$' + data + '</span>';
						}
					},
				},
				{
					targets: 6,
					render: function(data, type, full, meta)
					{
						var package = {
							"free":
								{
									'title': 'Free',
									'class': 'bg-fusion-50',
									'info': 'Free users are restricted to 30 days of use'
								},
							"silver":
								{
									'title': 'Silver',
									'class': 'bg-fusion-50 bg-fusion-gradient'
								},
							"gold":
								{
									'title': 'Gold',
									'class': 'bg-warning-500 bg-warning-gradient'
								},
							"platinum":
								{
									'title': 'Platinum',
									'class': 'bg-trans-gradient'
								},
							"payg":
								{
									'title': 'PAYG',
									'class': 'bg-success-500 bg-success-gradient'
								}
						};
						if (typeof package[data] === 'undefined')
						{
							return data;
						}
						return '<div class="has-popover d-flex align-items-center"><span class="d-inline-block rounded-circle mr-2 ' + package[data].class + '" style="width:15px; height:15px;"></span><span>' + package[data].title + '</span></div>';
					},
				}, ],

			/* default callback for insertion: mock webservice, always success */
			onAddRow: function(dt, rowdata, success, error)
			{
				console.log("Missing AJAX configuration for INSERT");
				success(rowdata);

				// demo only below:
				events.prepend('<p class="text-success fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
			},
			onEditRow: function(dt, rowdata, success, error)
			{
				console.log("Missing AJAX configuration for UPDATE");
				success(rowdata);

				// demo only below:
				events.prepend('<p class="text-info fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
			},
			onDeleteRow: function(dt, rowdata, success, error)
			{
				console.log("Missing AJAX configuration for DELETE");
				success(rowdata);

				// demo only below:
				events.prepend('<p class="text-danger fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
			},
		});

});