export interface PopupTypes {
    error: import("../variants/ErrorPopup/types/PopupWidgetErrorPopupType").ErrorPopupConfig;
}

export abstract class BasePopup<T extends keyof PopupTypes> {
    protected config!: PopupTypes[T];

    init(config: PopupTypes[T]): this {
        this.config = config;
        return this;
    }

    abstract show(): void;
}
