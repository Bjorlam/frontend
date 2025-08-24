<script setup lang="ts">
import Item from "./components/Item.vue";
import { SecondaryButton } from "@/shared/ui/Button";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import ChevronUpIcon from "vue-material-design-icons/ChevronUp.vue";

import HistoryIcon from "vue-material-design-icons/History.vue";
</script>

<template>
    <div class="flex flex-col" v-if="history.length !== 0">
        <div
            class="rounded-xl mb-2 flex justify-between items-center bg-primary-100">
            <div class="flex items-center space-x-4 py-2 px-2">
                <HistoryIcon class="mr-2" />
                <div class="font-semibold mr-auto">История</div>
            </div>
            <SecondaryButton
                @click="opened = !opened"
                class="!p-1 mr-2 min-h-fit h-full border-none flex items-center">
                <div>{{ opened ? "Скрыть" : "Показать" }}</div>
                <ChevronUpIcon v-if="opened" />
                <ChevronDownIcon v-else />
            </SecondaryButton>
        </div>

        <div v-if="opened" class="flex flex-col space-y-5">
            <Item v-for="item in history" :item="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    Api as SearchHistoryEntityApi,
    Types as SearchHistoryEntityTypes,
} from "@/entities/SearchHistoryEntity";

export default defineComponent({
    data() {
        return {
            opened: true,
        };
    },
    computed: {
        history(): SearchHistoryEntityTypes.SearchHistoryItemType[] {
            return SearchHistoryEntityApi.getHistory();
        },
    },
});
</script>
