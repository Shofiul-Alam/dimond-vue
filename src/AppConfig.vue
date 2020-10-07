<template>
    <div id="layout-config">
        <a
            style="cursor: pointer"
            id="layout-config-button"
            class="layout-config-button"
            @click="onConfigButtonClick($event)"
        >
            <i class="pi pi-cog"></i>
        </a>
        <div
            class="layout-config"
            :class="{ 'layout-config-active': configActive }"
            @click="onConfigClick"
        >
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="menuMode"
                    value="static"
                    v-model="menuMode"
                    inputId="mode1"
                ></RadioButton>
                <label for="mode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="menuMode"
                    value="overlay"
                    v-model="menuMode"
                    inputId="mode2"
                ></RadioButton>
                <label for="mode2">Overlay</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="menuMode"
                    value="slim"
                    v-model="menuMode"
                    inputId="mode3"
                ></RadioButton>
                <label for="mode3">Slim</label>
            </div>

            <hr />

            <h5>Color Scheme</h5>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="colorScheme"
                    value="dark"
                    v-model="colorScheme"
                    inputId="theme1"
                    @change="changeColorScheme('dark')"
                ></RadioButton>
                <label for="theme1">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="colorScheme"
                    value="dim"
                    v-model="colorScheme"
                    inputId="theme2"
                    @change="changeColorScheme('dim')"
                ></RadioButton>
                <label for="theme2">Dim</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="colorScheme"
                    value="light"
                    v-model="colorScheme"
                    inputId="theme3"
                    @change="changeColorScheme('light')"
                ></RadioButton>
                <label for="theme3">Light</label>
            </div>

            <hr />

            <h5>Input Style</h5>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="inputStyle"
                    value="outlined"
                    v-model="inputStyle"
                    inputId="inputStyle1"
                ></RadioButton>
                <label for="inputStyle1">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton
                    name="inputStyle"
                    value="filled"
                    v-model="inputStyle"
                    inputId="inputStyle2"
                ></RadioButton>
                <label for="inputStyle2">Filled</label>
            </div>

            <hr />

            <h5>Ripple Effect</h5>
            <InputSwitch
                v-model="d_ripple"
                @change="$emit('on-ripple-change', $event)"
            ></InputSwitch>

            <hr />

            <h5>Menu Themes</h5>
            <div class="layout-themes" v-if="colorScheme === 'light'">
                <div v-for="theme in menuThemes" :key="theme.name">
                    <a
                        style="cursor: pointer"
                        @click="
                            changeMenuTheme(
                                theme.name,
                                theme.logoColor,
                                theme.componentTheme
                            )
                        "
                        :style="{ 'background-color': theme.color }"
                    ></a>
                </div>
            </div>
            <div v-if="colorScheme !== 'light'">
                <p>
                    Menu themes are only available in light mode by design as
                    large surfaces can emit too much brightness in dark mode.
                </p>
            </div>

            <hr />

            <h5>Component Themes</h5>
            <div class="layout-themes">
                <div v-for="theme in componentThemes" :key="theme.name">
                    <a
                        style="cursor: pointer"
                        @click="changeComponentTheme(theme.name)"
                        :style="{ 'background-color': theme.color }"
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    name: "AppConfig",
    props: {
        configActive: {
            type: Boolean,
            default: null,
        },
        configClick: {
            type: Boolean,
            default: null,
        },
        ripple: {
            type: Boolean,
            default: null,
        },
        colorScheme: {
            type: String,
            default: null,
        },
        menuTheme: String,
    },
    data() {
        return {
            menuThemes: [
                {
                    name: "white",
                    color: "#ffffff",
                    logoColor: "dark",
                    componentTheme: null,
                },
                {
                    name: "darkgray",
                    color: "#343a40",
                    logoColor: "white",
                    componentTheme: null,
                },
                {
                    name: "blue",
                    color: "#1976d2",
                    logoColor: "white",
                    componentTheme: "blue",
                },
                {
                    name: "bluegray",
                    color: "#455a64",
                    logoColor: "white",
                    componentTheme: "lightgreen",
                },
                {
                    name: "brown",
                    color: "#5d4037",
                    logoColor: "white",
                    componentTheme: "cyan",
                },
                {
                    name: "cyan",
                    color: "#0097a7",
                    logoColor: "white",
                    componentTheme: "cyan",
                },
                {
                    name: "green",
                    color: "#388e3C",
                    logoColor: "white",
                    componentTheme: "green",
                },
                {
                    name: "indigo",
                    color: "#303f9f",
                    logoColor: "white",
                    componentTheme: "indigo",
                },
                {
                    name: "deeppurple",
                    color: "#512da8",
                    logoColor: "white",
                    componentTheme: "deeppurple",
                },
                {
                    name: "orange",
                    color: "#F57c00",
                    logoColor: "dark",
                    componentTheme: "orange",
                },
                {
                    name: "pink",
                    color: "#c2185b",
                    logoColor: "white",
                    componentTheme: "pink",
                },
                {
                    name: "purple",
                    color: "#7b1fa2",
                    logoColor: "white",
                    componentTheme: "purple",
                },
                {
                    name: "teal",
                    color: "#00796b",
                    logoColor: "white",
                    componentTheme: "teal",
                },
            ],
            componentThemes: [
                { name: "blue", color: "#42A5F5" },
                { name: "green", color: "#66BB6A" },
                { name: "lightgreen", color: "#9CCC65" },
                { name: "purple", color: "#AB47BC" },
                { name: "deeppurple", color: "#7E57C2" },
                { name: "indigo", color: "#5C6BC0" },
                { name: "orange", color: "#FFA726" },
                { name: "cyan", color: "#26C6DA" },
                { name: "pink", color: "#EC407A" },
                { name: "teal", color: "#26A69A" },
            ],
            componentTheme: "blue",
            menuMode: null,
            inputStyle: null,
            d_ripple: this.ripple,
        };
    },
    methods: {
        changeColorScheme(scheme) {
            this.changeStyleSheetsColor(
                "layout-css",
                "layout-" + scheme + ".css",
                1
            );
            this.changeStyleSheetsColor(
                "theme-css",
                "theme-" + scheme + ".css",
                1
            );

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

        changeMenuTheme(name, logoColor, componentTheme) {
            this.$emit("change-menu-theme", "layout-sidebar-" + name);
            this.changeStyleSheetsColor("theme-css", componentTheme, 2);
            if (logoColor === "dark") {
                document.getElementById("app-logo").src =
                    "assets/layout/images/logo-dark.svg";
            } else {
                document.getElementById("app-logo").src =
                    "assets/layout/images/logo-white.svg";
            }
        },

        changeComponentTheme(theme) {
            this.changeStyleSheetsColor("theme-css", theme, 3);
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

                linkElement.parentNode.insertBefore(
                    cloneLinkElement,
                    linkElement.nextSibling
                );

                cloneLinkElement.addEventListener("load", () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute("id", id);
                });
            }
        },

        isIE() {
            return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
        },

        onConfigButtonClick(event) {
            this.$emit("config-button-click", event);
            event.preventDefault();
        },

        onConfigClick(event) {
            this.$emit("config-click", event);
        },
    },
};
</script>