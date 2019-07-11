<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Application Intel</li>
				<li class="breadcrumb-item active">Build Notes</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					Latest Build Notes
					<small>
						Casing all release notes for your convenience
					</small>
				</h1>
			</div>
			<div class="card mb-g">
				<div class="card-body">
					<div class="alert alert-primary">
						<div class="d-flex flex-start w-100">
							<div class="d-flex align-center mr-2 hidden-sm-down">
							<span class="icon-stack icon-stack-lg">
								<i class="base-7 icon-stack-3x color-primary-400"></i>
								<i class="base-7 icon-stack-2x color-primary-600 opacity-70"></i>
								<i class="fal fa-key icon-stack-1x text-white opacity-90"></i>
							</span>
							</div>
							<div class="d-flex flex-fill">
								<div class="flex-fill">
									<span class="h5">Get early access!</span>
									<br> You can always find our latest build of on our private repository, allowing access to nightly builds, bug fixes and feature requests. Please check the documentation for how to request access.
								</div>
							</div>
						</div>
					</div>
					<h4 class="mb-g">
						Build v 4.0.1
						<!-- /* 4.0.1*/ -->
						<small>
							Improvements and bug fixes
						</small>
					</h4>
					<ul class="nav d-block fs-md pl-3">
						<li>
							<span class="badge bg-fusion-200 fw-n mr-1 width-3">PRJT</span> Added Seed project (PHP Flavor)
						</li>
						<li>
							<span class="badge bg-fusion-200 fw-n mr-1 width-3">PRJT</span> Added SLIM project (HTML Flavor)
						</li>
						<li>
							<span class="badge bg-fusion-200 fw-n mr-1 width-3">PRJT</span> Added Full project (HTML AJAX Flavor - Alpha release)
						</li>
						<li>
							<span class="badge badge-primary fw-n mr-1 width-3">SCRP</span> Fixed linux bug for lowercase uppercase in build.json
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Fixed error on blank.hbs
						</li>
						<li>
							<span class="badge badge-primary fw-n mr-1 width-3">SCRP</span> Fixed fontawesome page bugs
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Updated app flavors page (added content for app flavor)
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Updated app docs
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Updated license page to reflect latest license changes on wrapbootstrap
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Update statistic bug
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Updated UI for side panels
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Added google analytics option
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Fixed broken link for inbox
						</li>
						<li>
							<span class="badge badge-primary fw-n mr-1 width-3">SCRP</span> Added smartvoice.js (work in progress, page will be added in next release)
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Spell corrections and added links to footer
						</li>
						<li>
							<span class="badge bg-fusion-600 fw-n mr-1 width-3">SCSS</span> CSS bug fix for (_nav-function-hidden.scss, _settings-demo-theme-colors.scss, _mod-clear-bg.scss, _mod-clean-page-bg.scss, _custom-bootstrap-varients.scss, _nav.scss, _mod-text-size.scss)
						</li>
						<li>
							<span class="badge bg-fusion-600 fw-n mr-1 width-3">SCSS</span> Added NEW skin options (overlays base CSS file so there might be a flicker when switching pages because of the delay for server fetching), over 13 unique skins are now part of the base app
						</li>
						<li>
							<span class="badge bg-primary-800 fw-n mr-1 width-3">PLUG</span> Updated all plugins to latest, check your <code>package.json</code>
						</li>
						<li>
							<span class="badge bg-danger-500 fw-n mr-1 width-3">DEL</span> Removed <code>nav_dev.json</code>, <code>license.md</code>
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Updated docs
						</li>
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Added source files HTML
						</li>
						<li>
							<span class="badge badge-warning fw-n mr-1">MISC</span> Updated <code>./src/img</code>, <code>./src/custom/plugins</code> directories
						</li>
					</ul>
					<hr class="mt-4 mb-g">
					<h4 class="mb-g">
						Build v 4.0.0
						<!-- /* 4.0.0*/ -->
						<small>
							Initial release
						</small>
					</h4>
					<ul class="nav d-block fs-md pl-3">
						<li>
							<span class="badge badge-success fw-n mr-1 width-3">*HBS</span> Added source files HTML
							<ul class="nav fs-b ml-3 pl-4 mb-2">
								<li class="notes">
									<strong>Notes:</strong> Layouts are neatly organized into handlebar template partials <code>*.hbs</code>. Making it much easier to edit, remove or add new pages. There are three base layouts (main.hbs, auth.hbs, and alt.hbs)
								</li>
							</ul>
						</li>
						<li>
							<span class="badge bg-fusion-600 fw-n mr-1 width-3">PCKG</span> Updated BS4 pack to v4.3
						</li>
						<li>
							<span class="badge bg-fusion-600 fw-n mr-1 width-3">SCSS</span> Added source files for CSS
						</li>
						<li>
							<span class="badge bg-fusion-200 fw-n mr-1 width-3">PRJT</span> Added Seed project (HTML Flavor)
						</li>
						<li>
							<span class="badge bg-fusion-200 fw-n mr-1 width-3">PRJT</span> Added Seed project (.Net Flavor)
						</li>
						<li>
							<span class="badge badge-primary fw-n mr-1 width-3">SCRP</span> Added package.json
						</li>
						<li>
							<span class="badge badge-primary fw-n mr-1 width-3">SCRP</span> Added _modules for SmartAdmin WebApp Core
						</li>
						<li>
							<span class="badge bg-primary-800 fw-n mr-1 width-3">PLUG</span> Added npm dependencies:
							<ul class="fs-b ml-3 mb-2">
								<li>"@fullcalendar/bootstrap": "^4.2.0",</li>
								<li>"@fullcalendar/core": "^4.2.0",</li>
								<li>"@fullcalendar/daygrid": "^4.2.0",</li>
								<li>"@fullcalendar/interaction": "^4.2.0",</li>
								<li>"@fullcalendar/list": "^4.2.0",</li>
								<li>"@fullcalendar/timegrid": "^4.2.0",</li>
								<li>"bootbox": "^5.1.3",</li>
								<li>"bootstrap": "^4.3.1",</li>
								<li>"bootstrap-colorpicker": "^3.1.2",</li>
								<li>"bootstrap-datepicker": "^1.9.0",</li>
								<li>"bootstrap-daterangepicker": "^3.0.5",</li>
								<li>"bootstrap-markdown": "^2.10.0",</li>
								<li>"c3": "^0.7.1",</li>
								<li>"chart.js": "^2.8.0",</li>
								<li>"chartist": "^0.11.2",</li>
								<li>"cropperjs": "^1.5.1",</li>
								<li>"d3": "^5.9.2",</li>
								<li>"datatables.net-autofill-bs4": "^2.3.3",</li>
								<li>"datatables.net-bs4": "^1.10.19",</li>
								<li>"datatables.net-buttons-bs4": "^1.5.6",</li>
								<li>"datatables.net-colreorder-bs4": "^1.5.1",</li>
								<li>"datatables.net-fixedcolumns-bs4": "^3.2.6",</li>
								<li>"datatables.net-fixedheader-bs4": "^3.1.5",</li>
								<li>"datatables.net-keytable-bs4": "^2.5.0",</li>
								<li>"datatables.net-responsive-bs4": "^2.2.3",</li>
								<li>"datatables.net-rowgroup-bs4": "^1.1.0",</li>
								<li>"datatables.net-rowreorder-bs4": "^1.2.5",</li>
								<li>"datatables.net-scroller-bs4": "^2.0.0",</li>
								<li>"datatables.net-select-bs4": "^1.3.0",</li>
								<li>"dropzone": "^5.5.1",</li>
								<li>"dygraphs": "^2.1.0",</li>
								<li>"easy-pie-chart": "^2.1.7",</li>
								<li>"es6-promise-polyfill": "^1.2.0",</li>
								<li>"flot": "^0.8.3",</li>
								<li>"flot-spline": "0.0.1",</li>
								<li>"holderjs": "^2.9.6",</li>
								<li>"i18next-client": "^1.11.4",</li>
								<li>"inputmask": "^4.0.8",</li>
								<li>"ion-rangeslider": "^2.3.0",</li>
								<li>"jquery": "3.3.1",</li>
								<li>"jquery-cropper": "^1.0.0",</li>
								<li>"jquery-mousewheel": "^3.1.13",</li>
								<li>"jquery-slimscroll": "^1.3.8",</li>
								<li>"jquery-sparkline": "^2.4.0",</li>
								<li>"jquery-throttle-debounce": "github:myorangeca/jquery-throttle-debounce",</li>
								<li>"jquery-ui": "^1.12.1",</li>
								<li>"jquery.flot.tooltip": "^0.9.0",</li>
								<li>"jqvmap": "^1.5.1",</li>
								<li>"jszip": "^3.2.1",</li>
								<li>"justifiedGallery": "^3.7.0",</li>
								<li>"lightgallery": "^1.6.12",</li>
								<li>"markdown": "^0.5.0",</li>
								<li>"moment": "^2.24.0",</li>
								<li>"node-waves": "^0.7.6",</li>
								<li>"nouislider": "^13.1.5",</li>
								<li>"pace-js": "^1.0.2",</li>
								<li>"pdfmake": "^0.1.56",</li>
								<li>"peity": "^3.3.0",</li>
								<li>"popper.js": "^1.15.0",</li>
								<li>"select2": "4.0.7",</li>
								<li>"smartwizard": "^4.3.1",</li>
								<li>"summernote": "^0.8.12",</li>
								<li>"sweetalert2": "^8.11.7",</li>
								<li>"toastr": "^2.1.4"</li>
							</ul>
						</li>
						<li>
							<span class="badge bg-primary-800 fw-n mr-1 width-3">GULP</span> <strong>Added gulpfile.js with automated tasks: </strong>
							<ul class="fs-b ml-3 mb-2">
								<li>
									compress images/*.css/*.js files
								</li>
								<li>
									concatinate modules to core JS package
								</li>
								<li>
									copy fonts/icons/favicon/videos
								</li>
								<li>
									organize bower components
								</li>
								<li>
									sass and hbs compiler
								</li>
								<li>
									gulp task watch
								</li>
								<li>
									gulp task connect
								</li>
							</ul>
						</li>
						<li>
							<span class="badge badge-warning fw-n mr-1 width-3">MISC</span> Added .favicon
						</li>
						<li>
							<span class="badge badge-warning fw-n mr-1 width-3">MISC</span> Added IMG, VIDEO, and MISC directory for all media
						</li>
					</ul>
				</div>
			</div>
		</main>
	</no-ssr>
</template>

<script>
	export default {
		name: "intel_build_notes"
	}
</script>

<style scoped>

</style>