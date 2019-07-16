<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Statistics</li>
			<li class="breadcrumb-item active">Chartist.js</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-chart-pie'></i> Chartist.js <sup class='badge badge-primary fw-500'>ADDON</sup>
				<small>
					Simple responsive charts
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
						<p>Chartist's goal is to provide a simple, lightweight and unintrusive library to responsively craft charts on your website. Chartist leverages the power of browsers today and say good bye to the idea of solving all problems ourselves.
						</p>
						<p>
							Chartist works with inline-SVG and therefore leverages the power of the DOM to provide parts of its functionality. This also means that Chartist does not provide it's own event handling, labels, behaviors or anything else that can just be done with plain HTML, JavaScript and CSS. The single and only responsibility of Chartist is to help you drawing "Simple responsive Charts" using inline-SVG in the DOM, CSS to style and JavaScript to provide an API for configuring your charts.</p>
						<p class="m-0">
							Find tutorials, guidelines and more on their <a href="https://gionkunz.github.io/chartist-js/getting-started.html" target="_blank">official documentation</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-6">
				<!-- Line Chart -->
				<div id="panel-1" class="panel">
					<div class="panel-hdr">
						<h2>
							Area <span class="fw-300"><i>Chart</i></span>
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
								Example of line area chart with a color filler
							</div>
							<div id="lineChartArea" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Line Scattered -->
				<div id="panel-2" class="panel">
					<div class="panel-hdr">
						<h2>
							Line <span class="fw-300"><i>Scattered</i></span>
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
								This advanced example uses a line chart to draw a scatter diagram. The data object is created with a functional style random mechanism. There is a mobile first responsive configuration using the responsive options to show less labels on small screens.
							</div>
							<div id="lineScattered" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Using Events -->
				<div id="panel-3" class="panel">
					<div class="panel-hdr">
						<h2>
							Using <span class="fw-300"><i>Events</i></span>
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
								Chartist has fixed graphical representations that are chosen because of their flexibility and to provide a high level of separation of the concerns. However, sometimes you probably would like to use different shapes or even images for your charts. One way to achieve this is by using the draw events and replace or add custom SVG shapes.
							</div>
							<div id="usingEvents" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Bipolar Line Chart -->
				<div id="panel-4" class="panel">
					<div class="panel-hdr">
						<h2>
							Bipolar <span class="fw-300"><i>Line Chart</i></span>
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
								You can also only draw the area shapes of the line chart. Area shapes will always be constructed around their areaBase which also allows you to draw nice bi-polar areas.
							</div>
							<div id="bipolar" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Advanced SMIL Animation -->
				<div id="panel-5" class="panel">
					<div class="panel-hdr">
						<h2>
							Advanced <span class="fw-300"><i>SMIL Animation</i></span>
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
								Chartist provides simple API to animate the Chart elements using SMIL. You can do most animation with CSS but in some cases you'd like to animate SVG properties that are not available in CSS
							</div>
							<div id="smileAnimation" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Horizontal Bar -->
				<div id="panel-6" class="panel">
					<div class="panel-hdr">
						<h2>
							Horizontal <span class="fw-300"><i>Bar</i></span>
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
								Guess what! Creating horizontal bar charts is as simple as it can get. There's no new chart type you need to learn, just passing an additional option is enough
							</div>
							<div id="horizontalBar" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Peak Circles -->
				<div id="panel-7" class="panel">
					<div class="panel-hdr">
						<h2>
							Peak <span class="fw-300"><i>Circles</i></span>
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
								With the help of draw events we are able to add a custom SVG shape to the peak of our bars.
							</div>
							<div id="peakCircles" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Pie Chart -->
				<div id="panel-8" class="panel">
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
								Basic pie chart with label interpolation to show percentage instead of the actual data value
							</div>
							<div id="pieChart" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Overlap Bar (Mobile) -->
				<div id="panel-9" class="panel">
					<div class="panel-hdr">
						<h2>
							Overlap <span class="fw-300"><i>Bar (Mobile)</i></span>
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
								This example makes use of label interpolation and the seriesBarDistance property that allows you to make bars overlap over each other. This then can be used to use the available space on mobile better. Resize your browser to see the effect of the responsive configuration.
							</div>
							<div id="overlapBarMobile" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Extream Responsive -->
				<div id="panel-10" class="panel">
					<div class="panel-hdr">
						<h2>
							Extream <span class="fw-300"><i>Responsive</i></span>
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
								Customized responsive configuration, you can create a chart that adopts to every media condition!
							</div>
							<div id="extreamResponsive" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Gauge Chart -->
				<div id="panel-11" class="panel">
					<div class="panel-hdr">
						<h2>
							Gauge <span class="fw-300"><i>Chart</i></span>
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
								This pie chart uses donut, startAngle and total to draw a gauge chart.
							</div>
							<div id="gaugeChart" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<!-- Line Interpolation -->
				<div id="panel-12" class="panel">
					<div class="panel-hdr">
						<h2>
							Line <span class="fw-300"><i>Interpolation</i></span>
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
								By default Chartist uses a cardinal spline algorithm to smooth the lines
							</div>
							<div id="lineInterpolation" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Muti Labels -->
				<div id="panel-13" class="panel">
					<div class="panel-hdr">
						<h2>
							Muti <span class="fw-300"><i>Labels</i></span>
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
								Chartist will figure out if your browser supports foreignObject and it will use them to create labels that are based on regular HTML text elements. Multi-line and regular CSS styles are just two of many benefits while using foreignObjects!
							</div>
							<div id="multiLineLabels" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Series Overrides -->
				<div id="panel-14" class="panel">
					<div class="panel-hdr">
						<h2>
							Series <span class="fw-300"><i>Overrides</i></span>
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
								By naming your series using the series object notation with a name property, you can enable the individual configuration of series specific settings. <code>showLine</code>, <code>showPoint</code>, <code>showArea</code> and even the smoothing function can be overriden per series! And guess what? You can even override those series settings in the responsive configuration!
							</div>
							<div id="seriesOverrides" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Stacked Bar -->
				<div id="panel-15" class="panel">
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
								You can also set your bar chart to stack the series bars on top of each other easily by using the <code>stackBars</code> property in your configuration.
							</div>
							<div id="stackedBar" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Path Animation -->
				<div id="panel-16" class="panel">
					<div class="panel-hdr">
						<h2>
							Path <span class="fw-300"><i>Animation</i></span>
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
								Path animation is made easy with the SVG Path API. The API allows you to modify complex SVG paths and transform them for different animation morphing states.
							</div>
							<div id="pathAnimation" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Label Placement -->
				<div id="panel-17" class="panel">
					<div class="panel-hdr">
						<h2>
							Label <span class="fw-300"><i>Placement</i></span>
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
								You can change the position of the labels on line and bar charts easily by using the <code>position</code> option inside of the axis configuration.
							</div>
							<div id="labelPlacement" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Bar Chart -->
				<div id="panel-18" class="panel">
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
								A simple barchart with default configuration
							</div>
							<div id="barChart" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Pie Chart (labels) -->
				<div id="panel-19" class="panel">
					<div class="panel-hdr">
						<h2>
							Pie <span class="fw-300"><i>Chart (labels)</i></span>
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
								This pie chart is configured with custom labels specified in the data object
							</div>
							<div id="pieChartLabels" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Distributed Series -->
				<div id="panel-20" class="panel">
					<div class="panel-hdr">
						<h2>
							Distributed <span class="fw-300"><i>Series</i></span>
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
								Sometime it's desired to have bar charts that show one bar per series distributed along the x-axis. If this option is enabled, you need to make sure that you pass a single series array to Chartist that contains the series values. In this example you can see T-shirt sales of a store categorized by size.
							</div>
							<div id="distributedSeries" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Donut Fill -->
				<div id="panel-21" class="panel">
					<div class="panel-hdr">
						<h2>
							Donut <span class="fw-300"><i>Fill</i></span>
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
								This pie chart uses donut and donutSolid to draw a donut chart
							</div>
							<div id="donutFill" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
				<!-- Gauge Fill -->
				<div id="panel-22" class="panel">
					<div class="panel-hdr">
						<h2>
							Gauge <span class="fw-300"><i>Fill</i></span>
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
								This pie chart uses total, startAngle, donut and donutSolid to draw a gauge chart.
							</div>
							<div id="gaugeChartFill" class="ct-chart" style="width:100%; height:300px;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "chartist",
		head: {
			titleTemplate: 'Chartist.js | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/statistics/chartist/chartist.css' },
			],
			script: [
				{ src: '/assets/js/statistics/chartist/chartist.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/statistics_chartist.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>