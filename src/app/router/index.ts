import HomePage from "@/pages/home/ui/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import RoutesPage from "@/pages/routes/ui/RoutesPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/routes/:cityDepartureId/:cityArrivalId/:date/:person",
            name: "routes",
            component: RoutesPage,
            props: true,
        },
    ],
});

export default router;
