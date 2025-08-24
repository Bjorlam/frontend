import { useSearchHistoryStore } from "../model/SearchHistoryEntityStore";
import {
    createSearchHistoryItem,
    type SearchHistoryItemType,
} from "../types/SearchHistoryItemType";

export function addItem(item: SearchHistoryItemType): void {
    useSearchHistoryStore().addItem(item);
}

export function removeItem(id: string): void {
    useSearchHistoryStore().removeItem(id);
}

export function getHistory() {
    return useSearchHistoryStore().getHistory;
}

export function clearHistory(): void {
    useSearchHistoryStore().clearHistory();
}

export function getState() {
    return useSearchHistoryStore().state;
}
