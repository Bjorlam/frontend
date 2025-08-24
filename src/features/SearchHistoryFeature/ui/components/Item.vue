<script setup lang="ts">
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
import { SecondaryButton } from "@/shared/ui/Button";
import ArrowRightIcon from "vue-material-design-icons/ArrowRight.vue";
import DeleteOutlineIcon from "vue-material-design-icons/DeleteOutline.vue";
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col">
        <div class="flex justify-between items-center font-medium text-lg">
            <div>{{ item.cityDepartureName }}</div>
            <div class="flex items-center w-1/6 justify-center ml-2">
                <div class="border-t-2 w-full mr-[-14px]"></div>
                <ChevronRightIcon />
            </div>
            <div class="text-right">{{ item.cityArrivalName }}</div>
        </div>
        <div
            class="flex space-x-3 font-medium mt-3 *:flex *:space-x-1 *:items-center [&>*>div]:mb-[-3px]">
            <div>
                <AccountOutlineIcon />
                <div>
                    {{ item.person }} Пассажир{{ item.person !== 1 ? "а" : "" }}
                </div>
            </div>
        </div>
        <div class="w-full mt-2 flex space-x-2">
            <SecondaryButton
                @click="removeItem(item.id)"
                class="min-h-fit h-fit !p-1 !border-error opacity-60">
                <DeleteOutlineIcon class="**:fill-error" />
            </SecondaryButton>
            <SecondaryButton
                class="w-full min-h-fit h-fit !py-1"
                @click="openRoutesPage">
                <div class="flex w-full justify-center">
                    <div class="w-full ml-6">Повторить</div>
                    <ArrowRightIcon class="**:fill-secondary-300" />
                </div>
            </SecondaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import {
    Types as SearchHistoryEntityTypes,
    Api as SearchHistoryEntityApi,
} from "@/entities/SearchHistoryEntity";

import {
    createRouterRoutesType,
    toRouteParams,
} from "@/app/router/types/RouterRoutesType.ts";

export default defineComponent({
    props: {
        item: {
            required: true,
            type: Object as PropType<SearchHistoryEntityTypes.SearchHistoryItemType>,
        },
    },
    methods: {
        removeItem(id: string) {
            SearchHistoryEntityApi.removeItem(id);
        },
        openRoutesPage() {
            this.$router.push({
                name: "routes",
                params: toRouteParams(
                    createRouterRoutesType(
                        this.item.cityDepartureId,
                        this.item.cityArrivalId,
                        new Date(),
                        this.item.person
                    )
                ),
            });
        },
    },
});
</script>
