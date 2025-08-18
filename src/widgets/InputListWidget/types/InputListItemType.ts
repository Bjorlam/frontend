export interface InputListItemType {
    label: string;
    description?: string | null;
}

export function createInputListItemType(label: string, description?: string | null) {
    return {
        label: label,
        description: description,
    };
}
