<template>
    <div id="layout-config">
        <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" @click="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" :class="{ 'layout-config-active': configActive }" @click="onConfigClick">
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="static" v-model="d_menuMode" inputId="mode1" @change="changeMenuMode('static')"></RadioButton>
                <label for="mode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="overlay" v-model="d_menuMode" inputId="mode2" @change="changeMenuMode('overlay')"></RadioButton>
                <label for="mode2">Overlay</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="menuMode" value="slim" v-model="d_menuMode" inputId="mode3" @change="changeMenuMode('slim')"></RadioButton>
                <label for="mode3">Slim</label>
            </div>

            <hr />

            <h5>Color Scheme</h5>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="dark" v-model="d_colorScheme" inputId="theme1" @change="changeColorScheme('dark')"></RadioButton>
                <label for="theme1">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="dim" v-model="d_colorScheme" inputId="theme2" @change="changeColorScheme('dim')"></RadioButton>
                <label for="theme2">Dim</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="colorScheme" value="light" v-model="d_colorScheme" inputId="theme3" @change="changeColorScheme('light')"></RadioButton>
                <label for="theme3">Light</label>
            </div>

            <hr />

            <h5>Input Style</h5>
            <div class="p-field-radiobutton">
                <RadioButton name="inputStyle" value="outlined" v-model="inputStyle" inputId="inputStyle1"></RadioButton>
                <label for="inputStyle1">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton name="inputStyle" value="filled" v-model="inputStyle" inputId="inputStyle2"></RadioButton>
                <label for="inputStyle2">Filled</label>
            </div>

            <hr />

            <h5>Ripple Effect</h5>
            <InputSwitch v-model="rippleActive"></InputSwitch>

            <hr />

            <h5>Menu Themes</h5>
            <div class="layout-themes" v-if="d_colorScheme === 'light'">
                <div v-for="theme in menuThemes" :key="theme.name">
                    <a style="cursor: pointer" @click="changeMenuTheme(theme.name, theme.logoColor, theme.componentTheme)" :style="{ 'background-color': theme.color }"></a>
                </div>
            </div>
            <div v-if="d_colorScheme !== 'light'">
                <p>Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>
            </div>

            <hr />

            <h5>Component Themes</h5>
            <div class="layout-themes">
                <div v-for="theme in componentThemes" :key="theme.name">
                    <a style="cursor: pointer" @click="changeComponentTheme(theme.name)" :style="{ 'background-color': theme.color }"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        colorScheme: String,
        menuTheme: String,
        layoutMode: String,
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
            d_colorScheme: this.colorScheme,
            d_menuMode: this.layoutMode,
        };
    },
    computed: {
        rippleActive: {
            get() {
                return this.$primevue.ripple;
            },
            set(value) {
                this.$primevue.ripple = value;
            },
        },
        inputStyle: {
            get() {
                return this.$appState.inputStyle;
            },
            set(value) {
                this.$appState.inputStyle = value;
            },
        },
    },
    methods: {
        changeColorScheme(scheme) {
            this.$emit("color-scheme-change", scheme);
        },

        changeMenuTheme(name, logoColor, componentTheme) {
            this.$emit("menu-theme-change", "layout-sidebar-" + name, logoColor, componentTheme);
        },

        changeComponentTheme(theme) {
            this.$emit("component-theme-change", "theme-css", theme, 3);
        },

        onConfigButtonClick(event) {
            this.$emit("config-button-click", event);
            event.preventDefault();
        },

        onConfigClick(event) {
            this.$emit("config-click", event);
        },

        changeMenuMode(mode) {
            this.$emit("menu-mode-change", mode);
        },
    },
};
</script>