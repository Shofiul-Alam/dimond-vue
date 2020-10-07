/*eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "./pages/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "dashboard",
      exact: true,
      component: () => import("./components/Dashboard.vue")
    },
    {
      path: "/uikit/button",
      name: "ButtonDemo",
      component: () => import("./components/ButtonDemo.vue")
    },
    {
      path: "/uikit/charts",
      name: "ChartsDemo",
      component: () => import("./components/ChartsDemo.vue")
    },

    {
      path: "/uikit/file",
      name: "FileDemo",
      component: () => import("./components/FileDemo.vue")
    },
    {
      path: "/uikit/formlayout",
      name: "FormLayoutDemo",
      component: () => import("./components/FormLayoutDemo.vue")
    },
    {
      path: "/uikit/input",
      name: "InputDemo",
      component: () => import("./components/InputDemo.vue")
    },
    {
      path: "/uikit/list",
      name: "ListDemo",
      component: () => import("./components/ListDemo.vue")
    },
    {
      path: "/uikit/menu",
      name: "MenusDemo",
      component: () => import("./components/MenusDemo.vue")
    },
    {
      path: "/uikit/message",
      name: "MessagesDemo",
      component: () => import("./components/MessagesDemo.vue")
    },
    {
      path: "/uikit/misc",
      name: "MiscDemo",
      component: () => import("./components/MiscDemo.vue")
    },
    {
      path: "/uikit/overlay",
      name: "OverlaysDemo",
      component: () => import("./components/OverlaysDemo.vue")
    },
    {
      path: "/uikit/panel",
      name: "PanelsDemo",
      component: () => import("./components/PanelsDemo.vue")
    },
    {
      path: "/uikit/table",
      name: "TableDemo",
      component: () => import("./components/TableDemo.vue")
    },
    {
      path: "/uikit/tree",
      name: "TreeDemo",
      component: () => import("./components/TreeDemo.vue")
    },
    {
      path: "/uikit/media",
      name: "MediaDemo",
      component: () => import("./components/MediaDemo.vue")
    },
    {
      path: "/documentation",
      name: "Documentation",
      component: () => import("./components/Documentation.vue")
    },
    {
      path: "/pages/empty",
      name: "EmptyDemo",
      component: () => import("./components/EmptyDemo.vue")
    },
    {
      path: "/pages/calendar",
      name: "Calendar",
      component: () => import("./pages/Calendar.vue")
    },
    {
      path: "/pages/crud",
      name: "Crud",
      component: () => import("./pages/Crud.vue")
    },
    {
      path: "/pages/help",
      name: "Help",
      component: () => import("./pages/Help.vue")
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      component: () => import("./pages/Invoice.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/Login.vue")
    },
    {
      path: "/access",
      name: "Access",
      component: () => import("./pages/Access.vue")
    },
    {
      path: "/notfound",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/error",
      name: "Error",
      component: () => import("./pages/Error.vue")
    },
    {
      path: "/utilities/display",
      name: "Display",
      component: () => import("./utilities/Display.vue")
    },
    {
      path: "/utilities/elevation",
      name: "Elevation",
      component: () => import("./utilities/Elevation.vue")
    },
    {
      path: "/utilities/flexbox",
      name: "Flexbox",
      component: () => import("./utilities/Flexbox.vue")
    },
    {
      path: "/utilities/icons",
      name: "Icons",
      component: () => import("./utilities/Icons.vue")
    },
    {
      path: "/utilities/text",
      name: "Text",
      component: () => import("./utilities/Text.vue")
    },
    {
      path: "/utilities/widgets",
      name: "Widgets",
      component: () => import("./utilities/Widgets.vue")
    },
    {
      path: "/utilities/grid",
      name: "Grid",
      component: () => import("./utilities/Grid.vue")
    },
    {
      path: "/utilities/spacing",
      name: "Spacing",
      component: () => import("./utilities/Spacing.vue")
    },
    {
      path: "/utilities/typography",
      name: "Typography",
      component: () => import("./utilities/Typography.vue")
    },
    {
      path: "*",
      redirect: NotFound
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
