<template>
	<div class="layout-sidebar">
		<router-link to="/" class="logo">
			<img
				id="app-logo"
				class="logo-image"
				src="assets/layout/images/logo-white.svg"
				alt="diamond-ng"
			/>
			<span class="app-name">DIAMOND</span>
		</router-link>

		<div class="layout-menu-container">
			<AppSubmenu
				:items="model"
				:menuMode="menuMode"
				:parentMenuItemActive="true"
				:root="true"
			/>
		</div>
	</div>
</template>

<script>
import AppSubmenu from "./AppSubmenu";
export default {
	name: "AppMenu",
	props: {
		model: Array,
		menuMode: String,
		menuActive: Boolean,
	},
	components: { AppSubmenu },
};
</script>