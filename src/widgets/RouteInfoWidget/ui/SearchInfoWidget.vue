<script setup lang="ts">
import SearchInfo from "./SearchInfo/SearchInfo.vue";
import SearchInfoSkeleton from "./SearchInfo/SearchInfoSkeleton.vue";
</script>
<template>
    <SearchInfoSkeleton v-if="!isDeparturesLoaded || !isArrivalsLoaded" />
    <SearchInfo
        :searchParams="searchParams"
        v-else
        :cityDepartureName="cityDepartureName"
        :cityArrivalName="cityArrivalName"
        :person="person"
        :date="date" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { Api as DeparturesEntityApi } from "@/entities/DeparturesEntity";
import { Api as ArrivalsEntityApi } from "@/entities/ArrivalsEntity";
import type { RouterRoutesType } from "@/app/router/types/RouterRoutesType";
import { Api as PopupWidgetApi } from "@/widgets/PopupWidget";

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
        this.init(this.searchParams);
    },
    methods: {
        async init(searchParams: RouterRoutesType) {
            this.person = searchParams.person;
            this.date = searchParams.date;

            DeparturesEntityApi.getLoadAllDepartures().then(() =>
                this.setDepatures(searchParams)
            );
            ArrivalsEntityApi.getLoadAllArrivals(
                searchParams.cityDepartureId
            ).then(() => this.setArrivals(searchParams));
        },
        setDepatures(searchParams: RouterRoutesType) {
            this.cityDepartureName =
                DeparturesEntityApi.getDepartureByCityID(
                    searchParams.cityDepartureId
                )?.name ?? "";
            this.isDeparturesLoaded = true;
        },
        setArrivals(searchParams: RouterRoutesType): void {
            this.cityArrivalName =
                ArrivalsEntityApi.getArrivalByCityID(searchParams.cityArrivalId)
                    ?.name ?? "";
            this.isArrivalsLoaded = true;
        },
    },
    watch: {
        searchParams(newVal) {
            this.isArrivalsLoaded = false;
            this.isDeparturesLoaded = false;
            this.init(newVal);
        },
    },
});
</script>
