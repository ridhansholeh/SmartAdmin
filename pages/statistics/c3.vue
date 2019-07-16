<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Statistics</li>
			<li class="breadcrumb-item active">C3 Charts</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-chart-pie'></i> C3 Charts<sup class='badge badge-primary fw-500'>ADDON</sup>
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
						<p>
							C3 makes it easy to generate D3-based charts by wrapping the code required to construct the entire chart. We don't need to write D3 code any more. The plugin adds classes to each element when generating, so you can define a custom style by the class and it's possible to extend the structure directly by D3. Provides a variety of APIs and callbacks to access the state of the chart.
						</p>
						<p class="m-0">
							Find more examples and guidelines on C3's <a href="https://c3js.org/examples.html" target="_blank">official documentation</a> and <a href="https://groups.google.com/forum/#!forum/c3js" target="_blank">community support</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="card m-auto border mb-g">
					<div class="card-body position-relative">
						<h3 class="mb-4">
							Kitchen Sink Interactive Demo
							<small>
								See how easy it is to manipulate and transform graphs using c3 engine!
							</small>
						</h3>
						<div class="position-absolute pos-top pos-right mt-5 mr-5">
							<div class="border-faded border-left-0 border-top-0 border-bottom-0" id="playDemo">
								<button class="btn btn-success" onclick="startDemo();">
									<i class="fal fa-play mr-sm-2"></i><span class="hidden-sm-down">Play Demo</span>
								</button>
							</div>
							<div class="border-faded border-left-0 border-top-0 border-bottom-0" id="pauseDemo" style="display:none;">
								<button class="btn btn-danger" onclick="pauseDemo();">
									<i class="fal fa-pause mr-sm-2"></i> <span class="hidden-sm-down">Pause Demo</span>
								</button>
							</div>
						</div>
						<div class="d-flex position-absolute pos-left pos-right mt-5 align-items-center justify-content-center" style="z-index:1">
							<div id="message" class="bg-fusion-100 rounded"></div>
						</div>
						<div id='chart' class="mt-2"></div>
					</div>
					<div class="card-footer p-0">
						<div class="progress rounded-0" style="height: 3px;">
							<div id="demo-progress" class="progress-bar bg-primary-500" role="progressbar" style="width:100%; opacity: 0.5"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-1" class="panel">
							<div class="panel-hdr">
								<h2>
									Simple <span class="fw-300"><i>Line</i></span>
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
										Line chart with sequential data
									</div>
									<div id="simpleLine" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-2" class="panel">
							<div class="panel-hdr">
								<h2>
									Line <span class="fw-300"><i>Regions</i></span>
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
										Set regions for each data with style using the <code>regions</code> option
									</div>
									<div id="linleRegions" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-3" class="panel">
							<div class="panel-hdr">
								<h2>
									Time <span class="fw-300"><i>Series</i></span>
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
										Simple line chart with timeseries data using <code>xFormat</code> and <code>axis</code> options
									</div>
									<div id="timeSeries" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-4" class="panel">
							<div class="panel-hdr">
								<h2>
									Spline <span class="fw-300"><i>Line</i></span>
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
										Display as Spline Chart
									</div>
									<div id="splilneLine" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-5" class="panel">
							<div class="panel-hdr">
								<h2>
									Scatter <span class="fw-300"><i>Chart</i></span>
								</h2>
								<div class="panel-toolbar">
									<button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
									<button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
									<button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
								</div>
							</div>
							<div class="panel-container show">
								<div class="panel-content">
									<div class="panel-tag d-flex">
										Display as Scatter Plot
									</div>
									<div id="scatterChart" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="scatterChartLoad" onclick="scatterChartLoad();" class="btn btn-sm btn-dark ml-auto">Load New Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-6" class="panel">
							<div class="panel-hdr">
								<h2>
									Bar <span class="fw-300"><i>Chart</i></span>
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
										Display as Bar Chart
									</div>
									<div id="barChart" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="barChartLoad" onclick="barChartLoad();" class="btn btn-sm btn-dark ml-auto">Load New Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-7" class="panel">
							<div class="panel-hdr">
								<h2>
									Stacked <span class="fw-300"><i>Bar</i></span>
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
										Display as Stacked Bar Chart
									</div>
									<div id="stackedBar" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="stackedBarLoad" onclick="stackedBarLoad();" class="btn btn-sm btn-dark ml-auto">Load New Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-8" class="panel">
							<div class="panel-hdr">
								<h2>
									Step <span class="fw-300"><i>Chart</i></span>
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
										An example of area and line Step Charts
									</div>
									<div id="stepChart" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="stepChartLoad" onclick="stepChartLoad();" class="btn btn-sm btn-dark ml-auto">Load New Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-9" class="panel">
							<div class="panel-hdr">
								<h2>
									Pie <span class="fw-300"><i>Chart</i></span>
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
										Display as Pie Chart
									</div>
									<div id="pieChart" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="pieChartUnload" onclick="pieChartUnload();" class="btn btn-sm btn-dark ml-auto">Unload Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-10" class="panel">
							<div class="panel-hdr">
								<h2>
									Donut <span class="fw-300"><i>Chart</i></span>
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
										Donut chart example
									</div>
									<div id="donutChart" style="width:100%; height:300px;"></div>
									<div class="text-right">
										<button id="donutChartUnload" onclick="donutChartUnload();" class="btn btn-sm btn-dark ml-auto">Unload Data</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-11" class="panel">
							<div class="panel-hdr">
								<h2>
									Combination <span class="fw-300"><i>Chart</i></span>
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
										An example of multiple charts in one canvas - "all in one"
									</div>
									<div id="combinationChart" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-12" class="panel">
							<div class="panel-hdr">
								<h2>
									Interactive <span class="fw-300"><i>Mouse wheel</i></span>
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
										Zoom by mouse wheel event and slide by drag
									</div>
									<div id="interactiveWheel" style="width:100%; height:300px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div id="panel-13" class="panel">
					<div class="panel-hdr">
						<h2>
							Interactive <span class="fw-300"><i>Example</i></span>
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
								Show sub chart for zoom and selection range
							</div>
							<div id="interactiveExample" style="width:100%; height:350px;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "c3",
		head: {
			titleTemplate: 'C3 Charts | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/statistics/c3/c3.css' },
			],
			script: [
				{ src: '/assets/js/statistics/d3/d3.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/statistics/c3/c3.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/statistics/demo-data/demo-c3.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/statistics_c3.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>