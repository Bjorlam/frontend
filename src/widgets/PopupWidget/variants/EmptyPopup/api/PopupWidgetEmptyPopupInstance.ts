import type { PopupTypes } from "../../../types/PopupWidgetBaseType";

type PopupInstance<K extends keyof PopupTypes> = {
    open: (payload: PopupTypes[K]) => void;
};

const registry: Partial<Record<keyof PopupTypes, PopupInstance<any>>> = {};

export function registerPopup<K extends keyof PopupTypes>(
    name: K,
    instance: PopupInstance<K>
) {
    registry[name] = instance;
}

export function getPopup<K extends keyof PopupTypes>(
    name: K
): PopupInstance<K> | undefined {
    return registry[name] as PopupInstance<K> | undefined;
}
