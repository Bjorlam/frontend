<script setup lang="ts">
import Route from "./Route/Route.vue";
import RouteSkeleton from "./Route/RouteSkeleton.vue";
</script>

<template>
    <div v-if="isLoading || !isDeparturesLoaded" class="[&>*+*]:mt-10">
        <RouteSkeleton />
        <RouteSkeleton />
    </div>
    <div v-else class="[&>*+*]:mt-10">
        <Route v-for="route in routes" :route="route" />
    </div>
</template>

<script lang="ts">
import { defineComponent, handleError } from "vue";
import { getRoutes } from "@/shared/api/API/routes/routes";
import type { RouteType } from "@/shared/api/API/routes/types";
import type { PropType } from "vue";
import type { RouterRoutesType } from "@/app/router/types/RouterRoutesType.ts";
import { Types as DeparturesEntityTypes, Api as DeparturesEntityApi } from "@/entities/DeparturesEntity";
import { watch } from "vue";

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
            isDeparturesLoaded: false,
            departuresStore: DeparturesEntityApi.getStore(),
        };
    },
    created() {
        try {
            this.isDeparturesLoaded = DeparturesEntityApi.getAllDepartures().length !== 0;

            getRoutes(this.searchParams.cityDepartureId, this.searchParams.cityArrivalId, this.searchParams.date, this.searchParams.person).then((data) => {
                this.routes = data;
                this.isLoading = false;
            });
        } catch (error) {
            console.error("Error fetching routes:", error);
        }
    },
    watch: {
        "departuresStore.departures": {
            handler() {
                this.isDeparturesLoaded = true;
            },
        },
    },
});
</script>
