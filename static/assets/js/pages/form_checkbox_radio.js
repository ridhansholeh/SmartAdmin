$('#defaultIndeterminate').prop('indeterminate', true)

var toggleCheckbox = function()
{
	$('#js-checkbox-toggle').toggleText('Change to CIRCLE', 'Change back to default');
	$('.frame-wrap .custom-checkbox').toggleClass('custom-checkbox-circle');
}

var toggleRadio = function()
{
	$('#js-radio-toggle').toggleText('Change to ROUNDED', 'Change back to default');
	$('.frame-wrap .custom-radio').toggleClass('custom-radio-rounded');
}