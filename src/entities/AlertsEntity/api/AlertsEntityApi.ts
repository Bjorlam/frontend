import {useAlertsStore} from "../model/AlertsEntityStore.ts";
import type {AlertType} from "../types/AlertType.ts";

export function addAlert(alert: AlertType): void {
    useAlertsStore().addAlert(alert);
}

export function removeAlert(id: string): void {
    useAlertsStore().removeAlert(id);
}

export function clearAlerts(): void {
    useAlertsStore().clearAlerts();
}

export function getAlertsStore() {
    return useAlertsStore();
}
