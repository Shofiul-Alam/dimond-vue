<template>
    <div id="layout-config">
        <a id="layout-config-button" class="layout-config-button" @click="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" :class="{ 'layout-config-active': configActive }" @click="onConfigClick">
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="static" v-model="d_menuMode" id="mode1" @change="changeMenuMode('static')"></RadioButton>
                <label for="mode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="overlay" v-model="d_menuMode" id="mode2" @change="changeMenuMode('overlay')"></RadioButton>
                <label for="mode2">Overlay</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="slim" v-model="d_menuMode" id="mode3" @change="changeMenuMode('slim')"></RadioButton>
                <label for="mode3">Slim</label>
            </div>
            <hr />

            <h5>Color Scheme</h5>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="dark" v-model="d_colorScheme" id="theme1" @change="changeColorScheme('dark')"></RadioButton>
                <label for="theme1">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="dim" v-model="d_colorScheme" id="theme2" @change="changeColorScheme('dim')"></RadioButton>
                <label for="theme2">Dim</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="light" v-model="d_colorScheme" id="theme3" @change="changeColorScheme('light')"></RadioButton>
                <label for="theme3">Light</label>
            </div>

            <hr />

            <h5>Input Style</h5>
            <div class="p-field-radiobutton">
                <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="inputStyle" @update:modelValue="onChange" />
                <label for="input_outlined">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="inputStyle" @update:modelValue="onChange" />
                <label for="input_filled">Filled</label>
            </div>

            <hr />

            <h5>Ripple Effect</h5>
            <InputSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange"  />

            <hr />

            <h5>Menu Themes</h5>
            <div class="layout-themes" v-if="d_colorScheme === 'light'">
                <div v-for="theme in menuThemes" :key="theme.name">
                    <a style="cursor: pointer" @click="changeMenuTheme(theme.name, theme.logoColor, theme.componentTheme)" :title="theme.name" :style="{ 'background-color': theme.color }"></a>
                </div>
            </div>
            <div v-if="d_colorScheme !== 'light'">
                <p>Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>
            </div>

            <hr />

            <h5>Component Themes</h5>
            <div class="layout-themes">
                <div v-for="theme in componentThemes" :key="theme.name">
                    <a style="cursor: pointer" @click="changeComponentTheme(theme.name)" :title="theme.name" :style="{ 'background-color': theme.color }"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppConfig",
    emits: ["config-button-click", "config-click", "update:layoutMode", "update:menuTheme", "update:colorScheme"],
    props: {
        configActive: {
            type: Boolean,
            default: null,
        },
        configClick: {
            type: Boolean,
            default: null,
        },
        colorScheme: String,
        menuTheme: String,
        layoutMode: String
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
            logoColor: 'white',
            d_colorScheme: this.colorScheme,
            d_menuMode: this.layoutMode
        };
    },
    computed: {
        rippleActive() {
            return this.$primevue.config.ripple;
        },
        inputStyle() {
            return this.$appState.inputStyle;
        },
    },
    methods: {
        changeComponentTheme(theme) {
            this.changeStyleSheetUrl("theme-css", theme, 3);
        },
        onConfigButtonClick(event) {
            this.$emit("config-button-click", event);
            event.preventDefault();
        },
        onConfigClick(event) {
            this.$emit("config-click", event);
        },
        onChange(value) {
            this.$appState.inputStyle = value;
        },
        onRippleChange(value) {
            this.$primevue.config.ripple = value;
        },
        changeMenuMode(mode) {
            this.$emit("update:layoutMode", mode);
        },
        changeMenuTheme(name, logoColor, componentTheme) {
            this.$emit("update:menuTheme", "layout-sidebar-" + name);
            this.changeStyleSheetUrl("theme-css", componentTheme, 2);

            const appLogoLink = document.getElementById("app-logo");
            const appLogoUrl = `assets/layout/images/logo-${logoColor === 'dark' ? 'dark' : 'white'}.svg`;

            if (appLogoLink) {
                appLogoLink.src = appLogoUrl;
            }
            this.logoColor = logoColor;
        },
        changeColorScheme(scheme) {
            this.$emit("update:colorScheme", scheme);
            this.changeStyleSheetUrl("layout-css", "layout-" + scheme + ".css", 1);
            this.changeStyleSheetUrl("theme-css", "theme-" + scheme + ".css", 1);
            this.changeLogo();
        },
        changeStyleSheetUrl(id, value, from) {
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
        changeLogo() {
            const appLogoLink = document.getElementById("app-logo");
            const mobileLogoLink = document.getElementById("logo-mobile");
            const invoiceLogoLink = document.getElementById("invoice-logo");
            const footerLogoLink = document.getElementById("footer-logo");
            const logoUrl = `assets/layout/images/logo-${this.d_colorScheme === 'light' ? 'dark' : 'white'}.svg`;

            if (appLogoLink) {
                appLogoLink.src = `assets/layout/images/logo-${this.d_colorScheme === 'light' ? this.logoColor : 'white'}.svg`;
            }

            if (mobileLogoLink) {
                mobileLogoLink.src = logoUrl;
            }

            if (invoiceLogoLink) {
                invoiceLogoLink.src = logoUrl;
            }

            if (footerLogoLink) {
                footerLogoLink.src = logoUrl;
            }
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
        }
    },
};
</script>
