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
                <InputListWidget
                    placeholder="Ростов-На-Дону"
                    v-model="localCityDepartureName"
                    label="Откуда"
                    :items="departureItems" />
                <InputListWidget
                    placeholder="Краснодар"
                    :disabled="Boolean(localCityDepartureName == '')"
                    v-model="localCityArrivalName"
                    label="Куда"
                    :items="arrivalItems" />
                <div>
                    <DefaultRadioGroup
                        :options="[
                            radioOption(1, 'Один'),
                            radioOption(2, 'Два'),
                            radioOption(3, 'Три'),
                            radioOption(4, 'Четыре'),
                        ]"
                        v-model="localPerson"
                        >Пассажиры
                    </DefaultRadioGroup>
                </div>
                <PrimaryInput :placeholder="localDate" v-model="localDate"
                    >Дата</PrimaryInput
                >
            </div>
            <PrimaryButton class="mt-4" @click="openRoutesPage"
                >Найти рейсы
            </PrimaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import {
    createRouterRoutesType,
    toRouteParams,
} from "@/app/router/types/RouterRoutesType.ts";
import { format, parse } from "date-fns";
import InputListWidget from "@/widgets/InputListWidget/ui/InputListWidget.vue";
import type { InputListItemType } from "@/widgets/InputListWidget/types/InputListItemType";
import {
    Api as DeparturesEntityApi,
    Types as DeparturesEntityTypes,
} from "@/entities/DeparturesEntity";
import { createInputListItemType } from "@/widgets/InputListWidget/types/InputListItemType";
import type { ArrivalType } from "@/entities/ArrivalsEntity/types/ArrivalType";
import { getArrivals } from "@/shared/api/API/arrivals";
import { Api as ArrivalsEntityApi } from "@/entities/ArrivalsEntity";

export default defineComponent({
    props: {
        cityDepartureName: {
            type: String as PropType<string>,
            required: false,
        },
        cityArrivalName: {
            type: String as PropType<string>,
            required: false,
        },
        person: {
            type: Number as PropType<number>,
            required: false,
        },
        date: {
            type: Date as PropType<Date>,
            required: false,
        },
    },
    data() {
        return {
            localPerson: !this.person
                ? 1
                : this.person > 4 || this.person < 1
                ? 1
                : this.person,
            localCityDepartureName: this.cityDepartureName ?? "",
            localCityArrivalName: this.cityArrivalName ?? "",
            localDate: !this.date
                ? format(new Date(), "dd.MM.yyyy")
                : format(this.date, "dd.MM.yyyy"),

            departureItems: [] as InputListItemType[],
            arrivalItems: [] as InputListItemType[],

            departuresStore: DeparturesEntityApi.getStore(),
        };
    },
    async created() {
        DeparturesEntityApi.getLoadAllDepartures().then(() => {
            this.setDepartureItems();
            if (
                this.$route.query.cityDepartureName &&
                this.$route.query.cityArrivalName
            ) {
                ArrivalsEntityApi.getLoadAllArrivals(
                    Number(
                        DeparturesEntityApi.getDepartureByName(
                            String(this.$route.query.cityDepartureName)
                        )?.cityID
                    )
                ).then(() => {
                    this.setArrivalItems();
                });
            }
        });
    },
    methods: {
        openRoutesPage() {
            this.$router.push({
                name: "routes",
                params: toRouteParams(
                    createRouterRoutesType(
                        Number(
                            DeparturesEntityApi.getDepartureByName(
                                this.localCityDepartureName
                            )?.cityID
                        ),
                        Number(
                            ArrivalsEntityApi.getArrivalByName(
                                this.localCityArrivalName
                            )?.cityID
                        ),
                        parse(this.localDate, "dd.MM.yyyy", new Date()),
                        this.localPerson
                    )
                ),
            });
        },
        setDepartureItems() {
            this.departureItems = DeparturesEntityApi.getAllDepartures().map(
                (item) => {
                    const parts = [item.regionName, item.countryName]
                        .map((v) => (v && v.toLowerCase() !== "null" ? v : ""))
                        .filter(Boolean) as string[];
                    const description = parts.length ? parts.join(", ") : null;
                    return createInputListItemType(item.name, description);
                }
            );
        },
        setArrivalItems() {
            this.arrivalItems = ArrivalsEntityApi.getAllArrivals().map(
                (item) => {
                    const parts = [item.regionName, item.countryName]
                        .map((v) => (v && v.toLowerCase() !== "null" ? v : ""))
                        .filter(Boolean) as string[];
                    const description = parts.length ? parts.join(", ") : null;
                    return createInputListItemType(item.name, description);
                }
            );
        },
    },
    watch: {
        localCityDepartureName(cityDepartureName: string) {
            this.localCityArrivalName = "";
            ArrivalsEntityApi.getLoadAllArrivals(
                Number(
                    DeparturesEntityApi.getDepartureByName(cityDepartureName)
                        ?.cityID
                )
            ).then(() => {
                this.setArrivalItems();
            });
        },
    },
});
</script>
