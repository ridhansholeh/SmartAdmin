<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Datatables</li>
				<li class="breadcrumb-item active">AltEditor (beta)</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					<i class='subheader-icon fal fa-table'></i> DataTables: <span class='fw-300'>AltEditor (beta)</span> <sup class='badge badge-primary fw-500'>ADDON</sup>
					<small>
						Custom made editor plugin designed for Datatables
					</small>
				</h1>
			</div>
			<div class="alert alert-primary">
				<div class="d-flex flex-start w-100">
					<div class="mr-2 hidden-md-down">
						<span class="icon-stack icon-stack-lg">
							<i class="base base-2 icon-stack-3x opacity-100 color-primary-500"></i>
							<i class="base base-2 icon-stack-2x opacity-100 color-primary-300"></i>
							<i class="fal fa-info icon-stack-1x opacity-100 color-white"></i>
						</span>
					</div>
					<div class="d-flex flex-fill">
						<div class="flex-fill">
							<span class="h5">About</span>
							<p>
								DataTables AltEditor is a MIT licensed free editor. The plugin adds capabilities to add, edit and delete rows in your datatables through the use of modals. We have modified the editor extensively to be used with SmartAdmin WebApp and make your job a little easier. This current version of AltEditor is exclusive to SmartAdmin and we intend to keep it up to date to be compatible with DataTables.
							</p>
							<p class="m-0">
								You can find the definitions of its elements on their <a href="https://github.com/KasperOlesen/DataTable-AltEditor" target="_blank">official github</a> page. Note: Only use the exclusive plugin included with this WebApp as the one on github contains a lot of bugs.
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
								Example <span class="fw-300"><i>Table</i></span>
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
									<p>
										Datatable accepts the following callback functions as arguments: <code>onAddRow(datatable, rowdata, success, error)</code>, <code>onEditRow(datatable, rowdata, success, error)</code>, <code>onDeleteRow(datatable, rowdata, success, error)</code>
									</p>
									<p>
										In the most common case, these function should call <code>$.ajax </code>as expected by the webservice. The two functions success and error should be passed as arguments to <code>$.ajax</code>. Webservice must return the modified row in JSON format, because the success() function expects this. Otherwise you have to write your own success() callback (e.g. refreshing the whole table).
									</p>
								</div>
								<div class="row">
									<div class="col-xl-12">
										<!-- datatable start -->
										<table id="dt-basic-example" class="table table-bordered table-hover table-striped w-100"></table>
										<!-- datatable end -->
									</div>
									<div class="col-xl-12">
										<hr class="mt-5 mb-5">
										<h5>Event <i>logs (AJAX Calls)</i></h5>
										<div id="app-eventlog" class="alert alert-primary p-1 h-auto my-3"></div>
									</div>
								</div>
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
		name: "alteditor",
		head: {
			titleTemplate: 'DataTables: AltEditor (beta) | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/datagrid/datatables/datatables.bundle.css' },
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/theme-demo.css' },
			],
			script: [
				{ src: '/assets/js/datagrid/datatables/datatables.bundle.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/datatables_alteditor.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>