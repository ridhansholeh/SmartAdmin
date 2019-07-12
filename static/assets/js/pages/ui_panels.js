var userSelectColor = $('.js-update-hdr-color > [data-class]');
$('.js-update-hdr-color > [data-class]').on('click', function()
{
	var hdrColor = $(this).attr('data-class')
	$(this).parents('.panel').find('.panel-hdr').removeClass().addClass("panel-hdr " + hdrColor);
})