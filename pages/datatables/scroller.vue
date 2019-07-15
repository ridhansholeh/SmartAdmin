<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Datatables</li>
				<li class="breadcrumb-item active">Scroller</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					<i class='subheader-icon fal fa-table'></i> DataTables: <span class='fw-300'>Scroller</span> <sup class='badge badge-primary fw-500'>ADDON</sup>
					<small>
						Example of Scroller extention with server side processing
					</small>
				</h1>
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
										Scroller is a plug-in for DataTables which enhances DataTables' built-in scrolling features to allow large amounts of data to be rendered on page very quickly. This is done by Scroller through the use of a virtual rendering technique that will render only the part of the table that is actually required for the current view.
									</p>
									<p>
										This example shows how Scroller for DataTables can be initialised, when the Scroller Javascript file is included, by simply setting the <code>scroller</code> option to true. This option can also be given as an object to specify initialisation options for Scroller.
									</p>
								</div>
								<!-- datatable start -->
								<table id="dt-basic-example" class="table table-bordered table-hover table-striped w-100">
									<thead>
										<tr>
											<th>ID</th>
											<th>Client</th>
											<th>Account#</th>
											<th>Office</th>
											<th>Age.</th>
											<th>Payment date</th>
											<th>Transfer Amount</th>
											<th>Status</th>
											<th></th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>ID</th>
											<th>Client</th>
											<th>Account#</th>
											<th>Office</th>
											<th>Age.</th>
											<th>Payment date</th>
											<th>Transfer Amount</th>
											<th>Status</th>
											<th></th>
										</tr>
									</tfoot>
								</table>
								<!-- datatable end -->
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
		name: "scroller",
		head: {
			titleTemplate: 'DataTables: Scroller | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/datagrid/datatables/datatables.bundle.css' },
			],
			script: [
				{ src: '/assets/js/datagrid/datatables/datatables.bundle.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/datatables_scroller.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>