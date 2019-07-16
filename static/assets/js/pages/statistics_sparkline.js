/*
             * draw the little mouse speed animated graph this just attaches a handler to the mousemove event to see
             * (roughly) how far the mouse has moved and then updates the display a couple of times a second via
             * setTimeout()
             */
var drawMouseSpeedDemo = function()
{
	var mrefreshinterval = 500, // update display every 500ms
		lastmousex = -1,
		lastmousey = -1,
		lastmousetime,
		mousetravel = 0,
		mpoints = [],
		mpoints_max = 30;

	$('html').mousemove(function(e)
	{
		var mousex = e.pageX,
			mousey = e.pageY;

		if (lastmousex > -1)
		{
			mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
		}
		lastmousex = mousex;
		lastmousey = mousey;
	});

	var mdraw = function()
	{
		var md = new Date();
		var timenow = md.getTime();
		if (lastmousetime && lastmousetime != timenow)
		{
			var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
			mpoints.push(pps);
			if (mpoints.length > mpoints_max)
				mpoints.splice(0, 1);
			mousetravel = 0;
			$('#mousespeed-line').sparkline(mpoints,
				{
					type: 'line',
					width: 210,
					height: 40,
					lineColor: myapp_get_color.info_500,
					fillColor: myapp_get_color.info_50,
					tooltipSuffix: ' pixels per second'
				});
			$('#mousespeed-bar').sparkline(mpoints,
				{
					type: 'bar',
					height: 40,
					tooltipSuffix: ' pixels per second'
				});
		}
		lastmousetime = timenow;
		setTimeout(mdraw, mrefreshinterval);
	}
	// we could use setInterval instead, but I prefer to do it this way
	setTimeout(mdraw, mrefreshinterval);
};

$(document).ready(function()
{
	//start refresh chart
	drawMouseSpeedDemo();
});