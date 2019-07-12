var ng_eventlog = function()
{

	if ($('#app-eventlog').length)
	{

		var dt = new Date(),
			time = "<div class='p-1'><span class='badge badge-primary fw-500 rounded-0'>" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + " </span> <i>body class changed to: </i>";
		$('#app-eventlog').prepend(time + "<strong> [ " + initApp.getSettings().split(' ') + " ] </strong>" + "</div/>");

	}

};

var ng_eventlog_clear = function()
{
	$('#app-eventlog').empty();
}

var ng_pushSettings = function()
{
	if ($('#pushSettings_input').val())
	{
		initApp.pushSettings($('#pushSettings_input').val());
		$('#pushSettings_input').val('');
		ng_eventlog();
	}
}

var ng_getSettings = function()
{
	var getSettings_array = initApp.getSettings();
	if (getSettings_array)
	{
		$('#getSettings_input').val(getSettings_array)
	}
	else
	{
		$('#getSettings_input').val('<body> class is empty or nothing to return')
	}
}

$('[data-action="toggle"]').on('click', function()
{
	ng_eventlog();
});

$('#pushSettings_btn').on('click', function()
{
	ng_pushSettings();
});

$('#getSettings_btn').on('click', function()
{
	ng_getSettings();
});

$('#ng_eventlog_clear').on('click', function()
{
	ng_eventlog_clear();
});