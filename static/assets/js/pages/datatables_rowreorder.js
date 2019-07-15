var events = $('#app-eventlog');
var clearlogText = function()
{
	events.empty();
}

$(document).ready(function()
{
	var table = $('#dt-basic-example').DataTable(
		{
			responsive: true,
			rowReorder:
				{
					selector: 'tr td:not(:first-child)'
				},
			filter: false, //for demo purpose only
			lengthChange: false //for demo purpose only
		});

	/* log events - demo purpose only */
	table.on('row-reorder', function(e, diff, edit)
	{
		var result = '<div class="mt-2 mb-1"><span class="badge badge-primary">Reorder</span> started for row <span class="text-info">' + edit.triggerRow.data()[1] + '</span></div>';
		for (var i = 0, ien = diff.length; i < ien; i++)
		{
			var rowData = table.row(diff[i].node).data();

			result += '<div class="my-1"><span class="text-info">' + rowData[1] + '</span> updated to be in position ' +
				diff[i].newData + ' ( <span class="font-italic">was ' + diff[i].oldData + '</span> )</div>';
		}
		events.prepend(result);
	});

});