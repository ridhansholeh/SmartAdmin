<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Utilities</li>
			<li class="breadcrumb-item active">Clearfix</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-window'></i> Clearfix
				<small>
					Quickly and easily clear floated content within a container by adding a clearfix utility.
				</small>
			</h1>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div id="panel-1" class="panel">
					<div class="panel-hdr">
						<h2>
							Clearfix <span class="fw-300"><i>example</i></span>
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
								Easily clear <code>float</code>s by adding <code>.clearfix</code> <strong>to the parent element</strong>. Can also be used as a mixin.
							</div>
							<div class="bg-info clearfix">
								<button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
								<button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
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
		name: "clearfix",
		head: {
			titleTemplate: 'Clearfix | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/theme-demo.css' },
			]
		}
	}
</script>

<style scoped>

</style>