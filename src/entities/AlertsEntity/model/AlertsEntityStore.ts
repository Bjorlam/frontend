import {computed, type ComputedRef, reactive} from "vue";
import {defineStore} from "pinia";
import type {AlertType} from "../types/AlertType.ts";

export interface Alert extends AlertType {
    id: string;
}

export interface AlertsStore {
    state: { alerts: Alert[] };
    addAlert: (alert: AlertType) => void;
    removeAlert: (id: string) => void;
    clearAlerts: () => void;
    getAlerts: ComputedRef<Alert[]>;
}

function generateId(): string {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

export const useAlertsStore = defineStore("alerts", (): AlertsStore => {
    const state: { alerts: Alert[] } = reactive({alerts: []});

    const addAlert = (alert: AlertType) => {
        const newAlert: Alert = {...alert, id: generateId()};
        state.alerts.push(newAlert);
    };

    const removeAlert = (id: string) => {
        const index = state.alerts.findIndex(a => a.id === id);
        if (index !== -1) state.alerts.splice(index, 1);
    };

    const clearAlerts = () => {
        state.alerts.splice(0, state.alerts.length);
    };

    const getAlerts = computed(() => state.alerts);

    return {state, addAlert, removeAlert, clearAlerts, getAlerts};
});
