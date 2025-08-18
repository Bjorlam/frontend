<script setup lang="ts">
import SearchInfo from "./SearchInfo/SearchInfo.vue";
import SearchInfoSkeleton from "./SearchInfo/SearchInfoSkeleton.vue";
</script>
<template>
    <SearchInfoSkeleton v-if="isLoading" />
    <SearchInfo v-else />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { Types as DeparturesEntityTypes, Api as DeparturesEntityApi } from "@/entities/DeparturesEntity";
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
            departureCity: "",
            arrivalCity: "",
            person: 0,
            date: "",
            isLoading: true,
        };
    },
    async created() {
        let departures: DeparturesEntityTypes.DepartureType[] = DeparturesEntityApi.getAllDepartures();

        while (departures.length === 0) {
            departures = DeparturesEntityApi.getAllDepartures();
            if (departures.length === 0) {
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }

        this.departureCity = departures.find((item) => item.cityID === this.searchParams.cityDepartureId)?.name ?? "";
        this.arrivalCity = departures.find((item) => item.cityID === this.searchParams.cityArrivalId)?.name ?? "";
        this.person = this.searchParams.person;
        this.date = this.formatDate(this.searchParams.date);

        this.isLoading = false;
    },
    methods: {
        formatDate(date: Date): string {
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        },
    },
});
</script>
