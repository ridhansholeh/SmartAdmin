<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Statistics</li>
			<li class="breadcrumb-item active">Flot</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-chart-pie'></i> Flot <sup class='badge badge-primary fw-500'>ADDON</sup>
				<small>
					Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features
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
						<span class="h5">Ease of use</span>
						<p>
							Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features. Additional examples are bundled with Flot. Flot is easy to use, just a few lines of code, you can make a simple line chart, it also provides a comprehensive API documentation where you can find examples, usage and methods. The most important part, Flot continues to release new versions, each new version comes with new features.
						</p>
						<p class="m-0">
							Find more examples and guidelines on Flot's <a href="https://www.flotcharts.org/flot/examples/" target="_blank">official documentation</a> and detailed tutorials on <a href="http://www.jqueryflottutorial.com/how-to-make-jquery-flot-line-chart.html" target="_blank">Flot Tutorials</a>
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
							Kitchen <span class="fw-300"><i>Sink (example)</i></span>
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
								We use a combination of various plots to create a more intricate diagram. More basic examples of plot can be found below
							</div>
							<div id="js-checkbox-toggles" class="d-flex mb-3">
								<div class="custom-control custom-switch mr-2">
									<input type="checkbox" class="custom-control-input" name="gra-0" id="gra-0" checked="">
									<label class="custom-control-label" for="gra-0">Target Profit</label>
								</div>
								<div class="custom-control custom-switch mr-2">
									<input type="checkbox" class="custom-control-input" name="gra-1" id="gra-1" checked="">
									<label class="custom-control-label" for="gra-1">Actual Profit</label>
								</div>
								<div class="custom-control custom-switch mr-2">
									<input type="checkbox" class="custom-control-input" name="gra-2" id="gra-2" checked="">
									<label class="custom-control-label" for="gra-2">User Signups</label>
								</div>
							</div>
							<div id="flot-toggles" class="w-100 mt-4" style="height: 300px"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div id="panel-2" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Bar</i></span>
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
								Single barchart to display timeline differences. It is currently displaying only one group of data
							</div>
							<div id="flot-bar" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-3" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Line</i></span>
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
								Flot lines are the most easest to make and can display lots of data very nicely!
							</div>
							<div id="flot-line" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-4" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Line (tooltip)</i></span>
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
								Adding tooltips is easy, you will need to include the plugin <code>jquery.flot.tooltip.js</code>
							</div>
							<div id="flot-line-alt" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-5" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Area</i></span>
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
								Area chart overlaps one over the other, making it easier to see the proportion of data
							</div>
							<div id="flot-area" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-6" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Interval Curve</i></span>
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
								Generates random data to populate and redraw recursively, we use the <code>jquery.flot.spline.js</code> plugin to make the lines curvey
							</div>
							<div class="btn-group">
								<button class="btn btn-secondary btn-sm dropdown-toggle mb-g" type="button" data-toggle="dropdown" aria-expanded="false"> Change interval </button>
								<div class="dropdown-menu dropdown-lg p-0">
									<div class="px-4 py-2 d-flex align-items-center justify-content-center">
										<input type="range" class="custom-range js-set-interval" id="js-flot-realtime-curved-speed" min="-1000" max="-100" step="100" value="-1000">
									</div>
								</div>
							</div>
							<div id="flot-realtime-curved" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div id="panel-7" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Multiple Bars</i></span>
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
								Here we compare relations of different data groups, the greater the length of bar, bigger the value
							</div>
							<div id="flot-bar-fill" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-8" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Curved Lines</i></span>
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
								Curved lines by using the plugin <code>jquery.flot.spline.js</code>, adding a nice transition to the eyes
							</div>
							<div id="flot-line-curves" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-9" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Curved (tooltip)</i></span>
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
								We take the flot chart from previous example (above) and add tooltips
							</div>
							<div id="flot-line-curves-alt" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-10" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Area Curved</i></span>
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
								This Area chart has smooth curved lines to make it easy to read
							</div>
							<div id="flot-area-fill" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<div id="panel-11" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Interval (fill)</i></span>
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
								In this interval example we fill the whitespace. You can also try the interval button to change the speed of the redrawing
							</div>
							<div class="btn-group">
								<button class="btn btn-secondary btn-sm dropdown-toggle mb-g" type="button" data-toggle="dropdown" aria-expanded="false"> Change interval </button>
								<div class="dropdown-menu dropdown-lg p-0">
									<div class="px-4 py-2 d-flex align-items-center justify-content-center">
										<input type="range" class="custom-range js-set-interval" id="js-flot-realtime-fill-speed" min="-1000" max="-100" step="100" value="-1000">
									</div>
								</div>
							</div>
							<div id="flot-realtime-fill" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12">
				<div id="panel-12" class="panel">
					<div class="panel-hdr">
						<h2>
							Flot <span class="fw-300"><i>Pie</i></span>
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
								Pie chart is used to see the proprotion of each data groups, making Flot pie chart is pretty simple, in order to make pie chart you have to incldue <code>jquery.flot.pie.js</code> plugin
							</div>
							<div class="row">
								<div class="col-xl-5">
									<div id="js-pie-options" class="w-100" style="height: 250px"></div>
								</div>
								<div class="col-xl-6 offset-xl-1">
									<div class="h-100 d-flex align-items-center mt-3 mt-xl-0">
										<div class="demo">
											<button id="example-1" class="btn btn-outline-primary js-pie-example">Default Options</button>
											<button id="example-2" class="btn btn-outline-primary js-pie-example">Without Legend</button>
											<button id="example-3" class="btn btn-outline-primary js-pie-example">Label Formatter</button>
											<button id="example-4" class="btn btn-outline-primary js-pie-example">Label Radius</button>
											<button id="example-5" class="btn btn-outline-primary js-pie-example">Label Styles #1</button>
											<button id="example-6" class="btn btn-outline-primary js-pie-example">Label Styles #2</button>
											<button id="example-7" class="btn btn-outline-primary js-pie-example">Hidden Labels</button>
											<button id="example-8" class="btn btn-outline-primary js-pie-example">Combined Slice</button>
											<button id="example-9" class="btn btn-outline-primary js-pie-example">Rectangular Pie</button>
											<button id="example-10" class="btn btn-outline-primary js-pie-example">Tilted Pie</button>
											<button id="example-11" class="btn btn-outline-primary js-pie-example">Donut Hole</button>
											<button id="example-12" class="btn btn-outline-primary js-pie-example">Interactivity</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="panel-13" class="panel">
					<div class="panel-hdr">
						<h2>
							Sales <span class="fw-300"><i>Chart (example)</i></span>
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
								Pie chart is used to see the proprotion of each data groups, making Flot pie chart is pretty simple, in order to make pie chart you have to incldue <code>jquery.flot.pie.js</code> plugin
							</div>
							<div id="flot-sales" class="w-100" style="height: 350px"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "flot",
		head: {
			titleTemplate: 'Flot | %s',
			script: [
				{ src: '/assets/js/statistics/flot/flot.bundle.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/statistics_flot.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>