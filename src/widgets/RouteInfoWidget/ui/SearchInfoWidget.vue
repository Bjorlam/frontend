<script setup lang="ts">
import SearchInfo from "./SearchInfo/SearchInfo.vue";
import SearchInfoSkeleton from "./SearchInfo/SearchInfoSkeleton.vue";
</script>
<template>
    <SearchInfoSkeleton v-if="!isDeparturesLoaded || !isArrivalsLoaded" />
    <SearchInfo v-else :cityDepartureName="cityDepartureName" :cityArrivalName="cityArrivalName" :person="person" :date="date" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { Types as DeparturesEntityTypes, Api as DeparturesEntityApi } from "@/entities/DeparturesEntity";
import { Api as ArrivalsEntityApi } from "@/entities/ArrivalsEntity";
import { getArrivals as apiGetArrivals } from "@/shared/api/API/arrivals";
import type { RouterRoutesType } from "@/app/router/types/RouterRoutesType";

export default defineComponent({
    props: {
        searchParams: {
            type: Object as PropType<RouterRoutesType>,
            required: true,
        },
    },
    data() {
        return {
            cityDepartureName: null as unknown as string,
            cityArrivalName: null as unknown as string,
            person: null as unknown as number,
            date: null as unknown as Date,

            departuresStore: DeparturesEntityApi.getStore(),
            isDeparturesLoaded: false,
            isArrivalsLoaded: false,
        };
    },
    async created() {
        this.person = this.searchParams.person;
        this.date = this.searchParams.date;

        let departures: DeparturesEntityTypes.DepartureType[] = DeparturesEntityApi.getAllDepartures();

        if (departures.length !== 0) {
            this.setDepatures();
        }

        this.setArrivals();
    },
    methods: {
        setDepatures() {
            this.cityDepartureName = DeparturesEntityApi.getDepartureByCityID(this.searchParams.cityDepartureId)?.name ?? "";
            this.isDeparturesLoaded = true;
        },
        setArrivals(): void {
            if (ArrivalsEntityApi.getAllArrivals().length !== 0) {
                this.cityArrivalName = ArrivalsEntityApi.getArrivalByCityID(this.searchParams.cityArrivalId)?.name ?? "";
                this.isArrivalsLoaded = true;
            }

            apiGetArrivals(this.searchParams.cityDepartureId)
                .then((arrivals) => {
                    ArrivalsEntityApi.setArrivals(arrivals);
                    this.cityArrivalName = ArrivalsEntityApi.getArrivalByCityID(this.searchParams.cityArrivalId)?.name ?? "";
                    this.isArrivalsLoaded = true;
                })
                .catch((error) => {
                    console.error("Error fetching arrivals:", error);
                });
        },
    },
    watch: {
        "departuresStore.departures": {
            handler() {
                this.setDepatures();
            },
        },
    },
});
</script>
