import { computed, type ComputedRef, reactive, watch } from "vue";
import { defineStore } from "pinia";
import {
    createSearchHistoryItem,
    type SearchHistoryItemType,
} from "../types/SearchHistoryItemType";

export interface SearchHistoryStore {
    state: { items: SearchHistoryItemType[] };
    addItem: (item: SearchHistoryItemType) => void;
    removeItem: (id: string) => void;
    clearHistory: () => void;
    getHistory: ComputedRef<SearchHistoryItemType[]>;
}

export const useSearchHistoryStore = defineStore(
    "searchHistory",
    (): SearchHistoryStore => {
        const stored: SearchHistoryItemType[] = JSON.parse(
            localStorage.getItem("searchHistory") || "[]"
        );

        const state: { items: SearchHistoryItemType[] } = reactive({
            items: stored,
        });

        watch(
            () => state.items,
            (newVal) => {
                localStorage.setItem("searchHistory", JSON.stringify(newVal));
            },
            { deep: true }
        );

        const addItem = (item: SearchHistoryItemType) => {
            state.items.push(item);
        };

        const removeItem = (id: string) => {
            state.items = state.items.filter((item) => item.id !== id);
        };

        const clearHistory = () => {
            state.items = [];
        };

        const getHistory = computed(() => state.items);

        return {
            state,
            addItem,
            removeItem,
            clearHistory,
            getHistory,
        };
    }
);
