<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Font Icons</li>
			<li class="breadcrumb-item">Stack Icons</li>
			<li class="breadcrumb-item active">Generate Stack</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				Stack Icons: <span class='fw-300'>Generate Stack</span> <sup class='badge badge-success fw-500'>ADDON</sup>
				<small>
					Generate your unique stack Icon
				</small>
			</h1>
		</div>
		<div class="container">
			<div id="panel-1" class="panel">
				<div class="panel-hdr">
					<h2>
						Unique <span class="fw-300"><i>Icon</i></span>
					</h2>
					<div class="panel-toolbar mr-2">
						<select id="js-select-layers" class="custom-select form-control custom-select-sm" style="width:8rem">
							<option value="2">Two layers</option>
							<option value="3">Three layers </option>
							<option value="4">Four layers</option>
							<option value="5">Five layers</option>
							<option value="6">Six layers</option>
							<option value="7">Seven layers</option>
						</select>
					</div>
					<div class="panel-toolbar">
						<button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
					</div>
				</div>
				<div class="panel-container show">
					<div class="panel-content">
						<div class="row">
							<div class="col-12 col-xl-auto">
								<div class="d-flex align-items-center justify-content-center position-relative w-100 mb-g mb-xl-0" style="font-size: 250px; min-width: 301px; height: 351px; background: url(/assets/img/backgrounds/bg-5.png) #fff; border-left:0; border-top:0; ">
									<h6 class="fw-300 position-absolute pos-top pos-left m-2 bg-fusion-100 p-2 rounded fs-sm opacity-70">Preview</h6>
									<div id="icon-construct" class="icon-stack m-0 p-0"></div>
								</div>
							</div>
							<div class="flex-1 col-12 col-xl-auto">
								<ul class="mb-2 p-0 list-unstyled" id="construct-wrap"></ul>
								<div class="row">
									<div class="col-12 text-right">
										<button class="btn btn-success" onclick="copyIcon();">
											Copy Icon
										</button>
									</div>
								</div>
							</div>
							<textarea id="js-icon-class" class="position-absolute" style="height:0px; width:0px; opacity:0;"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "generate",
		head: {
			titleTemplate: 'Stack Icons: Generate Stack | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/fa-regular.css' },
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/fa-solid.css' },
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/fa-brands.css' },
			],
			script: [
				{ src: '/assets/js/pages/icons_stack_generate.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>