function usingSelectorOption()
{
	return $('#use-selector').is(':checked');
}

function updateCodeView()
{
	$('#with-selector-code').toggle(usingSelectorOption());
	$('#without-selector-code').toggle(!usingSelectorOption());
}

$(function()
{
	// Update code view when checkbox is toggled
	updateCodeView();
	$('#use-selector').click(function()
	{
		updateCodeView();
	});

	var startedDemo = false;
	$('#add-button').click(function()
	{
		// One-time initialization
		if (!startedDemo)
		{
			if (usingSelectorOption())
			{
				$('body').tooltip(
					{
						selector: '.has-tooltip'
					});
			}
			else
			{
				$('.has-tooltip').tooltip();
			}

			startedDemo = true;
		}

		// Disable selector checkbox, put a tooltip on it, and show the buttons panel
		$('#use-selector').attr('disabled', 'disabled');
		$('#use-selector-label span').tooltip();
		$('#js_buttons_tooltip_demo').show();

		// Add a new button that triggers (or doesn't) a tooltip, with the appropriate message
		var button = null;
		if (usingSelectorOption())
		{
			button = $('<button class="btn btn-block btn-success has-tooltip" data-title="Dynamic" data-content="This button was added dynamically by JavaScript" data-placement="top">Working dynamically added button</button>');
		}
		else
		{
			button = $('<button class="btn btn-block btn-default has-tooltip" data-title="Dynamic" data-content="This button was added dynamically by JavaScript" data-placement="top">Non-working dynamically added button</button>');
		}

		button.appendTo('#js_buttons_tooltip_demo');
	});
});