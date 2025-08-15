export type RadioOptionValueType = string | number;

export interface RadioOptionType {
    label: string;
    value: RadioOptionValueType;
}

export function radioOption(value: RadioOptionValueType, label: string): RadioOptionType {
    return {value, label};
}