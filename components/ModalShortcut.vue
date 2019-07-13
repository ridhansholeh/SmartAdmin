<template>
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
							<nuxt-link :to="{ name: 'application-intel_introduction' }" class="app-list-item text-white border-0 m-0">
								<div class="icon-stack">
									<i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
									<i class="fal fa-plus icon-stack-1x opacity-100 color-white"></i>
								</div>
								<span class="app-list-name">
									Add More
								</span>
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ModalShortcut"
	}
</script>

<style scoped>

</style>