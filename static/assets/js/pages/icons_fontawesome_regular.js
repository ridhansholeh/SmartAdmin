/*webfont prefix*/
var prefix = "far"; //fal fas far fab ni etc
var prefix_extend = "fa" //fa-icon

/*JSON file that will be loaded*/
var filename = "/assets/media/data/fa-icon-list"; //available JSON files [ng-icon-base, ng-icon-list, ng-text-colors, fa-brand-list, fa-icon-list]

/*execute code*/
$.getJSON(filename + ".json").then(function(data)
{

	/*...worked*/
	var formatedDOMElms = [];

	/*compile DOM elements*/
	jQuery.each(data, function(index, item)
	{
		formatedDOMElms.push('<div class="col-4 col-sm-3 col-md-3 col-lg-2 col-xl-1 d-flex justify-content-center align-items-center mb-g">\
								<a href="#" class="rounded bg-white p-0 m-0 d-flex flex-column w-100 h-100 js-showcase-icon shadow-hover-2" data-toggle="modal" data-target="#iconModal" data-filter-tags=' + item.substring(1) + '>\
									<div class="rounded-top color-fusion-300 w-100 bg-primary-300">\
										<div class="rounded-top d-flex align-items-center justify-content-center w-100 pt-3 pb-3 pr-2 pl-2 fa-3x hover-bg">\
											<i class="' + prefix + ' ' + prefix_extend + item + '"></i>\
										</div>\
									</div>\
									<div class="rounded-bottom p-1 w-100 d-flex justify-content-center align-items-center text-center">\
										<span class="d-block text-truncate text-muted">' + item.substring(1) + '</span>\
									</div>\
								</a>\
							</div>');
	});

	/* append to HTML dom*/
	$('#icon-list').append(formatedDOMElms.join(" "));

	/*initialize filter*/
	initApp.listFilter($('#icon-list'), $('#filter-icon'));

	/*client event for each icon*/
	$('.js-showcase-icon').click(function()
	{
		var iconClass = $(this).find('i').attr('class');
		$('#iconModal .modal-body i').removeClass().addClass(iconClass);
		$('#iconModal .modal-footer .js-icon-class').empty().text(iconClass);
		$('#js-icon-class').val('<i class="' + iconClass + '"></i>')
		$('#iconModalLabel strong').empty().text(iconClass);
	});

	/*copy icon button*/
	$('.js-icon-copy').click(function()
	{
		$('#js-icon-class').select();
		document.execCommand('copy');
	});

	/*add number of icons*/
	$('#filter-icon').attr('placeholder', "Search " + data.length + " icons for")

}).fail(function()
{
	console.log("failed")
});