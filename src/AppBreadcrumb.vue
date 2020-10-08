<template>
	<span class="layout-breadcrumb viewname" style="text-transform: uppercase">
		<template v-if="$route.meta.breadcrumb">{{
			$route.meta.breadcrumb[0].label
		}}</template>
		<template v-else-if="$route.path === '/'">Dashboard</template>
		<template v-else>
			{{ breadcrumb }}
		</template>
	</span>
</template>

<script>
export default {
	name: "AppBreadcrumb",
	computed: {
		breadcrumb() {
			const route = this.$route.path.split("/");
			return route[route.length - 1];
		},
	},
};
</script>