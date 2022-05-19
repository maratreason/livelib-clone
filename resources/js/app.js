import { createApp } from "vue";
require("./bootstrap");
import AppDashboard from "./Dashboard.vue";
import router from "./router/router";

import components from "./components/UI/index";

const app = createApp({
    components: {
        AppDashboard,
    },
});

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(router).mount("#app");
