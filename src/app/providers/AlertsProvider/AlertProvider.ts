import {Api as AlertsApi, Types} from "@/entities/AlertsEntity"

export async function useAlertProvider(): Promise<void> {
    createDefaultAlert()
}

function createDefaultAlert(): void {
    AlertsApi.addAlert(Types.createAlert(
        "info",
        "Продажа билетов",
        "Приобретение билетов возможно не позднее чем за 2 часа до отправления автобуса.",
    ))
}