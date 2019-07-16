$(document).ready(function()
{

	"use strict";

	//A basic message
	$("#js-sweetalert2-example-1").on("click", function()
	{
		Swal.fire("Any fool can use a computer");
	}); //A title with a text under

	$("#js-sweetalert2-example-2").on("click", function()
	{
		Swal.fire("The Internet?", "That thing is still around?", "question");
	}); //A modal with a title, an error icon, a text, and a footer

	$("#js-sweetalert2-example-3").on("click", function()
	{
		Swal.fire(
			{
				type: "error",
				title: "Oops...",
				text: "Something went wrong!",
				footer: "<a href>Why do I have this issue?</a>"
			});
	}); //A modal window with a long content inside:

	$("#js-sweetalert2-example-4").on("click", function()
	{
		Swal.fire(
			{
				imageUrl: "https://placeholder.pics/svg/300x1500",
				imageHeight: 1500,
				imageAlt: "A tall image"
			});
	}); //Custom HTML description and buttons with ARIA labels

	$("#js-sweetalert2-example-5").on("click", function()
	{
		Swal.fire(
			{
				title: "<strong>HTML <u>example</u></strong>",
				type: "info",
				html: "You can use <b>bold text</b>, " +
					'<a href="//github.com">links</a> ' +
					"and other HTML tags",
				showCloseButton: true,
				showCancelButton: true,
				focusConfirm: false,
				confirmButtonText: '<i class="fal fa-thumbs-up"></i> Great!',
				confirmButtonAriaLabel: "Thumbs up, great!",
				cancelButtonText: '<i class="fal fa-thumbs-down"></i>',
				cancelButtonAriaLabel: "Thumbs down"
			});
	}); //A custom positioned dialog

	$("#js-sweetalert2-example-6").on("click", function()
	{
		Swal.fire(
			{
				position: "top-end",
				type: "success",
				title: "Your work has been saved",
				showConfirmButton: false,
				timer: 1500
			});
	}); //A confirm dialog, with a function attached to the "Confirm"-button...

	$("#js-sweetalert2-example-7").on("click", function()
	{
		Swal.fire(
			{
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!"
			}).then(function(result)
		{
			if (result.value)
			{
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});
	}); // ... and by passing a parameter, you can execute something else for "Cancel".

	$("#js-sweetalert2-example-8").on("click", function()
	{
		var swalWithBootstrapButtons = Swal.mixin(
			{
				customClass:
					{
						confirmButton: "btn btn-primary",
						cancelButton: "btn btn-danger mr-2"
					},
				buttonsStyling: false
			});
		swalWithBootstrapButtons
			.fire(
				{
					title: "Are you sure?",
					text: "You won't be able to revert this!",
					type: "warning",
					showCancelButton: true,
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "No, cancel!",
					reverseButtons: true
				})
			.then(function(result)
			{
				if (result.value)
				{
					swalWithBootstrapButtons.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);
				}
				else if (
					// Read more about handling dismissals
					result.dismiss === Swal.DismissReason.cancel
				)
				{
					swalWithBootstrapButtons.fire(
						"Cancelled",
						"Your imaginary file is safe :)",
						"error"
					);
				}
			});
	}); // A message with a custom image and CSS animation disabled

	$("#js-sweetalert2-example-9").on("click", function()
	{
		Swal.fire(
			{
				title: "Sweet!",
				text: "Modal with a custom image.",
				imageUrl: "https://unsplash.it/400/200",
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Custom image",
				animation: false
			});
	}); //A message with custom width, padding, background and animated Nyan Cat

	$("#js-sweetalert2-example-10").on("click", function()
	{
		Swal.fire(
			{
				title: "Custom width, padding, background.",
				width: 600,
				padding: "3em",
				background: "#fff url(/assets/images/trees.png)",
				backdrop: '\n\t\t\t    rgba(0,0,123,0.4)\n\t\t\t    url("/assets/images/nyan-cat.gif")\n\t\t\t    center left\n\t\t\t    no-repeat\n\t\t\t  '
			});
	}); // A message with auto close timer

	$("#js-sweetalert2-example-11").on("click", function()
	{
		var timerInterval;
		Swal.fire(
			{
				title: "Auto close alert!",
				html: "I will close in <strong></strong> seconds.",
				timer: 2000,
				onBeforeOpen: function onBeforeOpen()
				{
					Swal.showLoading();
					timerInterval = setInterval(function()
					{
						Swal.getContent().querySelector(
							"strong"
						).textContent = Swal.getTimerLeft();
					}, 100);
				},
				onClose: function onClose()
				{
					clearInterval(timerInterval);
				}
			}).then(function(result)
		{
			if (
				// Read more about handling dismissals
				result.dismiss === Swal.DismissReason.timer
			)
			{
				console.log("I was closed by the timer");
			}
		});
	}); //Right-to-left support for Arabic, Hebrew, and other RTL languages

	$("#js-sweetalert2-example-12").on("click", function()
	{
		Swal.fire(
			{
				title: "هل تريد الاستمرار؟",
				type: "question",
				customClass:
					{
						icon: "swal2-arabic-question-mark"
					},
				confirmButtonText: "نعم",
				cancelButtonText: "لا",
				showCancelButton: true,
				showCloseButton: true
			});
	}); //AJAX request example

	$("#js-sweetalert2-example-13").on("click", function()
	{
		Swal.fire(
			{
				title: "Submit your Github username",
				input: "text",
				inputAttributes:
					{
						autocapitalize: "off"
					},
				showCancelButton: true,
				confirmButtonText: "Look up",
				showLoaderOnConfirm: true,
				preConfirm: function preConfirm(login)
				{
					return fetch("https://api.github.com/users/".concat(login))
						.then(function(response)
						{
							if (!response.ok)
							{
								throw new Error(response.statusText);
							}

							return response.json();
						})
						.catch(function(error)
						{
							Swal.showValidationMessage("Request failed: ".concat(error));
						});
				},
				allowOutsideClick: function allowOutsideClick()
				{
					return !Swal.isLoading();
				}
			}).then(function(result)
		{
			if (result.value)
			{
				Swal.fire(
					{
						title: "".concat(result.value.login, "'s avatar"),
						imageUrl: result.value.avatar_url
					});
			}
		});
	}); //Dynamic queue example

	$("#js-sweetalert2-example-14").on("click", function()
	{
		var ipAPI = "https://api.ipify.org?format=json";
		Swal.queue([
			{
				title: "Your public IP",
				confirmButtonText: "Show my public IP",
				text: "Your public IP will be received " + "via AJAX request",
				showLoaderOnConfirm: true,
				preConfirm: function preConfirm()
				{
					return fetch(ipAPI)
						.then(function(response)
						{
							return response.json();
						})
						.then(function(data)
						{
							return Swal.insertQueueStep(data.ip);
						})
						.catch(function()
						{
							Swal.insertQueueStep(
								{
									type: "error",
									title: "Unable to get your public IP"
								});
						});
				}
			}]);
	}); //Timer functions example

	$("#js-sweetalert2-example-15").on("click", function()
	{
		Swal.mixin(
			{
				input: "text",
				confirmButtonText: 'Next <i class="fal fa-chevron-right"></i>',
				showCancelButton: true,
				progressSteps: ["1", "2", "3"]
			})
			.queue([
				{
					title: "Question 1",
					text: "Chaining swal2 modals is easy"
				},
				"Question 2",
				"Question 3"
			])
			.then(function(result)
			{
				if (result.value)
				{
					Swal.fire(
						{
							title: "All done!",
							html: "Your answers: <pre><code>" +
								JSON.stringify(result.value) +
								"</code></pre>",
							confirmButtonText: "Lovely!"
						});
				}
			});
	}); //Chaining modals (queue) example

	$("#js-sweetalert2-example-16").on("click", function()
	{
		var timerInterval;
		Swal.fire(
			{
				title: "Auto close alert!",
				html: "I will close in <strong></strong> seconds.<br/><br/>" +
					'<button id="increase" class="btn btn-warning">' +
					"I need 5 more seconds!" +
					"</button><br/>" +
					'<button id="stop" class="btn btn-danger">' +
					"Please stop the timer!!" +
					"</button><br/>" +
					'<button id="resume" class="btn btn-success" disabled>' +
					"Phew... you can restart now!" +
					"</button><br/>" +
					'<button id="toggle" class="btn btn-primary">' +
					"Toggle" +
					"</button>",
				timer: 10000,
				onBeforeOpen: function onBeforeOpen()
				{
					var content = Swal.getContent();
					var $ = content.querySelector.bind(content);
					var stop = $("#stop");
					var resume = $("#resume");
					var toggle = $("#toggle");
					var increase = $("#increase");
					Swal.showLoading();

					function toggleButtons()
					{
						stop.disabled = !Swal.isTimerRunning();
						resume.disabled = Swal.isTimerRunning();
					}

					stop.addEventListener("click", function()
					{
						Swal.stopTimer();
						toggleButtons();
					});
					resume.addEventListener("click", function()
					{
						Swal.resumeTimer();
						toggleButtons();
					});
					toggle.addEventListener("click", function()
					{
						Swal.toggleTimer();
						toggleButtons();
					});
					increase.addEventListener("click", function()
					{
						Swal.increaseTimer(5000);
					});
					timerInterval = setInterval(function()
					{
						Swal.getContent().querySelector("strong").textContent = (
							Swal.getTimerLeft() / 1000
						).toFixed(0);
					}, 100);
				},
				onClose: function onClose()
				{
					clearInterval(timerInterval);
				}
			});
	});

});