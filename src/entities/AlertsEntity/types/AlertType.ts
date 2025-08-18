export type AlertTypeType = "success" | "info" | "warning" | "danger";

export interface AlertType {
    type: AlertTypeType;
    title: string;
    message: string;
}

export function createAlert(type: AlertTypeType, title: string, message: string): AlertType {
    return {
        type,
        title,
        message
    }
}