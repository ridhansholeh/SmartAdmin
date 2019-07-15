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
			blurable: false,
			keys: true,
			stateSave: true,
			filter: false, //for demo purpose only
			lengthChange: false //for demo purpose only
		});
	table.on('key', function(e, datatable, key, cell, originalEvent)
	{
		events.prepend('<div class="my-1"><span class="mr-2 badge badge-info width-10 text-left">Key press</span> <span class="fw-500 text-primary"> ' + key + ' </span> for cell <i>' + cell.data() + '</i></div>');
	})
		.on('key-focus', function(e, datatable, cell)
		{
			events.prepend('<div class="my-1"><span class="mr-2 badge badge-success width-10 text-left">Cell focus</span> <i>' + cell.data() + '</i></div>');
		})
		.on('key-blur', function(e, datatable, cell)
		{
			events.prepend('<div class="my-1"><span class="mr-2 badge badge-warning width-10 text-left">Cell blur</span> <i>' + cell.data() + '</i></div>');
		})
});