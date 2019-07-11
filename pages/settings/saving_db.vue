<template>
	<no-ssr>
		<main id="js-page-content" role="main" class="page-content">
			<ol class="breadcrumb page-breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
				<li class="breadcrumb-item">Theme Settings</li>
				<li class="breadcrumb-item active">Saving to Database</li>
				<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
			</ol>
			<div class="subheader">
				<h1 class="subheader-title">
					Theme Settings: <span class='fw-300'>Saving to Database</span>
					<small>
						How to save and load settings from database
					</small>
				</h1>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<div id="panel-1" class="panel">
						<div class="panel-hdr">
							<h2>
								Test <span class="fw-300"><i>it out!</i></span>
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
									All changes are stored to localStorage by default. <strong>pushSettings()</strong> inherits this trait. Set <code>"storeLocally"</code> to <strong>false</strong> via <strong>app.config.js</strong> to disable this action.
								</div>
								<div class="row">
									<div class="col-xl-6 order-2 order-xl-1">
										<div class="form-group">
											<label for="pushSettings_input">
												<strong>Push Settings</strong>
											</label>
											<div class="input-group">
												<input type="text" id="pushSettings_input" list="css_list" name="pushSettings_input" class="form-control" placeholder="e.g. header-function-fixed nav-function-fixed">
												<datalist id="css_list">
													<option value="header-function-fixed"></option>
													<option value="nav-function-fixed"></option>
													<option value="nav-function-minify"></option>
													<option value="nav-function-hidden"></option>
													<option value="nav-function-top"></option>
													<option value="mod-main-boxed"></option>
													<option value="nav-mobile-push"></option>
													<option value="nav-mobile-no-overlay"></option>
													<option value="nav-mobile-slide-out"></option>
													<option value="mod-bigger-font"></option>
												</datalist>
												<div class="input-group-append">
													<button class="btn btn-secondary btn-w-m" type="button" id="pushSettings_btn">push()</button>
												</div>
											</div>
											<div class="help-block">
												$.ajax({ .. success: function (data) { var DataBase_str = data[i].appSettings } .. }); initApp.pushSettings( DataBase_str );
											</div>
										</div>
										<div class="form-group">
											<label for="getSettings_input">
												<strong>Get Settings</strong>
											</label>
											<div class="input-group">
												<input type="text" id="getSettings_input" name="getSettings_input" readonly="readonly" class="form-control" placeholder="filters and returns nav-*, header-*, mod-*, & display-*">
												<div class="input-group-append">
													<button class="btn btn-secondary btn-w-m" type="button" id="getSettings_btn">get()</button>
												</div>
											</div>
											<div class="help-block">
												var DataBase_str = initApp.getSettings(); $.ajax({ data: {DataBase_str}, dataType: "json" ... })
											</div>
										</div>
										<hr class="my-5">
										<button class="btn btn-outline-danger mr-1" type="button" data-action="app-reset"><u>R</u>eset Settings</button>
										<button class="btn btn-outline-success" type="button" id="ng_eventlog_clear"><u>C</u>lear Events</button>
									</div>
									<div class="col-xl-6 order-1 order-xl-1">
										<div id="app-eventlog" class="alert alert-primary p-1 h-auto mb-4 mb-xl-0"></div>
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
		name: "saving_db",
		head: {
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/theme-demo.css' },
			],
			script: [
				{ src: '/assets/js/saving_db.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>