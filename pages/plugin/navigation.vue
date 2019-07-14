<template>
	<main id="js-page-content" role="main" class="page-content">
		<ol class="breadcrumb page-breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
			<li class="breadcrumb-item">Core Plugins</li>
			<li class="breadcrumb-item active">Navigation</li>
			<li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
		</ol>
		<div class="subheader">
			<h1 class="subheader-title">
				<i class='subheader-icon fal fa-shield-alt'></i> Navigation <sup class='badge badge-danger fw-500'>CORE</sup>
				<small>
					Application Navigation for SmartAdmin WebApp
				</small>
			</h1>
		</div>
		<div class="row">
			<div class="col-xl-6">
				<div id="panel-1" class="panel">
					<div class="panel-hdr">
						<h2>
							Build <span class="fw-300"><i>the menu</i></span>
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
								You can also add the attribute <code>data-nav-accordion="true"</code> to set accordion true or false. The background can be any color you wish from our <a href="utilities_color_pallet.html" target="_blank">color pallet</a> and <a href="utilities_helpers" target="_blank"> gradient presets</a>, and over 1700 icons to choose from for your arrows.
							</div>
							<!-- build controled menu -->
							<form>
								<div class="row">
									<div class="form-group col-lg-6 col-xl-6">
										<label class="form-label" for="nav_animation">Animation</label>
										<select class="custom-select w-100" id="nav_animation">
											<option value="easeOutExpo">easeOutExpo</option>
											<option value="easeInExpo">easeInExpo</option>
											<option value="easeInOutBounce">easeInOutBounce</option>
											<option value="easeOutBounce">easeOutBounce</option>
											<option value="easeInBounce">easeInBounce</option>
											<option value="easeInOutElastic">easeInOutElastic</option>
											<option value="easeOutElastic">easeOutElastic</option>
											<option value="easeInElastic">easeInElastic</option>
											<option value="easeInOutBack">easeInOutBack</option>
											<option value="easeOutBack">easeOutBack</option>
											<option value="easeInOutCirc">easeInOutCirc</option>
											<option value="easeOutCirc">easeOutCirc</option>
											<option value="easeInOutExpo">easeInOutExpo</option>
											<option value="easeInOutQuint">easeInOutQuint</option>
											<option value="easeOutQuint">easeOutQuint</option>
											<option value="easeInQuint">easeInQuint</option>
											<option value="easeInOutQuart">easeInOutQuart</option>
											<option value="easeOutQuart">easeOutQuart</option>
											<option value="easeInQuart">easeInQuart</option>
											<option value="easeInOutCubic">easeInOutCubic</option>
											<option value="easeOutCubic">easeOutCubic</option>
											<option value="easeInCubic">easeInCubic</option>
											<option value="easeInOutQuad">easeInOutQuad</option>
											<option value="easeInQuad">easeInQuad</option>
											<option value="easeInOutSine">easeInOutSine</option>
											<option value="easeOutSine">easeOutSine</option>
											<option value="easeInSine">easeInSine</option>
										</select>
									</div>
									<div class="form-group col-lg-6 col-xl-6">
										<label class="form-label" for="nav_openedSign">Collapse Sign</label>
										<select class="custom-select w-100" id="nav_openedSign">
											<option value="+">Default icon...</option>
											<option value="[+]">[+]</option>
											<option value="[-]">[-]</option>
											<option value="<i class='fal fa-arrow-up'></i>">fa-arrow-up</option>
											<option value="<i class='fal fa-arrow-down'></i>">fa-arrow-down</option>
											<option value="<i class='fal fa-chevron-up'></i>">fa-chevron-up</option>
											<option value="<i class='fal fa-chevron-down'></i>">fa-chevron-down</option>
											<option value="<i class='ni ni-chevron-up'></i>">ni-chevron-up</option>
											<option value="<i class='ni ni-chevron-down'></i>">ni-chevron-down</option>
										</select>
									</div>
									<div class="form-group col-lg-6 col-xl-6">
										<label class="form-label" for="nav_speed">Speed</label>
										<div class="input-group mb-2 mr-sm-2 mb-sm-0">
											<input type="text" class="form-control" id="nav_speed" placeholder="Speed" value="400">
											<div class="input-group-append">
												<span class="input-group-text">miliseconds</span>
											</div>
										</div>
									</div>
									<div class="form-group col-lg-6 col-xl-6">
										<label class="form-label" for="nav_closedSign">Expand Sign</label>
										<select class="custom-select w-100" id="nav_closedSign">
											<option value="+">Default icon...</option>
											<option value="[+]">[+]</option>
											<option value="[-]">[-]</option>
											<option value="<i class='fal fa-arrow-up'></i>">fa-arrow-up</option>
											<option value="<i class='fal fa-arrow-down'></i>">fa-arrow-down</option>
											<option value="<i class='fal fa-chevron-up'></i>">fa-chevron-up</option>
											<option value="<i class='fal fa-chevron-down'></i>">fa-chevron-down</option>
											<option value="<i class='ni ni-chevron-up'></i>">ni-chevron-up</option>
											<option value="<i class='ni ni-chevron-down'></i>">ni-chevron-down</option>
										</select>
									</div>
								</div>
							</form>
							<div class="d-flex align-items-center">
								<div class="flex-1">
									<div class="custom-control d-inline-flex custom-checkbox mb-2 mr-sm-2 mb-sm-0">
										<input id="nav_accordion" type="checkbox" class="custom-control-input" checked="checked">
										<label class="form-label custom-control-label" for="nav_accordion">Accordion</label>
									</div>
									<div class="custom-control d-inline-flex custom-checkbox mb-2 mr-sm-2 mb-sm-0">
										<input id="nav_syndicate" type="checkbox" class="custom-control-input" checked="checked">
										<label class="form-label custom-control-label" for="nav_syndicate">Syndicated</label>
									</div>
									<div class="custom-control d-inline-flex custom-checkbox mb-2 mr-sm-2 mb-sm-0">
										<input id="nav_compact" type="checkbox" class="custom-control-input" checked="checked">
										<label class="form-label custom-control-label" for="nav_compact">Compact</label>
									</div>
								</div>
								<button id="destroy" class="btn btn-danger btn-w-m"> Destroy Menu </button>
								<button id="build" class="btn btn-success btn-w-m"> Build Menu </button>
							</div>
							<hr class="my-5">
							<div class="row">
								<!-- clean look -->
								<div class="col-xl-6">
									<ul id="nav-1" class="nav-menu nav-menu-reset nav-menu-compact bg-success-700 bg-info-gradient nav-menu-bordered mb-sm-4 mb-md-0 rounded" data-nav-accordion="true">
										<li>
											<a href="#">
												<span class="nav-link-text">Menu Parent </span>
												<strong class="dl-ref bg-danger-500">&nbsp;1.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item w/ child
														</span>
														<strong class="dl-ref bg-danger-500">&nbsp;1.3&nbsp;</strong>
													</a>
													<ul>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	First Child (1.3.1)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Second Child (1.3.2)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Last child (1.3.3)
																</span>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">
												<span class="nav-link-text">
													Menu Parent
												</span>
												<strong class="dl-ref bg-danger-500">&nbsp;2.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">
												<span class="nav-link-text">Menu Parent </span>
												<strong class="dl-ref bg-danger-500">&nbsp;3.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item w/ child
														</span>
														<strong class="dl-ref bg-danger-500">&nbsp;3.3&nbsp;</strong>
													</a>
													<ul>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	First Child (3.3.1)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Second Child (3.3.2)
																</span>
															</a>
														</li>
														<li class="disabled">
															<a href="#">
																<span class="nav-link-text">
																	Last child (3.3.3)
																</span>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="disabled">
											<a href="#">
												<span class="nav-link-text">
													Menu Parent (disabled)
												</span>
											</a>
										</li>
									</ul>
								</div>
								<!-- default settings -->
								<div class="col-xl-6">
									<ul id="nav-2" class="nav-menu nav-menu-reset nav-menu-compact bg-danger-900 bg-info-gradient nav-menu-bordered rounded" data-nav-accordion="false">
										<li>
											<a href="#" title="Menu Parent" class="">
												<span class="nav-link-text">Menu Parent </span>
												<strong class="dl-ref bg-warning-500">&nbsp;1.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item w/ child
														</span>
														<strong class="dl-ref bg-warning-500">&nbsp;1.3&nbsp;</strong>
													</a>
													<ul class="bg-info-900">
														<li>
															<a href="#">
																<span class="nav-link-text">
																	First Child (1.3.1)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Second Child (1.3.2)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Last child (1.3.3)
																</span>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<a href="#" title="Package Info">
												<span class="nav-link-text">
													Menu Parent
												</span>
												<strong class="dl-ref bg-warning-500">&nbsp;2.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="documentation-and-faq.html">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="info_package.html">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="info_app_licensing.html">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
												<li>
													<a href="info_app_flavors.html">
														<span class="nav-link-text">
															Menu Item
														</span>
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">
												<span class="nav-link-text">Menu Parent </span>
												<strong class="dl-ref bg-warning-500">&nbsp;3.0&nbsp;</strong>
											</a>
											<ul>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text"> Menu Item</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-link-text">
															Menu Item w/ child
														</span>
														<strong class="dl-ref bg-warning-500">&nbsp;3.3&nbsp;</strong>
													</a>
													<ul class="bg-info-900">
														<li>
															<a href="#">
																<span class="nav-link-text">
																	First Child (3.3.1)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Second Child (3.3.2)
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-link-text">
																	Last child (3.3.3)
																</span>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="disabled">
											<a href="#">
												<span class="nav-link-text">
													Menu Parent (disabled)
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div id="panel-2" class="panel">
					<div class="panel-hdr">
						<h2>
							Configuration <span class="fw-300"><i>Options</i></span>
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
								The navigation element can be configured manually via the following script. The script is super lightweight and fast. You will generate and load your navigation almost instantaneously. You can change the navigation padding, and color options via CSS, and further customize the navigation with our SCSS variables
							</div>
							<h5 class="frame-heading p-0 bg-white mb-2 mt-0">
								Initialize Manually
							</h5>
							<div class="frame-wrap">
								<pre class="prettyprint">
$("#mynav").navigation({
   accordion: 'true',
   animate: 'ease-in',
   speed: 400,
   closedSign: 'fal fa-minus',
   openedSign: 'fal fa-plus'
});</pre>
							</div>
							<h5 class="frame-heading p-0 bg-white mb-2 mt-0">
								Initialize through app.core
							</h5>
							<div class="frame-wrap">
								<pre class="prettyprint">
//this will set the navigation based on app.config.js default config
initApp.buildNavigation($("#mynav"));</pre>
							</div>
							<h5 class="frame-heading p-0 bg-white mb-2 mt-0">
								Destroy
							</h5>
							<div class="frame-wrap">
								<pre class="prettyprint">$("#mynav").navigationDestroy();</pre>
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
		name: "navigation",
		head: {
			titleTemplate: 'Navigation | %s',
			link: [
				{ rel: 'stylesheet', media: 'screen, print', href: '/assets/css/theme-demo.css' },
			],
			script: [
				{ src: 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js', type: 'text/javascript', body: true },
				{ src: '/assets/js/pages/plugin_navigation.js', type: 'text/javascript', body: true },
			]
		}
	}
</script>

<style scoped>

</style>