<template>
    <div :class="containerClass" :data-theme="colorScheme" @click="onDocumentClick($event)">
        <div class="layout-content-wrapper">
            <AppTopBar :topbarNotificationMenuActive="topbarNotificationMenuActive" :topbarUserMenuActive="topbarUserMenuActive" @menu-button-click="onMenuButtonClick" @search-click="toggleSearch"
                @topbar-notification="onTopbarNotificationMenuButtonClick" @topbar-user-menu="onTopbarUserMenuButtonClick" @right-menu-click="onRightMenuButtonClick" @right-menubutton-click="onRightMenuButtonClick"></AppTopBar>

            <div class="layout-content">
                <router-view/>
            </div>
            <AppFooter/>
        </div>

        <AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" :mobileMenuActive="staticMenuMobileActive" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>

        <AppRightMenu :rightMenuActive="rightMenuActive" @right-menu-click="onRightMenuClick"></AppRightMenu>

        <AppConfig v-model:configActive="configActive" v-model:layoutMode="layoutMode" v-model:menuTheme="menuTheme" v-model:colorScheme="colorScheme" @config-click="onConfigClick" @config-button-click="onConfigButtonClick"></AppConfig>

        <AppSearch :searchActive="searchActive" @search-click="onSearchClick" @search-hide="onSearchHide"/>

        <div class="layout-mask modal-in"></div>
    </div>
</template>

<script>
import EventBus from './event-bus';
import AppTopBar from "./AppTopbar";
import AppFooter from "./AppFooter";
import AppConfig from "./AppConfig";
import AppMenu from "./AppMenu";
import AppSearch from "./AppSearch";
import AppRightMenu from "./AppRightMenu";
export default {
    data() {
        return {
            menuActive: false,
            layoutMode: "static",
            colorScheme: "light",
            menuTheme: "layout-sidebar-darkgray",
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            menuClick: false,
            searchActive: false,
            searchClick: false,
            userMenuClick: false,
            topbarUserMenuActive: false,
            notificationMenuClick: false,
            topbarNotificationMenuActive: false,
            rightMenuClick: false,
            rightMenuActive: false,
            configActive: false,
            configClick: false,
            menu: [
                {
                    label: "Favorites", icon: "pi pi-fw pi-home",
                    items: [
                        {label: "Dashboard", icon: "pi pi-fw pi-home", to: "/"},
                    ],
                },
                { separator: true },
                {
                    label: "UI Kit", icon: "pi pi-fw pi-id-card",
                    items: [
                        {label: "Form Layout", icon: "pi pi-fw pi-id-card", to: "/formlayout"},
                        {label: "Input", icon: "pi pi-fw pi-check-square", to: "/input"},
                        {label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
                        {label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate"},
                        {label: "Button", icon: "pi pi-fw pi-mobile", to: "/button", class: 'rotated-icon'},
                        {label: "Table", icon: "pi pi-fw pi-table", to: "/table"},
                        {label: "List", icon: "pi pi-fw pi-list", to: "/list"},
                        {label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/tree"},
                        {label: "Panel", icon: "pi pi-fw pi-tablet", to: "/panel"},
                        {label: "Overlay", icon: "pi pi-fw pi-clone", to: "/overlay"},
                        {label: "Media", icon: "pi pi-fw pi-image", to: "/media"},
                        {label: "Menu", icon: "pi pi-fw pi-bars", to: "/menu"},
                        {label: "Message", icon: "pi pi-fw pi-comment", to: "/messages"},
                        {label: "File", icon: "pi pi-fw pi-file", to: "/file"},
                        {label: "Chart", icon: "pi pi-fw pi-chart-bar", to: "/chart"},
                        {label: "Misc", icon: "pi pi-fw pi-circle-off", to: "/misc"},
                    ],
                },
                { separator: true },
                {
                    label: "Utilities", icon: "pi pi-fw pi-desktop",
                    items: [
                        {label: "Display", icon:"pi pi-fw pi-desktop", to:"/display"},
                        {label: "Elevation", icon:"pi pi-fw pi-external-link", to:"/elevation"},
                        {label: "Flexbox", icon:"pi pi-fw pi-directions", to:"/flexbox"},
                        {label: "Icons", icon:"pi pi-fw pi-search", to:"/icons"},
                        {label: "Text", icon:"pi pi-fw pi-pencil", to:"/text"},
                        {label: "Widgets", icon:"pi pi-fw pi-star-o", to:"/widgets"},
                        {label: "Grid System", icon:"pi pi-fw pi-th-large", to:"/grid"},
                        {label: "Spacing", icon:"pi pi-fw pi-arrow-right", to:"/spacing"},
                        {label: "Typography", icon:"pi pi-fw pi-align-center", to:"/typography"},
                    ],
                },
                { separator: true },
                {
                    label: "Pages", icon: "pi pi-fw pi-pencil",
                    items: [
                        {label: "Crud", icon: "pi pi-fw pi-pencil", to: "/crud"},
                        {label: "Calendar", icon: "pi pi-fw pi-calendar-plus", to: "/calendar"},
                        {label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
                        {label: "Landing", icon: "pi pi-fw pi-user-plus", url: "assets/pages/landing.html", target: "_blank"},
                        {label: "Login", icon: "pi pi-fw pi-sign-in", to: "/login"},
                        {label: "Invoice", icon: "pi pi-fw pi-dollar", to: "/invoice"},
                        {label: "Help", icon: "pi pi-fw pi-question-circle", to: "/help"},
                        {label: "Error", icon: "pi pi-fw pi-times-circle", to: "/error"},
                        {label: "Not Found", icon: "pi pi-fw pi-exclamation-circle", to: "/notfound"},
                        {label: "Access Denied", icon: "pi pi-fw pi-lock", to: "/access"},
                        {label: "Empty", icon: "pi pi-fw pi-circle-off", to: "/empty"}
                    ],
                },
                { separator: true },
                {
                    label: "Hierarchy", icon: "pi pi-fw pi-align-left",
                    items: [
                        {
                            label: "Submenu 1",icon: "pi pi-fw pi-align-left",
                            items: [
                                {
                                    label: "Submenu 1.1", icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {label: "Submenu 1.1.1", icon: "pi pi-fw pi-align-left"},
                                        {label: "Submenu 1.1.2", icon: "pi pi-fw pi-align-left"},
                                        {label: "Submenu 1.1.3", icon: "pi pi-fw pi-align-left"},
                                    ],
                                },
                                {
                                    label: "Submenu 1.2", icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {label: "Submenu 1.2.1", icon: "pi pi-fw pi-align-left"},
                                    ],
                                },
                            ],
                        },
                        {
                            label: "Submenu 2", icon: "pi pi-fw pi-align-left",
                            items: [
                                {
                                    label: "Submenu 2.1", icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {label: "Submenu 2.1.1", icon: "pi pi-fw pi-align-left"},
                                        {label: "Submenu 2.1.2", icon: "pi pi-fw pi-align-left"},
                                    ],
                                },
                                {
                                    label: "Submenu 2.2", icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {label: "Submenu 2.2.1", icon: "pi pi-fw pi-align-left"},
                                    ],
                                },
                            ],
                        },
                    ],
                },
                { separator: true },
                {
                    label: "Start", icon: "pi pi-fw pi-download",
                    items: [
                        {label: "Buy Now", icon: "pi pi-fw pi-shopping-cart", command: () => window.open("https://www.primefaces.org/store", "_blank")},
                        {label: "Documentation", icon: "pi pi-fw pi-info-circle", to: "/documentation"},
                    ],
                },
            ],
        };
    },
    computed: {
        containerClass() {
            return [
                "layout-wrapper",
                {
                    "layout-overlay": this.layoutMode === "overlay",
                    "layout-static": this.layoutMode === "static",
                    "layout-slim": this.layoutMode === "slim",
                    "layout-sidebar-dim": this.colorScheme === "dim",
                    "layout-sidebar-dark": this.colorScheme === "dark",
                    "layout-overlay-active": this.overlayMenuActive,
                    "layout-mobile-active": this.staticMenuMobileActive,
                    "layout-static-inactive": this.staticMenuDesktopInactive && this.layoutMode === "static",
                    "p-input-filled": this.$appState.inputStyle === "filled",
                    "p-ripple-disabled": !this.$primevue.ripple,
                },
                this.colorScheme === "light" ? this.menuTheme : "",
            ];
        },
    },
    components: {
        AppTopBar,
        AppFooter,
        AppConfig,
        AppMenu,
        AppSearch,
        AppRightMenu,
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        },
    },
    methods: {
        onDocumentClick() {
            if (!this.searchClick && this.searchActive) {
                this.onSearchHide();
            }

            if (!this.userMenuClick) {
                this.topbarUserMenuActive = false;
            }

            if (!this.notificationMenuClick) {
                this.topbarNotificationMenuActive = false;
            }

            if (!this.rightMenuClick) {
                this.rightMenuActive = false;
            }

            if (!this.menuClick) {
                if (this.isSlim()) {
					EventBus.emit('reset-active-index');
					this.menuActive = false;
                }

                if (this.overlayMenuActive || this.staticMenuMobileActive) {
                    this.hideOverlayMenu();
                }

                this.unblockBodyScroll();
            }

            if (this.configActive && !this.configClick) {
                this.configActive = false;
            }

            this.searchClick = false;
            this.configClick = false;
            this.userMenuClick = false;
            this.rightMenuClick = false;
            this.notificationMenuClick = false;
            this.menuClick = false;
        },
        onMenuClick() {
            this.menuClick = true;
        },
        onMenuButtonClick(event) {
            this.menuClick = true;
            this.topbarUserMenuActive = false;
            this.topbarNotificationMenuActive = false;
            this.rightMenuActive = false;

            if (this.isOverlay()) {
                this.overlayMenuActive = !this.overlayMenuActive;
            }

            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            } else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
                if (this.staticMenuMobileActive) {
                    this.blockBodyScroll();
                } else {
                    this.unblockBodyScroll();
                }
            }

            event.preventDefault();
        },
        onMenuItemClick(event) {
			if (!event.item.items) {
				EventBus.emit('reset-active-index');
				this.hideOverlayMenu();
			}
			if (!event.item.items && this.isSlim()) {
                this.menuActive = false;
            }
        },
		onRootMenuItemClick() {
            this.menuActive = !this.menuActive;
        },
        onTopbarUserMenuButtonClick(event) {
            this.userMenuClick = true;
            this.topbarUserMenuActive = !this.topbarUserMenuActive;

            this.hideOverlayMenu();

            event.preventDefault();
        },
        onTopbarNotificationMenuButtonClick(event) {
            this.notificationMenuClick = true;
            this.topbarNotificationMenuActive = !this.topbarNotificationMenuActive;

            this.hideOverlayMenu();

            event.preventDefault();
        },
        toggleSearch() {
            this.searchActive = !this.searchActive;
            this.searchClick = true;
        },
        onSearchClick() {
            this.searchClick = true;
        },
        onSearchHide() {
            this.searchActive = false;
            this.searchClick = false;
        },
        onRightMenuClick() {
			this.rightMenuClick = true;
		},
        onRightMenuButtonClick(event) {
			this.rightMenuClick = true;
			this.rightMenuActive = !this.rightMenuActive;
			this.hideOverlayMenu();
			event.preventDefault();
		},
        onConfigClick() {
            this.configClick = true;
        },
        onConfigButtonClick() {
            this.configActive = !this.configActive;
            this.configClick = true;
        },
        hideOverlayMenu() {
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
            this.unblockBodyScroll();
        },
        blockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.className += ' blocked-scroll';
            }
        },
        unblockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.remove('blocked-scroll');
            } else {
                document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                    'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },
        isSlim() {
            return this.layoutMode === "slim";
        },
        isOverlay() {
            return this.layoutMode === "overlay";
        },
        isDesktop() {
            return window.innerWidth > 991;
        }
    },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
