<script setup lang="ts">
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import ChevronUpIcon from "vue-material-design-icons/ChevronUp.vue";
import TallyMark1Icon from "vue-material-design-icons/TallyMark1.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
import TagOutlineIcon from "vue-material-design-icons/TagOutline.vue";
import CurrencyRubIcon from "vue-material-design-icons/CurrencyRub.vue";

import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col [&>*+*]:mt-5">
        <div class="w-full flex items-center">
            <div class="text-4xl font-semibold">
                {{ formatTime(route.depDateTime) }}
            </div>
            <div class="flex-1 items-center flex">
                <TallyMark1Icon />
                <div class="border-t-2 flex-1 mx-4 ml-[-12px]"></div>
            </div>

            <div class="font-medium">
                {{
                    route.tripTime
                        .split(":")
                        .map((v, i) => (i === 0 ? +v + "ч" : +v + "м"))
                        .join(" ")
                }}
            </div>

            <div class="flex-1 items-center flex">
                <div class="border-t-2 flex-1 mx-4 mr-[-14px]"></div>
                <ChevronRightIcon />
            </div>

            <div class="text-4xl font-semibold">
                {{ formatTime(route.arrDateTime) }}
            </div>
        </div>

        <div v-if="showMore" class="w-full flex justify-between items-center !mt-2 space-x-2 **:text-text-200">
            <div>
                {{ formatDate(route.depDateTime) }}
            </div>

            <div>
                {{ formatDate(route.arrDateTime) }}
            </div>
        </div>

        <div class="w-full flex justify-between items-center !mt-2 space-x-2">
            <div>
                {{ route.stationDepName }}
            </div>

            <div>
                {{ route.stationArrName }}
            </div>
        </div>
        <div class="flex justify-between">
            <div class="items-end flex space-x-3 *:flex *:space-x-1 *:items-center *:font-medium [&>*>div]:mb-[-3px]">
                <div>
                    <AccountOutlineIcon />
                    <div>{{ route.places }} Мест</div>
                </div>
                <div v-if="!route.isPrintTicket">
                    <TagOutlineIcon />
                    <div>Можно не печатать</div>
                </div>
            </div>
            <div class="flex items-center *:text-3xl *:font-medium">
                <div>{{ route.cost }}</div>
                <div class="ml-1">₽</div>
            </div>
        </div>
        <div class="flex space-x-2">
            <PrimaryButton class="w-full">Выбрать</PrimaryButton>
            <SecondaryButton
                class="border-none outline-2 outline-secondary-100 space-x-1"
                @click="
                    () => {
                        showMore = !showMore;
                    }
                ">
                <div>{{ showMore ? "Меньше" : "Больше" }}</div>
                <ChevronUpIcon v-if="showMore" />
                <ChevronDownIcon v-else />
            </SecondaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { RouteType } from "@/shared/api/API/routes/types";

export default defineComponent({
    props: {
        route: {
            required: true,
            type: Object as PropType<RouteType>,
        },
    },
    data() {
        return {
            showMore: false,
        };
    },
    methods: {
        formatTime(date: Date): string {
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            return `${hours}:${minutes}`;
        },

        formatDate(date: Date): string {
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        },
    },
});
</script>
