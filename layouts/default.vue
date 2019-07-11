<template>
	<div>
		<!-- DOC: script to save and load page settings -->
		<no-ssr>
			<script>
			/**
			 *	This script should be placed right after the body tag for fast execution
			 *	Note: the script is written in pure javascript and does not depend on thirdparty library
			 **/
			'use strict';

			var classHolder = document.getElementsByTagName('BODY')[0],
				/**
				 * Load from localstorage
				 **/
				themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
					{},
				themeURL = themeSettings.themeURL || '',
				themeOptions = themeSettings.themeOptions || '';
			/**
			 * Load theme options
			 **/
			if (themeSettings.themeOptions) {
				classHolder.className = themeSettings.themeOptions;
				console.log('%c✔ Theme settings loaded', 'color: #148f32');
			} else {
				console.log('Heads up! Theme settings is empty or does not exist, loading default settings...');
			}
			if (themeSettings.themeURL && !document.getElementById('mytheme')) {
				var cssfile = document.createElement('link');
				cssfile.id = 'mytheme';
				cssfile.rel = 'stylesheet';
				cssfile.href = themeURL;
				document.getElementsByTagName('head')[0].appendChild(cssfile);
			}
			/**
			 * Save to localstorage
			 **/
			var saveSettings = function() {
				themeSettings.themeOptions = String(classHolder.className).split(/[^\w-]+/).filter(function(item)
				{
					return /^(nav|header|mod|display)-/i.test(item);
				}).join(' ');
				if (document.getElementById('mytheme'))
				{
					themeSettings.themeURL = document.getElementById('mytheme').getAttribute('href');
				};
				localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
			}
			/**
			 * Reset settings
			 **/
			var resetSettings = function() {
				localStorage.setItem('themeSettings', '');
			}
		</script>
		</no-ssr>

		<!-- BEGIN Page Wrapper -->
		<div class="page-wrapper">
			<div class="page-inner">
				<Sidebar />

				<div class="page-content-wrapper">
					<Navbar />

					<!-- BEGIN Page Content -->
					<!-- the #js-page-content id is needed for some plugins to initialize -->
					<nuxt />
					<!-- this overlay is activated only when mobile menu is triggered -->
					<div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
					<!-- END Page Content -->

					<Footer />

					<!-- BEGIN Shortcuts -->
					<!-- modal shortcut -->
					<div class="modal fade modal-backdrop-transparent" id="modal-shortcut" tabindex="-1" role="dialog" aria-labelledby="modal-shortcut" aria-hidden="true">
						<div class="modal-dialog modal-dialog-top modal-transparent" role="document">
							<div class="modal-content">
								<div class="modal-body">
									<ul class="app-list w-auto h-auto p-0 text-left">
										<li>
											<nuxt-link :to="{ name: 'index' }" class="app-list-item text-white border-0 m-0">
												<div class="icon-stack">
													<i class="base base-7 icon-stack-3x opacity-100 color-primary-500 "></i>
													<i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
													<i class="fal fa-home icon-stack-1x opacity-100 color-white"></i>
												</div>
												<span class="app-list-name">
                                                    Home
                                                </span>
											</nuxt-link>
										</li>
										<li>
											<a href="page_inbox_general.html" class="app-list-item text-white border-0 m-0">
												<div class="icon-stack">
													<i class="base base-7 icon-stack-3x opacity-100 color-success-500 "></i>
													<i class="base base-7 icon-stack-2x opacity-100 color-success-300 "></i>
													<i class="ni ni-envelope icon-stack-1x text-white"></i>
												</div>
												<span class="app-list-name">
                                                    Inbox
                                                </span>
											</a>
										</li>
										<li>
											<a href="intel_introduction.html" class="app-list-item text-white border-0 m-0">
												<div class="icon-stack">
													<i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
													<i class="fal fa-plus icon-stack-1x opacity-100 color-white"></i>
												</div>
												<span class="app-list-name">
                                                    Add More
                                                </span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-- END Shortcuts -->
				</div>
			</div>
		</div>
		<!-- END Page Wrapper -->

		<Floating />
		<Messenger />
		<Setting />
	</div>
</template>

<style>

</style>

<script>
	import Navbar from '~/components/Navbar.vue'
	import Sidebar from '~/components/Sidebar.vue'
	import Footer from '~/components/Footer.vue'
	import Floating from '~/components/Floating.vue'
	import Messenger from '~/components/Messenger.vue'
	import Setting from '~/components/Setting.vue'

	export default {
		components: {
			Navbar,
			Sidebar,
			Footer,
			Floating,
			Messenger,
			Setting,
		},
		head() {
			return {
				bodyAttrs: {
					// 'class': 'mod-bg-1 '
				}
			}
		}
	}
</script>