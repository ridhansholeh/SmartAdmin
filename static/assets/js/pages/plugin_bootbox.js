$(document).ready(function()
{
	"use strict";

	//A basic message
	$("#js-bootbox-example-1").on("click", function()
	{
		bootbox.alert("This is the default alert!");
	});

	$("#js-bootbox-example-2").on("click", function()
	{
		bootbox.alert("This is an alert with a callback!", function()
		{
			console.log('This was logged in the callback!');
		});
	});

	$("#js-bootbox-example-3").on("click", function()
	{
		bootbox.alert(
			{
				message: "This is an alert with a callback!",
				callback: function()
				{
					console.log('This was logged in the callback!');
				}
			})
	});


	$("#js-bootbox-example-4").on("click", function()
	{
		bootbox.alert(
			{
				message: "This is the small alert!",
				size: 'small'
			});
	});

	$("#js-bootbox-example-5").on("click", function()
	{
		bootbox.alert(
			{
				message: "This is the large alert!",
				size: 'large'
			})
	});

	$("#js-bootbox-example-6").on("click", function()
	{
		bootbox.alert(
			{
				message: "This alert can be dismissed by clicking on the background!",
				backdrop: true
			});
	});

	$("#js-bootbox-example-7").on("click", function()
	{
		bootbox.confirm("This is the default confirm!", function(result)
		{
			console.log('This was logged in the callback: ' + result);
		});
	});

	$("#js-bootbox-example-8").on("click", function()
	{
		bootbox.confirm(
			{
				message: "This is a confirm with custom button text and color! Do you like it?",
				buttons:
					{
						confirm:
							{
								label: 'Yes',
								className: 'btn-success'
							},
						cancel:
							{
								label: 'No',
								className: 'btn-danger'
							}
					},
				callback: function(result)
				{
					console.log('This was logged in the callback: ' + result);
				}
			});
	});

	$("#js-bootbox-example-9").on("click", function()
	{
		bootbox.confirm(
			{
				title: "Destroy planet?",
				message: "Do you want to activate the Deathstar now? This cannot be undone.",
				buttons:
					{
						cancel:
							{
								label: '<i class="fa fa-times"></i> Cancel'
							},
						confirm:
							{
								label: '<i class="fa fa-check"></i> Confirm'
							}
					},
				callback: function(result)
				{
					console.log('This was logged in the callback: ' + result);
				}
			});
	});

	$("#js-bootbox-example-10").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a set of checkbox inputs!",
				value: ['1', '3'],
				inputType: 'checkbox',
				inputOptions: [
					{
						text: 'Choice One',
						value: '1',
					},
					{
						text: 'Choice Two',
						value: '2',
					},
					{
						text: 'Choice Three',
						value: '3',
					}],
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-11").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a set of radio inputs!",
				message: '<p>Please select an option below:</p>',
				inputType: 'radio',
				inputOptions: [
					{
						text: 'Choice One',
						value: '1',
					},
					{
						text: 'Choice Two',
						value: '2',
					},
					{
						text: 'Choice Three',
						value: '3',
					}],
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-12").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a date input!",
				inputType: 'date',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-13").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with an email input!",
				inputType: 'email',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-14").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a number input!",
				inputType: 'number',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-15").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a password input!",
				inputType: 'password',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-16").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with select!",
				inputType: 'select',
				inputOptions: [
					{
						text: 'Choose one...',
						value: '',
					},
					{
						text: 'Choice One',
						value: '1',
					},
					{
						text: 'Choice Two',
						value: '2',
					},
					{
						text: 'Choice Three',
						value: '3',
					}],
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-17").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a multi-select!",
				inputType: 'select',
				multiple: true,
				value: ['1', '3'],
				inputOptions: [
					{
						text: 'Choose one...',
						value: '',
					},
					{
						text: 'Choice One',
						value: '1',
					},
					{
						text: 'Choice Two',
						value: '2',
					},
					{
						text: 'Choice Three',
						value: '3',
					}],
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-18").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a textarea!",
				inputType: 'textarea',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-19").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a time input!",
				inputType: 'time',
				callback: function(result)
				{
					console.log(result);
				}
			});
	});

	$("#js-bootbox-example-20").on("click", function()
	{
		bootbox.prompt(
			{
				title: "This is a prompt with a range input!",
				inputType: 'range',
				min: 0,
				max: 100,
				step: 5,
				value: 35,
				callback: function(result)
				{
					console.log('This was logged in the callback: ' + result);
				}
			});
	});

	$("#js-bootbox-example-21").on("click", function()
	{
		var dialog = bootbox.dialog(
			{
				message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Please wait while we do something...</p>',
				centerVertical: true,
				closeButton: false
			});

		// do something in the background


		dialog.init(function()
		{
			setTimeout(function()
			{
				dialog.modal('hide');
			}, 2000);
		});
	});

	$("#js-bootbox-example-22").on("click", function()
	{
		var dialog = bootbox.dialog(
			{
				title: 'A custom dialog with init',
				message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
			});

		dialog.init(function()
		{
			setTimeout(function()
			{
				dialog.find('.bootbox-body').html('I was loaded after the dialog was shown!');
			}, 3000);
		});
	});

	$("#js-bootbox-example-23").on("click", function()
	{
		var dialog = bootbox.dialog(
			{
				title: 'A custom dialog with buttons and callbacks',
				message: "<p>This dialog has buttons. Each button has it's own callback function.</p>",
				size: 'large',
				buttons:
					{
						cancel:
							{
								label: "I'm a cancel button!",
								className: 'btn-danger',
								callback: function()
								{
									console.log('Custom cancel clicked');
								}
							},
						noclose:
							{
								label: "I don't close the modal!",
								className: 'btn-warning',
								callback: function()
								{
									console.log('Custom button clicked');
									return false;
								}
							},
						ok:
							{
								label: "I'm an OK button!",
								className: 'btn-info',
								callback: function()
								{
									console.log('Custom OK clicked');
								}
							}
					}
			});
	});


	$("#js-bootbox-example-24").on("click", function()
	{

		bootbox.dialog(
			{
				title: "This is a form in a modal.",
				message: '<div class="row">  ' +
					'<div class="col-md-12"> ' +
					'<form class="form-horizontal"> ' +
					'<div class="form-group"> ' +
					'<label class="form-label" for="name">Name</label> ' +
					'<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
					'<span class="help-block">Here goes your name</span> </div> ' +
					'<div class="form-group"> ' +
					'<p class="fw-500">How awesome is this?</p> ' +
					'<div class="form-check radio"> <label class="form-check-label" for="awesomeness-0"> ' +
					'<input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="awesomeness" id="awesomeness-0" value="Really awesome"> ' +
					'Really awesome </label> ' +
					'</div><div class="form-check radio"> <label for="awesomeness-1" class="form-check-label"> ' +
					'<input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="awesomeness" id="awesomeness-1" value="Super awesome"> Super awesome </label> ' +
					'</div> ' +
					'</div>' +
					'</form> </div>  </div>',
				buttons:
					{
						success:
							{
								label: "Save",
								className: "btn-success",
								callback: function()
								{
									var name = $('#name').val();
									var answer = $("input[name='awesomeness']:checked").val()
									console.log("Hello " + name + ". You've chosen " + answer + "")
								}
							}
					}
			});

	});

	$("#js-bootbox-alert-1").on("click", function()
	{

		initApp.playSound('/assets/media/sound', 'bigbox')

		bootbox.confirm(
			{
				title: "<i class='fal fa-times-circle text-danger mr-2'></i> Do you wish to delete this table?",
				message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
				centerVertical: true,
				swapButtonOrder: true,
				buttons:
					{
						confirm:
							{
								label: 'Yes',
								className: 'btn-danger shadow-0'
							},
						cancel:
							{
								label: 'No',
								className: 'btn-default'
							}
					},
				className: "modal-alert",
				closeButton: false,
				callback: function(result)
				{

					console.log("test")
				}
			});
	});

	$("#js-bootbox-alert-2").on("click", function()
	{

		initApp.playSound('/assets/media/sound', 'voice_on')

		bootbox.alert(
			{
				title: "<i class='fal fa-check-circle text-success mr-2'></i> <span class='text-success fw-500'>Success!</span>",
				message: "<span><strong>Great...</strong> all is complete</span>",
				centerVertical: true,
				className: "modal-alert",
				closeButton: false
			});
	});

});