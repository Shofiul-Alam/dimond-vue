<template>
    <div class="layout-sidebar">
        <router-link to="/" class="logo">
            <img id="app-logo" class="logo-image" src="assets/layout/images/logo-white.svg" alt="diamond-ng" />
            <span class="app-name">DIAMOND</span>
        </router-link>

        <div class="layout-menu-container">
            <AppSubmenu :items="model" :layoutMode="layoutMode" :parentMenuItemActive="true" :root="true" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick" />
        </div>
    </div>
</template>

<script>
import AppSubmenu from "./AppSubmenu";
export default {
    name: "AppMenu",
    props: {
        model: Array,
        layoutMode: String,
        menuActive: Boolean
    },
    methods: {
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },
		onRootMenuItemClick(event) {
			this.$emit('root-menuitem-click', event);
		}
    },
    components: { AppSubmenu },
};
</script>