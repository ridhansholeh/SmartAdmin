<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Notifications</li>
				<li class="breadcrumb-item active">SweetAlert2</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					<i class='subheader-icon fal fa-exclamation-circle'></i> SweetAlert2 <sup class='badge badge-primary fw-500'>ADDON</sup>
					<small>
						A beautiful, responsive customizable, accessible (wai-aria) replacement for javascript's popup boxes with no dependencies
					</small>
				</h1>
			</div>
			<div class="alert alert-primary">
				<div class="d-flex flex-start w-100">
					<div class="mr-2 hidden-md-down">
						<span class="icon-stack icon-stack-lg">
							<i class="base base-6 icon-stack-3x opacity-100 color-primary-500"></i>
							<i class="base base-10 icon-stack-2x opacity-100 color-primary-300 fa-flip-vertical"></i>
							<i class="ni ni-blog-read icon-stack-1x opacity-100 color-white"></i>
						</span>
					</div>
					<div class="d-flex flex-fill">
						<div class="flex-fill">
							<span class="h5">About</span>
							<p>SweetAlert2 is a JavaScript library that helps us create alerts in our web applications. SweetAlert2 is a replacement for default JavaScript pop up boxes. It needs zero dependencies, is customizable, well structured, accessible (wai-aria) and responsive. It needs promise.js for IE11 support. It is currently not supported in IE10</p>
							<p class="m-0">
								Find in-depth, guidelines, tutorials and more on sweetalert2's <a href="https://sweetalert2.github.io/#usage" target="_blank">Official Documentation</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<div id="panel-1" class="panel">
						<div class="panel-hdr">
							<h2>
								SweetAlert2 <span class="fw-300"><i>Examples</i></span>
							</h2>
							<div class="panel-toolbar">
								<button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
								<button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
								<button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
							</div>
						</div>
						<div class="panel-container show">
							<div class="panel-content">
								<div class="panel-tag">
									SweetAlert2 automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizeable, as you can see below!
								</div>
								<table class="table table-bordered table-hover">
									<tbody>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">1</span> A basic message
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-1">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">2</span>
												A title with a text under
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-2">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">3</span>
												A modal with a title, an error icon, a text, and a footer
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-3">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">4</span>
												A modal window with a long content inside:
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-4">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">5</span>
												Custom HTML description and buttons with ARIA labels
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-5">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">6</span>
												A custom positioned dialog
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-6">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">7</span>
												A confirm dialog, with a function attached to the "Confirm"-button...
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-7">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">8</span>
												... and by passing a parameter, you can execute something else for "Cancel".
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-8">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">9</span>
												A message with a custom image and CSS animation disabled
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-9">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">10</span>
												A message with custom width, padding, background and animated Nyan Cat
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-10">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">11</span>
												A message with auto close timer
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-11">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">12</span>
												Right-to-left support for Arabic, Hebrew, and other RTL languages
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-12">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">13</span>
												AJAX request example
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-13">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">14</span>
												Chaining modals (queue) example
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-14">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">15</span>
												Dynamic queue example
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-15">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">16</span>
												Timer functions example
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-sweetalert2-example-16">Try me!</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</no-ssr>
</template>

<script>
	export default {
		name: "sweetalert2",
		head: {
			titleTemplate: 'SweetAlert2 | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/notifications/sweetalert2/sweetalert2.bundle.css' },
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/theme-demo.css' },
			],
			script: [
				{ src: '/assets/js/notifications/sweetalert2/sweetalert2.bundle.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/notifications_sweetalert2.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>