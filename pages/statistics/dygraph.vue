<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Statistics</li>
			<li class="breadcrumb-item active">Dygraph</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-chart-pie'></i> Dygraphs <sup class='badge badge-primary fw-500'>ADDON</sup>
				<small>
					Dygraphs is a fast, flexible open source JavaScript charting library.
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
						<span class="h5">Features:</span>
						<div class="row mb-3">
							<div class="col-xl-6">
								<ul class="m-0 pl-3">
									<li>Handles <strong>huge data sets</strong>: dygraphs plots millions of points without getting bogged down.</li>
									<li><strong>Interactive out of the box</strong>: zoom, pan and mouseover are on by default.</li>
									<li>Strong support for <strong>error bars</strong> / confidence intervals.</li>
								</ul>
							</div>
							<div class="col-xl-6">
								<ul class="m-0 pl-3">
									<li><strong>Highly customizable</strong>: using options and custom callbacks, you can make dygraphs do almost anything.</li>
									<li>dygraphs is works in all recent browsers. You can even <strong>pinch to zoom</strong> on mobile/tablet devices!</li>
									<li>There's an <strong>active community</strong> developing and supporting dygraphs.</li>
								</ul>
							</div>
						</div>
						<p class="m-0">
							Find tutorials, guidelines and more on Dygraph's <a href="http://dygraphs.com/" target="_blank">official documentation</a>
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
							Dygraph <span class="fw-300"><i>Roll</i></span>
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
								The data is loaded from an external file, this example shows scrollable content area with a fixed zoom state
							</div>
							<div id="noroll" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-2" class="panel">
					<div class="panel-hdr">
						<h2>
							Dygraph <span class="fw-300"><i>Timestamp</i></span>
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
								The example below, uses the same external data as the first graph, however you are able to zoom in by inserting the desired zoom level in the input field located on the bottom left of the graph
							</div>
							<div id="roll14" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "dygraph",
		head: {
			titleTemplate: 'Dygraphs | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/statistics/dygraph/dygraph.css' },
			],
			script: [
				{ src: '/assets/js/statistics/demo-data/demo-data-dygraph.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/statistics/dygraph/dygraph.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/statistics_dygraph.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>