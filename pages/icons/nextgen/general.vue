<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Font Icons</li>
			<li class="breadcrumb-item">NextGen Icons</li>
			<li class="breadcrumb-item active">General</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				NextGen Icons: <span class='fw-300'>General</span>
				<small>
					NextGen Icons description
				</small>
			</h1>
		</div>
		<!-- input group search box -->
		<div class="input-group input-group-lg mb-3">
			<input type="text" class="form-control shadow-inset-2" id="filter-icon" aria-label="type 2 or more letters">
			<div class="input-group-append">
				<span class="input-group-text"><i class="fal fa-search"></i></span>
			</div>
		</div>
		<!-- end input group search box -->
		<!-- icon list -->
		<div class="card pt-3 pr-3 pb-0 pl-3">
			<div id="icon-list" class="row"></div>
		</div>
		<!-- end icon list -->
		<!-- modal -->
		<div class="modal fade" id="iconModal" tabindex="-1" role="dialog" aria-labelledby="iconModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content border-0 shadow-3">
					<div class="modal-header">
						<h5 class="modal-title" id="iconModalLabel">
							<strong></strong>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true"><i class="fal fa-times"></i></span>
						</button>
					</div>
					<div class="modal-body bg-faded">
						<div class="row">
							<div class="col-sm-12 col-lg-auto col-xl-auto">
								<div class="mx-auto mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 d-none d-sm-block d-md-block d-lg-block d-xl-block rounded shadow-1" style="font-size: 200px; width: 301px; height: 305px; background: url(/assets/img/backgrounds/bg-5.png) #fff 0px 28px; border: 1px solid #ededec; border-left:0; border-right:0;">
									<div class="opacity-50 w-100 h-100 d-flex align-items-center justify-content-center text-primary">
										<i class="fal fa-address-book"></i>
									</div>
								</div>
							</div>
							<div class="flex-1 d-flex flex-column align-items-stretch col-sm-12 col-lg-auto col-xl-auto">
								<h5 class="frame-heading m-0 p-0">
									Showcasting various icon sizes <code>fa-2x</code> to <code>fa-9x</code>
								</h5>
								<div class="mb-g">
									<div class="d-flex flex-row flex-wrap align-items-center justify-content-between flex-row-reverse mt-2">
										<span class="fa-9x d-inline l-h-n">
											<i class="fal fa-address-book"></i>
										</span>
										<span class="fa-7x d-inline l-h-n">
											<i class="fal fa-address-book"></i>
										</span>
										<span class="fa-5x d-inline l-h-n">
											<i class="fal fa-address-book"></i>
										</span>
										<span class="fa-3x d-inline l-h-n">
											<i class="fal fa-address-book"></i>
										</span>
										<span class="fa-2x d-inline l-h-n">
											<i class="fal fa-address-book"></i>
										</span>
									</div>
								</div>
								<h5 class="frame-heading mt-0 mb-2 p-0">
									Icons with various backgrounds
								</h5>
								<div class="row">
									<div class="col">
										<div class="rounded p-1 shadow-1 bg-white">
											<div class="bg-primary-50 d-flex flex-column align-items-center justify-content-center p-3 fa-4x">
												<i class="fal fa-address-book"></i>
											</div>
										</div>
									</div>
									<div class="col">
										<div class="rounded p-1 shadow-1 bg-white">
											<div class="bg-primary-400 d-flex flex-column align-items-center justify-content-center p-3 fa-4x">
												<i class="fal fa-address-book"></i>
											</div>
										</div>
									</div>
									<div class="col">
										<div class="rounded p-1 shadow-1 bg-white">
											<div class="bg-primary-700 d-flex flex-column align-items-center justify-content-center p-3 fa-4x">
												<i class="fal fa-address-book"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<input type="text" id="js-icon-class" style="opacity:0;" class="position-absolute pos-top pos-right">
					</div>
					<div class="modal-footer">
						<code class="p-0 d-inline-block bg-white flex-1">
							&lt;i class="<span class="color-success-500 fw-500 js-icon-class">fal fa-address-book</span>"&gt;&lt;/i&gt;
						</code>
						<button type="button" class="btn btn-success js-icon-copy" data-dismiss="modal">Copy Icon</button>
					</div>
				</div>
			</div>
		</div>
		<!-- end modal -->
	</main>
</template>

<script>
	export default {
		name: "general",
		head: {
			titleTemplate: 'NextGen Icons: General | %s',
			script: [
				{ src: '/assets/js/pages/icons_nextgen_general.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>