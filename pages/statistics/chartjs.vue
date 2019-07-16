<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Statistics</li>
			<li class="breadcrumb-item active">Chart.js</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-chart-pie'></i> Chart.js <sup class='badge badge-primary fw-500'>ADDON</sup>
				<small>
					Simple yet flexible JavaScript charting for designers & developers
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
						<p>Chart.js is a JavaScript library that allows you to draw different types of charts by using the HTML5 <code>canvas</code> element.</p>
						<p>
							The library doesn’t have dependencies and its weight is very low as it’s ~11kb in size when minified, concatenated, and served gzipped. However, you’re able to reduce the size even further, if you don’t use all six of the core chart types, by including only the modules you need.
						</p>
						<p class="m-0">
							Find tutorials, guidelines and more on Chart.js's <a href="https://www.chartjs.org/docs/latest/" target="_blank">official documentation</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="row">
					<div class="col-xl-6">
						<div id="panel-1" class="panel">
							<div class="panel-hdr">
								<h2>
									Line <span class="fw-300"><i>Chart</i></span>
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
										The line chart requires an array of labels for each of the data points. This is shown on the X axis. It has a colour for the fill, a colour for the line and colours for the points and strokes of the points
									</div>
									<div id="lineChart">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-7" class="panel">
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
										An area chart or area graph displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings
									</div>
									<div id="areaChart">
										<canvas style="width:100%; height:300px;"></canvas>
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
						<div id="panel-2" class="panel">
							<div class="panel-hdr">
								<h2>
									Horizontal <span class="fw-300"><i>Bar Chart</i></span>
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
										A horizontal bar chart provides a way of showing data values represented as horizontal bars. It is sometimes used to show trend data, and the comparison of multiple data sets on top of another
									</div>
									<div id="horizontalBarChart">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-8" class="panel">
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
										A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side
									</div>
									<div id="barChart">
										<canvas style="width:100%; height:300px;"></canvas>
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
						<div id="panel-3" class="panel">
							<div class="panel-hdr">
								<h2>
									Bar <span class="fw-300"><i>Stacked</i></span>
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
										A stacked bar chart, is a graph that is used to break down and compare parts of a whole. Each bar in the chart represents a whole, and segments in the bar represent different parts or categories of that whole
									</div>
									<div id="barStacked">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-9" class="panel">
							<div class="panel-hdr">
								<h2>
									Bar <span class="fw-300"><i>Stacked (horizontal)</i></span>
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
										A stacked horizontal bar chart, shows you a breakdown and compare parts of a whole. Each segment displays a whole brown down into different parts or categories - displayed on top of another
									</div>
									<div id="barHorizontalStacked">
										<canvas style="width:100%; height:300px;"></canvas>
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
						<div id="panel-4" class="panel">
							<div class="panel-hdr">
								<h2>
									Bubble <span class="fw-300"><i>Chart</i></span>
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
										A bubble chart is used to display three dimensions of data. The location of the bubble is determined by the first two dimensions and the third dimension is represented by the size of the individual bubbles
									</div>
									<div id="bubbleChart">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-10" class="panel">
							<div class="panel-hdr">
								<h2>
									Combination <span class="fw-300"><i>Chart (Bar & Line)</i></span>
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
										This is a combination of different charts presented together to show how easy it is to built complex charts. Here we use similar data sets to combine a linechart with bar chart
									</div>
									<div id="barlineCombine">
										<canvas style="width:100%; height:300px;"></canvas>
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
						<div id="panel-5" class="panel">
							<div class="panel-hdr">
								<h2>
									Polar <span class="fw-300"><i>Area</i></span>
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
										Polar charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. Polar charts is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context
									</div>
									<div id="polarArea">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-11" class="panel">
							<div class="panel-hdr">
								<h2>
									Radar <span class="fw-300"><i>Chart</i></span>
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
										For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart. For the radar chart data, we have an array of datasets as objects, with a fill, stroke, and line color for each point. We also have an array of data values
									</div>
									<div id="radarChart">
										<canvas style="width:100%; height:300px;"></canvas>
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
						<div id="panel-6" class="panel">
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
										Pie charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data
									</div>
									<div id="pieChart">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6">
						<div id="panel-12" class="panel">
							<div class="panel-hdr">
								<h2>
									Doughnut <span class="fw-300"><i>Chart</i></span>
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
										Doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data
									</div>
									<div id="doughnutChart">
										<canvas style="width:100%; height:300px;"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "chartjs",
		head: {
			titleTemplate: 'Chart.js | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/statistics/chartjs/chartjs.css' },
			],
			script: [
				{ src: '/assets/js/statistics/chartjs/chartjs.bundle.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/statistics_chartjs.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>