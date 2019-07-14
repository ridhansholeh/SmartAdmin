<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Core Plugins</li>
				<li class="breadcrumb-item active">BootBox</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					<i class='subheader-icon fal fa-shield-alt'></i> BootBox <sup class='badge badge-success fw-500'>EXTENSION</sup>
					<small>
						waves description
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
							<p>Bootbox.js is a small JavaScript library which allows you to create programmatic dialog boxes using Bootstrap modals, without having to worry about creating, managing, or removing any of the required DOM elements or JavaScript event handlers.</p>
							<p class="m-0">
								Find in-depth, guidelines, tutorials and more on BootBox's <a href="http://bootboxjs.com/documentation.html" target="_blank">Official Documentation</a>
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
								BootBox <span class="fw-300"><i>Examples</i></span>
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
									The examples below attempt to demonstrate the myriad ways in which you can use Bootbox.
								</div>
								<table class="table table-bordered table-hover">
									<tbody>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">1</span> Basic usage
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-1">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">2</span>
												Basic usage, with callback
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-2">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">3</span>
												Basic usage, using options object
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-3">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">4</span>
												Small dialog
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-4">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">5</span>
												Large dialog
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-5">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">6</span>
												Basic confirmation
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-6">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">7</span>
												Confirmation with alternate button text and color
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-7">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">8</span>
												Confirmation with icon and button text
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-8">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">9</span>
												Prompt basic
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-9">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">10</span>
												Prompt with checkbox
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-10">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">11</span>
												Prompt with radio buttons and a <code>message</code> value
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-11">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">12</span>
												Prompt with date
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-12">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">13</span>
												Prompt with email
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-13">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">14</span>
												Prompt with number
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-14">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">15</span>
												Prompt with password
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-15">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">16</span>
												Prompt with select
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-16">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">17</span>
												Prompt with select & multiple
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-17">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">18</span>
												Prompt with textarea
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-18">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">19</span>
												Prompt with time
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-19">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">20</span>
												Prompt with range
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-20">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">21</span>
												Custom dialog as "loading" overlay
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-21">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">22</span>
												Custom dialog, using init
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-22">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">23</span>
												Custom dialog, with buttons and callbacks
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-23">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">24</span>
												Custom dialot and message with input controls
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-example-24">Try me!</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div id="panel-2" class="panel">
						<div class="panel-hdr">
							<h2>
								BootBox <span class="fw-300"><i>Custom Class</i></span>
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
									Below we use the custom class method <code>className</code> to add the class <code>modal-alert</code> to change the dialog appearance and also add sound by using <code>initApp.playSound</code> function
								</div>
								<table class="table table-bordered table-hover">
									<tbody>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">1</span> Basic confirmation
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-alert-1">Try me!</a>
											</td>
										</tr>
										<tr>
											<td style="width: 40%; vertical-align: middle;">
												<span class="d-inline-flex border border-primary text-primary width-1 height-1 rounded-circle fw-500 mr-2 align-items-center justify-content-center">2</span>
												Basic Alert
											</td>
											<td>
												<a href="javascript:void(0);" class="btn btn-outline-primary" id="js-bootbox-alert-2">Try me!</a>
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
		name: "bootbox",
		head: {
			titleTemplate: 'Bootbox | %s',
			script: [
				{ src: '/assets/js/pages/plugin_bootbox.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>