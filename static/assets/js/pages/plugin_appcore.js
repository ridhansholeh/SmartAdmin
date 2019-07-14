/* state debug state for debug msg */
myapp_config.debugState = true;

/* variables */
var lastMsg = "",
	repeatCount = 0,
	/* get new time date on page load */
	getTime = function()
	{
		var dt = new Date(),
			time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		return time;
	};

/* define type */
if (typeof console != "undefined")
	if (typeof console.log != 'undefined')
	{
		console.nglog = console.log;
	}
	else
	{
		console.nglog = function() {};
	}

/* push console messages to #div */
console.log = function(message)
{
	console.nglog(message);
	if (lastMsg != message)
	{
		$('#app-eventlog').append('<div class="highlight p-1"><span class="d-flex align-items-center">' + '<span class="badge badge-primary mr-2 p-1 width-6">' + getTime() + '</span>' + message + '</span></div>');
		lastMsg = message;
		repeatCount = 0;
		$('#app-eventlog').animate(
			{
				scrollTop: $('#app-eventlog').prop("scrollHeight")
			}, 200);
	}
	else
	{
		lastMsg = message;
		repeatCount = repeatCount + 1;
		$('#app-eventlog >:last-child').remove();
		$('#app-eventlog').append('<div class="highlight p-1"><span class="d-flex align-items-center">' + '<span class="badge badge-primary mr-2 p-1 width-6">' + getTime() + '</span>' + '<span class="badge badge-success mr-1">' + repeatCount + '</span>' + message + '</span></div>');
		$('#app-eventlog').animate(
			{
				scrollTop: $('#app-eventlog').prop("scrollHeight")
			}, 200);
	}
};

/* compile messages to one log */
console.error = console.debug = console.info = console.log


$('#eventlog-switch').click(function()
{
	if ($('input[type=checkbox]').prop('checked'))
	{
		console.log("debugState ON")
		myapp_config.debugState = true;
	}
	else
	{
		console.log("debugState OFF");
		myapp_config.debugState = false;
	}
});

var clearlogText = function()
{
	$('#app-eventlog').empty();
};