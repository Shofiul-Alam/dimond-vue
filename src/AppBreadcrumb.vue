<template>
	<span class="layout-breadcrumb viewname" style="text-transform: uppercase">
		<template v-if="$route.meta.breadcrumb">{{
			$route.meta.breadcrumb[0].label
		}}</template>
		<template v-else-if="$route.path === '/'">Dashboard</template>
		<template v-else>
			{{ $route.path.split("/")[1] }}
		</template>
	</span>
</template>

<script>
export default {
	name: "AppBreadcrumb",
};
</script>