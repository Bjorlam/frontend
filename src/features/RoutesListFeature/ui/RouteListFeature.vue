<script setup lang="ts">
import Route from "./Route/Route.vue";
import RouteSkeleton from "./Route/RouteSkeleton.vue";
</script>

<template>
    <div v-if="isLoading" class="[&>*+*]:mt-10">
        <RouteSkeleton />
        <RouteSkeleton />
    </div>
    <div v-else class="[&>*+*]:mt-10">
        <Route v-for="route in routes" :route="route" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getRoutes } from "@/shared/api/API/routes/routes";
import type { RouteType } from "@/shared/api/API/routes/types";
import type { PropType } from "vue";
import type { RouterRoutesType } from "@/app/router/types/RouterRoutesType.ts";
import { Types as DeparturesEntityTypes, Api as DeparturesEntityApi } from "@/entities/DeparturesEntity";

export default defineComponent({
    props: {
        searchParams: {
            type: Object as PropType<RouterRoutesType>,
            required: true,
        },
    },
    data() {
        return {
            routes: [] as RouteType[],
            isLoading: true,
        };
    },
    created() {
        try {
            getRoutes(this.searchParams.cityDepartureId, this.searchParams.cityArrivalId, this.searchParams.date, this.searchParams.person).then((data) => {
                this.routes = data;
                let departures: DeparturesEntityTypes.DepartureType[] = DeparturesEntityApi.getAllDepartures();

                while (departures.length === 0) {
                    departures = DeparturesEntityApi.getAllDepartures();
                    if (departures.length === 0) {
                        new Promise((resolve) => setTimeout(resolve, 100));
                    }
                }
                this.isLoading = false;
            });
        } catch (error) {
            console.error("Error fetching routes:", error);
        }
    },
});
</script>
