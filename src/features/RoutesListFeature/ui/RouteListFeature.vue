<script setup lang="ts">
import Route from "./Route/Route.vue";
import RouteSkeleton from "./Route/RouteSkeleton.vue";
import RoutesNotFound from "./Route/RoutesNotFound.vue";
</script>

<template>
    <div v-if="isLoading || !isDeparturesLoaded" class="[&>*+*]:mt-10">
        <RouteSkeleton />
        <RouteSkeleton />
    </div>
    <div v-else-if="routes.length != 0" class="[&>*+*]:mt-10">
        <Route v-for="route in routes" :route="route" />
    </div>
    <RoutesNotFound
        v-else
        :nextDate="nextDate"
        @clicked="
            () => {
                if (nextDate) {
                    researchRoutes(nextDate);
                }
            }
        " />
</template>

<script lang="ts">
import { defineComponent, handleError } from "vue";
import { getRoutes } from "@/shared/api/API/routes/routes";
import type { RouteType } from "@/shared/api/API/routes/types";
import type { PropType } from "vue";
import type { RouterRoutesType } from "@/app/router/types/RouterRoutesType.ts";
import {
    Types as DeparturesEntityTypes,
    Api as DeparturesEntityApi,
} from "@/entities/DeparturesEntity";
import { watch } from "vue";
import { format } from "date-fns";
import {
    createRouterRoutesType,
    toRouteParams,
} from "@/app/router/types/RouterRoutesType.ts";

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
            nextDate: undefined as Date | undefined,
            isLoading: true,
            isDeparturesLoaded: false,
            departuresStore: DeparturesEntityApi.getStore(),
        };
    },
    created() {
        this.init(this.searchParams);
    },
    methods: {
        async init(searchParams: RouterRoutesType) {
            try {
                this.isDeparturesLoaded =
                    DeparturesEntityApi.getAllDepartures().length !== 0;

                getRoutes(
                    searchParams.cityDepartureId,
                    searchParams.cityArrivalId,
                    searchParams.date,
                    searchParams.person
                ).then((data) => {
                    if (!data || data instanceof Date) {
                        this.nextDate = data;
                    } else if (data) {
                        this.routes = data;
                    }
                    this.isLoading = false;
                });
            } catch (error) {
                console.error("Error fetching routes:", error);
            }
        },
        searchRoutes(date: Date) {},
        researchRoutes(date: Date) {
            this.$router.push({
                name: "routes",
                params: toRouteParams(
                    createRouterRoutesType(
                        this.searchParams.cityDepartureId,
                        this.searchParams.cityArrivalId,
                        date,
                        this.searchParams.person
                    )
                ),
            });
            this.isLoading = true;
            this.searchRoutes(date);
        },
    },
    watch: {
        "departuresStore.departures": {
            handler() {
                this.isDeparturesLoaded = true;
            },
        },
        searchParams(newVal) {
            this.isLoading = true;
            this.isDeparturesLoaded = false;
            this.routes = [];
            this.nextDate = new Date();
            this.init(newVal);
        },
    },
});
</script>
