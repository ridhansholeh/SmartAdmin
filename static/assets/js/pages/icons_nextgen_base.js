// webfont prefix
var prefix = ""; //fal fas far fab etc
var prefix_extend = ""

// file that will be filtered
var filename = "/assets/media/data/ng-icon-base.json";

$.getJSON(filename).then(function(data)
{

	// ...worked
	var formatedDOMElms = [];

	//
	jQuery.each(data, function(index, item)
	{
		formatedDOMElms.push('<div class="col-4 col-sm-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center mb-g">\
								<a href="#" class="rounded bg-white p-0 m-0 d-flex flex-column w-100 h-100 shadow-hover-2 js-showcase-icon" data-toggle="modal" data-target="#iconModal" data-filter-tags=' + item + '>\
									<div class="rounded-top color-fusion-300 w-100 bg-primary-300">\
										<div class="rounded-top d-flex align-items-center justify-content-center w-100 pt-3 pb-3 pr-2 pl-2 fa-6x hover-bg">\
											<i class="' + item + '"></i>\
										</div>\
									</div>\
									<div class="rounded-bottom p-1 w-100 d-flex justify-content-center align-items-center text-center">\
										<span class="d-block text-truncate text-muted">' + item + '</span>\
									</div>\
								</a>\
							</div>');

	});

	// append to HTML dom
	$('#icon-list').append(formatedDOMElms.reverse().join(" "));

	// initialize filter
	//initApp.listFilter($('#icon-list'), $('#filter-icon'));

	// client event for each icon
	$('.js-showcase-icon').click(function()
	{

		var iconClass = $(this).find('i').attr('class');

		$('#iconModal .modal-body i').removeClass().addClass(iconClass);
		$('#iconModal .modal-body .js-icon-class').empty().text(iconClass);
		$('#js-icon-class').val('<i class="' + iconClass + '"></i>')
		$('#iconModalLabel strong').empty().text(iconClass)

	});

	// copy icon button
	$('.js-icon-copy').click(function()
	{
		$('#js-icon-class').select();
		document.execCommand('copy');
	});

	// add number of icons
	//$('#filter-icon').attr('placeholder', "Search " + data.length + " icons for")


})
	.fail(function()
	{
		// ...didn't work, handle it
		console.log("failed")
	});