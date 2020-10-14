<template>
    <div :class="containerClass" data-theme="colorScheme" @click="onDocumentClick($event)">
        <div class="layout-content-wrapper">
            <app-topbar
                :topbarNotificationMenuActive="topbarNotificationMenuActive"
                :topbarUserMenuActive="topbarUserMenuActive"
                @menu-button-click="onMenuButtonClick"
                @search-click="onSearchClick"
                @topbar-notification="onTopbarNotificationMenuButtonClick"
                @topbar-user-menu="onTopbarUserMenuButtonClick"
                @right-menu-click="onRightMenuClick"
            ></app-topbar>

            <div class="layout-content">
                <router-view></router-view>
            </div>

            <app-footer></app-footer>
        </div>

        <app-menu :model="menu" :menuMode="menuMode" :menuActive="menuActive"></app-menu>

        <app-right-menu :rightMenuActive="rightMenuActive"></app-right-menu>

        <app-config
            :configActive="configActive"
            :menuTheme="menuTheme"
            :menuMode="menuMode"
            :colorScheme="colorScheme"
            @config-click="onConfigClick"
            @config-button-click="onConfigButtonClick"
            @change-menu-theme="changeMenuTheme"
            @change-component-theme="changeStyleSheetsColor"
            @menu-mode="changeMenuMode"
            @change-color-scheme="changeColorScheme"
        ></app-config>

        <app-search :search="search"></app-search>

        <div class="layout-mask modal-in"></div>
    </div>
</template>

<script>
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";
import AppConfig from "./AppConfig";
import AppMenu from "./AppMenu";
import AppSearch from "./AppSearch";
import AppRightMenu from "./AppRightMenu";
export default {
    data() {
        return {
            menuActive: false,
            menuMode: "static",
            colorScheme: "light",
            menuTheme: "layout-sidebar-darkgray",
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            menuClick: false,
            search: false,
            searchClick: false,
            userMenuClick: false,
            topbarUserMenuActive: false,
            notificationMenuClick: false,
            topbarNotificationMenuActive: false,
            rightMenuClick: false,
            rightMenuActive: false,
            configActive: false,
            configClick: false,
            resetMenu: false,
            menuHoverActive: false,
            menu: [
                {
                    label: "Favorites",
                    icon: "pi pi-fw pi-home",
                    items: [
                        {
                            label: "Dashboard",
                            icon: "pi pi-fw pi-home",
                            to: "/",
                        },
                    ],
                },
                { separator: true },
                {
                    label: "UI Kit",
                    icon: "pi pi-fw pi-id-card",
                    items: [
                        {
                            label: "Form Layout",
                            icon: "pi pi-fw pi-id-card",
                            to: "/formlayout",
                        },
                        {
                            label: "Input",
                            icon: "pi pi-fw pi-check-square",
                            to: "/input",
                        },
                        {
                            label: "Float Label",
                            icon: "pi pi-fw pi-bookmark",
                            to: "/floatlabel",
                        },
                        {
                            label: "Button",
                            icon: "pi pi-fw pi-mobile",
                            to: "/button",
                        },
                        {
                            label: "Table",
                            icon: "pi pi-fw pi-table",
                            to: "/table",
                        },
                        {
                            label: "List",
                            icon: "pi pi-fw pi-list",
                            to: "/list",
                        },
                        {
                            label: "Tree",
                            icon: "pi pi-fw pi-share-alt",
                            to: "/tree",
                        },
                        {
                            label: "Panel",
                            icon: "pi pi-fw pi-tablet",
                            to: "/panel",
                        },
                        {
                            label: "Overlay",
                            icon: "pi pi-fw pi-clone",
                            to: "/overlay",
                        },
                        {
                            label: "Media",
                            icon: "pi pi-fw pi-image",
                            to: "/media",
                        },
                        {
                            label: "Menu",
                            icon: "pi pi-fw pi-bars",
                            to: "/menu",
                        },
                        {
                            label: "Message",
                            icon: "pi pi-fw pi-comment",
                            to: "/messages",
                        },
                        {
                            label: "File",
                            icon: "pi pi-fw pi-file",
                            to: "/file",
                        },
                        {
                            label: "Chart",
                            icon: "pi pi-fw pi-chart-bar",
                            to: "/chart",
                        },
                        {
                            label: "Misc",
                            icon: "pi pi-fw pi-circle-off",
                            to: "/misc",
                        },
                    ],
                },
                { separator: true },
                {
                    label: "Utilities",
                    icon: "pi pi-fw pi-desktop",
                    items: [
                        {
                            label: "Display",
                            icon: "pi pi-fw pi-desktop",
                            to: "/display",
                        },
                        {
                            label: "Elevation",
                            icon: "pi pi-fw pi-external-link",
                            to: "/elevation",
                        },
                        {
                            label: "FlexBox",
                            icon: "pi pi-fw pi-directions",
                            to: "/flexbox",
                        },
                        {
                            label: "Icons",
                            icon: "pi pi-fw pi-search",
                            to: "/icons",
                        },
                        {
                            label: "Text",
                            icon: "pi pi-fw pi-pencil",
                            to: "/text",
                        },
                        {
                            label: "Widgets",
                            icon: "pi pi-fw pi-star-o",
                            to: "/widgets",
                        },
                        {
                            label: "Grid System",
                            icon: "pi pi-fw pi-th-large",
                            to: "/grid",
                        },
                        {
                            label: "Spacing",
                            icon: "pi pi-fw pi-arrow-right",
                            to: "/spacing",
                        },
                        {
                            label: "Typography",
                            icon: "pi pi-fw pi-align-center",
                            to: "/typography",
                        },
                    ],
                },
                { separator: true },
                {
                    label: "Pages",
                    icon: "pi pi-fw pi-pencil",
                    items: [
                        {
                            label: "Crud",
                            icon: "pi pi-fw pi-pencil",
                            to: "/crud",
                        },
                        {
                            label: "Calendar",
                            icon: "pi pi-fw pi-calendar-plus",
                            to: "/calendar",
                        },
                        {
                            label: "Landing",
                            icon: "pi pi-fw pi-globe",
                            url: "assets/pages/landing.html",
                            target: "_blank",
                        },
                        {
                            label: "Login",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/login",
                        },
                        {
                            label: "Invoice",
                            icon: "pi pi-fw pi-dollar",
                            to: "/invoice",
                        },
                        {
                            label: "Help",
                            icon: "pi pi-fw pi-question-circle",
                            to: "/help",
                        },
                        {
                            label: "Error",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/error",
                        },
                        {
                            label: "Not Found",
                            icon: "pi pi-fw pi-exclamation-circle",
                            to: "/notfound",
                        },
                        {
                            label: "Access Denied",
                            icon: "pi pi-fw pi-lock",
                            to: "/access",
                        },
                        {
                            label: "Empty",
                            icon: "pi pi-fw pi-circle-off",
                            to: "/empty",
                        },
                    ],
                },
                { separator: true },
                {
                    label: "Hierarchy",
                    icon: "pi pi-fw pi-align-left",
                    items: [
                        {
                            label: "Submenu 1",
                            icon: "pi pi-fw pi-align-left",
                            items: [
                                {
                                    label: "Submenu 1.1",
                                    icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {
                                            label: "Submenu 1.1.1",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                        {
                                            label: "Submenu 1.1.2",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                        {
                                            label: "Submenu 1.1.3",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                    ],
                                },
                                {
                                    label: "Submenu 1.2",
                                    icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {
                                            label: "Submenu 1.2.1",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "Submenu 2",
                            icon: "pi pi-fw pi-align-left",
                            items: [
                                {
                                    label: "Submenu 2.1",
                                    icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {
                                            label: "Submenu 2.1.1",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                        {
                                            label: "Submenu 2.1.2",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                    ],
                                },
                                {
                                    label: "Submenu 2.2",
                                    icon: "pi pi-fw pi-align-left",
                                    items: [
                                        {
                                            label: "Submenu 2.2.1",
                                            icon: "pi pi-fw pi-align-left",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                { separator: true },
                {
                    label: "Start",
                    icon: "pi pi-fw pi-download",
                    items: [
                        {
                            label: "Buy Now",
                            icon: "pi pi-fw pi-shopping-cart",
                            command: () => window.open("https://www.primefaces.org/store", "_blank"),
                        },
                        {
                            label: "Documentation",
                            icon: "pi pi-fw pi-info-circle",
                            to: "/documentation",
                        },
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
                    "layout-horizontal": this.menuMode === "horizontal",
                    "layout-overlay": this.menuMode === "overlay",
                    "layout-static": this.menuMode === "static",
                    "layout-slim": this.menuMode === "slim",
                    "layout-sidebar-dim": this.colorScheme === "dim",
                    "layout-sidebar-dark": this.colorScheme === "dark",
                    "layout-overlay-active": this.overlayMenuActive,
                    "layout-mobile-active": this.staticMenuMobileActive,
                    "layout-static-inactive": this.staticMenuDesktopInactive && this.menuMode === "static",
                    "p-input-filled": this.$appState.inputStyle === "filled",
                    "p-ripple-disabled": !this.$primevue.ripple,
                },
                this.colorScheme === "light" ? this.menuTheme : "",
            ];
        },
    },
    components: {
        AppTopbar,
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
        onDocumentClick($event) {
            if ($event.target.closest(".layout-sidebar-right-active")) return;

            if (document.querySelector(".layout-search")) {
                if ($event.target.closest(".search-container")) return;
            }

            if (!this.searchClick) {
                this.search = false;
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
                if (this.overlayMenuActive || this.staticMenuMobileActive) {
                    this.hideOverlayMenu();
                }

                this.menuHoverActive = false;
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

        onSearchClick() {
            this.search = !this.search;
            this.searchClick = !this.searchClick;
        },

        onMenuClick() {
            this.menuClick = true;
            this.resetMenu = false;
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

        onRightMenuClick(event) {
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

        isSlim() {
            return this.menuMode === "slim";
        },

        isOverlay() {
            return this.menuMode === "overlay";
        },

        isDesktop() {
            return window.innerWidth > 991;
        },

        isMobile() {
            return window.innerWidth <= 991;
        },

        hideOverlayMenu() {
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        },

        blockBodyScroll() {
            this.addClass(document.body, "blocked-scroll");
        },

        unblockBodyScroll() {
            this.removeClass(document.body, "blocked-scroll");
        },

        addClass(element, className) {
            if (element.classList) element.classList.add(className);
            else element.className += " " + className;
        },

        removeClass(element, className) {
            if (element.classList) element.classList.remove(className);
            else element.className = element.classList.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        },

        changeMenuTheme(themeName, logoColor, componentTheme) {
            this.menuTheme = themeName;
            this.changeStyleSheetsColor("theme-css", componentTheme, 2);

            const appLogoLink = document.getElementById("app-logo");

            if (logoColor === "dark") {
                appLogoLink.src = "assets/layout/images/logo-dark.svg";
            } else {
                appLogoLink.src = "assets/layout/images/logo-white.svg";
            }
        },

        changeColorScheme(scheme) {
            this.colorScheme = scheme;
            this.changeStyleSheetsColor("layout-css", "layout-" + scheme + ".css", 1);
            this.changeStyleSheetsColor("theme-css", "theme-" + scheme + ".css", 1);

            const mobileLogoLink = document.getElementById("logo-mobile");
            const invoiceLogoLink = document.getElementById("invoice-logo");
            const footerLogoLink = document.getElementById("footer-logo");

            if (scheme === "light") {
                mobileLogoLink.src = "assets/layout/images/logo-dark.svg";
                invoiceLogoLink.src = "assets/layout/images/logo-dark.svg";
                footerLogoLink.src = "assets/layout/images/logo-dark.svg";
            } else {
                mobileLogoLink.src = "assets/layout/images/logo-white.svg";
                invoiceLogoLink.src = "assets/layout/images/logo-white.svg";
                footerLogoLink.src = "assets/layout/images/logo-white.svg";
            }
        },

        changeStyleSheetsColor(id, value, from) {
            const element = document.getElementById(id);
            const urlTokens = element.getAttribute("href").split("/");

            if (from === 1) {
                // which function invoked this function
                urlTokens[urlTokens.length - 1] = value;
            } else if (from === 2) {
                // which function invoked this function
                if (value !== null) {
                    urlTokens[urlTokens.length - 2] = value;
                }
            } else if (from === 3) {
                // which function invoked this function
                urlTokens[urlTokens.length - 2] = value;
            }

            const newURL = urlTokens.join("/");

            this.replaceLink(element, newURL);
        },

        replaceLink(linkElement, href) {
            if (this.isIE()) {
                linkElement.setAttribute("href", href);
            } else {
                const id = linkElement.getAttribute("id");
                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute("href", href);
                cloneLinkElement.setAttribute("id", id + "-clone");

                linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

                cloneLinkElement.addEventListener("load", () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute("id", id);
                });
            }
        },

        isIE() {
            return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
        },

        changeMenuMode(mode) {
            this.menuMode = mode;
        },
    },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
