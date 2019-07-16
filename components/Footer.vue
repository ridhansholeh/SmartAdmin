<template>
	<!-- BEGIN Page Footer -->
	<footer class="page-footer" role="contentinfo">
		<div class="d-flex align-items-center flex-1 text-muted">
			<span class="hidden-md-down fw-700">2019 © SmartAdmin by&nbsp;<a href='https://www.gotbootstrap.com' class='text-primary fw-500' title='gotbootstrap.com' target='_blank'>gotbootstrap.com</a></span>
		</div>
		<div>
			<ul class="list-table m-0">
				<li><nuxt-link :to="{ name: 'application-intel_introduction' }" class="text-secondary fw-700">About</nuxt-link></li>
				<li class="pl-3"><nuxt-link :to="{ name: 'info-app_licensing' }" class="text-secondary fw-700">License</nuxt-link></li>
				<li class="pl-3"><nuxt-link :to="{ name: 'info-app_docs' }" class="text-secondary fw-700">Documentation</nuxt-link></li>
				<li class="pl-3 fs-xl"><a href="https://wrapbootstrap.com/user/MyOrange" class="text-secondary" target="_blank"><i class="fal fa-question-circle" aria-hidden="true"></i></a></li>
			</ul>
		</div>
	</footer>
	<!-- END Page Footer -->
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>

</style>