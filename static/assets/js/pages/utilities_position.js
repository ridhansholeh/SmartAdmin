var swapPositions = function()
{
	console.log("test2")
	$('#js-position-change').toggleClass('position-relative');
	$('#js-position-text').toggleText('.position-static', '.position-relative');
	$('#js-position-btn').toggleText('Change to RELATIVE', 'Change to STATIC');
};