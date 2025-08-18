<script setup lang="ts">
import { PrimaryButton } from "@/shared/ui/Button";
import PinOutlineIcon from "vue-material-design-icons/PinOutline.vue";
import DefaultRadioGroup, { radioOption } from "@/shared/ui/RadioGroup";
import PrimaryInput from "@/shared/ui/Input";
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl">
        <div class="flex">
            <PinOutlineIcon class="pr-2" />
            <div class="font-bold">Детали поездки</div>
        </div>
        <div class="mt-5 flex w-full flex-col">
            <div class="[&>*+*]:mt-4">
                <PrimaryInput :placeholder="fromCity">Откуда</PrimaryInput>
                <PrimaryInput :placeholder="toCity">Куда</PrimaryInput>

                <div>
                    <DefaultRadioGroup :options="[radioOption(1, 'Один'), radioOption(2, 'Два'), radioOption(3, 'Три'), radioOption(4, 'Четыре')]" v-model="selectedPassengerType">Пассажиры </DefaultRadioGroup>
                </div>
                <PrimaryInput placeholder="15.08.2025" value="15.08.2025">Дата</PrimaryInput>
            </div>
            <PrimaryButton class="mt-4" @click="openRoutesPage">Найти рейсы </PrimaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllDepartures } from "@/entities/DeparturesEntity/api/DeparturesEntityApi.ts";
import type { DepartureType } from "@/entities/DeparturesEntity/types/DepartureType.ts";
import { createRouterRoutesType, toRouteParams } from "@/app/router/types/RouterRoutesType.ts";

export default defineComponent({
    data() {
        return {
            selectedPassengerType: 1,
            fromCity: "Ростов-На-Дону",
            toCity: "Краснодар",
        };
    },
    methods: {
        getRandomCity(departures: DepartureType[]): string {
            if (departures.length === 0) return "";
            const index = Math.floor(Math.random() * departures.length);
            return departures[index].name;
        },
        async setRandomCities() {
            let departures: DepartureType[] = [];

            while (departures.length === 0) {
                departures = getAllDepartures();
                if (departures.length === 0) {
                    await new Promise((resolve) => setTimeout(resolve, 100));
                }
            }

            this.fromCity = this.getRandomCity(departures);
            this.toCity = this.getRandomCity(departures);
        },
        openRoutesPage() {
            this.$router.push({
                name: "routes",
                params: toRouteParams(createRouterRoutesType(123, 123, new Date(), 1)),
            });
        },
    },
    async mounted() {
        await this.setRandomCities();
    },
});
</script>
