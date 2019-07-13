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
					<ModalShortcut />
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
	import ModalShortcut from "../components/ModalShortcut";

	export default {
		components: {
			ModalShortcut,
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