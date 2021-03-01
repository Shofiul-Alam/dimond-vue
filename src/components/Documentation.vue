<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card docs">
                <h4>Current Version</h4>
                <p>Vue 3.0.2 and PrimeVue 3.x</p>

                <h4>Dependencies</h4>
				<p>
					Diamond has no direct dependency other than PrimeVue. More
					information about dependencies is available at
					<a href="https://www.primefaces.org/primevue-3-0-0-final-released-for-vue-3/">PrimeVue 3.0.0 Is Ready For PrimeTime</a>
					article.
				</p>

                <h4>Getting Started</h4>
                <p>Diamond is a true native application template for Vue and is distributed as a CLI project. In case CLI is not installed already, use the command below to set it up.</p>
<pre v-code><code>
npm install -g @vue/cli

# OR

yarn global add @vue/cli

</code></pre>

                <p>Once CLI is ready in your system, extract the contents of the Diamond zip file distribution, cd to the directory and install the libraries from npm.</p>

<pre v-code><code>
cd diamond
npm install
npm run serve

</code></pre>

                <p>The application should run at http://localhost:8080/, you may now start with the development of your application.</p>

				<h4>Important CLI Commands</h4>
				<p>Following commands are derived from CLI.</p>

<pre v-code><code>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.

</code></pre>

                <h4>Structure</h4>
                <p>Diamond consists of 3 main parts; the application layout, layout resources and theme resources for PrimeVue components. <i>App.vue</i> inside app folder is the html
					template for the base layout, required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.</p>

                <h4>Template</h4>
                <p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components such as topbar, content, menu and footer. Here is template of the
                    <i>App.vue</i> component that implements the logic such as menu state, layout modes and other configurable options.
                </p>

<pre v-code><code>
&lt;template&gt;
    &lt;div :class="containerClass" data-theme="colorScheme" @click="onDocumentClick"&gt;
        &lt;div class="layout-content-wrapper"&gt;
            &lt;AppTopBar :topbarNotificationMenuActive="topbarNotificationMenuActive" :topbarUserMenuActive="topbarUserMenuActive" @menu-button-click="onMenuButtonClick"
                        @search-click="toggleSearch" @topbar-notification="onTopbarNotificationMenuButtonClick" @topbar-user-menu="onTopbarUserMenuButtonClick"
                        @right-menu-click="onRightMenuButtonClick" @right-menubutton-click="onRightMenuButtonClick"&gt;&lt;/AppTopBar&gt;

            &lt;div class="layout-content"&gt;
                &lt;router-view/&gt;
            &lt;/div&gt;

            &lt;AppFooter/&gt;
        &lt;/div&gt;

        &lt;AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" :mobileMenuActive="staticMenuMobileActive" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"&gt;&lt;/AppMenu&gt;

        &lt;AppRightMenu :rightPanelMenuActive="rightPanelMenuActive" @rightmenu-click="onRightMenuClick"&gt;&lt;/AppRightMenu&gt;

        &lt;AppConfig v-model:configActive="configActive" v-model:layoutMode="layoutMode" v-model:menuTheme="menuTheme" v-model:colorScheme="colorScheme" @config-click="onConfigClick" @config-button-click="onConfigButtonClick"&gt;&lt;/AppConfig&gt;

        &lt;AppSearch :searchActive="searchActive" @search-click="onSearchClick" @search-hide="onSearchHide"/&gt;

        &lt;div class="layout-mask modal-in"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

</code></pre>

                <h4>Menu</h4>
                <p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeVue MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.vue</i> file and define your own model as a nested structure using the menu property.
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>
<div style="overflow: auto; height: 400px">
<pre v-code.script><code>
data() {
    return {
        menu : [
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
                    {label: "Button", icon: "pi pi-fw pi-mobile", to: "/button"},
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
                    {label: "Widgets", icon:"pi pi-fw pi-star-o", to:"/widgets"},
                    {label: "Grid System", icon:"pi pi-fw pi-th-large", to:"/grid"},
                    {label: "Spacing", icon:"pi pi-fw pi-arrow-right", to:"/spacing"},
                    {label: "Typography", icon:"pi pi-fw pi-align-center", to:"/typography"},
                    {label: "Text", icon:"pi pi-fw pi-pencil", to:"/text"},
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
        ]
    }
}

</code></pre>
</div>

                <h4>Integration with an Existing CLI Project</h4>
				<p>
					To setup Diamond in an existing project, follow the steps
					below;
				</p>

				<ul>
					<li>Copy the <i>public/assets</i> folder to your projects folder with the same name</li>
					<li>Copy all <i>src/App*.vue</i> files to the src folder of your application.</li>
				</ul>

				<p>Install PrimeVue</p>

<pre v-code><code>
npm install primevue@latest --save
npm install	primeicons@latest --save

</code></pre>

                <p>Add PrimeVue CSS at styles section in main.js.</p>

<pre v-code><code>
import 'primevue/resources/primevue.min.css';   	//required: PrimeVue components
import 'primeicons/primeicons.css';	 				//required: PrimeIcons
import './App.scss'; 	                            //your styles and overrides

</code></pre>

                <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on the fly by changing the path however
                    if this is not a requirement, you may also add them to the styles configuration above so they go inside the bundle.</p>

				<h4>Theme</h4>
				<p>Diamond provides 30 PrimeVue themes out of the box. Setup of a theme is simple by including the css of theme to your
					bundle that are located inside assets/theme folder such as assets/theme/theme-amber-teal.css.</p>

                <ul>
					<li>blue-light</li>
					<li>blue-dark</li>
					<li>blue-dim</li>
					<li>cyan-light</li>
					<li>cyan-dark</li>
					<li>cyan-dim</li>
					<li>deeppurple-light</li>
					<li>deeppurple-dark</li>
					<li>deeppurple-dim</li>
					<li>green-light</li>
					<li>green-dark</li>
					<li>green-dim</li>
					<li>indigo-light</li>
					<li>indigo-dark</li>
					<li>indigo-dim</li>
					<li>lightgreen-light</li>
					<li>lightgreen-dark</li>
					<li>lightgreen-dim</li>
					<li>orange-light</li>
					<li>orange-dark</li>
					<li>orange-dim</li>
					<li>pink-light</li>
					<li>pink-dark</li>
					<li>pink-dim</li>
					<li>purple-light</li>
					<li>purple-dark</li>
					<li>purple-dim</li>
					<li>teal-light</li>
					<li>teal-dark</li>
					<li>teal-dim</li>
				</ul>

                <p>A custom theme can be developed by the following steps.</p>
				<ul>
					<li>Choose a custom theme name such as "mytheme".</li>
					<li>Create a folder named "mytheme" under <i>assets/theme</i> folder.</li>
					<li>Create a file such as theme.scss under <i>assets/theme/mytheme</i> folder.</li>
					<li>Define the variables listed below in your file and import the <i>../../sass/theme/_theme.scss</i> file.</li>
					<li>Build the scss to generate css</li>
					<li>Include the generated theme.css to your page.</li>
				</ul>

                <p>Here are the variables required to create a sample theme.</p>

<pre v-code.css><code>
$primaryColor: #2196F3;
$primaryLightColor: scale-color($primaryColor, $lightness: 60%) !default;
$primaryDarkColor: scale-color($primaryColor, $lightness: -10%) !default;
$primaryDarkerColor: scale-color($primaryColor, $lightness: -20%) !default;
$primaryTextColor: #ffffff;

$highlightBg: #E3F2FD;
$highlightTextColor: #495057;

@import '../../sass/theme/_theme_light';

</code></pre>

                <p>An example sass command to compile the css would be;</p>

<pre v-code><code>
sass src/assets/theme/mytheme/theme.scss:src/assets/theme/mytheme/theme.css

</code></pre>

                <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                    so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<pre v-code><code>
sass --watch public/assets:public/assets

</code></pre>

                <p>Same can also be applied to layout itself;</p>
				<ul>
					<li>Choose a layout name such as layout-myown.</li>
					<li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
					<li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>
					<li>Build the scss to generate css</li>
					<li>Serve the css by importing it using a link tag or a bundler.</li>
				</ul>

				<p>Here are the variables required to create a layout.</p>

<pre v-code><code>
@import '../../sass/layout/_layout';

</code></pre>

                <h4>SASS Variables</h4>
				<p>Both the theme and layout provides various variables to customize the design.</p>

				<h5>sass/variables/layout/_common.scss</h5>
				<p>Common variables for light, dark and dim application layout.</p>

<pre v-code.css><code>
$fontSize:14px !default;
$fontFamily:"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !default;
$transitionDuration:.2s !default;
$animationDuration:.4s !default;
$animationTimingFunction:cubic-bezier(.05,.74,.2,.99) !default;
$letterSpacing:normal !default;
$borderRadius:4px !default;
$tabletBreakpoint:991px !default;
$phoneBreakpoint:576px !default;

</code></pre>


                <h5>sass/variables/layout/_layout_light.scss</h5>
				<p>Variables of the light theme layout.</p>
<pre v-code.css><code>
@import '_common';

$bodyBg: #f8f9fa !default;
$textColor:#495057 !default;
$textSecondaryColor:#6c757d !default;
$dividerColor:#dee2e6 !default;
$itemHoverBg:#e9ecef !default;
$focusShadow:0 0 0 0.2rem #BBDEFB !default;
$linkColor: #1976D2 !default;
$overlayBorder:0 none !default;
$overlayShadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;

//card
$cardBg: #ffffff !default;
$cardBorder: 0 none !default;

//topbar
$topbarBg: #ffffff !default;
$topbarBottomBorder: 1px solid $dividerColor !default;
$topbarTextColor: $textColor !default;
$topbarIconBg: #f8f9fa !default;
$topbarIconHoverBg: #e9ecef !default;

//accent
$accentColor: #1976D2 !default;
$accentTextColor: #ffffff !default;

//sidebar
$sidebarWidth: 16rem !default;
$slimSidebarWidth: 6rem !default;

//search
$searchBg:#adb5bd !default;
$searchBorder: 0 none !default;

//footer
$footerBg: #ffffff !default;
$footerBorder: 1px solid $dividerColor !default;

//sidebar right
$rightSidebarWidth: 16rem !default;
$rightSidebarBg: #ffffff !default;

</code></pre>

                <h5>sass/variables/theme/_theme_light.scss</h5>
				<p>Variables of the light component theme, see the <a href="https://www.primefaces.org/designer/api/primevue/2.0.1/">Theme Designer API</a> for documentation.</p>


<div style="height: 400px; overflow: auto">
<pre v-code.css><code>
//reused color variables
$shade000:#ffffff !default;    //surface
$shade100:#f8f9fa !default;    //header background
$shade200:#e9ecef !default;    //hover background
$shade300:#dee2e6 !default;    //border, divider
$shade400:#ced4da !default;    //input border
$shade500:#adb5bd !default;    //input icon
$shade600:#6c757d !default;    //text secondary color
$shade700:#495057 !default;    //text color
$shade800:#343a40 !default;    //unused
$shade900:#212529 !default;    //unused

//global
$fontFamily:"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !default;
$fontSize:1rem !default;
$fontWeight:normal !default;
$textColor:$shade700 !default;
$textSecondaryColor:$shade600 !default;
$borderRadius:4px !default;
$transitionDuration:.2s !default;
$formElementTransition:background-color $transitionDuration, color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration !default;
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration !default;
$listItemTransition:box-shadow $transitionDuration !default;
$primeIconFontSize:1rem !default;
$divider:1px solid $shade300 !default;
$inlineSpacing:.5rem !default;
$disabledOpacity:.6 !default;
$maskBg:rgba(0, 0, 0, 0.4) !default;
$loadingIconFontSize:2rem !default;
$errorColor:#f44336 !default;

//scale
$scaleSM:0.875 !default;
$scaleLG:1.25 !default;

//focus
$focusOutlineColor:$primaryLightColor !default;
$focusOutline:0 none !default;
$focusOutlineOffset:0 !default;
$focusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//action icons
$actionIconWidth:2rem !default;
$actionIconHeight:2rem !default;
$actionIconBg:transparent !default;
$actionIconBorder:0 none !default;
$actionIconColor:$shade600 !default;
$actionIconHoverBg:$shade200 !default;
$actionIconHoverBorderColor:transparent !default;
$actionIconHoverColor:$shade700 !default;
$actionIconBorderRadius:50% !default;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:.5rem .5rem !default;
$inputTextFontSize:1rem !default;

$inputBg:$shade000 !default;
$inputTextColor:$shade700 !default;
$inputIconColor:$shade600 !default;
$inputBorder:1px solid $shade400 !default;
$inputHoverBorderColor:$primaryColor !default;
$inputFocusBorderColor:$primaryColor !default;
$inputErrorBorderColor:$errorColor !default;
$inputPlaceholderTextColor:$shade600 !default;
$inputFilledBg:$shade100 !default;
$inputFilledHoverBg:$inputFilledBg !default;
$inputFilledFocusBg:$shade000 !default;

//input groups
$inputGroupBg:$shade200 !default;
$inputGroupTextColor:$shade600 !default;
$inputGroupAddOnMinWidth:2.357rem !default;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:$shade000 !default;
$inputListTextColor:$shade700 !default;
$inputListBorder:$inputBorder !default;
$inputListPadding:.5rem 0 !default;
$inputListItemPadding:.5rem 1rem !default;
$inputListItemBg:transparent !default;
$inputListItemTextColor:$shade700 !default;
$inputListItemHoverBg:$shade200 !default;
$inputListItemTextHoverColor:$shade700 !default;
$inputListItemBorder:0 none !default;
$inputListItemBorderRadius:0 !default;
$inputListItemMargin:0 !default;
$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor !default;
$inputListHeaderPadding:.5rem 1rem !default;
$inputListHeaderMargin:0 !default;
$inputListHeaderBg:$shade100 !default;
$inputListHeaderTextColor:$shade700 !default;
$inputListHeaderBorder:0 none !default;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg !default;
$inputOverlayHeaderBg:$inputListHeaderBg !default;
$inputOverlayBorder:0 none !default;
$inputOverlayShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;

//password
$passwordMeterBg:$shade300 !default;
$passwordWeakBg:#D32F2F !default;
$passwordMediumBg:#FBC02D !default;
$passwordStrongBg:#689F38 !default;

//button
$buttonPadding:.5rem 1rem !default;
$buttonIconOnlyWidth:2.357rem !default;
$buttonIconOnlyPadding:.5rem 0 !default;
$buttonBg:$primaryColor !default;
$buttonTextColor:$primaryTextColor !default;
$buttonBorder:1px solid $primaryColor !default;
$buttonHoverBg:$primaryDarkColor !default;
$buttonTextHoverColor:$primaryTextColor !default;
$buttonHoverBorderColor:$primaryDarkColor !default;
$buttonActiveBg:$primaryDarkerColor !default;
$buttonTextActiveColor:$primaryTextColor !default;
$buttonActiveBorderColor:$primaryDarkerColor !default;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !default;
$roundedButtonBorderRadius:2rem !default;

$textButtonHoverBgOpacity:.04 !default;
$textButtonActiveBgOpacity:.16 !default;
$outlinedButtonBorder:1px solid !default;
$plainButtonTextColor:$textSecondaryColor !default;
$plainButtonHoverBgColor:$shade200 !default;
$plainButtonActiveBgColor:$shade300 !default;

$secondaryButtonBg:#607D8B !default;
$secondaryButtonTextColor:#ffffff !default;
$secondaryButtonBorder:1px solid $secondaryButtonBg !default;
$secondaryButtonHoverBg:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonTextHoverColor:$secondaryButtonTextColor !default;
$secondaryButtonHoverBorderColor:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonActiveBg:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonTextActiveColor:$secondaryButtonTextColor !default;
$secondaryButtonActiveBorderColor:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonFocusShadow:0 0 0 0.2rem scale-color($secondaryButtonBg, $lightness: 60%) !default;

$infoButtonBg:#0288D1 !default;
$infoButtonTextColor:#ffffff !default;
$infoButtonBorder:1px solid $infoButtonBg !default;
$infoButtonHoverBg:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonTextHoverColor:$infoButtonTextColor !default;
$infoButtonHoverBorderColor:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonActiveBg:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonTextActiveColor:$infoButtonTextColor !default;
$infoButtonActiveBorderColor:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonFocusShadow:0 0 0 0.2rem scale-color($infoButtonBg, $lightness: 60%) !default;

$successButtonBg:#689F38 !default;
$successButtonTextColor:#ffffff !default;
$successButtonBorder:1px solid $successButtonBg !default;
$successButtonHoverBg:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonTextHoverColor:$successButtonTextColor !default;
$successButtonHoverBorderColor:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonActiveBg:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonTextActiveColor:$successButtonTextColor !default;
$successButtonActiveBorderColor:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonFocusShadow:0 0 0 0.2rem scale-color($successButtonBg, $lightness: 60%) !default;

$warningButtonBg:#FBC02D !default;
$warningButtonTextColor:#212529 !default;
$warningButtonBorder:1px solid $warningButtonBg !default;
$warningButtonHoverBg:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonTextHoverColor:$warningButtonTextColor !default;
$warningButtonHoverBorderColor:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonActiveBg:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonTextActiveColor:$warningButtonTextColor !default;
$warningButtonActiveBorderColor:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonFocusShadow:0 0 0 0.2rem scale-color($warningButtonBg, $lightness: 60%) !default;

$helpButtonBg:#9C27B0 !default;
$helpButtonTextColor:#ffffff !default;
$helpButtonBorder:1px solid $helpButtonBg !default;
$helpButtonHoverBg:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonTextHoverColor:$helpButtonTextColor !default;
$helpButtonHoverBorderColor:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonActiveBg:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonTextActiveColor:$helpButtonTextColor !default;
$helpButtonActiveBorderColor:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonFocusShadow:0 0 0 0.2rem scale-color($helpButtonBg, $lightness: 60%) !default;

$dangerButtonBg:#D32F2F !default;
$dangerButtonTextColor:#ffffff !default;
$dangerButtonBorder:1px solid $dangerButtonBg !default;
$dangerButtonHoverBg:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonTextHoverColor:$dangerButtonTextColor !default;
$dangerButtonHoverBorderColor:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonActiveBg:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonTextActiveColor:$dangerButtonTextColor !default;
$dangerButtonActiveBorderColor:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonFocusShadow:0 0 0 0.2rem scale-color($dangerButtonBg, $lightness: 60%) !default;

$linkButtonColor:$primaryDarkerColor !default;
$linkButtonHoverColor:$primaryDarkerColor !default;
$linkButtonTextHoverDecoration:underline !default;
$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//checkbox
$checkboxWidth:20px !default;
$checkboxHeight:20px !default;
$checkboxBorder:2px solid $shade400 !default;
$checkboxIconFontSize:14px !default;
$checkboxActiveBorderColor:$primaryColor !default;
$checkboxActiveBg:$primaryColor !default;
$checkboxIconActiveColor:$primaryTextColor !default;
$checkboxActiveHoverBg:$primaryDarkerColor !default;
$checkboxIconActiveHoverColor:$primaryTextColor !default;
$checkboxActiveHoverBorderColor:$primaryDarkerColor !default;

//radiobutton
$radiobuttonWidth:20px !default;
$radiobuttonHeight:20px !default;
$radiobuttonBorder:2px solid $shade400 !default;
$radiobuttonIconSize:12px !default;
$radiobuttonActiveBorderColor:$primaryColor !default;
$radiobuttonActiveBg:$primaryColor !default;
$radiobuttonIconActiveColor:$primaryTextColor !default;
$radiobuttonActiveHoverBg:$primaryDarkerColor !default;
$radiobuttonIconActiveHoverColor:$primaryTextColor !default;
$radiobuttonActiveHoverBorderColor:$primaryDarkerColor !default;

//colorpicker
$colorPickerPreviewWidth:2rem !default;
$colorPickerPreviewHeight:2rem !default;
$colorPickerBg:#323232 !default;
$colorPickerBorderColor:#191919 !default;
$colorPickerHandleColor:$shade000 !default;

//togglebutton
$toggleButtonBg:$inputBg !default;
$toggleButtonBorder:1px solid $shade400 !default;
$toggleButtonTextColor:$shade700 !default;
$toggleButtonIconColor:$shade600 !default;
$toggleButtonHoverBg:$shade200 !default;
$toggleButtonHoverBorderColor:$shade400 !default;
$toggleButtonTextHoverColor:$shade700 !default;
$toggleButtonIconHoverColor:$shade600 !default;
$toggleButtonActiveBg:$primaryColor !default;
$toggleButtonActiveBorderColor:$primaryColor !default;
$toggleButtonTextActiveColor:$primaryTextColor !default;
$toggleButtonIconActiveColor:$primaryTextColor !default;
$toggleButtonActiveHoverBg:$primaryDarkColor !default;
$toggleButtonActiveHoverBorderColor:$primaryDarkColor !default;
$toggleButtonTextActiveHoverColor:$primaryTextColor !default;
$toggleButtonIconActiveHoverColor:$primaryTextColor !default;

//inplace
$inplacePadding:$inputPadding !default;
$inplaceHoverBg:$shade200 !default;
$inplaceTextHoverColor:$shade700 !default;

//rating
$ratingIconFontSize:1.143rem !default;
$ratingCancelIconColor:#e74c3c !default;
$ratingCancelIconHoverColor:#c0392b !default;
$ratingStarIconOffColor:$shade700 !default;
$ratingStarIconOnColor:$primaryColor !default;
$ratingStarIconHoverColor:$primaryColor !default;

//slider
$sliderBg:$shade300 !default;
$sliderBorder:0 none !default;
$sliderHorizontalHeight:.286rem !default;
$sliderVerticalWidth:0.286rem !default;
$sliderHandleWidth:1.143rem !default;
$sliderHandleHeight:1.143rem !default;
$sliderHandleBg:$shade000 !default;
$sliderHandleBorder:2px solid $primaryColor !default;
$sliderHandleBorderRadius:50% !default;
$sliderHandleHoverBorderColor:$primaryColor !default;
$sliderHandleHoverBg:$primaryColor !default;
$sliderRangeBg:$primaryColor !default;

//calendar
$calendarTableMargin:.5rem 0 !default;
$calendarPadding:.5rem !default;
$calendarBg:$shade000 !default;
$calendarInlineBg:$calendarBg !default;
$calendarTextColor:$shade700 !default;
$calendarBorder:$inputListBorder !default;
$calendarOverlayBorder:$inputOverlayBorder !default;

$calendarHeaderPadding:.5rem !default;
$calendarHeaderBg:$shade000 !default;
$calendarInlineHeaderBg:$calendarBg !default;
$calendarHeaderBorder:1px solid $shade300 !default;
$calendarHeaderTextColor:$shade700 !default;
$calendarHeaderFontWeight:600 !default;
$calendarHeaderCellPadding:.5rem !default;

$calendarCellDatePadding:.5rem !default;
$calendarCellDateWidth:2.5rem !default;
$calendarCellDateHeight:2.5rem !default;
$calendarCellDateBorderRadius:50% !default;
$calendarCellDateBorder:1px solid transparent !default;
$calendarCellDateHoverBg:$shade200 !default;
$calendarCellDateTodayBg:$shade400 !default;
$calendarCellDateTodayBorderColor:transparent !default;
$calendarCellDateTodayTextColor:$shade700 !default;

$calendarButtonBarPadding:1rem 0 !default;
$calendarTimePickerPadding:.5rem !default;
$calendarTimePickerElementPadding:0 .5rem !default;
$calendarTimePickerTimeFontSize:1.25rem !default;

$calendarBreakpoint:769px !default;
$calendarCellDatePaddingSM:0 !default;

//input switch
$inputSwitchWidth:3rem !default;
$inputSwitchHeight:1.75rem !default;
$inputSwitchBorderRadius:30px !default;
$inputSwitchHandleWidth:1.250rem !default;
$inputSwitchHandleHeight:1.250rem !default;
$inputSwitchHandleBorderRadius:50% !default;
$inputSwitchSliderPadding:.25rem !default;
$inputSwitchSliderOffBg:$shade400 !default;
$inputSwitchHandleOffBg:$shade000 !default;
$inputSwitchSliderOffHoverBg:scale-color($shade400, $lightness: -10%) !default;
$inputSwitchSliderOnBg:$primaryColor !default;
$inputSwitchSliderOnHoverBg:$primaryDarkColor !default;
$inputSwitchHandleOnBg:$shade000 !default;

//panel
$panelHeaderBorder:1px solid $shade300 !default;
$panelHeaderBg:$shade100 !default;
$panelHeaderTextColor:$shade700 !default;
$panelHeaderFontWeight:600 !default;
$panelHeaderPadding:1rem !default;
$panelToggleableHeaderPadding:.5rem 1rem !default;

$panelHeaderHoverBg:$shade200 !default;
$panelHeaderHoverBorderColor:$shade300 !default;
$panelHeaderTextHoverColor:$shade700 !default;

$panelContentBorder:1px solid $shade300 !default;
$panelContentBg:$shade000 !default;
$panelContentTextColor:$shade700 !default;
$panelContentPadding:1rem !default;

$panelFooterBorder:1px solid $shade300 !default;
$panelFooterBg:$shade000 !default;
$panelFooterTextColor:$shade700 !default;
$panelFooterPadding:0.5rem 1rem !default;

//accordion
$accordionSpacing:0 !default;
$accordionHeaderBorder:$panelHeaderBorder !default;
$accordionHeaderBg:$panelHeaderBg !default;
$accordionHeaderTextColor:$panelHeaderTextColor !default;
$accordionHeaderFontWeight:$panelHeaderFontWeight !default;
$accordionHeaderPadding:$panelHeaderPadding !default;

$accordionHeaderHoverBg:$shade200 !default;
$accordionHeaderHoverBorderColor:$shade300 !default;
$accordionHeaderTextHoverColor:$shade700 !default;

$accordionHeaderActiveBg:$panelHeaderBg !default;
$accordionHeaderActiveBorderColor:$shade300 !default;
$accordionHeaderTextActiveColor:$shade700 !default;

$accordionHeaderActiveHoverBg:$shade200 !default;
$accordionHeaderActiveHoverBorderColor:$shade300 !default;
$accordionHeaderTextActiveHoverColor:$shade700 !default;

$accordionContentBorder:$panelContentBorder !default;
$accordionContentBg:$panelContentBg !default;
$accordionContentTextColor:$panelContentTextColor !default;
$accordionContentPadding:$panelContentPadding !default;

//tabview
$tabviewNavBorder:1px solid $shade300 !default;
$tabviewNavBorderWidth:0 0 2px 0 !default;
$tabviewNavBg:$shade000 !default;

$tabviewHeaderSpacing:0 !default;
$tabviewHeaderBorder:solid $shade300 !default;
$tabviewHeaderBorderWidth:0 0 2px 0 !default;
$tabviewHeaderBorderColor:transparent transparent $shade300 transparent !default;
$tabviewHeaderBg:$shade000 !default;
$tabviewHeaderTextColor:$shade600 !default;
$tabviewHeaderFontWeight:$panelHeaderFontWeight !default;
$tabviewHeaderPadding:$panelHeaderPadding !default;
$tabviewHeaderMargin:0 0 -2px 0 !default;

$tabviewHeaderHoverBg:$shade000 !default;
$tabviewHeaderHoverBorderColor:$shade600 !default;
$tabviewHeaderTextHoverColor:$shade600 !default;

$tabviewHeaderActiveBg:$shade000 !default;
$tabviewHeaderActiveBorderColor:$primaryColor !default;
$tabviewHeaderTextActiveColor:$primaryColor !default;

$tabviewContentBorder:0 none !default;
$tabviewContentBg:$panelContentBg !default;
$tabviewContentTextColor:$panelContentTextColor !default;
$tabviewContentPadding:$panelContentPadding !default;

//upload
$fileUploadProgressBarHeight:.25rem !default;
$fileUploadContentPadding:2rem 1rem !default;

//scrollpanel
$scrollPanelTrackBorder:0 none !default;
$scrollPanelTrackBg:$shade100 !default;

//card
$cardBodyPadding:1rem !default;
$cardTitleFontSize:1.5rem !default;
$cardTitleFontWeight:700 !default;
$cardSubTitleFontWeight:400 !default;
$cardSubTitleColor:$shade600 !default;
$cardContentPadding:1rem 0 !default;
$cardFooterPadding:1rem 0 0 0 !default;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12) !default;

//editor
$editorToolbarBg:$panelHeaderBg !default;
$editorToolbarBorder:$panelHeaderBorder !default;
$editorToolbarPadding:$panelHeaderPadding !default;
$editorToolbarIconColor:$textSecondaryColor !default;
$editorToolbarIconHoverColor:$textColor !default;
$editorIconActiveColor:$primaryColor !default;
$editorContentBorder:$panelContentBorder !default;
$editorContentBg:$panelContentBg !default;

//paginator
$paginatorBg:$shade000 !default;
$paginatorTextColor:$shade600 !default;
$paginatorBorder:solid $shade200 !default;
$paginatorBorderWidth:0 !default;
$paginatorPadding:.5rem 1rem !default;
$paginatorElementWidth:$buttonIconOnlyWidth !default;
$paginatorElementHeight:$buttonIconOnlyWidth !default;
$paginatorElementBg:transparent !default;
$paginatorElementBorder:0 none !default;
$paginatorElementIconColor:$shade600 !default;
$paginatorElementHoverBg:$shade200 !default;
$paginatorElementHoverBorderColor:transparent !default;
$paginatorElementIconHoverColor:$shade700 !default;
$paginatorElementBorderRadius:$borderRadius !default;
$paginatorElementMargin:.143rem !default;
$paginatorElementPadding:0 !default;

//table
$tableHeaderBorder:1px solid $shade200 !default;
$tableHeaderBorderWidth:1px 0 1px 0 !default;
$tableHeaderBg:$shade100 !default;
$tableHeaderTextColor:$shade700 !default;
$tableHeaderFontWeight:600 !default;
$tableHeaderPadding:1rem 1rem !default;

$tableHeaderCellPadding:1rem 1rem !default;
$tableHeaderCellBg:$shade100 !default;
$tableHeaderCellTextColor:$shade700 !default;
$tableHeaderCellFontWeight:600 !default;
$tableHeaderCellBorder:1px solid $shade200 !default;
$tableHeaderCellBorderWidth:0 0 1px 0 !default;
$tableHeaderCellHoverBg:$shade200 !default;
$tableHeaderCellTextHoverColor:$shade700 !default;
$tableHeaderCellIconColor:$shade600 !default;
$tableHeaderCellIconHoverColor:$shade600 !default;
$tableHeaderCellHighlightBg:$shade100 !default;
$tableHeaderCellHighlightTextColor:$primaryColor !default;
$tableHeaderCellHighlightHoverBg:$shade200 !default;
$tableHeaderCellHighlightTextHoverColor:$primaryColor !default;
$tableSortableColumnBadgeSize:1.143rem !default;

$tableBodyRowBg:$shade000 !default;
$tableBodyRowTextColor:$shade700 !default;
$tableBodyRowEvenBg:scale-color($tableBodyRowBg, $lightness: -1%) !default;
$tableBodyRowHoverBg:$shade200 !default;
$tableBodyRowTextHoverColor:$shade700 !default;
$tableBodyCellBorder:1px solid $shade200 !default;
$tableBodyCellBorderWidth:0 0 1px 0 !default;
$tableBodyCellPadding:1rem 1rem !default;

$tableFooterCellPadding:1rem 1rem !default;
$tableFooterCellBg:$shade100 !default;
$tableFooterCellTextColor:$shade700 !default;
$tableFooterCellFontWeight:600 !default;
$tableFooterCellBorder:1px solid $shade200 !default;
$tableFooterCellBorderWidth:0 0 1px 0 !default;
$tableResizerHelperBg:$primaryColor !default;

$tableFooterBorder:1px solid $shade200 !default;
$tableFooterBorderWidth:0 0 1px 0 !default;
$tableFooterBg:$shade100 !default;
$tableFooterTextColor:$shade700 !default;
$tableFooterFontWeight:600 !default;
$tableFooterPadding:1rem 1rem !default;

$tableCellContentAlignment:left !default;
$tableTopPaginatorBorderWidth:0 0 1px 0 !default;
$tableBottomPaginatorBorderWidth:0 0 1px 0 !default;

$tableScaleSM:0.5 !default;
$tableScaleLG:1.25 !default;

//dataview
$dataViewContentPadding:0 !default;
$dataViewContentBorder:0 none !default;
$dataViewListItemBorder:solid $shade200 !default;
$dataViewListItemBorderWidth:0 0 1px 0 !default;

//orderlist, picklist
$orderListBreakpoint:769px !default;
$pickListBreakpoint:769px !default;

//schedule
$fullCalendarEventBg:$primaryDarkColor !default;
$fullCalendarEventBorder:1px solid $primaryDarkColor !default;
$fullCalendarEventTextColor:$primaryTextColor !default;

//tree
$treeContainerPadding:0.286rem !default;
$treeNodePadding:0.143rem !default;
$treeNodeContentPadding:.5rem !default;
$treeNodeChildrenPadding:0 0 0 1rem !default;
$treeNodeIconColor:$shade600 !default;

//timeline
$timelineVerticalEventContentPadding:0 1rem !default;
$timelineHorizontalEventContentPadding:1rem 0 !default;
$timelineEventMarkerWidth:1rem !default;
$timelineEventMarkerHeight:1rem !default;
$timelineEventMarkerBorderRadius:50% !default;
$timelineEventMarkerBorder:2px solid $primaryColor !default;
$timelineEventMarkerBackground:$shade000 !default;
$timelineEventConnectorSize:2px !default;
$timelineEventColor:$shade300 !default;

//org chart
$organizationChartConnectorColor:$shade300 !default;

//message
$messageMargin:1rem 0 !default;
$messagePadding:1rem 1.5rem !default;
$messageBorderWidth:0 0 0 6px !default;
$messageIconFontSize:1.5rem !default;
$messageTextFontSize:1rem !default;
$messageTextFontWeight:500 !default;

//inline message
$inlineMessagePadding:$inputPadding !default;
$inlineMessageMargin:0 !default;
$inlineMessageIconFontSize:1rem !default;
$inlineMessageTextFontSize:1rem !default;
$inlineMessageBorderWidth:0px !default;

//toast
$toastIconFontSize:2rem !default;
$toastMessageTextMargin:0 0 0 1rem !default;
$toastMargin:0 0 1rem 0 !default;
$toastPadding:1rem !default;
$toastBorderWidth:0 0 0 6px !default;
$toastShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;
$toastOpacity:.9 !default;
$toastTitleFontWeight:700 !default;
$toastDetailMargin:$inlineSpacing 0 0 0 !default;

//severities
$infoMessageBg:#B3E5FC !default;
$infoMessageBorder:solid scale-color($infoMessageBg, $lightness: -50%) !default;
$infoMessageTextColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$infoMessageIconColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$successMessageBg:#C8E6C9 !default;
$successMessageBorder:solid scale-color($successMessageBg, $lightness: -50%) !default;
$successMessageTextColor:scale-color($successMessageBg, $lightness: -75%) !default;
$successMessageIconColor:scale-color($successMessageBg, $lightness: -75%) !default;
$warningMessageBg:#FFECB3 !default;
$warningMessageBorder:solid scale-color($warningMessageBg, $lightness: -50%) !default;
$warningMessageTextColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$warningMessageIconColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$errorMessageBg:#FFCDD2 !default;
$errorMessageBorder:solid scale-color($errorMessageBg, $lightness: -50%) !default;
$errorMessageTextColor:scale-color($errorMessageBg, $lightness: -75%) !default;
$errorMessageIconColor:scale-color($errorMessageBg, $lightness: -75%) !default;

//overlays
$overlayContentBorder:0 none !default;
$overlayContentBg:$panelContentBg !default;
$overlayContainerShadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12) !default;

//dialog
$dialogHeaderBg:$shade000 !default;
$dialogHeaderBorder:0 none !default;
$dialogHeaderTextColor:$shade700 !default;
$dialogHeaderFontWeight:600 !default;
$dialogHeaderFontSize:1.25rem !default;
$dialogHeaderPadding:1.5rem !default;
$dialogContentPadding:0 1.5rem 2rem 1.5rem !default;
$dialogFooterBorder:0 none !default;
$dialogFooterPadding:0 1.5rem 1.5rem 1.5rem !default;

//confirmpopup
$confirmPopupContentPadding:$panelContentPadding;
$confirmPopupFooterPadding:0 1rem 1rem 1rem;

//tooltip
$tooltipBg:$shade700 !default;
$tooltipTextColor:$shade000 !default;
$tooltipPadding:$inputPadding !default;

//steps
$stepsItemBg:$shade000 !default;
$stepsItemBorder:1px solid $shade200 !default;
$stepsItemTextColor:$shade600 !default;
$stepsItemNumberWidth:2rem !default;
$stepsItemNumberHeight:2rem !default;
$stepsItemNumberFontSize:1.143rem !default;
$stepsItemNumberColor:$shade700 !default;
$stepsItemNumberBorderRadius:50% !default;
$stepsItemActiveFontWeight:600 !default;

//progressbar
$progressBarHeight:1.5rem !default;
$progressBarBorder:0 none !default;
$progressBarBg:$shade300 !default;
$progressBarValueBg:$primaryColor !default;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem !default;
$menuBg:$shade000 !default;
$menuBorder:1px solid $shade300 !default;
$menuTextColor:$shade700 !default;
$menuitemPadding:.75rem 1rem !default;
$menuitemBorderRadius:0 !default;
$menuitemTextColor:$shade700 !default;
$menuitemIconColor:$shade600 !default;
$menuitemTextHoverColor:$shade700 !default;
$menuitemIconHoverColor:$shade600 !default;
$menuitemHoverBg:$shade200 !default;
$menuitemTextActiveColor:$shade700 !default;
$menuitemIconActiveColor:$shade600 !default;
$menuitemActiveBg:$shade200 !default;
$menuitemSubmenuIconFontSize:.875rem !default;
$submenuHeaderMargin:0 !default;
$submenuHeaderPadding:.75rem 1rem !default;
$submenuHeaderBg:$shade000 !default;
$submenuHeaderTextColor:$shade700 !default;
$submenuHeaderBorderRadius:0 !default;
$submenuHeaderFontWeight:600 !default;
$overlayMenuBg:$menuBg !default;
$overlayMenuBorder:0 none !default;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;
$verticalMenuPadding:.25rem 0 !default;
$menuSeparatorMargin:.25rem 0 !default;

$breadcrumbPadding:1rem !default;
$breadcrumbBg:$menuBg !default;
$breadcrumbBorder:$menuBorder !default;
$breadcrumbItemTextColor:$menuitemTextColor !default;
$breadcrumbItemIconColor:$menuitemIconColor !default;
$breadcrumbLastItemTextColor:$menuitemTextColor !default;
$breadcrumbLastItemIconColor:$menuitemIconColor !default;
$breadcrumbSeparatorColor:$menuitemTextColor !default;

$horizontalMenuPadding:.5rem !default;
$horizontalMenuBg:$shade100 !default;
$horizontalMenuBorder:$menuBorder !default;
$horizontalMenuTextColor:$menuTextColor !default;
$horizontalMenuRootMenuitemPadding:$menuitemPadding !default;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius !default;
$horizontalMenuRootMenuitemTextColor:$menuitemTextColor !default;
$horizontalMenuRootMenuitemIconColor:$menuitemIconColor !default;
$horizontalMenuRootMenuitemTextHoverColor:$menuitemTextHoverColor !default;
$horizontalMenuRootMenuitemIconHoverColor:$menuitemIconHoverColor !default;
$horizontalMenuRootMenuitemHoverBg:$menuitemHoverBg !default;
$horizontalMenuRootMenuitemTextActiveColor:$menuitemTextActiveColor !default;
$horizontalMenuRootMenuitemIconActiveColor:$menuitemIconActiveColor !default;
$horizontalMenuRootMenuitemActiveBg:$menuitemActiveBg !default;

//badge and tag
$badgeBg:$primaryColor !default;
$badgeTextColor:$primaryTextColor !default;
$badgeMinWidth:1.5rem !default;
$badgeHeight:1.5rem !default;
$badgeFontWeight:700 !default;
$badgeFontSize:.75rem !default;

$tagPadding:.25rem .4rem !default;

//carousel
$carouselIndicatorsPadding:1rem !default;
$carouselIndicatorBg:$shade200 !default;
$carouselIndicatorHoverBg:$shade300 !default;
$carouselIndicatorBorderRadius:0 !default;
$carouselIndicatorWidth:2rem !default;
$carouselIndicatorHeight:.5rem !default;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9) !default;
$galleriaCloseIconMargin:.5rem !default;
$galleriaCloseIconFontSize:2rem !default;
$galleriaCloseIconBg:transparent !default;
$galleriaCloseIconColor:$shade100 !default;
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1) !default;
$galleriaCloseIconHoverColor:$shade100 !default;
$galleriaCloseIconWidth:4rem !default;
$galleriaCloseIconHeight:4rem !default;
$galleriaCloseIconBorderRadius:50% !default;

$galleriaItemNavigatorBg:transparent !default;
$galleriaItemNavigatorColor:$shade100 !default;
$galleriaItemNavigatorMargin:0 .5rem !default;
$galleriaItemNavigatorFontSize:2rem !default;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaItemNavigatorHoverColor:$shade100 !default;
$galleriaItemNavigatorWidth:4rem !default;
$galleriaItemNavigatorHeight:4rem !default;
$galleriaItemNavigatorBorderRadius:$borderRadius !default;

$galleriaCaptionBg:rgba(0,0,0,.5) !default;
$galleriaCaptionTextColor:$shade100 !default;
$galleriaCaptionPadding:1rem !default;

$galleriaIndicatorsPadding:1rem !default;
$galleriaIndicatorBg:$shade200 !default;
$galleriaIndicatorHoverBg:$shade300 !default;
$galleriaIndicatorBorderRadius:50% !default;
$galleriaIndicatorWidth:1rem !default;
$galleriaIndicatorHeight:1rem !default;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5) !default;
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4) !default;
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6) !default;

$galleriaThumbnailContainerBg:rgba(0,0,0,.9) !default;
$galleriaThumbnailContainerPadding:1rem .25rem !default;
$galleriaThumbnailNavigatorBg:transparent !default;
$galleriaThumbnailNavigatorColor:$shade100 !default;
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaThumbnailNavigatorHoverColor:$shade100 !default;
$galleriaThumbnailNavigatorBorderRadius:50% !default;
$galleriaThumbnailNavigatorWidth:2rem !default;
$galleriaThumbnailNavigatorHeight:2rem !default;

//divider
$dividerHorizontalMargin:1rem 0;
$dividerHorizontalPadding:0 1rem;
$dividerVerticalMargin:0 1rem;
$dividerVerticalPadding:1rem 0;
$dividerSize:1px;
$dividerColor:$shade300;

//avatar
$avatarBg:$shade300;
$avatarTextColor:$textColor;

//chip
$chipBg:$shade300;
$chipTextColor:$textColor;
$chipBorderRadius: 16px;

//scrollTop
$scrollTopBg:rgba(0,0,0,0.7);
$scrollTopHoverBg:rgba(0,0,0,0.8);
$scrollTopWidth:3rem;
$scrollTopHeight:3rem;
$scrollTopBorderRadius:50%;
$scrollTopFontSize:1.5rem;
$scrollTopTextColor:$shade100;

//skeleton
$skeletonBg:$shade200;
$skeletonAnimationBg:rgba(255,255,255,0.4);

//splitter
$splitterGutterBg:$shade100;
$splitterGutterHandleBg:$shade300;

:root {
    --surface-a:#{$shade000};
    --surface-b:#{$shade100};
    --surface-c:#{$shade200};
    --surface-d:#{$shade300};
    --surface-e:#{$shade000};
    --surface-f:#{$shade000};
    --text-color:#{$shade700};
    --text-color-secondary:#{$shade600};
    --primary-color:#{$primaryColor};
    --primary-color-text:#{$primaryTextColor};
    --font-family:#{$fontFamily};
    --surface-0: #ffffff;
    --surface-50: #FAFAFA;
    --surface-100: #F5F5F5;
    --surface-200: #EEEEEE;
    --surface-300: #E0E0E0;
    --surface-400: #BDBDBD;
    --surface-500: #9E9E9E;
    --surface-600: #757575;
    --surface-700: #616161;
    --surface-800: #424242;
    --surface-900: #212121;
}

</code></pre>
</div>

                <h4>Menu Modes</h4>
				<p>Menu has 3 modes, static, overlay and slim. Layout container element in App.vue is used to define which mode to use by adding specific classes. List below indicates the style classes for each mode.</p>
				<ul>
					<li>Static: "layout-wrapper layout-static"</li>
					<li>Overlay: "layout-wrapper layout-overlay"</li>
					<li>Slim: "layout-wrapper layout-slim"</li>
				</ul>

				<p>For example to create a horizontal menu, the div element should be in following form;</p>
<pre v-code><code>
&lt;div class="layout-wrapper layout-static"&gt;

</code></pre>

                <h4>Menu Themes</h4>
				<p>In addition to layout options, menu offer themes when the general color scheme is light. Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode. Available options for the menu themes are the following;</p>
				<ul>
					<li>white</li>
					<li>darkgray</li>
					<li>blue</li>
					<li>bluegray</li>
					<li>brown</li>
					<li>cyan</li>
					<li>green</li>
					<li>indigo</li>
					<li>deeppurple</li>
					<li>orange</li>
					<li>pink</li>
					<li>purple</li>
					<li>teal</li>
				</ul>

                <h4>Grid CSS</h4>
				<p>Diamond uses PrimeVue Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Diamond Layout itself does not depend on PrimeFlex CSS.</p>

				<h4>Customizing Styles</h4>
				<p>It is suggested to add your customizations in the following sass files under the "sass/overrides" folder instead of adding them to the scss files under sass folder to avoid maintenance issues after an update.</p>

				<ul>
					<li><b>_layout_variables</b>: Variables of the layout.</li>
					<li><b>_layout_styles</b>: Styles for the layout.</li>
					<li><b>_theme_variables</b>: Variables of the theme.</li>
					<li><b>_theme_styles</b>: Styles for the theme.</li>
				</ul>

				<h4>Migration Guide</h4>
				<p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
    ::v-deep(pre[class*="language-"]) {
        &:before, &:after {
            display: none !important;
        }
        code {
            border-left: 10px solid var(--surface-d) !important;
            box-shadow: none !important;
            background: var(--surface-b) !important;
            margin: 1em 0;
            color: var(--text-color);
            font-size: 14px;
            .token {
                &.tag,
                &.keyword {
                    color: #2196F3 !important;
                }
                &.attr-name,
                &.attr-string {
                    color: #2196F3 !important;
                }
                &.attr-value {
                    color: #4CAF50 !important;
                }
                &.punctuation {
                    color: var(--text-color);
                }
                &.operator,
                &.string {
                    background: transparent;
                }
            }
        }
    }
    li {
        line-height: 1.5;
    }
</style>
