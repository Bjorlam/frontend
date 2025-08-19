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

        DeparturesEntityApi.getLoadAllDepartures().then(() => this.setDepatures());
        ArrivalsEntityApi.getLoadAllArrivals(this.searchParams.cityDepartureId).then(() => this.setArrivals());
    },
    methods: {
        setDepatures() {
            this.cityDepartureName = DeparturesEntityApi.getDepartureByCityID(this.searchParams.cityDepartureId)?.name ?? "";
            this.isDeparturesLoaded = true;
        },
        setArrivals(): void {
            this.cityArrivalName = ArrivalsEntityApi.getArrivalByCityID(this.searchParams.cityArrivalId)?.name ?? "";
            this.isArrivalsLoaded = true;
        },
    },
});
</script>
