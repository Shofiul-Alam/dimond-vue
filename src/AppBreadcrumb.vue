<template>
	<span class="layout-breadcrumb viewname" style="text-transform: uppercase">
		<template v-if="$route.path === '/'">Dashboard</template>
		<template v-else>
			{{ bread }}
		</template>
	</span>
</template>

<script>
export default {
	name: "AppBreadcrumb",
	computed: {
		bread() {
			const route = this.$route.path.split("/");
			return route[route.length - 1];
		},
	},
};
</script>