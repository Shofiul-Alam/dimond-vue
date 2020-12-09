<template>
    <ul v-if="items" class="layout-menu" role="menu">
        <template v-for="(item, i) of items">
            <li v-if="visible(item) && !item.separator" :key="item.label || i" :class="[{'layout-root-menuitem': root, 'active-menuitem': activeIndex === i && !item.disabled}]" role="menuitem">
                <router-link v-if="item.to" :to="item.to" :style="item.style" :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]" active-class="active-route" :target="item.target"
                    exact @click="onMenuItemClick($event, item, i)" @mouseenter="onMenuItemMouseEnter(i)" v-ripple>
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                </router-link>
                <a v-if="!item.to" :href="item.url || '#'" :style="item.style" :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
                    :target="item.target"  @click="onMenuItemClick($event, item, i)" @mouseenter="onMenuItemMouseEnter(i)" v-ripple>
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                </a>
                <div class="layout-root-menuitem" v-if="root">
                    <div class="layout-menuitem-root-text" style="text-transform: uppercase">{{ item.label }}</div>
                </div>
                <transition name="layout-menu">
                    <appsubmenu v-show="item.items && (root && (!isSlim() || (isSlim() && (mobileMenuActive || activeIndex !== null))) ? true : activeIndex === i)" :items="visible(item) && item.items" :menuActive="menuActive" :layoutMode="layoutMode" :parentMenuItemActive="activeIndex === i" @menuitem-click="$emit('menuitem-click', $event)"></appsubmenu>
                </transition>
            </li>
            <li class="menu-separator" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i" role="separator"></li>
        </template>
    </ul>
</template>

<script>
import EventBus from './event-bus';
export default {
    name: "appsubmenu",
    emits: ["root-menuitem-click", "menuitem-click"],
    props: {
        items: Array,
        layoutMode: String,
        menuActive: Boolean,
        mobileMenuActive: Boolean,
        root: {
            type: Boolean,
            default: false,
        },
        parentMenuItemActive: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeIndex: null,
        };
    },
    mounted() {
		EventBus.on('reset-active-index', () => {
			if (this.isSlim()) {
				this.activeIndex = null;
			}
		});
	},
    methods: {
        onMenuItemClick(event, item, index) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            //execute command
            if (item.command) {
                item.command({ originalEvent: event, item: item });
                event.preventDefault();
            }
            if (item.items) {
                event.preventDefault();
            }
            if (this.root) {
                this.$emit("root-menuitem-click", {
                    originalEvent: event,
                });
            }
            if (item.items) {
                this.activeIndex = index === this.activeIndex ? null : index;
            }
            this.$emit("menuitem-click", {
                originalEvent: event,
                item: item,
            });
        },
        onMenuItemMouseEnter(index) {
            if (this.root && this.menuActive && this.layoutMode === "slim" && !this.isMobile()) {
                this.activeIndex = index;
            }
        },
        visible(item) {
            return typeof item.visible === "function" ? item.visible() : item.visible !== false;
        },
        isMobile() {
            return window.innerWidth <= 991;
        },
        isSlim() {
            return this.layoutMode === 'slim';
        }
    }
};
</script>
