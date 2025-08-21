type PopupInstance = { open: () => void };

const registry: Record<string, PopupInstance | undefined> = {};

export function registerPopup(name: string, instance: PopupInstance) {
    registry[name] = instance;
}

export function getPopup(name: string): PopupInstance | undefined {
    return registry[name];
}
